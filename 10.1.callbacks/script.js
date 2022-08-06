// Callbacks : fungsi yang dikirimkan pada paramter dari function lain 
// Sebuah function yang dieksekusi setelah function lain dieksekusi

// function halo(nama) {
//     alert(`Hallo, ${nama}`);
// }

// function tampilkanPesan(callback) {
//     const nama = prompt('Masukkan nama :');
//     callback(nama);
// }

// tampilkanPesan(nama => alert(`Hallo, ${nama}`));


// const mhs = [
//     {
//         "nama": "Renaldi",
//         "nim": "10107050",
//         "email": "renaldi@gmail.com",
//         "jurusan": "Sistem Informasi",
//         "idDosenWali": 1
//     },
//     {
//         "nama": "Andi",
//         "nim": "10107051",
//         "email": "andi@gmail.com",
//         "jurusan": "Sistem Informasi",
//         "idDosenWali": 2
//     },
//     {
//         "nama": "Rendi",
//         "nim": "10107052",
//         "email": "rendi@gmail.com",
//         "jurusan": "Teknik Industri",
//         "idDosenWali": 2
//     }
// ];

// console.log('mulai');
// mhs.forEach(m => {
//     for (let i = 0; i < 10000000; i++) {
//         let date = new Date();
//     }
//     console.log(m.nama)
// });
// console.log('selesai');


// Async Callback 

// function getDataMahasiswa(url, success, error) {
//     let xhr = new XMLHttpRequest();

//     xhr.onreadystatechange = function () {
//         if (xhr.readyState === 4) {
//             if (xhr.status === 200) {
//                 success(xhr.response);
//             } else if (xhr.status === 404) {
//                 error();
//             }
//         }
//     }

//     xhr.open('get', url);
//     xhr.send();
// }

// console.log('mulai');
// getDataMahasiswa('data/mahasiswa.json', results => {
//     const mhs = JSON.parse(results);
//     mhs.forEach(m => console.log(m.nama));
// }, () => { })
// console.log('selesai');

// JQUERY
console.log('mulai');
$.ajax({
    url: 'data/mahasiswa.jso',
    success: (mhs) => {
        mhs.forEach(m => console.log(m.nama));
    },
    error: (e) => {
        console.log(e.responseText);
    }
});
console.log('selesai');