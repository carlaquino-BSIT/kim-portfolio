import { GeistMono } from "geist/font/mono";

export default function Footer() {
  return (
    <footer className="bg-white">
      <div className="container-site mx-auto max-w-7xl border-t border-black/[0.08] py-4 sm:py-4">
        <div className="flex items-center justify-center">
          <p
            className={`${GeistMono.className} text-[8px] uppercase tracking-[0.14em] text-neutral-400 sm:text-[9px]`}
          >
            © 2026 Kimberly Sinaguinan. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
