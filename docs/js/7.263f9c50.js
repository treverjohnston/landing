(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[7],{"9e48":function(n,s,t){"use strict";t.r(s);var e=function(){var n=this,s=n.$createElement,t=n._self._c||s;return t("q-page",[t("q-list",{staticClass:"row",attrs:{bordered:"",separator:""}},n._l(n.submissions,(function(s){return t("q-expansion-item",{staticClass:"col-xs-12",attrs:{"expand-separator":"",icon:"mail",label:s.name,caption:s.email}},[t("q-card",[t("q-card-section",[t("div",[n._v("\n                        Name: "+n._s(s.name)+"\n                    ")]),t("div",[n._v("\n                        Email: "+n._s(s.email)+"\n                    ")]),t("div",[n._v("\n                        Phone: "+n._s(s.phone)+"\n                    ")])]),t("q-card-section",[t("div",[n._v("\n                        Message:\n                    ")]),t("div",[n._v("\n                        "+n._s(s.body)+"\n                    ")])])],1)],1)})),1)],1)},a=[],i=(t("dcba"),{name:"Reports",data:function(){return{}},computed:{loggedIn:function(){return this.$store.state.auth.loggedIn},submissions:function(){return this.$store.state.submissions.reports}},mounted:function(){this.$store.dispatch("submissions/getRawReportData")},methods:{}}),o=i,r=t("a6c2"),c=t("63c1"),d=t.n(c),u=t("505d"),l=t("692f"),p=t("953d"),m=t("5ce7"),v=t("7006"),_=Object(r["a"])(o,e,a,!1,null,null,null);s["default"]=_.exports;d()(_,"components",{QPage:u["a"],QList:l["a"],QExpansionItem:p["a"],QCard:m["a"],QCardSection:v["a"]})}}]);