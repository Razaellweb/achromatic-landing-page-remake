"use client";

import { ChevronDown } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqItems = [
  {
    question: "What does Acme do?",
    answer: "This is a placeholder answer.",
  },
  {
    question: "How will this benefit my business?",
    answer: "This is a placeholder answer.",
  },
  {
    question: "Is my data safe?",
    answer: "This is a placeholder answer.",
  },
  {
    question: "What kind of integrations are available?",
    answer: "This is a placeholder answer.",
  },
  {
    question: "How easy is it to onboard my team?",
    answer: "This is a placeholder answer.",
  },
  {
    question: "What types of businesses can use this?",
    answer: "This is a placeholder answer.",
  },
  {
    question: "Can I customize this to fit my business needs?",
    answer: "This is a placeholder answer.",
  },
];

const FaqSection = () => {
  return (
    <section>
      <div className="px-2 sm:container">
        <div className="relative grid">
          <div className="absolute inset-y-0 block w-px bg-border"></div>
          <div className="absolute inset-y-0 right-0 w-px bg-border"></div>
          <div className="grid gap-12 py-20 lg:grid-cols-3 lg:py-24">
            <div className="lg:col-span-1">
              <h2 className="text-3xl font-semibold leading-[36px] tracking-[-0.025em] text-foreground md:text-5xl">
                Frequently Asked Questions
              </h2>
              <p className="mt-4 text-base text-muted-foreground sm:text-lg">
                Haven&apos;t found what you&apos;re looking for? Try contacting us, we are
                glad to help.
              </p>
            </div>
            <div className="lg:col-span-2">
              <Accordion type="single" collapsible className="w-full">
                {faqItems.map((item, index) => (
                  <AccordionItem
                    value={`item-${index + 1}`}
                    key={index}
                    className="border-b"
                  >
                    <AccordionTrigger className="flex flex-1 items-center justify-between py-4 text-left font-medium text-foreground transition-all hover:underline text-base md:text-lg [&[data-state=open]>svg]:rotate-180">
                      {item.question}
                      <ChevronDown className="h-4 w-4 shrink-0 transition-transform duration-200" />
                    </AccordionTrigger>
                    <AccordionContent className="pb-4 pt-0 text-sm text-muted-foreground sm:text-base">
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </div>
      </div>
      <div className="h-px w-full bg-border"></div>
    </section>
  );
};

export default FaqSection;