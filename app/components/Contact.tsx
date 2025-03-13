"use client";

import type React from "react";

import {
  Facebook,
  Instagram,
  MessageSquare,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <section id="contact" className="py-16 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">צור קשר</h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold mb-6">
              לבירור נוספים ולתיאום שיחת התאמה לתהליך
            </h3>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-primary" />
                <a
                  href="tel:052-6491331"
                  className="hover:text-primary transition-colors"
                >
                  052-6491331
                </a>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary" />
                <a
                  href="mailto:horut.maatzima@gmail.com"
                  className="hover:text-primary transition-colors"
                >
                  horut.maatzima@gmail.com
                </a>
              </div>

              <div className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-primary" />
                <span>יהלום 1, באר יעקב, ישראל</span>
              </div>
            </div>

            <div className="flex gap-6 mt-8">
              <a
                href="https://www.facebook.com/amit.alaluf.16"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-6 w-6" />
              </a>
              <a
                href="https://www.instagram.com/amit_alaluf1/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-6 w-6" />
              </a>
              <a
                href="https://www.tiktok.com/@amitalaluf1"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="TikTok"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6"
                >
                  <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
                </svg>
              </a>
              <a
                href={`https://wa.me/972526491331`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-green-600 transition-colors"
                aria-label="WhatsApp"
              >
                <MessageSquare className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="border shadow-sm">
            <CardContent className="p-6">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-right block">
                    שם מלא
                  </Label>
                  <Input
                    type="text"
                    id="name"
                    className="w-full"
                    dir="rtl"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-right block">
                    טלפון
                  </Label>
                  <Input
                    type="tel"
                    id="phone"
                    className="w-full"
                    dir="rtl"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-right block">
                    אימייל
                  </Label>
                  <Input
                    type="email"
                    id="email"
                    className="w-full"
                    dir="rtl"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-right block">
                    הודעה
                  </Label>
                  <Textarea
                    id="message"
                    rows={4}
                    className="w-full resize-none"
                    dir="rtl"
                    required
                  />
                </div>

                <Button type="submit" className="w-full">
                  שלח הודעה
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
