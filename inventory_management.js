//coding challenge 4

//part 1

const inventory = [
    {
        name: 'computer',
        price: 1000,
        quantity: 14,
        lowStockLevel: 5
      },
      {
        name: 'phone',
        price: 800,
        quantity: 15,
        lowStockLevel: 7
      },
      {
        name: 'headphones',
        price: 200,
        quantity: 22,
        lowStockLevel: 8
      },
      {
        name: 'smart watch',
        price: 350,
        quantity: 12,
        lowStockLevel: 5
      },
      {
        name: 'tablet',
        price: 600,
        quantity: 16,
        lowStockLevel: 8
      }
    ];

    //part 2

    function displayProductDetails(product) {
        const stockStatus = product.quantity <= product.lowStockLevel ? 'Low Stock' : 'In Stock';
        console.log(`Name: ${product.name}`);
        console.log(`Price: $${product.price}`);
        console.log(`Quantity in Stock: ${product.quantity}`);
        console.log(`Stock Status: ${stockStatus}`);
      }

      