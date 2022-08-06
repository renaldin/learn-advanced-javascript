// Destructuring Assignment

// Destructuring Array
// const perkenalan = ['Hallo', 'nama', 'saya', 'Renaldi'];
// const [salam, dua, tiga, nama] = perkenalan;

// skip
// const [salam, , , nama] = perkenalan;
// console.log(salam);

// swop items
// let a = 1;
// let b = 2;
// console.log(a);
// console.log(b);
// [a, b] = [b, a];
// console.log(a);
// console.log(b);

// return value pada function
// function coba() {
//     return [1, 2];
// }
// const [a, b] = coba();
// console.log(a);
// console.log(b);

// Rest parameter
// const [a, ...values] = [1, 2, 3, 4, 5, 6];
// console.log(a);
// console.log(values);




// destructuring object
// const mhs = {
//     nama: 'Renaldi',
//     umur: 12
// };
// const { nama, umur } = mhs;
// console.log(nama);

// assignment tanpa deklarasi objek
// ({ nama, umur } = { nama: 'Renaldi', umur: 12 });
// console.log(nama);

// assign ke var baru
// const mhs = {
//     nama: 'Renaldi',
//     umur: 12
// };
// const { nama: n, umur: u } = mhs;
// console.log(n);

// memberikan default value 
// const mhs = {
//     nama: 'Renaldi',
//     umur: 12,
//     email: 'renaldi@gmail.com'
// };
// const { nama, umur, email = 'email@gmail.com' } = mhs;
// console.log(email);

// memberikan nilai default dan assign ke var baru 
// const mhs = {
//     nama: 'Renaldi',
//     umur: 12,
//     email: 'renaldi@gmail.com'
// };
// const { nama: n, umur: u, email: e = 'email@gmail.com' } = mhs;
// console.log(e);

// Rest Parameter
// const mhs = {
//     nama: 'Renaldi',
//     umur: 12,
//     email: 'renaldi@gmail.com'
// };
// const { nama, ...value } = mhs;
// console.log(value);

// mengambil field pada objek, setelah dikirim sebagai parameter untuk functon 
const mhs = {
    id: 123,
    nama: 'Renaldi',
    umur: 12,
    email: 'renaldi@gmail.com'
};
function getIdMhs({ id }) {
    return id;
};
console.log(getIdMhs(mhs));
