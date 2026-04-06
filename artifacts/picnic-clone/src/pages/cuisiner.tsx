import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Clock, ChefHat, Heart } from "lucide-react";
import { motion } from "framer-motion";

export default function Cuisiner() {
  const categories = ["Tous", "Rapide", "Végétarien", "Famille", "Petit budget", "Équilibré"];
  
  const recipes = [
    {
      title: "Pâtes Végétariennes Tomates Basilic",
      time: "15 min",
      difficulty: "Facile",
      tags: ["Végétarien", "Rapide"],
      img: "/images/recipe-pasta.png",
      likes: 124
    },
    {
      title: "Poulet Rôti du Dimanche & Légumes",
      time: "1h 15 min",
      difficulty: "Moyen",
      tags: ["Famille"],
      img: "/images/recipe-roast.png",
      likes: 89
    },
    {
      title: "Salade Fraîcheur Avocat & Concombre",
      time: "10 min",
      difficulty: "Facile",
      tags: ["Végétarien", "Équilibré", "Rapide"],
      img: "/images/recipe-salad.png",
      likes: 256
    },
    {
      title: "Hachis Parmentier Maison",
      time: "45 min",
      difficulty: "Moyen",
      tags: ["Famille", "Petit budget"],
      img: "https://placehold.co/600x400/f8fafc/94a3b8?text=Hachis+Parmentier",
      likes: 312
    },
    {
      title: "Curry de Pois Chiches",
      time: "30 min",
      difficulty: "Facile",
      tags: ["Végétarien", "Équilibré"],
      img: "https://placehold.co/600x400/f8fafc/94a3b8?text=Curry+Vegetarien",
      likes: 178
    },
    {
      title: "Quiche aux Poireaux et Lardons",
      time: "40 min",
      difficulty: "Facile",
      tags: ["Famille", "Petit budget"],
      img: "https://placehold.co/600x400/f8fafc/94a3b8?text=Quiche",
      likes: 145
    }
  ];

  return (
    <div className="flex flex-col w-full bg-slate-50 min-h-screen pb-20">
      {/* Header */}
      <section className="bg-white border-b pt-12 pb-12">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Cuisiner avec Picnic
          </h1>
          <p className="text-lg text-slate-600 mb-8">
            En manque d'inspiration ? Découvrez nos recettes simples, gourmandes et abordables. 
            Ajoutez tous les ingrédients dans votre panier en un seul clic !
          </p>
          
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((cat, i) => (
              <Badge 
                key={i} 
                variant={i === 0 ? "default" : "outline"} 
                className={`text-sm py-1.5 px-4 cursor-pointer hover:bg-primary/90 hover:text-white transition-colors ${i === 0 ? "bg-primary text-white" : "bg-white"}`}
              >
                {cat}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Recipe */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold text-slate-900 mb-6">La recette de la semaine</h2>
        <Card className="border-none shadow-md overflow-hidden rounded-3xl group cursor-pointer">
          <div className="grid md:grid-cols-2">
            <div className="h-64 md:h-auto relative overflow-hidden">
              <img 
                src="/images/recipe-pasta.png" 
                alt="Pâtes" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = "https://placehold.co/800x600/f8fafc/94a3b8?text=Recette+Semaine";
                }}
              />
            </div>
            <CardContent className="p-8 md:p-12 flex flex-col justify-center bg-white">
              <div className="flex gap-2 mb-4">
                <Badge className="bg-green-100 text-green-700 hover:bg-green-100 border-none">Végétarien</Badge>
                <Badge className="bg-orange-100 text-primary hover:bg-orange-100 border-none">Rapide</Badge>
              </div>
              <h3 className="text-3xl font-bold text-slate-900 mb-4 group-hover:text-primary transition-colors">
                Pâtes Végétariennes Tomates Basilic
              </h3>
              <p className="text-slate-600 mb-6 line-clamp-3">
                Une recette classique, fraîche et pleine de saveurs pour les soirs où on n'a pas le temps de cuisiner. Prête en moins de 15 minutes avec des ingrédients simples et délicieux.
              </p>
              
              <div className="flex items-center gap-6 mb-8 text-sm text-slate-600 font-medium">
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-slate-400" />
                  <span>15 min</span>
                </div>
                <div className="flex items-center gap-2">
                  <ChefHat className="w-5 h-5 text-slate-400" />
                  <span>Facile</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-bold text-slate-900">2.50€</span>
                  <span>/ pers</span>
                </div>
              </div>
              
              <Button size="lg" className="w-full sm:w-auto rounded-full font-semibold">
                Ajouter les ingrédients
              </Button>
            </CardContent>
          </div>
        </Card>
      </section>

      {/* Recipe Grid */}
      <section className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-slate-900">Toutes nos recettes</h2>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {recipes.map((recipe, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <Card className="border-none shadow-sm hover:shadow-xl transition-shadow duration-300 overflow-hidden h-full flex flex-col group cursor-pointer rounded-2xl bg-white">
                <div className="h-56 relative overflow-hidden">
                  <img 
                    src={recipe.img} 
                    alt={recipe.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = "https://placehold.co/600x400/f8fafc/94a3b8?text=" + recipe.title.replace(/ /g, '+');
                    }}
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full flex items-center gap-1 text-sm font-medium shadow-sm text-slate-700">
                    <Heart className="w-4 h-4 text-red-500 fill-transparent" /> {recipe.likes}
                  </div>
                </div>
                <CardContent className="p-6 flex-1 flex flex-col">
                  <div className="flex flex-wrap gap-2 mb-3">
                    {recipe.tags.map((tag, j) => (
                      <Badge key={j} variant="secondary" className="bg-slate-100 text-slate-600 hover:bg-slate-200 border-none font-medium">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-primary transition-colors leading-tight">
                    {recipe.title}
                  </h3>
                  
                  <div className="mt-auto flex items-center justify-between text-sm text-slate-500 font-medium">
                    <div className="flex items-center gap-1.5">
                      <Clock className="w-4 h-4" />
                      <span>{recipe.time}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <ChefHat className="w-4 h-4" />
                      <span>{recipe.difficulty}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Button variant="outline" size="lg" className="rounded-full px-8 font-semibold border-slate-300 text-slate-700 hover:bg-slate-100">
            Voir plus de recettes
          </Button>
        </div>
      </section>
    </div>
  );
}
