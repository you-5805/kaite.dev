import { SizedContainer } from '@/components/SizedContainer';
import type { ArticleIdea } from '@prisma/client';

type Props = {
  user: {
    id: string;
    name: string | null;
    ArticleIdea: {
      id: string;
    }[];
  };
};

export const UserPage = ({ user }: Props) => {
  return (
    <SizedContainer as='main'>
      <h1>イツカカク一覧</h1>
    </SizedContainer>
  );
};
