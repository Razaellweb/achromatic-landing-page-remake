"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Box,
  Play,
  CircuitBoard,
  PanelsTopLeft,
  FileChartColumn,
  ChevronRight,
} from "lucide-react";

const tabs = [
  { id: "feature1", name: "Feature 1", Icon: Box },
  { id: "feature2", name: "Feature 2", Icon: Play },
  { id: "feature3", name: "Feature 3", Icon: CircuitBoard },
  { id: "feature4", name: "Feature 4", Icon: PanelsTopLeft },
  { id: "feature5", name: "Feature 5", Icon: FileChartColumn },
];

const featureImages: { [key: string]: string } = {
  feature1: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/9ad0e575-a6e7-47c2-96a4-5c6f723cc517-demo-v2-achromatic-dev/assets/images/images_1.png",
  feature2: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/9ad0e575-a6e7-47c2-96a4-5c6f723cc517-demo-v2-achromatic-dev/assets/images/images_2.png",
  feature3: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/9ad0e575-a6e7-47c2-96a4-5c6f723cc517-demo-v2-achromatic-dev/assets/images/images_1.png",
  feature4: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/9ad0e575-a6e7-47c2-96a4-5c6f723cc517-demo-v2-achromatic-dev/assets/images/images_2.png",
  feature5: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/9ad0e575-a6e7-47c2-96a4-5c6f723cc517-demo-v2-achromatic-dev/assets/images/images_1.png",
};


const HeroSection = () => {
  const [activeTab, setActiveTab] = useState("feature1");

  return (
    <section className="overflow-x-hidden">
      <div className="px-2 sm:container">
        <div className="relative grid">
          <div className="absolute inset-y-0 block w-px bg-border"></div>
          <div className="absolute inset-y-0 right-0 w-px bg-border"></div>
          <svg
            className="absolute left-[16.85%] top-0 hidden h-full w-px text-border [mask-image:linear-gradient(to_bottom,transparent,black_128px,black_calc(100%-24px),transparent)] lg:block"
            aria-hidden="true"
          >
            <line x1="0" y1="0" x2="0" y2="100%" stroke="currentColor" />
          </svg>
          <svg
            className="absolute right-[16.85%] top-0 hidden h-full w-px text-border [mask-image:linear-gradient(to_bottom,transparent,black_128px,black_calc(100%-24px),transparent)] lg:block"
            aria-hidden="true"
          >
            <line x1="0" y1="0" x2="0" y2="100%" stroke="currentColor" />
          </svg>
          <svg
            className="absolute bottom-[52px] left-[calc(50%-50vw)] hidden h-px w-screen text-border [mask-image:linear-gradient(to_right,transparent,black_100px,black_calc(100%-100px),transparent)] lg:block"
            aria-hidden="true"
          >
            <line x1="0" y1="0" x2="100%" y2="0" stroke="currentColor" />
          </svg>
          <div className="mx-auto mt-16 flex flex-col gap-6 px-2 sm:mt-20 sm:px-1 md:mt-24 lg:mt-32">
            <div className="flex items-center justify-center">
              <a
                href="#"
                className="group inline-flex h-8 items-center rounded-full border bg-background px-3 text-xs font-medium text-foreground shadow-sm transition-colors duration-200 hover:bg-accent/50 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 sm:text-sm"
              >
                <span className="w-fit py-0.5 text-center text-xs text-blue-500 sm:text-sm">
                  New!
                </span>
                <div
                  data-orientation="vertical"
                  role="none"
                  className="mx-2 h-full w-px shrink-0 bg-border"
                ></div>
                Put an announcement here 🎉
                <ChevronRight className="ml-1.5 size-3 shrink-0 text-foreground transition-transform group-hover:translate-x-0.5" />
              </a>
            </div>
            <h1 className="mt-6 text-balance text-center text-[48px] font-bold leading-[54px] tracking-[-1.2px] [font-kerning:none] sm:text-[56px] md:text-[64px] lg:text-[76px] lg:leading-[74px] lg:tracking-[-2px]">
              Your revolutionary
              <br /> Next.js SaaS
            </h1>
            <p className="mx-auto mt-3 max-w-[560px] text-balance text-center text-lg leading-[26px] text-muted-foreground sm:text-xl lg:mt-6">
              This is a demo application built with Achromatic. It will save you
              time and effort building your next SaaS.
            </p>
            <div className="mx-auto flex w-full flex-col gap-2 px-7 sm:w-auto sm:flex-row sm:px-0">
              <a
                href="https://dashboard.demo-v2.achromatic.dev/auth/sign-up"
                className="inline-flex h-10 items-center justify-center rounded-xl bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 sm:h-9"
              >
                Start for free
              </a>
              <a
                href="https://demo-v2.achromatic.dev/contact"
                className="inline-flex h-10 items-center justify-center rounded-xl border border-input bg-transparent px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 sm:h-9"
              >
                Talk to sales
              </a>
            </div>
            <div className="relative mt-3 lg:mt-6">
              <div
                role="tablist"
                className="relative z-20 mb-6 flex h-fit flex-row flex-wrap items-center justify-center text-muted-foreground md:flex-nowrap"
              >
                {tabs.map(({ id, name, Icon }) => (
                  <button
                    key={id}
                    role="tab"
                    onClick={() => setActiveTab(id)}
                    className={`group relative mx-1 inline-flex h-12 items-center justify-center whitespace-nowrap rounded-none border-b border-b-transparent bg-transparent px-2.5 py-1 pb-3 pt-2 text-sm shadow-none ring-offset-background transition-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 sm:mx-2 sm:px-3 ${
                      activeTab === id
                        ? "border-b-primary font-medium text-foreground"
                        : "text-muted-foreground"
                    }`}
                  >
                    <Icon className="mr-2 size-4 shrink-0" />
                    {name}
                  </button>
                ))}
              </div>
              <div className="relative mb-1 w-full rounded-xl">
                <svg
                  className="absolute left-[calc(50%-50vw)] top-[-25px] z-10 hidden h-px w-screen text-border [mask-image:linear-gradient(to_right,transparent,black_100px,black_calc(100%-100px),transparent)] lg:block"
                  aria-hidden="true"
                >
                  <line x1="0" y1="0" x2="100%" y2="0" stroke="currentColor" />
                </svg>
                <svg
                  className="absolute left-[calc(50%-50vw)] top-0 z-10 hidden h-px w-screen text-border [mask-image:linear-gradient(to_right,transparent,black_100px,black_calc(100%-100px),transparent)] lg:block"
                  aria-hidden="true"
                >
                  <line x1="0" y1="0" x2="100%" y2="0" stroke="currentColor" />
                </svg>
                <svg
                  className="absolute left-[calc(50%-50vw)] top-[52px] z-10 hidden h-px w-screen text-border [mask-image:linear-gradient(to_right,transparent,black_100px,black_calc(100%-100px),transparent)] lg:block"
                  aria-hidden="true"
                >
                  <line x1="0" y1="0" x2="100%" y2="0" stroke="currentColor" />
                </svg>
                <div className="relative z-20 bg-background">
                  {tabs.map((tab) => (
                    <div
                      key={tab.id}
                      style={{ display: activeTab === tab.id ? "block" : "none" }}
                    >
                      <Image
                        alt={`${tab.name} screenshot`}
                        width={1328}
                        height={727}
                        className="block rounded-xl border shadow"
                        src={featureImages[tab.id]}
                        priority={tab.id === 'feature1'}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="h-px w-full bg-border"></div>
    </section>
  );
};

export default HeroSection;