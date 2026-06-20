function classifyTriangle(a, b, c){
    if (a<=0 || b<=0 || c<=0) return "Cạnh không hợp lệ";
    if ( a+b <=c || a+c <=b || b+c<=a) return "Không tạo thành tam giác";
    if ( a===b && b===c) return "Tam giác đều";
    if ( a===b || b===c || a===c) return "Tam giác cân";
    if (a**2===b**2+c**2 || b**2===a**2+c**2 || c**2===b**2+a**2) return "Tam giác vuông";
    return "Tam giác thường";
}
console.log(classifyTriangle(3, 4, 5));

console.log(classifyTriangle(2, 2, 2));

console.log(classifyTriangle(1, 2, 10));