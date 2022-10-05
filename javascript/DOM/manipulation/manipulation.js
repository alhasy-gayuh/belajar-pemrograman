// Manipulasi DOM -> DOM Manipulation

// const judul = document.getElementById('judul')
// judul.innerHTML = '<em>Gayuh Alhasy</em>';

// const sectionA = document.querySelector('section#a')
// sectionA.innerHTML = '<div><p>di ubah dengan javascript</p></div>'
// innerHTML dapat mengubah structur di dalam HTML

const sectionB = document.querySelector('section#b')
sectionB.setAttribute('class', 'oke')
// setAtribute(''), getAtribute(''), removeAtribute('')

const p2 = document.querySelector('.p2')
p2.classList.add('label')
