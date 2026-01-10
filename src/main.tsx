import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import AppLayout from '@/pages/layouts/AppLayout';
import Error from '@/pages/Error';
import Home from '@/pages/Home';
import Team from '@/pages/Team';
import Gallery from '@/pages/Gallery';
import ContactUs from '@/pages/ContactUs';

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/team',
        element: <Team />,
      },
      {
        path: '/gallery',
        element: <Gallery />,
      },
      {
        path: '/contact',
        element: <ContactUs />,
      }
    ]
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
