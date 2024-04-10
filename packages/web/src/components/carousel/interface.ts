import { Breakpoints } from '@/src/themes/interface';
import { ClassValue } from 'clsx';

type BreakpointsType = Breakpoints<number> & {
  initial: number;
};

export interface CarouselProps {
  /** The content inside the carousel. */
  children: React.ReactNode;
  /** The transitionSpeed of the slide transition. */
  transitionSpeed?: number;
  /** This controls whether the carousel will loop its content */
  loop?: boolean;
  /** This controls whether the carousel autoplay  interval and pauseOnHover option.
   *  After select option from stroybook please refresh this page for sync*/
  autoPlay?: {
    interval: number;
    pauseOnHover?: boolean;
  };
  /** This controls the offset of the carousel */
  haveOffset?: boolean;
  /** This controls the space between each slide by device width */
  itemGap?: BreakpointsType;
  /** This controls the items shown each slide by device width */
  itemsPerSlide?: BreakpointsType;
  mainWrapperClassName?: ClassValue;
  /** This controls whether the navigation control will render */
  hasNavigation?: boolean;
  navigationWrapperClassName?: ClassValue;
  navigationPrevBtnClassName?: ClassValue;
  navigationNextBtnClassName?: ClassValue;
  /** This controls whether the dots control will render */
  hasPagination?: boolean;
  paginationWrapperClassName?: ClassValue;
  paginationBulletClassName?: ClassValue;
  /** This controls whether the progress control will render */
  hasProgress?: boolean;
  progressWrapperClassName?: ClassValue;
}

export const ITEM_GAP: BreakpointsType = {
  initial: 10,
  sm: 12,
  md: 16,
  lg: 20,
  xl: 24,
  '2xl': 24,
};

export const ITEMS_PER_SLIDE: BreakpointsType = {
  initial: 1.2,
  sm: 1.2,
  md: 2,
  lg: 3,
  xl: 4,
  '2xl': 4,
};
