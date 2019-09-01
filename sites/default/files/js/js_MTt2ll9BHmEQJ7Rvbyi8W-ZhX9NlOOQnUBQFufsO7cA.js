/**
 * @file
 * Cherries by @toddmotto, @cferdinandi, @adamfschwartz, @daniellmb.
 */
!function(t,e){"use strict";"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?module.exports=e():t.dBlazy=e()}(this,function(){"use strict";var t={};return t.matches=function(t,e){var n=Element.prototype;return n.matches||(n.matches=n.matchesSelector||n.mozMatchesSelector||n.msMatchesSelector||n.oMatchesSelector||n.webkitMatchesSelector||function(t){for(var e=(window.document||window.ownerDocument).querySelectorAll(t),n=e.length;--n>=0&&e.item(n)!==this;);return n>-1}),!!t.matches(e)},t.closest=function(e,n){for(;e&&e!==document;e=e.parentNode)if(t.matches(e,n))return e;return null},t.extend=Object.assign||function(t){t=t||{};for(var e=1,n=arguments.length;e<n;e++)if(arguments[e])for(var r in arguments[e])arguments[e].hasOwnProperty(r)&&(t[r]=arguments[e][r]);return t},t.forEach=function(t,e,n){var r=Object.prototype;if("[object Object]"===r.toString.call(t))for(var o in t)r.hasOwnProperty.call(t,o)&&e.call(n,t[o],o,t);else for(var c=0,a=t.length;c<a;c++)e.call(n,t[c],c,t)},t.hasClass=function(t,e){return t.classList?t.classList.contains(e):-1!==t.className.indexOf(e)},t.on=function(e,n,r,o){e.addEventListener(n,function(e){for(var n=e.target;n&&n!==this;)t.matches(n,r)&&o.call(n,e),n=n.parentNode})},t.once=function(t){var e,n=!1;return function(){return n?e:(n=!0,e=t.apply(this,arguments),t=null,e)}},t.parse=function(t){try{return JSON.parse(t)}catch(t){return!1}},t.throttle=function(t,e,n){var r=0;return function(){var o=+new Date;o-r<e||(r=o,t.apply(n,arguments))}},t.resize=function(t,e){return window.onresize=function(){window.clearTimeout(e),e=window.setTimeout(t,200)},t},t.trigger=function(t,e,n){var r,o={detail:n||{},bubbles:!0,cancelable:!0};window.CustomEvent?r=new CustomEvent(e,o):(r=document.createEvent("CustomEvent"),r.initCustomEvent(e,!0,!0,o)),t.dispatchEvent(r)},t});
;
!function(o,t){"use strict";"function"==typeof define&&define.amd?define([window.dBlazy],t):"object"==typeof exports?module.exports=t(window.dBlazy):o.Bio=t(window.dBlazy)}(this,function(o){"use strict";function t(o){var t=this;t.options=i.extend({},t.defaults,o||{}),u=!1,d=!1,n(t)}function n(o){var t={rootMargin:o.options.rootMargin,threshold:o.options.threshold};o.options.selector=o.options.selector+":not(."+o.options.successClass+")",o.elms=(o.options.root||s).querySelectorAll(o.options.selector),o.count=o.elms.length,o.windowWidth=e.innerWidth||s.documentElement.clientWidth||s.body.clientWidth||e.screen.width,o.prepare(),o.observer=new IntersectionObserver(o.observing.bind(o),t),d||(o.observe(),d=!0)}var e=window,s=document,i=o,r=0,c=0,u=!1,d=!1,a=t.prototype;return a.constructor=t,a.count=0,a.counted=-1,a.erCounted=0,a._er=-1,a._ok=1,a.defaults={root:null,disconnect:!1,error:!1,success:!1,intersecting:!1,observing:!1,successClass:"b-loaded",selector:".b-lazy",errorClass:"b-error",bgClass:"b-bg",rootMargin:"0px",threshold:[0]},a.load=function(o){var t=this;t.isValid(o)?t.intersecting(o):i.forEach(o,function(o){t.isValid(o)&&t.intersecting(o)}),u||t.disconnect()},a.isLoaded=function(o){return o.classList.contains(this.options.successClass)},a.isValid=function(o){return"object"==typeof o&&void 0===o.length&&!this.isLoaded(o)},a.prepare=function(){},a.revalidate=function(o){var t=this;(t.count!==t.counted||!0===o)&&c<t.counted&&(u=!1,t.elms=(t.options.root||s).querySelectorAll(t.options.selector),t.observe(),c++)},a.intersecting=function(o){var t=this;"function"==typeof t.options.intersecting&&t.options.intersecting(o,t.options),i.trigger(o,"bio.intersecting",{options:t.options}),t.lazyLoad(o),t.counted++,u||t.observer.unobserve(o)},a.lazyLoad=function(o){},a.success=function(o,t,n){var e=this;"function"==typeof e.options.success&&e.options.success(o,t,n,e.options),e.erCounted>0&&e.erCounted--},a.error=function(o,t,n){var e=this;"function"==typeof e.options.error&&e.options.error(o,t,n,e.options),e.erCounted++},a.loaded=function(o,t,n){var e=this;e[t===e._ok?"success":"error"](o,t,n),o.classList.add(t===e._ok?e.options.successClass:e.options.errorClass)},a.equal=function(o,t){return o.nodeName.toLowerCase()===t},a.observe=function(){var o=this;r=o.elms.length,i.forEach(o.elms,function(t){o.isLoaded(t)||o.observer.observe(t)})},a.observing=function(o,t){var n=this;n.entries=o,u||(i.forEach(o,function(o){"function"==typeof n.options.observing&&n.options.observing(o,t,n.options),(o.isIntersecting||o.intersectionRatio>0)&&(n.isLoaded(o.target)||n.intersecting(o.target),r--)}),n.disconnect())},a.disconnect=function(o){var t=this;t.erCounted>0&&!o||((0===r||t.count===t.counted)&&t.options.disconnect||o)&&(t.observer.disconnect(),t.count=0,t.elms=null,u=!0)},a.destroy=function(o){var t=this;t.disconnect(o),t.observer=null},a.disconnected=function(){return u},a.reinit=function(){u=!1,d=!1,n(this)},t});
;
!function(t,e){"use strict";"function"==typeof define&&define.amd?define([window.dBlazy,window.Bio],e):"object"==typeof exports?module.exports=e(window.dBlazy,window.Bio):t.BioMedia=e(window.dBlazy,window.Bio)}(this,function(t,e){"use strict";function r(t){return i.apply(this,arguments)}var o=t,i=e,n="data-src",a=["src"],s=["srcset","src"],c=r.prototype=Object.create(e.prototype);return c.constructor=r,c.removeAttrs=function(t,e){o.forEach(e,function(e){t.removeAttribute("data-"+e)})},c.setAttrs=function(t,e){var r=this;o.forEach(e,function(e){r.setAttr(t,e)})},c.setAttr=function(t,e,r){if(t.hasAttribute("data-"+e)){var o=t.getAttribute("data-"+e);"src"===e?t.src=o:t.setAttribute(e,o),r&&t.removeAttribute("data-"+e)}},c.prepare=function(t){return function(){var e=this;if(e.options.breakpoints){var r=[];o.forEach(e.options.breakpoints,function(t){if(a.push(t.src.replace("data-","")),t.width>=e.windowWidth)return n=t.src,r.push(n),!1}),r.length>0&&(n=r[0])}return t.call(this)}}(c.prepare),c.lazyLoad=function(t){return function(e){if(!e.hasAttribute("data-bio-hit")){var r=this,i=e.parentNode,n=r.equal(e,"img"),a=void 0===e.src&&e.classList.contains(r.options.bgClass),s=i&&r.equal(i,"picture"),c=r.equal(e,"video");return s?(o.forEach(i.getElementsByTagName("source"),function(t){r.setAttr(t,"srcset",!0)}),r.setAttr(e,"src",!0),r.loaded(e,r._ok)):c?(o.forEach(e.getElementsByTagName("source"),function(t){r.setAttr(t,"src",!0)}),e.load(),r.loaded(e,r._ok)):n||a?r.setImage(e,a):e.getAttribute("data-src")&&e.hasAttribute("src")&&(r.setAttr(e,"src",!0),r.loaded(e,r._ok)),e.setAttribute("data-bio-hit",1),t.apply(this,arguments)}}}(c.lazyLoad),c.promise=function(t,e){var r=this;return new Promise(function(o,i){var a=new Image;a.src=t.getAttribute(e?n:"data-src"),t.hasAttribute("data-srcset")&&(a.srcset=t.getAttribute("data-srcset"));var c=function(){e?r.setBg(t):r.setAttrs(t,s)};a.onload=function(){c(),o(r._ok)},a.onerror=function(){c(),i(r._er)}})},c.setImage=function(t,e){var r=this;return r.promise(t,e).then(function(o){r.loaded(t,o),r.removeAttrs(t,e?a:s)}).catch(function(e){r.loaded(t,e)}).finally(function(){o.trigger(t,"bio.finally",{options:r.options})})},c.setBg=function(t){t.hasAttribute(n)&&(t.style.backgroundImage='url("'+t.getAttribute(n)+'")',t.removeAttribute("src"))},r});
;
!function(t,e,i,n,a){"use strict";function s(e){function s(t){var e=!!t.getAttribute("data-dimensions")&&i.parse(t.getAttribute("data-dimensions"));if(e){var n=Object.keys(e),a=n[0],s=n[n.length-1],l=function(t){return t>=r.windowWidth},o=n.filter(l).map(function(t){return e[t]}).shift();"undefined"===o&&(o=e[r.windowWidth>=s?s:a]),"undefined"!==o&&(t.style.paddingBottom=o+"%"),t.removeAttribute("data-ratio")}}function l(t){t.hasAttribute("style")||(t.style.paddingBottom=t.getAttribute("data-ratio")+"%"),t.removeAttribute("data-ratio")}var r=t.blazy,o=e.getAttribute("data-blazy"),c=o&&"1"!==o?i.parse(o):{},d=i.extend({},r.globals(),c),u=e.querySelectorAll("[data-dimensions]"),b=u.length>0,y=e.querySelectorAll("[data-ratio]"),g=y.length>0;r.options=d,r.init=r.run(d),i.resize(function(){r.windowWidth=n.innerWidth||a.documentElement.clientWidth||a.body.clientWidth||n.screen.width,b?i.forEach(u,s,e):g&&i.forEach(y,l,e),(r.isBlazy()||e.classList.contains("blazy--revalidate"))&&r.init.revalidate(!0)})(),e.classList.add("blazy--on")}t.blazy=t.blazy||{init:null,windowWidth:0,blazySettings:e.blazy||{},ioSettings:e.blazyIo||{},options:{},globals:function(){var t=this,e={success:t.clearing.bind(t),error:t.clearing.bind(t),selector:".b-lazy",errorClass:"b-error",successClass:"b-loaded"};return i.extend(t.blazySettings,t.ioSettings,e)},clearing:function(t){var e=this,a=t.classList.contains("b-responsive")&&t.hasAttribute("data-pfsrc");t.className=t.className.replace(/(\S+)loading/,"");var s=[i.closest(t,".is-loading"),i.closest(t,'[class*="loading"]')];i.forEach(s,function(t){null!==t&&(t.className=t.className.replace(/(\S+)loading/,""))}),n.picturefill&&a&&n.picturefill({reevaluate:!0,elements:[t]}),i.trigger(t,"blazy.done",{options:e.options})},isIo:function(){return this.ioSettings&&this.ioSettings.enabled&&"IntersectionObserver"in n},isBlazy:function(){return!this.isIo()&&"Blazy"in n},run:function(t){return this.isIo()?new BioMedia(t):new Blazy(t)}},t.behaviors.blazy={attach:function(e){var n=t.blazy;if(null===a.querySelector("[data-blazy]"))return n.options=n.globals(),void(n.init=n.run(n.globals()));var l=a.querySelectorAll(".blazy:not(.blazy--on)");i.once(i.forEach(l,s))}}}(Drupal,drupalSettings,dBlazy,this,this.document);
;
/**
 * @file
 * Attaches several event listener to a web page.
 */

(function ($, Drupal, drupalSettings) {

  /* eslint max-nested-callbacks: ["error", 4] */

  'use strict';

  Drupal.google_analytics = {};

  $(document).ready(function () {

    // Attach mousedown, keyup, touchstart events to document only and catch
    // clicks on all elements.
    $(document.body).on('mousedown keyup touchstart', function (event) {

      // Catch the closest surrounding link of a clicked element.
      $(event.target).closest('a,area').each(function () {

        // Is the clicked URL internal?
        if (Drupal.google_analytics.isInternal(this.href)) {
          // Skip 'click' tracking, if custom tracking events are bound.
          if ($(this).is('.colorbox') && (drupalSettings.google_analytics.trackColorbox)) {
            // Do nothing here. The custom event will handle all tracking.
            // console.info('Click on .colorbox item has been detected.');
          }
          // Is download tracking activated and the file extension configured
          // for download tracking?
          else if (drupalSettings.google_analytics.trackDownload && Drupal.google_analytics.isDownload(this.href)) {
            // Download link clicked.
            ga('send', {
              hitType: 'event',
              eventCategory: 'Downloads',
              eventAction: Drupal.google_analytics.getDownloadExtension(this.href).toUpperCase(),
              eventLabel: Drupal.google_analytics.getPageUrl(this.href),
              transport: 'beacon'
            });
          }
          else if (Drupal.google_analytics.isInternalSpecial(this.href)) {
            // Keep the internal URL for Google Analytics website overlay intact.
            ga('send', {
              hitType: 'pageview',
              page: Drupal.google_analytics.getPageUrl(this.href),
              transport: 'beacon'
            });
          }
        }
        else {
          if (drupalSettings.google_analytics.trackMailto && $(this).is("a[href^='mailto:'],area[href^='mailto:']")) {
            // Mailto link clicked.
            ga('send', {
              hitType: 'event',
              eventCategory: 'Mails',
              eventAction: 'Click',
              eventLabel: this.href.substring(7),
              transport: 'beacon'
            });
          }
          else if (drupalSettings.google_analytics.trackOutbound && this.href.match(/^\w+:\/\//i)) {
            if (drupalSettings.google_analytics.trackDomainMode !== 2 || (drupalSettings.google_analytics.trackDomainMode === 2 && !Drupal.google_analytics.isCrossDomain(this.hostname, drupalSettings.google_analytics.trackCrossDomains))) {
              // External link clicked / No top-level cross domain clicked.
              ga('send', {
                hitType: 'event',
                eventCategory: 'Outbound links',
                eventAction: 'Click',
                eventLabel: this.href,
                transport: 'beacon'
              });
            }
          }
        }
      });
    });

    // Track hash changes as unique pageviews, if this option has been enabled.
    if (drupalSettings.google_analytics.trackUrlFragments) {
      window.onhashchange = function () {
        ga('send', {
          hitType: 'pageview',
          page: location.pathname + location.search + location.hash
        });
      };
    }

    // Colorbox: This event triggers when the transition has completed and the
    // newly loaded content has been revealed.
    if (drupalSettings.google_analytics.trackColorbox) {
      $(document).on('cbox_complete', function () {
        var href = $.colorbox.element().attr('href');
        if (href) {
          ga('send', {
            hitType: 'pageview',
            page: Drupal.google_analytics.getPageUrl(href)
          });
        }
      });
    }

  });

  /**
   * Check whether the hostname is part of the cross domains or not.
   *
   * @param {string} hostname
   *   The hostname of the clicked URL.
   * @param {array} crossDomains
   *   All cross domain hostnames as JS array.
   *
   * @return {boolean} isCrossDomain
   */
  Drupal.google_analytics.isCrossDomain = function (hostname, crossDomains) {
    return $.inArray(hostname, crossDomains) > -1 ? true : false;
  };

  /**
   * Check whether this is a download URL or not.
   *
   * @param {string} url
   *   The web url to check.
   *
   * @return {boolean} isDownload
   */
  Drupal.google_analytics.isDownload = function (url) {
    var isDownload = new RegExp('\\.(' + drupalSettings.google_analytics.trackDownloadExtensions + ')([\?#].*)?$', 'i');
    return isDownload.test(url);
  };

  /**
   * Check whether this is an absolute internal URL or not.
   *
   * @param {string} url
   *   The web url to check.
   *
   * @return {boolean} isInternal
   */
  Drupal.google_analytics.isInternal = function (url) {
    var isInternal = new RegExp('^(https?):\/\/' + window.location.host, 'i');
    return isInternal.test(url);
  };

  /**
   * Check whether this is a special URL or not.
   *
   * URL types:
   *  - gotwo.module /go/* links.
   *
   * @param {string} url
   *   The web url to check.
   *
   * @return {boolean} isInternalSpecial
   */
  Drupal.google_analytics.isInternalSpecial = function (url) {
    var isInternalSpecial = new RegExp('(\/go\/.*)$', 'i');
    return isInternalSpecial.test(url);
  };

  /**
   * Extract the relative internal URL from an absolute internal URL.
   *
   * Examples:
   * - https://mydomain.com/node/1 -> /node/1
   * - https://example.com/foo/bar -> https://example.com/foo/bar
   *
   * @param {string} url
   *   The web url to check.
   *
   * @return {string} getPageUrl
   *   Internal website URL.
   */
  Drupal.google_analytics.getPageUrl = function (url) {
    var extractInternalUrl = new RegExp('^(https?):\/\/' + window.location.host, 'i');
    return url.replace(extractInternalUrl, '');
  };

  /**
   * Extract the download file extension from the URL.
   *
   * @param {string} url
   *   The web url to check.
   *
   * @return {string} getDownloadExtension
   *   The file extension of the passed url. e.g. 'zip', 'txt'
   */
  Drupal.google_analytics.getDownloadExtension = function (url) {
    var extractDownloadextension = new RegExp('\\.(' + drupalSettings.google_analytics.trackDownloadExtensions + ')([\?#].*)?$', 'i');
    var extension = extractDownloadextension.exec(url);
    return (extension === null) ? '' : extension[1];
  };

})(jQuery, Drupal, drupalSettings);
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
