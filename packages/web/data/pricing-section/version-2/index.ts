import { PricingSectionProps } from '@/src/sections/pricing/version-2';

export const pricingSectionData: PricingSectionProps = {
  cards: [
    {
      title: 'Basic Plan',
      description: 'Lorem Ipsum is simply dummy text of the printing.',
      features: [
        'Mistakes To Avoid',
        'Your Startup',
        'Knew About Fonts',
        'Winning Metric for Your Startup',
      ],
      price: '$49',
      duration: '/month',

      button: {
        href: '/',
        label: 'Select Plan',
      },
    },
    {
      title: 'Standard Plan',
      description: 'Lorem Ipsum is simply dummy text of the printing.',
      features: [
        'Mistakes To Avoid',
        'Your Startup',
        'Knew About Fonts',
        'Winning Metric for Your Startup',
      ],
      price: '$79',
      duration: '/month',
      button: {
        href: '/',
        label: 'Select Plan',
      },
    },
    {
      title: 'Premium Plan',
      description: 'Lorem Ipsum is simply dummy text of the printing.',
      features: [
        'Mistakes To Avoid',
        'Your Startup',
        'Knew About Fonts',
        'Winning Metric for Your Startup',
      ],
      price: '$99',
      duration: '/month',
      button: {
        href: '/',
        label: 'Select Plan',
      },
    },
  ],
};
