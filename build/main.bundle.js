!function(e){var t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(r,i,function(t){return e[t]}.bind(null,i));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";var r,i=n(1),a=(r=i)&&r.__esModule?r:{default:r};document.getElementById("calcBtn").addEventListener("click",function(){var e=document.getElementById("principal").value,t=document.getElementById("years").value,n=document.getElementById("rate").value,r=new a.default(e,t,n);document.getElementById("monthlyPayment").innerHTML=r.monthlyPayment.toFixed(2),document.getElementById("monthlyRate").innerHTML=(n/12).toFixed(2);var i="";r.amortization.forEach(function(e,t){return i+="\n        <tr>\n            <td>"+(t+1)+'</td>\n            <td class="currency">'+Math.round(e.principalY)+'</td>\n            <td class="stretch">\n                <div class="flex">\n                    <div class="bar principal"\n                            style="flex:'+e.principalY+";-webkit-flex:"+e.principalY+'">\n                    </div>\n                    <div class="bar interest"\n                            style="flex:'+e.interestY+";-webkit-flex:"+e.interestY+'">\n                    </div>\n                </div>\n            </td>\n            <td class="currency left">'+Math.round(e.interestY)+'</td>\n            <td class="currency">'+Math.round(e.balance)+"</td>\n        </tr>\n    "}),document.getElementById("amortization").innerHTML=i})},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();var i=function(){function e(t,n,r){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.principal=t,this.years=n,this.rate=r}return r(e,[{key:"monthlyPayment",get:function(){var e=this.rate/100/12;return this.principal*e/(1-Math.pow(1/(1+e),12*this.years))}},{key:"amortization",get:function(){for(var e=this.monthlyPayment,t=this.rate/100/12,n=this.principal,r=[],i=0;i<this.years;i++){for(var a=0,o=0,l=0;l<12;l++){var u=n*t,c=e-u;a+=u,o+=c,n-=c}r.push({principalY:o,interestY:a,balance:n})}return r}}]),e}();t.default=i}]);
//# sourceMappingURL=main.bundle.js.map