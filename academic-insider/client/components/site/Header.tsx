import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";

const navItems = [
  { to: "/", label: "Home" },
  { to: "/tools", label: "Tools" },
  { to: "/activities", label: "Activities" },
  { to: "/competitions", label: "Competitions" },
  { to: "/scholarships", label: "Scholarships" },
  { to: "/about", label: "About" },
  { to: "/portfolio", label: "Portfolio" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <img src="https://cdn.builder.io/api/v1/image/assets%2F6bfb46ee811b41269cadc79ecd490073%2Fc49efa29c6ac4200a40aa06d57d6bea9?format=webp&width=128" alt="Academic Insider logo" className="h-8 w-8 rounded-md object-cover" />
          <span className="text-lg font-extrabold tracking-tight">Academic Insider</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `text-sm font-medium transition-colors hover:text-primary ${isActive ? "text-primary" : "text-muted-foreground"}`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
        <div className="md:hidden">
          <Button variant="outline" size="icon" aria-label="Open menu" onClick={() => setOpen((v) => !v)}>
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>
      {open && (
        <div className="md:hidden border-t">
          <div className="container py-2 grid gap-1">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `block rounded-md px-2 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground ${isActive ? "text-primary" : "text-muted-foreground"}`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
