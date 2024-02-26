import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import styles from "./Carousel.module.css";

// import './styles.css';

// import required modules
import { Navigation } from "swiper/modules";
import LeftArrow from "../../assets/LeftArrow.svg";
import RightArrow from "../../assets/RightArrow.svg";

export default function Carousel({ Items }) {
  return (
    <div className={styles.wrapper}>
      <Swiper
        style={{ padding: "0px 20px" }}
        navigation={{
          nextEl: ".image-swiper-button-next",
          prevEl: ".image-swiper-button-prev",
          disabledClass: "swiper-button-disabled"
        }}
        modules={[Navigation]}
        className="mySwiper"
        spaceBetween={40}
        slidesPerView={6}
      >
        {Items.map((Item, index) => (
          <SwiperSlide key={index}>{Item}</SwiperSlide>
        ))}
        <button className={"image-swiper-button-prev "+styles.leftNavigation}>
          <img src={LeftArrow} />
        </button>
        <button className={"image-swiper-button-next "+styles.rightNavigation}>
          <img src={RightArrow} />
        </button>
      </Swiper>
    </div>
  );
}

// const CarouselLeftNavigation = () => {
//     const swiper=useSwiper()
//     const [isBeginning,setIsBeginning]=useState(swiper.isBeginning)
//     useEffect(()=>{
//        swiper.on("slideChange",function(){
//         setIsBeginning(swiper.isBeginning)
//        })
//     },[swiper])
//   return (
//     <div className={styles.leftNavigation}>
//       {!isBeginning ?<img src={LeftArrow} onClick={()=> swiper.slidePrev()}/> :null }
//     </div>
//   )
// }

// export default CarouselLeftNavigation
