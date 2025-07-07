'use client';

import Image from 'next/image';
import { Search } from 'lucide-react';
import { navItems, heroItems, socialIcons } from '@/constants';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="px-4 lg:px-20 bg-[#2D2A2A] max-md:py-8">
      <div className="footer">
        <div className="flex justify-between items-center mb-6 md:mt-6">
          <Image src="/icons/logo.png" width={90} height={30} alt="AGC Logo" />

          <div className="flex gap-4">
            {socialIcons.map(({ src, alt }) => (
              <Image
                key={alt}
                src={src}
                width={24}
                height={24}
                alt={alt}
                className="cursor-pointer hover:opacity-80"
              />
            ))}
          </div>
        </div>

        <div className="relative w-full mb-8">
          <input
            type="text"
            placeholder="Search AGC Newsnet"
            className="w-full py-3 pl-4 pr-10 rounded placeholder-[#3a3838] bg-white text-sm outline-none"
          />
          <Search className="absolute right-3 top-1/2 -translate-y-1/2 text-[#3a3838] h-4 w-4" />
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-y-6 text-sm font-medium w-full">
          {[
            ...navItems,
            ...heroItems.map(({ id, label, href }) => ({
              id,
              label,
              href,
            })),
          ].map((item) => (
            <a
              key={item.id}
              href={item.href}
              className="hover:text-[#D32C89] transition-colors"
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="text-center text-xs opacity-70 lg:text-left py-6 mt-6">
          © {currentYear} AGC Newsnet. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
