import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageHeader from "@/components/ui/PageHeader";
import AboutClient from "./AboutClient";
import { IMAGES } from "@/lib/constants";

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col bg-paper font-sans selection:bg-cobalt selection:text-white">
      <main className="flex-grow">
        {/* ================= HERO (SSR) ================= */}
        <PageHeader
          title="Precision. Delivered."
          subtitle="MAG GENERAL TRADING WLL (Qatar) and DMAG TRADING CO WLL (UAE) form a regional partner network supporting civil and MEP contractors across the GCC."
          badge="40+ Years"
          image={IMAGES.headers.about}
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "About Us", href: "/about" },
          ]}
        />

        {/* ================= CSR CONTENT ================= */}
        <AboutClient />
      </main>
    </div>
  );
}
