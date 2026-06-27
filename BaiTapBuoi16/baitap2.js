const text = "javascript là ngôn ngữ lập trình phổ biến javascript chạy trên trình duyệt và javascript cũng chạy trên server";

const getWords = (text) => text.split(" ");

const countWord=(text,word) => {
    let count=0;
    getWords(text).forEach(values => {
        if (values===word) count++;
    });
    return count;
}
const getUniqueWords=(text) => {
    let words=getWords(text);
    let finalWord=[];
    words.forEach( (values) =>{
        if (words.includes(values) && finalWord.includes(values)==false) finalWord.push(values);
    })
    return finalWord.sort();
}
const getTopWords=(text, n)=>{
    let topWords=[];
    let words=getUniqueWords(text);     
    words.forEach((values)=>{
        topWords.push({word:values,count:countWord(text,values)})
    })
    topWords.sort((a,b)=>b.count-a.count)
    return topWords.slice(0,n);
}
const highlight = (text,word)=>{
    let words=getWords(text);
    words.forEach((value,index) => {
        if (value===word) words[index]="**" + words[index]+"**"
    });
    return words.join(" ");
}
console.log( getWords(text));
// ["javascript", "là", "ngôn", "ngữ", "lập", "trình", "phổ", "biến", "javascript", "chạy", "trên", "trình", "duyệt", "và", "javascript", "cũng", "chạy", "trên", "server"]

console.log(countWord(text, "javascript")); // 3
console.log(countWord(text, "chạy"));        // 2
console.log(countWord(text, "python")) ;     // 0
console.log(getUniqueWords(text));

console.log(getTopWords(text, 3));

console.log(highlight(text, "javascript"));