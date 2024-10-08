"use client";

import React, { useState } from "react";
import { companiesData } from "./utils/mockData";
import Card from "./_components/Card";

function Popup({ onClose }: { onClose: () => void }) {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-4 rounded-lg shadow-lg max-w-sm w-full">
        <div className="flex justify-between items-center">
          <h2 className="text-lg font-bold">Resources are coming soon</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            &times;
          </button>
        </div>
        <p className="mt-2 text-gray-600">
          The resources you are looking for are not available yet. Please check
          back later!
        </p>
      </div>
    </div>
  );
}

const Page = () => {
  const [showPopup, setShowPopup] = useState(true);

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className="min-h-screen w-full flex flex-col items-center bg-slate-950">
      {showPopup && <Popup onClose={closePopup} />}
      {companiesData.map((category) => (
        <div key={category.category} className="mb-8 w-full max-w-6xl">
          <h2 className="text-2xl text-white font-semibold text-center m-6">
            {category.category}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {category.companies.map((company) => (
              <Card
                key={company.name}
                image={company.image}
                name={company.name}
                description={company.description}
                viewLink={company.viewLink}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Page;
