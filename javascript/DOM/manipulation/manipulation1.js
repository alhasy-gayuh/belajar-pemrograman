// DOM manipulation part 2

// membuat paragraf baru
const pBaru = document.createElement('p')
const teksPBaru = document.createTextNode('Paragraf Baru')

// menyimpan tulisan ke dalam daftar paragraf
pBaru.appendChild(teksPBaru)

//simpan pBaru di akhir Section A
const sectionA = document.getElementById('a')
sectionA.appendChild(pBaru);


// berikutnya kita coba simpan sebelum item 2 di li section B
const liBaru = document.createElement('li')
const textLiBaru = document.createTextNode('Item Baru')

// Simpan ke dalam paragraf
liBaru.appendChild(textLiBaru)

// Simpan ke dalam target
// 1. coba telusuri targetnya dahulu
const ul = document.querySelector('section#b ul')
// 2. cari dan simpan element yang akan kita simpan di item sebelumnya, dalam kasus ini kita akan mencari item 2
const li2 = ul.querySelector('li:nth-child(2)');

// 3. tinggal masukan text yang sudah di buat
ul.insertBefore(liBaru, li2);


// Menggunakan remove, coba remove link
const link = document.getElementsByTagName('a')[0];

// Hapus
sectionA.removeChild(link);


// menggunakan parentNode.raplaceChild()
const sectionB = document.getElementById('b');
const p4 = sectionB.querySelector('p')

const h2Baru = document.createElement('h2')
const textH2 = document.createTextNode('Judul Baru!')

h2Baru.appendChild(textH2);

// proses replace
sectionB.replaceChild(h2Baru, p4)

pBaru.style.backgroundColor = 'red'
liBaru.style.backgroundColor = 'red'
h2Baru.style.backgroundColor = 'red'