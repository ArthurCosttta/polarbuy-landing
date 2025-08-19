// src/app/layout.tsx

import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
// ESTA LINHA É A SOLUÇÃO! ELA APLICA OS ESTILOS DO TAILWIND
import '../../globals.css' 

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'PolarBuy',
  description: 'A revolução do comércio local.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      {/* Aqui aplicamos as cores de fundo e texto padrão para TODO o site */}
      <body className={`${inter.className} bg-background text-primary`}>
        {children}
      </body>
    </html>
  )
}
