(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[7],{"9e48":function(t,n,s){"use strict";s.r(n);var e=function(){var t=this,n=t.$createElement,s=t._self._c||n;return s("q-page",[s("div",{staticClass:"row justify-center text-black"},t._l(t.submissions,(function(n){return s("div",[t._v("\n            "+t._s(n)+"\n        ")])})),0)])},i=[],o=(s("dcba"),{name:"Admin",data:function(){return{}},computed:{loggedIn:function(){return this.$store.state.auth.loggedIn},submissions:function(){return this.$store.state.submissions.reports}},mounted:function(){this.loggedIn||this.$router.push("/admin"),this.$store.dispatch("submissions/getRawReportData")},methods:{}}),u=o,a=s("a6c2"),r=s("63c1"),c=s.n(r),d=s("505d"),l=Object(a["a"])(u,e,i,!1,null,null,null);n["default"]=l.exports;c()(l,"components",{QPage:d["a"]})}}]);