const customer = {
  firstName: "John",
  lastName: "Doe",
  city: "New York",
};

const cart = [
  { name: "Item 1", price: 20 },
  { name: "Item 2", price: 30 },
  { name: "Item 3", price: 50 },
  { name: "Item 4", price: 40 },
];


//Part 1
const { firstName, lastName, city } = customer;
console.log(firstName);
console.log(lastName);
console.log(city);


//Part 2
function calculateTotalPrice(...cartItems) {
  return cartItems.reduce((total, item) => total + item.price, 0);
}

const totalPrice = calculateTotalPrice(...cart);
console.log(totalPrice);

//Part 3
const [firstItem, secondItem, ...remainingItems] = cart;

console.log(firstItem); 
console.log(secondItem);
console.log(remainingItems);
