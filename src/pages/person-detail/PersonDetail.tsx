import React from "react";
import { useParams } from "react-router-dom";
import { useMovie } from "@/api/hooks/useMovie";
import { IMAGE_URL } from "@/const";
import MovieView from "@/components/movie-view/MovieView";



const PersonDetail = () => {
  const { id } = useParams();

  const { getPersonDetail, getPersonDetailPath } = useMovie();

  const { data: person } = getPersonDetail(id || "");
  const { data,isLoading } = getPersonDetailPath(id || "", "combined_credits");

  return (
    <div className="container mx-auto px-4 py-10 text-gray-900 dark:text-white">
      {person && (
        <>
          <div className="flex flex-col md:flex-row gap-10 mb-12 items-center md:items-start bg-white dark:bg-slate-900 p-6 rounded-[10px]">
            <img src={IMAGE_URL + person.profile_path} loading="lazy" alt={person.name} className="w-[250px] h-[375px] rounded-2xl object-cover shadow-md"/>
            <div className="flex-1 space-y-4">
                <h1 className="text-4xl font-bold  text-gray-900 dark:text-white">
                {person.name}
                </h1>
                <p className="text-base text-gray-600 dark:text-gray-400">
                <span className="font-medium">Mashhurligi:</span> {person.popularity?.toFixed(1)}
                </p>
                {person.biography ? (
                <p className="text-[15px] leading-6 text-gray-800 dark:text-gray-300">
                    {person.biography}
                </p>
                ) : (
                <p className="italic text-gray-500 dark:text-gray-400">
                    Biografiya mavjud emas.
                </p>
                )}
            </div>
            </div>
            <MovieView data={data?.cast?.slice(0, 8)} loading={isLoading} count={8} />
        </>
      )}
    </div>
  );
};

export default React.memo(PersonDetail);


