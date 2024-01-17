
import { useParams } from "react-router-dom";
import { BooksContext } from "../../utils/context/BooksContext";
import { useContext } from "react";
import "./DetailsBook.css";

function DetailsBook() {
  const { id } = useParams();
  const { tableBooks } = useContext(BooksContext);
  const books = tableBooks.find((b) => b.id == id);

  return (
    <div className="details-book">
      <img src={books.imageLink} alt="" className="book-image" />
      <div className="infoSupp">
        <div className="info-title">titre : {books.title} </div>
        <div className="info-author">auteur : {books.author} </div>
        <div className="info-country">pays : {books.country} </div>
        <div className="info-language">langage : {books.language} </div>
        <div className="info-pages">pages : {books.pages} </div>
        <div className="info-year">année : {books.year} </div>
      </div>
    </div>
  );
}

export default DetailsBook;
