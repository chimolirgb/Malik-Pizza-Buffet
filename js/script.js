var totalPrice = [];

function Order(toppings, crust, size) {
  this.toppings = toppings;
  this.crust = crust;
  this.size = size;
  // this.pizzaTotal = 0; // checkit out
  // this.amount = amount; // checkit out
}
Order.prototype.pizzaCost = function(){
  let cost = 0; // checkit out

  if (this.size === "small") {
    cost += 500;
  } else if (this.size === "medium") {
    cost += 1000;
  } else if (this.size === "large") {
    cost += 1300;
  } else{
    alert("choose size") // checkit out
  }

  if (this.crust === "Crispy") {
    cost += 200;
  } else if (this.crust === "Stuffed") {
    cost += 300;
  } else if (this.crust === "Gluten-free") {
    cost += 100;
  }else{
    alert("choose crust") // checkit out
  }

  if (this.toppings === "Pineapple") {
    cost += 100;
  } else if (this.toppings === "Bacon") {
    cost += 200;
  } else if (this.toppings === "Sausage") {
    cost += 200;
  } else if (this.toppings === "Mushrooms") {
    cost += 100;
  } else if (this.toppings === "chicken") {
    cost += 150;
  } else if (this.toppings === "beef") {
    cost += 200;
  }else{
    alert("choose toppings") // checkit out
  }
  return this.cost = cost; // checkit out
};


function Address(address) {
  this.address = address;
  this.deliveryAddress = (address);
}

Order.prototype.finalCost = function (){
  var cartTotalPrice = 0; // checkit out
  for (var arrayValue = 0; arrayValue < totalPrice.length; arrayValue++) {
    cartTotalPrice += totalPrice[arrayValue];
  }
  return cartTotalPrice;
};


$(document).ready(function () {
  $("#check-out").click(function () {});
  $("#chosen-pizza").submit(function (event) {
    event.preventDefault();
    var size = $("select#size").val();
    var crust = $("select#crust").val();
    var toppings = $("select#toppings").val();
    var numbers = parseInt($("input#number").val()); // checkit out
    var pizzaDetails = (size + " - " + crust + " - " + toppings);

    var newPizzaOrder = new Order(toppings, crust, size);

    newPizzaOrder.pizzaCost(); // checkit out

    totalPrice.push(newPizzaOrder.pizzaCost()); // checkit out

    let finTotal = newPizzaOrder.finalCost() * numbers; // checkit out
    $("#finalCost").text(finTotal); // checkit out
    $("#pizza-details").append("<ul><li>" + pizzaDetails + "</li></ul>");
    // $("#size, #crust, #toppings,").val("");
  });
  $("#input-pizza").click(function () {
    $("#deliver").toggle();
  });

  $("#check-out").click(function () {
    $("#pizza-details").toggle();
  });
  $("form#address-form").submit(function (event) {
    $(".address-form").toggle();
    event.preventDefault();
    var address = $("input#location").val();
    var newAddress = new Address(address);
    $("#delivery-option").text("Your pizza will be delivered to: " + newAddress.deliveryAddress);
  });
});