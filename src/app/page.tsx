import { TopPage } from '@/components/pages/TopPage';
import { prisma } from '@/server/lib/prisma';

export default async function Page() {
  const articleRequests = await prisma.articleRequest.findMany();

  return <TopPage articleRequests={articleRequests} />;
}
