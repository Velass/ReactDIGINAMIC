import { books } from "../../models/Books";
import BookRow from "../../components/books/BooksRow";

function Books() {
  return (
    <table>
      <thead>
        <tr>
          <th>Titre</th>
          <th>Auteur</th>
          <th>Pays</th>
        </tr>
      </thead>
      <tbody>
        {Array.isArray(books) &&
          books.map((b) => <BookRow key={b.id} book={b} />)}
      </tbody>
    </table>
  );
}

export default Books;
