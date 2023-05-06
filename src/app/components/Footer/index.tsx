import { SizedContainer } from '@/components/SizedContainer';
import Link from 'next/link';

export const Footer = () => {
  return (
    <SizedContainer as='footer'>
      <div className='flex flex-col items-center gap-4 px-3 pb-20 pt-8'>
        <div className='flex flex-wrap items-center justify-center gap-6'>
          <Link href='/term'>
            <span className='whitespace-nowrap hover:text-gray-600 hover:underline'>
              利用規約
            </span>
          </Link>
          <Link href='/privacy_policy'>
            <span className='whitespace-nowrap hover:text-gray-600 hover:underline'>
              プライバシーポリシー
            </span>
          </Link>
          <a
            href='https://twitter.com/yoiwamoto'
            target='_blank'
            rel='noreferrer'
            className='whitespace-nowrap hover:text-gray-600 hover:underline'
          >
            開発者Twitter
          </a>
        </div>

        <p className='text-sm'>
          Copyright 2023 kaite.dev - All rights reserved.
        </p>
      </div>
    </SizedContainer>
  );
};
