// components/Products.tsx
"use client";

import { useState } from "react";
import {
  LucideCheckCircle,
  LucideArrowRight,
  LucideZap,
  LucideSparkles,
  LucideCalendar,
  LucideCode2,
  LucideUsers,
  LucidePackage,
  LucideBarChart,
  LucideClock,
} from "lucide-react";

const upcomingProduct = {
  id: 1,
  icon: <LucideZap className="text-emerald-600" size={28} />,
  name: "Nafaz Orbit",
  version: "v1.0 (Segera Hadir)",
  tagline: "Platform Manajemen F&B Sederhana",
  description:
    "Produk SaaS pertama kami - solusi sederhana dan terjangkau yang dirancang khusus untuk bisnis F&B kecil di Indonesia. Dibangun dengan fokus pada kesederhanaan dan efisiensi.",
  features: [
    "Pelacakan inventori dasar",
    "Pencatatan penjualan sederhana",
    "Manajemen staf dasar",
    "Dasbor ringkasan keuangan",
    "Database lokal (tanpa setup cloud kompleks)",
    "Opsi pembelian sekali tersedia",
  ],
  status: "Dalam Pengembangan",
  timeline: "Target Peluncuran: Q1 2026",
  cta: "Pelajari Tentang Orbit",
  color: "bg-emerald-50 border-emerald-200",
  badge: "Produk Pertama Kami",
  targetAudience: "Bisnis UMKM F&B",
  priceNote: "Harga terjangkau untuk bisnis Indonesia",
};

const currentServices = {
  id: 2,
  icon: <LucideCode2 className="text-blue-600" size={28} />,
  name: "Pengembangan Kustom",
  version: "Tersedia Sekarang",
  tagline: "Solusi Software yang Disesuaikan",
  description:
    "Kami membangun solusi software kustom yang menyelesaikan masalah bisnis spesifik Anda. Sempurna untuk bisnis dengan kebutuhan unik yang tidak bisa ditangani oleh software siap pakai.",
  features: [
    "Aplikasi web kustom",
    "Solusi sederhana yang mobile-friendly",
    "Alat otomatisasi bisnis",
    "Integrasi database dan sistem",
    "Dukungan developer langsung",
    "Tidak ada biaya berlangganan",
  ],
  status: "Tersedia Sekarang",
  timeline: "Pengiriman 2-8 minggu",
  cta: "Mulai Proyek Kustom",
  color: "bg-blue-50 border-blue-200",
  badge: "Layanan Utama Kami",
  targetAudience: "Bisnis dengan kebutuhan spesifik",
  priceNote: "Harga proyek tetap atau tarif per jam",
};

export default function Products() {
  const [activeProduct, setActiveProduct] = useState(0);

  return (
    <section
      id="products"
      className="py-20 bg-linear-to-b from-white to-slate-50"
    >
      <div className="px-4 mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16" data-aos="fade-up">
          <div className="inline-flex items-center gap-2 bg-linear-to-r from-blue-50 to-emerald-50 border border-slate-200 text-slate-700 px-4 py-2 rounded-full mb-6">
            <LucideSparkles size={14} className="text-blue-600" />
            <span className="text-sm font-medium">Yang Kami Tawarkan</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="block text-slate-900">Membangun Software </span>
            <span className="block bg-linear-to-r from-black via-slate-800 to-blue-700 bg-clip-text text-transparent">
              Untuk Bisnis Nyata
            </span>
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Kami adalah tim kecil yang fokus membangun solusi software praktis.
            Sambil kami kerjakan produk SaaS pertama, kami membantu bisnis
            dengan pengembangan kustom.
          </p>
        </div>

        {/* Product Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Upcoming Product - Nafaz Orbit */}
          <div
            className={`relative rounded-2xl border-2 p-8 transition-all duration-300 hover:shadow-xl ${upcomingProduct.color}`}
            data-aos="fade-right"
            onMouseEnter={() => setActiveProduct(0)}
          >
            {/* Badge */}
            <div className="absolute -top-3 left-6">
              <span className="px-4 py-1.5 rounded-full text-sm font-medium bg-white text-emerald-700 border border-emerald-200 shadow-sm">
                {upcomingProduct.badge}
              </span>
            </div>

            {/* Icon & Header */}
            <div className="mb-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-4 bg-white rounded-xl border border-emerald-100 shadow-sm">
                  {upcomingProduct.icon}
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="text-2xl font-bold text-slate-900">
                      {upcomingProduct.name}
                    </h3>
                    <span className="text-sm text-slate-500">
                      ({upcomingProduct.version})
                    </span>
                  </div>
                  <p className="text-slate-600 text-sm">
                    {upcomingProduct.tagline}
                  </p>
                </div>
              </div>

              <p className="text-slate-700 mb-8 leading-relaxed">
                {upcomingProduct.description}
              </p>

              {/* Status Bar */}
              <div className="mb-8 p-4 bg-white/80 backdrop-blur-sm rounded-xl border border-slate-200">
                <div className="flex flex-wrap items-center justify-between gap-4 mb-3">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                    <span className="font-medium text-slate-900">
                      {upcomingProduct.status}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-slate-600">
                    <LucideCalendar size={14} />
                    <span>{upcomingProduct.timeline}</span>
                  </div>
                </div>
                <div className="text-sm text-slate-500">
                  {upcomingProduct.targetAudience}
                </div>
              </div>

              {/* Features dalam Bahasa Indonesia */}
              <div className="space-y-3 mb-8">
                {upcomingProduct.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <LucideCheckCircle
                      size={16}
                      className="text-emerald-500 flex-shrink-0 mt-0.5"
                    />
                    <span className="text-slate-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="pt-8 border-t border-slate-200">
              <p className="text-sm text-slate-500 mb-4 text-center">
                {upcomingProduct.priceNote}
              </p>
              <button className="w-full group inline-flex items-center justify-center gap-2 bg-white text-slate-800 border-2 border-slate-300 px-6 py-3.5 rounded-xl font-semibold hover:border-emerald-500 hover:bg-emerald-50 transition-all">
                <span>{upcomingProduct.cta}</span>
                <LucideArrowRight
                  size={16}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </button>
            </div>
          </div>

          {/* Current Service - Custom Development */}
          <div
            className={`relative rounded-2xl border-2 p-8 transition-all duration-300 hover:shadow-xl ${currentServices.color}`}
            data-aos="fade-left"
            data-aos-delay="100"
            onMouseEnter={() => setActiveProduct(1)}
          >
            {/* Badge */}
            <div className="absolute -top-3 left-6">
              <span className="px-4 py-1.5 rounded-full text-sm font-medium bg-white text-blue-700 border border-blue-200 shadow-sm">
                {currentServices.badge}
              </span>
            </div>

            {/* Icon & Header */}
            <div className="mb-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-4 bg-white rounded-xl border border-blue-100 shadow-sm">
                  {currentServices.icon}
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="text-2xl font-bold text-slate-900">
                      {currentServices.name}
                    </h3>
                    <span className="text-sm text-slate-500">
                      ({currentServices.version})
                    </span>
                  </div>
                  <p className="text-slate-600 text-sm">
                    {currentServices.tagline}
                  </p>
                </div>
              </div>

              <p className="text-slate-700 mb-8 leading-relaxed">
                {currentServices.description}
              </p>

              {/* Status Bar */}
              <div className="mb-8 p-4 bg-white/80 backdrop-blur-sm rounded-xl border border-slate-200">
                <div className="flex flex-wrap items-center justify-between gap-4 mb-3">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full" />
                    <span className="font-medium text-slate-900">
                      {currentServices.status}
                    </span>
                  </div>
                  <div className="text-sm text-slate-600">
                    {currentServices.timeline}
                  </div>
                </div>
                <div className="text-sm text-slate-500">
                  {currentServices.targetAudience}
                </div>
              </div>

              {/* Features dalam Bahasa Indonesia */}
              <div className="space-y-3 mb-8">
                {currentServices.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <LucideCheckCircle
                      size={16}
                      className="text-blue-500 flex-shrink-0 mt-0.5"
                    />
                    <span className="text-slate-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="pt-8 border-t border-slate-200">
              <p className="text-sm text-slate-500 mb-4 text-center">
                {currentServices.priceNote}
              </p>
              <a
                href="#contact"
                className="w-full group inline-flex items-center justify-center gap-2 bg-linear-to-r from-black to-slate-800 text-white px-6 py-3.5 rounded-xl font-semibold hover:from-slate-800 hover:to-slate-900 transition-all shadow-lg hover:shadow-xl"
              >
                <LucideSparkles size={16} className="opacity-80" />
                <span>{currentServices.cta}</span>
                <LucideArrowRight
                  size={16}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </a>
            </div>
          </div>
        </div>

        {/* Who We Are Section dalam Bahasa Indonesia */}
        <div
          className="bg-linear-to-br from-slate-50 to-white border border-slate-200 rounded-2xl p-8 md:p-10"
          data-aos="fade-up"
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-slate-900">
                Tim Kecil, Fokus Besar
              </h3>
              <div className="space-y-4 text-slate-700">
                <p>
                  Kami adalah tim indie kecil yang bersemangat membangun
                  software praktis untuk bisnis Indonesia. Kami tidak membuat
                  hal-hal menjadi rumit - kami fokus pada apa yang benar-benar
                  berhasil untuk skenario dunia nyata.
                </p>
                <p>
                  Pendekatan kami bersifat langsung. Anda akan bekerja langsung
                  dengan developer yang membangun solusi Anda, memastikan
                  komunikasi yang jelas dan tepat apa yang Anda butuhkan.
                </p>
              </div>

              <div className="flex flex-wrap gap-3 mt-6">
                <div className="flex items-center gap-2 px-3 py-2 bg-white rounded-lg border border-slate-200">
                  <LucideUsers size={14} className="text-slate-500" />
                  <span className="text-sm font-medium">Tim Kecil</span>
                </div>
                <div className="flex items-center gap-2 px-3 py-2 bg-white rounded-lg border border-slate-200">
                  <LucidePackage size={14} className="text-slate-500" />
                  <span className="text-sm font-medium">Solusi Praktis</span>
                </div>
                <div className="flex items-center gap-2 px-3 py-2 bg-white rounded-lg border border-slate-200">
                  <LucideClock size={14} className="text-slate-500" />
                  <span className="text-sm font-medium">Pengiriman Cepat</span>
                </div>
                <div className="flex items-center gap-2 px-3 py-2 bg-white rounded-lg border border-slate-200">
                  <LucideBarChart size={14} className="text-slate-500" />
                  <span className="text-sm font-medium">Harga Sederhana</span>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl border border-slate-200">
              <h4 className="font-bold mb-4 text-slate-900">
                Mengapa Memilih Kami?
              </h4>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-emerald-50 rounded-lg">
                    <LucideZap size={16} className="text-emerald-600" />
                  </div>
                  <div>
                    <div className="font-medium text-slate-900">
                      Tidak Perlu Infrastruktur Kompleks
                    </div>
                    <div className="text-sm text-slate-600">
                      Kami membangun solusi yang bekerja tanpa memerlukan setup
                      cloud yang mahal
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 bg-blue-50 rounded-lg">
                    <LucideCode2 size={16} className="text-blue-600" />
                  </div>
                  <div>
                    <div className="font-medium text-slate-900">
                      Akses Langsung ke Developer
                    </div>
                    <div className="text-sm text-slate-600">
                      Bekerja langsung dengan orang yang membangun software Anda
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 bg-purple-50 rounded-lg">
                    <LucideSparkles size={16} className="text-purple-600" />
                  </div>
                  <div>
                    <div className="font-medium text-slate-900">
                      Solusi Realistis
                    </div>
                    <div className="text-sm text-slate-600">
                      Kami fokus pada apa yang benar-benar berhasil untuk bisnis
                      kecil hingga menengah
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Simple CTA dalam Bahasa Indonesia */}
        <div className="text-center mt-16" data-aos="fade-up">
          <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
            Butuh software yang benar-benar bekerja untuk bisnis Anda? Mari
            bicara tentang apa yang bisa kami bangun bersama.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-3 bg-linear-to-r from-black to-slate-800 text-white px-8 py-4 rounded-xl font-semibold hover:from-slate-800 hover:to-slate-900 transition-all hover:scale-105 shadow-lg hover:shadow-xl"
          >
            <LucideSparkles size={18} className="opacity-80" />
            <span>Hubungi Kami Sekarang</span>
            <LucideArrowRight
              size={20}
              className="group-hover:translate-x-1 transition-transform"
            />
          </a>
        </div>
      </div>
    </section>
  );
}
