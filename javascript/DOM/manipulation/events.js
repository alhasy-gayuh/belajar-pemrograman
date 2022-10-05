// Menggunakan Events di java script

// 1. menggunakan Even Handler 
// jika menggunakan Event Handler, events nya akan tertimpa dengan yang terakhir di buat
// >> mengubah manual di code HTML nya
const p2 = document.querySelector('.p2')

function ubahWarna(){
    p2.style.backgroundColor = 'red'
}

// 2. Menggunakan addEventsListener
// jika menggunakan addEventsListener, dua buah events akan di jalankan
const p4 = document.querySelector('section#b p');
p4.addEventListener('click', function(){
    const ul = document.querySelector('section#b ul')
    
    const liBaru = document.createElement('li')
    const liText = document.createTextNode('Item Baru')

    liBaru.appendChild(liText);
    ul.appendChild(liBaru)
})