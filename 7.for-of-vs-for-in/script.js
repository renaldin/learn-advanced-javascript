// for of 
// array
// const mhs = ['Renaldi', 'Rey', 'Aldi'];

// for
// for (let i = 0; i < mhs.length; i++) {
//     console.log(mhs[i]);
// }

// forEact
// mhs.forEach(m => console.log(m));

// for of 
// for (const m of mhs) {
//     console.log(m);
// }



// string 
// const name = 'Renaldi';
// for (const n of name) {
//     console.log(n);
// }


// const mhs = ['Renaldi', 'Rey', 'Aldi'];
// mhs.forEach((m, i) => {
//     console.log(`${m} adalah mahasiswa ke-${i + 1}`);
// });

// for (const [i, m] of mhs.entries()) {
//     console.log(`${m} adalah mahasiswa ke-${i + 1}`);
// }


// NodeList
const liNama = document.querySelectorAll('.nama');

// liNama.forEach(n => console.log(n.innerHTML));
// for (n of liNama) {
//     console.log(n.innerHTML);
// }


// ARGUMENTS
// function jumlahkanAngka() {
//     // return arguments.reduce((a, i) => a + 1);
//     // arguments.forEach(a => jumlah += a);
//     let jumlah = 0;
//     for (a of arguments) {
//         jumlah += a;
//     }
//     return jumlah;
// }

// console.log(jumlahkanAngka(1, 2, 3, 4, 5));




// for in 
const mhs = {
    nama: 'Renaldi',
    umur: 12,
    email: 'renaldi@gmail.com'
}

for (m in mhs) {
    console.log(mhs[m]);
}