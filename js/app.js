/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/
// build the nav

let ul = document.querySelector('#navbar__list')
let sections = document.querySelectorAll('section');
let fragment = document.createDocumentFragment()
sections.forEach(function(section) {
    let li = document.createElement('li')
    li.dataset.nav =section.dataset.nav 
    li.classList.add('menu__link')  
    let menuLink = document.createElement('a')
    menuLink.innerHTML = section.dataset.nav
    menuLink.addEventListener('click',function(event){
    event.preventDefault();
    section.scrollIntoView({
    behavior:"smooth"
    })
    })
    li.appendChild(menuLink)
    fragment.appendChild(li)
})
ul.append(fragment)

// Add class 'active' to section when near top of viewport
let observer = new IntersectionObserver(function(entries){
    let section = entries[0]
    console.log(section.isIntersecting)
    section.target.classList.remove('your-active-class')
    if(section.isIntersecting){
        section.target.classList.add('your-active-class')
        const menuLinks = document.querySelectorAll('.menu__link')
        menuLinks.forEach(link=>{
            link.classList.remove('active')
            if(link.textContent === section.target.dataset.nav){
                console.log(link)
                link.classList.add('active')
            }
        })
    }else{
        section.target.classList.remove('your-active-class')
    }
} , {
    root:null,
    rootMargin:"0px",
    threshold:0.5
})
window.addEventListener('scroll',()=>{
    sections.forEach( section => {
        observer.observe(section)
    })
})
// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


