let date = document.querySelector(".date")
let time = document.querySelector(".time")

let clock = () => {
    const now = new Date();

    const formattedDate = now.toLocaleDateString('en-US', {
        month: 'long',
        day: 'numeric'
    })
    const formattedTime = now.toLocaleTimeString('en-US', {
        hour: 'numeric',
        minute: 'numeric',
    })
    date.innerText = formattedDate;
    time.innerText = formattedTime;
}
clock();
setInterval(clock, 1000);

let sidenav = document.querySelector('.side-nav');
let menu = document.querySelectorAll('.menu-bar');

menu.forEach(element => {
    element.addEventListener("click", () => {
        sidenav.classList.toggle('hidden')
    })
});

let backgroundchange = document.querySelector('.background-change');

document.getElementById('change-bg-btn').addEventListener('click', () => {
    const body = document.body;
    const images = [
        'url("assets/bg2.jpg")',
        'url("./img/purple_bg2.jpg")',
        'url("assets/bg3.jpg")'
    ];
    const currentImage = body.style.backgroundImage;
    let nextImage = images[0];

    if (currentImage) {
        const currentIndex = images.indexOf(currentImage);
        nextImage = images[(currentIndex + 1) % images.length];
    }

    body.style.backgroundImage = nextImage;
    body.style.backgroundSize = 'cover';
    body.style.backgroundPosition = 'center';
});


let button = document.querySelector('.change-bg-btn');

button.addEventListener('click', () => {
    button.innerText = rotateButton
    rotateButton.style.transform = 'rotate(180deg)';
})