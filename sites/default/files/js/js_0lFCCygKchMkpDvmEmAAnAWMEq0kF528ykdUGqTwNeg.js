/*! jQuery v3.2.1 | (c) JS Foundation and other contributors | jquery.org/license */
!function(a,b){"use strict";"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){"use strict";var c=[],d=a.document,e=Object.getPrototypeOf,f=c.slice,g=c.concat,h=c.push,i=c.indexOf,j={},k=j.toString,l=j.hasOwnProperty,m=l.toString,n=m.call(Object),o={};function p(a,b){b=b||d;var c=b.createElement("script");c.text=a,b.head.appendChild(c).parentNode.removeChild(c)}var q="3.2.1",r=function(a,b){return new r.fn.init(a,b)},s=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,t=/^-ms-/,u=/-([a-z])/g,v=function(a,b){return b.toUpperCase()};r.fn=r.prototype={jquery:q,constructor:r,length:0,toArray:function(){return f.call(this)},get:function(a){return null==a?f.call(this):a<0?this[a+this.length]:this[a]},pushStack:function(a){var b=r.merge(this.constructor(),a);return b.prevObject=this,b},each:function(a){return r.each(this,a)},map:function(a){return this.pushStack(r.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(f.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(a<0?b:0);return this.pushStack(c>=0&&c<b?[this[c]]:[])},end:function(){return this.prevObject||this.constructor()},push:h,sort:c.sort,splice:c.splice},r.extend=r.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||r.isFunction(g)||(g={}),h===i&&(g=this,h--);h<i;h++)if(null!=(a=arguments[h]))for(b in a)c=g[b],d=a[b],g!==d&&(j&&d&&(r.isPlainObject(d)||(e=Array.isArray(d)))?(e?(e=!1,f=c&&Array.isArray(c)?c:[]):f=c&&r.isPlainObject(c)?c:{},g[b]=r.extend(j,f,d)):void 0!==d&&(g[b]=d));return g},r.extend({expando:"jQuery"+(q+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===r.type(a)},isWindow:function(a){return null!=a&&a===a.window},isNumeric:function(a){var b=r.type(a);return("number"===b||"string"===b)&&!isNaN(a-parseFloat(a))},isPlainObject:function(a){var b,c;return!(!a||"[object Object]"!==k.call(a))&&(!(b=e(a))||(c=l.call(b,"constructor")&&b.constructor,"function"==typeof c&&m.call(c)===n))},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?j[k.call(a)]||"object":typeof a},globalEval:function(a){p(a)},camelCase:function(a){return a.replace(t,"ms-").replace(u,v)},each:function(a,b){var c,d=0;if(w(a)){for(c=a.length;d<c;d++)if(b.call(a[d],d,a[d])===!1)break}else for(d in a)if(b.call(a[d],d,a[d])===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(s,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(w(Object(a))?r.merge(c,"string"==typeof a?[a]:a):h.call(c,a)),c},inArray:function(a,b,c){return null==b?-1:i.call(b,a,c)},merge:function(a,b){for(var c=+b.length,d=0,e=a.length;d<c;d++)a[e++]=b[d];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;f<g;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,e,f=0,h=[];if(w(a))for(d=a.length;f<d;f++)e=b(a[f],f,c),null!=e&&h.push(e);else for(f in a)e=b(a[f],f,c),null!=e&&h.push(e);return g.apply([],h)},guid:1,proxy:function(a,b){var c,d,e;if("string"==typeof b&&(c=a[b],b=a,a=c),r.isFunction(a))return d=f.call(arguments,2),e=function(){return a.apply(b||this,d.concat(f.call(arguments)))},e.guid=a.guid=a.guid||r.guid++,e},now:Date.now,support:o}),"function"==typeof Symbol&&(r.fn[Symbol.iterator]=c[Symbol.iterator]),r.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(a,b){j["[object "+b+"]"]=b.toLowerCase()});function w(a){var b=!!a&&"length"in a&&a.length,c=r.type(a);return"function"!==c&&!r.isWindow(a)&&("array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a)}var x=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+1*new Date,v=a.document,w=0,x=0,y=ha(),z=ha(),A=ha(),B=function(a,b){return a===b&&(l=!0),0},C={}.hasOwnProperty,D=[],E=D.pop,F=D.push,G=D.push,H=D.slice,I=function(a,b){for(var c=0,d=a.length;c<d;c++)if(a[c]===b)return c;return-1},J="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",K="[\\x20\\t\\r\\n\\f]",L="(?:\\\\.|[\\w-]|[^\0-\\xa0])+",M="\\["+K+"*("+L+")(?:"+K+"*([*^$|!~]?=)"+K+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+L+"))|)"+K+"*\\]",N=":("+L+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+M+")*)|.*)\\)|)",O=new RegExp(K+"+","g"),P=new RegExp("^"+K+"+|((?:^|[^\\\\])(?:\\\\.)*)"+K+"+$","g"),Q=new RegExp("^"+K+"*,"+K+"*"),R=new RegExp("^"+K+"*([>+~]|"+K+")"+K+"*"),S=new RegExp("="+K+"*([^\\]'\"]*?)"+K+"*\\]","g"),T=new RegExp(N),U=new RegExp("^"+L+"$"),V={ID:new RegExp("^#("+L+")"),CLASS:new RegExp("^\\.("+L+")"),TAG:new RegExp("^("+L+"|[*])"),ATTR:new RegExp("^"+M),PSEUDO:new RegExp("^"+N),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+K+"*(even|odd|(([+-]|)(\\d*)n|)"+K+"*(?:([+-]|)"+K+"*(\\d+)|))"+K+"*\\)|)","i"),bool:new RegExp("^(?:"+J+")$","i"),needsContext:new RegExp("^"+K+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+K+"*((?:-\\d)?\\d*)"+K+"*\\)|)(?=[^-]|$)","i")},W=/^(?:input|select|textarea|button)$/i,X=/^h\d$/i,Y=/^[^{]+\{\s*\[native \w/,Z=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,$=/[+~]/,_=new RegExp("\\\\([\\da-f]{1,6}"+K+"?|("+K+")|.)","ig"),aa=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:d<0?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)},ba=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,ca=function(a,b){return b?"\0"===a?"\ufffd":a.slice(0,-1)+"\\"+a.charCodeAt(a.length-1).toString(16)+" ":"\\"+a},da=function(){m()},ea=ta(function(a){return a.disabled===!0&&("form"in a||"label"in a)},{dir:"parentNode",next:"legend"});try{G.apply(D=H.call(v.childNodes),v.childNodes),D[v.childNodes.length].nodeType}catch(fa){G={apply:D.length?function(a,b){F.apply(a,H.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function ga(a,b,d,e){var f,h,j,k,l,o,r,s=b&&b.ownerDocument,w=b?b.nodeType:9;if(d=d||[],"string"!=typeof a||!a||1!==w&&9!==w&&11!==w)return d;if(!e&&((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,p)){if(11!==w&&(l=Z.exec(a)))if(f=l[1]){if(9===w){if(!(j=b.getElementById(f)))return d;if(j.id===f)return d.push(j),d}else if(s&&(j=s.getElementById(f))&&t(b,j)&&j.id===f)return d.push(j),d}else{if(l[2])return G.apply(d,b.getElementsByTagName(a)),d;if((f=l[3])&&c.getElementsByClassName&&b.getElementsByClassName)return G.apply(d,b.getElementsByClassName(f)),d}if(c.qsa&&!A[a+" "]&&(!q||!q.test(a))){if(1!==w)s=b,r=a;else if("object"!==b.nodeName.toLowerCase()){(k=b.getAttribute("id"))?k=k.replace(ba,ca):b.setAttribute("id",k=u),o=g(a),h=o.length;while(h--)o[h]="#"+k+" "+sa(o[h]);r=o.join(","),s=$.test(a)&&qa(b.parentNode)||b}if(r)try{return G.apply(d,s.querySelectorAll(r)),d}catch(x){}finally{k===u&&b.removeAttribute("id")}}}return i(a.replace(P,"$1"),b,d,e)}function ha(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function ia(a){return a[u]=!0,a}function ja(a){var b=n.createElement("fieldset");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function ka(a,b){var c=a.split("|"),e=c.length;while(e--)d.attrHandle[c[e]]=b}function la(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&a.sourceIndex-b.sourceIndex;if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function ma(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function na(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function oa(a){return function(b){return"form"in b?b.parentNode&&b.disabled===!1?"label"in b?"label"in b.parentNode?b.parentNode.disabled===a:b.disabled===a:b.isDisabled===a||b.isDisabled!==!a&&ea(b)===a:b.disabled===a:"label"in b&&b.disabled===a}}function pa(a){return ia(function(b){return b=+b,ia(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function qa(a){return a&&"undefined"!=typeof a.getElementsByTagName&&a}c=ga.support={},f=ga.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return!!b&&"HTML"!==b.nodeName},m=ga.setDocument=function(a){var b,e,g=a?a.ownerDocument||a:v;return g!==n&&9===g.nodeType&&g.documentElement?(n=g,o=n.documentElement,p=!f(n),v!==n&&(e=n.defaultView)&&e.top!==e&&(e.addEventListener?e.addEventListener("unload",da,!1):e.attachEvent&&e.attachEvent("onunload",da)),c.attributes=ja(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=ja(function(a){return a.appendChild(n.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=Y.test(n.getElementsByClassName),c.getById=ja(function(a){return o.appendChild(a).id=u,!n.getElementsByName||!n.getElementsByName(u).length}),c.getById?(d.filter.ID=function(a){var b=a.replace(_,aa);return function(a){return a.getAttribute("id")===b}},d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c=b.getElementById(a);return c?[c]:[]}}):(d.filter.ID=function(a){var b=a.replace(_,aa);return function(a){var c="undefined"!=typeof a.getAttributeNode&&a.getAttributeNode("id");return c&&c.value===b}},d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c,d,e,f=b.getElementById(a);if(f){if(c=f.getAttributeNode("id"),c&&c.value===a)return[f];e=b.getElementsByName(a),d=0;while(f=e[d++])if(c=f.getAttributeNode("id"),c&&c.value===a)return[f]}return[]}}),d.find.TAG=c.getElementsByTagName?function(a,b){return"undefined"!=typeof b.getElementsByTagName?b.getElementsByTagName(a):c.qsa?b.querySelectorAll(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){if("undefined"!=typeof b.getElementsByClassName&&p)return b.getElementsByClassName(a)},r=[],q=[],(c.qsa=Y.test(n.querySelectorAll))&&(ja(function(a){o.appendChild(a).innerHTML="<a id='"+u+"'></a><select id='"+u+"-\r\\' msallowcapture=''><option selected=''></option></select>",a.querySelectorAll("[msallowcapture^='']").length&&q.push("[*^$]="+K+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+K+"*(?:value|"+J+")"),a.querySelectorAll("[id~="+u+"-]").length||q.push("~="),a.querySelectorAll(":checked").length||q.push(":checked"),a.querySelectorAll("a#"+u+"+*").length||q.push(".#.+[+~]")}),ja(function(a){a.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var b=n.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+K+"*[*^$|!~]?="),2!==a.querySelectorAll(":enabled").length&&q.push(":enabled",":disabled"),o.appendChild(a).disabled=!0,2!==a.querySelectorAll(":disabled").length&&q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=Y.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&ja(function(a){c.disconnectedMatch=s.call(a,"*"),s.call(a,"[s!='']:x"),r.push("!=",N)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=Y.test(o.compareDocumentPosition),t=b||Y.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===n||a.ownerDocument===v&&t(v,a)?-1:b===n||b.ownerDocument===v&&t(v,b)?1:k?I(k,a)-I(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,e=a.parentNode,f=b.parentNode,g=[a],h=[b];if(!e||!f)return a===n?-1:b===n?1:e?-1:f?1:k?I(k,a)-I(k,b):0;if(e===f)return la(a,b);c=a;while(c=c.parentNode)g.unshift(c);c=b;while(c=c.parentNode)h.unshift(c);while(g[d]===h[d])d++;return d?la(g[d],h[d]):g[d]===v?-1:h[d]===v?1:0},n):n},ga.matches=function(a,b){return ga(a,null,null,b)},ga.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(S,"='$1']"),c.matchesSelector&&p&&!A[b+" "]&&(!r||!r.test(b))&&(!q||!q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return ga(b,n,null,[a]).length>0},ga.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},ga.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&C.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},ga.escape=function(a){return(a+"").replace(ba,ca)},ga.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},ga.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=ga.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=ga.selectors={cacheLength:50,createPseudo:ia,match:V,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(_,aa),a[3]=(a[3]||a[4]||a[5]||"").replace(_,aa),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||ga.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&ga.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return V.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&T.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(_,aa).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+K+")"+a+"("+K+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||"undefined"!=typeof a.getAttribute&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=ga.attr(d,a);return null==e?"!="===b:!b||(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e.replace(O," ")+" ").indexOf(c)>-1:"|="===b&&(e===c||e.slice(0,c.length+1)===c+"-"))}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h,t=!1;if(q){if(f){while(p){m=b;while(m=m[p])if(h?m.nodeName.toLowerCase()===r:1===m.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){m=q,l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n&&j[2],m=n&&q.childNodes[n];while(m=++n&&m&&m[p]||(t=n=0)||o.pop())if(1===m.nodeType&&++t&&m===b){k[a]=[w,n,t];break}}else if(s&&(m=b,l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n),t===!1)while(m=++n&&m&&m[p]||(t=n=0)||o.pop())if((h?m.nodeName.toLowerCase()===r:1===m.nodeType)&&++t&&(s&&(l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),k[a]=[w,t]),m===b))break;return t-=e,t===d||t%d===0&&t/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||ga.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?ia(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=I(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:ia(function(a){var b=[],c=[],d=h(a.replace(P,"$1"));return d[u]?ia(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),b[0]=null,!c.pop()}}),has:ia(function(a){return function(b){return ga(a,b).length>0}}),contains:ia(function(a){return a=a.replace(_,aa),function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:ia(function(a){return U.test(a||"")||ga.error("unsupported lang: "+a),a=a.replace(_,aa).toLowerCase(),function(b){var c;do if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:oa(!1),disabled:oa(!0),checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return X.test(a.nodeName)},input:function(a){return W.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:pa(function(){return[0]}),last:pa(function(a,b){return[b-1]}),eq:pa(function(a,b,c){return[c<0?c+b:c]}),even:pa(function(a,b){for(var c=0;c<b;c+=2)a.push(c);return a}),odd:pa(function(a,b){for(var c=1;c<b;c+=2)a.push(c);return a}),lt:pa(function(a,b,c){for(var d=c<0?c+b:c;--d>=0;)a.push(d);return a}),gt:pa(function(a,b,c){for(var d=c<0?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=ma(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=na(b);function ra(){}ra.prototype=d.filters=d.pseudos,d.setFilters=new ra,g=ga.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){c&&!(e=Q.exec(h))||(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=R.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(P," ")}),h=h.slice(c.length));for(g in d.filter)!(e=V[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?ga.error(a):z(a,i).slice(0)};function sa(a){for(var b=0,c=a.length,d="";b<c;b++)d+=a[b].value;return d}function ta(a,b,c){var d=b.dir,e=b.next,f=e||d,g=c&&"parentNode"===f,h=x++;return b.first?function(b,c,e){while(b=b[d])if(1===b.nodeType||g)return a(b,c,e);return!1}:function(b,c,i){var j,k,l,m=[w,h];if(i){while(b=b[d])if((1===b.nodeType||g)&&a(b,c,i))return!0}else while(b=b[d])if(1===b.nodeType||g)if(l=b[u]||(b[u]={}),k=l[b.uniqueID]||(l[b.uniqueID]={}),e&&e===b.nodeName.toLowerCase())b=b[d]||b;else{if((j=k[f])&&j[0]===w&&j[1]===h)return m[2]=j[2];if(k[f]=m,m[2]=a(b,c,i))return!0}return!1}}function ua(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function va(a,b,c){for(var d=0,e=b.length;d<e;d++)ga(a,b[d],c);return c}function wa(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;h<i;h++)(f=a[h])&&(c&&!c(f,d,e)||(g.push(f),j&&b.push(h)));return g}function xa(a,b,c,d,e,f){return d&&!d[u]&&(d=xa(d)),e&&!e[u]&&(e=xa(e,f)),ia(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||va(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:wa(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=wa(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?I(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=wa(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):G.apply(g,r)})}function ya(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=ta(function(a){return a===b},h,!0),l=ta(function(a){return I(b,a)>-1},h,!0),m=[function(a,c,d){var e=!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d));return b=null,e}];i<f;i++)if(c=d.relative[a[i].type])m=[ta(ua(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;e<f;e++)if(d.relative[a[e].type])break;return xa(i>1&&ua(m),i>1&&sa(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(P,"$1"),c,i<e&&ya(a.slice(i,e)),e<f&&ya(a=a.slice(e)),e<f&&sa(a))}m.push(c)}return ua(m)}function za(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,o,q,r=0,s="0",t=f&&[],u=[],v=j,x=f||e&&d.find.TAG("*",k),y=w+=null==v?1:Math.random()||.1,z=x.length;for(k&&(j=g===n||g||k);s!==z&&null!=(l=x[s]);s++){if(e&&l){o=0,g||l.ownerDocument===n||(m(l),h=!p);while(q=a[o++])if(q(l,g||n,h)){i.push(l);break}k&&(w=y)}c&&((l=!q&&l)&&r--,f&&t.push(l))}if(r+=s,c&&s!==r){o=0;while(q=b[o++])q(t,u,g,h);if(f){if(r>0)while(s--)t[s]||u[s]||(u[s]=E.call(i));u=wa(u)}G.apply(i,u),k&&!f&&u.length>0&&r+b.length>1&&ga.uniqueSort(i)}return k&&(w=y,j=v),t};return c?ia(f):f}return h=ga.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--)f=ya(b[c]),f[u]?d.push(f):e.push(f);f=A(a,za(e,d)),f.selector=a}return f},i=ga.select=function(a,b,c,e){var f,i,j,k,l,m="function"==typeof a&&a,n=!e&&g(a=m.selector||a);if(c=c||[],1===n.length){if(i=n[0]=n[0].slice(0),i.length>2&&"ID"===(j=i[0]).type&&9===b.nodeType&&p&&d.relative[i[1].type]){if(b=(d.find.ID(j.matches[0].replace(_,aa),b)||[])[0],!b)return c;m&&(b=b.parentNode),a=a.slice(i.shift().value.length)}f=V.needsContext.test(a)?0:i.length;while(f--){if(j=i[f],d.relative[k=j.type])break;if((l=d.find[k])&&(e=l(j.matches[0].replace(_,aa),$.test(i[0].type)&&qa(b.parentNode)||b))){if(i.splice(f,1),a=e.length&&sa(i),!a)return G.apply(c,e),c;break}}}return(m||h(a,n))(e,b,!p,c,!b||$.test(a)&&qa(b.parentNode)||b),c},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=ja(function(a){return 1&a.compareDocumentPosition(n.createElement("fieldset"))}),ja(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||ka("type|href|height|width",function(a,b,c){if(!c)return a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&ja(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||ka("value",function(a,b,c){if(!c&&"input"===a.nodeName.toLowerCase())return a.defaultValue}),ja(function(a){return null==a.getAttribute("disabled")})||ka(J,function(a,b,c){var d;if(!c)return a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),ga}(a);r.find=x,r.expr=x.selectors,r.expr[":"]=r.expr.pseudos,r.uniqueSort=r.unique=x.uniqueSort,r.text=x.getText,r.isXMLDoc=x.isXML,r.contains=x.contains,r.escapeSelector=x.escape;var y=function(a,b,c){var d=[],e=void 0!==c;while((a=a[b])&&9!==a.nodeType)if(1===a.nodeType){if(e&&r(a).is(c))break;d.push(a)}return d},z=function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c},A=r.expr.match.needsContext;function B(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()}var C=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i,D=/^.[^:#\[\.,]*$/;function E(a,b,c){return r.isFunction(b)?r.grep(a,function(a,d){return!!b.call(a,d,a)!==c}):b.nodeType?r.grep(a,function(a){return a===b!==c}):"string"!=typeof b?r.grep(a,function(a){return i.call(b,a)>-1!==c}):D.test(b)?r.filter(b,a,c):(b=r.filter(b,a),r.grep(a,function(a){return i.call(b,a)>-1!==c&&1===a.nodeType}))}r.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?r.find.matchesSelector(d,a)?[d]:[]:r.find.matches(a,r.grep(b,function(a){return 1===a.nodeType}))},r.fn.extend({find:function(a){var b,c,d=this.length,e=this;if("string"!=typeof a)return this.pushStack(r(a).filter(function(){for(b=0;b<d;b++)if(r.contains(e[b],this))return!0}));for(c=this.pushStack([]),b=0;b<d;b++)r.find(a,e[b],c);return d>1?r.uniqueSort(c):c},filter:function(a){return this.pushStack(E(this,a||[],!1))},not:function(a){return this.pushStack(E(this,a||[],!0))},is:function(a){return!!E(this,"string"==typeof a&&A.test(a)?r(a):a||[],!1).length}});var F,G=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,H=r.fn.init=function(a,b,c){var e,f;if(!a)return this;if(c=c||F,"string"==typeof a){if(e="<"===a[0]&&">"===a[a.length-1]&&a.length>=3?[null,a,null]:G.exec(a),!e||!e[1]&&b)return!b||b.jquery?(b||c).find(a):this.constructor(b).find(a);if(e[1]){if(b=b instanceof r?b[0]:b,r.merge(this,r.parseHTML(e[1],b&&b.nodeType?b.ownerDocument||b:d,!0)),C.test(e[1])&&r.isPlainObject(b))for(e in b)r.isFunction(this[e])?this[e](b[e]):this.attr(e,b[e]);return this}return f=d.getElementById(e[2]),f&&(this[0]=f,this.length=1),this}return a.nodeType?(this[0]=a,this.length=1,this):r.isFunction(a)?void 0!==c.ready?c.ready(a):a(r):r.makeArray(a,this)};H.prototype=r.fn,F=r(d);var I=/^(?:parents|prev(?:Until|All))/,J={children:!0,contents:!0,next:!0,prev:!0};r.fn.extend({has:function(a){var b=r(a,this),c=b.length;return this.filter(function(){for(var a=0;a<c;a++)if(r.contains(this,b[a]))return!0})},closest:function(a,b){var c,d=0,e=this.length,f=[],g="string"!=typeof a&&r(a);if(!A.test(a))for(;d<e;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&r.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?r.uniqueSort(f):f)},index:function(a){return a?"string"==typeof a?i.call(r(a),this[0]):i.call(this,a.jquery?a[0]:a):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(r.uniqueSort(r.merge(this.get(),r(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function K(a,b){while((a=a[b])&&1!==a.nodeType);return a}r.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return y(a,"parentNode")},parentsUntil:function(a,b,c){return y(a,"parentNode",c)},next:function(a){return K(a,"nextSibling")},prev:function(a){return K(a,"previousSibling")},nextAll:function(a){return y(a,"nextSibling")},prevAll:function(a){return y(a,"previousSibling")},nextUntil:function(a,b,c){return y(a,"nextSibling",c)},prevUntil:function(a,b,c){return y(a,"previousSibling",c)},siblings:function(a){return z((a.parentNode||{}).firstChild,a)},children:function(a){return z(a.firstChild)},contents:function(a){return B(a,"iframe")?a.contentDocument:(B(a,"template")&&(a=a.content||a),r.merge([],a.childNodes))}},function(a,b){r.fn[a]=function(c,d){var e=r.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=r.filter(d,e)),this.length>1&&(J[a]||r.uniqueSort(e),I.test(a)&&e.reverse()),this.pushStack(e)}});var L=/[^\x20\t\r\n\f]+/g;function M(a){var b={};return r.each(a.match(L)||[],function(a,c){b[c]=!0}),b}r.Callbacks=function(a){a="string"==typeof a?M(a):r.extend({},a);var b,c,d,e,f=[],g=[],h=-1,i=function(){for(e=e||a.once,d=b=!0;g.length;h=-1){c=g.shift();while(++h<f.length)f[h].apply(c[0],c[1])===!1&&a.stopOnFalse&&(h=f.length,c=!1)}a.memory||(c=!1),b=!1,e&&(f=c?[]:"")},j={add:function(){return f&&(c&&!b&&(h=f.length-1,g.push(c)),function d(b){r.each(b,function(b,c){r.isFunction(c)?a.unique&&j.has(c)||f.push(c):c&&c.length&&"string"!==r.type(c)&&d(c)})}(arguments),c&&!b&&i()),this},remove:function(){return r.each(arguments,function(a,b){var c;while((c=r.inArray(b,f,c))>-1)f.splice(c,1),c<=h&&h--}),this},has:function(a){return a?r.inArray(a,f)>-1:f.length>0},empty:function(){return f&&(f=[]),this},disable:function(){return e=g=[],f=c="",this},disabled:function(){return!f},lock:function(){return e=g=[],c||b||(f=c=""),this},locked:function(){return!!e},fireWith:function(a,c){return e||(c=c||[],c=[a,c.slice?c.slice():c],g.push(c),b||i()),this},fire:function(){return j.fireWith(this,arguments),this},fired:function(){return!!d}};return j};function N(a){return a}function O(a){throw a}function P(a,b,c,d){var e;try{a&&r.isFunction(e=a.promise)?e.call(a).done(b).fail(c):a&&r.isFunction(e=a.then)?e.call(a,b,c):b.apply(void 0,[a].slice(d))}catch(a){c.apply(void 0,[a])}}r.extend({Deferred:function(b){var c=[["notify","progress",r.Callbacks("memory"),r.Callbacks("memory"),2],["resolve","done",r.Callbacks("once memory"),r.Callbacks("once memory"),0,"resolved"],["reject","fail",r.Callbacks("once memory"),r.Callbacks("once memory"),1,"rejected"]],d="pending",e={state:function(){return d},always:function(){return f.done(arguments).fail(arguments),this},"catch":function(a){return e.then(null,a)},pipe:function(){var a=arguments;return r.Deferred(function(b){r.each(c,function(c,d){var e=r.isFunction(a[d[4]])&&a[d[4]];f[d[1]](function(){var a=e&&e.apply(this,arguments);a&&r.isFunction(a.promise)?a.promise().progress(b.notify).done(b.resolve).fail(b.reject):b[d[0]+"With"](this,e?[a]:arguments)})}),a=null}).promise()},then:function(b,d,e){var f=0;function g(b,c,d,e){return function(){var h=this,i=arguments,j=function(){var a,j;if(!(b<f)){if(a=d.apply(h,i),a===c.promise())throw new TypeError("Thenable self-resolution");j=a&&("object"==typeof a||"function"==typeof a)&&a.then,r.isFunction(j)?e?j.call(a,g(f,c,N,e),g(f,c,O,e)):(f++,j.call(a,g(f,c,N,e),g(f,c,O,e),g(f,c,N,c.notifyWith))):(d!==N&&(h=void 0,i=[a]),(e||c.resolveWith)(h,i))}},k=e?j:function(){try{j()}catch(a){r.Deferred.exceptionHook&&r.Deferred.exceptionHook(a,k.stackTrace),b+1>=f&&(d!==O&&(h=void 0,i=[a]),c.rejectWith(h,i))}};b?k():(r.Deferred.getStackHook&&(k.stackTrace=r.Deferred.getStackHook()),a.setTimeout(k))}}return r.Deferred(function(a){c[0][3].add(g(0,a,r.isFunction(e)?e:N,a.notifyWith)),c[1][3].add(g(0,a,r.isFunction(b)?b:N)),c[2][3].add(g(0,a,r.isFunction(d)?d:O))}).promise()},promise:function(a){return null!=a?r.extend(a,e):e}},f={};return r.each(c,function(a,b){var g=b[2],h=b[5];e[b[1]]=g.add,h&&g.add(function(){d=h},c[3-a][2].disable,c[0][2].lock),g.add(b[3].fire),f[b[0]]=function(){return f[b[0]+"With"](this===f?void 0:this,arguments),this},f[b[0]+"With"]=g.fireWith}),e.promise(f),b&&b.call(f,f),f},when:function(a){var b=arguments.length,c=b,d=Array(c),e=f.call(arguments),g=r.Deferred(),h=function(a){return function(c){d[a]=this,e[a]=arguments.length>1?f.call(arguments):c,--b||g.resolveWith(d,e)}};if(b<=1&&(P(a,g.done(h(c)).resolve,g.reject,!b),"pending"===g.state()||r.isFunction(e[c]&&e[c].then)))return g.then();while(c--)P(e[c],h(c),g.reject);return g.promise()}});var Q=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;r.Deferred.exceptionHook=function(b,c){a.console&&a.console.warn&&b&&Q.test(b.name)&&a.console.warn("jQuery.Deferred exception: "+b.message,b.stack,c)},r.readyException=function(b){a.setTimeout(function(){throw b})};var R=r.Deferred();r.fn.ready=function(a){return R.then(a)["catch"](function(a){r.readyException(a)}),this},r.extend({isReady:!1,readyWait:1,ready:function(a){(a===!0?--r.readyWait:r.isReady)||(r.isReady=!0,a!==!0&&--r.readyWait>0||R.resolveWith(d,[r]))}}),r.ready.then=R.then;function S(){d.removeEventListener("DOMContentLoaded",S),
a.removeEventListener("load",S),r.ready()}"complete"===d.readyState||"loading"!==d.readyState&&!d.documentElement.doScroll?a.setTimeout(r.ready):(d.addEventListener("DOMContentLoaded",S),a.addEventListener("load",S));var T=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===r.type(c)){e=!0;for(h in c)T(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,r.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(r(a),c)})),b))for(;h<i;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f},U=function(a){return 1===a.nodeType||9===a.nodeType||!+a.nodeType};function V(){this.expando=r.expando+V.uid++}V.uid=1,V.prototype={cache:function(a){var b=a[this.expando];return b||(b={},U(a)&&(a.nodeType?a[this.expando]=b:Object.defineProperty(a,this.expando,{value:b,configurable:!0}))),b},set:function(a,b,c){var d,e=this.cache(a);if("string"==typeof b)e[r.camelCase(b)]=c;else for(d in b)e[r.camelCase(d)]=b[d];return e},get:function(a,b){return void 0===b?this.cache(a):a[this.expando]&&a[this.expando][r.camelCase(b)]},access:function(a,b,c){return void 0===b||b&&"string"==typeof b&&void 0===c?this.get(a,b):(this.set(a,b,c),void 0!==c?c:b)},remove:function(a,b){var c,d=a[this.expando];if(void 0!==d){if(void 0!==b){Array.isArray(b)?b=b.map(r.camelCase):(b=r.camelCase(b),b=b in d?[b]:b.match(L)||[]),c=b.length;while(c--)delete d[b[c]]}(void 0===b||r.isEmptyObject(d))&&(a.nodeType?a[this.expando]=void 0:delete a[this.expando])}},hasData:function(a){var b=a[this.expando];return void 0!==b&&!r.isEmptyObject(b)}};var W=new V,X=new V,Y=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,Z=/[A-Z]/g;function $(a){return"true"===a||"false"!==a&&("null"===a?null:a===+a+""?+a:Y.test(a)?JSON.parse(a):a)}function _(a,b,c){var d;if(void 0===c&&1===a.nodeType)if(d="data-"+b.replace(Z,"-$&").toLowerCase(),c=a.getAttribute(d),"string"==typeof c){try{c=$(c)}catch(e){}X.set(a,b,c)}else c=void 0;return c}r.extend({hasData:function(a){return X.hasData(a)||W.hasData(a)},data:function(a,b,c){return X.access(a,b,c)},removeData:function(a,b){X.remove(a,b)},_data:function(a,b,c){return W.access(a,b,c)},_removeData:function(a,b){W.remove(a,b)}}),r.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=X.get(f),1===f.nodeType&&!W.get(f,"hasDataAttrs"))){c=g.length;while(c--)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=r.camelCase(d.slice(5)),_(f,d,e[d])));W.set(f,"hasDataAttrs",!0)}return e}return"object"==typeof a?this.each(function(){X.set(this,a)}):T(this,function(b){var c;if(f&&void 0===b){if(c=X.get(f,a),void 0!==c)return c;if(c=_(f,a),void 0!==c)return c}else this.each(function(){X.set(this,a,b)})},null,b,arguments.length>1,null,!0)},removeData:function(a){return this.each(function(){X.remove(this,a)})}}),r.extend({queue:function(a,b,c){var d;if(a)return b=(b||"fx")+"queue",d=W.get(a,b),c&&(!d||Array.isArray(c)?d=W.access(a,b,r.makeArray(c)):d.push(c)),d||[]},dequeue:function(a,b){b=b||"fx";var c=r.queue(a,b),d=c.length,e=c.shift(),f=r._queueHooks(a,b),g=function(){r.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return W.get(a,c)||W.access(a,c,{empty:r.Callbacks("once memory").add(function(){W.remove(a,[b+"queue",c])})})}}),r.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?r.queue(this[0],a):void 0===b?this:this.each(function(){var c=r.queue(this,a,b);r._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&r.dequeue(this,a)})},dequeue:function(a){return this.each(function(){r.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=r.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=W.get(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var aa=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,ba=new RegExp("^(?:([+-])=|)("+aa+")([a-z%]*)$","i"),ca=["Top","Right","Bottom","Left"],da=function(a,b){return a=b||a,"none"===a.style.display||""===a.style.display&&r.contains(a.ownerDocument,a)&&"none"===r.css(a,"display")},ea=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e};function fa(a,b,c,d){var e,f=1,g=20,h=d?function(){return d.cur()}:function(){return r.css(a,b,"")},i=h(),j=c&&c[3]||(r.cssNumber[b]?"":"px"),k=(r.cssNumber[b]||"px"!==j&&+i)&&ba.exec(r.css(a,b));if(k&&k[3]!==j){j=j||k[3],c=c||[],k=+i||1;do f=f||".5",k/=f,r.style(a,b,k+j);while(f!==(f=h()/i)&&1!==f&&--g)}return c&&(k=+k||+i||0,e=c[1]?k+(c[1]+1)*c[2]:+c[2],d&&(d.unit=j,d.start=k,d.end=e)),e}var ga={};function ha(a){var b,c=a.ownerDocument,d=a.nodeName,e=ga[d];return e?e:(b=c.body.appendChild(c.createElement(d)),e=r.css(b,"display"),b.parentNode.removeChild(b),"none"===e&&(e="block"),ga[d]=e,e)}function ia(a,b){for(var c,d,e=[],f=0,g=a.length;f<g;f++)d=a[f],d.style&&(c=d.style.display,b?("none"===c&&(e[f]=W.get(d,"display")||null,e[f]||(d.style.display="")),""===d.style.display&&da(d)&&(e[f]=ha(d))):"none"!==c&&(e[f]="none",W.set(d,"display",c)));for(f=0;f<g;f++)null!=e[f]&&(a[f].style.display=e[f]);return a}r.fn.extend({show:function(){return ia(this,!0)},hide:function(){return ia(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){da(this)?r(this).show():r(this).hide()})}});var ja=/^(?:checkbox|radio)$/i,ka=/<([a-z][^\/\0>\x20\t\r\n\f]+)/i,la=/^$|\/(?:java|ecma)script/i,ma={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};ma.optgroup=ma.option,ma.tbody=ma.tfoot=ma.colgroup=ma.caption=ma.thead,ma.th=ma.td;function na(a,b){var c;return c="undefined"!=typeof a.getElementsByTagName?a.getElementsByTagName(b||"*"):"undefined"!=typeof a.querySelectorAll?a.querySelectorAll(b||"*"):[],void 0===b||b&&B(a,b)?r.merge([a],c):c}function oa(a,b){for(var c=0,d=a.length;c<d;c++)W.set(a[c],"globalEval",!b||W.get(b[c],"globalEval"))}var pa=/<|&#?\w+;/;function qa(a,b,c,d,e){for(var f,g,h,i,j,k,l=b.createDocumentFragment(),m=[],n=0,o=a.length;n<o;n++)if(f=a[n],f||0===f)if("object"===r.type(f))r.merge(m,f.nodeType?[f]:f);else if(pa.test(f)){g=g||l.appendChild(b.createElement("div")),h=(ka.exec(f)||["",""])[1].toLowerCase(),i=ma[h]||ma._default,g.innerHTML=i[1]+r.htmlPrefilter(f)+i[2],k=i[0];while(k--)g=g.lastChild;r.merge(m,g.childNodes),g=l.firstChild,g.textContent=""}else m.push(b.createTextNode(f));l.textContent="",n=0;while(f=m[n++])if(d&&r.inArray(f,d)>-1)e&&e.push(f);else if(j=r.contains(f.ownerDocument,f),g=na(l.appendChild(f),"script"),j&&oa(g),c){k=0;while(f=g[k++])la.test(f.type||"")&&c.push(f)}return l}!function(){var a=d.createDocumentFragment(),b=a.appendChild(d.createElement("div")),c=d.createElement("input");c.setAttribute("type","radio"),c.setAttribute("checked","checked"),c.setAttribute("name","t"),b.appendChild(c),o.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,b.innerHTML="<textarea>x</textarea>",o.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue}();var ra=d.documentElement,sa=/^key/,ta=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,ua=/^([^.]*)(?:\.(.+)|)/;function va(){return!0}function wa(){return!1}function xa(){try{return d.activeElement}catch(a){}}function ya(a,b,c,d,e,f){var g,h;if("object"==typeof b){"string"!=typeof c&&(d=d||c,c=void 0);for(h in b)ya(a,h,c,d,b[h],f);return a}if(null==d&&null==e?(e=c,d=c=void 0):null==e&&("string"==typeof c?(e=d,d=void 0):(e=d,d=c,c=void 0)),e===!1)e=wa;else if(!e)return a;return 1===f&&(g=e,e=function(a){return r().off(a),g.apply(this,arguments)},e.guid=g.guid||(g.guid=r.guid++)),a.each(function(){r.event.add(this,b,e,d,c)})}r.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q=W.get(a);if(q){c.handler&&(f=c,c=f.handler,e=f.selector),e&&r.find.matchesSelector(ra,e),c.guid||(c.guid=r.guid++),(i=q.events)||(i=q.events={}),(g=q.handle)||(g=q.handle=function(b){return"undefined"!=typeof r&&r.event.triggered!==b.type?r.event.dispatch.apply(a,arguments):void 0}),b=(b||"").match(L)||[""],j=b.length;while(j--)h=ua.exec(b[j])||[],n=p=h[1],o=(h[2]||"").split(".").sort(),n&&(l=r.event.special[n]||{},n=(e?l.delegateType:l.bindType)||n,l=r.event.special[n]||{},k=r.extend({type:n,origType:p,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&r.expr.match.needsContext.test(e),namespace:o.join(".")},f),(m=i[n])||(m=i[n]=[],m.delegateCount=0,l.setup&&l.setup.call(a,d,o,g)!==!1||a.addEventListener&&a.addEventListener(n,g)),l.add&&(l.add.call(a,k),k.handler.guid||(k.handler.guid=c.guid)),e?m.splice(m.delegateCount++,0,k):m.push(k),r.event.global[n]=!0)}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q=W.hasData(a)&&W.get(a);if(q&&(i=q.events)){b=(b||"").match(L)||[""],j=b.length;while(j--)if(h=ua.exec(b[j])||[],n=p=h[1],o=(h[2]||"").split(".").sort(),n){l=r.event.special[n]||{},n=(d?l.delegateType:l.bindType)||n,m=i[n]||[],h=h[2]&&new RegExp("(^|\\.)"+o.join("\\.(?:.*\\.|)")+"(\\.|$)"),g=f=m.length;while(f--)k=m[f],!e&&p!==k.origType||c&&c.guid!==k.guid||h&&!h.test(k.namespace)||d&&d!==k.selector&&("**"!==d||!k.selector)||(m.splice(f,1),k.selector&&m.delegateCount--,l.remove&&l.remove.call(a,k));g&&!m.length&&(l.teardown&&l.teardown.call(a,o,q.handle)!==!1||r.removeEvent(a,n,q.handle),delete i[n])}else for(n in i)r.event.remove(a,n+b[j],c,d,!0);r.isEmptyObject(i)&&W.remove(a,"handle events")}},dispatch:function(a){var b=r.event.fix(a),c,d,e,f,g,h,i=new Array(arguments.length),j=(W.get(this,"events")||{})[b.type]||[],k=r.event.special[b.type]||{};for(i[0]=b,c=1;c<arguments.length;c++)i[c]=arguments[c];if(b.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,b)!==!1){h=r.event.handlers.call(this,b,j),c=0;while((f=h[c++])&&!b.isPropagationStopped()){b.currentTarget=f.elem,d=0;while((g=f.handlers[d++])&&!b.isImmediatePropagationStopped())b.rnamespace&&!b.rnamespace.test(g.namespace)||(b.handleObj=g,b.data=g.data,e=((r.event.special[g.origType]||{}).handle||g.handler).apply(f.elem,i),void 0!==e&&(b.result=e)===!1&&(b.preventDefault(),b.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,b),b.result}},handlers:function(a,b){var c,d,e,f,g,h=[],i=b.delegateCount,j=a.target;if(i&&j.nodeType&&!("click"===a.type&&a.button>=1))for(;j!==this;j=j.parentNode||this)if(1===j.nodeType&&("click"!==a.type||j.disabled!==!0)){for(f=[],g={},c=0;c<i;c++)d=b[c],e=d.selector+" ",void 0===g[e]&&(g[e]=d.needsContext?r(e,this).index(j)>-1:r.find(e,this,null,[j]).length),g[e]&&f.push(d);f.length&&h.push({elem:j,handlers:f})}return j=this,i<b.length&&h.push({elem:j,handlers:b.slice(i)}),h},addProp:function(a,b){Object.defineProperty(r.Event.prototype,a,{enumerable:!0,configurable:!0,get:r.isFunction(b)?function(){if(this.originalEvent)return b(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[a]},set:function(b){Object.defineProperty(this,a,{enumerable:!0,configurable:!0,writable:!0,value:b})}})},fix:function(a){return a[r.expando]?a:new r.Event(a)},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==xa()&&this.focus)return this.focus(),!1},delegateType:"focusin"},blur:{trigger:function(){if(this===xa()&&this.blur)return this.blur(),!1},delegateType:"focusout"},click:{trigger:function(){if("checkbox"===this.type&&this.click&&B(this,"input"))return this.click(),!1},_default:function(a){return B(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}}},r.removeEvent=function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c)},r.Event=function(a,b){return this instanceof r.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?va:wa,this.target=a.target&&3===a.target.nodeType?a.target.parentNode:a.target,this.currentTarget=a.currentTarget,this.relatedTarget=a.relatedTarget):this.type=a,b&&r.extend(this,b),this.timeStamp=a&&a.timeStamp||r.now(),void(this[r.expando]=!0)):new r.Event(a,b)},r.Event.prototype={constructor:r.Event,isDefaultPrevented:wa,isPropagationStopped:wa,isImmediatePropagationStopped:wa,isSimulated:!1,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=va,a&&!this.isSimulated&&a.preventDefault()},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=va,a&&!this.isSimulated&&a.stopPropagation()},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=va,a&&!this.isSimulated&&a.stopImmediatePropagation(),this.stopPropagation()}},r.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,"char":!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:function(a){var b=a.button;return null==a.which&&sa.test(a.type)?null!=a.charCode?a.charCode:a.keyCode:!a.which&&void 0!==b&&ta.test(a.type)?1&b?1:2&b?3:4&b?2:0:a.which}},r.event.addProp),r.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){r.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return e&&(e===d||r.contains(d,e))||(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),r.fn.extend({on:function(a,b,c,d){return ya(this,a,b,c,d)},one:function(a,b,c,d){return ya(this,a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,r(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return b!==!1&&"function"!=typeof b||(c=b,b=void 0),c===!1&&(c=wa),this.each(function(){r.event.remove(this,a,c,b)})}});var za=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,Aa=/<script|<style|<link/i,Ba=/checked\s*(?:[^=]|=\s*.checked.)/i,Ca=/^true\/(.*)/,Da=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function Ea(a,b){return B(a,"table")&&B(11!==b.nodeType?b:b.firstChild,"tr")?r(">tbody",a)[0]||a:a}function Fa(a){return a.type=(null!==a.getAttribute("type"))+"/"+a.type,a}function Ga(a){var b=Ca.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function Ha(a,b){var c,d,e,f,g,h,i,j;if(1===b.nodeType){if(W.hasData(a)&&(f=W.access(a),g=W.set(b,f),j=f.events)){delete g.handle,g.events={};for(e in j)for(c=0,d=j[e].length;c<d;c++)r.event.add(b,e,j[e][c])}X.hasData(a)&&(h=X.access(a),i=r.extend({},h),X.set(b,i))}}function Ia(a,b){var c=b.nodeName.toLowerCase();"input"===c&&ja.test(a.type)?b.checked=a.checked:"input"!==c&&"textarea"!==c||(b.defaultValue=a.defaultValue)}function Ja(a,b,c,d){b=g.apply([],b);var e,f,h,i,j,k,l=0,m=a.length,n=m-1,q=b[0],s=r.isFunction(q);if(s||m>1&&"string"==typeof q&&!o.checkClone&&Ba.test(q))return a.each(function(e){var f=a.eq(e);s&&(b[0]=q.call(this,e,f.html())),Ja(f,b,c,d)});if(m&&(e=qa(b,a[0].ownerDocument,!1,a,d),f=e.firstChild,1===e.childNodes.length&&(e=f),f||d)){for(h=r.map(na(e,"script"),Fa),i=h.length;l<m;l++)j=e,l!==n&&(j=r.clone(j,!0,!0),i&&r.merge(h,na(j,"script"))),c.call(a[l],j,l);if(i)for(k=h[h.length-1].ownerDocument,r.map(h,Ga),l=0;l<i;l++)j=h[l],la.test(j.type||"")&&!W.access(j,"globalEval")&&r.contains(k,j)&&(j.src?r._evalUrl&&r._evalUrl(j.src):p(j.textContent.replace(Da,""),k))}return a}function Ka(a,b,c){for(var d,e=b?r.filter(b,a):a,f=0;null!=(d=e[f]);f++)c||1!==d.nodeType||r.cleanData(na(d)),d.parentNode&&(c&&r.contains(d.ownerDocument,d)&&oa(na(d,"script")),d.parentNode.removeChild(d));return a}r.extend({htmlPrefilter:function(a){return a.replace(za,"<$1></$2>")},clone:function(a,b,c){var d,e,f,g,h=a.cloneNode(!0),i=r.contains(a.ownerDocument,a);if(!(o.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||r.isXMLDoc(a)))for(g=na(h),f=na(a),d=0,e=f.length;d<e;d++)Ia(f[d],g[d]);if(b)if(c)for(f=f||na(a),g=g||na(h),d=0,e=f.length;d<e;d++)Ha(f[d],g[d]);else Ha(a,h);return g=na(h,"script"),g.length>0&&oa(g,!i&&na(a,"script")),h},cleanData:function(a){for(var b,c,d,e=r.event.special,f=0;void 0!==(c=a[f]);f++)if(U(c)){if(b=c[W.expando]){if(b.events)for(d in b.events)e[d]?r.event.remove(c,d):r.removeEvent(c,d,b.handle);c[W.expando]=void 0}c[X.expando]&&(c[X.expando]=void 0)}}}),r.fn.extend({detach:function(a){return Ka(this,a,!0)},remove:function(a){return Ka(this,a)},text:function(a){return T(this,function(a){return void 0===a?r.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=a)})},null,a,arguments.length)},append:function(){return Ja(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=Ea(this,a);b.appendChild(a)}})},prepend:function(){return Ja(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=Ea(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return Ja(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return Ja(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},empty:function(){for(var a,b=0;null!=(a=this[b]);b++)1===a.nodeType&&(r.cleanData(na(a,!1)),a.textContent="");return this},clone:function(a,b){return a=null!=a&&a,b=null==b?a:b,this.map(function(){return r.clone(this,a,b)})},html:function(a){return T(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a&&1===b.nodeType)return b.innerHTML;if("string"==typeof a&&!Aa.test(a)&&!ma[(ka.exec(a)||["",""])[1].toLowerCase()]){a=r.htmlPrefilter(a);try{for(;c<d;c++)b=this[c]||{},1===b.nodeType&&(r.cleanData(na(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=[];return Ja(this,arguments,function(b){var c=this.parentNode;r.inArray(this,a)<0&&(r.cleanData(na(this)),c&&c.replaceChild(b,this))},a)}}),r.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){r.fn[a]=function(a){for(var c,d=[],e=r(a),f=e.length-1,g=0;g<=f;g++)c=g===f?this:this.clone(!0),r(e[g])[b](c),h.apply(d,c.get());return this.pushStack(d)}});var La=/^margin/,Ma=new RegExp("^("+aa+")(?!px)[a-z%]+$","i"),Na=function(b){var c=b.ownerDocument.defaultView;return c&&c.opener||(c=a),c.getComputedStyle(b)};!function(){function b(){if(i){i.style.cssText="box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%",i.innerHTML="",ra.appendChild(h);var b=a.getComputedStyle(i);c="1%"!==b.top,g="2px"===b.marginLeft,e="4px"===b.width,i.style.marginRight="50%",f="4px"===b.marginRight,ra.removeChild(h),i=null}}var c,e,f,g,h=d.createElement("div"),i=d.createElement("div");i.style&&(i.style.backgroundClip="content-box",i.cloneNode(!0).style.backgroundClip="",o.clearCloneStyle="content-box"===i.style.backgroundClip,h.style.cssText="border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute",h.appendChild(i),r.extend(o,{pixelPosition:function(){return b(),c},boxSizingReliable:function(){return b(),e},pixelMarginRight:function(){return b(),f},reliableMarginLeft:function(){return b(),g}}))}();function Oa(a,b,c){var d,e,f,g,h=a.style;return c=c||Na(a),c&&(g=c.getPropertyValue(b)||c[b],""!==g||r.contains(a.ownerDocument,a)||(g=r.style(a,b)),!o.pixelMarginRight()&&Ma.test(g)&&La.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f)),void 0!==g?g+"":g}function Pa(a,b){return{get:function(){return a()?void delete this.get:(this.get=b).apply(this,arguments)}}}var Qa=/^(none|table(?!-c[ea]).+)/,Ra=/^--/,Sa={position:"absolute",visibility:"hidden",display:"block"},Ta={letterSpacing:"0",fontWeight:"400"},Ua=["Webkit","Moz","ms"],Va=d.createElement("div").style;function Wa(a){if(a in Va)return a;var b=a[0].toUpperCase()+a.slice(1),c=Ua.length;while(c--)if(a=Ua[c]+b,a in Va)return a}function Xa(a){var b=r.cssProps[a];return b||(b=r.cssProps[a]=Wa(a)||a),b}function Ya(a,b,c){var d=ba.exec(b);return d?Math.max(0,d[2]-(c||0))+(d[3]||"px"):b}function Za(a,b,c,d,e){var f,g=0;for(f=c===(d?"border":"content")?4:"width"===b?1:0;f<4;f+=2)"margin"===c&&(g+=r.css(a,c+ca[f],!0,e)),d?("content"===c&&(g-=r.css(a,"padding"+ca[f],!0,e)),"margin"!==c&&(g-=r.css(a,"border"+ca[f]+"Width",!0,e))):(g+=r.css(a,"padding"+ca[f],!0,e),"padding"!==c&&(g+=r.css(a,"border"+ca[f]+"Width",!0,e)));return g}function $a(a,b,c){var d,e=Na(a),f=Oa(a,b,e),g="border-box"===r.css(a,"boxSizing",!1,e);return Ma.test(f)?f:(d=g&&(o.boxSizingReliable()||f===a.style[b]),"auto"===f&&(f=a["offset"+b[0].toUpperCase()+b.slice(1)]),f=parseFloat(f)||0,f+Za(a,b,c||(g?"border":"content"),d,e)+"px")}r.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=Oa(a,"opacity");return""===c?"1":c}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":"cssFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=r.camelCase(b),i=Ra.test(b),j=a.style;return i||(b=Xa(h)),g=r.cssHooks[b]||r.cssHooks[h],void 0===c?g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:j[b]:(f=typeof c,"string"===f&&(e=ba.exec(c))&&e[1]&&(c=fa(a,b,e),f="number"),null!=c&&c===c&&("number"===f&&(c+=e&&e[3]||(r.cssNumber[h]?"":"px")),o.clearCloneStyle||""!==c||0!==b.indexOf("background")||(j[b]="inherit"),g&&"set"in g&&void 0===(c=g.set(a,c,d))||(i?j.setProperty(b,c):j[b]=c)),void 0)}},css:function(a,b,c,d){var e,f,g,h=r.camelCase(b),i=Ra.test(b);return i||(b=Xa(h)),g=r.cssHooks[b]||r.cssHooks[h],g&&"get"in g&&(e=g.get(a,!0,c)),void 0===e&&(e=Oa(a,b,d)),"normal"===e&&b in Ta&&(e=Ta[b]),""===c||c?(f=parseFloat(e),c===!0||isFinite(f)?f||0:e):e}}),r.each(["height","width"],function(a,b){r.cssHooks[b]={get:function(a,c,d){if(c)return!Qa.test(r.css(a,"display"))||a.getClientRects().length&&a.getBoundingClientRect().width?$a(a,b,d):ea(a,Sa,function(){return $a(a,b,d)})},set:function(a,c,d){var e,f=d&&Na(a),g=d&&Za(a,b,d,"border-box"===r.css(a,"boxSizing",!1,f),f);return g&&(e=ba.exec(c))&&"px"!==(e[3]||"px")&&(a.style[b]=c,c=r.css(a,b)),Ya(a,c,g)}}}),r.cssHooks.marginLeft=Pa(o.reliableMarginLeft,function(a,b){if(b)return(parseFloat(Oa(a,"marginLeft"))||a.getBoundingClientRect().left-ea(a,{marginLeft:0},function(){return a.getBoundingClientRect().left}))+"px"}),r.each({margin:"",padding:"",border:"Width"},function(a,b){r.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];d<4;d++)e[a+ca[d]+b]=f[d]||f[d-2]||f[0];return e}},La.test(a)||(r.cssHooks[a+b].set=Ya)}),r.fn.extend({css:function(a,b){return T(this,function(a,b,c){var d,e,f={},g=0;if(Array.isArray(b)){for(d=Na(a),e=b.length;g<e;g++)f[b[g]]=r.css(a,b[g],!1,d);return f}return void 0!==c?r.style(a,b,c):r.css(a,b)},a,b,arguments.length>1)}});function _a(a,b,c,d,e){return new _a.prototype.init(a,b,c,d,e)}r.Tween=_a,_a.prototype={constructor:_a,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||r.easing._default,this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(r.cssNumber[c]?"":"px")},cur:function(){var a=_a.propHooks[this.prop];return a&&a.get?a.get(this):_a.propHooks._default.get(this)},run:function(a){var b,c=_a.propHooks[this.prop];return this.options.duration?this.pos=b=r.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):this.pos=b=a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):_a.propHooks._default.set(this),this}},_a.prototype.init.prototype=_a.prototype,_a.propHooks={_default:{get:function(a){var b;return 1!==a.elem.nodeType||null!=a.elem[a.prop]&&null==a.elem.style[a.prop]?a.elem[a.prop]:(b=r.css(a.elem,a.prop,""),b&&"auto"!==b?b:0)},set:function(a){r.fx.step[a.prop]?r.fx.step[a.prop](a):1!==a.elem.nodeType||null==a.elem.style[r.cssProps[a.prop]]&&!r.cssHooks[a.prop]?a.elem[a.prop]=a.now:r.style(a.elem,a.prop,a.now+a.unit)}}},_a.propHooks.scrollTop=_a.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},r.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2},_default:"swing"},r.fx=_a.prototype.init,r.fx.step={};var ab,bb,cb=/^(?:toggle|show|hide)$/,db=/queueHooks$/;function eb(){bb&&(d.hidden===!1&&a.requestAnimationFrame?a.requestAnimationFrame(eb):a.setTimeout(eb,r.fx.interval),r.fx.tick())}function fb(){return a.setTimeout(function(){ab=void 0}),ab=r.now()}function gb(a,b){var c,d=0,e={height:a};for(b=b?1:0;d<4;d+=2-b)c=ca[d],e["margin"+c]=e["padding"+c]=a;return b&&(e.opacity=e.width=a),e}function hb(a,b,c){for(var d,e=(kb.tweeners[b]||[]).concat(kb.tweeners["*"]),f=0,g=e.length;f<g;f++)if(d=e[f].call(c,b,a))return d}function ib(a,b,c){var d,e,f,g,h,i,j,k,l="width"in b||"height"in b,m=this,n={},o=a.style,p=a.nodeType&&da(a),q=W.get(a,"fxshow");c.queue||(g=r._queueHooks(a,"fx"),null==g.unqueued&&(g.unqueued=0,h=g.empty.fire,g.empty.fire=function(){g.unqueued||h()}),g.unqueued++,m.always(function(){m.always(function(){g.unqueued--,r.queue(a,"fx").length||g.empty.fire()})}));for(d in b)if(e=b[d],cb.test(e)){if(delete b[d],f=f||"toggle"===e,e===(p?"hide":"show")){if("show"!==e||!q||void 0===q[d])continue;p=!0}n[d]=q&&q[d]||r.style(a,d)}if(i=!r.isEmptyObject(b),i||!r.isEmptyObject(n)){l&&1===a.nodeType&&(c.overflow=[o.overflow,o.overflowX,o.overflowY],j=q&&q.display,null==j&&(j=W.get(a,"display")),k=r.css(a,"display"),"none"===k&&(j?k=j:(ia([a],!0),j=a.style.display||j,k=r.css(a,"display"),ia([a]))),("inline"===k||"inline-block"===k&&null!=j)&&"none"===r.css(a,"float")&&(i||(m.done(function(){o.display=j}),null==j&&(k=o.display,j="none"===k?"":k)),o.display="inline-block")),c.overflow&&(o.overflow="hidden",m.always(function(){o.overflow=c.overflow[0],o.overflowX=c.overflow[1],o.overflowY=c.overflow[2]})),i=!1;for(d in n)i||(q?"hidden"in q&&(p=q.hidden):q=W.access(a,"fxshow",{display:j}),f&&(q.hidden=!p),p&&ia([a],!0),m.done(function(){p||ia([a]),W.remove(a,"fxshow");for(d in n)r.style(a,d,n[d])})),i=hb(p?q[d]:0,d,m),d in q||(q[d]=i.start,p&&(i.end=i.start,i.start=0))}}function jb(a,b){var c,d,e,f,g;for(c in a)if(d=r.camelCase(c),e=b[d],f=a[c],Array.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=r.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function kb(a,b,c){var d,e,f=0,g=kb.prefilters.length,h=r.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=ab||fb(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;g<i;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),f<1&&i?c:(i||h.notifyWith(a,[j,1,0]),h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:r.extend({},b),opts:r.extend(!0,{specialEasing:{},easing:r.easing._default},c),originalProperties:b,originalOptions:c,startTime:ab||fb(),duration:c.duration,tweens:[],createTween:function(b,c){var d=r.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;c<d;c++)j.tweens[c].run(1);return b?(h.notifyWith(a,[j,1,0]),h.resolveWith(a,[j,b])):h.rejectWith(a,[j,b]),this}}),k=j.props;for(jb(k,j.opts.specialEasing);f<g;f++)if(d=kb.prefilters[f].call(j,a,k,j.opts))return r.isFunction(d.stop)&&(r._queueHooks(j.elem,j.opts.queue).stop=r.proxy(d.stop,d)),d;return r.map(k,hb,j),r.isFunction(j.opts.start)&&j.opts.start.call(a,j),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always),r.fx.timer(r.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j}r.Animation=r.extend(kb,{tweeners:{"*":[function(a,b){var c=this.createTween(a,b);return fa(c.elem,a,ba.exec(b),c),c}]},tweener:function(a,b){r.isFunction(a)?(b=a,a=["*"]):a=a.match(L);for(var c,d=0,e=a.length;d<e;d++)c=a[d],kb.tweeners[c]=kb.tweeners[c]||[],kb.tweeners[c].unshift(b)},prefilters:[ib],prefilter:function(a,b){b?kb.prefilters.unshift(a):kb.prefilters.push(a)}}),r.speed=function(a,b,c){var d=a&&"object"==typeof a?r.extend({},a):{complete:c||!c&&b||r.isFunction(a)&&a,duration:a,easing:c&&b||b&&!r.isFunction(b)&&b};return r.fx.off?d.duration=0:"number"!=typeof d.duration&&(d.duration in r.fx.speeds?d.duration=r.fx.speeds[d.duration]:d.duration=r.fx.speeds._default),null!=d.queue&&d.queue!==!0||(d.queue="fx"),d.old=d.complete,d.complete=function(){r.isFunction(d.old)&&d.old.call(this),d.queue&&r.dequeue(this,d.queue)},d},r.fn.extend({fadeTo:function(a,b,c,d){return this.filter(da).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=r.isEmptyObject(a),f=r.speed(b,c,d),g=function(){var b=kb(this,r.extend({},a),f);(e||W.get(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=r.timers,g=W.get(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&db.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));!b&&c||r.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=W.get(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=r.timers,g=d?d.length:0;for(c.finish=!0,r.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;b<g;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),r.each(["toggle","show","hide"],function(a,b){var c=r.fn[b];r.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(gb(b,!0),a,d,e)}}),r.each({slideDown:gb("show"),slideUp:gb("hide"),slideToggle:gb("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){r.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),r.timers=[],r.fx.tick=function(){var a,b=0,c=r.timers;for(ab=r.now();b<c.length;b++)a=c[b],a()||c[b]!==a||c.splice(b--,1);c.length||r.fx.stop(),ab=void 0},r.fx.timer=function(a){r.timers.push(a),r.fx.start()},r.fx.interval=13,r.fx.start=function(){bb||(bb=!0,eb())},r.fx.stop=function(){bb=null},r.fx.speeds={slow:600,fast:200,_default:400},r.fn.delay=function(b,c){return b=r.fx?r.fx.speeds[b]||b:b,c=c||"fx",this.queue(c,function(c,d){var e=a.setTimeout(c,b);d.stop=function(){a.clearTimeout(e)}})},function(){var a=d.createElement("input"),b=d.createElement("select"),c=b.appendChild(d.createElement("option"));a.type="checkbox",o.checkOn=""!==a.value,o.optSelected=c.selected,a=d.createElement("input"),a.value="t",a.type="radio",o.radioValue="t"===a.value}();var lb,mb=r.expr.attrHandle;r.fn.extend({attr:function(a,b){return T(this,r.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){r.removeAttr(this,a)})}}),r.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(3!==f&&8!==f&&2!==f)return"undefined"==typeof a.getAttribute?r.prop(a,b,c):(1===f&&r.isXMLDoc(a)||(e=r.attrHooks[b.toLowerCase()]||(r.expr.match.bool.test(b)?lb:void 0)),void 0!==c?null===c?void r.removeAttr(a,b):e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:(a.setAttribute(b,c+""),c):e&&"get"in e&&null!==(d=e.get(a,b))?d:(d=r.find.attr(a,b),
null==d?void 0:d))},attrHooks:{type:{set:function(a,b){if(!o.radioValue&&"radio"===b&&B(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}},removeAttr:function(a,b){var c,d=0,e=b&&b.match(L);if(e&&1===a.nodeType)while(c=e[d++])a.removeAttribute(c)}}),lb={set:function(a,b,c){return b===!1?r.removeAttr(a,c):a.setAttribute(c,c),c}},r.each(r.expr.match.bool.source.match(/\w+/g),function(a,b){var c=mb[b]||r.find.attr;mb[b]=function(a,b,d){var e,f,g=b.toLowerCase();return d||(f=mb[g],mb[g]=e,e=null!=c(a,b,d)?g:null,mb[g]=f),e}});var nb=/^(?:input|select|textarea|button)$/i,ob=/^(?:a|area)$/i;r.fn.extend({prop:function(a,b){return T(this,r.prop,a,b,arguments.length>1)},removeProp:function(a){return this.each(function(){delete this[r.propFix[a]||a]})}}),r.extend({prop:function(a,b,c){var d,e,f=a.nodeType;if(3!==f&&8!==f&&2!==f)return 1===f&&r.isXMLDoc(a)||(b=r.propFix[b]||b,e=r.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){var b=r.find.attr(a,"tabindex");return b?parseInt(b,10):nb.test(a.nodeName)||ob.test(a.nodeName)&&a.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),o.optSelected||(r.propHooks.selected={get:function(a){var b=a.parentNode;return b&&b.parentNode&&b.parentNode.selectedIndex,null},set:function(a){var b=a.parentNode;b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex)}}),r.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){r.propFix[this.toLowerCase()]=this});function pb(a){var b=a.match(L)||[];return b.join(" ")}function qb(a){return a.getAttribute&&a.getAttribute("class")||""}r.fn.extend({addClass:function(a){var b,c,d,e,f,g,h,i=0;if(r.isFunction(a))return this.each(function(b){r(this).addClass(a.call(this,b,qb(this)))});if("string"==typeof a&&a){b=a.match(L)||[];while(c=this[i++])if(e=qb(c),d=1===c.nodeType&&" "+pb(e)+" "){g=0;while(f=b[g++])d.indexOf(" "+f+" ")<0&&(d+=f+" ");h=pb(d),e!==h&&c.setAttribute("class",h)}}return this},removeClass:function(a){var b,c,d,e,f,g,h,i=0;if(r.isFunction(a))return this.each(function(b){r(this).removeClass(a.call(this,b,qb(this)))});if(!arguments.length)return this.attr("class","");if("string"==typeof a&&a){b=a.match(L)||[];while(c=this[i++])if(e=qb(c),d=1===c.nodeType&&" "+pb(e)+" "){g=0;while(f=b[g++])while(d.indexOf(" "+f+" ")>-1)d=d.replace(" "+f+" "," ");h=pb(d),e!==h&&c.setAttribute("class",h)}}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):r.isFunction(a)?this.each(function(c){r(this).toggleClass(a.call(this,c,qb(this),b),b)}):this.each(function(){var b,d,e,f;if("string"===c){d=0,e=r(this),f=a.match(L)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else void 0!==a&&"boolean"!==c||(b=qb(this),b&&W.set(this,"__className__",b),this.setAttribute&&this.setAttribute("class",b||a===!1?"":W.get(this,"__className__")||""))})},hasClass:function(a){var b,c,d=0;b=" "+a+" ";while(c=this[d++])if(1===c.nodeType&&(" "+pb(qb(c))+" ").indexOf(b)>-1)return!0;return!1}});var rb=/\r/g;r.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=r.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,r(this).val()):a,null==e?e="":"number"==typeof e?e+="":Array.isArray(e)&&(e=r.map(e,function(a){return null==a?"":a+""})),b=r.valHooks[this.type]||r.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=r.valHooks[e.type]||r.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(rb,""):null==c?"":c)}}}),r.extend({valHooks:{option:{get:function(a){var b=r.find.attr(a,"value");return null!=b?b:pb(r.text(a))}},select:{get:function(a){var b,c,d,e=a.options,f=a.selectedIndex,g="select-one"===a.type,h=g?null:[],i=g?f+1:e.length;for(d=f<0?i:g?f:0;d<i;d++)if(c=e[d],(c.selected||d===f)&&!c.disabled&&(!c.parentNode.disabled||!B(c.parentNode,"optgroup"))){if(b=r(c).val(),g)return b;h.push(b)}return h},set:function(a,b){var c,d,e=a.options,f=r.makeArray(b),g=e.length;while(g--)d=e[g],(d.selected=r.inArray(r.valHooks.option.get(d),f)>-1)&&(c=!0);return c||(a.selectedIndex=-1),f}}}}),r.each(["radio","checkbox"],function(){r.valHooks[this]={set:function(a,b){if(Array.isArray(b))return a.checked=r.inArray(r(a).val(),b)>-1}},o.checkOn||(r.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})});var sb=/^(?:focusinfocus|focusoutblur)$/;r.extend(r.event,{trigger:function(b,c,e,f){var g,h,i,j,k,m,n,o=[e||d],p=l.call(b,"type")?b.type:b,q=l.call(b,"namespace")?b.namespace.split("."):[];if(h=i=e=e||d,3!==e.nodeType&&8!==e.nodeType&&!sb.test(p+r.event.triggered)&&(p.indexOf(".")>-1&&(q=p.split("."),p=q.shift(),q.sort()),k=p.indexOf(":")<0&&"on"+p,b=b[r.expando]?b:new r.Event(p,"object"==typeof b&&b),b.isTrigger=f?2:3,b.namespace=q.join("."),b.rnamespace=b.namespace?new RegExp("(^|\\.)"+q.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=e),c=null==c?[b]:r.makeArray(c,[b]),n=r.event.special[p]||{},f||!n.trigger||n.trigger.apply(e,c)!==!1)){if(!f&&!n.noBubble&&!r.isWindow(e)){for(j=n.delegateType||p,sb.test(j+p)||(h=h.parentNode);h;h=h.parentNode)o.push(h),i=h;i===(e.ownerDocument||d)&&o.push(i.defaultView||i.parentWindow||a)}g=0;while((h=o[g++])&&!b.isPropagationStopped())b.type=g>1?j:n.bindType||p,m=(W.get(h,"events")||{})[b.type]&&W.get(h,"handle"),m&&m.apply(h,c),m=k&&h[k],m&&m.apply&&U(h)&&(b.result=m.apply(h,c),b.result===!1&&b.preventDefault());return b.type=p,f||b.isDefaultPrevented()||n._default&&n._default.apply(o.pop(),c)!==!1||!U(e)||k&&r.isFunction(e[p])&&!r.isWindow(e)&&(i=e[k],i&&(e[k]=null),r.event.triggered=p,e[p](),r.event.triggered=void 0,i&&(e[k]=i)),b.result}},simulate:function(a,b,c){var d=r.extend(new r.Event,c,{type:a,isSimulated:!0});r.event.trigger(d,null,b)}}),r.fn.extend({trigger:function(a,b){return this.each(function(){r.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];if(c)return r.event.trigger(a,b,c,!0)}}),r.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(a,b){r.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),r.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)}}),o.focusin="onfocusin"in a,o.focusin||r.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){r.event.simulate(b,a.target,r.event.fix(a))};r.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=W.access(d,b);e||d.addEventListener(a,c,!0),W.access(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=W.access(d,b)-1;e?W.access(d,b,e):(d.removeEventListener(a,c,!0),W.remove(d,b))}}});var tb=a.location,ub=r.now(),vb=/\?/;r.parseXML=function(b){var c;if(!b||"string"!=typeof b)return null;try{c=(new a.DOMParser).parseFromString(b,"text/xml")}catch(d){c=void 0}return c&&!c.getElementsByTagName("parsererror").length||r.error("Invalid XML: "+b),c};var wb=/\[\]$/,xb=/\r?\n/g,yb=/^(?:submit|button|image|reset|file)$/i,zb=/^(?:input|select|textarea|keygen)/i;function Ab(a,b,c,d){var e;if(Array.isArray(b))r.each(b,function(b,e){c||wb.test(a)?d(a,e):Ab(a+"["+("object"==typeof e&&null!=e?b:"")+"]",e,c,d)});else if(c||"object"!==r.type(b))d(a,b);else for(e in b)Ab(a+"["+e+"]",b[e],c,d)}r.param=function(a,b){var c,d=[],e=function(a,b){var c=r.isFunction(b)?b():b;d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(null==c?"":c)};if(Array.isArray(a)||a.jquery&&!r.isPlainObject(a))r.each(a,function(){e(this.name,this.value)});else for(c in a)Ab(c,a[c],b,e);return d.join("&")},r.fn.extend({serialize:function(){return r.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=r.prop(this,"elements");return a?r.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!r(this).is(":disabled")&&zb.test(this.nodeName)&&!yb.test(a)&&(this.checked||!ja.test(a))}).map(function(a,b){var c=r(this).val();return null==c?null:Array.isArray(c)?r.map(c,function(a){return{name:b.name,value:a.replace(xb,"\r\n")}}):{name:b.name,value:c.replace(xb,"\r\n")}}).get()}});var Bb=/%20/g,Cb=/#.*$/,Db=/([?&])_=[^&]*/,Eb=/^(.*?):[ \t]*([^\r\n]*)$/gm,Fb=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Gb=/^(?:GET|HEAD)$/,Hb=/^\/\//,Ib={},Jb={},Kb="*/".concat("*"),Lb=d.createElement("a");Lb.href=tb.href;function Mb(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(L)||[];if(r.isFunction(c))while(d=f[e++])"+"===d[0]?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function Nb(a,b,c,d){var e={},f=a===Jb;function g(h){var i;return e[h]=!0,r.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function Ob(a,b){var c,d,e=r.ajaxSettings.flatOptions||{};for(c in b)void 0!==b[c]&&((e[c]?a:d||(d={}))[c]=b[c]);return d&&r.extend(!0,a,d),a}function Pb(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===d&&(d=a.mimeType||b.getResponseHeader("Content-Type"));if(d)for(e in h)if(h[e]&&h[e].test(d)){i.unshift(e);break}if(i[0]in c)f=i[0];else{for(e in c){if(!i[0]||a.converters[e+" "+i[0]]){f=e;break}g||(g=e)}f=f||g}if(f)return f!==i[0]&&i.unshift(f),c[f]}function Qb(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}r.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:tb.href,type:"GET",isLocal:Fb.test(tb.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Kb,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":r.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?Ob(Ob(a,r.ajaxSettings),b):Ob(r.ajaxSettings,a)},ajaxPrefilter:Mb(Ib),ajaxTransport:Mb(Jb),ajax:function(b,c){"object"==typeof b&&(c=b,b=void 0),c=c||{};var e,f,g,h,i,j,k,l,m,n,o=r.ajaxSetup({},c),p=o.context||o,q=o.context&&(p.nodeType||p.jquery)?r(p):r.event,s=r.Deferred(),t=r.Callbacks("once memory"),u=o.statusCode||{},v={},w={},x="canceled",y={readyState:0,getResponseHeader:function(a){var b;if(k){if(!h){h={};while(b=Eb.exec(g))h[b[1].toLowerCase()]=b[2]}b=h[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return k?g:null},setRequestHeader:function(a,b){return null==k&&(a=w[a.toLowerCase()]=w[a.toLowerCase()]||a,v[a]=b),this},overrideMimeType:function(a){return null==k&&(o.mimeType=a),this},statusCode:function(a){var b;if(a)if(k)y.always(a[y.status]);else for(b in a)u[b]=[u[b],a[b]];return this},abort:function(a){var b=a||x;return e&&e.abort(b),A(0,b),this}};if(s.promise(y),o.url=((b||o.url||tb.href)+"").replace(Hb,tb.protocol+"//"),o.type=c.method||c.type||o.method||o.type,o.dataTypes=(o.dataType||"*").toLowerCase().match(L)||[""],null==o.crossDomain){j=d.createElement("a");try{j.href=o.url,j.href=j.href,o.crossDomain=Lb.protocol+"//"+Lb.host!=j.protocol+"//"+j.host}catch(z){o.crossDomain=!0}}if(o.data&&o.processData&&"string"!=typeof o.data&&(o.data=r.param(o.data,o.traditional)),Nb(Ib,o,c,y),k)return y;l=r.event&&o.global,l&&0===r.active++&&r.event.trigger("ajaxStart"),o.type=o.type.toUpperCase(),o.hasContent=!Gb.test(o.type),f=o.url.replace(Cb,""),o.hasContent?o.data&&o.processData&&0===(o.contentType||"").indexOf("application/x-www-form-urlencoded")&&(o.data=o.data.replace(Bb,"+")):(n=o.url.slice(f.length),o.data&&(f+=(vb.test(f)?"&":"?")+o.data,delete o.data),o.cache===!1&&(f=f.replace(Db,"$1"),n=(vb.test(f)?"&":"?")+"_="+ub++ +n),o.url=f+n),o.ifModified&&(r.lastModified[f]&&y.setRequestHeader("If-Modified-Since",r.lastModified[f]),r.etag[f]&&y.setRequestHeader("If-None-Match",r.etag[f])),(o.data&&o.hasContent&&o.contentType!==!1||c.contentType)&&y.setRequestHeader("Content-Type",o.contentType),y.setRequestHeader("Accept",o.dataTypes[0]&&o.accepts[o.dataTypes[0]]?o.accepts[o.dataTypes[0]]+("*"!==o.dataTypes[0]?", "+Kb+"; q=0.01":""):o.accepts["*"]);for(m in o.headers)y.setRequestHeader(m,o.headers[m]);if(o.beforeSend&&(o.beforeSend.call(p,y,o)===!1||k))return y.abort();if(x="abort",t.add(o.complete),y.done(o.success),y.fail(o.error),e=Nb(Jb,o,c,y)){if(y.readyState=1,l&&q.trigger("ajaxSend",[y,o]),k)return y;o.async&&o.timeout>0&&(i=a.setTimeout(function(){y.abort("timeout")},o.timeout));try{k=!1,e.send(v,A)}catch(z){if(k)throw z;A(-1,z)}}else A(-1,"No Transport");function A(b,c,d,h){var j,m,n,v,w,x=c;k||(k=!0,i&&a.clearTimeout(i),e=void 0,g=h||"",y.readyState=b>0?4:0,j=b>=200&&b<300||304===b,d&&(v=Pb(o,y,d)),v=Qb(o,v,y,j),j?(o.ifModified&&(w=y.getResponseHeader("Last-Modified"),w&&(r.lastModified[f]=w),w=y.getResponseHeader("etag"),w&&(r.etag[f]=w)),204===b||"HEAD"===o.type?x="nocontent":304===b?x="notmodified":(x=v.state,m=v.data,n=v.error,j=!n)):(n=x,!b&&x||(x="error",b<0&&(b=0))),y.status=b,y.statusText=(c||x)+"",j?s.resolveWith(p,[m,x,y]):s.rejectWith(p,[y,x,n]),y.statusCode(u),u=void 0,l&&q.trigger(j?"ajaxSuccess":"ajaxError",[y,o,j?m:n]),t.fireWith(p,[y,x]),l&&(q.trigger("ajaxComplete",[y,o]),--r.active||r.event.trigger("ajaxStop")))}return y},getJSON:function(a,b,c){return r.get(a,b,c,"json")},getScript:function(a,b){return r.get(a,void 0,b,"script")}}),r.each(["get","post"],function(a,b){r[b]=function(a,c,d,e){return r.isFunction(c)&&(e=e||d,d=c,c=void 0),r.ajax(r.extend({url:a,type:b,dataType:e,data:c,success:d},r.isPlainObject(a)&&a))}}),r._evalUrl=function(a){return r.ajax({url:a,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,"throws":!0})},r.fn.extend({wrapAll:function(a){var b;return this[0]&&(r.isFunction(a)&&(a=a.call(this[0])),b=r(a,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstElementChild)a=a.firstElementChild;return a}).append(this)),this},wrapInner:function(a){return r.isFunction(a)?this.each(function(b){r(this).wrapInner(a.call(this,b))}):this.each(function(){var b=r(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=r.isFunction(a);return this.each(function(c){r(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(a){return this.parent(a).not("body").each(function(){r(this).replaceWith(this.childNodes)}),this}}),r.expr.pseudos.hidden=function(a){return!r.expr.pseudos.visible(a)},r.expr.pseudos.visible=function(a){return!!(a.offsetWidth||a.offsetHeight||a.getClientRects().length)},r.ajaxSettings.xhr=function(){try{return new a.XMLHttpRequest}catch(b){}};var Rb={0:200,1223:204},Sb=r.ajaxSettings.xhr();o.cors=!!Sb&&"withCredentials"in Sb,o.ajax=Sb=!!Sb,r.ajaxTransport(function(b){var c,d;if(o.cors||Sb&&!b.crossDomain)return{send:function(e,f){var g,h=b.xhr();if(h.open(b.type,b.url,b.async,b.username,b.password),b.xhrFields)for(g in b.xhrFields)h[g]=b.xhrFields[g];b.mimeType&&h.overrideMimeType&&h.overrideMimeType(b.mimeType),b.crossDomain||e["X-Requested-With"]||(e["X-Requested-With"]="XMLHttpRequest");for(g in e)h.setRequestHeader(g,e[g]);c=function(a){return function(){c&&(c=d=h.onload=h.onerror=h.onabort=h.onreadystatechange=null,"abort"===a?h.abort():"error"===a?"number"!=typeof h.status?f(0,"error"):f(h.status,h.statusText):f(Rb[h.status]||h.status,h.statusText,"text"!==(h.responseType||"text")||"string"!=typeof h.responseText?{binary:h.response}:{text:h.responseText},h.getAllResponseHeaders()))}},h.onload=c(),d=h.onerror=c("error"),void 0!==h.onabort?h.onabort=d:h.onreadystatechange=function(){4===h.readyState&&a.setTimeout(function(){c&&d()})},c=c("abort");try{h.send(b.hasContent&&b.data||null)}catch(i){if(c)throw i}},abort:function(){c&&c()}}}),r.ajaxPrefilter(function(a){a.crossDomain&&(a.contents.script=!1)}),r.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(a){return r.globalEval(a),a}}}),r.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET")}),r.ajaxTransport("script",function(a){if(a.crossDomain){var b,c;return{send:function(e,f){b=r("<script>").prop({charset:a.scriptCharset,src:a.url}).on("load error",c=function(a){b.remove(),c=null,a&&f("error"===a.type?404:200,a.type)}),d.head.appendChild(b[0])},abort:function(){c&&c()}}}});var Tb=[],Ub=/(=)\?(?=&|$)|\?\?/;r.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=Tb.pop()||r.expando+"_"+ub++;return this[a]=!0,a}}),r.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(Ub.test(b.url)?"url":"string"==typeof b.data&&0===(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&Ub.test(b.data)&&"data");if(h||"jsonp"===b.dataTypes[0])return e=b.jsonpCallback=r.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(Ub,"$1"+e):b.jsonp!==!1&&(b.url+=(vb.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||r.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){void 0===f?r(a).removeProp(e):a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,Tb.push(e)),g&&r.isFunction(f)&&f(g[0]),g=f=void 0}),"script"}),o.createHTMLDocument=function(){var a=d.implementation.createHTMLDocument("").body;return a.innerHTML="<form></form><form></form>",2===a.childNodes.length}(),r.parseHTML=function(a,b,c){if("string"!=typeof a)return[];"boolean"==typeof b&&(c=b,b=!1);var e,f,g;return b||(o.createHTMLDocument?(b=d.implementation.createHTMLDocument(""),e=b.createElement("base"),e.href=d.location.href,b.head.appendChild(e)):b=d),f=C.exec(a),g=!c&&[],f?[b.createElement(f[1])]:(f=qa([a],b,g),g&&g.length&&r(g).remove(),r.merge([],f.childNodes))},r.fn.load=function(a,b,c){var d,e,f,g=this,h=a.indexOf(" ");return h>-1&&(d=pb(a.slice(h)),a=a.slice(0,h)),r.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(e="POST"),g.length>0&&r.ajax({url:a,type:e||"GET",dataType:"html",data:b}).done(function(a){f=arguments,g.html(d?r("<div>").append(r.parseHTML(a)).find(d):a)}).always(c&&function(a,b){g.each(function(){c.apply(this,f||[a.responseText,b,a])})}),this},r.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){r.fn[b]=function(a){return this.on(b,a)}}),r.expr.pseudos.animated=function(a){return r.grep(r.timers,function(b){return a===b.elem}).length},r.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=r.css(a,"position"),l=r(a),m={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=r.css(a,"top"),i=r.css(a,"left"),j=("absolute"===k||"fixed"===k)&&(f+i).indexOf("auto")>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),r.isFunction(b)&&(b=b.call(a,c,r.extend({},h))),null!=b.top&&(m.top=b.top-h.top+g),null!=b.left&&(m.left=b.left-h.left+e),"using"in b?b.using.call(a,m):l.css(m)}},r.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){r.offset.setOffset(this,a,b)});var b,c,d,e,f=this[0];if(f)return f.getClientRects().length?(d=f.getBoundingClientRect(),b=f.ownerDocument,c=b.documentElement,e=b.defaultView,{top:d.top+e.pageYOffset-c.clientTop,left:d.left+e.pageXOffset-c.clientLeft}):{top:0,left:0}},position:function(){if(this[0]){var a,b,c=this[0],d={top:0,left:0};return"fixed"===r.css(c,"position")?b=c.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),B(a[0],"html")||(d=a.offset()),d={top:d.top+r.css(a[0],"borderTopWidth",!0),left:d.left+r.css(a[0],"borderLeftWidth",!0)}),{top:b.top-d.top-r.css(c,"marginTop",!0),left:b.left-d.left-r.css(c,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent;while(a&&"static"===r.css(a,"position"))a=a.offsetParent;return a||ra})}}),r.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(a,b){var c="pageYOffset"===b;r.fn[a]=function(d){return T(this,function(a,d,e){var f;return r.isWindow(a)?f=a:9===a.nodeType&&(f=a.defaultView),void 0===e?f?f[b]:a[d]:void(f?f.scrollTo(c?f.pageXOffset:e,c?e:f.pageYOffset):a[d]=e)},a,d,arguments.length)}}),r.each(["top","left"],function(a,b){r.cssHooks[b]=Pa(o.pixelPosition,function(a,c){if(c)return c=Oa(a,b),Ma.test(c)?r(a).position()[b]+"px":c})}),r.each({Height:"height",Width:"width"},function(a,b){r.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){r.fn[d]=function(e,f){var g=arguments.length&&(c||"boolean"!=typeof e),h=c||(e===!0||f===!0?"margin":"border");return T(this,function(b,c,e){var f;return r.isWindow(b)?0===d.indexOf("outer")?b["inner"+a]:b.document.documentElement["client"+a]:9===b.nodeType?(f=b.documentElement,Math.max(b.body["scroll"+a],f["scroll"+a],b.body["offset"+a],f["offset"+a],f["client"+a])):void 0===e?r.css(b,c,h):r.style(b,c,e,h)},b,g?e:void 0,g)}})}),r.fn.extend({bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}}),r.holdReady=function(a){a?r.readyWait++:r.ready(!0)},r.isArray=Array.isArray,r.parseJSON=JSON.parse,r.nodeName=B,"function"==typeof define&&define.amd&&define("jquery",[],function(){return r});var Vb=a.jQuery,Wb=a.$;return r.noConflict=function(b){return a.$===r&&(a.$=Wb),b&&a.jQuery===r&&(a.jQuery=Vb),r},b||(a.jQuery=a.$=r),r});
;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function () {
  var settingsElement = document.querySelector('head > script[type="application/json"][data-drupal-selector="drupal-settings-json"], body > script[type="application/json"][data-drupal-selector="drupal-settings-json"]');

  window.drupalSettings = {};

  if (settingsElement !== null) {
    window.drupalSettings = JSON.parse(settingsElement.textContent);
  }
})();;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

window.Drupal = { behaviors: {}, locale: {} };

(function (Drupal, drupalSettings, drupalTranslations) {
  Drupal.throwError = function (error) {
    setTimeout(function () {
      throw error;
    }, 0);
  };

  Drupal.attachBehaviors = function (context, settings) {
    context = context || document;
    settings = settings || drupalSettings;
    var behaviors = Drupal.behaviors;

    Object.keys(behaviors || {}).forEach(function (i) {
      if (typeof behaviors[i].attach === 'function') {
        try {
          behaviors[i].attach(context, settings);
        } catch (e) {
          Drupal.throwError(e);
        }
      }
    });
  };

  Drupal.detachBehaviors = function (context, settings, trigger) {
    context = context || document;
    settings = settings || drupalSettings;
    trigger = trigger || 'unload';
    var behaviors = Drupal.behaviors;

    Object.keys(behaviors || {}).forEach(function (i) {
      if (typeof behaviors[i].detach === 'function') {
        try {
          behaviors[i].detach(context, settings, trigger);
        } catch (e) {
          Drupal.throwError(e);
        }
      }
    });
  };

  Drupal.checkPlain = function (str) {
    str = str.toString().replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#39;');
    return str;
  };

  Drupal.formatString = function (str, args) {
    var processedArgs = {};

    Object.keys(args || {}).forEach(function (key) {
      switch (key.charAt(0)) {
        case '@':
          processedArgs[key] = Drupal.checkPlain(args[key]);
          break;

        case '!':
          processedArgs[key] = args[key];
          break;

        default:
          processedArgs[key] = Drupal.theme('placeholder', args[key]);
          break;
      }
    });

    return Drupal.stringReplace(str, processedArgs, null);
  };

  Drupal.stringReplace = function (str, args, keys) {
    if (str.length === 0) {
      return str;
    }

    if (!Array.isArray(keys)) {
      keys = Object.keys(args || {});

      keys.sort(function (a, b) {
        return a.length - b.length;
      });
    }

    if (keys.length === 0) {
      return str;
    }

    var key = keys.pop();
    var fragments = str.split(key);

    if (keys.length) {
      for (var i = 0; i < fragments.length; i++) {
        fragments[i] = Drupal.stringReplace(fragments[i], args, keys.slice(0));
      }
    }

    return fragments.join(args[key]);
  };

  Drupal.t = function (str, args, options) {
    options = options || {};
    options.context = options.context || '';

    if (typeof drupalTranslations !== 'undefined' && drupalTranslations.strings && drupalTranslations.strings[options.context] && drupalTranslations.strings[options.context][str]) {
      str = drupalTranslations.strings[options.context][str];
    }

    if (args) {
      str = Drupal.formatString(str, args);
    }
    return str;
  };

  Drupal.url = function (path) {
    return drupalSettings.path.baseUrl + drupalSettings.path.pathPrefix + path;
  };

  Drupal.url.toAbsolute = function (url) {
    var urlParsingNode = document.createElement('a');

    try {
      url = decodeURIComponent(url);
    } catch (e) {}

    urlParsingNode.setAttribute('href', url);

    return urlParsingNode.cloneNode(false).href;
  };

  Drupal.url.isLocal = function (url) {
    var absoluteUrl = Drupal.url.toAbsolute(url);
    var protocol = window.location.protocol;

    if (protocol === 'http:' && absoluteUrl.indexOf('https:') === 0) {
      protocol = 'https:';
    }
    var baseUrl = protocol + '//' + window.location.host + drupalSettings.path.baseUrl.slice(0, -1);

    try {
      absoluteUrl = decodeURIComponent(absoluteUrl);
    } catch (e) {}
    try {
      baseUrl = decodeURIComponent(baseUrl);
    } catch (e) {}

    return absoluteUrl === baseUrl || absoluteUrl.indexOf(baseUrl + '/') === 0;
  };

  Drupal.formatPlural = function (count, singular, plural, args, options) {
    args = args || {};
    args['@count'] = count;

    var pluralDelimiter = drupalSettings.pluralDelimiter;
    var translations = Drupal.t(singular + pluralDelimiter + plural, args, options).split(pluralDelimiter);
    var index = 0;

    if (typeof drupalTranslations !== 'undefined' && drupalTranslations.pluralFormula) {
      index = count in drupalTranslations.pluralFormula ? drupalTranslations.pluralFormula[count] : drupalTranslations.pluralFormula.default;
    } else if (args['@count'] !== 1) {
      index = 1;
    }

    return translations[index];
  };

  Drupal.encodePath = function (item) {
    return window.encodeURIComponent(item).replace(/%2F/g, '/');
  };

  Drupal.theme = function (func) {
    if (func in Drupal.theme) {
      var _Drupal$theme;

      for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      return (_Drupal$theme = Drupal.theme)[func].apply(_Drupal$theme, args);
    }
  };

  Drupal.theme.placeholder = function (str) {
    return '<em class="placeholder">' + Drupal.checkPlain(str) + '</em>';
  };
})(Drupal, window.drupalSettings, window.drupalTranslations);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

if (window.jQuery) {
  jQuery.noConflict();
}

document.documentElement.className += ' js';

(function (domready, Drupal, drupalSettings) {
  domready(function () {
    Drupal.attachBehaviors(document, drupalSettings);
  });
})(domready, Drupal, window.drupalSettings);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function (Drupal, drupalSettings) {
  Drupal.behaviors.activeLinks = {
    attach: function attach(context) {
      var path = drupalSettings.path;
      var queryString = JSON.stringify(path.currentQuery);
      var querySelector = path.currentQuery ? '[data-drupal-link-query=\'' + queryString + '\']' : ':not([data-drupal-link-query])';
      var originalSelectors = ['[data-drupal-link-system-path="' + path.currentPath + '"]'];
      var selectors = void 0;

      if (path.isFront) {
        originalSelectors.push('[data-drupal-link-system-path="<front>"]');
      }

      selectors = [].concat(originalSelectors.map(function (selector) {
        return selector + ':not([hreflang])';
      }), originalSelectors.map(function (selector) {
        return selector + '[hreflang="' + path.currentLanguage + '"]';
      }));

      selectors = selectors.map(function (current) {
        return current + querySelector;
      });

      var activeLinks = context.querySelectorAll(selectors.join(','));
      var il = activeLinks.length;
      for (var i = 0; i < il; i++) {
        activeLinks[i].classList.add('is-active');
      }
    },
    detach: function detach(context, settings, trigger) {
      if (trigger === 'unload') {
        var activeLinks = context.querySelectorAll('[data-drupal-link-system-path].is-active');
        var il = activeLinks.length;
        for (var i = 0; i < il; i++) {
          activeLinks[i].classList.remove('is-active');
        }
      }
    }
  };
})(Drupal, drupalSettings);;
(function ($, Drupal) {
  'use strict';

  /**
   * @file
   * Defines Imce File Manager.
   */

  /**
   * Global container.
   */
  var imce = window.imce = {
    // Configuration options
    conf: {},
    // Locally stored data
    local: {},
    // Events
    events: {},
    // Shortcuts
    shortcuts: {fm: {}, tree: {}, content: {}},
    // Toolbar buttons
    toolbarButtons: {},
    // Folder tree
    tree: {},
    // Currently selected items
    selection: [],
    // Message queue
    messageQueue: [],
    // Sort handlers
    sorters: {}
  };

  /**
   * Initiate imce on document ready.
   */
  $(document).ready(function () {
    var settings = window.drupalSettings;
    var conf = settings && settings.imce;
    var body = document.body;
    if (conf && !imce.activeFolder && $(body).hasClass('imce-page')) {
      if (!conf.ajax_url) {
        conf.ajax_url = Drupal.url(settings.path.currentPath);
      }
      imce.init(conf, body);
    }
  });

  /**
   * Initialize imce.
   */
  imce.init = function (conf, parentEl) {
    // Set conf
    conf = $.extend(imce.conf, conf);
    if (!conf.ajax_url || !conf.folders || !conf.root_url) {
      return;
    }
    imce.parentEl = parentEl;
    // Get stored data
    try {
      $.extend(imce.local, JSON.parse(localStorage.getItem('imce.local')));
    }
    catch (err) {
      imce.delayError(err);
    }
    // Init
    imce.trigger('preinit');
    imce.checkIntegration();
    imce.initUI();
    imce.initTree();
    // Add shortcuts
    imce.addShortcut('ENTER', imce.eTreeEnter, 'tree');
    imce.addShortcut('UP', imce.eTreeUp, 'tree');
    imce.addShortcut('DOWN', imce.eTreeDown, 'tree');
    imce.addShortcut('LEFT', imce.eTreeLR, 'tree');
    imce.addShortcut('RIGHT', imce.eTreeLR, 'tree');
    imce.addShortcut('ENTER', imce.eContentEnter, 'content');
    imce.addShortcut('UP', imce.eContentArrow, 'content');
    imce.addShortcut('DOWN', imce.eContentArrow, 'content');
    imce.addShortcut('LEFT', imce.eContentArrow, 'content');
    imce.addShortcut('RIGHT', imce.eContentArrow, 'content');
    imce.addShortcut('Ctrl+A', imce.eContentCtrlA, 'content');
    // Add refresh button
    imce.addTbb('refresh', {
      title: Drupal.t('Refresh'),
      permission: 'browse_files|browse_subfolders',
      handler: imce.eFmRefresh,
      shortcut: 'F5',
      icon: 'refresh'
    });
    // Register default activeFolder handler
    imce.bind('activateFolder', imce.defaultActivateFolder);
    // Trigger init handlers
    imce.trigger('init');
    // Create sendto toolbar button if needed.
    imce.createSendtoTbb();
    // Add the file manager to the page
    parentEl.appendChild(imce.fmEl);
    // Set window events
    $(window).bind('beforeunload', imce.eWinBeforeunload).bind('resize', imce.eWinResize);
    imce.eWinResize();
    // Content focus
    imce.contentEl.focus();
    // Set initial messages
    imce.ajaxProcessMessages(conf);
    // Open active path
    var path = conf.active_path;
    var Folder = path && imce.addFolder(path);
    if (!Folder) {
      for (path in conf.folders) {
        if (Folder = imce.getFolder(path)) {
          break;
        }
      }
    }
    if (Folder) {
      Folder.open();
    }
    // Triger postinit
    imce.trigger('postinit');
  };

  /**
   * Init UI elements.
   */
  imce.initUI = function () {
    var el = imce.fmEl;
    var createEl = imce.createEl;
    if (el) {
      return el;
    }
    el = imce.fmEl = createEl('<div id="imce-fm"></div>');
    el.onkeydown = imce.eFmKeydown;
    el.tabIndex = 0;
    // Toolbar
    el.appendChild(imce.toolbarEl = createEl('<div id="imce-toolbar"></div>'));
    // Body
    el.appendChild(imce.bodyEl = createEl('<div id="imce-body"></div>'));
    // Tree
    el = imce.treeEl = createEl('<div id="imce-tree"></div>');
    el.onkeydown = imce.eTreeKeydown;
    el.onmousedown = imce.eTreeMousedown;
    el.ontouchstart = imce.eTreeTouchstart;
    el.tabIndex = 0;
    imce.bodyEl.appendChild(el);
    // Tree resizer
    el = imce.treeResizerEl = createEl('<div id="imce-tree-resizer"></div>');
    el.onmousedown = imce.eTreeResizerMousedown;
    el.ontouchstart = imce.eTreeResizerTouchstart;
    imce.bodyEl.appendChild(el);
    // Content
    el = imce.contentEl = createEl('<div id="imce-content"></div>');
    el.onmousedown = imce.eContentMousedown;
    el.ontouchstart = imce.eContentTouchstart;
    el.onkeydown = imce.eContentKeydown;
    el.onscroll = imce.eContentScroll;
    el.tabIndex = 0;
    imce.bodyEl.appendChild(el);
    // Content header
    el = imce.contentHeaderEl = imce.createEl('<div class="imce-content-header"><div class="imce-item"><div class="imce-item-date" data-sort="date">' + Drupal.t('Date') + '</div><div class="imce-item-height" data-sort="height">' + Drupal.t('Height') + '</div><div class="imce-item-width" data-sort="width">' + Drupal.t('Width') + '</div><div class="imce-item-size" data-sort="size">' + Drupal.t('Size') + '</div><div class="imce-item-icon imce-ficon" data-sort="ext"></div><div class="imce-item-name" data-sort="name">' + Drupal.t('Name') + '</div></div></div>');
    el.onclick = imce.eContentHeaderClick;
    imce.contentEl.appendChild(el);
    // Content status
    el = imce.contentStatusEl = imce.createEl('<div class="imce-content-status"></div>');
    imce.contentEl.appendChild(el);
    // Body resizer
    el = imce.bodyResizerEl = createEl('<div id="imce-body-resizer"></div>');
    el.onmousedown = imce.eBodyResizerMousedown;
    el.ontouchstart = imce.eBodyResizerTouchstart;
    imce.fmEl.appendChild(el);
    // Preview
    imce.fmEl.appendChild(imce.previewEl = createEl('<div id="imce-preview"></div>'));
    return el;
  };

  /**
   * Init folder tree.
   */
  imce.initTree = function () {
    var path;
    var folders = imce.getConf('folders');
    // Create root
    var scheme = imce.getConf('scheme');
    var root = new imce.Folder(scheme ? scheme + '://' : '<' + Drupal.t('root') + '>');
    root.setPath('.');
    root.branchEl.className += ' root';
    imce.treeEl.appendChild(root.branchEl);
    // Create predefined folders.
    for (path in folders) {
      if (imce.owns(folders, path)) {
        imce.addFolder(path, folders[path]);
      }
    }
  };

  /**
   * Returns a folder by path.
   */
  imce.getFolder = function (path) {
    if (imce.owns(imce.tree, path)) {
      return imce.tree[path];
    }
  };

  /**
   * Returns an item by path.
   */
  imce.getItem = function (path) {
    var Folder;
    var parts = imce.splitPath(path);
    if (parts) {
      if (Folder = imce.getFolder(parts[0])) {
        return Folder.getItem(parts[1]);
      }
    }
  };

  /**
   * Adds a folder to the tree.
   */
  imce.addFolder = function (path, conf) {
    var parts;
    var parent;
    var Folder = imce.getFolder(path);
    // Existing
    if (Folder) {
      if (conf) {
        Folder.setConf(conf);
      }
      return Folder;
    }
    // New. Append to the parent.
    if (parts = imce.splitPath(path)) {
      if (parent = imce.addFolder(parts[0])) {
        Folder = new imce.Folder(parts[1], conf);
        parent.appendItem(Folder);
        return Folder;
      }
    }
  };

  /**
   * Add a toolbar button.
   */
  imce.addTbb = function (id, opt) {
    return imce.getTbb(id) || new imce.Tbb(id, opt);
  };

  /**
   * Returns a toolbar button.
   */
  imce.getTbb = function (id) {
    return imce.toolbarButtons[id];
  };

  /**
   * Returns a configuration option.
   */
  imce.getConf = function (name, defaultValue) {
    var value;
    var conf = imce.conf;
    if (!name) {
      return conf;
    }
    value = conf[name];
    return value == null ? defaultValue : value;
  };


  /**
   * Returns a copy of selected items.
   */
  imce.getSelection = function () {
    return imce.selection.slice(0);
  };

  /**
   * Counts selected items.
   */
  imce.countSelection = function () {
    return this.selection.length;
  };

  /**
   * Returns the selected items grouped by parent folder and type.
   */
  imce.groupSelection = function () {
    return imce.groupItems(imce.selection);
  };

  /**
   * Select all items in the active folder.
   */
  imce.selectAll = function () {
    var Folder = imce.activeFolder;
    if (Folder) {
      Folder.selectAll();
    }
  };

  /**
   * Deselects all items.
   */
  imce.deselectAll = function () {
    var i;
    var arr = imce.getSelection();
    for (i in arr) {
      if (imce.owns(arr, i)) {
        arr[i].deselect();
      }
    }
  };

  /**
   * Returns last selected item.
   */
  imce.getLastSelected = function () {
    var arr = imce.selection;
    var len = arr.length;
    if (len) {
      return arr[len - 1];
    }
  };

  /**
   * Adds an item to the selection.
   */
  imce.selectItem = function (Item) {
    if (!Item.selected) {
      var arr = imce.selection;
      var oldlen = arr.length;
      arr.push(Item);
      Item.setState('selected');
      if (oldlen < 2) {
        imce.updatePreview();
      }
    }
  };

  /**
   * Removes an item from the selection.
   */
  imce.deselectItem = function (Item) {
    if (Item.selected) {
      var arr = imce.selection;
      var i = $.inArray(Item, arr);
      Item.unsetState('selected');
      if (i !== -1) {
        arr.splice(i, 1);
        if (arr.length < 2) {
          imce.updatePreview();
        }
      }
    }
  };


  /**
   * Checks external application integration by URL parameters.
   *
   * Ex-1: http://example.com/imce?sendto=HANDLER
   * Creates a sendto operation that calls HANDLER(File, imceWin) of the parent window.
   * Ex-2: http://example.com/imce?urlField=FIELD-ID
   * Creates a sendto operation that fills the field in parent window with the selected file's URL.
   * Ex-3: http://example.com/imce?oninit=HANDLER
   * Calls HANDLER() with imce context when the UI is ready.
   */
  imce.checkIntegration = function () {
    var query = imce.getQuery();
    var handler;
    var urlField;
    var parentWin = window.opener || window.parent;
    if (imce.parentWin = parentWin) {
      // Check sendto handler
      if (handler = imce.resolveHandler(query.sendto, parentWin)) {
        imce.sendtoHandler = handler;
      }
      // Check url field
      else if (urlField = query.urlField) {
        if (urlField = parentWin.document.getElementById(urlField)) {
          imce.sendtoHandler = function (Item, win) {
            try {
              imce.parentWin.focus();
              (imce.parentWin.jQuery||$)(urlField).val(Item.getUrl()).blur().change().focus();
            }
            catch (err) {
              imce.delayError(err);
            }
            win.close();
          };
        }
      }
      // Check init handler
      if (handler = imce.resolveHandler(query.oninit, parentWin)) {
        imce.bind('init', handler);
      }
      // Store sendto type
      if (imce.sendtoHandler && query.type) {
        imce.sendtoType = query.type;
      }
    }
  };

  /**
   * Creates the sendto toolbar button.
   */
  imce.createSendtoTbb = function (title, desc) {
    if (imce.sendtoHandler && !imce.getTbb('sendto')) {
      return imce.addTbb('sendto', {
        title: title || Drupal.t('Select'),
        tooltip: desc || Drupal.t('Use the selected file.'),
        handler: function () {
          imce.runSendtoHandler();
        },
        icon: 'check'
      });
    }
  };

  /**
   * Runs custom sendto handler on the first selected item.
   */
  imce.runSendtoHandler = function (items) {
    var handler = imce.sendtoHandler;
    if (handler) {
      var Item;
      var imgType = imce.sendtoType === 'image';
      items = items || imce.getSelection();
      for (var i in items) {
        if (imce.owns(items, i)) {
          Item = items[i];
          if (imgType ? Item.isImageSource() : Item.isFile) {
            return handler(Item, window);
          }
        }
      }
    }
  };

  /**
   * Default handler for activateFolder event.
   */
  imce.defaultActivateFolder = function (Folder, oldFolder) {
    // Enable/disable toolbar buttons by permission.
    var i;
    var j;
    var Tbb;
    var perm;
    var disabled;
    var buttons = imce.toolbarButtons;
    for (i in buttons) {
      if (!imce.owns(buttons, i)) {
        continue;
      }
      Tbb = buttons[i];
      if (perm = Tbb.permission) {
        perm = perm.split('|');
        disabled = true;
        for (j in perm) {
          if (Folder.getPermission(perm[j])) {
            disabled = false;
            break;
          }
        }
        Tbb.setDisabled(disabled);
      }
    }
  };


  /**
   * Updates the active sort state in the content header.
   */
  imce.updateHeader = function () {
    var newsort = imce.activeFolder.activeSort;
    var oldsort = imce.activeSort || {};
    var el = imce.contentHeaderEl;
    // Check if the sort has changed.
    if (newsort && (newsort.key !== oldsort.key || newsort.desc !== oldsort.desc)) {
      // Deactivate existing column
      if (oldsort.key) {
        $('[data-sort="' + oldsort.key + '"]', el).removeClass('sorted ' + (oldsort.desc ? 'desc' : 'asc'));
      }
      // Activate new column
      $('[data-sort="' + newsort.key + '"]', el).addClass('sorted ' + (newsort.desc ? 'desc' : 'asc'));
      // Store the values
      imce.activeSort = newsort;
    }
  };

  /**
   * Schedule preview updating.
   */
  imce.updatePreview = function () {
    clearTimeout(imce.previewTimer);
    imce.previewTimer = setTimeout(imce.doUpdatePreview, 100);
  };

  /**
   * Set preview of currently selected item.
   */
  imce.doUpdatePreview = function () {
    imce.previewItem(imce.countSelection() === 1 ? imce.getLastSelected() : null);
  };

  /**
   * Sets/clears item preview.
   */
  imce.previewItem = function (Item) {
    var currentItem = imce.previewingItem;
    if (imce.previewingItem = Item) {
      $(imce.previewEl).html(Item.createPreviewEl());
      imce.trigger('previewItem', Item);
    }
    else if (currentItem) {
      imce.previewEl.innerHTML = '';
    }
  };

  /**
   * Schedule status update.
   */
  imce.updateStatus = function () {
    clearTimeout(imce.statusTimer);
    imce.statusTimer = setTimeout(imce.doUpdateStatus, 100);
  };

  /**
   * Updates active folder status.
   */
  imce.doUpdateStatus = function () {
    var Folder = imce.activeFolder;
    if (Folder) {
      $(imce.contentStatusEl).html(Folder.formatStatus());
    }
  };


  /**
   * Returns name filtering regexp.
   */
  imce.getNameFilter = function () {
    var filters = imce.getConf('name_filters', []);
    // Dot files
    if (!imce.getConf('allow_dot_files')) {
      filters.push('^\\.|\\.$');
    }
    return filters.length ? new RegExp(filters.join('|')) : false;
  };

  /**
   * Groups an array of items by parent folder and type.
   */
  imce.groupItems = function (items) {
    var i;
    var Item;
    var path;
    var selected;
    var key;
    var names;
    var group = {};
    for (i in items) {
      if (!imce.owns(items, i)) {
        continue;
      }
      Item = items[i];
      path = Item.parent.getPath();
      selected = group[path] = imce.owns(group, path) ? group[path] : {};
      key = Item.isFolder ? 'subfolders' : 'files';
      names = selected[key] = selected[key] || {};
      names[Item.name] = Item;
    }
    return group;
  };

  /**
   * Checks parent folder permissions of the given items.
   */
  imce.validatePermissions = function (items, filePerm, subfolderPerm) {
    var path;
    var Folder;
    var selected;
    var groups = imce.groupItems(items);
    for (path in groups) {
      if (!imce.owns(groups, path)) {
        continue;
      }
      Folder = imce.getFolder(path);
      selected = groups[path];
      // Check file permission if the selection contains files
      if (selected.files && (filePerm == null || !Folder.getPermission(filePerm))) {
        return false;
      }
      // Check folder permission if the selection contains folders
      if (selected.subfolders && (subfolderPerm == null || !Folder.getPermission(subfolderPerm))) {
        return false;
      }
    }
    return true;
  };

  /**
   * Checks if items contain any predefined folder.
   */
  imce.validatePredefinedPath = function (items) {
    var i;
    var Item;
    var Folder;
    for (i in items) {
      if (!imce.owns(items, i)) {
        continue;
      }
      Item = items[i];
      if (Item.isFolder) {
        if (Folder = Item.hasPredefinedPath()) {
          imce.setMessage(Drupal.t('%path is a predefined path and can not be modified.', {'%path': Folder.getPath()}));
          return false;
        }
      }
    }
    return true;
  };

  /**
   * Validates the number of items.
   */
  imce.validateCount = function (items) {
    if (!items.length) {
      imce.setMessage(Drupal.t('Please select a file.'));
      return false;
    }
    return true;
  };

  /**
   * Validates item extensions against an allowed list.
   */
  imce.validateExtensions = function (items, exts) {
    for (var i in items) {
      if (imce.owns(items, i) && !imce.validateExtension(items[i].ext, exts)) {
        return false;
      }
    }
    return true;
  };

  /**
   * Validates an extension against an allowed list.
   */
  imce.validateExtension = function (ext, exts) {
    if (!ext || $.inArray(ext.toLowerCase(), exts.toLowerCase().split(/[\s,]+/)) === -1) {
      imce.setMessage(Drupal.t('Only files with the following extensions are allowed: %files-allowed.', {'%files-allowed': exts}));
      return false;
    }
    return true;
  };

  /**
   * Validates a file name.
   */
  imce.validateFileName = function (name) {
    // Basic validation
    if (!name || name === '.' || name === '..' || !name.length || name.length > 240) {
      return false;
    }
    // Test name filters
    var regex = imce.getNameFilter();
    if (regex && regex.test(name)) {
      imce.setMessage(Drupal.t('%filename is not allowed.', {'%filename': name}));
      return false;
    }
    // Test chars forbidden in various operating systems.
    if (/^\s|\s$|[\/\\:\*\?\x22<>\|\x00-\x1F]/.test(name)) {
      imce.setMessage(Drupal.t('%filename contains invalid characters. Use only alphanumeric characters for better portability.', {'%filename': name}));
      return false;
    }
    return true;
  };

  /**
   * Validates min/max image dimensions.
   */
  imce.validateDimensions = function (items, width, height) {
    // Check min dimensions
    if (width < 1 || height < 1) {
      return false;
    }
    // Check max dimensions.
    var maxwidth = imce.getConf('maxwidth');
    var maxheight = imce.getConf('maxheight');
    if (maxwidth && width > maxwidth || maxheight && height > maxheight) {
      imce.setMessage(Drupal.t('Image dimensions must be smaller than %dimensions pixels.', {'%dimensions': maxwidth + 'x' + maxwidth}));
      return false;
    }
    return true;
  };

  /**
   * Checks if all the selected items are images.
   */
  imce.validateImageTypes = function (items) {
    var Item = imce.getFirstItem(items, 'width', false);
    if (Item) {
      imce.setMessage(Drupal.t('%name is not an image.', {'%name': Item.name}));
      return false;
    }
    return true;
  };


  /**
   * Keydown event for the file manager.
   */
  imce.eFmKeydown = function (event) {
    return imce.eFireShortcut.call(this, event);
  };

  /**
   * Refresh handler for the file manager.
   */
  imce.eFmRefresh = function () {
    imce.activeFolder.load();
  };

  /**
   * Mousedown event for folder tree.
   */
  imce.eTreeMousedown = function (event) {
    // Manually focus as the browser default might have been prevented.
    this.focus();
  };

  /**
   * Touchstart event for folder tree.
   */
  imce.eTreeTouchstart = function (event) {
    this.focus();
  };

  /**
   * Keydown event for folder tree.
   */
  imce.eTreeKeydown = function (event) {
    return imce.eFireShortcut.call(this, event, 'tree');
  };

  /**
   * Tree shortcut: Enter.
   */
  imce.eTreeEnter = function () {
    imce.activeFolder.open();
  };

  /**
   * Tree shortcut: UP.
   */
  imce.eTreeUp = function (e) {
    var Folder = imce.activeFolder;
    var prvEl;
    var prvFolder;
    if (prvEl = Folder.branchEl.previousSibling) {
      if (prvFolder = prvEl.Folder) {
        while (prvFolder.expanded) {
          if (prvEl = prvFolder.subtreeEl.lastChild) {
            prvFolder = prvEl.Folder;
          }
        }
      }
    }
    else {
      prvFolder = Folder.parent;
    }
    if (prvFolder) {
      prvFolder.activate();
      imce.scrollToEl(prvFolder.branchEl, imce.treeEl);
    }
  };

  /**
   * Tree shortcut: DOWN.
   */
  imce.eTreeDown = function (e) {
    var Folder = imce.activeFolder;
    var nextEl;
    var nextFolder;
    if (Folder.expanded && (nextEl = Folder.subtreeEl.firstChild)) {
      nextFolder = nextEl.Folder;
    }
    else {
      // noinspection Eslint
      do {
        if (nextEl = Folder.branchEl.nextSibling) {
          nextFolder = nextEl.Folder;
          break;
        }
      } while (Folder = Folder.parent);
    }
    if (nextFolder) {
      nextFolder.activate();
      imce.scrollToEl(nextFolder.branchEl, imce.treeEl);
    }
  };

  /**
   * Tree shortcut: LEFT/RIGHT.
   */
  imce.eTreeLR = function (e) {
    var Folder = imce.activeFolder;
    if (e.keyCode === 39 ^ Folder.expanded) {
      $(Folder.branchToggleEl).click();
    }
  };

  /**
   * Mousedown event for tree resizer.
   */
  imce.eTreeResizerMousedown = function (event) {
    return imce.eTreeResizerDown.call(this, imce.eFix(event));
  };

  /**
   * Touch start event for tree resizer.
   */
  imce.eTreeResizerTouchstart = function (event) {
    return imce.eCommonTouchstart(event, imce.eTreeResizerDown, this);
  };

  /**
   * Common Down event for tree resizer.
   */
  imce.eTreeResizerDown = function (e, isTouch) {
    this.startX = e.pageX;
    this.startW = $(imce.treeEl).width();
    this.maxW = this.startW + $(imce.contentEl).width();
    imce.bindDragDrop(imce.eTreeResizerDrag, null, null, isTouch);
    return false;
  };

  /**
   * Drag event for tree resizer.
   */
  imce.eTreeResizerDrag = function (e) {
    var el = imce.treeResizerEl;
    $(imce.treeEl).width(Math.min(el.maxW, Math.max(el.startW + e.pageX - el.startX, 0)));
    e.preventDefault();
  };

  /**
   * Mousedown event for content area.
   */
  imce.eContentMousedown = function (event) {
    // Manually focus as the browser default might have been prevented.
    this.focus();
  };

  /**
   * Touchstart event for content area.
   */
  imce.eContentTouchstart = function (event) {
    this.focus();
  };

  /**
   * Keydown event for content area.
   */
  imce.eContentKeydown = function (event) {
    return imce.eFireShortcut.call(this, event, 'content');
  };

  /**
   * Scroll event for content area.
   */
  imce.eContentScroll = function (event) {
    imce.updateContentPositions();
    setTimeout(imce.updateContentPositions);
  };

  /**
   * Click event for content header.
   */
  imce.eContentHeaderClick = function (event) {
    var key;
    var e = imce.eFix(event);
    var Folder = imce.activeFolder;
    var sort = Folder.activeSort || {};
    if (key = e.target.getAttribute('data-sort')) {
      Folder.sortItems(key, key === sort.key ? !sort.desc : sort.desc);
    }
  };

  /**
   * Update content header position on content scroll.
   */
  imce.updateContentPositions = function () {
    var top = imce.contentEl.scrollTop;
    imce.contentHeaderEl.style.top = top + 'px';
    imce.contentStatusEl.style.bottom = -top + 'px';
  };

  /**
   * Content shortcut: ENTER.
   */
  imce.eContentEnter = function (e) {
    var Item = imce.getLastSelected();
    if (Item) {
      Item.dblClick();
    }
  };

  /**
   * Content shortcut: Ctrl+A.
   */
  imce.eContentCtrlA = function (e) {
    imce.selectAll();
  };

  /**
   * Content shortcut: LEFT/RIGHT/UP/DOWN
   */
  imce.eContentArrow = function (e) {
    var Item;
    var i = 0;
    var Folder = imce.activeFolder;
    var key = e.keyCode;
    if (Item = imce.getLastSelected()) {
      i = Folder.indexOf(Item) + (key % 2 ? key - 38 : imce.countElPerRow(Item.el) * (key - 39));
    }
    if (Item = Folder.getItemAt(i)) {
      Item.click(e);
      Item.scrollIntoView();
    }
  };

  /**
   * Mousedown event for body resizer.
   */
  imce.eBodyResizerMousedown = function (event) {
    return imce.eBodyResizerDown.call(this, imce.eFix(event));
  };

  /**
   * Touch start event for body resizer.
   */
  imce.eBodyResizerTouchstart = function (event) {
    return imce.eCommonTouchstart(event, imce.eBodyResizerDown, this);
  };

  /**
   * Common Down event for body resizer.
   */
  imce.eBodyResizerDown = function (e, isTouch) {
    this.startY = e.pageY;
    this.startH = $(imce.bodyEl).height();
    this.maxH = this.startH + $(imce.previewEl).height();
    imce.bindDragDrop(imce.eBodyResizerDrag, null, null, isTouch);
    return false;
  };

  /**
   * Drag event for body resizer.
   */
  imce.eBodyResizerDrag = function (e) {
    var el = imce.bodyResizerEl;
    var bodyH = Math.min(Math.max(el.startH + e.pageY - el.startY, 0), el.maxH);
    $(imce.bodyEl).height(bodyH);
    $(imce.previewEl).height(el.maxH - bodyH);
    e.preventDefault();
  };

  /**
   * Beforeunload event for window.
   */
  imce.eWinBeforeunload = function (e) {
    // Store active sort.
    var data = {};
    if (data.activeSort = imce.activeSort) {
      imce.trigger('storeLocalData', data);
      try {
        localStorage.setItem('imce.local', JSON.stringify(data));
      }
      catch (err) {
        imce.delayError(err);
      }
    }
  };

  /**
   * Resize event for window.
   */
  imce.eWinResize = function (e) {
    var pdiff;
    var diff = imce.getWindowSize().height - imce.fmEl.offsetHeight;
    // Distribute the excess space to the body and preview elements.
    if (diff) {
      var $bodyEl = $(imce.bodyEl);
      var $prvEl = $(imce.previewEl);
      if ($prvEl[0].offsetHeight) {
        pdiff = parseInt(diff / 2);
        diff -= pdiff;
        $prvEl.height($prvEl.height() + pdiff);
      }
      $bodyEl.height($bodyEl.height() + diff);
    }
  };


  /**
   * Binds an handler by type.
   */
  imce.bind = function (type, handler) {
    var events = imce.events;
    var handlers = events[type];
    if (!handlers) {
      handlers = events[type] = {};
    }
    handlers['' + handler] = handler;
  };

  /**
   * Unbinds an handler by type.
   */
  imce.unbind = function (type, handler) {
    var events = imce.events;
    var handlers = events[type];
    if (handlers) {
      if (1 in arguments) {
        delete handlers['' + handler];
      }
      else {
        delete events[type];
      }
    }
  };

  /**
   * Triggers handlers by type.
   */
  imce.trigger = function (type) {
    var i;
    var handler;
    var handlers = imce.events[type];
    var ret = [];
    if (handlers) {
      for (i in handlers) {
        if (handler = handlers[i]) {
          if (handler.apply) {
            ret.push(handler.apply(imce, Array.prototype.slice.call(arguments, 1)));
          }
        }
      }
    }
    return ret;
  };


  /**
   * Adds a shortcut handler to an area.
   */
  imce.addShortcut = function (shortcut, handler, area) {
    var shortcuts;
    if (shortcuts = imce.getAreaShortcuts(area)) {
      shortcuts[shortcut.toUpperCase()] = handler;
    }
  };

  /**
   * Returns a shortcut handler.
   */
  imce.getShortcut = function (shortcut, area) {
    var shortcuts;
    if (shortcuts = imce.getAreaShortcuts(area)) {
      return shortcuts[shortcut.toUpperCase()];
    }
  };

  /**
   * Removes a shortcut handler.
   */
  imce.removeShortcut = function (shortcut, area) {
    var shortcuts;
    if (shortcuts = imce.getAreaShortcuts(area)) {
      delete shortcuts[shortcut.toUpperCase()];
    }
  };

  /**
   * Executes a shortcut handler.
   * Returns true if shortcut exists and is executed successfully.
   */
  imce.fireShortcut = function (shortcut, area) {
    var handler = imce.getShortcut(shortcut, area);
    if (handler) {
      // DOM element
      if (handler.click) {
        handler.click();
        return true;
      }
      // Callback
      if (handler.apply) {
        // Shortcuts returning false are considered disabled.
        return handler.apply(this, Array.prototype.slice.call(arguments, 2)) !== false;
      }
    }
  };

  /**
   * Returns a shortcut handler.
   */
  imce.getAreaShortcuts = function (area) {
    if (!area) {
      area = 'fm';
    }
    return imce.shortcuts[area];
  };


  /**
   * Builds a shortcut string from an event.
   */
  imce.eBuildShortcut = function (e) {
    var symbol;
    var key = e.keyCode;
    var shortcut = '';
    if (key && (symbol = imce.getKeySymbols(key))) {
      if (e.ctrlKey) {
        shortcut += 'CTRL+';
      }
      if (e.altKey) {
        shortcut += 'ALT+';
      }
      if (e.shiftKey) {
        shortcut += 'SHIFT+';
      }
      shortcut += symbol;
    }
    return shortcut;
  };

  /**
   * Event helper for imce shortcut firing.
   */
  imce.eFireShortcut = function (event, area) {
    var e = event || window.event;
    var shortcut = imce.eBuildShortcut(e);
    // Prevent default if shortcut is executed.
    if (shortcut) {
      e = $.event.fix(e);
      if (imce.fireShortcut.call(this, shortcut, area, e)) {
        e.stopPropagation();
        return false;
      }
    }
  };

  /**
   * Returns key symbols allowed in shortcuts.
   */
  imce.getKeySymbols = function (key) {
    var i;
    var symbols = imce.keySymbols;
    if (!symbols) {
      // Custom keys
      symbols = imce.keySymbols = {
        8: 'BACKSPACE',
        9: 'TAB',
        13: 'ENTER',
        27: 'ESC',
        32: 'SPACE',
        37: 'LEFT',
        38: 'UP',
        39: 'RIGHT',
        40: 'DOWN',
        46: 'DEL'
      };
      // Add numbers
      for (i = 0; i < 10; i++) {
        symbols[48 + i] = '' + i;
      }
      // Add letters
      for (i = 65; i < 91; i++) {
        symbols[i] = String.fromCharCode(i);
      }
      // Add function keys
      for (i = 1; i < 13; i++) {
        symbols[111 + i] = 'F' + i;
      }
    }
    return (0 in arguments) ? symbols[key] : symbols;
  };


  /**
   * Creates an ajax request for a specific operation.
   */
  imce.ajax = function (jsop, opt) {
    return $.ajax(imce.ajaxPrepare(jsop, opt));
  };

  /**
   * Prepares ajax options.
   */
  imce.ajaxPrepare = function (jsop, opt) {
    // Prepare data
    var path;
    var Folder = opt && opt.activeFolder != null ? opt.activeFolder : imce.activeFolder;
    var data = {jsop: jsop, token: imce.getConf('token')};
    if (Folder) {
      if (path = Folder.getPath()) {
        data.active_path = path;
      }
    }
    // Extend defaults
    return $.extend(true, imce.ajaxDefaults(), {data: data, activeFolder: Folder}, opt);
  };

  /**
   * Returns ajax default options.
   */
  imce.ajaxDefaults = function () {
    return {
      url: imce.getConf('ajax_url'),
      type: 'POST',
      dataType: 'json',
      beforeSend: imce.ajaxBeforeSend,
      success: imce.ajaxSuccess,
      error: imce.ajaxError,
      complete: imce.ajaxComplete
    };
  };

  /**
   * Creates an ajax request for a specific operation on the given items.
   */
  imce.ajaxItems = function (jsop, items, opt) {
    return imce.ajax(jsop, $.extend(true, imce.ajaxItemsOpt(items), opt));
  };

  /**
   * Creates an ajax options object including the items as the selection data.
   */
  imce.ajaxItemsOpt = function (items) {
    return {data: {selection: imce.getItemPaths(items)}};
  };

  /**
   * Default before send handler.
   */
  imce.ajaxBeforeSend = function (xhr, opt) {
    var handler;
    var Folder;
    if (handler = opt.customBeforeSend) {
      if (handler.apply(this, arguments) === false) {
        opt.activeFolder = null;
        return false;
      }
    }
    if (Folder = opt.activeFolder) {
      Folder.setBusy(true);
    }
  };

  /**
   * Default ajax success handler.
   */
  imce.ajaxSuccess = function (response, status) {
    var handler;
    var opt = this;
    // Make the response available in complete handlers.
    opt.response = response;
    imce.ajaxProcessResponse(response);
    if (handler = opt.customSuccess) {
      handler.apply(opt, arguments);
    }
  };

  /**
   * Default ajax complete handler.
   */
  imce.ajaxComplete = function (xhr, status) {
    var Folder;
    var handler;
    var opt = this;
    if (Folder = opt.activeFolder) {
      Folder.setBusy(false);
    }
    if (handler = opt.customComplete) {
      handler.apply(opt, arguments);
    }
    opt.response = opt.activeFolder = null;
  };

  /**
   * Default ajax error handler.
   */
  imce.ajaxError = function (xhr, status, e) {
    imce.setMessage('<pre class="imce-ajax-error">' + Drupal.checkPlain(imce.ajaxErrorMessage(xhr, this.url)) + '</pre>');
  };

  /**
   * Processes the ajax response.
   */
  imce.ajaxProcessResponse = function (response) {
    if (response) {
      imce.ajaxProcessRemoved(response);
      imce.ajaxProcessAdded(response);
      imce.ajaxProcessMessages(response);
    }
  };

  /**
   * Processes the added items in the response.
   */
  imce.ajaxProcessAdded = function (response) {
    var path;
    var Folder;
    var added;
    if (added = response.added) {
      for (path in added) {
        if (Folder = imce.addFolder(path)) {
          Folder.addContent(added[path], true);
          imce.contentEl.focus();
        }
      }
    }
  };

  /**
   * Processes the removed items in the response.
   */
  imce.ajaxProcessRemoved = function (response) {
    var i;
    var Item;
    var paths = response.removed;
    if (paths) {
      for (i in paths) {
        if (Item = imce.getItem(paths[i])) {
          Item.remove();
        }
      }
    }
  };

  /**
   * Processes the messages in the response.
   */
  imce.ajaxProcessMessages = function (response) {
    var i;
    var type;
    var msgs = response.messages;
    if (msgs) {
      for (type in msgs) {
        if (imce.owns(msgs, type)) {
          for (i in msgs[type]) {
            if (msgs[type].hasOwnProperty(i)) {
              imce.setMessage(msgs[type][i], type);
            }
          }
        }
      }
    }
  };

  /**
   * Generates an ajax error message.
   */
  imce.ajaxErrorMessage = function (xhr, url) {
    var msg = Drupal.t('An AJAX HTTP error occurred.');
    msg += '\n' + Drupal.t('Path: !uri', {'!uri': url});
    msg += '\n' + Drupal.t('HTTP Result Code: !status', {'!status': xhr.status || 0});
    msg += '\n' + Drupal.t('StatusText: !statusText', {'!statusText': xhr.statusText || 'N/A'});
    msg += '\n' + Drupal.t('ResponseText: !responseText', {'!responseText': xhr.responseText || 'N/A'});
    return msg;
  };

  /**
   * Returns an array of item paths.
   */
  imce.getItemPaths = function (items) {
    return $.map(items, imce.getItemPath);
  };

  /**
   * Returns the path of an item.
   */
  imce.getItemPath = function (Item) {
    return Item.getPath();
  };


  /**
   * Set a status message.
   */
  imce.setMessage = function (msg, type) {
    if (!type) {
      type = 'error';
    }
    var mq = imce.messageQueue;
    var len = mq.length;
    var msgId = msg + ':' + type;
    // Skip if it's identical to the last message
    if (len && mq[len - 1].msgId === msgId) {
      return false;
    }
    // Add the message
    mq[len] = imce.createMessageEl(msg, type);
    mq[len].msgId = msgId;
    // Schedule the processing at a later time to queue new messages.
    if (!imce.pmqScheduled) {
      imce.pmqScheduled = setTimeout(imce.processMessageQueue, 100);
    }
    return false;
  };

  /**
   * Process message queue.
   */
  imce.processMessageQueue = function () {
    var mq = imce.messageQueue;
    if (mq.length) {
      // Display all messages
      $(imce.createMessagePopupEl()).html(mq).fadeIn(200);
      // Empty array.
      mq.length = 0;
      // Mousedown close
      $(document).bind('mousedown', imce.eMPopDocMousedown);
      // Auto close
      imce.mPopCloseTimer = setTimeout(imce.mPopClose, 2500);
    }
  };

  /**
   * Closes currently open message popup.
   */
  imce.mPopClose = function () {
    // Time up but still hovering. Do not close. A new timer will be set on mouseout.
    if (imce.mPopHovering) {
      imce.mPopCloseTimerUp = 1;
      return imce.mPopCloseTimerUp;
    }
    // Time up or mousedown
    clearTimeout(imce.mPopCloseTimer);
    imce.mPopCloseTimerUp = 0;
    $(document).unbind('mousedown', imce.eMPopDocMousedown);
    $(imce.messagePopupEl).fadeOut(400, imce.processMessageQueueNext);
  };

  /**
   * Continue processing the remaining messages.
   */
  imce.processMessageQueueNext = function () {
    imce.pmqScheduled = 0;
    if (imce.messageQueue.length) {
      imce.pmqScheduled = setTimeout(imce.processMessageQueue, 250);
    }
  };

  /**
   * Mouseover event for message popup.
   */
  imce.eMPopMouseenter = function (e) {
    imce.mPopHovering = 1;
    // Clear the shorter timer set on mouseleave
    if (imce.mPopCloseTimerUp) {
      clearTimeout(imce.mPopCloseTimer);
    }
  };

  /**
   * Mouseout event for message popup.
   */
  imce.eMPopMouseleave = function (e) {
    imce.mPopHovering = 0;
    // Set a shorter close timer if the long time is up
    if (imce.mPopCloseTimerUp) {
      imce.mPopCloseTimer = setTimeout(imce.mPopClose, 2000);
    }
  };

  /**
   * Mousedown event for document in order to close message popup.
   */
  imce.eMPopDocMousedown = function (e) {
    // Close the popup if the mousedown is outside of it.
    if (!imce.mPopHovering) {
      imce.mPopClose();
    }
  };

  /**
   * Creates a message element.
   */
  imce.createMessageEl = function (msg, type) {
    var el = imce.createEl('<div class="imce-message imce-ficon"><div class="imce-message-content"></div></div>');
    el.className += ' ' + type;
    el.firstChild.innerHTML = msg;
    return el;
  };

  /**
   * Creates the message popup element.
   */
  imce.createMessagePopupEl = function () {
    var el = imce.messagePopupEl;
    if (!el) {
      el = imce.messagePopupEl = imce.createLayer('imce-message-popup', imce.fmEl);
      $(el).hover(imce.eMPopMouseenter, imce.eMPopMouseleave);
    }
    return el;
  };


  /**
   * Checks a permission in a folder conf.
   */
  imce.permissionInFolderConf = function (permission, folderConf) {
    var permissions = folderConf && folderConf.permissions;
    return !!(permissions && ((permission in permissions) ? permissions[permission] : permissions.all));
  };

  /**
   * Checks if a permission exists in any of the predefined folders.
   */
  imce.hasPermission = function (permission, conf) {
    var i;
    var folders = (conf || imce.conf).folders;
    if (folders) {
      for (i in folders) {
        if (imce.permissionInFolderConf(permission, folders[i])) {
          return true;
        }
      }
    }
    return false;
  };

  /**
   * Sorting helpers.
   */
  imce.sortText = function (a, b) {
    return a.toLowerCase() < b.toLowerCase() ? -1 : 1;
  };
  imce.sortNum = function (a, b) {
    return (a || 0) - (b || 0);
  };
  imce.sortNumericProperty = function (a, b, prop) {
    // Do not change sort within folders
    var result = (a.isFolder ? -1 : 1);
    if (a.isFolder === b.isFolder) {
      result = imce.sortNum(a[prop] || 0, b[prop] || 0);
    }
    return result;
  };
  imce.sortBranchName = function (a, b) {
    return imce.sortText(a.name, b.name);
  };

  /**
   * Property sorters.
   */
  imce.sorters.name = function (a, b) {
    var result = (a.isFolder ? -1 : 1);
    if (a.isFolder === b.isFolder) {
      result = imce.sortText(a.name, b.name);
    }
    return result;
  };
  imce.sorters.date = function (a, b) {
    return imce.sortNumericProperty(a, b, 'date');
  };
  imce.sorters.size = function (a, b) {
    return imce.sortNumericProperty(a, b, 'size');
  };
  imce.sorters.width = function (a, b) {
    return imce.sortNumericProperty(a, b, 'width');
  };
  imce.sorters.height = function (a, b) {
    return imce.sortNumericProperty(a, b, 'height');
  };
  imce.sorters.ext = function (a, b) {
    var result = (a.isFolder ? -1 : 1);
    if (a.isFolder === b.isFolder) {
      result = (a.isFolder ? 0 : imce.sortText(a.ext || '', b.ext || ''));
    }
    return result;
  };

  /**
   * Splits a path into dirpath and filename.
   */
  imce.splitPath = function (path) {
    if (typeof path === 'string' && path !== '') {
      var parts = path.split('/');
      var filename = parts.pop();
      var dirpath = parts.join('/');
      if (filename !== '') {
        return [dirpath === '' ? '.' : dirpath, filename];
      }
    }
  };

  /**
   * Creates a file path by joining a folder path and a filename.
   */
  imce.joinPaths = function (dirpath, filename) {
    if (dirpath === '.') {
      return filename;
    }
    if (filename === '.') {
      return dirpath;
    }
    if (dirpath.substr(-1) !== '/') {
      dirpath += '/';
    }
    return dirpath + filename;
  };

  /**
   * Returns query parameters from the current URL.
   */
  imce.getQuery = function (name) {
    var i;
    var part;
    var parts;
    var str;
    var query = imce.query;
    if (!query) {
      query = imce.query = {};
      if (str = location.search) {
        parts = str.substr(1).split('&');
        for (i in parts) {
          if (imce.owns(parts, i)) {
            part = parts[i].split('=');
            query[imce.decode(part[0])] = part[1] ? imce.decode(part[1]) : '';
          }
        }
      }
    }
    return name ? query[name] : query;
  };

  /**
   * Wrapper around decodeURIComponent.
   * Avoids malformed uri exception.
   */
  imce.decode = function (str) {
    try {
      str = decodeURIComponent(str);
    }
    catch (err) {
      imce.delayError(err);
    }
    return str;
  };

  /**
   * Throws an error after a minimum delay.
   */
  imce.delayError = function (err) {
    setTimeout(function () {
      throw err;
    });
  };

  /**
   * Formats item date.
   */
  imce.formatDate = function (timestamp, dayOnly) {
    var D;
    var p0;
    var ret = '';
    if (timestamp) {
      D = new Date(timestamp * 1000);
      p0 = imce.prependZero;
      ret = D.getFullYear() + '-' + p0(D.getMonth() + 1) + '-' + p0(D.getDate());
      if (!dayOnly) {
        ret += ' ' + p0(D.getHours()) + ':' + p0(D.getMinutes());
      }
    }
    return ret;
  };

  /**
   * Formats item size.
   */
  imce.formatSize = function (size) {
    if (size == null) {
      return '';
    }
    if (!size || size < 100) {
      return Drupal.formatPlural(size, '1 byte', '@count bytes', {'@count': size || 0});
    }
    if (size < 1048576) {
      return Drupal.t('@size KB', {'@size': imce.round(size / 1024, 1)});
    }
    return Drupal.t('@size MB', {'@size': imce.round(size / 1048576, 1)});
  };

  /**
   * Formats content items status.
   */
  imce.formatItemsStatus = function (count, size) {
    return Drupal.t('!items (!size)', {
      '!items': Drupal.formatPlural(count, '1 item', '@count items'),
      '!size': imce.formatSize(size)
    });
  };

  /**
   * Prepends 0 to numbers smaller than 10.
   */
  imce.prependZero = function (num) {
    return num < 10 ? '0' + num : num;
  };

  /**
   * Rounds a number to the given precision
   */
  imce.round = function (num, precision) {
    var n = Math.pow(10, precision);
    return Math.round(num * n) / n;
  };

  /**
   * Returns the extension of a file name.
   */
  imce.getExt = function (name) {
    var pos = name.lastIndexOf('.');
    return pos === -1 ? '' : name.substr(pos + 1);
  };

  /**
   * Checks if an object owns a property.
   */
  imce.owns = function (object, property) {
    return Object.prototype.hasOwnProperty.call(object, property);
  };

  /**
   * Returns the first item that has a property.
   */
  imce.getFirstItem = function (items, prop, state) {
    var i;
    var item;
    if (typeof state === "undefined") {
      state = true;
    }
    for (i in items) {
      if (imce.owns(items, i)) {
        item = items[i];
        if (!prop || (item[prop] ? state : !state)) {
          return item;
        }
      }
    }
  };

  /**
   * Resolves a string to a handler under the given scope.
   */
  imce.resolveHandler = function (str, scope) {
    if (!str) {
      return;
    }
    var i;
    var obj = scope || window;
    var parts = str.split('.');
    var len = parts.length;
    for (i = 0; i < len && (obj = obj[parts[i]]); i++) {
      // empty
    }
    return i === len && obj && obj.call && obj.apply ? obj : false;
  };

  /**
   * Creates a DOM element from html string.
   */
  imce.createEl = function (html) {
    var el;
    var div = imce._div;
    if (!div) {
      div = imce._div = document.createElement('div');
    }
    div.innerHTML = html;
    el = div.firstChild;
    div.removeChild(el);
    return el;
  };

  /**
   * Creates a layer element.
   */
  imce.createLayer = function (cname, parent) {
    var layer = imce.createEl('<div class="imce-layer"></div>');
    if (cname) {
      layer.className += ' ' + cname;
    }
    if (parent !== false) {
      (parent || document.body).appendChild(layer);
    }
    return layer;
  };

  /**
   * Removes element without removing events.
   */
  imce.removeEl = function (el) {
    var parent = el.parentNode;
    if (parent) {
      parent.removeChild(el);
    }
  };

  /**
   * Returns window inner size.
   */
  imce.getWindowSize = function () {
    return {
      width: window.innerWidth || document.documentElement.clientWidth,
      height: window.innerHeight || document.documentElement.clientHeight
    };
  };

  /**
   * Returns scroll values of the window.
   */
  imce.getWindowScroll = function () {
    if (typeof window.pageXOffset === "undefined") {
      var el = document.documentElement;
      return {left: el.scrollLeft, top: el.scrollTop};
    }
    return {left: window.pageXOffset, top: window.pageYOffset};
  };

  /**
   * Fixes and converts an event into jQuery event.
   */
  imce.eFix = function (event) {
    return $.event.fix(event || window.event);
  };

  /**
   * Scroll an element into view inside the scrollable wrapper.
   */
  imce.scrollToEl = function (el, wrpEl, diffTop, diffBottom) {
    if (el.offsetWidth && wrpEl.scrollHeight > wrpEl.clientHeight) {
      var elTop = $(el).offset().top;
      var elBottom = elTop + el.offsetHeight;
      var wrpTop = $(wrpEl).offset().top;
      var wrpBottom = wrpTop + wrpEl.offsetHeight;
      wrpTop += diffTop || 0;
      wrpBottom -= diffBottom || 0;
      // Check top positions
      if (elTop < wrpTop) {
        wrpEl.scrollTop -= wrpTop - elTop + 10;
      }
      else if (wrpBottom < elBottom) {
        // Consider el height might be bigger than the wrapper height.
        // Get the minimum among top space and required scroll.
        wrpEl.scrollTop += Math.min(elBottom - wrpBottom + 10, elTop - wrpTop - 10);
      }
    }
  };

  /**
   * Returns number of the elements that can fit in a row inside the parent.
   */
  imce.countElPerRow = function (el) {
    return Math.max(1, parseInt(el.parentNode.clientWidth / $(el).outerWidth(true)));
  };

  /**
   * Makes the element stay inside window boundaries.
   */
  imce.fixPosition = function (el) {
    var pos = $(el).offset();
    var winSize = imce.getWindowSize();
    var winScroll = imce.getWindowScroll();
    var scrollbar = 18;
    var extraX = pos.left - winScroll.left + el.offsetWidth - winSize.width + scrollbar;
    var extraY = pos.top - winScroll.top + el.offsetHeight - winSize.height + scrollbar;
    // Shift to left
    if (extraX > 0) {
      el.style.left = Math.max(0, pos.left - extraX) + 'px';
    }
    // Shift to top
    if (extraY > 0) {
      el.style.top = Math.max(0, pos.top - extraY) + 'px';
    }
  };


  /**
   * Bind drag drop callbacks to the document
   */
  imce.bindDragDrop = function (drag, drop, data, isTouch) {
    var edata = {drag: drag, drop: drop, data: data, isTouch: isTouch};
    $(document).bind(isTouch ? 'touchmove' : 'mousemove', edata, imce.eDocDrag).bind(isTouch ? 'touchend' : 'mouseup', edata, imce.eDocDrop);
  };

  /**
   * Default drag event for document which is set by imce.bindDragDrop
   */
  imce.eDocDrag = function (e) {
    var edata = e.data;
    // Call custom drag event if set.
    if (edata.drag) {
      // Fix touch event
      if (edata.isTouch) {
        e = imce.eTouchFix(e, e.originalEvent.changedTouches[0]);
      }
      return edata.drag.call(this, e);
    }
  };

  /**
   * Default drop event for document which is set by imce.bindDragDrop
   */
  imce.eDocDrop = function (e) {
    var edata = e.data;
    $(document).unbind(edata.isTouch ? 'touchmove' : 'mousemove', imce.eDocDrag).unbind(edata.isTouch ? 'touchend' : 'mouseup', imce.eDocDrop);
    // Call custom drop event if set.
    if (edata.drop) {
      // Fix touch event
      if (edata.isTouch) {
        e = imce.eTouchFix(e, e.originalEvent.changedTouches[0]);
      }
      return edata.drop.call(this, e);
    }
  };

  /**
   * Fix touch events
   */
  imce.eTouchFix = function (e, touch) {
    // Make sure e is a jquery event object that is writable.
    e = $.event.fix(e);
    if (touch && typeof touch.pageX !== "undefined") {
      e.pageX = touch.pageX;
      e.pageY = touch.pageY;
      e.clientX = touch.clientX;
      e.clientY = touch.clientY;
    }
    return e;
  };

  /**
   * Common touchstart event.
   */
  imce.eCommonTouchstart = function (event, callback, context) {
    var touch;
    var touches = event.changedTouches;
    // Skip event for multi-touch
    if (touches && (touch = touches[0]) && !touches[1]) {
      if (callback && callback.call) {
        return callback.call(context || this, imce.eTouchFix(event, touch), true);
      }
      // Prevent default.
      return false;
    }
  };

})(jQuery, Drupal);
;
/*global imce:true*/
(function ($, Drupal, imce) {
  'use strict';

  /**
   * @file
   * Defines imce Item object.
   */

  /**
   * Imce Item.
   */
  imce.Item = function (name) {
    this.construct(name);
  };

  /**
   * Item prototype.
   */
  var Item = imce.Item.prototype;

  /**
   * Constructs Imce Item.
   */
  Item.construct = function (name) {
    this.createEl();
    this.setName(name);
  };

  /**
   * Creates Item elements.
   */
  Item.createEl = function () {
    var el;
    var children;
    var Item = this;
    if (!Item.el) {
      el = Item.el = imce.createEl('<div class="imce-item"><div class="imce-item-date"></div><div class="imce-item-height"></div><div class="imce-item-width"></div><div class="imce-item-size"></div><div class="imce-item-icon imce-ficon"></div><div class="imce-item-name"></div></div>');
      el.onmousedown = imce.eItemMousedown;
      el.ondblclick = imce.eItemDblclick;
      el.Item = Item;
      children = el.children;
      Item.dateEl = children[0];
      Item.heightEl = children[1];
      Item.widthEl = children[2];
      Item.sizeEl = children[3];
      Item.iconEl = children[4];
      Item.nameEl = children[5];
    }
  };

  /**
   * Appends the item to a parent.
   */
  Item.appendTo = function (parent) {
    parent.appendItem(this);
  };

  /**
   * Removes the item.
   */
  Item.remove = function (shallow) {
    if (this.parent) {
      this.parent.removeItem(this, shallow);
    }
  };

  /**
   * Item click handler.
   */
  Item.click = function (e) {
    var Item = this;
    if (e) {
      // Range select
      if (e.shiftKey) {
        var Folder = imce.activeFolder;
        var lastItem = imce.getLastSelected();
        var start = lastItem ? Folder.indexOf(lastItem) : -1;
        var end = Folder.indexOf(Item);
        var step = start < end ? 1 : -1;
        while (start !== end) {
          Folder.getItemAt(start += step).select();
        }
        return;
      }
      // Toggle select
      if (e.ctrlKey) {
        return Item.toggleSelect();
      }
    }
    var i;
    var selection = imce.getSelection();
    for (i in selection) {
      if (imce.owns(selection, i) && selection[i] !== Item) {
        selection[i].deselect();
      }
    }
    Item.select();
  };

  /**
   * Double click handler.
   */
  Item.dblClick = function () {
    if (imce.sendtoHandler) {
      imce.runSendtoHandler([this]);
    }
    else {
      this.open();
    }
  };

  /**
   * Opens item.
   */
  Item.open = function () {
    var url = this.getUrl();
    if (url) {
      window.open(url);
    }
  };

  /**
   * Selects item.
   */
  Item.select = function () {
    imce.selectItem(this);
  };

  /**
   * Deselects item.
   */
  Item.deselect = function () {
    imce.deselectItem(this);
  };

  /**
   * Toggles select.
   */
  Item.toggleSelect = function () {
    if (this.selected) {
      this.deselect();
    }
    else {
      this.select();
    }
  };

  /**
   * Sets/unsets the item busy.
   */
  Item.setBusy = function (state) {
    this.toggleState('busy', !!state);
  };

  /**
   * Sets/unsets the item disabled.
   */
  Item.setDisabled = function (state) {
    this.toggleState('disabled', !!state);
  };

  /**
   * Checks if the item is ready for an operation.
   */
  Item.isReady = function () {
    return !this.disabled && !this.busy;
  };

  /**
   * Returns item path relative to the root.
   */
  Item.getPath = function () {
    var parent;
    var path = this.path;
    if (path) {
      return path;
    }
    if (parent = this.parent) {
      if (path = parent.getPath()) {
        return imce.joinPaths(path, this.name);
      }
    }
  };

  /**
   * Returns item uri.
   */
  Item.getUri = function () {
    var path = this.getPath();
    if (path) {
      return imce.joinPaths(imce.getConf('root_uri', '/'), path);
    }
  };

  /**
   * Returns item url.
   * Uncached parameter allows unique urls per size+date which is useful to display resized/cropped images
   */
  Item.getUrl = function (absolute, uncached) {
    var rootUrl;
    var url = '';
    if (rootUrl = imce.getConf('root_url')) {
      url = imce.joinPaths(rootUrl, encodeURIComponent(this.getPath()).replace(/%2F/g, '/'));
      if (absolute && url.charAt(0) === '/' && url.charAt(1) !== '/') {
        url = location.protocol + '//' + location.host + url;
      }
      if (uncached) {
        url += (url.indexOf('?') === -1 ? '?' : '&') + ('s' + this.size) + ('d' + this.date);
      }
    }
    return url;
  };

  /**
   * Formats item uri.
   */
  Item.formatUri = function () {
    return Drupal.checkPlain(this.getUri());
  };

  /**
   * Formats item path.
   */
  Item.formatPath = function () {
    return Drupal.checkPlain(this.path === '.' ? this.name : this.getPath());
  };

  /**
   * Formats item name.
   */
  Item.formatName = function () {
    return Drupal.checkPlain(this.name);
  };

  /**
   * Formats item size.
   */
  Item.formatSize = function () {
    return imce.formatSize(this.size);
  };

  /**
   * Formats item date.
   */
  Item.formatDate = function (dayOnly) {
    return imce.formatDate(this.date, dayOnly);
  };

  /**
   * Formats item width.
   */
  Item.formatWidth = function () {
    return this.width ? this.width * 1 + '' : '';
  };

  /**
   * Formats item height.
   */
  Item.formatHeight = function () {
    return this.height ? this.height * 1 + '' : '';
  };

  /**
   * Formats item dimensions.
   */
  Item.formatDimensions = function () {
    return this.width ? this.width * 1 + 'x' + this.height * 1 : '';
  };

  /**
   * Adds new item properties.
   * Fires property change events for changed properties.
   */
  Item.extend = function (props) {
    if (props) {
      for (var i in props) {
        if (!imce.owns(props, i)) {
          continue;
        }
        this.setProperty(i, props[i]);
      }
    }
  };

  /**
   * Sets property value and trigger change events.
   */
  Item.setProperty = function (prop, val) {
    var oldval = this[prop];
    if (oldval !== val) {
      this[prop] = val;
      this.triggerPropertyChange(prop, oldval);
    }
  };

  /**
   * Sets item name.
   */
  Item.setName = function (name) {
    this.setProperty('name', name);
  };

  /**
   * Triggers property change handlers.
   */
  Item.triggerPropertyChange = function (prop, oldval) {
    var method = 'on' + prop.charAt(0).toUpperCase() + prop.substr(1) + 'Change';
    if (this[method]) {
      this[method](oldval);
      if (this === imce.previewingItem) {
        imce.updatePreview();
      }
    }
  };

  /**
   * Name change handler.
   */
  Item.onNameChange = function (oldname) {
    var Item = this;
    Item.nameEl.innerHTML = Item.formatName();
    if (Item.parent) {
      Item.parent.onItemNameChange(Item, oldname);
    }
  };

  /**
   * Size change handler.
   */
  Item.onSizeChange = function (oldval) {
    this.sizeEl.innerHTML = this.formatSize();
  };

  /**
   * Date change handler.
   */
  Item.onDateChange = function (oldval) {
    this.dateEl.innerHTML = this.formatDate(true);
    this.dateEl.title = this.formatDate();
  };

  /**
   * Width change handler.
   */
  Item.onWidthChange = function (oldval) {
    this.widthEl.innerHTML = this.formatWidth();
  };

  /**
   * Height change handler.
   */
  Item.onHeightChange = function (oldval) {
    this.heightEl.innerHTML = this.formatHeight();
  };


  /**
   * Creates preview element.
   */
  Item.createPreviewEl = function () {
    var el;
    var Item = this;
    var prvEl = imce.createEl('<div class="imce-item-preview"></div>');
    // Info
    var infoEl = imce.createEl('<div class="imce-preview-info"></div>');
    prvEl.appendChild(infoEl);
    // Folder
    if (Item.isFolder) {
      infoEl.appendChild(imce.createEl('<div class="path">' + Item.formatUri() + '</div>'));
      prvEl.className += ' folder';
    }
    // File
    else {
      var url = Item.getUrl(true);
      infoEl.appendChild(imce.createEl('<div class="url"><a href="' + url + '" target="_blank">' + url + '</a></div>'));
    }
    // Size
    if (Item.size) {
      infoEl.appendChild(imce.createEl('<div class="size">' + Item.formatSize() + '</div>'));
    }
    // Dimensions
    if (Item.width) {
      infoEl.appendChild(imce.createEl('<div class="dimensions">' + Item.formatDimensions() + '</div>'));
    }
    // Date
    if (Item.date) {
      infoEl.appendChild(imce.createEl('<div class="date">' + Item.formatDate() + '</div>'));
    }
    // Image
    if (Item.isImageSource() && imce.getConf('preview_images', 1)) {
      el = imce.createEl('<div class="imce-preview-image"><img src="' + Item.getUrl(false, true) + '"></div>');
      prvEl.appendChild(el);
      prvEl.className += ' image';
      el.firstChild.onclick = imce.ePrvImgClick;
    }
    return prvEl;
  };

  /**
   * Sets a state by name.
   */
  Item.setState = function (name) {
    var el;
    var Item = this;
    if (!Item[name]) {
      Item[name] = true;
      $(Item.el).addClass(name);
      if (el = Item.branchEl) {
        $(el).addClass(name);
      }
    }
  };

  /**
   * Unsets a state by name.
   */
  Item.unsetState = function (name) {
    var el;
    var Item = this;
    if (Item[name]) {
      Item[name] = false;
      $(Item.el).removeClass(name);
      if (el = Item.branchEl) {
        $(el).removeClass(name);
      }
    }
  };

  /**
   * Toggles a state by name.
   */
  Item.toggleState = function (name, state) {
    if (state == null) {
      state = !this[name];
    }
    this[state ? 'setState' : 'unsetState'](name);
  };

  /**
   * Scroll the item element into view.
   */
  Item.scrollIntoView = function () {
    imce.scrollToEl(this.el, imce.contentEl, imce.contentHeaderEl.offsetHeight, imce.contentStatusEl.offsetHeight);
  };

  /**
   * Check if the item can be used as an image source.
   */
  Item.isImageSource = function() {
    return this.width || this.ext && this.ext.toLowerCase() === 'svg';
  };


  /**
   * Mousedown event for items.
   */
  imce.eItemMousedown = function (event) {
    var e = imce.eFix(event);
    this.Item.click(e);
    return !(e.ctrlKey || e.shiftKey);
  };

  /**
   * Double-click event for items.
   */
  imce.eItemDblclick = function (event) {
    this.Item.dblClick();
    return false;
  };

  /**
   * Click event for preview image.
   */
  imce.ePrvImgClick = function () {
    var Item = imce.previewingItem;
    if (Item) {
      Item.dblClick();
    }
    return false;
  };

})(jQuery, Drupal, imce);
;
/*global imce:true*/
(function ($, Drupal, imce) {
  'use strict';

  /**
   * @file
   * Defines imce File object.
   */

  /**
   * File.
   */
  imce.File = function (name) {
    this.construct(name);
  };

  /**
   * Item prototype
   */
  var ItemProto = imce.Item.prototype;

  /**
   * File prototype extends Item prototype.
   */
  var File = $.extend(imce.File.prototype, ItemProto);

  /**
   * Initialize the file object.
   */
  File.construct = function (name) {
    this.isFile = true;
    this.type = 'file';
    ItemProto.construct.apply(this, arguments);
  };

  /**
   * Initialize DOM elements.
   */
  File.createEl = function () {
    if (!this.el) {
      ItemProto.createEl.apply(this, arguments);
      this.el.className += ' file';
    }
  };

  /**
   * Name change handler.
   */
  File.onNameChange = function (oldval) {
    ItemProto.onNameChange.apply(this, arguments);
    // Get the new extension
    var File = this;
    var newext = imce.getExt(File.name);
    // Check if the extension has changed
    if (File.ext !== newext) {
      // Remove the classname of old ext
      if (File.ext != null) {
        if (File.ext) {
          $(File.el).removeClass('file-' + File.ext.toLowerCase());
        }
      }
      // Add the classname for new ext
      if (newext) {
        File.el.className += ' file-' + newext.toLowerCase();
      }
      File.ext = newext;
    }
  };

})(jQuery, Drupal, imce);
;
/*global imce:true*/
(function ($, Drupal, imce) {
  'use strict';

  /**
   * @file
   * Defines imce Folder object.
   */

  /**
   * Folder.
   */
  imce.Folder = function (name, conf) {
    this.construct(name, conf);
  };

  /**
   * Item prototype
   */
  var ItemProto = imce.Item.prototype;

  /**
   * Folder prototype extends Item prototype.
   */
  var Folder = $.extend(imce.Folder.prototype, ItemProto);

  /**
   * Constructs the Folder.
   */
  Folder.construct = function (name, conf) {
    var Folder = this;
    Folder.isFolder = true;
    Folder.type = 'folder';
    Folder.items = [];
    Folder.files = {};
    Folder.subfolders = {};
    ItemProto.construct.apply(Folder, arguments);
    Folder.setConf(conf);
  };

  /**
   * Creates folder elements.
   */
  Folder.createEl = function () {
    var nameEl;
    var toggleEl;
    var branchEl;
    var Folder = this;
    if (!Folder.el) {
      // Item elements.
      ItemProto.createEl.apply(Folder, arguments);
      Folder.el.className += ' folder';
      // Folder elements
      Folder.contentEl = imce.createEl('<div class="imce-folder-content clearfix"></div>');
      Folder.subtreeEl = imce.createEl('<div class="imce-subtree"></div>');
      branchEl = Folder.branchEl = imce.createEl('<div class="imce-branch"><span class="imce-branch-toggle"></span><span class="imce-branch-name imce-ficon"></span></div>');
      toggleEl = Folder.branchToggleEl = branchEl.firstChild;
      toggleEl.onclick = imce.eBranchToggleClick;
      nameEl = Folder.branchNameEl = branchEl.children[1];
      nameEl.onclick = imce.eBranchNameClick;
      branchEl.Folder = nameEl.Folder = toggleEl.Folder = Folder;
    }
  };

  /**
   * Sets the folder content.
   */
  Folder.setContent = function (content) {
    var i;
    var Item;
    var list;
    var Folder = this;
    var items = Folder.getItems();
    // Remove the items that no longer exist.
    for (i in items) {
      if (!imce.owns(items, i)) {
        continue;
      }
      Item = items[i];
      list = Item.isFolder ? content.subfolders : content.files;
      // Existing item is not in the list
      if (!list || !imce.owns(list, Item.name)) {
        // Make sure it's not (parent of) a predefined folder
        if (!Item.isFolder || !Item.hasPredefinedPath()) {
          Folder.removeItem(Item);
        }
      }
    }
    Folder.extend(content.props);
    Folder.addContent(content);
    Folder.content = content;
    Folder.updateSubtree();
  };

  /**
   * Adds new files and subfolders.
   */
  Folder.addContent = function (content, selectNew) {
    var Folder = this;
    var files = content.files;
    var subfolders = content.subfolders;
    if (!files && !subfolders) {
      return;
    }
    // Add items
    Folder.addItems(files, 'file');
    Folder.addItems(subfolders, 'folder');
    // Update sort
    if (Folder.active) {
      Folder.sortItems();
    }
    else {
      Folder.needSort = 1;
    }
    Folder.sortTree();
    // Select new items.
    if (selectNew && Folder.active) {
      var name;
      var fname;
      var sname;
      imce.deselectAll();
      if (files) {
        for (fname in files) {
          if (!imce.owns(files, fname)) {
            continue;
          }
          Folder.getItem(fname).select();
        }
      }
      if (subfolders) {
        for (sname in subfolders) {
          if (!imce.owns(subfolders, sname)) {
            continue;
          }
          Folder.getItem(sname).select();
        }
      }
      // Scroll the last item into view
      if (name = (fname || sname)) {
        Folder.getItem(name).scrollIntoView();
      }
    }
  };

  /**
   * Add a list of items of a specific type.
   */
  Folder.addItems = function (items, type) {
    var Item;
    var name;
    var Type = type === 'folder' ? imce.Folder : imce.File;
    if (items) {
      for (name in items) {
        // Update
        if (Item = this.getItem(name)) {
          Item.extend(items[name]);
          this.updateStatus();
        }
        // Insert
        else {
          Item = new Type(name);
          Item.extend(items[name]);
          this.appendItem(Item);
        }
      }
    }
  };

  /**
   * Returns a copy of items array.
   */
  Folder.getItems = function () {
    return this.items.slice(0);
  };

  /**
   * Append an item to the folder.
   */
  Folder.appendItem = function (Item) {
    var Folder = this;
    var name = Item.name;
    var existing;
    if (!Folder.validateAppend(Item)) {
      return;
    }
    // Remove the item from old parent
    Item.remove(true);
    // Remove existing item with the same name
    if (existing = Folder.getItem(name)) {
      existing.remove();
    }
    // Append item.
    Folder.items.push(Item);
    Item.parent = Folder;
    Folder.contentEl.appendChild(Item.el);
    // Append subfolder
    if (Item.isFolder) {
      Folder.prepareSubtree();
      Folder.subtreeEl.appendChild(Item.branchEl);
      Folder.subfolders[name] = Item;
      Item.setPath((Folder.parent ? Folder.path + '/' : '') + Item.name);
    }
    // Append file
    else {
      Folder.files[name] = Item;
    }
    // Update status.
    Folder.updateStatus();
  };

  /**
   * Remove an item from the folder.
   */
  Folder.removeItem = function (Item, shallow, i) {
    var name = Item.name;
    var Folder = this;
    // Check if the item is a child
    if (Item.parent !== Folder) {
      return;
    }
    // Deep removal
    if (!shallow) {
      // Remove all descendants of the subfolder.
      if (Item.isFolder) {
        for (i in Item.items) {
          if (!imce.owns(Item.items, i)) {
            continue;
          }
          Item.removeItem(Item.items[i]);
        }
      }
    }
    // Set item free.
    Item.deselect();
    Item.setBusy(false);
    // Remove subfolder
    if (Item.isFolder) {
      if (Item.active) {
        Folder.activate();
      }
      Item.setPath(null);
      delete Folder.subfolders[name];
      imce.removeEl(Item.branchEl);
      Folder.updateSubtree();
    }
    // Remove file
    else {
      delete Folder.files[name];
    }
    // Remove item
    Folder.items.splice(!i ? Folder.indexOf(Item) : i, 1);
    delete Item.parent;
    imce.removeEl(Item.el);
    Folder.updateStatus();
  };

  /**
   * Set folder path.
   * Register the folder to the tree.
   */
  Folder.setPath = function (newpath) {
    var i;
    var Folder = this;
    var oldpath = Folder.path;
    var subfolders = Folder.subfolders;
    if (oldpath !== newpath) {
      // Remove
      if (newpath == null) {
        for (i in subfolders) {
          if (!imce.owns(subfolders, i)) {
            continue;
          }
          subfolders[i].setPath(null);
        }
        delete imce.tree[oldpath];
        delete Folder.path;
      }
      // Add
      else {
        Folder.path = newpath;
        imce.tree[newpath] = Folder;
        Folder.setDisabled(!Folder.getConf());
        for (i in subfolders) {
          if (!imce.owns(subfolders, i)) {
            continue;
          }
          subfolders[i].setPath(newpath + '/' + subfolders[i].name);
        }
        Folder.updateStatus();
      }
    }
  };

  /**
   * Returns a permission value.
   */
  Folder.getPermission = function (name) {
    return imce.permissionInFolderConf(name, this.getConf());
  };

  /**
   * Returns folder configuration.
   */
  Folder.getConf = function () {
    var conf = this.conf;
    var parent;
    if (conf) {
      return conf;
    }
    if (parent = this.parent) {
      if (conf = parent.getConf()) {
        if (imce.permissionInFolderConf('browse_subfolders', conf)) {
          return $.extend({inherited: true}, conf);
        }
      }
    }
  };

  /**
   * Sets folder configuration.
   */
  Folder.setConf = function (conf) {
    if (this.conf !== conf) {
      this.conf = conf;
      this.setDisabled(!this.getConf());
    }
  };

  /**
   * Open folder.
   */
  Folder.open = function (refresh) {
    if (refresh || !this.content) {
      this.load();
    }
    this.activate();
  };

  /**
   * Dynamically load folder contents.
   */
  Folder.load = function () {
    if (this.isReady()) {
      this.setLoading(true);
      imce.ajax('browse', {
        activeFolder: this,
        customComplete: imce.xFolderLoadComplete
      });
    }
  };

  /**
   * Activate folder.
   */
  Folder.activate = function () {
    var Folder = this;
    var oldFolder = imce.activeFolder;
    var parent = Folder.parent;
    if (!Folder.active) {
      // Deactivate the old dir.
      if (oldFolder) {
        oldFolder.deactivate();
      }
      // Check sort
      if (Folder.needSort) {
        Folder.sortItems();
      }
      imce.activeFolder = Folder;
      Folder.active = true;
      $(Folder.branchEl).addClass('active');
      // Add the content to the dom if it is fully loaded.
      if (!Folder.loading) {
        Folder.addContentToDom();
      }
      Folder.setContentVisibility(true);
      // Expand parents if collapsed.
      while (parent) {
        parent.expand();
        parent = parent.parent;
      }
      // Update status and header
      Folder.updateHeader();
      Folder.updateStatus();
      // Trigger activateFolder handlers.
      imce.trigger('activateFolder', Folder, oldFolder);
    }
  };

  /**
   * Deactivate folder.
   */
  Folder.deactivate = function () {
    var Folder = this;
    if (Folder.active) {
      Folder.setContentVisibility(false);
      imce.deselectAll();
      imce.activeFolder = null;
      Folder.active = false;
      $(Folder.branchEl).removeClass('active');
    }
  };

  /**
   * Set loading state.
   */
  Folder.setLoading = function (state) {
    var Folder = this;
    if (state) {
      if (!Folder.loading) {
        Folder.setBusy(true);
        Folder.setState('loading');
        if (Folder.active) {
          imce.deselectAll();
        }
      }
    }
    else if (Folder.loading) {
      Folder.setBusy(false);
      Folder.unsetState('loading');
      if (Folder.active) {
        Folder.addContentToDom();
      }
    }
  };

  /**
   * Returns an item by name.
   */
  Folder.getItem = function (name) {
    var Folder = this;
    if (imce.owns(Folder.files, name)) {
      return Folder.files[name];
    }
    if (imce.owns(Folder.subfolders, name)) {
      return Folder.subfolders[name];
    }
  };

  /**
   * Returns an item by index.
   */
  Folder.getItemAt = function (i) {
    return this.items[i];
  };

  /**
   * Returns the index of an item.
   */
  Folder.indexOf = function (Item) {
    return $.inArray(Item, this.items);
  };

  /**
   * Selects all items.
   */
  Folder.selectAll = function () {
    for (var i in this.items) {
      if (!imce.owns(this.items, i)) {
        continue;
      }
      this.items[i].select();
    }
  };

  /**
   * Returns the number of items.
   */
  Folder.countItems = function () {
    return this.items.length;
  };

  /**
   * Returns the number of subfolders.
   */
  Folder.countSubfolders = function () {
    var i;
    var count = 0;
    for (i in this.subfolders) {
      if (!imce.owns(this.subfolders, i)) {
        continue;
      }
      count++;
    }
    return count;
  };

  /**
   * Name change handler.
   */
  Folder.onNameChange = function (oldval) {
    ItemProto.onNameChange.apply(this, arguments);
    this.branchNameEl.innerHTML = Drupal.checkPlain(this.name);
  };

  /**
   * Item name change handler.
   * Triggered by imce.Item.onNameChange()
   */
  Folder.onItemNameChange = function (Item, oldname) {
    var Folder = this;
    var name = Item.name;
    var group = Item.isFolder ? Folder.subfolders : Folder.files;
    delete group[oldname];
    group[name] = Item;
    // Set folder path
    if (Item.isFolder) {
      Item.setPath((Folder.parent ? Folder.path + '/' : '') + name);
    }
  };

  /**
   * Double-click handler.
   */
  Folder.dblClick = function () {
    this.open();
  };

  /**
   * Inserts the content element into the main content area.
   */
  Folder.addContentToDom = function () {
    var el = this.contentEl;
    var parentEl = imce.contentEl;
    if (el.parentNode !== parentEl) {
      parentEl.appendChild(el);
    }
  };

  /**
   * Sets visibility of the content element.
   */
  Folder.setContentVisibility = function (show) {
    var el = this.contentEl;
    el.style.display = show ? '' : 'none';
    if (el.scrollTop) {
      el.scrollTop = 0;
    }
  };

  /**
   * Prepares for subfolder appending.
   */
  Folder.prepareSubtree = function () {
    var Folder = this;
    if (Folder.subtreeEl.parentNode !== Folder.branchEl) {
      Folder.branchEl.appendChild(Folder.subtreeEl);
      $(Folder.branchEl).removeClass('leaf');
      // Prevent expanding of inactive dirs except the first activated dir on init
      if (!Folder.active && imce.activeFolder) {
        Folder.expanded = true;
        Folder.shrink();
      }
      else {
        Folder.expand();
      }
    }
  };

  /**
   * Check and remove subtree element if it's empty.
   */
  Folder.updateSubtree = function () {
    if (!this.countSubfolders()) {
      this.shrink();
      imce.removeEl(this.subtreeEl);
      $(this.branchEl).addClass('leaf');
    }
  };

  /**
   * Expands the subtree.
   */
  Folder.expand = function () {
    if (!this.expanded) {
      this.expanded = true;
      $(this.branchEl).addClass('expanded');
      $(this.subtreeEl).show();
    }
  };

  /**
   * Shrinks the subtree.
   */
  Folder.shrink = function () {
    if (this.expanded) {
      this.expanded = false;
      $(this.branchEl).removeClass('expanded');
      $(this.subtreeEl).hide();
    }
  };

  /**
   * Update folder status.
   */
  Folder.updateStatus = function () {
    if (this.active) {
      imce.updateStatus();
    }
  };

  /**
   * Update header sort.
   */
  Folder.updateHeader = function () {
    if (this.active) {
      imce.updateHeader();
    }
  };

  /**
   * Sort folder items by an item property.
   */
  Folder.sortItems = function (key, desc) {
    var i;
    var sorter;
    var Folder = this;
    var items = Folder.items;
    var active = Folder.activeSort || imce.activeSort || imce.local.activeSort || {};
    if (key == null) {
      key = active.key || 'name';
    }
    if (desc == null) {
      desc = !!active.desc;
    }
    // Remove lazy sort flag.
    Folder.needSort = 0;
    // Check sorter
    if (sorter = imce.sorters[key]) {
      items.sort(sorter);
      if (desc) {
        items.reverse();
      }
      for (i in items) {
        if (!imce.owns(items, i)) {
          continue;
        }
        this.contentEl.appendChild(items[i].el);
      }
      Folder.activeSort = {key: key, desc: desc};
      Folder.updateHeader();
    }
  };

  /**
   * Sorts folder tree elements by name.
   */
  Folder.sortTree = function () {
    var i;
    var Folder = this;
    var subfolders = Folder.subfolders;
    var arr = [];
    for (i in subfolders) {
      if (!imce.owns(subfolders, i)) {
        continue;
      }
      arr.push(subfolders[i]);
    }
    if (arr.length > 1) {
      arr.sort(imce.sortBranchName);
      for (i in arr) {
        if (!imce.owns(arr, i)) {
          continue;
        }
        Folder.subtreeEl.appendChild(arr[i].branchEl);
      }
    }
  };

  /**
   * Check if the item can be appended to the folder.
   */
  Folder.validateAppend = function (Item, copy) {
    // Disallow self appending
    if (Item === this) {
      return false;
    }
    var parent = Item.parent;
    // Allow orphan appending
    if (!parent) {
      return true;
    }
    // Disallow re-appending children
    if (!copy && parent === this) {
      return false;
    }
    // Disallow (grand)parents appending
    if (Item.isFolder) {
      for (parent = this.parent; parent; parent = parent.parent) {
        if (parent === Item) {
          return false;
        }
      }
    }
    return true;
  };

  /**
   * Checks if the folder is predefined.
   */
  Folder.isPredefined = function () {
    return !!this.conf;
  };

  /**
   * Returns the first predefined descendent including itself.
   */
  Folder.hasPredefinedPath = function () {
    if (this.isPredefined()) {
      return this;
    }
    var i;
    var Folder;
    var subfolders = this.subfolders;
    for (i in subfolders) {
      if (Folder = subfolders[i].hasPredefinedPath()) {
        return Folder;
      }
    }
    return false;
  };

  /**
   * Returns status text.
   */
  Folder.formatStatus = function () {
    return '<div class="items">' + imce.formatItemsStatus(this.countItems(), this.getSize()) + '</div>';
  };

  /**
   * Returns the size of the folder.
   */
  Folder.getSize = function () {
    var i;
    var size = 0;
    var files = this.files;
    for (i in files) {
      if (!imce.owns(files, i)) {
        continue;
      }
      size += files[i].size || 0;
    }
    return size;
  };


  /**
   * Click event for branch name.
   */
  imce.eBranchNameClick = function (event) {
    this.Folder.open();
    return false;
  };


  /**
   * Click event for branch toggle.
   */
  imce.eBranchToggleClick = function (event) {
    var Folder = this.Folder;
    if (Folder.countSubfolders()) {
      if (Folder.expanded) {
        Folder.shrink();
      }
      else {
        Folder.expand();
      }
    }
    else {
      Folder.open();
    }
    return false;
  };

  /**
   * Ajax complete handler for folder loading.
   */
  imce.xFolderLoadComplete = function (xhr, status) {
    var content;
    var opt = this;
    var Folder = opt.activeFolder;
    var response = opt.response;
    if (response && (content = response.content)) {
      Folder.setContent(content);
    }
    Folder.setLoading(false);
    if (Folder.countSubfolders()) {
      Folder.expand();
    }
  };

})(jQuery, Drupal, imce);
;
/*global imce:true*/
(function ($, Drupal, imce) {
  'use strict';

  /**
   * @file
   * Defines imce Toolbar Button object.
   */

  /**
   * Toolbar button constructor.
   */
  imce.Tbb = function (id, opt) {
    this.construct(id, opt);
  };

  /**
   * Toolbar button prototype.
   */
  var Tbb = imce.Tbb.prototype;

  /**
   * Constructs button object.
   */
  Tbb.construct = function (id, opt) {
    var Tbb = imce.toolbarButtons[id] = this;
    Tbb.id = id;
    $.extend(Tbb, opt);
    // Append or prepend the element.
    var el = Tbb.createEl();
    var parent = imce.toolbarEl;
    if (Tbb.prepend && parent.firstChild) {
      parent.insertBefore(el, parent.firstChild);
    }
    else {
      parent.appendChild(el);
    }
    // Add shortcut
    if (Tbb.shortcut) {
      imce.addShortcut(Tbb.shortcut, el);
    }
  };

  /**
   * Creates toolbar button element.
   */
  Tbb.createEl = function () {
    var Tbb = this;
    var el = Tbb.el;
    var icon;
    if (!el) {
      el = Tbb.el = imce.createEl('<span class="imce-tbb imce-ficon" role="button"><span class="imce-tbb-title"></span></span>');
      if (icon = Tbb.icon) {
        el.className += ' imce-ficon-' + icon;
      }
      el.className += ' imce-tbb--' + Tbb.id;
      el.title = (Tbb.tooltip || Tbb.title) + (Tbb.shortcut ? ' (' + Tbb.shortcut + ')' : '');
      el.onclick = imce.eTbbClick;
      el.Tbb = Tbb;
      el.firstChild.innerHTML = Tbb.title;
    }
    return el;
  };

  /**
   * Create item popup.
   */
  Tbb.createPopupEl = function () {
    var Tbb = this;
    var el = Tbb.popupEl;
    if (!el) {
      el = Tbb.popupEl = imce.createLayer('imce-tbb-popup');
      el.className += ' imce-tbb-popup--' + Tbb.id;
      el.onkeydown = imce.eTbbPopupKeydown;
      el.Tbb = Tbb;
      if (Tbb.content) {
        el.appendChild(Tbb.content);
      }
    }
    return el;
  };

  /**
   * Open item popup.
   */
  Tbb.openPopup = function (autoclose) {
    var Tbb = this;
    if (!Tbb.active) {
      Tbb.createPopupEl();
      Tbb.setActive(true);
      var popupEl = Tbb.popupEl;
      var $el = $(Tbb.el);
      var css = $el.offset();
      css.top += $el.outerHeight(true);
      $(popupEl).css(css).fadeIn();
      imce.fixPosition(popupEl);
      // Focus on first input
      $('form').find('input,select,textarea').filter(':visible').eq(0).focus();
      if (autoclose) {
        $(document).bind('mousedown', {Tbb: Tbb}, imce.eTbbDocMousedown);
      }
      if (Tbb.onopen) {
        Tbb.onopen.apply(Tbb, arguments);
      }
    }
  };

  /**
   * Close item popup.
   */
  Tbb.closePopup = function () {
    var Tbb = this;
    if (Tbb.popupEl && Tbb.active) {
      Tbb.setActive(false);
      $(Tbb.popupEl).hide();
      imce.contentEl.focus();
      if (Tbb.onclose) {
        Tbb.onclose.apply(Tbb, arguments);
      }
    }
  };

  /**
   * Set active state of the item.
   */
  Tbb.setActive = function (state) {
    this.toggleState('active', !!state);
  };

  /**
   * Set busy state of the item.
   */
  Tbb.setBusy = function (state) {
    this.toggleState('busy', !!state);
  };

  /**
   * Set disabled state of the item.
   */
  Tbb.setDisabled = function (state) {
    this.toggleState('disabled', !!state);
  };

  /**
   * Set/unset a state by name.
   */
  Tbb.toggleState = function (name, state) {
    var Tbb = this;
    var oldState = Tbb[name];
    if (state == null) {
      state = !oldState;
    }
    if (state) {
      if (!oldState) {
        Tbb[name] = true;
        $(Tbb.el).addClass(name);
      }
    }
    else if (oldState) {
      Tbb[name] = false;
      $(Tbb.el).removeClass(name);
    }
  };

  /**
   * Trigger click handler of the button.
   */
  Tbb.click = function (event) {
    var Tbb = this;
    if (!Tbb.disabled) {
      if (Tbb.handler && !Tbb.busy) {
        Tbb.handler.call(Tbb, imce.eFix(event));
      }
      if (Tbb.content) {
        Tbb.openPopup(true);
      }
    }
  };


  /**
   * Click event for toolbar buttons.
   */
  imce.eTbbClick = function (event) {
    this.Tbb.click(event);
  };

  /**
   * Mousedown event for document in order to close toolbar button popup.
   */
  imce.eTbbDocMousedown = function (e) {
    var Tbb = e.data.Tbb;
    var el = Tbb.popupEl;
    if (el !== e.target && !$.contains(el, e.target)) {
      Tbb.closePopup();
      $(document).unbind('mousedown', imce.eTbbDocMousedown);
    }
  };

  /**
   * Keydown event for toolbar button popup.
   */
  imce.eTbbPopupKeydown = function (event) {
    var e = event || window.event;
    // Close on Esc
    if (e.keyCode === 27) {
      this.Tbb.closePopup();
      return false;
    }
  };

})(jQuery, Drupal, imce);
;
/*global imce:true*/
(function ($, Drupal, imce) {
  'use strict';

  /**
   * @file
   * Defines Newfolder plugin for Imce.
   */

  /**
   * Init handler for New folder.
   */
  imce.bind('init', imce.newfolderInit = function () {
    if (imce.hasPermission('create_subfolders')) {
      // Add toolbar button
      imce.addTbb('newfolder', {
        title: Drupal.t('New folder'),
        permission: 'create_subfolders',
        content: imce.createNewfolderForm(),
        shortcut: 'Ctrl+N',
        icon: 'folder-add'
      });
    }
  });

  /**
   * Creates new folder form.
   */
  imce.createNewfolderForm = function () {
    var form = imce.newfolderForm;
    if (!form) {
      form = imce.newfolderForm = imce.createEl('<form class="imce-newfolder-form"><input type="text" name="newfolder" class="imce-newfolder-input" size="16" /><button type="submit" name="op" class="imce-newfolder-button">' + Drupal.t('Create') + '</button></form>');
      form.elements.newfolder.placeholder = Drupal.t('Folder name');
      form.onsubmit = imce.eNewfolderSubmit;
    }
    return form;
  };

  /**
   * Submit event for new folder form.
   */
  imce.eNewfolderSubmit = function () {
    var name = this.elements.newfolder.value;
    if (imce.validateNewfolder(name)) {
      imce.ajax('newfolder', {data: {newfolder: name}});
      imce.getTbb('newfolder').closePopup();
    }
    return false;
  };

  /**
   * Validates new folder creation.
   */
  imce.validateNewfolder = function (name, parentFolder) {
    if (!parentFolder) {
      parentFolder = imce.activeFolder;
    }
    if (!parentFolder.isReady() || !parentFolder.getPermission('create_subfolders') || !imce.validateFileName(name)) {
      return false;
    }
    if (parentFolder.getItem(name)) {
      imce.setMessage(Drupal.t('%filename already exists.', {'%filename': name}));
      return false;
    }
    return true;
  };

})(jQuery, Drupal, imce);
;
/*global imce:true*/
(function ($, Drupal, imce) {
  'use strict';

  /**
   * @file
   * Defines Upload plugin for Imce.
   */

  /**
   * Init handler for Upload.
   */
  imce.bind('init', imce.uploadInit = function () {
    if (imce.hasPermission('upload_files')) {
      // Add toolbar button
      imce.addTbb('upload', {
        title: Drupal.t('Upload'),
        permission: 'upload_files',
        content: imce.createUploadForm(),
        shortcut: 'Ctrl+Alt+U',
        icon: 'upload'
      });
    }
  });

  /**
   * Creates the upload form.
   */
  imce.createUploadForm = function () {
    var els;
    var el;
    var exts;
    var form = imce.uploadForm;
    var name = 'files[imce][]';
    if (form) {
      return form;
    }
    form = imce.uploadForm = imce.createEl('<form class="imce-upload-form" method="post" enctype="multipart/form-data" accept-charset="UTF-8">' +
    '<div class="imce-form-item imce-form-file">' +
      '<label>' + Drupal.t('File') + '</label>' +
      '<input type="file" name="' + name + '" class="imce-file-input" multiple />' +
    '</div>' +
    '<div class="imce-form-actions">' +
      '<button type="submit" name="op" class="imce-upload-button">' + Drupal.t('Upload') + '</button>' +
    '</div>' +
    '<input type="hidden" name="jsop" value="upload" />' +
    '<input type="hidden" name="token" />' +
  '</form>');
    // Set action
    form.action = imce.getConf('ajax_url');
    els = form.elements;
    // Set token
    els.token.value = imce.getConf('token');
    // Set accepted extensions.
    el = els[name];
    exts = imce.getConf('extensions', '');
    // Skip for * which is interpreted incorrectly by some browsers.
    if (exts !== '*') {
      el.accept = '.' + exts.replace(/\s+/g, ',.');
    }
    // Ajax upload
    if (imce.canAjaxUpload()) {
      imce.activeUq = new imce.UploadQueue({name: name, accept: el.accept});
      form.insertBefore(imce.activeUq.el, form.firstChild);
      form.className += ' uq';
      if (imce.getConf('upload_auto_start', 1)) {
        form.className += ' auto-start';
      }
      form.onsubmit = imce.eUploadQueueSubmit;
    }
    // Iframe upload
    else {
      form.setAttribute('target', 'imce_upload_iframe');
      form.appendChild(imce.createEl('<input type="hidden" name="active_path" />'));
      form.appendChild(imce.createEl('<input type="hidden" name="return_html" value="1" />'));
      form.onsubmit = imce.eUploadIframeSubmit;
    }
    return form;
  };

  /**
   * Submit event for upload form with the upload queue.
   */
  imce.eUploadQueueSubmit = function (event) {
    imce.activeUq.start();
    return false;
  };

  /**
   * Submit event for upload form with iframe.
   */
  imce.eUploadIframeSubmit = function (event) {
    if (!imce.validateUploadForm(this)) {
      return false;
    }
    imce.createUploadIframe();
    this.elements.active_path.value = imce.activeFolder.getPath();
    imce.uploadSetBusy(true);
  };

  /**
   * Validates upload form before submit.
   */
  imce.validateUploadForm = function (form) {
    var i;
    var file;
    var input = form.elements['files[imce][]'];
    var files = input.files;
    // HTML5
    if (files) {
      if (!files.length) {
        return false;
      }
      for (i = 0; file = files[i]; i++) {
        if (!imce.validateFileUpload(file)) {
          return false;
        }
      }
      return true;
    }
    // Old file input
    if (input.value) {
      file = {name: input.value.split(input.value.indexOf('/') === -1 ? '\\' : '/').pop()};
      return imce.validateFileUpload(file);
    }
    return false;
  };

  /**
   * Validates a file before uploading.
   */
  imce.validateFileUpload = function (file) {
    // Extension
    var exts = imce.getConf('extensions', '');
    if (exts !== '*' && !imce.validateExtension(imce.getExt(file.name), exts)) {
      return false;
    }
    // Size
    var maxsize = imce.getConf('maxsize');
    if (maxsize && file.size && file.size > maxsize) {
      imce.setMessage(Drupal.t('%filename is %filesize exceeding the maximum file size of %maxsize.', {
        '%filename': file.name,
        '%filesize': imce.formatSize(file.size),
        '%maxsize': imce.formatSize(maxsize)
      }));
      return false;
    }
    // Name
    if (!imce.validateFileName(file.name)) {
      return false;
    }
    // Trigger validators.
    return $.inArray(false, imce.trigger('validateFileUpload', file)) === -1;
  };

  /**
   * Creates upload iframe.
   */
  imce.createUploadIframe = function () {
    var el = imce.uploadIframe;
    if (!el) {
      el = imce.uploadIframe = imce.createEl('<iframe name="imce_upload_iframe" class="imce-upload-iframe" style="position: absolute; top: -9999px; left: -9999px;" src="javascript: "></iframe>');
      document.body.appendChild(el);
      setTimeout(function () {
        el.onload = imce.eUploadIframeLoad;
      });
    }
    return el;
  };

  /**
   * Load event of upload iframe.
   */
  imce.eUploadIframeLoad = function (event) {
    var text;
    var response;
    var doc;
    var $body;
    var el = this;
    try {
      doc = el.contentDocument || el.contentWindow && el.contentWindow.document;
      if (doc) {
        $body = $(doc.body);
        if (text = $body.find('textarea').eq(0).val()) {
          response = $.parseJSON(text);
        }
        $body.empty();
      }
    }
    catch (err) {
      imce.delayError(err);
    }
    imce.uploadIframeComplete(response, text);
  };

  /**
   * Complete handler of iframe upload;
   */
  imce.uploadIframeComplete = function (response, text) {
    // Got a proper response
    if (response) {
      imce.ajaxProcessResponse(response);
      if (response.added) {
        imce.uploadResetInput(imce.uploadForm.elements['files[imce][]']);
        imce.getTbb('upload').closePopup();
      }
    }
    // Failed
    else {
      imce.setMessage(Drupal.t('Invalid response received from the server.'));
      if (text) {
        imce.setMessage('<pre>' + Drupal.checkPlain(text) + '</pre>');
      }
    }
    imce.uploadSetBusy(false);
  };

  /**
   * Set upload busy state.
   */
  imce.uploadSetBusy = function (state) {
    $('.imce-upload-button', imce.uploadForm).toggleClass('busy', state)[0].disabled = state;
  };

  /**
   * Check support for ajax upload.
   */
  imce.canAjaxUpload = function () {
    var support = imce.ajaxUploadSupport;
    if (support == null) {
      try {
        support = !!(window.FormData && (new XMLHttpRequest().upload));
      }
      catch (err) {
        support = false;
      }
      imce.ajaxUploadSupport = support;
    }
    return support;
  };

  /**
   * Resets a file input.
   */
  imce.uploadResetInput = function (input) {
    // Try value reset first
    if ($(input).val('').val()) {
      // Use form reset
      var form = document.createElement('form');
      var parent = input.parentNode;
      form.style.display = 'none';
      parent.insertBefore(form, input);
      form.appendChild(input);
      form.reset();
      parent.insertBefore(input, form);
      parent.removeChild(form);
    }
  };

})(jQuery, Drupal, imce);
;
/*global imce:true*/
(function ($, Drupal, imce) {
  'use strict';

  /**
   * @file
   * Defines imce Upload Queue and Upload Queue Item.
   */

  /**
   * Upload queue constructor.
   */
  imce.UploadQueue = function (conf) {
    this.construct(conf);
  };

  /**
   * Upload queue prototype.
   */
  var Uq = imce.UploadQueue.prototype;

  /**
   * Constructs upload queue.
   */
  Uq.construct = function (conf) {
    var Uq = this;
    Uq.items = {};
    Uq.queue = [];
    Uq.conf = $.extend({name: 'files[imce][]'}, conf);
    Uq.createEl();
  };

  /**
   * Creates upload queue element.
   */
  Uq.createEl = function () {
    var Uq = this;
    var el = Uq.el;
    var inputEl;
    var accept;
    if (!el) {
      el = Uq.el = imce.createEl('<div class="imce-uq"><span class="imce-uq-button imce-ficon imce-ficon-plus"><span class="imce-uq-label">' + Drupal.t('Add file') + '</span><input type="file" class="imce-uq-input" multiple /></span><div class="imce-uq-items"></div></div>');
      inputEl = Uq.inputEl = el.firstChild.lastChild;
      inputEl.onchange = imce.eUqInputChange;
      if (accept = Uq.conf.accept) {
        inputEl.accept = accept;
      }
      Uq.itemsEl = el.lastChild;
      el.Uq = inputEl.Uq = Uq;
    }
    return el;
  };

  /**
   * Starts the queue.
   */
  Uq.start = function () {
    var Uq = this;
    if (!Uq.running && Uq.queue.length) {
      if (Uq.next()) {
        Uq.running = true;
        imce.uploadSetBusy(true);
      }
    }
    return Uq.running;
  };

  /**
   * Ends the queue.
   */
  Uq.end = function () {
    if (this.running) {
      this.running = false;
      imce.uploadSetBusy(false);
      imce.getTbb('upload').closePopup();
    }
  };

  /**
   * Process the first available item in the queue.
   */
  Uq.next = function () {
    var i;
    var Item;
    var queue = this.queue.slice(0);
    for (i = 0; Item = queue[i]; i++) {
      // Remove completed items from the queue.
      if (Item.completed) {
        Item.remove();
      }
      else if (Item.start()) {
        return Item;
      }
    }
    // No items left. End the queue if running.
    this.end();
  };

  /**
   * Select files from a file reference list.
   */
  Uq.selectFiles = function (list) {
    var i;
    var file;
    var Item;
    var ret;
    var path = imce.activeFolder.getPath();
    for (i = 0; file = list[i]; i++) {
      if (imce.validateFileUpload(file)) {
        Item = new imce.UploadQueueItem(file, path);
        if (this.addItem(Item)) {
          if (!ret) {
            ret = {};
          }
          ret[i] = Item.id;
        }
        else {
          Item.remove();
        }
      }
    }
    return ret;
  };

  /**
   * Returns a queue item.
   */
  Uq.getItem = function (id) {
    return this.items[id];
  };

  /**
   * Adds a queue item.
   */
  Uq.addItem = function (Item) {
    var existing;
    var Uq = this;
    var id = Item.id;
    // Check existing
    if (existing = Uq.getItem(id)) {
      existing.remove(true);
    }
    Item.Uq = Uq;
    Uq.items[id] = Uq.queue[Uq.queue.length] = Item;
    Uq.itemsEl.appendChild(Item.el);
    return Item;
  };

  /**
   * Removes a queue item.
   */
  Uq.removeItem = function (Item, quick) {
    var Uq = this;
    var queue = Uq.queue;
    var i = $.inArray(Item, queue);
    if (i !== -1) {
      queue.splice(i, 1);
      delete Uq.items[Item.id];
      if (quick) {
        $(Item.el).remove();
      }
      else {
        $(Item.el).fadeOut(1000, imce.eUqItemFadeout);
      }
      return Item;
    }
  };

  /**
   * Prepare ajax options for an item.
   */
  Uq.ajaxPrepare = function (Item) {
    var i;
    var field;
    var data;
    var formData;
    var Folder;
    var Uq = this;
    var file = Item.file;
    var dest = Item.destination;
    // Check file and destination
    if (!file || !dest || !(Folder = imce.getFolder(dest))) {
      return;
    }
    // Prepare form data
    data = $(Uq.inputEl.form).serializeArray().concat([{name: 'active_path', value: dest}], Item.formData || []);
    formData = new FormData();
    for (i = 0; field = data[i]; i++) {
      if (field.name) {
        formData.append(field.name, field.value);
      }
    }
    formData.append(Uq.conf.name, Item.file);
    // Extend default ajax options
    return $.extend(imce.ajaxDefaults(), {
      data: formData,
      processData: false,
      contentType: false,
      custombeforeSend: imce.xUqItemBeforeSend,
      customComplete: imce.xUqItemComplete,
      itemId: Item.id,
      activeFolder: Folder
    });
  };


  /**
   * Upload queue item constructor.
   */
  imce.UploadQueueItem = function (file, destination) {
    this.construct(file, destination);
  };

  /**
   * Upload queue item prototype.
   */
  var UqItem = imce.UploadQueueItem.prototype;

  /**
   * Constructs upload queue item.
   */
  UqItem.construct = function (file, destination) {
    this.file = file;
    this.destination = destination;
    this.id = imce.joinPaths(destination, file.name);
    this.createEl();
  };

  /**
   * Creates upload queue element.
   */
  UqItem.createEl = function () {
    var cancelEl;
    var name;
    var Item = this;
    var el = Item.el;
    var file = Item.file;
    if (!el) {
      name = Drupal.checkPlain(file.name);
      el = Item.el = imce.createEl('<div class="imce-uqi"><div class="imce-uqi-cancel"></div><div class="imce-uqi-info"><span class="imce-uqi-name" title="' + name + '">' + name + '</span><span class="imce-uqi-size">' + imce.formatSize(file.size) + '</span></div><div class="imce-uqi-progress"><div class="imce-uqi-bar"></div></div><div class="imce-uqi-percent">' + Drupal.t('!percent%', {'!percent': 0}) + '</div></div>');
      el.Item = Item;
      // Set cancel element events
      cancelEl = el.firstChild;
      cancelEl.onclick = imce.eUqItemCancelClick;
      cancelEl.onmousedown = imce.eUqItemCancelMousedown;
    }
    return el;
  };

  /**
   * Removes the item from queue.
   */
  UqItem.remove = function (quick) {
    var ret;
    var Item = this;
    var Uq = Item.Uq;
    Item.stop();
    if (Uq) {
      Uq.removeItem(Item, quick);
    }
    Item.Uq = Item.xhr = Item.file = Item.formData = Item.el.Item = null;
    return ret;
  };

  /**
   * Start processing the item.
   */
  UqItem.start = function () {
    var opt;
    var Item = this;
    var Uq = Item.Uq;
    if (Uq && !Item.active && !Item.completed) {
      // Get ajax options
      if (opt = Uq.ajaxPrepare(Item)) {
        Item.active = true;
        $(Item.el).addClass('active');
        Item.xhr = $.ajax(opt);
        Uq.activeItem = Item;
        return Uq.activeItem;
      }
    }
  };

  /**
   * Stops processing the item.
   */
  UqItem.stop = function () {
    var Item = this;
    if (Item.active) {
      Item.active = false;
      $(Item.el).removeClass('active');
      if (Item.xhr) {
        Item.xhr.abort();
      }
      // Make sure the item is completed
      Item.complete();
    }
  };

  /**
   * Sets the item as completed.
   */
  UqItem.complete = function (status) {
    var Item = this;
    var Uq = Item.Uq;
    if (!Item.completed) {
      Item.completed = true;
      Item.status = status;
      $(Item.el).addClass(status ? 'success' : 'fail');
      if (status) {
        $('.imce-uqi-percent', Item.el).html(Drupal.t('!percent%', {'!percent': 100}));
      }
      // Check if this is the active item of the queue
      if (Uq && Uq.activeItem === Item) {
        Uq.activeItem = null;
        // Continue queue
        if (Uq.running) {
          Uq.next();
        }
      }
      // Make sure the item is stopped
      Item.stop();
    }
  };

  /**
   * Sets item progress.
   */
  UqItem.progress = function (percent) {
    $(this.el).find('.imce-uqi-percent').text(Drupal.t('!percent%', {'!percent': percent * 1})).end().find('.imce-uqi-bar').css('width', percent * 1 + '%');
  };


  /**
   * Change event of upload queue input
   */
  imce.eUqInputChange = function () {
    this.Uq.selectFiles(this.files);
    imce.uploadResetInput(this);
    if (imce.getConf('upload_auto_start', 1)) {
      $('.imce-upload-button', this.form).click();
    }
  };

  /**
   * Click event for cancel button of queue item.
   */
  imce.eUqItemCancelClick = function (event) {
    var Item = $(this).closest('.imce-uqi')[0].Item;
    if (Item) {
      Item.remove(true);
    }
    return false;
  };

  /**
   * Mousedown event for cancel button of queue item.
   */
  imce.eUqItemCancelMousedown = function (event) {
    return false;
  };

  /**
   * Fadeout callback for queue item.
   */
  imce.eUqItemFadeout = function () {
    $(this).remove();
  };

  /**
   * Ajax beforeSend handler of upload queue.
   */
  imce.xUqItemBeforeSend = function (xhr) {
    var id = this.itemId;
    xhr.upload.onprogress = function (e) {
      var Item = imce.activeUq.getItem(id);
      if (Item) {
        Item.progress(parseInt(e.loaded * 100 / e.total));
      }
    };
    xhr = null;
  };

  /**
   * Ajax complete handler of upload queue.
   */
  imce.xUqItemComplete = function (xhr, status) {
    var opt = this;
    var Item = imce.activeUq.getItem(opt.itemId);
    status = !!(opt.response && opt.response.added);
    if (Item) {
      Item.complete(status);
    }
  };

})(jQuery, Drupal, imce);
;
/*global imce:true*/
(function ($, Drupal, imce) {
  'use strict';

  /**
   * @file
   * Defines Delete plugin for Imce.
   */

  /**
   * Init handler for Delete.
   */
  imce.bind('init', imce.deleteInit = function () {
    // Check if delete permission exists.
    if (imce.hasPermission('delete_files') || imce.hasPermission('delete_subfolders')) {
      // Add toolbar button.
      imce.addTbb('delete', {
        title: Drupal.t('Delete'),
        permission: 'delete_files|delete_subfolders',
        handler: imce.deleteSelection,
        shortcut: 'DEL',
        icon: 'delete'
      });
    }
  });

  /**
   * Deletes the selected items in the active folder.
   */
  imce.deleteSelection = function () {
    var items = imce.getSelection();
    if (imce.validateDelete(items)) {
      if (confirm(Drupal.formatPlural(items.length, 'Delete !filename?', 'Delete the selected @count items?', {'!filename': items[0].name}))) {
        imce.ajaxItems('delete', items);
      }
    }
  };

  /**
   * Validates item deletion.
   */
  imce.validateDelete = function (items) {
    return imce.activeFolder.isReady() && imce.validateCount(items) && imce.validatePermissions(items, 'delete_files', 'delete_subfolders') && imce.validatePredefinedPath(items);
  };

})(jQuery, Drupal, imce);
;
/*global imce:true*/
(function ($, Drupal, imce) {
  'use strict';

  /**
   * @file
   * Defines Resize plugin for Imce.
   */

  /**
   * Init handler for Resize.
   */
  imce.bind('init', imce.resizeInit = function () {
    if (imce.hasPermission('resize_images')) {
      // Add toolbar button
      imce.addTbb('resize', {
        title: Drupal.t('Resize'),
        permission: 'resize_images',
        content: imce.createResizeForm(),
        shortcut: 'Ctrl+Alt+R',
        icon: 'image'
      });
    }
  });

  /**
   * Creates resize form.
   */
  imce.createResizeForm = function () {
    var form = imce.resizeForm;
    if (!form) {
      form = imce.resizeForm = imce.createEl('<form class="imce-resize-form">' +
        '<div class="imce-form-item imce-resize-dimensions">' +
          '<input type="number" name="width" class="imce-resize-width-input" min="1" step="1" />' +
          '<span class="imce-resize-separator">x</span>' +
          '<input type="number" name="height" class="imce-resize-height-input" min="1" step="1" />' +
        '</div>' +
        '<div class="imce-form-item imce-resize-copy">' +
          '<label><input type="checkbox" name="copy" class="imce-resize-copy-input" />' + Drupal.t('Create a copy') + '</label>' +
        '</div>' +
        '<div class="imce-form-actions">' +
          '<button type="submit" name="op" class="imce-resize-button">' + Drupal.t('Resize') + '</button>' +
        '</div>' +
      '</form>');
      form.onsubmit = imce.eResizeSubmit;
      // Set max values
      var els = form.elements;
      els.width.max = imce.getConf('maxwidth') || 10000;
      els.height.max = imce.getConf('maxheight') || 10000;
      // Set placeholders
      els.width.placeholder = Drupal.t('Width');
      els.height.placeholder = Drupal.t('Height');
      // Set focus event
      els.width.onfocus = els.height.onfocus = imce.eResizeInputFocus;
    }
    return form;
  };

  /**
   * Submit event for resize form.
   */
  imce.eResizeSubmit = function () {
    var data;
    var els = this.elements;
    var width = parseInt(els.width.value * 1);
    var height = parseInt(els.height.value * 1);
    var copy = els.copy.checked ? 1 : 0;
    var items = imce.getSelection();
    if (imce.validateResize(items, width, height, copy)) {
      data = {width: width, height: height, copy: copy};
      imce.ajaxItems('resize', items, {data: data});
      imce.getTbb('resize').closePopup();
    }
    return false;
  };

  /**
   * Validates item resizing.
   */
  imce.validateResize = function (items, width, height, copy) {
    return imce.activeFolder.isReady() && imce.validateCount(items) && imce.validateImageTypes(items) && imce.validateDimensions(items, width, height) && imce.validatePermissions(items, 'resize_images');
  };

  /**
   * Focus event for resize width/height input.
   */
  imce.eResizeInputFocus = function () {
    var el = this;
    var val = el.value;
    // Apply aspect ratio of the selected image after min delay.
    setTimeout(function () {
      if (el === document.activeElement && val === el.value) {
        var ratio;
        var els = el.form.elements;
        var isWidth = els.width === el;
        var value = els[isWidth ? 'height' : 'width'].value * 1;
        var Item = imce.previewingItem;
        if (Item && Item.width && value) {
          ratio = Item.width / Item.height;
          el.value = Math.round(isWidth ? value * ratio : value / ratio);
        }
        el = null;
      }
    });
  };

})(jQuery, Drupal, imce);
;
/*! skrollr 0.6.30 (2015-08-12) | Alexander Prinzhorn - https://github.com/Prinzhorn/skrollr | Free to use under terms of MIT license */
!function(a,b,c){"use strict";function d(c){if(e=b.documentElement,f=b.body,T(),ha=this,c=c||{},ma=c.constants||{},c.easing)for(var d in c.easing)W[d]=c.easing[d];ta=c.edgeStrategy||"set",ka={beforerender:c.beforerender,render:c.render,keyframe:c.keyframe},la=c.forceHeight!==!1,la&&(Ka=c.scale||1),na=c.mobileDeceleration||y,pa=c.smoothScrolling!==!1,qa=c.smoothScrollingDuration||A,ra={targetTop:ha.getScrollTop()},Sa=(c.mobileCheck||function(){return/Android|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent||navigator.vendor||a.opera)})(),Sa?(ja=b.getElementById(c.skrollrBody||z),ja&&ga(),X(),Ea(e,[s,v],[t])):Ea(e,[s,u],[t]),ha.refresh(),wa(a,"resize orientationchange",function(){var a=e.clientWidth,b=e.clientHeight;(b!==Pa||a!==Oa)&&(Pa=b,Oa=a,Qa=!0)});var g=U();return function h(){$(),va=g(h)}(),ha}var e,f,g={get:function(){return ha},init:function(a){return ha||new d(a)},VERSION:"0.6.30"},h=Object.prototype.hasOwnProperty,i=a.Math,j=a.getComputedStyle,k="touchstart",l="touchmove",m="touchcancel",n="touchend",o="skrollable",p=o+"-before",q=o+"-between",r=o+"-after",s="skrollr",t="no-"+s,u=s+"-desktop",v=s+"-mobile",w="linear",x=1e3,y=.004,z="skrollr-body",A=200,B="start",C="end",D="center",E="bottom",F="___skrollable_id",G=/^(?:input|textarea|button|select)$/i,H=/^\s+|\s+$/g,I=/^data(?:-(_\w+))?(?:-?(-?\d*\.?\d+p?))?(?:-?(start|end|top|center|bottom))?(?:-?(top|center|bottom))?$/,J=/\s*(@?[\w\-\[\]]+)\s*:\s*(.+?)\s*(?:;|$)/gi,K=/^(@?[a-z\-]+)\[(\w+)\]$/,L=/-([a-z0-9_])/g,M=function(a,b){return b.toUpperCase()},N=/[\-+]?[\d]*\.?[\d]+/g,O=/\{\?\}/g,P=/rgba?\(\s*-?\d+\s*,\s*-?\d+\s*,\s*-?\d+/g,Q=/[a-z\-]+-gradient/g,R="",S="",T=function(){var a=/^(?:O|Moz|webkit|ms)|(?:-(?:o|moz|webkit|ms)-)/;if(j){var b=j(f,null);for(var c in b)if(R=c.match(a)||+c==c&&b[c].match(a))break;if(!R)return void(R=S="");R=R[0],"-"===R.slice(0,1)?(S=R,R={"-webkit-":"webkit","-moz-":"Moz","-ms-":"ms","-o-":"O"}[R]):S="-"+R.toLowerCase()+"-"}},U=function(){var b=a.requestAnimationFrame||a[R.toLowerCase()+"RequestAnimationFrame"],c=Ha();return(Sa||!b)&&(b=function(b){var d=Ha()-c,e=i.max(0,1e3/60-d);return a.setTimeout(function(){c=Ha(),b()},e)}),b},V=function(){var b=a.cancelAnimationFrame||a[R.toLowerCase()+"CancelAnimationFrame"];return(Sa||!b)&&(b=function(b){return a.clearTimeout(b)}),b},W={begin:function(){return 0},end:function(){return 1},linear:function(a){return a},quadratic:function(a){return a*a},cubic:function(a){return a*a*a},swing:function(a){return-i.cos(a*i.PI)/2+.5},sqrt:function(a){return i.sqrt(a)},outCubic:function(a){return i.pow(a-1,3)+1},bounce:function(a){var b;if(.5083>=a)b=3;else if(.8489>=a)b=9;else if(.96208>=a)b=27;else{if(!(.99981>=a))return 1;b=91}return 1-i.abs(3*i.cos(a*b*1.028)/b)}};d.prototype.refresh=function(a){var d,e,f=!1;for(a===c?(f=!0,ia=[],Ra=0,a=b.getElementsByTagName("*")):a.length===c&&(a=[a]),d=0,e=a.length;e>d;d++){var g=a[d],h=g,i=[],j=pa,k=ta,l=!1;if(f&&F in g&&delete g[F],g.attributes){for(var m=0,n=g.attributes.length;n>m;m++){var p=g.attributes[m];if("data-anchor-target"!==p.name)if("data-smooth-scrolling"!==p.name)if("data-edge-strategy"!==p.name)if("data-emit-events"!==p.name){var q=p.name.match(I);if(null!==q){var r={props:p.value,element:g,eventType:p.name.replace(L,M)};i.push(r);var s=q[1];s&&(r.constant=s.substr(1));var t=q[2];/p$/.test(t)?(r.isPercentage=!0,r.offset=(0|t.slice(0,-1))/100):r.offset=0|t;var u=q[3],v=q[4]||u;u&&u!==B&&u!==C?(r.mode="relative",r.anchors=[u,v]):(r.mode="absolute",u===C?r.isEnd=!0:r.isPercentage||(r.offset=r.offset*Ka))}}else l=!0;else k=p.value;else j="off"!==p.value;else if(h=b.querySelector(p.value),null===h)throw'Unable to find anchor target "'+p.value+'"'}if(i.length){var w,x,y;!f&&F in g?(y=g[F],w=ia[y].styleAttr,x=ia[y].classAttr):(y=g[F]=Ra++,w=g.style.cssText,x=Da(g)),ia[y]={element:g,styleAttr:w,classAttr:x,anchorTarget:h,keyFrames:i,smoothScrolling:j,edgeStrategy:k,emitEvents:l,lastFrameIndex:-1},Ea(g,[o],[])}}}for(Aa(),d=0,e=a.length;e>d;d++){var z=ia[a[d][F]];z!==c&&(_(z),ba(z))}return ha},d.prototype.relativeToAbsolute=function(a,b,c){var d=e.clientHeight,f=a.getBoundingClientRect(),g=f.top,h=f.bottom-f.top;return b===E?g-=d:b===D&&(g-=d/2),c===E?g+=h:c===D&&(g+=h/2),g+=ha.getScrollTop(),g+.5|0},d.prototype.animateTo=function(a,b){b=b||{};var d=Ha(),e=ha.getScrollTop(),f=b.duration===c?x:b.duration;return oa={startTop:e,topDiff:a-e,targetTop:a,duration:f,startTime:d,endTime:d+f,easing:W[b.easing||w],done:b.done},oa.topDiff||(oa.done&&oa.done.call(ha,!1),oa=c),ha},d.prototype.stopAnimateTo=function(){oa&&oa.done&&oa.done.call(ha,!0),oa=c},d.prototype.isAnimatingTo=function(){return!!oa},d.prototype.isMobile=function(){return Sa},d.prototype.setScrollTop=function(b,c){return sa=c===!0,Sa?Ta=i.min(i.max(b,0),Ja):a.scrollTo(0,b),ha},d.prototype.getScrollTop=function(){return Sa?Ta:a.pageYOffset||e.scrollTop||f.scrollTop||0},d.prototype.getMaxScrollTop=function(){return Ja},d.prototype.on=function(a,b){return ka[a]=b,ha},d.prototype.off=function(a){return delete ka[a],ha},d.prototype.destroy=function(){var a=V();a(va),ya(),Ea(e,[t],[s,u,v]);for(var b=0,d=ia.length;d>b;b++)fa(ia[b].element);e.style.overflow=f.style.overflow="",e.style.height=f.style.height="",ja&&g.setStyle(ja,"transform","none"),ha=c,ja=c,ka=c,la=c,Ja=0,Ka=1,ma=c,na=c,La="down",Ma=-1,Oa=0,Pa=0,Qa=!1,oa=c,pa=c,qa=c,ra=c,sa=c,Ra=0,ta=c,Sa=!1,Ta=0,ua=c};var X=function(){var d,g,h,j,o,p,q,r,s,t,u,v;wa(e,[k,l,m,n].join(" "),function(a){var e=a.changedTouches[0];for(j=a.target;3===j.nodeType;)j=j.parentNode;switch(o=e.clientY,p=e.clientX,t=a.timeStamp,G.test(j.tagName)||a.preventDefault(),a.type){case k:d&&d.blur(),ha.stopAnimateTo(),d=j,g=q=o,h=p,s=t;break;case l:G.test(j.tagName)&&b.activeElement!==j&&a.preventDefault(),r=o-q,v=t-u,ha.setScrollTop(Ta-r,!0),q=o,u=t;break;default:case m:case n:var f=g-o,w=h-p,x=w*w+f*f;if(49>x){if(!G.test(d.tagName)){d.focus();var y=b.createEvent("MouseEvents");y.initMouseEvent("click",!0,!0,a.view,1,e.screenX,e.screenY,e.clientX,e.clientY,a.ctrlKey,a.altKey,a.shiftKey,a.metaKey,0,null),d.dispatchEvent(y)}return}d=c;var z=r/v;z=i.max(i.min(z,3),-3);var A=i.abs(z/na),B=z*A+.5*na*A*A,C=ha.getScrollTop()-B,D=0;C>Ja?(D=(Ja-C)/B,C=Ja):0>C&&(D=-C/B,C=0),A*=1-D,ha.animateTo(C+.5|0,{easing:"outCubic",duration:A})}}),a.scrollTo(0,0),e.style.overflow=f.style.overflow="hidden"},Y=function(){var a,b,c,d,f,g,h,j,k,l,m,n=e.clientHeight,o=Ba();for(j=0,k=ia.length;k>j;j++)for(a=ia[j],b=a.element,c=a.anchorTarget,d=a.keyFrames,f=0,g=d.length;g>f;f++)h=d[f],l=h.offset,m=o[h.constant]||0,h.frame=l,h.isPercentage&&(l*=n,h.frame=l),"relative"===h.mode&&(fa(b),h.frame=ha.relativeToAbsolute(c,h.anchors[0],h.anchors[1])-l,fa(b,!0)),h.frame+=m,la&&!h.isEnd&&h.frame>Ja&&(Ja=h.frame);for(Ja=i.max(Ja,Ca()),j=0,k=ia.length;k>j;j++){for(a=ia[j],d=a.keyFrames,f=0,g=d.length;g>f;f++)h=d[f],m=o[h.constant]||0,h.isEnd&&(h.frame=Ja-h.offset+m);a.keyFrames.sort(Ia)}},Z=function(a,b){for(var c=0,d=ia.length;d>c;c++){var e,f,i=ia[c],j=i.element,k=i.smoothScrolling?a:b,l=i.keyFrames,m=l.length,n=l[0],s=l[l.length-1],t=k<n.frame,u=k>s.frame,v=t?n:s,w=i.emitEvents,x=i.lastFrameIndex;if(t||u){if(t&&-1===i.edge||u&&1===i.edge)continue;switch(t?(Ea(j,[p],[r,q]),w&&x>-1&&(za(j,n.eventType,La),i.lastFrameIndex=-1)):(Ea(j,[r],[p,q]),w&&m>x&&(za(j,s.eventType,La),i.lastFrameIndex=m)),i.edge=t?-1:1,i.edgeStrategy){case"reset":fa(j);continue;case"ease":k=v.frame;break;default:case"set":var y=v.props;for(e in y)h.call(y,e)&&(f=ea(y[e].value),0===e.indexOf("@")?j.setAttribute(e.substr(1),f):g.setStyle(j,e,f));continue}}else 0!==i.edge&&(Ea(j,[o,q],[p,r]),i.edge=0);for(var z=0;m-1>z;z++)if(k>=l[z].frame&&k<=l[z+1].frame){var A=l[z],B=l[z+1];for(e in A.props)if(h.call(A.props,e)){var C=(k-A.frame)/(B.frame-A.frame);C=A.props[e].easing(C),f=da(A.props[e].value,B.props[e].value,C),f=ea(f),0===e.indexOf("@")?j.setAttribute(e.substr(1),f):g.setStyle(j,e,f)}w&&x!==z&&("down"===La?za(j,A.eventType,La):za(j,B.eventType,La),i.lastFrameIndex=z);break}}},$=function(){Qa&&(Qa=!1,Aa());var a,b,d=ha.getScrollTop(),e=Ha();if(oa)e>=oa.endTime?(d=oa.targetTop,a=oa.done,oa=c):(b=oa.easing((e-oa.startTime)/oa.duration),d=oa.startTop+b*oa.topDiff|0),ha.setScrollTop(d,!0);else if(!sa){var f=ra.targetTop-d;f&&(ra={startTop:Ma,topDiff:d-Ma,targetTop:d,startTime:Na,endTime:Na+qa}),e<=ra.endTime&&(b=W.sqrt((e-ra.startTime)/qa),d=ra.startTop+b*ra.topDiff|0)}if(sa||Ma!==d){La=d>Ma?"down":Ma>d?"up":La,sa=!1;var h={curTop:d,lastTop:Ma,maxTop:Ja,direction:La},i=ka.beforerender&&ka.beforerender.call(ha,h);i!==!1&&(Z(d,ha.getScrollTop()),Sa&&ja&&g.setStyle(ja,"transform","translate(0, "+-Ta+"px) "+ua),Ma=d,ka.render&&ka.render.call(ha,h)),a&&a.call(ha,!1)}Na=e},_=function(a){for(var b=0,c=a.keyFrames.length;c>b;b++){for(var d,e,f,g,h=a.keyFrames[b],i={};null!==(g=J.exec(h.props));)f=g[1],e=g[2],d=f.match(K),null!==d?(f=d[1],d=d[2]):d=w,e=e.indexOf("!")?aa(e):[e.slice(1)],i[f]={value:e,easing:W[d]};h.props=i}},aa=function(a){var b=[];return P.lastIndex=0,a=a.replace(P,function(a){return a.replace(N,function(a){return a/255*100+"%"})}),S&&(Q.lastIndex=0,a=a.replace(Q,function(a){return S+a})),a=a.replace(N,function(a){return b.push(+a),"{?}"}),b.unshift(a),b},ba=function(a){var b,c,d={};for(b=0,c=a.keyFrames.length;c>b;b++)ca(a.keyFrames[b],d);for(d={},b=a.keyFrames.length-1;b>=0;b--)ca(a.keyFrames[b],d)},ca=function(a,b){var c;for(c in b)h.call(a.props,c)||(a.props[c]=b[c]);for(c in a.props)b[c]=a.props[c]},da=function(a,b,c){var d,e=a.length;if(e!==b.length)throw"Can't interpolate between \""+a[0]+'" and "'+b[0]+'"';var f=[a[0]];for(d=1;e>d;d++)f[d]=a[d]+(b[d]-a[d])*c;return f},ea=function(a){var b=1;return O.lastIndex=0,a[0].replace(O,function(){return a[b++]})},fa=function(a,b){a=[].concat(a);for(var c,d,e=0,f=a.length;f>e;e++)d=a[e],c=ia[d[F]],c&&(b?(d.style.cssText=c.dirtyStyleAttr,Ea(d,c.dirtyClassAttr)):(c.dirtyStyleAttr=d.style.cssText,c.dirtyClassAttr=Da(d),d.style.cssText=c.styleAttr,Ea(d,c.classAttr)))},ga=function(){ua="translateZ(0)",g.setStyle(ja,"transform",ua);var a=j(ja),b=a.getPropertyValue("transform"),c=a.getPropertyValue(S+"transform"),d=b&&"none"!==b||c&&"none"!==c;d||(ua="")};g.setStyle=function(a,b,c){var d=a.style;if(b=b.replace(L,M).replace("-",""),"zIndex"===b)isNaN(c)?d[b]=c:d[b]=""+(0|c);else if("float"===b)d.styleFloat=d.cssFloat=c;else try{R&&(d[R+b.slice(0,1).toUpperCase()+b.slice(1)]=c),d[b]=c}catch(e){}};var ha,ia,ja,ka,la,ma,na,oa,pa,qa,ra,sa,ta,ua,va,wa=g.addEvent=function(b,c,d){var e=function(b){return b=b||a.event,b.target||(b.target=b.srcElement),b.preventDefault||(b.preventDefault=function(){b.returnValue=!1,b.defaultPrevented=!0}),d.call(this,b)};c=c.split(" ");for(var f,g=0,h=c.length;h>g;g++)f=c[g],b.addEventListener?b.addEventListener(f,d,!1):b.attachEvent("on"+f,e),Ua.push({element:b,name:f,listener:d})},xa=g.removeEvent=function(a,b,c){b=b.split(" ");for(var d=0,e=b.length;e>d;d++)a.removeEventListener?a.removeEventListener(b[d],c,!1):a.detachEvent("on"+b[d],c)},ya=function(){for(var a,b=0,c=Ua.length;c>b;b++)a=Ua[b],xa(a.element,a.name,a.listener);Ua=[]},za=function(a,b,c){ka.keyframe&&ka.keyframe.call(ha,a,b,c)},Aa=function(){var a=ha.getScrollTop();Ja=0,la&&!Sa&&(f.style.height=""),Y(),la&&!Sa&&(f.style.height=Ja+e.clientHeight+"px"),Sa?ha.setScrollTop(i.min(ha.getScrollTop(),Ja)):ha.setScrollTop(a,!0),sa=!0},Ba=function(){var a,b,c=e.clientHeight,d={};for(a in ma)b=ma[a],"function"==typeof b?b=b.call(ha):/p$/.test(b)&&(b=b.slice(0,-1)/100*c),d[a]=b;return d},Ca=function(){var a,b=0;return ja&&(b=i.max(ja.offsetHeight,ja.scrollHeight)),a=i.max(b,f.scrollHeight,f.offsetHeight,e.scrollHeight,e.offsetHeight,e.clientHeight),a-e.clientHeight},Da=function(b){var c="className";return a.SVGElement&&b instanceof a.SVGElement&&(b=b[c],c="baseVal"),b[c]},Ea=function(b,d,e){var f="className";if(a.SVGElement&&b instanceof a.SVGElement&&(b=b[f],f="baseVal"),e===c)return void(b[f]=d);for(var g=b[f],h=0,i=e.length;i>h;h++)g=Ga(g).replace(Ga(e[h])," ");g=Fa(g);for(var j=0,k=d.length;k>j;j++)-1===Ga(g).indexOf(Ga(d[j]))&&(g+=" "+d[j]);b[f]=Fa(g)},Fa=function(a){return a.replace(H,"")},Ga=function(a){return" "+a+" "},Ha=Date.now||function(){return+new Date},Ia=function(a,b){return a.frame-b.frame},Ja=0,Ka=1,La="down",Ma=-1,Na=Ha(),Oa=0,Pa=0,Qa=!1,Ra=0,Sa=!1,Ta=0,Ua=[];"function"==typeof define&&define.amd?define([],function(){return g}):"undefined"!=typeof module&&module.exports?module.exports=g:a.skrollr=g}(window,document);;
(function ($) {
   $.fn.gav_skrollr = function(s) {
      var $w = $(window), 
          loaded, 
          skrollr = this
          th = 200;
       this.one("gav_skrollr", function() {
         s.refresh();
      });
      function gav_skrollr() {
         var inview = skrollr.filter(function() {
           var $e = $(this);
           var wt = $w.scrollTop(),
               wb = wt + $w.height(),
               et = $e.offset().top,
               eb = et + $e.height();

           return eb >= wt - th && et <= wb + th;
         });
         loaded = inview.trigger("gav_skrollr");
         skrollr = skrollr.not(loaded);
      }
      $(window).on("scroll.gav_skrollr", gav_skrollr);
   };
   $(window).on('load', function(){
      setTimeout(function() {
         s = skrollr.init({forceHeight:!1,smoothScrolling:!1,mobileCheck:function(){return!1}});
         if($('.skrollable.refresh').length){
            $('.skrollable.refresh').gav_skrollr(s);
         }
      }, 50);
   });
})(jQuery);
;
/**
 *
 * Color picker
 * Author: Stefan Petre www.eyecon.ro
 * 
 * Dual licensed under the MIT and GPL licenses
 * 
 */
(function ($) {
	var ColorPicker = function () {
		var
			ids = {},
			inAction,
			charMin = 65,
			visible,
			tpl = '<div class="colorpicker"><div class="colorpicker_color"><div><div></div></div></div><div class="colorpicker_hue"><div></div></div><div class="colorpicker_new_color"></div><div class="colorpicker_current_color"></div><div class="colorpicker_hex"><input type="text" maxlength="6" size="6" /></div><div class="colorpicker_rgb_r colorpicker_field"><input type="text" maxlength="3" size="3" /><span></span></div><div class="colorpicker_rgb_g colorpicker_field"><input type="text" maxlength="3" size="3" /><span></span></div><div class="colorpicker_rgb_b colorpicker_field"><input type="text" maxlength="3" size="3" /><span></span></div><div class="colorpicker_hsb_h colorpicker_field"><input type="text" maxlength="3" size="3" /><span></span></div><div class="colorpicker_hsb_s colorpicker_field"><input type="text" maxlength="3" size="3" /><span></span></div><div class="colorpicker_hsb_b colorpicker_field"><input type="text" maxlength="3" size="3" /><span></span></div><div class="colorpicker_submit"></div></div>',
			defaults = {
				eventName: 'click',
				onShow: function () {},
				onBeforeShow: function(){},
				onHide: function () {},
				onChange: function () {},
				onSubmit: function () {},
				color: 'ff0000',
				livePreview: true,
				flat: false
			},
			fillRGBFields = function  (hsb, cal) {
				var rgb = HSBToRGB(hsb);
				$(cal).data('colorpicker').fields
					.eq(1).val(rgb.r).end()
					.eq(2).val(rgb.g).end()
					.eq(3).val(rgb.b).end();
			},
			fillHSBFields = function  (hsb, cal) {
				$(cal).data('colorpicker').fields
					.eq(4).val(hsb.h).end()
					.eq(5).val(hsb.s).end()
					.eq(6).val(hsb.b).end();
			},
			fillHexFields = function (hsb, cal) {
				$(cal).data('colorpicker').fields
					.eq(0).val(HSBToHex(hsb)).end();
			},
			setSelector = function (hsb, cal) {
				$(cal).data('colorpicker').selector.css('backgroundColor', '#' + HSBToHex({h: hsb.h, s: 100, b: 100}));
				$(cal).data('colorpicker').selectorIndic.css({
					left: parseInt(150 * hsb.s/100, 10),
					top: parseInt(150 * (100-hsb.b)/100, 10)
				});
			},
			setHue = function (hsb, cal) {
				$(cal).data('colorpicker').hue.css('top', parseInt(150 - 150 * hsb.h/360, 10));
			},
			setCurrentColor = function (hsb, cal) {
				$(cal).data('colorpicker').currentColor.css('backgroundColor', '#' + HSBToHex(hsb));
			},
			setNewColor = function (hsb, cal) {
				$(cal).data('colorpicker').newColor.css('backgroundColor', '#' + HSBToHex(hsb));
			},
			keyDown = function (ev) {
				var pressedKey = ev.charCode || ev.keyCode || -1;
				if ((pressedKey > charMin && pressedKey <= 90) || pressedKey == 32) {
					return false;
				}
				var cal = $(this).parent().parent();
				if (cal.data('colorpicker').livePreview === true) {
					change.apply(this);
				}
			},
			change = function (ev) {
				var cal = $(this).parent().parent(), col;
				if (this.parentNode.className.indexOf('_hex') > 0) {
					cal.data('colorpicker').color = col = HexToHSB(fixHex(this.value));
				} else if (this.parentNode.className.indexOf('_hsb') > 0) {
					cal.data('colorpicker').color = col = fixHSB({
						h: parseInt(cal.data('colorpicker').fields.eq(4).val(), 10),
						s: parseInt(cal.data('colorpicker').fields.eq(5).val(), 10),
						b: parseInt(cal.data('colorpicker').fields.eq(6).val(), 10)
					});
				} else {
					cal.data('colorpicker').color = col = RGBToHSB(fixRGB({
						r: parseInt(cal.data('colorpicker').fields.eq(1).val(), 10),
						g: parseInt(cal.data('colorpicker').fields.eq(2).val(), 10),
						b: parseInt(cal.data('colorpicker').fields.eq(3).val(), 10)
					}));
				}
				if (ev) {
					fillRGBFields(col, cal.get(0));
					fillHexFields(col, cal.get(0));
					fillHSBFields(col, cal.get(0));
				}
				setSelector(col, cal.get(0));
				setHue(col, cal.get(0));
				setNewColor(col, cal.get(0));
				cal.data('colorpicker').onChange.apply(cal, [col, HSBToHex(col), HSBToRGB(col)]);
			},
			blur = function (ev) {
				var cal = $(this).parent().parent();
				cal.data('colorpicker').fields.parent().removeClass('colorpicker_focus');
			},
			focus = function () {
				charMin = this.parentNode.className.indexOf('_hex') > 0 ? 70 : 65;
				$(this).parent().parent().data('colorpicker').fields.parent().removeClass('colorpicker_focus');
				$(this).parent().addClass('colorpicker_focus');
			},
			downIncrement = function (ev) {
				var field = $(this).parent().find('input').focus();
				var current = {
					el: $(this).parent().addClass('colorpicker_slider'),
					max: this.parentNode.className.indexOf('_hsb_h') > 0 ? 360 : (this.parentNode.className.indexOf('_hsb') > 0 ? 100 : 255),
					y: ev.pageY,
					field: field,
					val: parseInt(field.val(), 10),
					preview: $(this).parent().parent().data('colorpicker').livePreview					
				};
				$(document).bind('mouseup', current, upIncrement);
				$(document).bind('mousemove', current, moveIncrement);
			},
			moveIncrement = function (ev) {
				ev.data.field.val(Math.max(0, Math.min(ev.data.max, parseInt(ev.data.val + ev.pageY - ev.data.y, 10))));
				if (ev.data.preview) {
					change.apply(ev.data.field.get(0), [true]);
				}
				return false;
			},
			upIncrement = function (ev) {
				change.apply(ev.data.field.get(0), [true]);
				ev.data.el.removeClass('colorpicker_slider').find('input').focus();
				$(document).unbind('mouseup', upIncrement);
				$(document).unbind('mousemove', moveIncrement);
				return false;
			},
			downHue = function (ev) {
				var current = {
					cal: $(this).parent(),
					y: $(this).offset().top
				};
				current.preview = current.cal.data('colorpicker').livePreview;
				$(document).bind('mouseup', current, upHue);
				$(document).bind('mousemove', current, moveHue);
			},
			moveHue = function (ev) {
				change.apply(
					ev.data.cal.data('colorpicker')
						.fields
						.eq(4)
						.val(parseInt(360*(150 - Math.max(0,Math.min(150,(ev.pageY - ev.data.y))))/150, 10))
						.get(0),
					[ev.data.preview]
				);
				return false;
			},
			upHue = function (ev) {
				fillRGBFields(ev.data.cal.data('colorpicker').color, ev.data.cal.get(0));
				fillHexFields(ev.data.cal.data('colorpicker').color, ev.data.cal.get(0));
				$(document).unbind('mouseup', upHue);
				$(document).unbind('mousemove', moveHue);
				return false;
			},
			downSelector = function (ev) {
				var current = {
					cal: $(this).parent(),
					pos: $(this).offset()
				};
				current.preview = current.cal.data('colorpicker').livePreview;
				$(document).bind('mouseup', current, upSelector);
				$(document).bind('mousemove', current, moveSelector);
			},
			moveSelector = function (ev) {
				change.apply(
					ev.data.cal.data('colorpicker')
						.fields
						.eq(6)
						.val(parseInt(100*(150 - Math.max(0,Math.min(150,(ev.pageY - ev.data.pos.top))))/150, 10))
						.end()
						.eq(5)
						.val(parseInt(100*(Math.max(0,Math.min(150,(ev.pageX - ev.data.pos.left))))/150, 10))
						.get(0),
					[ev.data.preview]
				);
				return false;
			},
			upSelector = function (ev) {
				fillRGBFields(ev.data.cal.data('colorpicker').color, ev.data.cal.get(0));
				fillHexFields(ev.data.cal.data('colorpicker').color, ev.data.cal.get(0));
				$(document).unbind('mouseup', upSelector);
				$(document).unbind('mousemove', moveSelector);
				return false;
			},
			enterSubmit = function (ev) {
				$(this).addClass('colorpicker_focus');
			},
			leaveSubmit = function (ev) {
				$(this).removeClass('colorpicker_focus');
			},
			clickSubmit = function (ev) {
				var cal = $(this).parent();
				var col = cal.data('colorpicker').color;
				cal.data('colorpicker').origColor = col;
				setCurrentColor(col, cal.get(0));
				cal.data('colorpicker').onSubmit(col, HSBToHex(col), HSBToRGB(col), cal.data('colorpicker').el);
			},
			show = function (ev) {
				var cal = $('#' + $(this).data('colorpickerId'));
				cal.data('colorpicker').onBeforeShow.apply(this, [cal.get(0)]);
				var pos = $(this).offset();
				var viewPort = getViewport();
				var top = pos.top + this.offsetHeight;
				var left = pos.left;
				if (top + 176 > viewPort.t + viewPort.h) {
					top -= this.offsetHeight + 176;
				}
				if (left + 356 > viewPort.l + viewPort.w) {
					left -= 356;
				}
				cal.css({left: left + 'px', top: top + 'px'});
				if (cal.data('colorpicker').onShow.apply(this, [cal.get(0)]) != false) {
					cal.show();
				}
				$(document).bind('mousedown', {cal: cal}, hide);
				return false;
			},
			hide = function (ev) {
				if (!isChildOf(ev.data.cal.get(0), ev.target, ev.data.cal.get(0))) {
					if (ev.data.cal.data('colorpicker').onHide.apply(this, [ev.data.cal.get(0)]) != false) {
						ev.data.cal.hide();
					}
					$(document).unbind('mousedown', hide);
				}
			},
			isChildOf = function(parentEl, el, container) {
				if (parentEl == el) {
					return true;
				}
				if (parentEl.contains) {
					return parentEl.contains(el);
				}
				if ( parentEl.compareDocumentPosition ) {
					return !!(parentEl.compareDocumentPosition(el) & 16);
				}
				var prEl = el.parentNode;
				while(prEl && prEl != container) {
					if (prEl == parentEl)
						return true;
					prEl = prEl.parentNode;
				}
				return false;
			},
			getViewport = function () {
				var m = document.compatMode == 'CSS1Compat';
				return {
					l : window.pageXOffset || (m ? document.documentElement.scrollLeft : document.body.scrollLeft),
					t : window.pageYOffset || (m ? document.documentElement.scrollTop : document.body.scrollTop),
					w : window.innerWidth || (m ? document.documentElement.clientWidth : document.body.clientWidth),
					h : window.innerHeight || (m ? document.documentElement.clientHeight : document.body.clientHeight)
				};
			},
			fixHSB = function (hsb) {
				return {
					h: Math.min(360, Math.max(0, hsb.h)),
					s: Math.min(100, Math.max(0, hsb.s)),
					b: Math.min(100, Math.max(0, hsb.b))
				};
			}, 
			fixRGB = function (rgb) {
				return {
					r: Math.min(255, Math.max(0, rgb.r)),
					g: Math.min(255, Math.max(0, rgb.g)),
					b: Math.min(255, Math.max(0, rgb.b))
				};
			},
			fixHex = function (hex) {
				var len = 6 - hex.length;
				if (len > 0) {
					var o = [];
					for (var i=0; i<len; i++) {
						o.push('0');
					}
					o.push(hex);
					hex = o.join('');
				}
				return hex;
			}, 
			HexToRGB = function (hex) {
				var hex = parseInt(((hex.indexOf('#') > -1) ? hex.substring(1) : hex), 16);
				return {r: hex >> 16, g: (hex & 0x00FF00) >> 8, b: (hex & 0x0000FF)};
			},
			HexToHSB = function (hex) {
				return RGBToHSB(HexToRGB(hex));
			},
			RGBToHSB = function (rgb) {
				var hsb = {
					h: 0,
					s: 0,
					b: 0
				};
				var min = Math.min(rgb.r, rgb.g, rgb.b);
				var max = Math.max(rgb.r, rgb.g, rgb.b);
				var delta = max - min;
				hsb.b = max;
				if (max != 0) {
					
				}
				hsb.s = max != 0 ? 255 * delta / max : 0;
				if (hsb.s != 0) {
					if (rgb.r == max) {
						hsb.h = (rgb.g - rgb.b) / delta;
					} else if (rgb.g == max) {
						hsb.h = 2 + (rgb.b - rgb.r) / delta;
					} else {
						hsb.h = 4 + (rgb.r - rgb.g) / delta;
					}
				} else {
					hsb.h = -1;
				}
				hsb.h *= 60;
				if (hsb.h < 0) {
					hsb.h += 360;
				}
				hsb.s *= 100/255;
				hsb.b *= 100/255;
				return hsb;
			},
			HSBToRGB = function (hsb) {
				var rgb = {};
				var h = Math.round(hsb.h);
				var s = Math.round(hsb.s*255/100);
				var v = Math.round(hsb.b*255/100);
				if(s == 0) {
					rgb.r = rgb.g = rgb.b = v;
				} else {
					var t1 = v;
					var t2 = (255-s)*v/255;
					var t3 = (t1-t2)*(h%60)/60;
					if(h==360) h = 0;
					if(h<60) {rgb.r=t1;	rgb.b=t2; rgb.g=t2+t3}
					else if(h<120) {rgb.g=t1; rgb.b=t2;	rgb.r=t1-t3}
					else if(h<180) {rgb.g=t1; rgb.r=t2;	rgb.b=t2+t3}
					else if(h<240) {rgb.b=t1; rgb.r=t2;	rgb.g=t1-t3}
					else if(h<300) {rgb.b=t1; rgb.g=t2;	rgb.r=t2+t3}
					else if(h<360) {rgb.r=t1; rgb.g=t2;	rgb.b=t1-t3}
					else {rgb.r=0; rgb.g=0;	rgb.b=0}
				}
				return {r:Math.round(rgb.r), g:Math.round(rgb.g), b:Math.round(rgb.b)};
			},
			RGBToHex = function (rgb) {
				var hex = [
					rgb.r.toString(16),
					rgb.g.toString(16),
					rgb.b.toString(16)
				];
				$.each(hex, function (nr, val) {
					if (val.length == 1) {
						hex[nr] = '0' + val;
					}
				});
				return hex.join('');
			},
			HSBToHex = function (hsb) {
				return RGBToHex(HSBToRGB(hsb));
			},
			restoreOriginal = function () {
				var cal = $(this).parent();
				var col = cal.data('colorpicker').origColor;
				cal.data('colorpicker').color = col;
				fillRGBFields(col, cal.get(0));
				fillHexFields(col, cal.get(0));
				fillHSBFields(col, cal.get(0));
				setSelector(col, cal.get(0));
				setHue(col, cal.get(0));
				setNewColor(col, cal.get(0));
			};
		return {
			init: function (opt) {
				opt = $.extend({}, defaults, opt||{});
				if (typeof opt.color == 'string') {
					opt.color = HexToHSB(opt.color);
				} else if (opt.color.r != undefined && opt.color.g != undefined && opt.color.b != undefined) {
					opt.color = RGBToHSB(opt.color);
				} else if (opt.color.h != undefined && opt.color.s != undefined && opt.color.b != undefined) {
					opt.color = fixHSB(opt.color);
				} else {
					return this;
				}
				return this.each(function () {
					if (!$(this).data('colorpickerId')) {
						var options = $.extend({}, opt);
						options.origColor = opt.color;
						var id = 'collorpicker_' + parseInt(Math.random() * 1000);
						$(this).data('colorpickerId', id);
						var cal = $(tpl).attr('id', id);
						if (options.flat) {
							cal.appendTo(this).show();
						} else {
							cal.appendTo(document.body);
						}
						options.fields = cal
											.find('input')
												.bind('keyup', keyDown)
												.bind('change', change)
												.bind('blur', blur)
												.bind('focus', focus);
						cal
							.find('span').bind('mousedown', downIncrement).end()
							.find('>div.colorpicker_current_color').bind('click', restoreOriginal);
						options.selector = cal.find('div.colorpicker_color').bind('mousedown', downSelector);
						options.selectorIndic = options.selector.find('div div');
						options.el = this;
						options.hue = cal.find('div.colorpicker_hue div');
						cal.find('div.colorpicker_hue').bind('mousedown', downHue);
						options.newColor = cal.find('div.colorpicker_new_color');
						options.currentColor = cal.find('div.colorpicker_current_color');
						cal.data('colorpicker', options);
						cal.find('div.colorpicker_submit')
							.bind('mouseenter', enterSubmit)
							.bind('mouseleave', leaveSubmit)
							.bind('click', clickSubmit);
						fillRGBFields(options.color, cal.get(0));
						fillHSBFields(options.color, cal.get(0));
						fillHexFields(options.color, cal.get(0));
						setHue(options.color, cal.get(0));
						setSelector(options.color, cal.get(0));
						setCurrentColor(options.color, cal.get(0));
						setNewColor(options.color, cal.get(0));
						if (options.flat) {
							cal.css({
								position: 'relative',
								display: 'block'
							});
						} else {
							$(this).bind(options.eventName, show);
						}
					}
				});
			},
			showPicker: function() {
				return this.each( function () {
					if ($(this).data('colorpickerId')) {
						show.apply(this);
					}
				});
			},
			hidePicker: function() {
				return this.each( function () {
					if ($(this).data('colorpickerId')) {
						$('#' + $(this).data('colorpickerId')).hide();
					}
				});
			},
			setColor: function(col) {
				if (typeof col == 'string') {
					col = HexToHSB(col);
				} else if (col.r != undefined && col.g != undefined && col.b != undefined) {
					col = RGBToHSB(col);
				} else if (col.h != undefined && col.s != undefined && col.b != undefined) {
					col = fixHSB(col);
				} else {
					return this;
				}
				return this.each(function(){
					if ($(this).data('colorpickerId')) {
						var cal = $('#' + $(this).data('colorpickerId'));
						cal.data('colorpicker').color = col;
						cal.data('colorpicker').origColor = col;
						fillRGBFields(col, cal.get(0));
						fillHSBFields(col, cal.get(0));
						fillHexFields(col, cal.get(0));
						setHue(col, cal.get(0));
						setSelector(col, cal.get(0));
						setCurrentColor(col, cal.get(0));
						setNewColor(col, cal.get(0));
					}
				});
			}
		};
	}();
	$.fn.extend({
		ColorPicker: ColorPicker.init,
		ColorPickerHide: ColorPicker.hidePicker,
		ColorPickerShow: ColorPicker.showPicker,
		ColorPickerSetColor: ColorPicker.setColor
	});
})(jQuery);
var keyString="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
base64Encode = function(c) {
  var a = "";
  var k, h, f, j, g, e, d;
  var b = 0;
  c = UTF8Encode(c);
  while (b < c.length) {
    k = c.charCodeAt(b++);
    h = c.charCodeAt(b++);
    f = c.charCodeAt(b++);
    j = k >> 2;
    g = ((k & 3) << 4) | (h >> 4);
    e = ((h & 15) << 2) | (f >> 6);
    d = f & 63;
    if (isNaN(h)) {
      e = d = 64
    } else {
      if (isNaN(f)) {
        d = 64
      }
    }
    a = a + keyString.charAt(j)
    + keyString.charAt(g)
    + keyString.charAt(e)
    + keyString.charAt(d)
  }
  return a
};

UTF8Encode = function(b) {
  b = b.replace(/\x0d\x0a/g, "\x0a");
  var a = "";
  for ( var e = 0; e < b.length; e++) {
    var d = b.charCodeAt(e);
    if (d < 128) {
      a += String.fromCharCode(d)
    } else {
      if ((d > 127) && (d < 2048)) {
        a += String.fromCharCode((d >> 6) | 192);
        a += String.fromCharCode((d & 63) | 128)
      } else {
        a += String.fromCharCode((d >> 12) | 224);
        a += String.fromCharCode(((d >> 6) & 63) | 128);
        a += String.fromCharCode((d & 63) | 128)
      }
    }
  }
  return a;
};

var $customize;
if($customize == null) $customize = {};

(function ($) {
  $(document).ready(function () {

    // === ColorPicker ===
    if($.fn.ColorPicker){
      $('.colorselector input').each(function(){
        var $input = $(this);
        $input.attr('readonly','readonly');
        $input.ColorPicker({
          onChange:function (hsb, hex, rgb) {
            $input.parent().find('.input-group-addon').css('backgroundColor', '#' + hex);
            $input.val( '#' + hex );
          } 
       });
      });
      $('.colorselector .remove').each(function(){
        $(this).click(function(){
          $(this).parent().find('input').val('');
          $(this).parent().find('.input-group-addon').css('backgroundColor', '#eeeeee');
        })
      })
    }

    $('#gavias_customize_save').click(function () {
      saveCustomize();
    });

    $('#gavias_customize_preview').click(function(){
      previewCustomize();
    });

    $('#gavias_customize_reset').click(function(){
      if(drupalSettings.gavias_customize.json){
        var data = drupalSettings.gavias_customize.json;
        changeProfile(data);
      }else{
        $('#gavias_customize_form .customize-option').each(function (index) {
          $(this).val('');
        });
        changeColor();
      }
    });

    if(drupalSettings.gavias_customize.json){
      
      var data = drupalSettings.gavias_customize.json;
      changeProfile(data);
      //console.log(data);
    }
  })

  function changeColor(){
    $('#gavias_customize_form .colorselector').each(function(){
      $this = $(this);
      $(this).find('.input-group-addon').each(function(){
          $(this).css('background',  $this.find('input').val());
      });
    });
  }

  function dataCustomize() {
    jQuery('#gavias_customize_form .customize-option').each(function (index) {
      $customize[jQuery(this).attr('name')] = $(this).val();
    });      
  }

  function changeProfile(data){
    var items = {};
    var items = jQuery.parseJSON(data);
    if(items){
      $('#gavias_customize_form .customize-option').each(function (index) {
        if(items[$(this).attr('name')]){
          $(this).val(items[$(this).attr('name')]);
        }else{
          $(this).val('');
        }
      }) 
      changeColor();
    }  
  }

  function saveCustomize() {
    dataCustomize();
    var datacustomize = JSON.stringify($customize);
    var data = {
      data: datacustomize,
      theme_name: $('#gva_theme_name').val(),
    };
    
    $('#gavias_customize_save').val('Saving...');
    $.ajax({
      url: drupalSettings.gavias_customize.save,
      type: 'POST',
      data: data,
      dataType: 'Json',
      success: function (data) {
        $('#gavias_customize_save').val('Save');
      },
      error: function (jqXHR, textStatus, errorThrown) {
        alert(textStatus + ":" + jqXHR.responseText);
      }
    });
  }

  function previewCustomize() {
    dataCustomize();
    var datacustomize = JSON.stringify($customize);
    var data = {
      data: datacustomize,
      theme_name: $('#gva_theme_name').val(),
    };
    
    $('#gavias_customize_preview').val('Loading...');
    $.ajax({
      url: drupalSettings.gavias_customize.preview,
      type: 'POST',
      data: data,
      dataType: 'Json',
      success: function (data) {
        $('#gavias_customize_preview').val('Preview');
        if($('head #gavias_css_preview').length){
          $('head #gavias_css_preview').html(data['style']);
        }else{
          $('head').append('<div id="gavias_css_preview">' + data['style'] + '</div>');
        }
      },
      error: function (jqXHR, textStatus, errorThrown) {
        alert(textStatus + ":" + jqXHR.responseText);
      }
    });
  }

})(jQuery);

;
