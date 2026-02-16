// This is the boilerplate code given for you
// You can modify this code

// Product data
const products = [
  { id: 1, name: "Product 1", price: 10 },
  { id: 2, name: "Product 2", price: 20 },
  { id: 3, name: "Product 3", price: 30 },
  { id: 4, name: "Product 4", price: 40 },
  { id: 5, name: "Product 5", price: 50 },
];

// DOM elements
const productList = document.getElementById("product-list");
const cartList = document.getElementById("cart-list");
const clearBtn = document.getElementById("clear-cart-btn");

// Load cart from sessionStorage
let cart = JSON.parse(sessionStorage.getItem("cart")) || [];

// Render product list
function renderProducts() {
  productList.innerHTML = "";

  for (let i = 0; i < products.length; i++) {
    productList.innerHTML += `
      <li>
        ${products[i].name} - $${products[i].price}
        <button onclick="addToCart(${products[i].id})">
          Add to Cart
        </button>
      </li>
    `;
  }
}

// Render cart list
function renderCart() {
  cartList.innerHTML = "";

  for (let i = 0; i < cart.length; i++) {
    cartList.innerHTML += `
      <li>
        ${cart[i].name} - $${cart[i].price}
        <button onclick="removeFromCart(${cart[i].id})">
          Remove
        </button>
      </li>
    `;
  }
}

// Add item to cart
function addToCart(productId) {

  for (let i = 0; i < products.length; i++) {
    if (products[i].id === productId) {
      cart.push(products[i]);
      break;
    }
  }

  sessionStorage.setItem("cart", JSON.stringify(cart));
  renderCart();
}

// Remove item from cart
function removeFromCart(productId) {

  for (let i = 0; i < cart.length; i++) {
    if (cart[i].id === productId) {
      cart.splice(i, 1);
      break;
    }
  }

  sessionStorage.setItem("cart", JSON.stringify(cart));
  renderCart();
}

// Clear cart
function clearCart() {
  cart = [];
  sessionStorage.setItem("cart", JSON.stringify(cart));
  renderCart();
}

// Attach clear button
clearBtn.onclick = clearCart;

// Initial render
renderProducts();
renderCart();
