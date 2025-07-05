import React from "react";
import { useDispatch, useSelector } from "react-redux";
import MediaDetails from "./MediaDetails";
import { addCategory } from "../utils/categorySlice";
import ActorLists from "./ActorLists";
import MovieList from "./MovieList";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";
import useMediaDetails from "../hooks/useMediaDetails";
import useMediaRecommendations from "../hooks/useMediaRecommendation";
import useSimilarMedia from "../hooks/useSimilarMedia";
import useMediaCredits from "../hooks/useMediaCredits";

const WatchMedia = ({ mediaId, mediaType = "movie" }) => {
  const dispatch = useDispatch();
  const categorySelected = useSelector((store) => store.category);

  console.log(mediaId, mediaType);

  // Fetch all media data
  useMediaDetails(mediaType, mediaId);
  useMediaCredits(mediaType, mediaId);
  useMediaRecommendations(mediaType, mediaId);
  useSimilarMedia(mediaType, mediaId);

  // Select data based on media type
  const details = useSelector((store) =>
    mediaType === "movie" ? store.movie.movieDetails : store.tv.tvDetails
  );
  const casts = useSelector((store) =>
    mediaType === "movie"
      ? store.movie.movieCredits?.cast
      : store.tv.tvCredits?.cast
  );
  const recommendations = useSelector((store) =>
    mediaType === "movie"
      ? store.movie.movieRecommendation?.results
      : store.tv.tvRecommendation?.results
  );
  const similar = useSelector((store) =>
    mediaType === "movie"
      ? store.movie.similarMovies?.results
      : store.tv.tvSimilar?.results
  );

  const watchCategories = ["Details", "Cast", "Similar", "Recommendation"];

  if (!details)
    return (
      <div className="text-white text-center py-20">
        Loading {mediaType === "movie" ? "movie" : "TV show"} details...
      </div>
    );

  const {
    title,
    name,
    backdrop_path,
    release_date,
    first_air_date,
    runtime,
    episode_run_time,
    spoken_languages,
    genres,
    overview,
    id,
  } = details;

  return (
    <>
      <div className="">
        <VideoBackground
          mediaId={id}
          image={backdrop_path}
          mediaType={mediaType}
        />
        <VideoTitle
          flag={false}
          title={mediaType === "movie" ? title : name}
          overview={overview}
          duration={mediaType === "movie" ? runtime : episode_run_time?.[0]}
          release={mediaType === "movie" ? release_date : first_air_date}
          lang={spoken_languages}
          genres={genres}
        />
      </div>
      <div className="absolute z-50 top-[90%] left-10 right-10 bg-black text-white">
        <div className="flex gap-8 mb-2">
          {watchCategories.map((category) => (
            <button
              key={category}
              className={`text-lg md:text-xl font-bold whitespace-nowrap ${
                categorySelected === category
                  ? "text-white border-b-2 border-red-600"
                  : "text-white/50 hover:text-white"
              }`}
              onClick={() => dispatch(addCategory(category))}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="mt-4">
          {categorySelected === "Details" && (
            <MediaDetails mediaType={mediaType} />
          )}

          {categorySelected === "Cast" && casts && (
            <ActorLists title="Cast" tvShows={casts} />
          )}

          {categorySelected === "Similar" && similar && (
            <MovieList
              title={`Similar ${mediaType === "movie" ? "Movies" : "TV Shows"}`}
              movies={similar}
            />
          )}

          {categorySelected === "Recommendation" && recommendations && (
            <MovieList title={`Recommendations`} movies={recommendations} />
          )}
        </div>
      </div>
    </>
  );
};

export default WatchMedia;
