const orders = [
  { id: 1, customer: "An",   product: "Áo thun",     category: "fashion",     amount: 300000, status: "completed" },
  { id: 2, customer: "Bình", product: "iPhone 15",    category: "electronics", amount: 25000000, status: "completed" },
  { id: 3, customer: "An",   product: "Quần jean",    category: "fashion",     amount: 450000, status: "canceled" },
  { id: 4, customer: "Chi",  product: "Tai nghe",     category: "electronics", amount: 1200000, status: "completed" },
  { id: 5, customer: "Bình", product: "Giày",         category: "fashion",     amount: 900000, status: "pending" },
  { id: 6, customer: "An",   product: "Sạc dự phòng", category: "electronics", amount: 350000, status: "completed" },
  { id: 7, customer: "Duy",  product: "Áo khoác",     category: "fashion",     amount: 600000, status: "completed" },
];
function getRevenueByCategory(orders){
    let totals= orders.reduce(((total,value)=>{
        if (value.status === "completed") {
        if(!total[value.category]) total[value.category]=0;
        total[value.category]+=value.amount;
    }
    return total;
}
),{})
    return totals;
}
function getSpendingByCustomer(orders){
    let totals= orders.reduce(((total,value)=>{
        if (value.status === "completed") {
        if(!total[value.customer]) total[value.customer]=0;
        total[value.customer]+=value.amount;
    }
    return total;
}
),{})
    return totals;
}
function getOrderCountByStatus(orders){
    let totals= orders.reduce(((total,value)=>{
        if(!total[value.status]) total[value.status]=0;
        total[value.status]++;
    return total;
}
),{})
    return totals;
}
function getTopCustomer(orders){
    let totals= orders.reduce(((total,value)=>{
        if (value.status === "completed") {
        if(!total.spend[value.customer]) total.spend[value.customer]=0;
        total.spend[value.customer]+=value.amount;
        if (total.spend[value.customer]>total.topCustomer.total)
        {
            total.topCustomer.customer=value.customer;
            total.topCustomer.total=total.spend[value.customer];
        }
    }
    return total;
}
),{spend:{},topCustomer:{customer:"",total:0}})
    return totals.topCustomer;
}
function getFullReport(orders){
    const result = orders.reduce((total,value)=>{
        if (value.status === "completed") {
        if(!total.revenueByCategory[value.category]) total.revenueByCategory[value.category]=0;
        total.revenueByCategory[value.category]+=value.amount;

        if(!total.spendingByCustomer[value.customer]) total.spendingByCustomer[value.customer]=0;
        total.spendingByCustomer[value.customer]+=value.amount;

        total.totalRevenue+=value.amount;
    }
    if(!total.statusCount[value.status]) total.statusCount[value.status]=0;
        total.statusCount[value.status]++;
    return total;},{
  revenueByCategory: {},
  spendingByCustomer: {},
  statusCount: {},
  totalRevenue: 0,
})
return result;
}
console.log(getRevenueByCategory(orders));

console.log(getSpendingByCustomer(orders));

console.log(getOrderCountByStatus(orders));

console.log(getTopCustomer(orders))
console.log(getFullReport(orders));