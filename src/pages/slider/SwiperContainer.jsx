import "./SwiperContainer.css"

import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

export const SwiperContainer = () => {
    const progressCircle = useRef(null);
    const progressContent = useRef(null);

    const onAutoplayTimeLeft = (s, time, progress) => {
        progressCircle.current.style.setProperty("--progress", 1 - progress);
        progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    };

    const img = [
        {
            id: 1,
            url:
                "https://i.imgur.com/JmrAs6G.jpg"
        },
        {
            id: 2,
            url:
                "https://cdn.wallpapersafari.com/30/71/ZGngbP.jpg"
        },
        {
            id: 3,
            url:
                "https://wallpapercave.com/wp/wp4545549.png"
        },
        {
            id: 4,
            url:
                "https://wallpapercave.com/wp/wp11190953.jpg"
        },
        {
            id: 5,
            url:
                "https://mobimg.b-cdn.net/v3/fetch/01/0146713570033ea5f8b292b5f5afde1f.jpeg"
        },
        {
            id: 6,
            url:
                "https://cdn.wallpapersafari.com/78/69/j7lJtz.jpg"
        },
        {
            id: 7,
            url:
                "https://wallpapers.com/images/hd/one-piece-and-hunter-x-hunter-eaggafb6sbb4679x.jpg"
        },
        {
            id: 8,
            url:
                "https://images.hdqwalls.com/download/kimetsu-no-yaiba-anime-4k-yn-1360x768.jpg"
        },
        {
            id: 9,
            url:
                "https://www.pixelstalk.net/wp-content/uploads/images6/Anime-HD-Wallpaper-4K-Free-download.jpg"
        },
        {
            id: 10,
            url:
                "https://wallpaperaccess.com/full/9336992.gif"
        }
    ];

    return (
        <>
            <Swiper
                modules={[Autoplay, Pagination, Navigation]}
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false
                }}
                pagination={{
                    clickable: true
                }}
                navigation={true}
                onAutoplayTimeLeft={onAutoplayTimeLeft}
                className="mySwiper"

            >
                {img.map((img) => {
                    return (
                        <SwiperSlide className="swiper-slide" key={img.id}>
                            {" "}
                            <img src={img.url} alt="slider" />{" "}
                        </SwiperSlide>
                    );
                })}

                <div className="autoplay-progress" slot="container-end">
                    <svg viewBox="0 0 48 48" ref={progressCircle}>
                        <circle cx="24" cy="24" r="20"></circle>
                    </svg>
                    <span ref={progressContent}></span>
                </div>
            </Swiper>
        </>
    );
};
