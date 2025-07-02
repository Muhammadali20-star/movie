import React, { useState, type FC } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import type { Swiper as SwiperClass } from 'swiper';



import { useMovie } from '@/api/hooks/useMovie';
import { IMAGE_URL } from '@/const';
import { PlayCircleFilled } from '@ant-design/icons';
import type { IMovie } from '@/types';



const Hero: FC = () => {
  const { getMovies } = useMovie();
  const { data: movieData } = getMovies({ without_genres: "18,36,27,10749" });

  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperClass | null>(null);

  return (
    <>
      <Swiper
        navigation
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2"
      >
        {movieData?.results?.slice(0, 5).map((movie: IMovie) => (
          <SwiperSlide key={movie.id}>
            <div className="relative h-[500px] rounded overflow-hidden">
              <img src={IMAGE_URL + movie.backdrop_path} alt={movie.title} className="w-full h-full object-cover"/>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col items-center justify-end text-white pb-10 px-4 text-center">
                <h2 className="text-3xl font-bold mb-2">{movie.title}</h2>
                <p className="text-sm mb-4">2024 · Комедия · 1ч34м · EN · 6+</p>
                <button className="bg-white text-red-600 font-medium px-6 py-2 rounded shadow flex items-center gap-2 text-sm"> <PlayCircleFilled className='text-2xl' /> Смотреть</button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <Swiper
        onSwiper={setThumbsSwiper}
        slidesPerView={4}
        spaceBetween={10}
        freeMode
        watchSlidesProgress
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper mt-4 mb-20"
        >
        {movieData?.results?.slice(0, 5).map((movie: IMovie) => (
          <SwiperSlide key={movie.id}>
            <img src={IMAGE_URL + movie.poster_path} alt={movie.title} className="w-full h-40 object-cover"/>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default React.memo(Hero);
