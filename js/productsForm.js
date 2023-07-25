
// Initialize a new ProductsController with currentId set to 0
const productsController = new ProductsController(0);

// Select the New Product Form
const newProductForm = document.querySelector('#newProductForm');

// Add an 'onsubmit' event listener
newProductForm.addEventListener('submit', (event) => {
    // Prevent default action
    event.preventDefault();

    // Select the inputs
    const newProductName = document.querySelector('#newProductName');
    const newProductDescription = document.querySelector('#newProductDescription');
    const newProductImageUrl = document.querySelector('#newProductImageUrl');    

    // Get the values of the inputs
    const name = newProductName.value;
    const description = newProductDescription.value;
    const imageUrl = newProductImageUrl.value;

    /*
        Validation code here
    */

    // Add the Product to the ProductsController
    productsController.addProduct(name, description, imageUrl);

    // Clear the form
    newProductName.value = '';
    newProductDescription.value = '';
    newProductImageUrl.value='';
      
});
