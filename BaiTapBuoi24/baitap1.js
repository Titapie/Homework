class saiDuLieu extends Error {
  constructor(message,field) {
    super(message);
    this.name = "Sai dữ liệu";
    this.field=field;
  }
}
class rangeError extends Error {
  constructor(message,field) {
    super(message);
    this.name = "Giá trị vượt phạm vi";
    this.field=field;
  }
}
class invalidEmailError extends Error {
  constructor(message,field) {
    super(message);
    this.name = "InvalidEmailError";
    this.field=field;
  }
}
class weakPasswordError extends Error {
  constructor(message,field) {
    super(message);
    this.name = "WeakPasswordError";
    this.field=field;
  }
}
class registerUser{
    constructor(obj) {
        if (!obj || Object.keys(obj).length===0)  throw new saiDuLieu("tham số truyền vào không phải object","")
        if ((typeof(obj.username)!="string")) throw new saiDuLieu("sai kiểu dữ liệu của username","username")
        if (typeof(obj.age)!="number") throw new saiDuLieu("sai kiểu dữ liệu của age","age")
        if (obj.age<13 || obj.age>120) throw new rangeError("giá trị của age vượt phạm vi","age")
        if (!(typeof(obj.email)==="string")||obj.email.length===0 || !obj.email.includes("@")) throw new invalidEmailError("email không chứa ký tự @","email")
        if (!(typeof(obj.password)==="string")|| obj.password.length<8) throw new weakPasswordError("password có độ dài quá nhỏ","password")
        this.obj=obj
    return{
    success: true,
    message: "Đăng ký thành công"
    }
    }
}


try {
    const user = new registerUser({
    username: "an",
    age: 20,
    email: "a@b.com",
    password: "12345678"
});


console.log(user)
} catch (error) {
    if (error instanceof saiDuLieu) {
    console.log("Lỗi sai kiểu dữ liệu:",error.message );
  } else if (error instanceof rangeError) {
    console.log("Lỗi vượt phạm vi:", error.field);
  } else if (error instanceof invalidEmailError) {
    console.log("Lỗi email không hợp lệ");
  } else if (error instanceof weakPasswordError) {
    console.log("Lỗi mật khẩu quá ngắn");
  } 
 
  
}finally{
    console.log("Quá trình xử lý đăng ký đã kết thúc.")
}

