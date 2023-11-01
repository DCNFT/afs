import './globals.css';
import '@/styles/masonry.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Providers from '../Providers';
import { Theme } from '@radix-ui/themes';
import 'react-toastify/dist/ReactToastify.css';
import '@radix-ui/themes/styles.css';
import { ToastContainer } from 'react-toastify';
import '@/styles/custom-toast.css';
import '@/styles/index.css';
const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'afs',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className={inter.className}
        id="root"
        style={{ fontFamily: 'Noto Sans KR' }}
      >
        <Providers>
          <Theme>
            <ToastContainer />
            <main className="flex flex-col mx-auto h-screen">{children}</main>
          </Theme>
        </Providers>
      </body>
    </html>
  );
}
