let a = parseFloat(prompt("Độ dài cạnh 1 là:")) ;
let b = parseFloat(prompt("Độ dài cạnh 2 là:")) ;
let c = parseFloat(prompt("Độ dài cạnh 3 là:")) ;


if (a > 0 && b > 0 && c > 0 && (a + b) > c && (a + c ) > b && (b + c) > a) {
    alert(`Đây là một tam giác `)
} else
    alert(`Đây ko phải là tam giác `)