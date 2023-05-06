import { SizedContainer } from '@/components/SizedContainer';
import type { ArticleIdea } from '@prisma/client';

type Props = {
  articleIdea: ArticleIdea;
};

export const ArticleIdeaPage = ({ articleIdea }: Props) => {
  return (
    <SizedContainer as='article' className='grid gap-8 py-4'>
      <h1 className='text-3xl'>{articleIdea.title}</h1>

      <p className='whitespace-pre-wrap'>{articleIdea.description}</p>
    </SizedContainer>
  );
};
