import React from "react";
import { Outlet } from "react-router";
import Header from "../components/Header";
import LatestNews from "../components/LatestNews";
import Navbar from "../components/Navbar";
import LeftAside from "../components/homelayout/LeftAside";
import RighAside from "../components/homelayout/RighAside";

const HomeLayout = () => {
  return (
    <div className="md:container mx-auto pt-12 px-4">
      <header>
        <Header />
        <section className="w-full sm:w-11/12 mx-auto mt-8 bg-base-200 p-3 md:p-4">
          <LatestNews />
        </section>
        <nav className="w-full sm:w-11/12 mx-auto mt-8">
          <Navbar />
        </nav>
      </header>

      <main className="mx-auto w-full sm:w-11/12 my-18 grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Aside */}
        <aside className="col-span-1 sm:col-span-3 lg:sticky relative top-6 h-fit">
          <LeftAside />
        </aside>

        {/* Main Content Area */}
        <section className="col-span-1 sm:col-span-6 mt-8">
          <Outlet />
        </section>

        {/* Right Aside */}
        <aside className="w-full col-span-1 md:col-span-3 lg:sticky relative top-6 h-fit">
          <RighAside />
        </aside>
      </main>
    </div>
  );
};

export default HomeLayout;
