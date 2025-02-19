import Navbar from '@/components/Navbar/Navbar';
import type { Metadata } from 'next';
import './globals.css';
import StoreProvider from './StoreProvider';

export const metadata: Metadata = {
  title: 'City Builder',
  description: 'A city builder website that can be customized based on your preferred style',
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <StoreProvider>
      <html lang="en">
        <body>
          <div className='relative'>
            <Navbar />
            {children}
            <div id='overlay'></div>
          </div>
        </body>
      </html>
    </StoreProvider>
  );
}
