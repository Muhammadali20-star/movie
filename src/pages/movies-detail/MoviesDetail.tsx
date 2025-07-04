import { useMovie } from "@/api/hooks/useMovie";
import { IMAGE_URL } from "@/const";
import {  useNavigate, useParams } from "react-router-dom";
import { Image } from "antd";
import MovieView from "@/components/movie-view/MovieView";
import React from "react";
import { DollarOutlined } from "@ant-design/icons";

type ICastMember = {
  id: number;
  original_name: string;
  character: string;
  profile_path: string | null;
};

const MovieDetail = () => {
  const { id } = useParams();
  const { getMovieSingle, getMovieDetail } = useMovie();
  const navigate = useNavigate()

  const { data } = getMovieSingle(id || "");
  const { data: similarData } = getMovieDetail(id || "", "similar");
  const { data: imagesData } = getMovieDetail(id || "", "images");
  const { data: creditsData } = getMovieDetail(id || "", "credits");

  return (
    <div className="container mx-auto px-4 py-10 text-gray-900 dark:text-white">
      {data?.backdrop_path && (
        <div className="relative mb-10 rounded-xl overflow-hidden shadow-lg">
          <img src={IMAGE_URL + data.backdrop_path} alt={data.title} loading="lazy" className="w-full h-[300px] sm:h-[450px] object-cover"/>
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent p-6 flex items-end">
            <h1 className="text-3xl sm:text-4xl font-bold text-white">{data?.title}</h1>
          </div>
        </div>
      )}
      {!!data?.budget && (
        <div className="mb-12">
          <p className="text-lg font-medium text-gray-700 dark:text-gray-300"><DollarOutlined /> Бюджет: <span className="font-bold">{data.budget.toLocaleString()} USD</span></p>
        </div>
      )}
      {imagesData?.backdrops?.length > 0 && (
        <div className="mb-16">
          <h2 className="text-2xl font-semibold mb-4 border-l-4 border-red-500 pl-3">Кадры из фильма</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {imagesData.backdrops.slice(0, 12).map((item: any, index: number) => (
              <div key={index} className="rounded-lg overflow-hidden hover:scale-[1.02] transition-all duration-300">
              <Image className="w-full object-contain" loading="lazy" src={IMAGE_URL + item.file_path} />
              </div>
            ))}
          </div>
        </div>
      )}
      {creditsData?.cast?.length > 0 && (
          <div className="mb-16">
            <h2 className="text-2xl font-semibold mb-4 border-l-4 border-blue-500 pl-3">Актеры</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
              {creditsData.cast.slice(0, 15).map((person: ICastMember) => (
                  <div key={person.id} className="bg-white dark:bg-[#1a1a1a] object-contain rounded-xl">
                    <img src={IMAGE_URL + person.profile_path} onClick={()=> navigate(`/person/${person.id}`)} alt={person.original_name} loading="lazy" className="w-full h-48 object-cover"/>
                    <div className="p-3 text-center">
                      <h3 className="text-sm font-semibold">{person.original_name}</h3>
                      <p className="text-xs text-gray-500 dark:text-gray-400">{person.character}</p>
                    </div>
                  </div>
              ))}
            </div>
          </div>
        )}
      {similarData?.results?.length > 0 && (
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 border-l-4 border-green-500 pl-3">Похожие фильмы</h2>
          <MovieView data={similarData.results.slice(0, 4)} />
        </div>
      )}
    </div>
  );
};

export default React.memo(MovieDetail);
