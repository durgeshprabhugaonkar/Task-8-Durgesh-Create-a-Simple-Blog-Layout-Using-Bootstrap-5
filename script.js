// Search filter
const searchInput = document.getElementById("searchInput");
searchInput.addEventListener("input", function () {
  const query = this.value.toLowerCase();
  document.querySelectorAll(".blog-item").forEach(item => {
    const title = item.querySelector(".card-title").textContent.toLowerCase();
    const text = item.querySelector(".card-text").textContent.toLowerCase();
    item.style.display = (title.includes(query) || text.includes(query)) ? "block" : "none";
  });
});
