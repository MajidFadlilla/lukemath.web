let angka1 = Number(prompt(`masukkan panjang (cm)`));
let angka2 =  Number(prompt("masukkan lebar (cm)"));
let kelilingPersegiPanjang = 2 * (angka1 + angka2);

alert(`dengan panjang sepanjang ${angka1}cm dan lebar ${angka2}cm,
maka keliling persegi panjang dengan menggunakan rumus (K = 2 x (p+l)) adalah =
panjang = ${angka1}cm
lebar = ${angka2}cm
Keliling Persegi Panjang =  K = 2 x (p+l)
Keliling Persegi Panjang = ${angka1}cm + ${angka2}cm 
Keliling Persegi Panjang = ${kelilingPersegiPanjang}cm2 `)

 console.log(kelilingPersegiPanjang);