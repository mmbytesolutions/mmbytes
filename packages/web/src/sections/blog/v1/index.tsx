import { Container } from '@/src/components/container';
import { SectionHeading } from '@/src/components/section-heading';
import { SectionHeadingWithoutStylingProps } from '@/src/components/section-heading/interface';
import { BlogCard, BlogProps } from '../../../components/cards/blog/v1';
import { blogSectionData } from '@/data/blog-section/v1';
import { getStaggeredDelay } from '@/src/utils/set-staggered-delay';
import { SectionProps } from '@/src/common-types';
import { cn } from '@/src/utils/shadcn';

export interface BlogSectionProps {
  sectionHeading: Pick<SectionHeadingWithoutStylingProps, 'subtitle' | 'title'>;
  blogs: BlogProps[];
}

export function BlogSection({ className }: SectionProps) {
  const { sectionHeading, blogs } = blogSectionData;
  return (
    <section
      className={cn(
        'section-padding-primary overflow-hidden bg-white dark:bg-accent-700',
        className
      )}
    >
      <Container>
        <div className="mx-auto max-w-[630px]">
          <div data-aos="fade-up" data-aos-delay="100">
            <SectionHeading
              {...sectionHeading}
              alignment="center"
              hasBottomSpacing
            />
          </div>
        </div>
        {blogs && blogs.length > 0 && (
          <div className="-mx-4 flex flex-wrap justify-center gap-y-30px">
            {blogs.map((blog, index) => (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={getStaggeredDelay([200, 400, 600], index)}
                className="w-full px-4 md:w-1/2 md:px-[15px] lg:w-1/3"
              >
                <BlogCard {...blog} />
              </div>
            ))}
          </div>
        )}
      </Container>
    </section>
  );
}
