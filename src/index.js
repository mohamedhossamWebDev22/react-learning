import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import Home from "./pages/Home"
import JavaScriptPAGE from "./pages/javascript"
import CssPAGE from "./pages/css"
import HtmlPAGE from "./pages/html"



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
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);


