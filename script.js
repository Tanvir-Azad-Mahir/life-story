const buttons = document.querySelectorAll(".cat-btn");
const bookList = document.getElementById("book-list");

const placeholderBooks = {
  adventure: [
    // Add your book entries here like below:
    // { title: "Your Book Title", file: "books/yourbook.pdf" }
  ],
  fictional: [],
  philosophy: [
     // Add your book entries here like below:
     { title: "Man’s Search for Meaning by Viktor E. Frankl", file: "books/mans-search-for-meaning.pdf" 
  ],
};

function renderBooks(category) {
  const books = placeholderBooks[category];
  if (books.length === 0) {
    bookList.innerHTML = `<p>No books uploaded yet in <strong>${category}</strong> category.</p>`;
    return;
  }

  bookList.innerHTML = "";
  books.forEach((book) => {
    const bookDiv = document.createElement("div");
    bookDiv.className = "book-item";
    bookDiv.innerHTML = `
      <div class="book-title">${book.title}</div>
      <div class="book-links">
        <a href="${book.file}" target="_blank">Read</a> |
        <a href="${book.file}" download>Download</a>
      </div>
    `;
    bookList.appendChild(bookDiv);
  });
}

// Initial load
renderBooks("adventure");

buttons.forEach((btn) =>
  btn.addEventListener("click", () => {
    buttons.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    renderBooks(btn.dataset.category);
  })
);
