import React from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Clock, MapPin, Smartphone, Star } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative w-full pt-12 pb-24 md:pt-20 md:pb-32 overflow-hidden bg-orange-50/50">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col gap-6"
          >
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-slate-900 leading-[1.1]">
              Vos courses, livrées <span className="text-primary">gratuitement</span>.
            </h1>
            <p className="text-lg md:text-xl text-slate-600 max-w-lg leading-relaxed">
              Le supermarché en ligne le moins cher de France. Commandez depuis l'appli, et on vous livre avec le sourire dans nos petites camionnettes électriques !
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button size="lg" className="rounded-full text-base h-14 px-8 shadow-md">
                Télécharger l'application
              </Button>
              <Button size="lg" variant="outline" className="rounded-full text-base h-14 px-8 bg-white">
                Vérifier mon code postal
              </Button>
            </div>
            
            <div className="flex items-center gap-4 mt-6 text-sm text-slate-600 font-medium">
              <div className="flex items-center gap-1">
                <CheckCircle2 className="w-5 h-5 text-primary" />
                <span>Livraison 100% gratuite</span>
              </div>
              <div className="flex items-center gap-1">
                <CheckCircle2 className="w-5 h-5 text-primary" />
                <span>Prix les plus bas</span>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-video md:aspect-square relative rounded-3xl overflow-hidden shadow-2xl bg-white border-4 border-white">
              <img 
                src="/images/home-hero.png" 
                alt="Famille heureuse recevant ses courses" 
                className="w-full h-full object-cover"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = "https://placehold.co/800x600/ff6600/ffffff?text=Picnic+Delivery";
                }}
              />
            </div>
            {/* Floating badges */}
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-xl flex items-center gap-3 animate-in fade-in zoom-in duration-700 delay-300">
              <div className="bg-green-100 p-2 rounded-full">
                <Star className="w-6 h-6 text-green-600 fill-green-600" />
              </div>
              <div>
                <p className="font-bold text-slate-900">4.8/5</p>
                <p className="text-xs text-slate-500">Sur l'App Store</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Comment ça marche ?
            </h2>
            <p className="text-lg text-slate-600">
              Faire ses courses n'a jamais été aussi simple. Fini les files d'attente et les sacs lourds.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-none shadow-none bg-slate-50 relative overflow-hidden group hover:bg-orange-50 transition-colors duration-300">
              <CardContent className="pt-10 pb-8 px-8 flex flex-col items-center text-center gap-4">
                <div className="w-16 h-16 rounded-full bg-white shadow-sm flex items-center justify-center text-primary mb-2 group-hover:scale-110 transition-transform duration-300">
                  <Smartphone className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">1. Commandez via l'appli</h3>
                <p className="text-slate-600">
                  Ajoutez vos produits préférés à votre panier en quelques clics. C'est simple et rapide.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-none bg-slate-50 relative overflow-hidden group hover:bg-orange-50 transition-colors duration-300">
              <CardContent className="pt-10 pb-8 px-8 flex flex-col items-center text-center gap-4">
                <div className="w-16 h-16 rounded-full bg-white shadow-sm flex items-center justify-center text-primary mb-2 group-hover:scale-110 transition-transform duration-300">
                  <Clock className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">2. Choisissez votre créneau</h3>
                <p className="text-slate-600">
                  Sélectionnez un créneau de 20 minutes pour votre livraison. Vous savez exactement quand on arrive !
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-none bg-slate-50 relative overflow-hidden group hover:bg-orange-50 transition-colors duration-300">
              <CardContent className="pt-10 pb-8 px-8 flex flex-col items-center text-center gap-4">
                <div className="w-16 h-16 rounded-full bg-white shadow-sm flex items-center justify-center text-primary mb-2 group-hover:scale-110 transition-transform duration-300">
                  <MapPin className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">3. On vous livre chez vous</h3>
                <p className="text-slate-600">
                  Notre Runner vous apporte vos courses jusqu'à votre porte, toujours avec le sourire.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* App Only Banner */}
      <section className="py-24 bg-primary text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white to-transparent"></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 max-w-3xl mx-auto">
            100% Mobile. 100% Pratique.
          </h2>
          <p className="text-xl opacity-90 mb-10 max-w-2xl mx-auto font-medium">
            Pour vous offrir les prix les plus bas et la livraison gratuite, nous avons choisi de n'exister que sur application mobile. Pas de magasins physiques, pas de frais inutiles !
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" variant="secondary" className="rounded-full text-primary font-bold h-14 px-8 text-lg bg-white hover:bg-slate-100">
              Télécharger pour iOS
            </Button>
            <Button size="lg" variant="secondary" className="rounded-full text-primary font-bold h-14 px-8 text-lg bg-white hover:bg-slate-100">
              Télécharger pour Android
            </Button>
          </div>
        </div>
      </section>

      {/* Assortment Teaser */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Tout ce dont vous avez besoin
              </h2>
              <p className="text-lg text-slate-600 max-w-xl">
                Des fruits et légumes ultra-frais aux produits ménagers, trouvez plus de 10 000 références au meilleur prix.
              </p>
            </div>
            <Link href="/supermarche-en-ligne">
              <Button variant="ghost" className="hidden md:flex items-center gap-2 text-primary hover:text-primary hover:bg-orange-50 font-semibold">
                Voir tous les rayons <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {[
              { title: "Fruits & Légumes", img: "/images/cat-fruits.png", color: "bg-green-100" },
              { title: "Boulangerie", img: "/images/cat-bakery.png", color: "bg-amber-100" },
              { title: "Produits Laitiers", img: "/images/cat-dairy.png", color: "bg-blue-100" },
              { title: "Viandes & Poissons", img: "https://placehold.co/400x400/fee2e2/ef4444?text=Viande", color: "bg-red-100" },
            ].map((cat, i) => (
              <Link key={i} href="/supermarche-en-ligne">
                <Card className="cursor-pointer border-none shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden group">
                  <div className={`h-40 ${cat.color} relative overflow-hidden flex items-center justify-center p-6`}>
                    <img 
                      src={cat.img} 
                      alt={cat.title} 
                      className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500 mix-blend-multiply"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = `https://placehold.co/400x400/${cat.color.replace('bg-', '').replace('-100', '200')}/1e293b?text=${cat.title}`;
                      }}
                    />
                  </div>
                  <CardContent className="p-4 text-center">
                    <h3 className="font-bold text-slate-900">{cat.title}</h3>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
          
          <div className="mt-8 text-center md:hidden">
            <Link href="/supermarche-en-ligne">
              <Button variant="outline" className="w-full rounded-full border-primary text-primary font-semibold">
                Voir tous les rayons
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12">
            Ce que disent nos clients
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { name: "Sophie M.", text: "Picnic a changé ma vie ! Je ne passe plus mes samedis au supermarché. Les livreurs sont toujours super sympas et les produits sont frais." },
              { name: "Thomas L.", text: "La livraison gratuite, c'est le top. Et l'application est vraiment bien faite, très fluide. Je recommande à 100%." },
              { name: "Marie D.", text: "Je suis bluffée par la qualité des fruits et légumes. Souvent bien meilleurs qu'en grande surface classique. Merci Picnic !" }
            ].map((t, i) => (
              <Card key={i} className="bg-slate-50 border-none shadow-sm">
                <CardContent className="p-8 flex flex-col gap-4 items-center">
                  <div className="flex gap-1 text-primary">
                    {[...Array(5)].map((_, j) => <Star key={j} className="w-5 h-5 fill-primary" />)}
                  </div>
                  <p className="text-slate-600 italic">"{t.text}"</p>
                  <p className="font-bold text-slate-900 mt-2">{t.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
