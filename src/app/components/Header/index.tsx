import { AuthAction } from './AuthAction';
import { SizedContainer } from '@/components/SizedContainer';
import { Logo } from '@/components/images/Logo';
import Link from 'next/link';

export const Header = () => {
  return (
    <SizedContainer as='header'>
      <div className='mx-auto flex max-w-4xl items-center justify-between'>
        <Link
          href='/'
          className='flex items-end gap-2 rounded-md text-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-1'
        >
          <Logo />

          <span>kaite.dev</span>
        </Link>

        {/* @ts-expect-error Async Server Component */}
        <AuthAction />
      </div>
    </SizedContainer>
  );
};
