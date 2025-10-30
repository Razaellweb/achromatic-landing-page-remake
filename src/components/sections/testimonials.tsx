import Image from 'next/image';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'David Zhang',
    title: 'VP of Sales',
    company: 'GlobalTech Solutions',
    quote:
      'Acme has revolutionized how we manage customer relationships. Our team efficiency has improved by <strong>75%</strong> since implementation. The automated workflows are a game-changer for tech companies.',
    avatar: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/9ad0e575-a6e7-47c2-96a4-5c6f723cc517-demo-v2-achromatic-dev/assets/images/philip_grant-3.webp',
  },
  {
    name: 'Maria Rodriguez',
    title: 'Customer Success Director',
    company: 'Cloud Dynamics',
    quote:
      "Acme's customer prediction model has drastically improved our targeting strategy. We've seen a <strong>50% increase</strong> in conversion rates! Their marketing automation features are unmatched.",
    avatar: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/9ad0e575-a6e7-47c2-96a4-5c6f723cc517-demo-v2-achromatic-dev/assets/images/sofia_muller-7.webp',
  },
  {
    name: 'James Wilson',
    title: 'Head of Business Development',
    company: 'Velocity Inc',
    quote:
      'As a startup, we needed a system that could scale with us. Acme delivers perfectly. Our sales pipeline visibility has improved <strong>tenfold</strong>. Essential tool for any growing business.',
    avatar: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/9ad0e575-a6e7-47c2-96a4-5c6f723cc517-demo-v2-achromatic-dev/assets/images/vivian_casey-5.webp',
  },
  {
    name: 'Sarah Kim',
    title: 'Senior Account Executive',
    company: 'Digital First',
    quote:
      "Acme's multi-language support has made managing global customers effortless. Customer communication is now seamless across all regions. Perfect for international teams.",
    avatar: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/9ad0e575-a6e7-47c2-96a4-5c6f723cc517-demo-v2-achromatic-dev/assets/images/victoria_ballard-4.webp',
  },
  {
    name: 'Marcus Johnson',
    title: 'Sales Operations Manager',
    company: 'Revenue Pulse',
    quote:
      "Acme's analytics dashboard gives us unprecedented insights into customer behavior. Our customer retention has increased by <strong>40%</strong> using their predictive analytics. Transformative for financial services.",
    avatar: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/9ad0e575-a6e7-47c2-96a4-5c6f723cc517-demo-v2-achromatic-dev/assets/images/gabriel_fischer-6.webp',
  },
  {
    name: 'Priya Sharma',
    title: 'Chief Revenue Officer',
    company: 'Scale Systems',
    quote:
      "Acme's integration with our existing tools has streamlined our entire operation. Customer service response times have been cut in <strong>half</strong>. The automation features are exceptional.",
    avatar: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/9ad0e575-a6e7-47c2-96a4-5c6f723cc517-demo-v2-achromatic-dev/assets/images/philip_grant-3.webp',
  },
  {
    name: 'Miguel Santos',
    title: 'Account Management Director',
    company: 'Grow Corp',
    quote:
      "Acme's sustainability tracking features help us monitor our environmental impact. Perfect for managing eco-conscious customer relationships. Leading the way in sustainable business practices.",
    avatar: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/9ad0e575-a6e7-47c2-96a4-5c6f723cc517-demo-v2-achromatic-dev/assets/images/sofia_muller-7.webp',
  },
  {
    name: 'Lisa Thompson',
    title: 'Inside Sales Manager',
    company: 'Quantum Enterprises',
    quote:
      "Acme's customer segmentation tools have transformed our marketing approach. Our targeted campaigns now see <strong>85% higher</strong> engagement rates. Revolutionizing how we connect with customers.",
    avatar: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/9ad0e575-a6e7-47c2-96a4-5c6f723cc517-demo-v2-achromatic-dev/assets/images/vivian_casey-5.webp',
  },
  {
    name: 'Daniel Park',
    title: 'Business Operations Lead',
    company: 'Swift Solutions',
    quote:
      "Acme's HIPAA-compliant features make it perfect for healthcare providers. Secure patient relationship management has never been easier. A milestone in healthcare CRM solutions.",
    avatar: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/9ad0e575-a6e7-47c2-96a4-5c6f723cc517-demo-v2-achromatic-dev/assets/images/victoria_ballard-4.webp',
  },
  {
    name: 'Emma Anderson',
    title: 'Director of Client Relations',
    company: 'Peak Partners',
    quote:
      "Acme's education-focused features have doubled our student engagement rates. Perfect for managing student and institution relationships. Transforming educational administration.",
    avatar: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/9ad0e575-a6e7-47c2-96a4-5c6f723cc517-demo-v2-achromatic-dev/assets/images/gabriel_fischer-6.webp',
  },
];

type Testimonial = (typeof testimonials)[0];

const TestimonialCard = ({ testimonial }: { testimonial: Testimonial }) => (
  <div className="relative w-[340px] flex-col rounded-xl border bg-background p-6 shadow">
    <div className="mb-4 flex items-center gap-0.5">
      {Array(5)
        .fill(0)
        .map((_, i) => (
          <Star key={i} className="size-4 shrink-0 fill-yellow-400 text-yellow-400" />
        ))}
    </div>
    <p
      className="mb-4 text-[15px] leading-relaxed text-muted-foreground"
      dangerouslySetInnerHTML={{ __html: testimonial.quote }}
    />
    <div className="flex items-center gap-3">
      <Image
        src={testimonial.avatar}
        alt={testimonial.name}
        width={40}
        height={40}
        className="size-10 rounded-full"
      />
      <div>
        <p className="text-sm font-semibold text-foreground">{testimonial.name}</p>
        <p className="text-xs text-muted-foreground">
          {testimonial.title} at {testimonial.company}
        </p>
      </div>
    </div>
  </div>
);

const Testimonials = () => {
  const columns = [
    testimonials.slice(0, 2),
    testimonials.slice(2, 4),
    testimonials.slice(4, 6),
    testimonials.slice(6, 8),
    testimonials.slice(8, 10),
  ];

  return (
    <section>
      <div className="px-2 sm:container">
        <div className="relative grid">
          <div className="absolute inset-y-0 block w-px bg-border"></div>
          <div className="absolute inset-y-0 right-0 w-px bg-border"></div>
          <div className="px-4 py-20 text-center">
            <h2 className="text-3xl font-semibold md:text-5xl">What people say</h2>
          </div>
          <div className="relative h-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
            <div className="flex animate-marquee-horizontal-lg flex-row gap-4 py-4 [--duration:90s] hover:[animation-play-state:paused]">
              {[...columns, ...columns].map((column, colIndex) => (
                <div key={colIndex} className="flex flex-col gap-4">
                  {column.map((testimonial) => (
                    <TestimonialCard key={testimonial.name} testimonial={testimonial} />
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="h-px w-full bg-border"></div>
    </section>
  );
};

export default Testimonials;