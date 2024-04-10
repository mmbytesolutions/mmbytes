import { CarouselProps } from '../../interface';

export interface CarouselPaginationProps
  extends Pick<
    CarouselProps,
    'paginationWrapperClassName' | 'paginationBulletClassName'
  > {
  totalCount: number;
  onClick: (newIndex: number) => void;
  currentSlide: number;
}
