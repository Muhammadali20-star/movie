import { useMovie } from '@/api/hooks/useMovie'
import React from 'react'
import MovieView from '@/components/movie-view/MovieView'
import Hero from '@/components/hero/hero'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate =useNavigate()
  const {getMovies} = useMovie()
  const {data, isLoading} = getMovies({page: 1, without_genres: "18,36,27,10749"})
  return (
    <div className='container mx-auto'>
      <Hero/>
      <div className="flex justify-between items-center mt-5">
        <h2 className="text-xl text-[#000000] font-medium leading-6 dark:text-white">На неделе</h2>
        <h2
          className="text-sm text-red-500 font-medium leading-5 cursor-pointer"
          onClick={() => navigate("/movies")}
        >
          Показать все
        </h2>
      </div>
      <MovieView data={data?.results?.slice(0, 8)} loading={isLoading} count={8}/>
    </div>
  )
}

export default React.memo(Home)