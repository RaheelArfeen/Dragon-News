import React from "react";
import Marquee from "react-fast-marquee";

const LatestNews = () => {
  return (
    <div className="flex items-start sm:items-center w-full">
      <h1 className="py-2 px-4 sm:px-6 bg-secondary w-fit text-white text-base sm:text-xl font-medium">
        Latest
      </h1>
      <div className="w-full overflow-hidden">
        <Marquee speed={60} pauseOnHover>
          <p className="text-sm sm:text-lg font-semibold mt-2 sm:mt-0 sm:ml-5">
            Match Highlights: Germany vs Spain Ends in Epic 2–2 Draw —
            Last-Minute Goals, Stunning Strikes, and a Night to Remember!
          </p>
        </Marquee>
      </div>
    </div>
  );
};

export default LatestNews;
