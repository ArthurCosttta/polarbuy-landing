export default function TestPage() {
  return (
    <div className="min-h-screen bg-background text-primary p-8">
      <h1 className="text-4xl font-bold text-accent mb-4">
        Teste do Tailwind
      </h1>
      <div className="bg-card p-6 rounded-lg">
        <p className="text-lg">
          Se você ver este texto em fundo azul escuro com texto claro, o Tailwind está funcionando!
        </p>
        <div className="mt-4 p-4 bg-accent text-background rounded">
          Este deve ser um fundo amarelo com texto escuro
        </div>
      </div>
    </div>
  )
}
