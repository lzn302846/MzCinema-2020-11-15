(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4c5aa2df"],{"02de":function(t,e,i){"use strict";function n(t){var e=window.getComputedStyle(t),i="none"===e.display,n=null===t.offsetParent&&"fixed"!==e.position;return i||n}i.d(e,"a",(function(){return n}))},"09fe":function(t,e,i){},"0fd4":function(t,e,i){"use strict";i("f3b0")},1325:function(t,e,i){"use strict";i.d(e,"b",(function(){return a})),i.d(e,"a",(function(){return r})),i.d(e,"c",(function(){return l}));var n=i("a142"),o=!1;if(!n["f"])try{var s={};Object.defineProperty(s,"passive",{get:function(){o=!0}}),window.addEventListener("test-passive",null,s)}catch(h){}function a(t,e,i,s){void 0===s&&(s=!1),n["f"]||t.addEventListener(e,i,!!o&&{capture:!1,passive:s})}function r(t,e,i){n["f"]||t.removeEventListener(e,i)}function c(t){t.stopPropagation()}function l(t,e){("boolean"!==typeof t.cancelable||t.cancelable)&&t.preventDefault(),e&&c(t)}},3875:function(t,e,i){"use strict";i.d(e,"a",(function(){return r}));var n=i("2b0e"),o=i("1325"),s=10;function a(t,e){return t>e&&t>s?"horizontal":e>t&&e>s?"vertical":""}var r=n["a"].extend({data:function(){return{direction:""}},methods:{touchStart:function(t){this.resetTouchStatus(),this.startX=t.touches[0].clientX,this.startY=t.touches[0].clientY},touchMove:function(t){var e=t.touches[0];this.deltaX=e.clientX-this.startX,this.deltaY=e.clientY-this.startY,this.offsetX=Math.abs(this.deltaX),this.offsetY=Math.abs(this.deltaY),this.direction=this.direction||a(this.offsetX,this.offsetY)},resetTouchStatus:function(){this.direction="",this.deltaX=0,this.deltaY=0,this.offsetX=0,this.offsetY=0},bindTouchEvent:function(t){var e=this,i=e.onTouchStart,n=e.onTouchMove,s=e.onTouchEnd;Object(o["b"])(t,"touchstart",i),Object(o["b"])(t,"touchmove",n),s&&(Object(o["b"])(t,"touchend",s),Object(o["b"])(t,"touchcancel",s))}}})},4598:function(t,e,i){"use strict";(function(t){i.d(e,"a",(function(){return l}));var n=i("a142"),o=Date.now();function s(t){var e=Date.now(),i=Math.max(0,16-(e-o)),n=setTimeout(t,i);return o=e+i,n}var a=n["f"]?t:window,r=a.requestAnimationFrame||s;a.cancelAnimationFrame||a.clearTimeout;function c(t){return r.call(a,t)}function l(t){c((function(){c(t)}))}}).call(this,i("c8ba"))},"4d75":function(t,e,i){},"504b":function(t,e,i){},"543e":function(t,e,i){"use strict";var n=i("2638"),o=i.n(n),s=i("d282"),a=i("ea8e"),r=i("ba31"),c=Object(s["a"])("loading"),l=c[0],h=c[1];function u(t,e){if("spinner"===e.type){for(var i=[],n=0;n<12;n++)i.push(t("i"));return i}return t("svg",{class:h("circular"),attrs:{viewBox:"25 25 50 50"}},[t("circle",{attrs:{cx:"50",cy:"50",r:"20",fill:"none"}})])}function d(t,e,i){if(i.default){var n=e.textSize&&{fontSize:Object(a["a"])(e.textSize)};return t("span",{class:h("text"),style:n},[i.default()])}}function f(t,e,i,n){var s=e.color,c=e.size,l=e.type,f={color:s};if(c){var v=Object(a["a"])(c);f.width=v,f.height=v}return t("div",o()([{class:h([l,{vertical:e.vertical}])},Object(r["b"])(n,!0)]),[t("span",{class:h("spinner",l),style:f},[u(t,e)]),d(t,e,i)])}f.props={color:String,size:[Number,String],vertical:Boolean,textSize:[Number,String],type:{type:String,default:"circular"}},e["a"]=l(f)},"5fbe":function(t,e,i){"use strict";i.d(e,"a",(function(){return o}));var n=i("1325");function o(t){function e(){this.binded||(t.call(this,n["b"],!0),this.binded=!0)}function i(){this.binded&&(t.call(this,n["a"],!1),this.binded=!1)}return{mounted:e,activated:e,deactivated:i,beforeDestroy:i}}},6605:function(t,e,i){"use strict";i.d(e,"b",(function(){return D})),i.d(e,"a",(function(){return P}));var n={zIndex:2e3,lockCount:0,stack:[],get top(){return this.stack[this.stack.length-1]}},o=i("c31d"),s=i("2638"),a=i.n(s),r=i("d282"),c=i("a142"),l=i("ba31"),h=i("1325"),u=Object(r["a"])("overlay"),d=u[0],f=u[1];function v(t){Object(h["c"])(t,!0)}function m(t,e,i,n){var s=Object(o["a"])({zIndex:e.zIndex},e.customStyle);return Object(c["b"])(e.duration)&&(s.animationDuration=e.duration+"s"),t("transition",{attrs:{name:"van-fade"}},[t("div",a()([{directives:[{name:"show",value:e.show}],style:s,class:[f(),e.className],on:{touchmove:e.lockScroll?v:c["g"]}},Object(l["b"])(n,!0)]),[null==i.default?void 0:i.default()])])}m.props={show:Boolean,zIndex:[Number,String],duration:[Number,String],className:null,customStyle:Object,lockScroll:{type:Boolean,default:!0}};var p,g=d(m),b={className:"",customStyle:{}};function y(){if(n.top){var t=n.top.vm;t.$emit("click-overlay"),t.closeOnClickOverlay&&(t.onClickOverlay?t.onClickOverlay():t.close())}}function w(){p=Object(l["c"])(g,{on:{click:y}})}function S(){if(p||w(),n.top){var t=n.top,e=t.vm,i=t.config,s=e.$el;s&&s.parentNode?s.parentNode.insertBefore(p.$el,s):document.body.appendChild(p.$el),Object(o["a"])(p,b,i,{show:!0})}else p.show=!1}function x(t,e){n.stack.some((function(e){return e.vm===t}))||(n.stack.push({vm:t,config:e}),S())}function O(t){var e=n.stack;e.length&&(n.top.vm===t?(e.pop(),S()):n.stack=e.filter((function(e){return e.vm!==t})))}function C(t){var e=t.parentNode;e&&e.removeChild(t)}var T=i("a8c1"),k=i("3875"),I=i("2b0e");function $(t){return"string"===typeof t?document.querySelector(t):t()}function j(t){var e=t.ref,i=t.afterPortal;return I["a"].extend({props:{getContainer:[String,Function]},watch:{getContainer:"portal"},mounted:function(){this.getContainer&&this.portal()},methods:{portal:function(){var t,n=this.getContainer,o=e?this.$refs[e]:this.$el;n?t=$(n):this.$parent&&(t=this.$parent.$el),t&&t!==o.parentNode&&t.appendChild(o),i&&i.call(this)}}})}var z=i("5fbe"),M={mixins:[Object(z["a"])((function(t,e){this.handlePopstate(e&&this.closeOnPopstate)}))],props:{closeOnPopstate:Boolean},data:function(){return{bindStatus:!1}},watch:{closeOnPopstate:function(t){this.handlePopstate(t)}},methods:{handlePopstate:function(t){var e=this;if(!this.$isServer&&this.bindStatus!==t){this.bindStatus=t;var i=t?h["b"]:h["a"];i(window,"popstate",(function(){e.close(),e.shouldReopen=!1}))}}}},D={value:Boolean,overlay:Boolean,overlayStyle:Object,overlayClass:String,closeOnClickOverlay:Boolean,zIndex:[Number,String],lockScroll:{type:Boolean,default:!0},lazyRender:{type:Boolean,default:!0}};function P(t){return void 0===t&&(t={}),{mixins:[k["a"],M,j({afterPortal:function(){this.overlay&&S()}})],props:D,data:function(){return{inited:this.value}},computed:{shouldRender:function(){return this.inited||!this.lazyRender}},watch:{value:function(e){var i=e?"open":"close";this.inited=this.inited||this.value,this[i](),t.skipToggleEvent||this.$emit(i)},overlay:"renderOverlay"},mounted:function(){this.value&&this.open()},activated:function(){this.shouldReopen&&(this.$emit("input",!0),this.shouldReopen=!1)},beforeDestroy:function(){this.close(),this.getContainer&&C(this.$el)},deactivated:function(){this.value&&(this.close(),this.shouldReopen=!0)},methods:{open:function(){this.$isServer||this.opened||(void 0!==this.zIndex&&(n.zIndex=this.zIndex),this.opened=!0,this.renderOverlay(),this.lockScroll&&(Object(h["b"])(document,"touchstart",this.touchStart),Object(h["b"])(document,"touchmove",this.onTouchMove),n.lockCount||document.body.classList.add("van-overflow-hidden"),n.lockCount++))},close:function(){this.opened&&(this.lockScroll&&(n.lockCount--,Object(h["a"])(document,"touchstart",this.touchStart),Object(h["a"])(document,"touchmove",this.onTouchMove),n.lockCount||document.body.classList.remove("van-overflow-hidden")),this.opened=!1,O(this),this.$emit("input",!1))},onTouchMove:function(t){this.touchMove(t);var e=this.deltaY>0?"10":"01",i=Object(T["d"])(t.target,this.$el),n=i.scrollHeight,o=i.offsetHeight,s=i.scrollTop,a="11";0===s?a=o>=n?"00":"01":s+o>=n&&(a="10"),"11"===a||"vertical"!==this.direction||parseInt(a,2)&parseInt(e,2)||Object(h["c"])(t,!0)},renderOverlay:function(){var t=this;!this.$isServer&&this.value&&this.$nextTick((function(){t.updateZIndex(t.overlay?1:0),t.overlay?x(t,{zIndex:n.zIndex++,duration:t.duration,className:t.overlayClass,customStyle:t.overlayStyle}):O(t)}))},updateZIndex:function(t){void 0===t&&(t=0),this.$el.style.zIndex=++n.zIndex+t}}}}},6793:function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.filmDetils?i("div",{staticClass:"detils"},[i("span",{staticClass:"iconfont iconarrowLeft headerArrow",on:{click:function(){return t.$router.back()}}}),i("HeaderTitle",{directives:[{name:"scrollHeight",rawName:"v-scrollHeight"}],on:{arrowLeftTo:function(){return t.$router.back()}}},[t._v(t._s(t.filmDetils.name))]),i("div",{staticClass:"detilsLogo"},[i("img",{attrs:{src:t.filmDetils.poster,alt:""}})]),i("div",{staticClass:"detilsIntroduce"},[i("div",{staticStyle:{display:"flex"}},[i("div",{staticStyle:{width:"256px",display:"flex"}},[i("h2",{staticStyle:{color:"black"}},[t._v(t._s(t.filmDetils.name))]),i("p",{staticClass:"detilsItem"},[t._v(t._s(t.filmDetils.item.name))])]),i("i",{staticClass:"detilsGrade"},[t._v(" "+t._s(t.filmDetils.grade)+" "),i("span",{staticStyle:{"font-style":"normal","font-size":"12px"}},[t._v("分")])])]),i("div",{staticStyle:{color:"#797d82","font-size":"13px",position:"relative"}},[i("p",{staticStyle:{"margin-top":"4px"}},[t._v(t._s(t.filmDetils.category))]),i("span",{staticStyle:{"margin-top":"4px",display:"block"}},[t._v(t._s(t._f("filterTime")(t.filmDetils.premiereAt))+"上映")]),i("i",{staticStyle:{"margin-top":"4px",display:"block"}},[t._v(t._s(t.filmDetils.nation)+" | "+t._s(t.filmDetils.runtime)+"分钟")]),i("div",{staticClass:"detilsFilmIntroduce",style:{height:t.arrowheadIcon?"":t.synopsisHeight+"px"},on:{click:function(){return t.arrowheadIcon=!t.arrowheadIcon}}},[i("span",{ref:"synopsis",staticClass:"synopsis"},[t._v(t._s(t.filmDetils.synopsis))])]),i("i",{staticClass:"iconfont arrowheadIcon",class:t.arrowheadIcon?"iconxiangxiajiantou":"iconliwu-copy",on:{click:function(){return t.arrowheadIcon=!t.arrowheadIcon}}})])]),i("div",{staticClass:"actorsImg"},[i("h3",[t._v("演职人员")]),i("SwiperComponents",{attrs:{name:"actors-loop"}},t._l(t.filmDetils.actors,(function(e,n){return i("div",{directives:[{name:"swiper",rawName:"v-swiper",value:{index:n,datalist:t.filmDetils.actors,num:3.7,space:10,name:"actors-loop"},expression:"{index:index,datalist:filmDetils.actors,num:3.7,space:10,name:'actors-loop'}"}],key:e.name,staticClass:"swiper-slide actorPic"},[i("img",{attrs:{src:e.avatarAddress,alt:""}}),i("p",[t._v(t._s(e.name))]),i("span",[t._v(t._s(e.role))])])})),0)],1),i("div",{staticClass:"stateImg"},[i("div",{staticClass:"stateHeader"},[i("h3",[t._v("剧照")]),i("div",{staticStyle:{"line-height":"40px"},on:{click:function(){return t.detilsMaskShow=!0}}},[t._v(" 全部（"+t._s(t.filmDetils.photos.length)+"） "),i("i",{staticClass:"iconfont iconyoujiantou1",staticStyle:{"font-size":"10px"}})])]),i("SwiperComponents",{attrs:{name:"state-loop"}},t._l(t.filmDetils.photos,(function(e,n){return i("div",{directives:[{name:"swiper",rawName:"v-swiper",value:{index:n,datalist:t.filmDetils.actors,num:2.4,space:10,name:"state-loop"},expression:"{index:index,datalist:filmDetils.actors,num:2.4,space:10,name:'state-loop'}"}],key:e,staticClass:"swiper-slide statePic",on:{click:function(e){return t.picPreview(n)}}},[i("img",{attrs:{src:e,alt:""}})])})),0)],1),i("div",{directives:[{name:"show",rawName:"v-show",value:t.detilsMaskShow,expression:"detilsMaskShow"}],staticClass:"detilsMask"},[i("HeaderTitle",{on:{arrowLeftTo:function(){return t.detilsMaskShow=!1}}},[t._v("剧照 ("+t._s(t.filmDetils.photos.length)+")")]),i("ul",t._l(t.filmDetils.photos,(function(t){return i("li",{key:t},[i("img",{attrs:{src:t,alt:""}})])})),0)],1)],1):t._e()},o=[],s=(i("d3b7"),i("5530")),a=(i("68ef"),i("a71a"),i("9d70"),i("3743"),i("09fe"),i("4d75"),i("e3b3"),i("8270"),i("786d"),i("504b"),i("c31d")),r=i("2b0e"),c=i("d282");function l(t,e,i){return Math.min(Math.max(t,e),i)}var h=i("1325"),u=i("6605"),d=i("3875"),f=i("ad06"),v=i("2638"),m=i.n(v),p=i("a142"),g=i("ea8e"),b=Object(c["a"])("image"),y=b[0],w=b[1],S=y({props:{src:String,fit:String,alt:String,round:Boolean,width:[Number,String],height:[Number,String],radius:[Number,String],lazyLoad:Boolean,showError:{type:Boolean,default:!0},showLoading:{type:Boolean,default:!0},errorIcon:{type:String,default:"warning-o"},loadingIcon:{type:String,default:"photo-o"}},data:function(){return{loading:!0,error:!1}},watch:{src:function(){this.loading=!0,this.error=!1}},computed:{style:function(){var t={};return Object(p["b"])(this.width)&&(t.width=Object(g["a"])(this.width)),Object(p["b"])(this.height)&&(t.height=Object(g["a"])(this.height)),Object(p["b"])(this.radius)&&(t.overflow="hidden",t.borderRadius=Object(g["a"])(this.radius)),t}},created:function(){var t=this.$Lazyload;t&&(t.$on("loaded",this.onLazyLoaded),t.$on("error",this.onLazyLoadError))},beforeDestroy:function(){var t=this.$Lazyload;t&&(t.$off("loaded",this.onLazyLoaded),t.$off("error",this.onLazyLoadError))},methods:{onLoad:function(t){this.loading=!1,this.$emit("load",t)},onLazyLoaded:function(t){var e=t.el;e===this.$refs.image&&this.loading&&this.onLoad()},onLazyLoadError:function(t){var e=t.el;e!==this.$refs.image||this.error||this.onError()},onError:function(t){this.error=!0,this.loading=!1,this.$emit("error",t)},onClick:function(t){this.$emit("click",t)},genPlaceholder:function(){var t=this.$createElement;return this.loading&&this.showLoading?t("div",{class:w("loading")},[this.slots("loading")||t(f["a"],{attrs:{name:this.loadingIcon},class:w("loading-icon")})]):this.error&&this.showError?t("div",{class:w("error")},[this.slots("error")||t(f["a"],{attrs:{name:this.errorIcon},class:w("error-icon")})]):void 0},genImage:function(){var t=this.$createElement,e={class:w("img"),attrs:{alt:this.alt},style:{objectFit:this.fit}};if(!this.error)return this.lazyLoad?t("img",m()([{ref:"image",directives:[{name:"lazy",value:this.src}]},e])):t("img",m()([{attrs:{src:this.src},on:{load:this.onLoad,error:this.onError}},e]))}},render:function(){var t=arguments[0];return t("div",{class:w({round:this.round}),style:this.style,on:{click:this.onClick}},[this.genImage(),this.genPlaceholder()])}}),x=i("02de"),O=i("4598"),C=i("9884"),T=i("5fbe"),k=Object(c["a"])("swipe"),I=k[0],$=k[1],j=I({mixins:[d["a"],Object(C["b"])("vanSwipe"),Object(T["a"])((function(t,e){t(window,"resize",this.resize,!0),t(window,"visibilitychange",this.onVisibilityChange),e?this.initialize():this.clear()}))],props:{width:[Number,String],height:[Number,String],autoplay:[Number,String],vertical:Boolean,lazyRender:Boolean,indicatorColor:String,loop:{type:Boolean,default:!0},duration:{type:[Number,String],default:500},touchable:{type:Boolean,default:!0},initialSwipe:{type:[Number,String],default:0},showIndicators:{type:Boolean,default:!0},stopPropagation:{type:Boolean,default:!0}},data:function(){return{rect:null,offset:0,active:0,deltaX:0,deltaY:0,swiping:!1,computedWidth:0,computedHeight:0}},watch:{children:function(){this.initialize()},initialSwipe:function(){this.initialize()},autoplay:function(t){t>0?this.autoPlay():this.clear()}},computed:{count:function(){return this.children.length},maxCount:function(){return Math.ceil(Math.abs(this.minOffset)/this.size)},delta:function(){return this.vertical?this.deltaY:this.deltaX},size:function(){return this[this.vertical?"computedHeight":"computedWidth"]},trackSize:function(){return this.count*this.size},activeIndicator:function(){return(this.active+this.count)%this.count},isCorrectDirection:function(){var t=this.vertical?"vertical":"horizontal";return this.direction===t},trackStyle:function(){var t,e=this.vertical?"height":"width",i=this.vertical?"width":"height";return t={},t[e]=this.trackSize+"px",t[i]=this[i]?this[i]+"px":"",t.transitionDuration=(this.swiping?0:this.duration)+"ms",t.transform="translate"+(this.vertical?"Y":"X")+"("+this.offset+"px)",t},indicatorStyle:function(){return{backgroundColor:this.indicatorColor}},minOffset:function(){return(this.vertical?this.rect.height:this.rect.width)-this.size*this.count}},mounted:function(){this.bindTouchEvent(this.$refs.track)},methods:{initialize:function(t){if(void 0===t&&(t=+this.initialSwipe),this.$el&&!Object(x["a"])(this.$el)){clearTimeout(this.timer);var e=this.$el.getBoundingClientRect();this.rect=e,this.swiping=!0,this.active=t,this.computedWidth=Math.round(+this.width||e.width),this.computedHeight=Math.round(+this.height||e.height),this.offset=this.getTargetOffset(t),this.children.forEach((function(t){t.offset=0})),this.autoPlay()}},resize:function(){this.initialize(this.activeIndicator)},onVisibilityChange:function(){document.hidden?this.clear():this.autoPlay()},onTouchStart:function(t){this.touchable&&(this.clear(),this.touchStartTime=Date.now(),this.touchStart(t),this.correctPosition())},onTouchMove:function(t){this.touchable&&this.swiping&&(this.touchMove(t),this.isCorrectDirection&&(Object(h["c"])(t,this.stopPropagation),this.move({offset:this.delta})))},onTouchEnd:function(){if(this.touchable&&this.swiping){var t=this.size,e=this.delta,i=Date.now()-this.touchStartTime,n=e/i,o=Math.abs(n)>.25||Math.abs(e)>t/2;if(o&&this.isCorrectDirection){var s=this.vertical?this.offsetY:this.offsetX,a=0;a=this.loop?s>0?e>0?-1:1:0:-Math[e>0?"ceil":"floor"](e/t),this.move({pace:a,emitChange:!0})}else e&&this.move({pace:0});this.swiping=!1,this.autoPlay()}},getTargetActive:function(t){var e=this.active,i=this.count,n=this.maxCount;return t?this.loop?l(e+t,-1,i):l(e+t,0,n):e},getTargetOffset:function(t,e){void 0===e&&(e=0);var i=t*this.size;this.loop||(i=Math.min(i,-this.minOffset));var n=Math.round(e-i);return this.loop||(n=l(n,this.minOffset,0)),n},move:function(t){var e=t.pace,i=void 0===e?0:e,n=t.offset,o=void 0===n?0:n,s=t.emitChange,a=this.loop,r=this.count,c=this.active,l=this.children,h=this.trackSize,u=this.minOffset;if(!(r<=1)){var d=this.getTargetActive(i),f=this.getTargetOffset(d,o);if(a){if(l[0]&&f!==u){var v=f<u;l[0].offset=v?h:0}if(l[r-1]&&0!==f){var m=f>0;l[r-1].offset=m?-h:0}}this.active=d,this.offset=f,s&&d!==c&&this.$emit("change",this.activeIndicator)}},prev:function(){var t=this;this.correctPosition(),this.resetTouchStatus(),Object(O["a"])((function(){t.swiping=!1,t.move({pace:-1,emitChange:!0})}))},next:function(){var t=this;this.correctPosition(),this.resetTouchStatus(),Object(O["a"])((function(){t.swiping=!1,t.move({pace:1,emitChange:!0})}))},swipeTo:function(t,e){var i=this;void 0===e&&(e={}),this.correctPosition(),this.resetTouchStatus(),Object(O["a"])((function(){var n;n=i.loop&&t===i.count?0===i.active?0:t:t%i.count,e.immediate?Object(O["a"])((function(){i.swiping=!1})):i.swiping=!1,i.move({pace:n-i.active,emitChange:!0})}))},correctPosition:function(){this.swiping=!0,this.active<=-1&&this.move({pace:this.count}),this.active>=this.count&&this.move({pace:-this.count})},clear:function(){clearTimeout(this.timer)},autoPlay:function(){var t=this,e=this.autoplay;e>0&&this.count>1&&(this.clear(),this.timer=setTimeout((function(){t.next(),t.autoPlay()}),e))},genIndicator:function(){var t=this,e=this.$createElement,i=this.count,n=this.activeIndicator,o=this.slots("indicator");return o||(this.showIndicators&&i>1?e("div",{class:$("indicators",{vertical:this.vertical})},[Array.apply(void 0,Array(i)).map((function(i,o){return e("i",{class:$("indicator",{active:o===n}),style:o===n?t.indicatorStyle:null})}))]):void 0)}},render:function(){var t=arguments[0];return t("div",{class:$()},[t("div",{ref:"track",style:this.trackStyle,class:$("track",{vertical:this.vertical})},[this.slots()]),this.genIndicator()])}}),z=i("543e"),M=Object(c["a"])("swipe-item"),D=M[0],P=M[1],Y=D({mixins:[Object(C["a"])("vanSwipe")],data:function(){return{offset:0,mounted:!1}},mounted:function(){var t=this;this.$nextTick((function(){t.mounted=!0}))},computed:{style:function(){var t={},e=this.parent,i=e.size,n=e.vertical;return t[n?"height":"width"]=i+"px",this.offset&&(t.transform="translate"+(n?"Y":"X")+"("+this.offset+"px)"),t},shouldRender:function(){var t=this.index,e=this.parent,i=this.mounted;if(!e.lazyRender)return!0;if(!i)return!1;var n=e.activeIndicator,o=e.count-1,s=0===n?o:n-1,a=n===o?0:n+1;return t===n||t===s||t===a}},render:function(){var t=arguments[0];return t("div",{class:P(),style:this.style,on:Object(a["a"])({},this.$listeners)},[this.shouldRender&&this.slots()])}}),N=Object(c["a"])("image-preview"),X=N[0],E=N[1],_=250;function B(t){return Math.sqrt(Math.pow(t[0].clientX-t[1].clientX,2)+Math.pow(t[0].clientY-t[1].clientY,2))}var L,R=X({mixins:[Object(u["a"])({skipToggleEvent:!0}),d["a"]],props:{className:null,asyncClose:Boolean,showIndicators:Boolean,images:{type:Array,default:function(){return[]}},loop:{type:Boolean,default:!0},swipeDuration:{type:[Number,String],default:500},overlay:{type:Boolean,default:!0},showIndex:{type:Boolean,default:!0},startPosition:{type:[Number,String],default:0},minZoom:{type:[Number,String],default:1/3},maxZoom:{type:[Number,String],default:3},overlayClass:{type:String,default:E("overlay")},closeable:Boolean,closeIcon:{type:String,default:"clear"},closeIconPosition:{type:String,default:"top-right"}},data:function(){return{scale:1,moveX:0,moveY:0,active:0,moving:!1,zooming:!1,doubleClickTimer:null}},computed:{imageStyle:function(){var t=this.scale,e={transitionDuration:this.zooming||this.moving?"0s":".3s"};return 1!==t&&(e.transform="scale3d("+t+", "+t+", 1) translate("+this.moveX/t+"px, "+this.moveY/t+"px)"),e}},watch:{startPosition:"setActive",value:function(t){var e=this;t?(this.setActive(+this.startPosition),this.$nextTick((function(){e.$refs.swipe.swipeTo(+e.startPosition,{immediate:!0})}))):this.$emit("close",{index:this.active,url:this.images[this.active]})},shouldRender:{handler:function(t){var e=this;t&&this.$nextTick((function(){var t=e.$refs.swipe.$el;Object(h["b"])(t,"touchstart",e.onWrapperTouchStart),Object(h["b"])(t,"touchmove",h["c"]),Object(h["b"])(t,"touchend",e.onWrapperTouchEnd),Object(h["b"])(t,"touchcancel",e.onWrapperTouchEnd)}))},immediate:!0}},methods:{emitClose:function(){this.asyncClose||this.$emit("input",!1)},onWrapperTouchStart:function(){this.touchStartTime=new Date},onWrapperTouchEnd:function(t){var e=this;Object(h["c"])(t);var i=new Date-this.touchStartTime,n=this.$refs.swipe||{},o=n.offsetX,s=void 0===o?0:o,a=n.offsetY,r=void 0===a?0:a;i<_&&s<10&&r<10&&(this.doubleClickTimer?(clearTimeout(this.doubleClickTimer),this.doubleClickTimer=null,this.toggleScale()):this.doubleClickTimer=setTimeout((function(){e.emitClose(),e.doubleClickTimer=null}),_))},startMove:function(t){var e=t.currentTarget,i=e.getBoundingClientRect(),n=window.innerWidth,o=window.innerHeight;this.touchStart(t),this.moving=!0,this.startMoveX=this.moveX,this.startMoveY=this.moveY,this.maxMoveX=Math.max(0,(i.width-n)/2),this.maxMoveY=Math.max(0,(i.height-o)/2)},startZoom:function(t){this.moving=!1,this.zooming=!0,this.startScale=this.scale,this.startDistance=B(t.touches)},onImageTouchStart:function(t){var e=t.touches,i=this.$refs.swipe||{},n=i.offsetX,o=void 0===n?0:n;1===e.length&&1!==this.scale?this.startMove(t):2!==e.length||o||this.startZoom(t)},onImageTouchMove:function(t){var e=t.touches;if((this.moving||this.zooming)&&Object(h["c"])(t,!0),this.moving){this.touchMove(t);var i=this.deltaX+this.startMoveX,n=this.deltaY+this.startMoveY;this.moveX=l(i,-this.maxMoveX,this.maxMoveX),this.moveY=l(n,-this.maxMoveY,this.maxMoveY)}if(this.zooming&&2===e.length){var o=B(e),s=this.startScale*o/this.startDistance;this.setScale(s)}},onImageTouchEnd:function(t){if(this.moving||this.zooming){var e=!0;this.moving&&this.startMoveX===this.moveX&&this.startMoveY===this.moveY&&(e=!1),t.touches.length||(this.moving=!1,this.zooming=!1,this.startMoveX=0,this.startMoveY=0,this.startScale=1,this.scale<1&&this.resetScale()),e&&Object(h["c"])(t,!0)}},setActive:function(t){this.resetScale(),t!==this.active&&(this.active=t,this.$emit("change",t))},setScale:function(t){var e=l(t,+this.minZoom,+this.maxZoom);this.scale=e,this.$emit("scale",{index:this.active,scale:e})},resetScale:function(){this.setScale(1),this.moveX=0,this.moveY=0},toggleScale:function(){var t=this.scale>1?1:2;this.setScale(t),this.moveX=0,this.moveY=0},genIndex:function(){var t=this.$createElement;if(this.showIndex)return t("div",{class:E("index")},[this.slots("index")||this.active+1+" / "+this.images.length])},genCover:function(){var t=this.$createElement,e=this.slots("cover");if(e)return t("div",{class:E("cover")},[e])},genImages:function(){var t=this,e=this.$createElement,i={loading:function(){return e(z["a"],{attrs:{type:"spinner"}})}};return e(j,{ref:"swipe",attrs:{lazyRender:!0,loop:this.loop,indicatorColor:"white",duration:this.swipeDuration,initialSwipe:this.startPosition,showIndicators:this.showIndicators},class:E("swipe"),on:{change:this.setActive}},[this.images.map((function(n,o){return e(Y,[e(S,{attrs:{src:n,fit:"contain"},class:E("image"),scopedSlots:i,style:o===t.active?t.imageStyle:null,nativeOn:{touchstart:t.onImageTouchStart,touchmove:t.onImageTouchMove,touchend:t.onImageTouchEnd,touchcancel:t.onImageTouchEnd}})])}))])},genClose:function(){var t=this.$createElement;if(this.closeable)return t(f["a"],{attrs:{role:"button",name:this.closeIcon},class:E("close-icon",this.closeIconPosition),on:{click:this.emitClose}})},onClosed:function(){this.$emit("closed")}},render:function(){var t=arguments[0];if(this.shouldRender)return t("transition",{attrs:{name:"van-fade"},on:{afterLeave:this.onClosed}},[t("div",{directives:[{name:"show",value:this.value}],class:[E(),this.className]},[this.genClose(),this.genImages(),this.genIndex(),this.genCover()])])}}),H={loop:!0,images:[],value:!0,minZoom:1/3,maxZoom:3,className:"",onClose:null,onChange:null,showIndex:!0,closeable:!1,closeIcon:"clear",asyncClose:!1,startPosition:0,swipeDuration:500,showIndicators:!1,closeOnPopstate:!1,closeIconPosition:"top-right"},A=function(){L=new(r["a"].extend(R))({el:document.createElement("div")}),document.body.appendChild(L.$el),L.$on("change",(function(t){L.onChange&&L.onChange(t)})),L.$on("scale",(function(t){L.onScale&&L.onScale(t)}))},Z=function(t,e){if(void 0===e&&(e=0),!p["f"]){L||A();var i=Array.isArray(t)?{images:t,startPosition:e}:t;return Object(a["a"])(L,H,i),L.$once("input",(function(t){L.value=t})),L.$once("closed",(function(){L.images=[]})),i.onClose&&(L.$off("close"),L.$once("close",i.onClose)),L}};Z.Component=R,Z.install=function(){r["a"].use(R)};var W=Z,F=i("751a"),q=i("2f62");r["a"].use(W);var J={components:{SwiperComponents:function(){return i.e("chunk-40da1c3c").then(i.bind(null,"04e9"))},HeaderTitle:function(){return i.e("chunk-1b3d2e58").then(i.bind(null,"041e"))}},data:function(){return{detilsMaskShow:!1,filmDetils:"",arrowheadIcon:!0,synopsisHeight:""}},methods:Object(s["a"])(Object(s["a"])({},Object(q["b"])("TabbarStore",["changeIsTabbar"])),{},{picPreview:function(t){W({images:this.filmDetils.photos,startPosition:t})},oHeight:function(t){this.synopsisHeight=t}}),created:function(){var t=this;this.changeIsTabbar(!1),Object(F["a"])("/gateway?filmId=".concat(this.$route.params.id,"&k=3355024"),{headers:{"X-Host":"mall.film-ticket.film.info"}}).then((function(e){t.filmDetils=e.data.data.film,t.$nextTick((function(){t.oHeight(t.$refs.synopsis.offsetHeight)}))})).catch((function(t){console.log(t)}))},beforeDestroy:function(){this.changeIsTabbar(!0)}},V=J,G=(i("0fd4"),i("2877")),K=Object(G["a"])(V,n,o,!1,null,null,null);e["default"]=K.exports},"786d":function(t,e,i){},8270:function(t,e,i){},9884:function(t,e,i){"use strict";i.d(e,"a",(function(){return s})),i.d(e,"b",(function(){return a}));var n=i("2b0e"),o=i("db85");function s(t,e){var i,s;void 0===e&&(e={});var a=e.indexKey||"index";return n["a"].extend({inject:(i={},i[t]={default:null},i),computed:(s={parent:function(){return this.disableBindRelation?null:this[t]}},s[a]=function(){return this.bindRelation(),this.parent?this.parent.children.indexOf(this):null},s),mounted:function(){this.bindRelation()},beforeDestroy:function(){var t=this;this.parent&&(this.parent.children=this.parent.children.filter((function(e){return e!==t})))},methods:{bindRelation:function(){if(this.parent&&-1===this.parent.children.indexOf(this)){var t=[].concat(this.parent.children,[this]);Object(o["a"])(t,this.parent),this.parent.children=t}}}})}function a(t){return{provide:function(){var e;return e={},e[t]=this,e},data:function(){return{children:[]}}}}},a71a:function(t,e,i){},a8c1:function(t,e,i){"use strict";function n(t){return t===window}i.d(e,"d",(function(){return s})),i.d(e,"c",(function(){return a})),i.d(e,"b",(function(){return c})),i.d(e,"e",(function(){return l})),i.d(e,"a",(function(){return h}));var o=/scroll|auto/i;function s(t,e){void 0===e&&(e=window);var i=t;while(i&&"HTML"!==i.tagName&&1===i.nodeType&&i!==e){var n=window.getComputedStyle(i),s=n.overflowY;if(o.test(s)){if("BODY"!==i.tagName)return i;var a=window.getComputedStyle(i.parentNode),r=a.overflowY;if(o.test(r))return i}i=i.parentNode}return e}function a(t){return"scrollTop"in t?t.scrollTop:t.pageYOffset}function r(t,e){"scrollTop"in t?t.scrollTop=e:t.scrollTo(t.scrollX,e)}function c(){return window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0}function l(t){r(window,t),r(document.body,t)}function h(t,e){if(n(t))return 0;var i=e?a(e):c();return t.getBoundingClientRect().top+i}},db85:function(t,e,i){"use strict";function n(t){var e=[];function i(t){t.forEach((function(t){e.push(t),t.componentInstance&&i(t.componentInstance.$children.map((function(t){return t.$vnode}))),t.children&&i(t.children)}))}return i(t),e}function o(t,e){var i=e.$vnode.componentOptions;if(i&&i.children){var o=n(i.children);t.sort((function(t,e){return o.indexOf(t.$vnode)-o.indexOf(e.$vnode)}))}}i.d(e,"a",(function(){return o}))},e3b3:function(t,e,i){},f3b0:function(t,e,i){}}]);
//# sourceMappingURL=chunk-4c5aa2df.f890107b.js.map