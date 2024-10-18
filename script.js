// Smooth Scrolling for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Add animations on scroll
window.addEventListener('scroll', function() {
    const elementsToAnimate = document.querySelectorAll('.card, .package');
    elementsToAnimate.forEach(element => {
        const rect = element.getBoundingClientRect();
        if (rect.top < window.innerHeight) {
            element.classList.add('animated');
        }
    });
});
// navr bar ScriptProcessorNodeend 
let menuBar =document.querySelector(".menu-bar");
let header = document.querySelector("header");

const showMenu = () =>{
    header.classList.toggle("show-menu")
}

menuBar.addEventListener("click", showMenu)
// end 

// form script 
let form = document.querySelector("form")
// send data
const sendData =(e) =>{
    e.preventDefault();
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "rajputru690@gmail.com",
        Password : "D8BF0B5195E1A736830ADA58985B0ADF6BBB",
        To : 'rajputru690@gmail.com',
        From : "rajputru690@gmail.com",
        Subject : "Contact form",
        Body :"Name: " +document.getElementById("name").value+
        "<br> Email: " + document.getElementById("email").value+
        "<br> Phone number: " + document.getElementById("mobile").value+
        "<br> Phone number: " + document.getElementById("subject").value
    }).then(
      message => {
        if(message === "OK"){ 
            Swal.fire({
                title: "Great Job!",
                text: "Your form has been submitted!",
                icon: "success"
            });
        } else {
            Swal.fire({
                title: "Something went wrong",
                text: "Your form has not been submitted!",
                icon: "error"
            });
        }
      }
    );

    



}
// end 

form.addEventListener("submit", (e) =>{
    sendData(e)

})
// end 