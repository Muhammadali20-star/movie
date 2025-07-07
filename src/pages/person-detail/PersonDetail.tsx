import React from "react";
import { useParams } from "react-router-dom";
import { useMovie } from "@/api/hooks/useMovie";
import { IMAGE_URL } from "@/const";
import MovieView from "@/components/movie-view/MovieView";

const PersonDetail = () => {
  const { id } = useParams();
  const { getPersonDetail, getPersonDetailPath } = useMovie();

  const { data: person, isLoading: loadingPerson } = getPersonDetail(id || "");
  const { data: creditsData, isLoading } = getPersonDetailPath(id || "", "combined_credits");

  return (
    <div className="container mx-auto px-4 py-10 text-gray-900 dark:text-white">
      <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 shadow-md mb-10 max-w-3xl mx-auto text-center">
        {loadingPerson ? (
          <>
            <div className="w-[250px] h-[375px] mx-auto bg-gray-300 dark:bg-slate-700 rounded-xl mb-4 animate-pulse" />
            <div className="h-6 w-44 mx-auto bg-gray-300 dark:bg-slate-700 rounded mb-2 animate-pulse" />
            <div className="h-4 w-1/4 mx-auto bg-gray-300 dark:bg-slate-700 rounded mb-2 animate-pulse" />
            <div className="h-4 w-1/4 mx-auto bg-gray-300 dark:bg-slate-700 rounded mb-2 animate-pulse" />
            <div className="h-4 w-1/4 mx-auto bg-gray-300 dark:bg-slate-700 rounded mb-2 animate-pulse" />
            <div className="h-4 w-1/4 mx-auto bg-gray-300 dark:bg-slate-700 rounded mb-2 animate-pulse" />
            <div className="h-4 w-1/4 mx-auto bg-gray-300 dark:bg-slate-700 rounded mb-2 animate-pulse" />
          </>
        ) : (
          <>
            <img src={IMAGE_URL + person?.profile_path} alt={person?.name} className="w-[250px] h-[375px] mx-auto object-cover rounded-xl mb-4 shadow"/>
            <h1 className="text-2xl font-bold mb-2">{person?.name}</h1>
            <ul className="text-sm text-gray-700  dark:text-gray-300 mt-4 space-y-1 text-center max-w-xs mx-auto">
              <li><strong>Kasbi:</strong> {person?.known_for_department || "—"}</li>
              <li><strong>Jinsi:</strong> {person?.gender === 1 ? "Ayol" : "Erkak"}</li>
              <li><strong>Tug‘ilgan sana:</strong> {person?.birthday || "—"}</li>
              <li><strong>Tug‘ilgan joyi:</strong> {person?.place_of_birth || "—"}</li>
              {person?.deathday && (
                <li className="text-red-500"><strong>Vafot etgan:</strong> {person.deathday}</li>
              )}
              <li><strong>Mashhurligi:</strong> {person?.popularity?.toFixed(1)}</li>
            </ul>
          </>
        )}
      </div>
      <div>
        <h2 className="text-2xl font-semibold mb-4 border-l-4 border-blue-500 pl-4">Filmografiya</h2>
        <MovieView data={creditsData?.cast?.slice(0, 8)} loading={isLoading} count={8}/>
      </div>
    </div>
  );
};

export default React.memo(PersonDetail);
