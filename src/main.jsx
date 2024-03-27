import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import InputPage from './pages/InputPage.jsx';
import UserPage from './pages/UserPage.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <InputPage/>,
  },
  {
    path: "/user/:question/:yesMessage",
    element: <UserPage />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    {/* <App /> */}
  </React.StrictMode>,
)
