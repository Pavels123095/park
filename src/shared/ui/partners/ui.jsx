'use client';

import {Swiper, SwiperSlide} from "swiper/react";
import {useRef} from "react";

import {UISection} from "../../../shared/ui/section";
import {RentersSingleTile} from "../../../entities/renters-single-tile";

import 'swiper/css';
import 'swiper/css/bundle';
import styles from './styles.module.scss';
import {ButtonCircleTransparentWhite} from "../buttons";

export function SinglePagePartners({data}) {
    const swiperRef = useRef(null);

    function handlePrev() {
        (swiperRef.current && swiperRef.current.swiper) && swiperRef.current.swiper.slidePrev();
    }

    function handleNext() {
        (swiperRef.current && swiperRef.current.swiper) && swiperRef.current.swiper.slideNext();
    }

    return (
        <UISection defaultClass={styles['single-stock-partners']}>
            <div className={styles['single-stock-partners__heading']}>Партнеры</div>

            <div className={styles['single-stock-partners__slider-buttons']}>
                <div onClick={handlePrev}>
                    <ButtonCircleTransparentWhite isRevers={true}/>
                </div>
                <div onClick={handleNext}>
                    <ButtonCircleTransparentWhite isRevers={false}/>
                </div>
            </div>

            <Swiper
                ref={swiperRef}
                loop
                slidesPerView={1.4}
                spaceBetween={20}
                breakpoints={{
                    481: {
                        slidesPerView: 2.5,
                    },
                    721: {
                        slidesPerView: 4,
                    }
                }}
            >
                {
                    data?.map((tile, index) => (
                        <SwiperSlide key={index}>
                            <RentersSingleTile data={tile} />
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </UISection>
    )
}