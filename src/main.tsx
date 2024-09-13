import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createHashRouter, RouterProvider } from 'react-router-dom'

import './index.css'
import ErrorPage from './pages/ErrorPage.tsx'
import RootLayout from './pages/RootLayout.tsx'
import Team from './pages/Team.tsx'
import Root from './routes/root.tsx'

const router = createHashRouter([
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
