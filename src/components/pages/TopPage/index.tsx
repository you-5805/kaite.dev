import { SizedContainer } from '@/components/SizedContainer';
import { getTimeSubtract } from '@/lib/getTimeSubtract';
import Link from 'next/link';
import type { ArticleRequest } from '@prisma/client';

type Props = {
  articleRequests: ArticleRequest[];
};

export const TopPage = ({ articleRequests }: Props) => {
  return (
    <SizedContainer as='main' containerClassName='min-h-screen bg-stone-50'>
      <section>
        <h1>新着の記事リクエスト</h1>

        <ul className='grid grid-cols-1 gap-4 sm:grid-cols-2'>
          {articleRequests.map(({ id, createdAt, title }) => (
            <li
              key={id}
              className='grid gap-2 rounded-md bg-white p-3 shadow-md'
            >
              <div>
                <Link
                  href={`/requests/${id}`}
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
