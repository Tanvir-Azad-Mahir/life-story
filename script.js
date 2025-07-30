// DOM Elements
const buttons = document.querySelectorAll(".cat-btn");
const bookList = document.getElementById("book-list");
const themeToggleBtn = document.getElementById("theme-toggle");

// Your PDF data here
const placeholderBooks = {
  adventure: [
    { title: "The Hobbit by J.R.R. Tolkien", file: "books/the-hobbit.pdf" },
    { title: "Treasure Island by Robert Louis Stevenson", file: "books/treasure-island.pdf" },
  ],
  fictional: [
    { title: "1984 by George Orwell", file: "books/1984.pdf" },
    { title: "Brave New World by Aldous Huxley", file: "books/brave-new-world.pdf" },
  ],
  philosophy: [
    { title: "Man's Search for Meaning by Viktor E. Frankl", file: "books/mans-search-for-meaning.pdf" },
    { title: "Meditations by Marcus Aurelius", file: "books/meditations.pdf" },
  ],
};

// Render books for a category
function renderBooks(category) {
  const books = placeholderBooks[category] || [];
  
  bookList.style.opacity = "0"; // fade out

  setTimeout(() => {
    if (books.length === 0) {
      bookList.innerHTML = `<p>No books uploaded yet in <strong>${capitalize(category)}</strong> category.</p>`;
    } else {
      bookList.innerHTML = books
        .map(
          (book) => `
          <article class="book-item" tabindex="0">
            <h2 class="book-title">${book.title}</h2>
            <div class="book-links">
              <a href="${book.file}" target="_blank" rel="noopener">📖 Read</a>
              <a href="${book.file}" download>⬇️ Download</a>
            </div>
          </article>`
        )
        .join("");
    }
    bookList.style.opacity = "1"; // fade in
  }, 200);
}

// Capitalize first letter of string
function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

// Dark mode toggle handler
themeToggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  const isDark = document.body.classList.contains("dark");
  themeToggleBtn.textContent = isDark ? "☀️" : "🌙";
});

// Initial load
renderBooks("adventure");

// Category button click handler
buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    buttons.forEach((b) => {
      b.classList.remove("active");
      b.setAttribute("aria-selected", "false");
      b.setAttribute("tabindex", "-1");
    });
    btn.classList.add("active");
    btn.setAttribute("aria-selected", "true");
    btn.setAttribute("tabindex", "0");
    renderBooks(btn.dataset.category);
  });
});
