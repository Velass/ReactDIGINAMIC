
import "./App.css";
import { BooksProvider } from "./utils/context/BooksContext";
import BooksPage from "./components/books/BooksPage";

function App() {



  return (
    <BooksProvider>
      <div className="App">
        <h1>Ma bibliothèque</h1>
        <BooksPage />
      </div>
    </BooksProvider>
  );
}

export default App;
