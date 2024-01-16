import "./App.css";
import Books from "./components/books/Books";
import Profile from "./components/profile/profile";

function App() {
  return (
    <div className="app">
      <h1>Profiles</h1>
      <Profile />

      <h2>Books</h2>
      <Books />
    </div>
  );
}

export default App;
