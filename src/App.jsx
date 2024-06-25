import Header from './components/header';
import routes from './routes';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter(routes);

function App() {
  return (
    <div className="flex flex-col h-screen bg-[#191927] cursor-default">
      <Header />
      <main className="w-8/12 mx-auto my-8">
        <RouterProvider router={router} />
      </main>
    </div>
  );
}

export default App;
