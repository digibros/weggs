var menuBtn=document.getElementById("menuBtn");
var sideMenu=document.getElementById("sideMenu");
var menuBtnClose=document.getElementById("menuBtnClose");
menuBtn.addEventListener('click',function(){
    sideMenu.classList.add('open');
});
menuBtnClose.addEventListener('click',function(){
    sideMenu.classList.remove('open');
});