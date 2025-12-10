"use client";

import { useState, useEffect } from "react";
import {
  LucideArrowRight,
  LucideCalendar,
  LucideSparkles,
  LucidePackage,
  LucideUsers,
  LucideBarChart,
  LucideShield,
  LucideClock,
  LucideTrendingUp,
  LucideCode2,
  LucideRocket,
  LucideTarget,
  LucideCheckCircle2,
  LucideZap,
} from "lucide-react";

interface AnimatedChip {
  id: number;
  icon: React.ReactNode;
  text: string;
  color: string;
  borderColor: string;
  delay: number;
  x: string;
  y: string;
}

interface FeatureItem {
  icon: React.ReactNode;
  text: string;
}

const animatedChips: AnimatedChip[] = [
  {
    id: 1,
    icon: <LucidePackage size={20} />,
    text: "Manajemen Inventori",
    color: "bg-blue-50",
    borderColor: "border-blue-200",
    delay: 0,
    x: "lg:translate-x-12",
    y: "lg:translate-y-8",
  },
  {
    id: 2,
    icon: <LucideUsers size={20} />,
    text: "Absensi Karyawan",
    color: "bg-emerald-50",
    borderColor: "border-emerald-200",
    delay: 200,
    x: "lg:translate-x-16",
    y: "lg:translate-y-16",
  },
  {
    id: 3,
    icon: <LucideBarChart size={20} />,
    text: "Lacak Pesanan & Penjualan",
    color: "bg-purple-50",
    borderColor: "border-purple-200",
    delay: 400,
    x: "lg:translate-x-8",
    y: "lg:translate-y-24",
  },
  {
    id: 4,
    icon: <LucideClock size={20} />,
    text: "Pencatatan Keuangan",
    color: "bg-amber-50",
    borderColor: "border-amber-200",
    delay: 600,
    x: "lg:translate-x-20",
    y: "lg:translate-y-32",
  },
  {
    id: 5,
    icon: <LucideShield size={20} />,
    text: "Keamanan Data",
    color: "bg-rose-50",
    borderColor: "border-rose-200",
    delay: 800,
    x: "lg:translate-x-4",
    y: "lg:translate-y-40",
  },
  {
    id: 6,
    icon: <LucideTrendingUp size={20} />,
    text: "Wawasan Bisnis",
    color: "bg-indigo-50",
    borderColor: "border-indigo-200",
    delay: 1000,
    x: "lg:translate-x-24",
    y: "lg:translate-y-48",
  },
];

const features: FeatureItem[] = [
  {
    icon: <LucideCheckCircle2 size={16} className="text-green-500" />,
    text: "Nafaz Orbit SaaS (Segera Hadir)",
  },
  {
    icon: <LucideCode2 size={16} className="text-blue-500" />,
    text: "Layanan Pengembangan Kustom",
  },
  {
    icon: <LucideRocket size={16} className="text-purple-500" />,
    text: "Dirancang untuk UMKM F&B",
  },
  {
    icon: <LucideTarget size={16} className="text-amber-500" />,
    text: "Fokus pada Efisiensi & Pertumbuhan",
  },
];

export default function Hero() {
  const [activeChips, setActiveChips] = useState<number[]>([]);
  const [daysToLaunch, setDaysToLaunch] = useState<number>(0);

  // Animate chips sequentially
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveChips((prev) => {
        if (prev.length < animatedChips.length) {
          return [...prev, animatedChips[prev.length].id];
        } else {
          setTimeout(() => setActiveChips([]), 1000);
          return prev;
        }
      });
    }, 300);

    return () => clearInterval(timer);
  }, []);

  // Calculate days to launch
  useEffect(() => {
    const calculateDays = () => {
      const launchDate = new Date("2026-02-01");
      const today = new Date();
      const diffTime = launchDate.getTime() - today.getTime();
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      setDaysToLaunch(diffDays > 0 ? diffDays : 0);
    };

    calculateDays();
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden pt-20 bg-linear-to-br from-white via-slate-50 to-blue-50"
    >
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0 bg-[radial-linear(circle_at_30%_20%,rgba(59,130,246,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-linear(circle_at_70%_80%,rgba(139,92,246,0.1),transparent_50%)]" />
      </div>

      {/* Simple Grid Lines */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Horizontal Lines (less dense) */}
        {[...Array(15)].map((_, i) => (
          <div
            key={`h-${i}`}
            className="absolute h-[1px] bg-linear-to-r from-transparent via-slate-200 to-transparent"
            style={{
              top: `${(i + 1) * 6}%`,
              left: "0",
              right: "0",
              animation: `moveLine ${20 + i * 3}s linear infinite`,
              animationDelay: `${i * 0.3}s`,
            }}
          />
        ))}
        {/* Vertical Lines (less dense) */}
        {[...Array(15)].map((_, i) => (
          <div
            key={`v-${i}`}
            className="absolute w-[1px] bg-linear-to-b from-transparent via-slate-200 to-transparent"
            style={{
              left: `${(i + 1) * 6}%`,
              top: "0",
              bottom: "0",
              animation: `moveLineVertical ${25 + i * 2}s linear infinite`,
              animationDelay: `${i * 0.2}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 px-4 py-20 mx-auto max-w-7xl w-full">
        <div className="flex flex-col lg:flex-row items-start justify-between gap-12 lg:gap-16">
          {/* Left Column - Text Content */}
          <div className="lg:w-1/2" data-aos="fade-right">
            {/* Launch Badge */}
            <div className="inline-flex items-center gap-2 bg-linear-to-r from-blue-50 to-purple-50 border border-blue-100 text-blue-700 px-4 py-2 rounded-full mb-6">
              <LucideCalendar size={14} className="text-blue-600" />
              <span className="text-sm font-medium">
                Peluncuran: Februari 2026 • {daysToLaunch} hari lagi
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              <span className="block text-slate-900">
                Transformasikan Bisnis Anda dengan{" "}
              </span>
              <span className="block bg-linear-to-r from-black via-slate-800 to-slate-700 bg-clip-text text-transparent">
                Orbit Automation
              </span>
            </h1>

            {/* Simplified Description dalam Bahasa Indonesia */}
            <div className="mb-8">
              <p className="text-lg text-slate-600 mb-4">
                Kami adalah{" "}
                <span className="font-semibold text-black">Nafaz Dev</span>,
                membangun perangkat lunak inovatif untuk bisnis F&B. Produk kami
                yang akan datang,{" "}
                <span className="font-semibold text-black">Nafaz Orbit</span>,
                adalah platform SaaS all-in-one untuk UMKM F&B.
              </p>
              <p className="text-lg text-slate-600">
                Sampai peluncuran, kami menawarkan{" "}
                <span className="font-semibold text-black">
                  layanan pengembangan perangkat lunak kustom
                </span>{" "}
                untuk menyelesaikan tantangan unik Anda.
              </p>
            </div>

            {/* Key Features dalam Bahasa Indonesia */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 text-slate-700 bg-white p-3 rounded-lg border border-slate-200 shadow-sm hover:shadow-md transition-all duration-300"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  {feature.icon}
                  <span className="text-sm font-medium">{feature.text}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons - Simplified dalam Bahasa Indonesia */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <a
                href="#contact"
                className="group inline-flex items-center justify-center gap-3 bg-linear-to-r from-black to-slate-800 text-white px-8 py-4 rounded-xl font-semibold hover:from-slate-800 hover:to-slate-900 transition-all hover:scale-105 shadow-lg hover:shadow-xl"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <LucideSparkles
                  size={18}
                  className="opacity-80 group-hover:opacity-100"
                />
                <span>Buat Software Kustom</span>
                <LucideArrowRight
                  className="group-hover:translate-x-1 transition-transform"
                  size={20}
                />
              </a>

              <a
                href="#products"
                className="group inline-flex items-center justify-center gap-3 bg-linear-to-br from-white to-slate-200 text-black border-2 border-slate-300 px-8 py-4 rounded-xl font-semibold hover:border-slate-300 transition-all hover:bg-slate-50"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <LucideCalendar size={18} className="text-slate-600" />
                <span>Pelajari Orbit v1.0</span>
              </a>
            </div>

            {/* What We Do - Simplified dalam Bahasa Indonesia */}
            <div className="pt-8 border-t border-slate-200">
              <p className="text-sm text-slate-500 mb-4">
                Saat Ini Membangun & Menawarkan:
              </p>
              <div className="flex flex-wrap gap-4">
                {[
                  { label: "Platform SaaS", status: "Dalam Pengembangan" },
                  { label: "Software Kustom", status: "Tersedia Sekarang" },
                  { label: "Solusi F&B", status: "Spesialis" },
                  { label: "Fokus UMKM", status: "Misi Inti" },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="flex flex-col px-4 py-2 bg-white rounded-lg border border-slate-200 shadow-sm hover:shadow-md transition-all"
                    data-aos="fade-up"
                    data-aos-delay={idx * 100}
                  >
                    <span className="text-sm font-medium text-slate-800">
                      {item.label}
                    </span>
                    <span
                      className={`text-xs ${
                        item.status === "Tersedia Sekarang"
                          ? "text-green-600"
                          : "text-slate-500"
                      }`}
                    >
                      {item.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Animated Chips */}
          <div className="lg:w-1/2 relative">
            <div className="relative h-[500px] lg:h-[600px]">
              {/* Floating Animation Container */}
              <div className="absolute inset-0">
                {animatedChips.map((chip) => (
                  <div
                    key={chip.id}
                    className={`absolute left-1/2 top-1/2 ${chip.x} ${chip.y} transform -translate-x-1/2 -translate-y-1/2 opacity-0 lg:opacity-100`}
                    style={{
                      animation: activeChips.includes(chip.id)
                        ? `floatChip 6s ease-in-out infinite`
                        : "none",
                      animationDelay: `${chip.delay}ms`,
                      opacity: activeChips.includes(chip.id) ? 1 : 0,
                      transition: "all 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
                      transitionDelay: `${chip.delay}ms`,
                    }}
                  >
                    <div className="relative">
                      {/* Animated Border Effect */}
                      <div
                        className={`absolute inset-0 rounded-full border-2 ${chip.borderColor} animate-border-rotate`}
                        style={{
                          animationDelay: `${chip.delay}ms`,
                          mask: "linear-linear(#fff 0 0) padding-box, linear-linear(#fff 0 0)",
                          WebkitMaskComposite: "xor",
                          maskComposite: "exclude",
                        }}
                      />

                      {/* Chip Content */}
                      <div
                        className={`relative flex items-center gap-2 px-4 py-3 rounded-full ${chip.color} border ${chip.borderColor} backdrop-blur-sm shadow-lg hover:shadow-xl transition-all hover:scale-105 z-10`}
                      >
                        {chip.icon}
                        <span className="font-medium text-sm whitespace-nowrap">
                          {chip.text}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Center Platform Visualization */}
              <div
                className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2"
                data-aos="zoom-in"
                data-aos-delay="500"
              >
                <div className="relative">
                  {/* Outer Animated Ring */}
                  <div className="absolute inset-0 border-2 border-blue-200 rounded-full animate-pulse-slow" />

                  {/* Main Platform Circle */}
                  <div className="w-64 h-64 bg-linear-to-br from-white to-slate-100 rounded-full shadow-2xl flex items-center justify-center border border-slate-200">
                    <div className="w-48 h-48 bg-linear-to-tr from-blue-50 to-purple-50 rounded-full flex items-center justify-center">
                      {/* Orbit Logo/Icon */}
                      <div className="relative">
                        <div className="absolute inset-0 bg-blue-400/20 blur-xl rounded-full" />
                      </div>
                    </div>
                  </div>

                  {/* Platform Name */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-slate-900 mb-1">
                        Orbit v1.0
                      </div>
                      <div className="text-sm text-slate-500">
                        Segera Hadir 2026
                      </div>
                    </div>
                  </div>

                  {/* Connecting Lines */}
                  <div className="absolute inset-0">
                    {[...Array(4)].map((_, i) => (
                      <div
                        key={i}
                        className="absolute top-1/2 left-1/2 w-32 h-[1px] bg-linear-to-r from-transparent via-blue-300 to-transparent"
                        style={{
                          transform: `rotate(${i * 45}deg)`,
                          animation: `pulseLine 3s ease-in-out infinite`,
                          animationDelay: `${i * 0.5}s`,
                        }}
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Mobile View - Simplified Chips */}
              <div className="lg:hidden grid grid-cols-2 gap-3 mt-8">
                {animatedChips.slice(0, 4).map((chip) => (
                  <div
                    key={chip.id}
                    className={`flex items-center gap-2 px-3 py-2 rounded-lg border ${chip.borderColor} ${chip.color}`}
                  >
                    {chip.icon}
                    <span className="text-xs font-medium">{chip.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Stats Overlay dalam Bahasa Indonesia */}
            <div className="absolute -bottom-16 lg:bottom-0 left-0 right-0 lg:block">
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 p-6 bg-white/80 backdrop-blur-sm rounded-2xl border border-slate-200 shadow-lg">
                {[
                  {
                    value: "2026",
                    label: "Tahun Peluncuran",
                    color: "text-blue-600",
                  },
                  {
                    value: "SaaS",
                    label: "Jenis Produk",
                    color: "text-purple-600",
                  },
                  {
                    value: "UMKM",
                    label: "Target Pasar",
                    color: "text-emerald-600",
                  },
                  {
                    value: "4-in-1",
                    label: "Fitur Inti",
                    color: "text-amber-600",
                  },
                ].map((stat, index) => (
                  <div
                    key={index}
                    className="text-center"
                    data-aos="fade-up"
                    data-aos-delay={index * 100}
                  >
                    <div className={`text-xl font-bold ${stat.color} mb-1`}>
                      {stat.value}
                    </div>
                    <div className="text-xs text-slate-600">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="animate-bounce">
          <div className="w-6 h-10 border-2 border-slate-300 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-slate-400 rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </div>

      {/* Add custom animations to globals.css */}
      <style jsx global>{`
        @keyframes floatChip {
          0%,
          100% {
            transform: translate(-50%, -50%) translateY(0px);
          }
          50% {
            transform: translate(-50%, -50%) translateY(-15px);
          }
        }

        @keyframes border-rotate {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }

        @keyframes moveLine {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }

        @keyframes moveLineVertical {
          0% {
            transform: translateY(-100%);
          }
          100% {
            transform: translateY(100%);
          }
        }

        @keyframes pulseLine {
          0%,
          100% {
            opacity: 0.3;
          }
          50% {
            opacity: 0.8;
          }
        }

        .animate-pulse-slow {
          animation: pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
      `}</style>
    </section>
  );
}
