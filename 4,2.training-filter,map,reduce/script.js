// grab all video elements
const videos = Array.from(document.querySelectorAll('[data-duration]'));

// choose only that "JAVASCRIPT LANJUTAN"
let jsNext = videos.filter(video => video.textContent.includes('JAVASCRIPT LANJUTAN'))

    // take the duration of each video
    .map(item => item.dataset.duration)

    // update the duration becomes FLOAT, update minutes becomes second
    .map(time => {
        // 10:30 -> [10, 30] split 
        const parts = time.split(':').map(part => parseFloat(part));
        return (parts[0] * 60) + parts[1];
    })

    // amount second all
    .reduce((total, second) => total + second);

// update formate becomes hours, minutes, second
const hour = Math.floor(jsNext / 3600); //floor bulat kebawah, seal bulat ke atas, rpund bulat paling dekat 
jsNext = jsNext - hour * 3600;
const minutes = Math.floor(jsNext / 60);
const second = jsNext - minutes * 60;


// save in DOM
const pDuration = document.querySelector('.total-durasi');
pDuration.textContent = `${hour} Hours, ${minutes} Minutes, ${second} Second`;

const amountVideo = videos.filter(video => video.textContent.includes('JAVASCRIPT LANJUTAN')).length;
pAmountVideo = document.querySelector('.jumlah-video');
pAmountVideo.textContent = `${amountVideo} Video`;