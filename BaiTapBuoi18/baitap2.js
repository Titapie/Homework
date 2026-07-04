const createCalculator=function(){
    return {
        add: (a, b)=>a+b,
        subtract: (a,b)=>a-b,
        multiply: (a,b)=>a*b,
        divide: (a,b)=>{
            if ( b==0 ) return "Lỗi: chia cho 0";
            return (a/b)
            }
        }
    };
const calculator=createCalculator();

function average(...numbers){
    let avr=0;
    if (numbers.length==0) return 0;
    numbers.forEach((values)=>
    {
        avr=avr+values;
    })
    return Number(avr/numbers.length)
}
function applyDiscount(price, discountPercent = 10){
    if (typeof(price)!="number"  || isNaN(price)) return "Giá không hợp lệ";
    return Math.floor(Number(price/100*(100-discountPercent)));
}
function safeCalculate(operation, ...numbers){
    let result=0;
    if (operation=="add") {
        result=0;
        numbers.forEach((values)=>
        {
            result=result+values;
        }
        )
    }
    else if (operation=="subtract"){
        result=0;
        numbers.forEach((values,index)=>
        {
            index==0? result+=values:result-=values;
        }
        )
    }else if (operation=="multiply"){
        result=1;
        numbers.forEach((values)=>
        {
            result*=values;
        }
        )
    } else if (operation=="average"){
        numbers.forEach((values)=>
        {
              result=result+values;
        })
        result/=numbers.length ;
        
    }else    return "Phép tính không được hỗ trợ";
    if (typeof(result)=="number"&&isNaN(result)==false) return result; else return "Kết quả không hợp lệ";

}
console.log(calculator.add(2, 3));       // 5
console.log(calculator.subtract(10, 4)); // 6
console.log(calculator.multiply(3, 5));  // 15
console.log(calculator.divide(10, 2));   // 5
console.log(calculator.divide(10, 0));   // "Lỗi: chia cho 0"

console.log(average(10, 20, 30))   // 20
console.log(average(5))             // 5
console.log(average())              // 0
console.log(average(1, 2, 3, 4, 5)) // 3

console.log(applyDiscount(100000))          // 90000  (giảm 10% mặc định)
console.log(applyDiscount(100000, 20))      // 80000
console.log(applyDiscount(100000, 0))       // 100000
console.log(applyDiscount("abc", 10))       // "Giá không hợp lệ"
console.log(applyDiscount(NaN, 10))         // "Giá không hợp lệ"

console.log(safeCalculate("add", 1, 2, 3))          // 6
console.log(safeCalculate("multiply", 2, 3, 4))     // 24
console.log(safeCalculate("average", 10, 20))       // 15
console.log(safeCalculate("divide", 10, 2))         // "Phép tính không được hỗ trợ"
console.log(safeCalculate("add", 1, "abc", 3))      // "Kết quả không hợp lệ"
