// function init() {
//     let name = "Renaldi";
//     let age = 20;
//     function showName() {
//         console.log(name);
//         console.log(age);
//     }
//     console.dir(showName);
// }
// init();


// function init() {
//     let name = "Renaldi";
//     function showName() {
//         console.log(name);
//     }
//     return showName;
// }
// let callName = init();
// callName();

// function init() {
//     // let name = "Renaldi";
//     return function (name) {
//         console.log(name);
//     }
// }
// let callName = init();
// callName('Renad');
// callName('Renaldi');



// function speakSalam(time) {
//     return function (name) {
//         console.log(`Halo ${name}. Good ${time}`);
//     };
// }

// let goodMorning = speakSalam('Morning');
// let goodNight = speakSalam('Night');

// goodMorning('Renaldi');
// goodNight('Galih');



let add = (
    function () {
        let counter = 0;
        return function () {
            return ++counter;
        }
    }
)();

counter = 100;

console.log(add());
console.log(add());
console.log(add());