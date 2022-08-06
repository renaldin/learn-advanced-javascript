// Destructuring

// function kalkulasi(a, b) {
//     return [a + b, a - b, a * b, a / b];
// };
// const jumlah = penjumlahanPeralian(2, 3)[0];
// const kali = penjumlahanPeralian(2, 3)[1];

// const [jumlah, kali] = penjumlahanPeralian(2, 3);
// console.log(jumlah);
// console.log(kali);

// const [tambah, kurang, kali, bagi-'Tidak Ada']=kalkulasi(2, 3);
// console.log(bagi);

// function kalkulasi(a, b) {
//     return {
//         tambah: a + b,
//         kurang: a - b,
//         kali: a * b,
//         bagi: a / b
//     }
// }

// const (tambah, bagi, kurang, kali) = kalkulasi(2, 3);
// console.log(bagi);


// Destructuring function arguments
const mhs1 = {
    nama: 'Renaldi',
    umur: 12,
    email: 'renaldi@gmail.com',
    nilai: {
        tugas: 80,
        uts: 85,
        uas: 75
    }
};

// function cetakMhs(nama, umur) {
//     return `Hallo, nama saya ${nama}, saya ${umur} tahun`;
// }
// console.log(cetakMhs(mhs1.nama, mhs1.umur));

function cetakMhs({ nama, umur, nilai: { tugas, uts, uas } }) {
    return `Hallo, nama saya ${nama}, saya ${umur} tahun dan nilai uas saya adalah ${uas}`;
}
console.log(cetakMhs(mhs1));