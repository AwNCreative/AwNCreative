import { renderToString } from "react-dom/server";
import { Router as WouterRouter, Switch, Route } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Layout } from "@/components/layout/Layout";
import NotFound from "@/pages/not-found";

import Home from "@/pages/home";
import Store from "@/pages/store";
import Blog from "@/pages/blog";
import PrivacyPolicy from "@/pages/privacy-policy";
import TermsOfService from "@/pages/terms-of-service";
import RefundPolicy from "@/pages/refund-policy";

import SmartFoundation from "@/pages/blog/smart-foundation";
import UxPsychology from "@/pages/blog/ux-psychology";
import ProductEngineering from "@/pages/blog/product-engineering";
import TechArsenal from "@/pages/blog/tech-arsenal";
import SalesMachine from "@/pages/blog/sales-machine";
import AbsoluteLoyalty from "@/pages/blog/absolute-loyalty";

// Server-side render for a single URL. Used only at build time by
// prerender.mjs — never shipped to the browser.
export function render(url: string): string {
  // A fresh QueryClient per render call keeps prerender passes isolated.
  const queryClient = new QueryClient();

  return renderToString(
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter ssrPath={url}>
          <Layout>
            <Switch>
              <Route path="/" component={Home} />
              <Route path="/store" component={Store} />
              <Route path="/blog" component={Blog} />
              <Route path="/blog/smart-foundation" component={SmartFoundation} />
              <Route path="/blog/ux-psychology" component={UxPsychology} />
              <Route path="/blog/product-engineering" component={ProductEngineering} />
              <Route path="/blog/tech-arsenal" component={TechArsenal} />
              <Route path="/blog/sales-machine" component={SalesMachine} />
              <Route path="/blog/absolute-loyalty" component={AbsoluteLoyalty} />
              <Route path="/privacy-policy" component={PrivacyPolicy} />
              <Route path="/terms-of-service" component={TermsOfService} />
              <Route path="/refund-policy" component={RefundPolicy} />
              <Route component={NotFound} />
            </Switch>
          </Layout>
        </WouterRouter>
      </TooltipProvider>
    </QueryClientProvider>,
  );
}
