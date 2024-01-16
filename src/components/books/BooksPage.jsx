import './BooksPage.css';
import { useContext } from 'react';
import { BooksContext } from '../../utils/context/BooksContext';

const BooksPage = () => {
  const { tableBooks, sortOrder, toggleSortOrder } = useContext(BooksContext);

  return (
    <div>
      <h2>Liste des livres :</h2>
      <div>
        <div>
          <span onClick={toggleSortOrder}>
            Auteur {sortOrder === 'asc' ? '▲' : '▼'}
          </span>
        </div>
        {tableBooks.map((book) => (
          <div key={book.id}>
            <img src={book.imageLink} alt={book.title} /> 
            <div>Titre : {book.title}</div> 
            <div>Auteur : {book.author}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BooksPage;
