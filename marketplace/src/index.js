import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import "./index.scss";
// import "bootstrap/dist/css/bootstrap.min.css";

import Contact from "./pages/Contact";
// import Create from "./pages/Create";
import Home from "./pages/Home";
// import Market from "./pages/Market";
// import SellerProfile from "./pages/SellerProfile";
// import EditProfile from "./pages/EditProfile";
// import Wallet from "./pages/Wallet";
// import NftDetails from "./pages/NftDetails";
import Error from "./components/Error/Error";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Home />}>
      {/* <Route path="market" element={<Market />} />
      <Route path="create" element={<Create />} /> */}
      <Route path="contact" element={<Contact />} />
      {/* <Route path="edit-profile" element={<EditProfile />} />
      <Route path="seller-profile" element={<SellerProfile />} />
      <Route path="wallet" element={<Wallet />} />
      <Route path="market/:id" element={<NftDetails />} /> */}
      <Route path="*" element={<Error />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />;
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
