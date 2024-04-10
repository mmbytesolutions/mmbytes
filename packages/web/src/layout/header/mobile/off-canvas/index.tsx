import { ScrollArea } from '@/src/components/ui/scroll-area';
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from '@/src/components/ui/sheet';
import { cn } from '@/src/utils/shadcn';
import Image from 'next/image';
import logoLight from 'public/assets/images/brand/logo-light.png';
import { FaEnvelope, FaPhone } from 'react-icons/fa6';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { CustomLink } from '@/src/components/custom-link';
import { X } from 'lucide-react';
import { HeaderProps } from '../../desktop/v1';
import { Navigation } from '../navigation';
import { MdMenu } from 'react-icons/md';
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from 'react-icons/fa6';

const mainTitleClasses = cn(
  'relative mb-30px pb-[0px] font-secondary text-[1.25rem] font-bold uppercase text-accent-700',
  'after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-[32px] after:bg-accent-700'
);

const socialIconClasses = cn(
  'text-base/[1] transition-all duration-350 hover:-translate-y-1 w-[36px] h-[36px] rounded-full grid place-items-center bg-accent-700 hover:bg-primary text-white'
);

const addressIconParentClasses = cn(
  ' text-primary flex-none leading-none self-start relative top-2'
);
const addressItemClasses = cn('flex gap-5');
const textColor = cn(
  'transition-colors text-accent-700 dark:text-accent-700 duration-300 hover:text-primary dark:hover:text-primary-light'
);

interface SocialLinkProps {
  icon: React.ReactNode;
  href: string;
}

interface IOffCanvas {
  contactInfo: {
    location: string;
    phoneNumber: string;
    mail: string;
  };
  socialLinks: SocialLinkProps[];
}

const offCanvasProps: IOffCanvas = {
  contactInfo: {
    location: ' 88 broklyn street, New York',
    phoneNumber: '+1 555-9990-153',
    mail: 'info@example.com',
  },
  socialLinks: [
    {
      icon: <FaFacebookF />,
      href: 'https://www.facebook.com/',
    },
    {
      icon: <FaLinkedinIn />,
      href: 'https://www.linkedin.com/',
    },
    {
      icon: <FaTwitter />,
      href: 'https://twitter.com/',
    },
    {
      icon: <FaInstagram />,
      href: 'https://www.instagram.com/',
    },
  ],
};

export function OffCanvas({ menuItems }: Pick<HeaderProps, 'menuItems'>) {
  const { contactInfo, socialLinks } = offCanvasProps;
  return (
    <Sheet>
      <SheetTrigger
        aria-label="Mobile hamburger menu"
        aria-controls="mobile-hamburger-menu"
        className={cn(
          'group text-[2rem]/[1] text-primary transition-colors duration-300 hover:text-primary-light'
        )}
      >
        <MdMenu className="icon-menu" id="mobile-hamburger-menu" />
      </SheetTrigger>
      <SheetContent
        side={'left'}
        className="z-444 !max-w-[300px] border-none bg-white p-0"
      >
        <ScrollArea
          viewportClassName={cn('h-[100vh]')}
          scrollBarClassName="w-0"
        >
          <div className="grid gap-8">
            {/* Logo area  */}
            <div className="sticky top-0 flex items-center justify-between bg-white/90 px-5 py-3 shadow-sm backdrop-blur-sm">
              <CustomLink href="/">
                <Image
                  src={logoLight.src}
                  width={logoLight.width}
                  height={logoLight.height}
                  placeholder="blur"
                  blurDataURL={logoLight.blurDataURL}
                  alt={`${process.env.NEXT_PUBLIC_SITE_NAME} brand logo`}
                  sizes="100vw"
                  priority
                />
              </CustomLink>
              <SheetClose className="data-[state=open]:bg-secondary rounded-sm text-accent-900 ring-offset-0 transition-colors hover:text-primary  focus:outline-none focus:ring-0 focus:ring-offset-0  disabled:pointer-events-none">
                <X className="h-8 w-8" />
                <span className="sr-only">Close</span>
              </SheetClose>
            </div>

            <Navigation menuItems={menuItems} />

            {/* Contact info  */}
            <div className="px-5">
              <h3 className={mainTitleClasses}>CONTACT INFO</h3>
              <ul aria-label="addresses" className="grid gap-2">
                <li className={addressItemClasses}>
                  <span className={addressIconParentClasses}>
                    <FaPhone />
                  </span>
                  <a
                    href={`tel:${contactInfo.phoneNumber.split(' ').join('')}`}
                    className={textColor}
                  >
                    {contactInfo.phoneNumber}
                  </a>
                </li>
                <li className={addressItemClasses}>
                  <span className={addressIconParentClasses}>
                    <FaEnvelope />
                  </span>
                  <a href={`mailto:${contactInfo.mail}`} className={textColor}>
                    {contactInfo.mail}
                  </a>
                </li>
                <li className={addressItemClasses}>
                  <span className={addressIconParentClasses}>
                    <FaMapMarkerAlt />
                  </span>
                  <address className={cn(textColor, 'not-italic')}>
                    {contactInfo.location}
                  </address>
                </li>
              </ul>
              {socialLinks && socialLinks.length > 0 && (
                <nav aria-label="social links">
                  <ul className="mt-8 inline-flex items-center gap-2.5 pb-10">
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
          </div>
        </ScrollArea>
      </SheetContent>
    </Sheet>
  );
}
