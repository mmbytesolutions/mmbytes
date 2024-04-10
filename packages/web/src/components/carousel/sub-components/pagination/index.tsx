import { generateArrayFromNumber } from '../../utils';
import { cn } from '@/src/utils/shadcn';
import { CarouselPaginationProps } from './interface';

export function CarouselPagination({
  totalCount,
  onClick,
  currentSlide,
  paginationWrapperClassName,
  paginationBulletClassName,
}: CarouselPaginationProps) {
  return (
    <div
      className={cn(
        'relative z-[4] mt-10 flex flex-wrap items-center justify-center gap-4 max-md:ml-3 lg:mt-[60px]',
        paginationWrapperClassName
      )}
    >
      {generateArrayFromNumber(totalCount).map((_, index) => {
        return (
          <span
            key={index}
            onClick={() => {
              onClick(index);
            }}
            className={cn(
              'inline-flex h-2.5 w-2.5 items-center justify-center rounded-full outline outline-2 outline-offset-[5px] outline-transparent transition-colors',
              currentSlide === index
                ? 'cursor-default bg-primary text-white  outline-primary'
                : 'cursor-pointer bg-primary',

              paginationBulletClassName
            )}
          ></span>
        );
      })}
    </div>
  );
}
