import { createBrowserRouter } from "react-router";
import RootLayout from "../Layout/RootLayout";
import Home from "../pages/Home/Home";
import AboutMe from "../pages/All pages/About Me/AboutMe";
import Skills from "../pages/All pages/Skills/Skills";
import Projects from "../pages/All pages/Projects/Projects";
import Experience from "../pages/All pages/Experience/Experience";

import Contact from "../pages/All pages/Contact/Contact";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      { index: true, Component: Home },
      { path: "About", Component: AboutMe },
      { path: "Skills", Component: Skills },
      { path: "Projects", Component: Projects },
      { path: "Experience", Component: Experience },
     
      { path: "Contact", Component: Contact},
    ],
  },
]);