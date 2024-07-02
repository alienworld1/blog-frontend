import Header from './components/header';
import routes from './routes';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import { useState } from 'react';
import UserContext from './UserContext';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: routes,
  },
]);

function Layout() {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const loginUser = user => {
    setUser(() => user);
    setIsAuthenticated(true);
  };

  const logoutUser = () => {
    if (isAuthenticated) {
      setUser(null);
      setIsAuthenticated(false);
    }
  };

  return (
    <>
      <UserContext.Provider
        value={{ user, isAuthenticated, loginUser, logoutUser }}
      >
        <Header />
        <main className="w-8/12 mx-auto my-8">
          <Outlet />
        </main>
      </UserContext.Provider>
    </>
  );
}

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-[#191927] cursor-default">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
