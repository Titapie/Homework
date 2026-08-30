const config = {
    mucPhuPhi:0.1
};
Object.freeze(config);


class MyClass{
    constructor(name){
        this.name=name;
        this.Items=[];
        this.discount=0;
    }
    addItem(name,price,quantity){
        this.Items.push({name:name,price:price,quantity:quantity})
    }
    get total(){
        return (this.Items.reduce((acc,cur)=>acc+=cur.price*cur.quantity,0)*(1+config.mucPhuPhi))/100*(100-this.discount);
    }
    set discountPercent(value){
        if (value<0 || value>100) {throw new Error("Discount phải từ 0 đến 100")}
            else this.discount=value;
    }

}
function logSummary() {
    console.log(this.name + ": "+ this.total);
}



config.mucPhuPhi = 0.5;
console.log(config.mucPhuPhi);
// Output: vẫn là giá trị ban đầu, không đổi
console.log(Object.isFrozen(config));
// Output: true


const instance = new MyClass("Danh sách của An");
instance.addItem("Bàn phím", 500000, 2);
instance.addItem("Chuột", 200000, 1);
console.log(instance.Items)
console.log(instance.total);
// Output: 1320000

instance.discountPercent = 10;
console.log(instance.total);
// Output: 1188000
try {
  instance.discountPercent = 150;
} catch (error) {
  console.log(error.message);
}
setTimeout(logSummary.bind(instance), 100);

Object.defineProperty(instance, "id" , {
    value:"alo",
    writable:false,
    enumerable:false,
    configurable:false
})
console.log(Object.keys(instance));
// Output: mảng không có chữ "id" trong đó

instance.id = "hack123";
console.log(instance.id);
// Output: vẫn là id lúc đầu, không bị thay

const objA={id:1, name:"Nguyễn Văn A", address:"Hà Nội, Việt Nam"}
const objB={id:2, name:"Nguyễn Văn C", class:"12B8"}
const merged = Object.assign({},objA,objB);
console.log(merged);
// Output: object đã gộp xong, ưu tiên giá trị của object thứ hai
console.log(objA);
// Output: object gốc vẫn y nguyên, không bị đụng tới