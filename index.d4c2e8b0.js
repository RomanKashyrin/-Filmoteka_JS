!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},a={},r=e.parcelRequired7c6;null==r&&((r=function(e){if(e in t)return t[e].exports;if(e in a){var r=a[e];delete a[e];var o={id:e,exports:{}};return t[e]=o,r.call(o.exports,o,o.exports),o.exports}var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}).register=function(e,t){a[e]=t},e.parcelRequired7c6=r),r("hmDJT"),r("ie9jY");var o=r("l1RgP"),n=r("lqkWQ"),i=r("iG60z"),l=r("hmDJT"),s=r("0BU2D");var c=(0,o.default)();c.btn.addEventListener("click",n.onClickMenu),window.onscroll=function(){(0,i.default)()},c.menuList.addEventListener("click",(function(e){if("A"===e.target.nodeName){(0,s.removeItem)("movies");for(var t,a,r=document.querySelectorAll(".mobile-menu-link"),o=e.target.dataset.action,n=0;n<r.length;n+=1)o===r[n].dataset.action?r[n].classList.add("active"):r[n].classList.remove("active");localStorage.setItem("paramsPart","discover/movie?sort_by=popularity.desc&with_genres=".concat(o)),t=1,a=localStorage.getItem("paramsPart"),(0,l.getResponse)(t,a)}}));l=r("hmDJT");var d="";localStorage.setItem("paramsPart","trending/movie/week"),d=localStorage.getItem("paramsPart"),(0,l.getResponse)(1,d);l=r("hmDJT"),s=r("0BU2D");var m=document.querySelector(".search-form"),u=document.querySelector(".search-form__input");m.addEventListener("submit",(function(e){e.preventDefault(),(0,s.removeItem)("movies");var t,a,r=u.value;localStorage.setItem("paramsPart","search/movie?query=".concat(r)),t=1,a=localStorage.getItem("paramsPart"),(0,l.getResponse)(t,a),m.reset()})),r("g9Ace"),r("8YRkx"),r("haj81"),r("2NTPx"),r("92927"),r("4ecxU")}();
//# sourceMappingURL=index.d4c2e8b0.js.map
