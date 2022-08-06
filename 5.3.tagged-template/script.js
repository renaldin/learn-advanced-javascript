// tagget template ini bentuk yang lebih komplek dari template literal 

// const name = 'Renaldi';
// const age = 21;

// function coba(strings, ...values) {
//     // let result = '';
//     // strings.forEach((str, i) => {
//     //     result += `${str}${values[i] || ''}`;
//     // });
//     // return result;

//     return strings.reduce((result, str, i) => `${result}${str}${values[i] || ''}`, '');
// }

// const str = coba`Halo, nama saya ${name}, saya ${age} tahun`;
// console.log(str);


const name = 'Renaldi';
const age = 21;
const email = 'renaldi@gmail.com';

function highlight(strings, ...values) {
    return strings.reduce((result, str, i) => `${result}${str}<span class="hl">${values[i] || ''}</span>`, '');
}

const str = highlight`Halo, nama saya ${name}, saya ${age} tahun dan email saya adalah ${email}`;
document.body.innerHTML = str;