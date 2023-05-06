import { SizedContainer } from '@/components/SizedContainer';
import type { ArticleRequest } from '@prisma/client';

type Props = {
  articleRequest: ArticleRequest;
};

export const ArticleRequestPage = ({ articleRequest }: Props) => {
  return (
    <SizedContainer as='article' className='grid gap-8 py-4'>
      <h1 className='text-3xl'>{articleRequest.title}</h1>

      <p className='whitespace-pre-wrap'>{articleRequest.description}</p>
    </SizedContainer>
  );
};
