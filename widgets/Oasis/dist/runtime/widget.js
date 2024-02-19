System.register(["jimu-core","jimu-arcgis","esri/geometry/Point","esri/geometry/Polygon","esri/geometry/Polyline","esri/widgets/Sketch","esri/layers/GraphicsLayer","esri/Graphic","esri/widgets/LayerList","esri/core/reactiveUtils","esri/rest/support/Query","esri/geometry/geometryEngine","esri/geometry/SpatialReference.js","esri/geometry/projection.js","esri/layers/FeatureLayer.js","esri/views/interactive/snapping/FeatureSnappingLayerSource.js"],(function(e,t){var o={},n={},r={},s={},i={},a={},l={},d={},u={},m={},c={},f={},_={},h={},p={},g={};return{setters:[function(e){o.React=e.React},function(e){n.JimuMapViewComponent=e.JimuMapViewComponent},function(e){r.default=e.default},function(e){s.default=e.default},function(e){i.default=e.default},function(e){a.default=e.default},function(e){l.default=e.default},function(e){d.default=e.default},function(e){u.default=e.default},function(e){m.default=e.default},function(e){c.default=e.default},function(e){f.default=e.default},function(e){_.default=e.default},function(e){h.default=e.default},function(e){p.default=e.default},function(e){g.default=e.default}],execute:function(){e((()=>{var e={423:(e,t,o)=>{"use strict";o.d(t,{Z:()=>a});var n=o(81),r=o.n(n),s=o(645),i=o.n(s)()(r());i.push([e.id,".spinner{width:32px;height:32px;border:8px solid;border-color:#3d5af1 transparent #3d5af1 transparent;border-radius:50%;animation:spin-anim 1.2s linear infinite;display:inline-block}@keyframes spin-anim{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}#pageoverlay{opacity:0.5;visibility:hidden;width:100%;height:100%;z-index:99999;top:0;left:0;position:fixed;cursor:wait;background-color:black;font-size:x-large}#pageoverlay-content{color:white;position:relative;width:50%;top:50%;left:50%;-moz-transform:translateX(-50%) translateY(-50%);-webkit-transform:translateX(-50%) translateY(-50%);transform:translateX(-50%) translateY(-50%);text-align:center}\n",""]);const a=i},645:e=>{"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var o="",n=void 0!==t[5];return t[4]&&(o+="@supports (".concat(t[4],") {")),t[2]&&(o+="@media ".concat(t[2]," {")),n&&(o+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),o+=e(t),n&&(o+="}"),t[2]&&(o+="}"),t[4]&&(o+="}"),o})).join("")},t.i=function(e,o,n,r,s){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(n)for(var a=0;a<this.length;a++){var l=this[a][0];null!=l&&(i[l]=!0)}for(var d=0;d<e.length;d++){var u=[].concat(e[d]);n&&i[u[0]]||(void 0!==s&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=s),o&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=o):u[2]=o),r&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=r):u[4]="".concat(r)),t.push(u))}},t}},81:e=>{"use strict";e.exports=function(e){return e[1]}},379:e=>{"use strict";var t=[];function o(e){for(var o=-1,n=0;n<t.length;n++)if(t[n].identifier===e){o=n;break}return o}function n(e,n){for(var s={},i=[],a=0;a<e.length;a++){var l=e[a],d=n.base?l[0]+n.base:l[0],u=s[d]||0,m="".concat(d," ").concat(u);s[d]=u+1;var c=o(m),f={css:l[1],media:l[2],sourceMap:l[3],supports:l[4],layer:l[5]};if(-1!==c)t[c].references++,t[c].updater(f);else{var _=r(f,n);n.byIndex=a,t.splice(a,0,{identifier:m,updater:_,references:1})}i.push(m)}return i}function r(e,t){var o=t.domAPI(t);return o.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;o.update(e=t)}else o.remove()}}e.exports=function(e,r){var s=n(e=e||[],r=r||{});return function(e){e=e||[];for(var i=0;i<s.length;i++){var a=o(s[i]);t[a].references--}for(var l=n(e,r),d=0;d<s.length;d++){var u=o(s[d]);0===t[u].references&&(t[u].updater(),t.splice(u,1))}s=l}}},569:e=>{"use strict";var t={};e.exports=function(e,o){var n=function(e){if(void 0===t[e]){var o=document.querySelector(e);if(window.HTMLIFrameElement&&o instanceof window.HTMLIFrameElement)try{o=o.contentDocument.head}catch(e){o=null}t[e]=o}return t[e]}(e);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");n.appendChild(o)}},216:e=>{"use strict";e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,o)=>{"use strict";e.exports=function(e){var t=o.nc;t&&e.setAttribute("nonce",t)}},795:e=>{"use strict";e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(o){!function(e,t,o){var n="";o.supports&&(n+="@supports (".concat(o.supports,") {")),o.media&&(n+="@media ".concat(o.media," {"));var r=void 0!==o.layer;r&&(n+="@layer".concat(o.layer.length>0?" ".concat(o.layer):""," {")),n+=o.css,r&&(n+="}"),o.media&&(n+="}"),o.supports&&(n+="}");var s=o.sourceMap;s&&"undefined"!=typeof btoa&&(n+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(s))))," */")),t.styleTagTransform(n,e,t.options)}(t,e,o)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{"use strict";e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}},129:e=>{"use strict";e.exports=d},135:e=>{"use strict";e.exports=m},294:e=>{"use strict";e.exports=r},19:e=>{"use strict";e.exports=s},920:e=>{"use strict";e.exports=i},693:e=>{"use strict";e.exports=_},942:e=>{"use strict";e.exports=f},422:e=>{"use strict";e.exports=h},49:e=>{"use strict";e.exports=p},231:e=>{"use strict";e.exports=l},902:e=>{"use strict";e.exports=c},43:e=>{"use strict";e.exports=g},447:e=>{"use strict";e.exports=u},560:e=>{"use strict";e.exports=a},826:e=>{"use strict";e.exports=n},891:e=>{"use strict";e.exports=o}},t={};function v(o){var n=t[o];if(void 0!==n)return n.exports;var r=t[o]={id:o,exports:{}};return e[o](r,r.exports,v),r.exports}v.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return v.d(t,{a:t}),t},v.d=(e,t)=>{for(var o in t)v.o(t,o)&&!v.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},v.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),v.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},v.p="",v.nc=void 0;var y={};return v.p=window.jimuConfig.baseUrl,(()=>{"use strict";v.r(y),v.d(y,{__set_webpack_public_path__:()=>ne,default:()=>oe,info:()=>te,info1:()=>ee});var e=v(891),t=v(826),o=v(294),n=v(19),r=v(920),s=v(560),i=v(231),a=v(129),l=v(447),d=v(135),u=v(902),m=v(942),c=v(693),f=v(422),_=v(49),h=v(43);function p(e,t,o){let n=0,r=e.length-1;for(;n<=r;){let s=n+r>>1,i=o(e[s],t);if(i<0)n=s+1;else{if(!(i>0))return s;r=s-1}}return-(n+1)}function g(e,t){return t>e?-1:e>t?1:0}function b(e,t){if(t>e){if(t-e>1e-6)return-1}else if(e-t>1e-6)return 1;return 0}class M{m_dX;m_dY;static SAMEPOINTCMP(e,t){let o=b(e.m_dX,t.m_dX);return 0==o&&(o=b(e.m_dY,t.m_dY)),o}setCoords(e,t){this.m_dX=e,this.m_dY=t}}class w extends M{m_oRefs=[];m_nMasterIndex=-1;m_bIntersection=!1;m_oPrev=null;m_oEdgeToDest=null;m_bProcessed=!1;m_dDist=Number.MAX_VALUE;static DIJKSTRACOMP(e,t){return e.m_dDist>t.m_dDist?-1:e.m_dDist<t.m_dDist?1:e.m_nMasterIndex-t.m_nMasterIndex}addRef(e){if(0===this.m_oRefs.length)this.m_oRefs.push(e);else{let t=!0;for(let o of this.m_oRefs.values())if(o===e){t=!1;break}t&&this.m_oRefs.push(e)}}removeRef(e){let t=this.m_oRefs.length;for(;t-- >0;)this.m_oRefs[t]==e&&this.m_oRefs.splice(t,1)}}class P extends w{m_oGraphPoint=null;m_bAssociated=!1}class G{m_oGeo=[];m_dDist=Number.NaN;m_bKeep=!0;m_oCurrentHashes=[];m_oHashIndices={};m_dBB=[Number.MAX_VALUE,Number.MAX_VALUE,-Number.MAX_VALUE,-Number.MAX_VALUE];m_nPos=-1;m_dPricePerFt;m_dCost;m_nAddressCount=0;static NULLEDGE=new G;getHashes(){this.m_oCurrentHashes=[],this.m_dBB[0]=Number.MAX_VALUE,this.m_dBB[1]=Number.MAX_VALUE,this.m_dBB[2]=-Number.MAX_VALUE,this.m_dBB[3]=-Number.MAX_VALUE;for(let e of this.m_oGeo.values()){e.m_dX<this.m_dBB[0]&&(this.m_dBB[0]=e.m_dX),e.m_dY<this.m_dBB[1]&&(this.m_dBB[1]=e.m_dY),e.m_dX>this.m_dBB[2]&&(this.m_dBB[2]=e.m_dX),e.m_dY>this.m_dBB[3]&&(this.m_dBB[3]=e.m_dY);let t=X(e.m_dX,e.m_dY),o=p(this.m_oCurrentHashes,t,g);o<0&&this.m_oCurrentHashes.splice(~o,0,t)}}calcDist(){let e=0;for(let t=0;t<this.m_oGeo.length-1;){let o=this.m_oGeo[t++],n=this.m_oGeo[t];e+=Y(o.m_dX,o.m_dY,n.m_dX,n.m_dY)}this.m_dDist=e}}class N{m_oPoints=[];m_oNodes=[];m_oEdges=[]}class I{m_dU=Number.NaN;m_dV=Number.NaN;m_dDist=Number.MAX_VALUE;m_dXInt=Number.NaN;m_dYInt=Number.NaN;m_nIndex=-1;static NULLSNAP=new I;setValues(e,t,o,n,r){this.m_dU=e,this.m_dV=t,this.m_dDist=o,this.m_dXInt=n,this.m_dYInt=r}}const E=365221,x=Math.PI/180,R=2*Math.PI;function X(e,t){return 65536*Math.floor(100*e)+Math.floor(100*t)}function L(e,t,o,n,r,s){let i=X(e,t);s.hasOwnProperty(i)||(s[i]=new N);let a=s[i];n.setCoords(e,t),n.m_dX=e,n.m_dY=t;let l=p(a.m_oPoints,n,w.SAMEPOINTCMP);if(l<0){let o=new w;o.setCoords(e,t),l=~l,a.m_oPoints.splice(l,0,o),o.m_nMasterIndex=r.length,r.push(o)}let d=a.m_oPoints[l];d.addRef(o),o.m_oGeo.push(d)}function B(e,t,o){let n=[];switch(o){case 0:{let o=t.m_oGeo.length;for(;o-- >1;)n.push(t.m_oGeo[o]);for(let t of e.m_oGeo.values())n.push(e.m_oGeo[o]);break}case 1:for(let e=0;e<t.m_oGeo.length-1;e++)n.push(t.m_oGeo[e]);for(let t=0;t<e.m_oGeo.length;t++)n.push(e.m_oGeo[t]);break;case 2:for(let t=0;t<e.m_oGeo.length-1;t++)n.push(e.m_oGeo[t]);for(let e=0;e<t.m_oGeo.length;e++)n.push(t.m_oGeo[e]);break;case 3:{for(let t=0;t<e.m_oGeo.length;t++)n.push(e.m_oGeo[t]);let o=t.m_oGeo.length-1;for(;o-- >0;)n.push(t.m_oGeo[o]);break}default:return}for(let o of t.m_oGeo.values())o.addRef(e),o.removeRef(t);t.m_bKeep=!1,e.m_oGeo=n}function A(e){return e*x}function C(e,t,o,n,r,s,i){let a,l=[];for(let t=o.m_dX-.01;t<o.m_dX+.02;t+=.01)for(let n=o.m_dY-.01;n<o.m_dY+.02;n+=.01)if(a=X(t,n),e.hasOwnProperty(a))for(let t of e[a].m_oEdges.values())l.push(t);let d=I.NULLSNAP,u=null;for(let e of l.values()){if(0===e.m_oGeo.length)continue;let t=(m=n,c=e.m_dBB[1],m/function(e){return Math.cos(A(e))*E}(c));if(o.m_dX<e.m_dBB[0]-t||o.m_dX>e.m_dBB[2]+t||o.m_dY<e.m_dBB[1]-r||o.m_dY>e.m_dBB[3]+r)continue;let s=S(e.m_oGeo,o.m_dX,o.m_dY);Number.isNaN(s.m_dXInt)||s.m_dDist<n&&s.m_dDist<d.m_dDist&&(d=s,u=e)}var m,c;if(null==u||Number.isNaN(d.m_dXInt))return;let f=u.m_oGeo[d.m_nIndex],_=u.m_oGeo[d.m_nIndex+1],h=function(e,t,o,n){let r=A(e),s=A(t),i=A(o),a=A(n),l=Math.sin(i-r)*Math.cos(a),d=Math.cos(s)*Math.sin(a)-Math.sin(s)*Math.cos(a)*Math.cos(i-r),u=Math.atan2(l,d);return u<0&&(u+=R),R-u+Math.PI/2}(f.m_dX,f.m_dY,_.m_dX,_.m_dY);!function(e,t,o,n,r){let s=Math.PI/2-o;s<0&&(s+=R);let i=n/6371,a=t*x,l=e*x,d=Math.asin(Math.sin(a)*Math.cos(i)+Math.cos(a)*Math.sin(i)*Math.cos(s)),u=l+Math.atan2(Math.sin(s)*Math.sin(i)*Math.cos(a),Math.cos(i)-Math.sin(a)*Math.sin(d));r[0]=180*u/Math.PI,r[1]=180*d/Math.PI}(f.m_dX,f.m_dY,h,Y(f.m_dX,f.m_dY,d.m_dXInt,d.m_dYInt)/1e3,s);let v=new G;v.m_dPricePerFt=u.m_dPricePerFt,L(s[0],s[1],v,i,t,e);let y=v.m_oGeo[0];if(o.m_oGraphPoint=y,0==M.SAMEPOINTCMP(y,u.m_oGeo[0])||0==M.SAMEPOINTCMP(y,u.m_oGeo[u.m_oGeo.length-1]))return void y.removeRef(v);let b=d.m_nIndex+1;for(;b<u.m_oGeo.length;){let e=u.m_oGeo[b++];e.removeRef(u),e.addRef(v),v.m_oGeo.push(e)}for(b=u.m_oGeo.length;--b>d.m_nIndex;)u.m_oGeo[b].removeRef(u),u.m_oGeo.splice(b,1);v.m_oGeo[0].addRef(u),u.m_oGeo.push(v.m_oGeo[0]),u.getHashes();for(let[t,o]of Object.entries(u.m_oHashIndices))p(u.m_oCurrentHashes,t,g)<0&&(e[t].m_oEdges[o]=G.NULLEDGE);v.getHashes();for(let t of v.m_oCurrentHashes){e.hasOwnProperty(t)||(e[t]=new N);let o=e[t];v.m_oHashIndices[t]=o.m_oEdges.length,o.m_oEdges.push(v)}}function S(e,t,o){let n=I.NULLSNAP,r=!1;for(let s=0;s<e.length-1;s++){let i=e[s],a=e[s+1],l=T(t,o,i.m_dX,i.m_dY,a.m_dX,a.m_dY);if(Number.isNaN(l.m_dXInt))continue;if(l.m_nIndex=s,l.m_dU>=0&&l.m_dU<l.m_dV&&(r?l.m_dDist<n.m_dDist&&(n=l):(n=l,r=!0)),r)continue;let d=Y(i.m_dX,i.m_dY,t,o),u=Y(a.m_dX,a.m_dY,t,o);l.m_dDist=d<u?d:u,l.m_dDist<n.m_dDist&&(n=l)}if(r)return n;if(!Number.isNaN(n.m_dXInt)){let r;if(r=n.m_dU>0?n.m_dU-n.m_dV:-n.m_dU,!(r<3*n.m_dV))return I.NULLSNAP;{let r=e[n.m_nIndex],s=e[n.m_nIndex+1];Y(r.m_dX,r.m_dY,t,o)<Y(s.m_dX,s.m_dY,t,o)?(n.m_dXInt=r.m_dX,n.m_dYInt=r.m_dY):(n.m_dXInt=s.m_dX,n.m_dYInt=s.m_dY)}}return n}function T(e,t,o,n,r,s){let i=r-o,a=s-n,l=e-o,d=t-n;if(0==i&&0==a)return I.NULLSNAP;let u=l*i+d*a,m=i*i+a*a,c=o+u*i/m,f=n+u*a/m,_=new I;return _.setValues(u,m,Y(e,t,c,f),c,f),_}function Y(e,t,o,n){let r=(o-e)*x,s=(n-t)*x,i=Math.sin(s/2),a=Math.sin(r/2),l=i*i+Math.cos(t*x)*Math.cos(n*x)*a*a;return 12742e3*Math.asin(Math.sqrt(l))}var D=v(379),U=v.n(D),O=v(795),V=v.n(O),j=v(569),H=v.n(j),F=v(565),k=v.n(F),W=v(216),K=v.n(W),$=v(589),J=v.n($),Z=v(423),q={};q.styleTagTransform=J(),q.setAttributes=k(),q.insert=H().bind(null,"head"),q.domAPI=V(),q.insertStyleElement=K(),U()(Z.Z,q),Z.Z&&Z.Z.locals&&Z.Z.locals;var z=function(e,t,o,n){return new(o||(o=Promise))((function(r,s){function i(e){try{l(n.next(e))}catch(e){s(e)}}function a(e){try{l(n.throw(e))}catch(e){s(e)}}function l(e){var t;e.done?r(e.value):(t=e.value,t instanceof o?t:new o((function(e){e(t)}))).then(i,a)}l((n=n.apply(e,t||[])).next())}))};const{useState:Q}=e.React;function ee(e){document.getElementById("info").innerHTML=e}function te(e){setTimeout((()=>document.getElementById("pageoverlay-content").innerText=e),10)}const oe=g=>{var v;const[y,b]=Q(),[I,x]=Q(),[R,X]=Q(),[A,S]=Q(),[T,Y]=Q(),[D,U]=Q(""),[O,V]=Q("");let j=[],H=["Cost_FT"];return e.React.createElement("div",{className:"widget-starter jimu-widget"},g.useMapWidgetIds&&1===g.useMapWidgetIds.length&&e.React.createElement(t.JimuMapViewComponent,{useMapWidgetId:null===(v=g.useMapWidgetIds)||void 0===v?void 0:v[0],onActiveViewChange:e=>{if(e){let t=document.createElement("div");t.id="pageoverlay",t.innerHTML="<p id=pageoverlay-content></p>",document.body.appendChild(t),b(e);let o=new i.default({title:"Sketch Widget",id:"mySketch"});e.view.map.add(o),X(o);let n=new s.default({layer:o,view:e.view,creationMode:"single",container:"sketch-container",snappingOptions:{enabled:!0,featureEnabled:!0}});n.visibleElements={createTools:{circle:!1,polyline:!1,rectangle:!1},duplicateButton:!1,selectionTools:{"rectangle-selection":!1,"lasso-selection":!1},settingsMenu:!1},n.on("create",(function(e){return z(this,void 0,void 0,(function*(){"complete"===e.state&&("polygon"===e.tool?S(e.graphic.geometry):"point"===e.tool&&Y(e.graphic.geometry))}))})),x(n),e.whenAllJimuLayerViewLoaded().then((()=>z(void 0,void 0,void 0,(function*(){let t='<option value="nothing_selected"></option>';for(let o of e.view.allLayerViews){if("World Hillshade"===o.layer.title||"World Topographic Map"===o.layer.title||"Sketch Widget"===o.layer.title)continue;t+=`<option value=${o.layer.id}>${o.layer.title}</option>`;const r=yield e.view.whenLayerView(e.view.map.findLayerById(o.layer.id));n.snappingOptions.featureSources.add(new h.default({layer:r.layer,enabled:!0}))}document.getElementById("select-address").innerHTML=t,document.getElementById("select-road").innerHTML=t,document.getElementById("loading-widget-ui").remove(),document.getElementById("main-widget-ui").style.visibility="visible"}))));let r=new l.default({view:e.view,visible:!0});e.view.ui.add(r,"top-right")}}}),e.React.createElement("div",{id:"loading-widget-ui"},"Loading widget... ",e.React.createElement("div",{className:"spinner"})),e.React.createElement("div",{id:"main-widget-ui",style:{visibility:"hidden"}},e.React.createElement("label",null,"Select Address Layer",e.React.createElement("select",{id:"select-address",value:D,onChange:e=>U(e.target.value)})),e.React.createElement("label",null,"Select Road Layer",e.React.createElement("select",{id:"select-road",value:O,onChange:e=>V(e.target.value)})),e.React.createElement("div",{id:"sketch-container"}),e.React.createElement("div",{id:"info"}),e.React.createElement("button",{onClick:function(){return z(this,void 0,void 0,(function*(){document.getElementById("pageoverlay").style.visibility="visible";try{te("start");let e=f.default.load();te("loaded");let t=new u.default;t.spatialRelationship="intersects",t.outFields=j,t.geometry=A,t.returnGeometry=!0;const s=yield y.view.whenLayerView(y.view.map.findLayerById(D));let i=new _.default({url:s.layer.url});i.outFields=j,yield d.default.whenOnce((()=>!s.updating));const l=i.queryFeatures(t),h=yield l;let g=T.x,v=T.y,b=T.x,x=T.y;for(let e of A.rings[0].values())e[0]<g&&(g=e[0]),e[1]<v&&(v=e[1]),e[0]>b&&(b=e[0]),e[1]>x&&(x=e[1]);let R=m.default.buffer(new n.default({rings:[[[g,v],[g,x],[b,x],[b,v],[g,v]]],spatialReference:A.spatialReference}),2,"kilometers"),X=new u.default;X.outFields=H,X.spatialRelationship="intersects",X.geometry=R,X.returnGeometry=!0;const S=yield y.view.whenLayerView(y.view.map.findLayerById(O));let Y=new _.default({url:S.layer.url});Y.outFields=H,yield d.default.whenOnce((()=>!S.updating));const U=Y.queryFeatures(X),V=yield U;let F=[];for(let e of V.features.values())m.default.disjoint(R,e.geometry)||F.push(e);te(`Points: ${h.features.length}<br/>Lines: ${F.length}`),yield e;let k=function(e,t,o,n,r,s){G.NULLEDGE.m_bKeep=!1;let i={},a=[],l=[],d=new w,u=[];te("projecting points");for(let t of e.features.values()){let e=n.project(t.geometry,s),o=new P;o.setCoords(e.longitude,e.latitude),u.push(o)}{let e=n.project(o,s),t=new P;t.setCoords(e.longitude,e.latitude),u.push(t)}te("projecting roads");for(let e of t.values()){let t=n.project(e.geometry,s);for(let o of t.paths.values()){let t=new G;t.m_dPricePerFt=e.attributes.Cost_FT;for(let e of o.values())L(e[0],e[1],t,d,a,i);l.push(t)}}te("split"),l=function(e){let t=[],o=e.length;for(let n=0;n<o;n++){let o=e[n],r=!1,s=new G;s.m_oGeo.push(o.m_oGeo[0]);let i=o.m_oGeo.length-1;for(let e=1;e<i;e++){let n=o.m_oGeo[e];if(s.m_oGeo.push(n),1!==n.m_oRefs.length){s.m_dPricePerFt=o.m_dPricePerFt,t.push(s);for(let e=0;e<s.m_oGeo.length;e++){let t=s.m_oGeo[e];t.addRef(s),t.removeRef(o)}r=!0,s=new G,s.m_oGeo.push(n)}}if(r){s.m_oGeo.push(o.m_oGeo[o.m_oGeo.length-1]),s.m_dPricePerFt=o.m_dPricePerFt,t.push(s);for(let e=0;e<s.m_oGeo.length;e++){let t=s.m_oGeo[e];t.addRef(s),t.removeRef(o)}}else t.push(o)}return t}(l),te("merge"),l=function(e){let t=[],o=e.length;for(let t=0;t<o;t++){let o=e[t];if(!o.m_bKeep)continue;let n=o.m_oGeo[0],r=o.m_oGeo[o.m_oGeo.length-1],s=-1,i=-1;if(2==n.m_oRefs.length){let e=n.m_oRefs[0];o===e&&(e=n.m_oRefs[1]);let t=e.m_oGeo[0],r=e.m_oGeo[e.m_oGeo.length-1];0==M.SAMEPOINTCMP(n,t)?s=0:0==M.SAMEPOINTCMP(n,r)&&(s=1),s>=0&&B(o,e,s)}if(2===r.m_oRefs.length){let e=r.m_oRefs[0];o===e&&(e=r.m_oRefs[1]);let t=e.m_oGeo[0],n=e.m_oGeo[e.m_oGeo.length-1];0==M.SAMEPOINTCMP(r,t)?i=2:0==M.SAMEPOINTCMP(r,n)&&(i=3),i>=0&&B(o,e,i)}}for(let o of e.values())o.m_bKeep&&t.push(o);return t}(l),te("setting intersections");let m=[null,null];for(let e of l.values()){e.m_bKeep=!0,e.getHashes(),m[0]=e.m_oGeo[0],m[1]=e.m_oGeo[e.m_oGeo.length-1];for(let e of m.values())e.m_bIntersection=!0;for(let t of e.m_oCurrentHashes.values()){i.hasOwnProperty(t)||(i[t]=new N);let o=i[t];e.m_oHashIndices[t]=o.m_oEdges.length,o.m_oEdges.push(e)}}te("service points"),l=function(e,t,o,n,r){let s=1936.0000000000002/E,i=[Number.NaN,Number.NaN];for(let n of e.values())C(t,o,n,1760,s,i,r);let a=[];for(let e of Object.values(t))for(let t of e.m_oEdges.values())t.m_bKeep&&(t.m_nPos=a.length,a.push(t),t.m_bKeep=!1);return a}(u,i,a,0,d),te("distances");for(let e of l.values())e.calcDist(),e.m_dDist*=3.280839895,e.m_dCost=e.m_dDist*e.m_dPricePerFt;let c=u[u.length-1];return u.splice(u.length-1,1),{edges:l,hashes:i,nodes:a,routeTo:c,servicePoints:u}}(h,F,T,f.default,m.default,c.default.WGS84);if(null===k)return;te(`New lines: ${k.edges.length}`),function(e){let t=[];for(e.m_oPrev=e,e.m_dDist=0,t.push(e);t.length>0;){let e=t[t.length-1];t.splice(t.length-1,1);for(let o of e.m_oRefs.values()){let n=o.m_oGeo[0];if(n===e&&(n=o.m_oGeo[o.m_oGeo.length-1]),n.m_bProcessed)continue;let r=e.m_dDist+o.m_dCost;r<n.m_dDist&&(n.m_dDist=r,n.m_oPrev=e,n.m_oEdgeToDest=o);let s=p(t,n,w.DIJKSTRACOMP);s<0&&t.splice(~s,0,n)}e.m_bProcessed=!0}}(k.routeTo.m_oGraphPoint);let W=0,K=0,$=0;for(let e of k.nodes.values())e.m_bIntersection&&null===e.m_oPrev&&(++K,I.layer.add(new a.default({geometry:new o.default({x:e.m_dX,y:e.m_dY,spatialReference:c.default.WGS84})}))),e.m_bProcessed&&++$;for(let e of k.servicePoints.values()){let t=e.m_oGraphPoint;for(null===t&&++W;null!==t&&null!==t.m_oPrev&&t!==k.routeTo.m_oGraphPoint;)++t.m_oEdgeToDest.m_nAddressCount,t=t.m_oPrev}te(`No snap: ${W}<br/>No route: ${K}<br/>Total: ${k.nodes.length}<br/>Processed: ${$}`);for(let e of k.edges.values()){if(0==e.m_nAddressCount)continue;let t=[],o=[];for(let t of e.m_oGeo.values())o.push([t.m_dX,t.m_dY]);t.push(o);let n=new r.default({paths:t,spatialReference:c.default.WGS84});I.layer.add(new a.default({geometry:n}))}te("done")}catch(e){te(e)}finally{setTimeout((()=>document.getElementById("pageoverlay").style.visibility="hidden"),1500)}}))}},"Execute")))};function ne(e){v.p=e}})(),y})())}}}));