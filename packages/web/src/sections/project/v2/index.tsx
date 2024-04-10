'use client';

import { SectionHeading } from '@/src/components/section-heading';
import { SectionHeadingWithoutStylingProps } from '@/src/components/section-heading/interface';
import {
  ProjectCard,
  PortfolioCardProps,
  PROJECT_CARD_IMAGE_DIMENSION,
} from '@/src/components/cards/project/v2';
import { LinkProps } from '@/src/common-types';
import { Container } from '@/src/components/container';
import { Button } from '@/src/components/button';
import { CustomLink } from '@/src/components/custom-link';
import { cn } from '@/src/utils/shadcn';
import React, { useEffect, useRef, useState } from 'react';
import Lightbox, { Slide } from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';

const loadIsotope = () => require('isotope-layout');

let Isotope;

interface ProjectFilterButtonProps {
  label: string;
  value: string;
}
export interface ProjectSectionProps {
  sectionHeading: Pick<SectionHeadingWithoutStylingProps, 'subtitle' | 'title'>;
  projectCategories: ProjectFilterButtonProps[];
  projects: PortfolioCardProps[];
  link: LinkProps;
}

export function ProjectSection({
  sectionHeading,
  link,
  projectCategories,
  projects,
}: ProjectSectionProps) {
  // Ref of isotope container
  const containerRef = useRef<HTMLDivElement | null>(null);

  // Ref to store the isotope object
  const isotopeRef = useRef<Isotope | null>(null);

  // store the filter keyword in a state
  const [activeFilter, setActiveFilter] = useState('*');

  const [open, setOpen] = useState(false);
  const [_, setImage] = useState('');
  const [index, setIndex] = useState<number>(0);

  useEffect(() => {
    // return if window doesn't exist (i.e. server side)
    if (typeof window === 'undefined') return;

    // load Isotope
    Isotope = loadIsotope();

    // use Isotope
    isotopeRef.current = new Isotope(containerRef.current, {
      itemSelector: '.filter-item',
      layoutMode: 'fitRows',
    });
  }, []);

  const handleFilterKeyChange = (key: string) => () => {
    if (isotopeRef.current) {
      if (key === '*') {
        isotopeRef.current.arrange({ filter: '*' });
      } else {
        isotopeRef.current.arrange({ filter: key });
      }

      setActiveFilter(key);
    }
  };

  const slides: Slide[] = projects.map((project) => {
    return {
      src: project.image.src,
      width: PROJECT_CARD_IMAGE_DIMENSION.width,
      height: PROJECT_CARD_IMAGE_DIMENSION.height,
    };
  });

  return (
    <section className="overflow-hidden">
      <Container>
        <div className="mb-10 flex flex-wrap items-end justify-between gap-x-20 gap-y-10 md:mb-[3.75rem]">
          <div className="max-w-[500px]">
            <SectionHeading {...sectionHeading} alignment="start" />
          </div>
          <Button asChild className="flex-none">
            <CustomLink href={link.href} openNewTab={link.openNewTab}>
              <span className="relative z-1">{link.label}</span>
            </CustomLink>
          </Button>
        </div>

        {projects && projects.length > 0 && (
          <div className="grid grid-cols-1 items-start gap-30px lg:grid-cols-[300px_1fr]">
            <div
              className={cn(
                'grid gap-5',
                '[&_.mixitup-control-active]:after:opacity-100 [&_.mixitup-control-active]:after:[transform:perspective(400px)_rotateX(0deg)] [&_.mixitup-control-active]:after:[transition:all_3.s_linear]'
              )}
            >
              {projectCategories.map((category, index) => (
                <Button
                  key={index}
                  onClick={handleFilterKeyChange(category.value)}
                  className={cn(
                    'group/button relative z-1 flex !min-h-[3.5rem] justify-between gap-2 bg-accent-700',

                    'after:bg-primary',
                    //hover
                    'hover:after:opacity-100',

                    // Add this line to conditionally apply styles for the active filter
                    activeFilter === category.value &&
                      'after:left-0 after:w-full'
                  )}
                >
                  <span className="relative z-1">{category.label}</span>
                  <svg
                    width={28}
                    height={9}
                    viewBox="0 0 28 9"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M27.3536 4.86918C27.5488 4.67391 27.5488 4.35733 27.3536 4.16207L24.1716 0.980089C23.9763 0.784827 23.6597 0.784827 23.4645 0.980089C23.2692 1.17535 23.2692 1.49193 23.4645 1.6872L26.2929 4.51562L23.4645 7.34405C23.2692 7.53931 23.2692 7.85589 23.4645 8.05116C23.6597 8.24642 23.9763 8.24642 24.1716 8.05116L27.3536 4.86918ZM4.37114e-08 5.01562L27 5.01562L27 4.01562L-4.37114e-08 4.01562L4.37114e-08 5.01562Z" />
                  </svg>
                </Button>
              ))}
            </div>

            <div
              ref={containerRef}
              className="filter-container mx-[-15px] flex"
            >
              {projects.map((project, index) => (
                <div
                  key={index}
                  className={cn(
                    'filter-item mb-10 w-full px-[15px] sm:w-1/2',
                    project.tags.join(' ')
                  )}
                >
                  <ProjectCard
                    {...project}
                    onClick={() => {
                      setOpen(true);
                      setImage(project.image.src);
                      setIndex(index);
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
        )}
      </Container>
      <Lightbox
        index={index}
        open={open}
        close={() => setOpen(false)}
        slides={slides}
      />
    </section>
  );
}
