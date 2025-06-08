import React, { useState } from "react";
import { codingProfile } from "../../constants";

const CodingProfile = () => {
  return (
    <section
      id="codingProfile"
      className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[20vw] font-sans relative"
    >
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">Coding Profile</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          A showcase of the my problem solving abilities.
        </p>
      </div>

      {/* Profile Grid */}
      <div className="grid gap-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {codingProfile.map((profile) => (
          <div
            key={profile.id}
            className="border border-white bg-gray-900 backdrop-blur-md rounded-2xl shadow-2xl overflow-hidden cursor-pointer hover:shadow-purple-500/50 hover:-translate-y-2 transition-transform duration-300"
          >
            <div className="p-4">
              <img
                src={profile.image}
                alt={profile.title}
                className="w-full h-48 object-cover rounded-xl"
              />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold text-white mb-2">
                {profile.title}
              </h3>
              <p className="text-gray-500 mb-4 pt-4 line-clamp-3">
                {profile.description}
              </p>
              <a
                className="text-blue-500 mb-4 pt-4 line-clamp-3"
                href={profile.profileLink}
              >
                Visit Profile
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CodingProfile;
