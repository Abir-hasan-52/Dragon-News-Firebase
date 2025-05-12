import React, { use } from "react";
import { NavLink } from "react-router";

import "../index.css";

const categoryPromise = fetch("/categories.json").then((res) => res.json());

const Categories = () => {
  // console.log(categoryPromise);
  const categories = use(categoryPromise);

  return (
    <div>
      <h1 className="font-semibold">All Categories ({categories.length})</h1>

      <div className="grid grid-cols-1 mt-5 gap-2">
        {categories.map((category) => (
          <NavLink
            key={category.id}
            to={`/category/${category.id}`}
            className={({ isActive }) =>
              `btn border-0 font-semibold ${
                isActive
                  ? "bg-accent text-white" // Active style
                  : "bg-base-100 hover:bg-base-300 text-accent" // Default style
              }`
            }
          >
            {category.name}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Categories;
