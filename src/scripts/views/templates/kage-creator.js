import KAGE_CONFIG from '../../globals/kage-config';

const createKageRestaurantDetail = (restaurant) => `
<div class="kage-container-detail">
  <h1 class="kage-name_detail" tabindex="0">${restaurant.name}</h1>
  <br>
  <div class='kage-content-detail'>
    <img class="kage-image-detail" src="${KAGE_CONFIG.BASE_IMAGE_URL + restaurant.pictureId}" alt="${restaurant.name}" />
    
    <div class="kage-info">
      <h3>Information</h3>
      <h4>City</h4>
      <p>${restaurant.city}</p>
      <h4>Address</h4>
      <p>${restaurant.address}</p>
      <h4>Rating</h4>
      <p>${restaurant.rating}</p>
      <h4>Categories : </h4>
      <ul>${restaurant.categories.map((category) => `<li>${category.name}</li>`).join('')}</ul>
    </div>
  </div>
  <br>
  <div class="kage-description-detail">
    <h3>Description :</h3>
    <p tabindex="0">${restaurant.description}</p>
  <br>
  <div class="kage-menu">
    <h3>Menus :</h3>
    <div class="kage-menu-container">
      <div class="restaurant_menu_section">
        <h4>Foods</h4>
        <ul class="kage-list">${restaurant.menus.foods.map((food) => `<li>${food.name}</li>`).join('')}</ul>
      </div>
      <div class="kage-menu-section">
        <h4>Drinks</h4>
        <ul class="kage-list">${restaurant.menus.drinks.map((drink) => `<li>${drink.name}</li>`).join('')}</ul>
      </div>
    </div>
  </div>
  <br>
  <div class="kage-customer-reviews">
    <h3>Customer Reviews :</h3>
    <ul class="kage-list">
      ${restaurant.customerReviews.map((review) => `
        <li>
          <p class="date">Dibuat pada, <b>${review.date}</b></p>
          <p><b>${review.name}</b> "${review.review}"</p>
        </li>
        `).join('')}
    </ul>
  </div>
</div>
`;

const createKageRestaurantItem = (restaurant) => `
<div class="kage-card" tabindex="0">
  <div class="kage-image">
    <img src="${restaurant.pictureId ? KAGE_CONFIG.BASE_IMAGE_URL + restaurant.pictureId : 'https://restaurant-api.dicoding.dev/images/medium/<pictureId>'}" alt="${restaurant.title}">
    <p class="kage-city">City :${restaurant.city}</p>
  </div>
  <div class="kage-content">
    <h2 class="kage-title"><a href="/#/detail/${restaurant.id}">${restaurant.name}</a></h2>
    <p class="kage-rating">⭐️<span>${restaurant.rating}</span></p>
    <p class="kage-description">${restaurant.description}</p>
  </div>
`;

const createLikeButtonTemplate = () => `
  <button aria-label="like this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createLikedButtonTemplate = () => `
  <button aria-label="unlike this restaurant" id="likedButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createKageRestaurantItem,
  createKageRestaurantDetail,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
};
