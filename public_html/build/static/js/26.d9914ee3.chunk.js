(this["webpackJsonpreal-estate"]=this["webpackJsonpreal-estate"]||[]).push([[26,30,32],{122:function(e,s,c){},130:function(e,s,c){"use strict";c.r(s);var t=c(2),a=c.n(t),i=c(4),r=c(79),n=c(80),l=c(20),o=c(1),j=c.n(o),d=c(22),b=c(74),m=c(127),h=c(23),u=c(21),O=c(81),x=c.n(O),p=c(5),v=c(24),N=(c(122),c(77)),g=c(76),f=c(123),w=c.n(f),y=(c(124),c(3)),L=h.a;s.default=function(e){var s=Object(p.g)(),c=Object(o.useContext)(d.a).RegisterUser,t=Object(o.useState)("[empty]"),h=Object(l.a)(t,2),O=h[0],f=h[1],k=Object(o.useState)(!1),G=Object(l.a)(k,2),R=G[0],A=G[1],F=Object(o.useState)(!1),Y=Object(l.a)(F,2),E=Y[0],Z=Y[1],S=Object(o.useState)(!1),M=Object(l.a)(S,2),C=M[0],W=M[1],I=j.a.createRef(),U=Object(o.useState)({name:"",email:"",password:"",type:"",conformpassword:"",subscribe:""}),V=Object(l.a)(U,2),B=V[0],T=V[1],J=function(e){T(Object(n.a)(Object(n.a)({},B),{},Object(r.a)({},e.target.name,e.target.value)))};Object(o.useEffect)((function(){window.scrollTo(0,0),setTimeout((function(){A(!0)}),1500),console.log("didMount - reCaptcha Ref-",I)}),[]);var P=Object(o.useState)(""),D=Object(l.a)(P,2),X=D[0],K=D[1],H=function(){var e=Object(i.a)(a.a.mark((function e(t){var i;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(W(!0),t.preventDefault(),t.persist(),B.password===B.conformpassword){e.next=7;break}return v.b.error("password and confirm password does not match.",{position:"top-center",autoClose:7e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0}),W(!1),e.abrupt("return");case 7:if(!(X.length<9)){e.next=11;break}return v.b.error("Please enter only number.",{position:"top-center",autoClose:7e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0}),W(!1),e.abrupt("return");case 11:return e.next=13,c(B,X);case 13:1===(i=e.sent).success?(W(!1),Object(v.b)("Account successfully created. Thank you for your registration! Your account is now ready to use.",{position:"top-center",autoClose:1e4}),t.target.reset(),s.push("/Login")):(W(!1),v.b.error(i.msg,{position:"top-center",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0}));case 15:case"end":return e.stop()}}),e)})));return function(s){return e.apply(this,arguments)}}();return Object(y.jsxs)(y.Fragment,{children:[Object(y.jsx)(N.default,{}),Object(y.jsx)("div",{className:"Loginone mins",children:Object(y.jsx)("div",{className:"container",children:Object(y.jsxs)("div",{className:"row",children:[Object(y.jsx)("div",{className:"col-md-12",children:Object(y.jsxs)("div",{className:"login-forms",children:[Object(y.jsx)("h1",{children:" Register An Account "}),Object(y.jsxs)("form",{onSubmit:H,children:[Object(y.jsx)("div",{className:"clearfix"}),Object(y.jsxs)("div",{className:"form-row",children:[Object(y.jsx)("div",{className:"clearfix"}),Object(y.jsxs)("div",{className:"form-group col-md-6",children:[Object(y.jsxs)("label",{className:"font-weight-bold",children:["Name ",Object(y.jsx)("span",{className:"required",children:"*"})]}),Object(y.jsx)("input",{type:"text",name:"name",value:B.name,onChange:J,className:"form-control",placeholder:"Enter a profile name.",required:!0})]}),Object(y.jsxs)("div",{className:"form-group col-md-6",children:[Object(y.jsxs)("label",{className:"font-weight-bold",children:["What's your email? ",Object(y.jsx)("span",{className:"required",children:"*"})]}),Object(y.jsx)("input",{type:"email",name:"email",value:B.email,onChange:J,className:"form-control",placeholder:"Enter your email.",required:!0})]}),Object(y.jsx)("div",{className:"clearfix"}),Object(y.jsxs)("div",{className:"form-group col-md-6",children:[Object(y.jsxs)("label",{className:"font-weight-bold",children:[" Create a password ",Object(y.jsx)("span",{className:"required",children:"*"})," "]}),Object(y.jsx)("input",{type:"password",name:"password",value:B.password,onChange:J,className:"form-control",placeholder:"Type to create a password",required:!0})]}),Object(y.jsxs)("div",{className:"form-group col-md-6",children:[Object(y.jsxs)("label",{className:"font-weight-bold",children:[" Password repeat ",Object(y.jsx)("span",{className:"required",children:"*"})]}),Object(y.jsx)("input",{type:"password",name:"conformpassword",value:B.conformpassword,onChange:J,className:"form-control",placeholder:"Type to create a password",required:!0})]}),Object(y.jsx)("div",{className:"clearfix"}),Object(y.jsxs)("div",{className:"form-group col-md-6",children:[Object(y.jsxs)("label",{className:"font-weight-bold",children:["Role ",Object(y.jsx)("span",{className:"required",children:"*"})]}),Object(y.jsxs)("select",{name:"type",value:B.type,onChange:J,className:"select__single form-control",required:!0,children:[Object(y.jsx)("option",{value:"",children:" Select "}),Object(y.jsx)("option",{value:"Buyer/Owner",children:"Buyer/Owner "}),Object(y.jsx)("option",{value:"Author",children:"Agent"}),Object(y.jsx)("option",{value:"other",children:"Builder"})]})]}),Object(y.jsxs)("div",{className:"form-group col-md-6",children:[Object(y.jsxs)("label",{className:"font-weight-bold",children:[" Mobile number ",Object(y.jsx)("span",{className:"required",children:"*"})]}),Object(y.jsx)(w.a,{inputProps:{name:"phone",required:!0,autoFocus:!0},country:"in",value:X,onChange:function(e){K(e)}})]}),Object(y.jsx)("input",{type:"hidden",name:"recaptcha_response",ref:function(e){return B.recaptcha_response=e},className:"form-control",placeholder:"Your password here...",required:!0,defaultValue:O}),R&&Object(y.jsx)(m.a,{style:{display:"inline-block"},theme:"dark",size:"invisible",ref:I,sitekey:L,onChange:function(e){f(e)},asyncScriptOnLoad:function(){Z(!0),I.current.execute()}}),Object(y.jsx)("div",{className:"form-group col-md-12 checksss2",children:Object(y.jsxs)("label",{className:"",children:[Object(y.jsx)("input",{type:"checkbox",className:"checksss",name:"subscribe",value:"yes",onChange:J}),Object(y.jsx)("span",{style:{verticalAlign:"sub"},children:"Share my registration data with bookois content providers for marketing purposes. "}),Object(y.jsx)("div",{className:"check"})]})}),Object(y.jsx)("div",{className:"form-group col-md-12 ",children:C?Object(y.jsx)(y.Fragment,{children:Object(y.jsx)(x.a,{type:"Oval",color:"#00bf6f",height:47,width:47,style:{float:"left"}})}):Object(y.jsxs)("button",{type:"submit",className:"log__btn",disabled:!E,children:[" Submit ",Object(y.jsxs)("span",{className:"log__icon",children:[" ",Object(y.jsx)(b.e,{})," "]})," "]})})]})]}),Object(y.jsx)("div",{className:"clearfix"}),Object(y.jsxs)("p",{className:"forgggsss2",children:[" ",Object(y.jsx)(u.b,{to:"/Login",children:"  Already have an Account ? Login here  "})," "]})]})}),Object(y.jsx)("div",{className:"col-md-6"})]})})}),Object(y.jsx)(g.default,{})]})}},76:function(e,s,c){"use strict";c.r(s);var t=c(20),a=c(1),i=(c(22),c(21)),r=c(74),n=c(3);s.default=function(){Object(a.useEffect)((function(){window.addEventListener("scroll",o)}),[]);var e=Object(a.useState)(!1),s=Object(t.a)(e,2),c=s[0],l=s[1],o=function(){window.pageYOffset>700?l(!0):l(!1)};return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("div",{id:"Footer",className:"footer",children:Object(n.jsx)("div",{className:"container",children:Object(n.jsx)("div",{className:"row",children:Object(n.jsx)("div",{className:"copyrighitsss",children:Object(n.jsx)("div",{className:"col-md-6 ",children:Object(n.jsxs)("p",{children:[Object(n.jsx)(i.b,{to:"/",children:" website "})," \xa9 All Rights Reserved - 2021 "]})})})})})}),Object(n.jsx)("div",{className:"clearfix"}),Object(n.jsx)("div",{className:"footersss2",children:c&&Object(n.jsxs)(n.Fragment,{children:[Object(n.jsxs)("span",{onClick:function(){window.scrollTo({top:0,behavior:"smooth"})},className:"scrolls",children:[" ",Object(n.jsx)(r.b,{})," "]}),Object(n.jsx)("span",{className:"ltx-hex",children:Object(n.jsx)("span",{className:"ltx-hex-inner"})})]})})]})}},77:function(e,s,c){"use strict";c.r(s);var t=c(20),a=c(1),i=c(21),r=c(74),n=(c(78),c(82)),l=c(3);s.default=function(){var e=Object(a.useState)(!1),s=Object(t.a)(e,2),c=s[0],o=s[1],j=Object(a.useState)(!1),d=Object(t.a)(j,2),b=d[0],m=d[1],h=function(){o(!1===c),m(!1===b)},u=["main-menu menu-right menuq1"];c?u.push("menuq2"):u.push("");var O=Object(a.useState)(!1),x=Object(t.a)(O,2),p=x[0],v=(x[1],["sub__menus"]);return p?v.push("sub__menus__Active"):v.push(""),Object(l.jsx)("header",{className:"header__middle",children:Object(l.jsx)("div",{className:"container",children:Object(l.jsxs)("div",{className:"row",children:[Object(l.jsx)("div",{className:"header__middle__logo",children:Object(l.jsx)(i.c,{exact:!0,activeClassName:"is-active",to:"/",children:Object(l.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAAAvCAYAAAABxDNfAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QTUwRTk2RkU4NjBBMTFFQUIwMjJFMDJBMUQ4OEI3RUUiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QTUwRTk2RkY4NjBBMTFFQUIwMjJFMDJBMUQ4OEI3RUUiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpBNTBFOTZGQzg2MEExMUVBQjAyMkUwMkExRDg4QjdFRSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpBNTBFOTZGRDg2MEExMUVBQjAyMkUwMkExRDg4QjdFRSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PvFTvpUAAApDSURBVHja7F0JtFVT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",alt:"logo"})})}),Object(l.jsx)("div",{className:"header__middle__menus",children:Object(l.jsxs)("nav",{className:"main-nav ",children:[!0===b?Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)("span",{className:"menubar__button",style:{display:"none"},onClick:h,children:[" ",Object(l.jsx)(r.f,{}),"   "]})}):Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)("span",{className:"menubar__button",style:{display:"none"},onClick:h,children:[" ",Object(l.jsx)(r.a,{}),"   "]})}),Object(l.jsxs)("ul",{className:u.join(" "),children:[Object(l.jsx)("li",{className:"menu-item",children:Object(l.jsx)(i.c,{exact:!0,activeClassName:"is-active",onClick:h,to:"/",children:" Home "})}),Object(l.jsx)("li",{className:"menu-item",children:Object(l.jsx)(i.c,{exact:!0,activeClassName:"is-active",onClick:h,to:"/Buy",children:" Buy "})}),Object(l.jsx)("li",{className:"menu-item",children:Object(l.jsx)(i.c,{exact:!0,activeClassName:"is-active",onClick:h,to:"/Rent",children:" Rent "})}),Object(l.jsx)("li",{className:"menu-item",children:Object(l.jsx)(i.c,{exact:!0,activeClassName:"is-active",onClick:h,to:"/Pg",children:" Pg "})}),Object(l.jsx)("li",{className:"menu-item",children:Object(l.jsx)(i.c,{exact:!0,activeClassName:"is-active",onClick:h,to:"/PostProperty",children:" Post Property "})}),Object(l.jsx)("li",{className:"menu-item",children:Object(l.jsx)(i.c,{exact:!0,activeClassName:"is-active",onClick:h,to:"/AccountAll",children:" My Account "})}),Object(l.jsxs)("li",{className:"menu-item svg__logins",children:[" ",Object(l.jsx)(n.a,{}),Object(l.jsx)(i.c,{exact:!0,activeClassName:"is-active",onClick:h,to:"/Login",children:" Login \xa0/\xa0"}),Object(l.jsx)(i.c,{exact:!0,activeClassName:"is-active",onClick:h,to:"/Register",children:" Register "})]})]})]})})]})})})}},78:function(e,s,c){}}]);
//# sourceMappingURL=26.d9914ee3.chunk.js.map