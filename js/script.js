
$(function () {
    $('.summary').hide();
    $('.cdata-overlay').hide();
//Get inputs
    $("#checkout").click(function () {
        let flavour = $(".flavour option:selected").val();
        let size = $("#size option:selected").val();
        let crust = $("#crust option:selected").val();
        let topping = $("#toppings option:selected").val();
        let number = $("#number").val();
        console.log(size);

        //Function order
        let order = (f, s, c, t, n, total) => {
            return {f, s, c, t, n, total};
        };

        //check price
        let price, totalPrice;
        switch (flavour) {
            case flavour = "regina":
                switch (size) {
                    case size = "small":
                        price = 600;
                        if (crust === "crusty") {
                            totalPrice = (price * number) + 100;
                        } else if (crust === "stuffed") {
                            totalPrice = (price * number) + 150;
                        } else if (crust === "gluten") {
                            totalPrice = (price * number) + 180;
                        } else {
                            totalPrice = (price * number) + 280;
                        }
                        break;
                    case size = "regular":
                        price = 800;
                        if (crust === "crusty") {
                            totalPrice = (price * number) + 100;
                        } else if (crust === "stuffed") {
                            totalPrice = (price * number) + 150;
                        } else if (crust === "gluten") {
                            totalPrice = (price * number) + 180;
                        } else {
                            totalPrice = (price * number) + 280;
                        }
                        break;
                    case size = "jumbo":
                        price = 1600;
                        if (crust === "crusty") {
                            totalPrice = (price * number) + 100;
                        } else if (crust === "stuffed") {
                            totalPrice = (price * number) + 150;
                        } else if (crust === "gluten") {
                            totalPrice = (price * number) + 180;
                        } else {
                            totalPrice = (price * number) + 280;
                        }
                        break;
                }
                break;
            case flavour = "swahilichicken":
                switch (size) {
                    case size = "small":
                        price = 600;
                        if (crust === "crusty") {
                            totalPrice = (price * number) + 100;
                        } else if (crust === "stuffed") {
                            totalPrice = (price * number) + 150;
                        } else if (crust === "gluten") {
                            totalPrice = (price * number) + 180;
                        } else {
                            totalPrice = (price * number) + 280;
                        }
                        break;
                    case size = "regular":
                        price = 800;
                        if (crust === "crusty") {
                            totalPrice = (price * number) + 100;
                        } else if (crust === "stuffed") {
                            totalPrice = (price * number) + 150;
                        } else if (crust === "gluten") {
                            totalPrice = (price * number) + 180;
                        } else {
                            totalPrice = (price * number) + 280;
                        }
                        break;
                    case size = "jumbo":
                        price = 1600;
                        if (crust === "crusty") {
                            totalPrice = (price * number) + 100;
                        } else if (crust === "stuffed") {
                            totalPrice = (price * number) + 150;
                        } else if (crust === "gluten") {
                            totalPrice = (price * number) + 180;
                        } else {
                            totalPrice = (price * number) + 280;
                        }
                        break;
                }
                break;
            case flavour = "margarita":
                switch (size) {
                    case size = "small":
                        price = 600;
                        if (crust === "crusty") {
                            totalPrice = (price * number) + 100;
                        } else if (crust === "stuffed") {
                            totalPrice = (price * number) + 150;
                        } else if (crust === "gluten") {
                            totalPrice = (price * number) + 180;
                        } else {
                            totalPrice = (price * number) + 280;
                        }
                        break;
                    case size = "regular":
                        price = 800;
                        if (crust === "crusty") {
                            totalPrice = (price * number) + 100;
                        } else if (crust === "stuffed") {
                            totalPrice = (price * number) + 150;
                        } else if (crust === "gluten") {
                            totalPrice = (price * number) + 180;
                        } else {
                            totalPrice = (price * number) + 280;
                        }
                        break;
                    case size = "jumbo":
                        price = 1600;
                        if (crust === "crusty") {
                            totalPrice = (price * number) + 100;
                        } else if (crust === "stuffed") {
                            totalPrice = (price * number) + 150;
                        } else if (crust === "gluten") {
                            totalPrice = (price * number) + 180;
                        } else {
                            totalPrice = (price * number) + 280;
                        }
                        break;
                }
                break;
            case flavour = "chickensupreme":
                switch (size) {
                    case size = "small":
                        price = 600;
                        if (crust === "crusty") {
                            totalPrice = (price * number) + 100;
                        } else if (crust === "stuffed") {
                            totalPrice = (price * number) + 150;
                        } else if (crust === "gluten") {
                            totalPrice = (price * number) + 180;
                        } else {
                            totalPrice = (price * number) + 280;
                        }
                        break;
                    case size = "regular":
                        price = 800;
                        if (crust === "crusty") {
                            totalPrice = (price * number) + 100;
                        } else if (crust === "stuffed") {
                            totalPrice = (price * number) + 150;
                        } else if (crust === "glutten") {
                            totalPrice = (price * number) + 180;
                        } else {
                            totalPrice = (price * number) + 280;
                        }
                        break;
                    case size = "jumbo":
                        price = 1600;
                        if (crust === "crusty") {
                            totalPrice = (price * number) + 100;
                        } else if (crust === "stuffed") {
                            totalPrice = (price * number) + 150;
                        } else if (crust === "gluten") {
                            totalPrice = (price * number) + 180;
                        } else {
                            totalPrice = (price * number) + 280;
                        }
                        break;
                }
                break;
            case flavour = "veggieextravaganzza":
                switch (size) {
                    case size = "small":
                        price = 600;
                        if (crust === "crusty") {
                            totalPrice = (price * number) + 100;
                        } else if (crust === "stuffed") {
                            totalPrice = (price * number) + 150;
                        } else if (crust === "gluten") {
                            totalPrice = (price * number) + 180;
                        } else {
                            totalPrice = (price * number) + 280;
                        }
                        break;
                    case size = "regular":
                        price = 800;
                        if (crust === "crusty") {
                            totalPrice = (price * number) + 100;
                        } else if (crust === "stuffed") {
                            totalPrice = (price * number) + 150;
                        } else if (crust === "gluten") {
                            totalPrice = (price * number) + 180;
                        } else {
                            totalPrice = (price * number) + 280;
                        }
                        break;
                    case size = "jumbo":
                        price = 1600;
                        if (crust === "crusty") {
                            totalPrice = (price * number) + 100;
                        } else if (crust === "stuffed") {
                            totalPrice = (price * number) + 150;
                        } else if (crust === "gluten") {
                            totalPrice = (price * number) + 180;
                        } else {
                            totalPrice = (price * number) + 280;
                        }
                        break;
                }
                break;
            case flavour = "pumkinpizza":
                switch (size) {
                    case size = "small":
                        price = 600;
                        if (crust === "crusty") {
                            totalPrice = (price * number) + 100;
                        } else if (crust === "stuffed") {
                            totalPrice = (price * number) + 150;
                        } else if (crust === "gluten") {
                            totalPrice = (price * number) + 180;
                        } else {
                            totalPrice = (price * number) + 280;
                        }
                        break;
                    case size = "regular":
                        price = 800;
                        if (crust === "crusty") {
                            totalPrice = (price * number) + 100;
                        } else if (crust === "stuffed") {
                            totalPrice = (price * number) + 150;
                        } else if (crust === "gluten") {
                            totalPrice = (price * number) + 180;
                        } else {
                            totalPrice = (price * number) + 280;
                        }
                        break;
                    case size = "jumbo":
                        price = 1600;
                        if (crust === "crusty") {
                            totalPrice = (price * number) + 100;
                        } else if (crust === "stuffed") {
                            totalPrice = (price * number) + 150;
                        } else if (crust === "gluten") {
                            totalPrice = (price * number) + 180;
                        } else {
                            totalPrice = (price * number) + 280;
                        }
                        break;
                }
                break;
            case flavour = "tomatoonion":
                switch (size) {
                    case size = "small":
                        price = 600;
                        if (crust === "crusty") {
                            totalPrice = (price * number) + 100;
                        } else if (crust === "stuffed") {
                            totalPrice = (price * number) + 150;
                        } else if (crust === "gluten") {
                            totalPrice = (price * number) + 180;
                        } else {
                            totalPrice = (price * number) + 280;
                        }
                        break;
                    case size = "regular":
                        price = 800;
                        if (crust === "crusty") {
                            totalPrice = (price * number) + 100;
                        } else if (crust === "stuffed") {
                            totalPrice = (price * number) + 150;
                        } else if (crust === "gluten") {
                            totalPrice = (price * number) + 180;
                        } else {
                            totalPrice = (price * number) + 280;
                        }
                        break;
                    case size = "jumbo":
                        price = 1600;
                        if (crust === "crusty") {
                            totalPrice = (price * number) + 100;
                        } else if (crust === "stuffed") {
                            totalPrice = (price * number) + 150;
                        } else if (crust === "gluten") {
                            totalPrice = (price * number) + 180;
                        } else {
                            totalPrice = (price * number) + 280;
                        }
                        break;
                }
                break;
            case flavour = "spinachandartichoke":
                switch (size) {
                    case size = "small":
                        price = 600;
                        if (crust === "crusty") {
                            totalPrice = (price * number) + 100;
                        } else if (crust === "stuffed") {
                            totalPrice = (price * number) + 150;
                        } else if (crust === "gluten") {
                            totalPrice = (price * number) + 180;
                        } else {
                            totalPrice = (price * number) + 280;
                        }
                        break;
                    case size = "regular":
                        price = 800;
                        if (crust === "crusty") {
                            totalPrice = (price * number) + 100;
                        } else if (crust === "stuffed") {
                            totalPrice = (price * number) + 150;
                        } else if (crust === "gluten") {
                            totalPrice = (price * number) + 180;
                        } else {
                            totalPrice = (price * number) + 280;
                        }
                        break;
                    case size = "jumbo":
                        price = 1600;
                        if (crust === "crusty") {
                            totalPrice = (price * number) + 100;
                        } else if (crust === "stuffed") {
                            totalPrice = (price * number) + 150;
                        } else if (crust === "gluten") {
                            totalPrice = (price * number) + 180;
                        } else {
                            totalPrice = (price * number) + 280;
                        }
                        break;
                }
                break;
        }
        switch (topping) {
            case topping = "none":
                totalPrice = totalPrice + 0;
                break;
            case topping = "onions":
                totalPrice = totalPrice + 100;
                break;
            case topping = "mushroom":
                totalPrice = totalPrice + 100;
                break;
            case topping = "greenpepper":
                totalPrice = totalPrice + 100;
                break;
            case topping = "olives":
                totalPrice = totalPrice + 150;
                break;
            case topping = "pineapple":
                totalPrice = totalPrice + 150;
                break;
            case topping = "sweetcorn":
                totalPrice = totalPrice + 150;
                break;
            case topping = "macon":
                totalPrice = totalPrice + 150;
                break;
            case topping = "mince":
                totalPrice = totalPrice + 150;
                break;
            case topping = "beef":
                totalPrice = totalPrice + 200;
                break;
            case topping = "chicken":
                totalPrice = totalPrice + 200;
                break;

        }

        //Execute order function
        let newOrder = order(flavour, size, crust, topping, number, totalPrice);
        console.log(newOrder);
        $('.cdata-overlay').slideUp();
        $('.summary').slideDown(2000);
        $('#list').slideDown();
        $('.pay').show(550);
        $('.reset').show(1000);

        $('#list').text(" ");
        $("#list").append("<br>" + "Flavour :   " 
            + newOrder.f + "<br>" + "Size :   "
            + newOrder.s + "<br>" + "Crust :     "
            + newOrder.c + "<br>" + "Toppings :     "
            + newOrder.t + "<br>" + " Number of pizzas :    "
            + newOrder.n + "<br><br><br>" + "Total Price :  "
            + newOrder.total + "<br><br>").css('font-family', 'system-ui').css('font-size', '24px');
    });

    //Deliver
    $(".deliver").click(function () {
        $('.summary').slideDown(2000);
        $('#list').slideDown();
        // $('div').animate({left: '250px'});
        $('.cdata-overlay').slideToggle();
        $('.deliver').hide(1000);
        $('.delivernot').hide(1000);
        $('.cdata-overlay').slideDown();
        event.preventDefault();
    });


    // function expression to select elements
const selectElement = (s) => document.querySelector(s);

selectElement('.open').addEventListener('click', () => {
    selectElement('.nav-list').classList.add('active');
});

selectElement('.close').addEventListener('click', () => {
    selectElement('.nav-list').classList.remove('active');
}); 

selectElement('.deliver').addEventListener('click', () => {
    alert('Delivery will cost you an extra Ksh.200');
});

selectElement('.delord').addEventListener('click', () => {
    alert('Your order will be delivered to your location');
});



    //Pick Up
    $(".delivernot").click(function () {

    });

    //Scrollify
    $(function () {
        $.scrollify.move('#sum-order');
    });
});
