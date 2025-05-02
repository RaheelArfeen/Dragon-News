import React from "react";
import { Outlet } from "react-router";
import Header from "../components/Header";
import LatestNews from "../components/LatestNews";
import Navbar from "../components/Navbar";
import LeftAside from "../components/homelayout/LeftAside";
import RighAside from "../components/homelayout/RighAside";

const HomeLayout = () => {
  return (
    <div className='md:container mx-auto pt-12 px-4'>
            <header>
                <Header/>
                <section className='w-11/12 mx-auto mt-8 bg-base-200 p-3 md:p-4'>
                    <LatestNews/>
                </section>
                <nav className='w-11/12 mx-auto mt-8 '>
                    <Navbar/>
                </nav>
            </header>
            <main className='mx-auto w-11/12 my-18 grid grid-cols-12 gap-8'>
                <aside className='col-span-3 sticky top-4 h-fit'>
                    <LeftAside></LeftAside>
                </aside>
                <section className='col-span-6'>
                    <Outlet/>
                </section>
                <aside className='col-span-3 sticky top-4 h-fit'>
                    <RighAside></RighAside>
                </aside>
            </main>
        </div>
  );
};

export default HomeLayout;
