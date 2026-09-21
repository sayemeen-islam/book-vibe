import Image from 'next/image';
import React from 'react';
import BannerImg from '@/assets/hero_img.jpg'

const Banner = () => {
  return (
<div className="container mx-auto my-12 px-4">
  <div className="flex flex-col md:flex-row items-center justify-between gap-10 rounded-3xl bg-amber-50 px-8 py-12 md:px-16 lg:px-20 overflow-hidden">

    {/* Text */}
    <div className="space-y-7 max-w-xl">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-700">
        Discover your next read
      </p>

      <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight text-[#131313]">
        Books to freshen up
        <br />
        your bookshelf
      </h1>

      <p className="max-w-md text-base leading-7 text-gray-600">
        Explore stories, ideas, and unforgettable characters waiting to
        become part of your collection.
      </p>

      <a
        href="#books"
        className="btn rounded-lg border-0 bg-[#131313] px-7 text-white hover:bg-amber-700"
      >
        View The List
      </a>
    </div>

    {/* Image */}
    <div className="flex justify-center">
      <Image
        src={BannerImg}
        alt="A collection of books"
        className="w-64 md:w-80 lg:w-96 object-contain drop-shadow-xl"
      />
    </div>

  </div>
</div>
  );
};

export default Banner;