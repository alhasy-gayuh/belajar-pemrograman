// function adalah wadah untuk menampung statement
// statement di bungkus dengan {}
// function di isi dengan parameter. yang di tutup dengan ()
// di luar parameter di isi dengan yang namanya argument()

//CONTOH 

function tambah(a,b){
    return a + b;
}
var a = parseInt(prompt('Masukan nilai A :')) // parseInt fungsinya untuk mengubah nilai
// yang awalnya string menjadi integer
var b = parseInt(prompt('Masukan nilai B : '))
var hasil = tambah(a,b);
console.log(hasil);

// function jmlhvolume(a,b){ // -> ini parameter
//     var volumeA;
//     var volumeB;

//     volumeA = a*a*a;
//     volumeB = b*b*b;

//     total = volumeA + volumeB;

//     return total;
// }

// console.log(jmlhvolume(5,10)); // -> ini argument