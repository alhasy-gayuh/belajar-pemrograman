var x = 10;
console.log('Hello World!');
console.log('Gayuh Alhasy');
console.log(x);

// popup ada 3
// alert, prompt, confirm

// var name = prompt('Masukkan nama');
// alert(name);

// var user = confirm('Apakah Lanjut?');
// if(user == true){
//     alert('User Menekan Oke!')
// }else{
//     alert('user menekan cancel!');
// }

alert('selamat datang');
var ulang = true;

while(ulang === true){
    var nama = prompt('Masukan Nama: ') ?
    alert(nama) : alert('Bye Bye');

    ulang = confirm('lanjut?')
}
alert('Terimakasih')