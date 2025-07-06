import { useMovie } from '@/api/hooks/useMovie'
import React from 'react'
import MovieView from '@/components/movie-view/MovieView'
import Hero from '@/components/hero/hero'

const Home = () => {
  const {getMovies} = useMovie()
  const {data, isLoading} = getMovies({page: 1, without_genres: "18,36,27,10749"})
  return (
    <div className='container mx-auto'>
      <Hero/>
      <MovieView data={data?.results?.slice(0, 8)} loading={isLoading} count={8}/>
    </div>
  )
}

export default React.memo(Home)