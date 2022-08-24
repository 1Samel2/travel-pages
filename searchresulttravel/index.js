const btn = document.querySelector("#button");

btn.addEventListener("click", function() {

    const div = document.querySelector("#containerRate");
    
  if(div.style.display === "none") {
        div.style.display = "block";
    } else {
      div.style.display = "none";
  }
});


const btnFilter = document.querySelector("#filtering");

btnFilter.addEventListener("click", function() {

    const divFilter = document.querySelector("#container-filtering");
    
  if(divFilter.style.display === "none") {
    divFilter.style.display = "block";
    } else {
      divFilter.style.display = "none";
  }
});








/* 
const button = document.getElementById("button")

button.addEventListener("click", function() {

const chevron = document.getElementById("svg");

chevron.classList.toggle("chevron-svg");
})
 */