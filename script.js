document.querySelector('.title-text').remove();

const centeredText = document.createElement('div');
centeredText.innerHTML = "<div class='title-text'>" +
    "<center>" +
    "CSS - Futuristic Loading<br> By @QIB.Je" +
    "</center>" +
    "</div>";
document.body.appendChild(centeredText);

const $i = document.querySelector('i');
let progress = 0;

setInterval(
    () => {
        progress++;
        $i.innerText = `${progress}%`;
        if (progress === 100) {
            progress = 0;
        }
    },
    100,
);
