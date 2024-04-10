'use client';

import 'keen-slider/keen-slider.min.css';
import { useState } from 'react';
import { useKeenSlider } from 'keen-slider/react';
import { CarouselProps, ITEMS_PER_SLIDE, ITEM_GAP } from './interface';
import { CarouselAutoPlayPlugin, carouselConfig } from './utils';
import { CarouselNavigation } from './sub-components/navigation';
import { CarouselPagination } from './sub-components/pagination';
import { CarouselProgressBar } from './sub-components/progress';
import { cn } from '@/src/utils/shadcn';

/**
 * This is the base carousel component.
 */
export function Carousel({
  children,
  haveOffset = true,
  transitionSpeed = 1000,
  itemsPerSlide = ITEMS_PER_SLIDE,
  itemGap = ITEM_GAP,
  loop = false,
  mainWrapperClassName,
  hasNavigation = false,
  navigationWrapperClassName,
  navigationPrevBtnClassName,
  navigationNextBtnClassName,
  hasPagination = false,
  paginationWrapperClassName,
  paginationBulletClassName,
  hasProgress = false,
  progressWrapperClassName,
  autoPlay,
}: CarouselProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [sliderReady, setSliderReady] = useState(false);

  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>(
    {
      ...carouselConfig({ transitionSpeed, itemsPerSlide, itemGap, loop }),
      slideChanged(slider) {
        setCurrentSlide(slider.track.details.rel);
      },
      created() {
        setSliderReady(true);
      },
    },
    [CarouselAutoPlayPlugin(autoPlay?.interval, autoPlay?.pauseOnHover)]
  );

  // Pagination, Progress, SlidePerView
  let progress: number = 0;
  let paginationDots: number = 0;
  let slidePerView: number = 0;

  if (
    instanceRef.current &&
    instanceRef.current?.options.slides &&
    typeof instanceRef.current.options.slides === 'object' &&
    typeof instanceRef.current?.options.slides.perView === 'number'
  ) {
    slidePerView = Math.floor(instanceRef.current?.options.slides.perView);
    if (loop) {
      progress = (currentSlide + 1) / instanceRef.current?.slides.length;
      paginationDots = instanceRef.current?.slides.length;
    } else {
      progress =
        (currentSlide + instanceRef.current?.options.slides.perView) /
        instanceRef.current?.slides.length;
      paginationDots = Math.ceil(
        instanceRef.current?.slides.length -
          instanceRef.current?.options.slides.perView +
          1
      );
    }
  }

  return (
    <div className="relative">
      <div className="relative flex flex-col">
        <div
          ref={sliderRef}
          className={cn(
            'keen-slider max-md:order-2',
            haveOffset && '!overflow-visible',
            mainWrapperClassName
          )}
        >
          {children}
        </div>
        {/* Navigation  */}
        {hasNavigation && sliderReady && instanceRef.current && (
          <div
            className={cn(
              'flex flex-wrap gap-5 max-md:order-1 max-md:mb-8 md:absolute md:right-0 md:top-[-136px] md:justify-center',
              navigationWrapperClassName
            )}
          >
            <CarouselNavigation
              direction="prev"
              onClick={(e: React.MouseEvent<HTMLSpanElement>) => {
                e.stopPropagation();
                instanceRef.current?.prev();
              }}
              isDisabled={!loop && currentSlide === 0}
              navigationPrevBtnClassName={navigationPrevBtnClassName}
            />
            <CarouselNavigation
              direction="next"
              onClick={(e: React.MouseEvent<HTMLSpanElement>) => {
                e.stopPropagation();
                instanceRef.current?.next();
              }}
              isDisabled={
                !loop &&
                currentSlide ===
                  instanceRef.current.track.details.slides.length - slidePerView
              }
              navigationNextBtnClassName={navigationNextBtnClassName}
            />
          </div>
        )}
      </div>

      {/* ProgressBar  */}
      {hasProgress && sliderReady && instanceRef.current && (
        <CarouselProgressBar
          progress={progress}
          progressWrapperClassName={progressWrapperClassName}
        />
      )}

      {/* Pagination */}
      {hasPagination && sliderReady && instanceRef.current && (
        <CarouselPagination
          totalCount={paginationDots}
          onClick={(newIndex: number) => {
            instanceRef.current?.moveToIdx(newIndex);
          }}
          currentSlide={currentSlide}
          paginationWrapperClassName={paginationWrapperClassName}
          paginationBulletClassName={paginationBulletClassName}
        />
      )}
    </div>
  );
}
