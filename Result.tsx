import React from 'react';
import Image from 'next/image';

interface StatItemProps {
  number: string;
  label: string;
  description: string;
}

const StatItem: React.FC<StatItemProps> = ({ number, label, description }) => (
  <div className="flex flex-row items-start gap-8 group">
    <div className="w-40 flex-shrink-0 text-center">
      <h3 className="text-4xl md:text-5xl font-bold text-amber-500 mb-1">
        {number}
      </h3>
      <p className="text-gray-700 font-medium text-sm md:text-base leading-tight">
        {label}
      </p>
    </div>
    <div className="hidden md:block w-[1px] bg-gray-200 self-stretch my-2" />
    <div className="flex-1">
      <p className="text-gray-500 text-sm md:text-base leading-relaxed">
        {description}
      </p>
    </div>
  </div>
);

const Results: React.FC = () => {
  const stats = [
    {
      number: "400+",
      label: "Projects Completed",
      description: "We have successfully delivered thousands of projects, ranging from small business websites to complex enterprise software solutions for clients worldwide."
    },
    {
      number: "500+",
      label: "Satisfied Clients",
      description: "Trusted by businesses across various industries. We pride ourselves on long-term partnerships and a track record of exceeding client expectations."
    },
    {
      number: "4+",
      label: "Years of Experience",
      description: "With over a decade of expertise in the IT industry, our team brings deep technical knowledge and creative problem-solving to every challenge."
    }
  ];

  return (
    <section className="bg-gray-50 py-16 md:py-24 px-6">
      <div className="max-w-7xl mx-auto">
        
        
        <div className="flex justify-end mb-12 md:mb-16">
          <div className="relative inline-block max-w-2xl text-left md:text-right">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0B1C39] leading-tight">
              Driving Results Through Innovation & Experience
            </h2>
            
            <div className="absolute -bottom-4 left-0 w-full flex justify-end">
              <svg 
                width="100%" 
                height="15" 
                viewBox="0 0 500 20" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
                className="w-full max-w-[650px]"
              >
                <path 
                  d="M1 11.5C51.5 11.5 50.5 1 101 1C151.5 1 150.5 11.5 201 11.5C251.5 11.5 250.5 1 301 1C351.5 1 350.5 11.5 401 11.5C451.5 11.5 450.5 1 501 1" 
                  stroke="#FBBF24" 
                  strokeWidth="4" 
                  strokeLinecap="round"
                />
              </svg>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center items-center">
            <div className="relative w-full aspect-[4/3] max-w-lg lg:max-w-full">
              <Image 
                src="/sectionimg1-01-01.svg" 
                alt="Business Collaboration Illustration"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>

          <div className="space-y-12 md:space-y-16">
            {stats.map((item, index) => (
              <StatItem 
                key={index}
                number={item.number}
                label={item.label}
                description={item.description}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Results;