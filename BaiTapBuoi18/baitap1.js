const examResults = [
  { student: "An", scores: [8.5, 7, 9, 6.5] },
  { student: "Bình", scores: [10, 9.5, 8, 10] },
  { student: "Chi", scores: [5, 4.5, 6, 5.5] },
  { student: "Duy", scores: [7, 7, 7, 7] },
];
function getAverage(scores){
    let avr=0;
    scores.forEach(element => {
        avr=avr+element;        
    });
    return Number((avr/scores.length).toFixed(1));
}
function classifyStudent(average){
    if (average>=9) return "Xuất xắc"; 
    else if (average>=8) return "Giỏi";
    else if (average>=6.5) return "Khá";
    else if (average>=5) return "Trung Bình";
    else return "Yếu";
}
function isValidScore(score){
    if (isFinite(score) && score>=0 && score<=10) return true;
    return false;
}
function getReportCard(examResults){
    let result=[];
    for (let i=0; i<examResults.length; i++)
    result.push({ student:examResults[i].student,
                  average: getAverage(examResults[i].scores),
                  classification:classifyStudent(getAverage(examResults[i].scores))})
    return result;
}
console.log(getAverage([8.5, 7, 9, 6.5]));   // 7.75 -> 7.8
console.log( getAverage([10, 9.5, 8, 10]));   // 9.375 -> 9.4

console.log(classifyStudent(9.4));   // "Xuất sắc"
console.log(classifyStudent(7.8));   // "Khá"
console.log(classifyStudent(4.5));   // "Yếu"

console.log(isValidScore(8.5));        // true
console.log(isValidScore(-1));         // false
console.log(isValidScore(11));         // false
console.log(isValidScore(Infinity));   // false
console.log(isValidScore(NaN));        // false

console.log(getReportCard(examResults));