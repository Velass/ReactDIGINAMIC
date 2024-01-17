
import { useParams } from "react-router-dom";
import { BooksContext } from "../../utils/context/BooksContext";
import { useContext } from "react";
import "./ModifyBook.css";

function DetailsBook() {
  const { id } = useParams();
  const { tableBooks } = useContext(BooksContext);
  const books = tableBooks.find((b) => b.id == id);

  function handleSubmit(e){
    console.log(e.target)
    e.preventDefault();
  }

  return (
    <div className="details-book">
    <img src={books.imageLink} alt="" className="book-image" />
    <form onSubmit={handleSubmit} className="modify-book-form">
      <label>
        Titre :
        <input
          type="text"
          name="title"
          defaultValue={books.title}
        />
      </label>
      <label>
        Auteur :
        <input
          type="text"
          name="author"
          defaultValue={books.author}
        />
      </label>
      <label>
        Pays :
        <input
          type="text"
          name="country"
          defaultValue={books.country}
        />
      </label>
      <label>
        Langage :
        <input
          type="text"
          name="language"
          defaultValue={books.language}
        />
      </label>
      <label>
        Pages :
        <input
          type="text"
          name="pages"
          defaultValue={books.pages}
        />
      </label>
      <label>
        Anée :
        <input
          type="text"
          name="year"
          defaultValue={books.year}
        />
      </label>
      <div className="buttons">
        <button type="submit">Modifier</button>
      </div>
    </form>
    </div>
  );
}

export default DetailsBook;
