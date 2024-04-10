import { BlogSectionProps } from '@/src/sections/blog/v2';

export const blogSectionData: BlogSectionProps = {
  sectionHeading: {
    subtitle: 'our blogs',
    title: 'Where Innovation Meets IT Excellence',
  },
  ctaButton: {
    href: '/blog',
    label: 'more Blogs',
  },
  blogs: [
    {
      image: {
        src: '/assets/images/blog/blog-4.png',
        alt: 'blog-1',
      },
      date: 'October 19, 2024',
      author: {
        name: 'Admin',
        slug: '',
      },
      slug: '/blog/single',
      title: 'We implement state-of-the-art encryption',
    },
    {
      image: {
        src: '/assets/images/blog/blog-5.png',
        alt: 'blog-2',
      },
      date: 'October 19, 2024',
      author: {
        name: 'Admin',
        slug: '',
      },
      slug: '/blog/single',
      title: 'we tailor our services to meet your specific business',
    },
    {
      image: {
        src: '/assets/images/blog/blog-6.png',
        alt: 'blog-3',
      },
      date: 'October 19, 2024',
      author: {
        name: 'Admin',
        slug: '',
      },
      slug: '/blog/single',
      title: 'IT solutions enhance efficiency, streamline processes',
    },
  ],
};
