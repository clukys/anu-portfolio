"use client";

export default function Footer() {
  return (
    <footer className="bg-navy border-t border-white/5 py-8">
      <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-6">
          <span className="font-serif text-cream/80 text-lg">AV</span>
          <p className="text-cream/30 text-sm">
            © {new Date().getFullYear()} Anuradha Vellineni
          </p>
        </div>
        <p className="text-cream/30 text-sm">
          Designed with care in Cupertino, CA
        </p>
      </div>
    </footer>
  );
}
