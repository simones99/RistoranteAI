"use client";

import { useEffect, useState } from "react";

interface HealthData {
  status: string;
  message: string;
}

export default function HealthStatus() {
  const [data, setData] = useState<HealthData | null>(null);

  useEffect(() => {
    async function fetchHealth() {
      const res = await fetch("http://localhost:8000/api/health");
      const json = await res.json();
      setData(json);
    }
    fetchHealth();
  }, []);

  if (!data) return <p>Caricamento...</p>;

  return (
    <div className="rounded border p-4 bg-green-100 text-green-800">
      {/* <p><strong>Stato:</strong> {data.status}</p> */}
      <p><strong>Messaggio:</strong> {data.message}</p>
    </div>
  );
}