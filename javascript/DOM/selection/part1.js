// DOM Selection

// document.getElementById()
// jika di bahasa manusiakan >>
// >> javascript tolong carikan saya element yang id nya ... yang ada di dalam document

const judul = document.getElementById('judul')
judul.style.color = 'red';
judul.style.backgroundColor = 'gray';
judul.innerHTML = 'Gayuh Alhasy';

//document.getElementsByTageName()
// -> HTMLCollection

const p = document.getElementsByTagName('p');

// p[2].style.backgroundColor = 'lightblue';
// >> jika ingin mengubah semua element nya, bisa menggunakan perulangan / for
for (let i = 0; i < p.length; i++) {
    p[i].style.backgroundColor = 'lightblue';
}

//document.getElementsByClassName
// -> HTMLCollection

const p1 = document.getElementsByClassName('p1');
p1[0].innerHTML = 'Text ini di rubah menggunakan Javascript'


//document.querySelector

const li2 = document.querySelector('section#b ul li:nth-child(2)');
li2.style.backgroundColor = 'orange'
li2.style.fontSize = '30px'


//document.querySelectorAll

const q = document.querySelectorAll('p');
q[2].style.backgroundColor = 'red'