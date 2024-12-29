import React from "react";
import { Link } from "react-router-dom";

function DormMinicard({ to, name, community, image, rating }) {
  return (
    <div className="w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 p-4">
      <Link
        to={to}
        className="bg-white border border-slate-300 rounded-xl shadow-sm hover:shadow-lg 
                  transition-shadow duration-200 overflow-hidden flex flex-col"
      >
        <div className="flex-grow">
          <h2 className="text-xl p-3 font-medium text-gray-800 text-center">
            {name}
          </h2>
          <p className="-mt-2 mb-2 text-xs text-gray-600 text-center">
            {community}
          </p>
          <img
            src={image}
            alt={`${name} exterior`}
            loading="lazy"
            decoding="async"
            className="object-cover mx-auto w-11/12 h-52 rounded-xl"
          />
        </div>

        <div className="p-4">
          <p className="mt-2 text-sm text-gray-600 text-center">
            Overall Rating:{" "}
            <span className="font-bold text-gray-900">{rating}</span>
          </p>
        </div>
      </Link>
    </div>
  );
}

export default DormMinicard;
