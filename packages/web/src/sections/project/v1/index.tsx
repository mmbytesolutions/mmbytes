import { SectionHeading } from '@/src/components/section-heading';
import { SectionHeadingWithoutStylingProps } from '@/src/components/section-heading/interface';
import {
  ProjectCard,
  PortfolioCardProps,
} from '@/src/components/cards/project/v1';
import { getStaggeredDelay } from '@/src/utils/set-staggered-delay';
import { cn } from '@/src/utils/shadcn';

export interface ProjectSectionProps {
  sectionHeading: Pick<SectionHeadingWithoutStylingProps, 'subtitle' | 'title'>;
  works: PortfolioCardProps[];
  isWave?: boolean;
}

export function ProjectSection({
  sectionHeading,
  works,
  isWave = false,
}: ProjectSectionProps) {
  return (
    <section className="section-padding-primary overflow-hidden">
      <div className="mx-auto max-w-[1762px] px-4">
        <div className="mx-auto max-w-[630px]">
          <div data-aos="fade-up" data-aos-delay="100">
            <SectionHeading
              {...sectionHeading}
              alignment="center"
              hasBottomSpacing
            />
          </div>
        </div>
        {works && works.length > 0 && (
          <div className="grid gap-[1.875rem] md:grid-cols-2 lg:grid-cols-4">
            {works.map((work, index) => (
              <div
                key={index}
                data-aos={
                  isWave
                    ? getStaggeredDelay(['fade-down', 'fade-up'], index)
                    : 'fade-up'
                }
                data-aos-delay={getStaggeredDelay([200, 350, 500, 650], index)}
                className={cn(
                  isWave
                    ? getStaggeredDelay(['lg:mt-[70px]', 'mt-0'], index)
                    : ''
                )}
              >
                <ProjectCard {...work} />
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
