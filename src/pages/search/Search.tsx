import { useMovie } from '@/api/hooks/useMovie'
import MovieView from '@/components/movie-view/MovieView'
import useDebounce from '@/hooks/useDebounce'
import { useParamsHook } from '@/hooks/useParamsHook'
import { SearchOutlined } from '@ant-design/icons'
import React, { useEffect, useState } from 'react'

const Search = () => {
  const {setParam, getParam} = useParamsHook()
  const { getMovieSearch } = useMovie()
  const query = getParam("query")
  const [value, setValue] = useState(query||"")
  const debounceValue = useDebounce(value, 1000)
  const { data, isLoading } = getMovieSearch({ query: query ? query : debounceValue, page: "1" })

  useEffect(()=>{
    if(debounceValue){
      setParam("query", debounceValue)
    }
  },[debounceValue])
  const SearchResults = data?.results?.filter((person: any) => person.poster_path) || []

  return (
    <div className='container mx-auto'>
      <div className='flex gap-2 border dark:border-black dark:bg-slate-900 bg-white border-gray-200 w-96 h-12 mx-auto rounded-[12px] px-3 items-center mb-16'>
        <div className='text-red-500'>
          <SearchOutlined />  
        </div>
        <input type="text" value={value} onChange={(e) => setValue(e.target.value)} className='flex-1 outline-none text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 text-sm' placeholder='Названия фильма'/>
      </div>
      {SearchResults.length > 0 ? (
        <MovieView data={SearchResults.slice(0, 12)} loading={isLoading} count={12}/>
      ) : (
        <div className='flex flex-col gap-16 items-center justify-center'>
          <h2 className='text-xl text-[#4D4D4D] leading-6 font-medium'>Страница пока пуст</h2>
          <h2 className='text-xl text-[#4D4D4D] leading-6 font-medium'>По вашему запросу ничего не найдена</h2>
        </div>
      )}
    </div>
  )
}

export default React.memo(Search)
