'use client';

import { Button } from '../Button';
import { GitHubIcon } from '../images/GitHubIcon';
import { cn } from '@/lib/cn';
import * as RadixDialog from '@radix-ui/react-dialog';
import Link from 'next/link';
import { XMarkIcon } from '@heroicons/react/24/solid';
import { signIn } from 'next-auth/react';

export const SignInButton = () => {
  return (
    <RadixDialog.Root>
      <div className='py-0.5'>
        <RadixDialog.Trigger asChild>
          <Button>サインイン</Button>
        </RadixDialog.Trigger>
      </div>

      <RadixDialog.Portal>
        <RadixDialog.Overlay className='animate-appear data-[state=open]:animate-appear data-[state=closed]:animate-disappear fixed inset-0 bg-black bg-opacity-30' />
        <RadixDialog.Content className='fixed left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col gap-6 rounded-md bg-white p-6 shadow-xl'>
          <RadixDialog.Title className='w-full text-center text-xl font-bold'>
            サインイン
          </RadixDialog.Title>

          <RadixDialog.Close asChild>
            <button
              className='absolute right-6 top-6'
              aria-label='モーダルを閉じる'
            >
              <XMarkIcon className='h-6 w-6 text-gray-600' aria-hidden='true' />
            </button>
          </RadixDialog.Close>

          <RadixDialog.Description className='md:text-md text-sm'>
            サインインすると、リクエストに「ヨミタイ」できるようになります。
          </RadixDialog.Description>
          <div className='flex flex-col items-center gap-4'>
            <button
              onClick={() => signIn('github')}
              className={cn(
                'flex w-full max-w-md items-center justify-center gap-3 rounded bg-[#181515] p-2 font-bold text-white',
                'shadow-md ring-indigo-500 ring-offset-2 transition-opacity hover:opacity-80 focus:outline-none focus-visible:ring-2',
              )}
            >
              <GitHubIcon />
              GitHub でサインイン
            </button>

            <p className='md:text-md text-xs'>
              <Link
                href='/term'
                className='text-gray-700 underline'
                target='_blank'
              >
                利用規約
              </Link>
              および
              <Link
                href='/privacy_policy'
                className='text-gray-700 underline'
                target='_blank'
              >
                プライバシーポリシー
              </Link>
              に同意の上、サインインしてください。
            </p>
          </div>
        </RadixDialog.Content>
      </RadixDialog.Portal>
    </RadixDialog.Root>
  );
};
