(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0ddfa4"],{"844f":function(t,a,n){"use strict";n.r(a);var o=function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("div",[n("h2",[t._v("total")]),n("p",[t._v("访问服务器的次数为 "+t._s(t.total))])])},e=[],l={name:"Total",data:function(){return{total:0}},mounted:function(){this.getTotal()},methods:{getTotal:function(){var t=this;this.$axios.get("/base/api/total").then((function(a){0===a.data.errno&&(t.total=a.data.data.total)}))}}},i=l,u=n("2877"),s=Object(u["a"])(i,o,e,!1,null,null,null);a["default"]=s.exports}}]);
//# sourceMappingURL=chunk-2d0ddfa4.deb6f689.js.map