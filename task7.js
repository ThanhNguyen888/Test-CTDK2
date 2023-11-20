let a = +prompt("Số a:") ;
let b = +prompt("Số b:") ;
let c = +prompt("Số c:") ;
let delta = ((b*b) - (4*a*c) ) ;


if(delta > 0 ) {
    alert(`Phương trình có 2 nghiệm phân biệt là: x1 = ${(-b + Math.sqrt(delta))/ (2*a)} và x2 = ${(-b - Math.sqrt(delta))/ (2*a)} `)
} else if(delta == 0 ) {
    alert(`Phương trình có nghiệm kép:x1 = x2 = ${(-b/(2*a))} `)
} else 
    alert (`Phương trình vô nghiệm `)


