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
    salary: {value: 15000000,
        writable:true
    },
    getInfo:{
        value:function(){ return `${this.name} làm ở phòng ${this.department} lương ${this.salary}`}}})
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
    salary: {
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
    salary: {
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
        value: "marketing"
    },
    salary: {
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
    salary: {
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
        value: "Tài chính"
    },
    salary: {
        value: 222222222
    }})
const checkOwnProperty = (items,method)=>{
    return Object.hasOwn(items,method)
}

console.log(item1.introduce());
// Output: "Tôi là Nguyễn Văn A, 28 tuổi"

console.log(item2.getInfo());
// Output: "Nguyễn Văn A làm ở phòng IT, lương 15000000"

console.log(checkOwnProperty(item1, "name"));
// Output: true
console.log(checkOwnProperty(item1, "introduce"));
// Output: false

console.log(Object.getPrototypeOf(item3) ===  item2);
// Output: true
console.log(Object.getPrototypeOf(item2) ===  item1);
// Output: true

Object.setPrototypeOf(item4, {getInfo:function(){ return `câu mô tả khác hẳn, lấy từ newProto`}});
console.log(item4.getInfo());
// Output: câu mô tả khác hẳn, lấy từ newProto

console.log(Object.getOwnPropertyNames(item3));
// Output: ["name", "age", "department", "salary"]

console.log(Object.getOwnPropertyDescriptor(item3, "salary"));


Object.seal(item3);
item3.bonus = 1000000;
console.log(item3.bonus);
// Output: undefined

item3.salary = 20000000;
console.log(item3.salary);
// Output: 20000000

console.log(Object.isSealed(item3));
// Output: true

const grouped = Object.groupBy([item1,item2,item3,item4,item5,item6,item7], (item) => { return item.department; });
console.log(grouped);
// Output: object chứa các mảng item, đã nhóm theo phòng ban

const lookup = Object.fromEntries([["A001", "Nguyễn Văn A"], ["A002", "Trần Thị B"]]);
console.log(lookup);
// Output: { A001: "Nguyễn Văn A", A002: "Trần Thị B" }
console.log(lookup["A002"]);
// Output: "Trần Thị B"
