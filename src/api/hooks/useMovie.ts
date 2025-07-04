import { useQuery } from "@tanstack/react-query";
import { api } from "..";

export const useMovie = () => {
  const getMovies = (params: any) =>
    useQuery({
      queryKey: ["movie", params],
      queryFn: () =>
        api.get("discover/movie", { params }).then((res) => res.data),
    });

  const getMovieSingle = (id: string) =>
    useQuery({
      queryKey: ["movie", id],
      queryFn: () => api.get(`movie/${id}`).then((res) => res.data),
    });

  const getMovieDetail = (id: string, path: string) =>
    useQuery({
      queryKey: ["movie", id, path],
      queryFn: () => api.get(`movie/${id}/${path}`).then((res) => res.data),
    });


    const getPersonDetail = (id: string) =>
      useQuery({
        queryKey: ["person", id],
        queryFn: () => api.get(`person/${id}`).then((res) => res.data),
      });

      const getPersonDetailPath = (id: string, path: string) =>
        useQuery({
          queryKey: ["person", id, path],
          queryFn: () => api.get(`person/${id}/${path}`).then((res) => res.data),
        });
    
  return { getMovies, getMovieSingle, getMovieDetail, getPersonDetail, getPersonDetailPath };
};
