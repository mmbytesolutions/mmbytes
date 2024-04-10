import { contactSectionData } from '@/data/contact-section/v1';
import { ImageProps, blurDataUrl } from '@/src/common-types';
import { Container } from '@/src/components/container';
import { SectionHeading } from '@/src/components/section-heading';
import { SectionHeadingWithoutStylingProps } from '@/src/components/section-heading/interface';
import { BREAKPOINTS } from '@/src/themes/interface';
import Image from 'next/image';
import { Form } from './form';

export interface ContactSectionProps {
  sectionHeading: SectionHeadingWithoutStylingProps;
  image: Omit<ImageProps, 'width' | 'height'>;
}

export function ContactSection() {
  const { sectionHeading, image } = contactSectionData;
  return (
    <section className="section-padding-primary">
      <div className="relative py-[60px]">
        {/* Image area  */}
        <div className="absolute left-0 top-0 z-1 h-full w-full overflow-hidden bg-red-500 md:w-[56%] md:rounded-r-5">
          <Image
            src={image.src}
            alt={image.alt}
            fill
            className="object-cover"
            sizes={`(min-width: ${BREAKPOINTS.md}) 60vw, 100vw`}
            placeholder="blur"
            blurDataURL={blurDataUrl}
          />
        </div>

        <Container>
          <div className="ml-auto md:w-1/2">
            <div className="relative z-[2] rounded-5 bg-white p-10 shadow-1 dark:bg-accent-700 lg:p-[60px]">
              <div className="mb-30px">
                <SectionHeading {...sectionHeading} />
              </div>
              <Form />
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
}
