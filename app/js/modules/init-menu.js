const menu = document.querySelector('.main-nav');
const toggleBtn = document.querySelector('.main-nav__toggle');
const body = document.querySelector('body');
const activeClass = 'main-nav--open';
const overflowHidden = 'overflow-hidden'

const openMenu = () => {
  menu.classList.add(activeClass);
  body.classList.add(overflowHidden)
}

const closeMenu = () => {
  menu.classList.remove(activeClass);
  body.classList.remove(overflowHidden)
}

const initMenu = () => {
  window.addEventListener('load', () => {
    if (toggleBtn) {
      toggleBtn.addEventListener('click', (evt) => {
        menu.classList.contains(activeClass) ? closeMenu() : openMenu();
      });

      document.addEventListener('click', (evt) => {
        const target = evt.target;
        if (!target.classList.contains('main-nav__toggle') && !evt.target.classList.contains('main-nav__wrapper')) {
          closeMenu();
        }
      })

      document.addEventListener('keydown', (evt) => {
        if (evt.key === 'Escape') {
          evt.preventDefault();
          closeMenu();
        }
      })
    }
  });
};

export {initMenu};
