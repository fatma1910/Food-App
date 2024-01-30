const menu = document.querySelector(".fa-bars");
const body = document.body;
const navBar= document.querySelector(".nav");
// console.log(menu);

const section = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('header .nav a');

menu.onclick = () =>{
  menu.classList.toggle('fa-times');
  navBar.classList.toggle('active');
}

window.onscroll = () =>{
    menu.classList.remove('fa-times');
    navBar.classList.remove('active');
}

function inView(element) {
  // get window height
  var windowHeight = window.innerHeight;
  // get number of pixels that the document is scrolled
  var scrollY = window.scrollY || window.pageYOffset;
  
  // get current scroll position (distance from the top of the page to the bottom of the current viewport)
  var scrollPosition = scrollY + windowHeight;
  // get element position (distance from the top of the page to the bottom of the element)
  var elementPosition = element.getBoundingClientRect().top + scrollY;
  
  // is scroll position greater than element position? (is element in view?)
  if (scrollPosition >( elementPosition + 500)) {
    return true;
  }
  
  return false;
}

function updateSectionActiveState(id){
  navLinks.forEach(link => {
    link.classList.remove('active');
    document.querySelector('header .nav a[href*='+id+']').classList.add('active');
  });
}

function animate(){
  section.forEach((element) => {
    if (inView(element)){
      updateSectionActiveState(element.id);
    }
  })
}

body.onscroll = () => animate();




//     section.forEach(sec =>{
//       // console.log(sec);
//       let top = window.scrollY;
//       let height = sec.offsetHeight;
//       let offset = sec.offsetTop - 150;
//       let id = sec.getAttribute('id');

//       if( top => offset && top < offset + height){
//         console.log(sec.id, 'in view');
//         navLinks.forEach(link => {
//           link.classList.remove('active');
//           document.querySelector('header .nav a[href*='+id+']').classList.add('active');
//         });
//       }
//     });

// }

document.querySelector(".search").onclick = () => {
    document.querySelector("#search-form").classList.toggle('active');
}
document.querySelector(".fa-xmark").onclick = () => {
    document.querySelector("#search-form").classList.remove('active');
}

var swiper = new Swiper(".home", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 7500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    loop:true,
  });
  var swiper = new Swiper(".review .s-container", {
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      640: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },

    },

    autoplay: {
      delay: 7500,
      disableOnInteraction: false,
    },
    spaceBetween: 20,
    loop:true,
  });

  function loader() {
    document.querySelector('.loader-container').classList.add('fade-out');
  }
  function fadeOut(){
    setInterval(loader,3000)
  }
  window.onload = fadeOut;