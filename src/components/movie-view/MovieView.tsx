import { IMAGE_URL } from "@/const";
import type { IMovie } from "@/types";
import { useStore } from "@/zustand/useStore";
import React, { type FC } from "react";
import { useNavigate } from "react-router-dom";
import { FiBookmark } from "react-icons/fi";
import { FaBookmark } from "react-icons/fa";

interface Props {
  data: IMovie[] | undefined;
  count: number;
  loading?: boolean;
}

const Skeleton: FC<{ count: number }> = ({ count }) => {
  return (
    <>
      {Array(count).fill(0).map((_, idx) => (
          <div key={idx} className="bg-white dark:bg-slate-900 rounded animate-pulse">
            <div className="h-[360px] bg-gray-200 dark:bg-slate-700 w-full rounded"></div>
            <div className="p-4 space-y-2">
              <div className="h-5 w-10/12 bg-gray-200 dark:bg-slate-700 rounded"></div>
              <div className="h-4 w-6/12 bg-gray-200 dark:bg-slate-700 rounded"></div>
            </div>
          </div>
        ))}
    </>
  );
};

const MovieView: FC<Props> = ({ data = [], loading, count }) => {
  const navigate = useNavigate();
  const { toggleSaved, saved } = useStore();

  return (
    <div className="container mx-auto">
      <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-6 py-6">
        {loading ? (
          <Skeleton count={count} />
        ) : (
          data.map((movie: IMovie) => {
            const isSaved = saved.some(item => item.id === movie.id);
            return (
              <div key={movie.id} className="bg-white dark:bg-slate-900 rounded">
                <div className="relative overflow-hidden">
                  <img loading="lazy" onClick={() => navigate(`/movie/${movie.id}`)} src={IMAGE_URL + movie.poster_path} alt={movie.title} className="w-full h-[360px] object-cover"/>
                  <p className="absolute top-2 left-2 text-white bg-red-500 px-2 rounded text-sm">
                    {movie?.release_date?.split("-")[0]}
                  </p>
                  <button className="absolute top-2 right-2 bg-gray-500 text-white px-2 py-1 rounded text-2xl" onClick={() => toggleSaved(movie)}>
                    {isSaved ? <FaBookmark /> : <FiBookmark />}
                  </button>
                </div>
                <div className="p-4">
                  <h3 title={movie.title} className="text-lg font-semibold text-gray-900 dark:text-white">
                    {movie.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">⭐ {movie.vote_average}</p>
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default React.memo(MovieView);
