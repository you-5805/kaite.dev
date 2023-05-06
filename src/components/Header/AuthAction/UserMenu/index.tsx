'use client';

import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { ExitIcon } from '@radix-ui/react-icons';
import { signOut } from 'next-auth/react';
import {
  ChatBubbleOvalLeftEllipsisIcon,
  UserIcon,
} from '@heroicons/react/24/outline';
import { useRouter } from 'next/navigation';
import type { Session } from 'next-auth';

type Props = {
  session: Session & { userId: string };
};

export const UserMenu = ({ session }: Props) => {
  const router = useRouter();

  const imageUrl = session.user?.image;

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <button
          aria-label='ユーザーメニューを開く'
          className='h-10 w-10 overflow-hidden rounded-full ring-sky-500 ring-offset-2 transition-opacity hover:bg-opacity-30 hover:opacity-80 focus:outline-none focus-visible:ring-2'
        >
          {imageUrl !== null && imageUrl !== undefined ? (
            <img
              src={imageUrl}
              loading='lazy'
              decoding='async'
              alt='プロフィール画像'
            />
          ) : (
            <span className='flex items-center justify-center'>
              <UserIcon />
            </span>
          )}
        </button>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content
          hideWhenDetached
          className='absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'
          align='end'
        >
          <DropdownMenu.Item
            onSelect={() => router.push(`/u/${session.userId}`)}
            className='group cursor-pointer p-1 data-[highlighted]:outline-none'
          >
            <span className='flex w-full items-center rounded-md px-2 py-2 text-sm text-gray-900 group-data-[highlighted]:bg-sky-500 group-data-[highlighted]:text-white'>
              <UserIcon
                className='mr-2 h-5 w-5 text-sky-600 group-data-[highlighted]:text-white'
                aria-hidden='true'
              />
              <span>プロフィール</span>
            </span>
          </DropdownMenu.Item>

          <DropdownMenu.Item
            onSelect={() => router.push('/ideas/new')}
            className='group cursor-pointer p-1 data-[highlighted]:outline-none'
          >
            <span className='flex w-full items-center rounded-md px-2 py-2 text-sm text-gray-900 group-data-[highlighted]:bg-sky-500 group-data-[highlighted]:text-white'>
              <ChatBubbleOvalLeftEllipsisIcon
                className='mr-2 h-5 w-5 text-sky-600 group-data-[highlighted]:text-white'
                aria-hidden='true'
              />
              <span>イツカカク</span>
            </span>
          </DropdownMenu.Item>

          <DropdownMenu.Item
            className='group cursor-pointer p-1 data-[highlighted]:outline-none'
            onSelect={() => signOut()}
          >
            <span className='flex w-full items-center rounded-md px-2 py-2 text-sm text-gray-900 group-data-[highlighted]:bg-sky-500 group-data-[highlighted]:text-white'>
              <ExitIcon
                className='mr-2 h-5 w-5 text-sky-600 group-data-[highlighted]:text-white'
                aria-hidden='true'
              />
              サインアウト
            </span>
          </DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
};
