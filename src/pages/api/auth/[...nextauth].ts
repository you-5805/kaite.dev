import { nextAuthOptions } from '@/server/lib/nextauth';
import nextAuth from 'next-auth';

export default nextAuth(nextAuthOptions);
