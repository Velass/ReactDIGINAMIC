// BooksPage.jsx
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { BooksContext } from '../../utils/context/BooksContext';
import './BooksPage.css';

const BooksPage = () => {
  const { tableBooks, sortOrder, toggleSortOrder } = useContext(BooksContext);

  return (
    <div className="books-page">
      <h2>Liste des livres :</h2>
      <div className="books-container">
        <div className="sort-order">
          <span onClick={toggleSortOrder}>
            Auteur {sortOrder === 'asc' ? '▲' : '▼'}
          </span>
        </div>
        {tableBooks.map((book) => (
          <div key={book.id} className="book-item">
            <Link to={`/livre/${book.id}`} className="book-link">
              <img src={book.imageLink} alt={book.title} className="book-image" /> 
              <div className="book-title">Titre : {book.title}</div> 
              <div className="book-author">Auteur : {book.author}</div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BooksPage;
