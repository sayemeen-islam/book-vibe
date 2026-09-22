"use client";
import BookListedCard from "@/components/shared/BookListedCard";
import { BookContext } from "@/context/BookContext";
import { IBook } from "@/types/books-type";
import React, { useContext } from "react";

const ListedBooksPage = () => {
  const { readBooks, wishlist } = useContext(BookContext);
  console.log(readBooks, "from read list");
  console.log(wishlist, "from wish list");

  return (
    <div className="container mx-auto mb-25">
      <div className=" rounded-3xl bg-amber-50 text-center px-8 py-5 md:px-16 lg:px-20 mt-10 mb-5 overflow-hidden  text-3xl md:text-4xl font-bold uppercase tracking-[0.2em] text-amber-600">
        Listed Books
      </div>

      {/* name of each tab group should be unique */}
      <div className="tabs tabs-lift">
        <input
          type="radio"
          name="my_tabs_3"
          className="tab"
          aria-label="Read Books"
          defaultChecked
        />
        <div className="tab-content bg-base-100 border-base-300 p-6">
          {readBooks.length > 0 ? (
            readBooks.map((book: IBook) => {
              return (
                <BookListedCard key={book.bookId} book={book}></BookListedCard>
              );
            })
          ) : (
            <div className="h-[50vh] flex justify-center items-center">
              {" "}
              <p className="text-center text-xl font-semibold ">
                Read books list is empty!
              </p>
            </div>
          )}
        </div>

        <input
          type="radio"
          name="my_tabs_3"
          className="tab"
          aria-label="Wishlist Books"
        />
        <div className="tab-content bg-base-100 border-base-300 p-6">
          {wishlist.length > 0 ? (
            wishlist.map((book: IBook) => {
              return (
                <BookListedCard key={book.bookId} book={book}></BookListedCard>
              );
            })
          ) : (
            <div className="h-[50vh] flex justify-center items-center">
              {" "}
              <p className="text-center text-xl font-semibold ">
                Wishlist books list is empty!
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ListedBooksPage;
