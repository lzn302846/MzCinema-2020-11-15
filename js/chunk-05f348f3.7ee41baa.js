(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-05f348f3"],{baeb:function(t,i,e){"use strict";e("cbd8")},cbd8:function(t,i,e){},fa1c:function(t,i,e){"use strict";e.r(i);var a=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"nowPlayClass"},[e("ul",t._l(t.filmsList,(function(i){return e("router-link",{key:i.filmId,attrs:{tag:"li",to:"/detils/"+i.filmId}},[e("div",{staticClass:"filmLogo"},[e("img",{attrs:{src:i.poster,alt:""}})]),e("div",{staticClass:"filmIntroduce"},[e("div",[e("span",{staticStyle:{"font-size":"16px",height:"22px","line-height":"22px","margin-right":"5px"}},[t._v(t._s(i.name))]),e("span",{staticClass:"film-item"},[t._v(t._s(i.item.name))])]),e("p",[t._v(" 观众评分 "),e("i",{staticStyle:{color:"#ffb232"}},[t._v(t._s(i.grade))])]),e("p",{staticStyle:{"white-space":"nowrap",overflow:"hidden","text-overflow":"ellipsis",width:"100%"}},[t._v("主演："+t._s(i.director))]),e("p",[t._v(t._s(i.nation)+" | "+t._s(i.runtime)+"分钟")])]),e("div",{staticClass:"nowPlayingFilm-buy"},[t._v("购票")])])})),1)])},s=[],l=e("5530"),n=e("2f62"),c=e("751a"),o={data:function(){return{filmsList:[]}},computed:Object(l["a"])({},Object(n["c"])("cityStore",["defaultCityId"])),created:function(){var t=this;Object(c["a"])("/gateway?cityId=".concat(this.defaultCityId,"&pageNum=1&pageSize=10&type=1&k=1928784"),{headers:{"X-Host":"mall.film-ticket.film.list"}}).then((function(i){t.filmsList=i.data.data.films})).catch((function(t){console.log(t)}))}},r=o,f=(e("baeb"),e("2877")),d=Object(f["a"])(r,a,s,!1,null,null,null);i["default"]=d.exports}}]);
//# sourceMappingURL=chunk-05f348f3.7ee41baa.js.map