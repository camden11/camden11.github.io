"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["/index.html","fe9cc0e3d0a8fd17ca2ca7745299a496"],["/static/css/main.3db45bad.css","14d97eeca89ca375b8f0122ecfe99a8e"],["/static/js/main.4e98dd5f.js","d0919d4516831f90f3eed8a64c60c688"],["/static/media/Camden_Phalen_Resume_2017.11fb19d4.pdf","11fb19d4ee3da24f1e6fb2066fd146a8"],["/static/media/CrimsonText-Bold.dcc94f1c.ttf","dcc94f1c29a0fbf569597fe177af50ad"],["/static/media/InputMono-Bold.7c5e8db6.ttf","7c5e8db68c144ee536f3e71d9a009e59"],["/static/media/InputMono-Light.28f1e9eb.ttf","28f1e9eb2ac934be4b19b4d4364cebf8"],["/static/media/InputMono-Regular.c8f35daa.ttf","c8f35daa05d411916abd4de0e16a62dc"],["/static/media/alignable_preview.b9041be1.jpg","b9041be119c14f5856361b1a8c076c77"],["/static/media/camden.2f646f0c.jpg","2f646f0c9d4b0937ff489e274e4600d2"],["/static/media/example.6299ed1e.jpg","6299ed1ef5bf2fc385bde193f003df07"],["/static/media/hs_analyze.1bae5d51.png","1bae5d5161fd2d26390bec88bf713500"],["/static/media/hs_dashboard.5c4fc7fa.png","5c4fc7faff6e9616470f51f906d95534"],["/static/media/hubspot_preview.b4720f79.jpg","b4720f79537385298411695987390801"],["/static/media/idea_preview.9e86bfeb.jpg","9e86bfebdca8859e1cb8d82370d52f68"],["/static/media/open_lines.7057f0a3.jpg","7057f0a3530dbecf3bbfa44d236be0d0"],["/static/media/open_lines_active.a275390c.jpg","a275390cfbf0af1453a1999a137cc37d"],["/static/media/openlines_preview.41d98fb5.jpg","41d98fb546c095cc8fc3fbfead716e06"],["/static/media/t2t_checkout.1c02702e.png","1c02702e3d21e1530350d0b3ecb65a19"],["/static/media/t2t_seller.e7c6b1ff.png","e7c6b1fffef342385e1fbf77b9ba765a"],["/static/media/t2t_shop.1ea7180e.png","1ea7180efacf9b7be38879efc8cf4838"],["/static/media/trash2treasure_preview.cdd0cfac.jpg","cdd0cfac1489ea05b95ee8bfc41ab00b"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,t,a,n){var c=new URL(e);return n&&c.pathname.match(n)||(c.search+=(c.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),c.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],n=new URL(t,self.location),c=createCacheKey(n,hashParamName,a,/\.\w{8}\./);return[n.toString(),c]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var n=new Request(a,{credentials:"same-origin"});return fetch(n).then(function(t){if(!t.ok)throw new Error("Request for "+a+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(a,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(a){return Promise.all(a.map(function(a){if(!t.has(a.url))return e.delete(a)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,a=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(t=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,"index.html"),t=urlsToCacheKeys.has(a));!t&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(a=new URL("/index.html",self.location).toString(),t=urlsToCacheKeys.has(a)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});