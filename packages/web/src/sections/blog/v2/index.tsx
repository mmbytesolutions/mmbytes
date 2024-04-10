import { Container } from '@/src/components/container';
import { SectionHeading } from '@/src/components/section-heading';
import { SectionHeadingWithoutStylingProps } from '@/src/components/section-heading/interface';
import { BlogCard, BlogProps } from '../../../components/cards/blog/v2';
import { blogSectionData } from '@/data/blog-section/v2';
import { getStaggeredDelay } from '@/src/utils/set-staggered-delay';
import { LinkProps } from '@/src/common-types';
import { Button } from '@/src/components/button';
import { CustomLink } from '@/src/components/custom-link';

export interface BlogSectionProps {
  sectionHeading: Pick<SectionHeadingWithoutStylingProps, 'subtitle' | 'title'>;
  ctaButton: LinkProps;
  blogs: BlogProps[];
}

export function BlogSection() {
  const { sectionHeading, blogs, ctaButton } = blogSectionData;
  return (
    <section className="section-padding-primary overflow-hidden">
      <Container>
        <div className="mb-10 flex flex-col flex-wrap justify-between gap-x-20 gap-y-10 md:mb-[3.75rem] lg:flex-row">
          <div className=" max-w-[630px]">
            <div data-aos="fade-up" data-aos-delay="100">
              <SectionHeading {...sectionHeading} alignment="start" />
            </div>
          </div>
          <div className="flex-none lg:self-end">
            <Button asChild>
              <CustomLink
                href={ctaButton.href}
                openNewTab={ctaButton.openNewTab}
              >
                <span className="relative z-1">{ctaButton.label} </span>
              </CustomLink>
            </Button>
          </div>
        </div>
        {blogs && blogs.length > 0 && (
          <div className="-mx-4 flex flex-wrap gap-y-30px">
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
