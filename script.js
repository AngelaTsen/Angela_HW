

// Мінімум
const products = [
    {name:"Молоко", quantity: 2, purchased: true, pricePerUnit: 38},
    {name:"Яйця",quantity: 12, purchased: false, pricePerUnit: 77},
    {name:"Хліб",quantity: 1, purchased: true, pricePerUnit: 55},
    {name:"Яблука",quantity: 5, purchased: false, pricePerUnit: 30}
  ];


// 1
const displayProducts = (array) => array.sort((a, b) =>  a.purchased - b.purchased);
console.log(displayProducts(products));

//2
const productsTrue = (neededName) => products.forEach(object => object.name === neededName ? object.purchased = true : null);
productsTrue('Яблука');
console.log(products);

// Норма
// 1
const products1 = (deleteName) => {
    let array = products; 
    array.forEach((object, key) => object.name === deleteName ? array.splice(key,1) : null ); 
    return array;
};
console.log(products1('Хліб'));

// 2

function addProduct ()
