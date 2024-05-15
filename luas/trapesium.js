let panjang = Number(prompt(`masukkan panjang a (cm)`))
let lebar = Number(prompt("masukkan lebar b (cm)"))
let tinggi = prompt("masukan tinggi")
let jumlahPanjangLebar = panjang + lebar
const luasTrapesium = 1/2 * jumlahPanjangLebar * tinggi
alert( `Dengan panjang a ${panjang}cm, panjang b ${lebar}cm, serta tinggi ${tinggi}cm, 
maka luas trapesium dengan menggunakan rumus (L = 1/2 t x (a+b)) adalah
panjang a = ${panjang}cm
panjang b = ${lebar}cm
tinggi = ${tinggi}cm
Luas Segitiga =  L = 1/2 x t x (a+b) 
Luas Segitiga = ${panjang}cm x ${lebar}cm x ${tinggi}cm 
Luas Segitiga = ${luasTrapesium}cm2 `)