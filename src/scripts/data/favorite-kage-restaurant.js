import { openDB } from 'idb';
import KAGE_CONFIG from '../globals/kage-config';

const { DATABASE_NAME, DATABASE_VERSION, OBJECT_STORE_NAME } = KAGE_CONFIG;

const dbPromise = openDB(DATABASE_NAME, DATABASE_VERSION, {
  upgrade(database) {
    database.createObjectStore(OBJECT_STORE_NAME, { keyPath: 'id' });
  },
});

const FavoriteKageRestaurantIdb = {
  async getRestaurant(id) {
    return (await dbPromise).getAll(OBJECT_STORE_NAME, id);
  },
  async getAllRestaurant() {
    return (await dbPromise).getAll(OBJECT_STORE_NAME);
  },
  async putRestaurant(restaurant) {
    return (await dbPromise).put(OBJECT_STORE_NAME, restaurant);
  },
  async deleteRestaurant(id) {
    return (await dbPromise).delete(OBJECT_STORE_NAME, id);
  },
};

export default FavoriteKageRestaurantIdb;
