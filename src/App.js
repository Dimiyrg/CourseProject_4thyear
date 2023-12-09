import React from 'react';
import './App.css';
import "./AudioPlayer.css";
import { RouterProvider } from 'react-router-dom';
import router from './routes';

const App = () => {
  return <RouterProvider router={router} />
}

export default App;

