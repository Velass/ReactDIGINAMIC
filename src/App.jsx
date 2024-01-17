import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { BooksProvider } from "./utils/context/BooksContext";
import BooksPage from "./components/books/BooksPage";
import Header from "./components/header/Header";
import DetailsBook from "./components/detailsBook/DetailsBook";

function App() {
  return (
    <BooksProvider>

        <div className="App">
        <Router>
          <Header />
          <Routes>
            <Route path="/livres" element={<BooksPage />} />
            <Route path="/livre/:id" element={<DetailsBook />} />
          </Routes>
          </Router>
        </div>

    </BooksProvider>
  );
}

export default App;
