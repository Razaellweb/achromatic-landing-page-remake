import type { SVGProps } from "react";
import { ArrowUp, CalendarClock, Equal, Send } from "lucide-react";

const IntercomIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M12 22a10 10 0 1 0-2-4.94"></path>
    <path d="M12.93 5.4a4.5 4.5 0 0 1 0 6.36"></path>
    <path d="M16.5 9a2 2 0 0 1 0 2.82"></path>
  </svg>
);

const GmailIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M22 6c-1.5 2-4.5 4-8 4-3.5 0-6.5-2-8-4"></path>
    <path d="M22 6v12H2V6l10 7 10-7Z"></path>
  </svg>
);

const FeaturesShowcase = () => {
  const pipelineData = [
    { label: 'Lead', value: 45, width: '80%', color: 'bg-[--color-chart-1]' },
    { label: 'Qualified', value: 32, width: '60%', color: 'bg-[--color-chart-2]' },
    { label: 'Proposal', value: 18, width: '35%', color: 'bg-[--color-chart-3]' },
    { label: 'Negotiation', value: 7, width: '15%', color: 'bg-[--color-chart-4]' },
    { label: 'Closed', value: 3, width: '5%', color: 'bg-[--color-chart-5]' },
  ];

  const avatars = [
    '/placeholder.svg',
    '/placeholder.svg',
    '/placeholder.svg',
    '/placeholder.svg',
    '/placeholder.svg',
  ];

  return (
    <section>
      <div className="px-2 sm:container">
        <div className="relative grid">
          <div className="absolute inset-y-0 block w-px bg-border"></div>
          <div className="absolute inset-y-0 right-0 w-px bg-border"></div>

          <div className="py-20">
            <div className="text-center">
              <h2 className="text-3xl font-semibold md:text-5xl">
                The next-gen SaaS
              </h2>
              <p className="mx-auto mt-6 max-w-2xl text-center text-muted-foreground">
                Acme is the engine that builds, scales and grows your company
                to the next level. Reminder that this is a demo and some of
                the features below don&apos;t exists.
              </p>
            </div>
            <div className="mt-20 grid grid-cols-1 gap-2 md:grid-cols-2">
              <div className="rounded-xl border bg-background p-6 shadow-sm md:col-span-1">
                <h3 className="text-lg font-semibold">Customers</h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  Organize your contact and resource data in one place.
                </p>
                <div className="mt-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground">
                        Total customers
                      </p>
                      <p className="text-3xl font-semibold">1,234</p>
                    </div>
                    <div className="hidden items-center gap-1 rounded-md bg-green-100 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20 dark:bg-green-900/50 dark:text-green-400 sm:inline-flex">
                      <ArrowUp className="size-4" />
                      <span>+12.5%</span>
                    </div>
                  </div>
                  <div className="mt-4 flex -space-x-2 overflow-hidden">
                    {avatars.map((_, index) => (
                      <div key={index} className="inline-block size-8 rounded-full bg-neutral-200 ring-2 ring-background dark:bg-neutral-700"></div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="rounded-xl border bg-background p-6 shadow-sm md:col-span-1">
                <h3 className="text-lg font-semibold">Pipelines</h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  Track your sales pipeline stages. Get a detailed breakdown at a glance.
                </p>
                <div className="mt-4 flex flex-col gap-4">
                  {pipelineData.map((item) => (
                    <div key={item.label} className="flex items-center justify-between gap-4">
                      <p className="w-20 text-sm text-muted-foreground">{item.label}</p>
                      <div className="h-2 flex-1 rounded-full bg-muted">
                        <div
                          className={`h-full rounded-full ${item.color}`}
                          style={{ width: item.width }}
                        ></div>
                      </div>
                      <p className="w-6 text-right text-sm font-medium">{item.value}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-xl border bg-background p-6 shadow-sm md:col-span-2">
                <h3 className="text-lg font-semibold">Analytics</h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  Get instant insights into your business performance.
                </p>
                <div className="mt-4 h-40 w-full [mask-image:linear-gradient(to_top,transparent,black_16px)]">
                  <div
                    className="h-full w-full"
                    style={{
                      backgroundSize: '32px 32px',
                      backgroundImage: 'radial-gradient(circle at 1px 1px, hsl(var(--border)), transparent 1px)',
                    }}
                  >
                    <svg viewBox="0 0 400 100" className="h-full w-full" preserveAspectRatio="none">
                      <defs>
                        <linearGradient id="analytics-gradient" x1="0" y1="0" x2="0" y2="100" gradientUnits="userSpaceOnUse">
                          <stop offset="0%" stopColor="hsl(var(--foreground))" stopOpacity="0.2" />
                          <stop offset="100%" stopColor="hsl(var(--foreground))" stopOpacity="0" />
                        </linearGradient>
                      </defs>
                      <path d="M0 80 C 50 40, 100 90, 150 60 S 250 10, 300 50 S 350 90, 400 60" fill="none" stroke="hsl(var(--foreground))" strokeWidth="2" />
                      <path d="M0 80 C 50 40, 100 90, 150 60 S 250 10, 300 50 S 350 90, 400 60 L 400 100 L 0 100 Z" fill="url(#analytics-gradient)" />
                    </svg>
                  </div>
                </div>
              </div>

              <div className="rounded-xl border bg-background p-6 shadow-sm md:col-span-1">
                <h3 className="text-lg font-semibold">Campaigns</h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  Set up campaigns to notify your customer segment.
                </p>
                <div className="mt-4 flex flex-col gap-3">
                  <div className="flex items-center gap-3 rounded-lg border bg-muted/50 p-3">
                    <div className="flex size-8 items-center justify-center rounded-md border bg-background">
                      <CalendarClock className="size-4" />
                    </div>
                    <div>
                      <p className="text-sm font-medium">Appointment Reminder</p>
                      <p className="text-xs text-muted-foreground">24 hours before appointment</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 rounded-lg border bg-muted/50 p-3">
                    <div className="flex size-8 items-center justify-center rounded-md border bg-background">
                      <Send className="size-4" />
                    </div>
                    <div><p className="text-sm font-medium">Follow-up Email</p></div>
                  </div>
                </div>
              </div>

              <div className="rounded-xl border bg-background p-6 shadow-sm md:col-span-1">
                <h3 className="text-lg font-semibold">Magic Inbox</h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  Centralize all customer communications in one shared inbox.
                </p>
                <div className="mt-4 flex flex-col items-center justify-center gap-2 py-4">
                  <div className="flex items-center gap-6">
                    <div className="relative flex size-10 items-center justify-center rounded-full border bg-background">
                      <IntercomIcon className="size-5 text-green-500" />
                      <div className="absolute -right-1 -top-1 flex size-5 items-center justify-center rounded-full border-2 border-background bg-blue-500 text-xs text-white">17</div>
                    </div>
                    <div className="relative flex size-10 items-center justify-center rounded-full border bg-background">
                      <GmailIcon className="size-5 text-red-500" />
                      <div className="absolute -right-1 -top-1 flex size-5 items-center justify-center rounded-full border-2 border-background bg-blue-500 text-xs text-white">31</div>
                    </div>
                  </div>
                  <p className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span>Chat</span>
                    <Equal className="size-4 shrink-0" />
                    <span>Email</span>
                  </p>
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

export default FeaturesShowcase;