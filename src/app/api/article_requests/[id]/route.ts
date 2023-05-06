import { prisma } from '@/server/lib/prisma';
import { notFound } from 'next/navigation';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

type Param = {
  params: {
    id: string;
  };
};

export const GET = async (_: NextRequest, { params: { id } }: Param) => {
  const articleRequest = await prisma.articleRequest.findUnique({
    where: { id },
  });
  if (articleRequest === null) notFound();

  return NextResponse.json({
    articleRequest,
  });
};
