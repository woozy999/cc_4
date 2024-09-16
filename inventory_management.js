//coding challenge 4

//part 1

const inventory = [
    { name: 'Laptop', price: 1200, quantity: 10, lowStockLevel: 3 },
    { name: 'Smartphone', price: 800, quantity: 5, lowStockLevel: 2 },
    { name: 'Tablet', price: 400, quantity: 7, lowStockLevel: 1 },
    { name: 'Headphones', price: 100, quantity: 15, lowStockLevel: 5 },
    { name: 'Smartwatch', price: 250, quantity: 3, lowStockLevel: 1 }
  ];

    //part 2

    function displayProductDetails(product) {
        const stockStatus = product.quantity <= product.lowStockLevel ? 'Low Stock' : 'In Stock';
        console.log(`Name: ${product.name}`);
        console.log(`Price: $${product.price}`);
        console.log(`Quantity in Stock: ${product.quantity}`);
        console.log(`Stock Status: ${stockStatus}`);
      }

      //part 3

      function updateStock(product, unitsSold) {
        product.quantity -= unitsSold;
        if (product.quantity <= 0) {
          product.quantity = 0;
          console.log(`${product.name} is out of stock`);
        } 
        else if (product.quantity <= product.lowStockLevel) {
          console.log(`${product.name} is low on stock`);
        } 
        else {
          console.log(`${product.name} stock now updated! Current quantity is: ${product.quantity}`);
        }
      }

      //part 4

      function checkLowStock() {
        console.log('Checking low stock:');
        inventory.forEach(product => {
          if (product.quantity <= product.lowStockLevel) {
            console.log(`${product.name} is low on stock`);
          }
        });
      }

      //part 5

      function calculateInventoryValue() {
        let totalValue = 0;
        inventory.forEach(product => {
          totalValue += product.price * product.quantity;
        });
        return totalValue;
      }

      //part 6

      function processSale(productName, unitsSold) {
        const product = inventory.find(item => item.name === productName);
        if (product) {
          updateStock(product, unitsSold);
        } 
        else {
          console.log(`Error: ${productName} is not in the inventory.`);
        }
      }

      //function calls

      //all products
      console.log('Product Details');
      inventory.forEach(product => {
        displayProductDetails(product)
      });

      //update stock

      console.log('Processing a sale:');
      processSale('Laptop', 4);

      //check for low stock

      checkLowStock();

      //calculate inventory value

      const totalValue = calculateInventoryValue();
      console.log(`Total inventory value: $${totalValue}`);

      //process one more sale

      console.log('Processing Sale:');
      processSale('Smartwatch', 2);

      //check low stock again after a sale happens

      checkLowStock();

    

