import React from "react";
import swimmingImage from "../../assets/swimming.png";
import classImage from "../../assets/class.png";
import playImage from "../../assets/playground.png";

const QZone = () => {
  return (
    <div className="bg-base-200 p-4 sm:p-6 md:p-8">
      <h2 className="text-xl sm:text-2xl font-bold mb-5">QZone</h2>
      <div className="space-y-5">
        <img
          src={swimmingImage}
          alt="Swimming activity"
          className="w-full h-auto rounded-lg shadow-md"
        />
        <img
          src={classImage}
          alt="Class activity"
          className="w-full h-auto rounded-lg shadow-md"
        />
        <img
          src={playImage}
          alt="Playground activity"
          className="w-full h-auto rounded-lg shadow-md"
        />
      </div>
    </div>
  );
};

export default QZone;
