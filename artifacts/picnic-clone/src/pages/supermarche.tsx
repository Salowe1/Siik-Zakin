import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, ChevronRight, Info, Leaf, ThumbsUp } from "lucide-react";

export default function Supermarche() {
  const departments = [
    { name: "Fruits & Légumes", icon: "🍏", color: "bg-green-100 text-green-700", img: "/images/cat-fruits.png" },
    { name: "Boulangerie & Pâtisserie", icon: "🥖", color: "bg-amber-100 text-amber-700", img: "/images/cat-bakery.png" },
    { name: "Viandes & Poissons", icon: "🥩", color: "bg-red-100 text-red-700" },
    { name: "Produits Laitiers", icon: "🧀", color: "bg-blue-100 text-blue-700", img: "/images/cat-dairy.png" },
    { name: "Épicerie Salée", icon: "🍝", color: "bg-orange-100 text-orange-700" },
    { name: "Épicerie Sucrée", icon: "🍪", color: "bg-pink-100 text-pink-700" },
    { name: "Boissons", icon: "🧃", color: "bg-cyan-100 text-cyan-700" },
    { name: "Surgelés", icon: "🧊", color: "bg-sky-100 text-sky-700" },
    { name: "Bébé", icon: "🍼", color: "bg-purple-100 text-purple-700" },
    { name: "Hygiène & Beauté", icon: "🧴", color: "bg-teal-100 text-teal-700" },
    { name: "Entretien", icon: "🧽", color: "bg-slate-200 text-slate-700" },
    { name: "Animaux", icon: "🐾", color: "bg-yellow-100 text-yellow-700" },
  ];

  const featuredProducts = [
    { name: "Bananes Bio (grappe)", price: "1.99€", weight: "environ 800g", tag: "Bio", tagColor: "bg-green-500", img: "https://placehold.co/300x300/f8fafc/94a3b8?text=Bananes" },
    { name: "Lait demi-écrémé", price: "0.99€", weight: "1L", tag: "Prix bas", tagColor: "bg-primary", img: "https://placehold.co/300x300/f8fafc/94a3b8?text=Lait" },
    { name: "Baguette de tradition", price: "1.10€", weight: "250g", tag: "Local", tagColor: "bg-blue-500", img: "https://placehold.co/300x300/f8fafc/94a3b8?text=Baguette" },
    { name: "Œufs Plein Air x6", price: "2.15€", weight: "Boîte de 6", tag: "", tagColor: "", img: "https://placehold.co/300x300/f8fafc/94a3b8?text=Oeufs" }
  ];

  return (
    <div className="flex flex-col w-full bg-slate-50 min-h-screen pb-20">
      {/* Header / Search */}
      <div className="bg-white border-b sticky top-16 z-40">
        <div className="container mx-auto px-4 py-4">
          <div className="relative max-w-2xl mx-auto">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
            <Input 
              placeholder="Rechercher un produit, une marque..." 
              className="pl-12 h-12 rounded-full bg-slate-100 border-transparent focus-visible:bg-white text-base shadow-inner"
            />
          </div>
        </div>
      </div>

      {/* Welcome Banner */}
      <section className="container mx-auto px-4 py-8">
        <Card className="bg-primary border-none text-white overflow-hidden rounded-3xl relative">
          <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-[url('https://placehold.co/400x400/ff7700/ffffff?text=Pattern')] opacity-20 mix-blend-overlay hidden md:block"></div>
          <CardContent className="p-8 md:p-12 relative z-10 flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1">
              <h2 className="text-3xl font-bold mb-4">Bienvenue dans votre supermarché</h2>
              <p className="text-white/90 text-lg max-w-xl">
                Retrouvez toutes vos marques préférées au meilleur prix. Et si vous ne trouvez pas un produit, dites-le nous dans l'application !
              </p>
            </div>
            <Button variant="secondary" size="lg" className="rounded-full bg-white text-primary hover:bg-slate-100 font-bold px-8 whitespace-nowrap">
              Voir les promos
            </Button>
          </CardContent>
        </Card>
      </section>

      <div className="container mx-auto px-4 grid lg:grid-cols-12 gap-8 items-start mt-4">
        
        {/* Sidebar Departments (Desktop) */}
        <aside className="hidden lg:block lg:col-span-3 sticky top-40 bg-white rounded-2xl p-4 shadow-sm border border-slate-100">
          <h3 className="font-bold text-slate-900 mb-4 px-4 text-lg">Rayons</h3>
          <nav className="flex flex-col space-y-1">
            {departments.map((dept, i) => (
              <a 
                key={i} 
                href="#" 
                className="flex items-center justify-between px-4 py-2.5 rounded-xl hover:bg-slate-100 text-slate-700 hover:text-slate-900 transition-colors group"
              >
                <div className="flex items-center gap-3">
                  <span className="text-xl">{dept.icon}</span>
                  <span className="font-medium text-sm">{dept.name}</span>
                </div>
                <ChevronRight className="w-4 h-4 text-slate-300 group-hover:text-slate-500" />
              </a>
            ))}
          </nav>
        </aside>

        {/* Main Content */}
        <div className="lg:col-span-9 space-y-12">
          
          {/* Mobile/Tablet Departments Grid */}
          <section className="lg:hidden">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Explorer les rayons</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {departments.map((dept, i) => (
                <Card key={i} className="border-none shadow-sm hover:shadow-md transition-shadow cursor-pointer group bg-white rounded-2xl overflow-hidden">
                  <CardContent className="p-0 flex flex-col items-center justify-center h-32 relative">
                    <div className={`absolute inset-0 opacity-10 ${dept.color} group-hover:opacity-20 transition-opacity`}></div>
                    <span className="text-4xl mb-2 relative z-10">{dept.icon}</span>
                    <span className="text-sm font-bold text-slate-800 text-center px-2 relative z-10">{dept.name}</span>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Highlight Cards */}
          <div className="grid sm:grid-cols-2 gap-6">
            <Card className="bg-green-50 border-none shadow-sm rounded-3xl overflow-hidden cursor-pointer hover:shadow-md transition-all">
              <CardContent className="p-6 flex items-start gap-4">
                <div className="w-12 h-12 bg-green-200 rounded-full flex items-center justify-center text-green-700 flex-shrink-0">
                  <Leaf className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-lg mb-1">Le marché bio</h3>
                  <p className="text-slate-600 text-sm">Découvrez notre large sélection de produits certifiés bio pour toute la famille.</p>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-blue-50 border-none shadow-sm rounded-3xl overflow-hidden cursor-pointer hover:shadow-md transition-all">
              <CardContent className="p-6 flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-200 rounded-full flex items-center justify-center text-blue-700 flex-shrink-0">
                  <ThumbsUp className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-lg mb-1">Engagements locaux</h3>
                  <p className="text-slate-600 text-sm">Soutenez les producteurs de votre région avec notre assortiment de produits locaux.</p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Featured Products */}
          <section>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-slate-900">Les incontournables</h2>
              <Button variant="ghost" className="text-primary font-semibold hidden sm:flex">Voir tout</Button>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {featuredProducts.map((prod, i) => (
                <Card key={i} className="border-slate-100 shadow-sm hover:shadow-md transition-all duration-300 rounded-2xl bg-white overflow-hidden flex flex-col">
                  <div className="relative p-4 flex items-center justify-center bg-white aspect-square group">
                    {prod.tag && (
                      <span className={`absolute top-3 left-3 px-2 py-1 text-xs font-bold text-white rounded-md z-10 ${prod.tagColor}`}>
                        {prod.tag}
                      </span>
                    )}
                    <Info className="absolute top-3 right-3 w-5 h-5 text-slate-300 hover:text-slate-500 cursor-pointer z-10" />
                    <img 
                      src={prod.img} 
                      alt={prod.name} 
                      className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <CardContent className="p-4 flex-1 flex flex-col border-t border-slate-50">
                    <div className="mb-2">
                      <p className="font-bold text-slate-900 text-lg">{prod.price}</p>
                      <p className="text-xs text-slate-400 font-medium">{prod.weight}</p>
                    </div>
                    <h3 className="font-medium text-slate-700 text-sm mb-4 line-clamp-2">{prod.name}</h3>
                    
                    <Button variant="outline" className="w-full mt-auto rounded-full border-primary text-primary hover:bg-orange-50 font-bold h-10 group-hover:bg-primary group-hover:text-white transition-colors">
                      Ajouter
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Banner bottom */}
          <Card className="bg-slate-800 border-none text-white overflow-hidden rounded-3xl">
            <CardContent className="p-8 md:p-12 text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Commandez via notre application</h2>
              <p className="text-slate-300 mb-8 max-w-lg mx-auto">
                Pour ajouter ces produits à votre panier et vous faire livrer, téléchargez l'application Picnic gratuite.
              </p>
              <Button size="lg" className="rounded-full bg-primary hover:bg-primary/90 text-white font-bold px-8">
                Télécharger l'app
              </Button>
            </CardContent>
          </Card>

        </div>
      </div>
    </div>
  );
}
