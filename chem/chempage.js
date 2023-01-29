const logo = document.querySelector(".mainheader img");

const header = document.querySelector('.header');
const sidebar = document.querySelector('.sidebar');
const mainDisplay = document.querySelector('.mainDisplay');
const main = document.querySelector('main');
const h1 = document.querySelectorAll('#h1');
const td = document.querySelectorAll('td, th, table');
const p = document.querySelectorAll('p, li');




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