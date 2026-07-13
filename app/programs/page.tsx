import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ProgramsHero from "@/components/sections/programs/ProgramsHero";
import ProgramsExplorer from "@/components/sections/programs/ProgramsExplorer";
import ProgramsTrustBar from "@/components/sections/programs/ProgramsTrustBar";

export const metadata: Metadata = {
  title: "Programs | NextPeer",
  description:
    "Explore career-focused programs designed to help college students build skills, gain practical knowledge and get placed.",
};

export default function ProgramsPage() {
  return (
    <>
      <Header />
      <main>
        <ProgramsHero />
        <ProgramsExplorer />
        <ProgramsTrustBar />
      </main>
      <Footer />
    </>
  );
}
