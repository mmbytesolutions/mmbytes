import { HeroSectionProps } from '@/src/sections/hero/v2';

export const heroSectionData: HeroSectionProps = {
  title: 'Navigating Tech Horizons Together',
  customers: [
    {
      src: '/assets/images/hero/avatar-1.png',
      alt: 'user 1',
    },
    {
      src: '/assets/images/hero/avatar-2.png',
      alt: 'user 2',
    },
    {
      src: '/assets/images/hero/avatar-3.png',
      alt: 'user 3',
    },
  ],
  customerCounterInfo: {
    count: 3000,
    about: 'Satisfied Customer',
    suffix: '+',
  },
  ctaButton: {
    href: '',
    label: 'Discover More',
  },
  imageLarge: {
    src: '/assets/images/hero/hero-5.png',
    alt: 'image 5',
  },
  description:
    'It is a long established fact that a reader will be distracted by the readablejk content of a page when looking at its layout. Lorem Ipsum is simply dum text of the printing and typeset',
  imageSmall: {
    src: '/assets/images/hero/hero-6.png',
    alt: 'image 6',
  },
  statisticsCounterInfo: {
    count: 4,
    about: 'Daily Activate Customer ',
    suffix: 'K+',
  },
};
