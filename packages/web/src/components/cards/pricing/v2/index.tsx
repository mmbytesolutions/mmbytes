import { LinkProps } from '@/src/common-types';
import { Button } from '@/src/components/button';
import { CustomLink } from '@/src/components/custom-link';
import { cn } from '@/src/utils/shadcn';
import { FaCheck } from 'react-icons/fa6';

export interface PricingCardProps {
  title: string;
  description: string;
  features: string[];
  price: string;
  duration: string;
  button: LinkProps;
}

export function PricingCard({
  title,
  description,
  features,
  price,
  duration,
  button,
}: PricingCardProps) {
  return (
    <div className="group rounded-5 bg-accent-100 p-10 pb-[50px] text-center dark:bg-accent-700">
      <h3 className="mb-2.5 text-lg font-bold leading-[1.3] text-accent-900 dark:text-white lg:text-xl">
        {title}
      </h3>
      <p>{description}</p>
      <div
        className={cn(
          'relative z-1 mx-auto mb-30px mt-5 flex min-h-[80px] max-w-[274px] items-center justify-center rounded-5 bg-white font-secondary text-xl font-bold leading-[1.25] text-accent-900 transition-colors duration-300 dark:bg-accent-900 dark:text-white lg:text-2xl',

          // after
          'after:absolute after:bottom-0 after:left-0 after:-z-1 after:h-0 after:w-full after:rounded-[inherit] after:bg-primary after:transition-all after:duration-500 after:ease-in-out',
          'group-hover:after:bottom-auto group-hover:after:top-0 group-hover:after:h-full',

          'group-hover:text-white'
        )}
      >
        <p>
          {price}
          <sub className="relative bottom-0 ml-1.5 inline-block text-base lg:text-md">
            {duration}
          </sub>
        </p>
      </div>
      {features && features.length > 0 && (
        <ul
          aria-label="pricing point list"
          className="mb-[50px] grid gap-1 md:gap-3"
        >
          {features.map((feature, index) => (
            <li
              className="flex items-center gap-3 font-secondary text-md font-bold leading-[1.5] text-white lg:gap-4"
              key={index}
            >
              <span className="text-primary-light">
                <FaCheck />
              </span>
              <span className="text-left">{feature}</span>
            </li>
          ))}
        </ul>
      )}
      <div className="flex-none">
        <Button
          asChild
          className={cn(
            'flex w-full',
            'border-2 border-primary bg-transparent',
            'after:bg-primary'
          )}
        >
          <CustomLink href={button.href} openNewTab={button.openNewTab}>
            <span className="relative z-1">{button.label}</span>
          </CustomLink>
        </Button>
      </div>
    </div>
  );
}
