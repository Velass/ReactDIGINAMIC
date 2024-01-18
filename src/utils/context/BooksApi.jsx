const apiUrl = "http://localhost:3000/book";

const BooksApi = async () => {
  try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const allBooks = await response.json();
        console.log("Books from API:", allBooks);
        return allBooks;
    } catch (error) {
        console.error('Error fetching books:', error);
        throw error;
    }
};

export default BooksApi;
