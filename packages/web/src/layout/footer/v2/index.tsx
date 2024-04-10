import { footerSectionData } from '@/data/layout/footer/v2';
import { ImageProps, LinkProps, SectionProps } from '@/src/common-types';
import { Container } from '@/src/components/container';
import { CustomLink } from '@/src/components/custom-link';
import { cn } from '@/src/utils/shadcn';
import Image from 'next/image';
import { BrandLogo } from 'src/layout/brand-logo';
import { FaEnvelope, FaPhone } from 'react-icons/fa6';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { FaCalendarDays } from 'react-icons/fa6';
import { ClassValue } from 'clsx';

interface RecentBlog {
  slug: string;
  image: Omit<ImageProps, 'width' | 'height'>;
  date: string;
  title: string;
}

interface SocialLinkProps {
  icon: React.ReactNode;
  href: string;
}

export interface FooterSectionProps {
  socialLinks: SocialLinkProps[];
  columnOne: {
    title: string;
    links: LinkProps[];
  };
  columnTwo: {
    title: string;
    links: LinkProps[];
  };
  columnThree: {
    title: string;
    blogs: RecentBlog[];
  };
  columnFour: {
    title: string;
    location: string;
    mail: string;
    phoneNumber: string;
  };
  footerBottom: {
    copyrightText: string;
    links: LinkProps[];
  };
}

const socialIconClasses = cn(
  'text-base/[1] transition-all duration-350 hover:-translate-y-1 w-30px h-30px rounded-5 grid place-items-center bg-accent-800/10 hover:bg-primary text-white'
);
const titleClasses = cn(
  'text-gray-900 dark:text-white  text-md font-bold  leading-[1.25] md:text-lg mb-5 md:mb-[1.875rem]'
);
const addressIconParentClasses = cn(
  ' text-primary flex-none leading-none self-start relative top-2'
);
const addressItemClasses = cn('flex gap-5');
const textColor = cn(
  'transition-colors duration-300 hover:text-primary dark:hover:text-white'
);

interface Props extends SectionProps {
  footerTopClassName?: ClassValue;
}

export function Footer({ className, footerTopClassName }: Props) {
  const {
    socialLinks,
    columnOne,
    columnTwo,
    columnThree,
    columnFour,
    footerBottom,
  } = footerSectionData;
  return (
    <footer
      className={cn(
        'overflow-hidden bg-accent-100 text-accent-800 dark:bg-accent-700 dark:text-body',
        className
      )}
    >
      <Container>
        {/* Footer top  */}
        <div
          className={cn(
            'flex items-center justify-between gap-x-20 gap-y-4 pb-5 pt-[60px] lg:pt-20',
            footerTopClassName
          )}
        >
          <BrandLogo />
          {socialLinks && socialLinks.length > 0 && (
            <nav aria-label="social links">
              <ul className="inline-flex items-center gap-2.5">
                {socialLinks.map((socialLink, index) => (
                  <li key={index}>
                    <CustomLink
                      aria-label={socialLink.href}
                      className={socialIconClasses}
                      href={socialLink.href}
                      openNewTab
                    >
                      <span>{socialLink.icon}</span>
                    </CustomLink>
                  </li>
                ))}
              </ul>
            </nav>
          )}
        </div>

        {/* Footer middle  */}
        <div className="border-y border-accent-800 border-opacity-30 py-[60px] dark:border-accent-100 dark:border-opacity-30">
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
            {/* Column one  */}
            <div data-aos="fade-up" data-aos-delay="200">
              <h3 className={titleClasses}>{columnOne.title}</h3>
              {columnOne.links && columnOne.links.length > 0 && (
                <nav aria-label="footer links navigation">
                  <ul className="grid gap-2">
                    {columnOne.links.map((link) => (
                      <li
                        key={link.label}
                        className="flex items-center gap-2.5"
                      >
                        <CustomLink
                          href={link.href}
                          openNewTab={link.openNewTab}
                          className={textColor}
                        >
                          {link.label}
                        </CustomLink>
                      </li>
                    ))}
                  </ul>
                </nav>
              )}
            </div>

            {/* Column Two  */}
            <div data-aos="fade-up" data-aos-delay="400">
              <h3 className={titleClasses}>{columnTwo.title}</h3>
              {columnTwo.links && columnTwo.links.length > 0 && (
                <nav aria-label="footer links navigation">
                  <ul className="grid gap-2">
                    {columnTwo.links.map((link) => (
                      <li
                        key={link.label}
                        className="flex items-center gap-2.5"
                      >
                        <CustomLink
                          href={link.href}
                          openNewTab={link.openNewTab}
                          className={textColor}
                        >
                          {link.label}
                        </CustomLink>
                      </li>
                    ))}
                  </ul>
                </nav>
              )}
            </div>

            {/* Column three  */}
            <div data-aos="fade-up" data-aos-delay="600">
              <h3 className={titleClasses}>{columnThree.title}</h3>
              {columnThree.blogs && columnThree.blogs.length > 0 && (
                <div className="grid gap-6">
                  {columnThree.blogs.map((blog, index) => (
                    <article
                      key={index}
                      className="group flex items-center gap-4 text-accent-800  dark:text-body"
                    >
                      <div className="flex-none overflow-hidden rounded-5">
                        <Image
                          {...blog.image}
                          alt={blog.image.alt}
                          width={80}
                          height={80}
                          className="object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                      </div>
                      <div>
                        <h4 className="font-primary text-base font-normal leading-[1.87]">
                          <CustomLink
                            href={blog.slug}
                            className="transition-colors duration-300 hover:text-primary"
                          >
                            {blog.title}
                          </CustomLink>
                        </h4>
                        <p className="flex items-center gap-2.5">
                          <span className="text-primary">
                            <FaCalendarDays />
                          </span>
                          <span>{blog.date}</span>
                        </p>
                      </div>
                    </article>
                  ))}
                </div>
              )}
            </div>

            {/* Column Four  */}
            <div data-aos="fade-up" data-aos-delay="800">
              <h3 className={titleClasses}>{columnFour.title}</h3>
              <ul aria-label="addresses" className="grid gap-5">
                <li className={addressItemClasses}>
                  <span className={addressIconParentClasses}>
                    <FaPhone />
                  </span>
                  <a
                    href={`tel:${columnFour.phoneNumber.split(' ').join('')}`}
                    className={textColor}
                  >
                    {columnFour.phoneNumber}
                  </a>
                </li>
                <li className={addressItemClasses}>
                  <span className={addressIconParentClasses}>
                    <FaEnvelope />
                  </span>
                  <a href={`mailto:${columnFour.mail}`} className={textColor}>
                    {columnFour.mail}
                  </a>
                </li>
                <li className={addressItemClasses}>
                  <span className={addressIconParentClasses}>
                    <FaMapMarkerAlt />
                  </span>
                  <address className="not-italic">
                    {columnFour.location}
                  </address>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Footer bottom  */}
        <div className="flex min-h-[90px] items-center py-5">
          <Container>
            <div className="flex flex-wrap items-center justify-between gap-x-8 gap-y-4 md:gap-x-10">
              <p>{footerBottom.copyrightText}</p>
              {footerBottom.links && footerBottom.links.length > 0 && (
                <nav aria-label="footer bottom navigation">
                  <ul className="flex flex-wrap items-center gap-x-4  md:gap-x-7">
                    {footerBottom.links.map((link) => (
                      <li key={link.label}>
                        <CustomLink
                          href={link.href}
                          openNewTab={link.openNewTab}
                          className={textColor}
                        >
                          {link.label}
                        </CustomLink>
                      </li>
                    ))}
                  </ul>
                </nav>
              )}
            </div>
          </Container>
        </div>
      </Container>
    </footer>
  );
}
