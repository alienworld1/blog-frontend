import Pages from './pages';

const routes = [
  {
    path: '/',
    element: <Pages.PostList />,
    errorElement: <Pages.Error />,
  },
];

export default routes;
