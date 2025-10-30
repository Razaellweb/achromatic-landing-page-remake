`use client`;

import Link from "next/link";
import {
  Twitter,
  Linkedin,
  Facebook,
  Instagram,
  Music,
  Sun,
  Moon,
  Diamond,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const ThemeToggle = () => {
  return (
    <Button variant="ghost" size="icon" className="rounded-lg border">
      <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
};

export default function Footer() {
  const socialLinks = [
    { Icon: Twitter, href: "#" },
    { Icon: Linkedin, href: "#" },
    { Icon: Facebook, href: "#" },
    { Icon: Instagram, href: "#" },
    { Icon: Music, href: "#" },
  ];

  return (
    <footer className="border-t bg-background">
      <div className="container py-12">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-3">
            <Link href="/" className="flex items-center space-x-2">
              <div className="flex size-7 items-center justify-center rounded-md border bg-primary p-1 text-primary-foreground">
                <Diamond className="size-4" />
              </div>
              <span className="font-bold">Acme</span>
            </Link>
            <p className="mt-4 max-w-[240px] text-sm text-muted-foreground">
              Our mission is to disrupt the market with AI.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8 text-sm sm:grid-cols-4 lg:col-span-6">
            <div>
              <h4 className="mb-5 font-semibold">Product</h4>
              <ul className="space-y-3">
                {[
                  "Feature 1",
                  "Feature 2",
                  "Feature 3",
                  "Feature 4",
                  "Feature 5",
                ].map((feature) => (
                  <li key={feature}>
                    <Link
                      href="#"
                      className="text-muted-foreground hover:text-foreground"
                    >
                      {feature}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="mb-5 font-semibold">Resources</h4>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="#"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Contact
                  </Link>
                </li>
                <li>
                  <div className="flex items-center gap-2">
                    <Link
                      href="#"
                      className="text-muted-foreground hover:text-foreground"
                    >
                      Roadmap
                    </Link>
                    <div className="rounded-full bg-primary/10 px-2 py-0.5 text-xs font-medium text-primary">
                      New
                    </div>
                  </div>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Docs
                  </Link>
                </li>
                <li>
                  <div className="flex items-center gap-2">
                    <Link
                      href="#"
                      className="text-muted-foreground hover:text-foreground"
                    >
                      API Reference
                    </Link>
                    <div className="rounded-full bg-primary/10 px-2 py-0.5 text-xs font-medium text-primary">
                      New
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="mb-5 font-semibold">About</h4>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="#"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Story
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Blog
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Careers
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="mb-5 font-semibold">Legal</h4>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="#"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Terms of Use
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Cookie Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="lg:col-span-3">
            <h4 className="mb-5 font-semibold text-sm">
              Subscribe to our newsletter
            </h4>
            <form className="flex flex-col gap-2 sm:flex-row">
              <Input
                type="email"
                placeholder="Enter your email"
                className="h-10 rounded-lg"
              />
              <Button type="submit" className="h-10 rounded-lg shrink-0">
                Subscribe
              </Button>
            </form>
          </div>
        </div>

        <div className="mt-12 flex flex-col-reverse items-center justify-between gap-4 border-t pt-8 sm:flex-row">
          <p className="text-sm text-muted-foreground">
            © 2025 Acme. All rights reserved.
          </p>
          <div className="flex items-center gap-2">
            {socialLinks.map(({ Icon, href }, index) => (
              <a
                key={index}
                href={href}
                className="inline-flex h-9 w-9 items-center justify-center rounded-lg border bg-background hover:bg-accent"
                aria-label={`Social media link ${index + 1}`}
              >
                <Icon className="h-4 w-4 text-muted-foreground" />
              </a>
            ))}
            <ThemeToggle />
          </div>
        </div>
      </div>
    </footer>
  );
}