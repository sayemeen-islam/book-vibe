import { IBook } from "@/types/books-type";
import Image from "next/image";
import React from "react";

interface IBookCardProps {
  book: IBook;
}

const BookCard = ({ book }: IBookCardProps) => {
  return (
    <div
      key={book.bookId}
      className="group overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
    >
      {/* Book Image */}
      <div className="relative flex h-80 items-center justify-center bg-[#f8f5ef] p-8">
        <Image
          src={book.image}
          alt={book.bookName}
          width={400}
          height={400}
          className="h-full w-auto object-contain shadow-lg transition-transform duration-300 group-hover:scale-105"
        />

        {/* Category */}
        <span className="absolute left-4 top-4 rounded-full bg-white px-3 py-1 text-xs font-semibold text-amber-700 shadow-sm">
          {book.category}
        </span>
      </div>

      {/* Card Content */}
      <div className="p-5">
        <div className="mb-2 flex items-center justify-between">
          <h3 className="text-xl font-bold text-[#131313]">{book.bookName}</h3>

          <span className="flex items-center gap-1 text-sm font-semibold text-amber-500">
            ★ {book.rating}
          </span>
        </div>

        <p className="mb-4 text-sm text-gray-500">
          by <span className="font-medium text-gray-700">{book.author}</span>
        </p>

        {/* Tags */}
        <div className="mb-5 flex flex-wrap gap-2">
          {book.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-600"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Book Info */}
        <div className="mb-5 grid grid-cols-2 gap-3 border-y border-gray-100 py-4 text-sm">
          <div>
            <p className="text-gray-400">Pages</p>
            <p className="font-semibold text-gray-700">{book.totalPages}</p>
          </div>

          <div>
            <p className="text-gray-400">Published</p>
            <p className="font-semibold text-gray-700">
              {book.yearOfPublishing}
            </p>
          </div>
        </div>

        {/* Button */}
        <button className="btn w-full rounded-lg border-0 bg-[#131313] text-white hover:bg-amber-600">
          View Details
        </button>
      </div>
    </div>
  );
};

export default BookCard;
