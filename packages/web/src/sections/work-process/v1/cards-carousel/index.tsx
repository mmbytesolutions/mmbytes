'use client';

import { Container } from '@/src/components/container';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';

import SwiperCore, { Autoplay } from 'swiper';
import { useDomReady } from '@/src/hooks/dom-ready';
import { WorkprocessCard } from '../card';
import { WorkprocessSectionProps } from '..';

SwiperCore.use([Autoplay]);

export function WorkCardsCaraousl({
  cards,
}: Pick<WorkprocessSectionProps, 'cards'>) {
  const isDomReady = useDomReady();

  return (
    <>
      {isDomReady && (
        <Container>
          {cards && cards.length > 0 && (
            <div className="mt-[60px]">
              <Swiper
                className="!overflow-visible"
                speed={400}
                loop
                spaceBetween={30}
                slidesPerView={3}
                breakpoints={{
                  0: {
                    spaceBetween: 30,
                    slidesPerView: 1,
                  },
                  375: {
                    spaceBetween: 30,
                    slidesPerView: 1,
                  },
                  575: {
                    spaceBetween: 30,
                    slidesPerView: 1,
                  },
                  768: {
                    spaceBetween: 30,
                    slidesPerView: 2,
                  },
                  992: {
                    spaceBetween: 30,
                    slidesPerView: 2,
                  },
                  1200: {
                    spaceBetween: 30,
                    slidesPerView: 3,
                  },
                }}
              >
                {cards.map((card, i) => (
                  <SwiperSlide key={i}>
                    <WorkprocessCard {...card} />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          )}
        </Container>
      )}
    </>
  );
}
