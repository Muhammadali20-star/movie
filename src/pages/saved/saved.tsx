import MovieView from '@/components/movie-view/MovieView'
import { useStore } from '@/zustand/useStore'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const Savet = () => {
  const navigate = useNavigate()
  const { saved } = useStore()

  return (
    <div className='container'>
      {saved.length > 0 ? (
       <div>
         <h2 className='text-3xl text-[#FFFFFF] font-semibold '>Saved</h2>
         <MovieView data={saved} count={saved.length}/>
       </div>
      ) : (
        <div className="min-h-[60vh] flex flex-col items-center justify-center text-center gap-4">
          <h2 className="text-xl text-[#4D4D4D] font-medium">В избранном пока пусто</h2>
          <p className="text-sm text-[#7D7D7D] max-w-sm">Сохраняйте товары, которые понравились, чтобы долго не искать</p>
          <button onClick={() => navigate('/movies')} className="mt-4 px-6 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition">
            Перейти в каталог
          </button>
        </div>
      )}
    </div>
  )
}

export default React.memo(Savet)
