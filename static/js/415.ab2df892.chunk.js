"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[415],{82:function(n,t,e){e.d(t,{Df:function(){return s},GC:function(){return p},M1:function(){return d},Pg:function(){return f},tx:function(){return l}});var r=e(861),a=e(757),c=e.n(a),o=e(44),i="20b16dffbdf7f9078d49a58427d91733",u="https://api.themoviedb.org/3/",s=function(){var n=(0,r.Z)(c().mark((function n(){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.ZP.get("".concat(u,"trending/movie/day?api_key=").concat(i,"&language=en-US"));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.ZP.get("".concat(u,"search/movie?api_key=").concat(i,"&query=").concat(t,"&language=en-US"));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.ZP.get("".concat(u,"movie/").concat(t,"?api_key=").concat(i,"&language=en-US"));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),d=function(){var n=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.ZP.get("".concat(u,"movie/").concat(t,"/credits?api_key=").concat(i,"&language=en-US"));case 2:return e=n.sent,n.abrupt("return",e.data.cast);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.ZP.get("".concat(u,"movie/").concat(t,"/reviews?api_key=").concat(i,"&language=en-US&page=1"));case 2:return e=n.sent,n.abrupt("return",e.data.results);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()},906:function(n,t,e){var r=e(689),a=e(791),c=e(498),o=e(184);t.Z=function(n){var t=n.movieList,e=(0,r.TH)();return(0,o.jsxs)("div",{children:[(0,o.jsx)(c.WZ,{children:t.map((function(n){var t=n.id,r=n.poster_path,a=n.title;return(0,o.jsx)(c.WF,{children:(0,o.jsxs)(c.rU,{to:{pathname:"/movies/".concat("".concat(t)),state:{from:{location:e,label:"Back to Home"}}},children:[(0,o.jsx)("img",{src:r?"https://image.tmdb.org/t/p/w500/".concat(r):"https://via.placeholder.com/200x300",alt:"",height:"300",width:"200"}),(0,o.jsx)("p",{children:a})]})},t)}))}),(0,o.jsx)(a.Suspense,{fallback:(0,o.jsx)("h1",{children:"Loading..."}),children:(0,o.jsx)(r.j3,{})})]})}},498:function(n,t,e){e.d(t,{WF:function(){return d},WZ:function(){return f},f0:function(){return l},fp:function(){return x},rU:function(){return g}});var r,a,c,o,i,u=e(168),s=e(444),p=e(731),f=s.ZP.ul(r||(r=(0,u.Z)(["\n  display: grid;\n    justify-content: center;\n    max-width: calc(100vw - 48px);\n    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));\n    gap: 30px;\n    padding: 0px;\n    list-style: none;\n    margin-left: auto;\n    margin-right: auto;\n"]))),d=s.ZP.li(a||(a=(0,u.Z)(["\n  border: 1px solid gray;\n  border-radius: 4px;\n  text-align: center;\n  padding: 10px 0px;\n  font-weight: 500;\n    font-size: 20px;\n\n  > a {\n    text-decoration: none;\n  }\n"]))),l=s.ZP.ul(c||(c=(0,u.Z)(["\n    list-style: none;\n    display: flex;\n        padding: 0px;    \n        margin-bottom: 30px;\n"]))),x=s.ZP.li(o||(o=(0,u.Z)(["\n    text-decoration: none;\n    color: black;\n    font-weight: 500;\n    font-size: 20px;\n    text-align: center;\n    padding: 5px;\n    border: 1px solid gray;\n    border-radius: 4px;\n    width: 100px;\n    margin-right: 20px;\n\n      &.active {\n    color: white;\n    background-color: orangered;\n  }\n"]))),g=(0,s.ZP)(p.OL)(i||(i=(0,u.Z)(["\n  text-decoration: none;\n  color: black;\n\n  &.active {\n    color: orangered;\n  }\n"])))},415:function(n,t,e){e.r(t),e.d(t,{default:function(){return f}});var r=e(861),a=e(885),c=e(757),o=e.n(c),i=e(791),u=e(82),s=e(906),p=e(184);function f(){var n=(0,i.useState)([]),t=(0,a.Z)(n,2),e=t[0],c=t[1];return(0,i.useEffect)((function(){var n=function(){var n=(0,r.Z)(o().mark((function n(){var t,e;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,u.Df)();case 2:t=n.sent,e=t.results,c(e);case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();n()}),[]),(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)("h1",{children:"Tranding today"}),(0,p.jsx)(s.Z,{movieList:e})]})}}}]);
//# sourceMappingURL=415.ab2df892.chunk.js.map