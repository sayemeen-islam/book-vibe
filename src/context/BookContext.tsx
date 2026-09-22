"use client";
import { IBook } from "@/types/books-type";
import React, {
  createContext,
  ReactNode,
  SetStateAction,
  useState,
} from "react";

interface IBookContextProvider {
  readBooks: IBook[];
  setReadBooks: React.Dispatch<SetStateAction<IBook[]>>;
  wishlist: IBook[];
  setWishlist: React.Dispatch<SetStateAction<IBook[]>>;
}

export const BookContext = createContext<IBookContextProvider>({
  readBooks: [],
  setReadBooks: () => {},
  wishlist: [],
  setWishlist: () => {},
});

const BookContextProvider = ({ children }: { children: ReactNode }) => {
  const [readBooks, setReadBooks] = useState<IBook[]>([]);
  const [wishlist, setWishlist] = useState<IBook[]>([]);

  const sharedData = {
    readBooks,
    setReadBooks,
    wishlist,
    setWishlist,
  };

  return (
    <BookContext.Provider value={sharedData}>{children}</BookContext.Provider>
  );
};

export default BookContextProvider;
