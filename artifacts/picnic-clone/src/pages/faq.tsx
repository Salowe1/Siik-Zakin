import React from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, MessageCircle } from "lucide-react";
import { Link } from "wouter";

export default function Faq() {
  const faqCategories = [
    {
      title: "Livraison",
      questions: [
        { q: "Quels sont les frais de livraison ?", a: "La livraison chez Picnic est toujours 100% gratuite. Il n'y a pas de frais cachés, d'abonnement ou de supplément pour les livraisons en soirée." },
        { q: "Quel est le montant minimum de commande ?", a: "Le montant minimum de commande est de 35€. Ce montant nous permet de couvrir les frais logistiques tout en maintenant la livraison gratuite pour tous." },
        { q: "Comment fonctionne le système de créneaux ?", a: "Contrairement aux livreurs classiques, nous fonctionnons comme une ligne de bus. Nos camionnettes ont un itinéraire fixe dans votre quartier. Vous choisissez simplement le jour où nous passons dans votre rue, et nous vous donnons un créneau précis de 20 minutes." },
        { q: "Est-ce que Picnic livre dans ma ville ?", a: "Nous ouvrons régulièrement de nouvelles zones ! Pour vérifier si nous livrons chez vous, téléchargez l'application et entrez votre code postal. Si nous n'y sommes pas encore, vous serez inscrit sur liste d'attente et prévenu de notre arrivée." }
      ]
    },
    {
      title: "Commande & Produits",
      questions: [
        { q: "Jusqu'à quand puis-je modifier ma commande ?", a: "Vous pouvez ajouter ou retirer des produits jusqu'à 22h la veille de votre livraison. Très pratique si vous avez oublié un ingrédient de dernière minute !" },
        { q: "Que faire si un produit est manquant ou abîmé ?", a: "L'erreur est humaine ! Si cela arrive, signalez-le directement dans l'application (onglet 'Mes commandes'). Nous vous rembourserons le produit concerné en quelques minutes sur votre compte bancaire." },
        { q: "Comment garantissez-vous la fraîcheur des produits ?", a: "Vos produits frais et surgelés sont transportés dans des bacs spéciaux réfrigérés, avec une chaîne du froid maintenue en continu depuis nos centres de préparation jusqu'à votre porte." },
        { q: "Proposez-vous des produits locaux ou bio ?", a: "Oui, absolument ! Nous avons un large rayon Bio et travaillons en direct avec de nombreux producteurs locaux et régionaux pour vous proposer des produits ultra-frais." }
      ]
    },
    {
      title: "Paiement & Compte",
      questions: [
        { q: "Quels sont les moyens de paiement acceptés ?", a: "Nous acceptons les cartes bancaires (Visa, Mastercard, Carte Bleue) et Apple Pay / Google Pay. Pour des raisons de sécurité pour nos livreurs, nous n'acceptons ni les espèces ni les chèques." },
        { q: "Quand suis-je débité ?", a: "Une empreinte bancaire est réalisée au moment de la validation de la commande, mais le débit réel n'a lieu qu'une fois la livraison effectuée. Vous ne payez que ce que vous recevez." },
        { q: "Comment parrainer un ami ?", a: "Dans l'application, allez dans votre profil pour trouver votre code de parrainage. Partagez-le avec vos proches : ils recevront une réduction sur leur première commande, et vous aussi !" }
      ]
    }
  ];

  return (
    <div className="flex flex-col w-full bg-slate-50 min-h-screen pb-24">
      {/* Header */}
      <section className="bg-primary text-white py-16 px-4">
        <div className="container mx-auto max-w-3xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Comment pouvons-nous vous aider ?</h1>
          <p className="text-lg opacity-90 mb-8">Trouvez les réponses aux questions les plus fréquentes.</p>
          
          <div className="relative max-w-xl mx-auto text-slate-900">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
            <Input 
              placeholder="Ex: Frais de livraison, moyens de paiement..." 
              className="pl-12 h-14 rounded-full bg-white border-transparent text-base shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="container mx-auto px-4 max-w-4xl pt-16">
        <div className="space-y-16">
          {faqCategories.map((category, i) => (
            <div key={i}>
              <h2 className="text-2xl font-bold text-slate-900 mb-6 pb-2 border-b border-slate-200">
                {category.title}
              </h2>
              <Accordion type="multiple" className="w-full bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
                {category.questions.map((item, j) => (
                  <AccordionItem key={j} value={`item-${i}-${j}`} className="border-b last:border-0 px-6">
                    <AccordionTrigger className="text-left font-medium text-slate-800 hover:text-primary py-5">
                      {item.q}
                    </AccordionTrigger>
                    <AccordionContent className="text-slate-600 pb-5 leading-relaxed">
                      {item.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="mt-20 bg-white rounded-3xl p-8 md:p-12 text-center border border-slate-100 shadow-sm flex flex-col items-center">
          <div className="w-16 h-16 bg-orange-50 rounded-full flex items-center justify-center text-primary mb-6">
            <MessageCircle className="w-8 h-8" />
          </div>
          <h3 className="text-2xl font-bold text-slate-900 mb-4">Vous n'avez pas trouvé votre réponse ?</h3>
          <p className="text-slate-600 mb-8 max-w-lg mx-auto">
            Notre service client, basé en France, est là pour vous répondre rapidement. Pas de robots, que des vrais humains !
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="rounded-full px-8 font-bold">
              Ouvrir l'application
            </Button>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="rounded-full px-8 font-bold border-slate-300">
                Nous contacter
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
