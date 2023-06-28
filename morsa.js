
let homeLink = document.querySelector("#home-link");
let productsLink = document.querySelector("#products-link");
let contactLink = document.querySelector("#contact-link");
let loginLink = document.querySelector("#login-link");
let logoutLink = document.querySelector("#logout-link");
let cartLink = document.querySelector("#cart-link");

homeLink.addEventListener("click", function() {
  // Lógica para exibir a página Home
  console.log("Exibindo a página Home");
});

productsLink.addEventListener("click", function() {
  // Lógica para exibir a página de Produtos
  console.log("Exibindo a página de Produtos");
});

contactLink.addEventListener("click", function() {
  // Lógica para exibir a página de Contato
  console.log("Exibindo a página de Contato");
});

loginLink.addEventListener("click", function() {
  // Lógica para exibir a página de Login
  console.log("Exibindo a página de Login");
});

logoutLink.addEventListener("click", function() {
  // Lógica para executar o logout
  console.log("Executando o logout");
});

cartLink.addEventListener("click", function() {
  // Lógica para exibir a página do Carrinho
  console.log("Exibindo a página do Carrinho");
});


function incrementCounter(button) {
  let counterElement = button.parentNode.querySelector('.counter');
  let currentCount = parseInt(counterElement.innerText);
  counterElement.innerText = currentCount + 1;
}