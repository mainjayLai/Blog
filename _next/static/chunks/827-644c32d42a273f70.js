"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[827],{473:function(e,t,n){n.d(t,{F:function(){return c},f:function(){return u}});var r=n(2265),o=["light","dark"],i="(prefers-color-scheme: dark)",a="undefined"==typeof window,l=r.createContext(void 0),s={setTheme:e=>{},themes:[]},c=()=>{var e;return null!=(e=r.useContext(l))?e:s},u=e=>r.useContext(l)?e.children:r.createElement(f,{...e}),d=["light","dark"],f=e=>{let{forcedTheme:t,disableTransitionOnChange:n=!1,enableSystem:a=!0,enableColorScheme:s=!0,storageKey:c="theme",themes:u=d,defaultTheme:f=a?"system":"light",attribute:y="data-theme",value:v,children:b,nonce:w}=e,[S,_]=r.useState(()=>p(c,f)),[C,x]=r.useState(()=>p(c)),j=v?Object.values(v):u,O=r.useCallback(e=>{let t=e;if(!t)return;"system"===e&&a&&(t=g());let r=v?v[t]:t,i=n?h():null,l=document.documentElement;if("class"===y?(l.classList.remove(...j),r&&l.classList.add(r)):r?l.setAttribute(y,r):l.removeAttribute(y),s){let e=o.includes(f)?f:null,n=o.includes(t)?t:e;l.style.colorScheme=n}null==i||i()},[]),P=r.useCallback(e=>{let t="function"==typeof e?e(e):e;_(t);try{localStorage.setItem(c,t)}catch(e){}},[t]),E=r.useCallback(e=>{x(g(e)),"system"===S&&a&&!t&&O("system")},[S,t]);r.useEffect(()=>{let e=window.matchMedia(i);return e.addListener(E),E(e),()=>e.removeListener(E)},[E]),r.useEffect(()=>{let e=e=>{e.key===c&&P(e.newValue||f)};return window.addEventListener("storage",e),()=>window.removeEventListener("storage",e)},[P]),r.useEffect(()=>{O(null!=t?t:S)},[t,S]);let k=r.useMemo(()=>({theme:S,setTheme:P,forcedTheme:t,resolvedTheme:"system"===S?C:S,themes:a?[...u,"system"]:u,systemTheme:a?C:void 0}),[S,P,t,C,a,u]);return r.createElement(l.Provider,{value:k},r.createElement(m,{forcedTheme:t,disableTransitionOnChange:n,enableSystem:a,enableColorScheme:s,storageKey:c,themes:u,defaultTheme:f,attribute:y,value:v,children:b,attrs:j,nonce:w}),b)},m=r.memo(e=>{let{forcedTheme:t,storageKey:n,attribute:a,enableSystem:l,enableColorScheme:s,defaultTheme:c,value:u,attrs:d,nonce:f}=e,m="system"===c,p="class"===a?"var d=document.documentElement,c=d.classList;".concat("c.remove(".concat(d.map(e=>"'".concat(e,"'")).join(","),")"),";"):"var d=document.documentElement,n='".concat(a,"',s='setAttribute';"),h=s?(o.includes(c)?c:null)?"if(e==='light'||e==='dark'||!e)d.style.colorScheme=e||'".concat(c,"'"):"if(e==='light'||e==='dark')d.style.colorScheme=e":"",g=function(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=!(arguments.length>2)||void 0===arguments[2]||arguments[2],r=u?u[e]:e,i=t?e+"|| ''":"'".concat(r,"'"),l="";return s&&n&&!t&&o.includes(e)&&(l+="d.style.colorScheme = '".concat(e,"';")),"class"===a?t||r?l+="c.add(".concat(i,")"):l+="null":r&&(l+="d[s](n,".concat(i,")")),l},y=t?"!function(){".concat(p).concat(g(t),"}()"):l?"!function(){try{".concat(p,"var e=localStorage.getItem('").concat(n,"');if('system'===e||(!e&&").concat(m,")){var t='").concat(i,"',m=window.matchMedia(t);if(m.media!==t||m.matches){").concat(g("dark"),"}else{").concat(g("light"),"}}else if(e){").concat(u?"var x=".concat(JSON.stringify(u),";"):"").concat(g(u?"x[e]":"e",!0),"}").concat(m?"":"else{"+g(c,!1,!1)+"}").concat(h,"}catch(e){}}()"):"!function(){try{".concat(p,"var e=localStorage.getItem('").concat(n,"');if(e){").concat(u?"var x=".concat(JSON.stringify(u),";"):"").concat(g(u?"x[e]":"e",!0),"}else{").concat(g(c,!1,!1),";}").concat(h,"}catch(t){}}();");return r.createElement("script",{nonce:f,dangerouslySetInnerHTML:{__html:y}})}),p=(e,t)=>{let n;if(!a){try{n=localStorage.getItem(e)||void 0}catch(e){}return n||t}},h=()=>{let e=document.createElement("style");return e.appendChild(document.createTextNode("*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}")),document.head.appendChild(e),()=>{window.getComputedStyle(document.body),setTimeout(()=>{document.head.removeChild(e)},1)}},g=e=>(e||(e=window.matchMedia(i)),e.matches?"dark":"light")},8173:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Image",{enumerable:!0,get:function(){return b}});let r=n(7657),o=n(9803),i=n(7437),a=o._(n(2265)),l=r._(n(4887)),s=r._(n(8321)),c=n(497),u=n(7103),d=n(3938);n(2301);let f=n(291),m=r._(n(1241)),p={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/Blog/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0};function h(e,t,n,r,o,i,a){let l=null==e?void 0:e.src;e&&e["data-loaded-src"]!==l&&(e["data-loaded-src"]=l,("decode"in e?e.decode():Promise.resolve()).catch(()=>{}).then(()=>{if(e.parentElement&&e.isConnected){if("empty"!==t&&o(!0),null==n?void 0:n.current){let t=new Event("load");Object.defineProperty(t,"target",{writable:!1,value:e});let r=!1,o=!1;n.current({...t,nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:()=>r,isPropagationStopped:()=>o,persist:()=>{},preventDefault:()=>{r=!0,t.preventDefault()},stopPropagation:()=>{o=!0,t.stopPropagation()}})}(null==r?void 0:r.current)&&r.current(e)}}))}function g(e){let[t,n]=a.version.split(".",2),r=parseInt(t,10),o=parseInt(n,10);return r>18||18===r&&o>=3?{fetchPriority:e}:{fetchpriority:e}}"undefined"==typeof window&&(globalThis.__NEXT_IMAGE_IMPORTED=!0);let y=(0,a.forwardRef)((e,t)=>{let{src:n,srcSet:r,sizes:o,height:l,width:s,decoding:c,className:u,style:d,fetchPriority:f,placeholder:m,loading:p,unoptimized:y,fill:v,onLoadRef:b,onLoadingCompleteRef:w,setBlurComplete:S,setShowAltText:_,sizesInput:C,onLoad:x,onError:j,...O}=e;return(0,i.jsx)("img",{...O,...g(f),loading:p,width:s,height:l,decoding:c,"data-nimg":v?"fill":"1",className:u,style:d,sizes:o,srcSet:r,src:n,ref:(0,a.useCallback)(e=>{t&&("function"==typeof t?t(e):"object"==typeof t&&(t.current=e)),e&&(j&&(e.src=e.src),e.complete&&h(e,m,b,w,S,y,C))},[n,m,b,w,S,j,y,C,t]),onLoad:e=>{h(e.currentTarget,m,b,w,S,y,C)},onError:e=>{_(!0),"empty"!==m&&S(!0),j&&j(e)}})});function v(e){let{isAppRouter:t,imgAttributes:n}=e,r={as:"image",imageSrcSet:n.srcSet,imageSizes:n.sizes,crossOrigin:n.crossOrigin,referrerPolicy:n.referrerPolicy,...g(n.fetchPriority)};return t&&l.default.preload?(l.default.preload(n.src,r),null):(0,i.jsx)(s.default,{children:(0,i.jsx)("link",{rel:"preload",href:n.srcSet?void 0:n.src,...r},"__nimg-"+n.src+n.srcSet+n.sizes)})}let b=(0,a.forwardRef)((e,t)=>{let n=(0,a.useContext)(f.RouterContext),r=(0,a.useContext)(d.ImageConfigContext),o=(0,a.useMemo)(()=>{let e=p||r||u.imageConfigDefault,t=[...e.deviceSizes,...e.imageSizes].sort((e,t)=>e-t),n=e.deviceSizes.sort((e,t)=>e-t);return{...e,allSizes:t,deviceSizes:n}},[r]),{onLoad:l,onLoadingComplete:s}=e,h=(0,a.useRef)(l);(0,a.useEffect)(()=>{h.current=l},[l]);let g=(0,a.useRef)(s);(0,a.useEffect)(()=>{g.current=s},[s]);let[b,w]=(0,a.useState)(!1),[S,_]=(0,a.useState)(!1),{props:C,meta:x}=(0,c.getImgProps)(e,{defaultLoader:m.default,imgConf:o,blurComplete:b,showAltText:S});return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(y,{...C,unoptimized:x.unoptimized,placeholder:x.placeholder,fill:x.fill,onLoadRef:h,onLoadingCompleteRef:g,setBlurComplete:w,setShowAltText:_,sizesInput:e.sizes,ref:t}),x.priority?(0,i.jsx)(v,{isAppRouter:!n,imgAttributes:C}):null]})});("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},2901:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"AmpStateContext",{enumerable:!0,get:function(){return r}});let r=n(7657)._(n(2265)).default.createContext({})},687:function(e,t){function n(e){let{ampFirst:t=!1,hybrid:n=!1,hasQuery:r=!1}=void 0===e?{}:e;return t||n&&r}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"isInAmpMode",{enumerable:!0,get:function(){return n}})},497:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImgProps",{enumerable:!0,get:function(){return l}}),n(2301);let r=n(1564),o=n(7103);function i(e){return void 0!==e.default}function a(e){return void 0===e?e:"number"==typeof e?Number.isFinite(e)?e:NaN:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function l(e,t){var n;let l,s,c,{src:u,sizes:d,unoptimized:f=!1,priority:m=!1,loading:p,className:h,quality:g,width:y,height:v,fill:b=!1,style:w,overrideSrc:S,onLoad:_,onLoadingComplete:C,placeholder:x="empty",blurDataURL:j,fetchPriority:O,layout:P,objectFit:E,objectPosition:k,lazyBoundary:M,lazyRoot:I,...z}=e,{imgConf:T,showAltText:A,blurComplete:R,defaultLoader:L}=t,D=T||o.imageConfigDefault;if("allSizes"in D)l=D;else{let e=[...D.deviceSizes,...D.imageSizes].sort((e,t)=>e-t),t=D.deviceSizes.sort((e,t)=>e-t);l={...D,allSizes:e,deviceSizes:t}}if(void 0===L)throw Error("images.loaderFile detected but the file is missing default export.\nRead more: https://nextjs.org/docs/messages/invalid-images-config");let N=z.loader||L;delete z.loader,delete z.srcSet;let U="__next_img_default"in N;if(U){if("custom"===l.loader)throw Error('Image with src "'+u+'" is missing "loader" prop.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader')}else{let e=N;N=t=>{let{config:n,...r}=t;return e(r)}}if(P){"fill"===P&&(b=!0);let e={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[P];e&&(w={...w,...e});let t={responsive:"100vw",fill:"100vw"}[P];t&&!d&&(d=t)}let F="",B=a(y),G=a(v);if("object"==typeof(n=u)&&(i(n)||void 0!==n.src)){let e=i(u)?u.default:u;if(!e.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received "+JSON.stringify(e));if(!e.height||!e.width)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received "+JSON.stringify(e));if(s=e.blurWidth,c=e.blurHeight,j=j||e.blurDataURL,F=e.src,!b){if(B||G){if(B&&!G){let t=B/e.width;G=Math.round(e.height*t)}else if(!B&&G){let t=G/e.height;B=Math.round(e.width*t)}}else B=e.width,G=e.height}}let W=!m&&("lazy"===p||void 0===p);(!(u="string"==typeof u?u:F)||u.startsWith("data:")||u.startsWith("blob:"))&&(f=!0,W=!1),l.unoptimized&&(f=!0),U&&u.endsWith(".svg")&&!l.dangerouslyAllowSVG&&(f=!0),m&&(O="high");let H=a(g),V=Object.assign(b?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:E,objectPosition:k}:{},A?{}:{color:"transparent"},w),J=R||"empty"===x?null:"blur"===x?'url("data:image/svg+xml;charset=utf-8,'+(0,r.getImageBlurSvg)({widthInt:B,heightInt:G,blurWidth:s,blurHeight:c,blurDataURL:j||"",objectFit:V.objectFit})+'")':'url("'+x+'")',q=J?{backgroundSize:V.objectFit||"cover",backgroundPosition:V.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:J}:{},K=function(e){let{config:t,src:n,unoptimized:r,width:o,quality:i,sizes:a,loader:l}=e;if(r)return{src:n,srcSet:void 0,sizes:void 0};let{widths:s,kind:c}=function(e,t,n){let{deviceSizes:r,allSizes:o}=e;if(n){let e=/(^|\s)(1?\d?\d)vw/g,t=[];for(let r;r=e.exec(n);r)t.push(parseInt(r[2]));if(t.length){let e=.01*Math.min(...t);return{widths:o.filter(t=>t>=r[0]*e),kind:"w"}}return{widths:o,kind:"w"}}return"number"!=typeof t?{widths:r,kind:"w"}:{widths:[...new Set([t,2*t].map(e=>o.find(t=>t>=e)||o[o.length-1]))],kind:"x"}}(t,o,a),u=s.length-1;return{sizes:a||"w"!==c?a:"100vw",srcSet:s.map((e,r)=>l({config:t,src:n,quality:i,width:e})+" "+("w"===c?e:r+1)+c).join(", "),src:l({config:t,src:n,quality:i,width:s[u]})}}({config:l,src:u,unoptimized:f,width:B,quality:H,sizes:d,loader:N});return{props:{...z,loading:W?"lazy":p,fetchPriority:O,width:B,height:G,decoding:"async",className:h,style:{...V,...q},sizes:K.sizes,srcSet:K.srcSet,src:S||K.src},meta:{unoptimized:f,priority:m,placeholder:x,fill:b}}}},8321:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{default:function(){return h},defaultHead:function(){return d}});let r=n(7657),o=n(9803),i=n(7437),a=o._(n(2265)),l=r._(n(5960)),s=n(2901),c=n(6590),u=n(687);function d(e){void 0===e&&(e=!1);let t=[(0,i.jsx)("meta",{charSet:"utf-8"})];return e||t.push((0,i.jsx)("meta",{name:"viewport",content:"width=device-width"})),t}function f(e,t){return"string"==typeof t||"number"==typeof t?e:t.type===a.default.Fragment?e.concat(a.default.Children.toArray(t.props.children).reduce((e,t)=>"string"==typeof t||"number"==typeof t?e:e.concat(t),[])):e.concat(t)}n(2301);let m=["name","httpEquiv","charSet","itemProp"];function p(e,t){let{inAmpMode:n}=t;return e.reduce(f,[]).reverse().concat(d(n).reverse()).filter(function(){let e=new Set,t=new Set,n=new Set,r={};return o=>{let i=!0,a=!1;if(o.key&&"number"!=typeof o.key&&o.key.indexOf("$")>0){a=!0;let t=o.key.slice(o.key.indexOf("$")+1);e.has(t)?i=!1:e.add(t)}switch(o.type){case"title":case"base":t.has(o.type)?i=!1:t.add(o.type);break;case"meta":for(let e=0,t=m.length;e<t;e++){let t=m[e];if(o.props.hasOwnProperty(t)){if("charSet"===t)n.has(t)?i=!1:n.add(t);else{let e=o.props[t],n=r[t]||new Set;("name"!==t||!a)&&n.has(e)?i=!1:(n.add(e),r[t]=n)}}}}return i}}()).reverse().map((e,t)=>{let r=e.key||t;if(!n&&"link"===e.type&&e.props.href&&["https://fonts.googleapis.com/css","https://use.typekit.net/"].some(t=>e.props.href.startsWith(t))){let t={...e.props||{}};return t["data-href"]=t.href,t.href=void 0,t["data-optimized-fonts"]=!0,a.default.cloneElement(e,t)}return a.default.cloneElement(e,{key:r})})}let h=function(e){let{children:t}=e,n=(0,a.useContext)(s.AmpStateContext),r=(0,a.useContext)(c.HeadManagerContext);return(0,i.jsx)(l.default,{reduceComponentsToState:p,headManager:r,inAmpMode:(0,u.isInAmpMode)(n),children:t})};("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1564:function(e,t){function n(e){let{widthInt:t,heightInt:n,blurWidth:r,blurHeight:o,blurDataURL:i,objectFit:a}=e,l=r?40*r:t,s=o?40*o:n,c=l&&s?"viewBox='0 0 "+l+" "+s+"'":"";return"%3Csvg xmlns='http://www.w3.org/2000/svg' "+c+"%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='"+(c?"none":"contain"===a?"xMidYMid":"cover"===a?"xMidYMid slice":"none")+"' style='filter: url(%23b);' href='"+i+"'/%3E%3C/svg%3E"}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImageBlurSvg",{enumerable:!0,get:function(){return n}})},3938:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"ImageConfigContext",{enumerable:!0,get:function(){return i}});let r=n(7657)._(n(2265)),o=n(7103),i=r.default.createContext(o.imageConfigDefault)},7103:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{VALID_LOADERS:function(){return n},imageConfigDefault:function(){return r}});let n=["default","imgix","cloudinary","akamai","custom"],r={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",loaderFile:"",domains:[],disableStaticImages:!1,minimumCacheTTL:60,formats:["image/webp"],dangerouslyAllowSVG:!1,contentSecurityPolicy:"script-src 'none'; frame-src 'none'; sandbox;",contentDispositionType:"inline",remotePatterns:[],unoptimized:!1}},1241:function(e,t){function n(e){let{config:t,src:n,width:r,quality:o}=e;return t.path+"?url="+encodeURIComponent(n)+"&w="+r+"&q="+(o||75)}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return r}}),n.__next_img_default=!0;let r=n},5960:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return l}});let r=n(2265),o="undefined"==typeof window,i=o?()=>{}:r.useLayoutEffect,a=o?()=>{}:r.useEffect;function l(e){let{headManager:t,reduceComponentsToState:n}=e;function l(){if(t&&t.mountedInstances){let o=r.Children.toArray(Array.from(t.mountedInstances).filter(Boolean));t.updateHead(n(o,e))}}if(o){var s;null==t||null==(s=t.mountedInstances)||s.add(e.children),l()}return i(()=>{var n;return null==t||null==(n=t.mountedInstances)||n.add(e.children),()=>{var n;null==t||null==(n=t.mountedInstances)||n.delete(e.children)}}),i(()=>(t&&(t._pendingUpdate=l),()=>{t&&(t._pendingUpdate=l)})),a(()=>(t&&t._pendingUpdate&&(t._pendingUpdate(),t._pendingUpdate=null),()=>{t&&t._pendingUpdate&&(t._pendingUpdate(),t._pendingUpdate=null)})),null}},6338:function(e,t,n){n.d(t,{Cr:function(){return m},EZ:function(){return d},S0:function(){return f},ih:function(){return u}});var r=Object.defineProperty,o=Object.defineProperties,i=Object.getOwnPropertyDescriptors,a=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,c=(e,t,n)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,u=(e,t)=>{for(var n in t||(t={}))l.call(t,n)&&c(e,n,t[n]);if(a)for(var n of a(t))s.call(t,n)&&c(e,n,t[n]);return e},d=(e,t)=>o(e,i(t)),f=(e,t)=>{var n={};for(var r in e)l.call(e,r)&&0>t.indexOf(r)&&(n[r]=e[r]);if(null!=e&&a)for(var r of a(e))0>t.indexOf(r)&&s.call(e,r)&&(n[r]=e[r]);return n},m=(e,t,n)=>new Promise((r,o)=>{var i=e=>{try{l(n.next(e))}catch(e){o(e)}},a=e=>{try{l(n.throw(e))}catch(e){o(e)}},l=e=>e.done?r(e.value):Promise.resolve(e.value).then(i,a);l((n=n.apply(e,t)).next())})}}]);