'use server';

import { formSchema } from './schema';
import { prisma } from '@/server/lib/prisma';
import { revalidatePath } from 'next/cache';
import { zact } from 'zact/server';

export const createArticleIdea = zact(formSchema)(async (data) => {
  const { id } = await prisma.articleIdea.create({ data });
  revalidatePath('/');

  return {
    id,
  };
});
