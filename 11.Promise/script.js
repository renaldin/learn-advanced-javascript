// Promise

// $.ajax({
//     url: 'http://www.omdbapi.com/?apikey=481597da&s=avengers',
//     success: movies => console.log(movies),
// });

// let xhr = new XMLHttpRequest();
// xhr.onreadystatechange = function () {
//     if (xhr.status === 200) {
//         if (xhr.readyState === 4) {
//             console.log(JSON.parse(xhr.response));
//         }
//     } else {
//         console.log(xhr.responseText);
//     }
// }

// xhr.open('get', 'http://www.omdbapi.com/?apikey=481597da&s=avengers');
// xhr.send();


// fetch('http://www.omdbapi.com/?apikey=481597da&s=avengers')
//     .then(response => response.json())
//     .then(response => console.log(response));


// promise = objek yang merepresentasikan keberhasilan / kegagalan sebuah event asynchronous di masa yang akkan datang
// contoh 1
// let ditepati = false;
// const janji1 = new Promise((resolve, reject) => {
//     if (ditepati) {
//         resolve('janji ditepati');
//     } else {
//         reject('ingkar janji');
//     }
// });

// janji1
//     .then(response => console.log('OK! : ' + response))
//     .catch(response => console.log('NOT OK! : ' + response));


// contoh 2
// let ditepati = true;
// const janji2 = new Promise((resolve, reject) => {
//     if (ditepati) {
//         setTimeout(() => {
//             resolve('Ditepati setelah beberapa waktu');
//         }, 2000);
//     } else {
//         setTimeout(() => {
//             resolve('Tidak Ditepati setelah beberapa waktu');
//         }, 2000);

//     }
// });

// console.log('mulai');
// janji2
//     .finally(() => console.log('selesai menunggu'))
//     .then(response => console.log('OK ' + response))
//     .catch(response => console.log('OK ' + response))
// console.log('selesao');


// Promise all 
const film = new Promise(resolve => {
    setTimeout(() => {
        resolve([{
            judul: 'Avengers',
            sutradara: 'Renaldi',
            pemeran: 'Ja, juda'
        }])
    }, 1000);
});

const cuaca = new Promise(resolve => {
    setTimeout(() => {
        resolve([{
            kota: 'Bandung',
            temp: 26,
            kondisi: 'Cerah berawan'
        }])
    }, 500);
});

// film.then(response => console.log(response));
// cuaca.then(response => console.log(response));

Promise.all([film, cuaca])
    // .then(response => console.log(response));
    .then(response => {
        const [film, cuaca] = response;
        console.log(film);
        console.log(cuaca);
    });