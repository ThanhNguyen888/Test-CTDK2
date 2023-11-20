// Đề: tính tiền điện dùng của 1 hộ gia đình biết rằng đơn giá như sau:
// 50 chữ đầu --- giá 1600
// 100 chữ tieps theo --- giá 2000
// 100 chữ tiếp theo --- giá 2300
// Từ 250 chữ trờ lên --- giá 2500


let sochudien = +prompt("Số chữ điện 1 gia đình dùng trong tháng: "); 
let hoadon



if (sochudien > 0 && sochudien <=50 ) {
    alert(`Giá điện trong tháng là : ${sochudien * 1600} `)
} else if (sochudien > 50 && sochudien <= 150) {
    alert(`Giá điện trong tháng là : ${(50 * 1600) + ((sochudien - 50) * 2000)} `)
} else if(sochudien > 150 && sochudien <= 250) {
    alert(`Giá điện trong tháng là : ${(50 * 1600) + (100 * 2000) + ((sochudien - 150) * 2300)} `)
} else 
    alert(`Giá điện trong tháng là : ${(50 * 1600) + (100 * 2000) + (100 * 2300) + ((sochudien - 250) * 2500)} `)

