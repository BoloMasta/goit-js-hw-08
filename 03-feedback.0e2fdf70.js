!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};const t=document.querySelector("form"),n=document.querySelector("input"),r=document.querySelector("textarea");var o="Expected a function",i=/^\s+|\s+$/g,a=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,f=/^0o[0-7]+$/i,l=parseInt,c="object"==typeof e&&e&&e.Object===Object&&e,s="object"==typeof self&&self&&self.Object===Object&&self,d=c||s||Function("return this")(),v=Object.prototype.toString,m=Math.max,g=Math.min,p=function(){return d.Date.now()};function y(e,t,n){var r,i,a,u,f,l,c=0,s=!1,d=!1,v=!0;if("function"!=typeof e)throw new TypeError(o);function y(t){var n=r,o=i;return r=i=void 0,c=t,u=e.apply(o,n)}function h(e){return c=e,f=setTimeout(w,t),s?y(e):u}function j(e){var n=e-l;return void 0===l||n>=t||n<0||d&&e-c>=a}function w(){var e=p();if(j(e))return O(e);f=setTimeout(w,function(e){var n=t-(e-l);return d?g(n,a-(e-c)):n}(e))}function O(e){return f=void 0,v&&r?y(e):(r=i=void 0,u)}function T(){var e=p(),n=j(e);if(r=arguments,i=this,l=e,n){if(void 0===f)return h(l);if(d)return f=setTimeout(w,t),y(l)}return void 0===f&&(f=setTimeout(w,t)),u}return t=S(t)||0,b(n)&&(s=!!n.leading,a=(d="maxWait"in n)?m(S(n.maxWait)||0,t):a,v="trailing"in n?!!n.trailing:v),T.cancel=function(){void 0!==f&&clearTimeout(f),c=0,r=l=i=f=void 0},T.flush=function(){return void 0===f?u:O(p())},T}function b(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function S(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==v.call(e)}(e))return NaN;if(b(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=b(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(i,"");var n=u.test(e);return n||f.test(e)?l(e.slice(2),n?2:8):a.test(e)?NaN:+e}var h=function(e,t,n){var r=!0,i=!0;if("function"!=typeof e)throw new TypeError(o);return b(n)&&(r="leading"in n?!!n.leading:r,i="trailing"in n?!!n.trailing:i),y(e,t,{leading:r,maxWait:t,trailing:i})}((()=>{let e={email:n.value,message:r.value};localStorage.setItem("feedback-form-state",JSON.stringify(e))}),500,{trailing:!1});t.addEventListener("input",(e=>h()));try{var j=JSON.parse(localStorage.getItem("feedback-form-state"));n.value=j.email,r.value=j.message}catch(e){}t.addEventListener("submit",(e=>{e.preventDefault(),console.log(localStorage.getItem("feedback-form-state")),localStorage.removeItem("feedback-form-state"),n.value="",r.value=""}))}();
//# sourceMappingURL=03-feedback.0e2fdf70.js.map
