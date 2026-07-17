import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import {
  Search,
  Sparkles,
  ChevronRight,
  MessageCircle,
  Phone,
} from "lucide-react";

import SEO from "../../components/SEO/SEO";
import FAQItem from "./FAQItem";
import { faqs } from "../../data/faq";

export default function FAQ() {
  const [search, setSearch] = useState("");
  const [open, setOpen] = useState(0);

  const filtered = useMemo(() => {
    return faqs.filter((faq) => {
      const text = `${faq.question} ${faq.answer}`.toLowerCase();
      return text.includes(search.toLowerCase());
    });
  }, [search]);

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <>
      <SEO
        title="Frequently Asked Questions | Nisha Hair Salon & Beauty Parlour"
        description="Find answers about bridal makeup, appointments, hair spa, keratin treatment, facials, men's grooming, beauty services and more at Nisha Hair Salon & Beauty Parlour in Gumkhal, Uttarakhand."
        canonical="https://nisha-hair-salon.netlify.app/faq"
      />

      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
      </Helmet>

      <section className="relative overflow-hidden bg-gradient-to-b from-[#fffaf6] via-white to-[#f7eef4] py-24">

        {/* Background */}
        <div className="absolute -top-32 -left-24 h-96 w-96 rounded-full bg-[#b58fa2]/20 blur-[140px]" />
        <div className="absolute bottom-0 right-0 h-[420px] w-[420px] rounded-full bg-[#d5b48c]/20 blur-[170px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(124,85,105,.05),transparent_60%)]" />

        <div className="relative mx-auto max-w-7xl px-6">

          {/* Breadcrumb */}
          <nav className="mb-10 flex items-center gap-2 text-sm text-stone-500">

            <Link
              to="/"
              className="transition hover:text-[#7c5569]"
            >
              Home
            </Link>

            <ChevronRight size={15} />

            <span className="font-medium text-[#7c5569]">
              Frequently Asked Questions
            </span>

          </nav>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: .6 }}
            className="text-center"
          >

            <div className="inline-flex items-center gap-2 rounded-full border border-[#b58fa2]/30 bg-white/70 px-5 py-2 shadow-sm backdrop-blur">

              <Sparkles
                size={16}
                className="text-[#7c5569]"
              />

              <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#7c5569]">
                Help Center
              </span>

            </div>

            <h1 className="mx-auto mt-8 max-w-4xl font-serif text-5xl font-semibold leading-tight text-[#22181d] md:text-6xl">

              Frequently
              <span className="block bg-gradient-to-r from-[#7c5569] via-[#b58fa2] to-[#d5b48c] bg-clip-text text-transparent">
                Asked Questions
              </span>

            </h1>

            <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-[#6f6269]">

              Everything you need to know before visiting
              <strong className="text-[#7c5569]">
                {" "}Nisha Hair Salon & Beauty Parlour
              </strong>
              . Find answers about appointments, bridal makeup,
              hair spa, keratin treatment, beauty services,
              men's grooming, payments and more.

            </p>

          </motion.div>                    {/* Search */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="mx-auto mt-16 max-w-3xl"
          >
            <div className="relative overflow-hidden rounded-3xl border border-[#b58fa2]/20 bg-white/80 p-3 shadow-[0_20px_60px_rgba(124,85,105,.12)] backdrop-blur-xl">

              <Search
                size={22}
                className="absolute left-8 top-1/2 -translate-y-1/2 text-[#7c5569]"
              />

              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search questions..."
                className="h-16 w-full rounded-2xl bg-transparent pl-16 pr-5 text-[15px] text-[#22181d] placeholder:text-[#8b7d84] outline-none"
              />
            </div>

            <p className="mt-4 text-center text-sm text-[#8b7d84]">
              {filtered.length} question
              {filtered.length !== 1 && "s"} found
            </p>
          </motion.div>

          {/* FAQ Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mx-auto mt-16 max-w-5xl"
          >
            <div className="overflow-hidden rounded-[2rem] border border-[#b58fa2]/20 bg-white shadow-[0_25px_70px_rgba(124,85,105,.10)]">

              <div className="border-b border-[#f1e5ea] bg-gradient-to-r from-[#fffaf6] via-white to-[#fdf3f1] px-8 py-7">

                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">

                  <div>

                    <span className="inline-flex items-center rounded-full bg-[#7c5569]/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-[#7c5569]">
                      Support
                    </span>

                    <h2 className="mt-3 font-serif text-3xl text-[#22181d]">
                      Answers to Common Questions
                    </h2>

                  </div>

                  <div className="rounded-2xl bg-[#7c5569] px-5 py-3 text-center text-white">

                    <div className="text-3xl font-bold">
                      {filtered.length}
                    </div>

                    <div className="text-xs uppercase tracking-[0.18em] text-white/80">
                      FAQs
                    </div>

                  </div>

                </div>

              </div>

              <div className="divide-y divide-[#f4edf1]">

                {filtered.length > 0 ? (
                  filtered.map((faq, index) => (
                    <FAQItem
                      key={faq.question}
                      faq={faq}
                      open={open === index}
                      onToggle={() =>
                        setOpen(open === index ? -1 : index)
                      }
                    />
                  ))
                ) : (
                  <div className="px-8 py-20 text-center">

                    <Search
                      size={44}
                      className="mx-auto mb-6 text-[#b58fa2]"
                    />

                    <h3 className="text-2xl font-semibold text-[#22181d]">
                      No FAQs Found
                    </h3>

                    <p className="mx-auto mt-4 max-w-lg leading-7 text-[#6f6269]">
                      We couldn't find any questions matching
                      your search. Try using different keywords
                      or browse all frequently asked questions.
                    </p>

                    <button
                      onClick={() => setSearch("")}
                      className="mt-8 rounded-full bg-[#7c5569] px-7 py-3 text-sm font-medium text-white transition hover:bg-[#684657]"
                    >
                      View All FAQs
                    </button>

                  </div>
                )}

              </div>

            </div>
          </motion.div>                    {/* Contact CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mx-auto mt-20 max-w-5xl"
          >
            <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-r from-[#7c5569] via-[#8d667a] to-[#b58fa2] px-8 py-14 text-center text-white shadow-[0_30px_80px_rgba(124,85,105,.35)]">

              {/* Background Glow */}
              <div className="absolute -left-20 -top-20 h-60 w-60 rounded-full bg-white/10 blur-3xl" />
              <div className="absolute -bottom-20 -right-20 h-60 w-60 rounded-full bg-[#d5b48c]/20 blur-3xl" />

              <div className="relative">

                <div className="mx-auto inline-flex h-16 w-16 items-center justify-center rounded-full bg-white/15 backdrop-blur">
                  <MessageCircle size={30} />
                </div>

                <h2 className="mt-6 font-serif text-4xl font-semibold">
                  Still Have Questions?
                </h2>

                <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-white/90">
                  Our team is always happy to help. Whether you
                  have questions about bridal makeup, hair
                  treatments, appointments, pricing or beauty
                  services, we're just a call or WhatsApp
                  message away.
                </p>

                <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">

                  <a
                    href="tel:+917310944581"
                    className="inline-flex items-center gap-3 rounded-full bg-white px-7 py-4 font-semibold text-[#7c5569] shadow-lg transition hover:scale-105"
                  >
                    <Phone size={20} />
                    Call Now
                  </a>

                  <a
                    href="https://wa.me/917310944581"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 rounded-full border border-white/30 bg-white/10 px-7 py-4 font-semibold text-white backdrop-blur transition hover:bg-white/20"
                  >
                    <MessageCircle size={20} />
                    Chat on WhatsApp
                  </a>

                </div>

                <div className="mt-10 flex flex-wrap items-center justify-center gap-3 text-sm text-white/80">

                  <span className="rounded-full bg-white/10 px-4 py-2">
                    📍 Gumkhal Market
                  </span>

                  <span className="rounded-full bg-white/10 px-4 py-2">
                    🕘 Open Daily • 8:00 AM – 7:00 PM
                  </span>

                  <span className="rounded-full bg-white/10 px-4 py-2">
                    ⭐ Trusted by Local Customers
                  </span>

                </div>

              </div>

            </div>
          </motion.div>

        </div>
      </section>
    </>
  );
}  