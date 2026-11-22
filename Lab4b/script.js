alert("JavaScript is working!");
async function loadBooks() {
    const firstBook = document.getElementById("firstBook");
    const secondBook = document.getElementById("secondBook");
    const genres = document.getElementById("genres");
    const error = document.getElementById("error");

    try {
        const response = await fetch("../Q1/books.json");

        if (!response.ok) {
            throw new Error("Unable to load books.json");
        }

        const data = await response.json();

        if (!data.books || data.books.length < 2) {
            throw new Error("Book data is incomplete");
        }

        firstBook.textContent = data.books[0].title;
        secondBook.textContent = data.books[1].author;

        genres.textContent = "";

        data.books.forEach(function(book) {
            const paragraph = document.createElement("p");

            paragraph.textContent =
                book.title + " - " + book.genres.join(", ");

            genres.appendChild(paragraph);
        });

    } catch (errorMessage) {
        error.textContent =
            "Error: " + errorMessage.message;
    }
}

loadBooks();
