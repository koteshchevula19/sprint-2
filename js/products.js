// Initialize a new TaskManager with currentId set to 0
const productsController = new ProductsController(0);


function addProductCard(product) {
    const productHTML = '<div class="col-4 my-2 text-center">\n'+
        '    <div class="card" style="width: 16rem;">\n' +
        '    <img src="' + product.imageUrl + '"  alt="product image">\n' +
        '    <div class="card-body">\n' +
        '        <h5 class="card-title">' + product.name + '</h5>\n' +
        '        <p class="card-text">' + product.description + '</p>\n' +
        '    </div>\n' +
        '</div>\n' +
        '</div>\n';

    const productsContainer = document.getElementById("list-products");
    productsContainer.innerHTML += productHTML;
    //i++; // i = i+1;
    //i+=2; // i = i + 2;
    //str += s; // str = str + s;
    //innerHTML = innerHTML + productHTML;
}

/*function loadStorageSampleData() {
    if (!localStorage.getProduct("products")) {
        const sampleProducts = [{
            'name': 'juice',
            'img': 'https://www.gs1india.org/media/Juice_pack.jpg',
            'description': 'Orange and Apple juice fresh and delicious'
        },
        {
            'name': 'Ruffles Chicken',
            'img': 'https://s3-ap-southeast-1.amazonaws.com/www8.fairprice.com.sg/fpol/media/images/product/XL/13086598_LXL1.jpg',
            'description': 'Ruffles Potato Chips - Chicken'
        }];
        
    }
}*/

function loadCardsListFromProductsController() {
    console.log('start');
    for (var i = 0, size = productsController.products.length; i < size; i++) {
        const product = productsController.products[i];
        addProductCard(product);
       
      
    }
}

//loadStorageSampleData();
loadCardsListFromProductsController()
