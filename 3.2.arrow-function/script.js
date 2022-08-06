// konsep this pada arrow function

// constructor function
// const Mahasiswa = function () {
//     this.name = 'Renaldi';
//     this.age = 21;
//     this.sayHello = function () {
//         console.log(`Hallo, nama saya ${this.name}, saya ${this.age} tahun`);
//     }
// }

// const renaldi = new Mahasiswa();



// arrow function
// const Mahasiswa = function () {
//     this.name = 'Renaldi';
//     this.age = 21;
//     this.sayHello = () => {
//         console.log(`Hallo, nama saya ${this.name}, saya ${this.age} tahun`);
//     }
// }

// const renaldi = new Mahasiswa();


// object literal
// const mhs1 = {
//     name: 'Renaldi',
//     age: 21,
//     sayHello: () => {
//         // console.log(`Hallo nama saya ${this.name}, saya ${this.age} tahun`);
//         console.log(this);
//     }
// }



// const Mahasiswa = function () {
//     this.name = 'Renaldi';
//     this.age = 21;
//     this.sayHello = function () {
//         console.log(`Hallo, nama saya ${this.name}, saya ${this.age} tahun`);
//     }

//     setInterval(() => {
//         console.log(this.age++);
//     }, 500);
// }

// const renaldi = new Mahasiswa();




const box = document.querySelector('.box');
box.addEventListener('click', function () {
    let one = 'size';
    let two = 'caption';

    if (this.classList.contains(one)) {
        [one, two] = [two, one];
    }

    this.classList.toggle(one);
    setTimeout(() => {
        this.classList.toggle(two);
    }, 600);
});