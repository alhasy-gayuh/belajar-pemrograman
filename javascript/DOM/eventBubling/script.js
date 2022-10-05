// const card = document.querySelectorAll('.card')
// const tutup = document.querySelectorAll('.close')

// tutup.forEach(function(tpi){
//     tpi.addEventListener('click', function(e){
//         e.target.parentElement.style.display = 'none'
//         e.preventDefault();
//         e.stopPropagation() // >> ini contoh STOP BUBLING

//         // Setiap kita memberikan event pada sebuah element, maka berlaku juga pada pembungkusnya
//         // jika kita juga memberikan event kepada pembungkusnya, maka event akan berjalan bersamaan
//         // Contohnya seperti di bawah

//         card.forEach(function(tpa){
//             tpa.addEventListener('click', function(){
//                 alert('oke');
//             })
//         })
//         // yang terjadi adalah, kedua events di atas. di jalankan semua
//         // sehingga jika kita hanya ingin menjalankan salah satu events akan kesulitan

//         // jadi solusinya ialah menyetop bubling tersebut.
//         // dengan cara menambahkan script di akhir events.
//     })
// });

// Ada cara yang lebih efektif untuk menjalankan program di atas, dan bahkan hanya dengan satu evenst
// Berikut Scriptnya.



const container = document.querySelector('.container')
container.addEventListener('click', function(e){ // (e) artinya mengambil semua informasi
    if(e.target.className == 'close'){
        e.target.parentElement.style.display = 'none';
        e.preventDefault();
    }
})





