import { AuthAction } from './AuthAction';
import Link from 'next/link';

export const Header = () => {
  return (
    <header className='px-4 py-2 md:py-4'>
      <div className='mx-auto flex max-w-4xl items-center justify-between'>
        <Link
          href='/'
          className='rounded-md text-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-1'
        >
          kaite.dev
        </Link>

        {/* @ts-expect-error Async Server Component */}
        <AuthAction />
      </div>
    </header>
  );
};
