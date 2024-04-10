import { cn } from '@/src/utils/shadcn';

export function inputFieldCommonClassesGenerator({
  className,
}: {
  className?: string;
}): string {
  return cn(
    // Layout styles
    'flex items-center min-h-[3.5rem]  md:min-h-[3.75rem] w-full rounded-5 px-4 md:px-5 py-2',

    // General styles
    ' bg-transparent text-accent-800 placeholder:text-accent-800 dark:text-body dark:placeholder:text-body',

    // Border styles
    ' border border-solid border-accent-900 border-opacity-20 dark:border-opacity-20 dark:border-accent-200',

    // Focus styles
    ' focus:border-accent-900 focus:ring-0 focus-visible:outline-0 focus-visible:ring-0 focus-visible:ring-offset-0',

    // Animation
    'transition-all duration-300',

    // Additional custom className (optional)
    className
  );
}
