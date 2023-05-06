import { UserPage } from '@/components/pages/UserPage';
import { prisma } from '@/server/lib/prisma';
import { notFound } from 'next/navigation';

type PageProps = {
  params: {
    id: string;
  };
};

export default async function Page({ params: { id } }: PageProps) {
  const user = await prisma.user.findUnique({
    where: {
      id,
    },
    select: {
      id: true,
      name: true,
      ArticleIdea: {
        select: {
          id: true,
        },
        orderBy: {
          createdAt: 'desc',
        },
        take: 10,
      },
    },
  });

  if (user === null) notFound();

  return <UserPage user={user} />;
}
