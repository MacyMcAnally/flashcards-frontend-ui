(this["webpackJsonpflashcards-frontend-ui"]=this["webpackJsonpflashcards-frontend-ui"]||[]).push([[0],{27:function(e,t,r){},37:function(e,t,r){},38:function(e,t,r){"use strict";r.r(t);var n=r(0),s=r(1),a=r.n(s),c=r(20),i=r.n(c),o=(r(27),r(6)),j={display:"flex",background:"#E0FFFF",color:"#2F4F4F",textAlign:"left",padding:"3px 15px"},d=function(){var e=window.location.pathname,t="/ui"===e||"/ui/Login"===e||"/ui/NewUser"===e,r="/ui/UserHome"===e||"/ui/ViewCards"===e||"/ui/CreateCards"===e||"/ui/UserInfo"===e;return Object(n.jsxs)("header",{style:j,children:[Object(n.jsx)("h1",{children:"Flashcards!"}),t&&Object(n.jsxs)("nav",{children:[Object(n.jsx)(o.b,{exact:!0,to:"/ui",activeClassName:"selected",children:"Home"}),Object(n.jsx)("span",{children:" "}),Object(n.jsx)(o.b,{exact:!0,to:"/ui/Login",activeClassName:"selected",children:"Login"}),Object(n.jsx)("span",{children:" "}),Object(n.jsx)(o.b,{exact:!0,to:"/ui/NewUser",activeClassName:"selected",children:"Create User"})]}),r&&Object(n.jsxs)("nav",{children:[Object(n.jsx)(o.b,{exact:!0,to:"/ui/UserHome",activeClassName:"selected",children:"UserHome"}),Object(n.jsx)("span",{children:" "}),Object(n.jsx)(o.b,{exact:!0,to:"/ui/ViewCards",activeClassName:"selected",children:"View Cards"}),Object(n.jsx)("span",{children:" "}),Object(n.jsx)(o.b,{exact:!0,to:"/ui/CreateCards",activeClassName:"selected",children:"Create New Cards"}),Object(n.jsx)("span",{children:" "}),Object(n.jsx)(o.b,{exact:!0,to:"/ui/UserInfo",activeClassName:"selected",children:"User Info"})]})]})};var u={textAlign:"center",padding:"100px"},l=function(){return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(d,{}),Object(n.jsx)("p",{style:u,children:"This is a Intro for this page and why you should use it!................................................................. ............................................ ......................................................... ........................................................ ....................................................... ........................................................."})]})},b=r(13),p=r(9),x=r(2),h=r.n(x),O=r(10),m=r(15),f=r(5);function v(e,t){return g.apply(this,arguments)}function g(){return(g=Object(O.a)(h.a.mark((function e(t,r){var n,s;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=0;case 1:if(!(n<f.users.length)){e.next=9;break}if((s=f.users[n]).username!=t||s._password!=r){e.next=6;break}return s,e.abrupt("return");case 6:n++,e.next=1;break;case 9:throw new Error("couldnt login!");case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function w(e,t){return C.apply(this,arguments)}function C(){return(C=Object(O.a)(h.a.mark((function e(t,r){var n;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n={id:++f.lastuserid,username:t,admin:!1,_password:r},f.users.push(n);case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var y=r(3);var F={background:"#00BFFF",display:"inline-block",fontSize:"18px",padding:"10px 20px",border:"none",cursor:"pointer",margin:"20px"},U=function(){var e=Object(y.f)(),t=Object(s.useState)({username:"",password:""}),r=Object(m.a)(t,2),a=r[0],c=r[1],i=function(){var t=Object(O.a)(h.a.mark((function t(r){return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r.preventDefault(),t.prev=1,t.next=4,v(a.username,a.password);case 4:e.push("/ui/UserHome"),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(1),e.push("/ui/UserError");case 10:case"end":return t.stop()}}),t,null,[[1,7]])})));return function(e){return t.apply(this,arguments)}}(),o=function(e){c(Object(p.a)(Object(p.a)({},a),{},Object(b.a)({},e.target.name,e.target.value)))};return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(d,{}),Object(n.jsxs)("header",{children:[Object(n.jsx)("h1",{children:"Login"}),Object(n.jsxs)("form",{onSubmit:i,children:[Object(n.jsx)("input",{type:"text",name:"username",placeholder:"Username",value:a.username,onChange:o}),Object(n.jsx)("br",{}),Object(n.jsx)("br",{}),Object(n.jsx)("input",{type:"text",name:"password",placeholder:"Password",value:a.password,onChange:o}),Object(n.jsx)("br",{}),Object(n.jsx)("button",{style:F,children:"Login"})]}),Object(n.jsx)("br",{})]})]})};var k={margin:"20px"},N=function(){var e=Object(y.f)(),t=Object(s.useState)({username:"",password:""}),r=Object(m.a)(t,2),a=r[0],c=r[1],i=function(){var t=Object(O.a)(h.a.mark((function t(r){return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r.preventDefault(),t.prev=1,t.next=4,w(a.username,a.password);case 4:e.push("/ui/Login"),t.next=11;break;case 7:t.prev=7,t.t0=t.catch(1),console.log(t.t0),console.log("nope");case 11:case"end":return t.stop()}}),t,null,[[1,7]])})));return function(e){return t.apply(this,arguments)}}(),o=function(e){c(Object(p.a)(Object(p.a)({},a),{},Object(b.a)({},e.target.name,e.target.value)))};return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(d,{}),Object(n.jsxs)("header",{children:[Object(n.jsx)("h1",{children:"Create a New User"}),Object(n.jsxs)("form",{onSubmit:i,children:[Object(n.jsx)("p",{children:"Please enter your Username"}),Object(n.jsx)("input",{type:"text",name:"username",placeholder:"Username",value:a.username,onChange:o}),Object(n.jsx)("br",{}),Object(n.jsx)("p",{children:"Please enter your Password"}),Object(n.jsx)("input",{type:"text",name:"password",placeholder:"Password",value:a.password,onChange:o}),Object(n.jsx)("br",{}),Object(n.jsx)("button",{style:k,children:"Create User"})]})]})]})};var I=function(){return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(d,{}),Object(n.jsx)("h1",{children:"Welcome to User Homepage!"})]})};var L=function(){return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(d,{}),Object(n.jsxs)("div",{children:[Object(n.jsx)("p",{children:"404 User not found, please try again or create a new user"}),Object(n.jsx)(o.b,{exact:!0,to:"/ui/Login",activeClassName:"selected",children:"Login"}),Object(n.jsx)("span",{children:" / "}),Object(n.jsx)(o.b,{exact:!0,to:"/ui/NewUser",activeClassName:"selected",children:"Create New User"})]})]})};var P=function(){return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(d,{}),Object(n.jsx)("h1",{children:"This is ViewCards Page!"})]})};var D={margin:"10px",fontSize:"20px",borderRadius:"8px"},T=function(){return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(d,{}),Object(n.jsxs)("div",{children:[Object(n.jsx)("h1",{children:"This is CreateCards Page!"}),Object(n.jsx)("p",{children:"Please create a new or use an exiting card templates: "}),Object(n.jsx)("button",{style:D,onClick:function(e){e.preventDefault()},children:" + "}),Object(n.jsx)("form",{children:Object(n.jsx)("input",{type:"text"})})]})]})};var S=function(){return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(d,{}),Object(n.jsx)("h1",{children:"This is UserInfo Page!"})]})};r(37);var H=function(){return Object(n.jsx)(n.Fragment,{children:Object(n.jsx)(o.a,{children:Object(n.jsxs)(y.c,{children:[Object(n.jsx)(y.a,{exact:!0,path:"/ui",component:l}),Object(n.jsx)(U,{exact:!0,path:"/ui/Login",component:U}),Object(n.jsx)(N,{exact:!0,path:"/ui/NewUser",component:N}),Object(n.jsx)(L,{exact:!0,path:"/ui/UserError",component:L}),Object(n.jsx)(I,{exact:!0,path:"/ui/UserHome",component:I}),Object(n.jsx)(P,{exact:!0,path:"/ui/ViewCards",component:P}),Object(n.jsx)(T,{exact:!0,path:"/ui/CreateCards",component:T}),Object(n.jsx)(S,{exact:!0,path:"/ui/UserInfo",component:S})]})})})},B=function(e){e&&e instanceof Function&&r.e(3).then(r.bind(null,39)).then((function(t){var r=t.getCLS,n=t.getFID,s=t.getFCP,a=t.getLCP,c=t.getTTFB;r(e),n(e),s(e),a(e),c(e)}))};i.a.render(Object(n.jsx)(a.a.StrictMode,{children:Object(n.jsx)(H,{})}),document.getElementById("root")),B()},5:function(e,t){e.exports={users:[{id:1,username:"macy",admin:!0,_password:"pass"},{id:2,username:"vincent",admin:!1,_password:"pass"}],lastuserid:2,cardTemplates:[{id:1,userID:2,description:"this template is for X",front:"<div>%%FRONT%%</div>",back:'<div style="background-color:red">%%BACK%%</div>'},{id:2,userID:2,description:"this template is for Y",front:"<div>%%FRONT%%</div>",back:'<div style="background-color:blue">%%BACK%%</div>'}],lastcardtemplateid:2,cards:[{id:1,templateID:1,data:""},{id:2,templateID:1,data:""},{id:3,templateID:2,data:""}],lastcardid:3}}},[[38,1,2]]]);
//# sourceMappingURL=main.7c5e92a7.chunk.js.map