import Home from 'pages/Home';
import CreateTeam from 'pages/CreateTeam/index';
import DetailTeam from 'pages/DetailTeam/index';

export const routes = [
  {
    path: '/',
    page: Home,
    exact: true,
  },
  {
    path: '/team/create',
    page: CreateTeam,
    exact: true,
  },
  {
    path: '/team/detail/:team_id',
    page: DetailTeam,
    exact: true,
  },
];
