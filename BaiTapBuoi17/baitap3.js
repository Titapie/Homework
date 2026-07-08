const players = [
  { id: 1, name: "DragonSlayer", scores: [120, 85, 200, 95], level: 8, badge: "gold" },
  { id: 2, name: "NightWolf",    scores: [60, 75, 50],        level: 5, badge: null },
  { id: 3, name: "StarQueen",    scores: [300, 250, 180, 90, 120], level: 12, badge: "diamond" },
  { id: 4, name: "IronFist",     scores: [40, 30],             level: 2, badge: null },
  { id: 5, name: "ShadowBlade",  scores: [150, 200, 175],      level: 9, badge: "silver" },
];
const getTotalScore = (player) => player.scores.reduce((sum,cur)=>sum+cur,0);

const getRanking = (players) =>{
    let player2=[];
    for (let i=0;i<players.length;i++)
        player2.push({rank:players[i].id, name:players[i].name, totalScore:getTotalScore(players[i]), badge: players[i].badge??"none"});
    player2.sort((a,b)=>b.totalScore - a.totalScore );
    for (let i=0;i<players.length;i++)
        player2[i].rank=i+1;
    return player2;
}
const getTopPlayers = (players, n)=>{
    return getRanking(players).filter((a)=>a.rank<=n).map(a=>a.name);
}

const formatPlayerCard = (player)=>{
    return `${player.name} | Lv.${player.level} | ${getTotalScore(player)} điểm |${player.badge=="diamond"? "💎 DIAMOND": player.badge=="gold"?"🏅 GOLD": player.badge=="silver"?"🥈 SILVER":""}`
}
console.log(getTotalScore(players[0]));  // 500
console.log(getTotalScore(players[1]));  // 185
console.log(getTotalScore(players[2]));  // 940
console.log(getRanking(players));
console.log(getTopPlayers(players,3));
console.log(formatPlayerCard(players[0]));  // "DragonSlayer | Lv.8 | 500 điểm | 🏅 GOLD"
console.log(formatPlayerCard(players[1]));  // "NightWolf | Lv.5 | 185 điểm"
console.log(formatPlayerCard(players[2]));  // "StarQueen | Lv.12 | 940 điểm | 💎 DIAMOND"