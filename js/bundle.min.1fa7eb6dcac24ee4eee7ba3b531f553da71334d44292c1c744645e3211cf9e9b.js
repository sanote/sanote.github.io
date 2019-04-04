document.addEventListener("DOMContentLoaded",function(){var winWidth=window.innerWidth||document.documentElement.clientWidth;var menu=document.querySelector('aside');var topbar={btnMenu:document.querySelector('.site-hamburger'),showMenu:winWidth>=768}
menu.querySelector('.close').onclick=function(){menu.style.display="none";}
menu.querySelector('.bg').onclick=function(){menu.style.display="none";}
document.querySelector('.top-bar .menu').onclick=function(){menu.style.display='table';}
if(document.querySelector('section.home #search-by')){document.querySelector('section.home #search-by').onclick=function(){if(winWidth<768.98)window.scrollTo(0,this.offsetTop-10);}}
var ntabs=document.querySelectorAll('#arctab li');for(var i=0;i<ntabs.length;i++){ntabs[i].onclick=function(){window.scrollTo(0,document.getElementById(this.getAttribute('data-id')).offsetTop-60);}}
window.addEventListener('resize',function(){winWidth=window.innerWidth||document.documentElement.clientWidth;if(!topbar.showMenu&&winWidth>=768){menu.style.display='table-cell';topbar.showMenu=true;}
else if(topbar.showMenu&&winWidth<768.98){menu.style.display='none';topbar.showMenu=false;}
resizeThumb();});window.addEventListener('scroll',function(e){reloadTab();});reloadTab();resizeThumb();function resizeThumb(){var lists=document.querySelectorAll(".list .thumb .scroll");for(var i=0;i<lists.length;i++){function initImg(box){var to=setInterval(function(){box.style.display="block";box.scrollLeft=(600-box.clientWidth)/2;var w=box.querySelector('img').naturalWidth;box.querySelector('img').width=w/2;if(w>0)clearInterval(to);},100);}
initImg(lists[i]);}}
function reloadTab(){var top=document.documentElement.scrollTop||document.body.scrollTop;var arctab=document.getElementById('arctab');if(!arctab)return;var tabs=arctab.querySelectorAll('li');for(var i=tabs.length-1;i>=0;i--){tabs[i].className='';}
if(top>100&&arctab.style.position!='fixed'){arctab.style.position="fixed";arctab.style.top="0";}else if(top<=100&&arctab.style.position!='absolute'){arctab.style.position="absolute";arctab.style.top="";}
for(var i=tabs.length-1;i>=0;i--){var isnode=document.getElementById(tabs[i].getAttribute('data-id'));if(top>isnode.offsetTop-61)break;}
tabs[i<0?0:i].className='active';}});if(!wcs_add)var wcs_add={};wcs_add["wa"]="d46bd223231840";wcs_do();