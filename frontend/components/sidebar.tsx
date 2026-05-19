"use client";

import Link from "next/link";
import {
  LayoutDashboard,
  Truck,
  ShieldAlert,
  Users,
} from "lucide-react";

const links = [
  {
    href: "/dashboard",
    label: "Dashboard",
    icon: LayoutDashboard,
  },
  {
    href: "/tow-jobs",
    label: "Tow Jobs",
    icon: Truck,
  },
  {
    href: "/drivers",
    label: "Drivers",
    icon: Users,
  },
  {
    href: "/violations",
    label: "Violations",
    icon: ShieldAlert,
  },
];

export default function Sidebar() {
  return (
    <aside className="w-64 bg-slate-900 text-white min-h-screen p-6">
      <h1 className="text-3xl font-bold mb-10">
        TowGuardian AI
      </h1>

      <nav className="space-y-3">
        {links.map((link) => {
          const Icon = link.icon;

          return (
            <Link
              key={link.href}
              href={link.href}
              className="flex items-center gap-3 p-3 rounded-xl hover:bg-slate-800 transition"
            >
              <Icon className="w-5 h-5" />
              {link.label}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}