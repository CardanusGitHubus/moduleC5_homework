let imagesUrls = [];
let that = this;
let container = document.querySelector(".container");
let sideImg = null;

let move = getImgController(container);

// create images array
imagesUrls.push('https://proprikol.ru/wp-content/uploads/2020/03/sinij-czvet-krasivye-kartinki-1-650x433.jpg');
imagesUrls.push('https://proprikol.ru/wp-content/uploads/2020/03/sinij-czvet-krasivye-kartinki-3-650x487.jpg');
imagesUrls.push('https://proprikol.ru/wp-content/uploads/2020/03/sinij-czvet-krasivye-kartinki-5-650x366.jpg');
imagesUrls.push('https://proprikol.ru/wp-content/uploads/2020/03/sinij-czvet-krasivye-kartinki-23-1-650x406.jpg');

let index = 0;

let showPrevBtn = document.querySelector('.show-prev-btn');
let showNextBtn = document.querySelector('.show-next-btn');

// subscribe on events
showPrevBtn.addEventListener('click', _ => index = move(imagesUrls, index, -1));
showNextBtn.addEventListener('click', _ => index = move(imagesUrls, index, 1));

let img = document.querySelector(".slide-img");
img.src = imagesUrls[index];


function getImgController(container) {
    if (sideImg === null) {
        sideImg = document.createElement("img");
        sideImg.classList.add("slide-img");
    }

    return function(urlsArr, index, direction) {
        let img = container.querySelector('.slide-img');
        img.src = urlsArr[index];

        let sideIndex = (index + direction + urlsArr.length) % urlsArr.length;

        sideLeft = direction > 0 ? 100 : -100;
        sideImg.style.left = sideLeft + "%";
        container.appendChild(sideImg);
        sideImg.src = urlsArr[sideIndex];
        
        let step = 0;
        let interval = 10;
        
        let timer = setInterval(() => {
            step += 1;

            img.style.left = -step * direction + "%";
            sideImg.style.left = (sideLeft - step * direction) + "%";

            if (step === 100) {
                clearInterval(timer);
                container.removeChild(img);
                sideImg = img;
            }

        }, interval);

        return sideIndex;
    }
}
