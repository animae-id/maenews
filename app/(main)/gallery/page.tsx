import { Camera } from "lucide-react";

// Halaman ini adalah Server Component
export default async function GalleryPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      {/* Judul Halaman */}
      <div className="flex items-center gap-2 mb-6 pb-4 border-b">
        <Camera className="w-6 h-6 text-primary" />
        <h1 className="text-3xl font-bold text-gray-900">Gallery Animae</h1>
      </div>

      <div className="relative w-full overflow-hidden rounded-lg shadow-lg aspect-[4/5] sm:aspect-video">
        <iframe
          className="absolute top-0 left-0 w-full h-full"
          src="https://id.wikipedia.org/wiki/Anime"
          title="Wikipedia - Anime"
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </div>
    </main>
  );
}
