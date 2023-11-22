import FavoriteKageRestaurantIdb from '../../data/favorite-kage-restaurant';
import { createKageRestaurantItem } from '../templates/kage-creator';

const Favorite = {
  async render() {
    return `
      <div class="content">
        <h2 class="content-heading">Your Favorite Restaurant</h2>
        <div id="restaurants" class="restaurants">
 
        </div>
      </div>
    `;
  },

  async afterRender() {
    const restaurants = await FavoriteKageRestaurantIdb.getAllRestaurant();
    const restaurantContainer = document.querySelector('#restaurants');

    restaurants.forEach((restaurant) => {
      restaurantContainer.innerHTML += createKageRestaurantItem(restaurant);
    });
  },
};

export default Favorite;
