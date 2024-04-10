import { CarouselProps } from '../../interface';

export interface CarouselNavigationProps
  extends Pick<
    CarouselProps,
    'navigationPrevBtnClassName' | 'navigationNextBtnClassName'
  > {
  isDisabled: boolean;
  direction: 'prev' | 'next';
  onClick: (e: React.MouseEvent<HTMLSpanElement>) => void;
}
