import { SizedContainer } from '@/components/SizedContainer';

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
  console.log({ user });
  return (
    <SizedContainer as='main'>
      <h1 className='text-lg font-bold'>自分のイツカカク</h1>
    </SizedContainer>
  );
};
