import { IMAGE_URL } from "@/const";
import type { IMovie } from "@/types";
import React, { type FC } from "react";
import { useNavigate } from "react-router-dom";

interface Props {
  data: undefined | IMovie[];
}

const MovieView: FC<Props> = ({ data }) => {
  const navigate = useNavigate()
  return (
    <div className="container mx-auto">
      <div className='flex justify-between items-center mt-5'>
        <h2 className='text-xl text-[#000000] font-medium leading-6 dark:text-white'>На неделе</h2>
        <h2 className='text-sm text-red-500 font-medium leading-5' onClick={()=> navigate("/movies")}>Показать все</h2>
      </div>
      <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-6 py-6">
      {data?.map((movie: IMovie) => (
        <div key={movie.id} className="bg-white dark:bg-slate-900 rounded">
          <div className="relative overflow-hidden">
            <img loading="lazy" onClick={()=> navigate(`/movie/${movie.id}`)} src={IMAGE_URL + movie.poster_path} alt={movie.title} className="w-full h-[360px] object-cover"/>
          </div>
          <div className="p-4">
            <h3 title={movie.title} className="text-lg font-semibold text-gray-900 dark:text-white">{movie.title}</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">⭐ {movie.vote_average}</p>
          </div>
        </div>
      ))}
      </div>
    </div>
  );
};

export default React.memo(MovieView);
