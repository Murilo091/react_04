import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter } from 'react-router';
import { RouterProvider } from 'react-router/dom';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "/charts",
    element:<h1>Graficos</h1>
  }
]);

createRoot(document.getElementById('root')).render(
<RouterProvider router={router} />,
)