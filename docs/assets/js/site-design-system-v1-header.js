/* Header-local scrolling and fragment state; never changes body content or scroll. */
(() => {
  'use strict';
  const nav = document.querySelector('.ds-header .ds-nav');
  if (!nav) return;
  const links = [...nav.querySelectorAll('a')];
  // Native focus scrolling can leave a nearly visible label's outline clipped.
  // Include the focus/underline gutter without moving the document viewport.
  const reveal = link => {
    if (!link || nav.scrollWidth <= nav.clientWidth) return;
    const bounds = nav.getBoundingClientRect();
    const label = link.getBoundingClientRect();
    if (label.right + 6 > bounds.right) nav.scrollLeft += Math.ceil(label.right + 6 - bounds.right);
    else if (label.left - 6 < bounds.left) nav.scrollLeft -= Math.ceil(bounds.left - label.left + 6);
  };
  nav.addEventListener('focusin', event => {
    const link = event.target.closest('a');
    if (link && nav.contains(link)) reveal(link);
  });
  reveal(nav.querySelector('[aria-current]'));
  const about = links.find(link => new URL(link.href).pathname.endsWith('/about/') && !new URL(link.href).hash);
  const contact = links.find(link => new URL(link.href).hash === '#contact');
  if (!about || !contact || location.pathname !== new URL(about.href).pathname) return;
  const update = () => {
    const atContact = location.hash === '#contact';
    about.removeAttribute('aria-current');
    contact.removeAttribute('aria-current');
    (atContact ? contact : about).setAttribute('aria-current', atContact ? 'location' : 'page');
    reveal(atContact ? contact : about);
  };
  update();
  window.addEventListener('hashchange', update);
  window.addEventListener('popstate', update);
  window.addEventListener('pageshow', update);
})();
