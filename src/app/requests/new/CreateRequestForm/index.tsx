'use client';

import { Button } from '@/components/Button';
import { createRequestAction } from '@/server/_actions/createRequest';
import { useTransition } from 'react';

export function CreateRequestForm() {
  const [isPending, startTransition] = useTransition();

  const action = async () => {
    startTransition(() => createRequestAction());
  };

  return (
    <main className='px-4 py-2 md:py-4'>
      <form className='mx-auto max-w-4xl' action={action}>
        <h1>リクエストを作成する</h1>

        <Button type='submit' disabled={isPending}>
          作成
        </Button>
      </form>
    </main>
  );
}
