import {
  ImageProps,
  LinkProps,
  SocialItemProps,
  blurDataUrl,
} from '@/src/common-types';
import { Button } from '@/src/components/button';
import { Container } from '@/src/components/container';
import { CustomLink } from '@/src/components/custom-link';
import { TextInput } from '@/src/components/inputs/text-input';
import { TextAreaInput } from '@/src/components/inputs/textarea-input';
import { cn } from '@/src/utils/shadcn';
import Image from 'next/image';
import {
  FaLinkedinIn,
  FaMagnifyingGlass,
  FaQuoteRight,
  FaRegComments,
  FaRegFolderOpen,
  FaRegUser,
  FaReply,
  FaTags,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
} from 'react-icons/fa6';

interface AuthorProps {
  image: Omit<ImageProps, 'width' | 'height'>;
  name: string;
  about: string;
  socialLinks: SocialItemProps[];
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

const socialLinks: SocialItemProps[] = [
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
  {
    icon: <FaLinkedinIn />,
    href: 'https://www.linkedin.com/',
  },
];

function Author({ image, name, about, socialLinks }: AuthorProps) {
  return (
    <div className="space-y-5 rounded-5 bg-accent-100 p-8 text-center dark:bg-accent-700 lg:p-10">
      <Image
        src={image.src}
        alt={image.alt || name}
        width={127}
        height={127}
        placeholder="blur"
        blurDataURL={blurDataUrl}
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
          className="!h-[60px] !w-[60px] flex-none rounded-l-none !p-0"
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
                <CustomLink
                  href={link.href}
                  className="transition-colors duration-300 hover:text-primary"
                >
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

const linkClasses = cn(
  'transition-colors duration-400 hover:text-primary ease-in-out inline'
);

const inputBoxClasses = cn(
  'focus:border-primary dark:focus:border-primary focus:border-opacity-100 dark:focus:border-opacity-100'
);

export function BlogDetilsSection() {
  return (
    <section className="section-padding-primary">
      <Container>
        <div className="grid gap-30px lg:grid-cols-[1fr_410px]">
          <div>
            <div className="[&_p+P]:mt-4">
              <Image
                src="/assets/images/blog/blog-details-1.png"
                alt="blog single 1"
                width={850}
                height={538}
                placeholder="blur"
                blurDataURL={blurDataUrl}
                sizes="100vw"
              />

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
                      admin
                    </CustomLink>
                  </span>
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="flex-none text-sm text-primary">
                    <FaRegFolderOpen />
                  </span>
                  <CustomLink href="#" className={linkClasses}>
                    Category
                  </CustomLink>
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="flex-none text-sm text-primary">
                    <FaRegComments />
                  </span>
                  <span>
                    <CustomLink href="#" className={linkClasses}>
                      Comments (05)
                    </CustomLink>
                  </span>
                </li>
              </ul>

              <div className="my-4 h-px bg-body/30 lg:my-5"></div>
              <p>
                Aliquam eros justo, posuere loborti viverra laoreet matti
                ullamcorper posuere viverra .Aliquam eros justo, posuere
                lobortis, viverra laoreet augue mattis fermentum ullamcorper
                viverra laoreet Aliquam eros justo, posuere loborti viverra
                laoreet matti ullamcorper posuere viverra .Aliquam eros justo,
                posuere lobortis non, viverra laoreet augue mattis.Aliquam eros
                justo, posuere loborti viverra laoreet matti ullamcorper posuere
                viverra .Aliquam eros justo, posuere lobortis, viverra laoreet
                augue mattis fermentum ullamcorper viverra laoreet Aliquam eros
                justo, posuere loborti viverra laoreet matti ullamcorper posuere
                viverra .Aliquam eros justo, posuere lobortis non, viverra
                laoreet augue mattis ullamcorper posuere viverra laoreet augue
                mattis.
              </p>

              <blockquote className="my-30px grid gap-5 rounded-5 bg-accent-100 py-10 text-center dark:bg-accent-700 lg:px-[70px]">
                <span className="mx-auto grid h-[50px] w-[50px] place-items-center rounded-full bg-white text-[1.25rem] text-primary dark:bg-accent-900">
                  <FaQuoteRight />
                </span>
                <p className="font-secondary text-md font-medium leading-[1.25] md:text-lg">
                  With a commitment to driving technological evolution, our IT
                  solutions and services are the cornerstone of your digital
                  progression. We transcend boundaries, enabling businesses to
                  not
                </p>
                <div className="mt-3 text-accent-700 dark:text-white">
                  <h3 className="h3">Stanio lainto</h3>
                  <p>Authore</p>
                </div>
              </blockquote>
              <p>
                Aliquam eros justo, posuere loborti viverra laoreet matti
                ullamcorper posuere viverra .Aliquam eros justo, posuere
                lobortis non, viverra laoreet augue mattis fermentum ullamcorper
                viverra laoreet Aliquam eros justo, posuere.
              </p>
              <p>
                Aliquam eros justo, posuere loborti viverra laoreet matti
                ullamcorper posuere viverra .Aliquam eros justo, posuere
                lobortis, viverra laoreet augue mattis fermentum ullamcorper
                viverra laoreet Aliquam eros justo, posuere loborti viverra
                laoreet matti ullamcorper posuere viverra .Aliquam eros justo,
                posuere lobortis non.
              </p>
              <Image
                src="/assets/images/blog/blog-details-2.png"
                alt="blog single 2"
                width={850}
                height={352}
                placeholder="blur"
                blurDataURL={blurDataUrl}
                sizes="100vw"
                className="mb-30px mt-[60px] block rounded-5"
              />
              <p>
                Aliquam eros justo, posuere loborti viverra lao ullamcorper
                posuere viverra .Aliquam eros justo, posuere lobortis non,
                viverra laoreet augue mattis start fermentum ullamcor viverra
                laoreet By Admin . Creativity . 28th February 2022 . Leave a
                comment viverra laoreet augue mattis start fermentum star.
              </p>
              <p>
                Aliquam eros justo, posuere loborti viverra laoreet matti
                ullamcorper posuere viverra .Aliquam eros justo, posuere
                lobortis, viverra laoreet augue mattis fermentum ullamcorper
                viverra laoreet Aliquam eros justo, posuere loborti viverra
                laoreet matti ullamcorper posuere viverra .Aliquam eros justo,
                posuere lobortis non.
              </p>
              <div className="my-10 flex flex-wrap items-center justify-between gap-x-5 gap-y-2.5 rounded-5 bg-accent-100 px-30px py-6 dark:bg-accent-700">
                <div className="flex items-center gap-2.5">
                  <span className="text-primary">
                    <FaTags />
                  </span>
                  <div className="inline-flex flex-wrap gap-1">
                    <span>
                      <CustomLink href="#" className={linkClasses}>
                        Marketing
                      </CustomLink>
                      ,
                    </span>
                    <span>
                      <CustomLink href="#" className={linkClasses}>
                        branding
                      </CustomLink>
                      ,
                    </span>
                    <span>
                      <CustomLink href="#" className={linkClasses}>
                        corporate
                      </CustomLink>
                      ,
                    </span>
                    <span>
                      <CustomLink href="#" className={linkClasses}>
                        business
                      </CustomLink>
                    </span>
                  </div>
                </div>
                {socialLinks && socialLinks.length > 0 && (
                  <nav aria-label="social links">
                    <ul className="inline-flex items-center gap-4  text-primary">
                      {socialLinks.map((socialLink, index) => (
                        <li key={index}>
                          <CustomLink
                            className="block text-base/[1.75] transition-transform duration-350 hover:-translate-y-1"
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

              <div className="flex flex-col items-start gap-x-6 gap-y-5 md:flex-row">
                <Image
                  src="/assets/images/blog/author-2.png"
                  alt="Stanio lainto"
                  width={85}
                  height={87}
                  placeholder="blur"
                  blurDataURL={blurDataUrl}
                  sizes="100vw"
                  className="flex-none rounded-10"
                />
                <div className="text-accent-700 dark:text-white">
                  <h4 className="font-secondary text-md font-bold leading-[1.5]">
                    Stanio lainto
                  </h4>
                  <p className="text-sm leading-[1.6]">3 days ago</p>
                  <p className="!mt-1.5 text-body">
                    ished fact that a reader will be distrol acted bioii
                    the.ished fact that a reader will be distrolra acted laoreet
                    Aliquam reader will be distrol acted ished fact that a
                    reader will be distrol dsff shem acted bioii the.ished fact
                    that a reader will .
                  </p>
                  <CustomLink
                    href="#"
                    className="mt-4 inline-block text-[1.25rem] text-primary"
                  >
                    <FaReply />
                  </CustomLink>
                </div>
              </div>

              <div className="mt-12">
                <h3 className="h2 text-accent-700 dark:text-white">
                  Leave a comment
                </h3>
                <p className="mt-2">You must have to log in for comment</p>
                <form className="mt-30px grid grid-cols-1 gap-x-30px gap-y-5 lg:grid-cols-2">
                  <div>
                    <TextInput
                      placeholder="Your Email"
                      name="email"
                      className={inputBoxClasses}
                      autoComplete="off"
                    />
                  </div>
                  <div>
                    <TextInput
                      placeholder="Your Phone"
                      name="phone"
                      className={inputBoxClasses}
                      autoComplete="off"
                    />
                  </div>
                  <div className="lg:col-span-2">
                    <TextInput
                      placeholder="Your Address"
                      name="address"
                      className={inputBoxClasses}
                      autoComplete="off"
                    />
                  </div>
                  <div className="lg:col-span-2">
                    <TextAreaInput
                      placeholder="Write Message..."
                      name="message"
                      autoComplete="off"
                      className={inputBoxClasses}
                    />
                  </div>
                  <div className="lg:col-span-2">
                    <Button type="submit" className="w-full">
                      <span className="relative z-1">SEND NOW</span>
                    </Button>
                  </div>
                </form>
              </div>
            </div>
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
