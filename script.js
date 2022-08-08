console.log("hello world");

const arrowDown = document.querySelectorAll(".arrow-down")
const arrowUp = document.querySelectorAll(".arrow-up")

const components = document.querySelectorAll(".component")
console.log(components);

components.forEach(component=>component.addEventListener("click", function(e){
  if(e.target.classList.contains("arrow")){
    const arrowActive = e.target
    component.classList.toggle("component-active")
  }
}))
components.forEach(component=>component.classList.remove("component-active"))