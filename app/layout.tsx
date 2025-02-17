import Navbar from '@/components/Navbar/Navbar';
import CityBuilderProvider from '@/contexts/CityBuilderContext';
import type { Metadata } from 'next';
import './globals.css';

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
    <html lang="en">
      <body>
        <div className='relative'>
          <Navbar />
          <CityBuilderProvider>
            {children}
          </CityBuilderProvider>
          <div id='overlay'></div>
        </div>
      </body>
    </html>
  );
}
