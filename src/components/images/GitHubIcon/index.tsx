import src from 'public/img/github.svg';
import Image from 'next/image';
import { forwardRef } from 'react';
import type { ImageProps } from 'next/image';

type Props = Omit<
  ImageProps,
  'src' | 'height' | 'width' | 'alt' | 'aria-hiden'
>;

export const GitHubIcon = forwardRef<HTMLImageElement, Props>((props, ref) => {
  return (
    <Image
      src={src}
      height={24}
      width={24}
      alt='GitHub のアイコン'
      aria-hidden='true'
      ref={ref}
      {...props}
    />
  );
});

GitHubIcon.displayName = 'GitHubIcon';
