'use client'

// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';



export default function Featured() {
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      loop={true}
      spaceBetween={0}
      slidesPerView={1}
      navigation= {{ 
nextEl: '#featured_next', prevEl: '#featured_prev' }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide>
        <div className="relative">

                    <img className="saturate-0 hover:saturate-100 transition-all aspect-[16/9] w-full" src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&amp;fit=crop&amp;w=1800&amp;q=85" alt="Quiet modern home opening onto a garden" />
                    <div
                        className="absolute bottom-0 left-0 w-full text-white bg-black/20 backdrop-blur-[4px] p-8 border-t-1 border-white/20 hidden md:block">
                        <div className="flex items-center justify-between">
                            <h1 className="cormorant-garamond-300 text-[30px] leading-[36px]">A house that lets the garden in</h1>
                            <h6 className="jetbrains-mono-400 text-[10px] leading-[15px]">PORTLAND, 2025</h6>
                        </div>
                        <p className="jetbrains-mono-400 text-[11px] leading-[16.5px]">
                            Timber, plaster, and a long afternoon
                        </p>
                    </div>

                </div>
      </SwiperSlide>
      <SwiperSlide>
       <div className="relative">

                    <img className="saturate-0 hover:saturate-100 transition-all aspect-[16/9] w-full" src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&amp;fit=crop&amp;w=1800&amp;q=85" alt="Warm, sunlit interior with a view toward an adjoining room" />
                    <div
                        className="absolute bottom-0 left-0 w-full text-white bg-black/20 backdrop-blur-[4px] p-8 border-t-1 border-white/20 hidden md:block">
                        <div className="flex items-center justify-between">
                            <h1 className="cormorant-garamond-300 text-[30px] leading-[36px]">The borrowed horizon</h1>
                            <h6 className="jetbrains-mono-400 text-[10px] leading-[15px]">KYOTO, 2024</h6>
                        </div>
                        <p className="jetbrains-mono-400 text-[11px] leading-[16.5px]">
                            A quiet threshold between inside and out
                        </p>
                    </div>

                </div>
      </SwiperSlide>
    </Swiper>
  );
};