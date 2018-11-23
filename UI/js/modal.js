const viewModal = document.getElementById("modal");
const modalButton = document.getElementById("newpost");
const closeModal = document.getElementById("close");

modalButton.addEventListener("click", () => {
  viewModal.style.display = "block";
});
closeModal.addEventListener("click", () => {
  viewModal.style.display = "none";
});
window.onclick = (e) => {
  if (e.target === viewModal) {
    viewModal.style.display = "none";
  }
}
