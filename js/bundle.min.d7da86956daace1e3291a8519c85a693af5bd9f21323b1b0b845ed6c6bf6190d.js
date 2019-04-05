document.addEventListener("DOMContentLoaded",function(){var winWidth=window.innerWidth||document.documentElement.clientWidth;var menu=document.querySelector('aside');document.querySelector('.top-bar .menu').onclick=function(){menu.style.display='table';}
menu.querySelector('.close').onclick=function(){menu.style.display="none";}
menu.querySelector('.bg').onclick=function(){menu.style.display="none";}
if(document.querySelector('section.search input')){document.querySelector('section.search input').onclick=function(){if(winWidth<768.98){window.scrollTo(0,window.pageYOffset+this.getBoundingClientRect().top-5);}}}
var ntabs=document.querySelectorAll('#arctab li');for(var i=0;i<ntabs.length;i++){ntabs[i].onclick=function(){const absoluteTop=window.pageYOffset+document.getElementById(this.getAttribute('data-id')).getBoundingClientRect().top;window.scrollTo(0,absoluteTop-60);}}
window.addEventListener('resize',function(){winWidth=window.innerWidth||document.documentElement.clientWidth;if(menu.style.display!='table-cell'&&winWidth>=768){menu.style.display='table-cell';}
else if(menu.style.display!='none'&&winWidth<768.98){menu.style.display='none';}
resizeThumb();});window.addEventListener('scroll',function(e){reloadTab();});reloadTab();resizeThumb();reloadReplyCount();});function resizeThumb(){var lists=document.querySelectorAll(".list .thumb .scroll");for(var i=0;i<lists.length;i++){function initImg(box){var to=setInterval(function(){box.style.display="block";var w=box.querySelector('img').naturalWidth;box.querySelector('img').width=w/2;if(w>0){clearInterval(to);box.scrollLeft=(600-box.clientWidth)/2;}},100);}
initImg(lists[i]);}}
function reloadTab(){var top=document.documentElement.scrollTop||document.body.scrollTop;var arctab=document.getElementById('arctab');if(!arctab)return;var tabs=arctab.querySelectorAll('li');for(var i=tabs.length-1;i>=0;i--){tabs[i].className='';}
if(top<=100&&arctab.style.position!='absolute'){arctab.style.position="absolute";arctab.style.top="";}
else if(top>100&&arctab.style.position!='fixed'){arctab.style.position="fixed";arctab.style.top="0";}
for(var i=tabs.length-1;i>=0;i--){var isnode=document.getElementById(tabs[i].getAttribute('data-id'));if(top>isnode.offsetTop-61)break;}
tabs[i<0?0:i].className='active';}
function reloadReplyCount(){var tick=30;var timer=setInterval(()=>{var cnts=document.querySelectorAll('.list .disqus-comment-count');if(cnts.length==0){clearInterval(timer);return;}
var ncnts=0;for(const key in cnts){if(cnts.hasOwnProperty(key)){const element=cnts[key];if(element.innerHTML=='_'){if(tick==0)element.style.display='none';ncnts++;}
else if(element.innerHTML!='0'){element.style.opacity=1;}}}
if(tick==0||ncnts==0)clearInterval(timer);tick--;},100);}
if(!wcs_add)var wcs_add={};wcs_add["wa"]="d46bd223231840";wcs_do();