export default function Home() {
  return (
    <>
      <div className="relative w-full h-[500px] sm:h-[700px] lg:h-[900px]">
        
      
        <img
          src="/hero image.webp"
          alt="homeimg"
          className="w-full h-full mt-0object-cover"
        />

       
        <div
          className="
            absolute
            top-16 sm:top-24 lg:top-35
            left-4 sm:left-10 lg:ml-30
            right-4
            p-2
            w-auto lg:w-149
            font-Nunito
          "
        >
          <h1
            className="
              text-[28px] sm:text-[40px] lg:text-[58px]
              font-bold
              text-[#093364]
            "
          >
            Your Digital partner to create robust solutions for Web and Mobile
            
          </h1>
          

          <p className="text-[#666666] text-base sm:text-lg mt-5 font-normal">
            Being the most reliable mobile application development agency, we
            offer a complete set of web, mobile and design services to our
            customers.
          </p>

          <button
            type="button"
            className="
              text-white
              bg-yellow-400
              rounded-2xl
              w-40
              mt-8 sm:mt-12
              font-bold
              p-4
              hover:bg-[#093364]
            "
          >
            Get Started
          </button>
        </div>

      </div>
    </>
  );
}