import Pages from './pages';

const routes = [
  {
    index: true,
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
  {
    path: '/log-in',
    element: <Pages.LoginForm />,
  },
  {
    path: '/sign-up',
    element: <Pages.SignUpForm />,
  },
];

export default routes;
