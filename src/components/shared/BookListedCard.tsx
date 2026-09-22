
import { IBook } from '@/types/books-type';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const BookListedCard = ({book}:{book:IBook}) => {

  return (

<div className="group flex flex-col gap-6 rounded-2xl border border-gray-100 bg-white p-5 lg:px-20 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg sm:flex-row mb-4">

  {/* Book Cover */}
  <div className="flex h-64 shrink-0 items-center justify-center rounded-xl bg-[#f8f5ef] p-5 sm:h-56 sm:w-40">
    <Image
      src={book.image}
      alt={book.bookName}
      width={300}
      height={300}
      className="h-full w-auto object-contain shadow-md transition-transform duration-300 group-hover:scale-105"
    />
  </div>

  {/* Book Info */}
  <div className="flex flex-1 flex-col justify-center">

    {/* Category */}
    <span className="mb-3 w-fit rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold text-amber-700">
      {book.category}
    </span>

    {/* Title */}
    <h2 className="text-2xl font-bold text-[#131313]">
      {book.bookName}
    </h2>

    {/* Author */}
    <p className="mt-1 text-gray-500">
      by <span className="font-medium text-gray-700">{book.author}</span>
    </p>

    {/* Tags */}
    <div className="mt-4 flex flex-wrap gap-2">
      {book.tags.map((tag) => (
        <span
          key={tag}
          className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-600"
        >
          {tag}
        </span>
      ))}
    </div>

    {/* Book Information */}
    <div className="mt-5 flex flex-wrap gap-x-6 gap-y-2 text-sm text-gray-500">
      <span>
        ⭐ <strong className="text-gray-700">{book.rating}</strong>
      </span>

      <span>
        <strong className="text-gray-700">{book.totalPages}</strong> pages
      </span>

      <span>
        <strong className="text-gray-700">{book.yearOfPublishing}</strong>
      </span>

      <span>{book.publisher}</span>
    </div>
  </div>

  {/* Action */}
  <div className="flex  items-center sm:w-32">
 
    <Link href={`/books/${book.bookId}`}>        <button className="btn w-full rounded-lg border-0 bg-[#131313] text-white hover:bg-amber-600">
          View Details
        </button></Link>
  </div>

</div>


  );
};

export default BookListedCard;