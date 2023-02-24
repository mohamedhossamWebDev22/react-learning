import React from 'react';
import ReactDOM from 'react-dom/client';
import {HelmetProvider } from 'react-helmet-async';

import './index.css';

import Home from "./pages/Home"
import JavaScriptPAGE from "./pages/javascript"
import CssPAGE from "./pages/css"
import HtmlPAGE from "./pages/html"
import FunPg from "./pages/hi"



import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  { 
    path: "/",
    element: <Home />,
    errorElement: <>Error 404.</>,
  },
  {
    path: "/js",
    element: <JavaScriptPAGE />,
    errorElement: <>Error 404.</>,
  },
  {
    path: "/css",
    element: <CssPAGE />,
    errorElement: <>Error 404.</>,
  },
  {
    path: "/html",
    element: <HtmlPAGE />,
    errorElement: <>Error 404.</>,
  },
  {
    path: "/hi",
    element: <FunPg />,
    errorElement: <>Error 404.</>,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HelmetProvider>
      <RouterProvider router={router} />
    </HelmetProvider>
  </React.StrictMode>
);
