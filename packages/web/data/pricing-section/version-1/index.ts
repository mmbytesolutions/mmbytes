import { PricingSectionProps } from '@/src/sections/pricing/version-1';

export const pricingSectionData: PricingSectionProps = {
  sectionHeading: {
    subtitle: 'Pricing Action',
    title: 'Innovating for a better tomorrow',
  },
  cards: [
    {
      title: 'Basic Plan',
      description:
        'Lorem Ipsum is simply dummy text of the printing  Ipsum is simply dummy text of the Lorem Ipsum is simply',
      features: [
        'Mistakes To Avoid',
        'Your Startup',
        'Knew About Fonts',
        'Winning Metric for Your Startup',
      ],
      price: '$49',
      duration: '/month',
      isPopular: false,
      button: {
        href: '/',
        label: 'Select Plan',
      },
    },
    {
      title: 'Standard Plan',
      description:
        'Lorem Ipsum is simply dummy text of the printing  Ipsum is simply dummy text of the Lorem Ipsum is simply',
      features: [
        'Mistakes To Avoid',
        'Your Startup',
        'Knew About Fonts',
        'Winning Metric for Your Startup',
      ],
      price: '$79',
      duration: '/month',
      isPopular: true,
      button: {
        href: '/',
        label: 'Select Plan',
      },
    },
    {
      title: 'Premium Plan',
      description:
        'Lorem Ipsum is simply dummy text of the printing  Ipsum is simply dummy text of the Lorem Ipsum is simply',
      features: [
        'Mistakes To Avoid',
        'Your Startup',
        'Knew About Fonts',
        'Winning Metric for Your Startup',
      ],
      price: '$99',
      duration: '/month',
      isPopular: false,
      button: {
        href: '/',
        label: 'Select Plan',
      },
    },
  ],
};
