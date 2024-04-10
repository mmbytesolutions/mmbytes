import { CustomLink } from '@/src/components/custom-link';
import { BREAKPOINTS } from '@/src/themes/interface';
import { cn } from '@/src/utils/shadcn';
import Image, { ImageProps } from 'next/image';
import { FaArrowRight, FaComments, FaUser } from 'react-icons/fa6';

export interface BlogProps {
  slug: string;
  image: Omit<ImageProps, 'width' | 'height'>;
  date?: {
    day: string;
    month: string;
  };
  author: {
    name: string;
    slug: string;
  };
  commentCount?: number;
  title: string;
}

const dateClasses = cn('leading-none capitalize');
const inlineFlexLayoutClasses = cn('inline-flex items-center gap-2 text-white');
const iconClasses = cn('text-sm text-white');

export function BlogCard({
  slug,
  image,
  author,
  title,
  commentCount,
  date,
}: BlogProps) {
  return (
    <article className="group/blog relative z-1 flex h-full min-h-[452px] flex-col  overflow-hidden rounded-5 p-6 md:p-[1.875rem]">
      <span className="absolute inset-0 z-[2] bg-accent-900/50"></span>
      <Image
        src={image.src}
        alt={image.alt}
        fill
        sizes={`
          (min-width:${BREAKPOINTS.md}) 50vw, 
          (min-width:${BREAKPOINTS.lg}) 33vw,
          100vw
          `}
        className={cn(
          // Normal classes
          'pointer-events-none object-cover opacity-0 [filter:blur(10px)] [transform:translatex(50%)_scalex(2)] [transition:all_500ms_ease]',
          // on card hover classes
          'group-hover/blog:opacity-100 group-hover/blog:[filter:blur(0px)] group-hover/blog:[transform:translatex(0)_scalex(1)]'
        )}
      />
      <Image
        src={image.src}
        alt={image.alt}
        fill
        sizes={`
          (min-width:${BREAKPOINTS.md}) 50vw, 
          (min-width:${BREAKPOINTS.lg}) 33vw,
          100vw
          `}
        className={cn(
          // Normal classes
          'pointer-events-none object-cover [transition:all_500ms_ease]',
          // on card hover classes
          'group-hover/blog:opacity-0 group-hover/blog:[filter:blur(10px)] group-hover/blog:[transform:translatex(-50%)_scalex(2)]'
        )}
      />

      {/* Content  */}
      <div className="relative z-10 flex h-full flex-1 flex-col">
        {date && (
          <div>
            <div className="inline-grid min-h-[77px] min-w-[75px] items-center justify-center rounded-5 bg-accent-700 px-4 py-3 text-center font-secondary text-md font-bold text-white transition-colors group-hover/blog:bg-primary md:text-lg">
              <span className={dateClasses}>{date.day}</span>
              <span className={dateClasses}>{date.month}</span>
            </div>
          </div>
        )}
        <div className="mt-auto max-w-[270px] space-y-2 text-white md:space-y-5">
          <div className="inline-flex flex-wrap items-center gap-x-5 gap-y-2">
            <p className={inlineFlexLayoutClasses}>
              <span className={iconClasses}>
                <FaUser />
              </span>
              <span>
                By{' '}
                <CustomLink
                  className="transition-colors duration-300 hover:text-primary"
                  href={author.slug}
                >
                  {author.name}
                </CustomLink>
              </span>
            </p>
            <p className={inlineFlexLayoutClasses}>
              <span className={iconClasses}>
                <FaComments />
              </span>
              <span>Comments ({String(commentCount).padStart(2, '0')})</span>
            </p>
          </div>
          <h3 className="text-md font-bold leading-[1.25]  md:text-lg">
            <CustomLink
              aria-label={title}
              href={slug}
              className="text-white transition-colors duration-300 hover:text-primary"
            >
              {title}
            </CustomLink>
          </h3>
          <div>
            <CustomLink
              href={slug}
              className={cn(
                inlineFlexLayoutClasses,
                'gap-[.625rem] font-secondary text-base font-bold uppercase leading-[2] tracking-wide text-white transition-colors duration-300 hover:text-primary'
              )}
            >
              <span>Read More</span>
              <span className="text-primary">
                <FaArrowRight />
              </span>
            </CustomLink>
          </div>
        </div>
      </div>
    </article>
  );
}
