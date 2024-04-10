import { ImageProps, LinkProps } from '@/src/common-types';
import { Button } from '@/src/components/button';
import { Container } from '@/src/components/container';
import { CustomLink } from '@/src/components/custom-link';
import { TextInput } from '@/src/components/inputs/text-input';
import { cn } from '@/src/utils/shadcn';
import Image from 'next/image';
import {
  FaArrowRight,
  FaMagnifyingGlass,
  FaRegComments,
  FaRegFolderOpen,
  FaRegUser,
} from 'react-icons/fa6';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa6';

interface BlogProps {
  image: Omit<ImageProps, 'width' | 'height'>;
  authorName: string;
  category: string;
  commentCount: string;
  title: string;
  description: string;
  slug: string;
}

const blogs: BlogProps[] = [
  {
    slug: '/blog/single',
    image: {
      src: '/assets/images/blog/blog-lg-1.png',
      alt: 'Pioneering Progress, One Algorithm at a Time',
    },
    authorName: 'admin',
    category: 'Category',
    commentCount: '05',
    title: 'Pioneering Progress, One Algorithm at a Time',
    description:
      'Aliquam eros justo, posuere loborti viverra lao ullamcorper posuere viverra .Aliquam eros justo, posuere lobortis non, viverra laoreet augue mattis start fermentum ullamcor viverra laoreet By Admin . Creativity . 28th February 2022 . Leave a comment viverra laoreet augue mattis start fermentum ',
  },
  {
    slug: '/blog/single',
    image: {
      src: '/assets/images/blog/blog-lg-2.png',
      alt: 'Empowering Businesses with Tech Synergy',
    },
    authorName: 'admin',
    category: 'Category',
    commentCount: '05',
    title: 'Empowering Businesses with Tech Synergy',
    description:
      'Aliquam eros justo, posuere loborti viverra lao ullamcorper posuere viverra .Aliquam eros justo, posuere lobortis non, viverra laoreet augue mattis start fermentum ullamcor viverra laoreet By Admin . Creativity . 28th February 2022 . Leave a comment viverra laoreet augue mattis start fermentum ',
  },
  {
    slug: '/blog/single',
    image: {
      src: '/assets/images/blog/blog-lg-3.png',
      alt: 'Unleashing Potential through IT Excellence',
    },
    authorName: 'admin',
    category: 'Category',
    commentCount: '05',
    title: 'Unleashing Potential through IT Excellence',
    description:
      'Aliquam eros justo, posuere loborti viverra lao ullamcorper posuere viverra .Aliquam eros justo, posuere lobortis non, viverra laoreet augue mattis start fermentum ullamcor viverra laoreet By Admin . Creativity . 28th February 2022 . Leave a comment viverra laoreet augue mattis start fermentum ',
  },
];

interface Social {
  icon: React.ReactNode;
  href: string;
}
interface AuthorProps {
  image: Omit<ImageProps, 'width' | 'height'>;
  name: string;
  about: string;
  socialLinks: Social[];
}

const authorData: AuthorProps = {
  image: {
    src: '/assets/images/blog/author-1.png',
    alt: 'author image 1',
  },
  name: 'Naturials paul',
  about:
    'Aliquam eros justo, posuere lobort viverra lao ullamcorper posuere viverra .Aliquam eros justo, posuere lobortis non',
  socialLinks: [
    {
      icon: <FaFacebookF />,
      href: 'https://www.facebook.com/',
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

function Author({ image, name, about, socialLinks }: AuthorProps) {
  return (
    <div className="space-y-5 rounded-5 bg-accent-100 p-8 text-center dark:bg-accent-700 lg:p-10">
      <Image
        {...image}
        alt={image.alt || name}
        width={127}
        height={127}
        className="mx-auto rounded-full object-cover"
      />
      <h3 className="font-secondary text-lg font-bold leading-[1.25] text-accent-900 dark:text-white md:text-xl">
        {name}
      </h3>
      <p>{about}</p>
      {socialLinks && socialLinks.length > 0 && (
        <nav aria-label="social links">
          <ul className="inline-flex items-center divide-x  divide-accent-800/50 text-accent-900 dark:divide-accent-100/50  dark:text-white">
            {socialLinks.map((socialLink, index) => (
              <li key={index}>
                <CustomLink
                  className="block px-4 text-base/[1.75] transition-transform duration-350 hover:-translate-y-1"
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
  );
}

function SearchBox() {
  return (
    <div className="space-y-5 rounded-5 bg-accent-100 p-8 dark:bg-accent-700 lg:p-10">
      <h3 className="font-secondary text-md font-bold leading-[1.25] text-accent-900 dark:text-white md:text-lg">
        Searach
      </h3>
      <div className="flex items-center gap-0">
        <TextInput
          placeholder="Your name"
          name="text"
          className="rounded-5 rounded-r-none border-none bg-white dark:bg-accent-900"
        />
        <Button
          type="submit"
          className={cn('!h-[60px] !w-[60px] flex-none rounded-l-none !p-0')}
        >
          <span className="relative z-1">
            <FaMagnifyingGlass />
          </span>
        </Button>
      </div>
    </div>
  );
}

interface CategoryListProps {
  links: LinkProps[];
}

const categoryListData: CategoryListProps = {
  links: [
    {
      label: 'Genarel consturction',
      href: '',
    },
    {
      label: 'Business Advice',
      href: '',
    },
    {
      label: 'Stock market',
      href: '',
    },
    {
      label: 'Regular start',
      href: '',
    },
    {
      label: 'Regular start',
      href: '',
    },
  ],
};

function CategoryList({ links }: CategoryListProps) {
  return (
    <div className="space-y-5 rounded-5 bg-accent-100 p-8 dark:bg-accent-700 lg:p-10">
      <h3 className="font-secondary text-md font-bold leading-[1.25] text-accent-900 dark:text-white md:text-lg">
        Category
      </h3>
      {links && links.length > 0 && (
        <nav aria-label="footer links navigation">
          <ul className="grid gap-2.5 divide-y divide-accent-700/20 dark:divide-accent-200/20">
            {links.map((link, index) => (
              <li
                key={index}
                className="flex items-center gap-2.5 pt-2.5 first:pt-0"
              >
                <span className="grid h-3 w-3 place-items-center border border-primary">
                  <span className="block h-0.5 w-0.5 bg-primary"></span>
                </span>
                <CustomLink href={link.href} className={linkClasses}>
                  {link.label}
                </CustomLink>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </div>
  );
}

interface TagwidgetProps {
  tags: string[];
}

const tagwidgetData: TagwidgetProps = {
  tags: ['All Project', 'Stand', 'Regularly', 'Startup', 'Productsline'],
};

function Tagswidget({ tags }: TagwidgetProps) {
  return (
    <div className="space-y-5 rounded-5 bg-accent-100 p-8 dark:bg-accent-700 lg:p-10">
      <h3 className="font-secondary text-md font-bold leading-[1.25] text-accent-900 dark:text-white md:text-lg">
        Category
      </h3>
      {tags && tags.length > 0 && (
        <nav aria-label="tags">
          <ul className="flex flex-wrap gap-5">
            {tags.map((tag, index) => (
              <li
                key={index}
                className="inline-flex min-h-[2.5rem] cursor-pointer items-center rounded-5 bg-accent-900 px-2.5 py-0.5 text-body transition-colors duration-300 hover:bg-primary hover:text-white"
              >
                {tag}
              </li>
            ))}
          </ul>
        </nav>
      )}
    </div>
  );
}

// Repeated styles
const paginationItemClasses = cn(
  'grid h-[65px] w-[65px] place-items-center border border-[#3b3b3b] bg-accent-700 font-secondary text-base font-bold text-white rounded-full transition-colors duration-300 hover:bg-primary hover:border-primary'
);

const linkClasses = cn(
  'transition-colors duration-400 hover:text-primary ease-in-out'
);

export function BlogListSection() {
  return (
    <section className="section-padding-primary">
      <Container>
        <div className="grid gap-30px lg:grid-cols-[1fr_410px]">
          <div>
            {blogs && blogs.length > 0 && (
              <div className="grid gap-10 lg:gap-20">
                {blogs.map(
                  (
                    {
                      slug,
                      image,
                      authorName,
                      category,
                      commentCount,
                      title,
                      description,
                    },
                    index
                  ) => (
                    <article key={index} className="group">
                      <figure
                        className={cn(
                          // General
                          'relative z-1 overflow-hidden rounded-5',

                          // after => image overlay effect
                          'after:pointer-events-none after:absolute after:left-0 after:top-0 after:z-1 after:h-0 after:w-full after:bg-white/30 after:opacity-100',
                          // hover
                          'group-hover:transition-all group-hover:after:h-full group-hover:after:opacity-0 group-hover:after:duration-400 group-hover:after:ease-linear'
                        )}
                      >
                        <Image
                          src={image.src}
                          alt={image.alt}
                          width={850}
                          height={575}
                          sizes="100vw"
                          className="object-cover transition-transform duration-500 [transform:scale(1.05)] group-hover:[transform:scale(1)]"
                        />
                      </figure>

                      {/* Meta  */}
                      <ul
                        aria-label="blog meta list"
                        className="mb-4 mt-6 flex flex-wrap items-center gap-x-[1.125rem] gap-y-2 lg:mb-5 lg:mt-30px"
                      >
                        <li className="flex items-center gap-2.5">
                          <span className="flex-none text-sm text-primary">
                            <FaRegUser />
                          </span>
                          <span>
                            By{' '}
                            <CustomLink href="#" className={linkClasses}>
                              {authorName}
                            </CustomLink>
                          </span>
                        </li>
                        <li className="flex items-center gap-2.5">
                          <span className="flex-none text-sm text-primary">
                            <FaRegFolderOpen />
                          </span>
                          <CustomLink href="#" className={linkClasses}>
                            {category}
                          </CustomLink>
                        </li>
                        <li className="flex items-center gap-2.5">
                          <span className="flex-none text-sm text-primary">
                            <FaRegComments />
                          </span>
                          <span>
                            <CustomLink href="#" className={linkClasses}>
                              Comments ({commentCount})
                            </CustomLink>
                          </span>
                        </li>
                      </ul>
                      <h3 className="font-secondary text-lg font-bold leading-[1.25] text-accent-900 dark:text-white md:text-xl">
                        <CustomLink
                          href={slug}
                          className={cn('text-white', linkClasses)}
                        >
                          {title}
                        </CustomLink>
                      </h3>
                      <div className="my-4 h-px bg-body/30 lg:my-5"></div>
                      <p>{description}</p>
                      <Button
                        asChild
                        className={cn([
                          // Layout
                          'mt-6 rounded-5 border border-primary bg-transparent hover:text-primary dark:hover:text-primary lg:mt-30px',
                        ])}
                      >
                        <CustomLink href={slug}>
                          <span className="relative z-1">Read More</span>
                          <span className="relative top-[-2px] z-1 text-sm/[1] text-primary transition-colors duration-300">
                            <svg
                              width="1em"
                              height="1em"
                              viewBox="0 0 12 12"
                              fill="currentColor"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M11.8125 5.75C11.8125 6.24219 11.4023 6.65234 10.9375 6.65234H7V10.5898C7 11.0547 6.58984 11.4375 6.125 11.4375C5.63281 11.4375 5.25 11.0547 5.25 10.5898V6.65234H1.3125C0.820312 6.65234 0.4375 6.24219 0.4375 5.75C0.4375 5.28516 0.820312 4.90234 1.3125 4.90234H5.25V0.964844C5.25 0.472656 5.63281 0.0625 6.125 0.0625C6.58984 0.0625 7 0.472656 7 0.964844V4.90234H10.9375C11.4023 4.875 11.8125 5.28516 11.8125 5.75Z" />
                            </svg>
                          </span>
                        </CustomLink>
                      </Button>
                    </article>
                  )
                )}
                <div>
                  <ul
                    className="flex flex-wrap items-center justify-center gap-3 md:gap-5"
                    aria-label="pagination"
                  >
                    <li>
                      <a
                        className={paginationItemClasses}
                        href="#"
                        aria-label="pagination button"
                        role="button"
                      >
                        01
                      </a>
                    </li>
                    <li>
                      <a
                        className={paginationItemClasses}
                        href="#"
                        aria-label="pagination button"
                        role="button"
                      >
                        02
                      </a>
                    </li>
                    <li>
                      <a
                        className={paginationItemClasses}
                        href="#"
                        aria-label="pagination button"
                        role="button"
                      >
                        03
                      </a>
                    </li>
                    <li>
                      <a
                        className={cn(
                          paginationItemClasses,
                          'border-primary bg-primary'
                        )}
                        href="#"
                        aria-label="pagination button"
                        role="button"
                      >
                        <FaArrowRight />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            )}
          </div>
          <div className="grid gap-30px self-baseline max-md:mx-auto max-md:max-w-[410px] lg:gap-10">
            <Author {...authorData} />
            <SearchBox />
            <CategoryList {...categoryListData} />
            <Tagswidget {...tagwidgetData} />
          </div>
        </div>
      </Container>
    </section>
  );
}
