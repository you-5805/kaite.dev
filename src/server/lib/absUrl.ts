import { env } from '@/config/env';

export const absUrl = (path: string) => {
  const protocol = env.VERCEL_URL.includes('localhost') ? 'http' : 'https';

  return `${protocol}://${env.VERCEL_URL}${path}`;
};
