!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";var r=function(e,t,n){for(var r=function(e,t,n){var r=void 0;return n&&(r=n/100/12),{principal:e,years:t,rate:n,monthlyPayment:e*r/(1-Math.pow(1/(1+r),12*t)),monthlyRate:r}}(e,t,n),o=r.monthlyRate,a=r.monthlyPayment,u=e,l=[],i=0;i<t;i++){for(var c=0,m=0,y=0;y<12;y++){var d=u*o,f=a-d;c+=d,m+=f,u-=f}l.push({principalY:m,interestY:c,balance:u})}return{monthlyPayment:a,monthlyRate:o,amortization:l}};document.getElementById("calcBtn").addEventListener("click",function(){var e=document.getElementById("principal").value,t=document.getElementById("years").value,n=document.getElementById("rate").value,o=r(e,t,n),a=o.monthlyPayment,u=o.monthlyRate,l=o.amortization;document.getElementById("monthlyPayment").innerHTML=a.toFixed(2),document.getElementById("monthlyRate").innerHTML=(100*u).toFixed(2),l.forEach(function(e){return console.log(e)})})}]);
//# sourceMappingURL=main.bundle.js.map