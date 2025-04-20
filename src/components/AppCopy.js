import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router";
import Auth from "./components/Auth";
import MusicPlayer from "./components/MusicPlayer.js";
import About from "./components/About.js";
import Contact from "./components/Contact.js";

const App = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Auth />,
    },
    {
      path: "/about-us",
      element: <About />,
    },
    {
      path: "/contact-us",
      element: <Contact />,
    },
    {
      path: "/music-player",
      element: <MusicPlayer />,
    },
  ]);

  return <RouterProvider router={appRouter} />;
};

export default App;
