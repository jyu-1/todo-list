(()=>{"use strict";var n={426:(n,e,t)=>{t.d(e,{Z:()=>c});var o=t(81),r=t.n(o),a=t(645),i=t.n(a)()(r());i.push([n.id,"@import url(https://fonts.googleapis.com/css2?family=Roboto&display=swap);"]),i.push([n.id,"/* Custom Properties */\n:root {\n    --main-color: rgb(130, 130, 255);\n    --nav-color: rgb(230, 230, 230);\n    --header-word-color: rgb(255, 255, 255);\n    --add-color: rgb(78, 190, 255);\n}\n\n* {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n}\n\n/* Body Start */\n\nbody {\n    font-family: 'Roboto', sans-serif;\n    display: flex;\n    flex-direction: column;\n    min-height: 100vh;\n}\n\n/* Header Start */\n\nheader {\n    flex: 0 0 100px;\n    background-color: var(--main-color);\n    color: var(--header-word-color);\n    font-weight: bold;\n    font-size: 3rem;\n    display: flex;\n    align-items: center;\n    gap: 10px;\n    padding-left: 25px;\n}\n\nheader img {\n    width: 75px;\n    height: auto;\n}\n\nheader span {\n    flex: 0 0 auto;\n}\n\n/* Main Body Start */\n\n.content {\n    display: flex;\n    flex-direction: row;\n    flex: 1;\n}\n\n/* Navigation Bar Start */\n\nnav {\n    background: var(--nav-color);\n    flex: 0 0 200px;\n    display: flex;\n    flex-direction: column;\n    padding: 20px 10px;\n}\n\nnav h1 {\n    padding: 10px 5px;\n}\n\n.projects {\n    display: flex;\n    flex-direction: column;\n}\n\n.project-list {\n    height: 40px;\n    border: none;\n    border-radius: 5px;\n    background: none;\n    margin: 10px 0;\n}\n\n.project-list:hover {\n    cursor: pointer;\n    background-color: rgb(180, 180, 180);\n}\n\n.project-list.active {\n    background-color: rgb(150, 150, 150);\n}\n\n.add-project {\n    height: 40px;\n    border: none;\n    border-radius: 5px;\n    background: none;\n    margin: 10px 0;\n    background-color: var(--add-color);\n}\n\n.add-project:hover {\n    cursor: pointer;\n    background-color: rgb(112, 203, 255);\n}\n\n/* Tasks Start */\n\nmain {\n    flex: 1 1 auto;\n    display: flex;\n    flex-direction: column;\n    padding: 20px 10px;\n    max-width: 800px;\n    margin: 0 auto;\n}\n\nmain h1 {\n    padding: 30px 10px;\n}\n\n.tasks {\n    display: flex;\n    flex-direction: column;\n}\n\n.task-list {\n    border: none;\n    border-radius: 5px;\n    padding: 10px;\n    background: none;\n    margin: 10px 0;\n    display: grid;\n    align-items: center;\n    grid-template-columns: 1fr 6fr 2fr 1fr;\n    grid-template-rows: 1fr 2fr;\n}\n\n.task-list .description {\n    grid-column: 1/3;\n}\n\n.task-list .checklist {\n    grid-column: 4/5;\n    grid-row: 1/3;\n}\n\n.task-list .dued {\n    grid-column: 3/4;\n    grid-row: 1/3;\n}\n\n.task-list:hover {\n    cursor: pointer;\n    background-color: rgb(180, 180, 180);\n}\n\n.add-task {\n    height: 40px;\n    border: none;\n    border-radius: 5px;\n    background: none;\n    margin: 10px 0;\n    background-color: var(--add-color);\n}\n\n.add-task:hover {\n    cursor: pointer;\n    background-color: rgb(112, 203, 255);\n}\n\n/* Footer Start */\n\nfooter {\n    background-color: var(--main-color);\n    flex: 0 0 50px;\n    color: var(--header-word-color);\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\nfooter span {\n    flex: 0 0 auto;\n}\n\n/* Modal Start */\n\n.modal {\n    display: none;\n    position: fixed;\n    z-index: 1;\n    padding-top: 200px;\n    left: 0;\n    top: 0;\n    width: 100%;\n    height: 100%;\n    background-color: rgba(0, 0, 0, 0.7);\n}\n\n/* Modal Content */\n.modal-content {\n    position: relative;\n    background-color: white;\n    margin: auto;\n    padding: 0;\n    border: 1px solid #888;\n    width: 400px;\n    box-shadow: 0 0 5px black;\n    -webkit-animation-name: animatetop;\n    -webkit-animation-duration: 0.5s;\n    animation-name: animatetop;\n    animation-duration: 0.5s;\n}\n\n.task-form {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    padding: 25px;\n    gap: 10px;\n}\n\n.task-form > * {\n    font-family: monospace;\n    font-size: 13px;\n    text-align: center;\n    height: 30px;\n    width: 300px;\n}\n\n.task-form .task-description {\n    padding: 10px;\n    height: 120px;\n    resize: none;\n}\n\n.task-form p{\n    font-size: 20px;\n    font-weight: bold;\n}\n\n/* Add Animation */\n@-webkit-keyframes animatetop {\n    from {\n        top: -300px;\n        opacity: 0\n    }\n\n    to {\n        top: 0;\n        opacity: 1\n    }\n}\n\n@keyframes animatetop {\n    from {\n        top: -300px;\n        opacity: 0\n    }\n\n    to {\n        top: 0;\n        opacity: 1\n    }\n}\n\n/* mobile test\n@media (max-width:600px) {\n    .content {\n        flex-direction: column;\n    }\n\n    nav {\n        flex: 0 0 50px;\n    }\n} */",""]);const c=i},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",o=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),o&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),o&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,o,r,a){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(o)for(var c=0;c<this.length;c++){var d=this[c][0];null!=d&&(i[d]=!0)}for(var s=0;s<n.length;s++){var l=[].concat(n[s]);o&&i[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),r&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=r):l[4]="".concat(r)),e.push(l))}},e}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function t(n){for(var t=-1,o=0;o<e.length;o++)if(e[o].identifier===n){t=o;break}return t}function o(n,o){for(var a={},i=[],c=0;c<n.length;c++){var d=n[c],s=o.base?d[0]+o.base:d[0],l=a[s]||0,p="".concat(s," ").concat(l);a[s]=l+1;var u=t(p),m={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(-1!==u)e[u].references++,e[u].updater(m);else{var f=r(m,o);o.byIndex=c,e.splice(c,0,{identifier:p,updater:f,references:1})}i.push(p)}return i}function r(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,r){var a=o(n=n||[],r=r||{});return function(n){n=n||[];for(var i=0;i<a.length;i++){var c=t(a[i]);e[c].references--}for(var d=o(n,r),s=0;s<a.length;s++){var l=t(a[s]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}a=d}}},569:n=>{var e={};n.exports=function(n,t){var o=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var o="";t.supports&&(o+="@supports (".concat(t.supports,") {")),t.media&&(o+="@media ".concat(t.media," {"));var r=void 0!==t.layer;r&&(o+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),o+=t.css,r&&(o+="}"),t.media&&(o+="}"),t.supports&&(o+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(o,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},e={};function t(o){var r=e[o];if(void 0!==r)return r.exports;var a=e[o]={id:o,exports:{}};return n[o](a,a.exports,t),a.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var o in e)t.o(e,o)&&!t.o(n,o)&&Object.defineProperty(n,o,{enumerable:!0,get:e[o]})},t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),t.nc=void 0,(()=>{var n=t(379),e=t.n(n),o=t(795),r=t.n(o),a=t(569),i=t.n(a),c=t(565),d=t.n(c),s=t(216),l=t.n(s),p=t(589),u=t.n(p),m=t(426),f={};f.styleTagTransform=u(),f.setAttributes=d(),f.insert=i().bind(null,"head"),f.domAPI=r(),f.insertStyleElement=l(),e()(m.Z,f),m.Z&&m.Z.locals&&m.Z.locals;const v=[],x=n=>{let e=[];return{name:n,list:e,addList:(n,t,o,r)=>{const a=g(n,t,o,r);e.push(a)},removeList:()=>{e.splice(0,1)}}},g=(n,e,t,o)=>(void 0===n&&(n="default"),void 0===e&&(e=""),void 0===t&&(t="2022"),void 0===o&&(o="1"),{title:n,description:e,dueDate:t,priority:o});let h=0;function y(n){const e=document.querySelector(".projects");e.textContent="",n.forEach(((n,t)=>{const o=document.createElement("button");o.classList.add("project-list"),o.textContent=n.name,o.addEventListener("click",(()=>{document.querySelectorAll(".project-list").forEach((n=>{n.classList.remove("active")})),b(n.list),h=t,o.classList.add("active")})),document.querySelectorAll(".project-list").forEach((n=>{n.classList.remove("active")})),b(n.list),h=t,o.classList.add("active"),e.appendChild(o)}))}function b(n){const e=document.querySelector(".tasks");n.forEach((n=>{const t=document.createElement("div");t.classList.add("task-list");const o=document.createElement("div");o.classList.add("priority"),o.textContent=n.priority;const r=document.createElement("div");r.classList.add("title"),r.textContent=n.title;const a=document.createElement("div");a.classList.add("dued"),a.textContent=n.dueDate;const i=document.createElement("div");i.classList.add("checklist"),i.textContent=n.checklist;const c=document.createElement("div");c.classList.add("description"),c.textContent=n.description,t.appendChild(o),t.appendChild(r),t.appendChild(a),t.appendChild(i),t.appendChild(c),e.appendChild(t)}))}!function(){const n=x("Default");v.push(n),y(v),function(){const n=document.querySelector(".add-project");n.addEventListener("click",(()=>{n.style.display="none";const e=document.querySelector(".nav"),t=document.createElement("form");t.classList.add("project-form");const o=document.createElement("input");o.classList.add("project-input"),o.type="text",o.minLength=1,o.maxLength=12,o.required=!0;const r=document.createElement("button");r.classList.add("add-button"),r.type="submit";const a=document.createElement("button");a.classList.add("cancel-project"),r.addEventListener("click",(e=>{if(e.preventDefault(),!0===o.reportValidity()){const e=x(o.value);v.push(e),y(v),t.remove(),n.style.display="block"}})),a.addEventListener("click",(()=>{t.remove(),n.style.display="block"})),r.textContent="Add",a.textContent="Cancel",t.appendChild(o),t.appendChild(r),t.appendChild(a),e.insertBefore(t,n)}))}(),function(){const n=document.querySelector(".add-task"),e=document.querySelector(".modal");n.addEventListener("click",(()=>{e.style.display="block";const n=document.querySelector(".task-button"),t=document.querySelector(".exit-task"),o=document.querySelector(".task-title"),r=document.querySelector(".task-description"),a=document.querySelector(".task-date"),i=document.querySelector(".task-priority"),c=document.querySelector(".task-form");n.addEventListener("click",(n=>{n.preventDefault(),e.style.display="none",console.log("test"),v[h].addList(o.value,r.value,a.value,i.value),b(v[h].list),c.reset()})),t.addEventListener("click",(n=>{n.preventDefault(),c.reset(),e.style.display="none"}))})),window.onclick=n=>{n.target==e&&(document.querySelector(".task-form").reset(),e.style.display="none")}}()}()})()})();