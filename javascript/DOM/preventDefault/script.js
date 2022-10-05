const card = document.querySelectorAll('.card')
const tutup = document.querySelectorAll('.close')

tutup.forEach(function(tpi){
    tpi.addEventListener('click', function(e){
        e.target.parentElement.style.display = 'none'

        // di bawah ini fungsi prefent defaultnya
        e.preventDefault(); // >> gunanya untuk menghentikan aksi default
        // karna jika tidak menggunakan preventdefault, ketika di close akan terlihat eror
    })
});