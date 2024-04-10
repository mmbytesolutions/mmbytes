import { CarouselProps } from '../../interface';

export interface CarouselProgressBarProps
  extends Pick<CarouselProps, 'progressWrapperClassName'> {
  progress: number;
}
