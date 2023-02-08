const logo = document.querySelector(".mainheader img").addEventListener('click', () => {
    darkmode();
});
const header = document.querySelector('.header');
const sidebar = document.querySelector('.sidebar');
const mainDisplay = document.querySelector('.mainDisplay');
const main = document.querySelector('main');
const h1 = document.querySelectorAll('#h1, p, li');
const td = document.querySelectorAll('td, th, table');

function darkmode() {
    
        header.style.cssText = "background-color: rgb(20, 15, 36);";
        sidebar.style.cssText = "background-color: rgb(20, 15, 36);";
        mainDisplay.style.cssText = "background-color: rgb(20, 15, 36);";
        main.style.cssText = "background-color: rgb(51, 51, 51)";
        for (let j = 0; j < h1.length; j++) {
            h1[j].style.cssText = "color: rgb(61, 151, 62);";
        }
        for (let i = 0; i < td.length; i++) {
            td[i].style.cssText = "color: rgb(61, 151, 62); border: 1px solid rgb(61, 151, 62);";
        }
}

const dropDownBtn = document.querySelectorAll('.dropDownBtn');
const dropDown = document.querySelectorAll('#dropDown');

dropDownArray = [];

for (let i = 0; i < dropDown.length; i++) {
    dropDownArray[i] = {
        contents: dropDown[i],
        button: dropDownBtn[i],
        isDown: false,
    }
    dropDownArray[i].button.addEventListener('click', () => {
        if (dropDownArray[i].isDown == false) {
        dropDownArray[i].contents.style.cssText = "content-visibility: visible"
        dropDownArray[i].isDown = true;
        }
        else if (dropDownArray[i].isDown == true) {
            dropDownArray[i].contents.style.cssText = "content-visibility: hidden"
            dropDownArray[i].isDown = false;
            }
    });
}