import React, { useEffect } from "react";
import { Link } from "react-router";

const NewsDetailsCard = ({ news }) => {

  useEffect(() => {
    window.scrollTo(0, 0)
  })

  return (
    <div>
        <div className="space-y-5">
        <img
          className="w-full h-[350px] object-cover"
          src={news.image_url}
          alt=""
        />
        <h2 className="text-2xl">{news.title}</h2>

        <p>{news.details}</p>
        <Link className="btn btn-secondary" to={`/category/${news.category_id}`}>
          {" "}
          Back to Category
        </Link>
      </div>
    </div>
  );
};

export default NewsDetailsCard;
