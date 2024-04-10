'use client';

import { ImageProps } from '@/src/common-types';
import { CustomLink } from '@/src/components/custom-link';
import { cn } from '@/src/utils/shadcn';
import Image from 'next/image';
import { useRef } from 'react';
import { FaPlus } from 'react-icons/fa6';

interface Social {
  icon: React.ReactNode;
  href: string;
}

export interface TeamCardProps {
  slug: string;
  image: Omit<ImageProps, 'width' | 'height'>;
  name: string;
  about: string;
  socials: Social[];
}

const imageWrapperCommonClasses = cn(
  'max-w-max overflow-hidden pointer-events-none rounded-full after:absolute  after:inset-0 after:bg-gradient-1 after:from-primary/[.53] after:to-primary/0'
);

export function TeamCard({ slug, image, name, about, socials }: TeamCardProps) {
  const mainCardWrapperRef = useRef<HTMLDivElement | null>(null);

  return (
    <div
      ref={mainCardWrapperRef}
      className="relative flex flex-col gap-4  border-b  border-body/40 py-8 max-md:text-center max-md:last:border-none lg:min-h-[132px] lg:flex-row lg:items-center lg:justify-between lg:py-10 lg:last:border-none"
    >
      {/* For mobile view  */}
      <div
        className={cn(
          imageWrapperCommonClasses,
          'relative max-md:mx-auto lg:hidden'
        )}
      >
        <Image
          src={image.src}
          alt={image.alt}
          width={226}
          height={226}
          sizes="100vw"
          className="object-cover"
        />
      </div>

      {/* For desktop view  */}
      <div
        className={cn(
          // base
          'pointer-events-none absolute z-1 hidden overflow-hidden rounded-full [transition:all_.5s_ease-out] lg:block ',
          // after
          'after:absolute after:inset-0 after:bg-gradient-1  after:from-primary/[.53] after:to-primary/0',

          // normal position
          'left-[400px] top-[90px] opacity-0 [transform:translateY(-50%)]',
          // hovered position
          '[.hovered_&]:opacity-100 lg:[.hovered_&]:left-[650px] xl:[.hovered_&]:left-[760px] 2xl:[.hovered_&]:left-[800px]'
        )}
      >
        <Image
          src={image.src}
          alt={image.alt}
          width={226}
          height={226}
          sizes="100vw"
          className={cn(
            // base
            'object-cover [transition:transform_.4s_ease-out]',
            //normal
            '[transform:scale(.8,.8)]',
            //hover
            '[.hovered_&]:[transform:scale(1,1)]'
          )}
        />
      </div>

      <div className="lg:flex lg:max-w-[590px] lg:flex-1 lg:items-center lg:justify-between lg:gap-4">
        <h3
          onMouseMove={() => {
            if (!mainCardWrapperRef.current) return null;
            mainCardWrapperRef.current.classList.add('hovered');
          }}
          onMouseLeave={() => {
            if (!mainCardWrapperRef.current) return null;
            mainCardWrapperRef.current.classList.remove('hovered');
          }}
          className="h3  lg:flex-1"
        >
          <CustomLink
            href={slug}
            className="text-accent-900 transition-colors duration-300 hover:text-primary dark:text-white dark:hover:text-primary"
          >
            {name}
          </CustomLink>
        </h3>
        <div className="lg:w-full lg:max-w-[150px] lg:text-left">
          <p>{about}</p>
        </div>
      </div>
      {socials && socials.length > 0 && (
        <div className="group relative cursor-pointer text-lg/[1] text-body">
          <span className="hidden lg:block ">
            <FaPlus />
          </span>
          <ul
            aria-label={`${name} social-links`}
            className={cn(
              'inline-flex items-center gap-2.5 lg:absolute lg:right-[calc(100%+30px)] lg:top-1/2 lg:-translate-y-1/2 lg:overflow-hidden',

              // stagger
              'lg:[&_li:nth-child(1)]:[transition-delay:200ms]',
              'lg:[&_li:nth-child(2)]:[transition-delay:300ms]',
              'lg:[&_li:nth-child(3)]:[transition-delay:400ms]',
              'lg:[&_li:nth-child(4)]:[transition-delay:500ms]',
              'lg:[&_li:nth-child(5)]:[transition-delay:600ms]',
              'lg:[&_li:nth-child(6)]:[transition-delay:700ms]',
              'lg:[&_li:nth-child(7)]:[transition-delay:800ms]',

              'transition-all ease-out lg:invisible lg:opacity-0',
              'lg:group-hover:visible lg:group-hover:opacity-100'
            )}
          >
            {socials.map((social, index) => (
              <li
                key={index}
                className={cn(
                  'opacity-0 [transform-origin:bottom] [transform:perspective(400px)_rotateY(0deg)_translateY(80px)] [transition:all_.5s_ease] group-hover:opacity-100 group-hover:[transform:perspective(400px)_rotateY(0deg)_translateY(0px)]',

                  'max-lg:[all:unset]'
                )}
              >
                <CustomLink
                  aria-label={`${name}'s social ${social.href}`}
                  href={social.href}
                  openNewTab
                  className={cn(
                    'relative z-1 inline-grid h-[42px] w-[42px] place-items-center overflow-hidden rounded-full  border-2 border-accent-800 border-opacity-20 bg-transparent text-[1.125rem]/[1] text-body transition-colors hover:border-primary hover:text-white',

                    // after
                    'after:invisible after:absolute after:inset-0 after:-z-1 after:scale-50 after:rounded-[inherit] after:bg-primary after:opacity-0 after:duration-500 after:[transition:.5s_ease-in-out]',
                    // hover
                    'hover:after:visible hover:after:scale-100 hover:after:opacity-100'
                  )}
                >
                  {social.icon}
                </CustomLink>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
