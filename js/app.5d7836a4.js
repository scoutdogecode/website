(function(e){function t(t){for(var a,i,u=t[0],s=t[1],p=t[2],l=0,d=[];l<u.length;l++)i=u[l],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&d.push(r[i][0]),r[i]=0;for(a in s)Object.prototype.hasOwnProperty.call(s,a)&&(e[a]=s[a]);c&&c(t);while(d.length)d.shift()();return o.push.apply(o,p||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],a=!0,i=1;i<n.length;i++){var u=n[i];0!==r[u]&&(a=!1)}a&&(o.splice(t--,1),e=s(s.s=n[0]))}return e}var a={},i={app:0},r={app:0},o=[];function u(e){return s.p+"js/"+({}[e]||e)+"."+{"chunk-1c8e7be5":"e6025a4b","chunk-25b2c89b":"f14a2612","chunk-2d0f012d":"237bc3e6","chunk-42c613ab":"bb28b31d","chunk-6749919a":"915271cf","chunk-8d90a754":"9f542960"}[e]+".js"}function s(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(e){var t=[],n={"chunk-1c8e7be5":1,"chunk-25b2c89b":1,"chunk-42c613ab":1,"chunk-6749919a":1,"chunk-8d90a754":1};i[e]?t.push(i[e]):0!==i[e]&&n[e]&&t.push(i[e]=new Promise((function(t,n){for(var a="css/"+({}[e]||e)+"."+{"chunk-1c8e7be5":"a5a50a05","chunk-25b2c89b":"57493052","chunk-2d0f012d":"31d6cfe0","chunk-42c613ab":"fd1fb172","chunk-6749919a":"7de5fca4","chunk-8d90a754":"886e90ca"}[e]+".css",r=s.p+a,o=document.getElementsByTagName("link"),u=0;u<o.length;u++){var p=o[u],l=p.getAttribute("data-href")||p.getAttribute("href");if("stylesheet"===p.rel&&(l===a||l===r))return t()}var d=document.getElementsByTagName("style");for(u=0;u<d.length;u++){p=d[u],l=p.getAttribute("data-href");if(l===a||l===r)return t()}var c=document.createElement("link");c.rel="stylesheet",c.type="text/css",c.onload=t,c.onerror=function(t){var a=t&&t.target&&t.target.src||r,o=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=a,delete i[e],c.parentNode.removeChild(c),n(o)},c.href=r;var y=document.getElementsByTagName("head")[0];y.appendChild(c)})).then((function(){i[e]=0})));var a=r[e];if(0!==a)if(a)t.push(a[2]);else{var o=new Promise((function(t,n){a=r[e]=[t,n]}));t.push(a[2]=o);var p,l=document.createElement("script");l.charset="utf-8",l.timeout=120,s.nc&&l.setAttribute("nonce",s.nc),l.src=u(e);var d=new Error;p=function(t){l.onerror=l.onload=null,clearTimeout(c);var n=r[e];if(0!==n){if(n){var a=t&&("load"===t.type?"missing":t.type),i=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+a+": "+i+")",d.name="ChunkLoadError",d.type=a,d.request=i,n[1](d)}r[e]=void 0}};var c=setTimeout((function(){p({type:"timeout",target:l})}),12e4);l.onerror=l.onload=p,document.head.appendChild(l)}return Promise.all(t)},s.m=e,s.c=a,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)s.d(n,a,function(t){return e[t]}.bind(null,a));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="https://cdn.jsdelivr.net/gh/scoutdogecode/website/",s.oe=function(e){throw console.error(e),e};var p=window["webpackJsonp"]=window["webpackJsonp"]||[],l=p.push.bind(p);p.push=t,p=p.slice();for(var d=0;d<p.length;d++)t(p[d]);var c=l;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"08a7":function(e,t){e.exports="https://cdn.jsdelivr.net/gh/scoutdogecode/website/images/logo_32x32.png"},1:function(e,t){},"56d7":function(e,t,n){"use strict";n.r(t);n("c8ba"),n("5961"),n("7ecd"),n("0185");var a=n("982c");function i(e,t,n,i,r,o){var u=Object(a["resolveComponent"])("router-view");return Object(a["openBlock"])(),Object(a["createBlock"])(u)}var r={mounted:function(){(function(e){function t(){var e=1920,t=document.documentElement,n=t.clientWidth,a=100*n/e;a<=70&&(a=70),document.documentElement.style.fontSize=a+"px"}e.addEventListener("resize",(function(){t()}),!1),e.addEventListener("pageshow",(function(e){t()}),!1),t()})(window)}},o=(n("cf93"),n("b3f2")),u=n.n(o);const s=u()(r,[["render",i]]);var p=s,l=(n("a9b6"),n("2690"),n("d4f9"),n("a0ce")),d=[{path:"/",name:"scoutdoge",component:function(){return n.e("chunk-25b2c89b").then(n.bind(null,"1a23"))},meta:{title:"Scout Doge"}},{path:"/redirect",name:"redirect",component:function(){return n.e("chunk-2d0f012d").then(n.bind(null,"9b8f"))},meta:{title:"Scout Doge"}},{path:"/dapp",name:"dapp",component:function(){return n.e("chunk-42c613ab").then(n.bind(null,"7f94"))},children:[{path:"/dapp/presaleDetail",name:"presaleDetail",component:function(){return n.e("chunk-8d90a754").then(n.bind(null,"b29e"))}},{path:"/dapp/presaleList",name:"presaleList",component:function(){return n.e("chunk-6749919a").then(n.bind(null,"bb12"))}},{path:"/dapp/invitation",name:"invitation",component:function(){return n.e("chunk-1c8e7be5").then(n.bind(null,"b4a1"))}}]}],c=Object(l["a"])({history:Object(l["b"])(),routes:d}),y=c,m=n("767c"),f=Object(m["a"])({state:{},mutations:{},actions:{},modules:{}}),h=(n("a41b"),n("3221")),b=(n("a463"),n("b735"),n("a1c5")),v=n.n(b),g=n("ed3b"),w=n("ddb5"),T=n("bedc"),M=n("ce1e"),x=n("ce9d"),k=(n("e186"),n("fb7f")),C=n("0a0e"),A=n("216d"),R=n("305c"),O=n("8e44"),S=n("a40d"),E=n("afa1"),D=n("dcd5"),B=(n("c284"),n("8d1b"),function(){function e(t){Object(w["a"])(this,e),this._cache={}}return Object(T["a"])(e,[{key:"on",value:function(e,t){var n=this._cache[e]=this._cache[e]||[];return-1===n.indexOf(t)&&n.push(t),this}},{key:"trigger",value:function(e,t){var n=this._cache[e];return Array.isArray(n)&&n.forEach((function(e){e(t)})),this}},{key:"off",value:function(e,t){var n=this._cache[e];if(Array.isArray(n))if(t){var a=n.indexOf(t);-1!==a&&n.splice(a,1)}else n.length=0;return this}}]),e}()),F=window,L=F.ethereum,P=function(e){Object(M["a"])(n,e);var t=Object(x["a"])(n);function n(e){var a;return Object(w["a"])(this,n),a=t.call(this),a.hasEthereum="undefined"!==typeof L,a.accounts=[],a.connectState=!1,a.contractState=!1,a.preSaleABI=null,a.scoutDogeABI=null,a.init(),a}return Object(T["a"])(n,[{key:"init",value:function(){var e=this;L?(L.on("connect",(function(t){var n=setInterval((function(){L.isConnected()&&clearInterval(n),k["a"].from(L.chainId||0)._hex===D[D.evn].chain.chainId&&L.selectedAddress&&e.initNetwork()}),1e3)})),this.initOnlyReadNetwOrk(),L.on("chainChanged",(function(t){D[D.evn].chain.chainId!=t?(Object(O["a"])({title:"Tips",message:"Current wallet does not support, please switch to ".concat(D[D.evn].chain.chainName),type:"error"}),e.logout()):e.initNetwork()}))):Object(O["a"])({title:"Tips",message:"Please install the wallet first                ",type:"error"})}},{key:"logout",value:function(){this.connectState=!1,this.contractState=!1,this.accountsChanged([])}},{key:"wallet_switchEthereumChain",value:function(){var e=Object(g["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(e.prev=0,k["a"].from(L.chainId)._hex!==D[D.evn].chain.chainId){e.next=3;break}return e.abrupt("return",!0);case 3:return e.next=5,L.request({method:"wallet_switchEthereumChain",params:[{chainId:D[D.evn].chain.chainId}]});case 5:return e.abrupt("return",!0);case 8:return e.prev=8,e.t0=e["catch"](0),Object(O["a"])({title:"Error",message:e.t0,type:"error"}),e.abrupt("return",!1);case 12:case"end":return e.stop()}}),e,null,[[0,8]])})));function t(){return e.apply(this,arguments)}return t}()},{key:"connect",value:function(){var e=Object(g["a"])(regeneratorRuntime.mark((function e(){var t,n,a=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(this.checkEthereum()){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,this.wallet_switchEthereumChain();case 4:if(t=e.sent,t){e.next=7;break}return e.abrupt("return");case 7:return e.next=9,L.request({method:"eth_requestAccounts"}).catch((function(e){Object(O["a"])({title:"Error",message:e,type:"error"})}));case 9:return n=e.sent,this.accountsChanged(n),L.on("accountsChanged",(function(e){a.accountsChanged(e)})),this.connectState=!0,e.abrupt("return",n);case 14:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()},{key:"checkEthereum",value:function(){return!!this.hasEthereum||(Object(O["a"])({title:"Tips",message:"Please install the meta mask plug-in first",type:"error"}),!1)}},{key:"initNetwork",value:function(){var e=Object(g["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(this.checkEthereum()){e.next=2;break}return e.abrupt("return");case 2:return e.prev=2,e.next=5,this.connect();case 5:e.next=10;break;case 7:e.prev=7,e.t0=e["catch"](2),Object(O["a"])({title:"Error",message:e.t0,type:"error"});case 10:return this.contractState||(t=new C["providers"].Web3Provider(L).getSigner(),this.preSaleABI=new A["b"](D[D.evn].preSaleAddr,S,t),this.scoutDogeABI=new A["b"](D[D.evn].scoutDogAddr,E,t),this.contractState=!0),e.abrupt("return",this);case 12:case"end":return e.stop()}}),e,this,[[2,7]])})));function t(){return e.apply(this,arguments)}return t}()},{key:"initOnlyReadNetwOrk",value:function(){var e=new R["a"].providers.JsonRpcProvider(D[D.evn].RPC),t=new C["providers"].JsonRpcProvider(D[D.evn].pancakeRPC),n=["function getAmountsOut(uint amountOut, address[] calldata path) external view returns (uint[] memory amounts)"];this.preSaleABI=new A["b"](D[D.evn].preSaleAddr,S,e),this.scoutDogeABI=new A["b"](D[D.evn].scoutDogAddr,E,e),this.pancakeRouter=new A["b"](D[D.evn].pancakeAddr,n,t)}},{key:"accountsChanged",value:function(e){e[0]!=this.accounts[0]&&(this.accounts=e,this.trigger("accountChange",e))}}]),n}(B),z={install:function(e,t){e.config.globalProperties.$wallet=new P(e),window.wallet=e.config.globalProperties.$wallet}};n("b566"),n("08a7");y.beforeEach((function(e,t,n){e.meta.title&&(document.title=e.meta.title),n()})),Object(a["createApp"])(p).use(h["a"]).use(f).use(y).use(v.a).use(z).mount("#app")},"9eb6":function(e,t,n){},a40d:function(e){e.exports=JSON.parse('[{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"inputs":[],"name":"State","outputs":[{"internalType":"bool","name":"enableReceived","type":"bool"},{"internalType":"bool","name":"enableAllow","type":"bool"},{"internalType":"uint48","name":"receivedTime","type":"uint48"},{"internalType":"uint48","name":"startTime","type":"uint48"},{"internalType":"uint48","name":"stopTime","type":"uint48"},{"internalType":"uint256","name":"purchaseMin","type":"uint256"},{"internalType":"uint256","name":"purchaseMax","type":"uint256"},{"internalType":"uint256","name":"totalMin","type":"uint256"},{"internalType":"uint256","name":"totalMax","type":"uint256"},{"internalType":"uint256","name":"SoldETH","type":"uint256"},{"internalType":"uint256","name":"ETHPrice","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"canReceivedToken","outputs":[{"internalType":"uint256","name":"amountOut","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"disableAllow","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"disableReceived","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"enableAllow","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"time","type":"uint256"}],"name":"enableReceived","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"from","type":"uint256"},{"internalType":"uint256","name":"limit","type":"uint256"}],"name":"getAllowList","outputs":[{"components":[{"internalType":"address","name":"addr","type":"address"},{"components":[{"internalType":"bool","name":"isReceived","type":"bool"},{"internalType":"uint256","name":"amount","type":"uint256"}],"internalType":"struct PreSale.order","name":"info","type":"tuple"}],"internalType":"struct PreSale.allowState[]","name":"items","type":"tuple[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getAllowSize","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"from","type":"uint256"},{"internalType":"uint256","name":"limit","type":"uint256"}],"name":"getSoldList","outputs":[{"components":[{"internalType":"address","name":"addr","type":"address"},{"components":[{"internalType":"bool","name":"isReceived","type":"bool"},{"internalType":"uint256","name":"amount","type":"uint256"}],"internalType":"struct PreSale.order","name":"info","type":"tuple"}],"internalType":"struct PreSale.allowState[]","name":"items","type":"tuple[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getSoldSize","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"initialize","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"receivedETH","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"receivedToken","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address[]","name":"addrs","type":"address[]"}],"name":"removeAllowList","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"addr","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"sendETH","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"addr","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"sendToken","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address[]","name":"addrs","type":"address[]"}],"name":"setAllowList","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"price","type":"uint256"}],"name":"setETHPrice","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"start","type":"uint256"},{"internalType":"uint256","name":"stop","type":"uint256"}],"name":"setPreSaleTimes","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"addr","type":"address"}],"name":"setToken","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"addr","type":"address"}],"name":"userInfo","outputs":[{"internalType":"bool","name":"isAllow","type":"bool"},{"internalType":"uint256","name":"amount","type":"uint256"}],"stateMutability":"view","type":"function"},{"stateMutability":"payable","type":"receive"}]')},a41b:function(e,t,n){},afa1:function(e){e.exports=JSON.parse('[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[],"name":"LiquifyNum","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_liquidityFee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"_purchase","outputs":[{"internalType":"uint256","name":"token","type":"uint256"},{"internalType":"uint256","name":"usd","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_taxFee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_totalPurchase","outputs":[{"internalType":"uint256","name":"token","type":"uint256"},{"internalType":"uint256","name":"usd","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"communityDivisor","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"tAmount","type":"uint256"}],"name":"deliver","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address[]","name":"_addrs","type":"address[]"}],"name":"disBlacklist","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"disSwapRouter","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"excludeFromFee","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"excludeFromReward","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"getSellType","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"from","type":"uint256"},{"internalType":"uint256","name":"limit","type":"uint256"}],"name":"getSubordinate","outputs":[{"internalType":"address[]","name":"addrs","type":"address[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"addr","type":"address"}],"name":"getSubordinateSize","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountIn","type":"uint256"}],"name":"getUsdAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"includeInFee","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"includeInReward","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_addr","type":"address"}],"name":"isBlocklist","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"isExcludedFromFee","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"isExcludedFromReward","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address[]","name":"addrs","type":"address[]"}],"name":"manyInvitePlayers","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"marketingDivisor","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tAmount","type":"uint256"},{"internalType":"bool","name":"deductTransferFee","type":"bool"}],"name":"reflectionFromToken","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address[]","name":"_addrs","type":"address[]"}],"name":"setBlacklist","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_addr","type":"address"}],"name":"setCommunityAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"divisor","type":"uint256"}],"name":"setCommunityDivisor","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_addr","type":"address"}],"name":"setMarketingAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"divisor","type":"uint256"}],"name":"setMarketingDivisor","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_type","type":"uint256"}],"name":"setSellType","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address[]","name":"path","type":"address[]"}],"name":"setSwapRouter","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"taxFee","type":"uint256"}],"name":"setTaxFeePercent","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"swapRouter","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"rAmount","type":"uint256"}],"name":"tokenFromReflection","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalFees","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferToAddressETH","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferToToken","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"uniswapV2Pair","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"uniswapV2Router","outputs":[{"internalType":"contract IUniswapV2Router02","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"stateMutability":"payable","type":"receive"}]')},b566:function(e,t,n){n("57b6"),n("a9b6"),n("3bdf"),n("3fab"),n("ed02"),n("89cf"),function(){function e(e,t){var n={width:480,height:480,autoResize:!1,autoResizeMinWidth:null,autoResizeMaxWidth:null,autoResizeMinHeight:null,autoResizeMaxHeight:null,addMouseControls:!0,addTouchControls:!0,hideContextMenu:!0,starCount:6666,starBgCount:2222,starBgColor:{r:255,g:255,b:255},starBgColorRangeMin:10,starBgColorRangeMax:40,starColor:{r:255,g:255,b:255},starColorRangeMin:10,starColorRangeMax:100,starfieldBackgroundColor:{r:0,g:0,b:0},starDirection:1,starSpeed:5,starSpeedMax:8,starSpeedAnimationDuration:2,starFov:300,starFovMin:200,starFovAnimationDuration:2,starRotationPermission:!0,starRotationDirection:1,starRotationSpeed:0,starRotationSpeedMax:.1,starRotationAnimationDuration:2,starWarpLineLength:2,starWarpTunnelDiameter:100,starFollowMouseSensitivity:.025,starFollowMouseXAxis:!0,starFollowMouseYAxis:!0};if(void 0!==t)for(var a in t)t.hasOwnProperty(a)&&n.hasOwnProperty(a)&&(n[a]=t[a]);for(var a in n)n.hasOwnProperty(a)&&a.indexOf("Duration")>-1&&(n[a]=60*n[a]);if("string"===typeof n.starBgColor&&n.starBgColor.indexOf("#")>-1?n.starBgColor=re(n.starBgColor):"string"===typeof n.starBgColor&&n.starBgColor.indexOf("rgb")>-1&&(n.starBgColor=ue(n.starBgColor)),"string"===typeof n.starColor&&n.starColor.indexOf("#")>-1?n.starColor=re(n.starColor):"string"===typeof n.starColor&&n.starColor.indexOf("rgb")>-1&&(n.starColor=ue(n.starColor)),"string"===typeof n.starfieldBackgroundColor&&n.starfieldBackgroundColor.indexOf("#")>-1?n.starfieldBackgroundColor=re(n.starfieldBackgroundColor):"string"===typeof n.starfieldBackgroundColor&&n.starfieldBackgroundColor.indexOf("rgb")>-1&&(n.starfieldBackgroundColor=ue(n.starfieldBackgroundColor)),!e)throw Error("\nNo div element found");var i,r,o,u,s,p,l,d,c,y,m,f,h,b=Math.PI/180,v=(Math.PI,n.width),g=n.height,w=n.starCount,T=n.starBgCount,M=n.starBgColor,x=n.starBgColorRangeMin,k=n.starBgColorRangeMax,C=n.starColor,A=n.starColorRangeMin,R=n.starColorRangeMax,O=n.starfieldBackgroundColor,S=n.starDirection,E=n.starSpeed,D=E,B=n.starSpeedMax,F=n.starFovAnimationDuration,L=0,P=n.starFov,z=n.starFovMin,I=P,j=n.starFovAnimationDuration,_=j,W=0,N=n.starRotationPermission,H=n.starRotationDirection,q=n.starRotationSpeed,Q=q,J=n.starRotationSpeedMax,V=n.starRotationAnimationDuration,X=0,Y=n.starWarpLineLength,$=n.starWarpTunnelDiameter,U=n.starFollowMouseSensitivity,K=n.starFollowMouseXAxis,G=n.starFollowMouseYAxis,Z=8e3,ee=1-z,te=Z,ne=!1;function ae(){s=document.createElement("canvas"),s.setAttribute("width",v),s.setAttribute("height",g),n.addMouseControls&&(s.addEventListener("mousemove",ge,!1),s.addEventListener("mousedown",Me,!1),s.addEventListener("mouseup",xe,!1),s.addEventListener("mouseenter",we,!1),s.addEventListener("mouseleave",Te,!1)),n.addTouchControls&&(s.addEventListener("touchstart",Ce,!1),s.addEventListener("touchend",Ae,!1),s.addEventListener("touchmove",Re,!1),s.addEventListener("touchcancel",Oe,!1)),n.hideContextMenu&&(s.oncontextmenu=function(e){e.preventDefault()}),e.appendChild(s),p=s.getContext("2d"),l=p.getImageData(0,0,v,g),d=l.data,c={x:s.width/2,y:s.height/2},y=!0,m=!0,f={x:c.x,y:c.y},o=[],u=[],i=[],r=[],de(o,A,R,O,C),de(u,x,k,O,M),me(),fe(),n.autoResize&&(window.addEventListener("resize",be),ve())}function ie(e,t,n){var a=e<0?-1*e:e,i=Math.round,r=parseInt,o=r(t.slice(1),16),u=r((n||(e<0?"#000000":"#FFFFFF")).slice(1),16),s=o>>16,p=o>>8&255,l=255&o;return"#"+(16777216+65536*(i(((u>>16)-s)*a)+s)+256*(i(((u>>8&255)-p)*a)+p)+(i(((255&u)-l)*a)+l)).toString(16).slice(1)}function re(e){var t=/^#?([a-f\d])([a-f\d])([a-f\d])$/i;e=e.replace(t,(function(e,t,n,a){return t+t+n+n+a+a}));var n=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);return n?{r:parseInt(n[1],16),g:parseInt(n[2],16),b:parseInt(n[3],16)}:null}function oe(e,t,n){var a=n|t<<8|e<<16;return"#"+(16777216+a).toString(16).slice(1)}function ue(e){e=e.replace(/\s+/g,"");var t=e.split("(")[1].split(")")[0].split(",");return{r:t[0],g:t[1],b:t[2]}}function se(){for(var e=0,t=d.length;e<t;e+=4)d[e]=O.r,d[e+1]=O.g,d[e+2]=O.b,d[e+3]=0}function pe(e,t,n,a,i,r){var o=4*(e+t*v);d[o]=d[o]+n,d[o+1]=d[o+1]+a,d[o+2]=d[o+2]+i,d[o+3]=r}function le(e,t,n,a,i,r,o,u){var s=Math.abs(n-e),p=Math.abs(a-t),l=e<n?1:-1,d=t<a?1:-1,c=s-p,y=e,m=t;while(1){if(y>-1&&y<v&&m>-1&&m<g&&pe(y,m,i,r,o,u),y===n&&m===a)break;var f=2*c;f>-s&&(c-=p,y+=l),f<p&&(c+=s,m+=d)}}function de(e,t,n,a,i){var r,o,u,s,p,l=oe(a.r,a.g,a.b),d=oe(i.r,i.g,i.b),c=[],y=[];for(o=0,u=100;o<=u;o++)r=o/100,c.push(ie(r,l,d));for(o=0,u=n-t;o<=u;o++){var m=o+t;y.push(c[m])}for(o=0,u=y.length;o<u;o++){for(c=[],s=0,p=100;s<=p;s++)r=s/100,c.push(re(ie(r,l,y[o])));e.push(c)}}function ce(e,t){var n=Math.random()*t-t/2,a=Math.random()*t-t/2;if(e>0)while(Math.sqrt(n*n+a*a)<e)n=Math.random()*t-t/2,a=Math.random()*t-t/2;return{x:n,y:a}}function ye(e,t,n,a,i,r){var o={};return o.x=e,o.y=t,o.z=n,o.ox=a,o.oy=i,o.x2d=0,o.y2d=0,o}function me(){var e,t,n,a,s,p;for(e=0;e<T;e++)p=ce(0,2e4),t=p.x,n=p.y,a=Math.round(Math.random()*Z),s=ye(t,n,a,t,n,a),s.colorIndex=Math.floor(Math.random()*u.length),s.colorLookupTable=u[s.colorIndex],s.color=s.colorLookupTable[Math.floor(100*Math.random())],r.push(s);for(e=0;e<w;e++)p=ce($,1e4),t=p.x,n=p.y,a=Math.round(Math.random()*Z),s=ye(t,n,a,t,n,a),s.distance=Z-a,s.distanceTotal=Math.round(Z+P),s.colorIndex=Math.floor(Math.random()*o.length),s.colorLookupTable=o[s.colorIndex],s.color=s.colorLookupTable[Math.floor(s.distance/s.distanceTotal*100)],i.push(s)}function fe(){h=requestAnimFrame(fe),ne||he()}function he(){var e,t,n,a;se(),N&&(m?(X+=1,X>V&&(X=V)):(X-=1,X<0&&(X=0)),q=Math.easeOutQuad(X,Q,J,V),W-=q*H),y?(L+=1,L>F&&(L=F),_-=1,_<0&&(_=0),K&&(c.x+=(f.x-c.x)*U),G&&(c.y+=(f.y-c.y)*U)):(L-=1,L<0&&(L=0),_+=1,_>j&&(_=j),K&&(c.x+=(s.width/2-c.x)*U),G&&(c.y+=(s.height/2-c.y)*U)),E=Math.easeOutQuad(L,0,B-D,F)+D,P=Math.easeInQuad(_,0,I-z,j)+z,ee=1-P;var o=E*(E/(B/Y));for(e=0,t=r.length;e<t;e++)n=r[e],a=P/(P+n.z),n.x2d=n.x*a+c.x,n.y2d=n.y*a+c.y,n.x2d>-1&&n.x2d<v&&n.y2d>-1&&n.y2d<g&&pe(0|n.x2d,0|n.y2d,n.color.r,n.color.g,n.color.b,255);for(e=0,t=i.length;e<t;e++){if(n=i[e],n.distanceTotal=Math.round(Z+P),S>=0?(n.z-=E,n.distance+=E,n.z<ee&&(n.z=te,n.distance=0)):(n.z+=E,n.distance-=E,n.z>te&&(n.z=ee,n.distance=n.distanceTotal)),n.color=n.colorLookupTable[Math.floor(n.distance/n.distanceTotal*100)],a=P/(P+n.z),n.x2d=n.x*a+c.x,n.y2d=n.y*a+c.y,E===D)n.x2d>-1&&n.x2d<v&&n.y2d>-1&&n.y2d<g&&pe(0|n.x2d,0|n.y2d,n.color.r,n.color.g,n.color.b,255);else{var u=n.z+o;a=P/(P+u);var d=n.x*a+c.x,h=n.y*a+c.y;d>-1&&d<v&&h>-1&&h<g&&le(0|n.x2d,0|n.y2d,0|d,0|h,n.color.r,n.color.g,n.color.b,255)}if(q!==Q){var w=b*W,T=Math.cos(w),M=Math.sin(w);n.x=T*n.ox+M*n.oy,n.y=T*n.oy-M*n.ox}}p.putImageData(l,0,0)}function be(e){ve()}function ve(){v=window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth,g=window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight,n.autoResizeMinWidth&&v<n.autoResizeMinWidth?v=n.autoResizeMinWidth:n.autoResizeMaxWidth&&v>n.autoResizeMaxWidth&&(v=n.autoResizeMaxWidth),n.autoResizeMinHeight&&g<n.autoResizeMinHeight?g=n.autoResizeMinHeight:n.autoResizeMaxHeight&&g>n.autoResizeMaxHeight&&(g=n.autoResizeMaxHeight),s.setAttribute("width",v),s.setAttribute("height",g),c={x:s.width/2,y:s.height/2},l=p.getImageData(0,0,v,g),d=l.data}function ge(e){f=ke(s,e)}function we(e){y=!0}function Te(e){}function Me(e){m=!0}function xe(e){m=!1}function ke(e,t){var n=e.getBoundingClientRect();return{x:t.clientX-n.left,y:t.clientY-n.top}}function Ce(e){e.preventDefault(),m=!0,y=!0}function Ae(e){e.preventDefault()}function Re(e){e.preventDefault(),f=Se(s,e)}function Oe(e){}function Se(e,t){var n=e.getBoundingClientRect();return{x:t.touches[0].clientX-n.left,y:t.touches[0].clientY-n.top}}function Ee(){window.cancelAnimFrame(h),n.autoResize&&window.removeEventListener("resize",be),n.addMouseControls&&(s.removeEventListener("mousemove",ge),s.removeEventListener("mousedown",Me),s.removeEventListener("mouseup",xe),s.removeEventListener("mouseenter",we),s.removeEventListener("mouseleave",Te)),n.addTouchControls&&(s.removeEventListener("touchstart",Ce),s.removeEventListener("touchend",Ae),s.removeEventListener("touchmove",Re),s.removeEventListener("touchcancel",Oe)),se(),e.hasChildNodes()&&e.removeChild(s),o=[],u=[],i=[],r=[]}Math.easeInQuad=function(e,t,n,a){return n*e*e/(a*a)+t},Math.easeOutQuad=function(e,t,n,a){return-n*e*e/(a*a)+2*n*e/a+t},window.requestAnimFrame=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.msRequestAnimationFrame||function(e){window.setTimeout(e,1e3/60)}}(),window.cancelAnimFrame=function(){return window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame}(),this.pause=function(){ne=!0},this.unpause=function(){ne=!1},this.destroy=Ee,ae()}window.WarpDrive=e}(),"undefined"!==typeof jQuery&&function(e){e.fn.warpDrive=function(t){var n=arguments;return this.each((function(){if(e.data(this,"plugin_WarpDrive")){var a=e.data(this,"plugin_WarpDrive");a[t]?a[t].apply(this,Array.prototype.slice.call(n,1)):e.error("Method "+t+" does not exist on jQuery.warpDrive")}else e.data(this,"plugin_WarpDrive",new WarpDrive(this,t))}))}}(jQuery)},cf93:function(e,t,n){"use strict";n("9eb6")},dcd5:function(e){e.exports=JSON.parse('{"evn":"product","product":{"preSaleAddr":"0x2Bb2c2A826A41D7D2Dc11fEb61ab8BDd3ca97326","scoutDogAddr":"0x9E551b430B7Ab145C96c6eDe72a34eC2A90d4eca","pancakeAddr":"0x10ed43c718714eb63d5aa57b78b54704e256024e","pancakeRPC":"https://bsc-dataseed4.binance.org","RPC":"https://bsc-dataseed1.defibit.io","chain":{"chainId":"0x38","chainName":"Binance Smart Chain Mainnet"}},"test":{"preSaleAddr":"0x7CD9f5b733c8bc4663b2334B2488bCD00137f168","scoutDogAddr":"0x2831D5359dC1619103dFfC06d53A0CB89CecF943","pancakeAddr":"0x10ed43c718714eb63d5aa57b78b54704e256024e","pancakeRPC":"https://bsc-dataseed4.binance.org","RPC":"https://data-seed-prebsc-1-s1.binance.org:8545","chain":{"chainId":"0x61","chainName":"Binance Smart Chain Testnet"}}}')}});
//# sourceMappingURL=app.5d7836a4.js.map