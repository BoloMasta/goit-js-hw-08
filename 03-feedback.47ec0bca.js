var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};const t=document.querySelector("form"),n=document.querySelector("input"),r=document.querySelector("textarea");var i=/^\s+|\s+$/g,o=/^[-+]0x[0-9a-f]+$/i,a=/^0b[01]+$/i,u=/^0o[0-7]+$/i,f=parseInt,l="object"==typeof e&&e&&e.Object===Object&&e,c="object"==typeof self&&self&&self.Object===Object&&self,s=l||c||Function("return this")(),v=Object.prototype.toString,d=Math.max,m=Math.min,p=function(){return s.Date.now()};function g(e,t,n){var r,i,o,a,u,f,l=0,c=!1,s=!1,v=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function g(t){var n=r,o=i;return r=i=void 0,l=t,a=e.apply(o,n)}function h(e){return l=e,u=setTimeout(S,t),c?g(e):a}function j(e){var n=e-f;return void 0===f||n>=t||n<0||s&&e-l>=o}function S(){var e=p();if(j(e))return w(e);u=setTimeout(S,function(e){var n=t-(e-f);return s?m(n,o-(e-l)):n}(e))}function w(e){return u=void 0,v&&r?g(e):(r=i=void 0,a)}function O(){var e=p(),n=j(e);if(r=arguments,i=this,f=e,n){if(void 0===u)return h(f);if(s)return u=setTimeout(S,t),g(f)}return void 0===u&&(u=setTimeout(S,t)),a}return t=b(t)||0,y(n)&&(c=!!n.leading,o=(s="maxWait"in n)?d(b(n.maxWait)||0,t):o,v="trailing"in n?!!n.trailing:v),O.cancel=function(){void 0!==u&&clearTimeout(u),l=0,r=f=i=u=void 0},O.flush=function(){return void 0===u?a:w(p())},O}function y(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function b(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==v.call(e)}(e))return NaN;if(y(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=y(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(i,"");var n=a.test(e);return n||u.test(e)?f(e.slice(2),n?2:8):o.test(e)?NaN:+e}var h=function(e,t,n){var r=!0,i=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return y(n)&&(r="leading"in n?!!n.leading:r,i="trailing"in n?!!n.trailing:i),g(e,t,{leading:r,maxWait:t,trailing:i})}((()=>{let e={email:n.value,message:r.value};localStorage.setItem("feedback-form-state",JSON.stringify(e))}),500,{trailing:!1});t.addEventListener("input",(e=>h()));try{var j=JSON.parse(localStorage.getItem("feedback-form-state"));n.value=j.email,r.value=j.message}catch(e){}t.addEventListener("submit",(e=>{e.preventDefault(),console.log({email:n.value,message:r.value}),localStorage.removeItem("feedback-form-state"),n.value="",r.value=""}));
//# sourceMappingURL=03-feedback.47ec0bca.js.map
