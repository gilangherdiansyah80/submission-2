import KageSource from '../../data/kage-source';
import { createKageRestaurantItem } from '../templates/kage-creator';

const KageHome = {
  async render() {
    return `
          <div class="kage-container"></div>
        `;
  },

  async afterRender() {
    const kageRestaurants = await KageSource.kageHome();
    const kageContainer = document.querySelector('.kage-container');
    kageRestaurants.forEach((restaurants) => {
      kageContainer.innerHTML += createKageRestaurantItem(restaurants);
    });
  },
};

export default KageHome;
