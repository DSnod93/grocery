// directs to checkout out from cart 

async function checkout (event) {
event.preventDefault();
//takes to checkout page
document.location.replace('/checkout/');

};

document.querySelector('.checkout-btn').addEventListener('click', checkout)