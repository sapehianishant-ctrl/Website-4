export default function Footer() {
    return (
        <div className="w-full bg-[#f5f5f5]">
            
            <div className="max-w-[1440px] mx-auto flex flex-col lg:flex-row px-6 lg:px-20 py-10 lg:py-16">

                
                <div className="w-full lg:w-1/3 mb-10 lg:mb-0">
                    <img
                        className="w-32 mx-auto lg:mx-0 mb-6"
                        src="/logo.webp"
                        alt="Codebee Logo"
                    />
                    <p className="text-[#093364] max-w-sm mx-auto lg:mx-0 font-serif tracking-wider text-md font-medium text-center lg:text-left leading-relaxed">
                        We aim to bring superior quality business products and matchless customer service at very reasonable rates.
                    </p>
                </div>

               
                <div className="w-full lg:w-2/3 grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-left">
                   
                    <ul className="space-y-4">
                        <li className="text-[#093364] font-bold text-[18px] mb-6">Services</li>
                        <li className="text-[#495686] hover:text-[#093364] cursor-pointer">Web Development</li>
                        <li className="text-[#495686] hover:text-[#093364] cursor-pointer">Web & App Design</li>
                        <li className="text-[#495686] hover:text-[#093364] cursor-pointer">UI & UX Design</li>
                        <li className="text-[#495686] hover:text-[#093364] cursor-pointer">Digital Marketing</li>
                    </ul>

                    
                    <ul className="space-y-4">
                        <li className="text-[#093364] font-bold text-[18px] mb-6 ">Quick Links</li>
                        <li className="text-[#495686] hover:text-[#093364] cursor-pointer">Services</li>
                        <li className="text-[#495686] hover:text-[#093364] cursor-pointer">About Us</li>
                        <li className="text-[#495686] hover:text-[#093364] cursor-pointer">Portfolio</li>
                        <li className="text-[#495686] hover:text-[#093364] cursor-pointer">Contact Us</li>
                    </ul>

                    
                    <ul className="space-y-4">
                        <li className="text-[#093364] font-bold text-[18px] mb-6">Get in Touch</li>
                        <li className="text-[#495686]">team@codebee.com</li>
                        <li className="text-[#495686] max-w-[200px] mx-auto md:mx-0">
                            Mohali phase-8 industrial Area C-133 Sector 73, Punjab 160071
                        </li>
                        <li className="text-[#495686]">+91 8845881153</li>
                    </ul>
                </div>
            </div>

          
<div className="max-w-[1440px] mx-auto px-6 lg:px-20 pb-10">
   
    <div className="border-b-2 border-red-200 w-full mb-8"></div>

    
    <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-4 text-[#495686]">
        
       
        <p className="font-bold hover:text-[#093364] cursor-pointer text-center md:text-left">
            Privacy Policy
        </p>

       
        <p className="font-normal text-center whitespace-nowrap">
            © 2025 CodeBee. All rights reserved.
        </p>

        <div className="hidden md:block"></div>
    </div>
</div>
        </div>
    );
}