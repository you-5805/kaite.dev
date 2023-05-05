import { nextAuthOptions } from '@/lib/server/nextauth';
import nextAuth from 'next-auth';

export default nextAuth(nextAuthOptions);
