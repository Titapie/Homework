const comments = [
  { id: 1, user: "An", content: "Sản phẩm rất tốt!", rating: 5, verified: true, likes: 12 },
  { id: 2, user: "", content: "ok", rating: 3, verified: false, likes: 0 },
  { id: 3, user: "Bình", content: "Mua lần 2 rồi, vẫn chất lượng", rating: 4, verified: true, likes: 8 },
  { id: 4, user: "Chi", content: "   ", rating: null, verified: false, likes: 2 },
  { id: 5, user: "Duy", content: "Giao hàng nhanh, đóng gói cẩn thận, sẽ ủng hộ tiếp!", rating: 5, verified: true, likes: 20 },
  { id: 6, user: null, content: "Tệ quá", rating: 1, verified: false, likes: 0 },
  { id: 7, user: "Em", content: "Bình thường", rating: 3, verified: true, likes: 1 },
];
function isValidComment(comment){
        if (comment.user==null || comment.user==undefined || comment.user.length==0) return false;
        if(comment.rating <1 || comment.rating>5) return false;
        if (comment.content.replace(" ","").replace(" ","").length<5) return false;
        return true;
}
function filterValidComments(comments){
    return comments.filter((comment) => isValidComment(comment));
}
function getCommentStats(validComments){
    return {
        total: validComments.length,
        avgRating: (validComments.reduce((sum,cur) => sum + cur.rating, 0) / validComments.length).toFixed(1)/1,
        totalLikes: validComments.reduce((sum,cur)=>sum+cur.likes,0),
        verifiedCount: validComments.reduce((sum,cur)=>sum+cur.verified,0),
        topComment: validComments.reduce((top,cur)=>cur.likes > top.likes ? cur : top,{likes:-1})
        }
}
function formatComment(comment){
    return `${"⭐".repeat(comment.rating)} | ${comment.user?? "Ẩn danh"}${comment.verified ? " ✓ " : " "}| ${comment.content} | 👍 ${comment.likes}`;
}
console.log(isValidComment(comments[0]));  // true
console.log(isValidComment(comments[1]));  // false  (user rỗng, content quá ngắn)
console.log(isValidComment(comments[3]));  // false  (content chỉ có khoảng trắng, rating null)
console.log(isValidComment(comments[5]));  // false  (user null)

console.log(filterValidComments(comments));
// [comments[0], comments[2], comments[4], comments[6]]
// id: 1, 3, 5, 7

console.log(getCommentStats(filterValidComments(comments)));
// {
//   total: 4,
//   avgRating: 4.3,
//   totalLikes: 41,
//   verifiedCount: 3,
//   topComment: { id: 5, user: "Duy", content: "Giao hàng nhanh...", likes: 20, ... }
// }

console.log(formatComment(comments[0]));
// "⭐⭐⭐⭐⭐ | An ✓ | Sản phẩm rất tốt! | 👍 12"

console.log(formatComment(comments[2]));
// "⭐⭐⭐⭐ | Bình ✓ | Mua lần 2 rồi, vẫn chất lượng | 👍 8"

console.log(formatComment(comments[6]));    
// "⭐⭐⭐ | Em ✓ | Bình thường | 👍 1"