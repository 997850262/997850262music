<<<<<<< HEAD
import AppWrapper from './Container/AppWrapper';
import Music from './Container/Music';
import SearchMusic from './Container/SearchMusic';
import UploadMusic from './Container/UploadMusic';

const routeConfig = {
  path: '/',
  component: AppWrapper,
  indexRoute: { component: Music },
  childRoutes: [
    { path: 'music', component: Music },
    { path: 'searchmusic', component: SearchMusic },
    { path: 'uploadmusic', component: UploadMusic }
  ]
};

export default routeConfig;
=======
import AppWrapper from './Container/AppWrapper';
import Music from './Container/Music';
import SearchMusic from './Container/SearchMusic';
import UploadMusic from './Container/UploadMusic';

const routeConfig = {
  path: '/',
  component: AppWrapper,
  indexRoute: { component: Music },
  childRoutes: [
    { path: 'music', component: Music },
    { path: 'searchmusic', component: SearchMusic },
    { path: 'uploadmusic', component: UploadMusic }
  ]
};

export default routeConfig;
>>>>>>> 0c6edde90f520a769c2599bb8280a3155721c8fd
