import { SignInButton } from './SignInButton';
import { UserMenu } from './UserMenu';
import { getSession } from '@/server/lib/nextauth';

export const AuthAction = async () => {
  const session = await getSession();

  if (session === null) {
    return <SignInButton />;
  } else {
    return <UserMenu session={session} />;
  }
};
