import React from "react";
import BookCard from "../shared/BookCard";
import { IBook } from "@/types/books-type";

const getBook = async () => {
  const res = await fetch("http://localhost:3000/booksData.json");
  const data = await res.json();
  return data;
};

const Books = async () => {
  const booksData = await getBook();

  return (
    <section className="container mx-auto my-[70px] px-4">
      {/* Section Heading */}
      <div className="mb-10 text-center">
        <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-amber-600">
          Explore Our Collection
        </p>

        <h2 className="text-3xl font-bold text-[#131313] md:text-4xl">
          Find Your Next Favorite Book
        </h2>

        <p className="mx-auto mt-3 max-w-2xl text-gray-500">
          Discover timeless classics and captivating stories from authors around
          the world.
        </p>
      </div>

      {/* Books Grid */}
      <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3">
        {booksData.slice(0,9).map((book:IBook) => (
          <BookCard key={book.bookId} book={book}></BookCard>
        ))}
      </div>
    </section>
  );
};

export default Books;
