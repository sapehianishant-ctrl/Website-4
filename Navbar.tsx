"use client";

import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <>
      
      <div className="w-full bg-black text-white text-sm">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center px-4 py-2 gap-2">
          
          
          <div className="flex items-center gap-2">
            <span>📞</span>
            <span className="font-semibold">
              88473 22901, 7986311170
            </span>
          </div>

          
          <div className="flex items-center gap-2">
            <span>✉️</span>
            <span className="font-semibold">
              team@codebeelab.com
            </span>
          </div>

         
          
        </div>
      </div>

      
      <div className="w-full bg-[#fefbf0]">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-2 py-1">

         
          <Link href="/">
            <Image
              src="/logo.webp"
              alt="CodeBee Logo"
              width={140}
              height={30}
              priority
            />
          </Link>

         
          <ul className="hidden md:flex gap-8 font-semibold text-black">
            <li><Link href="/" className="hover:text-orange-500">Home</Link></li>
            <li><Link href="/about" className="hover:text-orange-500">About Us</Link></li>
            <li><Link href="/services" className="hover:text-orange-500">Services</Link></li>
            <li><Link href="/portfolio" className="hover:text-orange-500">Portfolio</Link></li>
            <li><Link href="/blogs" className="hover:text-orange-500">Blogs</Link></li>
            <li><Link href="/industrialtraining" className="hover:text-orange-500">Industrial Training</Link></li>
            <li><Link href="/contact" className="hover:text-orange-500">Contact Us</Link></li>
          </ul>

          
          <Link
            href="/contact"
            className="hidden md:inline-block border-2 border-orange-400 text-black px-6 py-2 rounded-full hover:bg-orange-400 hover:text-white transition"
          >
            Get Quote
          </Link>
        </div>
      </div>
    </>
  );
}
