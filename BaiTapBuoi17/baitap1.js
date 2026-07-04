function createSlug(text){
    return text.toLowerCase().replaceAll(" ","-").replaceAll(/[^a-z0-9-]/g, '');
}
function generateOrderId(productName, quantity){
    return "ORD-"+productName.toUpperCase().slice(0,3)+"-"+quantity+"-"+productName.length;
}
function formatPrice(price, currency="VND"){
    let symbol = currency == "USD" ? "$" : "₫";
    let price2="";
    price=price.toString();
    for (let i=1;i<=price.length;i++){
        if ((i) % 3 == 0 && i != 1 && i!=price.length) 
            price2 = "," + price[price.length-i] + price2;
        else 
            price2 = price[price.length-i] + price2;
    }
    if (currency == "USD") 
        return symbol + price2+".00";
    else
        return price2.replaceAll(",", ".") + " " + symbol;

}
const baseUrl = "https://shop.vn";
const product = { name: "MacBook Pro 2024", id: 101, category: "laptop" };

function buildProductUrl(baseUrl, product){
    return `${baseUrl}/${product.category}/${createSlug(product.name)}?id=${product.id}`;
}
// "https://shop.vn/laptop/macbook-pro-2024?id=101"

console.log(createSlug("MacBook Pro 2024"));      // "macbook-pro-2024"
console.log(createSlug("Bàn Phím Cơ RGB"));      // "bn-phm-c-rgb"  ← tiếng Việt mất dấu là bình thường
console.log(createSlug("iPhone 15 Pro Max!!!"));  // "iphone-15-pro-max"

console.log(generateOrderId("MacBook Pro", 2));   // "ORD-MAC-2-11"
console.log(generateOrderId("iPhone 15", 5));     // "ORD-IPH-5-9"
console.log(generateOrderId("Bàn phím cơ", 1));  // "ORD-BÀN-1-11"

console.log(formatPrice(2000000, "VND"));   // "2.000.000 ₫"
console.log(formatPrice(2000, "USD"));      // "$2,000.00"
console.log(formatPrice(500000));           // "500.000 ₫"  (mặc định VND)

console.log(buildProductUrl(baseUrl, product));
