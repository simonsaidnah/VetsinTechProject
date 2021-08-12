
//define initial variables
let modal = document.getElementById("modal");

let openModalButton = document.getElementById('cartModal');

let closeModalButton = document.getElementById('closeModal');

let addtoCartButton = document.getElementById('cartAddButtonContainer');

let cartQuantity = 0

let price = 0

document.getElementById("quantity").innerText = cartQuantity;

//modal window display
//open modal if cart area is clicked
openModalButton.onclick = function() {
    modal.style.display = "block";
};

closeModalButton.onclick = function() {
    modal.style.display = "none";
};


//quantity tracking

addtoCartButton.onclick = function () {
    cartQuantity = cartQuantity + 1;
    document.getElementById("quantity").innerText = "Qty: " + cartQuantity;

    price = price + 4;
    document.getElementById("price").innerText = "$" + price + ".00";
}


function increaseQuantity () {

    //implement function for incrementing quantity up each time add to cart button is clicked
    cartQuantity = cartQuantity + 1;
    document.getElementById("quantity").innerText = "Qty: " + cartQuantity;

    price = price + 4;
    document.getElementById("price").innerText = "$" + price + ".00";
};

function decreaseQuantity () {

    //implement function for incrementing quantity up each time add to cart button is clicked
    cartQuantity = cartQuantity - 1;
    document.getElementById("quantity").innerText = "Qty: " + cartQuantity;

    price = price - 4;
    document.getElementById("price").innerText = "$" + price + ".00";
};
    
    // implement function for incrementing quantity up each time increase button is clicked
    //store value in cartQuantity array


    //implement function for incrementing quantity down each time decrease button is clicked
    //store value in cartQuantity array


    //display cartQuantity value in modal





