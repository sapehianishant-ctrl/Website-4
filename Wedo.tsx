import Image from "next/image";

const Wedo = () => {
  const steps = [
    {
      id: "01",
      title: "Analyze & Plan",
      desc: "We begin by listening. Our team conducts a thorough IT health check and needs assessment to pinpoint pain points and opportunities",
     
      blobPath: "M15,45 Q5,25 25,10 Q50,0 75,15 Q95,35 80,65 Q65,90 35,85 Q10,75 15,45 Z",
      color: "#9333ea",
    },
    {
      id: "02",
      title: "Validate & Refine",
      desc: "Before large-scale deployment, we often build a proof of concept (POC) or a pilot program. This critical phase allows us.",
      blobPath: "M20,40 Q10,15 40,10 Q70,5 85,30 Q100,60 70,85 Q40,100 15,70 Q5,55 20,40 Z",
      color: "#06b6d4",
    },
    {
      id: "03",
      title: "Execute & Deliver",
      desc: "Our certified engineers and project managers take over. We utilize modern tools and project management methodologies",
      blobPath: "M25,30 Q15,5 50,5 Q85,5 90,35 Q95,70 60,90 Q20,105 10,65 Q5,45 25,30 Z",
      color: "#f97316",
    },
    {
      id: "04",
      title: "Handover & Evolve",
      desc: "We ensure a smooth transition by providing detailed documentation and thorough staff training. Following deployment",
      blobPath: "M15,45 Q5,25 25,10 Q50,0 75,15 Q95,35 80,65 Q65,90 35,85 Q10,75 15,45 Z",
      color: "#8b5cf6",
    },
  ];

  return (
    <>
      
      <section className="w-full bg-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12">
            <div className="flex justify-center">
              <Image src="/wedo image.png" alt="What We Do" width={500} height={500} className="w-full max-w-md" priority />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0B1C39] mb-4">
                What We Do
                <span className="block w-20 h-1 bg-yellow-400 mt-2 rounded-full"></span>
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Where innovation meets expertise. We are a dynamic IT service provider committed to transforming businesses through cutting-edge technology and tailored digital solutions.
              </p>
              <button className="bg-yellow-400 hover:bg-yellow-500 text-white px-8 py-3 rounded-full font-medium transition">
                Read More
              </button>
            </div>
          </div>
        </div>
      </section>

     
      <section className="relative w-full h-[600px] md:h-[850px] flex flex-col items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src="/Learn.png" alt="Office Background" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        <div className="relative z-20 w-full max-w-7xl mx-auto px-6 text-center text-white pt-12 md:pt-20">
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight mb-8">
            Learn by Doing with Real -<br /> World- Projects
          </h2>
        </div>
        <div className="relative z-10 w-full max-w-5xl px-4 mt-auto">
          <div className="relative w-full aspect-[16/11]">
            <Image src="/ipad.png" alt="Device Mockups" fill className="object-contain object-bottom" />
          </div>
        </div>
      </section>

      
      <section className="w-full bg-black py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-16 relative">
            {steps.map((step, index) => (
              <div key={index} className="flex flex-col items-center text-center relative group">
                
               
                <div className="relative w-24 h-24 mb-8">
                 
                  <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full drop-shadow-lg">
                    <path d={step.blobPath} fill={step.color} />
                  </svg>
                  
                  
                  <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full scale-110 rotate-12 opacity-50">
                    <path 
                      d={step.blobPath} 
                      fill="none" 
                      stroke="white" 
                      strokeWidth="1.5" 
                      strokeDasharray="4 4" 
                    />
                  </svg>

                 
                  <div className="absolute inset-0 flex items-center justify-center text-white font-bold text-2xl z-10">
                    {step.id}
                  </div>

                
                  {index !== steps.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 left-[110%] w-24 h-8 -translate-y-1/2 z-0">
                      <svg width="100%" height="100%" viewBox="0 0 100 30" fill="none">
                        <path 
                          d="M5 15 Q 25 5, 50 15 T 90 15" 
                          stroke="#06b6d4" 
                          strokeWidth="2" 
                          strokeLinecap="round" 
                          className="animate-pulse"
                        />
                       
                      </svg>
                    </div>
                  )}
                </div>


                <h3 className="text-white text-2xl font-bold mb-4 tracking-tight">{step.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed max-w-[250px]">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Wedo;