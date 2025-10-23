import './globals.css';

export const metadata = {
  title: 'Psychologist Matching',
  description: 'Подбор психолога под ваши запросы',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
