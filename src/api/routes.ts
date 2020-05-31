import Home from 'pages/Home';
import CreateTeam from 'pages/CreateTeam/index';

export const routes = [
  {
    path: '/',
    page: Home,
    exact: true,
  },
  {
    path: '/createteam',
    page: CreateTeam,
    exact: true,
  },
];
