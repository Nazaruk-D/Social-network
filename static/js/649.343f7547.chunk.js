/*! For license information please see 649.343f7547.chunk.js.LICENSE.txt */
(self.webpackChunksamurai_way=self.webpackChunksamurai_way||[]).push([[649],{6272:function(t,e,o){t.exports=o(166)},4872:function(t){"use strict";var e=!("undefined"===typeof window||!window.document||!window.document.createElement),o={canUseDOM:e,canUseWorkers:"undefined"!==typeof Worker,canUseEventListeners:e&&!(!window.addEventListener&&!window.attachEvent),canUseViewport:e&&!!window.screen,isInWorker:!e};t.exports=o},5811:function(t){var e,o,n,r,i,a,s,c,h,p,u,d,l,m,f,v=!1;function g(){if(!v){v=!0;var t=navigator.userAgent,g=/(?:MSIE.(\d+\.\d+))|(?:(?:Firefox|GranParadiso|Iceweasel).(\d+\.\d+))|(?:Opera(?:.+Version.|.)(\d+\.\d+))|(?:AppleWebKit.(\d+(?:\.\d+)?))|(?:Trident\/\d+\.\d+.*rv:(\d+\.\d+))/.exec(t),w=/(Mac OS X)|(Windows)|(Linux)/.exec(t);if(d=/\b(iPhone|iP[ao]d)/.exec(t),l=/\b(iP[ao]d)/.exec(t),p=/Android/i.exec(t),m=/FBAN\/\w+;/i.exec(t),f=/Mobile/i.exec(t),u=!!/Win64/.exec(t),g){(e=g[1]?parseFloat(g[1]):g[5]?parseFloat(g[5]):NaN)&&document&&document.documentMode&&(e=document.documentMode);var C=/(?:Trident\/(\d+.\d+))/.exec(t);a=C?parseFloat(C[1])+4:e,o=g[2]?parseFloat(g[2]):NaN,n=g[3]?parseFloat(g[3]):NaN,(r=g[4]?parseFloat(g[4]):NaN)?(g=/(?:Chrome\/(\d+\.\d+))/.exec(t),i=g&&g[1]?parseFloat(g[1]):NaN):i=NaN}else e=o=n=i=r=NaN;if(w){if(w[1]){var y=/(?:Mac OS X (\d+(?:[._]\d+)?))/.exec(t);s=!y||parseFloat(y[1].replace("_","."))}else s=!1;c=!!w[2],h=!!w[3]}else s=c=h=!1}}var w={ie:function(){return g()||e},ieCompatibilityMode:function(){return g()||a>e},ie64:function(){return w.ie()&&u},firefox:function(){return g()||o},opera:function(){return g()||n},webkit:function(){return g()||r},safari:function(){return w.webkit()},chrome:function(){return g()||i},windows:function(){return g()||c},osx:function(){return g()||s},linux:function(){return g()||h},iphone:function(){return g()||d},mobile:function(){return g()||d||l||p||f},nativeApp:function(){return g()||m},android:function(){return g()||p},ipad:function(){return g()||l}};t.exports=w},5780:function(t,e,o){"use strict";var n,r=o(4872);r.canUseDOM&&(n=document.implementation&&document.implementation.hasFeature&&!0!==document.implementation.hasFeature("","")),t.exports=function(t,e){if(!r.canUseDOM||e&&!("addEventListener"in document))return!1;var o="on"+t,i=o in document;if(!i){var a=document.createElement("div");a.setAttribute(o,"return;"),i="function"===typeof a[o]}return!i&&n&&"wheel"===t&&(i=document.implementation.hasFeature("Events.wheel","3.0")),i}},166:function(t,e,o){"use strict";var n=o(5811),r=o(5780);function i(t){var e=0,o=0,n=0,r=0;return"detail"in t&&(o=t.detail),"wheelDelta"in t&&(o=-t.wheelDelta/120),"wheelDeltaY"in t&&(o=-t.wheelDeltaY/120),"wheelDeltaX"in t&&(e=-t.wheelDeltaX/120),"axis"in t&&t.axis===t.HORIZONTAL_AXIS&&(e=o,o=0),n=10*e,r=10*o,"deltaY"in t&&(r=t.deltaY),"deltaX"in t&&(n=t.deltaX),(n||r)&&t.deltaMode&&(1==t.deltaMode?(n*=40,r*=40):(n*=800,r*=800)),n&&!e&&(e=n<1?-1:1),r&&!o&&(o=r<1?-1:1),{spinX:e,spinY:o,pixelX:n,pixelY:r}}i.getEventType=function(){return n.firefox()?"DOMMouseScroll":r("wheel")?"wheel":"mousewheel"},t.exports=i},7005:function(t,e,o){"use strict";o.d(e,{ZP:function(){return z}});var n=function(t,e){return n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])},n(t,e)};var r=function(){return r=Object.assign||function(t){for(var e,o=1,n=arguments.length;o<n;o++)for(var r in e=arguments[o])Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t},r.apply(this,arguments)};Object.create;Object.create;var i=o(2791),a=o(6272),s=o.n(a);function c(t,e,o,n,r,i){void 0===i&&(i=0);var a=C(t,e,i),s=a.width,c=a.height,h=Math.min(s,o),p=Math.min(c,n);return h>p*r?{width:p*r,height:p}:{width:h,height:h/r}}function h(t,e,o,n,r){void 0===r&&(r=0);var i=C(e.width,e.height,r),a=i.width,s=i.height;return{x:p(t.x,a,o.width,n),y:p(t.y,s,o.height,n)}}function p(t,e,o,n){var r=e*n/2-o/2;return y(t,-r,r)}function u(t,e){return Math.sqrt(Math.pow(t.y-e.y,2)+Math.pow(t.x-e.x,2))}function d(t,e){return 180*Math.atan2(e.y-t.y,e.x-t.x)/Math.PI}function l(t,e,o,n,i,a,s){void 0===a&&(a=0),void 0===s&&(s=!0);var c=s?m:f,h=C(e.width,e.height,a),p=C(e.naturalWidth,e.naturalHeight,a),u={x:c(100,((h.width-o.width/i)/2-t.x/i)/h.width*100),y:c(100,((h.height-o.height/i)/2-t.y/i)/h.height*100),width:c(100,o.width/h.width*100/i),height:c(100,o.height/h.height*100/i)},d=Math.round(c(p.width,u.width*p.width/100)),l=Math.round(c(p.height,u.height*p.height/100)),v=p.width>=p.height*n?{width:Math.round(l*n),height:l}:{width:d,height:Math.round(d/n)};return{croppedAreaPercentages:u,croppedAreaPixels:r(r({},v),{x:Math.round(c(p.width-v.width,u.x*p.width/100)),y:Math.round(c(p.height-v.height,u.y*p.height/100))})}}function m(t,e){return Math.min(t,Math.max(0,e))}function f(t,e){return e}function v(t,e,o,n,r,i){var a=C(e.width,e.height,o),s=y(n.width/a.width*(100/t.width),r,i);return{crop:{x:s*a.width/2-n.width/2-a.width*s*(t.x/100),y:s*a.height/2-n.height/2-a.height*s*(t.y/100)},zoom:s}}function g(t,e,o,n,r,i){void 0===o&&(o=0);var a=C(e.naturalWidth,e.naturalHeight,o),s=y(function(t,e,o){var n=function(t){return t.width>t.height?t.width/t.naturalWidth:t.height/t.naturalHeight}(e);return o.height>o.width?o.height/(t.height*n):o.width/(t.width*n)}(t,e,n),r,i),c=n.height>n.width?n.height/t.height:n.width/t.width;return{crop:{x:((a.width-t.width)/2-t.x)*c,y:((a.height-t.height)/2-t.y)*c},zoom:s}}function w(t,e){return{x:(e.x+t.x)/2,y:(e.y+t.y)/2}}function C(t,e,o){var n=o*Math.PI/180;return{width:Math.abs(Math.cos(n)*t)+Math.abs(Math.sin(n)*e),height:Math.abs(Math.sin(n)*t)+Math.abs(Math.cos(n)*e)}}function y(t,e,o){return Math.min(Math.max(t,e),o)}function S(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];return t.filter((function(t){return"string"===typeof t&&t.length>0})).join(" ").trim()}var x=function(t){function e(){var o=null!==t&&t.apply(this,arguments)||this;return o.imageRef=i.createRef(),o.videoRef=i.createRef(),o.containerRef=null,o.styleRef=null,o.containerRect=null,o.mediaSize={width:0,height:0,naturalWidth:0,naturalHeight:0},o.dragStartPosition={x:0,y:0},o.dragStartCrop={x:0,y:0},o.gestureZoomStart=0,o.gestureRotationStart=0,o.isTouching=!1,o.lastPinchDistance=0,o.lastPinchRotation=0,o.rafDragTimeout=null,o.rafPinchTimeout=null,o.wheelTimer=null,o.currentDoc=document,o.currentWindow=window,o.state={cropSize:null,hasWheelJustStarted:!1},o.preventZoomSafari=function(t){return t.preventDefault()},o.cleanEvents=function(){o.currentDoc.removeEventListener("mousemove",o.onMouseMove),o.currentDoc.removeEventListener("mouseup",o.onDragStopped),o.currentDoc.removeEventListener("touchmove",o.onTouchMove),o.currentDoc.removeEventListener("touchend",o.onDragStopped),o.currentDoc.removeEventListener("gesturemove",o.onGestureMove),o.currentDoc.removeEventListener("gestureend",o.onGestureEnd)},o.clearScrollEvent=function(){o.containerRef&&o.containerRef.removeEventListener("wheel",o.onWheel),o.wheelTimer&&clearTimeout(o.wheelTimer)},o.onMediaLoad=function(){var t=o.computeSizes();t&&(o.emitCropData(),o.setInitialCrop(t)),o.props.onMediaLoaded&&o.props.onMediaLoaded(o.mediaSize)},o.setInitialCrop=function(t){if(o.props.initialCroppedAreaPercentages){var e=v(o.props.initialCroppedAreaPercentages,o.mediaSize,o.props.rotation,t,o.props.minZoom,o.props.maxZoom),n=e.crop,r=e.zoom;o.props.onCropChange(n),o.props.onZoomChange&&o.props.onZoomChange(r)}else if(o.props.initialCroppedAreaPixels){var i=g(o.props.initialCroppedAreaPixels,o.mediaSize,o.props.rotation,t,o.props.minZoom,o.props.maxZoom);n=i.crop,r=i.zoom;o.props.onCropChange(n),o.props.onZoomChange&&o.props.onZoomChange(r)}},o.computeSizes=function(){var t,e,n,i,a,s,h=o.imageRef.current||o.videoRef.current;if(h&&o.containerRef){o.containerRect=o.containerRef.getBoundingClientRect();var p=o.containerRect.width/o.containerRect.height,u=(null===(t=o.imageRef.current)||void 0===t?void 0:t.naturalWidth)||(null===(e=o.videoRef.current)||void 0===e?void 0:e.videoWidth)||0,d=(null===(n=o.imageRef.current)||void 0===n?void 0:n.naturalHeight)||(null===(i=o.videoRef.current)||void 0===i?void 0:i.videoHeight)||0,l=u/d,m=void 0;if(h.offsetWidth<u||h.offsetHeight<d)switch(o.props.objectFit){default:case"contain":m=p>l?{width:o.containerRect.height*l,height:o.containerRect.height}:{width:o.containerRect.width,height:o.containerRect.width/l};break;case"horizontal-cover":m={width:o.containerRect.width,height:o.containerRect.width/l};break;case"vertical-cover":m={width:o.containerRect.height*l,height:o.containerRect.height};break;case"auto-cover":m=u>d?{width:o.containerRect.width,height:o.containerRect.width/l}:{width:o.containerRect.height*l,height:o.containerRect.height}}else m={width:h.offsetWidth,height:h.offsetHeight};o.mediaSize=r(r({},m),{naturalWidth:u,naturalHeight:d}),o.props.setMediaSize&&o.props.setMediaSize(o.mediaSize);var f=o.props.cropSize?o.props.cropSize:c(o.mediaSize.width,o.mediaSize.height,o.containerRect.width,o.containerRect.height,o.props.aspect,o.props.rotation);return(null===(a=o.state.cropSize)||void 0===a?void 0:a.height)===f.height&&(null===(s=o.state.cropSize)||void 0===s?void 0:s.width)===f.width||o.props.onCropSizeChange&&o.props.onCropSizeChange(f),o.setState({cropSize:f},o.recomputeCropPosition),o.props.setCropSize&&o.props.setCropSize(f),f}},o.onMouseDown=function(t){t.preventDefault(),o.currentDoc.addEventListener("mousemove",o.onMouseMove),o.currentDoc.addEventListener("mouseup",o.onDragStopped),o.onDragStart(e.getMousePoint(t))},o.onMouseMove=function(t){return o.onDrag(e.getMousePoint(t))},o.onTouchStart=function(t){o.isTouching=!0,o.props.onTouchRequest&&!o.props.onTouchRequest(t)||(o.currentDoc.addEventListener("touchmove",o.onTouchMove,{passive:!1}),o.currentDoc.addEventListener("touchend",o.onDragStopped),2===t.touches.length?o.onPinchStart(t):1===t.touches.length&&o.onDragStart(e.getTouchPoint(t.touches[0])))},o.onTouchMove=function(t){t.preventDefault(),2===t.touches.length?o.onPinchMove(t):1===t.touches.length&&o.onDrag(e.getTouchPoint(t.touches[0]))},o.onGestureStart=function(t){t.preventDefault(),o.currentDoc.addEventListener("gesturechange",o.onGestureMove),o.currentDoc.addEventListener("gestureend",o.onGestureEnd),o.gestureZoomStart=o.props.zoom,o.gestureRotationStart=o.props.rotation},o.onGestureMove=function(t){if(t.preventDefault(),!o.isTouching){var n=e.getMousePoint(t),r=o.gestureZoomStart-1+t.scale;if(o.setNewZoom(r,n,{shouldUpdatePosition:!0}),o.props.onRotationChange){var i=o.gestureRotationStart+t.rotation;o.props.onRotationChange(i)}}},o.onGestureEnd=function(t){o.cleanEvents()},o.onDragStart=function(t){var e,n,i=t.x,a=t.y;o.dragStartPosition={x:i,y:a},o.dragStartCrop=r({},o.props.crop),null===(n=(e=o.props).onInteractionStart)||void 0===n||n.call(e)},o.onDrag=function(t){var e=t.x,n=t.y;o.rafDragTimeout&&o.currentWindow.cancelAnimationFrame(o.rafDragTimeout),o.rafDragTimeout=o.currentWindow.requestAnimationFrame((function(){if(o.state.cropSize&&void 0!==e&&void 0!==n){var t=e-o.dragStartPosition.x,r=n-o.dragStartPosition.y,i={x:o.dragStartCrop.x+t,y:o.dragStartCrop.y+r},a=o.props.restrictPosition?h(i,o.mediaSize,o.state.cropSize,o.props.zoom,o.props.rotation):i;o.props.onCropChange(a)}}))},o.onDragStopped=function(){var t,e;o.isTouching=!1,o.cleanEvents(),o.emitCropData(),null===(e=(t=o.props).onInteractionEnd)||void 0===e||e.call(t)},o.onWheel=function(t){if(!o.props.onWheelRequest||o.props.onWheelRequest(t)){t.preventDefault();var n=e.getMousePoint(t),r=s()(t).pixelY,i=o.props.zoom-r*o.props.zoomSpeed/200;o.setNewZoom(i,n,{shouldUpdatePosition:!0}),o.state.hasWheelJustStarted||o.setState({hasWheelJustStarted:!0},(function(){var t,e;return null===(e=(t=o.props).onInteractionStart)||void 0===e?void 0:e.call(t)})),o.wheelTimer&&clearTimeout(o.wheelTimer),o.wheelTimer=o.currentWindow.setTimeout((function(){return o.setState({hasWheelJustStarted:!1},(function(){var t,e;return null===(e=(t=o.props).onInteractionEnd)||void 0===e?void 0:e.call(t)}))}),250)}},o.getPointOnContainer=function(t){var e=t.x,n=t.y;if(!o.containerRect)throw new Error("The Cropper is not mounted");return{x:o.containerRect.width/2-(e-o.containerRect.left),y:o.containerRect.height/2-(n-o.containerRect.top)}},o.getPointOnMedia=function(t){var e=t.x,n=t.y,r=o.props,i=r.crop,a=r.zoom;return{x:(e+i.x)/a,y:(n+i.y)/a}},o.setNewZoom=function(t,e,n){var r=(void 0===n?{}:n).shouldUpdatePosition,i=void 0===r||r;if(o.state.cropSize&&o.props.onZoomChange){var a=y(t,o.props.minZoom,o.props.maxZoom);if(i){var s=o.getPointOnContainer(e),c=o.getPointOnMedia(s),p={x:c.x*a-s.x,y:c.y*a-s.y},u=o.props.restrictPosition?h(p,o.mediaSize,o.state.cropSize,a,o.props.rotation):p;o.props.onCropChange(u)}o.props.onZoomChange(a)}},o.getCropData=function(){return o.state.cropSize?l(o.props.restrictPosition?h(o.props.crop,o.mediaSize,o.state.cropSize,o.props.zoom,o.props.rotation):o.props.crop,o.mediaSize,o.state.cropSize,o.getAspect(),o.props.zoom,o.props.rotation,o.props.restrictPosition):null},o.emitCropData=function(){var t=o.getCropData();if(t){var e=t.croppedAreaPercentages,n=t.croppedAreaPixels;o.props.onCropComplete&&o.props.onCropComplete(e,n),o.props.onCropAreaChange&&o.props.onCropAreaChange(e,n)}},o.emitCropAreaChange=function(){var t=o.getCropData();if(t){var e=t.croppedAreaPercentages,n=t.croppedAreaPixels;o.props.onCropAreaChange&&o.props.onCropAreaChange(e,n)}},o.recomputeCropPosition=function(){if(o.state.cropSize){var t=o.props.restrictPosition?h(o.props.crop,o.mediaSize,o.state.cropSize,o.props.zoom,o.props.rotation):o.props.crop;o.props.onCropChange(t),o.emitCropData()}},o}return function(t,e){function o(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}(e,t),e.prototype.componentDidMount=function(){this.containerRef&&(this.containerRef.ownerDocument&&(this.currentDoc=this.containerRef.ownerDocument),this.currentDoc.defaultView&&(this.currentWindow=this.currentDoc.defaultView),this.currentWindow.addEventListener("resize",this.computeSizes),this.props.zoomWithScroll&&this.containerRef.addEventListener("wheel",this.onWheel,{passive:!1}),this.containerRef.addEventListener("gesturestart",this.onGestureStart)),this.props.disableAutomaticStylesInjection||(this.styleRef=this.currentDoc.createElement("style"),this.styleRef.setAttribute("type","text/css"),this.props.nonce&&this.styleRef.setAttribute("nonce",this.props.nonce),this.styleRef.innerHTML=".reactEasyCrop_Container {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  overflow: hidden;\n  user-select: none;\n  touch-action: none;\n  cursor: move;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.reactEasyCrop_Image,\n.reactEasyCrop_Video {\n  will-change: transform; /* this improves performances and prevent painting issues on iOS Chrome */\n}\n\n.reactEasyCrop_Contain {\n  max-width: 100%;\n  max-height: 100%;\n  margin: auto;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n}\n.reactEasyCrop_Cover_Horizontal {\n  width: 100%;\n  height: auto;\n}\n.reactEasyCrop_Cover_Vertical {\n  width: auto;\n  height: 100%;\n}\n\n.reactEasyCrop_CropArea {\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  border: 1px solid rgba(255, 255, 255, 0.5);\n  box-sizing: border-box;\n  box-shadow: 0 0 0 9999em;\n  color: rgba(0, 0, 0, 0.5);\n  overflow: hidden;\n}\n\n.reactEasyCrop_CropAreaRound {\n  border-radius: 50%;\n}\n\n.reactEasyCrop_CropAreaGrid::before {\n  content: ' ';\n  box-sizing: border-box;\n  position: absolute;\n  border: 1px solid rgba(255, 255, 255, 0.5);\n  top: 0;\n  bottom: 0;\n  left: 33.33%;\n  right: 33.33%;\n  border-top: 0;\n  border-bottom: 0;\n}\n\n.reactEasyCrop_CropAreaGrid::after {\n  content: ' ';\n  box-sizing: border-box;\n  position: absolute;\n  border: 1px solid rgba(255, 255, 255, 0.5);\n  top: 33.33%;\n  bottom: 33.33%;\n  left: 0;\n  right: 0;\n  border-left: 0;\n  border-right: 0;\n}\n",this.currentDoc.head.appendChild(this.styleRef)),this.imageRef.current&&this.imageRef.current.complete&&this.onMediaLoad(),this.props.setImageRef&&this.props.setImageRef(this.imageRef),this.props.setVideoRef&&this.props.setVideoRef(this.videoRef)},e.prototype.componentWillUnmount=function(){var t;this.currentWindow.removeEventListener("resize",this.computeSizes),this.containerRef&&this.containerRef.removeEventListener("gesturestart",this.preventZoomSafari),this.styleRef&&(null===(t=this.styleRef.parentNode)||void 0===t||t.removeChild(this.styleRef)),this.cleanEvents(),this.props.zoomWithScroll&&this.clearScrollEvent()},e.prototype.componentDidUpdate=function(t){var e,o,n,r,i,a,s,c,h;t.rotation!==this.props.rotation?(this.computeSizes(),this.recomputeCropPosition()):t.aspect!==this.props.aspect?this.computeSizes():t.zoom!==this.props.zoom?this.recomputeCropPosition():(null===(e=t.cropSize)||void 0===e?void 0:e.height)!==(null===(o=this.props.cropSize)||void 0===o?void 0:o.height)||(null===(n=t.cropSize)||void 0===n?void 0:n.width)!==(null===(r=this.props.cropSize)||void 0===r?void 0:r.width)?this.computeSizes():(null===(i=t.crop)||void 0===i?void 0:i.x)===(null===(a=this.props.crop)||void 0===a?void 0:a.x)&&(null===(s=t.crop)||void 0===s?void 0:s.y)===(null===(c=this.props.crop)||void 0===c?void 0:c.y)||this.emitCropAreaChange(),t.zoomWithScroll!==this.props.zoomWithScroll&&this.containerRef&&(this.props.zoomWithScroll?this.containerRef.addEventListener("wheel",this.onWheel,{passive:!1}):this.clearScrollEvent()),t.video!==this.props.video&&(null===(h=this.videoRef.current)||void 0===h||h.load())},e.prototype.getAspect=function(){var t=this.props,e=t.cropSize,o=t.aspect;return e?e.width/e.height:o},e.prototype.onPinchStart=function(t){var o=e.getTouchPoint(t.touches[0]),n=e.getTouchPoint(t.touches[1]);this.lastPinchDistance=u(o,n),this.lastPinchRotation=d(o,n),this.onDragStart(w(o,n))},e.prototype.onPinchMove=function(t){var o=this,n=e.getTouchPoint(t.touches[0]),r=e.getTouchPoint(t.touches[1]),i=w(n,r);this.onDrag(i),this.rafPinchTimeout&&this.currentWindow.cancelAnimationFrame(this.rafPinchTimeout),this.rafPinchTimeout=this.currentWindow.requestAnimationFrame((function(){var t=u(n,r),e=o.props.zoom*(t/o.lastPinchDistance);o.setNewZoom(e,i,{shouldUpdatePosition:!1}),o.lastPinchDistance=t;var a=d(n,r),s=o.props.rotation+(a-o.lastPinchRotation);o.props.onRotationChange&&o.props.onRotationChange(s),o.lastPinchRotation=a}))},e.prototype.render=function(){var t=this,e=this.props,o=e.image,n=e.video,a=e.mediaProps,s=e.transform,c=e.crop,h=c.x,p=c.y,u=e.rotation,d=e.zoom,l=e.cropShape,m=e.showGrid,f=e.style,v=f.containerStyle,g=f.cropAreaStyle,w=f.mediaStyle,C=e.classes,y=C.containerClassName,x=C.cropAreaClassName,z=C.mediaClassName,R=e.objectFit;return i.createElement("div",{onMouseDown:this.onMouseDown,onTouchStart:this.onTouchStart,ref:function(e){return t.containerRef=e},"data-testid":"container",style:v,className:S("reactEasyCrop_Container",y)},o?i.createElement("img",r({alt:"",className:S("reactEasyCrop_Image","contain"===R&&"reactEasyCrop_Contain","horizontal-cover"===R&&"reactEasyCrop_Cover_Horizontal","vertical-cover"===R&&"reactEasyCrop_Cover_Vertical","auto-cover"===R&&(this.mediaSize.naturalWidth>this.mediaSize.naturalHeight?"reactEasyCrop_Cover_Horizontal":"reactEasyCrop_Cover_Vertical"),z)},a,{src:o,ref:this.imageRef,style:r(r({},w),{transform:s||"translate("+h+"px, "+p+"px) rotate("+u+"deg) scale("+d+")"}),onLoad:this.onMediaLoad})):n&&i.createElement("video",r({autoPlay:!0,loop:!0,muted:!0,className:S("reactEasyCrop_Video","contain"===R&&"reactEasyCrop_Contain","horizontal-cover"===R&&"reactEasyCrop_Cover_Horizontal","vertical-cover"===R&&"reactEasyCrop_Cover_Vertical","auto-cover"===R&&(this.mediaSize.naturalWidth>this.mediaSize.naturalHeight?"reactEasyCrop_Cover_Horizontal":"reactEasyCrop_Cover_Vertical"),z)},a,{ref:this.videoRef,onLoadedMetadata:this.onMediaLoad,style:r(r({},w),{transform:s||"translate("+h+"px, "+p+"px) rotate("+u+"deg) scale("+d+")"}),controls:!1}),(Array.isArray(n)?n:[{src:n}]).map((function(t){return i.createElement("source",r({key:t.src},t))}))),this.state.cropSize&&i.createElement("div",{style:r(r({},g),{width:this.state.cropSize.width,height:this.state.cropSize.height}),"data-testid":"cropper",className:S("reactEasyCrop_CropArea","round"===l&&"reactEasyCrop_CropAreaRound",m&&"reactEasyCrop_CropAreaGrid",x)}))},e.defaultProps={zoom:1,rotation:0,aspect:4/3,maxZoom:3,minZoom:1,cropShape:"rect",objectFit:"contain",showGrid:!0,style:{},classes:{},mediaProps:{},zoomSpeed:1,restrictPosition:!0,zoomWithScroll:!0},e.getMousePoint=function(t){return{x:Number(t.clientX),y:Number(t.clientY)}},e.getTouchPoint=function(t){return{x:Number(t.clientX),y:Number(t.clientY)}},e}(i.Component),z=x},7425:function(t,e,o){"use strict";o.d(e,{enh:function(){return r}});var n=o(9983);function r(t){return(0,n.w_)({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"g",attr:{},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"path",attr:{d:"M5 19h1.414l9.314-9.314-1.414-1.414L5 17.586V19zm16 2H3v-4.243L16.435 3.322a1 1 0 0 1 1.414 0l2.829 2.829a1 1 0 0 1 0 1.414L9.243 19H21v2zM15.728 6.858l1.414 1.414 1.414-1.414-1.414-1.414-1.414 1.414z"}}]}]})(t)}},5168:function(){}}]);
//# sourceMappingURL=649.343f7547.chunk.js.map