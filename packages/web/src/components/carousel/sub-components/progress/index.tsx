import { cn } from '@/src/utils/shadcn';
import { CarouselProgressBarProps } from './interface';

export function CarouselProgressBar({
  progress,
  progressWrapperClassName,
}: CarouselProgressBarProps) {
  return (
    <div
      className={cn(
        'relative mt-10 h-1.5 max-w-[300px] overflow-hidden rounded-5 bg-accent-700 md:mx-auto md:h-2.5 lg:mt-20',
        progressWrapperClassName
      )}
    >
      <span
        className="absolute inset-0 z-[1] origin-left rounded-[inherit] bg-primary transition-[width] duration-500"
        style={{
          width: `${progress * 100}%`,
        }}
      ></span>
    </div>
  );
}
