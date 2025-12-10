// components/Contact.tsx
"use client";

import { useState } from "react";
import {
  LucideMail,
  LucidePhone,
  LucideMapPin,
  LucideSend,
  LucideCheckCircle,
  LucideClock,
  LucideMessageSquare,
  LucideCalendar,
  LucideCode2,
  LucideZap,
} from "lucide-react";

const contactInfo = [
  {
    icon: <LucideMail className="text-slate-600" size={20} />,
    title: "Email Kami",
    details: ["hello@nafaz.dev", "contact@nafaz.dev"],
    description: "Kami merespons dalam 24 jam",
    color: "bg-blue-50",
    cta: "Kirim Email",
  },
  {
    icon: <LucidePhone className="text-slate-600" size={20} />,
    title: "WhatsApp",
    details: ["+62 821-3171-0601", "Tersedia untuk chat cepat"],
    description: "Respon cepat via WhatsApp",
    color: "bg-emerald-50",
    cta: "Chat Sekarang",
  },
  {
    icon: <LucideMapPin className="text-slate-600" size={20} />,
    title: "Berdasarkan di Indonesia",
    details: ["Jakarta, Indonesia", "Tim remote"],
    description: "Bekerja dengan klien global",
    color: "bg-purple-50",
    cta: "Lihat Lokasi",
  },
];

const faqs = [
  {
    question: "Berapa lama pengembangan kustom biasanya?",
    answer:
      "Biasanya 2-8 minggu tergantung kompleksitas. Kami akan berikan timeline jelas setelah mendiskusikan proyek Anda.",
  },
  {
    question: "Apakah Anda menawarkan pengembangan software kustom?",
    answer:
      "Ya! Kami mengkhususkan diri dalam membangun solusi software kustom untuk bisnis dengan kebutuhan spesifik.",
  },
  {
    question: "Bagaimana dengan Nafaz Orbit?",
    answer:
      "Nafaz Orbit adalah produk SaaS pertama kami untuk bisnis F&B, akan diluncurkan tahun 2026. Saat ini kami dalam fase pengembangan.",
  },
  {
    question: "Berapa biaya pengembangan kustom?",
    answer:
      "Kami menawarkan harga proyek tetap atau tarif per jam. Kami akan berikan penawaran jelas setelah memahami kebutuhan Anda.",
  },
  {
    question: "Teknologi apa yang Anda gunakan?",
    answer:
      "Kami menggunakan teknologi modern tapi praktis yang mudah dipelihara dan skalabel untuk bisnis kecil hingga menengah.",
  },
  {
    question: "Bisakah kami mulai dengan proyek kecil?",
    answer:
      "Tentu! Kami sering memulai dengan proyek kecil atau MVP untuk membangun kepercayaan dan pemahaman.",
  },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    service: "custom",
    message: "",
    timeframe: "planning",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [activeFAQ, setActiveFAQ] = useState<number | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Di produksi, hubungkan ke backend Anda di sini
    console.log("Form submitted:", formData);
    setIsSubmitted(true);

    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: "",
        email: "",
        company: "",
        phone: "",
        service: "custom",
        message: "",
        timeframe: "planning",
      });
    }, 5000);
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section
      id="contact"
      className="py-20 bg-linear-to-b from-white to-slate-50"
    >
      <div className="px-4 mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16" data-aos="fade-up">
          <div className="inline-flex items-center gap-2 bg-linear-to-r from-blue-50 to-emerald-50 border border-slate-200 text-slate-700 px-4 py-2 rounded-full mb-6">
            <LucideZap size={14} className="text-blue-600" />
            <span className="text-sm font-medium">Mari Bekerja Sama</span>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="block text-slate-900">Siap Membangun </span>
            <span className="block bg-linear-to-r from-black via-slate-800 to-slate-700 bg-clip-text text-transparent">
              Sesuatu yang Hebat?
            </span>
          </h2>

          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Baik Anda membutuhkan software kustom hari ini atau ingin menjadi
            yang pertama untuk peluncuran Orbit, mari kita berdiskusi. Kami
            adalah tim kecil yang menghargai komunikasi langsung.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Column - Contact Info & FAQs */}
          <div className="space-y-8">
            {/* Contact Cards */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-1 gap-4">
              {contactInfo.map((info, index) => (
                <div
                  key={index}
                  className={`rounded-xl p-6 border-2 border-slate-200 ${info.color}`}
                  data-aos="fade-right"
                  data-aos-delay={index * 100}
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-white rounded-xl border border-slate-200 shadow-sm">
                      {info.icon}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-lg mb-2 text-slate-900">
                        {info.title}
                      </h4>
                      {info.details.map((detail, idx) => (
                        <p key={idx} className="text-slate-700">
                          {detail}
                        </p>
                      ))}
                      <p className="text-sm text-slate-500 mt-2">
                        {info.description}
                      </p>
                      <button className="mt-4 text-slate-800 font-medium hover:text-black transition-colors inline-flex items-center gap-1">
                        {info.cta} <span>→</span>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* FAQ Section dalam Bahasa Indonesia */}
            <div className="bg-white rounded-2xl p-6 border-2 border-slate-200">
              <div className="flex items-center gap-3 mb-6">
                <LucideMessageSquare className="text-blue-600" size={20} />
                <h3 className="text-xl font-bold text-slate-900">
                  Pertanyaan Umum
                </h3>
              </div>

              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <div
                    key={index}
                    className="border-b border-slate-100 pb-4 last:border-0"
                  >
                    <button
                      onClick={() =>
                        setActiveFAQ(activeFAQ === index ? null : index)
                      }
                      className="w-full text-left flex items-center justify-between group"
                    >
                      <span className="font-medium text-slate-800 group-hover:text-black transition-colors">
                        {faq.question}
                      </span>
                      <span className="text-slate-400 text-lg group-hover:text-slate-600 transition-colors">
                        {activeFAQ === index ? "−" : "+"}
                      </span>
                    </button>
                    {activeFAQ === index && (
                      <p className="mt-3 text-slate-600 bg-slate-50 p-3 rounded-lg">
                        {faq.answer}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Links dalam Bahasa Indonesia */}
            <div className="bg-linear-to-r from-slate-900 to-black text-white rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <LucideZap className="text-amber-400" size={20} />
                <h3 className="text-xl font-bold">Hubungi Cepat</h3>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <a
                  href="#contact"
                  className="flex items-center gap-2 p-3 bg-white/10 rounded-lg hover:bg-white/20 transition-colors"
                >
                  <LucideCalendar size={16} />
                  <span>Jadwalkan Panggilan</span>
                </a>
                <a
                  href="#contact"
                  className="flex items-center gap-2 p-3 bg-white/10 rounded-lg hover:bg-white/20 transition-colors"
                >
                  <LucideMessageSquare size={16} />
                  <span>Penawaran Cepat</span>
                </a>
                <a
                  href="#products"
                  className="flex items-center gap-2 p-3 bg-white/10 rounded-lg hover:bg-white/20 transition-colors"
                >
                  <LucideClock size={16} />
                  <span>Pelajari Orbit</span>
                </a>
                <a
                  href="#projects"
                  className="flex items-center gap-2 p-3 bg-white/10 rounded-lg hover:bg-white/20 transition-colors"
                >
                  <LucideCode2 size={16} />
                  <span>Lihat Proyek</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form dalam Bahasa Indonesia */}
          <div data-aos="fade-left">
            <div className="bg-white rounded-2xl p-6 md:p-8 border-2 border-slate-200 shadow-lg">
              {isSubmitted ? (
                <div className="text-center py-12">
                  <div className="inline-flex p-4 bg-emerald-50 rounded-full mb-6 border-2 border-emerald-200">
                    <LucideCheckCircle className="text-emerald-500" size={48} />
                  </div>
                  <h3 className="text-2xl font-bold mb-3 text-slate-900">
                    Pesan Terkirim!
                  </h3>
                  <p className="text-slate-600 mb-6 max-w-md mx-auto">
                    Terima kasih telah menghubungi kami! Kami adalah tim kecil,
                    jadi harapkan respons pribadi dalam 24 jam. Kami bersemangat
                    untuk mendiskusikan proyek Anda.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="text-slate-800 font-medium hover:text-black underline"
                  >
                    Kirim pesan lain
                  </button>
                </div>
              ) : (
                <>
                  <div className="mb-8">
                    <div className="flex items-center gap-3 mb-4">
                      <LucideSend className="text-blue-600" size={24} />
                      <h3 className="text-2xl font-bold text-slate-900">
                        Kirim Pesan
                      </h3>
                    </div>
                    <p className="text-slate-600">
                      Ceritakan tentang proyek atau ide Anda. Kami akan
                      merespons dengan feedback jujur dan langkah praktis
                      berikutnya.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-semibold mb-2 text-slate-800">
                          Nama Anda *
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border-2 border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                          placeholder="John Doe"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-semibold mb-2 text-slate-800">
                          Alamat Email *
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border-2 border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                          placeholder="john@perusahaan.com"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-semibold mb-2 text-slate-800">
                          Perusahaan/Proyek
                        </label>
                        <input
                          type="text"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border-2 border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                          placeholder="Nama perusahaan atau proyek Anda"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-semibold mb-2 text-slate-800">
                          WhatsApp/Telepon
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border-2 border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                          placeholder="+62 821 3171 0601"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-semibold mb-2 text-slate-800">
                          Apa yang Anda butuhkan? *
                        </label>
                        <select
                          name="service"
                          value={formData.service}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border-2 border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white"
                        >
                          <option value="custom">
                            Pengembangan Software Kustom
                          </option>
                          <option value="orbit">
                            Pelajari tentang Nafaz Orbit
                          </option>
                          <option value="consultation">
                            Konsultasi Teknis
                          </option>
                          <option value="partnership">Peluang Kemitraan</option>
                          <option value="other">Lainnya</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-semibold mb-2 text-slate-800">
                          Timeline
                        </label>
                        <select
                          name="timeframe"
                          value={formData.timeframe}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border-2 border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white"
                        >
                          <option value="planning">
                            Hanya perencanaan/eksplorasi
                          </option>
                          <option value="1month">Siap dalam 1 bulan</option>
                          <option value="3months">Siap dalam 1-3 bulan</option>
                          <option value="flexible">Timeline fleksibel</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold mb-2 text-slate-800">
                        Ceritakan tentang proyek Anda *
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={4}
                        className="w-full px-4 py-3 border-2 border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none"
                        placeholder="Masalah apa yang ingin Anda selesaikan? Apa tujuan Anda? Ada persyaratan khusus?"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full group inline-flex items-center justify-center gap-3 bg-linear-to-r from-black to-slate-800 text-white py-4 rounded-xl font-semibold hover:from-slate-800 hover:to-slate-900 transition-all shadow-lg hover:shadow-xl"
                    >
                      <LucideSend
                        size={18}
                        className="opacity-80 group-hover:opacity-100"
                      />
                      Kirim Pesan
                    </button>

                    <p className="text-sm text-slate-500 text-center">
                      Kami adalah tim kecil yang menghargai privasi Anda. Kami
                      tidak akan pernah membagikan informasi Anda.
                    </p>
                  </form>
                </>
              )}
            </div>

            {/* Small Team Note dalam Bahasa Indonesia */}
            <div className="mt-6 p-4 bg-blue-50 rounded-xl border-2 border-blue-200">
              <div className="flex items-start gap-3">
                <div className="p-2 bg-blue-100 rounded-lg">
                  <LucideCode2 size={16} className="text-blue-600" />
                </div>
                <div>
                  <p className="text-sm text-slate-700">
                    <span className="font-medium text-slate-900">Catatan:</span>{" "}
                    Sebagai tim kecil, Anda akan bekerja langsung dengan
                    developer kami. Kami lebih memilih percakapan jujur tentang
                    apa yang mungkin dalam timeline dan anggaran Anda.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
