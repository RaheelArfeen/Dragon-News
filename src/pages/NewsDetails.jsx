import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import RighAside from "../components/homelayout/RighAside";
import NewsDetailsCard from "../components/NewsDetailsCard";
import { useLoaderData, useParams } from "react-router";

const NewsDetails = () => {
  const data = useLoaderData();
  const { id } = useParams();
  const [news, setNews] = useState({});

  useEffect(() => {
    const newsDetails = data.find((singleNews) => singleNews.id == id);
    setNews(newsDetails);
  }, [data, id]);

  return (
    <div className="md:container mx-auto px-4">
      <header className="py-3">
        <Header />
      </header>
      <main className="w-full sm:w-11/12 mx-auto grid grid-cols-1 lg:grid-cols-12 gap-5 py-10">
        {/* Main Section for News Details */}
        <section className="col-span-1 sm:col-span-9">
          <h2 className="font-bold mb-5 text-lg sm:text-2xl">Dragon News</h2>
          <NewsDetailsCard news={news} />
        </section>

        {/* Right Sidebar */}
        <aside className="col-span-1 sm:col-span-3">
          <RighAside />
        </aside>
      </main>
    </div>
  );
};

export default NewsDetails;
