function AppWidgetset(){var O='bootstrap',P='begin',Q='gwt.codesvr.AppWidgetset=',R='gwt.codesvr=',S='AppWidgetset',T='startup',U='DUMMY',V=0,W=1,X='iframe',Y='javascript:""',Z='position:absolute; width:0; height:0; border:none; left: -1000px;',$=' top: -1000px;',_='CSS1Compat',ab='<!doctype html>',bb='',cb='<html><head><\/head><body><\/body><\/html>',db='undefined',eb='DOMContentLoaded',fb=50,gb='Chrome',hb='eval("',ib='");',jb='script',kb='javascript',lb='moduleStartup',mb='moduleRequested',nb='Failed to load ',ob='head',pb='meta',qb='name',rb='AppWidgetset::',sb='::',tb='gwt:property',ub='content',vb='=',wb='gwt:onPropertyErrorFn',xb='Bad handler "',yb='" for "gwt:onPropertyErrorFn"',zb='gwt:onLoadErrorFn',Ab='" for "gwt:onLoadErrorFn"',Bb='#',Cb='?',Db='/',Eb='img',Fb='clear.cache.gif',Gb='baseUrl',Hb='AppWidgetset.nocache.js',Ib='base',Jb='//',Kb='modernie',Lb='MSIE',Mb='Trident',Nb='yes',Ob='none',Pb='user.agent',Qb='webkit',Rb='trident',Sb='safari',Tb='msie',Ub=10,Vb=11,Wb='ie10',Xb=9,Yb='ie9',Zb=8,$b='ie8',_b='gecko',ac='gecko1_8',bc=2,cc=3,dc=4,ec='selectingPermutation',fc='AppWidgetset.devmode.js',gc='A3DD208888D6E7DF034A2658036D0E8F',hc=':1',ic=':2',jc=':3',kc=':4',lc=':5',mc=':',nc='.cache.js',oc='link',pc='rel',qc='stylesheet',rc='href',sc='loadExternalRefs',tc='grid-util.css?v=1.0.8a',uc='end',vc='http:',wc='file:',xc='_gwt_dummy_',yc='__gwtDevModeHook:AppWidgetset',zc='Ignoring non-whitelisted Dev Mode URL: ',Ac=':moduleBase';var o=window;var p=document;r(O,P);function q(){var a=o.location.search;return a.indexOf(Q)!=-1||a.indexOf(R)!=-1}
function r(a,b){if(o.__gwtStatsEvent){o.__gwtStatsEvent({moduleName:S,sessionId:o.__gwtStatsSessionId,subSystem:T,evtGroup:a,millis:(new Date).getTime(),type:b})}}
AppWidgetset.__sendStats=r;AppWidgetset.__moduleName=S;AppWidgetset.__errFn=null;AppWidgetset.__moduleBase=U;AppWidgetset.__softPermutationId=V;AppWidgetset.__computePropValue=null;AppWidgetset.__getPropMap=null;AppWidgetset.__installRunAsyncCode=function(){};AppWidgetset.__gwtStartLoadingFragment=function(){return null};AppWidgetset.__gwt_isKnownPropertyValue=function(){return false};AppWidgetset.__gwt_getMetaProperty=function(){return null};var s=null;var t=o.__gwt_activeModules=o.__gwt_activeModules||{};t[S]={moduleName:S};AppWidgetset.__moduleStartupDone=function(e){var f=t[S].bindings;t[S].bindings=function(){var a=f?f():{};var b=e[AppWidgetset.__softPermutationId];for(var c=V;c<b.length;c++){var d=b[c];a[d[V]]=d[W]}return a}};var u;function v(){w();return u}
function w(){if(u){return}var a=p.createElement(X);a.src=Y;a.id=S;a.style.cssText=Z+$;a.tabIndex=-1;p.body.appendChild(a);u=a.contentDocument;if(!u){u=a.contentWindow.document}u.open();var b=document.compatMode==_?ab:bb;u.write(b+cb);u.close()}
function A(k){function l(a){function b(){if(typeof p.readyState==db){return typeof p.body!=db&&p.body!=null}return /loaded|complete/.test(p.readyState)}
var c=b();if(c){a();return}function d(){if(!c){c=true;a();if(p.removeEventListener){p.removeEventListener(eb,d,false)}if(e){clearInterval(e)}}}
if(p.addEventListener){p.addEventListener(eb,d,false)}var e=setInterval(function(){if(b()){d()}},fb)}
function m(c){function d(a,b){a.removeChild(b)}
var e=v();var f=e.body;var g;if(navigator.userAgent.indexOf(gb)>-1&&window.JSON){var h=e.createDocumentFragment();h.appendChild(e.createTextNode(hb));for(var i=V;i<c.length;i++){var j=window.JSON.stringify(c[i]);h.appendChild(e.createTextNode(j.substring(W,j.length-W)))}h.appendChild(e.createTextNode(ib));g=e.createElement(jb);g.language=kb;g.appendChild(h);f.appendChild(g);d(f,g)}else{for(var i=V;i<c.length;i++){g=e.createElement(jb);g.language=kb;g.text=c[i];f.appendChild(g);d(f,g)}}}
AppWidgetset.onScriptDownloaded=function(a){l(function(){m(a)})};r(lb,mb);var n=p.createElement(jb);n.src=k;if(AppWidgetset.__errFn){n.onerror=function(){AppWidgetset.__errFn(S,new Error(nb+code))}}p.getElementsByTagName(ob)[V].appendChild(n)}
AppWidgetset.__startLoadingFragment=function(a){return D(a)};AppWidgetset.__installRunAsyncCode=function(a){var b=v();var c=b.body;var d=b.createElement(jb);d.language=kb;d.text=a;c.appendChild(d);c.removeChild(d)};function B(){var c={};var d;var e;var f=p.getElementsByTagName(pb);for(var g=V,h=f.length;g<h;++g){var i=f[g],j=i.getAttribute(qb),k;if(j){j=j.replace(rb,bb);if(j.indexOf(sb)>=V){continue}if(j==tb){k=i.getAttribute(ub);if(k){var l,m=k.indexOf(vb);if(m>=V){j=k.substring(V,m);l=k.substring(m+W)}else{j=k;l=bb}c[j]=l}}else if(j==wb){k=i.getAttribute(ub);if(k){try{d=eval(k)}catch(a){alert(xb+k+yb)}}}else if(j==zb){k=i.getAttribute(ub);if(k){try{e=eval(k)}catch(a){alert(xb+k+Ab)}}}}}__gwt_getMetaProperty=function(a){var b=c[a];return b==null?null:b};s=d;AppWidgetset.__errFn=e}
function C(){function e(a){var b=a.lastIndexOf(Bb);if(b==-1){b=a.length}var c=a.indexOf(Cb);if(c==-1){c=a.length}var d=a.lastIndexOf(Db,Math.min(c,b));return d>=V?a.substring(V,d+W):bb}
function f(a){if(a.match(/^\w+:\/\//)){}else{var b=p.createElement(Eb);b.src=a+Fb;a=e(b.src)}return a}
function g(){var a=__gwt_getMetaProperty(Gb);if(a!=null){return a}return bb}
function h(){var a=p.getElementsByTagName(jb);for(var b=V;b<a.length;++b){if(a[b].src.indexOf(Hb)!=-1){return e(a[b].src)}}return bb}
function i(){var a=p.getElementsByTagName(Ib);if(a.length>V){return a[a.length-W].href}return bb}
function j(){var a=p.location;return a.href==a.protocol+Jb+a.host+a.pathname+a.search+a.hash}
var k=g();if(k==bb){k=h()}if(k==bb){k=i()}if(k==bb&&j()){k=e(p.location.href)}k=f(k);return k}
function D(a){if(a.match(/^\//)){return a}if(a.match(/^[a-zA-Z]+:\/\//)){return a}return AppWidgetset.__moduleBase+a}
function F(){var f=[];var g=V;function h(a,b){var c=f;for(var d=V,e=a.length-W;d<e;++d){c=c[a[d]]||(c[a[d]]=[])}c[a[e]]=b}
var i=[];var j=[];function k(a){var b=j[a](),c=i[a];if(b in c){return b}var d=[];for(var e in c){d[c[e]]=e}if(s){s(a,d,b)}throw null}
j[Kb]=function(){{var a=o.navigator.userAgent;if(a.indexOf(Lb)==-1&&a.indexOf(Mb)!=-1){return Nb}return Ob}};i[Kb]={none:V,yes:W};j[Pb]=function(){var a=navigator.userAgent.toLowerCase();var b=p.documentMode;if(function(){return a.indexOf(Qb)!=-1&&a.indexOf(Rb)==-1}())return Sb;if(function(){return a.indexOf(Tb)!=-1&&(b>=Ub&&b<Vb)}())return Wb;if(function(){return a.indexOf(Tb)!=-1&&(b>=Xb&&b<Vb)}())return Yb;if(function(){return a.indexOf(Tb)!=-1&&(b>=Zb&&b<Vb)}())return $b;if(function(){return a.indexOf(_b)!=-1||b>=Vb}())return ac;return bb};i[Pb]={gecko1_8:V,ie10:W,ie8:bc,ie9:cc,safari:dc};__gwt_isKnownPropertyValue=function(a,b){return b in i[a]};AppWidgetset.__getPropMap=function(){var a={};for(var b in i){if(i.hasOwnProperty(b)){a[b]=k(b)}}return a};AppWidgetset.__computePropValue=k;o.__gwt_activeModules[S].bindings=AppWidgetset.__getPropMap;r(O,ec);if(q()){return D(fc)}var l;try{h([Ob,ac],gc);h([Nb,ac],gc+hc);h([Ob,Wb],gc+ic);h([Ob,$b],gc+jc);h([Ob,Yb],gc+kc);h([Ob,Sb],gc+lc);l=f[k(Kb)][k(Pb)];var m=l.indexOf(mc);if(m!=-1){g=parseInt(l.substring(m+W),Ub);l=l.substring(V,m)}}catch(a){}AppWidgetset.__softPermutationId=g;return D(l+nc)}
function G(){if(!o.__gwt_stylesLoaded){o.__gwt_stylesLoaded={}}function c(a){if(!__gwt_stylesLoaded[a]){var b=p.createElement(oc);b.setAttribute(pc,qc);b.setAttribute(rc,D(a));p.getElementsByTagName(ob)[V].appendChild(b);__gwt_stylesLoaded[a]=true}}
r(sc,P);c(tc);r(sc,uc)}
B();AppWidgetset.__moduleBase=C();t[S].moduleBase=AppWidgetset.__moduleBase;var H=F();if(o){var I=!!(o.location.protocol==vc||o.location.protocol==wc);o.__gwt_activeModules[S].canRedirect=I;function J(){var b=xc;try{o.sessionStorage.setItem(b,b);o.sessionStorage.removeItem(b);return true}catch(a){return false}}
if(I&&J()){var K=yc;var L=o.sessionStorage[K];if(!/^http:\/\/(localhost|127\.0\.0\.1)(:\d+)?\/.*$/.test(L)){if(L&&(window.console&&console.log)){console.log(zc+L)}L=bb}if(L&&!o[K]){o[K]=true;o[K+Ac]=C();var M=p.createElement(jb);M.src=L;var N=p.getElementsByTagName(ob)[V];N.insertBefore(M,N.firstElementChild||N.children[V]);return false}}}G();r(O,uc);A(H);return true}
AppWidgetset.succeeded=AppWidgetset();