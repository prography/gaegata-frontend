import Home from 'pages/Home';
import CreateTeam from 'pages/CreateTeam/index';
import DetailTeam from 'pages/DetailTeam/index';
import MyPage from 'pages/MyPage/index';

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
  {
    path: '/mypage',
    page: MyPage,
    exact: true,
  },
];
