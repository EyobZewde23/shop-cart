// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  //... your code goes here

  const priceElement=product.querySelector(".price span");
  const quantityElement=product.querySelector(".quantity input");

  const price=parseFloat(priceElement.innerHTML);
  const quantity=quantityElement.value;

  const subtotal = price * quantity;
  
  const subtotalElement = product.querySelector(".subtotal span");
  subtotalElement.innerHTML=subtotal.toFixed(2);

  return subtotal;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  //const singleProduct = document.querySelector('.product');
  //updateSubtotal(singleProduct);
  
  // end of test

  // ITERATION 2
  //... your code goes here

  const allProduct = document.querySelectorAll(".product");

  for (let product of allProduct){
    updateSubtotal(product);
  };

  // ITERATION 3
  //... your code goes here

  let total=0;
  for (let product of allProduct){
    total+=updateSubtotal(product)
  };

  const totalElement = document.querySelector("#total-value span");
  totalElement.innerHTML=total.toFixed(2);

}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here

  const productItem = target.closest('.product');
  const removeItem = productItem.parentNode;

  removeItem.removeChild(productItem);
  productItem.remove();
  calculateAll();
}

// ITERATION 5

function createProduct() {
  //... your code goes here

  const productNameInput = document.querySelector('.create-product input[type="text"]');
  const productPriceInput = document.querySelector('.create-product input[type="number"]');

  const productName = productNameInput.value;
  const productPrice = parseFloat(productPriceInput.value).toFixed(2);

  if (!productName || isNaN(productPrice)) {
    alert('Please enter a valid product name and price.');
    return;
  }

  const newProductRow = document.createElement('tr');
  newProductRow.classList.add('product');

  newProductRow.innerHTML = `
  <td class="name"><span>${productName}</span></td>
  <td class="price">$<span>${productPrice}</span></td>
  <td class="quantity">
    <input type="number" value="0" min="0" placeholder="quantity">
  </td>
  <td class="subtotal">$<span>0</span></td>
  <td class="action">
    <button class="btn btn-remove">Remove</button>
  </td>
  `;

  const cartBody = document.querySelector('#cart tbody');
  cartBody.appendChild(newProductRow);

  const removebutton = newProductRow.querySelector('.btn-remove');
  removebutton.addEventListener('click' , removeProduct);

  productNameInput.value = '';
  productPriceInput.value = '';

  calculateAll();
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const createBtn = document.getElementById('create');
  createBtn.addEventListener('click', createProduct);

  const removeBtn = document.querySelectorAll('.btn.btn-remove');
  removeBtn.forEach(btn => {
    btn.addEventListener('click' , removeProduct)
  });

  //... your code goes here
});
