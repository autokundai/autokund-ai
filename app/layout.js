import './globals.css';

export const metadata = {
  title: 'AutoKund AI',
  description: 'AI-assistenten för svenska småföretag',
};

export default function RootLayout({ children }) {
  return (
    <html lang="sv">
      <body>{children}</body>
    </html>
  );
}
