(this["webpackJsonpnetflix-clone"]=this["webpackJsonpnetflix-clone"]||[]).push([[0],{43:function(e,t,c){},44:function(e,t,c){},78:function(e,t,c){},88:function(e,t,c){},93:function(e,t,c){},94:function(e,t,c){},96:function(e,t,c){"use strict";c.r(t);var n=c(0),a=c.n(n),i=c(30),s=c.n(i),r=(c(43),c(44),c(18)),o=c(7),l=c.n(o),j=c(10),d=c(5),b=(c(46),c(33)),u=c.n(b).a.create({baseURL:"https://api.themoviedb.org/3"});u.get("/");var h=u,v=(c(78),c(79),c(88),c(36)),f=c.n(v),m=c(34),_=c.n(m),p=c(37),O=c.n(p),g=c(1);var x=function(e){var t=e.backdrop_path,c=e.title,n=e.overview,a=e.name,i=e.release_date,s=e.first_air_date,r=e.vote_average,o=e.setMovieVisibility;return Object(g.jsxs)("div",{className:"content",children:[Object(g.jsxs)("div",{className:"content__info",children:[Object(g.jsx)("h1",{className:"title",children:c||a}),Object(g.jsxs)("div",{className:"content__info__secondLine",children:[Object(g.jsx)("h4",{className:"release_date",children:i||s}),Object(g.jsxs)("h4",{className:"vote_average",children:[Object(g.jsx)(_.a,{}),r]}),Object(g.jsxs)("h4",{className:"random_percent",children:[Math.floor(100*Math.random()),"% for you"]})]}),Object(g.jsx)("h5",{children:n}),Object(g.jsxs)("div",{className:"content__info__buttons",children:[Object(g.jsxs)("button",{children:[Object(g.jsx)(f.a,{}),"Play"]}),Object(g.jsx)("button",{children:"+ My LIST"})]})]}),Object(g.jsxs)("div",{className:"content__img",children:[Object(g.jsx)("img",{src:"https://image.tmdb.org/t/p/original/".concat(t),alt:""}),Object(g.jsx)("span",{onClick:function(){return o(!1)},className:"close",children:Object(g.jsx)(O.a,{fontSize:"large"})})]})]})};var N=function(e){var t=e.title,c=e.fetchUrl,a=e.isLargeRow,i=Object(n.useState)([]),s=Object(d.a)(i,2),o=s[0],b=s[1],u=Object(n.useState)(!1),v=Object(d.a)(u,2),f=v[0],m=v[1],_=Object(n.useState)({}),p=Object(d.a)(_,2),O=p[0],N=p[1];return Object(n.useEffect)((function(){function e(){return(e=Object(j.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.get(c);case 2:return t=e.sent,b(t.data.results),e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[c]),Object(g.jsxs)("div",{className:"row",children:[Object(g.jsx)("h2",{children:t}),Object(g.jsx)("div",{className:"row__posters",children:o.map((function(e){return Object(g.jsx)("img",{onClick:function(){return function(e){m(!0),N(e)}(e)},className:"row__poster ".concat(a&&"row__posterLarge"),src:"".concat("https://image.tmdb.org/t/p/original/").concat(a?e.poster_path:e.backdrop_path),alt:e.name},e.id)}))}),f&&Object(g.jsx)(x,Object(r.a)(Object(r.a)({},O),{},{setMovieVisibility:m}))]})},w="847100f04115784e1abb1bb2139c9485",k={fetchTrending:"/trending/all/week?api_key=".concat(w,"&language=ko_kR"),fetchNetflixOriginals:"/discover/tv?api_key=".concat(w,"&with_network=213"),fetchTopRated:"/movie/top_rated?api_key=".concat(w,"&language=ko-KR"),fetchActionMovies:"/discover/movie?api_key=".concat(w,"&with_genres=28"),fetchComedyMovies:"/discover/movie?api_key=".concat(w,"&with_genres=35"),fetchHorrorMovies:"/discover/movie?api_key=".concat(w,"&with_genres=27"),fetchRomanceMovies:"/discover/movie?api_key=".concat(w,"&with_genres=10749"),fetchDocumentaries:"/discover/movie?api_key=".concat(w,"&with_genres=99")};c(93);var y=function(){var e,t,c=Object(n.useState)([]),a=Object(d.a)(c,2),i=a[0],s=a[1];return Object(n.useEffect)((function(){function e(){return(e=Object(j.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.get(k.fetchNetflixOriginals);case 2:return t=e.sent,s(t.data.results[Math.floor(Math.random()*t.data.results.length-1)]),e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),Object(g.jsxs)("header",{className:"banner",style:{backgroundSize:"cover",backgroundImage:'url("https://image.tmdb.org/t/p/original/'.concat(null===i||void 0===i?void 0:i.backdrop_path,'"\n                )'),backgroundPosition:"center center"},children:[Object(g.jsxs)("div",{className:"banner__contents",children:[Object(g.jsx)("h1",{className:"banner__title",children:(null===i||void 0===i?void 0:i.title)||(null===i||void 0===i?void 0:i.name)||(null===i||void 0===i?void 0:i.original_name)}),Object(g.jsxs)("div",{className:"banner__buttons",children:[Object(g.jsx)("button",{className:"banner__button",children:"Play"}),Object(g.jsx)("button",{className:"banner__button",children:"My List"})]}),Object(g.jsx)("h1",{className:"banner__description",children:(e=null===i||void 0===i?void 0:i.overview,t=200,(null===e||void 0===e?void 0:e.length)>t?e.substr(0,t-1)+"...":e)})]}),Object(g.jsx)("div",{className:"banner--fadeBottom"})]})};c(94);var M=function(){var e=Object(n.useState)(!1),t=Object(d.a)(e,2),c=t[0],a=t[1];return Object(n.useEffect)((function(){return window.addEventListener("scroll",(function(){window.scrollY>100?a(!0):a(!1)})),function(){window.removeEventListener("scroll")}}),[]),Object(g.jsxs)("div",{className:"nav ".concat(c&&"nav__black"),children:[Object(g.jsx)("img",{className:"nav__logo",src:"https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/250px-Netflix_2015_logo.svg.png",alt:"Netflix Logo"}),Object(g.jsx)("img",{className:"nav__avatar",src:"https://mir-s3-cdn-cf.behance.net/project_modules/disp/366be133850498.56ba69ac36858.png",alt:"Netflix Logo"})]})};var L=function(){return Object(g.jsxs)("div",{className:"app",children:[Object(g.jsx)(M,{}),Object(g.jsx)(y,{}),Object(g.jsx)(N,{title:"NETFLIX ORIGINAL",fetchUrl:k.fetchNetflixOriginals,isLargeRow:!0}),Object(g.jsx)(N,{title:"Trending Now",fetchUrl:k.fetchTrending}),Object(g.jsx)(N,{title:"Top Rated",fetchUrl:k.fetchTopRated}),Object(g.jsx)(N,{title:"Action Movies",fetchUrl:k.fetchActionMovies}),Object(g.jsx)(N,{title:"Comedy Movies",fetchUrl:k.fetchComedyMovies}),Object(g.jsx)(N,{title:"Horror Movies",fetchUrl:k.fetchHorrorMovies}),Object(g.jsx)(N,{title:"Romance Movies",fetchUrl:k.fetchRomanceMovies}),Object(g.jsx)(N,{title:"Documentaries",fetchUrl:k.fetchDocumentaries})]})},R=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,103)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,i=t.getLCP,s=t.getTTFB;c(e),n(e),a(e),i(e),s(e)}))};s.a.render(Object(g.jsx)(a.a.StrictMode,{children:Object(g.jsx)(L,{})}),document.getElementById("root")),R()}},[[96,1,2]]]);
//# sourceMappingURL=main.a48a009e.chunk.js.map