import KageHome from '../views/pages/kage-home';
import KageDetail from '../views/pages/kage-detail';
import Favorite from '../views/pages/kage-favorite';

const kageRoute = {
  '/': KageHome,
  '/kage-home': KageHome,
  '/detail/:id': KageDetail,
  '/kage-favorite': Favorite,
};

export default kageRoute;
