const HamburgerMenuInitiator = {
  init({ hamburger, hamburgerMenu, close }) {
    hamburger.addEventListener('click', (event) => {
      this._toggleHamburgerMenu(event, hamburgerMenu);
    });

    close.addEventListener('click', (event) => {
      this._closeHamburgerMenu(event, hamburgerMenu);
    });
  },

  _toggleHamburgerMenu(event, hamburgerMenu) {
    event.stopPropagation();
    hamburgerMenu.classList.toggle('open');
  },

  _closeHamburgerMenu(event, hamburgerMenu) {
    event.stopPropagation();
    hamburgerMenu.classList.remove('open');
  },
};

export default HamburgerMenuInitiator;
