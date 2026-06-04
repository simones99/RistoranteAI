import RistoranteCard from "./components/RistoranteCard";
import HealthStatus from "./components/HealthStatus";
import DocumentList from "./components/DocumentList";

export default function Home() {
  const nome = "Simone"
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-8">
      <h1 className="text-4xl font-bold text-gray-900">RistoranteAI</h1>
      <HealthStatus />
      <DocumentList />
      <p className="mt-4 text-lg text-gray-600">
        Il tuo assistente per il menu del ristorante, {nome}!
      </p>
      <div className="mt-8 flex gap-6">
        <RistoranteCard
          titolo="Menu"
          descrizione={`Scopri i piatti del nostro ristorante`}
        />
        <RistoranteCard
          titolo="Ricette"
          descrizione="Le ricette dei nostri piatti tipici"
        />
        <RistoranteCard
          titolo="Allergeni"
          descrizione="Informazioni su allergeni e intolleranze"
        />
      </div>
    </main>
  )
}