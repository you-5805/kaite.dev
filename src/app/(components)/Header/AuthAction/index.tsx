import { SignInButton } from './SignInButton';
import { UserMenu } from './UserMenu';
import { nextAuthOptions } from '@/lib/server/nextauth';
import { getServerSession } from 'next-auth';

export const AuthAction = async () => {
  const session = await getServerSession(nextAuthOptions);

  if (session === null) {
    return <SignInButton />;
  } else {
    return <UserMenu session={session} />;
  }
};
