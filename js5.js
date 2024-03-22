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

//--

//aq chavardeba linki mxolod pirvel konteinershi
// let link=document.createElement('a')
// link.textContent='google link'
// link.classList.add('link-a')
// link.setAttribute('href', 'https://google.com')
// link.setAttribute('target', '_blank')

// document.querySelector('.container').appendChild(link)

//aq chavardeba konkretul conteinershi romlis indeqssac gadavcemt aqac indeqsebis aTvla iwyeba nulidan
// let link = document.createElement("a");
// link.textContent = "google link";
// link.classList.add("link-a");
// link.setAttribute("href", "https://google.com");
// link.setAttribute("target", "_blank");

// document.querySelectorAll(".container")[1].appendChild(link);

//yvelashi rom chavardes linki unda gadavuarit foreachit
// let link = document.createElement("a");
// link.textContent = "google link";
// link.classList.add("link-a");
// link.setAttribute("href", "https://google.com");
// link.setAttribute("target", "_blank");

// document.querySelectorAll(".container")[1].appendChild(link);
// let divArray = document.querySelectorAll(".container");

divArray.forEach(function (item) {
  let link = document.createElement("a");
  link.textContent = "google link";
  link.classList.add("link-a");
  link.setAttribute("href", "https://google.com");
  link.setAttribute("target", "_blank");

  item.appendChild(link);
});
