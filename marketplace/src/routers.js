import React from "react";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";

import Contact from "../pages/Contact";
import Create from "../pages/Create";
import Home from "../pages/Home";
import Market from "../pages/Market";
import SellerProfile from "../pages/SellerProfile";
import EditProfile from "../pages/EditProfile";
import Wallet from "../pages/Wallet";
import NftDetails from "../pages/NftDetails";
import Error from "../components/Error/Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello world!</div>,
  },
]);

const Routers = () => {
  return <RouterProvider router={router} />;
};

export default Routers;
// <>
//   {createBrowserRouter([
//     {
//       path: "/",
//       element: <Home />,
//       children: [
//         {
//           path: "market",
//           element: <Market />,
//         },
//         {
//           path: "create",
//           element: <Create />,
//         },
//         {
//           path: "contact",
//           element: <Contact />,
//         },
//         {
//           path: "edit-profile",
//           element: <EditProfile />,
//         },
//         {
//           path: "seller-profile",
//           element: <SellerProfile />,
//         },
//         {
//           path: "wallet",
//           element: <Wallet />,
//         },
//         {
//           path: "market/:id",
//           element: <NftDetails />,
//         },
//         // {
//         //  path:"*" ,element=<Navigate to={<Error /> />},
//         // },
//       ],
//     },
//   ])}
// </>
