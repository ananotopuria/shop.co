export function handleViewAll() {
    const viewAllBtn = document.getElementById("viewAllBtn");
    const hiddenCards = document.querySelectorAll(".products__card.hidden");
  
    viewAllBtn.addEventListener("click", function() {
      hiddenCards.forEach(card => {
        card.classList.remove("hidden");
      });
      this.style.display = "none";
    });
  }