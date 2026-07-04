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
    let comments2=[];
    for (let i=0;i<comments.length; i++)
        if (isValidComment(comments[i])) comments2.push(comments[i]);
    return comments2;
}