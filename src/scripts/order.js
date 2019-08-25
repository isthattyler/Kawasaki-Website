$(document).ready(function() {
	var numOfOrders = 0;
	$(".num").text(numOfOrders);

	// hide dialogs on start
	$("#thanksMessage, #shopping-cart, #finishOrderDialog").hide();

	$('input[type="checkbox"]').click(function(){
        var inputValue = document.getElementById("shopping-cart")
        $(inputValue).toggle();
    });
});