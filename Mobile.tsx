export default function Mobile() {
  return (
    <>
      
      <div className="relative w-screen font-Satoshi Sans-serif">

       
        <img
          src="https://codebeelab.com/treefence/storage/2025/12/Untitled-design-2025-12-11T114055.388-scaled.png"
          className="w-full h-screen object-cover mt-25"
          alt="background"
        />

        
        <div
          className="
            absolute
            inset-0
            flex
            flex-col lg:flex-row
            items-center
            justify-center
            px-6 lg:px-24
            bg-black/50
          "
        >
          
          <img
            src="/phone image.webp"
            className="w-[260px] sm:w-[320px] lg:w-[420px] mb-8 lg:mb-0 lg:mr-20"
            alt="phone"
          />

          <div className="max-w-2xl text-center lg:text-left text-white">
            <h4 className="text-[28px] sm:text-[36px] lg:text-[50px] font-medium">
              Mastering Mobile: Android & iOS App Development
            </h4>

            <p className="text-gray-300 mt-5 font-Poppins tracking-wider">
              At CodebeeLab, we transform your visionary ideas into powerful,
              intuitive mobile applications. We specialize in native
              (Swift/Kotlin) and cross-platform (React Native/Flutter)
              development, delivering high-performance apps for both the{" "}
              <b>Apple App Store</b> and <b>Google Play Store</b>.
            </p>

            <button
              className="
                mt-8
                bg-yellow-400
                text-black
                font-semibold
                px-10
                py-3
                rounded-full
                hover:bg-[#093364]
                transition
              "
            >
              Read More
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
