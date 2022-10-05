// pakek script di bawah ini hanya menghapus satu card,
// karna querySelector hanya mengambil satu elemen yang pertama kali di temui
// solusinya harus menggunakan querySelectorAll

// const tutup = document.querySelector('.close');
// const card = document.querySelector('.card')

// tutup.addEventListener('click', function(){
//     card.style.display = 'none';
// });


// << Menggunakan For >>

const card = document.querySelectorAll('.card')
const tutup = document.querySelectorAll('.close')
// for(let i = 0; i < tutup.length; i++ ){
//     tutup[i].addEventListener('click', function(e){ // (e) berisi bermacam object di dalamnya. silahkan cek di console.log
//         // card[i].style.display = 'none'; >> cara disamping bisa tapi tidak menerapkan traversal
//         // card[i].parentElement.style.display = 'none' >> menggunakan traversal
//         e.target.parentElement.style.display = 'none' // >> menggunakan (e) dapat mengetahui banyak informasi
//     });
// }


// << Menggunakan forEach >>
// dengan cara terakhir ini script menjadi lebih sederhana

tutup.forEach(function(tpi){
    tpi.addEventListener('click', function(e){
        e.target.parentElement.style.display = 'none'
    })
});