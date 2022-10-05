//cara menggunakan this


// 1. function declaration
// function halo(){
//     console.log(this);
//     console.log('hallo')
// }
// halo()
// //sama dengan menjalankan perintah
// window.halo();
// // >> this menggembalikan object global


// 2. function literal
// var obj = {a : 10, nama : 'Gayuh'};
// obj.halo = function(){
//     console.log(this);
//     console.log('hallo');
// }
// obj.halo();
// >> this mengembalikan object yang bersangkutan


// 3. function constructor
function Halo(){
    console.log(this);
    console.log('hallo')
}
new Halo();
// >> mengembalikan object yang baru di buat