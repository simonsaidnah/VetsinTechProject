
//define initial variables
let modal = document.getElementById("modal");

let openModalButton = document.getElementById('cartModal');

let closeModalButton = document.getElementById('closeModal');

let addtoCartButton = document.getElementById('cartAddButtonContainer');

let cartQuantity = 0

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

function increaseQuantity () {

    //implement function for incrementing quantity up each time add to cart button is clicked
    cartQuantity = cartQuantity + 1;
    document.getElementById("quantity").innerText = cartQuantity;
};

function decreaseQuantity () {

    //implement function for incrementing quantity up each time add to cart button is clicked
    cartQuantity = cartQuantity - 1;
    document.getElementById("quantity").innerText = cartQuantity;
};
    
    // implement function for incrementing quantity up each time increase button is clicked
    //store value in cartQuantity array


    //implement function for incrementing quantity down each time decrease button is clicked
    //store value in cartQuantity array


    //display cartQuantity value in modal





