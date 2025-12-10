// components/Navbar.tsx
"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import {
  LucideMenu,
  LucideX,
  LucideSparkles,
  LucideHome,
  LucidePackage,
  LucidePhone,
  LucideArrowRight,
} from "lucide-react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Detect active section
      const sections = ["home", "products", "contact"];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: "smooth",
      });
    }
  };

  const menuItems = [
    { id: "home", label: "Beranda", icon: <LucideHome size={18} /> },
    { id: "products", label: "Produk", icon: <LucidePackage size={18} /> },
    { id: "contact", label: "Kontak", icon: <LucidePhone size={18} /> },
  ];

  return (
    <>
      {/* Main Navbar */}
      <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
        <div
          className={`absolute inset-0 transition-all duration-300 ${
            scrolled || isMenuOpen
              ? "bg-white/40 backdrop-blur-lg border-b border-slate-200/50" // Diubah: shadow dihapus, background transparan dengan blur
              : "bg-transparent"
          }`}
        />

        <div className="relative z-50 px-4 py-3 mx-auto max-w-7xl">
          <div className="flex items-center justify-between">
            {/* Logo dengan Image dari public */}
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center w-12 h-12">
                <div className="relative w-10 h-10">
                  <Image
                    src="/logo.png"
                    alt="Nafaz Dev Logo"
                    width={40}
                    height={40}
                    className="rounded-xl object-cover"
                    priority
                  />
                </div>
              </div>
              <div>
                <span className="text-xl font-bold bg-linear-to-r from-black to-slate-700 bg-clip-text text-transparent">
                  Nafaz.
                </span>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-1">
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`px-5 py-2.5 rounded-lg font-medium transition-all duration-200 relative group flex items-center gap-2 ${
                    activeSection === item.id
                      ? "text-black bg-white/60 backdrop-blur-sm" // Diubah: background lebih solid untuk active state
                      : "text-slate-700 hover:text-black hover:bg-white/40 hover:backdrop-blur-sm"
                  }`}
                >
                  {item.icon}
                  {item.label}
                  <span
                    className={`absolute bottom-1 left-1/2 transform -translate-x-1/2 h-0.5 bg-linear-to-r from-blue-500 to-purple-500 rounded-full transition-all duration-300 ${
                      activeSection === item.id ? "w-8" : "w-0 group-hover:w-8"
                    }`}
                  />
                </button>
              ))}

              <button
                onClick={() => scrollToSection("contact")}
                className="ml-4 px-6 py-2.5 bg-linear-to-r from-black to-slate-800 text-white rounded-xl font-semibold hover:from-slate-800 hover:to-slate-900 flex items-center gap-2 transition-all hover:scale-105 shadow-md"
              >
                <LucideSparkles size={18} />
                Mulai Proyek
              </button>
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`md:hidden w-10 h-10 flex items-center justify-center rounded-lg backdrop-blur-sm border transition-all ${
                scrolled
                  ? "bg-white/40 border-slate-200/50" // Diubah: background transparan
                  : "bg-white/30 border-slate-200/50"
              }`}
            >
              {isMenuOpen ? (
                <LucideX size={20} className="text-slate-700" />
              ) : (
                <LucideMenu size={20} className="text-slate-700" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Side Panel Overlay */}
      <div
        className={`fixed inset-0 z-50 transition-all duration-500 md:hidden ${
          isMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Backdrop */}
        <div
          className={`absolute inset-0 bg-black transition-opacity duration-500 ${
            isMenuOpen ? "opacity-30" : "opacity-0" // Diubah: opacity lebih rendah untuk backdrop
          }`}
          onClick={() => setIsMenuOpen(false)}
        />

        {/* Side Panel */}
        <div
          className={`absolute left-0 top-0 h-full w-full max-w-md bg-white/90 backdrop-blur-xl shadow-2xl transition-transform duration-500 ease-in-out ${
            isMenuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="h-full flex flex-col">
            {/* Panel Header dengan Logo */}
            <div className="p-6 border-b border-slate-200/50">
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-3">
                  <div className="flex items-center justify-center w-12 h-12">
                    <div className="relative w-10 h-10">
                      <Image
                        src="/logo.png"
                        alt="Nafaz Dev Logo"
                        width={40}
                        height={40}
                        className="rounded-xl object-cover"
                      />
                    </div>
                  </div>
                  <div>
                    <span className="text-xl font-bold text-slate-900">
                      Nafaz.
                    </span>
                    <div className="h-1 w-8 bg-linear-to-r from-blue-500 to-purple-500 rounded-full mt-1" />
                  </div>
                </div>
                <button
                  onClick={() => setIsMenuOpen(false)}
                  className="w-10 h-10 flex items-center justify-center rounded-lg bg-white/50 backdrop-blur-sm hover:bg-white/70 transition-colors border border-slate-200/50"
                >
                  <LucideX size={20} className="text-slate-700" />
                </button>
              </div>

              <div className="text-slate-600 text-sm">
                Studio software yang membangun solusi praktis untuk bisnis
                Indonesia
              </div>
            </div>

            {/* Navigation Menu */}
            <div className="flex-1 p-6 overflow-y-auto">
              <div className="space-y-2">
                {menuItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`w-full flex items-center gap-4 px-4 py-4 rounded-xl transition-all duration-300 group ${
                      activeSection === item.id
                        ? "bg-blue-50/70 backdrop-blur-sm text-blue-700 border border-blue-100/50"
                        : "text-slate-700 hover:bg-white/50 hover:text-black backdrop-blur-sm"
                    }`}
                  >
                    <div
                      className={`p-2 rounded-lg ${
                        activeSection === item.id
                          ? "bg-blue-100/70 backdrop-blur-sm text-blue-600"
                          : "bg-white/50 backdrop-blur-sm text-slate-600 group-hover:bg-white/70"
                      }`}
                    >
                      {item.icon}
                    </div>
                    <div className="flex-1 text-left">
                      <div className="font-semibold text-lg">{item.label}</div>
                      {item.id === "home" && (
                        <div className="text-sm opacity-70">Halaman utama</div>
                      )}
                      {item.id === "products" && (
                        <div className="text-sm opacity-70">
                          Lihat produk kami
                        </div>
                      )}
                      {item.id === "contact" && (
                        <div className="text-sm opacity-70">Hubungi kami</div>
                      )}
                    </div>
                    <LucideArrowRight
                      size={16}
                      className={`transition-transform ${
                        activeSection === item.id
                          ? "text-blue-500"
                          : "text-slate-400 group-hover:text-slate-600"
                      }`}
                    />
                  </button>
                ))}
              </div>

              {/* CTA Section */}
              <div className="mt-12 p-6 bg-linear-to-br from-blue-50/70 to-purple-50/70 rounded-2xl border border-blue-100/50 backdrop-blur-sm">
                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  Siap Membangun Bersama?
                </h3>
                <p className="text-slate-600 text-sm mb-6">
                  Diskusikan proyek Anda dengan tim kami dan dapatkan solusi
                  yang tepat.
                </p>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="w-full px-6 py-3 bg-linear-to-r from-black to-slate-800 text-white rounded-xl font-semibold hover:from-slate-800 hover:to-slate-900 flex items-center justify-center gap-2 transition-all shadow-lg"
                >
                  <LucideSparkles size={18} />
                  Mulai Proyek Sekarang
                </button>
              </div>

              {/* Quick Links */}
              <div className="mt-6 grid grid-cols-2 gap-3">
                <a
                  href="mailto:hello@nafaz.dev"
                  className="p-3 bg-white/50 backdrop-blur-sm rounded-lg border border-slate-200/50 hover:bg-white/70 transition-colors text-center"
                >
                  <div className="text-sm font-medium text-slate-700">
                    Email
                  </div>
                  <div className="text-xs text-slate-500">hello@nafaz.dev</div>
                </a>
                <a
                  href="https://wa.me/6282131710601"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-emerald-50/70 backdrop-blur-sm rounded-lg border border-emerald-200/50 hover:bg-emerald-100/70 transition-colors text-center"
                >
                  <div className="text-sm font-medium text-emerald-700">
                    WhatsApp
                  </div>
                  <div className="text-xs text-emerald-600">
                    +62 821 3171 0601
                  </div>
                </a>
              </div>
            </div>

            {/* Footer */}
            <div className="p-6 border-t border-slate-200/50">
              <div className="text-center text-sm text-slate-500">
                © {new Date().getFullYear()} Nafaz.
                <div className="text-xs mt-1">Tim kecil, dampak besar</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Spacer untuk menghindari konten tertutup navbar */}
      <div className="h-20" />
    </>
  );
}
