"use client";

import { useState } from "react";
import { Button, Input } from "@/components/ui/Primitives";
import { MessageSquare } from "lucide-react";

const initialState = {
  name: "",
  email: "",
  phone: "",
  service: "Drainage",
  message: "",
};

const services = ["Drainage", "Steel", "Other"];

export default function ContactForm() {
  const [form, setForm] = useState(initialState);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const recipient = "sales1@maggulf.com";
    const subject = encodeURIComponent(`New Contact Enquiry - ${form.service}`);

    const body = encodeURIComponent(`
Full Name: ${form.name}
Email: ${form.email}
Phone: ${form.phone}
Service: ${form.service}

Message:
${form.message}
    `);

    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${recipient}&su=${subject}&body=${body}`;
    window.open(gmailUrl, "_blank");

    setLoading(false);
    setForm(initialState);
  };

  return (
    <div className="relative z-10 space-y-16">
      {/* ================= FORM ================= */}
      <div className="max-w-xl">
        <div className="flex items-center gap-3 mb-8">
          <div className="h-10 w-10 bg-cobalt/10 rounded-xl flex items-center justify-center text-cobalt">
            <MessageSquare size={20} />
          </div>
          <h3 className="text-2xl font-bold text-ink">Send an Enquiry</h3>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* NAME */}
          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-wider text-ink">
              Full Name
            </label>
            <Input
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              placeholder="John Doe"
              className="h-14 rounded-xl border-tech-300 focus:border-cobalt"
            />
          </div>

          {/* EMAIL */}
          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-wider text-ink">
              Email
            </label>
            <Input
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              required
              placeholder="john@company.com"
              className="h-14 rounded-xl border-tech-300 focus:border-cobalt"
            />
          </div>

          {/* PHONE */}
          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-wider text-ink">
              Phone
            </label>
            <Input
              name="phone"
              value={form.phone}
              onChange={handleChange}
              placeholder="+974 / +971"
              className="h-14 rounded-xl border-tech-300 focus:border-cobalt"
            />
          </div>

          {/* SERVICE */}
          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-wider text-ink">
              Service
            </label>
            <select
              name="service"
              value={form.service}
              onChange={handleChange}
              className="w-full h-14 rounded-xl border border-tech-300 px-4 text-sm font-medium focus:border-cobalt focus:outline-none"
            >
              {services.map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </select>
          </div>

          {/* MESSAGE */}
          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-wider text-ink">
              Project Details
            </label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              rows={5}
              placeholder="Briefly describe your project requirements..."
              className="w-full rounded-xl border border-tech-300 p-4 text-sm focus:ring-2 focus:ring-cobalt resize-none"
            />
          </div>

          {/* SUBMIT */}
          <Button
            type="submit"
            disabled={loading}
            className="w-full h-16 rounded-xl bg-ink text-white hover:bg-cobalt shadow-xl transition-all"
          >
            {loading ? "Sending..." : "Send Message"}
          </Button>
        </form>
      </div>



    </div>
  );
}
