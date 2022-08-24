const btn = document.querySelector("#btn-form");

btn.addEventListener("click", function() {

    const div = document.querySelector("#container-form");
    
  if(div.style.display === "none") {
        div.style.display = "block";
    } else {
      div.style.display = "none";
  }
    


});

