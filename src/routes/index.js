import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import MainPage from '../pages/MainPage'
import GamePage from '../pages/GamePage'

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainPage />,
  },
  {
    path: '/game/:slug',
    element: <GamePage />,
  }
])


export default router