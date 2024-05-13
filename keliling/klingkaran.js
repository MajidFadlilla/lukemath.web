let jariJari = Number(prompt(`masukkan jari jari`))
let luasLingkaran 
    if(jariJari % 7 === 0){
        luasLingkaran = 2 * jariJari * (22/7)
    }else{

        luasLingkaran = 2 * jariJari * 3.14
    }
    console.log(luasLingkaran)

       alert(`Dengan jari jari sepanjang ${jariJari}cm, maka keliling lingkaran dengan rumus (K= 2.phi.r) adalah
Jari-jari(r) = ${jariJari}cm
Keliling Lingkaran =  K = 2 x phi x r
Keliling Lingkaran = 2 x phi x ${jariJari}cm 
Keliling Lingkaran = ${luasLingkaran}cm `)
       
       