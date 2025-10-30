import React from "react";
import type { LucideProps } from "lucide-react";
import {
  UserPlus,
  ChartNoAxesColumnIncreasing,
  Workflow,
} from "lucide-react";

type Problem = {
  icon: React.FC<LucideProps>;
  title: string;
  description: string;
};

const problemsData: Problem[] = [
  {
    icon: UserPlus,
    title: "Problem 1",
    description:
      "Describe a significant problem your ideal customer profile has. Explain how this problem impacts their goals or daily operations.",
  },
  {
    icon: ChartNoAxesColumnIncreasing,
    title: "Problem 2",
    description:
      "Describe a significant problem your ideal customer profile has. Explain how this problem impacts their goals or daily operations.",
  },
  {
    icon: Workflow,
    title: "Problem 3",
    description:
      "Describe a significant problem your ideal customer profile has. Explain how this problem impacts their goals or daily operations.",
  },
];

const ProblemsSection = () => {
  return (
    <section>
      <div className="px-2 sm:container">
        <div className="relative grid">
          <div className="absolute inset-y-0 block w-px bg-border" />
          <div className="absolute inset-y-0 right-0 w-px bg-border" />

          <div className="px-4 py-20 text-center">
            <h2 className="text-3xl font-semibold md:text-5xl">
              Attention Grabbing{" "}
              <span className="relative inline-block">
                <span className="absolute inset-x-[-10px] inset-y-[-4px] z-0 rounded-lg border border-blue-500 bg-blue-100/40" />
                <span className="relative z-10">Title</span>
                <span className="absolute left-[-10px] top-[-10px] size-2 rounded-full border border-blue-500 bg-background" />
                <span className="absolute right-[-10px] top-[-10px] size-2 rounded-full border border-blue-500 bg-background" />
                <span className="absolute bottom-[-10px] left-[-10px] size-2 rounded-full border border-blue-500 bg-background" />
                <span className="absolute bottom-[-10px] right-[-10px] size-2 rounded-full border border-blue-500 bg-background" />
              </span>
            </h2>
          </div>

          <div className="grid divide-y divide-dashed border-t border-dashed md:grid-cols-3 md:divide-x md:divide-y-0">
            {problemsData.map((problem, index) => {
              const Icon = problem.icon;
              return (
                <div key={index} className="border-dashed px-8 py-12">
                  <div className="mb-7 flex size-12 items-center justify-center rounded-2xl border bg-background shadow">
                    <Icon className="size-5 shrink-0" />
                  </div>
                  <h3 className="mb-3 text-lg font-semibold">{problem.title}</h3>
                  <p className="text-muted-foreground">{problem.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="h-px w-full bg-border" />
    </section>
  );
};

export default ProblemsSection;