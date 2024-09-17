import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createHashRouter, RouterProvider } from 'react-router-dom'
import { Provider } from 'react-redux'

import ErrorPage from './pages/ErrorPage.tsx'
import RootLayout from './pages/RootLayout.tsx'
import RulesPage from './pages/RulesPage.tsx'
import HomePage from './pages/HomePage.tsx'
import TeamPage from './pages/TeamPage.tsx'
import CharacterPage from './pages/CharacterPage.tsx'
import store from './store/store.ts'
import './index.css'

export const routesList = [
  {
    path: '/',
    element: <HomePage />,
    errorElement: <ErrorPage />,
    title: 'Home'
  },
  {
    path: '/rules',
    element: <RulesPage />,
    title: 'Rules'
  },
  {
    path: '/team',
    element: <TeamPage />,
    title: 'Team'
  },
  {
    path: '/character',
    element: <CharacterPage />,
    title: 'Character'
  },
];

const router = createHashRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      ...routesList
    ]
  }
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>,
)
