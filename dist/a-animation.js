!function(t){var n={};function e(i){if(n[i])return n[i].exports;var r=n[i]={i:i,l:!1,exports:{}};return t[i].call(r.exports,r,r.exports,e),r.l=!0,r.exports}e.m=t,e.c=n,e.d=function(t,n,i){e.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:i})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,n){if(1&n&&(t=e(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(e.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var r in t)e.d(i,r,function(n){return t[n]}.bind(null,r));return i},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},e.p="",e(e.s=1)}([function(t,n,e){(function(e){var i,r=r||function(){var t=[];return{getAll:function(){return t},removeAll:function(){t=[]},add:function(n){t.push(n)},remove:function(n){var e=t.indexOf(n);-1!==e&&t.splice(e,1)},update:function(n,e){if(0===t.length)return!1;var i=0;for(n=void 0!==n?n:r.now();i<t.length;)t[i].update(n)||e?i++:t.splice(i,1);return!0}}}();"undefined"==typeof window&&void 0!==e?r.now=function(){var t=e.hrtime();return 1e3*t[0]+t[1]/1e6}:"undefined"!=typeof window&&void 0!==window.performance&&void 0!==window.performance.now?r.now=window.performance.now.bind(window.performance):void 0!==Date.now?r.now=Date.now:r.now=function(){return(new Date).getTime()},r.Tween=function(t){var n,e=t,i={},a={},o={},u=1e3,s=0,c=!1,l=!1,f=!1,d=0,h=null,p=r.Easing.Linear.None,v=r.Interpolation.Linear,g=[],b=null,E=!1,m=null,w=null,I=null;this.to=function(t,n){return a=t,void 0!==n&&(u=n),this},this.start=function(t){for(var n in r.add(this),l=!0,E=!1,h=void 0!==t?t:r.now(),h+=d,a){if(a[n]instanceof Array){if(0===a[n].length)continue;a[n]=[e[n]].concat(a[n])}void 0!==e[n]&&(i[n]=e[n],i[n]instanceof Array==!1&&(i[n]*=1),o[n]=i[n]||0)}return this},this.stop=function(){return l?(r.remove(this),l=!1,null!==I&&I.call(e,e),this.stopChainedTweens(),this):this},this.end=function(){return this.update(h+u),this},this.stopChainedTweens=function(){for(var t=0,n=g.length;t<n;t++)g[t].stop()},this.delay=function(t){return d=t,this},this.repeat=function(t){return s=t,this},this.repeatDelay=function(t){return n=t,this},this.yoyo=function(t){return c=t,this},this.easing=function(t){return p=t,this},this.interpolation=function(t){return v=t,this},this.chain=function(){return g=arguments,this},this.onStart=function(t){return b=t,this},this.onUpdate=function(t){return m=t,this},this.onComplete=function(t){return w=t,this},this.onStop=function(t){return I=t,this},this.update=function(t){var r,l,I;if(t<h)return!0;for(r in!1===E&&(null!==b&&b.call(e,e),E=!0),I=p(l=(l=(t-h)/u)>1?1:l),a)if(void 0!==i[r]){var O=i[r]||0,y=a[r];y instanceof Array?e[r]=v(y,I):("string"==typeof y&&(y="+"===y.charAt(0)||"-"===y.charAt(0)?O+parseFloat(y):parseFloat(y)),"number"==typeof y&&(e[r]=O+(y-O)*I))}if(null!==m&&m.call(e,I),1===l){if(s>0){for(r in isFinite(s)&&s--,o){if("string"==typeof a[r]&&(o[r]=o[r]+parseFloat(a[r])),c){var M=o[r];o[r]=a[r],a[r]=M}i[r]=o[r]}return c&&(f=!f),h=void 0!==n?t+n:t+d,!0}null!==w&&w.call(e,e);for(var A=0,S=g.length;A<S;A++)g[A].start(h+u);return!1}return!0}},r.Easing={Linear:{None:function(t){return t}},Quadratic:{In:function(t){return t*t},Out:function(t){return t*(2-t)},InOut:function(t){return(t*=2)<1?.5*t*t:-.5*(--t*(t-2)-1)}},Cubic:{In:function(t){return t*t*t},Out:function(t){return--t*t*t+1},InOut:function(t){return(t*=2)<1?.5*t*t*t:.5*((t-=2)*t*t+2)}},Quartic:{In:function(t){return t*t*t*t},Out:function(t){return 1- --t*t*t*t},InOut:function(t){return(t*=2)<1?.5*t*t*t*t:-.5*((t-=2)*t*t*t-2)}},Quintic:{In:function(t){return t*t*t*t*t},Out:function(t){return--t*t*t*t*t+1},InOut:function(t){return(t*=2)<1?.5*t*t*t*t*t:.5*((t-=2)*t*t*t*t+2)}},Sinusoidal:{In:function(t){return 1-Math.cos(t*Math.PI/2)},Out:function(t){return Math.sin(t*Math.PI/2)},InOut:function(t){return.5*(1-Math.cos(Math.PI*t))}},Exponential:{In:function(t){return 0===t?0:Math.pow(1024,t-1)},Out:function(t){return 1===t?1:1-Math.pow(2,-10*t)},InOut:function(t){return 0===t?0:1===t?1:(t*=2)<1?.5*Math.pow(1024,t-1):.5*(2-Math.pow(2,-10*(t-1)))}},Circular:{In:function(t){return 1-Math.sqrt(1-t*t)},Out:function(t){return Math.sqrt(1- --t*t)},InOut:function(t){return(t*=2)<1?-.5*(Math.sqrt(1-t*t)-1):.5*(Math.sqrt(1-(t-=2)*t)+1)}},Elastic:{In:function(t){return 0===t?0:1===t?1:-Math.pow(2,10*(t-1))*Math.sin(5*(t-1.1)*Math.PI)},Out:function(t){return 0===t?0:1===t?1:Math.pow(2,-10*t)*Math.sin(5*(t-.1)*Math.PI)+1},InOut:function(t){return 0===t?0:1===t?1:(t*=2)<1?-.5*Math.pow(2,10*(t-1))*Math.sin(5*(t-1.1)*Math.PI):.5*Math.pow(2,-10*(t-1))*Math.sin(5*(t-1.1)*Math.PI)+1}},Back:{In:function(t){var n=1.70158;return t*t*((n+1)*t-n)},Out:function(t){var n=1.70158;return--t*t*((n+1)*t+n)+1},InOut:function(t){var n=2.5949095;return(t*=2)<1?t*t*((n+1)*t-n)*.5:.5*((t-=2)*t*((n+1)*t+n)+2)}},Bounce:{In:function(t){return 1-r.Easing.Bounce.Out(1-t)},Out:function(t){return t<1/2.75?7.5625*t*t:t<2/2.75?7.5625*(t-=1.5/2.75)*t+.75:t<2.5/2.75?7.5625*(t-=2.25/2.75)*t+.9375:7.5625*(t-=2.625/2.75)*t+.984375},InOut:function(t){return t<.5?.5*r.Easing.Bounce.In(2*t):.5*r.Easing.Bounce.Out(2*t-1)+.5}}},r.Interpolation={Linear:function(t,n){var e=t.length-1,i=e*n,a=Math.floor(i),o=r.Interpolation.Utils.Linear;return n<0?o(t[0],t[1],i):n>1?o(t[e],t[e-1],e-i):o(t[a],t[a+1>e?e:a+1],i-a)},Bezier:function(t,n){for(var e=0,i=t.length-1,a=Math.pow,o=r.Interpolation.Utils.Bernstein,u=0;u<=i;u++)e+=a(1-n,i-u)*a(n,u)*t[u]*o(i,u);return e},CatmullRom:function(t,n){var e=t.length-1,i=e*n,a=Math.floor(i),o=r.Interpolation.Utils.CatmullRom;return t[0]===t[e]?(n<0&&(a=Math.floor(i=e*(1+n))),o(t[(a-1+e)%e],t[a],t[(a+1)%e],t[(a+2)%e],i-a)):n<0?t[0]-(o(t[0],t[0],t[1],t[1],-i)-t[0]):n>1?t[e]-(o(t[e],t[e],t[e-1],t[e-1],i-e)-t[e]):o(t[a?a-1:0],t[a],t[e<a+1?e:a+1],t[e<a+2?e:a+2],i-a)},Utils:{Linear:function(t,n,e){return(n-t)*e+t},Bernstein:function(t,n){var e=r.Interpolation.Utils.Factorial;return e(t)/e(n)/e(t-n)},Factorial:function(){var t=[1];return function(n){var e=1;if(t[n])return t[n];for(var i=n;i>1;i--)e*=i;return t[n]=e,e}}(),CatmullRom:function(t,n,e,i,r){var a=.5*(e-t),o=.5*(i-n),u=r*r;return(2*n-2*e+a+o)*(r*u)+(-3*n+3*e-2*a-o)*u+a*r+n}}},void 0===(i=function(){return r}.apply(n,[]))||(t.exports=i)}).call(this,e(2))},function(t,n,e){var i=e(0),r=e(3),a=AFRAME.ANode,o=AFRAME.utils.coordinates,u=AFRAME.schema.parseProperty,s=AFRAME.registerElement,c=AFRAME.utils,l=c.bind,f=c.entity.getComponentProperty,d=r.defaults,h=r.directions,p=r.easingFunctions,v=r.fills,g=r.repeats,b=o.isCoordinates,E=c.debug("core:a-animation:warn"),m=!1;function w(t){return c.extend({},t)}function I(t){return"true"===t}function O(t){return t?1:0}function y(t){return"#"+["r","g","b"].map(function(n){return function(t){var n=t.toString(16);return 1===n.length?"0"+n:n}(function(t){return Math.floor(255*Math.min(Math.abs(t),1))}(t[n]))}).join("")}AFRAME.registerSystem("a-animation",{tick:function(t){i.update(t)}}),s("a-animation",{prototype:Object.create(a.prototype,{createdCallback:{value:function(){this.bindMethods(),this.isRunning=!1,this.partialSetAttribute=function(){},this.tween=null,m||(E("<a-animation> is deprecated and has been replaced by the animation component in A-Frame v0.9.0."),m=!0)}},attachedCallback:{value:function(){this.el=this.parentNode,this.handleMixinUpdate(),this.update(),this.load()}},attributeChangedCallback:{value:function(t,n,e){this.hasLoaded&&this.isRunning&&(this.stop(),this.handleMixinUpdate(),this.update())}},detachedCallback:{value:function(){this.isRunning&&this.stop()}},getTween:{value:function(){var t,n,e,r,a=this,s=a.data,c=a.el,d=s.attribute,E=parseInt(s.delay,10),m=f(c,d),M=a.getDirection(s.direction),A=p[s.easing],S=s.fill,x=s.repeat===g.indefinite?1/0:0,C=!1;return t=function(t,n,e,i,r){var a,s,c,l,d,h=n.split("."),p={},v={};2===h.length?function(){var n=h[0],e=h[1],i=t.components[n],r=i&&i.schema;return r&&r[e]&&"color"===r[e].type}()?g():function(){l=h[0],c=h[1],(s=t.components[l])||(t.setAttribute(l,""),s=t.components[l]);a=s.schema,p[n]=void 0===e?f(t,n):e;p[n]=u(p[n],a[c]),v[n]=u(i,a[c]),d=function(e){n in e&&t.setAttribute(l,c,e[n])}}():i&&b(i)?(p=e?o.parse(e):r,v=o.parse(i),d=function(e){t.setAttribute(n,e)}):-1!==["true","false"].indexOf(i)?function(){p[n]=void 0!==e&&I(e);p[n]=O(p[n]),v[n]=O(I(i)),d=function(e){t.setAttribute(n,!!e[n])}}():isNaN(i)?g():function(){p[n]=void 0===e?parseFloat(t.getAttribute(n)):parseFloat(e);v[n]=parseFloat(i),d=function(e){t.setAttribute(n,e[n])}}();return{from:p,partialSetAttribute:d,to:v};function g(){p=new THREE.Color(e||t.getAttribute(n)),v=new THREE.Color(i),d=function(e){h.length>1&&t.setAttribute(h[0],h[1],y(e)),t.setAttribute(n,y(e))}}}(c,d,s.from||a.initialValue,s.to,m),n=t.from,e=t.to,a.partialSetAttribute=t.partialSetAttribute,void 0===a.count&&(a.count=x===1/0?0:parseInt(s.repeat,10)),isNaN(E)&&(E=0),a.initialValue=a.initialValue||w(m),x===1/0&&S===v.forwards&&-1!==[h.alternate,h.alternateReverse].indexOf(s.direction)&&(C=!0),M===h.reverse&&(r=e,e=w(n),n=w(r)),-1!==[v.backwards,v.both].indexOf(S)&&a.partialSetAttribute(n),new i.Tween(w(n)).to(e,s.dur).delay(E).easing(A).repeat(x).yoyo(C).onUpdate(function(){a.partialSetAttribute(this)}).onComplete(l(a.onCompleted,a))}},update:{value:function(){var t=this.data;"infinite"===t.repeat&&console.warn("Using 'infinite' as 'repeat' value is invalid.  Use 'indefinite' instead."),""===t.begin||isNaN(t.begin)||(console.warn("Using 'begin' to specify a delay is deprecated. Use 'delay' instead."),t.delay=t.begin,t.begin="");var n=t.begin,e=t.end;this.evt&&this.removeEventListeners(this.evt),this.evt={begin:n,end:e},this.addEventListeners(this.evt),""===n&&(this.stop(),this.start())},writable:window.debug},onCompleted:{value:function(){var t=this.data;if(this.isRunning=!1,-1!==[v.backwards,v.none].indexOf(t.fill)&&this.partialSetAttribute(this.initialValue),0===this.count)return this.count=void 0,void this.emit("animationend");this.isRunning=!1,this.count--,this.start()}},start:{value:function(){var t=this;this.el.hasLoaded?!this.isRunning&&this.el.isPlaying&&(this.tween=this.getTween(),this.isRunning=!0,this.tween.start(),this.emit("animationstart")):this.el.addEventListener("loaded",function(){t.start()})},writable:!0},stop:{value:function(){var t=this.tween;t&&(t.stop(),this.isRunning=!1,-1!==[v.backwards,v.none].indexOf(this.data.fill)&&this.partialSetAttribute(this.initialValue),this.emit("animationstop"))},writable:!0},getDirection:{value:function(t){return t===h.alternate?(this.prevDirection=this.prevDirection===h.normal?h.reverse:h.normal,this.prevDirection):t===h.alternateReverse?(this.prevDirection=this.prevDirection===h.reverse?h.normal:h.reverse,this.prevDirection):t}},bindMethods:{value:function(){this.start=l(this.start,this),this.stop=l(this.stop,this),this.onStateAdded=l(this.onStateAdded,this),this.onStateRemoved=l(this.onStateRemoved,this)}},addEventListeners:{value:function(t){var n=this.el,e=this;c.splitString(t.begin).forEach(function(t){n.addEventListener(t,e.start)}),c.splitString(t.end).forEach(function(t){n.addEventListener(t,e.stop)}),""===t.begin&&n.addEventListener("play",this.start),n.addEventListener("pause",this.stop),n.addEventListener("stateadded",this.onStateAdded),n.addEventListener("stateremoved",this.onStateRemoved)}},removeEventListeners:{value:function(t){var n=this.el,e=this.start,i=this.stop;c.splitString(t.begin).forEach(function(t){n.removeEventListener(t,e)}),c.splitString(t.end).forEach(function(t){n.removeEventListener(t,i)}),n.removeEventListener("stateadded",this.onStateAdded),n.removeEventListener("stateremoved",this.onStateRemoved)}},onStateAdded:{value:function(t){t.detail===this.data.begin&&this.start()},writable:!0},onStateRemoved:{value:function(t){t.detail===this.data.begin&&this.stop()},writable:!0},handleMixinUpdate:{value:function(){var t,n,e,i={};n=(e=document.querySelector("#"+this.getAttribute("mixin")))?c.getElData(e,d):{},t=c.getElData(this,d),c.extend(i,d,n,t),this.data=i}}})})},function(t,n){var e,i,r=t.exports={};function a(){throw new Error("setTimeout has not been defined")}function o(){throw new Error("clearTimeout has not been defined")}function u(t){if(e===setTimeout)return setTimeout(t,0);if((e===a||!e)&&setTimeout)return e=setTimeout,setTimeout(t,0);try{return e(t,0)}catch(n){try{return e.call(null,t,0)}catch(n){return e.call(this,t,0)}}}!function(){try{e="function"==typeof setTimeout?setTimeout:a}catch(t){e=a}try{i="function"==typeof clearTimeout?clearTimeout:o}catch(t){i=o}}();var s,c=[],l=!1,f=-1;function d(){l&&s&&(l=!1,s.length?c=s.concat(c):f=-1,c.length&&h())}function h(){if(!l){var t=u(d);l=!0;for(var n=c.length;n;){for(s=c,c=[];++f<n;)s&&s[f].run();f=-1,n=c.length}s=null,l=!1,function(t){if(i===clearTimeout)return clearTimeout(t);if((i===o||!i)&&clearTimeout)return i=clearTimeout,clearTimeout(t);try{i(t)}catch(n){try{return i.call(null,t)}catch(n){return i.call(this,t)}}}(t)}}function p(t,n){this.fun=t,this.array=n}function v(){}r.nextTick=function(t){var n=new Array(arguments.length-1);if(arguments.length>1)for(var e=1;e<arguments.length;e++)n[e-1]=arguments[e];c.push(new p(t,n)),1!==c.length||l||u(h)},p.prototype.run=function(){this.fun.apply(null,this.array)},r.title="browser",r.browser=!0,r.env={},r.argv=[],r.version="",r.versions={},r.on=v,r.addListener=v,r.once=v,r.off=v,r.removeListener=v,r.removeAllListeners=v,r.emit=v,r.prependListener=v,r.prependOnceListener=v,r.listeners=function(t){return[]},r.binding=function(t){throw new Error("process.binding is not supported")},r.cwd=function(){return"/"},r.chdir=function(t){throw new Error("process.chdir is not supported")},r.umask=function(){return 0}},function(t,n,e){var i=e(0),r={alternate:"alternate",alternateReverse:"alternate-reverse",normal:"normal",reverse:"reverse"},a={linear:i.Easing.Linear.None,ease:i.Easing.Cubic.InOut,"ease-in":i.Easing.Cubic.In,"ease-out":i.Easing.Cubic.Out,"ease-in-out":i.Easing.Cubic.InOut,"ease-cubic":i.Easing.Cubic.In,"ease-in-cubic":i.Easing.Cubic.In,"ease-out-cubic":i.Easing.Cubic.Out,"ease-in-out-cubic":i.Easing.Cubic.InOut,"ease-quad":i.Easing.Quadratic.InOut,"ease-in-quad":i.Easing.Quadratic.In,"ease-out-quad":i.Easing.Quadratic.Out,"ease-in-out-quad":i.Easing.Quadratic.InOut,"ease-quart":i.Easing.Quartic.InOut,"ease-in-quart":i.Easing.Quartic.In,"ease-out-quart":i.Easing.Quartic.Out,"ease-in-out-quart":i.Easing.Quartic.InOut,"ease-quint":i.Easing.Quintic.InOut,"ease-in-quint":i.Easing.Quintic.In,"ease-out-quint":i.Easing.Quintic.Out,"ease-in-out-quint":i.Easing.Quintic.InOut,"ease-sine":i.Easing.Sinusoidal.InOut,"ease-in-sine":i.Easing.Sinusoidal.In,"ease-out-sine":i.Easing.Sinusoidal.Out,"ease-in-out-sine":i.Easing.Sinusoidal.InOut,"ease-expo":i.Easing.Exponential.InOut,"ease-in-expo":i.Easing.Exponential.In,"ease-out-expo":i.Easing.Exponential.Out,"ease-in-out-expo":i.Easing.Exponential.InOut,"ease-circ":i.Easing.Circular.InOut,"ease-in-circ":i.Easing.Circular.In,"ease-out-circ":i.Easing.Circular.Out,"ease-in-out-circ":i.Easing.Circular.InOut,"ease-elastic":i.Easing.Elastic.InOut,"ease-in-elastic":i.Easing.Elastic.In,"ease-out-elastic":i.Easing.Elastic.Out,"ease-in-out-elastic":i.Easing.Elastic.InOut,"ease-back":i.Easing.Back.InOut,"ease-in-back":i.Easing.Back.In,"ease-out-back":i.Easing.Back.Out,"ease-in-out-back":i.Easing.Back.InOut,"ease-bounce":i.Easing.Bounce.InOut,"ease-in-bounce":i.Easing.Bounce.In,"ease-out-bounce":i.Easing.Bounce.Out,"ease-in-out-bounce":i.Easing.Bounce.InOut},o={backwards:"backwards",both:"both",forwards:"forwards",none:"none"},u={attribute:"rotation",begin:"",end:"",delay:0,dur:1e3,easing:"ease",direction:r.normal,fill:o.forwards,from:void 0,repeat:0,to:void 0};t.exports.defaults=u,t.exports.directions=r,t.exports.easingFunctions=a,t.exports.fills=o,t.exports.repeats={indefinite:"indefinite"}}]);