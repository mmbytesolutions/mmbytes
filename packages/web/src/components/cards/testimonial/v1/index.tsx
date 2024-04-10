import { PersonProps, blurDataUrl } from '@/src/common-types';
import Image from 'next/image';
import StarRating from '../rating';
import { FaQuoteRight } from 'react-icons/fa6';

export interface TestimonialCardProps {
  person: PersonProps;
  speech: string;
  rating: number;
}

export function TestimonialCard({
  person: { image, about, name },
  rating,
  speech,
}: TestimonialCardProps) {
  return (
    <div className="h-full rounded-5 bg-accent-100 p-6 transition-transform duration-350 hover:[transform:translateY(-.5rem)] dark:bg-accent-700 sm:p-[50px]">
      <div className="flex flex-col gap-12 md:flex-row md:gap-5">
        <div className="relative max-w-max flex-none">
          <Image
            src={image.src}
            alt={image.alt}
            width={180}
            height={180}
            placeholder="blur"
            blurDataURL={blurDataUrl}
            className="rounded-5 object-cover mix-blend-luminosity"
          />
          <span className="absolute left-1/2 grid h-[50px] w-[50px] -translate-x-1/2 -translate-y-1/2 place-items-center  rounded-full border-2 border-primary-light bg-primary text-lg/[1] text-white">
            <FaQuoteRight />
          </span>
        </div>
        <div className="flex-1">
          <h3 className="text-md font-bold leading-[1.25] text-accent-900 dark:text-white md:text-lg">
            {name}
          </h3>
          <p className="mt-1">{about}</p>
          <div className="mt-2 min-h-[30px] text-primary">
            <StarRating staticRating={rating} />
          </div>
          <p className="mt-5">{speech}</p>
        </div>
      </div>
    </div>
  );
}
