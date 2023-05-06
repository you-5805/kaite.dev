'use server';

import { formSchema } from './schema';
import { prisma } from '@/server/lib/prisma';
import { zact } from 'zact/server';

export const createArticleRequestAction = zact(formSchema)(async (data) => {
  console.log({ data });
  const { id } = await prisma.articleRequest.create({ data });

  return {
    id,
  };
});
