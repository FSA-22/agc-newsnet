'use client';

import { banners } from '@/constants';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { BannerItem } from '@/types';

const HeroBanner = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % banners.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="banner-container ">
      {banners.map(({ src, id }: BannerItem) => (
        <div
          key={id}
          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
            id === current ? 'opacity-100' : 'opacity-0'
          } flex justify-center items-center`}
        >
          <Image
            src={src}
            width={800}
            height={200}
            alt={`Advertisement ${id + 1}`}
            className="object-contain"
          />
        </div>
      ))}
    </div>
  );
};

export default HeroBanner;
