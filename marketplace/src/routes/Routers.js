import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";

import Contact from "../pages/Contact";
import Create from "../pages/Create";
import Home from "../pages/Home";
import Market from "../pages/Market";
import SellerProfile from "../pages/SellerProfile";
import EditProfile from "../pages/EditProfile";
import Wallet from "../pages/Wallet";
import NftDetails from "../pages/NftDetails";
import Error from "../components/Error/Error";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home />} />
      <Route path="/market" element={<Market />} />
      <Route path="/create" element={<Create />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/edit-profile" element={<EditProfile />} />
      <Route path="/seller-profile" element={<SellerProfile />} />
      <Route path="/wallet" element={<Wallet />} />
      <Route path="/market/:id" element={<NftDetails />} />
      <Route path="/404" element={<Navigate to={<Error />} />} />
    </Routes>
  );
};

export default Routers;
