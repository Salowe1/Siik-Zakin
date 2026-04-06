import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Leaf, Zap, Smile, ShieldCheck, Heart } from "lucide-react";
import { motion } from "framer-motion";

export default function APropos() {
  return (
    <div className="flex flex-col w-full bg-white min-h-screen">
      {/* Hero */}
      <section className="pt-20 pb-16 bg-slate-50 text-center px-4">
        <div className="container mx-auto max-w-4xl">
          <Badge className="bg-primary/10 text-primary hover:bg-primary/20 border-none mb-6 px-4 py-1.5 text-sm font-semibold">Notre histoire</Badge>
          <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6 tracking-tight leading-tight">
            Le supermarché en ligne fait pour vous.
          </h1>
          <p className="text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Né aux Pays-Bas en 2015, Picnic est arrivé en France avec une mission simple : rendre les courses en ligne accessibles à tous, sans frais supplémentaires, et de manière durable.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="aspect-square md:aspect-[4/3] rounded-3xl overflow-hidden bg-slate-100 relative">
              <img 
                src="/images/van.png" 
                alt="Camionnette Picnic" 
                className="w-full h-full object-cover"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = "https://placehold.co/800x600/f8fafc/94a3b8?text=Picnic+Van";
                }}
              />
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col gap-6"
          >
            <h2 className="text-3xl font-bold text-slate-900">Le modèle du laitier moderne</h2>
            <p className="text-lg text-slate-600">
              Souvenez-vous du laitier qui passait de rue en rue autrefois ? Nous avons repris cette idée géniale ! Nos camionnettes suivent un itinéraire précis dans chaque quartier, ce qui nous permet de vous livrer à l'heure, gratuitement, tout en réduisant considérablement notre impact écologique.
            </p>
            <p className="text-lg text-slate-600">
              En livrant tous les voisins en même temps, nous évitons les allers-retours inutiles. C'est plus malin, plus écologique, et ça nous permet de vous offrir la livraison !
            </p>
            
            <div className="grid grid-cols-2 gap-6 mt-4">
              <div className="flex flex-col gap-2">
                <span className="text-4xl font-black text-primary">0€</span>
                <span className="text-slate-600 font-medium">De frais de livraison, pour toujours.</span>
              </div>
              <div className="flex flex-col gap-2">
                <span className="text-4xl font-black text-primary">10k+</span>
                <span className="text-slate-600 font-medium">Produits disponibles dans l'app.</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Ce qui nous anime au quotidien</h2>
            <p className="text-lg text-slate-600">
              Plus qu'un simple service de livraison, Picnic est un concentré d'innovations au service de nos clients et de la planète.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-white border-none shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="p-8 text-center flex flex-col items-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center text-primary mb-6">
                  <Smile className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Le sourire garanti</h3>
                <p className="text-slate-600">
                  Nos "Runners" (livreurs) sont le cœur de Picnic. Toujours ponctuels, toujours polis, ils vous apportent vos courses avec le sourire jusqu'à votre porte.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border-none shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="p-8 text-center flex flex-col items-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center text-green-600 mb-6">
                  <Leaf className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Zéro gaspillage</h3>
                <p className="text-slate-600">
                  Nous ne commandons que ce que vous nous commandez. Résultat ? Quasiment aucun gaspillage alimentaire dans nos centres de préparation.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border-none shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="p-8 text-center flex flex-col items-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mb-6">
                  <Zap className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">100% Électrique</h3>
                <p className="text-slate-600">
                  Notre flotte de petites camionnettes est entièrement électrique. Pas de bruit, pas de pollution dans votre quartier !
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Trust & Quality */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-5xl text-center">
          <div className="inline-flex items-center justify-center p-3 bg-slate-100 rounded-full mb-6">
            <ShieldCheck className="w-8 h-8 text-slate-700" />
          </div>
          <h2 className="text-3xl font-bold text-slate-900 mb-6">La qualité au prix juste</h2>
          <p className="text-lg text-slate-600 mb-10 max-w-3xl mx-auto">
            Parce que nous n'avons pas de magasins coûteux à entretenir, nous pouvons vous proposer des prix défiant toute concurrence sur les grandes marques, et soutenir les producteurs locaux en leur achetant au juste prix.
          </p>
          <div className="flex justify-center gap-4">
            <Button size="lg" className="rounded-full px-8 text-lg font-bold">
              Télécharger l'app
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

// Re-export Badge since we used it inline to save space
function Badge({ children, className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 ${className}`} {...props}>
      {children}
    </div>
  );
}
