// spread operator = operator yang memecah interable menjadi single element

// const mhs = ['Renaldi', 'Andi', 'Aldi'];
// console.log(...mhs[0]);

// menggabungkan 2 array
// const mhs = ['Renaldi', 'Andi', 'Aldi'];
// const dosen = ['Ade', 'Dudi', 'Wanda'];
// const orang = [...mhs, 'Aji', ...dosen];
// // const orang = mhs.concat(dosen);

// console.log(orang);


// mengcopy array
// const mhs = ['Renaldi', 'Aji', 'Adi'];
// // const mhs1 = mhs;
// // mhs1[0] = 'Fajar';

// const mhs1 = [...mhs];
// mhs1[0] = 'Fajar';
// console.log(mhs1);

// const liMhs = document.querySelectorAll('li');
// const mhs = [];
// for (let i = 0; i < liMhs.length; i++) {
//     mhs.push(liMhs[i].textContent);
// };
// console.log(mhs);

// const mhs = [...liMhs].map(m => m.textContent);
// console.log(mhs);


const nama = document.querySelector('.nama');
const huruf = [...nama.textContent].map(h => `<span>${h}</span>`).join('');

nama.innerHTML = huruf;