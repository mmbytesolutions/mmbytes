import { PersonProps, blurDataUrl } from '@/src/common-types';
import Image from 'next/image';
import StarRating from '../rating';

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
    <div className="h-full rounded-5 bg-accent-100 p-6  dark:bg-accent-700 sm:p-10">
      <div className="text-primary">
        <StarRating staticRating={rating} />
      </div>
      <p className="mb-30px mt-2">{speech}</p>
      <div className="flex items-center gap-30px">
        <div className="relative max-w-max flex-none">
          <Image
            src={image.src}
            alt={image.alt}
            width={80}
            height={80}
            placeholder="blur"
            blurDataURL={blurDataUrl}
            className="rounded-full object-cover"
          />
          <span className="absolute -right-2 top-0 text-primary">
            <svg
              width={30}
              height={31}
              viewBox="0 0 30 31"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M6.60221 12.8771C6.99327 9.91655 10.0659 6.75411 12.4681 6.68683C12.6357 6.68683 12.8033 6.61954 12.9151 6.48497C13.0268 6.41768 13.1385 6.3504 13.1944 6.14854C14.0324 4.26453 13.5855 2.78424 12.1888 1.57309C10.5687 0.160088 7.99886 1.57309 6.71394 2.85153C3.47372 6.08125 0.177625 11.6659 0.345223 16.9816C-0.213437 20.5478 -0.101705 24.383 0.736284 27.5455C1.29494 29.564 2.91506 30.5733 4.59104 30.7079C6.26701 30.8426 9.7307 31.4481 11.2391 30.237C12.7475 29.0258 12.8592 26.6708 13.0268 24.6523C13.1944 22.4318 13.6972 18.26 12.1329 16.5106C10.5687 14.8284 6.09942 16.6451 6.60221 12.8771Z" />
              <path d="M22.985 12.8771C23.3761 9.91655 26.4486 6.75411 28.851 6.68683C29.0186 6.68683 29.1862 6.61954 29.2979 6.48497C29.4097 6.41768 29.5213 6.3504 29.5773 6.14854C30.4153 4.26453 29.9684 2.78424 28.5717 1.57309C26.9516 0.160088 24.3818 1.57309 23.0968 2.85153C19.8565 6.08125 16.5604 11.666 16.728 16.9816C16.1694 20.5478 16.2811 24.383 17.119 27.5455C17.6777 29.564 19.2978 30.5733 20.9739 30.7079C22.6498 30.8426 26.1135 31.4481 27.6219 30.237C29.1302 29.0258 29.242 26.6708 29.4096 24.6523C29.5772 22.4318 30.08 18.26 28.5158 16.5106C26.9515 14.8284 22.4264 16.6451 22.985 12.8771Z" />
            </svg>
          </span>
        </div>
        <div>
          <h3 className="text-md font-bold leading-[1.25] text-accent-900 dark:text-white md:text-lg">
            {name}
          </h3>
          <p className="mt-1">{about}</p>
        </div>
      </div>
    </div>
  );
}
