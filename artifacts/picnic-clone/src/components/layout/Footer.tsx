import React from "react";
import { Link } from "wouter";
import { Facebook, Instagram, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-muted pt-16 pb-8 text-muted-foreground mt-24">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
        <div className="flex flex-col gap-4">
          <Link href="/" className="flex items-center gap-2 text-primary">
            <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white font-bold">
              P
            </div>
            <span className="font-bold text-xl tracking-tight text-foreground">picnic</span>
          </Link>
          <p className="text-sm mt-2 max-w-xs">
            Vos courses, livrées gratuitement. L'application qui vous simplifie la vie.
          </p>
          <div className="flex items-center gap-4 mt-4">
            <a href="#" className="w-10 h-10 rounded-full bg-background flex items-center justify-center hover:bg-primary hover:text-white transition-colors shadow-sm">
              <Facebook size={18} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-background flex items-center justify-center hover:bg-primary hover:text-white transition-colors shadow-sm">
              <Instagram size={18} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-background flex items-center justify-center hover:bg-primary hover:text-white transition-colors shadow-sm">
              <Twitter size={18} />
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <h4 className="font-semibold text-foreground mb-2">Découvrir</h4>
          <Link href="/supermarche-en-ligne" className="text-sm hover:text-primary transition-colors">Supermarché en ligne</Link>
          <Link href="/cuisiner-avec-picnic" className="text-sm hover:text-primary transition-colors">Cuisiner avec Picnic</Link>
          <Link href="/a-propos" className="text-sm hover:text-primary transition-colors">À propos de nous</Link>
          <Link href="#" className="text-sm hover:text-primary transition-colors">Travailler chez Picnic</Link>
        </div>

        <div className="flex flex-col gap-3">
          <h4 className="font-semibold text-foreground mb-2">Aide & Contact</h4>
          <Link href="/faq" className="text-sm hover:text-primary transition-colors">Foire aux questions</Link>
          <Link href="/contact" className="text-sm hover:text-primary transition-colors">Nous contacter</Link>
          <a href="#" className="text-sm hover:text-primary transition-colors">Signaler un problème</a>
        </div>

        <div className="flex flex-col gap-3">
          <h4 className="font-semibold text-foreground mb-2">Légal</h4>
          <a href="#" className="text-sm hover:text-primary transition-colors">Conditions générales</a>
          <a href="#" className="text-sm hover:text-primary transition-colors">Politique de confidentialité</a>
          <a href="#" className="text-sm hover:text-primary transition-colors">Mentions légales</a>
          <a href="#" className="text-sm hover:text-primary transition-colors">Gérer les cookies</a>
        </div>
      </div>
      
      <div className="container mx-auto px-4 pt-8 border-t flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm">© {new Date().getFullYear()} Picnic. Tous droits réservés.</p>
        <p className="text-sm">Fait avec amour aux Pays-Bas et en France.</p>
      </div>
    </footer>
  );
}
