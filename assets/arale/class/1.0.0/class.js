define("arale/class/1.0.0/class",[],function(t,n,e){function r(t){return this instanceof r||!l(t)?void 0:i(t)}function o(t){var n,e;for(n in t)e=t[n],r.Mutators.hasOwnProperty(n)?r.Mutators[n].call(this,e):this.prototype[n]=e}function i(t){return t.extend=r.extend,t.implement=o,t}function u(){}function s(t,n,e){for(var r in n)if(n.hasOwnProperty(r)){if(e&&-1===h(e,r))continue;"prototype"!==r&&(t[r]=n[r])}}function c(t){if(y){var n=y();if(n){var e=n.uri.split(/[\/\\]/).pop();Object.defineProperties?Object.defineProperties(t,{__module:{value:n},__filename:{value:e}}):(t.__module=n,t.__filename=e)}}}e.exports=r,r.create=function(t,n){function e(){t.apply(this,arguments),this.constructor===e&&this.initialize&&this.initialize.apply(this,arguments)}return l(t)||(n=t,t=null),n||(n={}),t||(t=n.Extends||r),n.Extends=t,t!==r&&s(e,t,t.StaticsWhiteList),o.call(e,n),i(e)},r.extend=function(t){return t||(t={}),t.Extends=this,r.create(t)},r.Mutators={Extends:function(t){var n=this.prototype,e=a(t.prototype);s(e,n),e.constructor=this,this.prototype=e,this.superclass=t.prototype,c(e)},Implements:function(t){f(t)||(t=[t]);for(var n,e=this.prototype;n=t.shift();)s(e,n.prototype||n)},Statics:function(t){s(this,t)}};var a=Object.__proto__?function(t){return{__proto__:t}}:function(t){return u.prototype=t,new u},p=Object.prototype.toString,f=Array.isArray;f||(f=function(t){return"[object Array]"===p.call(t)});var l=function(t){return"[object Function]"===p.call(t)},h=Array.prototype.indexOf?function(t,n){return t.indexOf(n)}:function(t,n){for(var e=0,r=t.length;r>e;e++)if(t[e]===n)return e;return-1},y=e.constructor._getCompilingModule});
