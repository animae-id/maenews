import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Fungsi helper untuk mengubah string menjadi format URL (slug)
export const slugify = (text: string) => {
  if (!text) return '';
  return text
    .toString()
    .toLowerCase()
    .replace(/\s+/g, '-')          
    .replace(/[^\w\-]+/g, '')     
    .replace(/\-\-+/g, '-')        
    .replace(/^-+/, '')            
    .replace(/-+$/, '');           
};
