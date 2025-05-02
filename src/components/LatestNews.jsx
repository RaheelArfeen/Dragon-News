import React from "react";
import Marquee from "react-fast-marquee";

const LatestNews = () => {
  return (
    <div className="flex items-center w-full px-4 py-3 gap-2 sm:gap-4">
      <h1 className="bg-secondary text-white text-sm sm:text-base md:text-lg font-medium px-3 sm:px-5 py-2 w-fit">
        Latest
      </h1>
      <div className="w-full overflow-hidden">
        <Marquee speed={60} pauseOnHover gradient={false}>
          <p className="text-sm sm:text-base md:text-lg font-semibold">
            Match Highlights: Germany vs Spain Ends in Epic 2–2 Draw —
            Last-Minute Goals, Stunning Strikes, and a Night to Remember!
          </p>
        </Marquee>
      </div>
    </div>
  );
};

export default LatestNews;
