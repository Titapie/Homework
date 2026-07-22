
function formatBirthday(dateString){
    const date=new Date(dateString);
    return `${date.getDate()<10?"0"+date.getDate():date.getDate()}/${date.getMonth()<9?"0"+(date.getMonth()+1):date.getMonth()+1}/${date.getFullYear()}`
}
function getAge(birthDateString, currentDateString){
    const date1= new Date(birthDateString);
    const date2= new Date(currentDateString);
    
    if ((date2.getDate()>=date1.getDate()&&date1.getMonth()==date2.getMonth())|| date2.getMonth()>date1.getMonth()) 
        return date2.getFullYear()-date1.getFullYear();
    return date2.getFullYear()-date1.getFullYear()-1
}
function getDayOfWeekName(dateString){
    const date=new Date(dateString);
    switch (date.getDay()){
        case 0:
            return "Chủ nhật";
        case 1:
            return "Thứ hai";
        case 2:
            return "Thứ ba";
        case 3:
            return "Thứ tư";
        case 4:
            return "Thứ năm";
        case 5:
            return "Thứ sáu";
        case 6:
            return "Thứ bảy"
    }
      
}
console.log(formatBirthday("1995-03-25"))   // "25/03/1995"
console.log(formatBirthday("2000-12-01"))   // "01/12/2000")

console.log(getAge("1995-03-25", "2026-07-19"))   // 31  (đã qua sinh nhật tháng 3)
console.log(getAge("2000-12-01", "2026-07-19"))   // 25  (chưa tới sinh nhật tháng 12, nên chưa tính là 26)
console.log(getAge("1995-08-01", "2026-07-19"))   // 30  (còn vài ngày nữa mới tới sinh nhật)

console.log(getDayOfWeekName("2026-07-19"));   // "Chủ nhật"
console.log(getDayOfWeekName("2000-01-01"))   // "Thứ bảy"
