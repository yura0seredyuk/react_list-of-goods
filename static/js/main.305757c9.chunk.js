(this["webpackJsonpreact_list-of-goods"]=this["webpackJsonpreact_list-of-goods"]||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(2),o=n.n(l),c=n(5),i=n(3),s=n(4),u=n(7),m=n(6),h=(n(13),["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"].map((function(e,t){return{name:e,id:t+1,length:e.length}}))),p=function(e){Object(u.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,r=new Array(a),l=0;l<a;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={active:!1,isReversed:!1,sortBy:"id",defaultLength:1},e.showList=function(){e.setState((function(e){return{active:!e.active}}))},e.reverse=function(){e.setState((function(e){return{isReversed:!e.isReversed}}))},e.reset=function(){e.setState({isReversed:!1,sortBy:"id",defaultLength:1})},e.limit=function(t){var n=t.target;e.setState({defaultLength:n.value})},e.sortAlphabetically=function(){e.setState({sortBy:"name"})},e.sortByLength=function(){e.setState({sortBy:"length"})},e}return Object(s.a)(n,[{key:"render",value:function(){var e=this.state,t=e.active,n=e.isReversed,a=e.sortBy,l=e.defaultLength,o=Object(c.a)(h).filter((function(e){return e.length>=l}));return o.sort((function(e,t){switch(a){case"id":case"length":return e[a]-t[a];case"name":return e[a].localeCompare(t[a]);default:return 0}})),n&&o.reverse(),r.a.createElement("div",{className:"App"},r.a.createElement("h1",null,"Goods"),r.a.createElement("button",{type:"button",onClick:this.showList},"Show list"),r.a.createElement("div",{className:"".concat(t?"":"active")},r.a.createElement("select",{value:l,onChange:this.limit},r.a.createElement("option",null,"1"),r.a.createElement("option",null,"2"),r.a.createElement("option",null,"3"),r.a.createElement("option",null,"4"),r.a.createElement("option",null,"5"),r.a.createElement("option",null,"6"),r.a.createElement("option",null,"7"),r.a.createElement("option",null,"8"),r.a.createElement("option",null,"9"),r.a.createElement("option",null,"10")),r.a.createElement("button",{type:"button",onClick:this.reverse},"Reverse"),r.a.createElement("button",{type:"button",onClick:this.sortAlphabetically},"Sort alphabetically"),r.a.createElement("button",{type:"button",onClick:this.sortByLength},"Sort by length"),r.a.createElement("button",{type:"button",onClick:this.reset},"Reset")),r.a.createElement("ul",{className:"".concat(t?"":"active")},o.map((function(e){return r.a.createElement("li",{key:e.id},e.name)}))))}}]),n}(r.a.Component);o.a.render(r.a.createElement(p,null),document.getElementById("root"))},8:function(e,t,n){e.exports=n(14)}},[[8,1,2]]]);
//# sourceMappingURL=main.305757c9.chunk.js.map