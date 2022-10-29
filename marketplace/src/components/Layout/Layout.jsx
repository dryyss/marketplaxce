import React from "react";

import Footer from "../Footer/Footer";
import Header from "../Header/Header";

const Layout = ({ page }) => {
  return (
    <>
      <Header />
      <main>{page}</main>
      <Footer />
    </>
  );
};

export default Layout;
