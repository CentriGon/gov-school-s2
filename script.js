const logo = document.querySelector(".header img");

const isDark = false;
logo.addEventListener('click', () => {
    darkmode();
})


const header = document.querySelector('.header');
const sidebar = document.querySelector('.sidebar');
const mainDisplay = document.querySelector('.mainDisplay');
const main = document.querySelector('#main');
style.cssText = ""


function darkmode() {
    if (isDark == false) {
        header.style.cssText = "background-color: rgb(20, 15, 36);"
        sidebar.style.cssText = "background-color: rgb(20, 15, 36);"
        mainDisplay.style.cssText = "background-color: rgb(20, 15, 36);"
        main.style.cssText = "background-color: rgb(51, 51, 51)"
        
        isDark = true;
    }
    
}