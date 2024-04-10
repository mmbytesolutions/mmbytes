import { cn } from '@/src/utils/shadcn';
import { CarouselNavigationProps } from './interface';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa6';

export function CarouselNavigation({
  isDisabled,
  direction,
  onClick,
  navigationNextBtnClassName,
  navigationPrevBtnClassName,
}: CarouselNavigationProps) {
  const disabledClasses = cn(isDisabled && 'pointer-events-none');
  return (
    <div
      className={cn(
        'inline-flex h-12 w-12 cursor-pointer items-center justify-center rounded-full bg-accent-700 text-[1rem] text-white transition-colors hover:bg-primary md:h-[60px] md:w-[60px]',
        direction === 'prev' && 'left-10',
        direction === 'next' && 'right-10',
        isDisabled && 'cursor-not-allowed  opacity-90',

        direction === 'prev' && navigationPrevBtnClassName,
        direction === 'next' && navigationNextBtnClassName
      )}
      onClick={onClick}
    >
      {direction === 'prev' && <FaArrowLeft className={disabledClasses} />}
      {direction === 'next' && <FaArrowRight className={disabledClasses} />}
    </div>
  );
}
