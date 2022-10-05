

    // IF DAN ELSE IF

    // var angka = prompt('Masukkan Angka')
        // if(angkot % 2 === 0){
        //     alert('Angka yang anda masukan Genap')
        // }else if(angka % 2 === 1){
        //     alert('Angka yang anda masukan Ganjil')
        // }else{
        //     alert('Harap masukan Angka yang benar')
        // }

    
    //FOR DAN PENGKONDISIAN
    var noangkot = 1
    var operasi = 7
    var jmlh = 15

    for(noangkot; noangkot <=jmlh; noangkot++){
        if(noangkot <= operasi){
            console.log('angkot No. '+noangkot+' sedang beroperasi')
        }else if(noangkot === 8 || noangkot === 10 ){
            console.log('angkot No. '+noangkot+' Kerja Lembur')
        }else{
            console.log('angkot No. '+noangkot+' Sedang Rusak')
        }
}