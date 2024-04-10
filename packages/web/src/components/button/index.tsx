import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, VariantProps } from 'class-variance-authority';
import { cn } from '@/src/utils/shadcn';

const disabledClasses = cn('pointer-events-none opacity-60');

const buttonVariants = cva(
  [
    // General
    'relative z-[2] bg-transparent text-white dark:text-white  overflow-hidden text-base leading-[1.1] font-bold font-secondary tracking-wide uppercase [transition:all_0.3s_linear]',

    // Layout
    'inline-flex items-center justify-center gap-3 md:min-h-[3.75rem] min-h-[3.5rem] px-6 md:px-7 py-2 md:py-3',

    // Animation
    'transition-colors ease-in-out',

    // Accessibility
    'ring-offset-primary-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',

    // Normal color
    'bg-primary',

    // after - normal color
    'after:absolute after:h-full after:w-0 after:bottom-0 after:right-0 after:bg-black/[.15] after:-z-1 after:[transition:all_.3s_ease-in-out]',

    // hover
    'hover:text-white dark:hover:text-white',
    'hover:after:w-full hover:after:left-0',
  ],

  // This variant is not configured.
  {
    variants: {
      colorScheme: {
        primary: '',
      },
      shape: {
        default: 'rounded-5',
        circle: 'rounded-full',
      },
    },
    defaultVariants: {
      colorScheme: 'primary',
      shape: 'default',
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, asChild = false, disabled, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    return (
      <Comp
        className={cn(
          disabled && disabledClasses,
          buttonVariants({ className })
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = 'Button';
