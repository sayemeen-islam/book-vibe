'use client'
import { IBook } from '@/types/books-type';
import React, { createContext, ReactNode, SetStateAction, useState } from 'react';

interface IBookContextProvider{
  readbooks:IBook[]
  setReadBooks:React.Dispatch<SetStateAction<IBook[]>>
  wishlist:IBook[]
  setWishlist:React.Dispatch<SetStateAction<IBook[]>>
}

export const BookContext=createContext<IBookContextProvider>({
  readbooks:[],
  setReadBooks:()=>{},
  wishlist:[],
  setWishlist:()=>{}
})

const BookContextProvider = ({children}:{children:ReactNode}) => {

  const [readbooks,setReadBooks]=useState<IBook[]>([])
  const [wishlist,setWishlist]=useState<IBook[]>([])

  const sharedData={
      readbooks,
  setReadBooks,
  wishlist,
  setWishlist
  } 

  return (
   <BookContext.Provider value={sharedData}>{children}</BookContext.Provider>
  );
};

export default BookContextProvider;