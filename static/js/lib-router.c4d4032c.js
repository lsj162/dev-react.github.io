/*! For license information please see lib-router.c4d4032c.js.LICENSE.txt */
"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([["2118"],{769:function(e,t,n){n.d(t,{Fg:()=>K,LX:()=>m,TH:()=>_,V$:()=>j,VK:()=>eb,fp:()=>h,j3:()=>X,rU:()=>ex});var r=n(9546);n(6441);var a="popstate";function o(e,t){if(!1===e||null==e)throw Error(t)}function i(e,t){if(!e){"undefined"!=typeof console&&console.warn(t);try{throw Error(t)}catch(e){}}}function l(e,t){return{usr:e.state,key:e.key,idx:t}}function u(e,t,n=null,r){return{pathname:"string"==typeof e?e:e.pathname,search:"",hash:"",..."string"==typeof t?c(t):t,state:n,key:t&&t.key||r||Math.random().toString(36).substring(2,10)}}function s({pathname:e="/",search:t="",hash:n=""}){return t&&"?"!==t&&(e+="?"===t.charAt(0)?t:"?"+t),n&&"#"!==n&&(e+="#"===n.charAt(0)?n:"#"+n),e}function c(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substring(n),e=e.substring(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substring(r),e=e.substring(0,r)),e&&(t.pathname=e)}return t}function h(e,t,n="/"){return function(e,t,n,r){let a=f(("string"==typeof t?c(t):t).pathname||"/",n);if(null==a)return null;let l=function e(t,n=[],r=[],a=""){let i=(t,i,l)=>{var u,s;let c,h,m={relativePath:void 0===l?t.path||"":l,caseSensitive:!0===t.caseSensitive,childrenIndex:i,route:t};m.relativePath.startsWith("/")&&(o(m.relativePath.startsWith(a),`Absolute route path "${m.relativePath}" nested under path "${a}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),m.relativePath=m.relativePath.slice(a.length));let f=w([a,m.relativePath]),g=r.concat(m);t.children&&t.children.length>0&&(o(!0!==t.index,`Index routes must not have child routes. Please remove all child routes from route path "${f}".`),e(t.children,n,g,f)),(null!=t.path||t.index)&&n.push({path:f,score:(u=f,s=t.index,h=(c=u.split("/")).length,c.some(p)&&(h+=-2),s&&(h+=2),c.filter(e=>!p(e)).reduce((e,t)=>e+(d.test(t)?3:""===t?1:10),h)),routesMeta:g})};return t.forEach((e,t)=>{if(""!==e.path&&e.path?.includes("?"))for(let n of function e(t){let n=t.split("/");if(0===n.length)return[];let[r,...a]=n,o=r.endsWith("?"),i=r.replace(/\?$/,"");if(0===a.length)return o?[i,""]:[i];let l=e(a.join("/")),u=[];return u.push(...l.map(e=>""===e?i:[i,e].join("/"))),o&&u.push(...l),u.map(e=>t.startsWith("/")&&""===e?"/":e)}(e.path))i(e,t,n);else i(e,t)}),n}(e);l.sort((e,t)=>{var n,r;return e.score!==t.score?t.score-e.score:(n=e.routesMeta.map(e=>e.childrenIndex),r=t.routesMeta.map(e=>e.childrenIndex),n.length===r.length&&n.slice(0,-1).every((e,t)=>e===r[t])?n[n.length-1]-r[r.length-1]:0)});let u=null;for(let e=0;null==u&&e<l.length;++e){let t=function(e){try{return e.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(t){return i(!1,`The URL path "${e}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`),e}}(a);u=function(e,t,n=!1){let{routesMeta:r}=e,a={},o="/",i=[];for(let e=0;e<r.length;++e){let l=r[e],u=e===r.length-1,s="/"===o?t:t.slice(o.length)||"/",c=m({path:l.relativePath,caseSensitive:l.caseSensitive,end:u},s),h=l.route;if(!c&&u&&n&&!r[r.length-1].route.index&&(c=m({path:l.relativePath,caseSensitive:l.caseSensitive,end:!1},s)),!c)return null;Object.assign(a,c.params),i.push({params:a,pathname:w([o,c.pathname]),pathnameBase:b(w([o,c.pathnameBase])),route:h}),"/"!==c.pathnameBase&&(o=w([o,c.pathnameBase]))}return i}(l[e],t,r)}return u}(e,t,n,!1)}new WeakMap;var d=/^:[\w-]+$/,p=e=>"*"===e;function m(e,t){"string"==typeof e&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=function(e,t=!1,n=!0){i("*"===e||!e.endsWith("*")||e.endsWith("/*"),`Route path "${e}" will be treated as if it were "${e.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${e.replace(/\*$/,"/*")}".`);let r=[],a="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(e,t,n)=>(r.push({paramName:t,isOptional:null!=n}),n?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),a+="*"===e||"/*"===e?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?a+="\\/*$":""!==e&&"/"!==e&&(a+="(?:(?=\\/|$))"),[new RegExp(a,t?void 0:"i"),r]}(e.path,e.caseSensitive,e.end),a=t.match(n);if(!a)return null;let o=a[0],l=o.replace(/(.)\/+$/,"$1"),u=a.slice(1);return{params:r.reduce((e,{paramName:t,isOptional:n},r)=>{if("*"===t){let e=u[r]||"";l=o.slice(0,o.length-e.length).replace(/(.)\/+$/,"$1")}let a=u[r];return n&&!a?e[t]=void 0:e[t]=(a||"").replace(/%2F/g,"/"),e},{}),pathname:o,pathnameBase:l,pattern:e}}function f(e,t){if("/"===t)return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&"/"!==r?null:e.slice(n)||"/"}function g(e,t,n,r){return`Cannot include a '${e}' character in a manually specified \`to.${t}\` field [${JSON.stringify(r)}].  Please separate it out to the \`to.${n}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function y(e){let t=e.filter((e,t)=>0===t||e.route.path&&e.route.path.length>0);return t.map((e,n)=>n===t.length-1?e.pathname:e.pathnameBase)}function v(e,t,n,r=!1){let a,i;"string"==typeof e?a=c(e):(o(!(a={...e}).pathname||!a.pathname.includes("?"),g("?","pathname","search",a)),o(!a.pathname||!a.pathname.includes("#"),g("#","pathname","hash",a)),o(!a.search||!a.search.includes("#"),g("#","search","hash",a)));let l=""===e||""===a.pathname,u=l?"/":a.pathname;if(null==u)i=n;else{let e=t.length-1;if(!r&&u.startsWith("..")){let t=u.split("/");for(;".."===t[0];)t.shift(),e-=1;a.pathname=t.join("/")}i=e>=0?t[e]:"/"}let s=function(e,t="/"){var n;let r,{pathname:a,search:o="",hash:i=""}="string"==typeof e?c(e):e;return{pathname:a?a.startsWith("/")?a:(n=a,r=t.replace(/\/+$/,"").split("/"),n.split("/").forEach(e=>{".."===e?r.length>1&&r.pop():"."!==e&&r.push(e)}),r.length>1?r.join("/"):"/"):t,search:E(o),hash:x(i)}}(a,i),h=u&&"/"!==u&&u.endsWith("/"),d=(l||"."===u)&&n.endsWith("/");return!s.pathname.endsWith("/")&&(h||d)&&(s.pathname+="/"),s}var w=e=>e.join("/").replace(/\/\/+/g,"/"),b=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),E=e=>e&&"?"!==e?e.startsWith("?")?e:"?"+e:"",x=e=>e&&"#"!==e?e.startsWith("#")?e:"#"+e:"";function $(e){return null!=e&&"number"==typeof e.status&&"string"==typeof e.statusText&&"boolean"==typeof e.internal&&"data"in e}Symbol("ResetLoaderData");var C=r.createContext(null);C.displayName="DataRouter";var R=r.createContext(null);R.displayName="DataRouterState";var S=r.createContext({isTransitioning:!1});S.displayName="ViewTransition",r.createContext(new Map).displayName="Fetchers",r.createContext(null).displayName="Await";var L=r.createContext(null);L.displayName="Navigation";var k=r.createContext(null);k.displayName="Location";var N=r.createContext({outlet:null,matches:[],isDataRoute:!1});N.displayName="Route";var P=r.createContext(null);function O(){return null!=r.useContext(k)}function _(){return o(O(),"useLocation() may be used only in the context of a <Router> component."),r.useContext(k).location}P.displayName="RouteError";var T="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function M(e){r.useContext(L).static||r.useLayoutEffect(e)}function W(){let{isDataRoute:e}=r.useContext(N);return e?function(){var e;let t,{router:n}=(e="useNavigate",o(t=r.useContext(C),I(e)),t),a=z("useNavigate"),l=r.useRef(!1);return M(()=>{l.current=!0}),r.useCallback(async(e,t={})=>{i(l.current,T),l.current&&("number"==typeof e?n.navigate(e):await n.navigate(e,{fromRouteId:a,...t}))},[n,a])}():function(){o(O(),"useNavigate() may be used only in the context of a <Router> component.");let e=r.useContext(C),{basename:t,navigator:n}=r.useContext(L),{matches:a}=r.useContext(N),{pathname:l}=_(),u=JSON.stringify(y(a)),s=r.useRef(!1);return M(()=>{s.current=!0}),r.useCallback((r,a={})=>{if(i(s.current,T),!s.current)return;if("number"==typeof r)return void n.go(r);let o=v(r,JSON.parse(u),l,"path"===a.relative);null==e&&"/"!==t&&(o.pathname="/"===o.pathname?t:w([t,o.pathname])),(a.replace?n.replace:n.push)(o,a.state,a)},[t,n,u,l,e])}()}var F=r.createContext(null);function A(e,{relative:t}={}){let{matches:n}=r.useContext(N),{pathname:a}=_(),o=JSON.stringify(y(n));return r.useMemo(()=>v(e,JSON.parse(o),a,"path"===t),[e,o,a,t])}function j(e,t){return H(e,t)}function H(e,t,n,a){let l;o(O(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:u,static:s}=r.useContext(L),{matches:d}=r.useContext(N),p=d[d.length-1],m=p?p.params:{},f=p?p.pathname:"/",g=p?p.pathnameBase:"/",y=p&&p.route;{let e=y&&y.path||"";V(f,!y||e.endsWith("*")||e.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${f}" (under <Route path="${e}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${e}"> to <Route path="${"/"===e?"*":`${e}/*`}">.`)}let v=_();if(t){let e="string"==typeof t?c(t):t;o("/"===g||e.pathname?.startsWith(g),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${g}" but pathname "${e.pathname}" was given in the \`location\` prop.`),l=e}else l=v;let b=l.pathname||"/",E=b;if("/"!==g){let e=g.replace(/^\//,"").split("/");E="/"+b.replace(/^\//,"").split("/").slice(e.length).join("/")}let x=!s&&n&&n.matches&&n.matches.length>0?n.matches:h(e,{pathname:E});i(y||null!=x,`No routes matched location "${l.pathname}${l.search}${l.hash}" `),i(null==x||void 0!==x[x.length-1].route.element||void 0!==x[x.length-1].route.Component||void 0!==x[x.length-1].route.lazy,`Matched leaf route at location "${l.pathname}${l.search}${l.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let $=function(e,t=[],n=null,a=null){if(null==e){if(!n)return null;if(n.errors)e=n.matches;else{if(0!==t.length||n.initialized||!(n.matches.length>0))return null;e=n.matches}}let i=e,l=n?.errors;if(null!=l){let e=i.findIndex(e=>e.route.id&&l?.[e.route.id]!==void 0);o(e>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(l).join(",")}`),i=i.slice(0,Math.min(i.length,e+1))}let u=!1,s=-1;if(n)for(let e=0;e<i.length;e++){let t=i[e];if((t.route.HydrateFallback||t.route.hydrateFallbackElement)&&(s=e),t.route.id){let{loaderData:e,errors:r}=n,a=t.route.loader&&!e.hasOwnProperty(t.route.id)&&(!r||void 0===r[t.route.id]);if(t.route.lazy||a){u=!0,i=s>=0?i.slice(0,s+1):[i[0]];break}}}return i.reduceRight((e,a,o)=>{let c,h=!1,d=null,p=null;n&&(c=l&&a.route.id?l[a.route.id]:void 0,d=a.route.errorElement||U,u&&(s<0&&0===o?(V("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),h=!0,p=null):s===o&&(h=!0,p=a.route.hydrateFallbackElement||null)));let m=t.concat(i.slice(0,o+1)),f=()=>{let t;return t=c?d:h?p:a.route.Component?r.createElement(a.route.Component,null):a.route.element?a.route.element:e,r.createElement(B,{match:a,routeContext:{outlet:e,matches:m,isDataRoute:null!=n},children:t})};return n&&(a.route.ErrorBoundary||a.route.errorElement||0===o)?r.createElement(D,{location:n.location,revalidation:n.revalidation,component:d,error:c,children:f(),routeContext:{outlet:null,matches:m,isDataRoute:!0}}):f()},null)}(x&&x.map(e=>Object.assign({},e,{params:Object.assign({},m,e.params),pathname:w([g,u.encodeLocation?u.encodeLocation(e.pathname).pathname:e.pathname]),pathnameBase:"/"===e.pathnameBase?g:w([g,u.encodeLocation?u.encodeLocation(e.pathnameBase).pathname:e.pathnameBase])})),d,n,a);return t&&$?r.createElement(k.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...l},navigationType:"POP"}},$):$}var U=r.createElement(function(){let e,t,n,a=(e=r.useContext(P),t=J("useRouteError"),n=z("useRouteError"),void 0!==e?e:t.errors?.[n]),o=$(a)?`${a.status} ${a.statusText}`:a instanceof Error?a.message:JSON.stringify(a),i=a instanceof Error?a.stack:null,l="rgba(200,200,200, 0.5)",u={padding:"2px 4px",backgroundColor:l},s=null;return console.error("Error handled by React Router default ErrorBoundary:",a),s=r.createElement(r.Fragment,null,r.createElement("p",null,"\uD83D\uDCBF Hey developer \uD83D\uDC4B"),r.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",r.createElement("code",{style:u},"ErrorBoundary")," or"," ",r.createElement("code",{style:u},"errorElement")," prop on your route.")),r.createElement(r.Fragment,null,r.createElement("h2",null,"Unexpected Application Error!"),r.createElement("h3",{style:{fontStyle:"italic"}},o),i?r.createElement("pre",{style:{padding:"0.5rem",backgroundColor:l}},i):null,s)},null),D=class extends r.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||"idle"!==t.revalidation&&"idle"===e.revalidation?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:void 0!==e.error?e.error:t.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){console.error("React Router caught the following error during render",e,t)}render(){return void 0!==this.state.error?r.createElement(N.Provider,{value:this.props.routeContext},r.createElement(P.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function B({routeContext:e,match:t,children:n}){let a=r.useContext(C);return a&&a.static&&a.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(a.staticContext._deepestRenderedBoundaryId=t.route.id),r.createElement(N.Provider,{value:e},n)}function I(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function J(e){let t=r.useContext(R);return o(t,I(e)),t}function z(e){let t,n=(o(t=r.useContext(N),I(e)),t),a=n.matches[n.matches.length-1];return o(a.route.id,`${e} can only be used on routes that contain a unique "id"`),a.route.id}var Y={};function V(e,t,n){t||Y[e]||(Y[e]=!0,i(!1,n))}function K({to:e,replace:t,state:n,relative:a}){o(O(),"<Navigate> may be used only in the context of a <Router> component.");let{static:l}=r.useContext(L);i(!l,"<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.");let{matches:u}=r.useContext(N),{pathname:s}=_(),c=W(),h=JSON.stringify(v(e,y(u),s,"path"===a));return r.useEffect(()=>{c(JSON.parse(h),{replace:t,state:n,relative:a})},[c,h,a,t,n]),null}function X(e){var t;let n;return t=e.context,(n=r.useContext(N).outlet)?r.createElement(F.Provider,{value:t},n):n}function q({basename:e="/",children:t=null,location:n,navigationType:a="POP",navigator:l,static:u=!1}){o(!O(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let s=e.replace(/^\/*/,"/"),h=r.useMemo(()=>({basename:s,navigator:l,static:u,future:{}}),[s,l,u]);"string"==typeof n&&(n=c(n));let{pathname:d="/",search:p="",hash:m="",state:g=null,key:y="default"}=n,v=r.useMemo(()=>{let e=f(d,s);return null==e?null:{location:{pathname:e,search:p,hash:m,state:g,key:y},navigationType:a}},[s,d,p,m,g,y,a]);return(i(null!=v,`<Router basename="${s}"> is not able to match the URL "${d}${p}${m}" because it does not start with the basename, so the <Router> won't render anything.`),null==v)?null:r.createElement(L.Provider,{value:h},r.createElement(k.Provider,{children:t,value:v}))}r.memo(function({routes:e,future:t,state:n}){return H(e,void 0,n,t)}),r.Component;var G="get",Q="application/x-www-form-urlencoded";function Z(e){return null!=e&&"string"==typeof e.tagName}var ee=null,et=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function en(e){return null==e||et.has(e)?e:(i(!1,`"${e}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Q}"`),null)}function er(e,t){if(!1===e||null==e)throw Error(t)}async function ea(e,t){if(e.id in t)return t[e.id];try{let n=await import(e.module);return t[e.id]=n,n}catch(t){return console.error(`Error loading route module \`${e.module}\`, reloading page...`),console.error(t),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function eo(e){return null!=e&&(null==e.href?"preload"===e.rel&&"string"==typeof e.imageSrcSet&&"string"==typeof e.imageSizes:"string"==typeof e.rel&&"string"==typeof e.href)}async function ei(e,t,n){var r,a;let o,i;return r=(await Promise.all(e.map(async e=>{let r=t.routes[e.route.id];if(r){let e=await ea(r,n);return e.links?e.links():[]}return[]}))).flat(1).filter(eo).filter(e=>"stylesheet"===e.rel||"preload"===e.rel).map(e=>"stylesheet"===e.rel?{...e,rel:"prefetch",as:"style"}:{...e,rel:"prefetch"}),o=new Set,i=new Set(void 0),r.reduce((e,t)=>{if(a&&(null==t||"string"!=typeof t.page)&&"script"===t.as&&t.href&&i.has(t.href))return e;let n=JSON.stringify(function(e){let t={};for(let n of Object.keys(e).sort())t[n]=e[n];return t}(t));return o.has(n)||(o.add(n),e.push({key:n,link:t})),e},[])}function el(e,t,n,r,a,o){let i=(e,t)=>!n[t]||e.route.id!==n[t].route.id,l=(e,t)=>n[t].pathname!==e.pathname||n[t].route.path?.endsWith("*")&&n[t].params["*"]!==e.params["*"];return"assets"===o?t.filter((e,t)=>i(e,t)||l(e,t)):"data"===o?t.filter((t,o)=>{let u=r.routes[t.route.id];if(!u||!u.hasLoader)return!1;if(i(t,o)||l(t,o))return!0;if(t.route.shouldRevalidate){let r=t.route.shouldRevalidate({currentUrl:new URL(a.pathname+a.search+a.hash,window.origin),currentParams:n[0]?.params||{},nextUrl:new URL(e,window.origin),nextParams:t.params,defaultShouldRevalidate:!0});if("boolean"==typeof r)return r}return!0}):[]}function eu(e,t,{includeHydrateFallback:n}={}){return[...new Set(e.map(e=>{let r=t.routes[e.route.id];if(!r)return[];let a=[r.module];return r.clientActionModule&&(a=a.concat(r.clientActionModule)),r.clientLoaderModule&&(a=a.concat(r.clientLoaderModule)),n&&r.hydrateFallbackModule&&(a=a.concat(r.hydrateFallbackModule)),r.imports&&(a=a.concat(r.imports)),a}).flat(1))]}Symbol("SingleFetchRedirect");function es({title:e,renderScripts:t,isOutsideRemixApp:n,children:a}){let{routeModules:o}=ep();return o.root?.Layout&&!n?a:r.createElement("html",{lang:"en"},r.createElement("head",null,r.createElement("meta",{charSet:"utf-8"}),r.createElement("meta",{name:"viewport",content:"width=device-width,initial-scale=1,viewport-fit=cover"}),r.createElement("title",null,e)),r.createElement("body",null,r.createElement("main",{style:{fontFamily:"system-ui, sans-serif",padding:"2rem"}},a,t?r.createElement(ev,null):null)))}function ec(){let e=r.useContext(C);return er(e,"You must render this element inside a <DataRouterContext.Provider> element"),e}function eh(){let e=r.useContext(R);return er(e,"You must render this element inside a <DataRouterStateContext.Provider> element"),e}r.Component;var ed=r.createContext(void 0);function ep(){let e=r.useContext(ed);return er(e,"You must render this element inside a <HydratedRouter> element"),e}function em(e,t){return n=>{e&&e(n),n.defaultPrevented||t(n)}}function ef({page:e,...t}){let{router:n}=ec(),a=r.useMemo(()=>h(n.routes,e,n.basename),[n.routes,e,n.basename]);return a?r.createElement(eg,{page:e,matches:a,...t}):null}function eg({page:e,matches:t,...n}){let a=_(),{manifest:o,routeModules:i}=ep(),{basename:l}=ec(),{loaderData:u,matches:s}=eh(),c=r.useMemo(()=>el(e,t,s,o,a,"data"),[e,t,s,o,a]),h=r.useMemo(()=>el(e,t,s,o,a,"assets"),[e,t,s,o,a]),d=r.useMemo(()=>{let n;if(e===a.pathname+a.search+a.hash)return[];let r=new Set,s=!1;if(t.forEach(e=>{let t=o.routes[e.route.id];t&&t.hasLoader&&(!c.some(t=>t.route.id===e.route.id)&&e.route.id in u&&i[e.route.id]?.shouldRevalidate||t.hasClientLoader?s=!0:r.add(e.route.id))}),0===r.size)return[];let h=("/"===(n="string"==typeof e?new URL(e,"undefined"==typeof window?"server://singlefetch/":window.location.origin):e).pathname?n.pathname="_root.data":l&&"/"===f(n.pathname,l)?n.pathname=`${l.replace(/\/$/,"")}/_root.data`:n.pathname=`${n.pathname.replace(/\/$/,"")}.data`,n);return s&&r.size>0&&h.searchParams.set("_routes",t.filter(e=>r.has(e.route.id)).map(e=>e.route.id).join(",")),[h.pathname+h.search]},[l,u,a,o,c,t,e,i]),p=r.useMemo(()=>eu(h,o),[h,o]),m=function(e){let{manifest:t,routeModules:n}=ep(),[a,o]=r.useState([]);return r.useEffect(()=>{let r=!1;return ei(e,t,n).then(e=>{r||o(e)}),()=>{r=!0}},[e,t,n]),a}(h);return r.createElement(r.Fragment,null,d.map(e=>r.createElement("link",{key:e,rel:"prefetch",as:"fetch",href:e,...n})),p.map(e=>r.createElement("link",{key:e,rel:"modulepreload",href:e,...n})),m.map(({key:e,link:t})=>r.createElement("link",{key:e,...t})))}ed.displayName="FrameworkContext";var ey=!1;function ev(e){var t,n;let{manifest:a,serverHandoffString:o,isSpaMode:i,ssr:l,renderMeta:u}=ep(),{router:s,static:c,staticContext:d}=ec(),{matches:p}=eh(),m=!0===l;u&&(u.didRenderScripts=!0);let f=(t=p,n=0,i&&!ey?[t[0]]:t);r.useEffect(()=>{ey=!0},[]);let g=r.useMemo(()=>{let t=d?`window.__reactRouterContext = ${o};window.__reactRouterContext.stream = new ReadableStream({start(controller){window.__reactRouterContext.streamController = controller;}}).pipeThrough(new TextEncoderStream());`:" ",n=c?`${a.hmr?.runtime?`import ${JSON.stringify(a.hmr.runtime)};`:""}${!m?`import ${JSON.stringify(a.url)}`:""};
${f.map((e,t)=>{let n=`route${t}`,r=a.routes[e.route.id];er(r,`Route ${e.route.id} not found in manifest`);let{clientActionModule:o,clientLoaderModule:i,clientMiddlewareModule:l,hydrateFallbackModule:u,module:s}=r,c=[...o?[{module:o,varName:`${n}_clientAction`}]:[],...i?[{module:i,varName:`${n}_clientLoader`}]:[],...l?[{module:l,varName:`${n}_clientMiddleware`}]:[],...u?[{module:u,varName:`${n}_HydrateFallback`}]:[],{module:s,varName:`${n}_main`}];return 1===c.length?`import * as ${n} from ${JSON.stringify(s)};`:[c.map(e=>`import * as ${e.varName} from "${e.module}";`).join("\n"),`const ${n} = {${c.map(e=>`...${e.varName}`).join(",")}};`].join("\n")}).join("\n")}
  ${m?`window.__reactRouterManifest = ${JSON.stringify(function({sri:e,...t},n){let r=new Set(n.state.matches.map(e=>e.route.id)),a=n.state.location.pathname.split("/").filter(Boolean),o=["/"];for(a.pop();a.length>0;)o.push(`/${a.join("/")}`),a.pop();o.forEach(e=>{let t=h(n.routes,e,n.basename);t&&t.forEach(e=>r.add(e.route.id))});let i=[...r].reduce((e,n)=>Object.assign(e,{[n]:t.routes[n]}),{});return{...t,routes:i,sri:!!e||void 0}}(a,s),null,2)};`:""}
  window.__reactRouterRouteModules = {${f.map((e,t)=>`${JSON.stringify(e.route.id)}:route${t}`).join(",")}};

import(${JSON.stringify(a.entry.module)});`:" ";return r.createElement(r.Fragment,null,r.createElement("script",{...e,suppressHydrationWarning:!0,dangerouslySetInnerHTML:{__html:t},type:void 0}),r.createElement("script",{...e,suppressHydrationWarning:!0,dangerouslySetInnerHTML:{__html:n},type:"module",async:!0}))},[]),y=ey?[]:[...new Set(a.entry.imports.concat(eu(f,a,{includeHydrateFallback:!0})))],v="object"==typeof a.sri?a.sri:{};return ey?null:r.createElement(r.Fragment,null,"object"==typeof a.sri?r.createElement("script",{"rr-importmap":"",type:"importmap",suppressHydrationWarning:!0,dangerouslySetInnerHTML:{__html:JSON.stringify({integrity:v})}}):null,m?null:r.createElement("link",{rel:"modulepreload",href:a.url,crossOrigin:e.crossOrigin,integrity:v[a.url],suppressHydrationWarning:!0}),r.createElement("link",{rel:"modulepreload",href:a.entry.module,crossOrigin:e.crossOrigin,integrity:v[a.entry.module],suppressHydrationWarning:!0}),y.map(t=>r.createElement("link",{key:t,rel:"modulepreload",href:t,crossOrigin:e.crossOrigin,integrity:v[t],suppressHydrationWarning:!0})),g)}var ew="undefined"!=typeof window&&void 0!==window.document&&void 0!==window.document.createElement;try{ew&&(window.__reactRouterVersion="7.5.0")}catch(e){}function eb({basename:e,children:t,window:n}){let i=r.useRef();null==i.current&&(i.current=function(e={}){return function(e,t,n,r={}){let{window:i=document.defaultView,v5Compat:c=!1}=r,h=i.history,d="POP",p=null,m=f();function f(){return(h.state||{idx:null}).idx}function g(){d="POP";let e=f(),t=null==e?null:e-m;m=e,p&&p({action:d,location:v.location,delta:t})}function y(e){let t="null"!==i.location.origin?i.location.origin:i.location.href,n="string"==typeof e?e:s(e);return n=n.replace(/ $/,"%20"),o(t,`No window.location.(origin|href) available to create URL for href: ${n}`),new URL(n,t)}null==m&&(m=0,h.replaceState({...h.state,idx:m},""));let v={get action(){return d},get location(){return e(i,h)},listen(e){if(p)throw Error("A history only accepts one active listener");return i.addEventListener(a,g),p=e,()=>{i.removeEventListener(a,g),p=null}},createHref:e=>t(i,e),createURL:y,encodeLocation(e){let t=y(e);return{pathname:t.pathname,search:t.search,hash:t.hash}},push:function(e,t){d="PUSH";let n=u(v.location,e,t);let r=l(n,m=f()+1),a=v.createHref(n);try{h.pushState(r,"",a)}catch(e){if(e instanceof DOMException&&"DataCloneError"===e.name)throw e;i.location.assign(a)}c&&p&&p({action:d,location:v.location,delta:1})},replace:function(e,t){d="REPLACE";let r=u(v.location,e,t);n&&n(r,e);let a=l(r,m=f()),o=v.createHref(r);h.replaceState(a,"",o),c&&p&&p({action:d,location:v.location,delta:0})},go:e=>h.go(e)};return v}(function(e,t){let{pathname:n,search:r,hash:a}=e.location;return u("",{pathname:n,search:r,hash:a},t.state&&t.state.usr||null,t.state&&t.state.key||"default")},function(e,t){return"string"==typeof t?t:s(t)},null,e)}({window:n,v5Compat:!0}));let c=i.current,[h,d]=r.useState({action:c.action,location:c.location}),p=r.useCallback(e=>{r.startTransition(()=>d(e))},[d]);return r.useLayoutEffect(()=>c.listen(p),[c,p]),r.createElement(q,{basename:e,children:t,location:h.location,navigationType:h.action,navigator:c})}var eE=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,ex=r.forwardRef(function({onClick:e,discover:t="render",prefetch:n="none",relative:a,reloadDocument:l,replace:u,state:c,target:h,to:d,preventScrollReset:p,viewTransition:m,...g},y){let v,{basename:b}=r.useContext(L),E="string"==typeof d&&eE.test(d),x=!1;if("string"==typeof d&&E&&(v=d,ew))try{let e=new URL(window.location.href),t=new URL(d.startsWith("//")?e.protocol+d:d),n=f(t.pathname,b);t.origin===e.origin&&null!=n?d=n+t.search+t.hash:x=!0}catch(e){i(!1,`<Link to="${d}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let $=function(e,{relative:t}={}){o(O(),"useHref() may be used only in the context of a <Router> component.");let{basename:n,navigator:a}=r.useContext(L),{hash:i,pathname:l,search:u}=A(e,{relative:t}),s=l;return"/"!==n&&(s="/"===l?n:w([n,l])),a.createHref({pathname:s,search:u,hash:i})}(d,{relative:a}),[C,R,S]=function(e,t){let n=r.useContext(ed),[a,o]=r.useState(!1),[i,l]=r.useState(!1),{onFocus:u,onBlur:s,onMouseEnter:c,onMouseLeave:h,onTouchStart:d}=t,p=r.useRef(null);r.useEffect(()=>{if("render"===e&&l(!0),"viewport"===e){let e=new IntersectionObserver(e=>{e.forEach(e=>{l(e.isIntersecting)})},{threshold:.5});return p.current&&e.observe(p.current),()=>{e.disconnect()}}},[e]),r.useEffect(()=>{if(a){let e=setTimeout(()=>{l(!0)},100);return()=>{clearTimeout(e)}}},[a]);let m=()=>{o(!0)},f=()=>{o(!1),l(!1)};return n?"intent"!==e?[i,p,{}]:[i,p,{onFocus:em(u,m),onBlur:em(s,f),onMouseEnter:em(c,m),onMouseLeave:em(h,f),onTouchStart:em(d,m)}]:[!1,p,{}]}(n,g),k=function(e,{target:t,replace:n,state:a,preventScrollReset:o,relative:i,viewTransition:l}={}){let u=W(),c=_(),h=A(e,{relative:i});return r.useCallback(r=>{0!==r.button||t&&"_self"!==t||r.metaKey||r.altKey||r.ctrlKey||r.shiftKey||(r.preventDefault(),u(e,{replace:void 0!==n?n:s(c)===s(h),state:a,preventScrollReset:o,relative:i,viewTransition:l}))},[c,u,h,n,a,t,e,o,i,l])}(d,{replace:u,state:c,target:h,preventScrollReset:p,relative:a,viewTransition:m}),N=r.createElement("a",{...g,...S,href:v||$,onClick:x||l?e:function(t){e&&e(t),t.defaultPrevented||k(t)},ref:function(...e){return t=>{e.forEach(e=>{"function"==typeof e?e(t):null!=e&&(e.current=t)})}}(y,R),target:h,"data-discover":E||"render"!==t?void 0:"true"});return C&&!E?r.createElement(r.Fragment,null,N,r.createElement(ef,{page:$})):N});ex.displayName="Link",r.forwardRef(function({"aria-current":e="page",caseSensitive:t=!1,className:n="",end:a=!1,style:i,to:l,viewTransition:u,children:s,...c},h){let d,p=A(l,{relative:c.relative}),g=_(),y=r.useContext(R),{navigator:v,basename:w}=r.useContext(L),b=null!=y&&function(e,t={}){let n=r.useContext(S);o(null!=n,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:a}=e$("useViewTransitionState"),i=A(e,{relative:t.relative});if(!n.isTransitioning)return!1;let l=f(n.currentLocation.pathname,a)||n.currentLocation.pathname,u=f(n.nextLocation.pathname,a)||n.nextLocation.pathname;return null!=m(i.pathname,u)||null!=m(i.pathname,l)}(p)&&!0===u,E=v.encodeLocation?v.encodeLocation(p).pathname:p.pathname,x=g.pathname,$=y&&y.navigation&&y.navigation.location?y.navigation.location.pathname:null;t||(x=x.toLowerCase(),$=$?$.toLowerCase():null,E=E.toLowerCase()),$&&w&&($=f($,w)||$);let C="/"!==E&&E.endsWith("/")?E.length-1:E.length,k=x===E||!a&&x.startsWith(E)&&"/"===x.charAt(C),N=null!=$&&($===E||!a&&$.startsWith(E)&&"/"===$.charAt(E.length)),P={isActive:k,isPending:N,isTransitioning:b},O=k?e:void 0;d="function"==typeof n?n(P):[n,k?"active":null,N?"pending":null,b?"transitioning":null].filter(Boolean).join(" ");let T="function"==typeof i?i(P):i;return r.createElement(ex,{...c,"aria-current":O,className:d,ref:h,style:T,to:l,viewTransition:u},"function"==typeof s?s(P):s)}).displayName="NavLink",r.forwardRef(({discover:e="render",fetcherKey:t,navigate:n,reloadDocument:a,replace:i,state:l,method:u=G,action:c,onSubmit:h,relative:d,preventScrollReset:p,viewTransition:m,...g},y)=>{let v=function(){let{router:e}=e$("useSubmit"),{basename:t}=r.useContext(L),n=z("useRouteId");return r.useCallback(async(r,a={})=>{let{action:o,method:i,encType:l,formData:u,body:s}=function(e,t){let n,r,a,o,i;if(Z(e)&&"form"===e.tagName.toLowerCase()){let i=e.getAttribute("action");r=i?f(i,t):null,n=e.getAttribute("method")||G,a=en(e.getAttribute("enctype"))||Q,o=new FormData(e)}else if(Z(e)&&"button"===e.tagName.toLowerCase()||Z(e)&&"input"===e.tagName.toLowerCase()&&("submit"===e.type||"image"===e.type)){let i=e.form;if(null==i)throw Error('Cannot submit a <button> or <input type="submit"> without a <form>');let l=e.getAttribute("formaction")||i.getAttribute("action");if(r=l?f(l,t):null,n=e.getAttribute("formmethod")||i.getAttribute("method")||G,a=en(e.getAttribute("formenctype"))||en(i.getAttribute("enctype"))||Q,o=new FormData(i,e),!function(){if(null===ee)try{new FormData(document.createElement("form"),0),ee=!1}catch(e){ee=!0}return ee}()){let{name:t,type:n,value:r}=e;if("image"===n){let e=t?`${t}.`:"";o.append(`${e}x`,"0"),o.append(`${e}y`,"0")}else t&&o.append(t,r)}}else if(Z(e))throw Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');else n=G,r=null,a=Q,i=e;return o&&"text/plain"===a&&(i=o,o=void 0),{action:r,method:n.toLowerCase(),encType:a,formData:o,body:i}}(r,t);if(!1===a.navigate){let t=a.fetcherKey||eR();await e.fetch(t,n,a.action||o,{preventScrollReset:a.preventScrollReset,formData:u,body:s,formMethod:a.method||i,formEncType:a.encType||l,flushSync:a.flushSync})}else await e.navigate(a.action||o,{preventScrollReset:a.preventScrollReset,formData:u,body:s,formMethod:a.method||i,formEncType:a.encType||l,replace:a.replace,state:a.state,fromRouteId:n,flushSync:a.flushSync,viewTransition:a.viewTransition})},[e,t,n])}(),b=function(e,{relative:t}={}){let{basename:n}=r.useContext(L),a=r.useContext(N);o(a,"useFormAction must be used inside a RouteContext");let[i]=a.matches.slice(-1),l={...A(e||".",{relative:t})},u=_();if(null==e){l.search=u.search;let e=new URLSearchParams(l.search),t=e.getAll("index");if(t.some(e=>""===e)){e.delete("index"),t.filter(e=>e).forEach(t=>e.append("index",t));let n=e.toString();l.search=n?`?${n}`:""}}return(!e||"."===e)&&i.route.index&&(l.search=l.search?l.search.replace(/^\?/,"?index&"):"?index"),"/"!==n&&(l.pathname="/"===l.pathname?n:w([n,l.pathname])),s(l)}(c,{relative:d}),E="get"===u.toLowerCase()?"get":"post",x="string"==typeof c&&eE.test(c);return r.createElement("form",{ref:y,method:E,action:b,onSubmit:a?h:e=>{if(h&&h(e),e.defaultPrevented)return;e.preventDefault();let r=e.nativeEvent.submitter,a=r?.getAttribute("formmethod")||u;v(r||e.currentTarget,{fetcherKey:t,method:a,navigate:n,replace:i,state:l,relative:d,preventScrollReset:p,viewTransition:m})},...g,"data-discover":x||"render"!==e?void 0:"true"})}).displayName="Form";function e$(e){var t;let n=r.useContext(C);return o(n,(t=e,`${t} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`)),n}var eC=0,eR=()=>`__${String(++eC)}__`;new TextEncoder}}]);