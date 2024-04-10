import { ImageProps } from '@/src/common-types';
import { CustomLink } from '@/src/components/custom-link';
import { cn } from '@/src/utils/shadcn';
import Image from 'next/image';

import styles from './styles.module.css';
import { ClassValue } from 'clsx';

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
  contentWrapperClassName?: ClassValue;
}

export function TeamCard({
  slug,
  image,
  name,
  about,
  socials,
  contentWrapperClassName,
}: TeamCardProps) {
  return (
    <div className="group">
      <div
        className={cn(
          // General
          'relative z-1 mr-30px overflow-hidden rounded-5',

          // after => image overlay effect
          'after:pointer-events-none after:absolute after:left-0 after:top-0 after:z-1 after:h-0 after:w-full after:bg-white/30 after:opacity-100',
          // hover
          'group-hover:transition-all group-hover:after:h-full group-hover:after:opacity-0 group-hover:after:duration-400 group-hover:after:ease-linear'
        )}
      >
        <Image
          src={image.src}
          alt={image.alt}
          width={640}
          height={712}
          sizes="
          (min-width:768px) 50vw, 
          (min-width:1024px) 33vw,
          100vw
          "
          className="object-cover transition-transform duration-500 [transform:scale(1.05)] group-hover:[transform:scale(1)]"
        />
        {socials && socials.length > 0 && (
          <div className="absolute bottom-0 left-30px">
            <div className={cn('pt-2.5', styles['social-hoverable-area'])}>
              <div
                className={cn(
                  'inline-grid h-[65px] w-[65px] cursor-pointer place-items-center rounded-5 bg-primary transition-colors duration-300',
                  styles['hover-me']
                )}
              >
                <svg
                  width="18"
                  height="19"
                  viewBox="0 0 18 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17.5 4.5C17.5 6.57031 15.8203 8.25 13.75 8.25C12.7344 8.25 11.7969 7.85938 11.1328 7.23438L7.46094 9.07031C7.46094 9.1875 7.46094 9.34375 7.46094 9.5C7.46094 9.65625 7.46094 9.8125 7.46094 9.96875L11.1328 11.8047C11.7969 11.1797 12.7344 10.75 13.75 10.75C15.8203 10.75 17.5 12.4297 17.5 14.5C17.5 16.5703 15.8203 18.25 13.75 18.25C11.6406 18.25 10 16.5703 10 14.5C10 14.3438 10 14.1875 10 14.0703L6.32812 12.2344C5.66406 12.8594 4.72656 13.25 3.75 13.25C1.64062 13.25 0 11.5703 0 9.5C0 7.42969 1.64062 5.75 3.75 5.75C4.72656 5.75 5.66406 6.17969 6.32812 6.80469L10 4.96875C10 4.8125 10 4.65625 10 4.5C10 2.42969 11.6406 0.75 13.75 0.75C15.8203 0.75 17.5 2.42969 17.5 4.5ZM3.71094 10.75C4.41406 10.75 4.96094 10.2031 4.96094 9.5C4.96094 8.83594 4.41406 8.25 3.71094 8.25C3.04688 8.25 2.46094 8.83594 2.46094 9.5C2.46094 10.2031 3.04688 10.75 3.71094 10.75ZM13.75 3.25C13.0469 3.25 12.5 3.83594 12.5 4.5C12.5 5.20312 13.0469 5.75 13.75 5.75C14.4141 5.75 15 5.20312 15 4.5C15 3.83594 14.4141 3.25 13.75 3.25ZM13.75 15.75C14.4141 15.75 15 15.2031 15 14.5C15 13.8359 14.4141 13.25 13.75 13.25C13.0469 13.25 12.5 13.8359 12.5 14.5C12.5 15.2031 13.0469 15.75 13.75 15.75Z"
                    fill="white"
                  />
                </svg>
              </div>

              <ul
                aria-label={`${name} social-links`}
                className={styles['social-list']}
              >
                {socials.map((social, index) => (
                  <li key={index}>
                    <CustomLink
                      aria-label={`${name}'s social link ${social.href}`}
                      href={social.href}
                      openNewTab
                      className="inline-grid h-[35px] w-[35px] place-items-center rounded-5 bg-accent-700 text-white transition-colors hover:bg-primary"
                    >
                      {social.icon}
                    </CustomLink>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
      <div
        className={cn(
          'mt-[-70px] rounded-5 bg-white p-5 pr-[50px] pt-[93PX] text-center dark:bg-accent-900',
          contentWrapperClassName
        )}
      >
        <h3 className="h3">
          <CustomLink
            href={slug}
            className="text-accent-900 transition-colors duration-300 hover:text-primary dark:text-white dark:hover:text-primary"
          >
            {name}
          </CustomLink>
        </h3>
        <p>{about}</p>
      </div>
    </div>
  );
}
