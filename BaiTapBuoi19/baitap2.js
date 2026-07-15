const customers = [
  { id: 1, name: "John Doe", email: "john@example.com" },
  { id: 2, name: "Jane Smith", email: "jane@example.com" },
  { id: 3, name: "Alice Johnson", email: "alice@example.com" },
  { id: 4, name: "Bob Brown", email: "bob@example.com" },
  { id: 5, name: "Charlie Green", email: "charlie@example.com" },
];

const products = [
  { id: 101, name: "Laptop", price: 1200 },
  { id: 102, name: "Phone", price: 800 },
  { id: 103, name: "Tablet", price: 500 },
  { id: 104, name: "Smartwatch", price: 300 },
  { id: 105, name: "Headphones", price: 150 },
];

const orders = [
  {
    id: 1001,
    customerId: 1,
    items: [
      { productId: 101, quantity: 2 },
      { productId: 102, quantity: 1 },
    ],
  },
  {
    id: 1002,
    customerId: 2,
    items: [
      { productId: 102, quantity: 1 },
      { productId: 103, quantity: 3 },
    ],
  },
  {
    id: 1003,
    customerId: 3,
    items: [
      { productId: 104, quantity: 5 },
      { productId: 105, quantity: 2 },
    ],
  },
  {
    id: 1004,
    customerId: 4,
    items: [
      { productId: 101, quantity: 1 },
      { productId: 103, quantity: 2 },
    ],
  },
  {
    id: 1005,
    customerId: 5,
    items: [{ productId: 105, quantity: 10 }],
  },
  {
    id: 1006,
    customerId: 1,
    items: [
      { productId: 101, quantity: 1 },
      { productId: 105, quantity: 3 },
    ],
  },
  {
    id: 1007,
    customerId: 2,
    items: [
      { productId: 104, quantity: 2 },
      { productId: 103, quantity: 1 },
    ],
  },
  {
    id: 1008,
    customerId: 3,
    items: [{ productId: 102, quantity: 2 }],
  },
  {
    id: 1009,
    customerId: 4,
    items: [
      { productId: 101, quantity: 1 },
      { productId: 102, quantity: 1 },
    ],
  },
  {
    id: 1010,
    customerId: 5,
    items: [
      { productId: 103, quantity: 4 },
      { productId: 104, quantity: 3 },
    ],
  },
];
function mergeProduct(orders){
      const result =[];
      orders.forEach((order)=>{
          order.items.forEach( (item)=>{
            let index=result.find((product)=> product.productId===item.productId);
            if ( index) 
             {
                 index.quantity+=item.quantity;
              }
             else {
                result.push({
                              name:products.find((product)=> product.id ===item.productId).name,
                              productId: item.productId,
                              quantity:item.quantity
                          })
              }
          })
      })
      return result;
}
function sumTotalSpent(orders) {
    let sum=0;
      orders.forEach((order) => {
            sum=sum + order.items.reduce((acc,cur)=>{
              return acc+cur.quantity * products.find((product)=>cur.productId===product.id).price;
            },0)
       });
       return sum;
}

function getCustomerStatistics(customers, products, orders) {
  const result = customers.map((customer) => {
        return {
            id:customer.id,
            name:customer.name,
            totalSpent: sumTotalSpent(orders.filter((order)=>order.customerId===customer.id)),
            products:mergeProduct(orders.filter((order)=>order.customerId===customer.id)).map((product)=>{
              return {
                name:product.name,
                quantity:product.quantity,
                totalSpent:product.quantity * products.find((cur)=>product.productId===cur.id).price
              }
            }
            ).sort((a,b)=>b.totalSpent-a.totalSpent),
        }
      }
    )
    return result.sort((a,b)=>b.totalSpent-a.totalSpent);
}

console.log(getCustomerStatistics(customers, products, orders));

