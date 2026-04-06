import React from "react";
import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";

import NotFound from "@/pages/not-found";
import Home from "@/pages/home";
import Cuisiner from "@/pages/cuisiner";
import Supermarche from "@/pages/supermarche";
import APropos from "@/pages/a-propos";
import Faq from "@/pages/faq";
import Contact from "@/pages/contact";
import { Layout } from "@/components/layout/Layout";

const queryClient = new QueryClient();

function Router() {
  return (
    <Layout>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/cuisiner-avec-picnic" component={Cuisiner} />
        <Route path="/supermarche-en-ligne" component={Supermarche} />
        <Route path="/a-propos" component={APropos} />
        <Route path="/faq" component={Faq} />
        <Route path="/contact" component={Contact} />
        <Route component={NotFound} />
      </Switch>
    </Layout>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
