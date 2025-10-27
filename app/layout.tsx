import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'k',
  description: 'A minimal presentation of the letter k.'
};

type RootLayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
