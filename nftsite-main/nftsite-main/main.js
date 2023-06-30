let menu = document.querySelector('.menu-icon');

let navbar = document.querySelector('.menu')

menu.onclick = () => {

    navbar.classList.toggle('active')

    menu.classList.toggle('move')

    bell.classList.remove('active')
}

let bell = document.querySelector('.notification');

document.querySelector('#bell-icon').onclick = () =>{
    bell.classList.toggle('active');
}

// TEXT-ANIMATION

class Typewriter {
    constructor(txtElement, words, wait = 3000) {
        this.txtElement = txtElement;
        this.words = words;
        this.txt = '';
        this.wordIndex = 0;
        this.wait = parseInt(wait, 10);
        this.type();
        this.isDeleting = false;
    }

    type() {
        //Current Index Of Word
        const current = this.wordIndex % this.words.length;
        //Getting the full text of th current word
        const fullTxt = this.words[current];

        //checking if it's deleting
        if(this.isDeleting) {
            //Remove char
            this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
            //Add a char
            this.txt = fullTxt.substring(0, this.txt.length + 1);
        }

        //Inserting the text to the element
        this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;

        //initializing the type speed
        let typeSpeed = 300;

        if(this.isDeleting){
            typeSpeed /=2
        }

        //IF THE WORD IS COMPLETE
        if(!this.isDeleting && this.txt === fullTxt){
            //MAKING A PAUSE AT THE END
            typeSpeed = this.wait;
            //setting the delete to true
            this.isDeleting = true;
        } else if(this.isDeleting && this.txt === '') {
            this.isDeleting = false;
            // Move to the next word
            this.wordIndex++;
            //pause boefore starting a new word
            typeSpeed = 500;
        }

        setTimeout(() => this.type(), typeSpeed)
    }
}

document.addEventListener('DOMContentLoaded', init);

function init(){
    const txtElement = document.querySelector('.txt-type');
    const words = JSON.parse(txtElement.getAttribute('data-words'));
    const wait = txtElement.getAttribute('data-wait')

    new Typewriter(txtElement, words, wait)
}

// SWIPER JS CODE
var swiper = new Swiper(".trending-content", {
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      768: {
        slidesPerView: 4,
        spaceBetween: 15,
      },
      1060: {
        slidesPerView: 5,
        spaceBetween: 50,
      },
    },
  });

// Custom Scroll Bar
window.onscroll = function() {mufunction()};
function mufunction(){
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;

    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;

    var scrolled = (winScroll / height) * 100;

    document.getElementById('scroll-bar').style.width = scrolled + '%'
}