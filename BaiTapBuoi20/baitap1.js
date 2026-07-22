const item1={
    name: "Nguyễn Văn A",
    age:28,
    introduce(){
        return `Tôi tên là ${this.name}, ${this.age} tuổi`
    }
}
const item2=Object.create(item1,{
    department:{ value:"IT",
        writable:true
    },
    wage: {value: 15000000,
        writable:true
    },
    getInfo:{
        value:function(){ return `${this.name} làm ở phòng ${this.department} lương ${this.wage}`}}})
const item3=Object.create(item2,{
    name:{
        value:"Nguyễn Văn A"
    },
    age:{
        value: 29
    },
     department: {
        value: "IT"
    },
    wage: {
        value: 12345678
    }})
const item4=Object.create(item2,{
    name:{
        value:"Nguyễn Văn B"
    },
    age:{
        value: 30
    },
    department: {
        value: "IT"
    },
    wage: {
        value: 12000000
    }})
const item5=Object.create(item2,{
    name:{
        value:"Nguyễn Văn C"
    },
    age:{
        value: 31
    },
    department: {
        value: "IT"
    },
    wage: {
        value: 12300000
    }})
const item6=Object.create(item2,{
    name:{
        value:"Nguyễn Văn D"
    },
    age:{
        value: 32
    },
    department: {
        value: "IT"
    },
    wage: {
        value: 99999999
    }})
const item7=Object.create(item2,{
    name:{
        value:"Nguyễn Văn E"
    },
    age:{
        value: 33
    },
    department: {
        value: "IT"
    },
    wage: {
        value: 222222222
    }})
const checkOwnProperty = (items,method)=>{
    return Object.getOwnPropertyNames(items).includes(method)
}

console.log(item1.introduce());
// Output: "Tôi là Nguyễn Văn A, 28 tuổi"

console.log(item2.getInfo());
// Output: "Nguyễn Văn A làm ở phòng IT, lương 15000000"

console.log(checkOwnProperty(item1,"name")  );
// Output: true
console.log(checkOwnProperty(item1,"introduce"));
// Output: false

// console.log(Object.getPrototypeOf(item1) === levelTwoProto);
// // Output: true
// console.log(Object.getPrototypeOf(levelTwoProto) === baseProto);
// // Output: true

// Object.setPrototypeOf(item4, newProto);
// console.log(item4.getInfo());
// // Output: câu mô tả khác hẳn, lấy từ newProto

// console.log(Object.getOwnPropertyNames(item1));
// // Output: ["name", "age", "department", "salary"]

// console.log(Object.getOwnPropertyDescriptor(item1, "salary"));
// // Output: { value: 15000000, writable: true, enumerable: true, configurable: true }

// Object.seal(item2);
// item2.bonus = 1000000;
// console.log(item2.bonus);
// // Output: undefined

// item2.salary = 20000000;
// console.log(item2.salary);
// // Output: 20000000

// console.log(Object.isSealed(item2));
// // Output: true

// const grouped = Object.groupBy(items, item => item.department);
// console.log(grouped);
// // Output: object chứa các mảng item, đã nhóm theo phòng ban

// const lookup = Object.fromEntries([["A001", "Nguyễn Văn A"], ["A002", "Trần Thị B"]]);
// console.log(lookup);
// // Output: { A001: "Nguyễn Văn A", A002: "Trần Thị B" }
// console.log(lookup["A002"]);
// Output: "Trần Thị B"
