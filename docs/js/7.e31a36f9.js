(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[7],{"9e48":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-list",{staticClass:"row justify-center full-width",attrs:{bordered:"",separator:""}},[a("div",{staticClass:"col-xs-8  text-center"},[a("span",{staticClass:"text-h4"},[t._v("Submission Data")])]),a("div",{staticClass:"col-xs-8 q-mt-md q-mb-md text-center"},[a("q-btn",{on:{click:t.logout}},[t._v("Logout")])],1),t._l(t.submissions,(function(e){return a("q-expansion-item",{directives:[{name:"anime",rawName:"v-anime",value:{opacity:{value:["0","1"],duration:500,delay:300},translateY:{value:["200px","0px"],duration:1e3},easing:"linear"},expression:"{opacity: { value: ['0', '1'], duration: 500,delay:300 }, translateY: { value: ['200px', '0px'], duration: 1000},  easing: 'linear' }"}],key:e._id,staticClass:"col-xs-12",attrs:{"expand-separator":"",icon:"mail",label:e.email,caption:e.createdAt}},[a("q-card",[a("q-card-section",[a("div",[t._v("\n                    Name: "+t._s(e.name)+"\n                ")]),a("div",[t._v("\n                    Email: "+t._s(e.email)+"\n                ")]),a("div",[t._v("\n                    Phone: "+t._s(e.phone)+"\n                ")])]),a("q-card-section",[a("div",[t._v("\n                    Message:\n                ")]),a("div",[t._v("\n                    "+t._s(e.body)+"\n                ")])])],1)],1)}))],2)},n=[],i=(a("dcba"),{name:"Reports",data:function(){return{}},computed:{loggedIn:function(){return this.$store.state.auth.loggedIn},submissions:function(){return this.$store.state.submissions.reports}},mounted:function(){this.$store.dispatch("submissions/getRawReportData")},methods:{logout:function(){this.$store.dispatch("auth/logout"),this.$router.push("/admin")}}}),o=i,r=a("a6c2"),c=a("63c1"),u=a.n(c),l=a("692f"),d=a("ef9c"),p=a("953d"),m=a("5ce7"),v=a("7006"),h=Object(r["a"])(o,s,n,!1,null,null,null);e["default"]=h.exports;u()(h,"components",{QList:l["a"],QBtn:d["a"],QExpansionItem:p["a"],QCard:m["a"],QCardSection:v["a"]})}}]);