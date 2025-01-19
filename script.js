var loader = document.querySelector(".loading-container");
let date = document.querySelector(".date")
let time = document.querySelector(".time")

window.addEventListener("load", function () {
    loader.style.display = "none";
    loader.remove();

    AOS.init({
        offset: 100,
        duration: 1000
    });
})

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


let scrollTop = document.querySelector('.back-to-top');

if (scrollTop) {
    scrollTop.addEventListener('click', function () {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    })
}


const scriptURL = 'https://script.google.com/macros/s/AKfycbwKdSdL5jHHfnaCCmxo_7sMG_lBunpUFnJLTFrFv4lipvjCBUO2yPbbgy8uSEy39wOLQA/exec'
const form = document.forms['submit-to-google-sheet']

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => {
            window.location.href = "successfull.html"
        })
        .catch(error => console.error('Error!', error.message))
})