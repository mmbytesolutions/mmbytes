import { Container } from '@/src/components/container';
import { SectionHeading } from '@/src/components/section-heading';
import { SectionHeadingWithoutStylingProps } from '@/src/components/section-heading/interface';
import { getStaggeredDelay } from '@/src/utils/set-staggered-delay';
import { cn } from '@/src/utils/shadcn';
import { ClassValue } from 'clsx';
import { ServiceCard, ServiceProps } from 'src/components/cards/service/v2';

export interface ServiceSectionProps {
  sectionHeading: SectionHeadingWithoutStylingProps;
  services: ServiceProps[];
  className?: ClassValue;
}

export function ServiceSection({
  sectionHeading,
  services,
  className,
}: ServiceSectionProps) {
  return (
    <section className={cn('section-padding-primary', className)}>
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
        {services && services.length > 0 && (
          <div className="-mx-4 flex flex-wrap justify-center gap-y-30px">
            {services.map((service, index) => (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={getStaggeredDelay([200, 400, 600], index)}
                className="w-full px-4 md:w-1/2 md:px-[15px] lg:w-1/3"
              >
                <ServiceCard {...service} />
              </div>
            ))}
          </div>
        )}
      </Container>
    </section>
  );
}
