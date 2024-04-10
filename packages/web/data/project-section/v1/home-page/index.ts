import { ProjectSectionProps } from '@/src/sections/project/v1';

export const projectSectionData: ProjectSectionProps = {
  sectionHeading: {
    subtitle: 'latest portfolio',
    title: 'Where Innovation Meets IT Excellence',
  },
  isWave: true,
  works: [
    {
      slug: '/project/single',
      image: {
        src: '/assets/images/project/1.png',
        alt: 'portfolio-1',
      },
      title: 'Cloud Migrate Pro',
      description: 'Lorem Ipsum is simply dummy',
    },
    {
      slug: '/project/single',
      image: {
        src: '/assets/images/project/2.png',
        alt: 'portfolio-1',
      },
      title: 'Cloud Migrate Pro',
      description: 'Lorem Ipsum is simply dummy',
    },
    {
      slug: '/project/single',
      image: {
        src: '/assets/images/project/3.png',
        alt: 'portfolio-1',
      },
      title: 'Cloud Migrate Pro',
      description: 'Lorem Ipsum is simply dummy',
    },
    {
      slug: '/project/single',
      image: {
        src: '/assets/images/project/4.png',
        alt: 'portfolio-1',
      },
      title: 'Cloud Migrate Pro',
      description: 'Lorem Ipsum is simply dummy',
    },
  ],
};
