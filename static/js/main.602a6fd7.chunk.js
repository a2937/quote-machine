(this["webpackJsonpquote-machine"]=this["webpackJsonpquote-machine"]||[]).push([[0],{19:function(t,e,n){},20:function(t,e,n){},26:function(t,e,n){"use strict";n.r(e);var o=n(1),c=n(2),i=n.n(c),u=n(9),a=n.n(u),s=(n(19),n(10)),r=n(11),l=n(4),h=n(13),d=n(12),b=(n(20),n(7)),j=n(8),m=function(t){Object(h.a)(n,t);var e=Object(d.a)(n);function n(){var t;return Object(s.a)(this,n),(t=e.call(this)).state={quoteId:-1},t.onClick=t.onClick.bind(Object(l.a)(t)),t}return Object(r.a)(n,[{key:"onClick",value:function(){this.fetchQuotes()}},{key:"componentDidMount",value:function(){this.fetchQuotes()}},{key:"updateQuote",value:function(t){var e=t.author.replace(/ +/g,"%20"),n=t.content.replace(/ +/g,"%20");document.getElementById("author").textContent=t.author,document.getElementById("text").textContent=t.content,document.getElementById("tweet-quote").href="https://www.twitter.com/intent/tweet?text="+e+":%0A"+n,document.getElementById("tumblr-quote").href="http://tumblr.com/widgets/share/tool?posttype=quote&tags=quotes&caption="+e+"&content="+n+"&canonicalUrl=quote-machine.com"}},{key:"fetchQuotes",value:function(){var t=this;fetch("https://api.quotable.io/random").then((function(t){return t.json()})).then((function(e){return t.updateQuote(e)})).catch((function(t){console.log(t)}))}},{key:"render",value:function(){return Object(o.jsxs)("div",{className:"center topOfPage",id:"quote-box",children:[Object(o.jsx)("p",{id:"text",className:"twentyPoint italic"}),Object(o.jsx)("p",{id:"author",className:"twentyPoint"}),Object(o.jsx)("button",{id:"new-quote",className:"twentyPoint",onClick:this.onClick,children:"Get a new quote"}),Object(o.jsx)("br",{}),Object(o.jsx)("br",{}),Object(o.jsx)("a",{id:"tweet-quote",title:"Tweet this quote to your friends",href:"./",children:Object(o.jsx)(b.a,{icon:j.b,className:"thirtyTwoPoint peachText"})}),Object(o.jsx)("a",{id:"tumblr-quote",title:"Post this quote on Tumblr",href:"./",children:Object(o.jsx)(b.a,{icon:j.a,className:"thirtyTwoPoint redText"})})]})}}]),n}(c.Component),f=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,27)).then((function(e){var n=e.getCLS,o=e.getFID,c=e.getFCP,i=e.getLCP,u=e.getTTFB;n(t),o(t),c(t),i(t),u(t)}))};a.a.render(Object(o.jsx)(i.a.StrictMode,{children:Object(o.jsx)(m,{})}),document.getElementById("root")),f()}},[[26,1,2]]]);
//# sourceMappingURL=main.602a6fd7.chunk.js.map