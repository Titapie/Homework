function isPrime (n){
    if (n<2) return false; 
    for ( let i =2; i<=n**0.5;i++)
        if (n % i===0) return false;
    return true;
}
function isDivisibleBy15(n){
    if ( n % 15===0) return true; else return false;
}
function triangle(n){
    for (let j = 1; j<=n; j++)
    {
        let row="";
        for (let k=1; k<=j; k++)
        {   
            if (isDivisibleBy15(k)) row=row+"# ";
                else if (isPrime(k)) row=row+"* ";
                    else row=row +k + " ";
        }
    console.log(row);
    if ( j % 2=== 0 ) {
        let s2=""
        for (let k =1; k<=j; k++)
            s2=s2+"-";
        console.log(s2);
    }
    }
}
console.log("Testcase n=5");
triangle(5);

console.log("Testcase n=7");
triangle(7);

console.log("Testcase n=15");
triangle(15);