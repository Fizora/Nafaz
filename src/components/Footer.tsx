// components/Footer.tsx
"use client";
import {
  LucideTwitter,
  LucideLinkedin,
  LucideInstagram,
  LucideGithub,
  LucideArrowUp,
  LucideMail,
  LucidePhone,
  LucideMapPin,
  LucideZap,
  LucideCode2,
  LucideCalendar,
  LucideSparkles,
} from "lucide-react";

const footerLinks = {
  Layanan: [
    { label: "Pengembangan Software Kustom", href: "#services" },
    { label: "Pengembangan Produk SaaS", href: "#services" },
    { label: "Otomatisasi Bisnis", href: "#projects" },
    { label: "Konsultasi Teknis", href: "#contact" },
  ],
  Produk: [
    { label: "Nafaz Orbit (Segera Hadir)", href: "#products" },
    { label: "Fitur Orbit", href: "#products" },
    { label: "Timeline Peluncuran", href: "#products" },
    { label: "Akses Awal", href: "#contact" },
  ],
  Perusahaan: [
    { label: "Tentang Nafaz Dev", href: "#home" },
    { label: "Pendekatan Kami", href: "#projects" },
    { label: "Portofolio", href: "#projects" },
    { label: "Kontak", href: "#contact" },
  ],
  Sumber: [
    { label: "Proses Proyek", href: "#projects" },
    { label: "Timeline Pengembangan", href: "#services" },
    { label: "FAQ", href: "#contact" },
    { label: "Blog", href: "#" },
  ],
};

const socialLinks = [
  {
    icon: <LucideTwitter size={18} />,
    label: "Twitter",
    href: "https://twitter.com",
  },
  {
    icon: <LucideGithub size={18} />,
    label: "GitHub",
    href: "https://github.com",
  },
  {
    icon: <LucideLinkedin size={18} />,
    label: "LinkedIn",
    href: "https://linkedin.com",
  },
  {
    icon: <LucideInstagram size={18} />,
    label: "Instagram",
    href: "https://instagram.com",
  },
];

const contactInfo = [
  { icon: <LucideMail size={14} />, text: "nafazteam@gmail.com" },
  { icon: <LucidePhone size={14} />, text: "+62 821-3171-0601" },
  { icon: <LucideMapPin size={14} />, text: "Jawa Timur, Indonesia" },
  { icon: <LucideCalendar size={14} />, text: "Tim Remote" },
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-linear-to-br from-slate-900 to-black text-white">
      {/* Main Footer */}
      <div className="px-4 py-16 mx-auto max-w-7xl">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <div className="mb-8">
              <div className="flex items-center gap-2 mb-4">
                <div className="p-1 bg-white/10 rounded-lg">
                  <img src={"/logo.png"} className="size-10" />
                </div>
                <div className="text-2xl font-bold">
                  Nafaz<span className="text-amber-400">.</span>
                </div>
              </div>

              <p className="text-slate-300 max-w-md text-sm leading-relaxed">
                Kami adalah studio software kecil yang membangun solusi praktis
                untuk bisnis. Saat ini mengembangkan produk SaaS pertama kami
                (Orbit) sambil membantu klien dengan pengembangan software
                kustom.
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-3 mb-8">
              {contactInfo.map((info, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 text-slate-300"
                >
                  <div className="p-1.5 bg-white/10 rounded">{info.icon}</div>
                  <span className="text-sm">{info.text}</span>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <h4 className="font-bold mb-3 text-slate-200">
                Ikuti Perjalanan Kami
              </h4>
              <div className="flex items-center gap-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="p-2.5 bg-white/10 rounded-lg hover:bg-white/20 transition-colors"
                    aria-label={social.label}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-bold text-lg mb-4 text-slate-200">
                {category}
              </h4>
              <ul className="space-y-3">
                {links.map((link, idx) => (
                  <li key={idx}>
                    <a
                      href={link.href}
                      className="text-slate-300 hover:text-white transition-colors text-sm hover:pl-2 block duration-300"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-slate-400 text-sm">
              © {new Date().getFullYear()} Nafaz Dev. Studio software indie
              kecil.
            </div>

            <div className="flex flex-wrap items-center gap-4 text-sm">
              <a
                href="#"
                className="text-slate-400 hover:text-white transition-colors text-sm"
              >
                Privasi
              </a>
              <a
                href="#"
                className="text-slate-400 hover:text-white transition-colors text-sm"
              >
                Syarat
              </a>
              <button
                onClick={scrollToTop}
                className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors text-sm"
              >
                Kembali ke atas
                <LucideArrowUp size={14} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Fixed CTA Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <a
          href="#contact"
          className="group inline-flex items-center gap-3 bg-linear-to-r from-black to-slate-800 text-white px-5 py-3 rounded-full shadow-xl hover:shadow-2xl transition-all hover:scale-105 border border-white/20 backdrop-blur-sm"
        >
          <LucideSparkles
            size={16}
            className="text-amber-400 group-hover:scale-110 transition-transform"
          />
          <span className="font-medium">Mulai Proyek</span>
        </a>
      </div>

      {/* Bottom Banner */}
      <div className="bg-black/50 border-t border-white/10">
        <div className="px-4 py-4 mx-auto max-w-7xl text-center text-sm text-slate-400">
          Dibangun dengan kesederhanaan • Fokus pada solusi praktis • Tim kecil,
          dampak besar
        </div>
      </div>
    </footer>
  );
}
