// toggle icon navbar

let menuIcon=document.querySelector('#menu_icon');
let navbar=document.querySelector('.navbar');

menuIcon.onclick = () =>{
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}


// scroll section
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');
// header scroll===============
window.onscroll =() =>{
    sections.forEach(sec =>{
      let top =window.scrollY;
      let offset=sec.offsetTop-100;
      let height=sec.offsetHeight;
      let id=sec.getAttribute('id');
        if(top >= offset && top < offset + height){
            // active navbaar links
            navLinks.forEach(links =>{
                links.classList.remove('active');
                document.querySelector('header nav a[href*='+id +']').classList.add('active');
            });
            // active sections for animation on scroll
            sec.classList.add('show_animate');
        }

        // if u want to use animation that repeats on scroll use this
        else{
            sec.classList.remove('show_animate');
        }
    });

    // sticky header
    let header =document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY >100);
    // header scroll===============
    // remove toggle icon and navbar when click navbar link (scroll)

    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
    // animation footer onscroll

    let footer= document.querySelector('footer');
    footer.classList.toggle('show_animate', this.innerHeight + this.scrollY >= document.scrollingElement.scrollHeight);

}




