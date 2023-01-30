const logo = document.querySelector(".header img");

let isDark = false;
logo.addEventListener('click', () => {
    darkmode();
})



const header = document.querySelector('.header');
const sidebar = document.querySelector('.sidebar');
const mainDisplay = document.querySelector('.mainDisplay');
const main = document.querySelector('#main');
const avisit = document.querySelector('.sidebar li a');



function darkmode() {
    if (isDark == false) {
        header.style.cssText = "background-color: rgb(20, 15, 36);"
        sidebar.style.cssText = "background-color: rgb(20, 15, 36); color: rgb(61,151,62);"
        mainDisplay.style.cssText = "background-color: rgb(20, 15, 36);"
        main.style.cssText = "background-color: rgb(51, 51, 51)"
        avisit.style.cssText = "color: rgb(61,151,62);"
        isDark = true;
    }
    
}