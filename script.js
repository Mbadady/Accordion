console.log("hello world");

const arrowDown = document.querySelectorAll(".arrow-down")
const arrowUp = document.querySelectorAll(".arrow-up")

const components = document.querySelectorAll(".component")
console.log(components);

// Using Event Delegation and looping over all the components 
components.forEach(component=>component.addEventListener("click", function(e){
    // console.log(component);
    e.preventDefault()
    // console.log(arrowActive);
    component.classList.toggle("component-active")
}))
// components.forEach(component=>component.classList.remove("component-active"))