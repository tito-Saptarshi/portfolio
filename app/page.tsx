import { AppSidebar } from "@/components/app-sidebar";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";

import DecorativeElementsHero from "./components/DecorativeElementsHero";
import { Hero } from "./components/Hero";
import { Navbar } from "./components/Navbar";

export default function Home() {
  return (
    <div className="container mx-auto px-2">
      <div className="min-h-screen bg-[#f8f9fa] dark:bg-[#121212] relative overflow-hidden">
        <SidebarProvider>
          <AppSidebar />
          <SidebarInset>
            <DecorativeElementsHero />
           
            
            <Hero />
          </SidebarInset>
        </SidebarProvider>
      </div>
    </div>
  );
}
