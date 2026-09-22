"use client";
import { BookContext } from "@/context/BookContext";
import { IBook } from "@/types/books-type";

import React, { useContext } from "react";

const ReadButton = ({ book }: { book: IBook }) => {
  const { readBooks, setReadBooks } = useContext(BookContext);

  const handleReadButton = () => {
    setReadBooks([...readBooks, book]);
  };

  return (
    <button
      className="btn rounded-lg border-0 bg-[#131313] px-7 text-white hover:bg-amber-600"
      onClick={handleReadButton}
    >
      Read
    </button>
  );
};

export default ReadButton;
