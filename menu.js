function dropdown(dropDownNumber) {
  var myid = "myDropdown" + dropDownNumber;
  document.getElementById(myid).classList.toggle("show");
}



function openModal(modalNumber) {
  var myid = "modal" + modalNumber;
  window.modal = document.getElementById(myid);
  modal.style.display = "block";
}

function closeModal() {
  window.modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    window.modal.style.display = "none";
  }
}
