import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import AOS from 'aos'
import 'aos/dist/aos.css'
import { ToastContainer } from 'react-toastify'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import ProjectDetails from './Components/ProjectDetails.jsx'
import Home from './Pages/Home.jsx'


export const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    errorElement: <div>This is error</div>,

    children: [

      {
        path: "/",
        Component: Home,
      },
      {
        path: "/project-details/:id",
        Component: ProjectDetails,
      },
    ]
  },
]);

AOS.init({
  duration: 1000,
  once: true,
})

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
    <ToastContainer />
  </StrictMode>,
)
