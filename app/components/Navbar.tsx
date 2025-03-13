"use client";

import Link from "next/link";
import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <nav className="w-full fixed top-0 z-50 bg-transparent">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16 items-center">
          {/* Main navigation links - will appear on the right in RTL */}
          <div className="flex space-x-4 rtl:space-x-reverse">
            <Link
              href="/"
              className="text-primary hover:text-primary/80 px-2 py-1 text-sm font-medium transition-colors"
            >
              דף הבית
            </Link>
            <Link
              href="/about"
              className="text-primary hover:text-primary/80 px-2 py-1 text-sm font-medium transition-colors"
            >
              אודות
            </Link>
            <Link
              href="/services"
              className="text-primary hover:text-primary/80 px-2 py-1 text-sm font-medium transition-colors"
            >
              שירותים
            </Link>
            <Link
              href="/contact"
              className="text-primary hover:text-primary/80 px-2 py-1 text-sm font-medium transition-colors"
            >
              צור קשר
            </Link>
          </div>

          {/* Contact button container - will appear on the left in RTL */}
          <div>
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
