import { prisma } from './prisma';
import { env } from '@/config/env';
import GitHubProvider from 'next-auth/providers/github';
import { PrismaAdapter } from '@next-auth/prisma-adapter';
import { getServerSession } from 'next-auth';
import type { NextAuthOptions } from 'next-auth';

export const nextAuthOptions = {
  adapter: {
    ...PrismaAdapter(prisma),
    createUser: async (data) => {
      const result = await prisma.user.create({
        data: {
          ...data,
          name: data.name ?? 'ユーザー',
        },
      });
      return result;
    },
  },
  providers: [
    GitHubProvider({
      clientId: env.GITHUB_CLIENT_ID,
      clientSecret: env.GITHUB_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    session({ session, user }) {
      return {
        ...session,
        userId: user.id,
      };
    },
  },
} satisfies NextAuthOptions;

export const getSession = () => getServerSession(nextAuthOptions);
