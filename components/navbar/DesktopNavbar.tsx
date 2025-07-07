'use client';

import Link from 'next/link';
import Image from 'next/image';
import { navItems } from '@/constants';
import { getFormattedDate } from '@/lib/utils';

export const Navbar = () => {
  const today = getFormattedDate();

  return (
    <nav className="bg-[#D32C89] text-white py-4 px-8 h-11 flex justify-between items-center w-full z-0">
      <ul className="flex gap-6 text-sm font-medium">
        {navItems.map(({ id, href, label }) => (
          <li key={id}>
            <Link href={href} className="hover:border-b-2 text-[15px]">
              {label}
            </Link>
          </li>
        ))}
      </ul>

      {/* Right Section */}
      <div className="flex items-center gap-4">
        <div className="text-sm font-light">{today}</div>
        <span className="text-white opacity-50">|</span>
        <Image
          src={'/icons/instagram.png'}
          width={20}
          height={20}
          alt="Intagram"
        />
        <Image
          src={'/icons/facebook.png'}
          width={20}
          height={20}
          alt="Facebook"
        />
        <Image src={'/icons/x.png'} width={20} height={20} alt="X" />
        <Image src={'/icons/image.png'} width={20} height={20} alt="Image" />
        <Image
          src={'/icons/linkedin.png'}
          width={20}
          height={20}
          alt="Linkedin"
        />
      </div>
    </nav>
  );
};
