const buttons = document.querySelectorAll(".cat-btn");
const bookList = document.getElementById("book-list");
const toggleBtn = document.getElementById("darkModeToggle");

// Book data with categories
const placeholderBooks = {
  adventure: [],
  fictional: [],
  philosophy: [
    {
      title: "Man's Search for Meaning by Viktor E. Frankl",
      file: "books/mans-search-for-meaning.pdf",
    },
  ],
};

// Renders books based on selected category
function renderBooks(category) {
  const books = placeholderBooks[category];

  if (books.length === 0) {
    bookList.innerHTML = `<p>No books uploaded yet in <strong>${capitalize(category)}</strong> category.</p>`;
    return;
  }

  bookList.innerHTML = "";
  books.forEach((book) => {
    const bookDiv = document.createElement("div");
    bookDiv.className = "book-item";

    bookDiv.innerHTML = `
      <div class="book-title">${book.title}</div>
      <div class="book-links">
        <a href="${book.file}" target="_blank" rel="noopener">📖 Read</a>
        <a href="${book.file}" download>⬇️ Download</a>
      </div>
    `;

    bookList.appendChild(bookDiv);
  });
}

// Capitalizes category names
function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

// Switch theme mode
toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  toggleBtn.textContent =
    document.body.classList.contains("dark-mode") ? "🌞 Light Mode" : "🌙 Dark Mode";
});

// Initial load
renderBooks("adventure");

// Category switching
buttons.forEach((btn) =>
  btn.addEventListener("click", () => {
    buttons.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    renderBooks(btn.dataset.category);
  })
);
