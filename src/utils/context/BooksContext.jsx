import { createContext, useState } from 'react';
import { books } from '../../models/Books';

export const BooksContext = createContext();

export const BooksProvider = ({ children }) => {
  const [tableBooks, setTableBooks] = useState(books);
  const [sortOrder, setSortOrder] = useState('asc');

  const toggleSortOrder = () => {
    setSortOrder((prevOrder) => (prevOrder === 'asc' ? 'desc' : 'asc'));
  };



  const sortBooksByAuthor = (books, order) => {
    return books.sort((a, b) => {
      const authorA = a.author.toLowerCase();
      const authorB = b.author.toLowerCase();

      if (order === 'asc') {
        return authorA.localeCompare(authorB);
      } else {
        return authorB.localeCompare(authorA);
      }
    });
  };

  const deleteBook =(book) => {
    const updateBook = tableBooks.filter((tablebook) => tablebook.id !== book.id )
    setTableBooks(updateBook)

  }
  const modifyBook = (bookId, updatedBook) => {
    setTableBooks((prevBooks) => {
      return prevBooks.map((book) =>
        book.id === bookId ? { ...book, ...updatedBook } : book
      );
    });
  };

  const sortedBooks = sortBooksByAuthor([...tableBooks], sortOrder);

  const contextValue = {
    tableBooks: sortedBooks,
    sortOrder,
    toggleSortOrder,
    deleteBook,
    modifyBook
  };

  return (
    <BooksContext.Provider value={contextValue}>
      {children}
    </BooksContext.Provider>
  );
};
