import React from "react";

interface SectionTitleProps {
  children: React.ReactNode;
}

export const SectionTitle = ({ children }: SectionTitleProps) => {
  return (
    <div className="flex items-center gap-2 border-b-2 border-red-600 pb-2 mb-6">
      <span className="w-2 h-2 bg-red-600 block"></span>
      <h2 className="font-bold text-lg text-gray-800">{children}</h2>
    </div>
  );
};
