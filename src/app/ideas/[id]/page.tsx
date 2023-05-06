import { ArticleIdeaPage } from '@/components/pages/ArticleIdeaPage';
import { prisma } from '@/server/lib/prisma';
import { notFound } from 'next/navigation';

type PageProps = {
  params: {
    id: string;
  };
};

export default async function Page({ params: { id } }: PageProps) {
  const articleIdea = await prisma.articleIdea.findUnique({
    where: { id },
  });
  if (articleIdea === null) notFound();

  return <ArticleIdeaPage articleIdea={articleIdea} />;
}
