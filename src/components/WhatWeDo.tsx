// components/WhatWeDo.tsx
"use client";

import {
  LucideCode2,
  LucideLayers,
  LucideRocket,
  LucideUsers,
  LucideShield,
  LucideZap,
  LucideSparkles,
  LucideTarget,
  LucideBriefcase,
  LucideCog,
} from "lucide-react";

export default function WhatWeDo() {
  const services = [
    {
      icon: <LucideCode2 className="text-blue-600" size={28} />,
      title: "Pengembangan Software Kustom",
      description:
        "Kami membangun solusi software yang disesuaikan untuk menyelesaikan tantangan bisnis unik Anda.",
      highlights: ["Aplikasi Web", "Aplikasi Mobile", "Software Perusahaan"],
      color: "bg-blue-50 border-blue-100",
      delay: 0,
    },
    {
      icon: <LucideLayers className="text-purple-600" size={28} />,
      title: "Pengembangan Produk SaaS",
      description:
        "Dari konsep hingga peluncuran, kami membuat produk SaaS yang skalabel untuk industri spesifik.",
      highlights: [
        "Pengembangan MVP",
        "Arsitektur Skalabel",
        "Deploy ke Cloud",
      ],
      color: "bg-purple-50 border-purple-100",
      delay: 100,
    },
    {
      icon: <LucideRocket className="text-emerald-600" size={28} />,
      title: "Produk Kami: Nafaz Orbit",
      description:
        "Platform SaaS pertama kami untuk bisnis UMKM F&B - diluncurkan Q1 2026.",
      highlights: ["Inventori", "Penjualan", "Staf", "Keuangan"],
      color: "bg-emerald-50 border-emerald-100",
      delay: 200,
    },
  ];

  const values = [
    {
      icon: <LucideTarget className="text-amber-600" size={20} />,
      text: "Solusi Spesifik Industri",
    },
    {
      icon: <LucideShield className="text-indigo-600" size={20} />,
      text: "Teknologi Modern & Aman",
    },
    {
      icon: <LucideZap className="text-rose-600" size={20} />,
      text: "Pengembangan Cepat & Efisien",
    },
    {
      icon: <LucideUsers className="text-teal-600" size={20} />,
      text: "Desain Berfokus Pengguna",
    },
  ];

  const developmentProcess = [
    {
      step: "01",
      title: "Discovery & Perencanaan",
      description:
        "Kami memahami kebutuhan bisnis Anda dan merencanakan solusi",
      icon: <LucideBriefcase size={20} />,
    },
    {
      step: "02",
      title: "Desain & Pengembangan",
      description: "Kami membangun software Anda dengan teknologi modern",
      icon: <LucideCode2 size={20} />,
    },
    {
      step: "03",
      title: "Testing & Peluncuran",
      description: "Kami pastikan kualitas dan deploy solusi Anda",
      icon: <LucideRocket size={20} />,
    },
    {
      step: "04",
      title: "Dukungan & Maintenance",
      description: "Kami sediakan dukungan berkelanjutan untuk software Anda",
      icon: <LucideCog size={20} />,
    },
  ];

  return (
    <section id="services" className="py-20 bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-32 bg-linear-to-b from-slate-50 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-32 bg-linear-to-t from-slate-50 to-transparent" />

      {/* Animated Grid */}
      <div className="absolute inset-0 overflow-hidden opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(to right, #64748b 1px, transparent 1px),
                           linear-gradient(to bottom, #64748b 1px, transparent 1px)`,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      <div className="px-4 mx-auto max-w-7xl relative">
        {/* Header */}
        <div className="text-center mb-16" data-aos="fade-up">
          <div className="inline-flex items-center gap-2 bg-linear-to-r from-blue-50 to-purple-50 border border-blue-100 text-blue-700 px-4 py-2 rounded-full mb-4">
            <LucideSparkles size={14} className="text-blue-600" />
            <span className="text-sm font-medium">Layanan Kami</span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            <span className="block text-slate-900">Pengembangan Software </span>
            <span className="block bg-linear-to-r from-black via-slate-800 to-slate-700 bg-clip-text text-transparent">
              Yang Menggerakkan Bisnis Anda
            </span>
          </h2>

          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Nafaz Dev membangun solusi software untuk bisnis modern. Kami
            mengkhususkan diri dalam pengembangan kustom sambil membuat produk
            SaaS kami sendiri untuk menyelesaikan tantangan spesifik industri.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div
              key={index}
              className={`p-8 rounded-2xl border-2 ${service.color} hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group`}
              data-aos="fade-up"
              data-aos-delay={service.delay}
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 bg-white rounded-xl shadow-sm group-hover:shadow-md transition-shadow">
                  {service.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-slate-900">
                    {service.title}
                  </h3>
                  <p className="text-slate-600">{service.description}</p>
                </div>
              </div>

              <div className="pt-6 border-t border-slate-200">
                <div className="flex flex-wrap gap-2">
                  {service.highlights.map((highlight, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 text-xs font-medium bg-white rounded-full border border-slate-200 text-slate-700"
                    >
                      {highlight}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              {index === 2 ? (
                <div className="mt-6">
                  <a
                    href="#products"
                    className="inline-flex items-center gap-2 text-sm font-medium text-emerald-700 hover:text-emerald-800"
                  >
                    <span>Lihat Detail Orbit</span>
                    <LucideRocket
                      size={14}
                      className="group-hover:translate-x-1 transition-transform"
                    />
                  </a>
                </div>
              ) : (
                <div className="mt-6">
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 text-sm font-medium text-slate-700 hover:text-black"
                  >
                    <span>Mulai Proyek</span>
                    <LucideZap
                      size={14}
                      className="group-hover:translate-x-1 transition-transform"
                    />
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Our Development Approach dalam Bahasa Indonesia */}
        <div className="bg-linear-to-br from-slate-50 to-white border border-slate-200 rounded-2xl p-8 md:p-12 mb-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div data-aos="fade-right">
              <h3 className="text-2xl md:text-3xl font-bold mb-6 text-slate-900">
                Dari Solusi Kustom ke Produk Kami Sendiri
              </h3>
              <div className="space-y-4 text-slate-700">
                <p className="text-lg">
                  Pengalaman kami dalam membangun software kustom untuk bisnis
                  telah membawa kami menciptakan{" "}
                  <span className="font-semibold text-black">Nafaz Orbit</span>{" "}
                  - produk SaaS komersial pertama kami.
                </p>
                <p className="text-lg">
                  Kami telah menghabiskan bertahun-tahun menyelesaikan tantangan
                  bisnis melalui pengembangan kustom. Sekarang, kami mengemas
                  keahlian itu menjadi solusi siap pakai yang powerful untuk
                  industri spesifik.
                </p>
              </div>
            </div>

            <div data-aos="fade-left">
              <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm">
                <h4 className="font-bold mb-4 text-slate-900">
                  Filosofi Pengembangan Kami
                </h4>
                <div className="space-y-4">
                  {values.map((value, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-3 p-3 bg-slate-50 rounded-lg hover:bg-white hover:shadow-sm transition-all"
                    >
                      {value.icon}
                      <span className="font-medium text-slate-800">
                        {value.text}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="mt-8 pt-6 border-t border-slate-200">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-sm text-slate-500">
                        Proyek Saat Ini
                      </div>
                      <div className="font-bold text-slate-900">
                        Nafaz Orbit v1.0
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-slate-500">Status</div>
                      <div className="font-bold text-emerald-600">
                        Dalam Pengembangan
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Development Process dalam Bahasa Indonesia */}
        <div className="mb-16">
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-12 text-slate-900">
            Proses Pengembangan Kami
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {developmentProcess.map((process, index) => (
              <div
                key={index}
                className="relative p-6 bg-white border border-slate-200 rounded-xl hover:shadow-lg transition-all"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="text-4xl font-bold text-slate-200 mb-4">
                  {process.step}
                </div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-blue-50 rounded-lg">
                    {process.icon}
                  </div>
                  <h4 className="font-bold text-slate-900">{process.title}</h4>
                </div>
                <p className="text-slate-600">{process.description}</p>

                {/* Connector line for desktop */}
                {index < 3 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-slate-200" />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* CTA dalam Bahasa Indonesia */}
        <div className="text-center mt-16" data-aos="fade-up">
          <div className="inline-flex flex-col sm:flex-row gap-4">
            <a
              href="#contact"
              className="group inline-flex items-center justify-center gap-3 bg-linear-to-r from-black to-slate-800 text-white px-8 py-4 rounded-xl font-semibold hover:from-slate-800 hover:to-slate-900 transition-all hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <LucideCode2
                size={18}
                className="opacity-80 group-hover:opacity-100"
              />
              <span>Mulai Proyek Kustom</span>
              <LucideRocket
                className="group-hover:translate-x-1 transition-transform"
                size={20}
              />
            </a>

            <a
              href="#products"
              className="group inline-flex items-center justify-center gap-3 bg-white text-black border-2 border-slate-300 px-8 py-4 rounded-xl font-semibold hover:border-black transition-all hover:bg-slate-50"
            >
              <LucideSparkles size={18} className="text-slate-600" />
              <span>Pelajari Tentang Orbit</span>
            </a>
          </div>

          <p className="text-sm text-slate-500 mt-6 max-w-md mx-auto">
            Baik Anda membutuhkan software kustom hari ini atau ingin
            mengeksplorasi platform SaaS kami yang akan datang, kami siap
            membantu.
          </p>
        </div>
      </div>
    </section>
  );
}
