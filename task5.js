let x = parseInt(prompt("Chiều dài cạnh 1 là: ")) ;
let y = parseInt(prompt("Chiều dài cạnh 2 là: ")) ;
let S = 1/2 * (x * y)

if(x > 0 && y > 0){
    alert(`Diện tích tam giác vuông là : ${S} `)
} else
    alert(`Không Phải là tam giác : `)