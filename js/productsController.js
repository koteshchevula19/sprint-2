class ProductsController {

    constructor(currentId = 0) {
        this.products = [];
        this.currentId = currentId;
        this.loadProductsFromLocalStorage();
    }

  addProduct(name, description, imageUrl) {
        const product = {
            id: this.currentId++, // Increment the currentId property
            name: name,
            description: description,
            imageUrl: imageUrl
        };
        this.products.push(product); // Push the product to the products array
        localStorage.setItem("products", JSON.stringify(this.products));
    }
    loadProductsFromLocalStorage() {
        const storageProducts = localStorage.getItem("products")
        if (storageProducts) {
            const products = JSON.parse(storageProducts)
            for (var i = 0, size = products.length; i < size; i++) {
                const product = products[i];
                this.products.push(product);
            }
        }
    }
    
}

/* const controller = new ProductsController(); // Create an instance of ProductsController
controller.addProduct("Product 1", "Description 1", "image1.jpg"); // Add a product
controller.addProduct("Product 2", "Description 2", "image2.jpg"); // Add another product
controller.addProduct("Product 3", "Description 3", "image3.jpg"); // Add a product
controller.addProduct("Product 4", "Description 4", "image4.jpg"); // Add another product
console.log(controller.products); // Output the products array
*/


