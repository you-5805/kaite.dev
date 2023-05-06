'use server';

import { prisma } from '../lib/prisma';

export const createRequestAction = async () => {
  await prisma.articleRequest.create({ data: {} });
};
