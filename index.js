function playAudio(id) {
  var audio = document.getElementById(id);
  audio.play();
}

function showModal(title, content) {
  var modal = document.getElementById("modal");
  var modalTitle = document.getElementById("modal-title");
  var modalText = document.getElementById("modal-text");

  modalTitle.textContent = title;
  modalText.textContent = content;
  modal.classList.add("show");
}

function closeModal() {
  var modal = document.getElementById("modal");
  modal.classList.remove("show");
}

// Close the modal if clicked outside of it
window.onclick = function (event) {
  var modal = document.getElementById("modal");
  if (event.target == modal) {
    modal.classList.remove("show");
  }
};
