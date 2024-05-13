let a = Number(prompt(`masukkan panjang sisi mendatar (cm)`));
let b =  Number(prompt("masukkan panjang sisi miring (cm)"));
let kelilingJajarGenjang = 2 * (a + b);

alert(`dengan panjang sisi mendatar ${a}cm dan panjang sisi miring ${b}cm, maka keliling jajar genjang dengan menggunakan rumus (K = 2 x (a + b)) adalah =
Keliling Jajar Genjang = K = 2 x (a + b)
Keliling Jajar Genjang = K = 2 x ${a}cm + ${b}
Keliling Jajar Genjang = ${kelilingJajarGenjang}cm`)

 console.log(kelilingJajarGenjang);