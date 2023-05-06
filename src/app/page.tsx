import { TopPage } from '@/components/pages/TopPage';
import { prisma } from '@/server/lib/prisma';

export default async function Page() {
  const articleIdeas = await prisma.articleIdea.findMany();

  return <TopPage articleIdeas={articleIdeas} />;
}
