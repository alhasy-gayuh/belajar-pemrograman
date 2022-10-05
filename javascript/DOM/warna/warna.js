const ubahWarna = document.getElementById('btn')
ubahWarna.onclick = function(){
    // document.body.style.backgroundColor = 'lightblue'
    // document.body.setAttribute('class', 'biru-muda')
    document.body.classList.toggle('biru-muda')
}


const acakWarna = document.createElement('button')
const textWarna = document.createTextNode('Acak Warna')
acakWarna.appendChild(textWarna);
acakWarna.setAttribute('type', 'button');

ubahWarna.after(acakWarna)
acakWarna.addEventListener('click', function(){
    const r = Math.round(Math.random() * 255 +1)
    const g = Math.round(Math.random() * 255 +1)
    const b = Math.round(Math.random() * 255 +1)
    document.body.style.backgroundColor = 'rgb('+ r +','+ g +','+ b +')';
})


// Slider Warna
const sMerah = document.querySelector('input[name=merah]');
const sHijau = document.querySelector('input[name=hijau]');
const sBiru = document.querySelector('input[name=biru]');

sMerah.addEventListener('input', function(){
    const r = sMerah.value;
    const g = sHijau.value;
    const b = sBiru.value;
    document.body.style.backgroundColor = 'rgb('+ r +','+ g +','+ b +')';
});

sHijau.addEventListener('input', function(){
    const r = sMerah.value;
    const g = sHijau.value;
    const b = sBiru.value;
    document.body.style.backgroundColor = 'rgb('+ r +','+ g +','+ b +')';
});

sBiru.addEventListener('input', function(){
    const r = sMerah.value;
    const g = sHijau.value;
    const b = sBiru.value;
    document.body.style.backgroundColor = 'rgb('+ r +','+ g +','+ b +')';
});