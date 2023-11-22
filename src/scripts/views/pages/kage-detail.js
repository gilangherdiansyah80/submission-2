import KageUrlParser from '../../routes/kage-url-parser';
import KageSource from '../../data/kage-source';
import { createKageRestaurantDetail } from '../templates/kage-creator';
import KageLikeButtonInterior from '../../utils/kage-like-button-interior';
import '@fortawesome/fontawesome-free/css/all.css';

const KageDetail = {
  async render() {
    return `
            <div id="kage-detail" class="kage-detail"></div>
            <div id="likeButtonContainer"></div>
        `;
  },

  async afterRender() {
    const url = KageUrlParser.parseActiveUrlWithoutCombiner();
    const restaurant = await KageSource.kageDetail(url.id);
    const kagesContainer = document.querySelector('#kage-detail');

    kagesContainer.innerHTML = createKageRestaurantDetail(restaurant);
    const kageHero = document.querySelector('.hero');
    kageHero.style.display = 'none';
    const titleExplore = document.querySelector('.title-explore');
    titleExplore.style.display = 'none';

    KageLikeButtonInterior.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      restaurant: {
        id: restaurant.id,
        name: restaurant.name,
        city: restaurant.city,
        description: restaurant.description,
        pictureId: restaurant.pictureId,
        rating: restaurant.rating,
      },
    });
  },
};

export default KageDetail;
