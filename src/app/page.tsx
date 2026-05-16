import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ClientShell from "./ClientShell";

// This is a Server Component — Navbar and Hero are SSR'd for fast LCP
// Everything else is lazy-loaded client-side via ClientShell
export default function Home() {
  return (
    <main className="relative min-h-screen">
      <Navbar />
      <Hero />
      {/* ClientShell lazy-loads all below-fold and heavy components */}
      <ClientShell />
    </main>
  );
}
