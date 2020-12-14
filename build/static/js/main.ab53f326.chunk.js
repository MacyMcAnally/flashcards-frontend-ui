(this["webpackJsonpflashcards-frontend-ui"]=this["webpackJsonpflashcards-frontend-ui"]||[]).push([[0],{34:function(e,t,a){},43:function(e,t,a){},70:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a(1),s=a.n(r),c=a(35),i=a.n(c),o=(a(43),a(6)),u={display:"block",background:"#E0FFFF",color:"#2F4F4F",textAlign:"center",padding:"10px 10px ",fontFamily:"serif",fontWeight:"100",fontStyle:"oblique",fontSize:"20px"},l=function(){var e=window.location.pathname,t="/ui"===e||"/ui/"===e||"/ui/Login"===e||"/ui/Login/"===e||"/ui/NewUser"===e||"/ui/NewUser/"===e,a="/ui/UserHome"===e||"/ui/UserHome/"===e||"/ui/ViewCards"===e||"/ui/ViewCards/"===e||"/ui/CreateTemp"===e||"/ui/CreateTemp/"===e||"/ui/CreateCards"===e||"/ui/CreateCards/"===e;return Object(n.jsxs)("header",{style:u,children:[Object(n.jsx)("h1",{children:"Flashcards!"}),t&&Object(n.jsxs)("nav",{children:[Object(n.jsx)(o.b,{exact:!0,to:"/ui",activeClassName:"selected",children:"Home"}),Object(n.jsx)("span",{children:" "}),Object(n.jsx)(o.b,{exact:!0,to:"/ui/Login",activeClassName:"selected",children:"Login"}),Object(n.jsx)("span",{children:" "}),Object(n.jsx)(o.b,{exact:!0,to:"/ui/NewUser",activeClassName:"selected",children:"Create User"})]}),a&&Object(n.jsxs)("nav",{children:[Object(n.jsx)(o.b,{exact:!0,to:"/ui/UserHome",activeClassName:"selected",children:"UserHome"}),Object(n.jsx)("span",{children:" "}),Object(n.jsx)(o.b,{exact:!0,to:"/ui/ViewCards",activeClassName:"selected",children:"View Cards"}),Object(n.jsx)("span",{children:" "}),Object(n.jsx)(o.b,{exact:!0,to:"/ui/CreateTemp",activeClassName:"selected",children:"Create Template"}),Object(n.jsx)("span",{children:" "}),Object(n.jsx)(o.b,{exact:!0,to:"/ui/CreateCards",activeClassName:"selected",children:"Create New Cards"})]})]})};var d=function(){return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(l,{}),Object(n.jsx)("h1",{id:"WF",children:"Welcome to Flashcards!"}),Object(n.jsx)("h3",{children:"Needing a tool to help you ACE your study? Wanting to have some flexiblilty on creating a Flashcard?"}),Object(n.jsx)("p",{children:"You are at the RIGHT place!! This web application is desgined for people, like you :), who is needing Flashcards for studying or wanting to learn something new or always wanted some creativity added to the flashcards. As a user, you will be able to create your own card templates, making cards, and view cards. In order to use this application, some HTML and CSS knownlege is needed/ recommended, there will have some links provided in the User-Homepage!"})]})},j=a(12),p=a(10),h=a(2),b=a.n(h),x=a(5),O=a(16),m=a(13),f=a.n(m),g=a(37),v=a(15),C=a.n(v),w=void 0;function y(){return k.apply(this,arguments)}function k(){return(k=Object(x.a)(b.a.mark((function e(){var t,a;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=f.a.get("jwt"),w&&t){e.next=3;break}return e.abrupt("return",[]);case 3:return e.next=5,C.a.get(I("/cards?userId="+w.id),{headers:{Authorization:"Bearer "+t}});case 5:return a=e.sent,e.abrupt("return",a.data.success);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function F(e,t){return T.apply(this,arguments)}function T(){return(T=Object(x.a)(b.a.mark((function e(t,a){var n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=f.a.get("jwt"),w&&n){e.next=3;break}return e.abrupt("return");case 3:return e.next=5,C.a.post(I("/cards"),{templateID:t,data:a},{headers:{Authorization:"Bearer "+n}});case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function N(){return S.apply(this,arguments)}function S(){return(S=Object(x.a)(b.a.mark((function e(){var t,a;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=f.a.get("jwt"),w&&t){e.next=3;break}return e.abrupt("return",[]);case 3:return e.next=5,C.a.get(I("/card_templates?userId="+w.id),{headers:{Authorization:"Bearer "+t}});case 5:return a=e.sent,e.abrupt("return",a.data.success);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function U(e,t,a){return H.apply(this,arguments)}function H(){return(H=Object(x.a)(b.a.mark((function e(t,a,n){var r,s;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=f.a.get("jwt"),w&&r){e.next=3;break}return e.abrupt("return");case 3:return s={userID:w.id,description:t,front:a,back:n},e.next=6,C.a.post(I("/card_templates"),s,{headers:{Authorization:"Bearer "+r}});case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function I(e){return"http://18.221.157.116:8080/api".concat(e)}function A(e,t){return D.apply(this,arguments)}function D(){return(D=Object(x.a)(b.a.mark((function e(t,a){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C.a.post(I("/login"),{username:t,password:a});case 2:L(e.sent.data.success);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function L(e){var t=JSON.parse(Object(g.a)(e).auth);w={id:t.userID,admin:t.admin},console.log("signed in with user "+JSON.stringify(w)),f.a.set("jwt",e)}function E(e,t){return P.apply(this,arguments)}function P(){return(P=Object(x.a)(b.a.mark((function e(t,a){var n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C.a.post(I("/users"),{username:t,password:a});case 2:n=e.sent,console.log(n.data.success);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}f.a.get("jwt")&&L(f.a.get("jwt"));var B=a(3);var M={background:"#00BFFF",display:"inline-block",fontSize:"18px",padding:"10px 20px",border:"none",cursor:"pointer",margin:"20px"},z=function(){var e=Object(B.f)(),t=Object(r.useState)({username:"",password:""}),a=Object(O.a)(t,2),s=a[0],c=a[1],i=function(){var t=Object(x.a)(b.a.mark((function t(a){return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a.preventDefault(),t.prev=1,t.next=4,A(s.username,s.password);case 4:e.push("/ui/UserHome"),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(1),e.push("/ui/UserError");case 10:case"end":return t.stop()}}),t,null,[[1,7]])})));return function(e){return t.apply(this,arguments)}}(),o=function(e){c(Object(p.a)(Object(p.a)({},s),{},Object(j.a)({},e.target.name,e.target.value)))};return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(l,{}),Object(n.jsxs)("header",{children:[Object(n.jsx)("h1",{id:"L",children:"Login"}),Object(n.jsxs)("form",{onSubmit:i,children:[Object(n.jsx)("input",{type:"text",name:"username",placeholder:"Username",value:s.username,onChange:o}),Object(n.jsx)("br",{}),Object(n.jsx)("br",{}),Object(n.jsx)("input",{type:"text",name:"password",placeholder:"Password",value:s.password,onChange:o}),Object(n.jsx)("br",{}),Object(n.jsx)("button",{style:M,children:"Login"})]}),Object(n.jsx)("br",{})]})]})};var V={margin:"20px"},J=function(){var e=Object(B.f)(),t=Object(r.useState)({username:"",password:""}),a=Object(O.a)(t,2),s=a[0],c=a[1],i=function(){var t=Object(x.a)(b.a.mark((function t(a){return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a.preventDefault(),t.prev=1,t.next=4,E(s.username,s.password);case 4:e.push("/ui/Login"),t.next=11;break;case 7:t.prev=7,t.t0=t.catch(1),console.log(t.t0),console.log("nope");case 11:case"end":return t.stop()}}),t,null,[[1,7]])})));return function(e){return t.apply(this,arguments)}}(),o=function(e){c(Object(p.a)(Object(p.a)({},s),{},Object(j.a)({},e.target.name,e.target.value)))};return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(l,{}),Object(n.jsxs)("header",{children:[Object(n.jsx)("h1",{id:"CANU",children:"Create A New User"}),Object(n.jsxs)("form",{onSubmit:i,children:[Object(n.jsx)("p",{children:"Please enter your Username: "}),Object(n.jsx)("input",{type:"text",name:"username",placeholder:"Username",value:s.username,onChange:o}),Object(n.jsx)("br",{}),Object(n.jsx)("p",{children:"Please enter your Password: "}),Object(n.jsx)("input",{type:"text",name:"password",placeholder:"Password",value:s.password,onChange:o}),Object(n.jsx)("br",{}),Object(n.jsx)("button",{style:V,children:"Create User"})]})]})]})};var W=function(){return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(l,{}),Object(n.jsx)("h1",{id:"UH",children:"Welcome to User Homepage"}),Object(n.jsx)("br",{}),Object(n.jsx)("h2",{children:"Hello User! "}),Object(n.jsxs)("p",{children:["Please have fun creating your own card templates before makiing a flashcard!! You are on your way to ACE all of your studys! Have Fun and GOOD LUCK!!!!",Object(n.jsx)("a",{href:"https://firstsiteguide.com/html-for-beginners/",children:"  HTML help for beginners"})," &&",Object(n.jsx)("a",{href:"https://www.w3schools.com/css/",children:" CSS Tutorial"})]})]})};var _=function(){return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(l,{}),Object(n.jsxs)("div",{children:[Object(n.jsx)("p",{children:"404 User not found, please try again or create a new user"}),Object(n.jsx)(o.b,{exact:!0,to:"/ui/Login",activeClassName:"selected",children:"Login"}),Object(n.jsx)("span",{children:" / "}),Object(n.jsx)(o.b,{exact:!0,to:"/ui/NewUser",activeClassName:"selected",children:"Create New User"})]})]})},R=a(18),G=a(19),Y=a(21),q=a(20);a(34);var K=function(e){var t=e.html;return Object(n.jsx)("div",{className:"card-component",dangerouslySetInnerHTML:{__html:t}})},Z=function(e){Object(Y.a)(a,e);var t=Object(q.a)(a);function a(e){var n;return Object(R.a)(this,a),(n=t.call(this,e)).componentDidMount=function(){n.getAllCards()},n.getAllCards=Object(x.a)(b.a.mark((function e(){var t,a;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y();case 2:return t=e.sent,e.next=5,N();case 5:a=e.sent,n.setState({allCards:t,templates:a});case 7:case"end":return e.stop()}}),e)}))),n.goToNextCard=function(e){var t=n.state.cardIndex+1>=n.state.allCards.length?0:n.state.cardIndex+1;n.setState({cardIndex:t})},n.goToPreviousCard=function(e){var t=n.state.cardIndex-1<0?n.state.allCards.length-1:n.state.cardIndex-1;n.setState({cardIndex:t})},n.flipCard=function(e){n.setState({onFront:!n.state.onFront})},n.state={cardIndex:0,onFront:!0,allCards:[],templates:[]},n}return Object(G.a)(a,[{key:"getTemplate",value:function(){for(var e=0;e<this.state.templates.length;e++){var t=this.state.templates[e];if(t.id==this.state.allCards[this.state.cardIndex].templateID)return t}}},{key:"getCardData",value:function(){return JSON.parse(this.state.allCards[this.state.cardIndex].data)}},{key:"displayCard",value:function(){for(var e=this.getTemplate(),t=this.state.onFront?e.front:e.back,a=this.getCardData(),n=Object.keys(a),r=0;r<n.length;r++){var s=n[r],c=a[s],i="%%".concat(s,"%%");t=t.replace(new RegExp(i,"g"),c||i)}return t}},{key:"render",value:function(){return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(l,{}),Object(n.jsxs)("div",{children:[Object(n.jsx)("h1",{id:"VC",children:"View Cards"}),Object(n.jsxs)("span",{style:{paddingRight:8},children:["Card #",this.state.cardIndex+1]}),Object(n.jsx)("span",{children:" "}),Object(n.jsx)("button",{onClick:this.flipCard,children:"Flip"}),Object(n.jsx)("span",{children:" "}),Object(n.jsx)("button",{onClick:this.goToPreviousCard,children:"Previous"}),Object(n.jsx)("span",{children:" "}),Object(n.jsx)("button",{onClick:this.goToNextCard,children:"Next"}),this.state.allCards.length&&Object(n.jsx)(K,{style:{display:"center"},html:this.displayCard()})]})]})}}]),a}(r.Component),Q=function(e){Object(Y.a)(a,e);var t=Object(q.a)(a);function a(e){var n;return Object(R.a)(this,a),(n=t.call(this,e)).componentDidMount=function(){n.fetchTemplates()},n.fetchTemplates=Object(x.a)(b.a.mark((function e(){var t;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N();case 2:t=e.sent,n.setState({templates:t});case 4:case"end":return e.stop()}}),e)}))),n.onTemplateChange=function(e){for(var t=Number(e.target.value),a=n.getFields(n.state.templates[t]),r={},s=0;s<a.length;s++){var c=a[s];r[c]=n.state.cardData[c]}n.setState({cardData:r,chosenTemplate:t})},n.handleChange=function(e){n.setState({cardData:Object(p.a)(Object(p.a)({},n.state.cardData),{},Object(j.a)({},e.target.name,e.target.value))})},n.createANewCard=function(){var e=Object(x.a)(b.a.mark((function e(t){var a,r;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=JSON.stringify(n.state.cardData),r=n.state.templates[n.state.chosenTemplate],e.next=4,F(r.id,a);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),n.state={chosenTemplate:0,templates:[],cardData:{}},n}return Object(G.a)(a,[{key:"getCardFrontHtml",value:function(){var e=this.state.templates[this.state.chosenTemplate];return e?this.getCardSideHtml(e.front):""}},{key:"getCardBackHtml",value:function(){var e=this.state.templates[this.state.chosenTemplate];return e?this.getCardSideHtml(e.back):""}},{key:"getCardSideHtml",value:function(e){for(var t=Object.keys(this.state.cardData),a=0;a<t.length;a++){var n=t[a],r=this.state.cardData[n],s="%%".concat(n,"%%");e=e.replace(new RegExp(s,"g"),r||s)}return e}},{key:"getFields",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.state.templates[this.state.chosenTemplate];if(!e)return[];var t={};return(e.front+e.back).match(new RegExp("%%([a-zA-Z_ 0-9]+)%%","g")).forEach((function(e){var a=e.substring(2,e.length-2);t[a]=!0})),Object.keys(t)}},{key:"render",value:function(){var e=this,t=this.getFields();return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(l,{}),Object(n.jsxs)("div",{children:[Object(n.jsx)("h1",{id:"CAC",children:"Create A New Cards"}),this.state.templates.length>0?Object(n.jsx)("select",{name:"cardTemplate",value:this.state.chosenTemplate,onChange:this.onTemplateChange,children:this.state.templates.map((function(e,t){return Object(n.jsx)("option",{value:t,children:e.description},t)}))}):Object(n.jsx)("span",{children:"make a template!"}),Object(n.jsx)("br",{}),t.map((function(t,a){return Object(n.jsx)("input",{name:t,value:e.state.cardData[t]||"",placeholder:t,onChange:e.handleChange},a)})),Object(n.jsx)("span",{children:" "}),Object(n.jsx)("button",{onClick:this.createANewCard,children:"Create"}),Object(n.jsx)("span",{children:" "}),Object(n.jsx)(K,{html:this.getCardFrontHtml()}),Object(n.jsx)(K,{html:this.getCardBackHtml()})]})]})}}]),a}(s.a.Component);var X=function(){var e=Object(r.useState)({description:"",front:"<div>what is the capital of %%STATE%% ?</div>",back:"<div>%%STATE_CAPITOL%%</div>"}),t=Object(O.a)(e,2),a=t[0],s=t[1],c=function(){var e=Object(x.a)(b.a.mark((function e(t){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,U(a.description,a.front,a.back);case 4:e.next=9;break;case 6:e.prev=6,e.t0=e.catch(1),console.log(e.t0);case 9:case"end":return e.stop()}}),e,null,[[1,6]])})));return function(t){return e.apply(this,arguments)}}(),i=function(e){s(Object(p.a)(Object(p.a)({},a),{},Object(j.a)({},e.target.name,e.target.value)))};return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(l,{}),Object(n.jsx)("h1",{id:"CANCT",children:"Create A NEW Card Tempelate"}),Object(n.jsxs)("form",{onSubmit:c,children:[Object(n.jsx)("p",{children:"Please eneter a descrption for this card template: "}),Object(n.jsx)("br",{}),Object(n.jsx)("input",{type:"text",name:"description",value:a.description,onChange:i}),Object(n.jsx)("span",{}),Object(n.jsx)("br",{}),Object(n.jsx)("br",{}),Object(n.jsx)("textarea",{id:"Input HTML-F",name:"front",rows:"10",cols:"80",value:a.front,onChange:i}),Object(n.jsx)("span",{children:" "})," ",Object(n.jsx)("span",{children:" "}),Object(n.jsx)("textarea",{id:"Input HTML-B",name:"back",rows:"10",cols:"80",value:a.back,onChange:i}),Object(n.jsx)("br",{}),Object(n.jsx)("input",{type:"submit",value:"Submit"}),Object(n.jsx)(K,{html:a.front}),Object(n.jsx)("br",{}),Object(n.jsx)(K,{html:a.back})]})]})};var $=function(){return Object(n.jsx)(n.Fragment,{children:Object(n.jsx)(o.a,{children:Object(n.jsxs)(B.c,{children:[Object(n.jsx)(B.a,{exact:!0,path:"/ui",component:d}),Object(n.jsx)(z,{exact:!0,path:"/ui/Login",component:z}),Object(n.jsx)(J,{exact:!0,path:"/ui/NewUser",component:J}),Object(n.jsx)(_,{exact:!0,path:"/ui/UserError",component:_}),Object(n.jsx)(W,{exact:!0,path:"/ui/UserHome",component:W}),Object(n.jsx)(Z,{exact:!0,path:"/ui/ViewCards",component:Z}),Object(n.jsx)(X,{exact:!0,path:"/ui/CreateTemp",component:X}),Object(n.jsx)(Q,{exact:!0,path:"/ui/CreateCards",component:Q})]})})})},ee=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,71)).then((function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,s=t.getLCP,c=t.getTTFB;a(e),n(e),r(e),s(e),c(e)}))};i.a.render(Object(n.jsx)(s.a.StrictMode,{children:Object(n.jsx)($,{})}),document.getElementById("root")),ee()}},[[70,1,2]]]);
//# sourceMappingURL=main.ab53f326.chunk.js.map