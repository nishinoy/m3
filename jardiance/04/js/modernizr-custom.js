!function(e,n,t){function o(e,n){return typeof e===n}function r(){var e,n,t,r,i,s,a;for(var l in y)if(y.hasOwnProperty(l)){if(e=[],n=y[l],n.name&&(e.push(n.name.toLowerCase()),n.options&&n.options.aliases&&n.options.aliases.length))for(t=0;t<n.options.aliases.length;t++)e.push(n.options.aliases[t].toLowerCase());for(r=o(n.fn,"function")?n.fn():n.fn,i=0;i<e.length;i++)s=e[i],a=s.split("."),1===a.length?g[a[0]]=r:(!g[a[0]]||g[a[0]]instanceof Boolean||(g[a[0]]=new Boolean(g[a[0]])),g[a[0]][a[1]]=r),m.push((r?"":"no-")+a.join("-"))}}function i(e){var n=_.className,t=g._config.classPrefix||"";if(C&&(n=n.baseVal),g._config.enableJSClass){var o=new RegExp("(^|\\s)"+t+"no-js(\\s|$)");n=n.replace(o,"$1"+t+"js$2")}g._config.enableClasses&&(n+=" "+t+e.join(" "+t),C?_.className.baseVal=n:_.className=n)}function s(e,n){if("object"==typeof e)for(var t in e)w(e,t)&&s(t,e[t]);else{e=e.toLowerCase();var o=e.split("."),r=g[o[0]];if(2==o.length&&(r=r[o[1]]),"undefined"!=typeof r)return g;n="function"==typeof n?n():n,1==o.length?g[o[0]]=n:(!g[o[0]]||g[o[0]]instanceof Boolean||(g[o[0]]=new Boolean(g[o[0]])),g[o[0]][o[1]]=n),i([(n&&0!=n?"":"no-")+o.join("-")]),g._trigger(e,n)}return g}function a(){return"function"!=typeof n.createElement?n.createElement(arguments[0]):C?n.createElementNS.call(n,"http://www.w3.org/2000/svg",arguments[0]):n.createElement.apply(n,arguments)}function l(e,n){return!!~(""+e).indexOf(n)}function f(e){return e.replace(/([a-z])-([a-z])/g,function(e,n,t){return n+t.toUpperCase()}).replace(/^-/,"")}function u(e){return e.replace(/([A-Z])/g,function(e,n){return"-"+n.toLowerCase()}).replace(/^ms-/,"-ms-")}function d(){var e=n.body;return e||(e=a(C?"svg":"body"),e.fake=!0),e}function c(e,t,o,r){var i,s,l,f,u="modernizr",c=a("div"),p=d();if(parseInt(o,10))for(;o--;)l=a("div"),l.id=r?r[o]:u+(o+1),c.appendChild(l);return i=a("style"),i.type="text/css",i.id="s"+u,(p.fake?p:c).appendChild(i),p.appendChild(c),i.styleSheet?i.styleSheet.cssText=e:i.appendChild(n.createTextNode(e)),c.id=u,p.fake&&(p.style.background="",p.style.overflow="hidden",f=_.style.overflow,_.style.overflow="hidden",_.appendChild(p)),s=t(c,e),p.fake?(p.parentNode.removeChild(p),_.style.overflow=f,_.offsetHeight):c.parentNode.removeChild(c),!!s}function p(n,o){var r=n.length;if("CSS"in e&&"supports"in e.CSS){for(;r--;)if(e.CSS.supports(u(n[r]),o))return!0;return!1}if("CSSSupportsRule"in e){for(var i=[];r--;)i.push("("+u(n[r])+":"+o+")");return i=i.join(" or "),c("@supports ("+i+") { #modernizr { position: absolute; } }",function(e){return"absolute"==getComputedStyle(e,null).position})}return t}function h(e,n,r,i){function s(){d&&(delete b.style,delete b.modElem)}if(i=o(i,"undefined")?!1:i,!o(r,"undefined")){var u=p(e,r);if(!o(u,"undefined"))return u}for(var d,c,h,m,y,v=["modernizr","tspan"];!b.style;)d=!0,b.modElem=a(v.shift()),b.style=b.modElem.style;for(h=e.length,c=0;h>c;c++)if(m=e[c],y=b.style[m],l(m,"-")&&(m=f(m)),b.style[m]!==t){if(i||o(r,"undefined"))return s(),"pfx"==n?m:!0;try{b.style[m]=r}catch(g){}if(b.style[m]!=y)return s(),"pfx"==n?m:!0}return s(),!1}var m=[],y=[],v={_version:"3.1.0",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,n){var t=this;setTimeout(function(){n(t[e])},0)},addTest:function(e,n,t){y.push({name:e,fn:n,options:t})},addAsyncTest:function(e){y.push({name:null,fn:e})}},g=function(){};g.prototype=v,g=new g;var w,_=n.documentElement,C="svg"===_.nodeName.toLowerCase();!function(){var e={}.hasOwnProperty;w=o(e,"undefined")||o(e.call,"undefined")?function(e,n){return n in e&&o(e.constructor.prototype[n],"undefined")}:function(n,t){return e.call(n,t)}}(),v._l={},v.on=function(e,n){this._l[e]||(this._l[e]=[]),this._l[e].push(n),g.hasOwnProperty(e)&&setTimeout(function(){g._trigger(e,g[e])},0)},v._trigger=function(e,n){if(this._l[e]){var t=this._l[e];setTimeout(function(){var e,o;for(e=0;e<t.length;e++)(o=t[e])(n)},0),delete this._l[e]}},g._q.push(function(){v.addTest=s});var x=v._config.usePrefixes?" -webkit- -moz- -o- -ms- ".split(" "):[];v._prefixes=x,g.addTest("opacity",function(){var e=a("a").style;return e.cssText=x.join("opacity:.55;"),/^0.55$/.test(e.opacity)});var S={elem:a("modernizr")};g._q.push(function(){delete S.elem});var b={style:S.elem.style};g._q.unshift(function(){delete b.style}),v.testProp=function(e,n,o){return h([e],t,n,o)},r(),i(m),delete v.addTest,delete v.addAsyncTest;for(var T=0;T<g._q.length;T++)g._q[T]();e.Modernizr=g}(window,document),Modernizr.addTest("mix-blend-mode",function(){return Modernizr.testProp("mixBlendMode")});