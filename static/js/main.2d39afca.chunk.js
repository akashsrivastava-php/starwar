(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{38:function(e,a,t){e.exports=t(76)},43:function(e,a,t){},65:function(e,a,t){},74:function(e,a,t){},76:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),s=t(10),c=t.n(s),o=(t(43),t(12)),l=t(13),i=t(15),m=t(14),u=t(16),d=t(9),p=t(34),h=t(11),g=t(7),f=t.n(g),v=t(17),E=t(33),w=t.n(E),N=t(8),b=t.n(N),y=t(22),k=t.n(y),j=function(e){var a=e.username,t=e.password;return k.a.get("".concat("https://swapi.co/api/","people/?search=").concat(encodeURI(a))).then(function(e){if(1==e.data.count){var n=e.data.results;if(n[0].name==a&&n[0].birth_year==t){var r="Luke Skywalker"==n[0].name;return b.a.save("Luke",r,{path:"/"}),b.a.save("LoggedIn",!0,{path:"/"}),{status:!0,msg:"You are logged in Starwars!"}}return{status:!1,msg:"Invalid username or password!"}}return{status:!1,msg:"User does not exists!"}}).catch(function(e){return{status:!1,msg:"Something went wrong!"}})},L=function(){return b.a.remove("Luke",{path:"/"}),b.a.remove("LoggedIn",{path:"/"}),{status:!0,msg:"User logged out!"}},O=function(e){return""!=e?k.a.get("".concat("https://swapi.co/api/","planets/?search=").concat(encodeURI(e))).then(function(e){var a;e.data.count>0?a=e.data.results.sort(function(e,a){var t=isNaN(parseInt(e.population))?0:parseInt(e.population);return(isNaN(parseInt(a.population))?0:parseInt(a.population))-t}):a=[];return{status:!0,msg:a}}).catch(function(e){return{status:!1,msg:"Something went wrong!"}}):{status:!0,msg:[]}},x=(t(65),function(e){function a(e){var t;return Object(o.a)(this,a),(t=Object(i.a)(this,Object(m.a)(a).call(this,e))).setVal=function(e){var a={};a[e.target.name]=e.target.value,t.setState(a)},t.handelLogin=Object(v.a)(f.a.mark(function e(){var a,n,r,s,c;return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(a=t.state,n=a.username,r=a.password,s=t.props.history,!t.validator.allValid()){e.next=10;break}return t.setState({loading:!0}),e.next=6,j({username:n,password:r});case 6:(c=e.sent).status?(d.a.success(c.msg),s.push("/home"),t.setState({loading:""})):(d.a.error(c.msg),t.setState({loading:""})),e.next=12;break;case 10:t.validator.showMessages(),t.forceUpdate();case 12:case"end":return e.stop()}},e)})),t.state={username:"",password:"",loading:""},t.validator=new w.a,t}return Object(u.a)(a,e),Object(l.a)(a,[{key:"componentDidMount",value:function(){"true"==b.a.load("LoggedIn")&&this.props.history.push("/home")}},{key:"render",value:function(){var e=this.state,a=e.username,t=e.password,n=e.loading;return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row justify-content-center"},r.a.createElement("div",{className:"col-md-8"},r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-header"},"Login"),r.a.createElement("div",{className:"card-body"},r.a.createElement("div",{className:"form-group row"},r.a.createElement("label",{htmlFor:"email",className:"col-md-4 col-form-label text-md-right"},"User Name"),r.a.createElement("div",{className:"col-md-6"},r.a.createElement("input",{ref:"email",type:"email",name:"username",onChange:this.setVal,autoComplete:"off"}),r.a.createElement("p",{className:"text-danger"},this.validator.message("User Name",a,"required")))),r.a.createElement("div",{className:"form-group row"},r.a.createElement("label",{htmlFor:"password",className:"col-md-4 col-form-label text-md-right"},"Password"),r.a.createElement("div",{className:"col-md-6"},r.a.createElement("input",{ref:"password",type:"password",name:"password",onChange:this.setVal}),r.a.createElement("p",{className:"text-danger"},this.validator.message("Password",t,"required")))),r.a.createElement("div",{className:"form-group row mb-0"},r.a.createElement("div",{className:"col-md-8 offset-md-4"},r.a.createElement("button",{type:"submit",className:"btn btn-primary",disabled:n,onClick:this.handelLogin},n?"Processing...":"Login"))))))))}}]),a}(n.Component)),S=t(37),I=function(e){function a(e){var t;return Object(o.a)(this,a),(t=Object(i.a)(this,Object(m.a)(a).call(this,e))).handelLogout=Object(v.a)(f.a.mark(function e(){var a;return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,L();case 2:(a=e.sent).status&&(d.a.success(a.msg),t.props.history.push("/"));case 4:case"end":return e.stop()}},e)})),t.handelSearch=function(){var e=Object(v.a)(f.a.mark(function e(a){var n,r;return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=a.target.value,t.setState({isLoading:!0}),e.next=4,O(n);case 4:(r=e.sent).status?t.setState({planets:r.msg,isLoading:!1}):(t.setState({planets:[],isLoading:!1}),d.a.error(r.msg));case 6:case"end":return e.stop()}},e)}));return function(a){return e.apply(this,arguments)}}(),t.getPlanet=function(){var e=Object(v.a)(f.a.mark(function e(a){var n;return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.refs.search.value="",t.setState({planets:[],isLoading:!0}),e.next=4,O(a);case 4:(n=e.sent).status?t.setState({specificPlanet:n.msg[0],isLoading:!1}):d.a.error(n.msg);case 6:case"end":return e.stop()}},e)}));return function(a){return e.apply(this,arguments)}}(),t.state={planets:[],specificPlanet:{},isLoading:!1},t}return Object(u.a)(a,e),Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=b.a.load("LoggedIn");void 0!=e&&"false"!=e||this.props.history.push("/")}},{key:"render",value:function(){var e=this,a=this.state,t=a.planets,n=a.specificPlanet,s=a.isLoading;return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row justify-content-center"},r.a.createElement("div",{className:"col-md-8"},r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-header"},r.a.createElement("p",{className:"float-left"},"Star War"),r.a.createElement("a",{href:"#/",onClick:function(){return e.handelLogout()},className:"float-right"},"Logout")),r.a.createElement("div",{className:"card-body"},r.a.createElement("div",{className:"form-group row"},r.a.createElement("div",{className:"col-md-12"},r.a.createElement("div",{className:"form-group col-md-12 mb-2"},r.a.createElement("input",{type:"text",className:"form-control w-100",ref:"search",onChange:function(a){return e.handelSearch(a)},placeholder:"Search Planet..."}))),t.length>0&&r.a.createElement("div",{className:"col-md-12"},r.a.createElement("ul",{className:"list-group",style:{padding:"15px"}},t.map(function(a,t){return r.a.createElement("li",{style:{cursor:"pointer"},onClick:function(){return e.getPlanet(a.name)},key:t,className:"list-group-item"},a.name)}))),s&&r.a.createElement("div",{className:"col-md-12 text-center"},r.a.createElement("img",{src:"/loader.gif",width:"120"}))))),n&&n.name&&r.a.createElement("div",{className:"card mt-5"},r.a.createElement("div",{className:"card-header"},r.a.createElement("p",{className:"float-left"},"Planet Details")),r.a.createElement("div",{className:"card-body"},r.a.createElement("table",{className:"table"},r.a.createElement("tbody",null,Object.entries(n).map(function(e,a){var t=Object(S.a)(e,2),n=t[0],s=t[1];return r.a.createElement("tr",{key:a},r.a.createElement("td",null,n),r.a.createElement("td",null,s))}))))))))}}]),a}(n.Component);t(74),t(75);d.a.configure();var C=function(e){function a(){return Object(o.a)(this,a),Object(i.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(l.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(p.a,null,r.a.createElement(h.c,null,r.a.createElement(h.a,{exact:!0,path:"/",component:x}),r.a.createElement(h.a,{path:"/home",component:I}))))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(C,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[38,1,2]]]);
//# sourceMappingURL=main.2d39afca.chunk.js.map