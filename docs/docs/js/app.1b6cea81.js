(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[1],{0:function(e,t,a){e.exports=a("7d3e")},"3e4a":function(e,t){},6100:function(e,t){},7054:function(e,t,a){},"7b72":function(e,t){},"7d3e":function(e,t,a){"use strict";a.r(t);var n={};a.r(n),a.d(n,"setLoginStatus",(function(){return $})),a.d(n,"setUserInfo",(function(){return _}));var o={};a.r(o),a.d(o,"getAuth",(function(){return K})),a.d(o,"register",(function(){return W})),a.d(o,"login",(function(){return X})),a.d(o,"logout",(function(){return Y}));var i={};a.r(i),a.d(i,"setRawReportData",(function(){return ae}));var s={};a.r(s),a.d(s,"getRawReportData",(function(){return se})),a.d(s,"submit",(function(){return re}));var r=a("52b5"),c=a.n(r),u=(a("67c8"),a("c1c3"),a("549c")),l=a.n(u),m=(a("88ae"),a("2233"),a("2f72"),a("c1d7"),a("7054"),a("e832")),p=a("b661"),d=a("8c49"),f=a("f846"),g=a("f624"),h=a("8738"),v=a("ddc7"),b=a("505d"),w=a("66cf"),x=a("309f"),y=a("ef9c"),q=a("5ce7"),I=a("0798"),L=a("19dc"),k=a("d6e3"),Q=a("dc01"),S=a("3548"),C=a("517f"),P=a("5563"),R=a("df9c"),U=a("c545");m["a"].use(f["a"],{config:{},lang:p["a"],iconSet:d["a"],components:{QLayout:g["a"],QHeader:h["a"],QPageContainer:v["a"],QPage:b["a"],QToolbar:w["a"],QToolbarTitle:x["a"],QBtn:y["a"],QCard:q["a"],QImg:I["a"],QIcon:L["a"],QAvatar:k["a"],QSpace:Q["a"],QForm:S["a"],QCarousel:C["a"],QCarouselControl:P["a"],QCarouselSlide:R["a"]},plugins:{Notify:U["a"]}});var M=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"q-app"}},[a("router-view")],1)},N=[],A={name:"App"},j=A,D=a("a6c2"),H=Object(D["a"])(j,M,N,!1,null,null,null),B=H.exports,E=a("94ea"),T={loggedIn:!1,admin:!1,user:{},userSaves:[]},V=a("c1f1");function $(e,t){e.loggedIn=t,t||(e.admin=!1),t&&U["a"].create({message:"Successfully Logged In",type:"positive",position:"top"})}function _(e,t){t.admin&&e.loggedIn&&(e.admin=!0),e.user=t}a("a0c4"),a("e9de");var J=a("7338"),F=a.n(J),O=!window.location.host.includes("localhost"),z=O?"//landingsquared.herokuapp.com/account":"//localhost:3000/account",G=F.a.create({baseURL:z,timeout:4e3,withCredentials:!0});function K(e){var t=e.commit;e.dispatch;G("authenticate").then((function(e){null==e.data.data?t("setLoginStatus",!1):null!==e.data.data._id?(t("setLoginStatus",!0),t("setUserInfo",e.data.data)):t("setLoginStatus",!1)})).catch((function(e){}))}function W(e,t){var a=e.commit;G.post("register",t).then((function(e){a("setLoginStatus",!0),a("setUserInfo",e.data.data),U["a"].create({message:"Successfully created account",type:"positive",color:"positive",textColor:"white",position:"top"})})).catch((function(e){U["a"].create({message:"Something went wrong, please try again",type:"red",color:"negative",textColor:"white",position:"top"})}))}function X(e,t){var a=e.commit;e.dispatch;G.post("login",t).then((function(e){a("setLoginStatus",!0),a("setUserInfo",e.data)})).catch((function(e){U["a"].create({message:"Incorrect username or password",type:"red",color:"red",textColor:"white",position:"top"}),a("setLoginStatus",!1)}))}function Y(e){var t=e.commit;e.dispatch;G.delete("logout").then((function(e){t("setLoginStatus",!1),U["a"].create({message:e.data.message,type:"primary",color:"primary",textColor:"white",position:"top"})})).catch((function(e){}))}var Z={namespaced:!0,state:T,getters:V,mutations:n,actions:o},ee=function(){return{reports:[]}},te=a("7b72");function ae(e,t){e.reports=t}var ne=!window.location.host.includes("localhost"),oe=ne?"//landingsquared.herokuapp.com/api/submissions":"//localhost:3000/api/submissions",ie=F.a.create({baseURL:oe,timeout:4e3,withCredentials:!0});function se(e){var t=e.commit;ie.get("").then((function(e){t("setRawReportData",e.data)})).catch((function(e){console.err("Error getting reports",e)}))}function re(e,t){e.commit;ie.post("",t).then((function(e){U["a"].create({message:"Successfully sent message",type:"positive",color:"positive",textColor:"white",position:"top"})})).catch((function(e){U["a"].create({message:"Error submitting message",type:"red",color:"red",textColor:"white",position:"top"})}))}var ce={namespaced:!0,state:ee,getters:te,mutations:i,actions:s},ue=function(){return{calloutIcons:["img:statics/callouts/ad-solid.svg","img:statics/callouts/bullhorn-solid.svg","img:statics/callouts/search-dollar-solid.svg","img:statics/callouts/funnel-dollar-solid.svg"],reviews:[{src:"img:statics/avatar.jpg",id:1},{src:"img:statics/avatar2.jpg",id:2},{src:"img:statics/avatar2.jpg",id:3}],questionsIpsum:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vehicula consectetur quam, a elementum orci aliquet ut. Proin vitae sem enim. Integer sodas facilisis neque, ut egestas odio.",imgHeader:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vehicula consectetur quam, a elementum orci aliquet ut. Proin vitae sem enim. Integer sodales facilisis neque, ut egestas odio porttitor sit amet.",calloutBody:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vehicula consectetur quam, a elementum orci aliquet ut. Proin vitae sem enim. Integer sodales facilisis neque, ut egestas odio porttitor sit amet. Nulla tempor massa et suscipit feugiat. Nam ac nisl velit. Ut odio quam, malesuada ultricies vestibulum ac, ullamcorper eget magna. In vitae felis faucibus.",shortHeader:"Lorem ipsum dolor sit amet",shortestHeader:"Lorem ipsum dolor",customerIpsum:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vehicula consectetur quam, a elementum orci aliquet ut. Proin vitae sem enim. Integer sodales facilisis neque.",headerIpsum:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vehicula consectetur quam.",bodyIpsum:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vehicula consectetur quam, a elementum orci aliquet ut. Proin vitae sem enim. Integer sodales facilisis neque, ut egestas odio porttitor sit amet. Nulla tempor massa et suscipit feugiat. Nam ac nisl velit. Ut odio quam, malesuada ultricies vestibulum ac, ullamcorper eget magna. In vitae felis faucibus, facilisis ante eu, lacinia metus. Duis sit amet nisl enim. Nulla ut sollicitudin lorem. "}},le=a("9de9"),me=a("3e4a"),pe=a("6100"),de={namespaced:!0,state:ue,getters:le,mutations:me,actions:pe};m["a"].use(E["a"]);var fe=function(){var e=new E["a"].Store({modules:{auth:Z,submissions:ce,ipsum:de},strict:!1});return e},ge=a("4af9"),he=a("0100"),ve=a.n(he),be=[{path:"/",component:function(){return Promise.all([a.e(0),a.e(4)]).then(a.bind(null,"eeac"))},children:[{path:"",component:function(){return Promise.all([a.e(0),a.e(5)]).then(a.bind(null,"01be"))}},{path:"admin",component:function(){return Promise.all([a.e(0),a.e(3)]).then(a.bind(null,"10e3"))}},{path:"admin/reports",component:function(){return Promise.all([a.e(0),a.e(7)]).then(a.bind(null,"9e48"))}}]}];be.push({path:"*",component:function(){return Promise.all([a.e(0),a.e(6)]).then(a.bind(null,"7cb4"))}});var we=be;m["a"].use(ge["a"]),m["a"].use(ve.a);var xe=function(){var e=new ge["a"]({scrollBehavior:function(){return{x:0,y:0}},routes:we,mode:"hash",base:""});return e},ye=function(){return qe.apply(this,arguments)};function qe(){return qe=l()(c.a.mark((function e(){var t,a,n;return c.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if("function"!==typeof fe){e.next=6;break}return e.next=3,fe({Vue:m["a"]});case 3:e.t0=e.sent,e.next=7;break;case 6:e.t0=fe;case 7:if(t=e.t0,"function"!==typeof xe){e.next=14;break}return e.next=11,xe({Vue:m["a"],store:t});case 11:e.t1=e.sent,e.next=15;break;case 14:e.t1=xe;case 15:return a=e.t1,t.$router=a,n={el:"#q-app",router:a,store:t,render:function(e){return e(B)}},e.abrupt("return",{app:n,store:t,router:a});case 19:case"end":return e.stop()}}),e)}))),qe.apply(this,arguments)}var Ie=a("2726"),Le={failed:"Action failed",success:"Action was successful"},ke={"en-us":Le};m["a"].use(Ie["a"]);var Qe=new Ie["a"]({locale:"en-us",fallbackLocale:"en-us",messages:ke}),Se=function(e){var t=e.app;t.i18n=Qe};function Ce(){return Pe.apply(this,arguments)}function Pe(){return Pe=l()(c.a.mark((function e(){var t,a,n,o,i,s,r,u,l;return c.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,ye();case 2:t=e.sent,a=t.app,n=t.store,o=t.router,i=!0,s=function(e){i=!1,window.location.href=e},r=window.location.href.replace(window.location.origin,""),u=[Se,void 0],l=0;case 11:if(!(!0===i&&l<u.length)){e.next=29;break}if("function"===typeof u[l]){e.next=14;break}return e.abrupt("continue",26);case 14:return e.prev=14,e.next=17,u[l]({app:a,router:o,store:n,Vue:m["a"],ssrContext:null,redirect:s,urlPath:r});case 17:e.next=26;break;case 19:if(e.prev=19,e.t0=e["catch"](14),!e.t0||!e.t0.url){e.next=24;break}return window.location.href=e.t0.url,e.abrupt("return");case 24:return console.error("[Quasar] boot error:",e.t0),e.abrupt("return");case 26:l++,e.next=11;break;case 29:if(!1!==i){e.next=31;break}return e.abrupt("return");case 31:new m["a"](a);case 32:case"end":return e.stop()}}),e,null,[[14,19]])}))),Pe.apply(this,arguments)}m["a"].prototype.$axios=F.a,Ce()},"9de9":function(e,t){},c1f1:function(e,t){}},[[0,2,0]]]);