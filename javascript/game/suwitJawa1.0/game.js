var lanjut = true;

while (lanjut){

var p = prompt('Pilih gajah, semut, orang')

var com = Math.random()

if(com < 0.34){
    com = 'gajah'
}else if(com >= 0.34 && com < 0.67){
    com = 'semut'
}else{
    com = 'orang'
}

var hasil = '';

if(p = 'gajah'){
    if(com = 'orang'){
        hasil = 'MENANG';
    }else{
        'KALAH';
    }
}else if(p = 'semut'){
    hasil = (com = 'gajah') ? 'MENANG' : 'KALAH'
}else if(p = 'orang'){
    hasil = (com = 'semut') ? 'MENANG' : 'KALAH';
}else{
    hasil = 'Mohon Masukkan pilihan yang benar'
}

alert(hasil);

lanjut = confirm('Maasih Mau lanjut?')
}
alert('Terimakasih sudah bermain')
