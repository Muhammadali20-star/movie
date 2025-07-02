import Footer from "@/layout/Footer";
import Header from "@/layout/Header";
import React from "react";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <Header />
      <main className='min-h-[80vh]'>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default React.memo(Layout);
