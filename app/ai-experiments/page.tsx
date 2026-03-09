import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import AIExperiments from "@/components/AIExperiments";

export const metadata = {
  title: "AI Experiments — Anuradha Vellineni",
  description:
    "Personal AI project experiments — Bolt Hackathon builds, course exercises, and weekend explorations.",
};

export default function AIExperimentsPage() {
  return (
    <>
      <Navigation />
      <main>
        <AIExperiments />
      </main>
      <Footer />
    </>
  );
}
