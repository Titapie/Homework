function addDays(dateString, days){
    const date = new Date(dateString);
    date.setDate(date.getDate() + days);

    return `${date.getFullYear()}-${
        date.getMonth() + 1 < 10
            ? "0" + (date.getMonth() + 1)
            : date.getMonth() + 1
    }-${
        date.getDate() < 10
            ? "0" + date.getDate()
            : date.getDate()
    }`;
}

function getDaysBetween(date1String, date2String){
    const date1 = new Date(date1String);
    const date2 = new Date(date2String);

    return Math.abs(date2.getTime() - date1.getTime()) / (1000 * 60 * 60 * 24);
}

function isExpired(expiryDateString, currentDateString){
    const expiryDate = new Date(expiryDateString);
    const currentDate = new Date(currentDateString);

    return currentDate > expiryDate;
}

function getCountdown(targetDateString, currentDateString){
    const targetDate = new Date(targetDateString);
    const currentDate = new Date(currentDateString);

    if (currentDate >= targetDate){
        return "Đã qua hạn";
    }

    const diff = targetDate.getTime() - currentDate.getTime();

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
        (diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );

    return `Còn ${days} ngày ${hours} giờ`;
}

console.log(addDays("2026-07-19", 10));                  // "2026-07-29"
console.log(addDays("2026-01-01", -5));                  // "2025-12-27"

console.log(getDaysBetween("2026-07-19", "2026-08-01")); // 13
console.log(getDaysBetween("2026-01-01", "2026-12-31")); // 364

console.log(isExpired("2026-07-01", "2026-07-19"));      // true
console.log(isExpired("2026-12-31", "2026-07-19"));      // false

console.log(getCountdown("2026-08-01T00:00:00", "2026-07-19T12:00:00"));
// "Còn 12 ngày 12 giờ"

console.log(getCountdown("2026-07-01T00:00:00", "2026-07-19T12:00:00"));
// "Đã qua hạn"