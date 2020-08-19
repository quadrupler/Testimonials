// load the html tags from the dom
const leftButton = document.getElementById('left-button')
const rightButton = document.getElementById('right-button')

const name = document.getElementById('name')
const title = document.getElementById('title')
const description = document.getElementById('testimonial')

window.addEventListener('load', (event ) => {


// When I click the left button I should be shown the previous review or the button should be disabled until the user pushes a new review
leftButton.addEventListener('click', onLeftButtonPressed)

// When I push the right button I should be shown a new review
rightButton.addEventListener('click', onRightButtonPressed)
})

// current position of testimonials

// bool for left arrow/previous testimony disable/enable
let position = 0
// What goes into a testimonial?

/* 
Name: Billy Bob
Title: Web Developer
Testimonial: This is my thoughts on this amazing thingy mabobber!

*/

const Testimonial = (name, title, description) =>
 {
     return {name, title, description}
 }

 let myTestimonial = Testimonial('bob','designer','amazing much wow')
// create some fake testimonials for development purposes



// When I load the page I should be served a random review


const onLeftButtonPressed = (event) => 
{
    position--
    (!position) ? leftButton.disabled = true : leftButton.disabled = false
 // disable left arrow on page load
//  enable when the position ISN'T zero
}


// incremenets global position variable by one and updates view to show the new testimonial in the array
const onRightButtonPressed = (event) =>
{
    position++
    name.innerHTML = myTestimonial.name
    leftButton.disabled = false
}




