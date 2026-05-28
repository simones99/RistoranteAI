export default function Home() {
  const nome ="Simone"
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-grey">
      <h1 className="text-4xl font-bold text-white-900">
        RistoranteAI
      </h1>
      <p className="mt-4 text-lg text-white-600">
        Ciao, {nome}. Ti presento il tuo assistente per il menù del ristorante.
      </p>
    </main>
  )
}