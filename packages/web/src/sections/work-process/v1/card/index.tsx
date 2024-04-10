import { Button } from '@/src/components/button';
import { CustomLink } from '@/src/components/custom-link';
import { cn } from '@/src/utils/shadcn';

export interface WorkprocessCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  link: string;
  count: string;
}

export function WorkprocessCard({
  icon,
  title,
  description,
  count,
  link,
}: WorkprocessCardProps) {
  return (
    <div className="relative whitespace-normal rounded-5 bg-accent-100 p-6  dark:bg-accent-700 lg:p-10">
      <div className="flex items-center gap-5">
        <div className="relative flex-none">
          <span className="absolute -top-3 inline-block h-16 w-16 rounded-full bg-primary"></span>
          <span className="relative -left-3 top-3 z-1 text-accent-900 dark:text-white">
            {icon}
          </span>
        </div>
        <h3 className="h3 text-accent-900 dark:text-white">{title}</h3>
      </div>
      <p className="mt-6">{description}</p>
      <div className="mt-7 pr-[120px]">
        <Button
          asChild
          className={cn(
            '!min-h-fit gap-2.5 bg-transparent !p-0  uppercase text-primary hover:bg-transparent dark:text-primary dark:hover:text-white',

            // Prevent default button styles
            'after:hidden'
          )}
        >
          <CustomLink
            href={link}
            aria-label={`${title}'s work process, click here for read more`}
          >
            <span>Read More</span>
            <span>
              <svg
                width="15"
                height="13"
                viewBox="0 0 15 13"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M13.6875 6.83984L8.6875 11.8398C8.5 12.0273 8.25 12.1211 8 12.1211C7.71875 12.1211 7.46875 12.0273 7.28125 11.8398C6.875 11.4648 6.875 10.8086 7.28125 10.4336L10.5625 7.12109H1C0.4375 7.12109 0 6.68359 0 6.12109C0 5.58984 0.4375 5.12109 1 5.12109H10.5625L7.28125 1.83984C6.875 1.46484 6.875 0.808594 7.28125 0.433594C7.65625 0.0273438 8.3125 0.0273438 8.6875 0.433594L13.6875 5.43359C14.0938 5.80859 14.0938 6.46484 13.6875 6.83984Z" />
              </svg>
            </span>
          </CustomLink>
        </Button>
      </div>
      <span className="absolute -bottom-5 right-5 z-1 text-[68px] font-bold text-accent-900/10 dark:text-white/10">
        {count}
      </span>
    </div>
  );
}
