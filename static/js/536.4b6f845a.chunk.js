"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[536],{82:function(n,t,e){e.d(t,{Df:function(){return s},GC:function(){return p},M1:function(){return f},Pg:function(){return d},tx:function(){return l}});var r=e(861),a=e(757),i=e.n(a),c=e(44),o="20b16dffbdf7f9078d49a58427d91733",u="https://api.themoviedb.org/3/",s=function(){var n=(0,r.Z)(i().mark((function n(){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.ZP.get("".concat(u,"trending/movie/day?api_key=").concat(o,"&language=en-US"));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(i().mark((function n(t){var e;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.ZP.get("".concat(u,"search/movie?api_key=").concat(o,"&query=").concat(t,"&language=en-US"));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),d=function(){var n=(0,r.Z)(i().mark((function n(t){var e;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.ZP.get("".concat(u,"movie/").concat(t,"?api_key=").concat(o,"&language=en-US"));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(i().mark((function n(t){var e;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.ZP.get("".concat(u,"movie/").concat(t,"/credits?api_key=").concat(o,"&language=en-US"));case 2:return e=n.sent,n.abrupt("return",e.data.cast);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(i().mark((function n(t){var e;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.ZP.get("".concat(u,"movie/").concat(t,"/reviews?api_key=").concat(o,"&language=en-US&page=1"));case 2:return e=n.sent,n.abrupt("return",e.data.results);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()},906:function(n,t,e){var r=e(689),a=e(791),i=e(498),c=e(184);t.Z=function(n){var t=n.movieList,e=(0,r.TH)();return(0,c.jsxs)("div",{children:[(0,c.jsx)(i.WZ,{children:t.map((function(n){var t=n.id,r=n.poster_path,a=n.title;return(0,c.jsx)(i.WF,{children:(0,c.jsxs)(i.rU,{to:{pathname:"/goit-react-hw-05-movies/movies/".concat("".concat(t)),state:{from:{location:e,label:"Back to Home"}}},children:[(0,c.jsx)("img",{src:r?"https://image.tmdb.org/t/p/w500/".concat(r):"https://via.placeholder.com/200x300",alt:"",height:"300",width:"200"}),(0,c.jsx)("p",{children:a})]})},t)}))}),(0,c.jsx)(a.Suspense,{fallback:(0,c.jsx)("h1",{children:"Loading..."}),children:(0,c.jsx)(r.j3,{})})]})}},498:function(n,t,e){e.d(t,{WF:function(){return f},WZ:function(){return d},f0:function(){return l},fp:function(){return x},rU:function(){return g}});var r,a,i,c,o,u=e(168),s=e(444),p=e(731),d=s.ZP.ul(r||(r=(0,u.Z)(["\n  display: grid;\n    justify-content: center;\n    max-width: calc(100vw - 48px);\n    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));\n    gap: 30px;\n    padding: 0px;\n    list-style: none;\n    margin-left: auto;\n    margin-right: auto;\n"]))),f=s.ZP.li(a||(a=(0,u.Z)(["\n  border: 1px solid gray;\n  border-radius: 4px;\n  text-align: center;\n  padding: 10px 0px;\n  font-weight: 500;\n    font-size: 20px;\n\n  > a {\n    text-decoration: none;\n  }\n"]))),l=s.ZP.ul(i||(i=(0,u.Z)(["\n    list-style: none;\n    display: flex;\n        padding: 0px;    \n        margin-bottom: 30px;\n"]))),x=s.ZP.li(c||(c=(0,u.Z)(["\n    text-decoration: none;\n    color: black;\n    font-weight: 500;\n    font-size: 20px;\n    text-align: center;\n    padding: 5px;\n    border: 1px solid gray;\n    border-radius: 4px;\n    width: 100px;\n    margin-right: 20px;\n"]))),g=(0,s.ZP)(p.OL)(o||(o=(0,u.Z)(["\n  text-decoration: none;\n  color: black;\n"])))},536:function(n,t,e){e.r(t),e.d(t,{default:function(){return v}});var r,a,i=e(861),c=e(885),o=e(757),u=e.n(o),s=e(791),p=e(731),d=e(906),f=e(82),l=e(168),x=e(444),g=x.ZP.input(r||(r=(0,l.Z)(["\nmargin-right: 20px;\n    width: 300px;\n    box-sizing: border-box;\n    font-size: 18px;\n    padding-left: 15px;\n    padding: 10px;\n    border: 1px solid gray;\n    border-radius: 4px;\n"]))),h=x.ZP.button(a||(a=(0,l.Z)(["\n    align-items: center;\n    padding: 10px;\n    font-size: 18px;\n    border: 1px solid gray;\n    border-radius: 4px;\n"]))),m=e(184);function v(){var n,t=(0,p.lr)(),e=(0,c.Z)(t,2),r=e[0],a=e[1],o=(0,s.useState)([]),l=(0,c.Z)(o,2),x=l[0],v=l[1],Z=(0,s.useState)(""),b=(0,c.Z)(Z,2),y=b[0],w=b[1],k=null!==(n=r.get("query"))&&void 0!==n?n:"";return(0,s.useEffect)((function(){function n(){return n=(0,i.Z)(u().mark((function n(){var t;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,f.GC)(k);case 2:t=n.sent,v(t.results);case 4:case"end":return n.stop()}}),n)}))),n.apply(this,arguments)}""!==k&&(!function(){n.apply(this,arguments)}(),w(k))}),[k]),(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)("h2",{children:"Search Movies"}),(0,m.jsxs)("form",{onSubmit:function(n){if(n.preventDefault(),y===k)return alert("Please, enter movie name!");a(""!==y?{query:y}:{})},children:[(0,m.jsx)(g,{type:"text",value:y,onChange:function(n){return w(n.target.value)},autoFocus:!0,placeholder:"Search movie"}),(0,m.jsx)(h,{type:"submit",children:"Search"})]}),(0,m.jsx)(d.Z,{movieList:x})]})}}}]);
//# sourceMappingURL=536.4b6f845a.chunk.js.map