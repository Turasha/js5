"use strict";

let imgElement = document.createElement("img");
imgElement.setAttribute(
  "src",
  "https://images.pexels.com/photos/669996/pexels-photo-669996.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
);
imgElement.setAttribute("alt", "perffect place for coding");
imgElement.style.width = "800px";
document.getElementById("wraper").appendChild(imgElement);

let pEelement = document.createElement("p");

pEelement.textContent = "image title";
pEelement.classList.add("title");
pEelement.style.backgroundColor = "red";
document.getElementById("wraper").appendChild(pEelement);

//---
let tstArray = document.querySelectorAll(".trytxt");
tstArray.forEach(function (item) {
  let testworck = document.createElement("p");
  testworck.classList.add("text");
  testworck.innerText = "hello";

  item.appendChild(testworck);
});
