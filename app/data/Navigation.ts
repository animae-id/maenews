export interface NavItem {
  label: string;
  href: string;
}

// PERBAIKAN: href sekarang menunjuk ke path kategori yang dinamis
export const navItems: NavItem[] = [
  { label: "Anime", href: "/category/anime" },
  { label: "Creator", href: "/category/content-creator" },
  { label: "Event", href: "/event" },
  { label: "Gaming", href: "/category/gaming" },
  { label: "Cosplay", href: "/category/cosplay" },
  { label: "Gallery", href: "/gallery" },
];
