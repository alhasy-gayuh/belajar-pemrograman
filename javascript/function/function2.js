// function scope itu ada 2:
// global scope dan local scope.
// local scope tidak dapat mengambil nilai yang ada di global scope
// sedangkan global scope sebaliknya

//CONTOH

var a = 'ini global';

function uji(b){
    
    //jika bermaksud menuliskan variable local jangan lupa menuliskan 'var'
    //karna jika tidak. oleh sistem akan di carikan di global
    var b = 'ini local';

    //mengambil nilai dari local scope
    console.log(b)

    // dapat mengakses global dengan menambahkan (window.local)
    console.log(window.a);
}
uji();

//mengambil nilai dari global scope
console.log(a)