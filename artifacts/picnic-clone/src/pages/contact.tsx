import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Smartphone, Mail, MapPin, ExternalLink } from "lucide-react";
import { Link } from "wouter";

export default function Contact() {
  return (
    <div className="flex flex-col w-full min-h-screen bg-slate-50 pb-24">
      {/* Header */}
      <section className="bg-white border-b py-16 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Nous contacter
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Notre équipe est à votre écoute. Choisissez le moyen de contact qui vous convient le mieux.
          </p>
        </div>
      </section>

      <section className="container mx-auto px-4 max-w-6xl pt-12">
        <div className="grid lg:grid-cols-5 gap-8">
          
          {/* Contact Info (Left) */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            
            <Card className="border-none shadow-sm border-t-4 border-t-primary rounded-2xl bg-white overflow-hidden">
              <CardContent className="p-6 sm:p-8">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center text-primary flex-shrink-0">
                    <Smartphone className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-lg">Le plus rapide : L'App</h3>
                  </div>
                </div>
                <p className="text-slate-600 mb-6 text-sm leading-relaxed">
                  Pour toute question concernant une commande en cours ou un produit manquant, le service client dans l'application vous répond en quelques minutes.
                </p>
                <Button className="w-full rounded-full font-semibold">Ouvrir l'application</Button>
              </CardContent>
            </Card>

            <Card className="border-none shadow-sm rounded-2xl bg-white">
              <CardContent className="p-6 sm:p-8">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center text-slate-700 flex-shrink-0">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-lg">Par email</h3>
                  </div>
                </div>
                <a href="mailto:serviceclient@picnic.app" className="text-primary font-medium hover:underline inline-flex items-center gap-1">
                  serviceclient@picnic.app <ExternalLink className="w-3 h-3" />
                </a>
              </CardContent>
            </Card>

            <Card className="border-none shadow-sm rounded-2xl bg-white">
              <CardContent className="p-6 sm:p-8">
                <div className="flex gap-4 mb-4">
                  <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center text-slate-700 flex-shrink-0 mt-1">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-lg mb-2">Bureaux Picnic France</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      Picnic SAS<br />
                      75 Rue de la République<br />
                      59000 Lille, France
                    </p>
                    <p className="text-xs text-slate-400 mt-2 italic">
                      (Veuillez noter : ce n'est pas un point de retrait ni un magasin.)
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

          </div>

          {/* Contact Form (Right) */}
          <div className="lg:col-span-3">
            <Card className="border-none shadow-sm rounded-3xl bg-white h-full">
              <CardContent className="p-8 sm:p-10">
                <h2 className="text-2xl font-bold text-slate-900 mb-6">Envoyez-nous un message</h2>
                
                <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">Prénom</Label>
                      <Input id="firstName" placeholder="Votre prénom" className="bg-slate-50 border-slate-200" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Nom</Label>
                      <Input id="lastName" placeholder="Votre nom" className="bg-slate-50 border-slate-200" />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email">Adresse email</Label>
                    <Input id="email" type="email" placeholder="nom@exemple.com" className="bg-slate-50 border-slate-200" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">Sujet</Label>
                    <select id="subject" className="flex h-10 w-full items-center justify-between rounded-md border border-slate-200 bg-slate-50 px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50">
                      <option value="" disabled selected>Sélectionnez un sujet</option>
                      <option value="order">Ma commande</option>
                      <option value="app">L'application</option>
                      <option value="job">Travailler chez Picnic</option>
                      <option value="other">Autre question</option>
                    </select>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea 
                      id="message" 
                      placeholder="Comment pouvons-nous vous aider ?" 
                      className="min-h-[150px] bg-slate-50 border-slate-200 resize-none" 
                    />
                  </div>
                  
                  <Button type="submit" size="lg" className="w-full rounded-full font-bold h-12">
                    Envoyer le message
                  </Button>
                  
                  <p className="text-xs text-center text-slate-500 mt-4">
                    En envoyant ce message, vous acceptez notre <a href="#" className="underline">politique de confidentialité</a>.
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
          
        </div>
      </section>
    </div>
  );
}
