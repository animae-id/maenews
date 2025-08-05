import { getUpcomingEvents } from "@/app/lib/api";
import { Calendar } from "lucide-react";
import { EventCard } from "@/app/components/EventCard";

export default async function EventsPage() {
  const upcomingEvents = await getUpcomingEvents();

  return (
    <main className="container mx-auto px-4 py-8">
      <div className="flex items-center gap-2 mb-6 pb-4 border-b">
        <Calendar className="w-6 h-6 text-primary" />
        <h1 className="text-3xl font-bold text-gray-900">
          Semua Event Mendatang
        </h1>
      </div>

      {upcomingEvents && upcomingEvents.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {upcomingEvents.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      ) : (
        <div className="text-center py-16">
          <h2 className="text-2xl font-bold text-gray-700">Tidak Ada Event</h2>
          <p className="text-gray-500 mt-2">
            Saat ini belum ada event yang dijadwalkan. Cek kembali nanti!
          </p>
        </div>
      )}
    </main>
  );
}
