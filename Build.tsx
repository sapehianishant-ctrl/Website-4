export default function Build() {
  return (
    <section className="bg-white py-16 px-4 lg:px-20">
      <div
        className="
          max-w-7xl
          mx-auto
          flex
          flex-col
          lg:flex-row
          gap-12
          bg-[url('/image.png')]
          bg-no-repeat
          bg-right-top
          bg-[length:120px]
        "
      >
        {/* LEFT CARDS */}
        <div className="flex flex-col sm:flex-row lg:flex-col gap-10 flex-1">

          {/* CARD 1 */}
          <div className="rounded-xl shadow-xl p-6 text-center">
            <img
              src="/icon 1.png"
              className="w-12 mx-auto mb-6"
              alt="webapp"
            />
            <h2 className="text-[#093364] text-[22px] font-bold">
              Web & App Design
            </h2>
            <p className="text-[#343e61] mt-4 text-[15px]">
              We specialize in creating amazing apps for Android, iPhone and iPad.
            </p>
          </div>

          {/* CARD 2 */}
          <div className="rounded-xl shadow-xl p-6 text-center">
            <img
              src="/icon 2.png"
              className="w-12 mx-auto mb-6"
              alt="webdev"
            />
            <h2 className="text-[#093364] text-[22px] font-bold">
              Web Development
            </h2>
            <p className="text-[#343e61] mt-4 text-[15px]">
              Codebeelab is a reputed web development company.
            </p>
          </div>

          {/* CARD 3 */}
          <div className="rounded-xl shadow-xl p-6 text-center">
            <img
              src="/icon 3.png"
              className="w-14 mx-auto mb-6"
              alt="marketing"
            />
            <h2 className="text-[#093364] text-[22px] font-bold">
              Digital Marketing
            </h2>
            <p className="text-[#343e61] mt-4 text-[15px]">
              Digital marketing, also known as online marketing.
            </p>
          </div>
        </div>

        {/* RIGHT TEXT AREA */}
        <div className="flex-1 flex flex-col justify-center text-center lg:text-left">
          <h1 className="text-[26px] sm:text-[32px] lg:text-[40px] font-bold text-[#093364]">
            Build your career by learning high-paying skills and programming languages
          </h1>

          <p className="text-[#666666] mt-6 text-[15px] sm:text-[17px]">
            Being the most reliable mobile application development agency, we offer a complete
            set of web, mobile and design services to our customers.
          </p>

          <button
            type="button"
            className="
              mt-8
              w-fit
              mx-auto
              lg:mx-0
              px-8
              py-3
              bg-yellow-400
              text-white
              rounded-2xl
              font-bold
              hover:bg-[#093364]
              transition
            "
          >
            More Services
          </button>
        </div>
      </div>
    </section>
  );
}
