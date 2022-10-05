var jmlh = 10;
var rusak = 4;
var x = 1;

// while(x<=rusak){
//     console.log('Angkot No. ' + x +' Sedang Rusak')
// x++
// }
// for(rusak = rusak+1; rusak<=jmlh; rusak++){
//     console.log('Angkot No. ' + rusak +' Sedang Beroperasi')
// }


// Lebih simple dengan for

for(angkot = 1; angkot <=10; angkot++){
    // angkot<=6 ? console.log('angkot no. ' + angkot +' berjalan dengan baik') : 
    // console.log('anglot No. '+ angkot +' tidak berjalan');
// //bisa juga menggunakan seperti di bawah

if(angkot <=4){
    console.log('angkot No. '+angkot+' berjalan dengan baik')
}else{
    console.log('angkot No. '+angkot+' tidak Beroperasi')
}
}