import React from 'react';

const statsData = [
  {
    value: '54%',
    label: 'Increased conversion',
  },
  {
    value: '4x',
    label: 'Improved retention',
  },
  {
    value: '95%',
    label: 'Satisfaction rate',
  },
  {
    value: '442+',
    label: 'Customers in 85 countries',
  },
];

const Stats = () => {
  return (
    <section>
      <div className="h-px w-full bg-border" />
      <div className="px-2 sm:container">
        <div className="grid grid-cols-2 gap-px border-y bg-border md:grid-cols-4">
          {statsData.map((stat, index) => (
            <div key={index} className="bg-background py-8 text-center md:py-8 lg:py-12">
              <h4 className="text-3xl font-semibold md:text-5xl text-foreground">{stat.value}</h4>
              <p className="mt-2 text-sm text-muted-foreground md:mt-3 md:text-base">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="h-px w-full bg-border" />
    </section>
  );
};

export default Stats;