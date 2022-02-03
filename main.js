const runHighlighters = () => {
  document.querySelectorAll("pre code").forEach((el) => {
    hljs.highlightElement(el);
  });
};

const setupDropdowns = () => {
  document
    .querySelectorAll(".dropdown-link")
    .forEach((el) => el.addEventListener("click", handleDropdownClick));
};

const handleDropdownClick = (e) => {
  // Prevent <a> links from changing the page
  e.preventDefault();
  const classList = e.currentTarget.parentElement.classList;

  // Check if the dropdown is currently open
  const isOpen = classList.contains("dropdown--open");
  if (isOpen) {
    classList.remove("dropdown--open");
  } else {
    classList.add("dropdown--open");
  }
};

document.addEventListener("DOMContentLoaded", (event) => {
  runHighlighters();
  setupDropdowns();
});
