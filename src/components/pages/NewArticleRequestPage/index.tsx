'use client';

import { Button } from '@/components/Button';
import { createArticleRequestAction } from '@/server/_actions/createArticleRequest/action';
import { formSchema } from '@/server/_actions/createArticleRequest/schema';
import { cn } from '@/lib/cn';
import { useRouter } from 'next/navigation';
import { useTransition } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import type { FormSchema } from '@/server/_actions/createArticleRequest/schema';

export const NewArticleRequestPage = () => {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  const { control, handleSubmit } = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
    defaultValues: { title: '', description: '' },
  });

  const onSubmit = handleSubmit((data) => {
    startTransition(async () => {
      const { id } = await createArticleRequestAction(data);
      router.push(`/requests/${id}`);
    });
  });

  return (
    <main className='px-4 py-2 md:py-4'>
      <form className='mx-auto grid max-w-xl gap-8' onSubmit={onSubmit}>
        <h1 className='font-bold'>リクエストを作成する</h1>
        <Controller
          control={control}
          name='title'
          render={({ field }) => (
            <label className='flex flex-col items-start gap-1'>
              <span className='font-bold'>タイトル</span>
              <input
                {...field}
                type='text'
                autoFocus
                className={cn(
                  'w-full rounded-md border p-2 ring-2 ring-transparent ring-offset-2 hover:ring-sky-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400',
                  'disabled:bg-stone-100 hover:disabled:ring-transparent',
                )}
                disabled={isPending}
              />
            </label>
          )}
        />

        <Controller
          control={control}
          name='description'
          render={({ field }) => (
            <label className='flex flex-col items-start gap-1'>
              <span className='font-bold'>詳細</span>
              <textarea
                {...field}
                rows={10}
                className={cn(
                  'w-full rounded-md border p-2 ring-2 ring-transparent ring-offset-2 hover:ring-sky-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 disabled:bg-stone-100 hover:disabled:ring-transparent',
                  'disabled:bg-stone-100 hover:disabled:ring-transparent',
                )}
                disabled={isPending}
              />
            </label>
          )}
        />

        <Button type='submit' disabled={isPending}>
          {isPending ? '作成中...' : '作成'}
        </Button>
      </form>
    </main>
  );
};
