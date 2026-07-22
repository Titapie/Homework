function createOrderSystem() {
    let cart = [];
    return {
        addToCart(name, price, qty) {
            cart.push({
                name: name,
                price: price,
                qty: qty
            });
            return cart.length;
        },
        checkout(distance) {
            let subtotal = 0;
            for (const item of cart) {
                subtotal += item.price * item.qty;
            }
            let shippingFee;
            if (subtotal >= 500000) {
                shippingFee = 0;
            }
            else if (distance <= 5) {
                shippingFee = 15000;
            }
            else if (distance <= 20) {
                shippingFee = 30000;
            }
            else {
                shippingFee = 50000;
            }
            const finalTotal = subtotal + shippingFee;
            cart = [];
            return {
                subtotal,
                shippingFee,
                finalTotal
            };
        },
        getCartSize() {
            return cart.length;
        }
    };
}

const store = createOrderSystem();

console.log(store.addToCart("Mũ lưỡi trai", 120000, 1));
console.log(store.getCartSize());

console.log(store.checkout(15));

console.log(store.getCartSize());

const store2 = createOrderSystem();

console.log(store2.addToCart("Tất", 30000, 2));

console.log(store2.checkout(3));

const store3 = createOrderSystem();

console.log(store3.addToCart("Áo khoác", 600000, 1));

console.log(store3.checkout(30));

console.log(store.getCartSize());
console.log(store2.getCartSize());
console.log(store3.getCartSize());