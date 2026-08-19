import type { Metadata } from 'next';
import { Inter, Space_Grotesk } from 'next/font/google';
import './globals.css';
import { TransitionProvider } from '@/lib/TransitionContext';
import { PillNavWrapper } from '@/components/layout/PillNavWrapper';
import { GlobalLoader } from '@/components/layout/GlobalLoader';

const inter = Inter({ subsets: ['latin'], variable: '--font-body' });
const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], variable: '--font-display' });

export const metadata: Metadata = {
  title: 'Invega Exports | Bridging Borders, Powering Trade',
  description: 'A 3D scrollytelling experience about export compliance and global trade.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable} antialiased dark`}>
      <body>
        <GlobalLoader />
        <TransitionProvider>
          <PillNavWrapper />
          {children}
        </TransitionProvider>
      </body>
    </html>
  );
}
