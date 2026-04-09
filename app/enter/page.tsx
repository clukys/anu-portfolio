"use client";

import { useState, FormEvent } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Suspense } from "react";

function PasswordForm() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const searchParams = useSearchParams();

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");

    const res = await fetch("/api/auth", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password }),
    });

    if (res.ok) {
      const from = searchParams.get("from") || "/";
      router.push(from);
    } else {
      setError("Incorrect password.");
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-cream flex items-center justify-center px-6">
      <div className="w-full max-w-sm">
        <div className="mb-10 text-center">
          <span className="font-serif text-3xl text-navy">AV</span>
          <p className="text-navy/40 text-sm mt-3">This portfolio is password protected.</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter password"
            autoFocus
            className="w-full px-4 py-3 rounded-full border border-light-gray bg-white text-navy text-sm placeholder:text-navy/30 focus:outline-none focus:border-accent transition-colors"
          />
          {error && (
            <p className="text-sm text-center text-red-400">{error}</p>
          )}
          <button
            type="submit"
            disabled={loading || !password}
            className="w-full px-4 py-3 bg-navy text-cream text-sm font-medium rounded-full hover:bg-navy/80 disabled:opacity-40 transition-colors"
          >
            {loading ? "Verifying…" : "Enter"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default function EnterPage() {
  return (
    <Suspense>
      <PasswordForm />
    </Suspense>
  );
}
