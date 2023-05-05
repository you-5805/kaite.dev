import { cn } from '@/lib/cn';
import { forwardRef } from 'react';
import type { ComponentPropsWithoutRef } from 'react';

type Props = ComponentPropsWithoutRef<'button'>;

export const Button = forwardRef<HTMLButtonElement, Props>(
  ({ children, className, ...props }, ref) => {
    return (
      <button
        {...props}
        className={cn(
          'md:text-md relative rounded-md bg-indigo-600 px-4 py-2 text-sm font-bold text-white transition-colors hover:bg-indigo-500',
          'focus:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-1',
          'disabled:cursor-not-allowed disabled:bg-indigo-400',
          className,
        )}
        ref={ref}
      >
        {children}
      </button>
    );
  },
);

Button.displayName = 'Button';
