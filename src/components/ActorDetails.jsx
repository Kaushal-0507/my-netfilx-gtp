import React, { useState } from "react";
import { FaBirthdayCake, FaMapMarkerAlt, FaFilm } from "react-icons/fa";

const ActorDetails = ({ actor }) => {
  const [showBio, setShowBio] = useState(true);
  const handleShowBio = () => {
    setShowBio(!showBio);
  };
  if (!actor) return <div className="text-white">Loading actor details...</div>;

  return (
    <div className="text-white p-6 shadow-lg ">
      <div className="flex flex-col md:flex-row gap-8">
        <div className="flex-shrink-0">
          {actor.profile_path ? (
            <img
              src={`https://image.tmdb.org/t/p/w500${actor.profile_path}`}
              alt={actor.name}
              className="w-64 h-96 object-cover rounded-[5px] shadow-md"
            />
          ) : (
            <div className="w-64 h-96 bg-gray-700 rounded-lg flex items-center justify-center">
              <span className="text-gray-400">No Image Available</span>
            </div>
          )}
        </div>

        <div className="flex-grow">
          <h1 className="text-3xl font-bold mb-2">{actor.name}</h1>

          <div className="flex items-center mb-4">
            <FaFilm className="mr-2 text-yellow-400" />
            <span className="text-yellow-400 font-semibold">
              {actor.known_for_department}
            </span>
          </div>

          <div className="mb-6">
            <div className="flex items-center mb-2">
              <FaBirthdayCake className="mr-2 text-gray-400" />
              <span>
                Born:{" "}
                {new Date(actor.birthday).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </span>
            </div>

            {actor.place_of_birth && (
              <div className="flex items-center">
                <FaMapMarkerAlt className="mr-2 text-gray-400" />
                <span>{actor.place_of_birth}</span>
              </div>
            )}
          </div>

          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-2 border-b border-gray-700 pb-1">
              Biography
            </h2>
            {actor.biography ? (
              <>
                <p
                  className={`text-gray-300 leading-relaxed  ${
                    showBio ? "line-clamp-4 " : "line-clamp-none"
                  } `}
                >
                  {actor.biography}
                </p>
                <span
                  onClick={() => {
                    handleShowBio();
                  }}
                  className="font-bold text-white cursor-pointer
                "
                >
                  .more
                </span>
              </>
            ) : (
              <p className="text-gray-500 italic">No biography available.</p>
            )}
          </div>

          {actor.deathday && (
            <div className="flex items-center text-red-400">
              <span>
                Passed away:{" "}
                {new Date(actor.deathday).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ActorDetails;
