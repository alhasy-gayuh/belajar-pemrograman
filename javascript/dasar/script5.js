var item = prompt('Pilih item yang anda sukai: pedang, perisai, sepatu, baju');

switch(item){
    case 'pedang':
        alert('anda memilih pedang');
        break;
    case 'perisai':
        alert('anda memilih perisai');
        break;
    case 'sepatu':
        alert('anda memilih sepatu');
        break;
    case 'baju':
        alert('anda memilih baju');
        break;
    default:
        alert('mohon masukan item yang benar')
        break;
}