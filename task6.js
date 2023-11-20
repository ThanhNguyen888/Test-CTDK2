let a = parseInt(prompt("Đơn vị của a là: ")) ;
let b = parseInt(prompt("Đơn vị của b là: "))
let x


if (a == 0 && b == 0) {
    alert(`Phương trình có vô số nghiệm `)
} else if(a == 0 && b != 0) {
    alert(`Phương trình vô nghiệm`)
} else 
    alert(`Phương trình có nghiệm duy nhất: ${x = -b/a} `)