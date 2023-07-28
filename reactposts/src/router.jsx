import {Navigate,createBrowserRouter} from "react-router-dom";
import Login from "./Login";
import Posts from "./Posts";
import Addpost  from "./Addpost";
export const router = createBrowserRouter([
  {
    path: '/',
    element: <Navigate to={'/login'} replace />,
  },
    {
      path: '/login',
      element: <Login/>,
    },
    {
      path: '/posts',
      element: <Posts/>,
    },
    {
      path: '/addpost',
      element: <Addpost/>,
    },
  ]);