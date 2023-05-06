import src from 'public/img/logo.svg';
import Image from 'next/image';
import { forwardRef } from 'react';
import type { ImageProps } from 'next/image';

type Props = Omit<
  ImageProps,
  'src' | 'height' | 'width' | 'alt' | 'aria-hiden'
>;

export const Logo = forwardRef<HTMLImageElement, Props>((props, ref) => {
  return (
    <Image
      src={src}
      height={24}
      width={24}
      alt='kaite.dev のロゴ'
      aria-hidden='true'
      ref={ref}
      {...props}
    />
  );
});

Logo.displayName = 'Logo';
