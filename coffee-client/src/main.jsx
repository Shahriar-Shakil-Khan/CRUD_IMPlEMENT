import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router";
import MainLayout from './layouts/MainLayout';
import Home from './components/Home';
import AddCoffee from './components/AddCoffee';
import CoffeeDetails from './components/coffeeDetails';
import UpdateCoffee from './components/UpdateCoffee';
import NotFound from './components/NotFound';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import AuthProvider from './contexts/AuthProvider';
import PrivateRoute from './components/PrivateRoute';

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        index: true,
        Component: Home,
        loader: () => fetch('http://localhost:3000/coffees'),
      },
      {
        path: "addCoffee",
        element: <PrivateRoute><AddCoffee /></PrivateRoute>,
      },
      {
        path: "coffee/:id",
        element: <PrivateRoute><CoffeeDetails /></PrivateRoute>,
        loader: ({ params }) =>
          fetch(`http://localhost:3000/coffees/${params.id}`),
      },
      {
        path: "update-coffee/:id",
        element: <PrivateRoute><UpdateCoffee /></PrivateRoute>,
        loader: ({ params }) =>
          fetch(`http://localhost:3000/coffees/${params.id}`),
      },
      {
        path: "signin",
        Component: SignIn,
      },
      {
        path: "signup",
        Component: SignUp,
      },
      {
        path: "*", // must be the last child
        Component: NotFound,
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
)