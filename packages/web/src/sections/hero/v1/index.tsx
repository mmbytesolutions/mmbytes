'use client';

import { Container } from '@/src/components/container';

import { ImageProps, LinkProps } from '@/src/common-types';
import { Button } from '@/src/components/button';
import { CustomLink } from '@/src/components/custom-link';
import { Shapes } from './shapes';
import { heroData } from '@/data/hero/v1';
import { cn } from '@/src/utils/shadcn';
import { Swiper, SwiperSlide } from 'swiper/react';
import styles from './hero.module.css';
import SwiperCore, { EffectFade } from 'swiper';
import { Swiper as SwiperType, Navigation } from 'swiper';

// Import Swiper styles
import 'swiper/swiper-bundle.min.css';
import { useRef } from 'react';
import { FaArrowLeftLong, FaArrowRightLong } from 'react-icons/fa6';

SwiperCore.use([EffectFade, Navigation]);

const navigationButtonCommonClasses = cn(
  'w-[60px] relative z-40 h-[60px] grid place-items-center leading-none text-[1.25rem] bg-accent-900 hover:bg-primary transition-all duration-300 text-white rounded-full'
);

export interface HeroProps {
  items: {
    title: string;
    image: Omit<ImageProps, 'width' | 'height'>;
    button: LinkProps;
  }[];
}

/** This section is expected to be used at the top of a given page */
export function Hero() {
  const swiperRef = useRef<SwiperType>();
  const { items } = heroData;
  return (
    <section className={styles['hero']}>
      {items && items.length > 0 && (
        <Swiper
          effect="fade"
          loop
          speed={300}
          autoplay={{ delay: 3000 }}
          onBeforeInit={(swiper) => {
            swiperRef.current = swiper;
          }}
        >
          {items.map((item, index) => (
            <SwiperSlide key={index}>
              <div
                className={cn(
                  'relative flex items-center justify-center overflow-hidden py-[9.375rem] lg:min-h-screen'
                )}
              >
                {/* Shapes  */}
                <Shapes />

                <div
                  className={cn(
                    'absolute inset-0 -z-1  bg-accent-700 bg-cover bg-no-repeat bg-blend-luminosity [background-position:top_center] [transform:scale(1)] [transition:7000ms_ease,opacity_1500ms_ease-in]',
                    styles['hero-bg'],
                    // before
                    'before:absolute before:inset-0 before:bg-accent-900 before:opacity-80',
                    // after
                    'after:absolute after:inset-0 after:bg-gradient-1 after:from-accent-900/0 after:to-accent-900 after:[background:linear-gradient(180deg,rgba(20,20,22,0.00)_0%,#141416_100%)]'
                  )}
                  style={{ backgroundImage: `url(${item.image.src})` }}
                />

                <Container>
                  {/* Main content  */}
                  <div
                    className={cn(
                      'relative z-10 mx-auto max-w-[800px] text-center text-accent-900 dark:text-white lg:mt-[60px]',
                      styles['hero-content']
                    )}
                  >
                    <div className="space-y-6 md:space-y-8">
                      <h1 className="font-secondary text-2xl font-semibold uppercase leading-[1.1] md:text-3xl lg:text-4xl">
                        {item.title}
                      </h1>
                      <Button asChild className={cn('rounded-full')}>
                        <CustomLink
                          aria-label={item.button.label}
                          href={item.button.href}
                          openNewTab={item.button.openNewTab}
                        >
                          <span>{item.button.label}</span>
                          <svg
                            width={28}
                            height={9}
                            viewBox="0 0 28 9"
                            fill="currentColor"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M27.7911 5.02543C27.9863 4.83016 27.9863 4.51358 27.7911 4.31832L24.6091 1.13634C24.4138 0.941077 24.0972 0.941077 23.902 1.13634C23.7067 1.3316 23.7067 1.64818 23.902 1.84345L26.7304 4.67187L23.902 7.5003C23.7067 7.69556 23.7067 8.01214 23.902 8.20741C24.0972 8.40267 24.4138 8.40267 24.6091 8.20741L27.7911 5.02543ZM0.4375 5.17188L27.4375 5.17187L27.4375 4.17187L0.4375 4.17188L0.4375 5.17188Z" />
                          </svg>
                        </CustomLink>
                      </Button>
                    </div>
                  </div>
                </Container>
              </div>
            </SwiperSlide>
          ))}

          <div className="absolute right-0 top-[50%] z-50 hidden h-max w-full [transform:translateY(-50%)] lg:block">
            <Container>
              <div className="ml-auto grid max-w-max gap-2.5 px-4">
                <button
                  className={cn(navigationButtonCommonClasses)}
                  onClick={() => swiperRef.current?.slidePrev()}
                  aria-label="slide prev"
                >
                  <FaArrowLeftLong />
                </button>
                <button
                  className={cn(navigationButtonCommonClasses)}
                  onClick={() => swiperRef.current?.slideNext()}
                  aria-label="slide next"
                >
                  <FaArrowRightLong />
                </button>
              </div>
            </Container>
          </div>
        </Swiper>
      )}
    </section>
  );
}
