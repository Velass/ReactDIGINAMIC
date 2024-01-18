import { createContext, useEffect, useState } from 'react';


export const BooksContext = createContext();

export const BooksProvider = ({ children }) => {
  const [tableBooks, setTableBooks] = useState([]);
  const [sortOrder, setSortOrder] = useState('asc');

  const BooksApi = async () => {
    const apiUrl = "http://localhost:3000/book";
    try {
          const response = await fetch(apiUrl);
          if (!response.ok) {
              throw new Error(`HTTP error! Status: ${response.status}`);
          }
          const allBooks = await response.json();
          console.log("Books from API:", allBooks);
         return setTableBooks(allBooks);
      } catch (error) {
          console.error('Error fetching books:', error);
          throw error;
      }
  };

  useEffect(() => {
    BooksApi();
  }, []);

  

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
    modifyBook,
    BooksApi
  };

  return (
    <BooksContext.Provider value={contextValue}>
      {children}
    </BooksContext.Provider>
  );
};
