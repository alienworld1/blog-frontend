import Header from './components/header';
import routes from './routes';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: routes,
  },
]);

function Layout() {
  return (
    <>
      <Header />
      <main className="w-8/12 mx-auto my-8">
        <Outlet />
      </main>
    </>
  );
}

function App() {
  return (
    <div className="flex flex-col h-screen bg-[#191927] cursor-default">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
