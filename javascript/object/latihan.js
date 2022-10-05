// membuat object angkot

function Angkot(supir, trayek, penumpang, kas) {
    this.supir = supir;
    this.trayek = trayek;
    this.penumpang = penumpang;
    this.kas = kas

    this.penumpangNaik = function(namaPenumpang){
        this.penumpang.push(namaPenumpang)

        return this.penumpang;
    }

    this.penumpangTurun = function(namaPenumpang, bayar){
        if(this.penumpang.length == 0){
            alert('Angkot Masih Kosong');
            return false;
        }
        for( i=0; i < this.penumpang.length; i++ ){ //mencari penumpang dalam angkot
            if(penumpang[i] == namaPenumpang){
                this.penumpang[i] = undefined;
                this.kas += bayar;
                return this.penumpang;
            }
        }
    }
}

var angkot1 = new Angkot('Gayuh', ['Jombang', 'Gresik'], [], 0)
var angkot2 = new Angkot('Afwa', ['Gresik','Jombang'], [], 0)