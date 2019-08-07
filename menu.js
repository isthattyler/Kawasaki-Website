/* used to locate correct dropdown (dropdowns are the different types of menu categories) */
function dropdown(dropDownNumber) {
  var myid = "myDropdown" + dropDownNumber;     /* each dropdown is assigned a variable using the numbers they were given in the html file */
  document.getElementById(myid).classList.toggle("show");     /* variable from prev line is then used to find the correct dropdown */
}

/* similarly to the dropdown, the modals (which are the singular menu items that we want for your order) are given numbers in html and assigned
a variable in the function so we can find the correct modal and allow it to show on the screen (thus opening the modal) */
function openModal(modalNumber) {
  var myid = "modal" + modalNumber;
  window.modal = document.getElementById(myid);
  modal.style.display = "block";
}

/* close the modal that is currently open by clicking the "x" in the top right (variable for the open modal is given from the openModal function) */
function closeModal() {
  window.modal.style.display = "none";
}

/* close the modal that is currently open by clicking on any part of the window that's not the modal itself
(variable for the open modal is given from the openModal function) */
window.onclick = function(event) {
  if (event.target == modal) {
    window.modal.style.display = "none";
  }
}
