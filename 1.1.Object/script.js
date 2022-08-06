// 1. Object Literal
// Problaem : tidak efektik untuk object yang bbanyak
// let mahasiswa1 = {
//     nama: "Renaldi",
//     energi: 10,
//     makan: function (porsi) {
//         this.energi = this.energi + porsi;
//         console.log(`Hallo ${this.nama}, selamat makan`);
//     }
// }

// let mahasiswa2 = {
//     nama: "Dodi",
//     energi: 10,
//     makan: function (porsi) {
//         this.energi = this.energi + porsi;
//         console.log(`Hallo ${this.nama}, selamat makan`);
//     }
// }




// 2. Function Declaration
// 4. Object.create
// const methodMahasiswa = {
//     makan: function (porsi) {
//         this.energi += porsi;
//         console.log(`Hallo ${this.nama}, selamat makan!`);
//     },

//     main: function (jam) {
//         this.energi -= jam;
//         console.log(`Hallo ${this.nama}, selamat bermain`);
//     },

//     tidur: function (jam) {
//         this.energi += jam * 2;
//         console.log(`Halo ${this.nama}, selamat tidur`);
//     }
// }

// function Mahasiswa(nama, energi) {
//     let mahasiswa = Object.create(methodMahasiswa);
//     mahasiswa.nama = nama;
//     mahasiswa.energi = energi;


//     return mahasiswa;
// }

// let renaldi = Mahasiswa('Renaldi', 10);
// let dodi = Mahasiswa('Dodi', 20);


// 3. Xonstructor Function
// keyword new
// function Mahasiswa(nama, energi) {

//     this.nama = nama;
//     this.energi = energi;

//     this.makan = function (porsi) {
//         this.energi += porsi;
//         console.log(`Hallo ${this.nama}, selamat makan!`);
//     }

//     this.main = function (jam) {
//         this.energi -= jam;
//         console.log(`Hallo ${this.nama}, selamat bermain`);
//     }

// }

// let renaldi = new Mahasiswa('Renaldi', 10);
