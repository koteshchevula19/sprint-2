
// Initialize a new ProductsController with currentId set to 0
const productsController = new ProductsController(0);

// Select the New Product Form
const shoeProductForm = document.querySelector('#shoeProductForm');

// Add an 'onsubmit' event listener
shoeProductForm.addEventListener('submit', (event) => {
    // Prevent default action
    event.preventDefault(); //This can be useful if you want to perform some validation or processing before submitting the form to the server or handling the form submission entirely through JavaScript, without a page reload.

    // Select the inputs
    const shoeProductName = document.querySelector('#shoeProductName');
    const shoeProductDescription = document.querySelector('#shoeProductDescription');
    const shoeProductImageUrl = document.querySelector('#shoeProductImageUrl');

    // Get the values of the inputs
    const name = shoeProductName.value;
    const description = shoeProductDescription.value;
    const imageUrl = shoeProductImageUrl.value;

  

    // Add the Product to the ProductsController
    productsController.addProduct(name, description, imageUrl);

    // Clear the form
    shoeProductName.value = '';
    shoeProductDescription.value = '';
    shoeProductImageUrl.value = '';

});
