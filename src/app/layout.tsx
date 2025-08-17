import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'PolarBuy | Domine Sua Cidade, Recupere Seu Lucro',
  description: 'Pare de pagar taxas abusivas. Com o PolarBuy e a tecnologia PolarChain™, você corta custos, controla sua entrega e aumenta suas vendas.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
