import { aboutSectionData } from '@/data/about-section/v2';
import { ImageProps } from '@/src/common-types';
import { Container } from '@/src/components/container';
import { SectionHeading } from '@/src/components/section-heading';
import { SectionHeadingWithoutStylingProps } from '@/src/components/section-heading/interface';
import { VideoPlayer } from '@/src/components/video-player';
import { cn } from '@/src/utils/shadcn';
import { FaCircleCheck } from 'react-icons/fa6';

export interface AboutSectionProps {
  sectionHeading: SectionHeadingWithoutStylingProps;
  aboutUsPoints: string[];
  image: Omit<ImageProps, 'width' | 'height'>;
  videoUrl: string;
}

export function AboutSection() {
  const { sectionHeading, aboutUsPoints, image, videoUrl } = aboutSectionData;
  return (
    <section className="section-padding-primary overflow-hidden">
      <Container>
        <div className="flex flex-col items-center justify-between gap-x-16 gap-y-[60px] lg:flex-row xl:gap-x-[120px]">
          <div
            className="lg:w-1/2"
            data-aos="fade-up-right"
            data-aos-delay="400"
          >
            <SectionHeading {...sectionHeading} />
            {aboutUsPoints && aboutUsPoints.length > 0 && (
              <ul
                aria-label="about us point"
                className="mt-10 grid max-w-[560px] gap-1 gap-x-20 sm:grid-cols-2 md:gap-2"
              >
                {aboutUsPoints.map((point, index) => (
                  <li className="flex items-center gap-3 lg:gap-4" key={index}>
                    <span className="text-lg text-primary">
                      <FaCircleCheck />
                    </span>
                    <span className="block font-secondary text-md font-bold leading-[1.5] text-white">
                      {point}
                    </span>
                  </li>
                ))}
              </ul>
            )}
          </div>
          <div className="lg:w-[45%]">
            <div
              className="group relative z-1 mx-auto"
              data-aos="fade-up-left"
              data-aos-delay="400"
            >
              <VideoPlayer
                thumbnail={{
                  src: image.src,
                  alt: image.alt,
                  width: 640,
                  height: 678,
                }}
                videoUrl={videoUrl}
                palyBtnClassName={cn(
                  'relative',

                  // after
                  'after:absolute after:inset-0 after:[box-shadow:0_0_0_0_rgb(255_255_255/60%)] after:[animation-delay:.6s] after:transition-all  after:animate-ripple after:rounded-[inherit]',

                  // before
                  'before:absolute before:inset-0 before:[box-shadow:0_0_0_0_rgb(255_255_255/60%)] before:transition-all before:animate-ripple before:rounded-[inherit]'
                )}
              />
              {/* Forground shape  */}
              <div className="absolute left-0 top-0 -z-1 h-full w-full rotate-3 rounded-5 bg-primary transition-transform duration-350 group-hover:rotate-[2deg] md:rotate-[5deg]"></div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
