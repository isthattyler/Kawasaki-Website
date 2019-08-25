$(document).ready(function() {
	var numOfOrders = $("#listOfOrders").children().length;
	$(".num").text(numOfOrders);

	// hide dialogs on start
	$("#thanksMessage, #shopping-cart, #finishOrderDialog").hide();

	$('input[type="checkbox"]').click(function(){
        var inputValue = document.getElementById("shopping-cart")
        $(inputValue).toggle();
	});

	// Finish order
	$(".checkout").on("click", function () {
		$("#finalOrderList > ol").children().remove();
		   $(".orderName").children("span").each(function(){
			   var finalOrder = '<li>' + $(this).text() + '</li>';
			   $("#finalOrderList > ol").append(finalOrder);
		   })
   
		   $("#finishOrderDialog").dialog({
			   hide: "blind",
			   show : "blind",
			   width: "500px",
		   	   closeText: "X"
		   });
	   })
   
	   $(".order").on("click", function () {
		   var name = $("#buyerName").val();
		   var number = $("#buyerNumber").val();
		   var address = $("#buyerAddress").val();
		   $("#buyerInfo").children("p").remove();
   
		   if (name != "" && number != "" && address != "") {
			   $("#finishOrderDialog").dialog("close");
			   $("#thanksMessage").dialog({
				   hide: "blind",
				   show : "blind",
				   width: "400px"
			   });
			   setTimeout(function(){
				   $("#thanksMessage").dialog("close");
			   }, 3000);
		   }else{
			   $("#buyerInfo").append('<p>Please fill all the fields.</p>');
		   }
	   })
});