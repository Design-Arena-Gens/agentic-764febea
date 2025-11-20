import type { Metadata } from 'next';
import './globals.css';
import { ThemeProvider } from './theme/ThemeProvider';

export const metadata: Metadata = {
  title: 'DS ? Minimal Design System',
  description: 'A tiny design system built with Next.js',
  viewport: 'width=device-width, initial-scale=1',
  icons: { icon: '/favicon.ico' }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}

