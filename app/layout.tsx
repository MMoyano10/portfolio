import type {Metadata} from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import { LanguageProvider } from '@/context/language-context';

export const metadata: Metadata = {
  title: 'Mathius Moyano | Full-stack Software Engineer',
  description: 'Mathius Moyano — Full-stack Software Engineer in Quito, Ecuador. .NET microservices, React, PostgreSQL, applied AI and SaaS products. Open to remote roles.',
  robots: { index: true, follow: true },
  openGraph: { title: 'Mathius Moyano | Full-stack Software Engineer', description: 'Engineering reliable full-stack systems and AI-powered products.', type: 'website', locale: 'en_US', alternateLocale: ['es_EC'] },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Anton&family=Poppins:wght@400;600;700&display=swap" rel="stylesheet" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="font-body antialiased">
        <LanguageProvider>{children}</LanguageProvider>
        <Toaster />
      </body>
    </html>
  );
}
