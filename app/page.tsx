import { Enquire } from "@/components/Enquire";
import { Ecosystem } from "@/components/Ecosystem";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Ideas } from "@/components/Ideas";
import { Paths } from "@/components/Paths";
import { Positioning } from "@/components/Positioning";
import { Proof } from "@/components/Proof";
import { Work } from "@/components/Work";

export default function Home() {
  return (
    <>
      <Header />
      <main id="main">
        <Hero />
        <Proof />
        <Positioning />
        <Work />
        <Ecosystem />
        <Paths />
        <Ideas />
        <Enquire />
      </main>
      <Footer />
    </>
  );
}
