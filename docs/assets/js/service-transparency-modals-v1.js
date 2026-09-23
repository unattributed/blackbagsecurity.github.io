/* Shared native dialog controller. No host-specific layout or global event handlers. */
(() => {
  'use strict';
  const dialog = document.querySelector('dialog.bbs-method-modal');
  if (!dialog || dialog.dataset.initialized) return;
  dialog.dataset.initialized = 'true';
  const content = dialog.querySelector('.bbs-method-modal-content');
  const closeButton = dialog.querySelector('.bbs-method-modal-x');
  const triggers = [...document.querySelectorAll('[data-method-modal]')];
  let origin = null;
  let scrollPosition = null;
  let backdropStart = false;
  let locked = false;
  const focusables = () => [...dialog.querySelectorAll('button, a[href], [tabindex="0"]')]
    .filter(element => !element.disabled && element.getClientRects().length);

  function restorePage() {
    if (!locked) return;
    locked = false;
    document.documentElement.classList.remove('bbs-method-modal-open');
    document.body.classList.remove('bbs-method-modal-open');
    if (scrollPosition) window.scrollTo({ ...scrollPosition, behavior: 'instant' });
    if (origin?.isConnected) origin.focus({ preventScroll: true });
    content.replaceChildren();
    delete dialog.dataset.variant;
  }

  function open(trigger) {
    const template = document.getElementById(trigger.dataset.methodModal);
    if (!(template instanceof HTMLTemplateElement)) return;
    origin = trigger;
    content.replaceChildren(template.content.cloneNode(true));
    dialog.dataset.variant = trigger.dataset.methodModal;
    closeButton.setAttribute('aria-label', `Close ${content.querySelector('h2').textContent}`);
    if (!dialog.open) {
      scrollPosition = { top: window.scrollY, left: window.scrollX };
      document.documentElement.classList.add('bbs-method-modal-open');
      document.body.classList.add('bbs-method-modal-open');
      locked = true;
      // showModal puts the dialog in the top layer and makes the rest of the
      // document inert natively, preserving any pre-existing inert attributes.
      dialog.showModal();
    }
    dialog.scrollTop = 0;
    closeButton.focus({ preventScroll: true });
  }

  triggers.forEach(trigger => {
    trigger.setAttribute('aria-haspopup', 'dialog');
    trigger.setAttribute('aria-controls', dialog.id);
    trigger.addEventListener('click', () => open(trigger));
  });
  dialog.addEventListener('click', event => {
    if (event.target.closest('[data-method-close]')) dialog.close();
  });
  dialog.addEventListener('close', () => {
    // A queued close event must not clean up a subsequently reopened dialog.
    if (!dialog.open) restorePage();
  });
  dialog.addEventListener('cancel', event => {
    event.preventDefault();
    dialog.close();
  });
  const outside = event => {
    const rect = dialog.getBoundingClientRect();
    return event.clientX < rect.left || event.clientX > rect.right ||
      event.clientY < rect.top || event.clientY > rect.bottom;
  };
  dialog.addEventListener('pointerdown', event => { backdropStart = event.target === dialog && outside(event); });
  dialog.addEventListener('pointerup', event => {
    if (backdropStart && event.target === dialog && outside(event)) dialog.close();
    backdropStart = false;
  });
  dialog.addEventListener('keydown', event => {
    if (event.key !== 'Tab') return;
    const elements = focusables();
    const first = elements[0], last = elements[elements.length - 1];
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault(); last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault(); first.focus();
    }
  });
  window.addEventListener('pagehide', () => { if (dialog.open) dialog.close(); restorePage(); });
})();
