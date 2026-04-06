import React from "react";
import { Link } from "wouter";
import { ShoppingBag, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 text-primary">
          <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white font-bold text-xl">
            P
          </div>
          <span className="font-bold text-2xl tracking-tight hidden sm:inline-block">picnic</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6">
          <Link href="/supermarche-en-ligne" className="text-sm font-medium hover:text-primary transition-colors">
            Supermarché
          </Link>
          <Link href="/cuisiner-avec-picnic" className="text-sm font-medium hover:text-primary transition-colors">
            Cuisiner
          </Link>
          <Link href="/a-propos" className="text-sm font-medium hover:text-primary transition-colors">
            À propos
          </Link>
          <Link href="/faq" className="text-sm font-medium hover:text-primary transition-colors">
            FAQ
          </Link>
          <Link href="/contact" className="text-sm font-medium hover:text-primary transition-colors">
            Contact
          </Link>
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <Button variant="default" className="rounded-full px-6 font-semibold shadow-sm">
            Télécharger l'app
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden p-2 text-foreground" onClick={toggleMenu}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden border-b bg-background p-4 flex flex-col gap-4 shadow-lg absolute w-full">
          <Link href="/supermarche-en-ligne" className="text-lg font-medium p-2 hover:bg-muted rounded-md" onClick={toggleMenu}>
            Supermarché
          </Link>
          <Link href="/cuisiner-avec-picnic" className="text-lg font-medium p-2 hover:bg-muted rounded-md" onClick={toggleMenu}>
            Cuisiner
          </Link>
          <Link href="/a-propos" className="text-lg font-medium p-2 hover:bg-muted rounded-md" onClick={toggleMenu}>
            À propos
          </Link>
          <Link href="/faq" className="text-lg font-medium p-2 hover:bg-muted rounded-md" onClick={toggleMenu}>
            FAQ
          </Link>
          <Link href="/contact" className="text-lg font-medium p-2 hover:bg-muted rounded-md" onClick={toggleMenu}>
            Contact
          </Link>
          <Button variant="default" className="w-full rounded-full mt-2 py-6 text-lg font-semibold">
            Télécharger l'app
          </Button>
        </div>
      )}
    </header>
  );
}
