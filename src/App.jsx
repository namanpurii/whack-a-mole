import React from 'react'
import Home from './Pages/Home'
import Game from './Pages/Game';
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Home />
    ),
  },
  {
    path: "play",
    element: <Game/>,
  },
]);

const App = () => <RouterProvider router={router} />;

export default App