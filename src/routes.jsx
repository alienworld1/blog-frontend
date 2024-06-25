import Pages from './pages';

const routes = [
  {
    path: '/',
    element: <Pages.PostList />,
    errorElement: <Pages.Error />,
  },
  {
    path: '/posts/not-found',
    element: <Pages.Error />,
  },
  {
    path: '/posts/:id',
    element: <Pages.PostPage />,
  },
];

export default routes;
