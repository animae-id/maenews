
import { motion } from "framer-motion";
import { TrendingUp, Calendar, MapPin } from "lucide-react";
import { TrendingItem, Event } from "../types";
import { formatRelativeTime } from "../utils/dateUtils";

interface SidebarProps {
  trendingItems: TrendingItem[];
  upcomingEvents: Event[];
}

export function Sidebar({ trendingItems, upcomingEvents }: SidebarProps) {
  return (
    <aside className="space-y-4 sm:space-y-6">
      {/* Trending Section */}
      <motion.div 
        className="bg-white rounded-2xl p-4 sm:p-5 md:p-6 shadow-lg"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <div className="flex items-center mb-4 sm:mb-6">
          <TrendingUp className="w-4 sm:w-5 h-4 sm:h-5 text-orange-600 mr-2" />
          <h3 className="text-lg sm:text-xl font-bold text-gray-900">🔥 Trending Sekarang</h3>
        </div>
        
        <div className="space-y-3 sm:space-y-4">
          {trendingItems.map((item, index) => (
            <motion.div
              key={item.id}
              className="flex gap-3 sm:gap-4 p-2 sm:p-3 rounded-xl hover:bg-orange-50 transition-colors cursor-pointer group"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              whileHover={{ x: 5 }}
            >
              <div className="w-12 sm:w-14 md:w-16 h-12 sm:h-14 md:h-16 bg-gradient-to-br from-orange-400 to-red-500 rounded-xl flex-shrink-0 group-hover:scale-105 transition-transform" />
              <div className="flex-1 min-w-0">
                <h4 className="font-semibold text-gray-900 text-xs sm:text-sm mb-1 group-hover:text-orange-600 transition-colors line-clamp-2">
                  {item.title}
                </h4>
                <p className="text-gray-600 text-xs mb-1 line-clamp-2">{item.description}</p>
                <p className="text-gray-400 text-xs">{formatRelativeTime(item.publishedAt)}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Upcoming Events */}
      <motion.div 
        className="bg-white rounded-2xl p-4 sm:p-5 md:p-6 shadow-lg"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <div className="flex items-center mb-4 sm:mb-6">
          <Calendar className="w-4 sm:w-5 h-4 sm:h-5 text-orange-600 mr-2" />
          <h3 className="text-lg sm:text-xl font-bold text-gray-900">📅 Event Mendatang</h3>
        </div>
        
        <div className="space-y-3 sm:space-y-4">
          {upcomingEvents.map((event, index) => (
            <motion.div
              key={event.id}
              className="flex gap-3 sm:gap-4 p-2 sm:p-3 rounded-xl hover:bg-orange-50 transition-colors cursor-pointer group"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
              whileHover={{ x: 5 }}
            >
              <div className="w-12 sm:w-14 md:w-16 h-12 sm:h-14 md:h-16 bg-gradient-to-br from-purple-400 to-pink-500 rounded-xl flex-shrink-0 group-hover:scale-105 transition-transform" />
              <div className="flex-1 min-w-0">
                <h4 className="font-semibold text-gray-900 text-xs sm:text-sm mb-1 group-hover:text-orange-600 transition-colors line-clamp-2">
                  {event.title}
                </h4>
                <div className="flex items-center text-gray-600 text-xs mb-1">
                  <MapPin className="w-3 h-3 mr-1 flex-shrink-0" />
                  <span className="truncate">{event.location}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </aside>
  );
}
