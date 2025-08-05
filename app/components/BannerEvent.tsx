"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { Calendar, MapPin, Ticket } from "lucide-react";
import { Event } from "@/app/types"; // Impor tipe Event
import Link from "next/link";

// Tipe data untuk sisa waktu
interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

// Komponen untuk menampilkan satu unit waktu
const CountdownUnit = ({ value, label }: { value: number; label: string }) => (
  <div className="flex flex-col items-center">
    <span className="text-3xl md:text-4xl font-bold text-white drop-shadow-md">
      {String(value).padStart(2, "0")}
    </span>
    <span className="text-xs uppercase tracking-wider text-gray-200">
      {label}
    </span>
  </div>
);

// PERBAIKAN: Komponen sekarang menerima 'event' sebagai prop
interface EventBannerProps {
  event?: Event; // Event bersifat opsional
}

export function EventBanner({ event }: EventBannerProps) {
  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(null);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // Fungsi untuk menghitung sisa waktu, sekarang menggunakan data dari prop
    const calculateTimeLeft = (): TimeLeft | null => {
      if (!event?.date) return null;

      const eventDate = new Date(event.date);
      const difference = +eventDate - +new Date();

      if (difference > 0) {
        return {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        };
      }
      return null;
    };

    setIsClient(true);
    setTimeLeft(calculateTimeLeft()); // Hitung sekali saat mount

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [event]); // Jalankan ulang efek jika data event berubah

  // Jika tidak ada event yang akan datang, jangan render banner
  if (!event) {
    return null;
  }

  return (
    <motion.section
      className="relative rounded-2xl p-1 sm:p-2 overflow-hidden bg-gradient-to-br from-orange-500 to-red-600"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* ... (Elemen dekoratif tetap sama) ... */}
      <div className="absolute inset-0 overflow-hidden rounded-xl">
        <motion.div
          className="absolute -top-1/4 -left-1/4 w-1/2 h-1/2 bg-white/5 rounded-full"
          animate={{ y: [0, 20, 0], x: [0, -10, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -bottom-1/4 -right-1/4 w-1/2 h-1/2 bg-white/5 rounded-full"
          animate={{ y: [0, -20, 0], x: [0, 10, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut", delay: 5 }}
        />
      </div>

      {/* Konten Banner */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center text-white min-h-[250px] p-6">
        <div className="flex items-center gap-2">
          <Calendar className="w-5 h-5" />
          {/* Menggunakan data dinamis */}
          <h2 className="text-xl font-bold">{event.title}</h2>
        </div>

        <div className="flex items-center gap-1.5 text-gray-200 text-sm mt-1 mb-2">
          <MapPin className="w-4 h-4" />
          {/* Menggunakan data dinamis */}
          <span>{event.location}</span>
        </div>

        {isClient && timeLeft ? (
          <div className="flex items-center gap-4 sm:gap-8 my-4">
            <CountdownUnit value={timeLeft.days} label="Hari" />
            <CountdownUnit value={timeLeft.hours} label="Jam" />
            <CountdownUnit value={timeLeft.minutes} label="Menit" />
            <CountdownUnit value={timeLeft.seconds} label="Detik" />
          </div>
        ) : (
          <p className="text-2xl font-bold my-4">
            {isClient ? "Acara Telah Berlangsung!" : "Menghitung waktu..."}
          </p>
        )}

        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Link href={`/event/${event.id}`}>
            <Button
              size="lg"
              className="cursor-pointer bg-yellow-400 hover:bg-yellow-500 rounded-full font-bold text-yellow-900 px-8 py-6 text-base"
            >
              <Ticket className="w-5 h-5 mr-2" />
              Lihat Detail Event
            </Button>
          </Link>
        </motion.div>
      </div>
    </motion.section>
  );
}
