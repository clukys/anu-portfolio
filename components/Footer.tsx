"use client";

export default function Footer() {
  return (
    <footer className="bg-navy border-t border-white/5 py-8">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-cream/30 text-sm">
          © {new Date().getFullYear()} Anuradha Vellineni
        </p>
        <p className="text-cream/30 text-sm">
          Designed with care in Cupertino, CA
        </p>
      </div>
    </footer>
  );
}
