import './globals.css';

export const metadata = {
  title: 'Swarna Jeswanth – Full Stack Developer',
  description:
    'Full Stack Developer with 1+ year building scalable web apps using React.js, Node.js, Express, and MongoDB.',
  keywords: ['Full Stack Developer', 'React', 'Next.js', 'Node.js', 'Portfolio'],
  authors: [{ name: 'Swarna Jeswanth' }],
  openGraph: {
    title: 'Swarna Jeswanth – Full Stack Developer',
    description: 'Building scalable web applications with modern technologies.',
    type: 'website',
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body className="antialiased">{children}</body>
    </html>
  );
}
