import React from 'react';
import { IBook } from "@/types/books-type";
import Link from "next/link";
import BookCard from '@/components/shared/BookCard';

const getBook = async () => {
  try{
      const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/booksData.json`);
      const data = await res.json();
      return data;

  }catch(error){
    console.error("Error fetching books data:", error);
    return [];
  }
};

const BooksPage = async() => {
    const booksData = await getBook();
  return (
      <section className="container mx-auto my-[70px] px-4">
      {/* Section Heading */}
      <div className="mb-10 text-center">
        <p className="mb-2 text-3xl md:text-4xl font-bold uppercase tracking-[0.2em] text-amber-600">
          Explore All Books
        </p>

        {/* <h2 className="text-3xl font-bold text-[#131313] md:text-4xl">
          Find Your Next Favorite Book
        </h2>

        <p className="mx-auto mt-3 max-w-2xl text-gray-500">
          Discover timeless classics and captivating stories from authors around
          the world.
        </p> */}
      </div>

      {/* Books Grid */}
      <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3">
        {booksData.map((book:IBook) => (
          <BookCard key={book.bookId} book={book}></BookCard>
        ))}
      </div>

    </section>
  );
};

export default BooksPage;