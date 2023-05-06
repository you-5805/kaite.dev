import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import type { Metadata } from 'next';
import type { PropsWithChildren } from 'react';
import '@/styles/global.css';

export const metadata = {
  title: 'kaite.dev - 書いてほしい技術記事をリクエスト',
  description:
    'kaite.dev は、誰かに書いてほしい技術記事をリクエストするための Web サイトです。',
} satisfies Metadata;

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang='ja'>
      <body suppressHydrationWarning={true}>
        <Header />

        <div className='min-h-screen'>{children}</div>

        <Footer />
      </body>
    </html>
  );
}
