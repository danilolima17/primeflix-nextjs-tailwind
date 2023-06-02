import Link from "next/link";
import React from "react";
import MovieCard, { IMovieCard } from "./MovieCard";

const UpcomingMovies = ({ upcomingMovies }: { upcomingMovies: any }) => {
  return (
    <div className="flex flex-col mb-6">
      <div className="flex flex-col sm:flex-row justify-between items-center mt-4">
        <h1 className="text-2xl font-medium">Upcoming Movies</h1>
          <Link
          href="/movies/upcoming"
          className="py-2 px-5 bg-slate-800 text-md font-normal text-white mt-4 sm:mt-0"
          >
      See all
    </Link>
  </div>
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 mt-4 gap-4">
    {upcomingMovies.results.slice(0, 4).map((movie: IMovieCard) => (
      <MovieCard key={movie?.id} movie={movie} />
    ))}
  </div>
</div>
  );
};

export default UpcomingMovies;
