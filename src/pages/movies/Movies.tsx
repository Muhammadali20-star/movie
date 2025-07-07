import { useMovie } from "@/api/hooks/useMovie";
import MovieView from "@/components/movie-view/MovieView";
import React from "react";
import { Pagination } from "antd";
import { useGenre } from "@/api/hooks/useGenre";
import Genre from "@/components/genre/Genre";
import { useParamsHook } from "@/hooks/useParamsHook";
import "./style.css"

const Movies = () => {
  const { getMovies } = useMovie();
  const { getGenres } = useGenre();
  const { getParam, setParam } = useParamsHook();

  const genre = getParam("genre");
  const page = Number(getParam("page")) || 1;

  const handlePagination = (value: number) => {
    setParam("page", value.toString());
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const { data: genreData } = getGenres();
  const { data, isLoading } = getMovies({
    page,
    with_genres: genre,
    without_genres: "18,36,27,10749",
  });

  return (
    <div className="container mx-auto px-4">
      <Genre data={genreData?.genres} />
      <MovieView data={data?.results} loading={isLoading} count={20} />
      <div className="mt-14 mb-16 flex justify-center">
        <div className="w-full max-w-[480px] rounded-[14px] bg-gradient-to-br from-white via-gray-50 to-gray-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 border dark:border-slate-700 border-gray-200  p-3">
          <Pagination
            current={page}
            onChange={handlePagination}
            pageSize={20}
            total={data?.total_results <= 10_000 ? data?.total_results : 10_000}
            showSizeChanger={false}
            className="custom-pagination"
          />
        </div>
      </div>
    </div>
  );
};

export default React.memo(Movies);
