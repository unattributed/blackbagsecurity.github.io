/* Footer-local fragment state; no body or header mutation. */
(() => {
  'use strict';
  const nav = document.querySelector('.ds-footer__nav');
  if (!nav) return;
  const links = [...nav.querySelectorAll('a')];
  const about = links.find(link => new URL(link.href).pathname.endsWith('/about/') && !new URL(link.href).hash);
  const contact = links.find(link => new URL(link.href).hash === '#contact');
  if (!about || !contact || location.pathname !== new URL(about.href).pathname) return;
  const update = () => {
    const atContact = location.hash === '#contact';
    about.removeAttribute('aria-current');
    contact.removeAttribute('aria-current');
    (atContact ? contact : about).setAttribute('aria-current', atContact ? 'location' : 'page');
  };
  update();
  window.addEventListener('hashchange', update);
  window.addEventListener('popstate', update);
  window.addEventListener('pageshow', update);
})();
