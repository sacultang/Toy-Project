parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"QvaY":[function(require,module,exports) {
var e,t,n,o,r,i,u=document.querySelector("#history-wrap"),c=document.querySelector(".drag-area"),a=document.querySelector("#header"),s=document.querySelector(".ad-text"),d=!1,l=document.querySelector(".goal-wrap"),p=document.querySelector(".goal-slider"),m=!1,v=document.querySelector(".day-money-wrap"),g=document.querySelector(".day-money-slider"),y=document.querySelector("#nav"),f=!1;c.addEventListener("mousedown",function(n){n.preventDefault,d=!0,e=u.offsetTop,t=n.pageY,c.style.cursor="grabbing",c.addEventListener("mousemove",h,!1),window.addEventListener("mouseup",function(){c.removeEventListener("mousemove",h,!1)},!1)});var h=function(n){u.style.top=e+n.pageY-t+"px",L()},L=function(){var e=a.getBoundingClientRect(),t=u.getBoundingClientRect(),n=s.getBoundingClientRect();t.top<=e.bottom?u.style.top="".concat(e.top,"px"):t.top>=n.bottom&&(u.style.top="".concat(n.bottom-50,"px"))};l.addEventListener("mousedown",function(e){e.preventDefault,m=!0,n=p.offsetLeft,o=e.pageX,l.style.cursor="grabbing",l.addEventListener("mousemove",w,!1),window.addEventListener("mouseup",function(){l.removeEventListener("mousemove",w,!1)},!1)});var w=function(e){p.style.left=n+e.pageX-o+"px",E()},E=function(){var e=l.getBoundingClientRect(),t=p.getBoundingClientRect();t.right<=e.right?p.style.left="".concat(e.width-t.width-10,"px"):parseInt(p.style.left)>=0&&(p.style.left="0px")};v.addEventListener("mousedown",function(e){e.preventDefault,f=!0,r=g.offsetTop,i=e.pageY,v.style.cursor="grabbing",v.addEventListener("mousemove",S,!1),window.addEventListener("mouseup",function(){v.removeEventListener("mousemove",S,!1)},!1)});var S=function(e){g.style.top=r+e.pageY-i+"px",b()},b=function(){var e=v.getBoundingClientRect(),t=g.getBoundingClientRect(),n=-(e.bottom-e.height),o=e.height-t.height;parseInt(g.style.top)>=0?g.style.top="0px":t.bottom<e.height&&(g.style.top=n+o+"px")},q=document.querySelector(".graph-btn"),x=document.querySelector(".chart-close"),C=document.querySelector(".account-chart");x.addEventListener("click",function(e){e.preventDefault,C.classList.add("hide"),setTimeout(function(){C.classList.add("display-none")},300)}),q.addEventListener("click",function(e){e.preventDefault,C.classList.remove("hide"),C.classList.remove("display-none")});var R=new Swiper(".my-swiper",{direction:"horizontal",touchStartPreventDefault:!1,preventClicks:!1,pagination:{el:".swiper-pagination"},touchRatio:.01});
},{}]},{},["QvaY"], null)
//# sourceMappingURL=/js.115dfee3.js.map