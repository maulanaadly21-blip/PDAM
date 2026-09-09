"use client";

import { useState } from "react";
import Link from "next/link";


interface CustomerSidebarProps{
  children: React.ReactNode;
}

const CustomerSidebar = ({children}: CustomerSidebarProps)=>{
  const [open, setOpen] = useState(false);

  return (
    <div className="md:flex block">
      <div className="md:flex block">
      <div className="md:hidden flex items-center justify-between bg-gray-800 text-white p-4">
        <span className="font-bold">Customer Panel</span>
        <button onClick={() => setOpen(!open)}>
          ☰
        </button>
      </div>
      </div>

      
      {open && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={() => setOpen(false)}
        />
      )}

      <aside
        className={`
          md:relative fixed min-h-screen z-50 top-0 left-0 h-full w-64 bg-gray-900 text-white
          fixed z-50 top-0 left-0 h-full w-64 bg-gray-900 text-white
          transform transition-transform duration-300
          ${open ? "translate-x-0" : "-translate-x-full"}
          md:translate-x-0
        `}
      >
        <div className="p-4 text-lg font-bold border-b border-gray-700">
          customer Panel
        </div>

        <nav className="p-4 space-y-2">
          <Link href="/customer/dashboard" className="block p-2 rounded hover:bg-gray-700">
            Dashboard
          </Link>
          <Link href="/customer/profile" className="block p-2 rounded hover:bg-gray-700">
            Profile
          </Link>
          <Link href="/customer/payments" className="block p-2 rounded hover:bg-gray-700">
            Payments
          </Link>
          <Link href="/customer/logout" className="block p-2 rounded hover:bg-gray-700">
            Logout
          </Link>
        </nav>
      </aside>
      <div className="w-full">
  {children}
</div>
    </div>
  );
}
export default CustomerSidebar