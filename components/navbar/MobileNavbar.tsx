'use client';

import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetHeader,
  SheetTitle,
} from '@/components/ui/sheet';
import { VisuallyHidden } from '@radix-ui/react-visually-hidden';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { navItems, socialIcons } from '@/constants';
import { Button } from '../ui/button';

const MobileNavbar = () => {
  const [openSheet, setOpenSheet] = useState(false);
  const [showSocials, setShowSocials] = useState(false);

  const handleLinkClick = () => {
    setOpenSheet(false);
    setShowSocials(false);
  };

  return (
    <div className="lg:hidden bg-black text-white px-8 py-4 flex items-center justify-between">
      <div className="flex items-center gap-8">
        <Sheet open={openSheet} onOpenChange={setOpenSheet}>
          <SheetTrigger>
            <Image
              src={'/icons/menu.svg'}
              alt="menu-icon"
              width={36}
              height={32}
            />
          </SheetTrigger>
          <SheetContent side="left" className="bg-black/20 text-white">
            <SheetHeader>
              <SheetTitle>
                <VisuallyHidden>Navigation Menu</VisuallyHidden>
              </SheetTitle>
            </SheetHeader>

            <div className="flex flex-col gap-6 mt-10 ml-10">
              <ul className="flex flex-col gap-4 text-base font-medium">
                {navItems.map(({ id, href, label }) => (
                  <li key={id}>
                    <Link
                      href={href}
                      onClick={handleLinkClick}
                      className="hover:underline"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </SheetContent>
        </Sheet>

        <Image
          src={'/icons/search.svg'}
          width={17}
          height={16}
          alt="search-icon"
          className="h-6 w-6 cursor-pointer"
        />
        <Image src="/icons/logo.png" width={70} height={44} alt="AGC Logo" />
      </div>

      <div className="relative flex items-center gap-2 cursor-pointer">
        <Image
          src="/icons/avatar.svg"
          width={30}
          height={30}
          alt="Avatar"
          className="rounded-full"
        />
        <Button
          className="bg-black p-0"
          onClick={() => setShowSocials((prev) => !prev)}
        >
          <Image
            src={'/icons/cheverondown.svg'}
            alt="ChevronDown-icon"
            width={12}
            height={9}
            className={` transition-transform duration-300 cursor-pointer ${
              showSocials ? 'rotate-180' : ''
            }`}
          />
        </Button>

        {/* DROPDOWN SOCIAL ICONS */}
        {showSocials && (
          <div className="absolute top-[120%] right-0 p-3 bg-[#D32C89]/20 rounded-md shadow-md z-50">
            <ul className="flex flex-col gap-3">
              {socialIcons.map(({ src, alt }) => (
                <li key={alt.toLowerCase()}>
                  <Image
                    src={src}
                    width={24}
                    height={24}
                    alt={alt}
                    className="cursor-pointer hover:opacity-80"
                    onClick={handleLinkClick}
                  />
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default MobileNavbar;
