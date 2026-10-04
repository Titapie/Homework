const members = [
  { id: 1, name: "Minh Tran", email: "minh@example.com" },
  { id: 2, name: "Lan Pham", email: "lan@example.com" },
  { id: 3, name: "Huy Nguyen", email: "huy@example.com" },
  { id: 4, name: "Trang Le", email: "trang@example.com" },
  { id: 5, name: "Duc Vo", email: "duc@example.com" },
];

const books = [
  { id: 201, title: "Clean Code", finePerDay: 5000 },
  { id: 202, title: "Atomic Habits", finePerDay: 3000 },
  { id: 203, title: "Sapiens", finePerDay: 4000 },
  { id: 204, title: "Deep Work", finePerDay: 2000 },
  { id: 205, title: "The Pragmatic Programmer", finePerDay: 6000 },
];

const borrowRecords = [
  {
    id: 3001,
    memberId: 1,
    lines: [
      { bookId: 201, lateDays: 2 },
      { bookId: 202, lateDays: 0 },
    ],
  },
  {
    id: 3002,
    memberId: 2,
    lines: [
      { bookId: 202, lateDays: 1 },
      { bookId: 203, lateDays: 3 },
    ],
  },
  {
    id: 3003,
    memberId: 3,
    lines: [
      { bookId: 204, lateDays: 5 },
      { bookId: 205, lateDays: 2 },
    ],
  },
  {
    id: 3004,
    memberId: 4,
    lines: [
      { bookId: 201, lateDays: 1 },
      { bookId: 203, lateDays: 2 },
    ],
  },
  {
    id: 3005,
    memberId: 5,
    lines: [{ bookId: 205, lateDays: 10 }],
  },
  {
    id: 3006,
    memberId: 1,
    lines: [
      { bookId: 201, lateDays: 1 },
      { bookId: 205, lateDays: 3 },
    ],
  },
  {
    id: 3007,
    memberId: 2,
    lines: [
      { bookId: 204, lateDays: 2 },
      { bookId: 203, lateDays: 1 },
    ],
  },
  {
    id: 3008,
    memberId: 3,
    lines: [{ bookId: 202, lateDays: 2 }],
  },
  {
    id: 3009,
    memberId: 4,
    lines: [
      { bookId: 201, lateDays: 1 },
      { bookId: 202, lateDays: 1 },
    ],
  },
  {
    id: 3010,
    memberId: 5,
    lines: [
      { bookId: 203, lateDays: 4 },
      { bookId: 204, lateDays: 3 },
    ],
  },
];
function mergeBook(borrowRecords){
  let result=[];
  borrowRecords.forEach((cur) =>{
    if (!Object.getOwnPropertyNames(cur).includes("lines")) return;
    cur.lines.forEach((line)=> {
          let index = result.find((book)=>book.bookID === line.bookId)
          if (index){
            index.lateDays+=line.lateDays
            index.fine+=line.lateDays*books.find((book)=>book.id===line.bookId).finePerDay
          }
          else{
            result.push({ bookID:line.bookId,
                          title:books.find((book)=>book.id===line.bookId).title,
                          lateDays:line.lateDays,
                          fine:line.lateDays*books.find((book)=>book.id===line.bookId).finePerDay
            })
          }

    })
  })
  result=result.sort((a,b) => b.fine-a.fine)
  return result;
}
function totalFine(borrowRecords){
  let sum = 0;
  borrowRecords.forEach((Element) => {
    if (!Object.getOwnPropertyNames(Element).includes("lines")) return;
    sum = sum + Element.lines.reduce((acc,cur)=>{
      acc+=cur.lateDays * books.find((book)=>book.id===cur.bookId).finePerDay;
      return acc;
    },0)
  })
  return sum;
}
function getMemberFineStatistics(members,book, borrowRecords) {
  const result = members.map((member) => {
    return {
      id: member.id,
      name:member.name,
      totalFine:totalFine(borrowRecords.filter((cur)=> cur.memberId===member.id)),
      books: mergeBook(borrowRecords.filter((cur)=> cur.memberId===member.id)).map((cur2) =>{
        return {
          title:cur2.title,
          lateDays:cur2.lateDays,
          fine:cur2.fine
        }
      })
    }
  }).sort((a,b) => b.totalFine-a.totalFine)
  result.forEach(member => {Object.freeze(member)});
  Object.freeze(result)
  return result;
//   {
//     id,
//     name,
//     totalFine,
//     books: [
//       {
//         title,
//         lateDays,
//         fine,
//       },
//     ],
//   },
// ];

}
function MemberPaginator(resultList, soLuongMoiTrang){
    let pageSize=resultList.length()/soLuongMoiTrang;
    
    let result={
      
      [Symbol.iterator](){
        let viTri=0;
        return {
            next(){
              if (viTri>=resultList.length){
                return{
                  done:true
                }
              }else{viTri+=soLuongMoiTrang
                return { value:resultList.slice(viTri-soLuongMoiTrang,viTri),done:false 
                }
              }
            }
       }

    }}
    return result;

    
}
console.log(getMemberFineStatistics(members,books,borrowRecords))