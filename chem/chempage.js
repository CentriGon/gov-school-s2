const logo = document.querySelector(".mainheader img");
let coordCompIsDown = false;
let commonIonIsDown = false;
let chap12isDown = false;

const header = document.querySelector('.header');
const sidebar = document.querySelector('.sidebar');
const mainDisplay = document.querySelector('.mainDisplay');
const main = document.querySelector('main');
const h1 = document.querySelectorAll('#h1');
const td = document.querySelectorAll('td, th, table');
const p = document.querySelectorAll('p, li');
const cordCompbtn = document.querySelector('.btnCordComp')
const cordComp = document.querySelector('.notesCoordCompound');
const commonIonbtn = document.querySelector('.commonIonsbtn');
const nomenclatureTable = document.querySelector('.nomenclatureTable');
const chap12Notes = document.querySelector('.chap12Notes');
const chap12btn = document.querySelector('.chap12btn');

chap12btn.addEventListener('click', () => {
    if (chap12isDown == false) {
        chap12Notes.style.cssText = "content-visibility: visible;"
        chap12isDown = true;
    }
    else if (chap12isDown == true) {
        chap12Notes.style.cssText = "content-visibility: hidden;"
        chap12isDown = false;
    }
})

commonIonbtn.addEventListener('click', () => {
    if (commonIonIsDown == false) {
        nomenclatureTable.style.cssText = "content-visibility: visible;"
        commonIonIsDown = true;
    }
    else if (commonIonIsDown == true) {
        nomenclatureTable.style.cssText = "content-visibility: hidden;"
        commonIonIsDown = false;
    }
})

cordCompbtn.addEventListener('click', () => {
    if (coordCompIsDown == false) {
    cordComp.style.cssText = "content-visibility: visible;"
   
    coordCompIsDown = true;
    }
    else if (coordCompIsDown == true) {
        cordComp.style.cssText = "content-visibility: hidden;"
        coordCompIsDown = false;
        
    }
})





function darkmode() {
    
        header.style.cssText = "background-color: rgb(20, 15, 36);";
        sidebar.style.cssText = "background-color: rgb(20, 15, 36);";
        mainDisplay.style.cssText = "background-color: rgb(20, 15, 36);";
        main.style.cssText = "background-color: rgb(51, 51, 51)";
        for (let k = 0; k < p.length; k++) {
            p[k].style.cssText = "color: rgb(61, 151, 62);";
        }
        for (let j = 0; j < h1.length; j++) {
            h1[j].style.cssText = "color: rgb(61, 151, 62);";
        }
        for (let i = 0; i < td.length; i++) {
            td[i].style.cssText = "color: rgb(61, 151, 62); border: 1px solid rgb(61, 151, 62);";
        }
}

logo.addEventListener('click', () => {
    darkmode();
})