"use client";

import { useState, useEffect } from 'react';
import { Blocks, ChevronDown, Moon, Sun } from 'lucide-react';

export default function Navigation() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [isDark, setIsDark] = useState<boolean>(false);

    useEffect(() => {
        try {
            const stored = localStorage.getItem('theme');
            const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
            const initial = stored === 'dark' || (stored == null && prefersDark);
            setIsDark(initial);
            document.documentElement.classList.toggle('dark', initial);
        } catch (e) {
            // ignore (localStorage not available)
        }
    }, []);

    function toggleTheme() {
        const next = !isDark;
        setIsDark(next);
        try {
            localStorage.setItem('theme', next ? 'dark' : 'light');
        } catch (e) {
            /* ignore */
        }
        document.documentElement.classList.toggle('dark', next);
    }

  return (
    <section className="sticky inset-x-0 top-0 z-40 border-b bg-background py-4">
      <div className="container">
        {/* Desktop Navigation */}
        <nav className="hidden justify-between lg:flex">
          <div className="flex items-center gap-x-9">
            <a className="flex items-center gap-2" href="https://demo-v2.achromatic.dev/">
              <div className="flex items-center space-x-2">
                <div className="flex size-9 items-center justify-center p-1">
                  <div className="flex size-7 items-center justify-center rounded-md border bg-primary text-primary-foreground">
                    <Blocks size={16} />
                  </div>
                </div>
                <span className="font-bold">Acme</span>
              </div>
            </a>
            <div className="flex items-center">
                <nav aria-label="Main" data-orientation="horizontal" className="relative z-10 flex flex-1 items-center justify-center">
                <div>
                    <ul data-orientation="horizontal" className="group flex flex-1 list-none items-center justify-center space-x-1">
                    <li>
                        <button className="group inline-flex h-9 w-max items-center justify-center rounded-xl bg-background px-4 py-2 text-[15px] font-normal transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[state=open]:bg-accent/50">
                        Product
                        <ChevronDown className="relative top-px ml-1 size-3 transition duration-300 group-data-[state=open]:rotate-180" />
                        </button>
                    </li>
                    <li>
                        <button className="group inline-flex h-9 w-max items-center justify-center rounded-xl bg-background px-4 py-2 text-[15px] font-normal transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[state=open]:bg-accent/50">
                        Resources
                        <ChevronDown className="relative top-px ml-1 size-3 transition duration-300 group-data-[state=open]:rotate-180" />
                        </button>
                    </li>
                    <li>
                        <a href="https://demo-v2.achromatic.dev/pricing" className="group inline-flex h-9 w-max items-center justify-center rounded-xl bg-background px-4 py-2 text-[15px] font-normal transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[state=open]:bg-accent/50">
                        Pricing
                        </a>
                    </li>
                    <li>
                        <a href="https://demo-v2.achromatic.dev/blog" className="group inline-flex h-9 w-max items-center justify-center rounded-xl bg-background px-4 py-2 text-[15px] font-normal transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[state=open]:bg-accent/50">
                        Blog
                        </a>
                    </li>
                    <li>
                        <a href="https://demo-v2.achromatic.dev/story" className="group inline-flex h-9 w-max items-center justify-center rounded-xl bg-background px-4 py-2 text-[15px] font-normal transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[state=open]:bg-accent/50">
                        Story
                        </a>
                    </li>
                    </ul>
                </div>
                <div className="absolute left-0 top-full flex justify-center"></div>
                </nav>
            </div>
            </div>
                <div className="flex items-center gap-2">
                <button onClick={toggleTheme} aria-pressed={isDark} title="Toggle theme" className="relative inline-flex items-center justify-center rounded-xl border-none bg-background text-sm font-medium shadow-none transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 size-9">
                    <Sun className={`size-5 transition-all ${isDark ? ' -rotate-90 scale-0' : ' rotate-0 scale-100'}`} />
                    <Moon className={`absolute size-5 transition-all ${isDark ? ' rotate-0 scale-100' : ' rotate-90 scale-0'}`} />
                    <span className="sr-only">Toggle theme</span>
                </button>
                <a href="https://dashboard.demo-v2.achromatic.dev/auth/sign-in" className="inline-flex h-9 items-center justify-center rounded-xl border border-input bg-transparent px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50">
                    Sign in
                </a>
                <a href="https://dashboard.demo-v2.achromatic.dev/auth/sign-up" className="inline-flex h-9 items-center justify-center rounded-xl bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50">
                    Start for free
                </a>
            </div>
        </nav>

        {/* Mobile Navigation */}
        <div className="flex items-center justify-between lg:hidden">
            <a href="https://demo-v2.achromatic.dev/">
                <div className="flex items-center space-x-2">
                    <div className="flex size-9 items-center justify-center p-1">
                        <div className="flex size-7 items-center justify-center rounded-md border bg-primary text-primary-foreground">
                            <Blocks size={16} />
                        </div>
                    </div>
                    <span className="font-bold">Acme</span>
                </div>
            </a>
            <button
                onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
                className="flex size-9 flex-col items-center justify-center gap-y-1 rounded-full text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                aria-label="Toggle Mobile Menu"
            >
                <div className="w-5 origin-center border-t-2 border-primary"></div>
                <div className="w-5 origin-center border-t-2 border-primary"></div>
            </button>
        </div>
      </div>
    </section>
  );
}