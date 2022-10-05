//Contoh

// var arr = ['Gayuh', 26 , 'Januari', true]
// console.log(arr);


// //method pada array

// // 1. length
// // var arr = ['Gayuh', 'Afwa', 'Maulana']
// // for(var i = 0; i < arr.length; i++){
// //     console.log(arr[i])
// // }


// // 2. join
// var gabung = ['menggunakan', 'method', 'join']
// console.log(gabung.join(' - '))

// // 3. push dan pop -> untuk element terakhir
// // push itu memasukan element ke dalam array
// // pop itu kebalikannya, yitu menghilangkan element
// gabung.push('Push')
// console.log(gabung.join('--'))

// gabung.pop() //menghapus satu nilai terakhir
// gabung.pop()
// console.log(gabung.join(' '))


// // 4. unshift dan shift -> element pertama
// // unshift menambahkan
// // shift menghapus
// gabung.unshift('unshift', 'belajar')
// console.log(gabung.join('--'))

// gabung.shift()
// gabung.shift()
// console.log(gabung.join(' '))


// 5. forEach
var no = [1,10,30,9,7,2,3,4,5,6]
var nama = ['gayuh', 'afwa', 'maulana']
nama.forEach(function(a, i){
    console.log('no '+(i+1)+' namanya ' + a);
})

// 6. map
var angka = no.map(function(e){
    return e * 2;
});
console.log(angka.join(' - '))

// 7. sort -> untuk mengurutkan
no.sort(); // hanya mengurutkan angka awal
console.log(no.join(' - '))

//jika ingin mengurutkan yang benar
no.sort(function(a,b){
    return a-b;
});
console.log(no.join(' -- '))


