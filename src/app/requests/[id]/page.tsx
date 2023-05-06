import { ArticleRequestPage } from '@/components/pages/ArticleRequestPage';
import { prisma } from '@/server/lib/prisma';
import { notFound } from 'next/navigation';

type PageProps = {
  params: {
    id: string;
  };
};

export default async function Page({ params: { id } }: PageProps) {
  const articleRequest = await prisma.articleRequest.findUnique({
    where: { id },
  });
  if (articleRequest === null) notFound();

  return <ArticleRequestPage articleRequest={articleRequest} />;
}
