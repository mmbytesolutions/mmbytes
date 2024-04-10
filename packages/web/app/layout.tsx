import './globals.css';
import { Metadata } from 'next';
import { primary, secondary } from '@/fonts';
import { AOSInit } from '@/src/utils/aos';
import { ScrollToTopButton } from '@/src/components/scroll-to-top';
import { cn } from '@/src/utils/shadcn';
import { Toaster } from 'sonner';

interface Props {
  children: React.ReactNode;
}

export const metadata: Metadata = {
  title: 'Techlab',
  description: 'Techlab - IT Solutions and Services React Nextjs Template',
};

export default async function RootLayout({ children }: Props) {
  return (
    <html
      lang="en"
      className={cn(
        'dark',
        primary.variable,
        secondary.variable,
        'text-base leading-[1.875] text-accent-800 [&.dark]:text-body'
      )}
    >
      <AOSInit />
      <body>
        <div
          className={cn(
            'bg-white text-accent-800 dark:bg-accent-900 dark:text-body'
          )}
        >
          <main>{children}</main>
        </div>
        <Toaster
          richColors
          position="top-right"
          closeButton
          visibleToasts={9}
        />
        <ScrollToTopButton />
      </body>
    </html>
  );
}
