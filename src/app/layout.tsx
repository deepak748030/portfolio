// src/app/layout.tsx
import React from 'react';

// No need for next/font/google anymore
const inter = "Inter, sans-serif";

export const metadata = {
  title: "Your Portfolio",
  description: "A description of your portfolio"
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ fontFamily: inter }}>
      {children}
    </div>
  );
}
