import Home from 'pages/Home';
import Register from 'pages/Register';

export const routes = [
  {
    path: '/',
    page: Home,
    exact: true,
  },
  {
    path: '/register',
    page: Register,
    exact: true,
  },
];
