function calculateScore(level, kills, boosted){
    if (typeof kills != "number" || typeof level !="number" || kills<0 || level <0) return "Dữ liệu không hợp lệ";
    if (boosted!==true && boosted!==false) boosted=false;
    baseScore  = kills * 10
    bonusScore = level >= 5 ? baseScore * 0.5 : baseScore * 0.2
    finalScore = boosted ? (baseScore + bonusScore) * 2 : baseScore + bonusScore
return ((finalScore*100)-finalScore*100%1)/100;
};
console.log(calculateScore(5, 20, true),     // 600
calculateScore(3, 10, false) ,    // 120
calculateScore(5, 15, false),     // 225
calculateScore(1, 50, true) ,     // 1200

calculateScore(-1, 10, true) ,    // "Dữ liệu không hợp lệ"
calculateScore(2, -5, false)  ,   // "Dữ liệu không hợp lệ"
calculateScore("abc", 10, true),  // "Dữ liệu không hợp lệ"
calculateScore(2, "abc", false) , // "Dữ liệu không hợp lệ"

calculateScore(5, 15, null)   ,   // 225  (boosted = false)
calculateScore(5, 15, "yes"),     // 225  (boosted = false)
calculateScore(5, 15, undefined) // 225  (boosted = false)
)