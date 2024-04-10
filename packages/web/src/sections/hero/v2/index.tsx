import { heroSectionData } from '@/data/hero/v2';
import { ImageProps, LinkProps, blurDataUrl } from '@/src/common-types';
import { Button } from '@/src/components/button';
import { Container } from '@/src/components/container';
import { Counter } from '@/src/components/counter';
import { CustomLink } from '@/src/components/custom-link';
import { cn } from '@/src/utils/shadcn';
import Image from 'next/image';
import { FaPlus } from 'react-icons/fa6';

export interface HeroSectionProps {
  title: string;
  customers: Omit<ImageProps, 'width' | 'height'>[];
  customerCounterInfo: {
    count: number;
    about: string;
    suffix: string;
  };
  ctaButton: LinkProps;
  imageLarge: Omit<ImageProps, 'width' | 'height'>;
  description: string;
  imageSmall: Omit<ImageProps, 'width' | 'height'>;
  statisticsCounterInfo: {
    count: number;
    about: string;
    suffix: string;
  };
}

const avatarWrapperClasses = cn(
  'h-[54px] w-[54px] overflow-hidden rounded-full border-2 border-body/40 bg-accent-900 grid place-items-center text-primary text-[25px] mr-[-17px]'
);

export function HeroSection() {
  const {
    title,
    customers,
    customerCounterInfo,
    ctaButton,
    imageLarge,
    description,
    imageSmall,
    statisticsCounterInfo,
  } = heroSectionData;

  return (
    <section className="relative z-1 overflow-hidden pb-[140px] pt-[120px] lg:pt-[255px]">
      <div className="absolute left-0 top-0 -z-1 hidden animate-float-bob-y opacity-20 lg:block">
        <Image
          src="/assets/images/hero/shape-1.png"
          alt="hero shape 1"
          width={258}
          height={553}
          sizes="100vw"
          className="object-cover"
          blurDataURL={blurDataUrl}
        />
      </div>
      <div className="absolute right-0 top-[180px] -z-1 hidden animate-float-bob-y opacity-30 2xl:block">
        <Image
          src="/assets/images/hero/shape-3.png"
          alt="hero shape 1"
          width={643}
          height={645}
          sizes="100vw"
          className="object-cover"
          blurDataURL={blurDataUrl}
        />
      </div>
      <Container>
        <div className="grid gap-30px text-center text-accent-900 dark:text-white lg:grid-cols-12 xl:text-left">
          <div className="lg:col-span-6 lg:text-left xl:col-span-4 xl:[text-align:inherit]">
            <h1 className="h1 mb-[60px] lg:mb-[130px]">{title}</h1>
            <div className="flex items-center justify-center gap-4 lg:justify-start">
              {customers && customers.length > 0 && (
                <ul className="flex items-center">
                  {customers.map((customer, index) => (
                    <li className={avatarWrapperClasses} key={index}>
                      <Image
                        src={customer.src}
                        alt={customer.alt}
                        width={54}
                        height={54}
                        sizes="100vw"
                        className="object-cover"
                        blurDataURL={blurDataUrl}
                      />
                    </li>
                  ))}
                  <li className={avatarWrapperClasses}>
                    <CustomLink href="#" aria-label="More users">
                      <FaPlus />
                    </CustomLink>
                  </li>
                </ul>
              )}
              <div className="ml-[17px] text-start text-accent-700 dark:text-white">
                <h2 className="h3">
                  <Counter
                    end={customerCounterInfo.count}
                    suffix={customerCounterInfo.suffix}
                  />
                  <span className="sr-only">Counter</span>
                </h2>
                <p>{customerCounterInfo.about}</p>
              </div>
            </div>
            <Button asChild className="mt-[67px] ">
              <CustomLink href={ctaButton.href}>
                <span className="relative z-1">{ctaButton.label}</span>
                <svg
                  className="relative z-1"
                  width={28}
                  height={9}
                  viewBox="0 0 28 9"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M27.7911 5.02543C27.9863 4.83016 27.9863 4.51358 27.7911 4.31832L24.6091 1.13634C24.4138 0.941077 24.0972 0.941077 23.902 1.13634C23.7067 1.3316 23.7067 1.64818 23.902 1.84345L26.7304 4.67187L23.902 7.5003C23.7067 7.69556 23.7067 8.01214 23.902 8.20741C24.0972 8.40267 24.4138 8.40267 24.6091 8.20741L27.7911 5.02543ZM0.4375 5.17188L27.4375 5.17187L27.4375 4.17187L0.4375 4.17188L0.4375 5.17188Z" />
                </svg>
              </CustomLink>
            </Button>
          </div>
          <div className="lg:col-span-6 xl:col-span-5">
            <div className="relative z-1 mx-auto block w-full max-w-[410px] pt-[85px] text-center">
              <span className="absolute inset-0 -z-[1] rounded-t-[205px] bg-accent-700"></span>
              <span className="absolute inset-0 -bottom-5 -right-5 z-[-2] rounded-b-5 rounded-t-[205px] [background:linear-gradient(180deg,rgba(185,18,2,0.00)_0%,#B91202_100%)]"></span>
              <Image
                src={imageLarge.src}
                alt={imageLarge.alt}
                width={355}
                height={505}
                sizes="100vw"
                className="object-cover"
                blurDataURL={blurDataUrl}
              />
            </div>
          </div>
          <div className="relative z-1 max-xl:mx-auto max-xl:mt-[75px] max-xl:max-w-[600px] lg:col-span-12 xl:col-span-3">
            <div className="absolute left-[-85px] top-[-60px] -z-1 animate-rotate-me">
              <Image
                src="/assets/images/hero/shape-2.png"
                alt="hero shape 2"
                width={192}
                height={187}
                sizes="100vw"
                className="object-cover"
                blurDataURL={blurDataUrl}
              />
            </div>
            <p className="mb-[75px] text-body">{description}</p>
            <div
              className={cn(
                // General
                'relative z-1 mx-auto block w-full max-w-[220px] animate-float-bob-y',

                // After
                'after:absolute after:inset-0 after:-z-1 dark:after:[background:linear-gradient(180deg,rgba(20,20,22,0.00)_33.51%,#141416_100%)]'
              )}
            >
              <Image
                src={imageSmall.src}
                alt={imageSmall.alt}
                width={220}
                height={220}
                sizes="100vw"
                className="object-cover"
                blurDataURL={blurDataUrl}
              />
            </div>
            <div className="mt-10 flex items-center justify-center gap-5 lg:mt-[60px] xl:justify-start">
              <svg
                width={65}
                height={66}
                viewBox="0 0 65 66"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_3142_137)">
                  <path
                    d="M9.65039 31.3242C11.1868 31.3242 12.5773 30.7079 13.6047 29.718L19.2418 32.5362C19.2135 32.7658 19.1719 32.9915 19.1719 33.2285C19.1719 36.3786 21.7348 38.9414 24.8848 38.9414C28.0347 38.9414 30.5977 36.3785 30.5977 33.2285C30.5977 32.3492 30.3815 31.5261 30.0248 30.7812L37.6719 23.1342C38.4167 23.4908 39.2399 23.707 40.1191 23.707C43.2692 23.707 45.832 21.1441 45.832 17.9941C45.832 17.401 45.7155 16.8401 45.5469 16.3021L52.1911 11.3202C53.0976 11.9258 54.1843 12.2812 55.3535 12.2812C58.5036 12.2812 61.0664 9.71832 61.0664 6.56836C61.0664 3.4184 58.5035 0.855469 55.3535 0.855469C52.2036 0.855469 49.6406 3.4184 49.6406 6.56836C49.6406 7.16148 49.7572 7.72236 49.9258 8.26039L43.2815 13.2423C42.3751 12.6367 41.2884 12.2812 40.1191 12.2812C36.9691 12.2812 34.4062 14.8442 34.4062 17.9941C34.4062 18.8734 34.6224 19.6966 34.9791 20.4414L27.332 28.0884C26.5872 27.7318 25.764 27.5156 24.8848 27.5156C23.3484 27.5156 21.9579 28.132 20.9304 29.1218L15.2933 26.3036C15.3216 26.0741 15.3633 25.8484 15.3633 25.6113C15.3633 22.4612 12.8005 19.8984 9.65039 19.8984C6.5003 19.8984 3.9375 22.4614 3.9375 25.6113C3.9375 28.7613 6.50043 31.3242 9.65039 31.3242Z"
                    fill="#DF2A19"
                  />
                  <path
                    d="M63.0957 62.0469H61.0645V21.8027C61.0645 20.7503 60.2126 19.8984 59.1602 19.8984H51.543C50.4905 19.8984 49.6387 20.7503 49.6387 21.8027V62.0469H45.8301V33.2285C45.8301 32.1761 44.9782 31.3242 43.9258 31.3242H36.3086C35.2562 31.3242 34.4043 32.1761 34.4043 33.2285V62.0469H30.5957V48.4629C30.5957 47.4104 29.7438 46.5586 28.6914 46.5586H21.0742C20.0218 46.5586 19.1699 47.4104 19.1699 48.4629V62.0469H15.3613V40.8457C15.3613 39.7933 14.5095 38.9414 13.457 38.9414H5.83984C4.7874 38.9414 3.93555 39.7933 3.93555 40.8457V62.0469H1.9043C0.851855 62.0469 0 62.8987 0 63.9512C0 65.0036 0.851855 65.8555 1.9043 65.8555H63.0957C64.1481 65.8555 65 65.0036 65 63.9512C65 62.8987 64.1481 62.0469 63.0957 62.0469Z"
                    fill="#DF2A19"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_3142_137">
                    <rect
                      width={65}
                      height={65}
                      fill="white"
                      transform="translate(0 0.855469)"
                    />
                  </clipPath>
                </defs>
              </svg>
              <div className="h2 font-secondary">
                <Counter
                  end={statisticsCounterInfo.count}
                  suffix={statisticsCounterInfo.suffix}
                />
              </div>
              <p className="text-left">{statisticsCounterInfo.about}</p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
