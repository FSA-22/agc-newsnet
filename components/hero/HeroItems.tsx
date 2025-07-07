'use client';

import Image from 'next/image';
import Link from 'next/link';
import { heroCategories, heroItems } from '@/constants';
import HeroBanner from './Banner';

const HeroSection = () => {
  return (
    <section className="relative bg-white lg:bg-black text-white h-[400px] w-full">
      <HeroBanner />
      <div className="hero-bottom">
        <div className="flex items-center gap-2">
          <Image src="/icons/logo.png" width={90} height={30} alt="AGC Logo" />

          <ul className="flex gap-4 text-sm font-medium">
            {heroItems.map(({ id, href, label }) => (
              <li key={id}>
                <Link href={href} className="px-2 hover-underline">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex items-center gap-4">
          <div className="w-px h-6 bg-white/30" />
          <ul className="flex gap-3 text-sm font-medium">
            {heroCategories.map(({ id, label, href }) => (
              <li key={id} className="px-2 hover-underline cursor-pointer">
                {label}
              </li>
            ))}
          </ul>
          {/* Search Icon */}
          <Image
            src={'/icons/search.svg'}
            width={17}
            height={16}
            alt="Search-Icon"
            className=" cursor-pointer"
          />
          {/* Auth Links */}
          <Link href="/login" className="hover-underline">
            Login
          </Link>
          /
          <Link href="/login" className="hover-underline">
            Sign Up
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
