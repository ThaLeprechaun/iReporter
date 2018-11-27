const deleteRecord = document.getElementById("delete");
const recordContent = document.getElementById("content");
deleteRecord.addEventListener("click", () => {
  recordContent.style.display = "none";
});
