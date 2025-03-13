"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, Phone, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full fixed top-0 z-50 bg-transparent">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16 items-center">
          {/* Mobile menu button - visible on small screens */}
          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-10 w-10 text-primary"
                >
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">פתח תפריט</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[250px] sm:w-[300px]">
                <div className="flex flex-col h-full">
                  <div className="flex flex-col space-y-4 mt-4">
                    <Link
                      href="/"
                      className="text-primary hover:text-primary/80 px-2 py-2 text-lg font-medium transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      דף הבית
                    </Link>
                    <Link
                      href="/about"
                      className="text-primary hover:text-primary/80 px-2 py-2 text-lg font-medium transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      אודות
                    </Link>
                    <Link
                      href="/services"
                      className="text-primary hover:text-primary/80 px-2 py-2 text-lg font-medium transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      שירותים
                    </Link>
                    <Link
                      href="/contact"
                      className="text-primary hover:text-primary/80 px-2 py-2 text-lg font-medium transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      צור קשר
                    </Link>
                  </div>
                  <div className="mt-auto mb-8">
                    <Button
                      asChild
                      size="sm"
                      variant="outline"
                      className="gap-2 w-full"
                    >
                      <Link href="/contact" onClick={() => setIsOpen(false)}>
                        <Phone className="h-4 w-4" />
                        <span>יצירת קשר</span>
                      </Link>
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>

          {/* Main navigation using shadcn NavigationMenu - hidden on mobile, visible on medium screens and up */}
          <div className="hidden md:block">
            <NavigationMenu dir="rtl">
              <NavigationMenuList className="space-x-4 rtl:space-x-reverse">
                <NavigationMenuItem>
                  <NavigationMenuLink
                    asChild
                    className={navigationMenuTriggerStyle()}
                  >
                    <Link href="/">דף הבית</Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink
                    asChild
                    className={navigationMenuTriggerStyle()}
                  >
                    <Link href="/about">אודות</Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink
                    asChild
                    className={navigationMenuTriggerStyle()}
                  >
                    <Link href="/services">שירותים</Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink
                    asChild
                    className={navigationMenuTriggerStyle()}
                  >
                    <Link href="/contact">צור קשר</Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* Contact button container - will appear on the left in RTL */}
          <div className="hidden md:block">
            <Button asChild size="sm" variant="outline" className="gap-2">
              <Link href="/contact">
                <Phone className="h-4 w-4" />
                <span>יצירת קשר</span>
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
