import { cn } from '@/lib/cn';
import type { ElementType, PropsWithChildren } from 'react';

type Props = PropsWithChildren<{
  as?: ElementType;
  className?: string;
}>;

export function SizedContainer({ as: As = 'div', className, children }: Props) {
  return (
    <As className={cn('px-4 py-2 md:py-4', className)}>
      <div className='mx-auto max-w-4xl'>{children}</div>
    </As>
  );
}
