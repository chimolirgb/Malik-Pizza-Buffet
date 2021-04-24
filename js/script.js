//checkout function
$("#checkout").click(function () {
    let size = $("#size option:selected").val();
    let crust = $("#crust:needed").val();
    let topping = $("#toppings:needed").val();
    let number = $("#number").val();
    console.log(size);
});