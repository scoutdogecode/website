(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-975391a0"],{"01de":function(e,t,r){var n=r("8103"),a=r("2dc1"),o=r("a8a9");e.exports=function(e,t,r){var i,c;return o&&n(i=t.constructor)&&i!==r&&a(c=i.prototype)&&c!==r.prototype&&o(e,c),e}},"0787":function(e,t,r){"use strict";var n=r("6a59"),a=Object(n["defineComponent"])({name:"CaretBottom"});const o={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024"},i=Object(n["createVNode"])("path",{fill:"currentColor",d:"m192 384 320 384 320-384z"},null,-1);function c(e,t,r,a,c,s){return Object(n["openBlock"])(),Object(n["createBlock"])("svg",o,[i])}a.render=c,a.__file="packages/components/CaretBottom.vue",t["a"]=a},"1d12":function(e,t,r){var n=r("8ccf"),a=r("3dba");e.exports=function(e,t,r,o){try{return o?t(n(r)[0],r[1]):t(r)}catch(i){a(e,"throw",i)}}},2728:function(e,t,r){"use strict";r.r(t);r("90df");var n=r("6a59"),a=function(e){return Object(n["pushScopeId"])("data-v-d3b7f6fc"),e=e(),Object(n["popScopeId"])(),e},o={class:"airdrop"},i=a((function(){return Object(n["createElementVNode"])("p",{class:"text-16 text-white"},"Use SdDrop to airdrop your token to all your users with the cli",-1)})),c={class:"airdrop-content MT-30"},s={class:"airdrop-type__left text-left"},l=a((function(){return Object(n["createElementVNode"])("div",{class:"text-14 text-999"},"Aindrop Type",-1)})),d={class:"text-18 text-white MT-5"},u={class:"airdrop-type__list"},f=Object(n["createStaticVNode"])('<div class="airdrop-desc text-left text-16 text-999 MB-20" data-v-d3b7f6fc><div class="airdrop-desc__title text-18 text-white MB-10" data-v-d3b7f6fc>Aindrop Instructions:</div><div class="MT-5" data-v-d3b7f6fc>- Airdrop tokens to as many users as desired</div><div class="MT-5" data-v-d3b7f6fc>- If you are running a sale make sure tokens are not airdropped</div><div class="MT-5" data-v-d3b7f6fc>- Enter your token address first</div><div class="MT-5" data-v-d3b7f6fc>- Enter a list of users to airdrop followed by amount(comma sepa</div></div>',1),p={class:"text-14 text-999 MB-20"},b={class:"airdrop-type text-left MB-20"},m=a((function(){return Object(n["createElementVNode"])("div",{class:"text-14 text-999"},"Enter Token Address",-1)})),v={class:"flex-row-start MT-5 align-center"},h={class:"text-16 text-999 text-left"},g=a((function(){return Object(n["createElementVNode"])("span",{class:"MR-5"},"Token:",-1)})),O={class:"text-red"},w={class:"text-16 text-999 text-left MT-10"},j=a((function(){return Object(n["createElementVNode"])("span",{class:"MR-5"},"Balance:",-1)})),x={key:0,class:"text-red"},y={key:1,class:"text-red"},k={class:"airdrop-list MT-20"},E=a((function(){return Object(n["createElementVNode"])("p",{class:"text-red text-16 MT-10 MB-30"},"For best results we recommend you do a maximum of 500 Addresses at a time!",-1)})),N={class:"text-16 text-999"},A=Object(n["createTextVNode"])(" Total tokens being airdropped: "),L={class:"text-red"},I={class:"flex-row-center MT-15"},B=Object(n["createTextVNode"])("Connect"),T=Object(n["createTextVNode"])("APPROVE"),V=Object(n["createTextVNode"])("AIRDROP");function C(e,t,r,a,C,S){var R=Object(n["resolveComponent"])("caret-bottom"),_=Object(n["resolveComponent"])("el-icon"),M=Object(n["resolveComponent"])("loading"),D=Object(n["resolveComponent"])("el-button"),z=Object(n["resolveDirective"])("click-outside");return Object(n["openBlock"])(),Object(n["createElementBlock"])("div",o,[i,Object(n["createElementVNode"])("div",c,[Object(n["withDirectives"])((Object(n["openBlock"])(),Object(n["createElementBlock"])("div",{class:Object(n["normalizeClass"])(["airdrop-type flex-row-between pointer MB-20",{"type-show":C.typesShow}]),onClick:t[1]||(t[1]=function(e){return C.typesShow=!C.typesShow})},[Object(n["createElementVNode"])("div",s,[l,Object(n["createElementVNode"])("div",d,Object(n["toDisplayString"])(1==C.type?"Aindrop Tokens":"BNB"),1)]),Object(n["createVNode"])(_,{color:"#fff",size:16},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(R)]})),_:1}),Object(n["createVNode"])(n["Transition"],{name:"el-zoom-in-top"},{default:Object(n["withCtx"])((function(){return[Object(n["withDirectives"])(Object(n["createElementVNode"])("div",u,[Object(n["createElementVNode"])("div",{class:"airdrop-type__list-item",onClick:t[0]||(t[0]=function(e){return S.toggleType(1)})},"Aindrop Type")],512),[[n["vShow"],C.typesShow]])]})),_:1})],2)),[[z,S.clickOutside]]),f,Object(n["createElementVNode"])("div",p,"Airdrop Fees:"+Object(n["toDisplayString"])(C.utils.formatEther(C.feeAmount))+" BNB",1),Object(n["createVNode"])(n["Transition"],{name:"el-zoom-in-top"},{default:Object(n["withCtx"])((function(){return[Object(n["withDirectives"])(Object(n["createElementVNode"])("div",b,[m,Object(n["createElementVNode"])("div",v,[Object(n["withDirectives"])(Object(n["createElementVNode"])("input",{"onUpdate:modelValue":t[2]||(t[2]=function(e){return C.tokenAddr=e}),class:"airdrop-type__input text-18 text-white flex-1",placeholder:"Please Enter Token Address"},null,512),[[n["vModelText"],C.tokenAddr,void 0,{trim:!0}]]),Object(n["withDirectives"])(Object(n["createVNode"])(_,{class:"is-loading",color:"#fff"},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(M)]})),_:1},512),[[n["vShow"],C.searchLoading]])])],512),[[n["vShow"],1==C.type]])]})),_:1}),Object(n["withDirectives"])(Object(n["createElementVNode"])("div",h,[g,Object(n["createElementVNode"])("span",O,Object(n["toDisplayString"])(C.ERC20Info.symbol)+"("+Object(n["toDisplayString"])(C.ERC20Info.name||"--")+")",1)],512),[[n["vShow"],1==C.type]]),Object(n["createElementVNode"])("div",w,[j,1==C.type?(Object(n["openBlock"])(),Object(n["createElementBlock"])("span",x,Object(n["toDisplayString"])(C.utils.formatUnits(C.ERC20Info.balance,C.ERC20Info.decimals)),1)):(Object(n["openBlock"])(),Object(n["createElementBlock"])("span",y,Object(n["toDisplayString"])(C.utils.formatEther(C.ERC20Info.balance)),1))]),Object(n["createElementVNode"])("div",k,[Object(n["withDirectives"])(Object(n["createElementVNode"])("textarea",{"onUpdate:modelValue":t[3]||(t[3]=function(e){return C.disListInfo=e}),class:"airdrop-list__textarea text-white text-16",placeholder:"Enter Distribution List"},null,512),[[n["vModelText"],C.disListInfo,void 0,{trim:!0}]])]),E,Object(n["createElementVNode"])("div",N,[A,Object(n["createElementVNode"])("span",L,Object(n["toDisplayString"])(S.totalPrice),1)]),Object(n["createElementVNode"])("div",I,[C.isLogin?2==C.isApprove?(Object(n["openBlock"])(),Object(n["createBlock"])(D,{key:1,class:"btn btn-line color-text MR-20",loading:C.approveLoading,onClick:S.approveHandler},{default:Object(n["withCtx"])((function(){return[T]})),_:1},8,["loading","onClick"])):1==C.isApprove?(Object(n["openBlock"])(),Object(n["createBlock"])(D,{key:2,class:"btn",loading:C.airdropLoading,onClick:S.airdropHandler},{default:Object(n["withCtx"])((function(){return[V]})),_:1},8,["loading","onClick"])):Object(n["createCommentVNode"])("",!0):(Object(n["openBlock"])(),Object(n["createBlock"])(D,{key:0,class:"btn btn-line color-text MR-20",loading:C.loginLoading,onClick:S.loginHandler},{default:Object(n["withCtx"])((function(){return[B]})),_:1},8,["loading","onClick"]))])])])}function S(e){if(Array.isArray(e))return e}r("8caa"),r("4918"),r("d8ae"),r("b38d"),r("bb00"),r("422f");function R(e,t){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,a,o=[],i=!0,c=!1;try{for(r=r.call(e);!(i=(n=r.next()).done);i=!0)if(o.push(n.value),t&&o.length===t)break}catch(s){c=!0,a=s}finally{try{i||null==r["return"]||r["return"]()}finally{if(c)throw a}}return o}}var _=r("91c9");function M(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function D(e,t){return S(e)||R(e,t)||Object(_["a"])(e,t)||M()}var z=r("ed3b"),F=(r("e186"),r("b874"),r("294f"),r("3abb"),r("685e"),r("f34b"),r("6c40"),r("0787")),H=r("b826"),P=r("8e44"),U=function(e,t,r){var n;return function(){var a=arguments,o=this;if(n&&clearTimeout(n),r){var i=!n;n=setTimeout((function(){n=null}),t),i&&e.apply(this,arguments)}else n=setTimeout((function(){e.apply(o,a)}),t)}},$=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"Tips";Object(P["a"])({type:"error",title:t,message:e.data&&e.data.message||e.message})},G=r("216d"),X=r("1ed7"),J=r("fb7f"),Y=r("b6f8");window.Contract=G["b"],window.IERC20ABI=Y;var Z=null,q={components:{CaretBottom:F["a"],Loading:H["a"]},data:function(){return{utils:X["utils"],typesShow:!1,type:1,isLogin:!1,isApprove:0,approveLoading:!1,loginLoading:!1,feeAmount:J["a"].from(0),tokenAddr:"",disListInfo:"",airdropLoading:!1,searchLoading:!1,ERC20Info:{name:"",symbol:"",decimals:0,balance:J["a"].from(0),allowance:J["a"].from(0)}}},computed:{disList:function(){var e=[],t=[];this.disListInfo&&(e=this.disListInfo.split("\n"));for(var r=0;r<e.length;r++){var n=e[r],a=n.split(",");t.push({addr:a[0],price:a[1]})}return t},totalPrice:function(){var e=0;return this.disList.forEach((function(t){var r=t.price;r&&!isNaN(r)&&(e+=Number(r))})),e}},watch:{tokenAddr:U(Object(z["a"])(regeneratorRuntime.mark((function e(){var t,r,n,a,o,i,c,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return this.searchLoading=!0,e.prev=1,t=new G["b"](this.tokenAddr,Y,wallet.airDropABI.signer),e.next=5,Promise.all([t.name(),t.symbol(),t.decimals(),t.balanceOf(wallet.accounts[0]),t.allowance(wallet.accounts[0],wallet.airDropABI.address)]);case 5:r=e.sent,n=D(r,5),a=n[0],o=n[1],i=n[2],c=n[3],s=n[4],this.ERC20Info={name:a,symbol:o,decimals:i,balance:c},this.isApprove=s.isZero()?2:1,Z=t,e.next=23;break;case 17:e.prev=17,e.t0=e["catch"](1),console.error(e.t0),this.ERC20Info={name:"",symbol:"",decimals:0,balance:J["a"].from(0),allowance:J["a"].from(0)},this.isApprove=2,Z=null;case 23:this.searchLoading=!1;case 24:case"end":return e.stop()}}),e,this,[[1,17]])}))),500)},created:function(){var e=this;this.isLoginFn(),this.$wallet.on("accountChange",(function(){e.isLoginFn()}))},methods:{isLoginFn:function(){var e=this;return Object(z["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!e.$wallet.accounts[0]){t.next=7;break}return e.isLogin=!0,t.next=4,e.$wallet.initNetwork();case 4:e.$wallet.airDropABI.price().then((function(t){e.feeAmount=t})),t.next=8;break;case 7:e.isLogin=!1;case 8:case"end":return t.stop()}}),t)})))()},getBnbBalance:function(){var e=this;wallet.scoutDogeABI.provider.getBalance(wallet.accounts[0]).then((function(t){e.ERC20Info={name:"BNB",balance:t}}))},clickOutside:function(){this.typesShow=!1},toggleType:function(e){this.type=e,this.ERC20Info={name:"",symbol:"",decimals:0,balance:J["a"].from(0),allowance:J["a"].from(0)},2===e&&this.getBnbBalance()},loginHandler:function(){var e=this;this.loginLoading=!0,this.$wallet.initNetwork().then((function(){e.isLogin=!0})).finally((function(){e.loginLoading=!1}))},approveHandler:function(){var e=this;return Object(z["a"])(regeneratorRuntime.mark((function t(){var r,n,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(r=e.dataVerify(),r){t.next=3;break}return t.abrupt("return");case 3:return e.approveLoading=!0,t.prev=4,t.next=7,Z.totalSupply();case 7:return n=t.sent,t.next=10,Z.approve(wallet.airDropABI.address,n);case 10:return a=t.sent,t.next=13,a.wait();case 13:e.isApprove=1,t.next=20;break;case 16:t.prev=16,t.t0=t["catch"](4),console.error(t.t0),$(t.t0);case 20:e.approveLoading=!1;case 21:case"end":return t.stop()}}),t,null,[[4,16]])})))()},airdropHandler:function(){var e=this;return Object(z["a"])(regeneratorRuntime.mark((function t(){var r,n,a,o,i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.airdropLoading=!0,t.prev=1,r=Z,n=r.address,a=e.disList.map((function(e){return e.addr})),o=e.disList.map((function(t){return X["utils"].parseUnits(t.price.toString(),e.ERC20Info.decimals)})),t.next=7,wallet.airDropABI.batchSafeTransferFrom(n,a,o,{value:e.feeAmount});case 7:return i=t.sent,t.next=10,i.wait();case 10:Object(P["a"])({type:"success",title:"Success",message:"Airdrop Success"}),t.next=17;break;case 13:t.prev=13,t.t0=t["catch"](1),console.error(t.t0),$(t.t0);case 17:e.airdropLoading=!1;case 18:case"end":return t.stop()}}),t,null,[[1,13]])})))()},airdropETHHandler:function(){var e=this;return Object(z["a"])(regeneratorRuntime.mark((function t(){var r,n,a,o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.airdropLoading=!0,t.prev=1,r=e.disList.map((function(e){return e.addr})),n=e.disList.map((function(e){return X["utils"].parseEther(e.price.toString())})),a=n.reduce((function(e,t){return e.add(t)}),e.feeAmount),t.next=7,wallet.airDropABI.batchSafeSendETH(r,n,{value:a});case 7:return o=t.sent,t.next=10,o.wait();case 10:t.next=16;break;case 12:t.prev=12,t.t0=t["catch"](1),console.error(t.t0),$(t.t0);case 16:e.airdropLoading=!1;case 17:case"end":return t.stop()}}),t,null,[[1,12]])})))()},dataVerify:function(){if(!this.tokenAddr)return Object(P["a"])({type:"error",title:"Tips",message:"Please Enter Token Address"}),!1;if(this.disList.length<=0)return Object(P["a"])({type:"error",title:"Tips",message:"Please Enter Distribution List"}),!1;for(var e=!0,t=0;t<this.disList.length;t++){var r=this.disList[t],n=r.addr,a=r.price;if("0x"!==n.substr(0,2)||42!==n.length||!a){Object(P["a"])({type:"error",title:"Tips",message:"The format of line ".concat(t+1," is wrong, please check the vehicle")}),e=!1;break}}return e}}},K=(r("6e7c"),r("b3f2")),Q=r.n(K);const W=Q()(q,[["render",C],["__scopeId","data-v-d3b7f6fc"]]);t["default"]=W},"2ce1":function(e,t,r){"use strict";var n=r("4851"),a=r("c636"),o=r("88f3"),i=r("bea6"),c=r("1d12"),s=r("373c"),l=r("d98d"),d=r("5d04"),u=r("9a68"),f=r("ec64"),p=r("d09c"),b=n.Array;e.exports=function(e){var t=i(e),r=l(this),n=arguments.length,m=n>1?arguments[1]:void 0,v=void 0!==m;v&&(m=a(m,n>2?arguments[2]:void 0));var h,g,O,w,j,x,y=p(t),k=0;if(!y||this==b&&s(y))for(h=d(t),g=r?new this(h):b(h);h>k;k++)x=v?m(t[k],k):t[k],u(g,k,x);else for(w=f(t,y),j=w.next,g=r?new this:[];!(O=o(j,w)).done;k++)x=v?c(w,m,[O.value,k],!0):O.value,u(g,k,x);return g.length=k,g}},"502b":function(e,t,r){var n=r("6885"),a=r("1cd4"),o=r("097a"),i=r("c261"),c=n("".replace),s="["+i+"]",l=RegExp("^"+s+s+"*"),d=RegExp(s+s+"*$"),u=function(e){return function(t){var r=o(a(t));return 1&e&&(r=c(r,l,"")),2&e&&(r=c(r,d,"")),r}};e.exports={start:u(1),end:u(2),trim:u(3)}},"50bd":function(e,t,r){},"685e":function(e,t,r){"use strict";var n=r("98eb"),a=r("4851"),o=r("6885"),i=r("36f2"),c=r("ce82"),s=r("80ac"),l=r("01de"),d=r("122b"),u=r("b324"),f=r("fb63"),p=r("5164"),b=r("5ae6").f,m=r("0c29").f,v=r("7ebf").f,h=r("e45b"),g=r("502b").trim,O="Number",w=a[O],j=w.prototype,x=a.TypeError,y=o("".slice),k=o("".charCodeAt),E=function(e){var t=f(e,"number");return"bigint"==typeof t?t:N(t)},N=function(e){var t,r,n,a,o,i,c,s,l=f(e,"number");if(u(l))throw x("Cannot convert a Symbol value to a number");if("string"==typeof l&&l.length>2)if(l=g(l),t=k(l,0),43===t||45===t){if(r=k(l,2),88===r||120===r)return NaN}else if(48===t){switch(k(l,1)){case 66:case 98:n=2,a=49;break;case 79:case 111:n=8,a=55;break;default:return+l}for(o=y(l,2),i=o.length,c=0;c<i;c++)if(s=k(o,c),s<48||s>a)return NaN;return parseInt(o,n)}return+l};if(i(O,!w(" 0o1")||!w("0b1")||w("+0x1"))){for(var A,L=function(e){var t=arguments.length<1?0:w(E(e)),r=this;return d(j,r)&&p((function(){h(r)}))?l(Object(t),r,L):t},I=n?b(w):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,fromString,range".split(","),B=0;I.length>B;B++)s(w,A=I[B])&&!s(L,A)&&v(L,A,m(w,A));L.prototype=j,j.constructor=L,c(a,O,L)}},"6e7c":function(e,t,r){"use strict";r("50bd")},"79a8":function(e,t,r){var n=r("9d31"),a=r("2ce1"),o=r("b99f"),i=!o((function(e){Array.from(e)}));n({target:"Array",stat:!0,forced:i},{from:a})},"90df":function(e,t,r){var n=r("98eb"),a=r("4831").EXISTS,o=r("6885"),i=r("7ebf").f,c=Function.prototype,s=o(c.toString),l=/function\b(?:\s|\/\*[\S\s]*?\*\/|\/\/[^\n\r]*[\n\r]+)*([^\s(/]*)/,d=o(l.exec),u="name";n&&!a&&i(c,u,{configurable:!0,get:function(){try{return d(l,s(this))[1]}catch(e){return""}}})},"91c9":function(e,t,r){"use strict";r.d(t,"a",(function(){return a}));r("446a"),r("d8ae"),r("90df"),r("79a8"),r("bb00"),r("b874"),r("99d7");var n=r("9a05");function a(e,t){if(e){if("string"===typeof e)return Object(n["a"])(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?Object(n["a"])(e,t):void 0}}},"99d7":function(e,t,r){"use strict";r("b874");var n=r("9d31"),a=r("4851"),o=r("88f3"),i=r("6885"),c=r("8103"),s=r("2dc1"),l=function(){var e=!1,t=/[ac]/;return t.exec=function(){return e=!0,/./.exec.apply(this,arguments)},!0===t.test("abc")&&e}(),d=a.Error,u=i(/./.test);n({target:"RegExp",proto:!0,forced:!l},{test:function(e){var t=this.exec;if(!c(t))return u(this,e);var r=o(t,this,e);if(null!==r&&!s(r))throw new d("RegExp exec method returned something other than an Object or null");return!!r}})},"9a05":function(e,t,r){"use strict";function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}r.d(t,"a",(function(){return n}))},b826:function(e,t,r){"use strict";var n=r("6a59"),a=Object(n["defineComponent"])({name:"Loading"});const o={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024"},i=Object(n["createVNode"])("path",{fill:"currentColor",d:"M512 64a32 32 0 0 1 32 32v192a32 32 0 0 1-64 0V96a32 32 0 0 1 32-32zm0 640a32 32 0 0 1 32 32v192a32 32 0 1 1-64 0V736a32 32 0 0 1 32-32zm448-192a32 32 0 0 1-32 32H736a32 32 0 1 1 0-64h192a32 32 0 0 1 32 32zm-640 0a32 32 0 0 1-32 32H96a32 32 0 0 1 0-64h192a32 32 0 0 1 32 32zM195.2 195.2a32 32 0 0 1 45.248 0L376.32 331.008a32 32 0 0 1-45.248 45.248L195.2 240.448a32 32 0 0 1 0-45.248zm452.544 452.544a32 32 0 0 1 45.248 0L828.8 783.552a32 32 0 0 1-45.248 45.248L647.744 692.992a32 32 0 0 1 0-45.248zM828.8 195.264a32 32 0 0 1 0 45.184L692.992 376.32a32 32 0 0 1-45.248-45.248l135.808-135.808a32 32 0 0 1 45.248 0zm-452.544 452.48a32 32 0 0 1 0 45.248L240.448 828.8a32 32 0 0 1-45.248-45.248l135.808-135.808a32 32 0 0 1 45.248 0z"},null,-1);function c(e,t,r,a,c,s){return Object(n["openBlock"])(),Object(n["createBlock"])("svg",o,[i])}a.render=c,a.__file="packages/components/Loading.vue",t["a"]=a},c261:function(e,t){e.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},e45b:function(e,t,r){var n=r("6885");e.exports=n(1..valueOf)},f34b:function(e,t,r){"use strict";var n=r("9d31"),a=r("8218").map,o=r("b59d"),i=o("map");n({target:"Array",proto:!0,forced:!i},{map:function(e){return a(this,e,arguments.length>1?arguments[1]:void 0)}})}}]);
//# sourceMappingURL=chunk-975391a0.7a3d2c35.js.map