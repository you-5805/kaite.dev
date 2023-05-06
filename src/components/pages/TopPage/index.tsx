import { SizedContainer } from '@/components/SizedContainer';
import { getTimeSubtract } from '@/lib/getTimeSubtract';
import Link from 'next/link';
import type { ArticleIdea } from '@prisma/client';

type Props = {
  articleIdeas: ArticleIdea[];
};

export const TopPage = ({ articleIdeas }: Props) => {
  return (
    <SizedContainer as='main' containerClassName='min-h-screen bg-stone-50'>
      <section className='grid gap-4 py-4'>
        <h1 className='text-lg font-bold'>新着のイツカカク</h1>

        <ul className='grid grid-cols-1 gap-4 sm:grid-cols-2'>
          {articleIdeas.map(({ id, createdAt, title }) => (
            <li
              key={id}
              className='grid gap-2 rounded-md bg-white p-3 shadow-md'
            >
              <div>
                <Link
                  href={`/ideas/${id}`}
                  className='text-lg hover:underline'
                  style={{ alignSelf: 'start' }}
                >
                  {title}
                </Link>
              </div>

              <p className='text-sm'>
                <time dateTime={createdAt.toISOString()}>
                  {getTimeSubtract(createdAt.toISOString())}
                </time>
              </p>
            </li>
          ))}
        </ul>
      </section>
    </SizedContainer>
  );
};
