(this["webpackJsonpreact_dynamic-list-of-goods"]=this["webpackJsonpreact_dynamic-list-of-goods"]||[]).push([[0],{14:function(t,e,n){},16:function(t,e,n){"use strict";n.r(e);var o=n(0),r=n.n(o),a=n(3),c=n.n(a),l=(n(14),n(4)),u=n(5),i=n(8),s=n(7),d=n(1),f=n.n(d),h=n(6),p=function(){var t=Object(h.a)(f.a.mark((function t(){var e;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("http://localhost:3000/goods.json");case 2:return e=t.sent,t.abrupt("return",e.json());case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),m=function(t){Object(i.a)(n,t);var e=Object(s.a)(n);function n(){var t;Object(l.a)(this,n);for(var o=arguments.length,r=new Array(o),a=0;a<o;a++)r[a]=arguments[a];return(t=e.call.apply(e,[this].concat(r))).state={goods:[]},t.handleClick=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1/0,n=arguments.length>1?arguments[1]:void 0;p().then((function(o){var r=o.filter((function(t,o){return o<e&&t.color===(n||t.color)}));t.setState({goods:r})}))},t}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var t=this;p().then((function(e){t.setState({goods:e})}))}},{key:"render",value:function(){var t=this,e=this.state.goods;return r.a.createElement("div",null,r.a.createElement("ul",null,e.map((function(t){var e={color:t.color};return r.a.createElement("li",{key:t.id,style:e},t.name)}))),r.a.createElement("button",{type:"button",onClick:function(){return t.handleClick()}},"Load All goods"),r.a.createElement("button",{type:"button",onClick:function(){return t.handleClick(5)}},"Load 5 first goods"),r.a.createElement("button",{type:"button",onClick:function(){return t.handleClick(1/0,"red")}},"Load red goods"))}}]),n}(r.a.Component),v=function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"List of Goods"),r.a.createElement(m,null))};c.a.render(r.a.createElement(v,null),document.getElementById("root"))},9:function(t,e,n){t.exports=n(16)}},[[9,1,2]]]);
//# sourceMappingURL=main.370406aa.chunk.js.map