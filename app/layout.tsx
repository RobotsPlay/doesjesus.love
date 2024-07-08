import { Metadata } from 'next'
import "@/styles/globals.css";
 
export const metadata: Metadata = {
  title: 'Listen to Jesus',
  description: 'Jesus said to love one another, but did he mean everyone? Yes, he did.',
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
        </html>
    );
};