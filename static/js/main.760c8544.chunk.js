(this.webpackJsonpcalctax=this.webpackJsonpcalctax||[]).push([[0],[,,,,function(e,t,n){e.exports=n(12)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(2),l=n.n(c),u=(n(9),n(3));n(10);var o=function(){var e=function(){var e=Object(a.useState)(0),t=Object(u.a)(e,2),n=t[0],r=t[1],c=Object(a.useRef)(),l=Object(a.useRef)();return{element:c,calcTax:function(e){e.preventDefault();var t=e.target.querySelector("input[type=text]").value,a=t/.967;r(Math.floor(a));var u=new Intl.NumberFormat("ko-KR",{style:"currency",currency:"KRW"}).format(n);c.current.innerText="".concat(u," \uc6d0");var o="\ucd1d \uae08\uc561 - \uc138\uae08 = \uc2e4 \uc218\ub839\uc561\n".concat(n," - ").concat(Math.floor(.033*n)," = ").concat(t);l.current.innerText=o},resultElm:l}}(),t=e.element,n=e.calcTax,c=e.resultElm;return r.a.createElement("div",{className:"App"},r.a.createElement("h1",null,"\uc2e4\uc81c\ub85c \uc218\ub839\ud560 \uae08\uc561\uc744 \uc785\ub825\ud574 \uc8fc\uc138\uc694(\uc138\uae08 \ub5bc\uace0)"),r.a.createElement("form",{action:"#",method:"get",onSubmit:n},r.a.createElement("input",{type:"text",placeholder:"\uc2e4 \uc218\ub839\uc561"}),r.a.createElement("input",{type:"submit"})),r.a.createElement("h2",null,"\ucd1d \uae08\uc561"),r.a.createElement("span",{ref:t,style:{marginBottom:"10px"}},"0 \uc6d0"),r.a.createElement("span",{ref:c}))};n(11);var m=function(){return r.a.createElement("div",{className:"footer"},r.a.createElement("small",null,"created By Presuit"))};l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(o,null),r.a.createElement(m,null)),document.getElementById("root"))}],[[4,1,2]]]);
//# sourceMappingURL=main.760c8544.chunk.js.map