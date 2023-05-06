import { cn } from '@/lib/cn';
import type { ElementType, PropsWithChildren } from 'react';

type Props = PropsWithChildren<{
  as?: ElementType;
  className?: string;
}>;

export function SizedContainer({ as: As = 'div', className, children }: Props) {
  return (
    <As className='px-4 py-2 md:py-4'>
      <div className={cn('mx-auto max-w-4xl', className)}>{children}</div>
    </As>
  );
}
