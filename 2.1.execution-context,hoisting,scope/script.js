// 2.1. execution - context, hoisting, scope

// console.log(name);
// var name = "Renaldi";

// creation phose pada global contact
// nama var = undefined
// nama function = fn()
// hoisting
// window = global object
// this = window

// excetion phase


// console.log(sayHello());


// var name = "Renaldi";
// var age = 20;

// function sayHello() {
//     console.log(`Halo nama saya ${name}, saya ${age} tahun`);
//     // tidak return
// }

// function membuat Local Execution Context
// yang didalamnya terdapat creation dan execution phase
// window
// arguments
// hoisting


// var name = "Renaldi";
// var username = "@renaldi.yyy";

// function cetakUrl() {
//     console.log(arguments[0]);
//     var instagramUrl = "http://instagram.com/";
//     return instagramUrl + username;
// }

// console.log(cetakUrl('@renaldi'));

// function a() {
//     console.log('ini a');

//     function b() {
//         console.log('ini b');

//         function c() {
//             console.log('ini c');
//         }

//         c();
//     }

//     b();
// }

// a();





function satu() {
    var name = "Renaldi";
    console.log(name);
}

function dua() {
    console.log(name);
}

console.log(name);
var name = "erik";
satu();
dua('doddy');
console.log(name);