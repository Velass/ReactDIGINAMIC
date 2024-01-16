
import { useContext } from 'react';
import { BooksContext } from '../../utils/context/BooksContext';

const BooksPage = () => {
  const {tableBooks} = useContext(BooksContext);

  return (
    <div>
      <h2>Liste des livres :</h2>
      <div>
        {tableBooks.map((book) => (
          <div key={book.id}>
            <div>link : {book.link}</div> 
            <div>titre : {book.title}</div> 
            <div>autheur : {book.author}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BooksPage;
