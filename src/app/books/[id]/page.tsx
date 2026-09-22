
import ReadButton from "@/components/book-details/ReadButton";
import WishButton from "@/components/book-details/WishButton";
import { IBook } from "@/types/books-type";
import Image from "next/image";
import React from "react";

interface IBookDetailsPageProps {
  params: Promise<{ id: string }>;
}
const getBook = async () => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/booksData.json`,
    );
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error fetching books data:", error);
    return [];
  }
};
const BookDetailsPage = async ({ params }: IBookDetailsPageProps) => {
  const { id } = await params;
  const booksData:IBook[] = await getBook();
  const book = booksData.find(
    (book: IBook) => String(book.bookId) === String(id),
  ) as IBook
  return (
    <div className="container mx-auto my-16 px-4">
      <div className="overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-lg">
        <div className="grid grid-cols-1 gap-8 p-6 md:grid-cols-5 md:p-10">
          {/* Book Image */}
          <div className="flex items-center justify-center rounded-2xl bg-[#f8f5ef] p-8 md:col-span-2">
            <Image
              src={book.image}
              alt={book.bookName}
              width={500}
              height={500}
              className="max-h-[450px] w-auto rounded-lg object-contain shadow-xl"
            />
          </div>

          {/* Book Information */}
          <div className="flex flex-col justify-center md:col-span-3">
            {/* Category & Rating */}
            <div className="mb-4 flex items-center gap-3">
              <span className="rounded-full bg-amber-100 px-4 py-1.5 text-sm font-semibold text-amber-700">
                {book.category}
              </span>

              <span className="flex items-center gap-1 text-sm font-semibold text-amber-500">
                ★ {book.rating}
              </span>
            </div>

            {/* Title */}
            <h1 className="text-4xl font-bold leading-tight text-[#131313] md:text-5xl">
              {book.bookName}
            </h1>

            {/* Author */}
            <p className="mt-3 text-lg text-gray-500">
              by{" "}
              <span className="font-semibold text-gray-700">{book.author}</span>
            </p>

            {/* Divider */}
            <div className="my-6 h-px bg-gray-100" />

            {/* Review */}
            <div>
              <h2 className="mb-2 text-lg font-semibold text-[#131313]">
                About the Book
              </h2>

              <p className="text-sm leading-7 text-gray-600">{book.review}</p>
            </div>

            {/* Tags */}
            <div className="mt-6 flex flex-wrap gap-2">
              {book.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-gray-100 px-4 py-1.5 text-sm font-medium text-gray-600"
                >
                  #{tag}
                </span>
              ))}
            </div>

            {/* Book Metadata */}
            <div className="mt-7 grid grid-cols-2 gap-4 rounded-xl bg-gray-50 p-5 sm:grid-cols-4">
              <div>
                <p className="text-xs text-gray-400">Pages</p>
                <p className="mt-1 font-semibold text-gray-700">
                  {book.totalPages}
                </p>
              </div>

              <div>
                <p className="text-xs text-gray-400">Published</p>
                <p className="mt-1 font-semibold text-gray-700">
                  {book.yearOfPublishing}
                </p>
              </div>

              <div>
                <p className="text-xs text-gray-400">Publisher</p>
                <p className="mt-1 font-semibold text-gray-700">
                  {book.publisher}
                </p>
              </div>

              <div>
                <p className="text-xs text-gray-400">Rating</p>
                <p className="mt-1 font-semibold text-gray-700">
                  {book.rating}/5
                </p>
              </div>
            </div>

            {/* Action */}
            <div className="mt-7 flex flex-wrap gap-3">
      <ReadButton book={book}></ReadButton>

<WishButton book={book}></WishButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetailsPage;
