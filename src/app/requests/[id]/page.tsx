import { ArticleRequestPage } from '@/components/pages/ArticleRequestPage';
import { absUrl } from '@/server/lib/absUrl';
import { notFound } from 'next/navigation';
import type { ArticleRequest } from '@prisma/client';

type PageProps = {
  params: {
    id: string;
  };
};

const getArticleRequest = async (id: string) => {
  const res = await fetch(absUrl(`/api/article_requests/${id}`), {
    next: { revalidate: 30 },
  });
  if (!res.ok) {
    notFound();
  }

  const { articleRequest } = (await res.json()) as {
    articleRequest: ArticleRequest;
  };
  return articleRequest;
};

export default async function Page({ params: { id } }: PageProps) {
  const articleRequest = await getArticleRequest(id);

  return <ArticleRequestPage articleRequest={articleRequest} />;
}
