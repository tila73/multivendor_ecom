import React from "react";
import { Link } from "react-router-dom";

function SingleMainCategory(props) {
  return (
    <div className="inline-block text-center p-2">
      <Link className="block bg-slate-300 rounded-full p-0.5">
        <img
          className="h-44 w-44 object-cover rounded-full cursor-pointer hover:scale-105 ease-in-out duration-300"
          src={props.main_category.image}
          alt="/"
        />
      </Link>
      <div>{props.main_category.name}</div>
    </div>
  );
}

export default SingleMainCategory;
