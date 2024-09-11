import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import './index.css'
import ErrorPage from './pages/ErrorPage.tsx'
import RootLayout from './pages/RootLayout.tsx'
import Root from './routes/root.tsx'
import Team from './routes/team.tsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        path: '/',
        element: <Root />,
        errorElement: <ErrorPage />
      },
      {
        path: '/team',
        element: <Team />
      }
    ]
  }
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
