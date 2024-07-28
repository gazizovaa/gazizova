'use strict';

const elementToggleFunc = function (elem){
    elem.classList.toggle("active");
}

const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

sidebarBtn.addEventListener("click", function () { elementToggleFunc(sidebar); });

const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");

const filterItems = document.querySelectorAll("[data-filter-item]");