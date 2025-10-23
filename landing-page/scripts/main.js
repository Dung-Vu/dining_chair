const header = document.querySelector('[data-header]');
const nav = document.querySelector('[data-nav]');
const menuButton = document.querySelector('[data-menu-button]');
const accordion = document.querySelector('[data-accordion]');

const toggleMenu = (forceState) => {
  const isOpen = forceState ?? !header.classList.contains('is-open');
  if (!header || !nav || !menuButton) return;

  header.classList.toggle('is-open', isOpen);
  menuButton.setAttribute('aria-expanded', isOpen);
};

if (menuButton) {
  menuButton.addEventListener('click', () => toggleMenu());
}

window.addEventListener('resize', () => {
  if (window.innerWidth > 768) {
    toggleMenu(false);
  }
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    toggleMenu(false);
  }
});

if (nav) {
  nav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => toggleMenu(false));
  });
}

if (accordion) {
  accordion.querySelectorAll('details').forEach((item) => {
    item.addEventListener('toggle', () => {
      if (!item.open) return;
      accordion.querySelectorAll('details').forEach((other) => {
        if (other !== item) other.open = false;
      });
    });
  });
}

const yearTarget = document.querySelector('[data-year]');
if (yearTarget) {
  yearTarget.textContent = new Date().getFullYear();
}
