(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{47:function(e,t,a){e.exports=a(88)},52:function(e,t,a){},56:function(e,t,a){},57:function(e,t,a){},69:function(e,t,a){e.exports=a.p+"static/media/pugs.9de2da9b.png"},70:function(e,t,a){e.exports=a.p+"static/media/pugs.9de2da9b.png"},88:function(e,t,a){"use strict";a.r(t);var n=a(2),r=a.n(n),c=a(39),l=a.n(c),o=(a(52),a(53),a(54),a(55),a(14)),i=a(15),s=a(17),m=a(16),u=a(18),p=a(22),d=a(20),h=(a(56),a(57),a(3)),g=(a(69),function(e){return r.a.createElement(h.b,{className:"mx-auto marginz animated fadeInDown slow wow"},r.a.createElement(h.d,{className:"form-header gradient-teal rounded p-3"},r.a.createElement(h.i,{className:"justify-content-start"},r.a.createElement(h.e,{xs:6,className:"align-self-center"},r.a.createElement("i",{className:"far fa-2x fa-sign-in left mr-3 ml-3"})),r.a.createElement(h.e,{xs:6,className:"align-self-center"},r.a.createElement("h3",{className:"my-3"},"Sign-in")))),r.a.createElement(h.c,null,r.a.createElement("form",{onSubmit:e.getWeather},r.a.createElement("div",{className:"grey-text"},r.a.createElement(h.g,{label:"Type your email",icon:"envelope",group:!0,type:"email",validate:!0,error:"wrong",success:"right"}),r.a.createElement(h.g,{label:"Type your password",icon:"lock",group:!0,type:"password",validate:!0})),r.a.createElement("div",{className:"text-center mt-4"},r.a.createElement(h.a,{color:"light-blue",className:"mb-3",type:"submit"},"Login"))),r.a.createElement(h.h,null,r.a.createElement("div",{className:"font-weight-light"},r.a.createElement("a",{href:"/register"},r.a.createElement("p",null,"Not a member? Sign Up"))))))}),f=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(h.f,null,r.a.createElement(h.i,null,r.a.createElement(h.e,{md:8,sm:12,className:"text-left mx-auto"},r.a.createElement(g,{className:"text-left mx-auto"}))))}}]),t}(r.a.Component),E=a(45),w=(a(70),function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(s.a)(this,Object(m.a)(t).call(this))).handleInput=function(t){return function(a){var n=a.target.value;e.setState(Object(E.a)({},t,n))}},e.sendForm=function(){fetch("/weather",{method:"POST",body:JSON.stringify({username:e.state.username,password:e.state.password,email:e.state.email,phonenumber:e.state.phonenumber,city:e.state.city,imageurl:e.state.imageurl,state:e.state.state,zipcode:e.state.zipcode})}).then(function(e){return e.json()}).catch(function(e){return console.log(e)})},e.state={username:"",password:"",email:"",emailconfirm:"",phonenumber:"",city:"",imageurl:"",state:"",zipcode:""},e}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(h.f,null,r.a.createElement(h.i,{className:" mx-auto"},r.a.createElement(h.e,{md:12,sm:12,className:"text-left mx-auto"},r.a.createElement(h.b,{className:"mx-auto mt-2 animated fadeInUp  wow"},r.a.createElement(h.d,{className:"form-header gradient-teal rounded p-3"},r.a.createElement(h.i,{className:"justify-content-start"},r.a.createElement(h.e,{xs:6,className:"align-self-center"},r.a.createElement("i",{className:"far fa-2x fa-sign-in left mr-3 ml-3"})),r.a.createElement(h.e,{xs:6,className:"align-self-center"},r.a.createElement("h3",{className:"my-3"},"Sign-Up")))),r.a.createElement(h.c,null,r.a.createElement("form",null,r.a.createElement("div",{className:"grey-text"},r.a.createElement(h.g,{label:"Username",icon:"user",group:!0,type:"text",validate:!0,error:"wrong",success:"right",name:"name",value:this.state.username,onInput:this.handleInput}),r.a.createElement(h.g,{label:"Your password",icon:"lock",group:!0,type:"password",name:"password",value:this.state.password,onInput:this.handleInput}),r.a.createElement(h.g,{label:"Your email",icon:"envelope",group:!0,type:"email",name:"email",value:this.state.email,onInput:this.handleInput}),r.a.createElement(h.g,{label:"Confirm your email",icon:"exclamation-triangle",group:!0,type:"text",validate:!0,error:"wrong",success:"right",name:"emailconfirm",value:this.state.emailconfirm,onInput:this.handleInput}),r.a.createElement(h.g,{label:"Your Phone Number",icon:"phone",group:!0,type:"tel",validate:!0,error:"wrong",success:"right",maxLength:"10",value:this.state.phonenumber,onInput:this.handleInput}),r.a.createElement(h.i,null,r.a.createElement(h.e,{md:4},r.a.createElement(h.g,{label:"City",icon:"city",group:!0,type:"text",validate:!0,error:"wrong",success:"right",name:"city",value:this.state.city,onInput:this.handleinput})),r.a.createElement(h.e,{md:4},r.a.createElement(h.g,{label:"State",icon:"compass",iconClass:"icon-class",group:!0,type:"text",validate:!0,error:"wrong",success:"right",name:"stateloc",value:this.state.stateloc,onInput:this.handleinput})),r.a.createElement(h.e,null,r.a.createElement(h.g,{label:"Zipcode",icon:"compass",iconClass:"icon-class",group:!0,type:"text",pattern:"[0-9-0-9-0-9]",maxLength:"5",validate:!0,error:"wrong",success:"right",name:"zipcode",value:this.state.zipcode,onInput:this.handleinput}))),r.a.createElement(h.g,{label:"Avatar Image URL",icon:"image",group:!0,name:"imageurl",value:this.state.imageurl,onChange:this.handleInput("imageurl")}),r.a.createElement("div",{className:"mx-auto text-center"},r.a.createElement("img",{alt:"",src:this.state.imageurl,className:"img-fluid img-circle "}))),r.a.createElement("div",{className:"text-center py-4 mt-3"},r.a.createElement(h.a,{color:"cyan",onClick:this.sendForm},"Submit"))),r.a.createElement(h.h,null,r.a.createElement("div",{className:"font-weight-light"},r.a.createElement("a",{href:"/"},r.a.createElement("p",null,"Already a member? Sign In")))))))))}}]),t}(n.Component)),v=a(46),b=a.n(v),y=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={zipcode:void 0,name:void 0,weathericon:void 0,temp:void 0},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this,t="http://api.openweathermap.org/data/2.5/weather?zip=".concat("55420","&appid=").concat("85fa4de20dcfbd962e68e36c4530c26d","&units=imperial");b.a.get(t).then(function(e){return e.data}).then(function(t){e.setState({weather:t,name:t.name,weathericon:"http://openweathermap.org/img/wn/".concat(t.weather[0].icon,"@2x.png"),temp:t.main.temp}),console.log(e.state.weathericon)})}},{key:"render",value:function(){return r.a.createElement(h.i,null,r.a.createElement(h.e,null,r.a.createElement(h.b,{className:"card-image z-depth-3",style:{maxWidth:"12em",maxHeight:"7em"}},r.a.createElement("div",{className:"text-black text-top d-flex flex-row flex-wrap py-2 m-2 align-items-start"},r.a.createElement("div",null,r.a.createElement("span",{style:{overflow:"wrap"}},this.state.name),r.a.createElement("img",{style:{width:"2em"},src:this.state.weathericon}),r.a.createElement("span",{style:{overflow:"wrap"}},this.state.temp))))))}}]),t}(n.Component),x=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"main"},r.a.createElement(p.a,null,r.a.createElement(d.a,{exact:!0,path:"/",component:function(){return r.a.createElement(f,null)}}),r.a.createElement(d.a,{exact:!0,path:"/weather",component:function(){return r.a.createElement(y,null)}}),r.a.createElement(d.a,{exact:!0,path:"/register",component:function(){return r.a.createElement(w,{className:"text-left mx-auto"})}}),r.a.createElement(d.a,{exact:!0,path:"/home",component:function(){return r.a.createElement("div",null,"Main Pugs Page")}}),r.a.createElement(d.a,{exact:!0,path:"/mypugs",component:function(){return r.a.createElement("div",null,"My Pugs Page")}}),r.a.createElement(d.a,{exact:!0,path:"/create",component:function(){return r.a.createElement("div",null,"Create a pug here")}}))))}}]),t}(n.Component),N=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function j(e){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}}).catch(function(e){console.error("Error during service worker registration:",e)})}l.a.render(r.a.createElement(x,null),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("",window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var e="".concat("","/service-worker.js");N?function(e){fetch(e).then(function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):j(e)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(e):j(e)})}}()}},[[47,1,2]]]);
//# sourceMappingURL=main.247e1ebb.chunk.js.map