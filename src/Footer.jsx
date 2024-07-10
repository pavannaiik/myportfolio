import React from "react";

export default function Footer() {
  return (
    <footer id="footer" className="mt-auto bg-[#654321] text-center py-4 text-white">
      <p>
      <span className="text-yellow-400 font-bold bg-white/20 px-1 rounded">
        &copy; {new Date().getFullYear()} By
          PavanKalyan Nayak Guguloth</span>
      </p>
    </footer>
  );
}
