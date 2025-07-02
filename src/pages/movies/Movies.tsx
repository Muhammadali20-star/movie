import { useMovie } from "@/api/hooks/useMovie";
import MovieView from "@/components/movie-view/MovieView";
import React from "react";
import { Pagination } from "antd";
import { useGenre } from "@/api/hooks/useGenre";
import Genre from "@/components/genre/Genre";
import { useSearchParams } from "react-router-dom";

const Movies = () => {
  const { getMovies } = useMovie();
  const { getGenres } = useGenre();

  const [params, setParams] = useSearchParams();

  const page = parseInt(params.get("page") || "1", 10);
  const pageSize = parseInt(params.get("pageSize") || "20", 10);

  const { data: genreData } = getGenres();
  const { data } = getMovies({ page, without_genres: "18,36,27,10749",});


  const handleChangePage = (newPage: number, newPageSize: number) => {
    const updatedParams = new URLSearchParams(params.toString());

    if (newPageSize !== pageSize) {
      updatedParams.set("pageSize", newPageSize.toString());
      updatedParams.set("page", "1");
    } else {
      updatedParams.set("page", newPage.toString());
    }

    setParams(updatedParams);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div>
      <Genre data={genreData?.genres} />
          <MovieView data={data?.results} />
          <div className="grid place-items-center mt-8 mb-8">
            <Pagination
              current={page}
              pageSize={pageSize}
              total={100}
              onChange={handleChangePage}
              showSizeChanger
            />
          </div>
    </div>
  );
};

export default React.memo(Movies);
