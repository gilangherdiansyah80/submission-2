import KAGE_CONFIG from './kage-config';

const KAGE_API_ENDPOINT = {
  KAGE_HOME: `${KAGE_CONFIG.BASE_URL}/list`,
  KAGE_DETAIL: (id) => `${KAGE_CONFIG.BASE_URL}/detail/${id}`,
};

export default KAGE_API_ENDPOINT;
