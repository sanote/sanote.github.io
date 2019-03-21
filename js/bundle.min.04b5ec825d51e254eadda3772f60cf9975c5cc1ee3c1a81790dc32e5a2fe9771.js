document.addEventListener("DOMContentLoaded",function(){var winWidth=window.innerWidth||document.documentElement.clientWidth;var menu=document.querySelector('.top-bar-left');var topbar={menu:menu,btnMenu:document.querySelector('.site-hamburger'),showMenu:winWidth>=768}
topbar.btnMenu.onclick=function(){if(topbar.menu.style.display=='block'){topbar.menu.style.display='none';}else{topbar.menu.style.display='block';}}
document.querySelector('.top-bar .search input').onfocus=function(){if(winWidth>=768)this.style.width="70%";}
document.querySelector('.top-bar .search input').onblur=function(){if(winWidth>=768)this.style.width="";}
window.addEventListener('resize',function(){winWidth=window.innerWidth||document.documentElement.clientWidth;if(!topbar.showMenu&&winWidth>=768){topbar.menu.style.display='block';topbar.showMenu=true;}
else if(topbar.showMenu&&winWidth<768){topbar.menu.style.display='none';topbar.showMenu=false;}
resizeThumb();});resizeThumb();function resizeThumb(){var lists=document.querySelectorAll(".list .thumb .scroll");for(var i=0;i<lists.length;i++){function initImg(box){var to=setInterval(function(){box.style.display="block";box.scrollLeft=(600-box.clientWidth)/2;var w=box.querySelector('img').naturalWidth;box.querySelector('img').width=w/2;if(w>0)clearInterval(to);},100);}
initImg(lists[i]);}}});