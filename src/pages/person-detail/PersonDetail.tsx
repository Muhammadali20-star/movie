import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useMovie } from "@/api/hooks/useMovie";
import { IMAGE_URL } from "@/const";
import { Image } from "antd";
import MovieView from "@/components/movie-view/MovieView";

interface ICastMovie {
  id: number;
  title: string;
  poster_path: string | null;
  release_date: string;
}

const PersonDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const { getPersonDetail, getPersonDetailPath } = useMovie();

  const { data: person } = getPersonDetail(id || "");
  const { data: combinedCredits } = getPersonDetailPath(id || "", "combined_credits");

  console.log(combinedCredits);
  

  return (
    <div className="container mx-auto px-4 py-10 text-gray-900 dark:text-white">
      {person && (
        <>
          <div className="flex flex-col md:flex-row gap-10 mb-12 items-center md:items-start bg-white dark:bg-slate-900 p-6 rounded-[10px]">
            <img src={IMAGE_URL + person.profile_path} alt={person.name} className="w-[250px] h-[375px] rounded-2xl object-cover shadow-md"/>
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
          <MovieView data={combinedCredits?.cast?.slice(0, 8)} />
        </>
      )}
    </div>
  );
};

export default React.memo(PersonDetail);

{/* {combinedCredits?.cast?.length > 0 && (
<div className="mb-12">
    <h2 className="text-2xl font-semibold mb-4 border-l-4 border-red-500 pl-3">Filmlari</h2>
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
    {combinedCredits.cast.filter((movie: ICastMovie) => movie.poster_path).slice(0, 10).map((movie: ICastMovie) => (
        <div key={movie.id} className="bg-white dark:bg-[#1a1a1a] rounded-xl overflow-hidden" onClick={() => navigate(`/movie/${movie.id}`)}>
            <img src={ IMAGE_URL + movie.poster_path} alt={movie.title} className="w-full h-60 object-cover"/>
            <div className="p-3">
            <h3 className="text-sm font-semibold truncate" title={movie.title}>{movie.title}</h3>
            <p className="text-xs text-gray-500 dark:text-gray-400">{movie.release_date?.split("-")[0] || "Yil yo'q"}</p>
            </div>
        </div>
        ))}
    </div>
</div>
)} */}
