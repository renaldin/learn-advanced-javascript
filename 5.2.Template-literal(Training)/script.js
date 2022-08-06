// 1. HTML Fragments
// const mhs = {
//     name: 'Renaldi',
//     age: 12,
//     nim: 10101010,
//     email: 'renaldi@gmail.com'
// };

// const el = `<div class="mhs">
//     <h2>${mhs.name}</h2>
//     <span class="nim">${mhs.nim}</span>
// </div>`;

// 2. looping
// const mhs = [
//     {
//         name: 'Renaldi',
//         age: 22
//     },
//     {
//         name: 'Dandi',
//         age: 12
//     },
//     {
//         name: 'Randi',
//         age: 21
//     },
// ];

// const el = `<div class="mhs">
//     ${mhs.map(m => `<ul>
//         <li>${m.name}</li>
//         <li>${m.age}</li>
//     </ul>`).join("")}
// </div>`;


// 3. pengkondisian
// ternary
// const lagu = {
//     judul: 'Kau Adalah',
//     penyanyi: 'Isyana Sarasvati',
//     feat: 'Rayi Putra'
// };

// const el = `<div class="lagu">
//     <ul>
//         <li>${lagu.penyanyi}</li>
//         <li>${lagu.judul} ${lagu.feat ? `(feat. ${lagu.feat})` : ``}</li>
//     </ul>
// </div>`;


// 4. nested
// HTML Fragments Bersarang
const mhs = {
    name: 'Renaldi',
    semester: 5,
    matakuliah: [
        'Rekayasa Web',
        'APSI',
        'Pemrograman Sistem Interaktif',
        'Pemrograman Berabasis oBJEK'
    ]
};

function cetakMatakuliah(matakuliah) {
    return `
        <ol>
            ${matakuliah.map(mk => `<li>${mk}</li>`).join('')}
        </ol>
    `;
}

const el = `<div class="mhs">
    <h2>${mhs.name}</h2>
    <span class="semester">Semester ${mhs.semester}</span>
    <h4>Mata Kuliah</h4>
    ${cetakMatakuliah(mhs.matakuliah)}
</div>`;


document.body.innerHTML = el;