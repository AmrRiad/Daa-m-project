'use strict';

const burgerMenuBtn = document.querySelector('.burgerMenu');
const linkGroup = document.querySelector('.linkGroup');
function showLinkGroup(){
    $(".linkGroup").toggle();
}


burgerMenuBtn.addEventListener('click', showLinkGroup)

const langBtn = document.querySelector(".langBtn");
const lang = document.querySelector(".lang");

function showLang(){
    console.log(langBtn)
        $(".lang").toggle();
}

langBtn.addEventListener('click', showLang)

$(document).ready(function(){
    $(window).scroll(function(){
    var scroll = $(window).scrollTop();
    if (scroll > 300) {
        $("#NavBar").css("background-color" , "#46334f");
    }
    else{
        $("#NavBar").css("background-color" , "transparent");  	
	}
})
})

let HrService = document.querySelector(".HrService");
let showService = document.getElementById("showService");
let showOverlay = document.querySelector(".overLay");

function showServiceBox(){
    showService.classList.remove("d-none");
    showOverlay.classList.remove("d-none");
};

HrService.addEventListener("click",showServiceBox);