import { Metadata } from 'next'
import "@/styles/globals.css";
import { GoogleAnalytics } from '@next/third-parties/google'
 
export const metadata: Metadata = {
  title: 'Listen to Jesus',
  description: 'Jesus said to love one another, but did he mean everyone? Yes, he did.',
  openGraph: {
    title: 'Listen to Jesus',
    description: 'Jesus said to love one another, but did he mean everyone? Yes, he did.',
    url: 'https://doesjesus.love',
    siteName: 'Listen to Jesus',
    images: [
      {
        url: 'https://doesjesus.love/listen-to-jesus.png', // Must be an absolute URL
        width: 711,
        height: 484,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Listen to Jesus',
    description: 'Jesus said to love one another, but did he mean everyone? Yes, he did.',
    images: ['https://doesjesus.love/listen-to-jesus.png'], // Must be an absolute URL
  },
}

export default function RootLayout({
    children,
} : {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className="bg-orange-50 text-slate-700">
                {children}
            </body>
            <GoogleAnalytics gaId="G-X8VV3E0995" />
        </html>
    );
};