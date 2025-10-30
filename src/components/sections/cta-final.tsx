import React from 'react';

const CtaFinal = () => {
  return (
    <section 
      style={{
        backgroundImage: 'repeating-linear-gradient(-45deg, transparent, transparent 4px, rgba(0, 0, 0, 0.035) 4px, rgba(0, 0, 0, 0.035) 4.5px)',
      }}
    >
      <div className="px-2 sm:container">
        <div className="relative grid">
          <div className="absolute inset-y-0 block w-px bg-border"></div>
          <div className="absolute inset-y-0 right-0 w-px bg-border"></div>
          <div className="py-20 text-center">
            <h2 className="text-3xl font-semibold leading-9 tracking-tight">
              Ready to start?
            </h2>
            <div className="mt-8">
              <a
                href="https://dashboard.demo-v2.achromatic.dev/auth/sign-up"
                className="inline-flex items-center justify-center rounded-xl bg-primary px-6 py-2 text-sm font-medium text-primary-foreground shadow transition-colors h-10 hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
              >
                Start for free
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="h-px w-full bg-border"></div>
    </section>
  );
};

export default CtaFinal;