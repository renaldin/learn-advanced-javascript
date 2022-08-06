// function expression
// const showName = function (name) {
//     return `Hallo ${name}`;
// }

// console.log(showName('Renaldi'));

// ***********************************
// arrow function
// satu parameter
// const showName = (name) => { return `Hallo ${name}` };
// console.log(showName('Renaldi'));

// const showName = name => { return `Hallo ${name}` };
// console.log(showName('Renaldi'));

// implisit return
// const showName = name => `Hallo ${name}`;
// console.log('Renaldi');

// *************************************?
// dua paramter
// const showName = (name, time) => {
//     return `Good ${time}, ${name}`;
// }
// console.log(showName('Renaldi', 'Morning'));



let mahasiswa = ['Renaldi', 'Adi', 'Beni'];

// function expression
// let jumlahHuruf = mahasiswa.map(function (nama) {
//     return nama.length;
// })
// console.log(jumlahHuruf);

// arrow function
// let jumlahHuruf = mahasiswa.map(nama => nama.length);
// console.log(jumlahHuruf);

let jumlahHuruf = mahasiswa.map(nama => ({ nama: nama, jumlahHuruf: nama.length }));
console.table(jumlahHuruf);