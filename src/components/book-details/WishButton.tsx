"use client"
import { BookContext } from "@/context/BookContext";
import { IBook } from "@/types/books-type";
import React, { useContext } from "react";

const WishButton = ({ book }: { book: IBook }) => {
  const { wishlist, setWishlist } = useContext(BookContext);

  const handleWishlistButton = () => {
    setWishlist([...wishlist, book]);
  };
  return <button className="btn btn-outline rounded-lg px-7" onClick={handleWishlistButton}>Wishlist</button>;
};

export default WishButton;
