
import { useParams } from "react-router-dom";
import { BooksContext } from "../../utils/context/BooksContext";
import { useContext } from "react";
import "./ModifyBook.css";

function DetailsBook() {
  const { id } = useParams();
  const { tableBooks, modifyBook  } = useContext(BooksContext);
  const books = tableBooks.find((b) => b.id == id);

  function handleSubmit(e){
    e.preventDefault();
    const updatedBook = {
      title: e.target.title.value,
      author: e.target.author.value,
      country: e.target.country.value,
      language: e.target.language.value,
      pages: e.target.pages.value,
      year: e.target.year.value,
    };

    modifyBook(id, updatedBook);
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
