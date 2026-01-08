export default function () {
  return (
    <>
      <div className="relative w-full h-[60vh] sm:h-[70vh] md:h-screen">

        {/* Background Image */}
        <img
          src="/training.webp"
          alt="learn"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* Content */}
        <div className="relative z-10 flex flex-col justify-center items-center text-center h-full px-4">
          <h1 className="text-white text-4xl sm:text-6xl md:text-7xl font-bold mb-4 font-serif ">
            Industrial Training
          </h1>

          <p className="text-gray-300 text-base sm:text-lg md:text-xl max-w-3xl font-serif">
            Welcome to CodeBeeLab, where innovation meets expertise. We are a dynamic IT service provider committed to transforming businesses through cutting-edge technology and tailored digital solutions.
          </p>

          <button className="mt-6 px-6 py-2 sm:px-8 sm:py-3 text-white active:bg-gray-800 bg-yellow-500 hover:bg-gray-800 font-semibold text-sm sm:text-lg ">
            Contact US
          </button>
        </div>

      </div>
      <div className="bg-white font-serif">
        <div className="section2 bg-white px-20 py-16
                max-sm:px-5 max-sm:py-10">

          <div className="flex items-start gap-16
                  max-sm:flex-col max-sm:gap-10 max-sm:items-center">

            {/* Image */}
            <img
              src="/section-2.webp"
              alt="section2"
              className="w-[450px] h-150 ml-40
                 max-sm:w-full max-sm:h-auto max-sm:ml-0"
            />

            {/* Text Area */}
            <div className="flex-1 max-sm:w-full">

              <h2 className="text-[50px] font-serif font-bold text-[#093364] mb-6
                     max-sm:text-[32px] max-sm:text-center">
                A Few Words
              </h2>

              <p className="text-[#2F5270] text-lg leading-relaxed font-serif w-143 text-left
                    max-sm:w-full max-sm:text-center max-sm:text-base">
                We are a team of passionate professionals committed to delivering exceptional IT services and training programs. Our goal is to empower individuals and organizations with the skills and knowledge they need to thrive in the digital world.
              </p>

              <p className="text-gray-500 text-[19px] w-143 mt-10 font-serif
                    max-sm:w-full max-sm:text-center max-sm:text-base">
                At <span className="font-bold text-gray-800">CodebeeLab</span>, we are dedicated to bridging the gap between theoretical knowledge and real-world application in the <span className="font-bold text-gray-700">IT sector</span>. We empower businesses with cutting-edge <span className="font-bold text-gray-700">IT Solutions</span> and equip future professionals with <span className="font-bold text-gray-700">intensive Industrial Training</span>. Our mission is to cultivate innovation, foster technical excellence, and drive measurable success for our clients and trainees alike
              </p>

              <button
                type="button"
                className="text-left mt-8 p-2 w-100 rounded-xl text-white bg-yellow-500 hover:bg-gray-800 text-md
                   max-sm:w-full max-sm:text-center">
                85.00% Work Success
              </button>
              <br/>
              
              <button
                type="button"
                className="text-left mt-7 p-2 w-110 rounded-xl text-white bg-yellow-500 hover:bg-gray-800 text-md
                   max-sm:w-full max-sm:text-center gap-20">
                90.00% Work Success
              </button>



              {/* <div className="flex gap-10
                      max-sm:flex-col max-sm:items-center max-sm:gap-6">

       
        <div className="flex items-center gap-4 mt-10">
          <svg xmlns="http://www.w3.org/2000/svg" width="39" height="39" viewBox="0 0 39 39" fill="none">
            <rect width="39" height="39" rx="8.14925" fill="#E85477" />
            <path d="M26.0065 12.4006C26.3931 12.4006 26.7069 12.7144 26.7069 13.101V15.7321L25.3062 17.1327V13.8013H15.5016V25.0065H25.3062V23.075L26.7069 21.6744V25.7068C26.7069 26.0934 26.3931 26.4072 26.0065 26.4072H14.8013C14.4147 26.4072 14.101 26.0934 14.101 25.7068V13.101C14.101 12.7144 14.4147 12.4006 14.8013 12.4006H26.0065Z" fill="white"/>
          </svg>
          <p className="text-[#2F5270] text-xl font-bold">
            IT Solution
          </p>
        </div>

      
        <div className="flex items-center gap-4 mt-10">
          <svg xmlns="http://www.w3.org/2000/svg" width="39" height="39" viewBox="0 0 39 39" fill="none">
            <rect width="39" height="39" rx="8.14925" fill="#9683FF"/>
            <path d="M23.2802 12.8484V14.249H25.3861C25.7698 14.249 26.0815 14.5607 26.0815 14.9445V26.1595C26.0815 26.5433 25.7698 26.8549 25.3861 26.8549H14.171C13.7873 26.8549 13.4756 26.5433 13.4756 26.1595V14.9445C13.4756 14.5607 13.7873 14.249 14.171 14.249H16.2769V12.8484H23.2802Z" fill="white"/>
          </svg>
          <p className="text-[#2F5270] text-xl font-bold">
            IT Consultant
          </p>
        </div>

      </div> */}
            </div>
          </div>
        </div>

      </div>
      <div className="sectio3 bg-black pb-20 w-full h-full font-serif">
        <div className="text ml-10 mt-10">
          <h1 className="text-white text-[40px] pt-14 font-bold">Our Experties field</h1>
          <p className="text-gray-300 text-[20px] pt-5   p-8 ">At CodeBeeLab, we empower learners to acquire in-demand skills in today’s tech-driven world. Whether you’re a beginner or looking to enhance your expertise, our carefully designed training programs help you develop a solid foundation in various fields of technology. Explore our diverse courses and start your journey to success!</p>

        </div>

        <div className="max-w-7xl mx-auto px-4">

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

            {/* Card 1 */}
            <div className="   rounded-xl p-5 shadow-sm hover:shadow-lg transition">
              <img src="/tranning-1.webp" className="rounded-xl w-full " />
              <h4 className="text-[22px] mt-4 font-bold text-white hover:text-blue-500">
                Digital marketing
              </h4>
              <p className="text-[#D9D9D9] mt-4">
                Digital marketing also known as online marketing is the practice of promoting brands, products, or services through the internet
              </p>
              <button className="mt-5 text-white px-6 py-2 border-2 rounded-tr-4xl border-yellow-400 hover:bg-yellow-500 transition active:bg-yellow-500">
                Read More...
              </button>
            </div>
            {/* 2 */}
            <div className="   rounded-xl p-5 shadow-sm hover:shadow-lg transition">
              <img src="/UI UX.webp" className="rounded-xl w-full " />
              <h4 className="text-[22px] mt-4 font-bold text-white hover:text-blue-500">
                UI & UX
              </h4>
              <p className="text-[#D9D9D9] mt-4">
                Human-Centered Design Solutions. We bridge the gap between user needs and business goals. CodeBee Lab applies Design Thinking principles to create intuitive
              </p>
              <button className="mt-5 text-white px-6 py-2 border-2 rounded-tr-4xl border-yellow-400 hover:bg-yellow-500 transition active:bg-yellow-500">
                Read More...
              </button>
            </div>
            {/* 3 */}
            <div className="   rounded-xl p-5 shadow-sm hover:shadow-lg transition">
              <img src="/CMS.webp" className="rounded-xl w-full " />
              <h4 className="text-[22px] mt-4 font-bold text-white hover:text-blue-500">
                CMS Development
              </h4>
              <p className="text-[#D9D9D9] mt-4">
                Human-Centered Design Solutions. We bridge the gap between user needs and business goals. CodeBee Lab applies Design Thinking principles to create intuitive
              </p>
              <button className="mt-5 text-white px-6 py-2 border-2 rounded-tr-4xl border-yellow-400 hover:bg-yellow-500 transition active:bg-yellow-500">
                Read More...
              </button>
            </div>
            {/* 4 */}
            <div className="   rounded-xl p-5 shadow-sm hover:shadow-lg transition">
              <img src="/APP.webp" className="rounded-xl w-full " />
              <h4 className="text-[22px] mt-4 font-bold text-white hover:text-blue-500">
                App Development
              </h4>
              <p className="text-[#D9D9D9] mt-4">
                Transfroming Ideas into mobile Experiences In a mobile-first world, your business needs to bt where your custmers are &nbsp.
              </p>
              <button className="mt-5 text-white px-6 py-2 border-2 rounded-tr-4xl border-yellow-400 hover:bg-yellow-500 transition active:bg-green-200">
                Read More...
              </button>
            </div>
            {/* 5 */}
            <div className="   rounded-xl p-5 shadow-sm hover:shadow-lg transition">
              <img src="/WEB.webp" className="rounded-xl w-full " />
              <h4 className="text-[22px] mt-4 font-bold text-white hover:text-blue-500">
                Web Design
              </h4>
              <p className="text-[#D9D9D9] mt-4">
                Crafting Digital Experience Your Website is yopur digital storefront. codeBee lab combines artistic creativity with strategic UX Design
              </p>
              <button className="mt-5 text-white px-6 py-2 border-2 rounded-tr-4xl border-yellow-400 hover:bg-yellow-500 transition active:bg-yellow-500">
                Read More...
              </button>
            </div>
            {/* 6 */}
            <div className="   rounded-xl p-5 shadow-sm hover:shadow-lg transition">
              <img src="/tranning-1.webp" className="rounded-xl w-full " />
              <h4 className="text-[22px] mt-4 font-bold text-white hover:text-blue-500">
                Digital marketing
              </h4>
              <p className="text-[#D9D9D9] mt-4">
                Digital marketing also known as online marketing is the practice of promoting brands, products, or services through the internet
              </p>
              <button className="mt-5 text-white px-6 py-2 border-2 rounded-tr-4xl border-yellow-400 hover:bg-yellow-500 transition active:bg-yellow-500">
                Read More...
              </button>
            </div>
          </div>
        </div>


      </div>
   <div className="relative flex flex-col lg:flex-row  items-start bg-white font-serif 
                ml-5 lg:ml-50 mt-10 lg:mt-15 pb-20 gap-10 pl-25">

  {/* IMAGE SECTION */}
 <div className="relative w-fit mx-auto lg:mx-0 gap-30">
  <img
    src="/time.svg"
    alt="time"
    className="
      w-[320px]
      sm:w-[420px]
      lg:w-150
      
      h-auto
      rounded
      object-contain
    "
  />

    {/* Overlay */}
    <div className="absolute inset-6 bg-white/10 rounded"></div>

    <div className="absolute inset-0 text-white px-6 sm:px-10 py-10 sm:py-12">
      <h1 className="text-[22px] sm:text-[26px] lg:text-[30px] font-bold mb-6">
        Working Hours
      </h1>

      <div className="space-y-2 sm:space-y-8 text-[14px] sm:text-[16px] lg:text-[18px]">
        <div className="flex justify-between">
          <span>Monday</span>
          <span>10:00 AM – 6:00 PM</span>
        </div>
        <div className="flex justify-between">
          <span>Tuesday</span>
          <span>10:00 AM – 6:00 PM</span>
        </div>
        <div className="flex justify-between">
          <span>Wednesday</span>
          <span>10:00 AM – 6:00 PM</span>
        </div>
        <div className="flex justify-between">
          <span>Thursday</span>
          <span>10:00 AM – 6:00 PM</span>
        </div>
        <div className="flex justify-between">
          <span>Friday</span>
          <span>10:00 AM – 6:00 PM</span>
        </div>
        <div className="flex justify-between">
          <span>Saturday</span>
          <span>10:00 AM – 6:00 PM</span>
        </div>
        <div className="flex justify-between">
          <span className="text-red-400">Sunday</span>
          <span className="text-red-400">Closed</span>
        </div>
      </div>
    </div>
  </div>

  {/* TEXT AREA */}
  <div className="textarea relative mt-5 lg:mt-20 max-w-md text-center lg:text-left px-4 lg:px-0">
    <h1 className="text-red-500 text-[28px] lg:text-[35px] font-serif">
      Our-Feature
    </h1>

    <h3 className="text-black font-serief font-normal 
                   text-[30px] sm:text-[38px] lg:text-[50px]">
      Master In-Demand Tech Skills with Industrial Training
    </h3>

    <p className="text-gray-400 font-sans-serif text-[16px] sm:text-[18px] lg:text-[19px] 
                  w-full lg:w-160 mt-5">
      Bridge the gap between academics and industry standards. At Codebee Lab,
      we provide hands-on experience with real-world projects, guided by expert
      mentors to prepare you for a successful career in IT.
    </p>
  </div>

</div>


<div className="bg-[#f4f5f6] flex flex-wrap gap-10 justify-center items-start py-12">

  {/* LEFT TEXT */}
  <div className="text w-60 ml-20 mt-10">
    <h2 className="text-black font-Recoleta font-normal text-[20px] leading-relaxed">
      Your ultimate IT Solution <br />
      Transform Your Career with Codebee Lab's
    </h2>

    <button
      type="button"
      className="text-white bg-yellow-500 px-4 py-2 mt-10 hover:bg-orange-500"
    >
      OUR SERVICES
    </button>
  </div>

  {/* CARD 1 */}
  <div className="mt-6 p-10 card w-80 border border-yellow-400 text-center flex flex-col">
    <h1 className="text-black font-serif font-bold text-[16px] mt-5">
      6 Weeks Industrial Training
    </h1>

    <p className="text-[16px] font-serif text-gray-400 mt-5 flex-grow">
      Gain hands-on experience and industry skills in just 6 weeks! Boost your
      career in the industry.
    </p>

    <button
      type="button"
      className="mt-8 bg-yellow-500 text-white px-4 py-2 hover:bg-orange-500"
    >
      Click Here
    </button>
  </div>

  {/* CARD 2 */}
  <div className="mt-6 p-9 card w-80 border border-yellow-400 text-center flex flex-col">
    <h1 className="text-black font-serif font-bold text-[16px] mt-5">
      3 Months Industrial Training
    </h1>

    <p className="text-[16px] font-serif text-gray-400 mt-5 flex-grow">
      Master industry skills with our 3-month practical training program in the
      Codebee.
    </p>

    <button
      type="button"
      className="mt-8 bg-yellow-500 text-white px-4 py-2 hover:bg-orange-500"
    >
      Click Here
    </button>
  </div>

  {/* CARD 3 */}
  <div className="mt-6 p-10 card w-80 border border-yellow-400 text-center flex flex-col mb-20">
    <h1 className="text-black font-serif font-bold text-[16px] mt-5">
      6 Month Industrial Training
    </h1>

    <p className="text-[16px] font-serif text-gray-400 mt-5 flex-grow">
      Advance your career with 6 months of industrial training and live project
      experience.
    </p>

    <button
      type="button"
      className="mt-8 bg-yellow-500 text-white px-4 py-2 hover:bg-orange-500"
    >
      Click Here
    </button>
  </div>

</div>

<div className="bg-white flex flex-col lg:flex-row mb-20 gap-0 px-4">

  {/* LEFT FORM SECTION */}
  <div className="textarea bg-[#04265f] mt-10 lg:ml-50 w-full lg:w-150 h-auto lg:h-130 p-6">

    {/* Name & Email */}
    <div className="flex flex-col sm:flex-row gap-6 mt-10 sm:mt-20 sm:ml-20">
      <p className="bg-[#f8974821] p-3 text-white w-full sm:w-50">
        Your Name
      </p>
      <p className="bg-[#f8974821] p-3 text-white w-full sm:w-50">
        example@email.com
      </p>
    </div>

    {/* Other Fields */}
    <div className="flex flex-col mt-10 sm:ml-20 gap-8">
      <p className="bg-[#f8974821] pb-0 p-4 text-white w-full sm:w-110">
        Your Contact Number
      </p>

      <p className="bg-[#f8974821] p-4 text-white w-full sm:w-110">
        Your Message Subject
      </p>

      <p className="bg-[#f8974821] p-4 text-white w-full sm:w-110">
        Your Message Here
      </p>

      <button
        type="button"
        className="w-full sm:w-110 p-3 bg-yellow-500 text-white hover:bg-orange-500 transition "
      >
        Submit
      </button>
    </div>
  </div>

  {/* RIGHT CONTACT CARD */}
  <div className="card bg-white w-full lg:w-111 shadow-xl mt-10 px-6 lg:pl-10 pb-10 ml-50">
    <h1 className="text-black text-[30px] font-serif font-bold mt-10">
      Contact With Us!
    </h1>

    <h3 className="text-[#4E4E4E] mt-10 font-serif text-[25px] font-bold">
      Phone Number
    </h3>
    <p className="text-gray-400">
      +91 8847 32201, +91 7986311170
    </p>

    <h3 className="text-[#4E4E4E] mt-10 font-serif text-[25px] font-bold">
      Gmail
    </h3>
    <p className="text-gray-400">
      team@codebeelab.com
    </p>

    <h3 className="text-[#4E4E4E] mt-10 font-serif text-[25px] font-bold">
      Location
    </h3>
    <p className="text-gray-400">
      Mohali Phase-8, Industrial Area, C-133 Sector 73, Punjab 160071.
    </p>
  </div>

</div>





    </>
  )
}