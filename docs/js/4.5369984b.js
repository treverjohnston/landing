(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[4],{"2da0":function(t,e,n){"use strict";var o=n("92e5"),a=n.n(o);a.a},"713b":function(t,e,n){"use strict";n.r(e);var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("q-layout",{attrs:{view:"lHh Lpr lFf"}},[n("q-page-container",[n("router-view")],1)],1)},a=[],u={name:"MainLayout",data:function(){return{}},mounted:function(){this.$store.dispatch("auth/getAuth")},methods:{logout:function(){this.$store.dispatch("auth/logout"),this.$router.push("/admin")}},computed:{loggedIn:function(){return this.$store.state.auth.loggedIn}}},i=u,r=(n("2da0"),n("2877")),s=n("eebe"),c=n.n(s),l=n("4d5a"),d=n("09e3"),h=Object(r["a"])(i,o,a,!1,null,null,null);e["default"]=h.exports;c()(h,"components",{QLayout:l["a"],QPageContainer:d["a"]})},"92e5":function(t,e,n){}}]);