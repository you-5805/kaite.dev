import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import type { Metadata } from 'next';
import type { PropsWithChildren } from 'react';
import '@/styles/global.css';

export const metadata = {
  title: 'kaite.dev - 「書いて」を伝える',
  description:
    'kaite.dev は、ユーザーの「書きたい」記事のアイデアに、「書いて」を伝えられる Web サービスです。',
} satisfies Metadata;

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang='ja'>
      <body suppressHydrationWarning>
        <Header />

        <div className='min-h-screen'>{children}</div>

        <Footer />
      </body>
    </html>
  );
}
