document.addEventListener("DOMContentLoaded",function(){var winWidth=window.innerWidth||document.documentElement.clientWidth;var menu=document.querySelector('aside');var topbar={btnMenu:document.querySelector('.site-hamburger'),showMenu:winWidth>=768}
menu.querySelector('.close').onclick=function(){menu.style.display="none";}
document.querySelector('.top-bar .menu').onclick=function(){menu.style.display='block';}
window.addEventListener('resize',function(){winWidth=window.innerWidth||document.documentElement.clientWidth;if(!topbar.showMenu&&winWidth>=768){menu.style.display='table-cell';topbar.showMenu=true;}
else if(topbar.showMenu&&winWidth<768){menu.style.display='none';topbar.showMenu=false;}
resizeThumb();});resizeThumb();function resizeThumb(){var lists=document.querySelectorAll(".list .thumb .scroll");for(var i=0;i<lists.length;i++){function initImg(box){var to=setInterval(function(){box.style.display="block";box.scrollLeft=(600-box.clientWidth)/2;var w=box.querySelector('img').naturalWidth;box.querySelector('img').width=w/2;if(w>0)clearInterval(to);},100);}
initImg(lists[i]);}}});