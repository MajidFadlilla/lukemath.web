let a = Number(prompt(`masukkan panjang sisi panjang (cm)`));
let b =  Number(prompt("masukkan panjang sisi pendek (cm)"));
let kelilingLayangLayang = 2 * (a + b);

alert(`dengan panjang sisi panjang ${a}cm dan panjang sisi pendek ${b}cm, maka keliling layang layang dengan menggunakan rumus ( K= 2 x (sisi a + sisi b)) adalah =
panjang = ${a}cm
lebar = ${b}cm
Keliling Layang Layang =  K = 2 x (sisi a + sisi b)
Keliling Layang Layang = ${a}cm + ${b}cm 
Keliling Layang Layang = ${kelilingLayangLayang}cm2 `)

 console.log(kelilingLayangLayang);