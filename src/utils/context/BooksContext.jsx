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

  const sortedBooks = sortBooksByAuthor([...tableBooks], sortOrder);

  const contextValue = {
    tableBooks: sortedBooks,
    sortOrder,
    toggleSortOrder,
  };

  return (
    <BooksContext.Provider value={contextValue}>
      {children}
    </BooksContext.Provider>
  );
};
