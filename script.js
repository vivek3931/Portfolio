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


let scrollTop = document.querySelector('.back-to-top');

if (scrollTop) {
    scrollTop.addEventListener('click', function () {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    })
}



let submitBtn = document.querySelector("#submit");


submitBtn.addEventListener("click", function (event) {
    event.preventDefault();
    let name = document.querySelector("#name").value;
    let email = document.querySelector("#email").value;
    let message = document.querySelector("#message").value;
    if (name === "" || email === "" || message === "") {
        alert("Please fill the required input to proceed");
    } else {
        if (validateEmail(email) && Name(name)) {
            window.location.href = "successfull.html";
        } else {
            alert("Please enter a valid details to continue");
        }
    }
});

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}
function Name(name) {
    if (name === "") {
        alert("name should not be empty");
        return false;
    }
    return true;
}
