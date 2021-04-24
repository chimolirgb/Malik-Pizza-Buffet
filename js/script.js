 $(document).ready(function() {
//      $("#order").hide();
//      $("#deliver").hide();
    // Business Logic
    var totalPrice = [];
    function Order(toppings, crust, size, amount) {
      this.toppings = toppings;
      this.crust = crust;
      this.size = size;
      this.pizzaTotal = 0;
      this.amount = amount;
    } 
    Order.prototype.pizzaCost = function() {
      if (this.size === "small") {
        this.pizzaPrice += 500;
      } else if (this.size === "medium") {
        this.pizzaPrice += 1000;
      } else if (this.size === "large") {
        this.pizzaPrice += 1300;
      }

      if (this.crust === "Crispy") {
        this.pizzaPrice += 200;
      } else if (this.crust === "Stuffed") {
        this.pizzaPrice += 300;
      } else if (this.crust === "Glutten-free") {
        this.pizzaPrice += 100;
      }
      if (this.toppings === "Pineapple") {
        this.pizzaPrice += 100;
      } else if (this.toppings === "Bacon") {
        this.pizzaPrice += 200;
      } else if (this.toppings === "Sausage") {
        this.pizzaPrice += 200;
      } else if (this.toppings === "Mushrooms") {
        this.pizzaPrice += 100;
      } else if (this.toppings === "Chicken Peporoni") {
        this.pizzaPrice += 150;
    } else if (this.toppings === "Beef Peporoni") {
      this.pizzaPrice += 200;
    }
  };
                 //Business logic
function Address(address) {
  this.address = address;
  this.deliveryAddress = (address);
} 
Order.prototype.finalCost = function() {
  var cartTotalPrice = [];
  for (var arrayValue = 0; arrayValue < totalPrice.length; arrayValue++) {
    cartTotalPrice += totalPrice[arrayValue];
  }
  return cartTotalPrice;
};
$(".btn.check-out").click(function() {
});
$("form#chosen-pizza").submit(function(event) {
  event.preventDefault();
  var size = $("select#size").val();
  var crust = $("select#crust").val();
  var toppings = $("select#toppings").val();
  var pizzaDetails = (size + " - " + crust + " - " + toppings);
  var newPizzaOrder = new Order(size, crust, toppings);
  newPizzaOrder.pizzaCost();
  totalPrice.push(newPizzaOrder.pizzaPrice);
  // $("#pizza-details").hide();
  $("#final-cost").text(newPizzaOrder.finalCost());
  $("#pizza-details").append("<ul><li>" + pizzaDetails + "</li></ul>");
  // $("#size, #crust, #toppings,").val("");
});
$("#input-pizza").click(function() {
  $("#deliver").toggle();
});

$("#check-out").click(function() {
  $("#pizza-details").toggle();
});
$("form#address-form").submit(function(event) {
  $(".address-form").toggle();
  event.preventDefault();
  var address = $("input#location").val();
  var newAddress = new Address(address);
  $("#delivery-option").text("Your pizza will be delivered to: " + newAddress.deliveryAddress);
});
});