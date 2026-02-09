import PageHeader from "@/components/ui/PageHeader";

import { MapPin, Phone, Mail, Clock, Globe } from "lucide-react";

import { IMAGES } from "@/lib/constants";
import ContactForm from "./ContactForm";

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen bg-paper font-sans">
      <main className="flex-grow">
        <PageHeader
          title="Get in Touch"
          subtitle="Engineering consultation for drainage and steel projects. Reach out to our Doha or Dubai hubs."
          badge="Contact Us"
          image={IMAGES.headers.contact}
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Contact", href: "/contact" },
          ]}
          dark
        />

        <section className="py-24 relative z-20 -mt-20">
          <div className="container mx-auto px-6">
            <div className="bg-white rounded-[3rem] shadow-2xl overflow-hidden border border-tech-200">
              <div className="grid grid-cols-1 lg:grid-cols-5">
                {/* LEFT SIDE — unchanged */}
                <div className="lg:col-span-2 bg-ink text-white p-10 md:p-14 relative overflow-hidden">
                  <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" />
                  <div className="relative z-10 space-y-12">
                    <div>
                      <h3 className="font-display text-3xl font-bold mb-2">Global Hubs</h3>
                      <p className="text-stone-400 text-sm">Visit our headquarters or manufacturing facilities.</p>
                    </div>

                    {/* Qatar Card */}
                    <div className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-colors">
                      <div className="flex items-center gap-3 mb-6">
                        <img src={IMAGES.flags.qatar} className="w-6 rounded shadow-sm" alt="Qatar" />
                        <span className="font-bold text-lg">MAG GENERAL TRADING WLL</span>
                      </div>
                      <div className="space-y-4 text-sm text-stone-300">
                        <div className="flex gap-4">
                          <MapPin size={16} className="text-cobalt shrink-0 mt-1" />
                          <span>
                            Aziziya Commercial Street Zone 55, Street 185 Building 88
                            <br />
                            Doha, Qatar
                          </span>
                        </div>
                        <div className="flex gap-4">
                          <Phone size={16} className="text-cobalt shrink-0" />
                          <span className="font-mono text-white">+974 3158 6804</span>
                        </div>
                        <div className="flex gap-4">
                          <Mail size={16} className="text-cobalt shrink-0" />
                          <span>m.adnanghani@maggulf.com</span>
                        </div>
                      </div>
                    </div>

                    {/* UAE Card */}
                    <div className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-colors">
                      <div className="flex items-center gap-3 mb-6">
                        <img src={IMAGES.flags.uae} className="w-6 rounded shadow-sm" alt="UAE" />
                        <span className="font-bold text-lg">DMAG TRADING CO WLL</span>
                      </div>
                      <div className="space-y-4 text-sm text-stone-300">
                        <div className="flex gap-4">
                          <MapPin size={16} className="text-cobalt shrink-0 mt-1" />
                          <span>
                            Office 43–44, Al Fahidi Bur Dubai
                            <br />
                            Dubai, UAE
                          </span>
                        </div>
                        <div className="flex gap-4">
                          <Phone size={16} className="text-cobalt shrink-0" />
                          <span className="font-mono text-white">+971 50 149 3369</span>
                        </div>
                        <div className="flex gap-4">
                          <Mail size={16} className="text-cobalt shrink-0" />
                          <span>sales1@maggulf.com</span>
                        </div>
                      </div>
                    </div>

                    {/* Operating Hours */}
                    <div className="pt-8 border-t border-white/10 flex items-center gap-4 text-sm text-stone-400">
                      <Clock size={16} className="text-cobalt" />
                      <span>Sun - Thu: 08:00 - 18:00</span>
                    </div>
                  </div>
                </div>
                {/* RIGHT SIDE — CSR injected */}
                <div className="lg:col-span-3 p-10 md:p-14 bg-white relative">
                  <ContactForm />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* <div className="h-[400px] relative">
          <img src={IMAGES.misc.map_bg} className="w-full h-full object-cover" />
          <div className="absolute inset-0 flex items-center justify-center">
            <Button className="bg-white text-ink rounded-full h-14 px-8 shadow-xl">
              <Globe className="mr-2 w-4 h-4" />
              View on Google Maps
            </Button>
          </div>
        </div> */}
      </main>
    </div>
  );
}
