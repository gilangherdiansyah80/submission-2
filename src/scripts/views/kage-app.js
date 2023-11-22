import HamburgerMenuInitiator from '../utils/hamburger-menu-initiator';
import KageUrlParser from '../routes/kage-url-parser';
import kageRoute from '../routes/kage-routes';

class KageApp {
  constructor({
    hamburger, hamburgerMenu, close, content,
  }) {
    this._hamburger = hamburger;
    this._hamburgerMenu = hamburgerMenu;
    this._close = close;
    this._content = content;

    this._initialAppShell();
  }

  _initialAppShell() {
    HamburgerMenuInitiator.init({
      hamburger: this._hamburger,
      hamburgerMenu: this._hamburgerMenu,
      close: this._close,
    });
  }

  async renderPage() {
    const url = KageUrlParser.parseActiveUrlWithCombiner();
    const page = kageRoute[url];
    this._content.innerHTML = await page.render();
    await page.afterRender();
  }
}

export default KageApp;
