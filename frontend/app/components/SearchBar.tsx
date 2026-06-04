"use client";

import { useState } from "react";

interface SearchResult {
  file: string;
  text: string;
}

export default function SearchBar() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<SearchResult[]>([]);
  const [loading, setLoading] = useState(false);

  async function handleSearch() {
    if (!query.trim()) return;
    setLoading(true);
    const res = await fetch(`http://localhost:8000/api/query?q=${encodeURIComponent(query)}`);
    const json = await res.json();
    setResults(json.results);
    setLoading(false);
  }

  function handleKeyDown(e: React.KeyboardEvent) {
    if (e.key === "Enter") handleSearch();
  }

  return (
    <div className="mx-auto max-w-2xl text-center text-gray-700">
      <div className="flex gap-2 items-center justify-center text-black">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Cerca nel menu, nelle ricette..."
          className="flex-1 rounded border border-gray-300 px-4 py-2 text-gray-700 focus:border-blue-500 focus:outline-none"
        />
        <button
          onClick={handleSearch}
          disabled={loading}
          className="rounded bg-blue-600 px-6 py-2 text-white hover:bg-blue-700 disabled:opacity-50"
        >
          {loading ? "..." : "Cerca"}
        </button>
      </div>

      <div className="mt-6 space-y-4">
        {results.map((r, i) => (
          <div key={i} className="rounded border p-4 bg-gray-100 txt-gray-800">
            <p className="mb-1 text-sm font-semibold text-gray-600">{r.file}</p>
            <p className="whitespace-pre-line text-gray-700">{r.text}</p>
          </div>
        ))}
        {results.length === 0 && query && !loading && (
          <p className="text-gray-500">Nessun risultato per &quot;{query}&quot;</p>
        )}
      </div>
    </div>
  );
}