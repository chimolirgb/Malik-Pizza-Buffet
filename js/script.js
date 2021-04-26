//user logic

var totalPrice = [];

function Order(toppings, crust, size) {
  this.toppings = toppings;
  this.crust = crust;
  this.size = size;
}

Order.prototype.pizzaCost = function(){
  let cost = 0; 

  if (this.size === "small") {
    cost += 500;
  } else if (this.size === "medium") {
    cost += 1000;
  } else if (this.size === "large") {
    cost += 1300;
  } else{
    alert("choose size") 
  }

  if (this.crust === "Crispy") {
    cost += 200;
  } else if (this.crust === "Stuffed") {
    cost += 300;
  } else if (this.crust === "Gluten-free") {
    cost += 100;
  }else{
    alert("choose crust") 
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
    alert("choose toppings") 
  }

  return this.cost = cost; 
};


function Address(address) {
  this.address = address;
  this.deliveryAddress = (address);
}

Order.prototype.finalCost = function (){
  var cartTotalPrice = 0;
  for (var arrayValue = 0; arrayValue < totalPrice.length; arrayValue++) {
    cartTotalPrice += totalPrice[arrayValue];
  }

  return cartTotalPrice;
};

//Business logic

$(document).ready(function () {
  $("#check-out").click(function () {});
  $("#chosen-pizza").submit(function (event) {
    event.preventDefault();

    var size = $("select#size").val();
    var crust = $("select#crust").val();
    var toppings = $("select#toppings").val();
    var numbers = parseInt($("input#number").val()); 
    var pizzaDetails = (size + " - " + crust + " - " + toppings);

    var newPizzaOrder = new Order(toppings, crust, size);

    newPizzaOrder.pizzaCost();

    totalPrice.push(newPizzaOrder.pizzaCost());

    let finTotal = newPizzaOrder.finalCost() * numbers; 
    $("#finalCost").text(finTotal); 
    $("#pizza-details").append("<ul><li>" + pizzaDetails + "</li></ul>");
    // $("#size, #crust, #toppings,").val("");
  });

  jQuery("#choice") .click(function(){
    alert("The delivery charges are Ksh.100")
});

// $("#location") .click(function(){
//   alert("Your order will be delivered to your location")
// })

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


$(document).ready(function(){
  $("#hover1").hover(function(){
  $("#imgtext1").toggle();
  });
  
  $("#hover2").hover(function(){
      $("#imgtext2").toggle();
      });
  
      $("#hover3").hover(function(){
          $("#imgtext3").toggle();
          }); 
        });