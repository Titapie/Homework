function analyzeClass(scores){
    let koHopLe=0,xs=0,gioi=0,kha=0,tb=0,yeu=0,maxP=0,minP=10,soDiemHopLe=0,diemTB=0,nhanXet="";
    for (let x of scores)
    {
        if (x>=0 && x<=10) {
            if (maxP<x) maxP=x;
            if (minP>x) minP=x;
            diemTB+=x;
            soDiemHopLe++;
        } else koHopLe++;
        switch (true){
            case (x<=10 && x>=9):
                xs++;        
                break;
            case (x>=8 && x<9):
                gioi++;        
                break;
            case (x>=6.5 && x<8):
                kha++;    
                break;
            case (x>=5 && x<6.5):
                tb++;    
                break;
            case (x>=0 && x<5):
                yeu++;
                break;
        }
    }
    if (soDiemHopLe==0) 
        {
            maxP=null;
            minP=null;
            nhanXet="Không có dữ liệu hợp lệ";
        }
    else {
        let avg = diemTB / soDiemHopLe;
        let temp = avg * 100 + 0.5;
        diemTB = (temp - temp % 1) / 100;
        if (xs+gioi+kha>soDiemHopLe/2) nhanXet="Lớp học tốt";
            else if (yeu>soDiemHopLe/2) nhanXet="Cần cải thiện";
                else nhanXet="Lớp học ở mức ổn";
    }        
    return {koHopLe,soDiemHopLe,xs,gioi,kha,tb,yeu,maxP,minP,diemTB,nhanXet};
}
console.log(analyzeClass([9, 7, -2, 5.5, 10, 4, 11, 6.5, 8]));

console.log(analyzeClass([3, 2, 4.5, 1, 0]));

console.log(analyzeClass([9, 1, 7, 6, 5.5]));

console.log(analyzeClass([-5, 15, 100, -1]));

console.log(analyzeClass([]));
