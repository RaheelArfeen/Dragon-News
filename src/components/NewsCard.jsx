import React from "react";
import { CiBookmark, CiShare2 } from "react-icons/ci";
import { FaStar, FaEye } from "react-icons/fa";
import { Link } from "react-router";

const NewsCard = ({ news }) => {
  const { details, id } = news;
  return (
    <div className="w-full overflow-hidden mt-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row gap-4 sm:gap-0 sm:justify-between items-start sm:items-center bg-base-300 rounded-t-lg py-4 px-5">
        <div className="flex items-center gap-3">
          <img
            className="w-12 h-12 rounded-full object-cover"
            src={news.author.img}
            alt={news.author.name}
          />
          <div>
            <p className="font-semibold text-primary text-sm sm:text-base">
              {news.author.name}
            </p>
            <span className="text-xs sm:text-sm text-accent">
              {news.author.published_date}
            </span>
          </div>
        </div>
        <div className="flex items-center gap-4 text-2xl text-accent">
          <CiBookmark />
          <CiShare2 />
        </div>
      </div>

      {/* Main */}
      <div className="px-5 border-2 border-base-300 rounded-b-lg py-4">
        {/* Title */}
        <h1 className="text-xl sm:text-2xl font-bold leading-snug mb-4">
          {news.title}
        </h1>

        {/* Thumbnail */}
        <div className="mb-6 min-h-[180px] sm:min-h-[240px]">
          <img
            className="rounded-lg w-full h-full object-cover"
            src={news.image_url}
            alt=""
          />
        </div>

        {/* Details */}
        <p className="text-sm sm:text-base text-accent leading-relaxed mb-4">
          {details ? (
            <>
              {details.slice(0, 200)}...
              <Link to={`/news-details/${id}`}>
                <h3 className="font-semibold text-[#FF8C47] hover:underline cursor-pointer">
                  Read More
                </h3>
              </Link>
            </>
          ) : (
            details
          )}
        </p>

        {/* Footer */}
        <div className="border-t border-accent mt-4 pt-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 text-sm sm:text-base">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1 text-[#FF8C47]">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
            {news.rating.number}
          </div>
          <div className="flex items-center gap-2 text-accent">
            <FaEye />
            {news.total_view}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard
