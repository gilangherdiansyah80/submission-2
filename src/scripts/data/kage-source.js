import KAGE_API_ENDPOINT from '../globals/kage-api-endpoint';

class KageSource {
  static async kageHome() {
    const response = await fetch(KAGE_API_ENDPOINT.KAGE_HOME);
    const responseJson = await response.json();
    return responseJson.restaurants;
  }

  static async kageDetail(id) {
    const response = await fetch(KAGE_API_ENDPOINT.KAGE_DETAIL(id));
    const responseJson = await response.json();
    return responseJson.restaurant;
  }
}

export default KageSource;
