"use strict";

let toggleSwitch = document.querySelector('input[type="checkbox"]');
let filterNav = document.querySelectorAll(".filter__nav a");

toggleSwitch.addEventListener("change", function () {
  toggleSwitch.checked
    ? document.body.classList.toggle("dark")
    : document.body.classList.remove("dark");
});

for (let i = 0; i < filterNav.length; i++) {
  filterNav[i].addEventListener("click", activateClass);
}

function activateClass(btn) {
  for (let i = 0; i < filterNav.length; i++) {
    filterNav[i].classList.remove("active");
  }
  btn.target.classList.add("active");
}

filterSelection("all");
function filterSelection(c) {
  let x, i;
  x = document.getElementsByClassName("work__img");
  if (c == "all") c = "";
  for (i = 0; i < x.length; i++) {
    RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) AddClass(x[i], "show");
  }
}

function AddClass(element, name) {
  let i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
}

// Hide elements that are not selected
function RemoveClass(element, name) {
  let i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}
