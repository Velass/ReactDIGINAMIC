import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { BooksProvider } from "./utils/context/BooksContext";
import BooksPage from "./components/books/BooksPage";
import Header from "./components/header/Header";

function App() {
  return (
    <BooksProvider>
      <Router>
        <div className="App">
          <Header />
          <Routes>
            <Route path="/livres" element={<BooksPage />} />
          </Routes>
        </div>
      </Router>
    </BooksProvider>
  );
}

export default App;
