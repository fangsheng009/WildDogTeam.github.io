!function(){"use strict";function e(){var e=n.scrollTop;e>c?i.classList.add("fixed"):i.classList.remove("fixed")}var t=document.getElementById("header"),n=document.getElementById("container"),i=document.getElementById("article-toc"),c=t.clientHeight;i&&(n.addEventListener("scroll",function(){window.requestAnimationFrame(e)}),e())}();