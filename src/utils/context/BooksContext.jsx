
import { createContext, useState, } from 'react';
 import { books } from '../../models/Books';

export const BooksContext = createContext();


export const BooksProvider = ({ children }) => {
  const [tableBooks, setBook] = useState(books)
  console.log(tableBooks)

  return (
    <BooksContext.Provider value={{tableBooks}}>
      {children}
    </BooksContext.Provider>
  );
};
