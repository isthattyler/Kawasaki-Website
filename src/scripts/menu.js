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
  if (event.target == window.modal) {
    window.modal.style.display = "none";
  }
}


/* Shopping Cart */
/* checks whether the HTML document has been loaded in*/
if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready)
} else {
    ready()
}

/* when the document is ready, we will start to find all of the add to cart
buttons for every menu item and listen for when they are clicked on*/
function ready() {
  var addToCartButtons = document.getElementsByClassName('cart-button');
  for (var i = 0; i < addToCartButtons.length; i++) {
    var button = addToCartButtons[i];
    button.addEventListener("click", addToCartClicked);
  }
}

/* when add to cart button is clicked, we want to add the item to cart
by running a separate function and sending the item name (title) and 
the price of the item to the other function as well*/
function addToCartClicked(event) {
  var button = event.target;
  var shopItem = button.parentElement.parentElement.parentElement.parentElement.parentElement;
  console.log(shopItem)
  var title = shopItem.getElementsByClassName('itemName')[0].innerText;
  var price = shopItem.getElementsByClassName('price')[0].innerText;
  addItemToCart(title, price);
}

/* function to create a new div to show the items that have been added to cart
along with their name and price*/
function addItemToCart(title, price) {
  var cartRow = document.createElement('div');
  var cartItems = document.getElementsByClassName('cart-items')[0];

  var cartRowContents =
  `
      <div class="cart-item cart-column">
        <span class="cart-itemName"> ${title} </span>
      </div>

      <span class="cart-price cart-column"> ${price} </span>

      <div class="cart-quantity cart-column">
        <input class="cart-quantity-input" type="number" value="1">
        <button class="btn btn-danger" type="button>" REMOVE </button>
      </div>
  `
  cartRow.innerHTML = cartRowContents;
  cartItems.append(cartRow);
}
