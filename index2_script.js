var cartitems = [] ;
var carttotal = 0;

var total_span = document.getElementsByClassName("total")[0];

var showing_items = document.querySelector(".cart-items");


window.onload = function(){

    var storedData = JSON.parse(localStorage.getItem("cart-items"));

     if(storedData && storedData.length > 0){
        cartitems = storedData;
        update();

    } 
} ;

function update(){

    showing_items.innerHTML = "";

    cartitems.forEach(element => {
            
            var listitem = document.createElement("li");

            listitem.innerHTML = `${element.prodname} 
            - quantity : ${element.quantity} 
            - price: ${element.price}`;

            showing_items.appendChild(listitem);

             var total =0;

            total += (element.quantity * element.price)

            total_span.textContent = total;

        });
}

function addtocart(itemname, itemprice) {

    var existing_prod = cartitems.find(
        function (item) {
      return  item.prodname == itemname;
    })

    if (existing_prod) {
        existing_prod.quantity += 1;

    } else {
        cartitems.push({ prodname: itemname, price: itemprice, quantity: 1 })
    }

    carttotal += itemprice;
    localStorage.setItem("cart-items",JSON.stringify(cartitems));
    update();

}

