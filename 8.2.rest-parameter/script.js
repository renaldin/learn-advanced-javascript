// Rest Parameter

// function myFunc() {
//     // return `a = ${a}, b = ${b}, myArgs = ${myArgs}`;
//     // return myArgs;
//     // return Array.from(arguments);
//     // return [...arguments];
// }

// console.log(myFunc(1, 2, 3, 4, 5));


// function jumlahkan(...angka) {
//     // let total = 0;
//     // for (const a of angka) {
//     //     total += a;
//     // }
//     // return total;

//     // return angka.reduce((a, b) => a + b);
// }

// console.log(jumlahkan(1, 2, 3, 4, 5));


// array destructuring
// const kelompok1 = ['Renaldi', 'Andi', 'Aji', 'Hendra', 'Randi'];
// const [ketua, wakli, ...anggota] = kelompok1;
// console.log(anggota);


// object destructuring
// const team = {
//     pm: 'Renaldi',
//     frontend1: 'Doddy',
//     frontend2: 'Andi',
//     backend: 'Yudi',
//     ux: 'Jur',
//     decOps: 'Sandi'
// };

// const { pm, ...myTeam } = team;
// console.log(myTeam);



// filter 
function filterBy(type, ...values) {
    return values.filter(v => typeof v === type);
}

console.log(filterBy('number', 1, 2, 3, 'Renaldi', false, 'Rendi', true, 10, 10));