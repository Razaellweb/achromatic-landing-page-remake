import {
  Calendar,
  Check,
  DollarSign,
  Globe,
  MapPin,
  Tag,
  TrendingUp,
  User,
} from "lucide-react";

const VercelIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    className="size-5 shrink-0"
  >
    <path d="M12 2L2 22H22L12 2Z" />
  </svg>
);

const DetailItem = ({
  icon,
  label,
  children,
}: {
  icon: React.ReactNode;
  label: string;
  children: React.ReactNode;
}) => (
  <div className="flex items-start gap-2">
    {icon}
    <div>
      <div className="text-muted-foreground">{label}</div>
      <div className="font-medium">{children}</div>
    </div>
  </div>
);

const CompanyProfile = () => {
  return (
    <section>
      <div className="px-2 sm:container">
        <div className="relative grid">
          <div className="absolute inset-y-0 block w-px bg-border"></div>
          <div className="absolute inset-y-0 right-0 w-px bg-border"></div>

          <div className="grid grid-cols-1 gap-6 p-4 py-20 lg:grid-cols-2 lg:gap-12 lg:px-0">
            <div className="rounded-xl border bg-background p-6 shadow-sm lg:p-8">
              <div className="flex items-center gap-4">
                <div className="flex size-9 items-center justify-center rounded-lg border">
                  <div className="p-1.5">
                    <VercelIcon />
                  </div>
                </div>
                <div className="font-semibold">Vercel</div>
              </div>
              <div className="mt-6 grid grid-cols-2 gap-x-4 gap-y-6 text-sm">
                <DetailItem
                  icon={<Globe className="size-4 text-muted-foreground" />}
                  label="Domain"
                >
                  <a
                    href="https://vercel.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline"
                  >
                    https://vercel.com
                  </a>
                </DetailItem>
                <DetailItem
                  icon={<User className="size-4 text-muted-foreground" />}
                  label="CEO"
                >
                  Guillermo Rauch
                </DetailItem>
                <DetailItem
                  icon={<Calendar className="size-4 text-muted-foreground" />}
                  label="Founded"
                >
                  2015
                </DetailItem>
                <DetailItem
                  icon={
                    <TrendingUp className="size-4 text-muted-foreground" />
                  }
                  label="Est. ARR"
                >
                  $100-120M
                </DetailItem>
                <DetailItem
                  icon={<MapPin className="size-4 text-muted-foreground" />}
                  label="Location"
                >
                  California, USA
                </DetailItem>
                <DetailItem
                  icon={<Tag className="size-4 text-muted-foreground" />}
                  label="Tags"
                >
                  <div className="flex flex-wrap gap-1.5">
                    <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold">
                      SaaS
                    </div>
                    <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold">
                      B2B
                    </div>
                  </div>
                </DetailItem>
                <DetailItem
                  icon={
                    <DollarSign className="size-4 text-muted-foreground" />
                  }
                  label="Funding"
                >
                  $250M Series E
                </DetailItem>
              </div>
              <div className="mt-6 border-t pt-6">
                <h4 className="font-semibold">AI Advisor</h4>
                <p className="mt-2 text-sm text-muted-foreground">
                  Vercel has been contacted 5 times in the past 6-months.
                  Suggested next engagement is in 2 days.
                </p>
              </div>
            </div>
            <div className="flex flex-col justify-center gap-6">
              <h2 className="text-3xl font-semibold leading-tight md:text-5xl">
                Your personal operating system
              </h2>
              <p className="text-muted-foreground">
                Harness the power of AI to transform your business and automate
                almost everything with workflows.
              </p>
              <ul className="mt-6 grid grid-cols-2 gap-4">
                {[
                  "AI-driven insights",
                  "Smart automation",
                  "Adaptive workflows",
                  "Predictive analytics",
                  "Natural language processing",
                  "Auto task prioritization",
                ].map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <div className="flex size-6 items-center justify-center rounded-full bg-green-100">
                      <Check className="size-4 text-green-600" />
                    </div>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="h-px w-full bg-border"></div>
    </section>
  );
};

export default CompanyProfile;