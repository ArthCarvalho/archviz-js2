(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const qi="154",fi={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},pi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},wu=0,lo=1,Ru=2,Tc=1,Pu=2,En=3,hn=0,ft=1,zt=2,ut=0,Fi=1,co=2,uo=3,ho=4,Cu=5,Ii=100,Lu=101,Du=102,fo=103,po=104,Uu=200,Iu=201,Nu=202,Fu=203,_c=204,yc=205,Ou=206,Bu=207,zu=208,Hu=209,Vu=210,ku=0,Gu=1,Wu=2,ua=3,Xu=4,ju=5,Yu=6,qu=7,Ec=0,Ku=1,Zu=2,un=0,Ju=1,Qu=2,$u=3,bc=4,eh=5,Ac=300,oi=301,Hi=302,gr=303,ha=304,os=306,It=1e3,Dt=1001,is=1002,Fe=1003,da=1004,es=1005,Be=1006,wc=1007,Gn=1008,vr=1008,wt=1009,th=1010,nh=1011,Pa=1012,Rc=1013,wn=1014,$e=1015,bt=1016,Pc=1017,Cc=1018,Vn=1020,ih=1021,Ut=1023,rh=1024,sh=1025,ri=1026,li=1027,fa=1028,Lc=1029,ah=1030,Dc=1031,Uc=1033,ys=33776,Es=33777,bs=33778,As=33779,mo=35840,go=35841,vo=35842,xo=35843,oh=36196,Mo=37492,So=37496,To=37808,_o=37809,yo=37810,Eo=37811,bo=37812,Ao=37813,wo=37814,Ro=37815,Po=37816,Co=37817,Lo=37818,Do=37819,Uo=37820,Io=37821,ws=36492,lh=36283,No=36284,Fo=36285,Oo=36286,xr=2300,Vi=2301,Rs=2302,Bo=2400,zo=2401,Ho=2402,ch=2500,uh=0,Ic=1,pa=2,ls=3e3,Cn=3001,Ki=3200,rs=3201,cs=0,hh=1,rn="",Se="srgb",jt="srgb-linear",Nc="display-p3",Ps=7680,dh=519,fh=512,ph=513,mh=514,gh=515,vh=516,xh=517,Mh=518,Sh=519,ma=35044,Wn="300 es",ga=1035,Rn=2e3,ss=2001;class fn{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const r=n.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const Rt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Vo=1234567;const fr=Math.PI/180,ki=180/Math.PI;function sn(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Rt[i&255]+Rt[i>>8&255]+Rt[i>>16&255]+Rt[i>>24&255]+"-"+Rt[e&255]+Rt[e>>8&255]+"-"+Rt[e>>16&15|64]+Rt[e>>24&255]+"-"+Rt[t&63|128]+Rt[t>>8&255]+"-"+Rt[t>>16&255]+Rt[t>>24&255]+Rt[n&255]+Rt[n>>8&255]+Rt[n>>16&255]+Rt[n>>24&255]).toLowerCase()}function _t(i,e,t){return Math.max(e,Math.min(t,i))}function Ca(i,e){return(i%e+e)%e}function Th(i,e,t,n,r){return n+(i-e)*(r-n)/(t-e)}function _h(i,e,t){return i!==e?(t-i)/(e-i):0}function pr(i,e,t){return(1-t)*i+t*e}function yh(i,e,t,n){return pr(i,e,1-Math.exp(-t*n))}function Eh(i,e=1){return e-Math.abs(Ca(i,e*2)-e)}function bh(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function Ah(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function wh(i,e){return i+Math.floor(Math.random()*(e-i+1))}function Rh(i,e){return i+Math.random()*(e-i)}function Ph(i){return i*(.5-Math.random())}function Ch(i){i!==void 0&&(Vo=i);let e=Vo+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Lh(i){return i*fr}function Dh(i){return i*ki}function va(i){return(i&i-1)===0&&i!==0}function Fc(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function as(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Uh(i,e,t,n,r){const s=Math.cos,a=Math.sin,o=s(t/2),l=a(t/2),c=s((e+n)/2),u=a((e+n)/2),h=s((e-n)/2),d=a((e-n)/2),m=s((n-e)/2),g=a((n-e)/2);switch(r){case"XYX":i.set(o*u,l*h,l*d,o*c);break;case"YZY":i.set(l*d,o*u,l*h,o*c);break;case"ZXZ":i.set(l*h,l*d,o*u,o*c);break;case"XZX":i.set(o*u,l*g,l*m,o*c);break;case"YXY":i.set(l*m,o*u,l*g,o*c);break;case"ZYZ":i.set(l*g,l*m,o*u,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Pn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Je(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const Ih={DEG2RAD:fr,RAD2DEG:ki,generateUUID:sn,clamp:_t,euclideanModulo:Ca,mapLinear:Th,inverseLerp:_h,lerp:pr,damp:yh,pingpong:Eh,smoothstep:bh,smootherstep:Ah,randInt:wh,randFloat:Rh,randFloatSpread:Ph,seededRandom:Ch,degToRad:Lh,radToDeg:Dh,isPowerOfTwo:va,ceilPowerOfTwo:Fc,floorPowerOfTwo:as,setQuaternionFromProperEuler:Uh,normalize:Je,denormalize:Pn};class se{constructor(e=0,t=0){se.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(_t(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*n-a*r+e.x,this.y=s*r+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ne{constructor(e,t,n,r,s,a,o,l,c){Ne.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,a,o,l,c)}set(e,t,n,r,s,a,o,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=o,u[3]=t,u[4]=s,u[5]=l,u[6]=n,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],u=n[4],h=n[7],d=n[2],m=n[5],g=n[8],x=r[0],p=r[3],f=r[6],T=r[1],v=r[4],S=r[7],y=r[2],b=r[5],w=r[8];return s[0]=a*x+o*T+l*y,s[3]=a*p+o*v+l*b,s[6]=a*f+o*S+l*w,s[1]=c*x+u*T+h*y,s[4]=c*p+u*v+h*b,s[7]=c*f+u*S+h*w,s[2]=d*x+m*T+g*y,s[5]=d*p+m*v+g*b,s[8]=d*f+m*S+g*w,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-n*s*u+n*o*l+r*s*c-r*a*l}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],h=u*a-o*c,d=o*l-u*s,m=c*s-a*l,g=t*h+n*d+r*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/g;return e[0]=h*x,e[1]=(r*c-u*n)*x,e[2]=(o*n-r*a)*x,e[3]=d*x,e[4]=(u*t-r*l)*x,e[5]=(r*s-o*t)*x,e[6]=m*x,e[7]=(n*l-c*t)*x,e[8]=(a*t-n*s)*x,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-r*c,r*l,-r*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Cs.makeScale(e,t)),this}rotate(e){return this.premultiply(Cs.makeRotation(-e)),this}translate(e,t){return this.premultiply(Cs.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Cs=new Ne;function Oc(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Mr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}const ko={};function mr(i){i in ko||(ko[i]=!0,console.warn(i))}function Oi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Ls(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const Nh=new Ne().fromArray([.8224621,.0331941,.0170827,.177538,.9668058,.0723974,-1e-7,1e-7,.9105199]),Fh=new Ne().fromArray([1.2249401,-.0420569,-.0196376,-.2249404,1.0420571,-.0786361,1e-7,0,1.0982735]);function Oh(i){return i.convertSRGBToLinear().applyMatrix3(Fh)}function Bh(i){return i.applyMatrix3(Nh).convertLinearToSRGB()}const zh={[jt]:i=>i,[Se]:i=>i.convertSRGBToLinear(),[Nc]:Oh},Hh={[jt]:i=>i,[Se]:i=>i.convertLinearToSRGB(),[Nc]:Bh},qt={enabled:!0,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(i){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!i},get workingColorSpace(){return jt},set workingColorSpace(i){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(i,e,t){if(this.enabled===!1||e===t||!e||!t)return i;const n=zh[e],r=Hh[t];if(n===void 0||r===void 0)throw new Error(`Unsupported color space conversion, "${e}" to "${t}".`);return r(n(i))},fromWorkingColorSpace:function(i,e){return this.convert(i,this.workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this.workingColorSpace)}};let mi;class Bc{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{mi===void 0&&(mi=Mr("canvas")),mi.width=e.width,mi.height=e.height;const n=mi.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=mi}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Mr("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const r=n.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=Oi(s[a]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Oi(t[n]/255)*255):t[n]=Oi(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Vh=0;class La{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Vh++}),this.uuid=sn(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(Ds(r[a].image)):s.push(Ds(r[a]))}else s=Ds(r);n.url=s}return t||(e.images[this.uuid]=n),n}}function Ds(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Bc.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let kh=0;class ot extends fn{constructor(e=ot.DEFAULT_IMAGE,t=ot.DEFAULT_MAPPING,n=Dt,r=Dt,s=Be,a=Gn,o=Ut,l=wt,c=ot.DEFAULT_ANISOTROPY,u=rn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:kh++}),this.uuid=sn(),this.name="",this.source=new La(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new se(0,0),this.repeat=new se(1,1),this.center=new se(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ne,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof u=="string"?this.colorSpace=u:(mr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=u===Cn?Se:rn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Ac)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case It:e.x=e.x-Math.floor(e.x);break;case Dt:e.x=e.x<0?0:1;break;case is:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case It:e.y=e.y-Math.floor(e.y);break;case Dt:e.y=e.y<0?0:1;break;case is:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return mr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Se?Cn:ls}set encoding(e){mr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Cn?Se:rn}}ot.DEFAULT_IMAGE=null;ot.DEFAULT_MAPPING=Ac;ot.DEFAULT_ANISOTROPY=1;class Ze{constructor(e=0,t=0,n=0,r=1){Ze.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*n+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*n+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*n+a[11]*r+a[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,s;const l=e.elements,c=l[0],u=l[4],h=l[8],d=l[1],m=l[5],g=l[9],x=l[2],p=l[6],f=l[10];if(Math.abs(u-d)<.01&&Math.abs(h-x)<.01&&Math.abs(g-p)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+x)<.1&&Math.abs(g+p)<.1&&Math.abs(c+m+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const v=(c+1)/2,S=(m+1)/2,y=(f+1)/2,b=(u+d)/4,w=(h+x)/4,D=(g+p)/4;return v>S&&v>y?v<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(v),r=b/n,s=w/n):S>y?S<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(S),n=b/r,s=D/r):y<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(y),n=w/s,r=D/s),this.set(n,r,s,t),this}let T=Math.sqrt((p-g)*(p-g)+(h-x)*(h-x)+(d-u)*(d-u));return Math.abs(T)<.001&&(T=1),this.x=(p-g)/T,this.y=(h-x)/T,this.z=(d-u)/T,this.w=Math.acos((c+m+f-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class it extends fn{constructor(e=1,t=1,n={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Ze(0,0,e,t),this.scissorTest=!1,this.viewport=new Ze(0,0,e,t);const r={width:e,height:t,depth:1};n.encoding!==void 0&&(mr("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===Cn?Se:rn),this.texture=new ot(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Be,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new La(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class zc extends ot{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Fe,this.minFilter=Fe,this.wrapR=Dt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Gh extends ot{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Fe,this.minFilter=Fe,this.wrapR=Dt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ci extends it{constructor(e=1,t=1,n=1,r={}){super(e,t,r),this.isWebGLMultipleRenderTargets=!0;const s=this.texture;this.texture=[];for(let a=0;a<n;a++)this.texture[a]=s.clone(),this.texture[a].isRenderTargetTexture=!0}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,s=this.texture.length;r<s;r++)this.texture[r].image.width=e,this.texture[r].image.height=t,this.texture[r].image.depth=n;this.dispose()}return this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t),this}copy(e){this.dispose(),this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.texture.length=0;for(let t=0,n=e.texture.length;t<n;t++)this.texture[t]=e.texture[t].clone(),this.texture[t].isRenderTargetTexture=!0;return this}}class an{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,s,a,o){let l=n[r+0],c=n[r+1],u=n[r+2],h=n[r+3];const d=s[a+0],m=s[a+1],g=s[a+2],x=s[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(o===1){e[t+0]=d,e[t+1]=m,e[t+2]=g,e[t+3]=x;return}if(h!==x||l!==d||c!==m||u!==g){let p=1-o;const f=l*d+c*m+u*g+h*x,T=f>=0?1:-1,v=1-f*f;if(v>Number.EPSILON){const y=Math.sqrt(v),b=Math.atan2(y,f*T);p=Math.sin(p*b)/y,o=Math.sin(o*b)/y}const S=o*T;if(l=l*p+d*S,c=c*p+m*S,u=u*p+g*S,h=h*p+x*S,p===1-o){const y=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=y,c*=y,u*=y,h*=y}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,r,s,a){const o=n[r],l=n[r+1],c=n[r+2],u=n[r+3],h=s[a],d=s[a+1],m=s[a+2],g=s[a+3];return e[t]=o*g+u*h+l*m-c*d,e[t+1]=l*g+u*d+c*h-o*m,e[t+2]=c*g+u*m+o*d-l*h,e[t+3]=u*g-o*h-l*d-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const n=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),u=o(r/2),h=o(s/2),d=l(n/2),m=l(r/2),g=l(s/2);switch(a){case"XYZ":this._x=d*u*h+c*m*g,this._y=c*m*h-d*u*g,this._z=c*u*g+d*m*h,this._w=c*u*h-d*m*g;break;case"YXZ":this._x=d*u*h+c*m*g,this._y=c*m*h-d*u*g,this._z=c*u*g-d*m*h,this._w=c*u*h+d*m*g;break;case"ZXY":this._x=d*u*h-c*m*g,this._y=c*m*h+d*u*g,this._z=c*u*g+d*m*h,this._w=c*u*h-d*m*g;break;case"ZYX":this._x=d*u*h-c*m*g,this._y=c*m*h+d*u*g,this._z=c*u*g-d*m*h,this._w=c*u*h+d*m*g;break;case"YZX":this._x=d*u*h+c*m*g,this._y=c*m*h+d*u*g,this._z=c*u*g-d*m*h,this._w=c*u*h-d*m*g;break;case"XZY":this._x=d*u*h-c*m*g,this._y=c*m*h-d*u*g,this._z=c*u*g+d*m*h,this._w=c*u*h+d*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],r=t[4],s=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],h=t[10],d=n+o+h;if(d>0){const m=.5/Math.sqrt(d+1);this._w=.25/m,this._x=(u-l)*m,this._y=(s-c)*m,this._z=(a-r)*m}else if(n>o&&n>h){const m=2*Math.sqrt(1+n-o-h);this._w=(u-l)/m,this._x=.25*m,this._y=(r+a)/m,this._z=(s+c)/m}else if(o>h){const m=2*Math.sqrt(1+o-n-h);this._w=(s-c)/m,this._x=(r+a)/m,this._y=.25*m,this._z=(l+u)/m}else{const m=2*Math.sqrt(1+h-n-o);this._w=(a-r)/m,this._x=(s+c)/m,this._y=(l+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(_t(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,r=e._y,s=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+a*o+r*c-s*l,this._y=r*u+a*l+s*o-n*c,this._z=s*u+a*c+n*l-r*o,this._w=a*u-n*o-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,r=this._y,s=this._z,a=this._w;let o=a*e._w+n*e._x+r*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=r,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const m=1-t;return this._w=m*a+t*this._w,this._x=m*n+t*this._x,this._y=m*r+t*this._y,this._z=m*s+t*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),u=Math.atan2(c,o),h=Math.sin((1-t)*u)/c,d=Math.sin(t*u)/c;return this._w=a*h+this._w*d,this._x=n*h+this._x*d,this._y=r*h+this._y*d,this._z=s*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(r),n*Math.sin(s),n*Math.cos(s),t*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class C{constructor(e=0,t=0,n=0){C.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Go.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Go.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*r,this.y=s[1]*t+s[4]*n+s[7]*r,this.z=s[2]*t+s[5]*n+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*n+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*n+s[10]*r+s[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=l*t+a*r-o*n,u=l*n+o*t-s*r,h=l*r+s*n-a*t,d=-s*t-a*n-o*r;return this.x=c*l+d*-s+u*-o-h*-a,this.y=u*l+d*-a+h*-s-c*-o,this.z=h*l+d*-o+c*-a-u*-s,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r,this.y=s[1]*t+s[5]*n+s[9]*r,this.z=s[2]*t+s[6]*n+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,r=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=r*l-s*o,this.y=s*a-n*l,this.z=n*o-r*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Us.copy(this).projectOnVector(e),this.sub(Us)}reflect(e){return this.sub(Us.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(_t(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Us=new C,Go=new an;class Ln{constructor(e=new C(1/0,1/0,1/0),t=new C(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(xn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(xn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=xn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){if(e.updateWorldMatrix(!1,!1),e.boundingBox!==void 0)e.boundingBox===null&&e.computeBoundingBox(),gi.copy(e.boundingBox),gi.applyMatrix4(e.matrixWorld),this.union(gi);else{const r=e.geometry;if(r!==void 0)if(t&&r.attributes!==void 0&&r.attributes.position!==void 0){const s=r.attributes.position;for(let a=0,o=s.count;a<o;a++)xn.fromBufferAttribute(s,a).applyMatrix4(e.matrixWorld),this.expandByPoint(xn)}else r.boundingBox===null&&r.computeBoundingBox(),gi.copy(r.boundingBox),gi.applyMatrix4(e.matrixWorld),this.union(gi)}const n=e.children;for(let r=0,s=n.length;r<s;r++)this.expandByObject(n[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,xn),xn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(nr),wr.subVectors(this.max,nr),vi.subVectors(e.a,nr),xi.subVectors(e.b,nr),Mi.subVectors(e.c,nr),Dn.subVectors(xi,vi),Un.subVectors(Mi,xi),qn.subVectors(vi,Mi);let t=[0,-Dn.z,Dn.y,0,-Un.z,Un.y,0,-qn.z,qn.y,Dn.z,0,-Dn.x,Un.z,0,-Un.x,qn.z,0,-qn.x,-Dn.y,Dn.x,0,-Un.y,Un.x,0,-qn.y,qn.x,0];return!Is(t,vi,xi,Mi,wr)||(t=[1,0,0,0,1,0,0,0,1],!Is(t,vi,xi,Mi,wr))?!1:(Rr.crossVectors(Dn,Un),t=[Rr.x,Rr.y,Rr.z],Is(t,vi,xi,Mi,wr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,xn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(xn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(vn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),vn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),vn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),vn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),vn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),vn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),vn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),vn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(vn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const vn=[new C,new C,new C,new C,new C,new C,new C,new C],xn=new C,gi=new Ln,vi=new C,xi=new C,Mi=new C,Dn=new C,Un=new C,qn=new C,nr=new C,wr=new C,Rr=new C,Kn=new C;function Is(i,e,t,n,r){for(let s=0,a=i.length-3;s<=a;s+=3){Kn.fromArray(i,s);const o=r.x*Math.abs(Kn.x)+r.y*Math.abs(Kn.y)+r.z*Math.abs(Kn.z),l=e.dot(Kn),c=t.dot(Kn),u=n.dot(Kn);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const Wh=new Ln,ir=new C,Ns=new C;class pn{constructor(e=new C,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Wh.setFromPoints(e).getCenter(n);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ir.subVectors(e,this.center);const t=ir.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(ir,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ns.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ir.copy(e.center).add(Ns)),this.expandByPoint(ir.copy(e.center).sub(Ns))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Mn=new C,Fs=new C,Pr=new C,In=new C,Os=new C,Cr=new C,Bs=new C;class us{constructor(e=new C,t=new C(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Mn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Mn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Mn.copy(this.origin).addScaledVector(this.direction,t),Mn.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){Fs.copy(e).add(t).multiplyScalar(.5),Pr.copy(t).sub(e).normalize(),In.copy(this.origin).sub(Fs);const s=e.distanceTo(t)*.5,a=-this.direction.dot(Pr),o=In.dot(this.direction),l=-In.dot(Pr),c=In.lengthSq(),u=Math.abs(1-a*a);let h,d,m,g;if(u>0)if(h=a*l-o,d=a*o-l,g=s*u,h>=0)if(d>=-g)if(d<=g){const x=1/u;h*=x,d*=x,m=h*(h+a*d+2*o)+d*(a*h+d+2*l)+c}else d=s,h=Math.max(0,-(a*d+o)),m=-h*h+d*(d+2*l)+c;else d=-s,h=Math.max(0,-(a*d+o)),m=-h*h+d*(d+2*l)+c;else d<=-g?(h=Math.max(0,-(-a*s+o)),d=h>0?-s:Math.min(Math.max(-s,-l),s),m=-h*h+d*(d+2*l)+c):d<=g?(h=0,d=Math.min(Math.max(-s,-l),s),m=d*(d+2*l)+c):(h=Math.max(0,-(a*s+o)),d=h>0?s:Math.min(Math.max(-s,-l),s),m=-h*h+d*(d+2*l)+c);else d=a>0?-s:s,h=Math.max(0,-(a*d+o)),m=-h*h+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(Fs).addScaledVector(Pr,d),m}intersectSphere(e,t){Mn.subVectors(e.center,this.origin);const n=Mn.dot(this.direction),r=Mn.dot(Mn)-n*n,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,s,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),u>=0?(s=(e.min.y-d.y)*u,a=(e.max.y-d.y)*u):(s=(e.max.y-d.y)*u,a=(e.min.y-d.y)*u),n>a||s>r||((s>n||isNaN(n))&&(n=s),(a<r||isNaN(r))&&(r=a),h>=0?(o=(e.min.z-d.z)*h,l=(e.max.z-d.z)*h):(o=(e.max.z-d.z)*h,l=(e.min.z-d.z)*h),n>l||o>r)||((o>n||n!==n)&&(n=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,Mn)!==null}intersectTriangle(e,t,n,r,s){Os.subVectors(t,e),Cr.subVectors(n,e),Bs.crossVectors(Os,Cr);let a=this.direction.dot(Bs),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;In.subVectors(this.origin,e);const l=o*this.direction.dot(Cr.crossVectors(In,Cr));if(l<0)return null;const c=o*this.direction.dot(Os.cross(In));if(c<0||l+c>a)return null;const u=-o*In.dot(Bs);return u<0?null:this.at(u/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ge{constructor(e,t,n,r,s,a,o,l,c,u,h,d,m,g,x,p){ge.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,a,o,l,c,u,h,d,m,g,x,p)}set(e,t,n,r,s,a,o,l,c,u,h,d,m,g,x,p){const f=this.elements;return f[0]=e,f[4]=t,f[8]=n,f[12]=r,f[1]=s,f[5]=a,f[9]=o,f[13]=l,f[2]=c,f[6]=u,f[10]=h,f[14]=d,f[3]=m,f[7]=g,f[11]=x,f[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ge().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,r=1/Si.setFromMatrixColumn(e,0).length(),s=1/Si.setFromMatrixColumn(e,1).length(),a=1/Si.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,r=e.y,s=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const d=a*u,m=a*h,g=o*u,x=o*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=m+g*c,t[5]=d-x*c,t[9]=-o*l,t[2]=x-d*c,t[6]=g+m*c,t[10]=a*l}else if(e.order==="YXZ"){const d=l*u,m=l*h,g=c*u,x=c*h;t[0]=d+x*o,t[4]=g*o-m,t[8]=a*c,t[1]=a*h,t[5]=a*u,t[9]=-o,t[2]=m*o-g,t[6]=x+d*o,t[10]=a*l}else if(e.order==="ZXY"){const d=l*u,m=l*h,g=c*u,x=c*h;t[0]=d-x*o,t[4]=-a*h,t[8]=g+m*o,t[1]=m+g*o,t[5]=a*u,t[9]=x-d*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const d=a*u,m=a*h,g=o*u,x=o*h;t[0]=l*u,t[4]=g*c-m,t[8]=d*c+x,t[1]=l*h,t[5]=x*c+d,t[9]=m*c-g,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const d=a*l,m=a*c,g=o*l,x=o*c;t[0]=l*u,t[4]=x-d*h,t[8]=g*h+m,t[1]=h,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=m*h+g,t[10]=d-x*h}else if(e.order==="XZY"){const d=a*l,m=a*c,g=o*l,x=o*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=d*h+x,t[5]=a*u,t[9]=m*h-g,t[2]=g*h-m,t[6]=o*u,t[10]=x*h+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Xh,e,jh)}lookAt(e,t,n){const r=this.elements;return kt.subVectors(e,t),kt.lengthSq()===0&&(kt.z=1),kt.normalize(),Nn.crossVectors(n,kt),Nn.lengthSq()===0&&(Math.abs(n.z)===1?kt.x+=1e-4:kt.z+=1e-4,kt.normalize(),Nn.crossVectors(n,kt)),Nn.normalize(),Lr.crossVectors(kt,Nn),r[0]=Nn.x,r[4]=Lr.x,r[8]=kt.x,r[1]=Nn.y,r[5]=Lr.y,r[9]=kt.y,r[2]=Nn.z,r[6]=Lr.z,r[10]=kt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],u=n[1],h=n[5],d=n[9],m=n[13],g=n[2],x=n[6],p=n[10],f=n[14],T=n[3],v=n[7],S=n[11],y=n[15],b=r[0],w=r[4],D=r[8],M=r[12],_=r[1],N=r[5],q=r[9],I=r[13],z=r[2],B=r[6],J=r[10],W=r[14],K=r[3],ee=r[7],$=r[11],H=r[15];return s[0]=a*b+o*_+l*z+c*K,s[4]=a*w+o*N+l*B+c*ee,s[8]=a*D+o*q+l*J+c*$,s[12]=a*M+o*I+l*W+c*H,s[1]=u*b+h*_+d*z+m*K,s[5]=u*w+h*N+d*B+m*ee,s[9]=u*D+h*q+d*J+m*$,s[13]=u*M+h*I+d*W+m*H,s[2]=g*b+x*_+p*z+f*K,s[6]=g*w+x*N+p*B+f*ee,s[10]=g*D+x*q+p*J+f*$,s[14]=g*M+x*I+p*W+f*H,s[3]=T*b+v*_+S*z+y*K,s[7]=T*w+v*N+S*B+y*ee,s[11]=T*D+v*q+S*J+y*$,s[15]=T*M+v*I+S*W+y*H,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],h=e[6],d=e[10],m=e[14],g=e[3],x=e[7],p=e[11],f=e[15];return g*(+s*l*h-r*c*h-s*o*d+n*c*d+r*o*m-n*l*m)+x*(+t*l*m-t*c*d+s*a*d-r*a*m+r*c*u-s*l*u)+p*(+t*c*h-t*o*m-s*a*h+n*a*m+s*o*u-n*c*u)+f*(-r*o*u-t*l*h+t*o*d+r*a*h-n*a*d+n*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],h=e[9],d=e[10],m=e[11],g=e[12],x=e[13],p=e[14],f=e[15],T=h*p*c-x*d*c+x*l*m-o*p*m-h*l*f+o*d*f,v=g*d*c-u*p*c-g*l*m+a*p*m+u*l*f-a*d*f,S=u*x*c-g*h*c+g*o*m-a*x*m-u*o*f+a*h*f,y=g*h*l-u*x*l-g*o*d+a*x*d+u*o*p-a*h*p,b=t*T+n*v+r*S+s*y;if(b===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const w=1/b;return e[0]=T*w,e[1]=(x*d*s-h*p*s-x*r*m+n*p*m+h*r*f-n*d*f)*w,e[2]=(o*p*s-x*l*s+x*r*c-n*p*c-o*r*f+n*l*f)*w,e[3]=(h*l*s-o*d*s-h*r*c+n*d*c+o*r*m-n*l*m)*w,e[4]=v*w,e[5]=(u*p*s-g*d*s+g*r*m-t*p*m-u*r*f+t*d*f)*w,e[6]=(g*l*s-a*p*s-g*r*c+t*p*c+a*r*f-t*l*f)*w,e[7]=(a*d*s-u*l*s+u*r*c-t*d*c-a*r*m+t*l*m)*w,e[8]=S*w,e[9]=(g*h*s-u*x*s-g*n*m+t*x*m+u*n*f-t*h*f)*w,e[10]=(a*x*s-g*o*s+g*n*c-t*x*c-a*n*f+t*o*f)*w,e[11]=(u*o*s-a*h*s-u*n*c+t*h*c+a*n*m-t*o*m)*w,e[12]=y*w,e[13]=(u*x*r-g*h*r+g*n*d-t*x*d-u*n*p+t*h*p)*w,e[14]=(g*o*r-a*x*r-g*n*l+t*x*l+a*n*p-t*o*p)*w,e[15]=(a*h*r-u*o*r+u*n*l-t*h*l-a*n*d+t*o*d)*w,this}scale(e){const t=this.elements,n=e.x,r=e.y,s=e.z;return t[0]*=n,t[4]*=r,t[8]*=s,t[1]*=n,t[5]*=r,t[9]*=s,t[2]*=n,t[6]*=r,t[10]*=s,t[3]*=n,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),r=Math.sin(t),s=1-n,a=e.x,o=e.y,l=e.z,c=s*a,u=s*o;return this.set(c*a+n,c*o-r*l,c*l+r*o,0,c*o+r*l,u*o+n,u*l-r*a,0,c*l-r*o,u*l+r*a,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,s,a){return this.set(1,n,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){const r=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,c=s+s,u=a+a,h=o+o,d=s*c,m=s*u,g=s*h,x=a*u,p=a*h,f=o*h,T=l*c,v=l*u,S=l*h,y=n.x,b=n.y,w=n.z;return r[0]=(1-(x+f))*y,r[1]=(m+S)*y,r[2]=(g-v)*y,r[3]=0,r[4]=(m-S)*b,r[5]=(1-(d+f))*b,r[6]=(p+T)*b,r[7]=0,r[8]=(g+v)*w,r[9]=(p-T)*w,r[10]=(1-(d+x))*w,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){const r=this.elements;let s=Si.set(r[0],r[1],r[2]).length();const a=Si.set(r[4],r[5],r[6]).length(),o=Si.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],$t.copy(this);const c=1/s,u=1/a,h=1/o;return $t.elements[0]*=c,$t.elements[1]*=c,$t.elements[2]*=c,$t.elements[4]*=u,$t.elements[5]*=u,$t.elements[6]*=u,$t.elements[8]*=h,$t.elements[9]*=h,$t.elements[10]*=h,t.setFromRotationMatrix($t),n.x=s,n.y=a,n.z=o,this}makePerspective(e,t,n,r,s,a,o=Rn){const l=this.elements,c=2*s/(t-e),u=2*s/(n-r),h=(t+e)/(t-e),d=(n+r)/(n-r);let m,g;if(o===Rn)m=-(a+s)/(a-s),g=-2*a*s/(a-s);else if(o===ss)m=-a/(a-s),g=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,r,s,a,o=Rn){const l=this.elements,c=1/(t-e),u=1/(n-r),h=1/(a-s),d=(t+e)*c,m=(n+r)*u;let g,x;if(o===Rn)g=(a+s)*h,x=-2*h;else if(o===ss)g=s*h,x=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=x,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Si=new C,$t=new ge,Xh=new C(0,0,0),jh=new C(1,1,1),Nn=new C,Lr=new C,kt=new C,Wo=new ge,Xo=new an;class hs{constructor(e=0,t=0,n=0,r=hs.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],u=r[9],h=r[2],d=r[6],m=r[10];switch(t){case"XYZ":this._y=Math.asin(_t(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-_t(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(_t(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,m),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-_t(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(_t(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-_t(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Wo.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Wo,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Xo.setFromEuler(this),this.setFromQuaternion(Xo,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}hs.DEFAULT_ORDER="XYZ";class Hc{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Yh=0;const jo=new C,Ti=new an,Sn=new ge,Dr=new C,rr=new C,qh=new C,Kh=new an,Yo=new C(1,0,0),qo=new C(0,1,0),Ko=new C(0,0,1),Zh={type:"added"},Zo={type:"removed"};class nt extends fn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Yh++}),this.uuid=sn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=nt.DEFAULT_UP.clone();const e=new C,t=new hs,n=new an,r=new C(1,1,1);function s(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new ge},normalMatrix:{value:new Ne}}),this.matrix=new ge,this.matrixWorld=new ge,this.matrixAutoUpdate=nt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=nt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new Hc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ti.setFromAxisAngle(e,t),this.quaternion.multiply(Ti),this}rotateOnWorldAxis(e,t){return Ti.setFromAxisAngle(e,t),this.quaternion.premultiply(Ti),this}rotateX(e){return this.rotateOnAxis(Yo,e)}rotateY(e){return this.rotateOnAxis(qo,e)}rotateZ(e){return this.rotateOnAxis(Ko,e)}translateOnAxis(e,t){return jo.copy(e).applyQuaternion(this.quaternion),this.position.add(jo.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Yo,e)}translateY(e){return this.translateOnAxis(qo,e)}translateZ(e){return this.translateOnAxis(Ko,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Sn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Dr.copy(e):Dr.set(e,t,n);const r=this.parent;this.updateWorldMatrix(!0,!1),rr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Sn.lookAt(rr,Dr,this.up):Sn.lookAt(Dr,rr,this.up),this.quaternion.setFromRotationMatrix(Sn),r&&(Sn.extractRotation(r.matrixWorld),Ti.setFromRotationMatrix(Sn),this.quaternion.premultiply(Ti.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Zh)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Zo)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(Zo)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),Sn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Sn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Sn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t){let n=[];this[e]===t&&n.push(this);for(let r=0,s=this.children.length;r<s;r++){const a=this.children[r].getObjectsByProperty(e,t);a.length>0&&(n=n.concat(a))}return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(rr,e,qh),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(rr,Kh,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,r=t.length;n<r;n++){const s=t[n];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++){const o=r[s];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),h=a(e.shapes),d=a(e.skeletons),m=a(e.animations),g=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),d.length>0&&(n.skeletons=d),m.length>0&&(n.animations=m),g.length>0&&(n.nodes=g)}return n.object=r,n;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const r=e.children[n];this.add(r.clone())}return this}}nt.DEFAULT_UP=new C(0,1,0);nt.DEFAULT_MATRIX_AUTO_UPDATE=!0;nt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const en=new C,Tn=new C,zs=new C,_n=new C,_i=new C,yi=new C,Jo=new C,Hs=new C,Vs=new C,ks=new C;let Ur=!1;class nn{constructor(e=new C,t=new C,n=new C){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),en.subVectors(e,t),r.cross(en);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,n,r,s){en.subVectors(r,t),Tn.subVectors(n,t),zs.subVectors(e,t);const a=en.dot(en),o=en.dot(Tn),l=en.dot(zs),c=Tn.dot(Tn),u=Tn.dot(zs),h=a*c-o*o;if(h===0)return s.set(-2,-1,-1);const d=1/h,m=(c*l-o*u)*d,g=(a*u-o*l)*d;return s.set(1-m-g,g,m)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,_n),_n.x>=0&&_n.y>=0&&_n.x+_n.y<=1}static getUV(e,t,n,r,s,a,o,l){return Ur===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Ur=!0),this.getInterpolation(e,t,n,r,s,a,o,l)}static getInterpolation(e,t,n,r,s,a,o,l){return this.getBarycoord(e,t,n,r,_n),l.setScalar(0),l.addScaledVector(s,_n.x),l.addScaledVector(a,_n.y),l.addScaledVector(o,_n.z),l}static isFrontFacing(e,t,n,r){return en.subVectors(n,t),Tn.subVectors(e,t),en.cross(Tn).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return en.subVectors(this.c,this.b),Tn.subVectors(this.a,this.b),en.cross(Tn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return nn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return nn.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,r,s){return Ur===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Ur=!0),nn.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}getInterpolation(e,t,n,r,s){return nn.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}containsPoint(e){return nn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return nn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,r=this.b,s=this.c;let a,o;_i.subVectors(r,n),yi.subVectors(s,n),Hs.subVectors(e,n);const l=_i.dot(Hs),c=yi.dot(Hs);if(l<=0&&c<=0)return t.copy(n);Vs.subVectors(e,r);const u=_i.dot(Vs),h=yi.dot(Vs);if(u>=0&&h<=u)return t.copy(r);const d=l*h-u*c;if(d<=0&&l>=0&&u<=0)return a=l/(l-u),t.copy(n).addScaledVector(_i,a);ks.subVectors(e,s);const m=_i.dot(ks),g=yi.dot(ks);if(g>=0&&m<=g)return t.copy(s);const x=m*c-l*g;if(x<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(n).addScaledVector(yi,o);const p=u*g-m*h;if(p<=0&&h-u>=0&&m-g>=0)return Jo.subVectors(s,r),o=(h-u)/(h-u+(m-g)),t.copy(r).addScaledVector(Jo,o);const f=1/(p+x+d);return a=x*f,o=d*f,t.copy(n).addScaledVector(_i,a).addScaledVector(yi,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let Jh=0;class Xt extends fn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Jh++}),this.uuid=sn(),this.name="",this.type="Material",this.blending=Fi,this.side=hn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=_c,this.blendDst=yc,this.blendEquation=Ii,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=ua,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=dh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ps,this.stencilZFail=Ps,this.stencilZPass=Ps,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Fi&&(n.blending=this.blending),this.side!==hn&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=this.alphaHash),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(n.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(t){const s=r(e.textures),a=r(e.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const r=t.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Vc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},tn={h:0,s:0,l:0},Ir={h:0,s:0,l:0};function Gs(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class Te{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Se){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,qt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,r=qt.workingColorSpace){return this.r=e,this.g=t,this.b=n,qt.toWorkingColorSpace(this,r),this}setHSL(e,t,n,r=qt.workingColorSpace){if(e=Ca(e,1),t=_t(t,0,1),n=_t(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,a=2*n-s;this.r=Gs(a,s,e+1/3),this.g=Gs(a,s,e),this.b=Gs(a,s,e-1/3)}return qt.toWorkingColorSpace(this,r),this}setStyle(e,t=Se){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Se){const n=Vc[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Oi(e.r),this.g=Oi(e.g),this.b=Oi(e.b),this}copyLinearToSRGB(e){return this.r=Ls(e.r),this.g=Ls(e.g),this.b=Ls(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Se){return qt.fromWorkingColorSpace(Pt.copy(this),e),Math.round(_t(Pt.r*255,0,255))*65536+Math.round(_t(Pt.g*255,0,255))*256+Math.round(_t(Pt.b*255,0,255))}getHexString(e=Se){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=qt.workingColorSpace){qt.fromWorkingColorSpace(Pt.copy(this),t);const n=Pt.r,r=Pt.g,s=Pt.b,a=Math.max(n,r,s),o=Math.min(n,r,s);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const h=a-o;switch(c=u<=.5?h/(a+o):h/(2-a-o),a){case n:l=(r-s)/h+(r<s?6:0);break;case r:l=(s-n)/h+2;break;case s:l=(n-r)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=qt.workingColorSpace){return qt.fromWorkingColorSpace(Pt.copy(this),t),e.r=Pt.r,e.g=Pt.g,e.b=Pt.b,e}getStyle(e=Se){qt.fromWorkingColorSpace(Pt.copy(this),e);const t=Pt.r,n=Pt.g,r=Pt.b;return e!==Se?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(tn),tn.h+=e,tn.s+=t,tn.l+=n,this.setHSL(tn.h,tn.s,tn.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(tn),e.getHSL(Ir);const n=pr(tn.h,Ir.h,t),r=pr(tn.s,Ir.s,t),s=pr(tn.l,Ir.l,t);return this.setHSL(n,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*r,this.g=s[1]*t+s[4]*n+s[7]*r,this.b=s[2]*t+s[5]*n+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Pt=new Te;Te.NAMES=Vc;class ni extends Xt{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Te(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Ec,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const An=Qh();function Qh(){const i=new ArrayBuffer(4),e=new Float32Array(i),t=new Uint32Array(i),n=new Uint32Array(512),r=new Uint32Array(512);for(let l=0;l<256;++l){const c=l-127;c<-27?(n[l]=0,n[l|256]=32768,r[l]=24,r[l|256]=24):c<-14?(n[l]=1024>>-c-14,n[l|256]=1024>>-c-14|32768,r[l]=-c-1,r[l|256]=-c-1):c<=15?(n[l]=c+15<<10,n[l|256]=c+15<<10|32768,r[l]=13,r[l|256]=13):c<128?(n[l]=31744,n[l|256]=64512,r[l]=24,r[l|256]=24):(n[l]=31744,n[l|256]=64512,r[l]=13,r[l|256]=13)}const s=new Uint32Array(2048),a=new Uint32Array(64),o=new Uint32Array(64);for(let l=1;l<1024;++l){let c=l<<13,u=0;for(;!(c&8388608);)c<<=1,u-=8388608;c&=-8388609,u+=947912704,s[l]=c|u}for(let l=1024;l<2048;++l)s[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)a[l]=l<<23;a[31]=1199570944,a[32]=2147483648;for(let l=33;l<63;++l)a[l]=2147483648+(l-32<<23);a[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(o[l]=1024);return{floatView:e,uint32View:t,baseTable:n,shiftTable:r,mantissaTable:s,exponentTable:a,offsetTable:o}}function $h(i){Math.abs(i)>65504&&console.warn("THREE.DataUtils.toHalfFloat(): Value out of range."),i=_t(i,-65504,65504),An.floatView[0]=i;const e=An.uint32View[0],t=e>>23&511;return An.baseTable[t]+((e&8388607)>>An.shiftTable[t])}function ed(i){const e=i>>10;return An.uint32View[0]=An.mantissaTable[An.offsetTable[e]+(i&1023)]+An.exponentTable[e],An.floatView[0]}const Nr={toHalfFloat:$h,fromHalfFloat:ed},ct=new C,Fr=new se;class pt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=ma,this.updateRange={offset:0,count:-1},this.gpuType=$e,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Fr.fromBufferAttribute(this,t),Fr.applyMatrix3(e),this.setXY(t,Fr.x,Fr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)ct.fromBufferAttribute(this,t),ct.applyMatrix3(e),this.setXYZ(t,ct.x,ct.y,ct.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)ct.fromBufferAttribute(this,t),ct.applyMatrix4(e),this.setXYZ(t,ct.x,ct.y,ct.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)ct.fromBufferAttribute(this,t),ct.applyNormalMatrix(e),this.setXYZ(t,ct.x,ct.y,ct.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)ct.fromBufferAttribute(this,t),ct.transformDirection(e),this.setXYZ(t,ct.x,ct.y,ct.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Pn(t,this.array)),t}setX(e,t){return this.normalized&&(t=Je(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Pn(t,this.array)),t}setY(e,t){return this.normalized&&(t=Je(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Pn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Je(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Pn(t,this.array)),t}setW(e,t){return this.normalized&&(t=Je(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Je(t,this.array),n=Je(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=Je(t,this.array),n=Je(n,this.array),r=Je(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e*=this.itemSize,this.normalized&&(t=Je(t,this.array),n=Je(n,this.array),r=Je(r,this.array),s=Je(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==ma&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}}class kc extends pt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Gc extends pt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Zt extends pt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let td=0;const Yt=new ge,Ws=new nt,Ei=new C,Gt=new Ln,sr=new Ln,Tt=new C;class Jt extends fn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:td++}),this.uuid=sn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Oc(e)?Gc:kc)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Ne().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Yt.makeRotationFromQuaternion(e),this.applyMatrix4(Yt),this}rotateX(e){return Yt.makeRotationX(e),this.applyMatrix4(Yt),this}rotateY(e){return Yt.makeRotationY(e),this.applyMatrix4(Yt),this}rotateZ(e){return Yt.makeRotationZ(e),this.applyMatrix4(Yt),this}translate(e,t,n){return Yt.makeTranslation(e,t,n),this.applyMatrix4(Yt),this}scale(e,t,n){return Yt.makeScale(e,t,n),this.applyMatrix4(Yt),this}lookAt(e){return Ws.lookAt(e),Ws.updateMatrix(),this.applyMatrix4(Ws.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ei).negate(),this.translate(Ei.x,Ei.y,Ei.z),this}setFromPoints(e){const t=[];for(let n=0,r=e.length;n<r;n++){const s=e[n];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Zt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ln);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new C(-1/0,-1/0,-1/0),new C(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){const s=t[n];Gt.setFromBufferAttribute(s),this.morphTargetsRelative?(Tt.addVectors(this.boundingBox.min,Gt.min),this.boundingBox.expandByPoint(Tt),Tt.addVectors(this.boundingBox.max,Gt.max),this.boundingBox.expandByPoint(Tt)):(this.boundingBox.expandByPoint(Gt.min),this.boundingBox.expandByPoint(Gt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new pn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new C,1/0);return}if(e){const n=this.boundingSphere.center;if(Gt.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];sr.setFromBufferAttribute(o),this.morphTargetsRelative?(Tt.addVectors(Gt.min,sr.min),Gt.expandByPoint(Tt),Tt.addVectors(Gt.max,sr.max),Gt.expandByPoint(Tt)):(Gt.expandByPoint(sr.min),Gt.expandByPoint(sr.max))}Gt.getCenter(n);let r=0;for(let s=0,a=e.count;s<a;s++)Tt.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(Tt));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)Tt.fromBufferAttribute(o,c),l&&(Ei.fromBufferAttribute(e,c),Tt.add(Ei)),r=Math.max(r,n.distanceToSquared(Tt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,r=t.position.array,s=t.normal.array,a=t.uv.array,o=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new pt(new Float32Array(4*o),4));const l=this.getAttribute("tangent").array,c=[],u=[];for(let _=0;_<o;_++)c[_]=new C,u[_]=new C;const h=new C,d=new C,m=new C,g=new se,x=new se,p=new se,f=new C,T=new C;function v(_,N,q){h.fromArray(r,_*3),d.fromArray(r,N*3),m.fromArray(r,q*3),g.fromArray(a,_*2),x.fromArray(a,N*2),p.fromArray(a,q*2),d.sub(h),m.sub(h),x.sub(g),p.sub(g);const I=1/(x.x*p.y-p.x*x.y);isFinite(I)&&(f.copy(d).multiplyScalar(p.y).addScaledVector(m,-x.y).multiplyScalar(I),T.copy(m).multiplyScalar(x.x).addScaledVector(d,-p.x).multiplyScalar(I),c[_].add(f),c[N].add(f),c[q].add(f),u[_].add(T),u[N].add(T),u[q].add(T))}let S=this.groups;S.length===0&&(S=[{start:0,count:n.length}]);for(let _=0,N=S.length;_<N;++_){const q=S[_],I=q.start,z=q.count;for(let B=I,J=I+z;B<J;B+=3)v(n[B+0],n[B+1],n[B+2])}const y=new C,b=new C,w=new C,D=new C;function M(_){w.fromArray(s,_*3),D.copy(w);const N=c[_];y.copy(N),y.sub(w.multiplyScalar(w.dot(N))).normalize(),b.crossVectors(D,N);const I=b.dot(u[_])<0?-1:1;l[_*4]=y.x,l[_*4+1]=y.y,l[_*4+2]=y.z,l[_*4+3]=I}for(let _=0,N=S.length;_<N;++_){const q=S[_],I=q.start,z=q.count;for(let B=I,J=I+z;B<J;B+=3)M(n[B+0]),M(n[B+1]),M(n[B+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new pt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,m=n.count;d<m;d++)n.setXYZ(d,0,0,0);const r=new C,s=new C,a=new C,o=new C,l=new C,c=new C,u=new C,h=new C;if(e)for(let d=0,m=e.count;d<m;d+=3){const g=e.getX(d+0),x=e.getX(d+1),p=e.getX(d+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,x),a.fromBufferAttribute(t,p),u.subVectors(a,s),h.subVectors(r,s),u.cross(h),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,p),o.add(u),l.add(u),c.add(u),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let d=0,m=t.count;d<m;d+=3)r.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),u.subVectors(a,s),h.subVectors(r,s),u.cross(h),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Tt.fromBufferAttribute(e,t),Tt.normalize(),e.setXYZ(t,Tt.x,Tt.y,Tt.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,h=o.normalized,d=new c.constructor(l.length*u);let m=0,g=0;for(let x=0,p=l.length;x<p;x++){o.isInterleavedBufferAttribute?m=l[x]*o.data.stride+o.offset:m=l[x]*u;for(let f=0;f<u;f++)d[g++]=c[m++]}return new pt(d,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Jt,n=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=e(l,n);t.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let u=0,h=c.length;u<h;u++){const d=c[u],m=e(d,n);l.push(m)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,d=c.length;h<d;h++){const m=c[h];u.push(m.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],h=s[c];for(let d=0,m=h.length;d<m;d++)u.push(h[d].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,u=a.length;c<u;c++){const h=a[c];this.addGroup(h.start,h.count,h.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Qo=new ge,Zn=new us,Or=new pn,$o=new C,bi=new C,Ai=new C,wi=new C,Xs=new C,Br=new C,zr=new se,Hr=new se,Vr=new se,el=new C,tl=new C,nl=new C,kr=new C,Gr=new C;class Ht extends nt{constructor(e=new Jt,t=new ni){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){Br.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=o[l],h=s[l];u!==0&&(Xs.fromBufferAttribute(h,e),a?Br.addScaledVector(Xs,u):Br.addScaledVector(Xs.sub(t),u))}t.add(Br)}return t}raycast(e,t){const n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Or.copy(n.boundingSphere),Or.applyMatrix4(s),Zn.copy(e.ray).recast(e.near),!(Or.containsPoint(Zn.origin)===!1&&(Zn.intersectSphere(Or,$o)===null||Zn.origin.distanceToSquared($o)>(e.far-e.near)**2))&&(Qo.copy(s).invert(),Zn.copy(e.ray).applyMatrix4(Qo),!(n.boundingBox!==null&&Zn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Zn)))}_computeIntersections(e,t,n){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,h=s.attributes.normal,d=s.groups,m=s.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,x=d.length;g<x;g++){const p=d[g],f=a[p.materialIndex],T=Math.max(p.start,m.start),v=Math.min(o.count,Math.min(p.start+p.count,m.start+m.count));for(let S=T,y=v;S<y;S+=3){const b=o.getX(S),w=o.getX(S+1),D=o.getX(S+2);r=Wr(this,f,e,n,c,u,h,b,w,D),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{const g=Math.max(0,m.start),x=Math.min(o.count,m.start+m.count);for(let p=g,f=x;p<f;p+=3){const T=o.getX(p),v=o.getX(p+1),S=o.getX(p+2);r=Wr(this,a,e,n,c,u,h,T,v,S),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,x=d.length;g<x;g++){const p=d[g],f=a[p.materialIndex],T=Math.max(p.start,m.start),v=Math.min(l.count,Math.min(p.start+p.count,m.start+m.count));for(let S=T,y=v;S<y;S+=3){const b=S,w=S+1,D=S+2;r=Wr(this,f,e,n,c,u,h,b,w,D),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{const g=Math.max(0,m.start),x=Math.min(l.count,m.start+m.count);for(let p=g,f=x;p<f;p+=3){const T=p,v=p+1,S=p+2;r=Wr(this,a,e,n,c,u,h,T,v,S),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}}}function nd(i,e,t,n,r,s,a,o){let l;if(e.side===ft?l=n.intersectTriangle(a,s,r,!0,o):l=n.intersectTriangle(r,s,a,e.side===hn,o),l===null)return null;Gr.copy(o),Gr.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(Gr);return c<t.near||c>t.far?null:{distance:c,point:Gr.clone(),object:i}}function Wr(i,e,t,n,r,s,a,o,l,c){i.getVertexPosition(o,bi),i.getVertexPosition(l,Ai),i.getVertexPosition(c,wi);const u=nd(i,e,t,n,bi,Ai,wi,kr);if(u){r&&(zr.fromBufferAttribute(r,o),Hr.fromBufferAttribute(r,l),Vr.fromBufferAttribute(r,c),u.uv=nn.getInterpolation(kr,bi,Ai,wi,zr,Hr,Vr,new se)),s&&(zr.fromBufferAttribute(s,o),Hr.fromBufferAttribute(s,l),Vr.fromBufferAttribute(s,c),u.uv1=nn.getInterpolation(kr,bi,Ai,wi,zr,Hr,Vr,new se),u.uv2=u.uv1),a&&(el.fromBufferAttribute(a,o),tl.fromBufferAttribute(a,l),nl.fromBufferAttribute(a,c),u.normal=nn.getInterpolation(kr,bi,Ai,wi,el,tl,nl,new C),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const h={a:o,b:l,c,normal:new C,materialIndex:0};nn.getNormal(bi,Ai,wi,h.normal),u.face=h}return u}class Tr extends Jt{constructor(e=1,t=1,n=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],u=[],h=[];let d=0,m=0;g("z","y","x",-1,-1,n,t,e,a,s,0),g("z","y","x",1,-1,n,t,-e,a,s,1),g("x","z","y",1,1,e,n,t,r,a,2),g("x","z","y",1,-1,e,n,-t,r,a,3),g("x","y","z",1,-1,e,t,n,r,s,4),g("x","y","z",-1,-1,e,t,-n,r,s,5),this.setIndex(l),this.setAttribute("position",new Zt(c,3)),this.setAttribute("normal",new Zt(u,3)),this.setAttribute("uv",new Zt(h,2));function g(x,p,f,T,v,S,y,b,w,D,M){const _=S/w,N=y/D,q=S/2,I=y/2,z=b/2,B=w+1,J=D+1;let W=0,K=0;const ee=new C;for(let $=0;$<J;$++){const H=$*N-I;for(let X=0;X<B;X++){const ce=X*_-q;ee[x]=ce*T,ee[p]=H*v,ee[f]=z,c.push(ee.x,ee.y,ee.z),ee[x]=0,ee[p]=0,ee[f]=b>0?1:-1,u.push(ee.x,ee.y,ee.z),h.push(X/w),h.push(1-$/D),W+=1}}for(let $=0;$<D;$++)for(let H=0;H<w;H++){const X=d+H+B*$,ce=d+H+B*($+1),oe=d+(H+1)+B*($+1),he=d+(H+1)+B*$;l.push(X,ce,he),l.push(ce,oe,he),K+=6}o.addGroup(m,K,M),m+=K,d+=W}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Tr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Gi(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const r=i[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function Bt(i){const e={};for(let t=0;t<i.length;t++){const n=Gi(i[t]);for(const r in n)e[r]=n[r]}return e}function id(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Wc(i){return i.getRenderTarget()===null?i.outputColorSpace:jt}const Wi={clone:Gi,merge:Bt};var rd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,sd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class et extends Xt{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=rd,this.fragmentShader=sd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Gi(e.uniforms),this.uniformsGroups=id(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Da extends nt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ge,this.projectionMatrix=new ge,this.projectionMatrixInverse=new ge,this.coordinateSystem=Rn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class yt extends Da{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=ki*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(fr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ki*2*Math.atan(Math.tan(fr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(fr*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,t-=a.offsetY*n/c,r*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Ri=-90,Pi=1;class Xc extends nt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null;const r=new yt(Ri,Pi,e,t);r.layers=this.layers,this.add(r);const s=new yt(Ri,Pi,e,t);s.layers=this.layers,this.add(s);const a=new yt(Ri,Pi,e,t);a.layers=this.layers,this.add(a);const o=new yt(Ri,Pi,e,t);o.layers=this.layers,this.add(o);const l=new yt(Ri,Pi,e,t);l.layers=this.layers,this.add(l);const c=new yt(Ri,Pi,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,r,s,a,o,l]=t;for(const c of t)this.remove(c);if(e===Rn)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===ss)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,s,a,o,l,c]=this.children,u=e.getRenderTarget(),h=e.toneMapping,d=e.xr.enabled;e.toneMapping=un,e.xr.enabled=!1;const m=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0),e.render(t,r),e.setRenderTarget(n,1),e.render(t,s),e.setRenderTarget(n,2),e.render(t,a),e.setRenderTarget(n,3),e.render(t,o),e.setRenderTarget(n,4),e.render(t,l),n.texture.generateMipmaps=m,e.setRenderTarget(n,5),e.render(t,c),e.setRenderTarget(u),e.toneMapping=h,e.xr.enabled=d,n.texture.needsPMREMUpdate=!0}}class jc extends ot{constructor(e,t,n,r,s,a,o,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:oi,super(e,t,n,r,s,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Yc extends it{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];t.encoding!==void 0&&(mr("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===Cn?Se:rn),this.texture=new jc(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Be}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Tr(5,5,5),s=new et({name:"CubemapFromEquirect",uniforms:Gi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:ft,blending:ut});s.uniforms.tEquirect.value=t;const a=new Ht(r,s),o=t.minFilter;return t.minFilter===Gn&&(t.minFilter=Be),new Xc(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,r){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,r);e.setRenderTarget(s)}}const js=new C,ad=new C,od=new Ne;class $n{constructor(e=new C(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const r=js.subVectors(n,t).cross(ad.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(js),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||od.getNormalMatrix(e),r=this.coplanarPoint(js).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Jn=new pn,Xr=new C;class Ua{constructor(e=new $n,t=new $n,n=new $n,r=new $n,s=new $n,a=new $n){this.planes=[e,t,n,r,s,a]}set(e,t,n,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Rn){const n=this.planes,r=e.elements,s=r[0],a=r[1],o=r[2],l=r[3],c=r[4],u=r[5],h=r[6],d=r[7],m=r[8],g=r[9],x=r[10],p=r[11],f=r[12],T=r[13],v=r[14],S=r[15];if(n[0].setComponents(l-s,d-c,p-m,S-f).normalize(),n[1].setComponents(l+s,d+c,p+m,S+f).normalize(),n[2].setComponents(l+a,d+u,p+g,S+T).normalize(),n[3].setComponents(l-a,d-u,p-g,S-T).normalize(),n[4].setComponents(l-o,d-h,p-x,S-v).normalize(),t===Rn)n[5].setComponents(l+o,d+h,p+x,S+v).normalize();else if(t===ss)n[5].setComponents(o,h,x,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Jn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Jn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Jn)}intersectsSprite(e){return Jn.center.set(0,0,0),Jn.radius=.7071067811865476,Jn.applyMatrix4(e.matrixWorld),this.intersectsSphere(Jn)}intersectsSphere(e){const t=this.planes,n=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const r=t[n];if(Xr.x=r.normal.x>0?e.max.x:e.min.x,Xr.y=r.normal.y>0?e.max.y:e.min.y,Xr.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Xr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function qc(){let i=null,e=!1,t=null,n=null;function r(s,a){t(s,a),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function ld(i,e){const t=e.isWebGL2,n=new WeakMap;function r(c,u){const h=c.array,d=c.usage,m=i.createBuffer();i.bindBuffer(u,m),i.bufferData(u,h,d),c.onUploadCallback();let g;if(h instanceof Float32Array)g=i.FLOAT;else if(h instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)g=i.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=i.UNSIGNED_SHORT;else if(h instanceof Int16Array)g=i.SHORT;else if(h instanceof Uint32Array)g=i.UNSIGNED_INT;else if(h instanceof Int32Array)g=i.INT;else if(h instanceof Int8Array)g=i.BYTE;else if(h instanceof Uint8Array)g=i.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)g=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:m,type:g,bytesPerElement:h.BYTES_PER_ELEMENT,version:c.version}}function s(c,u,h){const d=u.array,m=u.updateRange;i.bindBuffer(h,c),m.count===-1?i.bufferSubData(h,0,d):(t?i.bufferSubData(h,m.offset*d.BYTES_PER_ELEMENT,d,m.offset,m.count):i.bufferSubData(h,m.offset*d.BYTES_PER_ELEMENT,d.subarray(m.offset,m.offset+m.count)),m.count=-1),u.onUploadCallback()}function a(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function o(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=n.get(c);u&&(i.deleteBuffer(u.buffer),n.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const d=n.get(c);(!d||d.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const h=n.get(c);h===void 0?n.set(c,r(c,u)):h.version<c.version&&(s(h.buffer,c,u),h.version=c.version)}return{get:a,remove:o,update:l}}class Ia extends Jt{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};const s=e/2,a=t/2,o=Math.floor(n),l=Math.floor(r),c=o+1,u=l+1,h=e/o,d=t/l,m=[],g=[],x=[],p=[];for(let f=0;f<u;f++){const T=f*d-a;for(let v=0;v<c;v++){const S=v*h-s;g.push(S,-T,0),x.push(0,0,1),p.push(v/o),p.push(1-f/l)}}for(let f=0;f<l;f++)for(let T=0;T<o;T++){const v=T+c*f,S=T+c*(f+1),y=T+1+c*(f+1),b=T+1+c*f;m.push(v,S,b),m.push(S,y,b)}this.setIndex(m),this.setAttribute("position",new Zt(g,3)),this.setAttribute("normal",new Zt(x,3)),this.setAttribute("uv",new Zt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ia(e.width,e.height,e.widthSegments,e.heightSegments)}}var cd=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,ud=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,hd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,dd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,fd=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,pd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,md=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,gd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,vd=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,xd=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Md=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Sd=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			 return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float R21 = R12;
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Td=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,_d=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,yd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Ed=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,bd=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Ad=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,wd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Rd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Pd=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Cd=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Ld=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Dd=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Ud=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Id=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Nd=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Fd=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Od="gl_FragColor = linearToOutputTexel( gl_FragColor );",Bd=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,zd=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Hd=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Vd=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,kd=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Gd=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Wd=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Xd=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,jd=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Yd=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,qd=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Kd=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Zd=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Jd=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Qd=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,$d=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,ef=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,tf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,nf=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,rf=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,sf=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,af=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	anisotropyV /= material.anisotropy;
	material.anisotropy = saturate( material.anisotropy );
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x - tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x + tbn[ 0 ] * anisotropyV.y;
#endif`,of=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,lf=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,cf=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometry.viewDir, geometry.normal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,uf=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,hf=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,df=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ff=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,pf=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,mf=`#ifdef USE_MAP
	diffuseColor *= texture2D( map, vMapUv );
#endif`,gf=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,vf=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,xf=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Mf=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Sf=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Tf=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,_f=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,yf=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,Ef=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,bf=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 geometryNormal = normal;`,Af=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,wf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Rf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Pf=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Cf=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Lf=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,Df=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Uf=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,If=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Nf=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Ff=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Of=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Bf=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,zf=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Hf=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Vf=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,kf=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Gf=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,Wf=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Xf=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,jf=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Yf=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,qf=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,Kf=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Zf=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Jf=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Qf=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,$f=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,ep=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,tp=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,np=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,ip=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,rp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,sp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,ap=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const op=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,lp=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,up=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,hp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,dp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,fp=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,pp=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,mp=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,gp=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,vp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,xp=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Mp=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Sp=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Tp=`#include <common>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,_p=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,yp=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ep=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,bp=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Ap=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,wp=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Rp=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Pp=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Cp=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Lp=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Dp=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Up=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ip=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Np=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Fp=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Op=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Bp=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,zp=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Hp=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ee={alphahash_fragment:cd,alphahash_pars_fragment:ud,alphamap_fragment:hd,alphamap_pars_fragment:dd,alphatest_fragment:fd,alphatest_pars_fragment:pd,aomap_fragment:md,aomap_pars_fragment:gd,begin_vertex:vd,beginnormal_vertex:xd,bsdfs:Md,iridescence_fragment:Sd,bumpmap_pars_fragment:Td,clipping_planes_fragment:_d,clipping_planes_pars_fragment:yd,clipping_planes_pars_vertex:Ed,clipping_planes_vertex:bd,color_fragment:Ad,color_pars_fragment:wd,color_pars_vertex:Rd,color_vertex:Pd,common:Cd,cube_uv_reflection_fragment:Ld,defaultnormal_vertex:Dd,displacementmap_pars_vertex:Ud,displacementmap_vertex:Id,emissivemap_fragment:Nd,emissivemap_pars_fragment:Fd,colorspace_fragment:Od,colorspace_pars_fragment:Bd,envmap_fragment:zd,envmap_common_pars_fragment:Hd,envmap_pars_fragment:Vd,envmap_pars_vertex:kd,envmap_physical_pars_fragment:ef,envmap_vertex:Gd,fog_vertex:Wd,fog_pars_vertex:Xd,fog_fragment:jd,fog_pars_fragment:Yd,gradientmap_pars_fragment:qd,lightmap_fragment:Kd,lightmap_pars_fragment:Zd,lights_lambert_fragment:Jd,lights_lambert_pars_fragment:Qd,lights_pars_begin:$d,lights_toon_fragment:tf,lights_toon_pars_fragment:nf,lights_phong_fragment:rf,lights_phong_pars_fragment:sf,lights_physical_fragment:af,lights_physical_pars_fragment:of,lights_fragment_begin:lf,lights_fragment_maps:cf,lights_fragment_end:uf,logdepthbuf_fragment:hf,logdepthbuf_pars_fragment:df,logdepthbuf_pars_vertex:ff,logdepthbuf_vertex:pf,map_fragment:mf,map_pars_fragment:gf,map_particle_fragment:vf,map_particle_pars_fragment:xf,metalnessmap_fragment:Mf,metalnessmap_pars_fragment:Sf,morphcolor_vertex:Tf,morphnormal_vertex:_f,morphtarget_pars_vertex:yf,morphtarget_vertex:Ef,normal_fragment_begin:bf,normal_fragment_maps:Af,normal_pars_fragment:wf,normal_pars_vertex:Rf,normal_vertex:Pf,normalmap_pars_fragment:Cf,clearcoat_normal_fragment_begin:Lf,clearcoat_normal_fragment_maps:Df,clearcoat_pars_fragment:Uf,iridescence_pars_fragment:If,opaque_fragment:Nf,packing:Ff,premultiplied_alpha_fragment:Of,project_vertex:Bf,dithering_fragment:zf,dithering_pars_fragment:Hf,roughnessmap_fragment:Vf,roughnessmap_pars_fragment:kf,shadowmap_pars_fragment:Gf,shadowmap_pars_vertex:Wf,shadowmap_vertex:Xf,shadowmask_pars_fragment:jf,skinbase_vertex:Yf,skinning_pars_vertex:qf,skinning_vertex:Kf,skinnormal_vertex:Zf,specularmap_fragment:Jf,specularmap_pars_fragment:Qf,tonemapping_fragment:$f,tonemapping_pars_fragment:ep,transmission_fragment:tp,transmission_pars_fragment:np,uv_pars_fragment:ip,uv_pars_vertex:rp,uv_vertex:sp,worldpos_vertex:ap,background_vert:op,background_frag:lp,backgroundCube_vert:cp,backgroundCube_frag:up,cube_vert:hp,cube_frag:dp,depth_vert:fp,depth_frag:pp,distanceRGBA_vert:mp,distanceRGBA_frag:gp,equirect_vert:vp,equirect_frag:xp,linedashed_vert:Mp,linedashed_frag:Sp,meshbasic_vert:Tp,meshbasic_frag:_p,meshlambert_vert:yp,meshlambert_frag:Ep,meshmatcap_vert:bp,meshmatcap_frag:Ap,meshnormal_vert:wp,meshnormal_frag:Rp,meshphong_vert:Pp,meshphong_frag:Cp,meshphysical_vert:Lp,meshphysical_frag:Dp,meshtoon_vert:Up,meshtoon_frag:Ip,points_vert:Np,points_frag:Fp,shadow_vert:Op,shadow_frag:Bp,sprite_vert:zp,sprite_frag:Hp},ae={common:{diffuse:{value:new Te(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ne},alphaMap:{value:null},alphaMapTransform:{value:new Ne},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ne}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ne}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ne}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ne},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ne},normalScale:{value:new se(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ne},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ne}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ne}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ne}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Te(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Te(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ne},alphaTest:{value:0},uvTransform:{value:new Ne}},sprite:{diffuse:{value:new Te(16777215)},opacity:{value:1},center:{value:new se(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ne},alphaMap:{value:null},alphaMapTransform:{value:new Ne},alphaTest:{value:0}}},Lt={basic:{uniforms:Bt([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.fog]),vertexShader:Ee.meshbasic_vert,fragmentShader:Ee.meshbasic_frag},lambert:{uniforms:Bt([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,ae.lights,{emissive:{value:new Te(0)}}]),vertexShader:Ee.meshlambert_vert,fragmentShader:Ee.meshlambert_frag},phong:{uniforms:Bt([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,ae.lights,{emissive:{value:new Te(0)},specular:{value:new Te(1118481)},shininess:{value:30}}]),vertexShader:Ee.meshphong_vert,fragmentShader:Ee.meshphong_frag},standard:{uniforms:Bt([ae.common,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.roughnessmap,ae.metalnessmap,ae.fog,ae.lights,{emissive:{value:new Te(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ee.meshphysical_vert,fragmentShader:Ee.meshphysical_frag},toon:{uniforms:Bt([ae.common,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.gradientmap,ae.fog,ae.lights,{emissive:{value:new Te(0)}}]),vertexShader:Ee.meshtoon_vert,fragmentShader:Ee.meshtoon_frag},matcap:{uniforms:Bt([ae.common,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,{matcap:{value:null}}]),vertexShader:Ee.meshmatcap_vert,fragmentShader:Ee.meshmatcap_frag},points:{uniforms:Bt([ae.points,ae.fog]),vertexShader:Ee.points_vert,fragmentShader:Ee.points_frag},dashed:{uniforms:Bt([ae.common,ae.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ee.linedashed_vert,fragmentShader:Ee.linedashed_frag},depth:{uniforms:Bt([ae.common,ae.displacementmap]),vertexShader:Ee.depth_vert,fragmentShader:Ee.depth_frag},normal:{uniforms:Bt([ae.common,ae.bumpmap,ae.normalmap,ae.displacementmap,{opacity:{value:1}}]),vertexShader:Ee.meshnormal_vert,fragmentShader:Ee.meshnormal_frag},sprite:{uniforms:Bt([ae.sprite,ae.fog]),vertexShader:Ee.sprite_vert,fragmentShader:Ee.sprite_frag},background:{uniforms:{uvTransform:{value:new Ne},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ee.background_vert,fragmentShader:Ee.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Ee.backgroundCube_vert,fragmentShader:Ee.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ee.cube_vert,fragmentShader:Ee.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ee.equirect_vert,fragmentShader:Ee.equirect_frag},distanceRGBA:{uniforms:Bt([ae.common,ae.displacementmap,{referencePosition:{value:new C},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ee.distanceRGBA_vert,fragmentShader:Ee.distanceRGBA_frag},shadow:{uniforms:Bt([ae.lights,ae.fog,{color:{value:new Te(0)},opacity:{value:1}}]),vertexShader:Ee.shadow_vert,fragmentShader:Ee.shadow_frag}};Lt.physical={uniforms:Bt([Lt.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ne},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ne},clearcoatNormalScale:{value:new se(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ne},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ne},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ne},sheen:{value:0},sheenColor:{value:new Te(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ne},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ne},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ne},transmissionSamplerSize:{value:new se},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ne},attenuationDistance:{value:0},attenuationColor:{value:new Te(0)},specularColor:{value:new Te(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ne},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ne},anisotropyVector:{value:new se},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ne}}]),vertexShader:Ee.meshphysical_vert,fragmentShader:Ee.meshphysical_frag};const jr={r:0,b:0,g:0};function Vp(i,e,t,n,r,s,a){const o=new Te(0);let l=s===!0?0:1,c,u,h=null,d=0,m=null;function g(p,f){let T=!1,v=f.isScene===!0?f.background:null;switch(v&&v.isTexture&&(v=(f.backgroundBlurriness>0?t:e).get(v)),v===null?x(o,l):v&&v.isColor&&(x(v,1),T=!0),i.xr.getEnvironmentBlendMode()){case"opaque":T=!0;break;case"additive":n.buffers.color.setClear(0,0,0,1,a),T=!0;break;case"alpha-blend":n.buffers.color.setClear(0,0,0,0,a),T=!0;break}(i.autoClear||T)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),v&&(v.isCubeTexture||v.mapping===os)?(u===void 0&&(u=new Ht(new Tr(1,1,1),new et({name:"BackgroundCubeMaterial",uniforms:Gi(Lt.backgroundCube.uniforms),vertexShader:Lt.backgroundCube.vertexShader,fragmentShader:Lt.backgroundCube.fragmentShader,side:ft,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(b,w,D){this.matrixWorld.copyPosition(D.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),u.material.uniforms.envMap.value=v,u.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=f.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,u.material.toneMapped=v.colorSpace!==Se,(h!==v||d!==v.version||m!==i.toneMapping)&&(u.material.needsUpdate=!0,h=v,d=v.version,m=i.toneMapping),u.layers.enableAll(),p.unshift(u,u.geometry,u.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new Ht(new Ia(2,2),new et({name:"BackgroundMaterial",uniforms:Gi(Lt.background.uniforms),vertexShader:Lt.background.vertexShader,fragmentShader:Lt.background.fragmentShader,side:hn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,c.material.toneMapped=v.colorSpace!==Se,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(h!==v||d!==v.version||m!==i.toneMapping)&&(c.material.needsUpdate=!0,h=v,d=v.version,m=i.toneMapping),c.layers.enableAll(),p.unshift(c,c.geometry,c.material,0,0,null))}function x(p,f){p.getRGB(jr,Wc(i)),n.buffers.color.setClear(jr.r,jr.g,jr.b,f,a)}return{getClearColor:function(){return o},setClearColor:function(p,f=1){o.set(p),l=f,x(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(p){l=p,x(o,l)},render:g}}function kp(i,e,t,n){const r=i.getParameter(i.MAX_VERTEX_ATTRIBS),s=n.isWebGL2?null:e.get("OES_vertex_array_object"),a=n.isWebGL2||s!==null,o={},l=p(null);let c=l,u=!1;function h(z,B,J,W,K){let ee=!1;if(a){const $=x(W,J,B);c!==$&&(c=$,m(c.object)),ee=f(z,W,J,K),ee&&T(z,W,J,K)}else{const $=B.wireframe===!0;(c.geometry!==W.id||c.program!==J.id||c.wireframe!==$)&&(c.geometry=W.id,c.program=J.id,c.wireframe=$,ee=!0)}K!==null&&t.update(K,i.ELEMENT_ARRAY_BUFFER),(ee||u)&&(u=!1,D(z,B,J,W),K!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(K).buffer))}function d(){return n.isWebGL2?i.createVertexArray():s.createVertexArrayOES()}function m(z){return n.isWebGL2?i.bindVertexArray(z):s.bindVertexArrayOES(z)}function g(z){return n.isWebGL2?i.deleteVertexArray(z):s.deleteVertexArrayOES(z)}function x(z,B,J){const W=J.wireframe===!0;let K=o[z.id];K===void 0&&(K={},o[z.id]=K);let ee=K[B.id];ee===void 0&&(ee={},K[B.id]=ee);let $=ee[W];return $===void 0&&($=p(d()),ee[W]=$),$}function p(z){const B=[],J=[],W=[];for(let K=0;K<r;K++)B[K]=0,J[K]=0,W[K]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:B,enabledAttributes:J,attributeDivisors:W,object:z,attributes:{},index:null}}function f(z,B,J,W){const K=c.attributes,ee=B.attributes;let $=0;const H=J.getAttributes();for(const X in H)if(H[X].location>=0){const oe=K[X];let he=ee[X];if(he===void 0&&(X==="instanceMatrix"&&z.instanceMatrix&&(he=z.instanceMatrix),X==="instanceColor"&&z.instanceColor&&(he=z.instanceColor)),oe===void 0||oe.attribute!==he||he&&oe.data!==he.data)return!0;$++}return c.attributesNum!==$||c.index!==W}function T(z,B,J,W){const K={},ee=B.attributes;let $=0;const H=J.getAttributes();for(const X in H)if(H[X].location>=0){let oe=ee[X];oe===void 0&&(X==="instanceMatrix"&&z.instanceMatrix&&(oe=z.instanceMatrix),X==="instanceColor"&&z.instanceColor&&(oe=z.instanceColor));const he={};he.attribute=oe,oe&&oe.data&&(he.data=oe.data),K[X]=he,$++}c.attributes=K,c.attributesNum=$,c.index=W}function v(){const z=c.newAttributes;for(let B=0,J=z.length;B<J;B++)z[B]=0}function S(z){y(z,0)}function y(z,B){const J=c.newAttributes,W=c.enabledAttributes,K=c.attributeDivisors;J[z]=1,W[z]===0&&(i.enableVertexAttribArray(z),W[z]=1),K[z]!==B&&((n.isWebGL2?i:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](z,B),K[z]=B)}function b(){const z=c.newAttributes,B=c.enabledAttributes;for(let J=0,W=B.length;J<W;J++)B[J]!==z[J]&&(i.disableVertexAttribArray(J),B[J]=0)}function w(z,B,J,W,K,ee,$){$===!0?i.vertexAttribIPointer(z,B,J,K,ee):i.vertexAttribPointer(z,B,J,W,K,ee)}function D(z,B,J,W){if(n.isWebGL2===!1&&(z.isInstancedMesh||W.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;v();const K=W.attributes,ee=J.getAttributes(),$=B.defaultAttributeValues;for(const H in ee){const X=ee[H];if(X.location>=0){let ce=K[H];if(ce===void 0&&(H==="instanceMatrix"&&z.instanceMatrix&&(ce=z.instanceMatrix),H==="instanceColor"&&z.instanceColor&&(ce=z.instanceColor)),ce!==void 0){const oe=ce.normalized,he=ce.itemSize,Me=t.get(ce);if(Me===void 0)continue;const Le=Me.buffer,be=Me.type,Xe=Me.bytesPerElement,At=n.isWebGL2===!0&&(be===i.INT||be===i.UNSIGNED_INT||ce.gpuType===Rc);if(ce.isInterleavedBufferAttribute){const Oe=ce.data,F=Oe.stride,vt=ce.offset;if(Oe.isInstancedInterleavedBuffer){for(let _e=0;_e<X.locationSize;_e++)y(X.location+_e,Oe.meshPerAttribute);z.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=Oe.meshPerAttribute*Oe.count)}else for(let _e=0;_e<X.locationSize;_e++)S(X.location+_e);i.bindBuffer(i.ARRAY_BUFFER,Le);for(let _e=0;_e<X.locationSize;_e++)w(X.location+_e,he/X.locationSize,be,oe,F*Xe,(vt+he/X.locationSize*_e)*Xe,At)}else{if(ce.isInstancedBufferAttribute){for(let Oe=0;Oe<X.locationSize;Oe++)y(X.location+Oe,ce.meshPerAttribute);z.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=ce.meshPerAttribute*ce.count)}else for(let Oe=0;Oe<X.locationSize;Oe++)S(X.location+Oe);i.bindBuffer(i.ARRAY_BUFFER,Le);for(let Oe=0;Oe<X.locationSize;Oe++)w(X.location+Oe,he/X.locationSize,be,oe,he*Xe,he/X.locationSize*Oe*Xe,At)}}else if($!==void 0){const oe=$[H];if(oe!==void 0)switch(oe.length){case 2:i.vertexAttrib2fv(X.location,oe);break;case 3:i.vertexAttrib3fv(X.location,oe);break;case 4:i.vertexAttrib4fv(X.location,oe);break;default:i.vertexAttrib1fv(X.location,oe)}}}}b()}function M(){q();for(const z in o){const B=o[z];for(const J in B){const W=B[J];for(const K in W)g(W[K].object),delete W[K];delete B[J]}delete o[z]}}function _(z){if(o[z.id]===void 0)return;const B=o[z.id];for(const J in B){const W=B[J];for(const K in W)g(W[K].object),delete W[K];delete B[J]}delete o[z.id]}function N(z){for(const B in o){const J=o[B];if(J[z.id]===void 0)continue;const W=J[z.id];for(const K in W)g(W[K].object),delete W[K];delete J[z.id]}}function q(){I(),u=!0,c!==l&&(c=l,m(c.object))}function I(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:q,resetDefaultState:I,dispose:M,releaseStatesOfGeometry:_,releaseStatesOfProgram:N,initAttributes:v,enableAttribute:S,disableUnusedAttributes:b}}function Gp(i,e,t,n){const r=n.isWebGL2;let s;function a(c){s=c}function o(c,u){i.drawArrays(s,c,u),t.update(u,s,1)}function l(c,u,h){if(h===0)return;let d,m;if(r)d=i,m="drawArraysInstanced";else if(d=e.get("ANGLE_instanced_arrays"),m="drawArraysInstancedANGLE",d===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[m](s,c,u,h),t.update(u,s,h)}this.setMode=a,this.render=o,this.renderInstances=l}function Wp(i,e,t){let n;function r(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const w=e.get("EXT_texture_filter_anisotropic");n=i.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(w){if(w==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const a=typeof WebGL2RenderingContext<"u"&&i.constructor.name==="WebGL2RenderingContext";let o=t.precision!==void 0?t.precision:"highp";const l=s(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);const c=a||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,h=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),d=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),x=i.getParameter(i.MAX_VERTEX_ATTRIBS),p=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),f=i.getParameter(i.MAX_VARYING_VECTORS),T=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),v=d>0,S=a||e.has("OES_texture_float"),y=v&&S,b=a?i.getParameter(i.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:c,getMaxAnisotropy:r,getMaxPrecision:s,precision:o,logarithmicDepthBuffer:u,maxTextures:h,maxVertexTextures:d,maxTextureSize:m,maxCubemapSize:g,maxAttributes:x,maxVertexUniforms:p,maxVaryings:f,maxFragmentUniforms:T,vertexTextures:v,floatFragmentTextures:S,floatVertexTextures:y,maxSamples:b}}function Xp(i){const e=this;let t=null,n=0,r=!1,s=!1;const a=new $n,o=new Ne,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const m=h.length!==0||d||n!==0||r;return r=d,n=h.length,m},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,d){t=u(h,d,0)},this.setState=function(h,d,m){const g=h.clippingPlanes,x=h.clipIntersection,p=h.clipShadows,f=i.get(h);if(!r||g===null||g.length===0||s&&!p)s?u(null):c();else{const T=s?0:n,v=T*4;let S=f.clippingState||null;l.value=S,S=u(g,d,v,m);for(let y=0;y!==v;++y)S[y]=t[y];f.clippingState=S,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=T}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,d,m,g){const x=h!==null?h.length:0;let p=null;if(x!==0){if(p=l.value,g!==!0||p===null){const f=m+x*4,T=d.matrixWorldInverse;o.getNormalMatrix(T),(p===null||p.length<f)&&(p=new Float32Array(f));for(let v=0,S=m;v!==x;++v,S+=4)a.copy(h[v]).applyMatrix4(T,o),a.normal.toArray(p,S),p[S+3]=a.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,p}}function jp(i){let e=new WeakMap;function t(a,o){return o===gr?a.mapping=oi:o===ha&&(a.mapping=Hi),a}function n(a){if(a&&a.isTexture&&a.isRenderTargetTexture===!1){const o=a.mapping;if(o===gr||o===ha)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new Yc(l.height/2);return c.fromEquirectangularTexture(i,a),e.set(a,c),a.addEventListener("dispose",r),t(c.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}class Na extends Da{constructor(e=-1,t=1,n=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-e,a=n+e,o=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Ni=4,il=[.125,.215,.35,.446,.526,.582],ti=20,Ys=new Na,rl=new Te;let qs=null;const ei=(1+Math.sqrt(5))/2,Ci=1/ei,sl=[new C(1,1,1),new C(-1,1,1),new C(1,1,-1),new C(-1,1,-1),new C(0,ei,Ci),new C(0,ei,-Ci),new C(Ci,0,ei),new C(-Ci,0,ei),new C(ei,Ci,0),new C(-ei,Ci,0)];class al{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,r=100){qs=this._renderer.getRenderTarget(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=cl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ll(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(qs),e.scissorTest=!1,Yr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===oi||e.mapping===Hi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),qs=this._renderer.getRenderTarget();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Be,minFilter:Be,generateMipmaps:!1,type:bt,format:Ut,colorSpace:jt,depthBuffer:!1},r=ol(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ol(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Yp(s)),this._blurMaterial=qp(s,e,t)}return r}_compileMaterial(e){const t=new Ht(this._lodPlanes[0],e);this._renderer.compile(t,Ys)}_sceneToCubeUV(e,t,n,r){const o=new yt(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,d=u.toneMapping;u.getClearColor(rl),u.toneMapping=un,u.autoClear=!1;const m=new ni({name:"PMREM.Background",side:ft,depthWrite:!1,depthTest:!1}),g=new Ht(new Tr,m);let x=!1;const p=e.background;p?p.isColor&&(m.color.copy(p),e.background=null,x=!0):(m.color.copy(rl),x=!0);for(let f=0;f<6;f++){const T=f%3;T===0?(o.up.set(0,l[f],0),o.lookAt(c[f],0,0)):T===1?(o.up.set(0,0,l[f]),o.lookAt(0,c[f],0)):(o.up.set(0,l[f],0),o.lookAt(0,0,c[f]));const v=this._cubeSize;Yr(r,T*v,f>2?v:0,v,v),u.setRenderTarget(r),x&&u.render(g,o),u.render(e,o)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=d,u.autoClear=h,e.background=p}_textureToCubeUV(e,t){const n=this._renderer,r=e.mapping===oi||e.mapping===Hi;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=cl()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ll());const s=r?this._cubemapMaterial:this._equirectMaterial,a=new Ht(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;Yr(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,Ys)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=sl[(r-1)%sl.length];this._blur(e,r-1,r,s,a)}t.autoClear=n}_blur(e,t,n,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,r,"latitudinal",s),this._halfBlur(a,e,n,n,r,"longitudinal",s)}_halfBlur(e,t,n,r,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new Ht(this._lodPlanes[r],c),d=c.uniforms,m=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*ti-1),x=s/g,p=isFinite(s)?1+Math.floor(u*x):ti;p>ti&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${ti}`);const f=[];let T=0;for(let w=0;w<ti;++w){const D=w/x,M=Math.exp(-D*D/2);f.push(M),w===0?T+=M:w<p&&(T+=2*M)}for(let w=0;w<f.length;w++)f[w]=f[w]/T;d.envMap.value=e.texture,d.samples.value=p,d.weights.value=f,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:v}=this;d.dTheta.value=g,d.mipInt.value=v-n;const S=this._sizeLods[r],y=3*S*(r>v-Ni?r-v+Ni:0),b=4*(this._cubeSize-S);Yr(t,y,b,3*S,2*S),l.setRenderTarget(t),l.render(h,Ys)}}function Yp(i){const e=[],t=[],n=[];let r=i;const s=i-Ni+1+il.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);t.push(o);let l=1/o;a>i-Ni?l=il[a-i+Ni-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),u=-c,h=1+c,d=[u,u,h,u,h,h,u,u,h,h,u,h],m=6,g=6,x=3,p=2,f=1,T=new Float32Array(x*g*m),v=new Float32Array(p*g*m),S=new Float32Array(f*g*m);for(let b=0;b<m;b++){const w=b%3*2/3-1,D=b>2?0:-1,M=[w,D,0,w+2/3,D,0,w+2/3,D+1,0,w,D,0,w+2/3,D+1,0,w,D+1,0];T.set(M,x*g*b),v.set(d,p*g*b);const _=[b,b,b,b,b,b];S.set(_,f*g*b)}const y=new Jt;y.setAttribute("position",new pt(T,x)),y.setAttribute("uv",new pt(v,p)),y.setAttribute("faceIndex",new pt(S,f)),e.push(y),r>Ni&&r--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function ol(i,e,t){const n=new it(i,e,t);return n.texture.mapping=os,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Yr(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function qp(i,e,t){const n=new Float32Array(ti),r=new C(0,1,0);return new et({name:"SphericalGaussianBlur",defines:{n:ti,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Fa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:ut,depthTest:!1,depthWrite:!1})}function ll(){return new et({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Fa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:ut,depthTest:!1,depthWrite:!1})}function cl(){return new et({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Fa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ut,depthTest:!1,depthWrite:!1})}function Fa(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Kp(i){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===gr||l===ha,u=l===oi||l===Hi;if(c||u)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let h=e.get(o);return t===null&&(t=new al(i)),h=c?t.fromEquirectangular(o,h):t.fromCubemap(o,h),e.set(o,h),h.texture}else{if(e.has(o))return e.get(o).texture;{const h=o.image;if(c&&h&&h.height>0||u&&h&&r(h)){t===null&&(t=new al(i));const d=c?t.fromEquirectangular(o):t.fromCubemap(o);return e.set(o,d),o.addEventListener("dispose",s),d.texture}else return null}}}return o}function r(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function Zp(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const r=t(n);return r===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function Jp(i,e,t,n){const r={},s=new WeakMap;function a(h){const d=h.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);for(const g in d.morphAttributes){const x=d.morphAttributes[g];for(let p=0,f=x.length;p<f;p++)e.remove(x[p])}d.removeEventListener("dispose",a),delete r[d.id];const m=s.get(d);m&&(e.remove(m),s.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(h,d){return r[d.id]===!0||(d.addEventListener("dispose",a),r[d.id]=!0,t.memory.geometries++),d}function l(h){const d=h.attributes;for(const g in d)e.update(d[g],i.ARRAY_BUFFER);const m=h.morphAttributes;for(const g in m){const x=m[g];for(let p=0,f=x.length;p<f;p++)e.update(x[p],i.ARRAY_BUFFER)}}function c(h){const d=[],m=h.index,g=h.attributes.position;let x=0;if(m!==null){const T=m.array;x=m.version;for(let v=0,S=T.length;v<S;v+=3){const y=T[v+0],b=T[v+1],w=T[v+2];d.push(y,b,b,w,w,y)}}else{const T=g.array;x=g.version;for(let v=0,S=T.length/3-1;v<S;v+=3){const y=v+0,b=v+1,w=v+2;d.push(y,b,b,w,w,y)}}const p=new(Oc(d)?Gc:kc)(d,1);p.version=x;const f=s.get(h);f&&e.remove(f),s.set(h,p)}function u(h){const d=s.get(h);if(d){const m=h.index;m!==null&&d.version<m.version&&c(h)}else c(h);return s.get(h)}return{get:o,update:l,getWireframeAttribute:u}}function Qp(i,e,t,n){const r=n.isWebGL2;let s;function a(d){s=d}let o,l;function c(d){o=d.type,l=d.bytesPerElement}function u(d,m){i.drawElements(s,m,o,d*l),t.update(m,s,1)}function h(d,m,g){if(g===0)return;let x,p;if(r)x=i,p="drawElementsInstanced";else if(x=e.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",x===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}x[p](s,m,o,d*l,g),t.update(m,s,g)}this.setMode=a,this.setIndex=c,this.render=u,this.renderInstances=h}function $p(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(s/3);break;case i.LINES:t.lines+=o*(s/2);break;case i.LINE_STRIP:t.lines+=o*(s-1);break;case i.LINE_LOOP:t.lines+=o*s;break;case i.POINTS:t.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function em(i,e){return i[0]-e[0]}function tm(i,e){return Math.abs(e[1])-Math.abs(i[1])}function nm(i,e,t){const n={},r=new Float32Array(8),s=new WeakMap,a=new Ze,o=[];for(let c=0;c<8;c++)o[c]=[c,0];function l(c,u,h){const d=c.morphTargetInfluences;if(e.isWebGL2===!0){const g=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,x=g!==void 0?g.length:0;let p=s.get(u);if(p===void 0||p.count!==x){let B=function(){I.dispose(),s.delete(u),u.removeEventListener("dispose",B)};var m=B;p!==void 0&&p.texture.dispose();const v=u.morphAttributes.position!==void 0,S=u.morphAttributes.normal!==void 0,y=u.morphAttributes.color!==void 0,b=u.morphAttributes.position||[],w=u.morphAttributes.normal||[],D=u.morphAttributes.color||[];let M=0;v===!0&&(M=1),S===!0&&(M=2),y===!0&&(M=3);let _=u.attributes.position.count*M,N=1;_>e.maxTextureSize&&(N=Math.ceil(_/e.maxTextureSize),_=e.maxTextureSize);const q=new Float32Array(_*N*4*x),I=new zc(q,_,N,x);I.type=$e,I.needsUpdate=!0;const z=M*4;for(let J=0;J<x;J++){const W=b[J],K=w[J],ee=D[J],$=_*N*4*J;for(let H=0;H<W.count;H++){const X=H*z;v===!0&&(a.fromBufferAttribute(W,H),q[$+X+0]=a.x,q[$+X+1]=a.y,q[$+X+2]=a.z,q[$+X+3]=0),S===!0&&(a.fromBufferAttribute(K,H),q[$+X+4]=a.x,q[$+X+5]=a.y,q[$+X+6]=a.z,q[$+X+7]=0),y===!0&&(a.fromBufferAttribute(ee,H),q[$+X+8]=a.x,q[$+X+9]=a.y,q[$+X+10]=a.z,q[$+X+11]=ee.itemSize===4?a.w:1)}}p={count:x,texture:I,size:new se(_,N)},s.set(u,p),u.addEventListener("dispose",B)}let f=0;for(let v=0;v<d.length;v++)f+=d[v];const T=u.morphTargetsRelative?1:1-f;h.getUniforms().setValue(i,"morphTargetBaseInfluence",T),h.getUniforms().setValue(i,"morphTargetInfluences",d),h.getUniforms().setValue(i,"morphTargetsTexture",p.texture,t),h.getUniforms().setValue(i,"morphTargetsTextureSize",p.size)}else{const g=d===void 0?0:d.length;let x=n[u.id];if(x===void 0||x.length!==g){x=[];for(let S=0;S<g;S++)x[S]=[S,0];n[u.id]=x}for(let S=0;S<g;S++){const y=x[S];y[0]=S,y[1]=d[S]}x.sort(tm);for(let S=0;S<8;S++)S<g&&x[S][1]?(o[S][0]=x[S][0],o[S][1]=x[S][1]):(o[S][0]=Number.MAX_SAFE_INTEGER,o[S][1]=0);o.sort(em);const p=u.morphAttributes.position,f=u.morphAttributes.normal;let T=0;for(let S=0;S<8;S++){const y=o[S],b=y[0],w=y[1];b!==Number.MAX_SAFE_INTEGER&&w?(p&&u.getAttribute("morphTarget"+S)!==p[b]&&u.setAttribute("morphTarget"+S,p[b]),f&&u.getAttribute("morphNormal"+S)!==f[b]&&u.setAttribute("morphNormal"+S,f[b]),r[S]=w,T+=w):(p&&u.hasAttribute("morphTarget"+S)===!0&&u.deleteAttribute("morphTarget"+S),f&&u.hasAttribute("morphNormal"+S)===!0&&u.deleteAttribute("morphNormal"+S),r[S]=0)}const v=u.morphTargetsRelative?1:1-T;h.getUniforms().setValue(i,"morphTargetBaseInfluence",v),h.getUniforms().setValue(i,"morphTargetInfluences",r)}}return{update:l}}function im(i,e,t,n){let r=new WeakMap;function s(l){const c=n.render.frame,u=l.geometry,h=e.get(l,u);if(r.get(h)!==c&&(e.update(h),r.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),r.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;r.get(d)!==c&&(d.update(),r.set(d,c))}return h}function a(){r=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:a}}const Kc=new ot,Zc=new zc,Jc=new Gh,Qc=new jc,ul=[],hl=[],dl=new Float32Array(16),fl=new Float32Array(9),pl=new Float32Array(4);function Zi(i,e,t){const n=i[0];if(n<=0||n>0)return i;const r=e*t;let s=ul[r];if(s===void 0&&(s=new Float32Array(r),ul[r]=s),e!==0){n.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(s,o)}return s}function mt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function gt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function ds(i,e){let t=hl[e];t===void 0&&(t=new Int32Array(e),hl[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function rm(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function sm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(mt(t,e))return;i.uniform2fv(this.addr,e),gt(t,e)}}function am(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(mt(t,e))return;i.uniform3fv(this.addr,e),gt(t,e)}}function om(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(mt(t,e))return;i.uniform4fv(this.addr,e),gt(t,e)}}function lm(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(mt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),gt(t,e)}else{if(mt(t,n))return;pl.set(n),i.uniformMatrix2fv(this.addr,!1,pl),gt(t,n)}}function cm(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(mt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),gt(t,e)}else{if(mt(t,n))return;fl.set(n),i.uniformMatrix3fv(this.addr,!1,fl),gt(t,n)}}function um(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(mt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),gt(t,e)}else{if(mt(t,n))return;dl.set(n),i.uniformMatrix4fv(this.addr,!1,dl),gt(t,n)}}function hm(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function dm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(mt(t,e))return;i.uniform2iv(this.addr,e),gt(t,e)}}function fm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(mt(t,e))return;i.uniform3iv(this.addr,e),gt(t,e)}}function pm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(mt(t,e))return;i.uniform4iv(this.addr,e),gt(t,e)}}function mm(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function gm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(mt(t,e))return;i.uniform2uiv(this.addr,e),gt(t,e)}}function vm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(mt(t,e))return;i.uniform3uiv(this.addr,e),gt(t,e)}}function xm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(mt(t,e))return;i.uniform4uiv(this.addr,e),gt(t,e)}}function Mm(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2D(e||Kc,r)}function Sm(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||Jc,r)}function Tm(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||Qc,r)}function _m(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||Zc,r)}function ym(i){switch(i){case 5126:return rm;case 35664:return sm;case 35665:return am;case 35666:return om;case 35674:return lm;case 35675:return cm;case 35676:return um;case 5124:case 35670:return hm;case 35667:case 35671:return dm;case 35668:case 35672:return fm;case 35669:case 35673:return pm;case 5125:return mm;case 36294:return gm;case 36295:return vm;case 36296:return xm;case 35678:case 36198:case 36298:case 36306:case 35682:return Mm;case 35679:case 36299:case 36307:return Sm;case 35680:case 36300:case 36308:case 36293:return Tm;case 36289:case 36303:case 36311:case 36292:return _m}}function Em(i,e){i.uniform1fv(this.addr,e)}function bm(i,e){const t=Zi(e,this.size,2);i.uniform2fv(this.addr,t)}function Am(i,e){const t=Zi(e,this.size,3);i.uniform3fv(this.addr,t)}function wm(i,e){const t=Zi(e,this.size,4);i.uniform4fv(this.addr,t)}function Rm(i,e){const t=Zi(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Pm(i,e){const t=Zi(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Cm(i,e){const t=Zi(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Lm(i,e){i.uniform1iv(this.addr,e)}function Dm(i,e){i.uniform2iv(this.addr,e)}function Um(i,e){i.uniform3iv(this.addr,e)}function Im(i,e){i.uniform4iv(this.addr,e)}function Nm(i,e){i.uniform1uiv(this.addr,e)}function Fm(i,e){i.uniform2uiv(this.addr,e)}function Om(i,e){i.uniform3uiv(this.addr,e)}function Bm(i,e){i.uniform4uiv(this.addr,e)}function zm(i,e,t){const n=this.cache,r=e.length,s=ds(t,r);mt(n,s)||(i.uniform1iv(this.addr,s),gt(n,s));for(let a=0;a!==r;++a)t.setTexture2D(e[a]||Kc,s[a])}function Hm(i,e,t){const n=this.cache,r=e.length,s=ds(t,r);mt(n,s)||(i.uniform1iv(this.addr,s),gt(n,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||Jc,s[a])}function Vm(i,e,t){const n=this.cache,r=e.length,s=ds(t,r);mt(n,s)||(i.uniform1iv(this.addr,s),gt(n,s));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||Qc,s[a])}function km(i,e,t){const n=this.cache,r=e.length,s=ds(t,r);mt(n,s)||(i.uniform1iv(this.addr,s),gt(n,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||Zc,s[a])}function Gm(i){switch(i){case 5126:return Em;case 35664:return bm;case 35665:return Am;case 35666:return wm;case 35674:return Rm;case 35675:return Pm;case 35676:return Cm;case 5124:case 35670:return Lm;case 35667:case 35671:return Dm;case 35668:case 35672:return Um;case 35669:case 35673:return Im;case 5125:return Nm;case 36294:return Fm;case 36295:return Om;case 36296:return Bm;case 35678:case 36198:case 36298:case 36306:case 35682:return zm;case 35679:case 36299:case 36307:return Hm;case 35680:case 36300:case 36308:case 36293:return Vm;case 36289:case 36303:case 36311:case 36292:return km}}class Wm{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.setValue=ym(t.type)}}class Xm{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.size=t.size,this.setValue=Gm(t.type)}}class jm{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,t[o.id],n)}}}const Ks=/(\w+)(\])?(\[|\.)?/g;function ml(i,e){i.seq.push(e),i.map[e.id]=e}function Ym(i,e,t){const n=i.name,r=n.length;for(Ks.lastIndex=0;;){const s=Ks.exec(n),a=Ks.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){ml(t,c===void 0?new Wm(o,i,e):new Xm(o,i,e));break}else{let h=t.map[o];h===void 0&&(h=new jm(o),ml(t,h)),t=h}}}class ts{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const s=e.getActiveUniform(t,r),a=e.getUniformLocation(t,s.name);Ym(s,a,this)}}setValue(e,t,n,r){const s=this.map[t];s!==void 0&&s.setValue(e,n,r)}setOptional(e,t,n){const r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let s=0,a=t.length;s!==a;++s){const o=t[s],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,t){const n=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in t&&n.push(a)}return n}}function gl(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}let qm=0;function Km(i,e){const t=i.split(`
`),n=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}function Zm(i){switch(i){case jt:return["Linear","( value )"];case Se:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),["Linear","( value )"]}}function vl(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),r=i.getShaderInfoLog(e).trim();if(n&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const a=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+Km(i.getShaderSource(e),a)}else return r}function Jm(i,e){const t=Zm(e);return"vec4 "+i+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function Qm(i,e){let t;switch(e){case Ju:t="Linear";break;case Qu:t="Reinhard";break;case $u:t="OptimizedCineon";break;case bc:t="ACESFilmic";break;case eh:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function $m(i){return[i.extensionDerivatives||i.envMapCubeUVHeight||i.bumpMap||i.normalMapTangentSpace||i.clearcoatNormalMap||i.flatShading||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(hr).join(`
`)}function eg(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function tg(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const s=i.getActiveAttrib(e,r),a=s.name;let o=1;s.type===i.FLOAT_MAT2&&(o=2),s.type===i.FLOAT_MAT3&&(o=3),s.type===i.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function hr(i){return i!==""}function xl(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Ml(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const ng=/^[ \t]*#include +<([\w\d./]+)>/gm;function xa(i){return i.replace(ng,rg)}const ig=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function rg(i,e){let t=Ee[e];if(t===void 0){const n=ig.get(e);if(n!==void 0)t=Ee[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return xa(t)}const sg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Sl(i){return i.replace(sg,ag)}function ag(i,e,t,n){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Tl(i){let e="precision "+i.precision+` float;
precision `+i.precision+" int;";return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function og(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Tc?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===Pu?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===En&&(e="SHADOWMAP_TYPE_VSM"),e}function lg(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case oi:case Hi:e="ENVMAP_TYPE_CUBE";break;case os:e="ENVMAP_TYPE_CUBE_UV";break}return e}function cg(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Hi:e="ENVMAP_MODE_REFRACTION";break}return e}function ug(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Ec:e="ENVMAP_BLENDING_MULTIPLY";break;case Ku:e="ENVMAP_BLENDING_MIX";break;case Zu:e="ENVMAP_BLENDING_ADD";break}return e}function hg(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function dg(i,e,t,n){const r=i.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=og(t),c=lg(t),u=cg(t),h=ug(t),d=hg(t),m=t.isWebGL2?"":$m(t),g=eg(s),x=r.createProgram();let p,f,T=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(hr).join(`
`),p.length>0&&(p+=`
`),f=[m,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(hr).join(`
`),f.length>0&&(f+=`
`)):(p=[Tl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(hr).join(`
`),f=[m,Tl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==un?"#define TONE_MAPPING":"",t.toneMapping!==un?Ee.tonemapping_pars_fragment:"",t.toneMapping!==un?Qm("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ee.colorspace_pars_fragment,Jm("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(hr).join(`
`)),a=xa(a),a=xl(a,t),a=Ml(a,t),o=xa(o),o=xl(o,t),o=Ml(o,t),a=Sl(a),o=Sl(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(T=`#version 300 es
`,p=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,f=["#define varying in",t.glslVersion===Wn?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Wn?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const v=T+p+a,S=T+f+o,y=gl(r,r.VERTEX_SHADER,v),b=gl(r,r.FRAGMENT_SHADER,S);if(r.attachShader(x,y),r.attachShader(x,b),t.index0AttributeName!==void 0?r.bindAttribLocation(x,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(x,0,"position"),r.linkProgram(x),i.debug.checkShaderErrors){const M=r.getProgramInfoLog(x).trim(),_=r.getShaderInfoLog(y).trim(),N=r.getShaderInfoLog(b).trim();let q=!0,I=!0;if(r.getProgramParameter(x,r.LINK_STATUS)===!1)if(q=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,x,y,b);else{const z=vl(r,y,"vertex"),B=vl(r,b,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(x,r.VALIDATE_STATUS)+`

Program Info Log: `+M+`
`+z+`
`+B)}else M!==""?console.warn("THREE.WebGLProgram: Program Info Log:",M):(_===""||N==="")&&(I=!1);I&&(this.diagnostics={runnable:q,programLog:M,vertexShader:{log:_,prefix:p},fragmentShader:{log:N,prefix:f}})}r.deleteShader(y),r.deleteShader(b);let w;this.getUniforms=function(){return w===void 0&&(w=new ts(r,x)),w};let D;return this.getAttributes=function(){return D===void 0&&(D=tg(r,x)),D},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=qm++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=y,this.fragmentShader=b,this}let fg=0;class pg{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new mg(e),t.set(e,n)),n}}class mg{constructor(e){this.id=fg++,this.code=e,this.usedTimes=0}}function gg(i,e,t,n,r,s,a){const o=new Hc,l=new pg,c=[],u=r.isWebGL2,h=r.logarithmicDepthBuffer,d=r.vertexTextures;let m=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(M){return M===0?"uv":`uv${M}`}function p(M,_,N,q,I){const z=q.fog,B=I.geometry,J=M.isMeshStandardMaterial?q.environment:null,W=(M.isMeshStandardMaterial?t:e).get(M.envMap||J),K=W&&W.mapping===os?W.image.height:null,ee=g[M.type];M.precision!==null&&(m=r.getMaxPrecision(M.precision),m!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",m,"instead."));const $=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,H=$!==void 0?$.length:0;let X=0;B.morphAttributes.position!==void 0&&(X=1),B.morphAttributes.normal!==void 0&&(X=2),B.morphAttributes.color!==void 0&&(X=3);let ce,oe,he,Me;if(ee){const on=Lt[ee];ce=on.vertexShader,oe=on.fragmentShader}else ce=M.vertexShader,oe=M.fragmentShader,l.update(M),he=l.getVertexShaderID(M),Me=l.getFragmentShaderID(M);const Le=i.getRenderTarget(),be=I.isInstancedMesh===!0,Xe=!!M.map,At=!!M.matcap,Oe=!!W,F=!!M.aoMap,vt=!!M.lightMap,_e=!!M.bumpMap,Pe=!!M.normalMap,Ae=!!M.displacementMap,Qe=!!M.emissiveMap,ze=!!M.metalnessMap,Ue=!!M.roughnessMap,qe=M.anisotropy>0,dt=M.clearcoat>0,xt=M.iridescence>0,R=M.sheen>0,E=M.transmission>0,j=qe&&!!M.anisotropyMap,ie=dt&&!!M.clearcoatMap,ne=dt&&!!M.clearcoatNormalMap,P=dt&&!!M.clearcoatRoughnessMap,Q=xt&&!!M.iridescenceMap,te=xt&&!!M.iridescenceThicknessMap,k=R&&!!M.sheenColorMap,pe=R&&!!M.sheenRoughnessMap,xe=!!M.specularMap,ve=!!M.specularColorMap,me=!!M.specularIntensityMap,de=E&&!!M.transmissionMap,we=E&&!!M.thicknessMap,Ve=!!M.gradientMap,L=!!M.alphaMap,le=M.alphaTest>0,G=!!M.alphaHash,re=!!M.extensions,ue=!!B.attributes.uv1,je=!!B.attributes.uv2,tt=!!B.attributes.uv3;return{isWebGL2:u,shaderID:ee,shaderType:M.type,shaderName:M.name,vertexShader:ce,fragmentShader:oe,defines:M.defines,customVertexShaderID:he,customFragmentShaderID:Me,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:m,instancing:be,instancingColor:be&&I.instanceColor!==null,supportsVertexTextures:d,outputColorSpace:Le===null?i.outputColorSpace:Le.isXRRenderTarget===!0?Le.texture.colorSpace:jt,map:Xe,matcap:At,envMap:Oe,envMapMode:Oe&&W.mapping,envMapCubeUVHeight:K,aoMap:F,lightMap:vt,bumpMap:_e,normalMap:Pe,displacementMap:d&&Ae,emissiveMap:Qe,normalMapObjectSpace:Pe&&M.normalMapType===hh,normalMapTangentSpace:Pe&&M.normalMapType===cs,metalnessMap:ze,roughnessMap:Ue,anisotropy:qe,anisotropyMap:j,clearcoat:dt,clearcoatMap:ie,clearcoatNormalMap:ne,clearcoatRoughnessMap:P,iridescence:xt,iridescenceMap:Q,iridescenceThicknessMap:te,sheen:R,sheenColorMap:k,sheenRoughnessMap:pe,specularMap:xe,specularColorMap:ve,specularIntensityMap:me,transmission:E,transmissionMap:de,thicknessMap:we,gradientMap:Ve,opaque:M.transparent===!1&&M.blending===Fi,alphaMap:L,alphaTest:le,alphaHash:G,combine:M.combine,mapUv:Xe&&x(M.map.channel),aoMapUv:F&&x(M.aoMap.channel),lightMapUv:vt&&x(M.lightMap.channel),bumpMapUv:_e&&x(M.bumpMap.channel),normalMapUv:Pe&&x(M.normalMap.channel),displacementMapUv:Ae&&x(M.displacementMap.channel),emissiveMapUv:Qe&&x(M.emissiveMap.channel),metalnessMapUv:ze&&x(M.metalnessMap.channel),roughnessMapUv:Ue&&x(M.roughnessMap.channel),anisotropyMapUv:j&&x(M.anisotropyMap.channel),clearcoatMapUv:ie&&x(M.clearcoatMap.channel),clearcoatNormalMapUv:ne&&x(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:P&&x(M.clearcoatRoughnessMap.channel),iridescenceMapUv:Q&&x(M.iridescenceMap.channel),iridescenceThicknessMapUv:te&&x(M.iridescenceThicknessMap.channel),sheenColorMapUv:k&&x(M.sheenColorMap.channel),sheenRoughnessMapUv:pe&&x(M.sheenRoughnessMap.channel),specularMapUv:xe&&x(M.specularMap.channel),specularColorMapUv:ve&&x(M.specularColorMap.channel),specularIntensityMapUv:me&&x(M.specularIntensityMap.channel),transmissionMapUv:de&&x(M.transmissionMap.channel),thicknessMapUv:we&&x(M.thicknessMap.channel),alphaMapUv:L&&x(M.alphaMap.channel),vertexTangents:!!B.attributes.tangent&&(Pe||qe),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,vertexUv1s:ue,vertexUv2s:je,vertexUv3s:tt,pointsUvs:I.isPoints===!0&&!!B.attributes.uv&&(Xe||L),fog:!!z,useFog:M.fog===!0,fogExp2:z&&z.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:h,skinning:I.isSkinnedMesh===!0,morphTargets:B.morphAttributes.position!==void 0,morphNormals:B.morphAttributes.normal!==void 0,morphColors:B.morphAttributes.color!==void 0,morphTargetsCount:H,morphTextureStride:X,numDirLights:_.directional.length,numPointLights:_.point.length,numSpotLights:_.spot.length,numSpotLightMaps:_.spotLightMap.length,numRectAreaLights:_.rectArea.length,numHemiLights:_.hemi.length,numDirLightShadows:_.directionalShadowMap.length,numPointLightShadows:_.pointShadowMap.length,numSpotLightShadows:_.spotShadowMap.length,numSpotLightShadowsWithMaps:_.numSpotLightShadowsWithMaps,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:M.dithering,shadowMapEnabled:i.shadowMap.enabled&&N.length>0,shadowMapType:i.shadowMap.type,toneMapping:M.toneMapped?i.toneMapping:un,useLegacyLights:i.useLegacyLights,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===zt,flipSided:M.side===ft,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionDerivatives:re&&M.extensions.derivatives===!0,extensionFragDepth:re&&M.extensions.fragDepth===!0,extensionDrawBuffers:re&&M.extensions.drawBuffers===!0,extensionShaderTextureLOD:re&&M.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:u||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||n.has("EXT_shader_texture_lod"),customProgramCacheKey:M.customProgramCacheKey()}}function f(M){const _=[];if(M.shaderID?_.push(M.shaderID):(_.push(M.customVertexShaderID),_.push(M.customFragmentShaderID)),M.defines!==void 0)for(const N in M.defines)_.push(N),_.push(M.defines[N]);return M.isRawShaderMaterial===!1&&(T(_,M),v(_,M),_.push(i.outputColorSpace)),_.push(M.customProgramCacheKey),_.join()}function T(M,_){M.push(_.precision),M.push(_.outputColorSpace),M.push(_.envMapMode),M.push(_.envMapCubeUVHeight),M.push(_.mapUv),M.push(_.alphaMapUv),M.push(_.lightMapUv),M.push(_.aoMapUv),M.push(_.bumpMapUv),M.push(_.normalMapUv),M.push(_.displacementMapUv),M.push(_.emissiveMapUv),M.push(_.metalnessMapUv),M.push(_.roughnessMapUv),M.push(_.anisotropyMapUv),M.push(_.clearcoatMapUv),M.push(_.clearcoatNormalMapUv),M.push(_.clearcoatRoughnessMapUv),M.push(_.iridescenceMapUv),M.push(_.iridescenceThicknessMapUv),M.push(_.sheenColorMapUv),M.push(_.sheenRoughnessMapUv),M.push(_.specularMapUv),M.push(_.specularColorMapUv),M.push(_.specularIntensityMapUv),M.push(_.transmissionMapUv),M.push(_.thicknessMapUv),M.push(_.combine),M.push(_.fogExp2),M.push(_.sizeAttenuation),M.push(_.morphTargetsCount),M.push(_.morphAttributeCount),M.push(_.numDirLights),M.push(_.numPointLights),M.push(_.numSpotLights),M.push(_.numSpotLightMaps),M.push(_.numHemiLights),M.push(_.numRectAreaLights),M.push(_.numDirLightShadows),M.push(_.numPointLightShadows),M.push(_.numSpotLightShadows),M.push(_.numSpotLightShadowsWithMaps),M.push(_.shadowMapType),M.push(_.toneMapping),M.push(_.numClippingPlanes),M.push(_.numClipIntersection),M.push(_.depthPacking)}function v(M,_){o.disableAll(),_.isWebGL2&&o.enable(0),_.supportsVertexTextures&&o.enable(1),_.instancing&&o.enable(2),_.instancingColor&&o.enable(3),_.matcap&&o.enable(4),_.envMap&&o.enable(5),_.normalMapObjectSpace&&o.enable(6),_.normalMapTangentSpace&&o.enable(7),_.clearcoat&&o.enable(8),_.iridescence&&o.enable(9),_.alphaTest&&o.enable(10),_.vertexColors&&o.enable(11),_.vertexAlphas&&o.enable(12),_.vertexUv1s&&o.enable(13),_.vertexUv2s&&o.enable(14),_.vertexUv3s&&o.enable(15),_.vertexTangents&&o.enable(16),_.anisotropy&&o.enable(17),M.push(o.mask),o.disableAll(),_.fog&&o.enable(0),_.useFog&&o.enable(1),_.flatShading&&o.enable(2),_.logarithmicDepthBuffer&&o.enable(3),_.skinning&&o.enable(4),_.morphTargets&&o.enable(5),_.morphNormals&&o.enable(6),_.morphColors&&o.enable(7),_.premultipliedAlpha&&o.enable(8),_.shadowMapEnabled&&o.enable(9),_.useLegacyLights&&o.enable(10),_.doubleSided&&o.enable(11),_.flipSided&&o.enable(12),_.useDepthPacking&&o.enable(13),_.dithering&&o.enable(14),_.transmission&&o.enable(15),_.sheen&&o.enable(16),_.opaque&&o.enable(17),_.pointsUvs&&o.enable(18),M.push(o.mask)}function S(M){const _=g[M.type];let N;if(_){const q=Lt[_];N=Wi.clone(q.uniforms)}else N=M.uniforms;return N}function y(M,_){let N;for(let q=0,I=c.length;q<I;q++){const z=c[q];if(z.cacheKey===_){N=z,++N.usedTimes;break}}return N===void 0&&(N=new dg(i,_,M,s),c.push(N)),N}function b(M){if(--M.usedTimes===0){const _=c.indexOf(M);c[_]=c[c.length-1],c.pop(),M.destroy()}}function w(M){l.remove(M)}function D(){l.dispose()}return{getParameters:p,getProgramCacheKey:f,getUniforms:S,acquireProgram:y,releaseProgram:b,releaseShaderCache:w,programs:c,dispose:D}}function vg(){let i=new WeakMap;function e(s){let a=i.get(s);return a===void 0&&(a={},i.set(s,a)),a}function t(s){i.delete(s)}function n(s,a,o){i.get(s)[a]=o}function r(){i=new WeakMap}return{get:e,remove:t,update:n,dispose:r}}function xg(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function _l(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function yl(){const i=[];let e=0;const t=[],n=[],r=[];function s(){e=0,t.length=0,n.length=0,r.length=0}function a(h,d,m,g,x,p){let f=i[e];return f===void 0?(f={id:h.id,object:h,geometry:d,material:m,groupOrder:g,renderOrder:h.renderOrder,z:x,group:p},i[e]=f):(f.id=h.id,f.object=h,f.geometry=d,f.material=m,f.groupOrder=g,f.renderOrder=h.renderOrder,f.z=x,f.group=p),e++,f}function o(h,d,m,g,x,p){const f=a(h,d,m,g,x,p);m.transmission>0?n.push(f):m.transparent===!0?r.push(f):t.push(f)}function l(h,d,m,g,x,p){const f=a(h,d,m,g,x,p);m.transmission>0?n.unshift(f):m.transparent===!0?r.unshift(f):t.unshift(f)}function c(h,d){t.length>1&&t.sort(h||xg),n.length>1&&n.sort(d||_l),r.length>1&&r.sort(d||_l)}function u(){for(let h=e,d=i.length;h<d;h++){const m=i[h];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:r,init:s,push:o,unshift:l,finish:u,sort:c}}function Mg(){let i=new WeakMap;function e(n,r){const s=i.get(n);let a;return s===void 0?(a=new yl,i.set(n,[a])):r>=s.length?(a=new yl,s.push(a)):a=s[r],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function Sg(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new C,color:new Te};break;case"SpotLight":t={position:new C,direction:new C,color:new Te,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new C,color:new Te,distance:0,decay:0};break;case"HemisphereLight":t={direction:new C,skyColor:new Te,groundColor:new Te};break;case"RectAreaLight":t={color:new Te,position:new C,halfWidth:new C,halfHeight:new C};break}return i[e.id]=t,t}}}function Tg(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new se};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new se};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new se,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let _g=0;function yg(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Eg(i,e){const t=new Sg,n=Tg(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let u=0;u<9;u++)r.probe.push(new C);const s=new C,a=new ge,o=new ge;function l(u,h){let d=0,m=0,g=0;for(let N=0;N<9;N++)r.probe[N].set(0,0,0);let x=0,p=0,f=0,T=0,v=0,S=0,y=0,b=0,w=0,D=0;u.sort(yg);const M=h===!0?Math.PI:1;for(let N=0,q=u.length;N<q;N++){const I=u[N],z=I.color,B=I.intensity,J=I.distance,W=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)d+=z.r*B*M,m+=z.g*B*M,g+=z.b*B*M;else if(I.isLightProbe)for(let K=0;K<9;K++)r.probe[K].addScaledVector(I.sh.coefficients[K],B);else if(I.isDirectionalLight){const K=t.get(I);if(K.color.copy(I.color).multiplyScalar(I.intensity*M),I.castShadow){const ee=I.shadow,$=n.get(I);$.shadowBias=ee.bias,$.shadowNormalBias=ee.normalBias,$.shadowRadius=ee.radius,$.shadowMapSize=ee.mapSize,r.directionalShadow[x]=$,r.directionalShadowMap[x]=W,r.directionalShadowMatrix[x]=I.shadow.matrix,S++}r.directional[x]=K,x++}else if(I.isSpotLight){const K=t.get(I);K.position.setFromMatrixPosition(I.matrixWorld),K.color.copy(z).multiplyScalar(B*M),K.distance=J,K.coneCos=Math.cos(I.angle),K.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),K.decay=I.decay,r.spot[f]=K;const ee=I.shadow;if(I.map&&(r.spotLightMap[w]=I.map,w++,ee.updateMatrices(I),I.castShadow&&D++),r.spotLightMatrix[f]=ee.matrix,I.castShadow){const $=n.get(I);$.shadowBias=ee.bias,$.shadowNormalBias=ee.normalBias,$.shadowRadius=ee.radius,$.shadowMapSize=ee.mapSize,r.spotShadow[f]=$,r.spotShadowMap[f]=W,b++}f++}else if(I.isRectAreaLight){const K=t.get(I);K.color.copy(z).multiplyScalar(B),K.halfWidth.set(I.width*.5,0,0),K.halfHeight.set(0,I.height*.5,0),r.rectArea[T]=K,T++}else if(I.isPointLight){const K=t.get(I);if(K.color.copy(I.color).multiplyScalar(I.intensity*M),K.distance=I.distance,K.decay=I.decay,I.castShadow){const ee=I.shadow,$=n.get(I);$.shadowBias=ee.bias,$.shadowNormalBias=ee.normalBias,$.shadowRadius=ee.radius,$.shadowMapSize=ee.mapSize,$.shadowCameraNear=ee.camera.near,$.shadowCameraFar=ee.camera.far,r.pointShadow[p]=$,r.pointShadowMap[p]=W,r.pointShadowMatrix[p]=I.shadow.matrix,y++}r.point[p]=K,p++}else if(I.isHemisphereLight){const K=t.get(I);K.skyColor.copy(I.color).multiplyScalar(B*M),K.groundColor.copy(I.groundColor).multiplyScalar(B*M),r.hemi[v]=K,v++}}T>0&&(e.isWebGL2||i.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=ae.LTC_FLOAT_1,r.rectAreaLTC2=ae.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=ae.LTC_HALF_1,r.rectAreaLTC2=ae.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=d,r.ambient[1]=m,r.ambient[2]=g;const _=r.hash;(_.directionalLength!==x||_.pointLength!==p||_.spotLength!==f||_.rectAreaLength!==T||_.hemiLength!==v||_.numDirectionalShadows!==S||_.numPointShadows!==y||_.numSpotShadows!==b||_.numSpotMaps!==w)&&(r.directional.length=x,r.spot.length=f,r.rectArea.length=T,r.point.length=p,r.hemi.length=v,r.directionalShadow.length=S,r.directionalShadowMap.length=S,r.pointShadow.length=y,r.pointShadowMap.length=y,r.spotShadow.length=b,r.spotShadowMap.length=b,r.directionalShadowMatrix.length=S,r.pointShadowMatrix.length=y,r.spotLightMatrix.length=b+w-D,r.spotLightMap.length=w,r.numSpotLightShadowsWithMaps=D,_.directionalLength=x,_.pointLength=p,_.spotLength=f,_.rectAreaLength=T,_.hemiLength=v,_.numDirectionalShadows=S,_.numPointShadows=y,_.numSpotShadows=b,_.numSpotMaps=w,r.version=_g++)}function c(u,h){let d=0,m=0,g=0,x=0,p=0;const f=h.matrixWorldInverse;for(let T=0,v=u.length;T<v;T++){const S=u[T];if(S.isDirectionalLight){const y=r.directional[d];y.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(f),d++}else if(S.isSpotLight){const y=r.spot[g];y.position.setFromMatrixPosition(S.matrixWorld),y.position.applyMatrix4(f),y.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(f),g++}else if(S.isRectAreaLight){const y=r.rectArea[x];y.position.setFromMatrixPosition(S.matrixWorld),y.position.applyMatrix4(f),o.identity(),a.copy(S.matrixWorld),a.premultiply(f),o.extractRotation(a),y.halfWidth.set(S.width*.5,0,0),y.halfHeight.set(0,S.height*.5,0),y.halfWidth.applyMatrix4(o),y.halfHeight.applyMatrix4(o),x++}else if(S.isPointLight){const y=r.point[m];y.position.setFromMatrixPosition(S.matrixWorld),y.position.applyMatrix4(f),m++}else if(S.isHemisphereLight){const y=r.hemi[p];y.direction.setFromMatrixPosition(S.matrixWorld),y.direction.transformDirection(f),p++}}}return{setup:l,setupView:c,state:r}}function El(i,e){const t=new Eg(i,e),n=[],r=[];function s(){n.length=0,r.length=0}function a(h){n.push(h)}function o(h){r.push(h)}function l(h){t.setup(n,h)}function c(h){t.setupView(n,h)}return{init:s,state:{lightsArray:n,shadowsArray:r,lights:t},setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function bg(i,e){let t=new WeakMap;function n(s,a=0){const o=t.get(s);let l;return o===void 0?(l=new El(i,e),t.set(s,[l])):a>=o.length?(l=new El(i,e),o.push(l)):l=o[a],l}function r(){t=new WeakMap}return{get:n,dispose:r}}class $c extends Xt{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Ki,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Ag extends Xt{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const wg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Rg=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Pg(i,e,t){let n=new Ua;const r=new se,s=new se,a=new Ze,o=new $c({depthPacking:rs}),l=new Ag,c={},u=t.maxTextureSize,h={[hn]:ft,[ft]:hn,[zt]:zt},d=new et({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new se},radius:{value:4}},vertexShader:wg,fragmentShader:Rg}),m=d.clone();m.defines.HORIZONTAL_PASS=1;const g=new Jt;g.setAttribute("position",new pt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new Ht(g,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Tc;let f=this.type;this.render=function(y,b,w){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||y.length===0)return;const D=i.getRenderTarget(),M=i.getActiveCubeFace(),_=i.getActiveMipmapLevel(),N=i.state;N.setBlending(ut),N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);const q=f!==En&&this.type===En,I=f===En&&this.type!==En;for(let z=0,B=y.length;z<B;z++){const J=y[z],W=J.shadow;if(W===void 0){console.warn("THREE.WebGLShadowMap:",J,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;r.copy(W.mapSize);const K=W.getFrameExtents();if(r.multiply(K),s.copy(W.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/K.x),r.x=s.x*K.x,W.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/K.y),r.y=s.y*K.y,W.mapSize.y=s.y)),W.map===null||q===!0||I===!0){const $=this.type!==En?{minFilter:Fe,magFilter:Fe}:{};W.map!==null&&W.map.dispose(),W.map=new it(r.x,r.y,$),W.map.texture.name=J.name+".shadowMap",W.camera.updateProjectionMatrix()}i.setRenderTarget(W.map),i.clear();const ee=W.getViewportCount();for(let $=0;$<ee;$++){const H=W.getViewport($);a.set(s.x*H.x,s.y*H.y,s.x*H.z,s.y*H.w),N.viewport(a),W.updateMatrices(J,$),n=W.getFrustum(),S(b,w,W.camera,J,this.type)}W.isPointLightShadow!==!0&&this.type===En&&T(W,w),W.needsUpdate=!1}f=this.type,p.needsUpdate=!1,i.setRenderTarget(D,M,_)};function T(y,b){const w=e.update(x);d.defines.VSM_SAMPLES!==y.blurSamples&&(d.defines.VSM_SAMPLES=y.blurSamples,m.defines.VSM_SAMPLES=y.blurSamples,d.needsUpdate=!0,m.needsUpdate=!0),y.mapPass===null&&(y.mapPass=new it(r.x,r.y)),d.uniforms.shadow_pass.value=y.map.texture,d.uniforms.resolution.value=y.mapSize,d.uniforms.radius.value=y.radius,i.setRenderTarget(y.mapPass),i.clear(),i.renderBufferDirect(b,null,w,d,x,null),m.uniforms.shadow_pass.value=y.mapPass.texture,m.uniforms.resolution.value=y.mapSize,m.uniforms.radius.value=y.radius,i.setRenderTarget(y.map),i.clear(),i.renderBufferDirect(b,null,w,m,x,null)}function v(y,b,w,D){let M=null;const _=w.isPointLight===!0?y.customDistanceMaterial:y.customDepthMaterial;if(_!==void 0)M=_;else if(M=w.isPointLight===!0?l:o,i.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0||b.map&&b.alphaTest>0){const N=M.uuid,q=b.uuid;let I=c[N];I===void 0&&(I={},c[N]=I);let z=I[q];z===void 0&&(z=M.clone(),I[q]=z),M=z}if(M.visible=b.visible,M.wireframe=b.wireframe,D===En?M.side=b.shadowSide!==null?b.shadowSide:b.side:M.side=b.shadowSide!==null?b.shadowSide:h[b.side],M.alphaMap=b.alphaMap,M.alphaTest=b.alphaTest,M.map=b.map,M.clipShadows=b.clipShadows,M.clippingPlanes=b.clippingPlanes,M.clipIntersection=b.clipIntersection,M.displacementMap=b.displacementMap,M.displacementScale=b.displacementScale,M.displacementBias=b.displacementBias,M.wireframeLinewidth=b.wireframeLinewidth,M.linewidth=b.linewidth,w.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const N=i.properties.get(M);N.light=w}return M}function S(y,b,w,D,M){if(y.visible===!1)return;if(y.layers.test(b.layers)&&(y.isMesh||y.isLine||y.isPoints)&&(y.castShadow||y.receiveShadow&&M===En)&&(!y.frustumCulled||n.intersectsObject(y))){y.modelViewMatrix.multiplyMatrices(w.matrixWorldInverse,y.matrixWorld);const q=e.update(y),I=y.material;if(Array.isArray(I)){const z=q.groups;for(let B=0,J=z.length;B<J;B++){const W=z[B],K=I[W.materialIndex];if(K&&K.visible){const ee=v(y,K,D,M);i.renderBufferDirect(w,null,q,ee,y,W)}}}else if(I.visible){const z=v(y,I,D,M);i.renderBufferDirect(w,null,q,z,y,null)}}const N=y.children;for(let q=0,I=N.length;q<I;q++)S(N[q],b,w,D,M)}}function Cg(i,e,t){const n=t.isWebGL2;function r(){let L=!1;const le=new Ze;let G=null;const re=new Ze(0,0,0,0);return{setMask:function(ue){G!==ue&&!L&&(i.colorMask(ue,ue,ue,ue),G=ue)},setLocked:function(ue){L=ue},setClear:function(ue,je,tt,Mt,on){on===!0&&(ue*=Mt,je*=Mt,tt*=Mt),le.set(ue,je,tt,Mt),re.equals(le)===!1&&(i.clearColor(ue,je,tt,Mt),re.copy(le))},reset:function(){L=!1,G=null,re.set(-1,0,0,0)}}}function s(){let L=!1,le=null,G=null,re=null;return{setTest:function(ue){ue?Le(i.DEPTH_TEST):be(i.DEPTH_TEST)},setMask:function(ue){le!==ue&&!L&&(i.depthMask(ue),le=ue)},setFunc:function(ue){if(G!==ue){switch(ue){case ku:i.depthFunc(i.NEVER);break;case Gu:i.depthFunc(i.ALWAYS);break;case Wu:i.depthFunc(i.LESS);break;case ua:i.depthFunc(i.LEQUAL);break;case Xu:i.depthFunc(i.EQUAL);break;case ju:i.depthFunc(i.GEQUAL);break;case Yu:i.depthFunc(i.GREATER);break;case qu:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}G=ue}},setLocked:function(ue){L=ue},setClear:function(ue){re!==ue&&(i.clearDepth(ue),re=ue)},reset:function(){L=!1,le=null,G=null,re=null}}}function a(){let L=!1,le=null,G=null,re=null,ue=null,je=null,tt=null,Mt=null,on=null;return{setTest:function(rt){L||(rt?Le(i.STENCIL_TEST):be(i.STENCIL_TEST))},setMask:function(rt){le!==rt&&!L&&(i.stencilMask(rt),le=rt)},setFunc:function(rt,ln,Nt){(G!==rt||re!==ln||ue!==Nt)&&(i.stencilFunc(rt,ln,Nt),G=rt,re=ln,ue=Nt)},setOp:function(rt,ln,Nt){(je!==rt||tt!==ln||Mt!==Nt)&&(i.stencilOp(rt,ln,Nt),je=rt,tt=ln,Mt=Nt)},setLocked:function(rt){L=rt},setClear:function(rt){on!==rt&&(i.clearStencil(rt),on=rt)},reset:function(){L=!1,le=null,G=null,re=null,ue=null,je=null,tt=null,Mt=null,on=null}}}const o=new r,l=new s,c=new a,u=new WeakMap,h=new WeakMap;let d={},m={},g=new WeakMap,x=[],p=null,f=!1,T=null,v=null,S=null,y=null,b=null,w=null,D=null,M=!1,_=null,N=null,q=null,I=null,z=null;const B=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let J=!1,W=0;const K=i.getParameter(i.VERSION);K.indexOf("WebGL")!==-1?(W=parseFloat(/^WebGL (\d)/.exec(K)[1]),J=W>=1):K.indexOf("OpenGL ES")!==-1&&(W=parseFloat(/^OpenGL ES (\d)/.exec(K)[1]),J=W>=2);let ee=null,$={};const H=i.getParameter(i.SCISSOR_BOX),X=i.getParameter(i.VIEWPORT),ce=new Ze().fromArray(H),oe=new Ze().fromArray(X);function he(L,le,G,re){const ue=new Uint8Array(4),je=i.createTexture();i.bindTexture(L,je),i.texParameteri(L,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(L,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let tt=0;tt<G;tt++)n&&(L===i.TEXTURE_3D||L===i.TEXTURE_2D_ARRAY)?i.texImage3D(le,0,i.RGBA,1,1,re,0,i.RGBA,i.UNSIGNED_BYTE,ue):i.texImage2D(le+tt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ue);return je}const Me={};Me[i.TEXTURE_2D]=he(i.TEXTURE_2D,i.TEXTURE_2D,1),Me[i.TEXTURE_CUBE_MAP]=he(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(Me[i.TEXTURE_2D_ARRAY]=he(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Me[i.TEXTURE_3D]=he(i.TEXTURE_3D,i.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Le(i.DEPTH_TEST),l.setFunc(ua),Ae(!1),Qe(lo),Le(i.CULL_FACE),_e(ut);function Le(L){d[L]!==!0&&(i.enable(L),d[L]=!0)}function be(L){d[L]!==!1&&(i.disable(L),d[L]=!1)}function Xe(L,le){return m[L]!==le?(i.bindFramebuffer(L,le),m[L]=le,n&&(L===i.DRAW_FRAMEBUFFER&&(m[i.FRAMEBUFFER]=le),L===i.FRAMEBUFFER&&(m[i.DRAW_FRAMEBUFFER]=le)),!0):!1}function At(L,le){let G=x,re=!1;if(L)if(G=g.get(le),G===void 0&&(G=[],g.set(le,G)),L.isWebGLMultipleRenderTargets){const ue=L.texture;if(G.length!==ue.length||G[0]!==i.COLOR_ATTACHMENT0){for(let je=0,tt=ue.length;je<tt;je++)G[je]=i.COLOR_ATTACHMENT0+je;G.length=ue.length,re=!0}}else G[0]!==i.COLOR_ATTACHMENT0&&(G[0]=i.COLOR_ATTACHMENT0,re=!0);else G[0]!==i.BACK&&(G[0]=i.BACK,re=!0);re&&(t.isWebGL2?i.drawBuffers(G):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(G))}function Oe(L){return p!==L?(i.useProgram(L),p=L,!0):!1}const F={[Ii]:i.FUNC_ADD,[Lu]:i.FUNC_SUBTRACT,[Du]:i.FUNC_REVERSE_SUBTRACT};if(n)F[fo]=i.MIN,F[po]=i.MAX;else{const L=e.get("EXT_blend_minmax");L!==null&&(F[fo]=L.MIN_EXT,F[po]=L.MAX_EXT)}const vt={[Uu]:i.ZERO,[Iu]:i.ONE,[Nu]:i.SRC_COLOR,[_c]:i.SRC_ALPHA,[Vu]:i.SRC_ALPHA_SATURATE,[zu]:i.DST_COLOR,[Ou]:i.DST_ALPHA,[Fu]:i.ONE_MINUS_SRC_COLOR,[yc]:i.ONE_MINUS_SRC_ALPHA,[Hu]:i.ONE_MINUS_DST_COLOR,[Bu]:i.ONE_MINUS_DST_ALPHA};function _e(L,le,G,re,ue,je,tt,Mt){if(L===ut){f===!0&&(be(i.BLEND),f=!1);return}if(f===!1&&(Le(i.BLEND),f=!0),L!==Cu){if(L!==T||Mt!==M){if((v!==Ii||b!==Ii)&&(i.blendEquation(i.FUNC_ADD),v=Ii,b=Ii),Mt)switch(L){case Fi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case co:i.blendFunc(i.ONE,i.ONE);break;case uo:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case ho:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case Fi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case co:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case uo:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case ho:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}S=null,y=null,w=null,D=null,T=L,M=Mt}return}ue=ue||le,je=je||G,tt=tt||re,(le!==v||ue!==b)&&(i.blendEquationSeparate(F[le],F[ue]),v=le,b=ue),(G!==S||re!==y||je!==w||tt!==D)&&(i.blendFuncSeparate(vt[G],vt[re],vt[je],vt[tt]),S=G,y=re,w=je,D=tt),T=L,M=!1}function Pe(L,le){L.side===zt?be(i.CULL_FACE):Le(i.CULL_FACE);let G=L.side===ft;le&&(G=!G),Ae(G),L.blending===Fi&&L.transparent===!1?_e(ut):_e(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.premultipliedAlpha),l.setFunc(L.depthFunc),l.setTest(L.depthTest),l.setMask(L.depthWrite),o.setMask(L.colorWrite);const re=L.stencilWrite;c.setTest(re),re&&(c.setMask(L.stencilWriteMask),c.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),c.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),Ue(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?Le(i.SAMPLE_ALPHA_TO_COVERAGE):be(i.SAMPLE_ALPHA_TO_COVERAGE)}function Ae(L){_!==L&&(L?i.frontFace(i.CW):i.frontFace(i.CCW),_=L)}function Qe(L){L!==wu?(Le(i.CULL_FACE),L!==N&&(L===lo?i.cullFace(i.BACK):L===Ru?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):be(i.CULL_FACE),N=L}function ze(L){L!==q&&(J&&i.lineWidth(L),q=L)}function Ue(L,le,G){L?(Le(i.POLYGON_OFFSET_FILL),(I!==le||z!==G)&&(i.polygonOffset(le,G),I=le,z=G)):be(i.POLYGON_OFFSET_FILL)}function qe(L){L?Le(i.SCISSOR_TEST):be(i.SCISSOR_TEST)}function dt(L){L===void 0&&(L=i.TEXTURE0+B-1),ee!==L&&(i.activeTexture(L),ee=L)}function xt(L,le,G){G===void 0&&(ee===null?G=i.TEXTURE0+B-1:G=ee);let re=$[G];re===void 0&&(re={type:void 0,texture:void 0},$[G]=re),(re.type!==L||re.texture!==le)&&(ee!==G&&(i.activeTexture(G),ee=G),i.bindTexture(L,le||Me[L]),re.type=L,re.texture=le)}function R(){const L=$[ee];L!==void 0&&L.type!==void 0&&(i.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function E(){try{i.compressedTexImage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function j(){try{i.compressedTexImage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ie(){try{i.texSubImage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ne(){try{i.texSubImage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function P(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Q(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function te(){try{i.texStorage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function k(){try{i.texStorage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function pe(){try{i.texImage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function xe(){try{i.texImage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ve(L){ce.equals(L)===!1&&(i.scissor(L.x,L.y,L.z,L.w),ce.copy(L))}function me(L){oe.equals(L)===!1&&(i.viewport(L.x,L.y,L.z,L.w),oe.copy(L))}function de(L,le){let G=h.get(le);G===void 0&&(G=new WeakMap,h.set(le,G));let re=G.get(L);re===void 0&&(re=i.getUniformBlockIndex(le,L.name),G.set(L,re))}function we(L,le){const re=h.get(le).get(L);u.get(le)!==re&&(i.uniformBlockBinding(le,re,L.__bindingPointIndex),u.set(le,re))}function Ve(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),n===!0&&(i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),d={},ee=null,$={},m={},g=new WeakMap,x=[],p=null,f=!1,T=null,v=null,S=null,y=null,b=null,w=null,D=null,M=!1,_=null,N=null,q=null,I=null,z=null,ce.set(0,0,i.canvas.width,i.canvas.height),oe.set(0,0,i.canvas.width,i.canvas.height),o.reset(),l.reset(),c.reset()}return{buffers:{color:o,depth:l,stencil:c},enable:Le,disable:be,bindFramebuffer:Xe,drawBuffers:At,useProgram:Oe,setBlending:_e,setMaterial:Pe,setFlipSided:Ae,setCullFace:Qe,setLineWidth:ze,setPolygonOffset:Ue,setScissorTest:qe,activeTexture:dt,bindTexture:xt,unbindTexture:R,compressedTexImage2D:E,compressedTexImage3D:j,texImage2D:pe,texImage3D:xe,updateUBOMapping:de,uniformBlockBinding:we,texStorage2D:te,texStorage3D:k,texSubImage2D:ie,texSubImage3D:ne,compressedTexSubImage2D:P,compressedTexSubImage3D:Q,scissor:ve,viewport:me,reset:Ve}}function Lg(i,e,t,n,r,s,a){const o=r.isWebGL2,l=r.maxTextures,c=r.maxCubemapSize,u=r.maxTextureSize,h=r.maxSamples,d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),g=new WeakMap;let x;const p=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function T(R,E){return f?new OffscreenCanvas(R,E):Mr("canvas")}function v(R,E,j,ie){let ne=1;if((R.width>ie||R.height>ie)&&(ne=ie/Math.max(R.width,R.height)),ne<1||E===!0)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap){const P=E?as:Math.floor,Q=P(ne*R.width),te=P(ne*R.height);x===void 0&&(x=T(Q,te));const k=j?T(Q,te):x;return k.width=Q,k.height=te,k.getContext("2d").drawImage(R,0,0,Q,te),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+R.width+"x"+R.height+") to ("+Q+"x"+te+")."),k}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+R.width+"x"+R.height+")."),R;return R}function S(R){return va(R.width)&&va(R.height)}function y(R){return o?!1:R.wrapS!==Dt||R.wrapT!==Dt||R.minFilter!==Fe&&R.minFilter!==Be}function b(R,E){return R.generateMipmaps&&E&&R.minFilter!==Fe&&R.minFilter!==Be}function w(R){i.generateMipmap(R)}function D(R,E,j,ie,ne=!1){if(o===!1)return E;if(R!==null){if(i[R]!==void 0)return i[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let P=E;return E===i.RED&&(j===i.FLOAT&&(P=i.R32F),j===i.HALF_FLOAT&&(P=i.R16F),j===i.UNSIGNED_BYTE&&(P=i.R8)),E===i.RG&&(j===i.FLOAT&&(P=i.RG32F),j===i.HALF_FLOAT&&(P=i.RG16F),j===i.UNSIGNED_BYTE&&(P=i.RG8)),E===i.RGBA&&(j===i.FLOAT&&(P=i.RGBA32F),j===i.HALF_FLOAT&&(P=i.RGBA16F),j===i.UNSIGNED_BYTE&&(P=ie===Se&&ne===!1?i.SRGB8_ALPHA8:i.RGBA8),j===i.UNSIGNED_SHORT_4_4_4_4&&(P=i.RGBA4),j===i.UNSIGNED_SHORT_5_5_5_1&&(P=i.RGB5_A1)),(P===i.R16F||P===i.R32F||P===i.RG16F||P===i.RG32F||P===i.RGBA16F||P===i.RGBA32F)&&e.get("EXT_color_buffer_float"),P}function M(R,E,j){return b(R,j)===!0||R.isFramebufferTexture&&R.minFilter!==Fe&&R.minFilter!==Be?Math.log2(Math.max(E.width,E.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?E.mipmaps.length:1}function _(R){return R===Fe||R===da||R===es?i.NEAREST:i.LINEAR}function N(R){const E=R.target;E.removeEventListener("dispose",N),I(E),E.isVideoTexture&&g.delete(E)}function q(R){const E=R.target;E.removeEventListener("dispose",q),B(E)}function I(R){const E=n.get(R);if(E.__webglInit===void 0)return;const j=R.source,ie=p.get(j);if(ie){const ne=ie[E.__cacheKey];ne.usedTimes--,ne.usedTimes===0&&z(R),Object.keys(ie).length===0&&p.delete(j)}n.remove(R)}function z(R){const E=n.get(R);i.deleteTexture(E.__webglTexture);const j=R.source,ie=p.get(j);delete ie[E.__cacheKey],a.memory.textures--}function B(R){const E=R.texture,j=n.get(R),ie=n.get(E);if(ie.__webglTexture!==void 0&&(i.deleteTexture(ie.__webglTexture),a.memory.textures--),R.depthTexture&&R.depthTexture.dispose(),R.isWebGLCubeRenderTarget)for(let ne=0;ne<6;ne++)i.deleteFramebuffer(j.__webglFramebuffer[ne]),j.__webglDepthbuffer&&i.deleteRenderbuffer(j.__webglDepthbuffer[ne]);else{if(i.deleteFramebuffer(j.__webglFramebuffer),j.__webglDepthbuffer&&i.deleteRenderbuffer(j.__webglDepthbuffer),j.__webglMultisampledFramebuffer&&i.deleteFramebuffer(j.__webglMultisampledFramebuffer),j.__webglColorRenderbuffer)for(let ne=0;ne<j.__webglColorRenderbuffer.length;ne++)j.__webglColorRenderbuffer[ne]&&i.deleteRenderbuffer(j.__webglColorRenderbuffer[ne]);j.__webglDepthRenderbuffer&&i.deleteRenderbuffer(j.__webglDepthRenderbuffer)}if(R.isWebGLMultipleRenderTargets)for(let ne=0,P=E.length;ne<P;ne++){const Q=n.get(E[ne]);Q.__webglTexture&&(i.deleteTexture(Q.__webglTexture),a.memory.textures--),n.remove(E[ne])}n.remove(E),n.remove(R)}let J=0;function W(){J=0}function K(){const R=J;return R>=l&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+l),J+=1,R}function ee(R){const E=[];return E.push(R.wrapS),E.push(R.wrapT),E.push(R.wrapR||0),E.push(R.magFilter),E.push(R.minFilter),E.push(R.anisotropy),E.push(R.internalFormat),E.push(R.format),E.push(R.type),E.push(R.generateMipmaps),E.push(R.premultiplyAlpha),E.push(R.flipY),E.push(R.unpackAlignment),E.push(R.colorSpace),E.join()}function $(R,E){const j=n.get(R);if(R.isVideoTexture&&dt(R),R.isRenderTargetTexture===!1&&R.version>0&&j.__version!==R.version){const ie=R.image;if(ie===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ie.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Xe(j,R,E);return}}t.bindTexture(i.TEXTURE_2D,j.__webglTexture,i.TEXTURE0+E)}function H(R,E){const j=n.get(R);if(R.version>0&&j.__version!==R.version){Xe(j,R,E);return}t.bindTexture(i.TEXTURE_2D_ARRAY,j.__webglTexture,i.TEXTURE0+E)}function X(R,E){const j=n.get(R);if(R.version>0&&j.__version!==R.version){Xe(j,R,E);return}t.bindTexture(i.TEXTURE_3D,j.__webglTexture,i.TEXTURE0+E)}function ce(R,E){const j=n.get(R);if(R.version>0&&j.__version!==R.version){At(j,R,E);return}t.bindTexture(i.TEXTURE_CUBE_MAP,j.__webglTexture,i.TEXTURE0+E)}const oe={[It]:i.REPEAT,[Dt]:i.CLAMP_TO_EDGE,[is]:i.MIRRORED_REPEAT},he={[Fe]:i.NEAREST,[da]:i.NEAREST_MIPMAP_NEAREST,[es]:i.NEAREST_MIPMAP_LINEAR,[Be]:i.LINEAR,[wc]:i.LINEAR_MIPMAP_NEAREST,[Gn]:i.LINEAR_MIPMAP_LINEAR},Me={[fh]:i.NEVER,[Sh]:i.ALWAYS,[ph]:i.LESS,[gh]:i.LEQUAL,[mh]:i.EQUAL,[Mh]:i.GEQUAL,[vh]:i.GREATER,[xh]:i.NOTEQUAL};function Le(R,E,j){if(j?(i.texParameteri(R,i.TEXTURE_WRAP_S,oe[E.wrapS]),i.texParameteri(R,i.TEXTURE_WRAP_T,oe[E.wrapT]),(R===i.TEXTURE_3D||R===i.TEXTURE_2D_ARRAY)&&i.texParameteri(R,i.TEXTURE_WRAP_R,oe[E.wrapR]),i.texParameteri(R,i.TEXTURE_MAG_FILTER,he[E.magFilter]),i.texParameteri(R,i.TEXTURE_MIN_FILTER,he[E.minFilter])):(i.texParameteri(R,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(R,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE),(R===i.TEXTURE_3D||R===i.TEXTURE_2D_ARRAY)&&i.texParameteri(R,i.TEXTURE_WRAP_R,i.CLAMP_TO_EDGE),(E.wrapS!==Dt||E.wrapT!==Dt)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(R,i.TEXTURE_MAG_FILTER,_(E.magFilter)),i.texParameteri(R,i.TEXTURE_MIN_FILTER,_(E.minFilter)),E.minFilter!==Fe&&E.minFilter!==Be&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),E.compareFunction&&(i.texParameteri(R,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(R,i.TEXTURE_COMPARE_FUNC,Me[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const ie=e.get("EXT_texture_filter_anisotropic");if(E.magFilter===Fe||E.minFilter!==es&&E.minFilter!==Gn||E.type===$e&&e.has("OES_texture_float_linear")===!1||o===!1&&E.type===bt&&e.has("OES_texture_half_float_linear")===!1)return;(E.anisotropy>1||n.get(E).__currentAnisotropy)&&(i.texParameterf(R,ie.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,r.getMaxAnisotropy())),n.get(E).__currentAnisotropy=E.anisotropy)}}function be(R,E){let j=!1;R.__webglInit===void 0&&(R.__webglInit=!0,E.addEventListener("dispose",N));const ie=E.source;let ne=p.get(ie);ne===void 0&&(ne={},p.set(ie,ne));const P=ee(E);if(P!==R.__cacheKey){ne[P]===void 0&&(ne[P]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,j=!0),ne[P].usedTimes++;const Q=ne[R.__cacheKey];Q!==void 0&&(ne[R.__cacheKey].usedTimes--,Q.usedTimes===0&&z(E)),R.__cacheKey=P,R.__webglTexture=ne[P].texture}return j}function Xe(R,E,j){let ie=i.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(ie=i.TEXTURE_2D_ARRAY),E.isData3DTexture&&(ie=i.TEXTURE_3D);const ne=be(R,E),P=E.source;t.bindTexture(ie,R.__webglTexture,i.TEXTURE0+j);const Q=n.get(P);if(P.version!==Q.__version||ne===!0){t.activeTexture(i.TEXTURE0+j),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,E.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,E.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.NONE);const te=y(E)&&S(E.image)===!1;let k=v(E.image,te,!1,u);k=xt(E,k);const pe=S(k)||o,xe=s.convert(E.format,E.colorSpace);let ve=s.convert(E.type),me=D(E.internalFormat,xe,ve,E.colorSpace);Le(ie,E,pe);let de;const we=E.mipmaps,Ve=o&&E.isVideoTexture!==!0,L=Q.__version===void 0||ne===!0,le=M(E,k,pe);if(E.isDepthTexture)me=i.DEPTH_COMPONENT,o?E.type===$e?me=i.DEPTH_COMPONENT32F:E.type===wn?me=i.DEPTH_COMPONENT24:E.type===Vn?me=i.DEPTH24_STENCIL8:me=i.DEPTH_COMPONENT16:E.type===$e&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),E.format===ri&&me===i.DEPTH_COMPONENT&&E.type!==Pa&&E.type!==wn&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),E.type=wn,ve=s.convert(E.type)),E.format===li&&me===i.DEPTH_COMPONENT&&(me=i.DEPTH_STENCIL,E.type!==Vn&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),E.type=Vn,ve=s.convert(E.type))),L&&(Ve?t.texStorage2D(i.TEXTURE_2D,1,me,k.width,k.height):t.texImage2D(i.TEXTURE_2D,0,me,k.width,k.height,0,xe,ve,null));else if(E.isDataTexture)if(we.length>0&&pe){Ve&&L&&t.texStorage2D(i.TEXTURE_2D,le,me,we[0].width,we[0].height);for(let G=0,re=we.length;G<re;G++)de=we[G],Ve?t.texSubImage2D(i.TEXTURE_2D,G,0,0,de.width,de.height,xe,ve,de.data):t.texImage2D(i.TEXTURE_2D,G,me,de.width,de.height,0,xe,ve,de.data);E.generateMipmaps=!1}else Ve?(L&&t.texStorage2D(i.TEXTURE_2D,le,me,k.width,k.height),t.texSubImage2D(i.TEXTURE_2D,0,0,0,k.width,k.height,xe,ve,k.data)):t.texImage2D(i.TEXTURE_2D,0,me,k.width,k.height,0,xe,ve,k.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){Ve&&L&&t.texStorage3D(i.TEXTURE_2D_ARRAY,le,me,we[0].width,we[0].height,k.depth);for(let G=0,re=we.length;G<re;G++)de=we[G],E.format!==Ut?xe!==null?Ve?t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,G,0,0,0,de.width,de.height,k.depth,xe,de.data,0,0):t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,G,me,de.width,de.height,k.depth,0,de.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ve?t.texSubImage3D(i.TEXTURE_2D_ARRAY,G,0,0,0,de.width,de.height,k.depth,xe,ve,de.data):t.texImage3D(i.TEXTURE_2D_ARRAY,G,me,de.width,de.height,k.depth,0,xe,ve,de.data)}else{Ve&&L&&t.texStorage2D(i.TEXTURE_2D,le,me,we[0].width,we[0].height);for(let G=0,re=we.length;G<re;G++)de=we[G],E.format!==Ut?xe!==null?Ve?t.compressedTexSubImage2D(i.TEXTURE_2D,G,0,0,de.width,de.height,xe,de.data):t.compressedTexImage2D(i.TEXTURE_2D,G,me,de.width,de.height,0,de.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ve?t.texSubImage2D(i.TEXTURE_2D,G,0,0,de.width,de.height,xe,ve,de.data):t.texImage2D(i.TEXTURE_2D,G,me,de.width,de.height,0,xe,ve,de.data)}else if(E.isDataArrayTexture)Ve?(L&&t.texStorage3D(i.TEXTURE_2D_ARRAY,le,me,k.width,k.height,k.depth),t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,k.width,k.height,k.depth,xe,ve,k.data)):t.texImage3D(i.TEXTURE_2D_ARRAY,0,me,k.width,k.height,k.depth,0,xe,ve,k.data);else if(E.isData3DTexture)Ve?(L&&t.texStorage3D(i.TEXTURE_3D,le,me,k.width,k.height,k.depth),t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,k.width,k.height,k.depth,xe,ve,k.data)):t.texImage3D(i.TEXTURE_3D,0,me,k.width,k.height,k.depth,0,xe,ve,k.data);else if(E.isFramebufferTexture){if(L)if(Ve)t.texStorage2D(i.TEXTURE_2D,le,me,k.width,k.height);else{let G=k.width,re=k.height;for(let ue=0;ue<le;ue++)t.texImage2D(i.TEXTURE_2D,ue,me,G,re,0,xe,ve,null),G>>=1,re>>=1}}else if(we.length>0&&pe){Ve&&L&&t.texStorage2D(i.TEXTURE_2D,le,me,we[0].width,we[0].height);for(let G=0,re=we.length;G<re;G++)de=we[G],Ve?t.texSubImage2D(i.TEXTURE_2D,G,0,0,xe,ve,de):t.texImage2D(i.TEXTURE_2D,G,me,xe,ve,de);E.generateMipmaps=!1}else Ve?(L&&t.texStorage2D(i.TEXTURE_2D,le,me,k.width,k.height),t.texSubImage2D(i.TEXTURE_2D,0,0,0,xe,ve,k)):t.texImage2D(i.TEXTURE_2D,0,me,xe,ve,k);b(E,pe)&&w(ie),Q.__version=P.version,E.onUpdate&&E.onUpdate(E)}R.__version=E.version}function At(R,E,j){if(E.image.length!==6)return;const ie=be(R,E),ne=E.source;t.bindTexture(i.TEXTURE_CUBE_MAP,R.__webglTexture,i.TEXTURE0+j);const P=n.get(ne);if(ne.version!==P.__version||ie===!0){t.activeTexture(i.TEXTURE0+j),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,E.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,E.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.NONE);const Q=E.isCompressedTexture||E.image[0].isCompressedTexture,te=E.image[0]&&E.image[0].isDataTexture,k=[];for(let G=0;G<6;G++)!Q&&!te?k[G]=v(E.image[G],!1,!0,c):k[G]=te?E.image[G].image:E.image[G],k[G]=xt(E,k[G]);const pe=k[0],xe=S(pe)||o,ve=s.convert(E.format,E.colorSpace),me=s.convert(E.type),de=D(E.internalFormat,ve,me,E.colorSpace),we=o&&E.isVideoTexture!==!0,Ve=P.__version===void 0||ie===!0;let L=M(E,pe,xe);Le(i.TEXTURE_CUBE_MAP,E,xe);let le;if(Q){we&&Ve&&t.texStorage2D(i.TEXTURE_CUBE_MAP,L,de,pe.width,pe.height);for(let G=0;G<6;G++){le=k[G].mipmaps;for(let re=0;re<le.length;re++){const ue=le[re];E.format!==Ut?ve!==null?we?t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+G,re,0,0,ue.width,ue.height,ve,ue.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+G,re,de,ue.width,ue.height,0,ue.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):we?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+G,re,0,0,ue.width,ue.height,ve,me,ue.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+G,re,de,ue.width,ue.height,0,ve,me,ue.data)}}}else{le=E.mipmaps,we&&Ve&&(le.length>0&&L++,t.texStorage2D(i.TEXTURE_CUBE_MAP,L,de,k[0].width,k[0].height));for(let G=0;G<6;G++)if(te){we?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+G,0,0,0,k[G].width,k[G].height,ve,me,k[G].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+G,0,de,k[G].width,k[G].height,0,ve,me,k[G].data);for(let re=0;re<le.length;re++){const je=le[re].image[G].image;we?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+G,re+1,0,0,je.width,je.height,ve,me,je.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+G,re+1,de,je.width,je.height,0,ve,me,je.data)}}else{we?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+G,0,0,0,ve,me,k[G]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+G,0,de,ve,me,k[G]);for(let re=0;re<le.length;re++){const ue=le[re];we?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+G,re+1,0,0,ve,me,ue.image[G]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+G,re+1,de,ve,me,ue.image[G])}}}b(E,xe)&&w(i.TEXTURE_CUBE_MAP),P.__version=ne.version,E.onUpdate&&E.onUpdate(E)}R.__version=E.version}function Oe(R,E,j,ie,ne){const P=s.convert(j.format,j.colorSpace),Q=s.convert(j.type),te=D(j.internalFormat,P,Q,j.colorSpace);n.get(E).__hasExternalTextures||(ne===i.TEXTURE_3D||ne===i.TEXTURE_2D_ARRAY?t.texImage3D(ne,0,te,E.width,E.height,E.depth,0,P,Q,null):t.texImage2D(ne,0,te,E.width,E.height,0,P,Q,null)),t.bindFramebuffer(i.FRAMEBUFFER,R),qe(E)?d.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ie,ne,n.get(j).__webglTexture,0,Ue(E)):(ne===i.TEXTURE_2D||ne>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ne<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,ie,ne,n.get(j).__webglTexture,0),t.bindFramebuffer(i.FRAMEBUFFER,null)}function F(R,E,j){if(i.bindRenderbuffer(i.RENDERBUFFER,R),E.depthBuffer&&!E.stencilBuffer){let ie=i.DEPTH_COMPONENT16;if(j||qe(E)){const ne=E.depthTexture;ne&&ne.isDepthTexture&&(ne.type===$e?ie=i.DEPTH_COMPONENT32F:ne.type===wn&&(ie=i.DEPTH_COMPONENT24));const P=Ue(E);qe(E)?d.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,P,ie,E.width,E.height):i.renderbufferStorageMultisample(i.RENDERBUFFER,P,ie,E.width,E.height)}else i.renderbufferStorage(i.RENDERBUFFER,ie,E.width,E.height);i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.RENDERBUFFER,R)}else if(E.depthBuffer&&E.stencilBuffer){const ie=Ue(E);j&&qe(E)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,ie,i.DEPTH24_STENCIL8,E.width,E.height):qe(E)?d.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ie,i.DEPTH24_STENCIL8,E.width,E.height):i.renderbufferStorage(i.RENDERBUFFER,i.DEPTH_STENCIL,E.width,E.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.RENDERBUFFER,R)}else{const ie=E.isWebGLMultipleRenderTargets===!0?E.texture:[E.texture];for(let ne=0;ne<ie.length;ne++){const P=ie[ne],Q=s.convert(P.format,P.colorSpace),te=s.convert(P.type),k=D(P.internalFormat,Q,te,P.colorSpace),pe=Ue(E);j&&qe(E)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,pe,k,E.width,E.height):qe(E)?d.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,pe,k,E.width,E.height):i.renderbufferStorage(i.RENDERBUFFER,k,E.width,E.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function vt(R,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,R),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(E.depthTexture).__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),$(E.depthTexture,0);const ie=n.get(E.depthTexture).__webglTexture,ne=Ue(E);if(E.depthTexture.format===ri)qe(E)?d.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ie,0,ne):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ie,0);else if(E.depthTexture.format===li)qe(E)?d.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ie,0,ne):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ie,0);else throw new Error("Unknown depthTexture format")}function _e(R){const E=n.get(R),j=R.isWebGLCubeRenderTarget===!0;if(R.depthTexture&&!E.__autoAllocateDepthBuffer){if(j)throw new Error("target.depthTexture not supported in Cube render targets");vt(E.__webglFramebuffer,R)}else if(j){E.__webglDepthbuffer=[];for(let ie=0;ie<6;ie++)t.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer[ie]),E.__webglDepthbuffer[ie]=i.createRenderbuffer(),F(E.__webglDepthbuffer[ie],R,!1)}else t.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer=i.createRenderbuffer(),F(E.__webglDepthbuffer,R,!1);t.bindFramebuffer(i.FRAMEBUFFER,null)}function Pe(R,E,j){const ie=n.get(R);E!==void 0&&Oe(ie.__webglFramebuffer,R,R.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D),j!==void 0&&_e(R)}function Ae(R){const E=R.texture,j=n.get(R),ie=n.get(E);R.addEventListener("dispose",q),R.isWebGLMultipleRenderTargets!==!0&&(ie.__webglTexture===void 0&&(ie.__webglTexture=i.createTexture()),ie.__version=E.version,a.memory.textures++);const ne=R.isWebGLCubeRenderTarget===!0,P=R.isWebGLMultipleRenderTargets===!0,Q=S(R)||o;if(ne){j.__webglFramebuffer=[];for(let te=0;te<6;te++)j.__webglFramebuffer[te]=i.createFramebuffer()}else{if(j.__webglFramebuffer=i.createFramebuffer(),P)if(r.drawBuffers){const te=R.texture;for(let k=0,pe=te.length;k<pe;k++){const xe=n.get(te[k]);xe.__webglTexture===void 0&&(xe.__webglTexture=i.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&R.samples>0&&qe(R)===!1){const te=P?E:[E];j.__webglMultisampledFramebuffer=i.createFramebuffer(),j.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,j.__webglMultisampledFramebuffer);for(let k=0;k<te.length;k++){const pe=te[k];j.__webglColorRenderbuffer[k]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,j.__webglColorRenderbuffer[k]);const xe=s.convert(pe.format,pe.colorSpace),ve=s.convert(pe.type),me=D(pe.internalFormat,xe,ve,pe.colorSpace,R.isXRRenderTarget===!0),de=Ue(R);i.renderbufferStorageMultisample(i.RENDERBUFFER,de,me,R.width,R.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+k,i.RENDERBUFFER,j.__webglColorRenderbuffer[k])}i.bindRenderbuffer(i.RENDERBUFFER,null),R.depthBuffer&&(j.__webglDepthRenderbuffer=i.createRenderbuffer(),F(j.__webglDepthRenderbuffer,R,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ne){t.bindTexture(i.TEXTURE_CUBE_MAP,ie.__webglTexture),Le(i.TEXTURE_CUBE_MAP,E,Q);for(let te=0;te<6;te++)Oe(j.__webglFramebuffer[te],R,E,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+te);b(E,Q)&&w(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(P){const te=R.texture;for(let k=0,pe=te.length;k<pe;k++){const xe=te[k],ve=n.get(xe);t.bindTexture(i.TEXTURE_2D,ve.__webglTexture),Le(i.TEXTURE_2D,xe,Q),Oe(j.__webglFramebuffer,R,xe,i.COLOR_ATTACHMENT0+k,i.TEXTURE_2D),b(xe,Q)&&w(i.TEXTURE_2D)}t.unbindTexture()}else{let te=i.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(o?te=R.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(te,ie.__webglTexture),Le(te,E,Q),Oe(j.__webglFramebuffer,R,E,i.COLOR_ATTACHMENT0,te),b(E,Q)&&w(te),t.unbindTexture()}R.depthBuffer&&_e(R)}function Qe(R){const E=S(R)||o,j=R.isWebGLMultipleRenderTargets===!0?R.texture:[R.texture];for(let ie=0,ne=j.length;ie<ne;ie++){const P=j[ie];if(b(P,E)){const Q=R.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,te=n.get(P).__webglTexture;t.bindTexture(Q,te),w(Q),t.unbindTexture()}}}function ze(R){if(o&&R.samples>0&&qe(R)===!1){const E=R.isWebGLMultipleRenderTargets?R.texture:[R.texture],j=R.width,ie=R.height;let ne=i.COLOR_BUFFER_BIT;const P=[],Q=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,te=n.get(R),k=R.isWebGLMultipleRenderTargets===!0;if(k)for(let pe=0;pe<E.length;pe++)t.bindFramebuffer(i.FRAMEBUFFER,te.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+pe,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,te.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+pe,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,te.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,te.__webglFramebuffer);for(let pe=0;pe<E.length;pe++){P.push(i.COLOR_ATTACHMENT0+pe),R.depthBuffer&&P.push(Q);const xe=te.__ignoreDepthValues!==void 0?te.__ignoreDepthValues:!1;if(xe===!1&&(R.depthBuffer&&(ne|=i.DEPTH_BUFFER_BIT),R.stencilBuffer&&(ne|=i.STENCIL_BUFFER_BIT)),k&&i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,te.__webglColorRenderbuffer[pe]),xe===!0&&(i.invalidateFramebuffer(i.READ_FRAMEBUFFER,[Q]),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[Q])),k){const ve=n.get(E[pe]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,ve,0)}i.blitFramebuffer(0,0,j,ie,0,0,j,ie,ne,i.NEAREST),m&&i.invalidateFramebuffer(i.READ_FRAMEBUFFER,P)}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),k)for(let pe=0;pe<E.length;pe++){t.bindFramebuffer(i.FRAMEBUFFER,te.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+pe,i.RENDERBUFFER,te.__webglColorRenderbuffer[pe]);const xe=n.get(E[pe]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,te.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+pe,i.TEXTURE_2D,xe,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,te.__webglMultisampledFramebuffer)}}function Ue(R){return Math.min(h,R.samples)}function qe(R){const E=n.get(R);return o&&R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function dt(R){const E=a.render.frame;g.get(R)!==E&&(g.set(R,E),R.update())}function xt(R,E){const j=R.colorSpace,ie=R.format,ne=R.type;return R.isCompressedTexture===!0||R.format===ga||j!==jt&&j!==rn&&(j===Se?o===!1?e.has("EXT_sRGB")===!0&&ie===Ut?(R.format=ga,R.minFilter=Be,R.generateMipmaps=!1):E=Bc.sRGBToLinear(E):(ie!==Ut||ne!==wt)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",j)),E}this.allocateTextureUnit=K,this.resetTextureUnits=W,this.setTexture2D=$,this.setTexture2DArray=H,this.setTexture3D=X,this.setTextureCube=ce,this.rebindTextures=Pe,this.setupRenderTarget=Ae,this.updateRenderTargetMipmap=Qe,this.updateMultisampleRenderTarget=ze,this.setupDepthRenderbuffer=_e,this.setupFrameBufferTexture=Oe,this.useMultisampledRTT=qe}function Dg(i,e,t){const n=t.isWebGL2;function r(s,a=rn){let o;if(s===wt)return i.UNSIGNED_BYTE;if(s===Pc)return i.UNSIGNED_SHORT_4_4_4_4;if(s===Cc)return i.UNSIGNED_SHORT_5_5_5_1;if(s===th)return i.BYTE;if(s===nh)return i.SHORT;if(s===Pa)return i.UNSIGNED_SHORT;if(s===Rc)return i.INT;if(s===wn)return i.UNSIGNED_INT;if(s===$e)return i.FLOAT;if(s===bt)return n?i.HALF_FLOAT:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(s===ih)return i.ALPHA;if(s===Ut)return i.RGBA;if(s===rh)return i.LUMINANCE;if(s===sh)return i.LUMINANCE_ALPHA;if(s===ri)return i.DEPTH_COMPONENT;if(s===li)return i.DEPTH_STENCIL;if(s===ga)return o=e.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(s===fa)return i.RED;if(s===Lc)return i.RED_INTEGER;if(s===ah)return i.RG;if(s===Dc)return i.RG_INTEGER;if(s===Uc)return i.RGBA_INTEGER;if(s===ys||s===Es||s===bs||s===As)if(a===Se)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(s===ys)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Es)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===bs)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===As)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(s===ys)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Es)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===bs)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===As)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===mo||s===go||s===vo||s===xo)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(s===mo)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===go)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===vo)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===xo)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===oh)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===Mo||s===So)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(s===Mo)return a===Se?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(s===So)return a===Se?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===To||s===_o||s===yo||s===Eo||s===bo||s===Ao||s===wo||s===Ro||s===Po||s===Co||s===Lo||s===Do||s===Uo||s===Io)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(s===To)return a===Se?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===_o)return a===Se?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===yo)return a===Se?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Eo)return a===Se?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===bo)return a===Se?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Ao)return a===Se?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===wo)return a===Se?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Ro)return a===Se?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Po)return a===Se?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Co)return a===Se?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Lo)return a===Se?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Do)return a===Se?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Uo)return a===Se?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Io)return a===Se?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===ws)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(s===ws)return a===Se?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;if(s===lh||s===No||s===Fo||s===Oo)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(s===ws)return o.COMPRESSED_RED_RGTC1_EXT;if(s===No)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Fo)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Oo)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Vn?n?i.UNSIGNED_INT_24_8:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):i[s]!==void 0?i[s]:null}return{convert:r}}class Ug extends yt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class ii extends nt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Ig={type:"move"};class Zs{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ii,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ii,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new C,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new C),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ii,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new C,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new C),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const x of e.hand.values()){const p=t.getJointPose(x,n),f=this._getHandJoint(c,x);p!==null&&(f.matrix.fromArray(p.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=p.radius),f.visible=p!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],d=u.position.distanceTo(h.position),m=.02,g=.005;c.inputState.pinching&&d>m+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=m-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Ig)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new ii;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class fs extends ot{constructor(e,t,n,r,s,a,o,l,c,u){if(u=u!==void 0?u:ri,u!==ri&&u!==li)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===ri&&(n=wn),n===void 0&&u===li&&(n=Vn),super(null,r,s,a,o,l,u,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:Fe,this.minFilter=l!==void 0?l:Fe,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Ng extends fn{constructor(e,t){super();const n=this;let r=null,s=1,a=null,o="local-floor",l=1,c=null,u=null,h=null,d=null,m=null,g=null;const x=t.getContextAttributes();let p=null,f=null;const T=[],v=[],S=new yt;S.layers.enable(1),S.viewport=new Ze;const y=new yt;y.layers.enable(2),y.viewport=new Ze;const b=[S,y],w=new Ug;w.layers.enable(1),w.layers.enable(2);let D=null,M=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(H){let X=T[H];return X===void 0&&(X=new Zs,T[H]=X),X.getTargetRaySpace()},this.getControllerGrip=function(H){let X=T[H];return X===void 0&&(X=new Zs,T[H]=X),X.getGripSpace()},this.getHand=function(H){let X=T[H];return X===void 0&&(X=new Zs,T[H]=X),X.getHandSpace()};function _(H){const X=v.indexOf(H.inputSource);if(X===-1)return;const ce=T[X];ce!==void 0&&(ce.update(H.inputSource,H.frame,c||a),ce.dispatchEvent({type:H.type,data:H.inputSource}))}function N(){r.removeEventListener("select",_),r.removeEventListener("selectstart",_),r.removeEventListener("selectend",_),r.removeEventListener("squeeze",_),r.removeEventListener("squeezestart",_),r.removeEventListener("squeezeend",_),r.removeEventListener("end",N),r.removeEventListener("inputsourceschange",q);for(let H=0;H<T.length;H++){const X=v[H];X!==null&&(v[H]=null,T[H].disconnect(X))}D=null,M=null,e.setRenderTarget(p),m=null,d=null,h=null,r=null,f=null,$.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(H){s=H,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(H){o=H,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(H){c=H},this.getBaseLayer=function(){return d!==null?d:m},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(H){if(r=H,r!==null){if(p=e.getRenderTarget(),r.addEventListener("select",_),r.addEventListener("selectstart",_),r.addEventListener("selectend",_),r.addEventListener("squeeze",_),r.addEventListener("squeezestart",_),r.addEventListener("squeezeend",_),r.addEventListener("end",N),r.addEventListener("inputsourceschange",q),x.xrCompatible!==!0&&await t.makeXRCompatible(),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const X={antialias:r.renderState.layers===void 0?x.antialias:!0,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,t,X),r.updateRenderState({baseLayer:m}),f=new it(m.framebufferWidth,m.framebufferHeight,{format:Ut,type:wt,colorSpace:e.outputColorSpace,stencilBuffer:x.stencil})}else{let X=null,ce=null,oe=null;x.depth&&(oe=x.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,X=x.stencil?li:ri,ce=x.stencil?Vn:wn);const he={colorFormat:t.RGBA8,depthFormat:oe,scaleFactor:s};h=new XRWebGLBinding(r,t),d=h.createProjectionLayer(he),r.updateRenderState({layers:[d]}),f=new it(d.textureWidth,d.textureHeight,{format:Ut,type:wt,depthTexture:new fs(d.textureWidth,d.textureHeight,ce,void 0,void 0,void 0,void 0,void 0,void 0,X),stencilBuffer:x.stencil,colorSpace:e.outputColorSpace,samples:x.antialias?4:0});const Me=e.properties.get(f);Me.__ignoreDepthValues=d.ignoreDepthValues}f.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(o),$.setContext(r),$.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function q(H){for(let X=0;X<H.removed.length;X++){const ce=H.removed[X],oe=v.indexOf(ce);oe>=0&&(v[oe]=null,T[oe].disconnect(ce))}for(let X=0;X<H.added.length;X++){const ce=H.added[X];let oe=v.indexOf(ce);if(oe===-1){for(let Me=0;Me<T.length;Me++)if(Me>=v.length){v.push(ce),oe=Me;break}else if(v[Me]===null){v[Me]=ce,oe=Me;break}if(oe===-1)break}const he=T[oe];he&&he.connect(ce)}}const I=new C,z=new C;function B(H,X,ce){I.setFromMatrixPosition(X.matrixWorld),z.setFromMatrixPosition(ce.matrixWorld);const oe=I.distanceTo(z),he=X.projectionMatrix.elements,Me=ce.projectionMatrix.elements,Le=he[14]/(he[10]-1),be=he[14]/(he[10]+1),Xe=(he[9]+1)/he[5],At=(he[9]-1)/he[5],Oe=(he[8]-1)/he[0],F=(Me[8]+1)/Me[0],vt=Le*Oe,_e=Le*F,Pe=oe/(-Oe+F),Ae=Pe*-Oe;X.matrixWorld.decompose(H.position,H.quaternion,H.scale),H.translateX(Ae),H.translateZ(Pe),H.matrixWorld.compose(H.position,H.quaternion,H.scale),H.matrixWorldInverse.copy(H.matrixWorld).invert();const Qe=Le+Pe,ze=be+Pe,Ue=vt-Ae,qe=_e+(oe-Ae),dt=Xe*be/ze*Qe,xt=At*be/ze*Qe;H.projectionMatrix.makePerspective(Ue,qe,dt,xt,Qe,ze),H.projectionMatrixInverse.copy(H.projectionMatrix).invert()}function J(H,X){X===null?H.matrixWorld.copy(H.matrix):H.matrixWorld.multiplyMatrices(X.matrixWorld,H.matrix),H.matrixWorldInverse.copy(H.matrixWorld).invert()}this.updateCamera=function(H){if(r===null)return;w.near=y.near=S.near=H.near,w.far=y.far=S.far=H.far,(D!==w.near||M!==w.far)&&(r.updateRenderState({depthNear:w.near,depthFar:w.far}),D=w.near,M=w.far);const X=H.parent,ce=w.cameras;J(w,X);for(let oe=0;oe<ce.length;oe++)J(ce[oe],X);ce.length===2?B(w,S,y):w.projectionMatrix.copy(S.projectionMatrix),W(H,w,X)};function W(H,X,ce){ce===null?H.matrix.copy(X.matrixWorld):(H.matrix.copy(ce.matrixWorld),H.matrix.invert(),H.matrix.multiply(X.matrixWorld)),H.matrix.decompose(H.position,H.quaternion,H.scale),H.updateMatrixWorld(!0);const oe=H.children;for(let he=0,Me=oe.length;he<Me;he++)oe[he].updateMatrixWorld(!0);H.projectionMatrix.copy(X.projectionMatrix),H.projectionMatrixInverse.copy(X.projectionMatrixInverse),H.isPerspectiveCamera&&(H.fov=ki*2*Math.atan(1/H.projectionMatrix.elements[5]),H.zoom=1)}this.getCamera=function(){return w},this.getFoveation=function(){if(!(d===null&&m===null))return l},this.setFoveation=function(H){l=H,d!==null&&(d.fixedFoveation=H),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=H)};let K=null;function ee(H,X){if(u=X.getViewerPose(c||a),g=X,u!==null){const ce=u.views;m!==null&&(e.setRenderTargetFramebuffer(f,m.framebuffer),e.setRenderTarget(f));let oe=!1;ce.length!==w.cameras.length&&(w.cameras.length=0,oe=!0);for(let he=0;he<ce.length;he++){const Me=ce[he];let Le=null;if(m!==null)Le=m.getViewport(Me);else{const Xe=h.getViewSubImage(d,Me);Le=Xe.viewport,he===0&&(e.setRenderTargetTextures(f,Xe.colorTexture,d.ignoreDepthValues?void 0:Xe.depthStencilTexture),e.setRenderTarget(f))}let be=b[he];be===void 0&&(be=new yt,be.layers.enable(he),be.viewport=new Ze,b[he]=be),be.matrix.fromArray(Me.transform.matrix),be.matrix.decompose(be.position,be.quaternion,be.scale),be.projectionMatrix.fromArray(Me.projectionMatrix),be.projectionMatrixInverse.copy(be.projectionMatrix).invert(),be.viewport.set(Le.x,Le.y,Le.width,Le.height),he===0&&(w.matrix.copy(be.matrix),w.matrix.decompose(w.position,w.quaternion,w.scale)),oe===!0&&w.cameras.push(be)}}for(let ce=0;ce<T.length;ce++){const oe=v[ce],he=T[ce];oe!==null&&he!==void 0&&he.update(oe,X,c||a)}K&&K(H,X),X.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:X}),g=null}const $=new qc;$.setAnimationLoop(ee),this.setAnimationLoop=function(H){K=H},this.dispose=function(){}}}function Fg(i,e){function t(p,f){p.matrixAutoUpdate===!0&&p.updateMatrix(),f.value.copy(p.matrix)}function n(p,f){f.color.getRGB(p.fogColor.value,Wc(i)),f.isFog?(p.fogNear.value=f.near,p.fogFar.value=f.far):f.isFogExp2&&(p.fogDensity.value=f.density)}function r(p,f,T,v,S){f.isMeshBasicMaterial||f.isMeshLambertMaterial?s(p,f):f.isMeshToonMaterial?(s(p,f),h(p,f)):f.isMeshPhongMaterial?(s(p,f),u(p,f)):f.isMeshStandardMaterial?(s(p,f),d(p,f),f.isMeshPhysicalMaterial&&m(p,f,S)):f.isMeshMatcapMaterial?(s(p,f),g(p,f)):f.isMeshDepthMaterial?s(p,f):f.isMeshDistanceMaterial?(s(p,f),x(p,f)):f.isMeshNormalMaterial?s(p,f):f.isLineBasicMaterial?(a(p,f),f.isLineDashedMaterial&&o(p,f)):f.isPointsMaterial?l(p,f,T,v):f.isSpriteMaterial?c(p,f):f.isShadowMaterial?(p.color.value.copy(f.color),p.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function s(p,f){p.opacity.value=f.opacity,f.color&&p.diffuse.value.copy(f.color),f.emissive&&p.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(p.map.value=f.map,t(f.map,p.mapTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,t(f.alphaMap,p.alphaMapTransform)),f.bumpMap&&(p.bumpMap.value=f.bumpMap,t(f.bumpMap,p.bumpMapTransform),p.bumpScale.value=f.bumpScale,f.side===ft&&(p.bumpScale.value*=-1)),f.normalMap&&(p.normalMap.value=f.normalMap,t(f.normalMap,p.normalMapTransform),p.normalScale.value.copy(f.normalScale),f.side===ft&&p.normalScale.value.negate()),f.displacementMap&&(p.displacementMap.value=f.displacementMap,t(f.displacementMap,p.displacementMapTransform),p.displacementScale.value=f.displacementScale,p.displacementBias.value=f.displacementBias),f.emissiveMap&&(p.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,p.emissiveMapTransform)),f.specularMap&&(p.specularMap.value=f.specularMap,t(f.specularMap,p.specularMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest);const T=e.get(f).envMap;if(T&&(p.envMap.value=T,p.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=f.reflectivity,p.ior.value=f.ior,p.refractionRatio.value=f.refractionRatio),f.lightMap){p.lightMap.value=f.lightMap;const v=i.useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=f.lightMapIntensity*v,t(f.lightMap,p.lightMapTransform)}f.aoMap&&(p.aoMap.value=f.aoMap,p.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,p.aoMapTransform))}function a(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,f.map&&(p.map.value=f.map,t(f.map,p.mapTransform))}function o(p,f){p.dashSize.value=f.dashSize,p.totalSize.value=f.dashSize+f.gapSize,p.scale.value=f.scale}function l(p,f,T,v){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.size.value=f.size*T,p.scale.value=v*.5,f.map&&(p.map.value=f.map,t(f.map,p.uvTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,t(f.alphaMap,p.alphaMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest)}function c(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.rotation.value=f.rotation,f.map&&(p.map.value=f.map,t(f.map,p.mapTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,t(f.alphaMap,p.alphaMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest)}function u(p,f){p.specular.value.copy(f.specular),p.shininess.value=Math.max(f.shininess,1e-4)}function h(p,f){f.gradientMap&&(p.gradientMap.value=f.gradientMap)}function d(p,f){p.metalness.value=f.metalness,f.metalnessMap&&(p.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,p.metalnessMapTransform)),p.roughness.value=f.roughness,f.roughnessMap&&(p.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,p.roughnessMapTransform)),e.get(f).envMap&&(p.envMapIntensity.value=f.envMapIntensity)}function m(p,f,T){p.ior.value=f.ior,f.sheen>0&&(p.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),p.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(p.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,p.sheenColorMapTransform)),f.sheenRoughnessMap&&(p.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,p.sheenRoughnessMapTransform))),f.clearcoat>0&&(p.clearcoat.value=f.clearcoat,p.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(p.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,p.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(p.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===ft&&p.clearcoatNormalScale.value.negate())),f.iridescence>0&&(p.iridescence.value=f.iridescence,p.iridescenceIOR.value=f.iridescenceIOR,p.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(p.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,p.iridescenceMapTransform)),f.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),f.transmission>0&&(p.transmission.value=f.transmission,p.transmissionSamplerMap.value=T.texture,p.transmissionSamplerSize.value.set(T.width,T.height),f.transmissionMap&&(p.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,p.transmissionMapTransform)),p.thickness.value=f.thickness,f.thicknessMap&&(p.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=f.attenuationDistance,p.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(p.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(p.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=f.specularIntensity,p.specularColor.value.copy(f.specularColor),f.specularColorMap&&(p.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,p.specularColorMapTransform)),f.specularIntensityMap&&(p.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,f){f.matcap&&(p.matcap.value=f.matcap)}function x(p,f){const T=e.get(f).light;p.referencePosition.value.setFromMatrixPosition(T.matrixWorld),p.nearDistance.value=T.shadow.camera.near,p.farDistance.value=T.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function Og(i,e,t,n){let r={},s={},a=[];const o=t.isWebGL2?i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(T,v){const S=v.program;n.uniformBlockBinding(T,S)}function c(T,v){let S=r[T.id];S===void 0&&(g(T),S=u(T),r[T.id]=S,T.addEventListener("dispose",p));const y=v.program;n.updateUBOMapping(T,y);const b=e.render.frame;s[T.id]!==b&&(d(T),s[T.id]=b)}function u(T){const v=h();T.__bindingPointIndex=v;const S=i.createBuffer(),y=T.__size,b=T.usage;return i.bindBuffer(i.UNIFORM_BUFFER,S),i.bufferData(i.UNIFORM_BUFFER,y,b),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,v,S),S}function h(){for(let T=0;T<o;T++)if(a.indexOf(T)===-1)return a.push(T),T;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(T){const v=r[T.id],S=T.uniforms,y=T.__cache;i.bindBuffer(i.UNIFORM_BUFFER,v);for(let b=0,w=S.length;b<w;b++){const D=S[b];if(m(D,b,y)===!0){const M=D.__offset,_=Array.isArray(D.value)?D.value:[D.value];let N=0;for(let q=0;q<_.length;q++){const I=_[q],z=x(I);typeof I=="number"?(D.__data[0]=I,i.bufferSubData(i.UNIFORM_BUFFER,M+N,D.__data)):I.isMatrix3?(D.__data[0]=I.elements[0],D.__data[1]=I.elements[1],D.__data[2]=I.elements[2],D.__data[3]=I.elements[0],D.__data[4]=I.elements[3],D.__data[5]=I.elements[4],D.__data[6]=I.elements[5],D.__data[7]=I.elements[0],D.__data[8]=I.elements[6],D.__data[9]=I.elements[7],D.__data[10]=I.elements[8],D.__data[11]=I.elements[0]):(I.toArray(D.__data,N),N+=z.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,M,D.__data)}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function m(T,v,S){const y=T.value;if(S[v]===void 0){if(typeof y=="number")S[v]=y;else{const b=Array.isArray(y)?y:[y],w=[];for(let D=0;D<b.length;D++)w.push(b[D].clone());S[v]=w}return!0}else if(typeof y=="number"){if(S[v]!==y)return S[v]=y,!0}else{const b=Array.isArray(S[v])?S[v]:[S[v]],w=Array.isArray(y)?y:[y];for(let D=0;D<b.length;D++){const M=b[D];if(M.equals(w[D])===!1)return M.copy(w[D]),!0}}return!1}function g(T){const v=T.uniforms;let S=0;const y=16;let b=0;for(let w=0,D=v.length;w<D;w++){const M=v[w],_={boundary:0,storage:0},N=Array.isArray(M.value)?M.value:[M.value];for(let q=0,I=N.length;q<I;q++){const z=N[q],B=x(z);_.boundary+=B.boundary,_.storage+=B.storage}if(M.__data=new Float32Array(_.storage/Float32Array.BYTES_PER_ELEMENT),M.__offset=S,w>0){b=S%y;const q=y-b;b!==0&&q-_.boundary<0&&(S+=y-b,M.__offset=S)}S+=_.storage}return b=S%y,b>0&&(S+=y-b),T.__size=S,T.__cache={},this}function x(T){const v={boundary:0,storage:0};return typeof T=="number"?(v.boundary=4,v.storage=4):T.isVector2?(v.boundary=8,v.storage=8):T.isVector3||T.isColor?(v.boundary=16,v.storage=12):T.isVector4?(v.boundary=16,v.storage=16):T.isMatrix3?(v.boundary=48,v.storage=48):T.isMatrix4?(v.boundary=64,v.storage=64):T.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",T),v}function p(T){const v=T.target;v.removeEventListener("dispose",p);const S=a.indexOf(v.__bindingPointIndex);a.splice(S,1),i.deleteBuffer(r[v.id]),delete r[v.id],delete s[v.id]}function f(){for(const T in r)i.deleteBuffer(r[T]);a=[],r={},s={}}return{bind:l,update:c,dispose:f}}function Bg(){const i=Mr("canvas");return i.style.display="block",i}class eu{constructor(e={}){const{canvas:t=Bg(),context:n=null,depth:r=!0,stencil:s=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1}=e;this.isWebGLRenderer=!0;let d;n!==null?d=n.getContextAttributes().alpha:d=a;const m=new Uint32Array(4),g=new Int32Array(4);let x=null,p=null;const f=[],T=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputColorSpace=Se,this.useLegacyLights=!0,this.toneMapping=un,this.toneMappingExposure=1;const v=this;let S=!1,y=0,b=0,w=null,D=-1,M=null;const _=new Ze,N=new Ze;let q=null;const I=new Te(0);let z=0,B=t.width,J=t.height,W=1,K=null,ee=null;const $=new Ze(0,0,B,J),H=new Ze(0,0,B,J);let X=!1;const ce=new Ua;let oe=!1,he=!1,Me=null;const Le=new ge,be=new se,Xe=new C,At={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Oe(){return w===null?W:1}let F=n;function vt(A,O){for(let Y=0;Y<A.length;Y++){const U=A[Y],Z=t.getContext(U,O);if(Z!==null)return Z}return null}try{const A={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${qi}`),t.addEventListener("webglcontextlost",le,!1),t.addEventListener("webglcontextrestored",G,!1),t.addEventListener("webglcontextcreationerror",re,!1),F===null){const O=["webgl2","webgl","experimental-webgl"];if(v.isWebGL1Renderer===!0&&O.shift(),F=vt(O,A),F===null)throw vt(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&F instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),F.getShaderPrecisionFormat===void 0&&(F.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let _e,Pe,Ae,Qe,ze,Ue,qe,dt,xt,R,E,j,ie,ne,P,Q,te,k,pe,xe,ve,me,de,we;function Ve(){_e=new Zp(F),Pe=new Wp(F,_e,e),_e.init(Pe),me=new Dg(F,_e,Pe),Ae=new Cg(F,_e,Pe),Qe=new $p(F),ze=new vg,Ue=new Lg(F,_e,Ae,ze,Pe,me,Qe),qe=new jp(v),dt=new Kp(v),xt=new ld(F,Pe),de=new kp(F,_e,xt,Pe),R=new Jp(F,xt,Qe,de),E=new im(F,R,xt,Qe),pe=new nm(F,Pe,Ue),Q=new Xp(ze),j=new gg(v,qe,dt,_e,Pe,de,Q),ie=new Fg(v,ze),ne=new Mg,P=new bg(_e,Pe),k=new Vp(v,qe,dt,Ae,E,d,l),te=new Pg(v,E,Pe),we=new Og(F,Qe,Pe,Ae),xe=new Gp(F,_e,Qe,Pe),ve=new Qp(F,_e,Qe,Pe),Qe.programs=j.programs,v.capabilities=Pe,v.extensions=_e,v.properties=ze,v.renderLists=ne,v.shadowMap=te,v.state=Ae,v.info=Qe}Ve();const L=new Ng(v,F);this.xr=L,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){const A=_e.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=_e.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return W},this.setPixelRatio=function(A){A!==void 0&&(W=A,this.setSize(B,J,!1))},this.getSize=function(A){return A.set(B,J)},this.setSize=function(A,O,Y=!0){if(L.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}B=A,J=O,t.width=Math.floor(A*W),t.height=Math.floor(O*W),Y===!0&&(t.style.width=A+"px",t.style.height=O+"px"),this.setViewport(0,0,A,O)},this.getDrawingBufferSize=function(A){return A.set(B*W,J*W).floor()},this.setDrawingBufferSize=function(A,O,Y){B=A,J=O,W=Y,t.width=Math.floor(A*Y),t.height=Math.floor(O*Y),this.setViewport(0,0,A,O)},this.getCurrentViewport=function(A){return A.copy(_)},this.getViewport=function(A){return A.copy($)},this.setViewport=function(A,O,Y,U){A.isVector4?$.set(A.x,A.y,A.z,A.w):$.set(A,O,Y,U),Ae.viewport(_.copy($).multiplyScalar(W).floor())},this.getScissor=function(A){return A.copy(H)},this.setScissor=function(A,O,Y,U){A.isVector4?H.set(A.x,A.y,A.z,A.w):H.set(A,O,Y,U),Ae.scissor(N.copy(H).multiplyScalar(W).floor())},this.getScissorTest=function(){return X},this.setScissorTest=function(A){Ae.setScissorTest(X=A)},this.setOpaqueSort=function(A){K=A},this.setTransparentSort=function(A){ee=A},this.getClearColor=function(A){return A.copy(k.getClearColor())},this.setClearColor=function(){k.setClearColor.apply(k,arguments)},this.getClearAlpha=function(){return k.getClearAlpha()},this.setClearAlpha=function(){k.setClearAlpha.apply(k,arguments)},this.clear=function(A=!0,O=!0,Y=!0){let U=0;if(A){let Z=!1;if(w!==null){const fe=w.texture.format;Z=fe===Uc||fe===Dc||fe===Lc}if(Z){const fe=w.texture.type,ye=fe===wt||fe===wn||fe===Pa||fe===Vn||fe===Pc||fe===Cc,Re=k.getClearColor(),Ce=k.getClearAlpha(),He=Re.r,De=Re.g,Ie=Re.b;ye?(m[0]=He,m[1]=De,m[2]=Ie,m[3]=Ce,F.clearBufferuiv(F.COLOR,0,m)):(g[0]=He,g[1]=De,g[2]=Ie,g[3]=Ce,F.clearBufferiv(F.COLOR,0,g))}else U|=F.COLOR_BUFFER_BIT}O&&(U|=F.DEPTH_BUFFER_BIT),Y&&(U|=F.STENCIL_BUFFER_BIT),F.clear(U)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",le,!1),t.removeEventListener("webglcontextrestored",G,!1),t.removeEventListener("webglcontextcreationerror",re,!1),ne.dispose(),P.dispose(),ze.dispose(),qe.dispose(),dt.dispose(),E.dispose(),de.dispose(),we.dispose(),j.dispose(),L.dispose(),L.removeEventListener("sessionstart",rt),L.removeEventListener("sessionend",ln),Me&&(Me.dispose(),Me=null),Nt.stop()};function le(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),S=!0}function G(){console.log("THREE.WebGLRenderer: Context Restored."),S=!1;const A=Qe.autoReset,O=te.enabled,Y=te.autoUpdate,U=te.needsUpdate,Z=te.type;Ve(),Qe.autoReset=A,te.enabled=O,te.autoUpdate=Y,te.needsUpdate=U,te.type=Z}function re(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function ue(A){const O=A.target;O.removeEventListener("dispose",ue),je(O)}function je(A){tt(A),ze.remove(A)}function tt(A){const O=ze.get(A).programs;O!==void 0&&(O.forEach(function(Y){j.releaseProgram(Y)}),A.isShaderMaterial&&j.releaseShaderCache(A))}this.renderBufferDirect=function(A,O,Y,U,Z,fe){O===null&&(O=At);const ye=Z.isMesh&&Z.matrixWorld.determinant()<0,Re=yu(A,O,Y,U,Z);Ae.setMaterial(U,ye);let Ce=Y.index,He=1;U.wireframe===!0&&(Ce=R.getWireframeAttribute(Y),He=2);const De=Y.drawRange,Ie=Y.attributes.position;let st=De.start*He,at=(De.start+De.count)*He;fe!==null&&(st=Math.max(st,fe.start*He),at=Math.min(at,(fe.start+fe.count)*He)),Ce!==null?(st=Math.max(st,0),at=Math.min(at,Ce.count)):Ie!=null&&(st=Math.max(st,0),at=Math.min(at,Ie.count));const Qt=at-st;if(Qt<0||Qt===1/0)return;de.setup(Z,U,Re,Y,Ce);let gn,lt=xe;if(Ce!==null&&(gn=xt.get(Ce),lt=ve,lt.setIndex(gn)),Z.isMesh)U.wireframe===!0?(Ae.setLineWidth(U.wireframeLinewidth*Oe()),lt.setMode(F.LINES)):lt.setMode(F.TRIANGLES);else if(Z.isLine){let We=U.linewidth;We===void 0&&(We=1),Ae.setLineWidth(We*Oe()),Z.isLineSegments?lt.setMode(F.LINES):Z.isLineLoop?lt.setMode(F.LINE_LOOP):lt.setMode(F.LINE_STRIP)}else Z.isPoints?lt.setMode(F.POINTS):Z.isSprite&&lt.setMode(F.TRIANGLES);if(Z.isInstancedMesh)lt.renderInstances(st,Qt,Z.count);else if(Y.isInstancedBufferGeometry){const We=Y._maxInstanceCount!==void 0?Y._maxInstanceCount:1/0,Ms=Math.min(Y.instanceCount,We);lt.renderInstances(st,Qt,Ms)}else lt.render(st,Qt)},this.compile=function(A,O){function Y(U,Z,fe){U.transparent===!0&&U.side===zt&&U.forceSinglePass===!1?(U.side=ft,U.needsUpdate=!0,Ar(U,Z,fe),U.side=hn,U.needsUpdate=!0,Ar(U,Z,fe),U.side=zt):Ar(U,Z,fe)}p=P.get(A),p.init(),T.push(p),A.traverseVisible(function(U){U.isLight&&U.layers.test(O.layers)&&(p.pushLight(U),U.castShadow&&p.pushShadow(U))}),p.setupLights(v.useLegacyLights),A.traverse(function(U){const Z=U.material;if(Z)if(Array.isArray(Z))for(let fe=0;fe<Z.length;fe++){const ye=Z[fe];Y(ye,A,U)}else Y(Z,A,U)}),T.pop(),p=null};let Mt=null;function on(A){Mt&&Mt(A)}function rt(){Nt.stop()}function ln(){Nt.start()}const Nt=new qc;Nt.setAnimationLoop(on),typeof self<"u"&&Nt.setContext(self),this.setAnimationLoop=function(A){Mt=A,L.setAnimationLoop(A),A===null?Nt.stop():Nt.start()},L.addEventListener("sessionstart",rt),L.addEventListener("sessionend",ln),this.render=function(A,O){if(O!==void 0&&O.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),L.enabled===!0&&L.isPresenting===!0&&(L.cameraAutoUpdate===!0&&L.updateCamera(O),O=L.getCamera()),A.isScene===!0&&A.onBeforeRender(v,A,O,w),p=P.get(A,T.length),p.init(),T.push(p),Le.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),ce.setFromProjectionMatrix(Le),he=this.localClippingEnabled,oe=Q.init(this.clippingPlanes,he),x=ne.get(A,f.length),x.init(),f.push(x),no(A,O,0,v.sortObjects),x.finish(),v.sortObjects===!0&&x.sort(K,ee),this.info.render.frame++,oe===!0&&Q.beginShadows();const Y=p.state.shadowsArray;if(te.render(Y,A,O),oe===!0&&Q.endShadows(),this.info.autoReset===!0&&this.info.reset(),k.render(x,A),p.setupLights(v.useLegacyLights),O.isArrayCamera){const U=O.cameras;for(let Z=0,fe=U.length;Z<fe;Z++){const ye=U[Z];io(x,A,ye,ye.viewport)}}else io(x,A,O);w!==null&&(Ue.updateMultisampleRenderTarget(w),Ue.updateRenderTargetMipmap(w)),A.isScene===!0&&A.onAfterRender(v,A,O),de.resetDefaultState(),D=-1,M=null,T.pop(),T.length>0?p=T[T.length-1]:p=null,f.pop(),f.length>0?x=f[f.length-1]:x=null};function no(A,O,Y,U){if(A.visible===!1)return;if(A.layers.test(O.layers)){if(A.isGroup)Y=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(O);else if(A.isLight)p.pushLight(A),A.castShadow&&p.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||ce.intersectsSprite(A)){U&&Xe.setFromMatrixPosition(A.matrixWorld).applyMatrix4(Le);const ye=E.update(A),Re=A.material;Re.visible&&x.push(A,ye,Re,Y,Xe.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||ce.intersectsObject(A))){const ye=E.update(A),Re=A.material;if(U&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Xe.copy(A.boundingSphere.center)):(ye.boundingSphere===null&&ye.computeBoundingSphere(),Xe.copy(ye.boundingSphere.center)),Xe.applyMatrix4(A.matrixWorld).applyMatrix4(Le)),Array.isArray(Re)){const Ce=ye.groups;for(let He=0,De=Ce.length;He<De;He++){const Ie=Ce[He],st=Re[Ie.materialIndex];st&&st.visible&&x.push(A,ye,st,Y,Xe.z,Ie)}}else Re.visible&&x.push(A,ye,Re,Y,Xe.z,null)}}const fe=A.children;for(let ye=0,Re=fe.length;ye<Re;ye++)no(fe[ye],O,Y,U)}function io(A,O,Y,U){const Z=A.opaque,fe=A.transmissive,ye=A.transparent;p.setupLightsView(Y),oe===!0&&Q.setGlobalState(v.clippingPlanes,Y),fe.length>0&&_u(Z,fe,O,Y),U&&Ae.viewport(_.copy(U)),Z.length>0&&br(Z,O,Y),fe.length>0&&br(fe,O,Y),ye.length>0&&br(ye,O,Y),Ae.buffers.depth.setTest(!0),Ae.buffers.depth.setMask(!0),Ae.buffers.color.setMask(!0),Ae.setPolygonOffset(!1)}function _u(A,O,Y,U){const Z=Pe.isWebGL2;Me===null&&(Me=new it(1,1,{generateMipmaps:!0,type:_e.has("EXT_color_buffer_half_float")?bt:wt,minFilter:Gn,samples:Z?4:0})),v.getDrawingBufferSize(be),Z?Me.setSize(be.x,be.y):Me.setSize(as(be.x),as(be.y));const fe=v.getRenderTarget();v.setRenderTarget(Me),v.getClearColor(I),z=v.getClearAlpha(),z<1&&v.setClearColor(16777215,.5),v.clear();const ye=v.toneMapping;v.toneMapping=un,br(A,Y,U),Ue.updateMultisampleRenderTarget(Me),Ue.updateRenderTargetMipmap(Me);let Re=!1;for(let Ce=0,He=O.length;Ce<He;Ce++){const De=O[Ce],Ie=De.object,st=De.geometry,at=De.material,Qt=De.group;if(at.side===zt&&Ie.layers.test(U.layers)){const gn=at.side;at.side=ft,at.needsUpdate=!0,ro(Ie,Y,U,st,at,Qt),at.side=gn,at.needsUpdate=!0,Re=!0}}Re===!0&&(Ue.updateMultisampleRenderTarget(Me),Ue.updateRenderTargetMipmap(Me)),v.setRenderTarget(fe),v.setClearColor(I,z),v.toneMapping=ye}function br(A,O,Y){const U=O.isScene===!0?O.overrideMaterial:null;for(let Z=0,fe=A.length;Z<fe;Z++){const ye=A[Z],Re=ye.object,Ce=ye.geometry,He=U===null?ye.material:U,De=ye.group;Re.layers.test(Y.layers)&&ro(Re,O,Y,Ce,He,De)}}function ro(A,O,Y,U,Z,fe){A.onBeforeRender(v,O,Y,U,Z,fe),A.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),Z.onBeforeRender(v,O,Y,U,A,fe),Z.transparent===!0&&Z.side===zt&&Z.forceSinglePass===!1?(Z.side=ft,Z.needsUpdate=!0,v.renderBufferDirect(Y,O,U,Z,A,fe),Z.side=hn,Z.needsUpdate=!0,v.renderBufferDirect(Y,O,U,Z,A,fe),Z.side=zt):v.renderBufferDirect(Y,O,U,Z,A,fe),A.onAfterRender(v,O,Y,U,Z,fe)}function Ar(A,O,Y){O.isScene!==!0&&(O=At);const U=ze.get(A),Z=p.state.lights,fe=p.state.shadowsArray,ye=Z.state.version,Re=j.getParameters(A,Z.state,fe,O,Y),Ce=j.getProgramCacheKey(Re);let He=U.programs;U.environment=A.isMeshStandardMaterial?O.environment:null,U.fog=O.fog,U.envMap=(A.isMeshStandardMaterial?dt:qe).get(A.envMap||U.environment),He===void 0&&(A.addEventListener("dispose",ue),He=new Map,U.programs=He);let De=He.get(Ce);if(De!==void 0){if(U.currentProgram===De&&U.lightsStateVersion===ye)return so(A,Re),De}else Re.uniforms=j.getUniforms(A),A.onBuild(Y,Re,v),A.onBeforeCompile(Re,v),De=j.acquireProgram(Re,Ce),He.set(Ce,De),U.uniforms=Re.uniforms;const Ie=U.uniforms;(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Ie.clippingPlanes=Q.uniform),so(A,Re),U.needsLights=bu(A),U.lightsStateVersion=ye,U.needsLights&&(Ie.ambientLightColor.value=Z.state.ambient,Ie.lightProbe.value=Z.state.probe,Ie.directionalLights.value=Z.state.directional,Ie.directionalLightShadows.value=Z.state.directionalShadow,Ie.spotLights.value=Z.state.spot,Ie.spotLightShadows.value=Z.state.spotShadow,Ie.rectAreaLights.value=Z.state.rectArea,Ie.ltc_1.value=Z.state.rectAreaLTC1,Ie.ltc_2.value=Z.state.rectAreaLTC2,Ie.pointLights.value=Z.state.point,Ie.pointLightShadows.value=Z.state.pointShadow,Ie.hemisphereLights.value=Z.state.hemi,Ie.directionalShadowMap.value=Z.state.directionalShadowMap,Ie.directionalShadowMatrix.value=Z.state.directionalShadowMatrix,Ie.spotShadowMap.value=Z.state.spotShadowMap,Ie.spotLightMatrix.value=Z.state.spotLightMatrix,Ie.spotLightMap.value=Z.state.spotLightMap,Ie.pointShadowMap.value=Z.state.pointShadowMap,Ie.pointShadowMatrix.value=Z.state.pointShadowMatrix);const st=De.getUniforms(),at=ts.seqWithValue(st.seq,Ie);return U.currentProgram=De,U.uniformsList=at,De}function so(A,O){const Y=ze.get(A);Y.outputColorSpace=O.outputColorSpace,Y.instancing=O.instancing,Y.skinning=O.skinning,Y.morphTargets=O.morphTargets,Y.morphNormals=O.morphNormals,Y.morphColors=O.morphColors,Y.morphTargetsCount=O.morphTargetsCount,Y.numClippingPlanes=O.numClippingPlanes,Y.numIntersection=O.numClipIntersection,Y.vertexAlphas=O.vertexAlphas,Y.vertexTangents=O.vertexTangents,Y.toneMapping=O.toneMapping}function yu(A,O,Y,U,Z){O.isScene!==!0&&(O=At),Ue.resetTextureUnits();const fe=O.fog,ye=U.isMeshStandardMaterial?O.environment:null,Re=w===null?v.outputColorSpace:w.isXRRenderTarget===!0?w.texture.colorSpace:jt,Ce=(U.isMeshStandardMaterial?dt:qe).get(U.envMap||ye),He=U.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,De=!!Y.attributes.tangent&&(!!U.normalMap||U.anisotropy>0),Ie=!!Y.morphAttributes.position,st=!!Y.morphAttributes.normal,at=!!Y.morphAttributes.color,Qt=U.toneMapped?v.toneMapping:un,gn=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,lt=gn!==void 0?gn.length:0,We=ze.get(U),Ms=p.state.lights;if(oe===!0&&(he===!0||A!==M)){const Vt=A===M&&U.id===D;Q.setState(U,A,Vt)}let St=!1;U.version===We.__version?(We.needsLights&&We.lightsStateVersion!==Ms.state.version||We.outputColorSpace!==Re||Z.isInstancedMesh&&We.instancing===!1||!Z.isInstancedMesh&&We.instancing===!0||Z.isSkinnedMesh&&We.skinning===!1||!Z.isSkinnedMesh&&We.skinning===!0||We.envMap!==Ce||U.fog===!0&&We.fog!==fe||We.numClippingPlanes!==void 0&&(We.numClippingPlanes!==Q.numPlanes||We.numIntersection!==Q.numIntersection)||We.vertexAlphas!==He||We.vertexTangents!==De||We.morphTargets!==Ie||We.morphNormals!==st||We.morphColors!==at||We.toneMapping!==Qt||Pe.isWebGL2===!0&&We.morphTargetsCount!==lt)&&(St=!0):(St=!0,We.__version=U.version);let jn=We.currentProgram;St===!0&&(jn=Ar(U,O,Z));let ao=!1,tr=!1,Ss=!1;const Ft=jn.getUniforms(),Yn=We.uniforms;if(Ae.useProgram(jn.program)&&(ao=!0,tr=!0,Ss=!0),U.id!==D&&(D=U.id,tr=!0),ao||M!==A){if(Ft.setValue(F,"projectionMatrix",A.projectionMatrix),Pe.logarithmicDepthBuffer&&Ft.setValue(F,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),M!==A&&(M=A,tr=!0,Ss=!0),U.isShaderMaterial||U.isMeshPhongMaterial||U.isMeshToonMaterial||U.isMeshStandardMaterial||U.envMap){const Vt=Ft.map.cameraPosition;Vt!==void 0&&Vt.setValue(F,Xe.setFromMatrixPosition(A.matrixWorld))}(U.isMeshPhongMaterial||U.isMeshToonMaterial||U.isMeshLambertMaterial||U.isMeshBasicMaterial||U.isMeshStandardMaterial||U.isShaderMaterial)&&Ft.setValue(F,"isOrthographic",A.isOrthographicCamera===!0),(U.isMeshPhongMaterial||U.isMeshToonMaterial||U.isMeshLambertMaterial||U.isMeshBasicMaterial||U.isMeshStandardMaterial||U.isShaderMaterial||U.isShadowMaterial||Z.isSkinnedMesh)&&Ft.setValue(F,"viewMatrix",A.matrixWorldInverse)}if(Z.isSkinnedMesh){Ft.setOptional(F,Z,"bindMatrix"),Ft.setOptional(F,Z,"bindMatrixInverse");const Vt=Z.skeleton;Vt&&(Pe.floatVertexTextures?(Vt.boneTexture===null&&Vt.computeBoneTexture(),Ft.setValue(F,"boneTexture",Vt.boneTexture,Ue),Ft.setValue(F,"boneTextureSize",Vt.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const Ts=Y.morphAttributes;if((Ts.position!==void 0||Ts.normal!==void 0||Ts.color!==void 0&&Pe.isWebGL2===!0)&&pe.update(Z,Y,jn),(tr||We.receiveShadow!==Z.receiveShadow)&&(We.receiveShadow=Z.receiveShadow,Ft.setValue(F,"receiveShadow",Z.receiveShadow)),U.isMeshGouraudMaterial&&U.envMap!==null&&(Yn.envMap.value=Ce,Yn.flipEnvMap.value=Ce.isCubeTexture&&Ce.isRenderTargetTexture===!1?-1:1),tr&&(Ft.setValue(F,"toneMappingExposure",v.toneMappingExposure),We.needsLights&&Eu(Yn,Ss),fe&&U.fog===!0&&ie.refreshFogUniforms(Yn,fe),ie.refreshMaterialUniforms(Yn,U,W,J,Me),ts.upload(F,We.uniformsList,Yn,Ue)),U.isShaderMaterial&&U.uniformsNeedUpdate===!0&&(ts.upload(F,We.uniformsList,Yn,Ue),U.uniformsNeedUpdate=!1),U.isSpriteMaterial&&Ft.setValue(F,"center",Z.center),Ft.setValue(F,"modelViewMatrix",Z.modelViewMatrix),Ft.setValue(F,"normalMatrix",Z.normalMatrix),Ft.setValue(F,"modelMatrix",Z.matrixWorld),U.isShaderMaterial||U.isRawShaderMaterial){const Vt=U.uniformsGroups;for(let _s=0,Au=Vt.length;_s<Au;_s++)if(Pe.isWebGL2){const oo=Vt[_s];we.update(oo,jn),we.bind(oo,jn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return jn}function Eu(A,O){A.ambientLightColor.needsUpdate=O,A.lightProbe.needsUpdate=O,A.directionalLights.needsUpdate=O,A.directionalLightShadows.needsUpdate=O,A.pointLights.needsUpdate=O,A.pointLightShadows.needsUpdate=O,A.spotLights.needsUpdate=O,A.spotLightShadows.needsUpdate=O,A.rectAreaLights.needsUpdate=O,A.hemisphereLights.needsUpdate=O}function bu(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return y},this.getActiveMipmapLevel=function(){return b},this.getRenderTarget=function(){return w},this.setRenderTargetTextures=function(A,O,Y){ze.get(A.texture).__webglTexture=O,ze.get(A.depthTexture).__webglTexture=Y;const U=ze.get(A);U.__hasExternalTextures=!0,U.__hasExternalTextures&&(U.__autoAllocateDepthBuffer=Y===void 0,U.__autoAllocateDepthBuffer||_e.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),U.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(A,O){const Y=ze.get(A);Y.__webglFramebuffer=O,Y.__useDefaultFramebuffer=O===void 0},this.setRenderTarget=function(A,O=0,Y=0){w=A,y=O,b=Y;let U=!0,Z=null,fe=!1,ye=!1;if(A){const Ce=ze.get(A);Ce.__useDefaultFramebuffer!==void 0?(Ae.bindFramebuffer(F.FRAMEBUFFER,null),U=!1):Ce.__webglFramebuffer===void 0?Ue.setupRenderTarget(A):Ce.__hasExternalTextures&&Ue.rebindTextures(A,ze.get(A.texture).__webglTexture,ze.get(A.depthTexture).__webglTexture);const He=A.texture;(He.isData3DTexture||He.isDataArrayTexture||He.isCompressedArrayTexture)&&(ye=!0);const De=ze.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Z=De[O],fe=!0):Pe.isWebGL2&&A.samples>0&&Ue.useMultisampledRTT(A)===!1?Z=ze.get(A).__webglMultisampledFramebuffer:Z=De,_.copy(A.viewport),N.copy(A.scissor),q=A.scissorTest}else _.copy($).multiplyScalar(W).floor(),N.copy(H).multiplyScalar(W).floor(),q=X;if(Ae.bindFramebuffer(F.FRAMEBUFFER,Z)&&Pe.drawBuffers&&U&&Ae.drawBuffers(A,Z),Ae.viewport(_),Ae.scissor(N),Ae.setScissorTest(q),fe){const Ce=ze.get(A.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+O,Ce.__webglTexture,Y)}else if(ye){const Ce=ze.get(A.texture),He=O||0;F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,Ce.__webglTexture,Y||0,He)}D=-1},this.readRenderTargetPixels=function(A,O,Y,U,Z,fe,ye){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Re=ze.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&ye!==void 0&&(Re=Re[ye]),Re){Ae.bindFramebuffer(F.FRAMEBUFFER,Re);try{const Ce=A.texture,He=Ce.format,De=Ce.type;if(He!==Ut&&me.convert(He)!==F.getParameter(F.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Ie=De===bt&&(_e.has("EXT_color_buffer_half_float")||Pe.isWebGL2&&_e.has("EXT_color_buffer_float"));if(De!==wt&&me.convert(De)!==F.getParameter(F.IMPLEMENTATION_COLOR_READ_TYPE)&&!(De===$e&&(Pe.isWebGL2||_e.has("OES_texture_float")||_e.has("WEBGL_color_buffer_float")))&&!Ie){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=A.width-U&&Y>=0&&Y<=A.height-Z&&F.readPixels(O,Y,U,Z,me.convert(He),me.convert(De),fe)}finally{const Ce=w!==null?ze.get(w).__webglFramebuffer:null;Ae.bindFramebuffer(F.FRAMEBUFFER,Ce)}}},this.copyFramebufferToTexture=function(A,O,Y=0){const U=Math.pow(2,-Y),Z=Math.floor(O.image.width*U),fe=Math.floor(O.image.height*U);Ue.setTexture2D(O,0),F.copyTexSubImage2D(F.TEXTURE_2D,Y,0,0,A.x,A.y,Z,fe),Ae.unbindTexture()},this.copyTextureToTexture=function(A,O,Y,U=0){const Z=O.image.width,fe=O.image.height,ye=me.convert(Y.format),Re=me.convert(Y.type);Ue.setTexture2D(Y,0),F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,Y.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Y.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,Y.unpackAlignment),O.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,U,A.x,A.y,Z,fe,ye,Re,O.image.data):O.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,U,A.x,A.y,O.mipmaps[0].width,O.mipmaps[0].height,ye,O.mipmaps[0].data):F.texSubImage2D(F.TEXTURE_2D,U,A.x,A.y,ye,Re,O.image),U===0&&Y.generateMipmaps&&F.generateMipmap(F.TEXTURE_2D),Ae.unbindTexture()},this.copyTextureToTexture3D=function(A,O,Y,U,Z=0){if(v.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const fe=A.max.x-A.min.x+1,ye=A.max.y-A.min.y+1,Re=A.max.z-A.min.z+1,Ce=me.convert(U.format),He=me.convert(U.type);let De;if(U.isData3DTexture)Ue.setTexture3D(U,0),De=F.TEXTURE_3D;else if(U.isDataArrayTexture)Ue.setTexture2DArray(U,0),De=F.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,U.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,U.unpackAlignment);const Ie=F.getParameter(F.UNPACK_ROW_LENGTH),st=F.getParameter(F.UNPACK_IMAGE_HEIGHT),at=F.getParameter(F.UNPACK_SKIP_PIXELS),Qt=F.getParameter(F.UNPACK_SKIP_ROWS),gn=F.getParameter(F.UNPACK_SKIP_IMAGES),lt=Y.isCompressedTexture?Y.mipmaps[0]:Y.image;F.pixelStorei(F.UNPACK_ROW_LENGTH,lt.width),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,lt.height),F.pixelStorei(F.UNPACK_SKIP_PIXELS,A.min.x),F.pixelStorei(F.UNPACK_SKIP_ROWS,A.min.y),F.pixelStorei(F.UNPACK_SKIP_IMAGES,A.min.z),Y.isDataTexture||Y.isData3DTexture?F.texSubImage3D(De,Z,O.x,O.y,O.z,fe,ye,Re,Ce,He,lt.data):Y.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),F.compressedTexSubImage3D(De,Z,O.x,O.y,O.z,fe,ye,Re,Ce,lt.data)):F.texSubImage3D(De,Z,O.x,O.y,O.z,fe,ye,Re,Ce,He,lt),F.pixelStorei(F.UNPACK_ROW_LENGTH,Ie),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,st),F.pixelStorei(F.UNPACK_SKIP_PIXELS,at),F.pixelStorei(F.UNPACK_SKIP_ROWS,Qt),F.pixelStorei(F.UNPACK_SKIP_IMAGES,gn),Z===0&&U.generateMipmaps&&F.generateMipmap(De),Ae.unbindTexture()},this.initTexture=function(A){A.isCubeTexture?Ue.setTextureCube(A,0):A.isData3DTexture?Ue.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?Ue.setTexture2DArray(A,0):Ue.setTexture2D(A,0),Ae.unbindTexture()},this.resetState=function(){y=0,b=0,w=null,Ae.reset(),de.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Rn}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(e){console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!e}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Se?Cn:ls}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Cn?Se:jt}}class zg extends eu{}zg.prototype.isWebGL1Renderer=!0;class Ma extends nt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}}class Hg{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=ma,this.updateRange={offset:0,count:-1},this.version=0,this.uuid=sn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=t.array[n+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=sn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=sn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Ot=new C;class Oa{constructor(e,t,n,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Ot.fromBufferAttribute(this,t),Ot.applyMatrix4(e),this.setXYZ(t,Ot.x,Ot.y,Ot.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Ot.fromBufferAttribute(this,t),Ot.applyNormalMatrix(e),this.setXYZ(t,Ot.x,Ot.y,Ot.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Ot.fromBufferAttribute(this,t),Ot.transformDirection(e),this.setXYZ(t,Ot.x,Ot.y,Ot.z);return this}setX(e,t){return this.normalized&&(t=Je(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Je(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Je(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Je(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Pn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Pn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Pn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Pn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=Je(t,this.array),n=Je(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=Je(t,this.array),n=Je(n,this.array),r=Je(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=Je(t,this.array),n=Je(n,this.array),r=Je(r,this.array),s=Je(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return new pt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Oa(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const bl=new C,Al=new Ze,wl=new Ze,Vg=new C,Rl=new ge,Li=new C,Js=new pn,Pl=new ge,Qs=new us;class kg extends Ht{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode="attached",this.bindMatrix=new ge,this.bindMatrixInverse=new ge,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Ln),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)Li.fromBufferAttribute(t,n),this.applyBoneTransform(n,Li),this.boundingBox.expandByPoint(Li)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new pn),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)Li.fromBufferAttribute(t,n),this.applyBoneTransform(n,Li),this.boundingSphere.expandByPoint(Li)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,r=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Js.copy(this.boundingSphere),Js.applyMatrix4(r),e.ray.intersectsSphere(Js)!==!1&&(Pl.copy(r).invert(),Qs.copy(e.ray).applyMatrix4(Pl),!(this.boundingBox!==null&&Qs.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Qs)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new Ze,t=this.geometry.attributes.skinWeight;for(let n=0,r=t.count;n<r;n++){e.fromBufferAttribute(t,n);const s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode==="attached"?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode==="detached"?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,r=this.geometry;Al.fromBufferAttribute(r.attributes.skinIndex,e),wl.fromBufferAttribute(r.attributes.skinWeight,e),bl.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let s=0;s<4;s++){const a=wl.getComponent(s);if(a!==0){const o=Al.getComponent(s);Rl.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(Vg.copy(bl).applyMatrix4(Rl),a)}}return t.applyMatrix4(this.bindMatrixInverse)}boneTransform(e,t){return console.warn("THREE.SkinnedMesh: .boneTransform() was renamed to .applyBoneTransform() in r151."),this.applyBoneTransform(e,t)}}class tu extends nt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class si extends ot{constructor(e=null,t=1,n=1,r,s,a,o,l,c=Fe,u=Fe,h,d){super(null,a,o,l,c,u,r,s,h,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Cl=new ge,Gg=new ge;class Ba{constructor(e=[],t=[]){this.uuid=sn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.boneTextureSize=0,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,r=this.bones.length;n<r;n++)this.boneInverses.push(new ge)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new ge;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,r=this.boneTexture;for(let s=0,a=e.length;s<a;s++){const o=e[s]?e[s].matrixWorld:Gg;Cl.multiplyMatrices(o,t[s]),Cl.toArray(n,s*16)}r!==null&&(r.needsUpdate=!0)}clone(){return new Ba(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Fc(e),e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new si(t,e,e,Ut,$e);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this.boneTextureSize=e,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const r=this.bones[t];if(r.name===e)return r}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,r=e.bones.length;n<r;n++){const s=e.bones[n];let a=t[s];a===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",s),a=new tu),this.bones.push(a),this.boneInverses.push(new ge().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let r=0,s=t.length;r<s;r++){const a=t[r];e.bones.push(a.uuid);const o=n[r];e.boneInverses.push(o.toArray())}return e}}class Ll extends pt{constructor(e,t,n,r=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Di=new ge,Dl=new ge,qr=[],Ul=new Ln,Wg=new ge,ar=new Ht,or=new pn;class Xg extends Ht{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Ll(new Float32Array(n*16),16),this.instanceColor=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<n;r++)this.setMatrixAt(r,Wg)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Ln),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Di),Ul.copy(e.boundingBox).applyMatrix4(Di),this.boundingBox.union(Ul)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new pn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Di),or.copy(e.boundingSphere).applyMatrix4(Di),this.boundingSphere.union(or)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}raycast(e,t){const n=this.matrixWorld,r=this.count;if(ar.geometry=this.geometry,ar.material=this.material,ar.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),or.copy(this.boundingSphere),or.applyMatrix4(n),e.ray.intersectsSphere(or)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,Di),Dl.multiplyMatrices(n,Di),ar.matrixWorld=Dl,ar.raycast(e,qr);for(let a=0,o=qr.length;a<o;a++){const l=qr[a];l.instanceId=s,l.object=this,t.push(l)}qr.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Ll(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}}class nu extends Xt{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Te(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Il=new C,Nl=new C,Fl=new ge,$s=new us,Kr=new pn;class za extends nt{constructor(e=new Jt,t=new nu){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let r=1,s=t.count;r<s;r++)Il.fromBufferAttribute(t,r-1),Nl.fromBufferAttribute(t,r),n[r]=n[r-1],n[r]+=Il.distanceTo(Nl);e.setAttribute("lineDistance",new Zt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Kr.copy(n.boundingSphere),Kr.applyMatrix4(r),Kr.radius+=s,e.ray.intersectsSphere(Kr)===!1)return;Fl.copy(r).invert(),$s.copy(e.ray).applyMatrix4(Fl);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=new C,u=new C,h=new C,d=new C,m=this.isLineSegments?2:1,g=n.index,p=n.attributes.position;if(g!==null){const f=Math.max(0,a.start),T=Math.min(g.count,a.start+a.count);for(let v=f,S=T-1;v<S;v+=m){const y=g.getX(v),b=g.getX(v+1);if(c.fromBufferAttribute(p,y),u.fromBufferAttribute(p,b),$s.distanceSqToSegment(c,u,d,h)>l)continue;d.applyMatrix4(this.matrixWorld);const D=e.ray.origin.distanceTo(d);D<e.near||D>e.far||t.push({distance:D,point:h.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}else{const f=Math.max(0,a.start),T=Math.min(p.count,a.start+a.count);for(let v=f,S=T-1;v<S;v+=m){if(c.fromBufferAttribute(p,v),u.fromBufferAttribute(p,v+1),$s.distanceSqToSegment(c,u,d,h)>l)continue;d.applyMatrix4(this.matrixWorld);const b=e.ray.origin.distanceTo(d);b<e.near||b>e.far||t.push({distance:b,point:h.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}const Ol=new C,Bl=new C;class jg extends za{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let r=0,s=t.count;r<s;r+=2)Ol.fromBufferAttribute(t,r),Bl.fromBufferAttribute(t,r+1),n[r]=r===0?0:n[r-1],n[r+1]=n[r]+Ol.distanceTo(Bl);e.setAttribute("lineDistance",new Zt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Yg extends za{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class iu extends Xt{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Te(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const zl=new ge,Sa=new us,Zr=new pn,Jr=new C;class qg extends nt{constructor(e=new Jt,t=new iu){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Zr.copy(n.boundingSphere),Zr.applyMatrix4(r),Zr.radius+=s,e.ray.intersectsSphere(Zr)===!1)return;zl.copy(r).invert(),Sa.copy(e.ray).applyMatrix4(zl);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,h=n.attributes.position;if(c!==null){const d=Math.max(0,a.start),m=Math.min(c.count,a.start+a.count);for(let g=d,x=m;g<x;g++){const p=c.getX(g);Jr.fromBufferAttribute(h,p),Hl(Jr,p,l,r,e,t,this)}}else{const d=Math.max(0,a.start),m=Math.min(h.count,a.start+a.count);for(let g=d,x=m;g<x;g++)Jr.fromBufferAttribute(h,g),Hl(Jr,g,l,r,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function Hl(i,e,t,n,r,s,a){const o=Sa.distanceSqToPoint(i);if(o<t){const l=new C;Sa.closestPointToPoint(i,l),l.applyMatrix4(n);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,object:a})}}class Kg extends ot{constructor(e,t){super({width:e,height:t}),this.isFramebufferTexture=!0,this.magFilter=Fe,this.minFilter=Fe,this.generateMipmaps=!1,this.needsUpdate=!0}}class Ha extends Jt{constructor(e=[],t=[],n=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:r};const s=[],a=[];o(r),c(n),u(),this.setAttribute("position",new Zt(s,3)),this.setAttribute("normal",new Zt(s.slice(),3)),this.setAttribute("uv",new Zt(a,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function o(T){const v=new C,S=new C,y=new C;for(let b=0;b<t.length;b+=3)m(t[b+0],v),m(t[b+1],S),m(t[b+2],y),l(v,S,y,T)}function l(T,v,S,y){const b=y+1,w=[];for(let D=0;D<=b;D++){w[D]=[];const M=T.clone().lerp(S,D/b),_=v.clone().lerp(S,D/b),N=b-D;for(let q=0;q<=N;q++)q===0&&D===b?w[D][q]=M:w[D][q]=M.clone().lerp(_,q/N)}for(let D=0;D<b;D++)for(let M=0;M<2*(b-D)-1;M++){const _=Math.floor(M/2);M%2===0?(d(w[D][_+1]),d(w[D+1][_]),d(w[D][_])):(d(w[D][_+1]),d(w[D+1][_+1]),d(w[D+1][_]))}}function c(T){const v=new C;for(let S=0;S<s.length;S+=3)v.x=s[S+0],v.y=s[S+1],v.z=s[S+2],v.normalize().multiplyScalar(T),s[S+0]=v.x,s[S+1]=v.y,s[S+2]=v.z}function u(){const T=new C;for(let v=0;v<s.length;v+=3){T.x=s[v+0],T.y=s[v+1],T.z=s[v+2];const S=p(T)/2/Math.PI+.5,y=f(T)/Math.PI+.5;a.push(S,1-y)}g(),h()}function h(){for(let T=0;T<a.length;T+=6){const v=a[T+0],S=a[T+2],y=a[T+4],b=Math.max(v,S,y),w=Math.min(v,S,y);b>.9&&w<.1&&(v<.2&&(a[T+0]+=1),S<.2&&(a[T+2]+=1),y<.2&&(a[T+4]+=1))}}function d(T){s.push(T.x,T.y,T.z)}function m(T,v){const S=T*3;v.x=e[S+0],v.y=e[S+1],v.z=e[S+2]}function g(){const T=new C,v=new C,S=new C,y=new C,b=new se,w=new se,D=new se;for(let M=0,_=0;M<s.length;M+=9,_+=6){T.set(s[M+0],s[M+1],s[M+2]),v.set(s[M+3],s[M+4],s[M+5]),S.set(s[M+6],s[M+7],s[M+8]),b.set(a[_+0],a[_+1]),w.set(a[_+2],a[_+3]),D.set(a[_+4],a[_+5]),y.copy(T).add(v).add(S).divideScalar(3);const N=p(y);x(b,_+0,T,N),x(w,_+2,v,N),x(D,_+4,S,N)}}function x(T,v,S,y){y<0&&T.x===1&&(a[v]=T.x-1),S.x===0&&S.z===0&&(a[v]=y/2/Math.PI+.5)}function p(T){return Math.atan2(T.z,-T.x)}function f(T){return Math.atan2(-T.y,Math.sqrt(T.x*T.x+T.z*T.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ha(e.vertices,e.indices,e.radius,e.details)}}class Va extends Ha{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,r=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(r,s,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Va(e.radius,e.detail)}}class ps extends Xt{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Te(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Te(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=cs,this.normalScale=new se(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Xn extends ps{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new se(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return _t(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Te(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Te(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Te(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class Zg extends Xt{constructor(e){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=cs,this.normalScale=new se(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}}function Fn(i,e,t){return ru(i)?new i.constructor(i.subarray(e,t!==void 0?t:i.length)):i.slice(e,t)}function Qr(i,e,t){return!i||!t&&i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function ru(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Jg(i){function e(r,s){return i[r]-i[s]}const t=i.length,n=new Array(t);for(let r=0;r!==t;++r)n[r]=r;return n.sort(e),n}function Vl(i,e,t){const n=i.length,r=new i.constructor(n);for(let s=0,a=0;a!==n;++s){const o=t[s]*e;for(let l=0;l!==e;++l)r[a++]=i[o+l]}return r}function su(i,e,t,n){let r=1,s=i[0];for(;s!==void 0&&s[n]===void 0;)s=i[r++];if(s===void 0)return;let a=s[n];if(a!==void 0)if(Array.isArray(a))do a=s[n],a!==void 0&&(e.push(s.time),t.push.apply(t,a)),s=i[r++];while(s!==void 0);else if(a.toArray!==void 0)do a=s[n],a!==void 0&&(e.push(s.time),a.toArray(t,t.length)),s=i[r++];while(s!==void 0);else do a=s[n],a!==void 0&&(e.push(s.time),t.push(a)),s=i[r++];while(s!==void 0)}class _r{constructor(e,t,n,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,r=t[n],s=t[n-1];n:{e:{let a;t:{i:if(!(e<r)){for(let o=n+2;;){if(r===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(s=r,r=t[++n],e<r)break e}a=t.length;break t}if(!(e>=s)){const o=t[1];e<o&&(n=2,s=o);for(let l=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(r=s,s=t[--n-1],e>=s)break e}a=n,n=0;break t}break n}for(;n<a;){const o=n+a>>>1;e<t[o]?a=o:n=o+1}if(r=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,r)}return this.interpolate_(n,s,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,s=e*r;for(let a=0;a!==r;++a)t[a]=n[s+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class Qg extends _r{constructor(e,t,n,r){super(e,t,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Bo,endingEnd:Bo}}intervalChanged_(e,t,n){const r=this.parameterPositions;let s=e-2,a=e+1,o=r[s],l=r[a];if(o===void 0)switch(this.getSettings_().endingStart){case zo:s=e,o=2*t-n;break;case Ho:s=r.length-2,o=t+r[s]-r[s+1];break;default:s=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case zo:a=e,l=2*n-t;break;case Ho:a=1,l=n+r[1]-r[0];break;default:a=e-1,l=t}const c=(n-t)*.5,u=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=s*u,this._offsetNext=a*u}interpolate_(e,t,n,r){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=this._offsetPrev,h=this._offsetNext,d=this._weightPrev,m=this._weightNext,g=(n-t)/(r-t),x=g*g,p=x*g,f=-d*p+2*d*x-d*g,T=(1+d)*p+(-1.5-2*d)*x+(-.5+d)*g+1,v=(-1-m)*p+(1.5+m)*x+.5*g,S=m*p-m*x;for(let y=0;y!==o;++y)s[y]=f*a[u+y]+T*a[c+y]+v*a[l+y]+S*a[h+y];return s}}class $g extends _r{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=(n-t)/(r-t),h=1-u;for(let d=0;d!==o;++d)s[d]=a[c+d]*h+a[l+d]*u;return s}}class ev extends _r{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e){return this.copySampleValue_(e-1)}}class mn{constructor(e,t,n,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Qr(t,this.TimeBufferType),this.values=Qr(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Qr(e.times,Array),values:Qr(e.values,Array)};const r=e.getInterpolation();r!==e.DefaultInterpolation&&(n.interpolation=r)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new ev(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new $g(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Qg(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case xr:t=this.InterpolantFactoryMethodDiscrete;break;case Vi:t=this.InterpolantFactoryMethodLinear;break;case Rs:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return xr;case this.InterpolantFactoryMethodLinear:return Vi;case this.InterpolantFactoryMethodSmooth:return Rs}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]*=e}return this}trim(e,t){const n=this.times,r=n.length;let s=0,a=r-1;for(;s!==r&&n[s]<e;)++s;for(;a!==-1&&n[a]>t;)--a;if(++a,s!==0||a!==r){s>=a&&(a=Math.max(a,1),s=a-1);const o=this.getValueSize();this.times=Fn(n,s,a),this.values=Fn(this.values,s*o,a*o)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,r=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==s;o++){const l=n[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(r!==void 0&&ru(r))for(let o=0,l=r.length;o!==l;++o){const c=r[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){const e=Fn(this.times),t=Fn(this.values),n=this.getValueSize(),r=this.getInterpolation()===Rs,s=e.length-1;let a=1;for(let o=1;o<s;++o){let l=!1;const c=e[o],u=e[o+1];if(c!==u&&(o!==1||c!==e[0]))if(r)l=!0;else{const h=o*n,d=h-n,m=h+n;for(let g=0;g!==n;++g){const x=t[h+g];if(x!==t[d+g]||x!==t[m+g]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];const h=o*n,d=a*n;for(let m=0;m!==n;++m)t[d+m]=t[h+m]}++a}}if(s>0){e[a]=e[s];for(let o=s*n,l=a*n,c=0;c!==n;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=Fn(e,0,a),this.values=Fn(t,0,a*n)):(this.times=e,this.values=t),this}clone(){const e=Fn(this.times,0),t=Fn(this.values,0),n=this.constructor,r=new n(this.name,e,t);return r.createInterpolant=this.createInterpolant,r}}mn.prototype.TimeBufferType=Float32Array;mn.prototype.ValueBufferType=Float32Array;mn.prototype.DefaultInterpolation=Vi;class Ji extends mn{}Ji.prototype.ValueTypeName="bool";Ji.prototype.ValueBufferType=Array;Ji.prototype.DefaultInterpolation=xr;Ji.prototype.InterpolantFactoryMethodLinear=void 0;Ji.prototype.InterpolantFactoryMethodSmooth=void 0;class au extends mn{}au.prototype.ValueTypeName="color";class Xi extends mn{}Xi.prototype.ValueTypeName="number";class tv extends _r{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-t)/(r-t);let c=e*o;for(let u=c+o;c!==u;c+=4)an.slerpFlat(s,0,a,c-o,a,c,l);return s}}class ui extends mn{InterpolantFactoryMethodLinear(e){return new tv(this.times,this.values,this.getValueSize(),e)}}ui.prototype.ValueTypeName="quaternion";ui.prototype.DefaultInterpolation=Vi;ui.prototype.InterpolantFactoryMethodSmooth=void 0;class Qi extends mn{}Qi.prototype.ValueTypeName="string";Qi.prototype.ValueBufferType=Array;Qi.prototype.DefaultInterpolation=xr;Qi.prototype.InterpolantFactoryMethodLinear=void 0;Qi.prototype.InterpolantFactoryMethodSmooth=void 0;class Sr extends mn{}Sr.prototype.ValueTypeName="vector";class nv{constructor(e,t=-1,n,r=ch){this.name=e,this.tracks=n,this.duration=t,this.blendMode=r,this.uuid=sn(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,r=1/(e.fps||1);for(let a=0,o=n.length;a!==o;++a)t.push(rv(n[a]).scale(r));const s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s}static toJSON(e){const t=[],n=e.tracks,r={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let s=0,a=n.length;s!==a;++s)t.push(mn.toJSON(n[s]));return r}static CreateFromMorphTargetSequence(e,t,n,r){const s=t.length,a=[];for(let o=0;o<s;o++){let l=[],c=[];l.push((o+s-1)%s,o,(o+1)%s),c.push(0,1,0);const u=Jg(l);l=Vl(l,1,u),c=Vl(c,1,u),!r&&l[0]===0&&(l.push(s),c.push(c[0])),a.push(new Xi(".morphTargetInfluences["+t[o].name+"]",l,c).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const r=e;n=r.geometry&&r.geometry.animations||r.animations}for(let r=0;r<n.length;r++)if(n[r].name===t)return n[r];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const r={},s=/^([\w-]*?)([\d]+)$/;for(let o=0,l=e.length;o<l;o++){const c=e[o],u=c.name.match(s);if(u&&u.length>1){const h=u[1];let d=r[h];d||(r[h]=d=[]),d.push(c)}}const a=[];for(const o in r)a.push(this.CreateFromMorphTargetSequence(o,r[o],t,n));return a}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(h,d,m,g,x){if(m.length!==0){const p=[],f=[];su(m,p,f,g),p.length!==0&&x.push(new h(d,p,f))}},r=[],s=e.name||"default",a=e.fps||30,o=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let h=0;h<c.length;h++){const d=c[h].keys;if(!(!d||d.length===0))if(d[0].morphTargets){const m={};let g;for(g=0;g<d.length;g++)if(d[g].morphTargets)for(let x=0;x<d[g].morphTargets.length;x++)m[d[g].morphTargets[x]]=-1;for(const x in m){const p=[],f=[];for(let T=0;T!==d[g].morphTargets.length;++T){const v=d[g];p.push(v.time),f.push(v.morphTarget===x?1:0)}r.push(new Xi(".morphTargetInfluence["+x+"]",p,f))}l=m.length*a}else{const m=".bones["+t[h].name+"]";n(Sr,m+".position",d,"pos",r),n(ui,m+".quaternion",d,"rot",r),n(Sr,m+".scale",d,"scl",r)}}return r.length===0?null:new this(s,l,r,o)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,r=e.length;n!==r;++n){const s=this.tracks[n];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function iv(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Xi;case"vector":case"vector2":case"vector3":case"vector4":return Sr;case"color":return au;case"quaternion":return ui;case"bool":case"boolean":return Ji;case"string":return Qi}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function rv(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=iv(i.type);if(i.times===void 0){const t=[],n=[];su(i.keys,t,n,"value"),i.times=t,i.values=n}return e.parse!==void 0?e.parse(i):new e(i.name,i.times,i.values,i.interpolation)}const ji={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class sv{constructor(e,t,n){const r=this;let s=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){o++,s===!1&&r.onStart!==void 0&&r.onStart(u,a,o),s=!0},this.itemEnd=function(u){a++,r.onProgress!==void 0&&r.onProgress(u,a,o),a===o&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){const h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,d=c.length;h<d;h+=2){const m=c[h],g=c[h+1];if(m.global&&(m.lastIndex=0),m.test(u))return g}return null}}}const av=new sv;class hi{constructor(e){this.manager=e!==void 0?e:av,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(r,s){n.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}hi.DEFAULT_MATERIAL_NAME="__DEFAULT";const yn={};class ov extends Error{constructor(e,t){super(e),this.response=t}}class ka extends hi{constructor(e){super(e)}load(e,t,n,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=ji.get(e);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(yn[e]!==void 0){yn[e].push({onLoad:t,onProgress:n,onError:r});return}yn[e]=[],yn[e].push({onLoad:t,onProgress:n,onError:r});const a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),o=this.mimeType,l=this.responseType;fetch(a).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=yn[e],h=c.body.getReader(),d=c.headers.get("Content-Length")||c.headers.get("X-File-Size"),m=d?parseInt(d):0,g=m!==0;let x=0;const p=new ReadableStream({start(f){T();function T(){h.read().then(({done:v,value:S})=>{if(v)f.close();else{x+=S.byteLength;const y=new ProgressEvent("progress",{lengthComputable:g,loaded:x,total:m});for(let b=0,w=u.length;b<w;b++){const D=u[b];D.onProgress&&D.onProgress(y)}f.enqueue(S),T()}})}}});return new Response(p)}else throw new ov(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,o));case"json":return c.json();default:if(o===void 0)return c.text();{const h=/charset="?([^;"\s]*)"?/i.exec(o),d=h&&h[1]?h[1].toLowerCase():void 0,m=new TextDecoder(d);return c.arrayBuffer().then(g=>m.decode(g))}}}).then(c=>{ji.add(e,c);const u=yn[e];delete yn[e];for(let h=0,d=u.length;h<d;h++){const m=u[h];m.onLoad&&m.onLoad(c)}}).catch(c=>{const u=yn[e];if(u===void 0)throw this.manager.itemError(e),c;delete yn[e];for(let h=0,d=u.length;h<d;h++){const m=u[h];m.onError&&m.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class lv extends hi{constructor(e){super(e)}load(e,t,n,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,a=ji.get(e);if(a!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0),a;const o=Mr("img");function l(){u(),ji.add(e,this),t&&t(this),s.manager.itemEnd(e)}function c(h){u(),r&&r(h),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),s.manager.itemStart(e),o.src=e,o}}class cv extends hi{constructor(e){super(e)}load(e,t,n,r){const s=this,a=new si,o=new ka(this.manager);return o.setResponseType("arraybuffer"),o.setRequestHeader(this.requestHeader),o.setPath(this.path),o.setWithCredentials(s.withCredentials),o.load(e,function(l){const c=s.parse(l);c&&(c.image!==void 0?a.image=c.image:c.data!==void 0&&(a.image.width=c.width,a.image.height=c.height,a.image.data=c.data),a.wrapS=c.wrapS!==void 0?c.wrapS:Dt,a.wrapT=c.wrapT!==void 0?c.wrapT:Dt,a.magFilter=c.magFilter!==void 0?c.magFilter:Be,a.minFilter=c.minFilter!==void 0?c.minFilter:Be,a.anisotropy=c.anisotropy!==void 0?c.anisotropy:1,c.colorSpace!==void 0?a.colorSpace=c.colorSpace:c.encoding!==void 0&&(a.encoding=c.encoding),c.flipY!==void 0&&(a.flipY=c.flipY),c.format!==void 0&&(a.format=c.format),c.type!==void 0&&(a.type=c.type),c.mipmaps!==void 0&&(a.mipmaps=c.mipmaps,a.minFilter=Gn),c.mipmapCount===1&&(a.minFilter=Be),c.generateMipmaps!==void 0&&(a.generateMipmaps=c.generateMipmaps),a.needsUpdate=!0,t&&t(a,c))},n,r),a}}class $i extends hi{constructor(e){super(e)}load(e,t,n,r){const s=new ot,a=new lv(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){s.image=o,s.needsUpdate=!0,t!==void 0&&t(s)},n,r),s}}class Ga extends nt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Te(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const ea=new ge,kl=new C,Gl=new C;class Wa{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new se(512,512),this.map=null,this.mapPass=null,this.matrix=new ge,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ua,this._frameExtents=new se(1,1),this._viewportCount=1,this._viewports=[new Ze(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;kl.setFromMatrixPosition(e.matrixWorld),t.position.copy(kl),Gl.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Gl),t.updateMatrixWorld(),ea.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ea),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(ea)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class uv extends Wa{constructor(){super(new yt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=ki*2*e.angle*this.focus,r=this.mapSize.width/this.mapSize.height,s=e.distance||t.far;(n!==t.fov||r!==t.aspect||s!==t.far)&&(t.fov=n,t.aspect=r,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class hv extends Ga{constructor(e,t,n=0,r=Math.PI/3,s=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(nt.DEFAULT_UP),this.updateMatrix(),this.target=new nt,this.distance=n,this.angle=r,this.penumbra=s,this.decay=a,this.map=null,this.shadow=new uv}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const Wl=new ge,lr=new C,ta=new C;class dv extends Wa{constructor(){super(new yt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new se(4,2),this._viewportCount=6,this._viewports=[new Ze(2,1,1,1),new Ze(0,1,1,1),new Ze(3,1,1,1),new Ze(1,1,1,1),new Ze(3,0,1,1),new Ze(1,0,1,1)],this._cubeDirections=[new C(1,0,0),new C(-1,0,0),new C(0,0,1),new C(0,0,-1),new C(0,1,0),new C(0,-1,0)],this._cubeUps=[new C(0,1,0),new C(0,1,0),new C(0,1,0),new C(0,1,0),new C(0,0,1),new C(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,r=this.matrix,s=e.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),lr.setFromMatrixPosition(e.matrixWorld),n.position.copy(lr),ta.copy(n.position),ta.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(ta),n.updateMatrixWorld(),r.makeTranslation(-lr.x,-lr.y,-lr.z),Wl.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Wl)}}class fv extends Ga{constructor(e,t,n=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=r,this.shadow=new dv}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class pv extends Wa{constructor(){super(new Na(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class mv extends Ga{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(nt.DEFAULT_UP),this.updateMatrix(),this.target=new nt,this.shadow=new pv}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Ta{static decodeText(e){if(typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,r=e.length;n<r;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class gv extends hi{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,a=ji.get(e);if(a!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0),a;const o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader,fetch(e,o).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(l){ji.add(e,l),t&&t(l),s.manager.itemEnd(e)}).catch(function(l){r&&r(l),s.manager.itemError(e),s.manager.itemEnd(e)}),s.manager.itemStart(e)}}class vv{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Xl(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=Xl();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function Xl(){return(typeof performance>"u"?Date:performance).now()}const Xa="\\[\\]\\.:\\/",xv=new RegExp("["+Xa+"]","g"),ja="[^"+Xa+"]",Mv="[^"+Xa.replace("\\.","")+"]",Sv=/((?:WC+[\/:])*)/.source.replace("WC",ja),Tv=/(WCOD+)?/.source.replace("WCOD",Mv),_v=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",ja),yv=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",ja),Ev=new RegExp("^"+Sv+Tv+_v+yv+"$"),bv=["material","materials","bones","map"];class Av{constructor(e,t,n){const r=n||Ke.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,s=n.length;r!==s;++r)n[r].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class Ke{constructor(e,t,n){this.path=t,this.parsedPath=n||Ke.parseTrackName(t),this.node=Ke.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new Ke.Composite(e,t,n):new Ke(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(xv,"")}static parseTrackName(e){const t=Ev.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=n.nodeName&&n.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){const s=n.nodeName.substring(r+1);bv.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(s){for(let a=0;a<s.length;a++){const o=s[a];if(o.name===t||o.uuid===t)return o;const l=n(o.children);if(l)return l}return null},r=n(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)e[t++]=n[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,r=t.propertyName;let s=t.propertyIndex;if(e||(e=Ke.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.error("THREE.PropertyBinding: Trying to update node for track: "+this.path+" but it wasn't found.");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const a=e[r];if(a===void 0){const c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+r+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(r==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=s}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=r;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}Ke.Composite=Av;Ke.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ke.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ke.prototype.GetterByBindingType=[Ke.prototype._getValue_direct,Ke.prototype._getValue_array,Ke.prototype._getValue_arrayElement,Ke.prototype._getValue_toArray];Ke.prototype.SetterByBindingTypeAndVersioning=[[Ke.prototype._setValue_direct,Ke.prototype._setValue_direct_setNeedsUpdate,Ke.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ke.prototype._setValue_array,Ke.prototype._setValue_array_setNeedsUpdate,Ke.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ke.prototype._setValue_arrayElement,Ke.prototype._setValue_arrayElement_setNeedsUpdate,Ke.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ke.prototype._setValue_fromArray,Ke.prototype._setValue_fromArray_setNeedsUpdate,Ke.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class V{constructor(e){this.value=e}clone(){return new V(this.value.clone===void 0?this.value:this.value.clone())}}class jl{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(_t(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:qi}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=qi);function Yl(i,e){if(e===uh)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),i;if(e===pa||e===Ic){let t=i.getIndex();if(t===null){const a=[],o=i.getAttribute("position");if(o!==void 0){for(let l=0;l<o.count;l++)a.push(l);i.setIndex(a),t=i.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),i}const n=t.count-2,r=[];if(e===pa)for(let a=1;a<=n;a++)r.push(t.getX(0)),r.push(t.getX(a)),r.push(t.getX(a+1));else for(let a=0;a<n;a++)a%2===0?(r.push(t.getX(a)),r.push(t.getX(a+1)),r.push(t.getX(a+2))):(r.push(t.getX(a+2)),r.push(t.getX(a+1)),r.push(t.getX(a)));r.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const s=i.clone();return s.setIndex(r),s.clearGroups(),s}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),i}class wv extends hi{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new Dv(t)}),this.register(function(t){return new Hv(t)}),this.register(function(t){return new Vv(t)}),this.register(function(t){return new kv(t)}),this.register(function(t){return new Iv(t)}),this.register(function(t){return new Nv(t)}),this.register(function(t){return new Fv(t)}),this.register(function(t){return new Ov(t)}),this.register(function(t){return new Lv(t)}),this.register(function(t){return new Bv(t)}),this.register(function(t){return new Uv(t)}),this.register(function(t){return new zv(t)}),this.register(function(t){return new Pv(t)}),this.register(function(t){return new Gv(t)}),this.register(function(t){return new Wv(t)})}load(e,t,n,r){const s=this;let a;this.resourcePath!==""?a=this.resourcePath:this.path!==""?a=this.path:a=Ta.extractUrlBase(e),this.manager.itemStart(e);const o=function(c){r?r(c):console.error(c),s.manager.itemError(e),s.manager.itemEnd(e)},l=new ka(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{s.parse(c,a,function(u){t(u),s.manager.itemEnd(e)},o)}catch(u){o(u)}},n,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setDDSLoader(){throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,r){let s;const a={},o={},l=new TextDecoder;if(typeof e=="string")s=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===ou){try{a[Ge.KHR_BINARY_GLTF]=new Xv(e)}catch(h){r&&r(h);return}s=JSON.parse(a[Ge.KHR_BINARY_GLTF].content)}else s=JSON.parse(l.decode(e));else s=e;if(s.asset===void 0||s.asset.version[0]<2){r&&r(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const c=new rx(s,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){const h=this.pluginCallbacks[u](c);o[h.name]=h,a[h.name]=!0}if(s.extensionsUsed)for(let u=0;u<s.extensionsUsed.length;++u){const h=s.extensionsUsed[u],d=s.extensionsRequired||[];switch(h){case Ge.KHR_MATERIALS_UNLIT:a[h]=new Cv;break;case Ge.KHR_DRACO_MESH_COMPRESSION:a[h]=new jv(s,this.dracoLoader);break;case Ge.KHR_TEXTURE_TRANSFORM:a[h]=new Yv;break;case Ge.KHR_MESH_QUANTIZATION:a[h]=new qv;break;default:d.indexOf(h)>=0&&o[h]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+h+'".')}}c.setExtensions(a),c.setPlugins(o),c.parse(n,r)}parseAsync(e,t){const n=this;return new Promise(function(r,s){n.parse(e,t,r,s)})}}function Rv(){let i={};return{get:function(e){return i[e]},add:function(e,t){i[e]=t},remove:function(e){delete i[e]},removeAll:function(){i={}}}}const Ge={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class Pv{constructor(e){this.parser=e,this.name=Ge.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,r=t.length;n<r;n++){const s=t[n];s.extensions&&s.extensions[this.name]&&s.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,s.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let r=t.cache.get(n);if(r)return r;const s=t.json,l=((s.extensions&&s.extensions[this.name]||{}).lights||[])[e];let c;const u=new Te(16777215);l.color!==void 0&&u.fromArray(l.color);const h=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new mv(u),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new fv(u),c.distance=h;break;case"spot":c=new hv(u),c.distance=h,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),c.decay=2,Hn(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),r=Promise.resolve(c),t.cache.add(n,r),r}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,s=n.json.nodes[e],o=(s.extensions&&s.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(l){return n._getNodeRef(t.cache,o,l)})}}class Cv{constructor(){this.name=Ge.KHR_MATERIALS_UNLIT}getMaterialType(){return ni}extendParams(e,t,n){const r=[];e.color=new Te(1,1,1),e.opacity=1;const s=t.pbrMetallicRoughness;if(s){if(Array.isArray(s.baseColorFactor)){const a=s.baseColorFactor;e.color.fromArray(a),e.opacity=a[3]}s.baseColorTexture!==void 0&&r.push(n.assignTexture(e,"map",s.baseColorTexture,Se))}return Promise.all(r)}}class Lv{constructor(e){this.parser=e,this.name=Ge.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const r=this.parser.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=r.extensions[this.name].emissiveStrength;return s!==void 0&&(t.emissiveIntensity=s),Promise.resolve()}}class Dv{constructor(e){this.parser=e,this.name=Ge.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Xn}extendMaterialParams(e,t){const n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],a=r.extensions[this.name];if(a.clearcoatFactor!==void 0&&(t.clearcoat=a.clearcoatFactor),a.clearcoatTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatMap",a.clearcoatTexture)),a.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=a.clearcoatRoughnessFactor),a.clearcoatRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatRoughnessMap",a.clearcoatRoughnessTexture)),a.clearcoatNormalTexture!==void 0&&(s.push(n.assignTexture(t,"clearcoatNormalMap",a.clearcoatNormalTexture)),a.clearcoatNormalTexture.scale!==void 0)){const o=a.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new se(o,o)}return Promise.all(s)}}class Uv{constructor(e){this.parser=e,this.name=Ge.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Xn}extendMaterialParams(e,t){const n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],a=r.extensions[this.name];return a.iridescenceFactor!==void 0&&(t.iridescence=a.iridescenceFactor),a.iridescenceTexture!==void 0&&s.push(n.assignTexture(t,"iridescenceMap",a.iridescenceTexture)),a.iridescenceIor!==void 0&&(t.iridescenceIOR=a.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),a.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=a.iridescenceThicknessMinimum),a.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=a.iridescenceThicknessMaximum),a.iridescenceThicknessTexture!==void 0&&s.push(n.assignTexture(t,"iridescenceThicknessMap",a.iridescenceThicknessTexture)),Promise.all(s)}}class Iv{constructor(e){this.parser=e,this.name=Ge.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Xn}extendMaterialParams(e,t){const n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[];t.sheenColor=new Te(0,0,0),t.sheenRoughness=0,t.sheen=1;const a=r.extensions[this.name];return a.sheenColorFactor!==void 0&&t.sheenColor.fromArray(a.sheenColorFactor),a.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=a.sheenRoughnessFactor),a.sheenColorTexture!==void 0&&s.push(n.assignTexture(t,"sheenColorMap",a.sheenColorTexture,Se)),a.sheenRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"sheenRoughnessMap",a.sheenRoughnessTexture)),Promise.all(s)}}class Nv{constructor(e){this.parser=e,this.name=Ge.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Xn}extendMaterialParams(e,t){const n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],a=r.extensions[this.name];return a.transmissionFactor!==void 0&&(t.transmission=a.transmissionFactor),a.transmissionTexture!==void 0&&s.push(n.assignTexture(t,"transmissionMap",a.transmissionTexture)),Promise.all(s)}}class Fv{constructor(e){this.parser=e,this.name=Ge.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Xn}extendMaterialParams(e,t){const n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],a=r.extensions[this.name];t.thickness=a.thicknessFactor!==void 0?a.thicknessFactor:0,a.thicknessTexture!==void 0&&s.push(n.assignTexture(t,"thicknessMap",a.thicknessTexture)),t.attenuationDistance=a.attenuationDistance||1/0;const o=a.attenuationColor||[1,1,1];return t.attenuationColor=new Te(o[0],o[1],o[2]),Promise.all(s)}}class Ov{constructor(e){this.parser=e,this.name=Ge.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Xn}extendMaterialParams(e,t){const r=this.parser.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=r.extensions[this.name];return t.ior=s.ior!==void 0?s.ior:1.5,Promise.resolve()}}class Bv{constructor(e){this.parser=e,this.name=Ge.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Xn}extendMaterialParams(e,t){const n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],a=r.extensions[this.name];t.specularIntensity=a.specularFactor!==void 0?a.specularFactor:1,a.specularTexture!==void 0&&s.push(n.assignTexture(t,"specularIntensityMap",a.specularTexture));const o=a.specularColorFactor||[1,1,1];return t.specularColor=new Te(o[0],o[1],o[2]),a.specularColorTexture!==void 0&&s.push(n.assignTexture(t,"specularColorMap",a.specularColorTexture,Se)),Promise.all(s)}}class zv{constructor(e){this.parser=e,this.name=Ge.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Xn}extendMaterialParams(e,t){const n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],a=r.extensions[this.name];return a.anisotropyStrength!==void 0&&(t.anisotropy=a.anisotropyStrength),a.anisotropyRotation!==void 0&&(t.anisotropyRotation=a.anisotropyRotation),a.anisotropyTexture!==void 0&&s.push(n.assignTexture(t,"anisotropyMap",a.anisotropyTexture)),Promise.all(s)}}class Hv{constructor(e){this.parser=e,this.name=Ge.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,r=n.textures[e];if(!r.extensions||!r.extensions[this.name])return null;const s=r.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,s.source,a)}}class Vv{constructor(e){this.parser=e,this.name=Ge.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,r=n.json,s=r.textures[e];if(!s.extensions||!s.extensions[t])return null;const a=s.extensions[t],o=r.images[a.source];let l=n.textureLoader;if(o.uri){const c=n.options.manager.getHandler(o.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,a.source,l);if(r.extensionsRequired&&r.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class kv{constructor(e){this.parser=e,this.name=Ge.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,r=n.json,s=r.textures[e];if(!s.extensions||!s.extensions[t])return null;const a=s.extensions[t],o=r.images[a.source];let l=n.textureLoader;if(o.uri){const c=n.options.manager.getHandler(o.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,a.source,l);if(r.extensionsRequired&&r.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class Gv{constructor(e){this.name=Ge.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const r=n.extensions[this.name],s=this.parser.getDependency("buffer",r.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return s.then(function(o){const l=r.byteOffset||0,c=r.byteLength||0,u=r.count,h=r.byteStride,d=new Uint8Array(o,l,c);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(u,h,d,r.mode,r.filter).then(function(m){return m.buffer}):a.ready.then(function(){const m=new ArrayBuffer(u*h);return a.decodeGltfBuffer(new Uint8Array(m),u,h,d,r.mode,r.filter),m})})}else return null}}class Wv{constructor(e){this.name=Ge.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const r=t.meshes[n.mesh];for(const c of r.primitives)if(c.mode!==Kt.TRIANGLES&&c.mode!==Kt.TRIANGLE_STRIP&&c.mode!==Kt.TRIANGLE_FAN&&c.mode!==void 0)return null;const a=n.extensions[this.name].attributes,o=[],l={};for(const c in a)o.push(this.parser.getDependency("accessor",a[c]).then(u=>(l[c]=u,l[c])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(c=>{const u=c.pop(),h=u.isGroup?u.children:[u],d=c[0].count,m=[];for(const g of h){const x=new ge,p=new C,f=new an,T=new C(1,1,1),v=new Xg(g.geometry,g.material,d);for(let S=0;S<d;S++)l.TRANSLATION&&p.fromBufferAttribute(l.TRANSLATION,S),l.ROTATION&&f.fromBufferAttribute(l.ROTATION,S),l.SCALE&&T.fromBufferAttribute(l.SCALE,S),v.setMatrixAt(S,x.compose(p,f,T));for(const S in l)S!=="TRANSLATION"&&S!=="ROTATION"&&S!=="SCALE"&&g.geometry.setAttribute(S,l[S]);nt.prototype.copy.call(v,g),this.parser.assignFinalMaterial(v),m.push(v)}return u.isGroup?(u.clear(),u.add(...m),u):m[0]}))}}const ou="glTF",cr=12,ql={JSON:1313821514,BIN:5130562};class Xv{constructor(e){this.name=Ge.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,cr),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==ou)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const r=this.header.length-cr,s=new DataView(e,cr);let a=0;for(;a<r;){const o=s.getUint32(a,!0);a+=4;const l=s.getUint32(a,!0);if(a+=4,l===ql.JSON){const c=new Uint8Array(e,cr+a,o);this.content=n.decode(c)}else if(l===ql.BIN){const c=cr+a;this.body=e.slice(c,c+o)}a+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class jv{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Ge.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,r=this.dracoLoader,s=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,o={},l={},c={};for(const u in a){const h=_a[u]||u.toLowerCase();o[h]=a[u]}for(const u in e.attributes){const h=_a[u]||u.toLowerCase();if(a[u]!==void 0){const d=n.accessors[e.attributes[u]],m=Bi[d.componentType];c[h]=m.name,l[h]=d.normalized===!0}}return t.getDependency("bufferView",s).then(function(u){return new Promise(function(h){r.decodeDracoFile(u,function(d){for(const m in d.attributes){const g=d.attributes[m],x=l[m];x!==void 0&&(g.normalized=x)}h(d)},o,c)})})}}class Yv{constructor(){this.name=Ge.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class qv{constructor(){this.name=Ge.KHR_MESH_QUANTIZATION}}class lu extends _r{constructor(e,t,n,r){super(e,t,n,r)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,s=e*r*3+r;for(let a=0;a!==r;a++)t[a]=n[s+a];return t}interpolate_(e,t,n,r){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=o*2,c=o*3,u=r-t,h=(n-t)/u,d=h*h,m=d*h,g=e*c,x=g-c,p=-2*m+3*d,f=m-d,T=1-p,v=f-d+h;for(let S=0;S!==o;S++){const y=a[x+S+o],b=a[x+S+l]*u,w=a[g+S+o],D=a[g+S]*u;s[S]=T*y+v*b+p*w+f*D}return s}}const Kv=new an;class Zv extends lu{interpolate_(e,t,n,r){const s=super.interpolate_(e,t,n,r);return Kv.fromArray(s).normalize().toArray(s),s}}const Kt={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},Bi={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Kl={9728:Fe,9729:Be,9984:da,9985:wc,9986:es,9987:Gn},Zl={33071:Dt,33648:is,10497:It},na={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},_a={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},On={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},Jv={CUBICSPLINE:void 0,LINEAR:Vi,STEP:xr},ia={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function Qv(i){return i.DefaultMaterial===void 0&&(i.DefaultMaterial=new ps({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:hn})),i.DefaultMaterial}function Qn(i,e,t){for(const n in t.extensions)i[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function Hn(i,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(i.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function $v(i,e,t){let n=!1,r=!1,s=!1;for(let c=0,u=e.length;c<u;c++){const h=e[c];if(h.POSITION!==void 0&&(n=!0),h.NORMAL!==void 0&&(r=!0),h.COLOR_0!==void 0&&(s=!0),n&&r&&s)break}if(!n&&!r&&!s)return Promise.resolve(i);const a=[],o=[],l=[];for(let c=0,u=e.length;c<u;c++){const h=e[c];if(n){const d=h.POSITION!==void 0?t.getDependency("accessor",h.POSITION):i.attributes.position;a.push(d)}if(r){const d=h.NORMAL!==void 0?t.getDependency("accessor",h.NORMAL):i.attributes.normal;o.push(d)}if(s){const d=h.COLOR_0!==void 0?t.getDependency("accessor",h.COLOR_0):i.attributes.color;l.push(d)}}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l)]).then(function(c){const u=c[0],h=c[1],d=c[2];return n&&(i.morphAttributes.position=u),r&&(i.morphAttributes.normal=h),s&&(i.morphAttributes.color=d),i.morphTargetsRelative=!0,i})}function ex(i,e){if(i.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)i.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(i.morphTargetInfluences.length===t.length){i.morphTargetDictionary={};for(let n=0,r=t.length;n<r;n++)i.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function tx(i){let e;const t=i.extensions&&i.extensions[Ge.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+ra(t.attributes):e=i.indices+":"+ra(i.attributes)+":"+i.mode,i.targets!==void 0)for(let n=0,r=i.targets.length;n<r;n++)e+=":"+ra(i.targets[n]);return e}function ra(i){let e="";const t=Object.keys(i).sort();for(let n=0,r=t.length;n<r;n++)e+=t[n]+":"+i[t[n]]+";";return e}function ya(i){switch(i){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function nx(i){return i.search(/\.jpe?g($|\?)/i)>0||i.search(/^data\:image\/jpeg/)===0?"image/jpeg":i.search(/\.webp($|\?)/i)>0||i.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}const ix=new ge;class rx{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new Rv,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,r=!1,s=-1;typeof navigator<"u"&&(n=/^((?!chrome|android).)*safari/i.test(navigator.userAgent)===!0,r=navigator.userAgent.indexOf("Firefox")>-1,s=r?navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1]:-1),typeof createImageBitmap>"u"||n||r&&s<98?this.textureLoader=new $i(this.options.manager):this.textureLoader=new gv(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new ka(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,r=this.json,s=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(a){const o={scene:a[0][r.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:r.asset,parser:n,userData:{}};Qn(s,o,r),Hn(o,r),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(o)})).then(function(){e(o)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let r=0,s=t.length;r<s;r++){const a=t[r].joints;for(let o=0,l=a.length;o<l;o++)e[a[o]].isBone=!0}for(let r=0,s=e.length;r<s;r++){const a=e[r];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(n[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const r=n.clone(),s=(a,o)=>{const l=this.associations.get(a);l!=null&&this.associations.set(o,l);for(const[c,u]of a.children.entries())s(u,o.children[c])};return s(n,r),r.name+="_instance_"+e.uses[t]++,r}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const r=e(t[n]);if(r)return r}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let r=0;r<t.length;r++){const s=e(t[r]);s&&n.push(s)}return n}getDependency(e,t){const n=e+":"+t;let r=this.cache.get(n);if(!r){switch(e){case"scene":r=this.loadScene(t);break;case"node":r=this._invokeOne(function(s){return s.loadNode&&s.loadNode(t)});break;case"mesh":r=this._invokeOne(function(s){return s.loadMesh&&s.loadMesh(t)});break;case"accessor":r=this.loadAccessor(t);break;case"bufferView":r=this._invokeOne(function(s){return s.loadBufferView&&s.loadBufferView(t)});break;case"buffer":r=this.loadBuffer(t);break;case"material":r=this._invokeOne(function(s){return s.loadMaterial&&s.loadMaterial(t)});break;case"texture":r=this._invokeOne(function(s){return s.loadTexture&&s.loadTexture(t)});break;case"skin":r=this.loadSkin(t);break;case"animation":r=this._invokeOne(function(s){return s.loadAnimation&&s.loadAnimation(t)});break;case"camera":r=this.loadCamera(t);break;default:if(r=this._invokeOne(function(s){return s!=this&&s.getDependency&&s.getDependency(e,t)}),!r)throw new Error("Unknown type: "+e);break}this.cache.add(n,r)}return r}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,r=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(r.map(function(s,a){return n.getDependency(e,a)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[Ge.KHR_BINARY_GLTF].body);const r=this.options;return new Promise(function(s,a){n.load(Ta.resolveURL(t.uri,r.path),s,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const r=t.byteLength||0,s=t.byteOffset||0;return n.slice(s,s+r)})}loadAccessor(e){const t=this,n=this.json,r=this.json.accessors[e];if(r.bufferView===void 0&&r.sparse===void 0){const a=na[r.type],o=Bi[r.componentType],l=r.normalized===!0,c=new o(r.count*a);return Promise.resolve(new pt(c,a,l))}const s=[];return r.bufferView!==void 0?s.push(this.getDependency("bufferView",r.bufferView)):s.push(null),r.sparse!==void 0&&(s.push(this.getDependency("bufferView",r.sparse.indices.bufferView)),s.push(this.getDependency("bufferView",r.sparse.values.bufferView))),Promise.all(s).then(function(a){const o=a[0],l=na[r.type],c=Bi[r.componentType],u=c.BYTES_PER_ELEMENT,h=u*l,d=r.byteOffset||0,m=r.bufferView!==void 0?n.bufferViews[r.bufferView].byteStride:void 0,g=r.normalized===!0;let x,p;if(m&&m!==h){const f=Math.floor(d/m),T="InterleavedBuffer:"+r.bufferView+":"+r.componentType+":"+f+":"+r.count;let v=t.cache.get(T);v||(x=new c(o,f*m,r.count*m/u),v=new Hg(x,m/u),t.cache.add(T,v)),p=new Oa(v,l,d%m/u,g)}else o===null?x=new c(r.count*l):x=new c(o,d,r.count*l),p=new pt(x,l,g);if(r.sparse!==void 0){const f=na.SCALAR,T=Bi[r.sparse.indices.componentType],v=r.sparse.indices.byteOffset||0,S=r.sparse.values.byteOffset||0,y=new T(a[1],v,r.sparse.count*f),b=new c(a[2],S,r.sparse.count*l);o!==null&&(p=new pt(p.array.slice(),p.itemSize,p.normalized));for(let w=0,D=y.length;w<D;w++){const M=y[w];if(p.setX(M,b[w*l]),l>=2&&p.setY(M,b[w*l+1]),l>=3&&p.setZ(M,b[w*l+2]),l>=4&&p.setW(M,b[w*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return p})}loadTexture(e){const t=this.json,n=this.options,s=t.textures[e].source,a=t.images[s];let o=this.textureLoader;if(a.uri){const l=n.manager.getHandler(a.uri);l!==null&&(o=l)}return this.loadTextureImage(e,s,o)}loadTextureImage(e,t,n){const r=this,s=this.json,a=s.textures[e],o=s.images[t],l=(o.uri||o.bufferView)+":"+a.sampler;if(this.textureCache[l])return this.textureCache[l];const c=this.loadImageSource(t,n).then(function(u){u.flipY=!1,u.name=a.name||o.name||"",u.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(u.name=o.uri);const d=(s.samplers||{})[a.sampler]||{};return u.magFilter=Kl[d.magFilter]||Be,u.minFilter=Kl[d.minFilter]||Gn,u.wrapS=Zl[d.wrapS]||It,u.wrapT=Zl[d.wrapT]||It,r.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){const n=this,r=this.json,s=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(h=>h.clone());const a=r.images[e],o=self.URL||self.webkitURL;let l=a.uri||"",c=!1;if(a.bufferView!==void 0)l=n.getDependency("bufferView",a.bufferView).then(function(h){c=!0;const d=new Blob([h],{type:a.mimeType});return l=o.createObjectURL(d),l});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const u=Promise.resolve(l).then(function(h){return new Promise(function(d,m){let g=d;t.isImageBitmapLoader===!0&&(g=function(x){const p=new ot(x);p.needsUpdate=!0,d(p)}),t.load(Ta.resolveURL(h,s.path),g,void 0,m)})}).then(function(h){return c===!0&&o.revokeObjectURL(l),h.userData.mimeType=a.mimeType||nx(a.uri),h}).catch(function(h){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),h});return this.sourceCache[e]=u,u}assignTexture(e,t,n,r){const s=this;return this.getDependency("texture",n.index).then(function(a){if(!a)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(a=a.clone(),a.channel=n.texCoord),s.extensions[Ge.KHR_TEXTURE_TRANSFORM]){const o=n.extensions!==void 0?n.extensions[Ge.KHR_TEXTURE_TRANSFORM]:void 0;if(o){const l=s.associations.get(a);a=s.extensions[Ge.KHR_TEXTURE_TRANSFORM].extendTexture(a,o),s.associations.set(a,l)}}return r!==void 0&&(a.colorSpace=r),e[t]=a,a})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const r=t.attributes.tangent===void 0,s=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){const o="PointsMaterial:"+n.uuid;let l=this.cache.get(o);l||(l=new iu,Xt.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(o,l)),n=l}else if(e.isLine){const o="LineBasicMaterial:"+n.uuid;let l=this.cache.get(o);l||(l=new nu,Xt.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(o,l)),n=l}if(r||s||a){let o="ClonedMaterial:"+n.uuid+":";r&&(o+="derivative-tangents:"),s&&(o+="vertex-colors:"),a&&(o+="flat-shading:");let l=this.cache.get(o);l||(l=n.clone(),s&&(l.vertexColors=!0),a&&(l.flatShading=!0),r&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(o,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return ps}loadMaterial(e){const t=this,n=this.json,r=this.extensions,s=n.materials[e];let a;const o={},l=s.extensions||{},c=[];if(l[Ge.KHR_MATERIALS_UNLIT]){const h=r[Ge.KHR_MATERIALS_UNLIT];a=h.getMaterialType(),c.push(h.extendParams(o,s,t))}else{const h=s.pbrMetallicRoughness||{};if(o.color=new Te(1,1,1),o.opacity=1,Array.isArray(h.baseColorFactor)){const d=h.baseColorFactor;o.color.fromArray(d),o.opacity=d[3]}h.baseColorTexture!==void 0&&c.push(t.assignTexture(o,"map",h.baseColorTexture,Se)),o.metalness=h.metallicFactor!==void 0?h.metallicFactor:1,o.roughness=h.roughnessFactor!==void 0?h.roughnessFactor:1,h.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(o,"metalnessMap",h.metallicRoughnessTexture)),c.push(t.assignTexture(o,"roughnessMap",h.metallicRoughnessTexture))),a=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,o)})))}s.doubleSided===!0&&(o.side=zt);const u=s.alphaMode||ia.OPAQUE;if(u===ia.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,u===ia.MASK&&(o.alphaTest=s.alphaCutoff!==void 0?s.alphaCutoff:.5)),s.normalTexture!==void 0&&a!==ni&&(c.push(t.assignTexture(o,"normalMap",s.normalTexture)),o.normalScale=new se(1,1),s.normalTexture.scale!==void 0)){const h=s.normalTexture.scale;o.normalScale.set(h,h)}return s.occlusionTexture!==void 0&&a!==ni&&(c.push(t.assignTexture(o,"aoMap",s.occlusionTexture)),s.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=s.occlusionTexture.strength)),s.emissiveFactor!==void 0&&a!==ni&&(o.emissive=new Te().fromArray(s.emissiveFactor)),s.emissiveTexture!==void 0&&a!==ni&&c.push(t.assignTexture(o,"emissiveMap",s.emissiveTexture,Se)),Promise.all(c).then(function(){const h=new a(o);return s.name&&(h.name=s.name),Hn(h,s),t.associations.set(h,{materials:e}),s.extensions&&Qn(r,h,s),h})}createUniqueName(e){const t=Ke.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,r=this.primitiveCache;function s(o){return n[Ge.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(l){return Jl(l,o,t)})}const a=[];for(let o=0,l=e.length;o<l;o++){const c=e[o],u=tx(c),h=r[u];if(h)a.push(h.promise);else{let d;c.extensions&&c.extensions[Ge.KHR_DRACO_MESH_COMPRESSION]?d=s(c):d=Jl(new Jt,c,t),r[u]={primitive:c,promise:d},a.push(d)}}return Promise.all(a)}loadMesh(e){const t=this,n=this.json,r=this.extensions,s=n.meshes[e],a=s.primitives,o=[];for(let l=0,c=a.length;l<c;l++){const u=a[l].material===void 0?Qv(this.cache):this.getDependency("material",a[l].material);o.push(u)}return o.push(t.loadGeometries(a)),Promise.all(o).then(function(l){const c=l.slice(0,l.length-1),u=l[l.length-1],h=[];for(let m=0,g=u.length;m<g;m++){const x=u[m],p=a[m];let f;const T=c[m];if(p.mode===Kt.TRIANGLES||p.mode===Kt.TRIANGLE_STRIP||p.mode===Kt.TRIANGLE_FAN||p.mode===void 0)f=s.isSkinnedMesh===!0?new kg(x,T):new Ht(x,T),f.isSkinnedMesh===!0&&f.normalizeSkinWeights(),p.mode===Kt.TRIANGLE_STRIP?f.geometry=Yl(f.geometry,Ic):p.mode===Kt.TRIANGLE_FAN&&(f.geometry=Yl(f.geometry,pa));else if(p.mode===Kt.LINES)f=new jg(x,T);else if(p.mode===Kt.LINE_STRIP)f=new za(x,T);else if(p.mode===Kt.LINE_LOOP)f=new Yg(x,T);else if(p.mode===Kt.POINTS)f=new qg(x,T);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+p.mode);Object.keys(f.geometry.morphAttributes).length>0&&ex(f,s),f.name=t.createUniqueName(s.name||"mesh_"+e),Hn(f,s),p.extensions&&Qn(r,f,p),t.assignFinalMaterial(f),h.push(f)}for(let m=0,g=h.length;m<g;m++)t.associations.set(h[m],{meshes:e,primitives:m});if(h.length===1)return s.extensions&&Qn(r,h[0],s),h[0];const d=new ii;s.extensions&&Qn(r,d,s),t.associations.set(d,{meshes:e});for(let m=0,g=h.length;m<g;m++)d.add(h[m]);return d})}loadCamera(e){let t;const n=this.json.cameras[e],r=n[n.type];if(!r){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new yt(Ih.radToDeg(r.yfov),r.aspectRatio||1,r.znear||1,r.zfar||2e6):n.type==="orthographic"&&(t=new Na(-r.xmag,r.xmag,r.ymag,-r.ymag,r.znear,r.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),Hn(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let r=0,s=t.joints.length;r<s;r++)n.push(this._loadNodeShallow(t.joints[r]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(r){const s=r.pop(),a=r,o=[],l=[];for(let c=0,u=a.length;c<u;c++){const h=a[c];if(h){o.push(h);const d=new ge;s!==null&&d.fromArray(s.array,c*16),l.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new Ba(o,l)})}loadAnimation(e){const t=this.json,n=this,r=t.animations[e],s=r.name?r.name:"animation_"+e,a=[],o=[],l=[],c=[],u=[];for(let h=0,d=r.channels.length;h<d;h++){const m=r.channels[h],g=r.samplers[m.sampler],x=m.target,p=x.node,f=r.parameters!==void 0?r.parameters[g.input]:g.input,T=r.parameters!==void 0?r.parameters[g.output]:g.output;x.node!==void 0&&(a.push(this.getDependency("node",p)),o.push(this.getDependency("accessor",f)),l.push(this.getDependency("accessor",T)),c.push(g),u.push(x))}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l),Promise.all(c),Promise.all(u)]).then(function(h){const d=h[0],m=h[1],g=h[2],x=h[3],p=h[4],f=[];for(let T=0,v=d.length;T<v;T++){const S=d[T],y=m[T],b=g[T],w=x[T],D=p[T];if(S===void 0)continue;S.updateMatrix&&(S.updateMatrix(),S.matrixAutoUpdate=!0);const M=n._createAnimationTracks(S,y,b,w,D);if(M)for(let _=0;_<M.length;_++)f.push(M[_])}return new nv(s,void 0,f)})}createNodeMesh(e){const t=this.json,n=this,r=t.nodes[e];return r.mesh===void 0?null:n.getDependency("mesh",r.mesh).then(function(s){const a=n._getNodeRef(n.meshCache,r.mesh,s);return r.weights!==void 0&&a.traverse(function(o){if(o.isMesh)for(let l=0,c=r.weights.length;l<c;l++)o.morphTargetInfluences[l]=r.weights[l]}),a})}loadNode(e){const t=this.json,n=this,r=t.nodes[e],s=n._loadNodeShallow(e),a=[],o=r.children||[];for(let c=0,u=o.length;c<u;c++)a.push(n.getDependency("node",o[c]));const l=r.skin===void 0?Promise.resolve(null):n.getDependency("skin",r.skin);return Promise.all([s,Promise.all(a),l]).then(function(c){const u=c[0],h=c[1],d=c[2];d!==null&&u.traverse(function(m){m.isSkinnedMesh&&m.bind(d,ix)});for(let m=0,g=h.length;m<g;m++)u.add(h[m]);return u})}_loadNodeShallow(e){const t=this.json,n=this.extensions,r=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const s=t.nodes[e],a=s.name?r.createUniqueName(s.name):"",o=[],l=r._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&o.push(l),s.camera!==void 0&&o.push(r.getDependency("camera",s.camera).then(function(c){return r._getNodeRef(r.cameraCache,s.camera,c)})),r._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){o.push(c)}),this.nodeCache[e]=Promise.all(o).then(function(c){let u;if(s.isBone===!0?u=new tu:c.length>1?u=new ii:c.length===1?u=c[0]:u=new nt,u!==c[0])for(let h=0,d=c.length;h<d;h++)u.add(c[h]);if(s.name&&(u.userData.name=s.name,u.name=a),Hn(u,s),s.extensions&&Qn(n,u,s),s.matrix!==void 0){const h=new ge;h.fromArray(s.matrix),u.applyMatrix4(h)}else s.translation!==void 0&&u.position.fromArray(s.translation),s.rotation!==void 0&&u.quaternion.fromArray(s.rotation),s.scale!==void 0&&u.scale.fromArray(s.scale);return r.associations.has(u)||r.associations.set(u,{}),r.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],r=this,s=new ii;n.name&&(s.name=r.createUniqueName(n.name)),Hn(s,n),n.extensions&&Qn(t,s,n);const a=n.nodes||[],o=[];for(let l=0,c=a.length;l<c;l++)o.push(r.getDependency("node",a[l]));return Promise.all(o).then(function(l){for(let u=0,h=l.length;u<h;u++)s.add(l[u]);const c=u=>{const h=new Map;for(const[d,m]of r.associations)(d instanceof Xt||d instanceof ot)&&h.set(d,m);return u.traverse(d=>{const m=r.associations.get(d);m!=null&&h.set(d,m)}),h};return r.associations=c(s),s})}_createAnimationTracks(e,t,n,r,s){const a=[],o=e.name?e.name:e.uuid,l=[];On[s.path]===On.weights?e.traverse(function(d){d.morphTargetInfluences&&l.push(d.name?d.name:d.uuid)}):l.push(o);let c;switch(On[s.path]){case On.weights:c=Xi;break;case On.rotation:c=ui;break;case On.position:case On.scale:default:switch(n.itemSize){case 1:c=Xi;break;case 2:case 3:c=Sr;break}break}const u=r.interpolation!==void 0?Jv[r.interpolation]:Vi,h=this._getArrayFromAccessor(n);for(let d=0,m=l.length;d<m;d++){const g=new c(l[d]+"."+On[s.path],t.array,h,u);u==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),a.push(g)}return a}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=ya(t.constructor),r=new Float32Array(t.length);for(let s=0,a=t.length;s<a;s++)r[s]=t[s]*n;t=r}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const r=this instanceof ui?Zv:lu;return new r(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function sx(i,e,t){const n=e.attributes,r=new Ln;if(n.POSITION!==void 0){const o=t.json.accessors[n.POSITION],l=o.min,c=o.max;if(l!==void 0&&c!==void 0){if(r.set(new C(l[0],l[1],l[2]),new C(c[0],c[1],c[2])),o.normalized){const u=ya(Bi[o.componentType]);r.min.multiplyScalar(u),r.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const s=e.targets;if(s!==void 0){const o=new C,l=new C;for(let c=0,u=s.length;c<u;c++){const h=s[c];if(h.POSITION!==void 0){const d=t.json.accessors[h.POSITION],m=d.min,g=d.max;if(m!==void 0&&g!==void 0){if(l.setX(Math.max(Math.abs(m[0]),Math.abs(g[0]))),l.setY(Math.max(Math.abs(m[1]),Math.abs(g[1]))),l.setZ(Math.max(Math.abs(m[2]),Math.abs(g[2]))),d.normalized){const x=ya(Bi[d.componentType]);l.multiplyScalar(x)}o.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}r.expandByVector(o)}i.boundingBox=r;const a=new pn;r.getCenter(a.center),a.radius=r.min.distanceTo(r.max)/2,i.boundingSphere=a}function Jl(i,e,t){const n=e.attributes,r=[];function s(a,o){return t.getDependency("accessor",a).then(function(l){i.setAttribute(o,l)})}for(const a in n){const o=_a[a]||a.toLowerCase();o in i.attributes||r.push(s(n[a],o))}if(e.indices!==void 0&&!i.index){const a=t.getDependency("accessor",e.indices).then(function(o){i.setIndex(o)});r.push(a)}return Hn(i,e),sx(i,e,t),Promise.all(r).then(function(){return e.targets!==void 0?$v(i,e.targets,t):i})}class ax extends cv{constructor(e){super(e),this.type=bt}parse(e){const o=function(v,S){switch(v){case 1:console.error("THREE.RGBELoader Read Error: "+(S||""));break;case 2:console.error("THREE.RGBELoader Write Error: "+(S||""));break;case 3:console.error("THREE.RGBELoader Bad File Format: "+(S||""));break;default:case 4:console.error("THREE.RGBELoader: Error: "+(S||""))}return-1},h=`
`,d=function(v,S,y){S=S||1024;let w=v.pos,D=-1,M=0,_="",N=String.fromCharCode.apply(null,new Uint16Array(v.subarray(w,w+128)));for(;0>(D=N.indexOf(h))&&M<S&&w<v.byteLength;)_+=N,M+=N.length,w+=128,N+=String.fromCharCode.apply(null,new Uint16Array(v.subarray(w,w+128)));return-1<D?(y!==!1&&(v.pos+=M+D+1),_+N.slice(0,D)):!1},m=function(v){const S=/^#\?(\S+)/,y=/^\s*GAMMA\s*=\s*(\d+(\.\d+)?)\s*$/,b=/^\s*EXPOSURE\s*=\s*(\d+(\.\d+)?)\s*$/,w=/^\s*FORMAT=(\S+)\s*$/,D=/^\s*\-Y\s+(\d+)\s+\+X\s+(\d+)\s*$/,M={valid:0,string:"",comments:"",programtype:"RGBE",format:"",gamma:1,exposure:1,width:0,height:0};let _,N;if(v.pos>=v.byteLength||!(_=d(v)))return o(1,"no header found");if(!(N=_.match(S)))return o(3,"bad initial token");for(M.valid|=1,M.programtype=N[1],M.string+=_+`
`;_=d(v),_!==!1;){if(M.string+=_+`
`,_.charAt(0)==="#"){M.comments+=_+`
`;continue}if((N=_.match(y))&&(M.gamma=parseFloat(N[1])),(N=_.match(b))&&(M.exposure=parseFloat(N[1])),(N=_.match(w))&&(M.valid|=2,M.format=N[1]),(N=_.match(D))&&(M.valid|=4,M.height=parseInt(N[1],10),M.width=parseInt(N[2],10)),M.valid&2&&M.valid&4)break}return M.valid&2?M.valid&4?M:o(3,"missing image size specifier"):o(3,"missing format specifier")},g=function(v,S,y){const b=S;if(b<8||b>32767||v[0]!==2||v[1]!==2||v[2]&128)return new Uint8Array(v);if(b!==(v[2]<<8|v[3]))return o(3,"wrong scanline width");const w=new Uint8Array(4*S*y);if(!w.length)return o(4,"unable to allocate buffer space");let D=0,M=0;const _=4*b,N=new Uint8Array(4),q=new Uint8Array(_);let I=y;for(;I>0&&M<v.byteLength;){if(M+4>v.byteLength)return o(1);if(N[0]=v[M++],N[1]=v[M++],N[2]=v[M++],N[3]=v[M++],N[0]!=2||N[1]!=2||(N[2]<<8|N[3])!=b)return o(3,"bad rgbe scanline format");let z=0,B;for(;z<_&&M<v.byteLength;){B=v[M++];const W=B>128;if(W&&(B-=128),B===0||z+B>_)return o(3,"bad scanline data");if(W){const K=v[M++];for(let ee=0;ee<B;ee++)q[z++]=K}else q.set(v.subarray(M,M+B),z),z+=B,M+=B}const J=b;for(let W=0;W<J;W++){let K=0;w[D]=q[W+K],K+=b,w[D+1]=q[W+K],K+=b,w[D+2]=q[W+K],K+=b,w[D+3]=q[W+K],D+=4}I--}return w},x=function(v,S,y,b){const w=v[S+3],D=Math.pow(2,w-128)/255;y[b+0]=v[S+0]*D,y[b+1]=v[S+1]*D,y[b+2]=v[S+2]*D,y[b+3]=1},p=function(v,S,y,b){const w=v[S+3],D=Math.pow(2,w-128)/255;y[b+0]=Nr.toHalfFloat(Math.min(v[S+0]*D,65504)),y[b+1]=Nr.toHalfFloat(Math.min(v[S+1]*D,65504)),y[b+2]=Nr.toHalfFloat(Math.min(v[S+2]*D,65504)),y[b+3]=Nr.toHalfFloat(1)},f=new Uint8Array(e);f.pos=0;const T=m(f);if(T!==-1){const v=T.width,S=T.height,y=g(f.subarray(f.pos),v,S);if(y!==-1){let b,w,D;switch(this.type){case $e:D=y.length/4;const M=new Float32Array(D*4);for(let N=0;N<D;N++)x(y,N*4,M,N*4);b=M,w=$e;break;case bt:D=y.length/4;const _=new Uint16Array(D*4);for(let N=0;N<D;N++)p(y,N*4,_,N*4);b=_,w=bt;break;default:console.error("THREE.RGBELoader: unsupported type: ",this.type);break}return{width:v,height:S,data:b,header:T.string,gamma:T.gamma,exposure:T.exposure,type:w}}}return null}setDataType(e){return this.type=e,this}load(e,t,n,r){function s(a,o){switch(a.type){case $e:case bt:a.colorSpace=jt,a.minFilter=Be,a.magFilter=Be,a.generateMipmaps=!1,a.flipY=!0;break}t&&t(a,o)}return super.load(e,s,n,r)}}const Ql={type:"change"},sa={type:"start"},$l={type:"end"};class ox extends fn{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new C,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:fi.ROTATE,MIDDLE:fi.DOLLY,RIGHT:fi.PAN},this.touches={ONE:pi.ROTATE,TWO:pi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return o.phi},this.getAzimuthalAngle=function(){return o.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(P){P.addEventListener("keydown",qe),this._domElementKeyEvents=P},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",qe),this._domElementKeyEvents=null},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(Ql),n.update(),s=r.NONE},this.update=function(){const P=new C,Q=new an().setFromUnitVectors(e.up,new C(0,1,0)),te=Q.clone().invert(),k=new C,pe=new an,xe=new C,ve=2*Math.PI;return function(){const de=n.object.position;P.copy(de).sub(n.target),P.applyQuaternion(Q),o.setFromVector3(P),n.autoRotate&&s===r.NONE&&M(w()),n.enableDamping?(o.theta+=l.theta*n.dampingFactor,o.phi+=l.phi*n.dampingFactor):(o.theta+=l.theta,o.phi+=l.phi);let we=n.minAzimuthAngle,Ve=n.maxAzimuthAngle;return isFinite(we)&&isFinite(Ve)&&(we<-Math.PI?we+=ve:we>Math.PI&&(we-=ve),Ve<-Math.PI?Ve+=ve:Ve>Math.PI&&(Ve-=ve),we<=Ve?o.theta=Math.max(we,Math.min(Ve,o.theta)):o.theta=o.theta>(we+Ve)/2?Math.max(we,o.theta):Math.min(Ve,o.theta)),o.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,o.phi)),o.makeSafe(),o.radius*=c,o.radius=Math.max(n.minDistance,Math.min(n.maxDistance,o.radius)),n.enableDamping===!0?n.target.addScaledVector(u,n.dampingFactor):n.target.add(u),P.setFromSpherical(o),P.applyQuaternion(te),de.copy(n.target).add(P),n.object.lookAt(n.target),n.enableDamping===!0?(l.theta*=1-n.dampingFactor,l.phi*=1-n.dampingFactor,u.multiplyScalar(1-n.dampingFactor)):(l.set(0,0,0),u.set(0,0,0)),c=1,h||k.distanceToSquared(n.object.position)>a||8*(1-pe.dot(n.object.quaternion))>a||xe.distanceToSquared(n.target)>0?(n.dispatchEvent(Ql),k.copy(n.object.position),pe.copy(n.object.quaternion),xe.copy(n.target),h=!1,!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",R),n.domElement.removeEventListener("pointerdown",_e),n.domElement.removeEventListener("pointercancel",Ae),n.domElement.removeEventListener("wheel",Ue),n.domElement.removeEventListener("pointermove",Pe),n.domElement.removeEventListener("pointerup",Ae),n._domElementKeyEvents!==null&&(n._domElementKeyEvents.removeEventListener("keydown",qe),n._domElementKeyEvents=null)};const n=this,r={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let s=r.NONE;const a=1e-6,o=new jl,l=new jl;let c=1;const u=new C;let h=!1;const d=new se,m=new se,g=new se,x=new se,p=new se,f=new se,T=new se,v=new se,S=new se,y=[],b={};function w(){return 2*Math.PI/60/60*n.autoRotateSpeed}function D(){return Math.pow(.95,n.zoomSpeed)}function M(P){l.theta-=P}function _(P){l.phi-=P}const N=function(){const P=new C;return function(te,k){P.setFromMatrixColumn(k,0),P.multiplyScalar(-te),u.add(P)}}(),q=function(){const P=new C;return function(te,k){n.screenSpacePanning===!0?P.setFromMatrixColumn(k,1):(P.setFromMatrixColumn(k,0),P.crossVectors(n.object.up,P)),P.multiplyScalar(te),u.add(P)}}(),I=function(){const P=new C;return function(te,k){const pe=n.domElement;if(n.object.isPerspectiveCamera){const xe=n.object.position;P.copy(xe).sub(n.target);let ve=P.length();ve*=Math.tan(n.object.fov/2*Math.PI/180),N(2*te*ve/pe.clientHeight,n.object.matrix),q(2*k*ve/pe.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(N(te*(n.object.right-n.object.left)/n.object.zoom/pe.clientWidth,n.object.matrix),q(k*(n.object.top-n.object.bottom)/n.object.zoom/pe.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function z(P){n.object.isPerspectiveCamera?c/=P:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom*P)),n.object.updateProjectionMatrix(),h=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function B(P){n.object.isPerspectiveCamera?c*=P:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/P)),n.object.updateProjectionMatrix(),h=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function J(P){d.set(P.clientX,P.clientY)}function W(P){T.set(P.clientX,P.clientY)}function K(P){x.set(P.clientX,P.clientY)}function ee(P){m.set(P.clientX,P.clientY),g.subVectors(m,d).multiplyScalar(n.rotateSpeed);const Q=n.domElement;M(2*Math.PI*g.x/Q.clientHeight),_(2*Math.PI*g.y/Q.clientHeight),d.copy(m),n.update()}function $(P){v.set(P.clientX,P.clientY),S.subVectors(v,T),S.y>0?z(D()):S.y<0&&B(D()),T.copy(v),n.update()}function H(P){p.set(P.clientX,P.clientY),f.subVectors(p,x).multiplyScalar(n.panSpeed),I(f.x,f.y),x.copy(p),n.update()}function X(P){P.deltaY<0?B(D()):P.deltaY>0&&z(D()),n.update()}function ce(P){let Q=!1;switch(P.code){case n.keys.UP:P.ctrlKey||P.metaKey||P.shiftKey?_(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):I(0,n.keyPanSpeed),Q=!0;break;case n.keys.BOTTOM:P.ctrlKey||P.metaKey||P.shiftKey?_(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):I(0,-n.keyPanSpeed),Q=!0;break;case n.keys.LEFT:P.ctrlKey||P.metaKey||P.shiftKey?M(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):I(n.keyPanSpeed,0),Q=!0;break;case n.keys.RIGHT:P.ctrlKey||P.metaKey||P.shiftKey?M(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):I(-n.keyPanSpeed,0),Q=!0;break}Q&&(P.preventDefault(),n.update())}function oe(){if(y.length===1)d.set(y[0].pageX,y[0].pageY);else{const P=.5*(y[0].pageX+y[1].pageX),Q=.5*(y[0].pageY+y[1].pageY);d.set(P,Q)}}function he(){if(y.length===1)x.set(y[0].pageX,y[0].pageY);else{const P=.5*(y[0].pageX+y[1].pageX),Q=.5*(y[0].pageY+y[1].pageY);x.set(P,Q)}}function Me(){const P=y[0].pageX-y[1].pageX,Q=y[0].pageY-y[1].pageY,te=Math.sqrt(P*P+Q*Q);T.set(0,te)}function Le(){n.enableZoom&&Me(),n.enablePan&&he()}function be(){n.enableZoom&&Me(),n.enableRotate&&oe()}function Xe(P){if(y.length==1)m.set(P.pageX,P.pageY);else{const te=ne(P),k=.5*(P.pageX+te.x),pe=.5*(P.pageY+te.y);m.set(k,pe)}g.subVectors(m,d).multiplyScalar(n.rotateSpeed);const Q=n.domElement;M(2*Math.PI*g.x/Q.clientHeight),_(2*Math.PI*g.y/Q.clientHeight),d.copy(m)}function At(P){if(y.length===1)p.set(P.pageX,P.pageY);else{const Q=ne(P),te=.5*(P.pageX+Q.x),k=.5*(P.pageY+Q.y);p.set(te,k)}f.subVectors(p,x).multiplyScalar(n.panSpeed),I(f.x,f.y),x.copy(p)}function Oe(P){const Q=ne(P),te=P.pageX-Q.x,k=P.pageY-Q.y,pe=Math.sqrt(te*te+k*k);v.set(0,pe),S.set(0,Math.pow(v.y/T.y,n.zoomSpeed)),z(S.y),T.copy(v)}function F(P){n.enableZoom&&Oe(P),n.enablePan&&At(P)}function vt(P){n.enableZoom&&Oe(P),n.enableRotate&&Xe(P)}function _e(P){n.enabled!==!1&&(y.length===0&&(n.domElement.setPointerCapture(P.pointerId),n.domElement.addEventListener("pointermove",Pe),n.domElement.addEventListener("pointerup",Ae)),E(P),P.pointerType==="touch"?dt(P):Qe(P))}function Pe(P){n.enabled!==!1&&(P.pointerType==="touch"?xt(P):ze(P))}function Ae(P){j(P),y.length===0&&(n.domElement.releasePointerCapture(P.pointerId),n.domElement.removeEventListener("pointermove",Pe),n.domElement.removeEventListener("pointerup",Ae)),n.dispatchEvent($l),s=r.NONE}function Qe(P){let Q;switch(P.button){case 0:Q=n.mouseButtons.LEFT;break;case 1:Q=n.mouseButtons.MIDDLE;break;case 2:Q=n.mouseButtons.RIGHT;break;default:Q=-1}switch(Q){case fi.DOLLY:if(n.enableZoom===!1)return;W(P),s=r.DOLLY;break;case fi.ROTATE:if(P.ctrlKey||P.metaKey||P.shiftKey){if(n.enablePan===!1)return;K(P),s=r.PAN}else{if(n.enableRotate===!1)return;J(P),s=r.ROTATE}break;case fi.PAN:if(P.ctrlKey||P.metaKey||P.shiftKey){if(n.enableRotate===!1)return;J(P),s=r.ROTATE}else{if(n.enablePan===!1)return;K(P),s=r.PAN}break;default:s=r.NONE}s!==r.NONE&&n.dispatchEvent(sa)}function ze(P){switch(s){case r.ROTATE:if(n.enableRotate===!1)return;ee(P);break;case r.DOLLY:if(n.enableZoom===!1)return;$(P);break;case r.PAN:if(n.enablePan===!1)return;H(P);break}}function Ue(P){n.enabled===!1||n.enableZoom===!1||s!==r.NONE||(P.preventDefault(),n.dispatchEvent(sa),X(P),n.dispatchEvent($l))}function qe(P){n.enabled===!1||n.enablePan===!1||ce(P)}function dt(P){switch(ie(P),y.length){case 1:switch(n.touches.ONE){case pi.ROTATE:if(n.enableRotate===!1)return;oe(),s=r.TOUCH_ROTATE;break;case pi.PAN:if(n.enablePan===!1)return;he(),s=r.TOUCH_PAN;break;default:s=r.NONE}break;case 2:switch(n.touches.TWO){case pi.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;Le(),s=r.TOUCH_DOLLY_PAN;break;case pi.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;be(),s=r.TOUCH_DOLLY_ROTATE;break;default:s=r.NONE}break;default:s=r.NONE}s!==r.NONE&&n.dispatchEvent(sa)}function xt(P){switch(ie(P),s){case r.TOUCH_ROTATE:if(n.enableRotate===!1)return;Xe(P),n.update();break;case r.TOUCH_PAN:if(n.enablePan===!1)return;At(P),n.update();break;case r.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;F(P),n.update();break;case r.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;vt(P),n.update();break;default:s=r.NONE}}function R(P){n.enabled!==!1&&P.preventDefault()}function E(P){y.push(P)}function j(P){delete b[P.pointerId];for(let Q=0;Q<y.length;Q++)if(y[Q].pointerId==P.pointerId){y.splice(Q,1);return}}function ie(P){let Q=b[P.pointerId];Q===void 0&&(Q=new se,b[P.pointerId]=Q),Q.set(P.pageX,P.pageY)}function ne(P){const Q=P.pointerId===y[0].pointerId?y[1]:y[0];return b[Q.pointerId]}n.domElement.addEventListener("contextmenu",R),n.domElement.addEventListener("pointerdown",_e),n.domElement.addEventListener("pointercancel",Ae),n.domElement.addEventListener("wheel",Ue,{passive:!1}),this.update()}}class lx extends Ht{constructor(e,t={}){const r=[e.isCubeTexture?"#define ENVMAP_TYPE_CUBE":""],s=`
			varying vec3 vWorldPosition;

			void main() {

				vec4 worldPosition = ( modelMatrix * vec4( position, 1.0 ) );
				vWorldPosition = worldPosition.xyz;

				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

			}
			`,a=r.join(`
`)+`

				varying vec3 vWorldPosition;

				uniform float radius;
				uniform float height;
				uniform float angle;

				#ifdef ENVMAP_TYPE_CUBE

					uniform samplerCube map;

				#else

					uniform sampler2D map;

				#endif

				// From: https://www.shadertoy.com/view/4tsBD7
				float diskIntersectWithBackFaceCulling( vec3 ro, vec3 rd, vec3 c, vec3 n, float r ) 
				{

					float d = dot ( rd, n );

					if( d > 0.0 ) { return 1e6; }

					vec3 o = ro - c;
					float t = - dot( n, o ) / d;
					vec3 q = o + rd * t;

					return ( dot( q, q ) < r * r ) ? t : 1e6;

				}

				// From: https://www.iquilezles.org/www/articles/intersectors/intersectors.htm
				float sphereIntersect( vec3 ro, vec3 rd, vec3 ce, float ra ) {

					vec3 oc = ro - ce;
					float b = dot( oc, rd );
					float c = dot( oc, oc ) - ra * ra;
					float h = b * b - c;

					if( h < 0.0 ) { return -1.0; }

					h = sqrt( h );

					return - b + h;

				}

				vec3 project() {

					vec3 p = normalize( vWorldPosition );
					vec3 camPos = cameraPosition;
					camPos.y -= height;

					float intersection = sphereIntersect( camPos, p, vec3( 0.0 ), radius );
					if( intersection > 0.0 ) {

						vec3 h = vec3( 0.0, - height, 0.0 );
						float intersection2 = diskIntersectWithBackFaceCulling( camPos, p, h, vec3( 0.0, 1.0, 0.0 ), radius );
						p = ( camPos + min( intersection, intersection2 ) * p ) / radius;

					} else {

						p = vec3( 0.0, 1.0, 0.0 );

					}

					return p;

				}

				#include <common>

				void main() {

					vec3 projectedWorldPosition = project();

					#ifdef ENVMAP_TYPE_CUBE

						vec3 outcolor = textureCube( map, projectedWorldPosition ).rgb;

					#else

						vec3 direction = normalize( projectedWorldPosition );
						vec2 uv = equirectUv( direction );
						vec3 outcolor = texture2D( map, uv ).rgb;

					#endif

					gl_FragColor = vec4( outcolor, 1.0 );

					#include <tonemapping_fragment>
					#include <colorspace_fragment>

				}
				`,o={map:{value:e},height:{value:t.height||15},radius:{value:t.radius||100}},l=new Va(1,16),c=new et({uniforms:o,fragmentShader:a,vertexShader:s,side:zt});super(l,c)}set radius(e){this.material.uniforms.radius.value=e}get radius(){return this.material.uniforms.radius.value}set height(e){this.material.uniforms.height.value=e}get height(){return this.material.uniforms.height.value}}/**
 * postprocessing v6.32.2 build Sat Jul 01 2023
 * https://github.com/pmndrs/postprocessing
 * Copyright 2015-2023 Raoul van Rüschen
 * @license Zlib
 */var cu="varying vec2 vUv;void main(){vUv=position.xy*0.5+0.5;gl_Position=vec4(position.xy,1.0,1.0);}",uu="",Et="srgb",ms="srgb-linear",hu=Number(qi.replace(/\D+/g,"")),du=hu>=152,cx=new Map([[ls,ms],[Cn,Et]]),ux=new Map([[ms,ls],[Et,Cn]]);function Yi(i){return i===null?null:du?i.outputColorSpace:cx.get(i.outputEncoding)}function kn(i,e){i!==null&&(du?i.colorSpace=e:i.encoding=ux.get(e))}function yr(i){return hu<154?i.replace("colorspace_fragment","encodings_fragment"):i}var ke={SKIP:9,SET:30,ADD:0,ALPHA:1,AVERAGE:2,COLOR:3,COLOR_BURN:4,COLOR_DODGE:5,DARKEN:6,DIFFERENCE:7,DIVIDE:8,DST:9,EXCLUSION:10,HARD_LIGHT:11,HARD_MIX:12,HUE:13,INVERT:14,INVERT_RGB:15,LIGHTEN:16,LINEAR_BURN:17,LINEAR_DODGE:18,LINEAR_LIGHT:19,LUMINOSITY:20,MULTIPLY:21,NEGATION:22,NORMAL:23,OVERLAY:24,PIN_LIGHT:25,REFLECT:26,SATURATION:27,SCREEN:28,SOFT_LIGHT:29,SRC:30,SUBTRACT:31,VIVID_LIGHT:32},ai={NONE:0,DEPTH:1,CONVOLUTION:2},Ye={FRAGMENT_HEAD:"FRAGMENT_HEAD",FRAGMENT_MAIN_UV:"FRAGMENT_MAIN_UV",FRAGMENT_MAIN_IMAGE:"FRAGMENT_MAIN_IMAGE",VERTEX_HEAD:"VERTEX_HEAD",VERTEX_MAIN_SUPPORT:"VERTEX_MAIN_SUPPORT"},Ya={VERY_SMALL:0,SMALL:1,MEDIUM:2,LARGE:3,VERY_LARGE:4,HUGE:5},hx=`#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;
#else
uniform lowp sampler2D inputBuffer;
#endif
varying vec2 vUv0;varying vec2 vUv1;varying vec2 vUv2;varying vec2 vUv3;void main(){vec4 sum=texture2D(inputBuffer,vUv0);sum+=texture2D(inputBuffer,vUv1);sum+=texture2D(inputBuffer,vUv2);sum+=texture2D(inputBuffer,vUv3);gl_FragColor=sum*0.25;
#include <colorspace_fragment>
}`,dx="uniform vec4 texelSize;uniform float kernel;uniform float scale;varying vec2 vUv0;varying vec2 vUv1;varying vec2 vUv2;varying vec2 vUv3;void main(){vec2 uv=position.xy*0.5+0.5;vec2 dUv=(texelSize.xy*vec2(kernel)+texelSize.zw)*scale;vUv0=vec2(uv.x-dUv.x,uv.y+dUv.y);vUv1=vec2(uv.x+dUv.x,uv.y+dUv.y);vUv2=vec2(uv.x+dUv.x,uv.y-dUv.y);vUv3=vec2(uv.x-dUv.x,uv.y-dUv.y);gl_Position=vec4(position.xy,1.0,1.0);}",fx=[new Float32Array([0,0]),new Float32Array([0,1,1]),new Float32Array([0,1,1,2]),new Float32Array([0,1,2,2,3]),new Float32Array([0,1,2,3,4,4,5]),new Float32Array([0,1,2,3,4,5,7,8,9,10])],px=class extends et{constructor(i=new Ze){super({name:"KawaseBlurMaterial",uniforms:{inputBuffer:new V(null),texelSize:new V(new Ze),scale:new V(1),kernel:new V(0)},blending:ut,toneMapped:!1,depthWrite:!1,depthTest:!1,fragmentShader:hx,vertexShader:dx}),this.fragmentShader=yr(this.fragmentShader),this.setTexelSize(i.x,i.y),this.kernelSize=Ya.MEDIUM}set inputBuffer(i){this.uniforms.inputBuffer.value=i}setInputBuffer(i){this.inputBuffer=i}get kernelSequence(){return fx[this.kernelSize]}get scale(){return this.uniforms.scale.value}set scale(i){this.uniforms.scale.value=i}getScale(){return this.uniforms.scale.value}setScale(i){this.uniforms.scale.value=i}getKernel(){return null}get kernel(){return this.uniforms.kernel.value}set kernel(i){this.uniforms.kernel.value=i}setKernel(i){this.kernel=i}setTexelSize(i,e){this.uniforms.texelSize.value.set(i,e,i*.5,e*.5)}setSize(i,e){const t=1/i,n=1/e;this.uniforms.texelSize.value.set(t,n,t*.5,n*.5)}},mx=`#include <common>
#include <dithering_pars_fragment>
#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;
#else
uniform lowp sampler2D inputBuffer;
#endif
uniform float opacity;varying vec2 vUv;void main(){vec4 texel=texture2D(inputBuffer,vUv);gl_FragColor=opacity*texel;
#include <colorspace_fragment>
#include <dithering_fragment>
}`,fu=class extends et{constructor(){super({name:"CopyMaterial",uniforms:{inputBuffer:new V(null),opacity:new V(1)},blending:ut,toneMapped:!1,depthWrite:!1,depthTest:!1,fragmentShader:mx,vertexShader:cu}),this.fragmentShader=yr(this.fragmentShader)}set inputBuffer(i){this.uniforms.inputBuffer.value=i}setInputBuffer(i){this.uniforms.inputBuffer.value=i}getOpacity(i){return this.uniforms.opacity.value}setOpacity(i){this.uniforms.opacity.value=i}},gx=`#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;
#else
uniform lowp sampler2D inputBuffer;
#endif
#define WEIGHT_INNER 0.125
#define WEIGHT_OUTER 0.0555555
varying vec2 vUv;varying vec2 vUv00;varying vec2 vUv01;varying vec2 vUv02;varying vec2 vUv03;varying vec2 vUv04;varying vec2 vUv05;varying vec2 vUv06;varying vec2 vUv07;varying vec2 vUv08;varying vec2 vUv09;varying vec2 vUv10;varying vec2 vUv11;float clampToBorder(const in vec2 uv){return float(uv.s>=0.0&&uv.s<=1.0&&uv.t>=0.0&&uv.t<=1.0);}void main(){vec4 c=vec4(0.0);vec4 w=WEIGHT_INNER*vec4(clampToBorder(vUv00),clampToBorder(vUv01),clampToBorder(vUv02),clampToBorder(vUv03));c+=w.x*texture2D(inputBuffer,vUv00);c+=w.y*texture2D(inputBuffer,vUv01);c+=w.z*texture2D(inputBuffer,vUv02);c+=w.w*texture2D(inputBuffer,vUv03);w=WEIGHT_OUTER*vec4(clampToBorder(vUv04),clampToBorder(vUv05),clampToBorder(vUv06),clampToBorder(vUv07));c+=w.x*texture2D(inputBuffer,vUv04);c+=w.y*texture2D(inputBuffer,vUv05);c+=w.z*texture2D(inputBuffer,vUv06);c+=w.w*texture2D(inputBuffer,vUv07);w=WEIGHT_OUTER*vec4(clampToBorder(vUv08),clampToBorder(vUv09),clampToBorder(vUv10),clampToBorder(vUv11));c+=w.x*texture2D(inputBuffer,vUv08);c+=w.y*texture2D(inputBuffer,vUv09);c+=w.z*texture2D(inputBuffer,vUv10);c+=w.w*texture2D(inputBuffer,vUv11);c+=WEIGHT_OUTER*texture2D(inputBuffer,vUv);gl_FragColor=c;
#include <colorspace_fragment>
}`,vx="uniform vec2 texelSize;varying vec2 vUv;varying vec2 vUv00;varying vec2 vUv01;varying vec2 vUv02;varying vec2 vUv03;varying vec2 vUv04;varying vec2 vUv05;varying vec2 vUv06;varying vec2 vUv07;varying vec2 vUv08;varying vec2 vUv09;varying vec2 vUv10;varying vec2 vUv11;void main(){vUv=position.xy*0.5+0.5;vUv00=vUv+texelSize*vec2(-1.0,1.0);vUv01=vUv+texelSize*vec2(1.0,1.0);vUv02=vUv+texelSize*vec2(-1.0,-1.0);vUv03=vUv+texelSize*vec2(1.0,-1.0);vUv04=vUv+texelSize*vec2(-2.0,2.0);vUv05=vUv+texelSize*vec2(0.0,2.0);vUv06=vUv+texelSize*vec2(2.0,2.0);vUv07=vUv+texelSize*vec2(-2.0,0.0);vUv08=vUv+texelSize*vec2(2.0,0.0);vUv09=vUv+texelSize*vec2(-2.0,-2.0);vUv10=vUv+texelSize*vec2(0.0,-2.0);vUv11=vUv+texelSize*vec2(2.0,-2.0);gl_Position=vec4(position.xy,1.0,1.0);}",xx=class extends et{constructor(){super({name:"DownsamplingMaterial",uniforms:{inputBuffer:new V(null),texelSize:new V(new se)},blending:ut,toneMapped:!1,depthWrite:!1,depthTest:!1,fragmentShader:gx,vertexShader:vx}),this.fragmentShader=yr(this.fragmentShader)}set inputBuffer(i){this.uniforms.inputBuffer.value=i}setSize(i,e){this.uniforms.texelSize.value.set(1/i,1/e)}},Mx=`#include <common>
#include <packing>
#include <dithering_pars_fragment>
#define packFloatToRGBA(v) packDepthToRGBA(v)
#define unpackRGBAToFloat(v) unpackRGBAToDepth(v)
#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;
#else
uniform lowp sampler2D inputBuffer;
#endif
#if DEPTH_PACKING == 3201
uniform lowp sampler2D depthBuffer;
#elif defined(GL_FRAGMENT_PRECISION_HIGH)
uniform highp sampler2D depthBuffer;
#else
uniform mediump sampler2D depthBuffer;
#endif
uniform vec2 resolution;uniform vec2 texelSize;uniform float cameraNear;uniform float cameraFar;uniform float aspect;uniform float time;varying vec2 vUv;
#if THREE_REVISION < 143
#define luminance(v) linearToRelativeLuminance(v)
#endif
#if THREE_REVISION >= 137
vec4 sRGBToLinear(const in vec4 value){return vec4(mix(pow(value.rgb*0.9478672986+vec3(0.0521327014),vec3(2.4)),value.rgb*0.0773993808,vec3(lessThanEqual(value.rgb,vec3(0.04045)))),value.a);}
#endif
float readDepth(const in vec2 uv){
#if DEPTH_PACKING == 3201
return unpackRGBAToDepth(texture2D(depthBuffer,uv));
#else
return texture2D(depthBuffer,uv).r;
#endif
}float getViewZ(const in float depth){
#ifdef PERSPECTIVE_CAMERA
return perspectiveDepthToViewZ(depth,cameraNear,cameraFar);
#else
return orthographicDepthToViewZ(depth,cameraNear,cameraFar);
#endif
}vec3 RGBToHCV(const in vec3 RGB){vec4 P=mix(vec4(RGB.bg,-1.0,2.0/3.0),vec4(RGB.gb,0.0,-1.0/3.0),step(RGB.b,RGB.g));vec4 Q=mix(vec4(P.xyw,RGB.r),vec4(RGB.r,P.yzx),step(P.x,RGB.r));float C=Q.x-min(Q.w,Q.y);float H=abs((Q.w-Q.y)/(6.0*C+EPSILON)+Q.z);return vec3(H,C,Q.x);}vec3 RGBToHSL(const in vec3 RGB){vec3 HCV=RGBToHCV(RGB);float L=HCV.z-HCV.y*0.5;float S=HCV.y/(1.0-abs(L*2.0-1.0)+EPSILON);return vec3(HCV.x,S,L);}vec3 HueToRGB(const in float H){float R=abs(H*6.0-3.0)-1.0;float G=2.0-abs(H*6.0-2.0);float B=2.0-abs(H*6.0-4.0);return clamp(vec3(R,G,B),0.0,1.0);}vec3 HSLToRGB(const in vec3 HSL){vec3 RGB=HueToRGB(HSL.x);float C=(1.0-abs(2.0*HSL.z-1.0))*HSL.y;return(RGB-0.5)*C+HSL.z;}FRAGMENT_HEAD void main(){FRAGMENT_MAIN_UV vec4 color0=texture2D(inputBuffer,UV);vec4 color1=vec4(0.0);FRAGMENT_MAIN_IMAGE gl_FragColor=color0;
#ifdef ENCODE_OUTPUT
#include <colorspace_fragment>
#endif
#include <dithering_fragment>
}`,Sx="uniform vec2 resolution;uniform vec2 texelSize;uniform float cameraNear;uniform float cameraFar;uniform float aspect;uniform float time;varying vec2 vUv;VERTEX_HEAD void main(){vUv=position.xy*0.5+0.5;VERTEX_MAIN_SUPPORT gl_Position=vec4(position.xy,1.0,1.0);}",Tx=class extends et{constructor(i,e,t,n,r=!1){super({name:"EffectMaterial",defines:{THREE_REVISION:qi.replace(/\D+/g,""),DEPTH_PACKING:"0",ENCODE_OUTPUT:"1"},uniforms:{inputBuffer:new V(null),depthBuffer:new V(null),resolution:new V(new se),texelSize:new V(new se),cameraNear:new V(.3),cameraFar:new V(1e3),aspect:new V(1),time:new V(0)},blending:ut,toneMapped:!1,depthWrite:!1,depthTest:!1,dithering:r}),i&&this.setShaderParts(i),e&&this.setDefines(e),t&&this.setUniforms(t),this.copyCameraSettings(n)}set inputBuffer(i){this.uniforms.inputBuffer.value=i}setInputBuffer(i){this.uniforms.inputBuffer.value=i}get depthBuffer(){return this.uniforms.depthBuffer.value}set depthBuffer(i){this.uniforms.depthBuffer.value=i}get depthPacking(){return Number(this.defines.DEPTH_PACKING)}set depthPacking(i){this.defines.DEPTH_PACKING=i.toFixed(0),this.needsUpdate=!0}setDepthBuffer(i,e=Ki){this.depthBuffer=i,this.depthPacking=e}setShaderData(i){this.setShaderParts(i.shaderParts),this.setDefines(i.defines),this.setUniforms(i.uniforms),this.setExtensions(i.extensions)}setShaderParts(i){return this.fragmentShader=Mx.replace(Ye.FRAGMENT_HEAD,i.get(Ye.FRAGMENT_HEAD)||"").replace(Ye.FRAGMENT_MAIN_UV,i.get(Ye.FRAGMENT_MAIN_UV)||"").replace(Ye.FRAGMENT_MAIN_IMAGE,i.get(Ye.FRAGMENT_MAIN_IMAGE)||""),this.vertexShader=Sx.replace(Ye.VERTEX_HEAD,i.get(Ye.VERTEX_HEAD)||"").replace(Ye.VERTEX_MAIN_SUPPORT,i.get(Ye.VERTEX_MAIN_SUPPORT)||""),this.fragmentShader=yr(this.fragmentShader),this.needsUpdate=!0,this}setDefines(i){for(const e of i.entries())this.defines[e[0]]=e[1];return this.needsUpdate=!0,this}setUniforms(i){for(const e of i.entries())this.uniforms[e[0]]=e[1];return this}setExtensions(i){this.extensions={};for(const e of i)this.extensions[e]=!0;return this}get encodeOutput(){return this.defines.ENCODE_OUTPUT!==void 0}set encodeOutput(i){this.encodeOutput!==i&&(i?this.defines.ENCODE_OUTPUT="1":delete this.defines.ENCODE_OUTPUT,this.needsUpdate=!0)}isOutputEncodingEnabled(i){return this.encodeOutput}setOutputEncodingEnabled(i){this.encodeOutput=i}get time(){return this.uniforms.time.value}set time(i){this.uniforms.time.value=i}setDeltaTime(i){this.uniforms.time.value+=i}adoptCameraSettings(i){this.copyCameraSettings(i)}copyCameraSettings(i){i&&(this.uniforms.cameraNear.value=i.near,this.uniforms.cameraFar.value=i.far,i instanceof yt?this.defines.PERSPECTIVE_CAMERA="1":delete this.defines.PERSPECTIVE_CAMERA,this.needsUpdate=!0)}setSize(i,e){const t=this.uniforms;t.resolution.value.set(i,e),t.texelSize.value.set(1/i,1/e),t.aspect.value=i/e}static get Section(){return Ye}},_x=`#include <common>
#if THREE_REVISION < 143
#define luminance(v) linearToRelativeLuminance(v)
#endif
#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;
#else
uniform lowp sampler2D inputBuffer;
#endif
#ifdef RANGE
uniform vec2 range;
#elif defined(THRESHOLD)
uniform float threshold;uniform float smoothing;
#endif
varying vec2 vUv;void main(){vec4 texel=texture2D(inputBuffer,vUv);float l=luminance(texel.rgb);
#ifdef RANGE
float low=step(range.x,l);float high=step(l,range.y);l*=low*high;
#elif defined(THRESHOLD)
l=smoothstep(threshold,threshold+smoothing,l);
#endif
#ifdef COLOR
gl_FragColor=vec4(texel.rgb*l,l);
#else
gl_FragColor=vec4(l);
#endif
}`,yx=class extends et{constructor(i=!1,e=null){super({name:"LuminanceMaterial",defines:{THREE_REVISION:qi.replace(/\D+/g,"")},uniforms:{inputBuffer:new V(null),threshold:new V(0),smoothing:new V(1),range:new V(null)},blending:ut,toneMapped:!1,depthWrite:!1,depthTest:!1,fragmentShader:_x,vertexShader:cu}),this.colorOutput=i,this.luminanceRange=e}set inputBuffer(i){this.uniforms.inputBuffer.value=i}setInputBuffer(i){this.uniforms.inputBuffer.value=i}get threshold(){return this.uniforms.threshold.value}set threshold(i){this.smoothing>0||i>0?this.defines.THRESHOLD="1":delete this.defines.THRESHOLD,this.uniforms.threshold.value=i}getThreshold(){return this.threshold}setThreshold(i){this.threshold=i}get smoothing(){return this.uniforms.smoothing.value}set smoothing(i){this.threshold>0||i>0?this.defines.THRESHOLD="1":delete this.defines.THRESHOLD,this.uniforms.smoothing.value=i}getSmoothingFactor(){return this.smoothing}setSmoothingFactor(i){this.smoothing=i}get useThreshold(){return this.threshold>0||this.smoothing>0}set useThreshold(i){}get colorOutput(){return this.defines.COLOR!==void 0}set colorOutput(i){i?this.defines.COLOR="1":delete this.defines.COLOR,this.needsUpdate=!0}isColorOutputEnabled(i){return this.colorOutput}setColorOutputEnabled(i){this.colorOutput=i}get useRange(){return this.luminanceRange!==null}set useRange(i){this.luminanceRange=null}get luminanceRange(){return this.uniforms.range.value}set luminanceRange(i){i!==null?this.defines.RANGE="1":delete this.defines.RANGE,this.uniforms.range.value=i,this.needsUpdate=!0}getLuminanceRange(){return this.luminanceRange}setLuminanceRange(i){this.luminanceRange=i}},Ex=`#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;uniform mediump sampler2D supportBuffer;
#else
uniform lowp sampler2D inputBuffer;uniform lowp sampler2D supportBuffer;
#endif
uniform float radius;varying vec2 vUv;varying vec2 vUv0;varying vec2 vUv1;varying vec2 vUv2;varying vec2 vUv3;varying vec2 vUv4;varying vec2 vUv5;varying vec2 vUv6;varying vec2 vUv7;void main(){vec4 c=vec4(0.0);c+=texture2D(inputBuffer,vUv0)*0.0625;c+=texture2D(inputBuffer,vUv1)*0.125;c+=texture2D(inputBuffer,vUv2)*0.0625;c+=texture2D(inputBuffer,vUv3)*0.125;c+=texture2D(inputBuffer,vUv)*0.25;c+=texture2D(inputBuffer,vUv4)*0.125;c+=texture2D(inputBuffer,vUv5)*0.0625;c+=texture2D(inputBuffer,vUv6)*0.125;c+=texture2D(inputBuffer,vUv7)*0.0625;vec4 baseColor=texture2D(supportBuffer,vUv);gl_FragColor=mix(baseColor,c,radius);
#include <colorspace_fragment>
}`,bx="uniform vec2 texelSize;varying vec2 vUv;varying vec2 vUv0;varying vec2 vUv1;varying vec2 vUv2;varying vec2 vUv3;varying vec2 vUv4;varying vec2 vUv5;varying vec2 vUv6;varying vec2 vUv7;void main(){vUv=position.xy*0.5+0.5;vUv0=vUv+texelSize*vec2(-1.0,1.0);vUv1=vUv+texelSize*vec2(0.0,1.0);vUv2=vUv+texelSize*vec2(1.0,1.0);vUv3=vUv+texelSize*vec2(-1.0,0.0);vUv4=vUv+texelSize*vec2(1.0,0.0);vUv5=vUv+texelSize*vec2(-1.0,-1.0);vUv6=vUv+texelSize*vec2(0.0,-1.0);vUv7=vUv+texelSize*vec2(1.0,-1.0);gl_Position=vec4(position.xy,1.0,1.0);}",Ax=class extends et{constructor(){super({name:"UpsamplingMaterial",uniforms:{inputBuffer:new V(null),supportBuffer:new V(null),texelSize:new V(new se),radius:new V(.85)},blending:ut,toneMapped:!1,depthWrite:!1,depthTest:!1,fragmentShader:Ex,vertexShader:bx}),this.fragmentShader=yr(this.fragmentShader)}set inputBuffer(i){this.uniforms.inputBuffer.value=i}set supportBuffer(i){this.uniforms.supportBuffer.value=i}get radius(){return this.uniforms.radius.value}set radius(i){this.uniforms.radius.value=i}setSize(i,e){this.uniforms.texelSize.value.set(1/i,1/e)}},wx=new Da,Bn=null;function Rx(){if(Bn===null){const i=new Float32Array([-1,-1,0,3,-1,0,-1,3,0]),e=new Float32Array([0,0,2,0,0,2]);Bn=new Jt,Bn.setAttribute!==void 0?(Bn.setAttribute("position",new pt(i,3)),Bn.setAttribute("uv",new pt(e,2))):(Bn.addAttribute("position",new pt(i,3)),Bn.addAttribute("uv",new pt(e,2)))}return Bn}var ht=class pu{constructor(e="Pass",t=new Ma,n=wx){this.name=e,this.renderer=null,this.scene=t,this.camera=n,this.screen=null,this.rtt=!0,this.needsSwap=!0,this.needsDepthTexture=!1,this.enabled=!0}get renderToScreen(){return!this.rtt}set renderToScreen(e){if(this.rtt===e){const t=this.fullscreenMaterial;t!==null&&(t.needsUpdate=!0),this.rtt=!e}}set mainScene(e){}set mainCamera(e){}setRenderer(e){this.renderer=e}isEnabled(){return this.enabled}setEnabled(e){this.enabled=e}get fullscreenMaterial(){return this.screen!==null?this.screen.material:null}set fullscreenMaterial(e){let t=this.screen;t!==null?t.material=e:(t=new Ht(Rx(),e),t.frustumCulled=!1,this.scene===null&&(this.scene=new Ma),this.scene.add(t),this.screen=t)}getFullscreenMaterial(){return this.fullscreenMaterial}setFullscreenMaterial(e){this.fullscreenMaterial=e}getDepthTexture(){return null}setDepthTexture(e,t=Ki){}render(e,t,n,r,s){throw new Error("Render method not implemented!")}setSize(e,t){}initialize(e,t,n){}dispose(){for(const e of Object.keys(this)){const t=this[e];(t instanceof it||t instanceof Xt||t instanceof ot||t instanceof pu)&&this[e].dispose()}}},Px=class extends ht{constructor(e,t=!0){super("CopyPass"),this.fullscreenMaterial=new fu,this.needsSwap=!1,this.renderTarget=e,e===void 0&&(this.renderTarget=new it(1,1,{minFilter:Be,magFilter:Be,stencilBuffer:!1,depthBuffer:!1}),this.renderTarget.texture.name="CopyPass.Target"),this.autoResize=t}get resize(){return this.autoResize}set resize(e){this.autoResize=e}get texture(){return this.renderTarget.texture}getTexture(){return this.renderTarget.texture}setAutoResizeEnabled(e){this.autoResize=e}render(e,t,n,r,s){this.fullscreenMaterial.inputBuffer=t.texture,e.setRenderTarget(this.renderToScreen?null:this.renderTarget),e.render(this.scene,this.camera)}setSize(e,t){this.autoResize&&this.renderTarget.setSize(e,t)}initialize(e,t,n){n!==void 0&&(this.renderTarget.texture.type=n,n!==wt?this.fullscreenMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1":Yi(e)===Et&&kn(this.renderTarget.texture,Et))}},Cx=class extends ht{constructor(){super("ClearMaskPass",null,null),this.needsSwap=!1}render(i,e,t,n,r){const s=i.state.buffers.stencil;s.setLocked(!1),s.setTest(!1)}},ec=new Te,mu=class extends ht{constructor(i=!0,e=!0,t=!1){super("ClearPass",null,null),this.needsSwap=!1,this.color=i,this.depth=e,this.stencil=t,this.overrideClearColor=null,this.overrideClearAlpha=-1}setClearFlags(i,e,t){this.color=i,this.depth=e,this.stencil=t}getOverrideClearColor(){return this.overrideClearColor}setOverrideClearColor(i){this.overrideClearColor=i}getOverrideClearAlpha(){return this.overrideClearAlpha}setOverrideClearAlpha(i){this.overrideClearAlpha=i}render(i,e,t,n,r){const s=this.overrideClearColor,a=this.overrideClearAlpha,o=i.getClearAlpha(),l=s!==null,c=a>=0;l?(i.getClearColor(ec),i.setClearColor(s,c?a:o)):c&&i.setClearAlpha(a),i.setRenderTarget(this.renderToScreen?null:e),i.clear(this.color,this.depth,this.stencil),l?i.setClearColor(ec,o):c&&i.setClearAlpha(o)}},zn=-1,Wt=class extends fn{constructor(i,e=zn,t=zn,n=1){super(),this.resizable=i,this.baseSize=new se(1,1),this.preferredSize=new se(e,t),this.target=this.preferredSize,this.s=n,this.effectiveSize=new se,this.addEventListener("change",()=>this.updateEffectiveSize()),this.updateEffectiveSize()}updateEffectiveSize(){const i=this.baseSize,e=this.preferredSize,t=this.effectiveSize,n=this.scale;e.width!==zn?t.width=e.width:e.height!==zn?t.width=Math.round(e.height*(i.width/Math.max(i.height,1))):t.width=Math.round(i.width*n),e.height!==zn?t.height=e.height:e.width!==zn?t.height=Math.round(e.width/Math.max(i.width/Math.max(i.height,1),1)):t.height=Math.round(i.height*n)}get width(){return this.effectiveSize.width}set width(i){this.preferredWidth=i}get height(){return this.effectiveSize.height}set height(i){this.preferredHeight=i}getWidth(){return this.width}getHeight(){return this.height}get scale(){return this.s}set scale(i){this.s!==i&&(this.s=i,this.preferredSize.setScalar(zn),this.dispatchEvent({type:"change"}),this.resizable.setSize(this.baseSize.width,this.baseSize.height))}getScale(){return this.scale}setScale(i){this.scale=i}get baseWidth(){return this.baseSize.width}set baseWidth(i){this.baseSize.width!==i&&(this.baseSize.width=i,this.dispatchEvent({type:"change"}),this.resizable.setSize(this.baseSize.width,this.baseSize.height))}getBaseWidth(){return this.baseWidth}setBaseWidth(i){this.baseWidth=i}get baseHeight(){return this.baseSize.height}set baseHeight(i){this.baseSize.height!==i&&(this.baseSize.height=i,this.dispatchEvent({type:"change"}),this.resizable.setSize(this.baseSize.width,this.baseSize.height))}getBaseHeight(){return this.baseHeight}setBaseHeight(i){this.baseHeight=i}setBaseSize(i,e){(this.baseSize.width!==i||this.baseSize.height!==e)&&(this.baseSize.set(i,e),this.dispatchEvent({type:"change"}),this.resizable.setSize(this.baseSize.width,this.baseSize.height))}get preferredWidth(){return this.preferredSize.width}set preferredWidth(i){this.preferredSize.width!==i&&(this.preferredSize.width=i,this.dispatchEvent({type:"change"}),this.resizable.setSize(this.baseSize.width,this.baseSize.height))}getPreferredWidth(){return this.preferredWidth}setPreferredWidth(i){this.preferredWidth=i}get preferredHeight(){return this.preferredSize.height}set preferredHeight(i){this.preferredSize.height!==i&&(this.preferredSize.height=i,this.dispatchEvent({type:"change"}),this.resizable.setSize(this.baseSize.width,this.baseSize.height))}getPreferredHeight(){return this.preferredHeight}setPreferredHeight(i){this.preferredHeight=i}setPreferredSize(i,e){(this.preferredSize.width!==i||this.preferredSize.height!==e)&&(this.preferredSize.set(i,e),this.dispatchEvent({type:"change"}),this.resizable.setSize(this.baseSize.width,this.baseSize.height))}copy(i){this.s=i.scale,this.baseSize.set(i.baseWidth,i.baseHeight),this.preferredSize.set(i.preferredWidth,i.preferredHeight),this.dispatchEvent({type:"change"}),this.resizable.setSize(this.baseSize.width,this.baseSize.height)}static get AUTO_SIZE(){return zn}},aa=!1,tc=class{constructor(i=null){this.originalMaterials=new Map,this.material=null,this.materials=null,this.materialsBackSide=null,this.materialsDoubleSide=null,this.materialsFlatShaded=null,this.materialsFlatShadedBackSide=null,this.materialsFlatShadedDoubleSide=null,this.setMaterial(i),this.meshCount=0,this.replaceMaterial=e=>{if(e.isMesh){let t;if(e.material.flatShading)switch(e.material.side){case zt:t=this.materialsFlatShadedDoubleSide;break;case ft:t=this.materialsFlatShadedBackSide;break;default:t=this.materialsFlatShaded;break}else switch(e.material.side){case zt:t=this.materialsDoubleSide;break;case ft:t=this.materialsBackSide;break;default:t=this.materials;break}this.originalMaterials.set(e,e.material),e.isSkinnedMesh?e.material=t[2]:e.isInstancedMesh?e.material=t[1]:e.material=t[0],++this.meshCount}}}cloneMaterial(i){if(!(i instanceof et))return i.clone();const e=i.uniforms,t=new Map;for(const r in e){const s=e[r].value;s.isRenderTargetTexture&&(e[r].value=null,t.set(r,s))}const n=i.clone();for(const r of t)e[r[0]].value=r[1],n.uniforms[r[0]].value=r[1];return n}setMaterial(i){if(this.disposeMaterials(),this.material=i,i!==null){const e=this.materials=[this.cloneMaterial(i),this.cloneMaterial(i),this.cloneMaterial(i)];for(const t of e)t.uniforms=Object.assign({},i.uniforms),t.side=hn;e[2].skinning=!0,this.materialsBackSide=e.map(t=>{const n=this.cloneMaterial(t);return n.uniforms=Object.assign({},i.uniforms),n.side=ft,n}),this.materialsDoubleSide=e.map(t=>{const n=this.cloneMaterial(t);return n.uniforms=Object.assign({},i.uniforms),n.side=zt,n}),this.materialsFlatShaded=e.map(t=>{const n=this.cloneMaterial(t);return n.uniforms=Object.assign({},i.uniforms),n.flatShading=!0,n}),this.materialsFlatShadedBackSide=e.map(t=>{const n=this.cloneMaterial(t);return n.uniforms=Object.assign({},i.uniforms),n.flatShading=!0,n.side=ft,n}),this.materialsFlatShadedDoubleSide=e.map(t=>{const n=this.cloneMaterial(t);return n.uniforms=Object.assign({},i.uniforms),n.flatShading=!0,n.side=zt,n})}}render(i,e,t){const n=i.shadowMap.enabled;if(i.shadowMap.enabled=!1,aa){const r=this.originalMaterials;this.meshCount=0,e.traverse(this.replaceMaterial),i.render(e,t);for(const s of r)s[0].material=s[1];this.meshCount!==r.size&&r.clear()}else{const r=e.overrideMaterial;e.overrideMaterial=this.material,i.render(e,t),e.overrideMaterial=r}i.shadowMap.enabled=n}disposeMaterials(){if(this.material!==null){const i=this.materials.concat(this.materialsBackSide).concat(this.materialsDoubleSide).concat(this.materialsFlatShaded).concat(this.materialsFlatShadedBackSide).concat(this.materialsFlatShadedDoubleSide);for(const e of i)e.dispose()}}dispose(){this.originalMaterials.clear(),this.disposeMaterials()}static get workaroundEnabled(){return aa}static set workaroundEnabled(i){aa=i}},zi=class extends ht{constructor(i,e,t=null){super("RenderPass",i,e),this.needsSwap=!1,this.clearPass=new mu,this.overrideMaterialManager=t===null?null:new tc(t),this.ignoreBackground=!1,this.skipShadowMapUpdate=!1,this.selection=null}set mainScene(i){this.scene=i}set mainCamera(i){this.camera=i}get renderToScreen(){return super.renderToScreen}set renderToScreen(i){super.renderToScreen=i,this.clearPass.renderToScreen=i}get overrideMaterial(){const i=this.overrideMaterialManager;return i!==null?i.material:null}set overrideMaterial(i){const e=this.overrideMaterialManager;i!==null?e!==null?e.setMaterial(i):this.overrideMaterialManager=new tc(i):e!==null&&(e.dispose(),this.overrideMaterialManager=null)}getOverrideMaterial(){return this.overrideMaterial}setOverrideMaterial(i){this.overrideMaterial=i}get clear(){return this.clearPass.enabled}set clear(i){this.clearPass.enabled=i}getSelection(){return this.selection}setSelection(i){this.selection=i}isBackgroundDisabled(){return this.ignoreBackground}setBackgroundDisabled(i){this.ignoreBackground=i}isShadowMapDisabled(){return this.skipShadowMapUpdate}setShadowMapDisabled(i){this.skipShadowMapUpdate=i}getClearPass(){return this.clearPass}render(i,e,t,n,r){const s=this.scene,a=this.camera,o=this.selection,l=a.layers.mask,c=s.background,u=i.shadowMap.autoUpdate,h=this.renderToScreen?null:e;o!==null&&a.layers.set(o.getLayer()),this.skipShadowMapUpdate&&(i.shadowMap.autoUpdate=!1),(this.ignoreBackground||this.clearPass.overrideClearColor!==null)&&(s.background=null),this.clearPass.enabled&&this.clearPass.render(i,e),i.setRenderTarget(h),this.overrideMaterialManager!==null?this.overrideMaterialManager.render(i,s,a):i.render(s,a),a.layers.mask=l,s.background=c,i.shadowMap.autoUpdate=u}};function nc(i,e,t){for(const n of e){const r="$1"+i+n.charAt(0).toUpperCase()+n.slice(1),s=new RegExp("([^\\.])(\\b"+n+"\\b)","g");for(const a of t.entries())a[1]!==null&&t.set(a[0],a[1].replace(s,r))}}function Lx(i,e,t){let n=e.getFragmentShader(),r=e.getVertexShader();const s=n!==void 0&&/mainImage/.test(n),a=n!==void 0&&/mainUv/.test(n);if(t.attributes|=e.getAttributes(),n===void 0)throw new Error(`Missing fragment shader (${e.name})`);if(a&&t.attributes&ai.CONVOLUTION)throw new Error(`Effects that transform UVs are incompatible with convolution effects (${e.name})`);if(!s&&!a)throw new Error(`Could not find mainImage or mainUv function (${e.name})`);{const o=/\w+\s+(\w+)\([\w\s,]*\)\s*{/g,l=t.shaderParts;let c=l.get(Ye.FRAGMENT_HEAD)||"",u=l.get(Ye.FRAGMENT_MAIN_UV)||"",h=l.get(Ye.FRAGMENT_MAIN_IMAGE)||"",d=l.get(Ye.VERTEX_HEAD)||"",m=l.get(Ye.VERTEX_MAIN_SUPPORT)||"";const g=new Set,x=new Set;if(a&&(u+=`	${i}MainUv(UV);
`,t.uvTransformation=!0),r!==null&&/mainSupport/.test(r)){const T=/mainSupport *\([\w\s]*?uv\s*?\)/.test(r);m+=`	${i}MainSupport(`,m+=T?`vUv);
`:`);
`;for(const v of r.matchAll(/(?:varying\s+\w+\s+([\S\s]*?);)/g))for(const S of v[1].split(/\s*,\s*/))t.varyings.add(S),g.add(S),x.add(S);for(const v of r.matchAll(o))x.add(v[1])}for(const T of n.matchAll(o))x.add(T[1]);for(const T of e.defines.keys())x.add(T.replace(/\([\w\s,]*\)/g,""));for(const T of e.uniforms.keys())x.add(T);x.delete("while"),x.delete("for"),x.delete("if"),e.uniforms.forEach((T,v)=>t.uniforms.set(i+v.charAt(0).toUpperCase()+v.slice(1),T)),e.defines.forEach((T,v)=>t.defines.set(i+v.charAt(0).toUpperCase()+v.slice(1),T));const p=new Map([["fragment",n],["vertex",r]]);nc(i,x,t.defines),nc(i,x,p),n=p.get("fragment"),r=p.get("vertex");const f=e.blendMode;if(t.blendModes.set(f.blendFunction,f),s){e.inputColorSpace!==null&&e.inputColorSpace!==t.colorSpace&&(h+=e.inputColorSpace===Et?`color0 = LinearTosRGB(color0);
	`:`color0 = sRGBToLinear(color0);
	`),e.outputColorSpace!==uu?t.colorSpace=e.outputColorSpace:e.inputColorSpace!==null&&(t.colorSpace=e.inputColorSpace);const T=/MainImage *\([\w\s,]*?depth[\w\s,]*?\)/;h+=`${i}MainImage(color0, UV, `,t.attributes&ai.DEPTH&&T.test(n)&&(h+="depth, ",t.readDepth=!0),h+=`color1);
	`;const v=i+"BlendOpacity";t.uniforms.set(v,f.opacity),h+=`color0 = blend${f.blendFunction}(color0, color1, ${v});

	`,c+=`uniform float ${v};

`}if(c+=n+`
`,r!==null&&(d+=r+`
`),l.set(Ye.FRAGMENT_HEAD,c),l.set(Ye.FRAGMENT_MAIN_UV,u),l.set(Ye.FRAGMENT_MAIN_IMAGE,h),l.set(Ye.VERTEX_HEAD,d),l.set(Ye.VERTEX_MAIN_SUPPORT,m),e.extensions!==null)for(const T of e.extensions)t.extensions.add(T)}}var ur=class extends ht{constructor(i,...e){super("EffectPass"),this.fullscreenMaterial=new Tx(null,null,null,i),this.listener=t=>this.handleEvent(t),this.effects=[],this.setEffects(e),this.skipRendering=!1,this.minTime=1,this.maxTime=Number.POSITIVE_INFINITY,this.timeScale=1}set mainScene(i){for(const e of this.effects)e.mainScene=i}set mainCamera(i){this.fullscreenMaterial.copyCameraSettings(i);for(const e of this.effects)e.mainCamera=i}get encodeOutput(){return this.fullscreenMaterial.encodeOutput}set encodeOutput(i){this.fullscreenMaterial.encodeOutput=i}get dithering(){return this.fullscreenMaterial.dithering}set dithering(i){const e=this.fullscreenMaterial;e.dithering=i,e.needsUpdate=!0}setEffects(i){for(const e of this.effects)e.removeEventListener("change",this.listener);this.effects=i.sort((e,t)=>t.attributes-e.attributes);for(const e of this.effects)e.addEventListener("change",this.listener)}updateMaterial(){const i=new Hx;let e=0;for(const a of this.effects)if(a.blendMode.blendFunction===ke.DST)i.attributes|=a.getAttributes()&ai.DEPTH;else{if(i.attributes&a.getAttributes()&ai.CONVOLUTION)throw new Error(`Convolution effects cannot be merged (${a.name})`);Lx("e"+e++,a,i)}let t=i.shaderParts.get(Ye.FRAGMENT_HEAD),n=i.shaderParts.get(Ye.FRAGMENT_MAIN_IMAGE),r=i.shaderParts.get(Ye.FRAGMENT_MAIN_UV);const s=/\bblend\b/g;for(const a of i.blendModes.values())t+=a.getShaderCode().replace(s,`blend${a.blendFunction}`)+`
`;i.attributes&ai.DEPTH?(i.readDepth&&(n=`float depth = readDepth(UV);

	`+n),this.needsDepthTexture=this.getDepthTexture()===null):this.needsDepthTexture=!1,i.colorSpace===Et&&(n+=`color0 = sRGBToLinear(color0);
	`),i.uvTransformation?(r=`vec2 transformedUv = vUv;
`+r,i.defines.set("UV","transformedUv")):i.defines.set("UV","vUv"),i.shaderParts.set(Ye.FRAGMENT_HEAD,t),i.shaderParts.set(Ye.FRAGMENT_MAIN_IMAGE,n),i.shaderParts.set(Ye.FRAGMENT_MAIN_UV,r);for(const[a,o]of i.shaderParts)o!==null&&i.shaderParts.set(a,o.trim().replace(/^#/,`
#`));this.skipRendering=e===0,this.needsSwap=!this.skipRendering,this.fullscreenMaterial.setShaderData(i)}recompile(){this.updateMaterial()}getDepthTexture(){return this.fullscreenMaterial.depthBuffer}setDepthTexture(i,e=Ki){this.fullscreenMaterial.depthBuffer=i,this.fullscreenMaterial.depthPacking=e;for(const t of this.effects)t.setDepthTexture(i,e)}render(i,e,t,n,r){for(const s of this.effects)s.update(i,e,n);if(!this.skipRendering||this.renderToScreen){const s=this.fullscreenMaterial;s.inputBuffer=e.texture,s.time+=n*this.timeScale,i.setRenderTarget(this.renderToScreen?null:t),i.render(this.scene,this.camera)}}setSize(i,e){this.fullscreenMaterial.setSize(i,e);for(const t of this.effects)t.setSize(i,e)}initialize(i,e,t){this.renderer=i;for(const n of this.effects)n.initialize(i,e,t);this.updateMaterial(),t!==void 0&&t!==wt&&(this.fullscreenMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1")}dispose(){super.dispose();for(const i of this.effects)i.removeEventListener("change",this.listener),i.dispose()}handleEvent(i){switch(i.type){case"change":this.recompile();break}}},Dx=class extends ht{constructor({kernelSize:i=Ya.MEDIUM,resolutionScale:e=.5,width:t=Wt.AUTO_SIZE,height:n=Wt.AUTO_SIZE,resolutionX:r=t,resolutionY:s=n}={}){super("KawaseBlurPass"),this.renderTargetA=new it(1,1,{depthBuffer:!1}),this.renderTargetA.texture.name="Blur.Target.A",this.renderTargetB=this.renderTargetA.clone(),this.renderTargetB.texture.name="Blur.Target.B";const a=this.resolution=new Wt(this,r,s,e);a.addEventListener("change",o=>this.setSize(a.baseWidth,a.baseHeight)),this._blurMaterial=new px,this._blurMaterial.kernelSize=i,this.copyMaterial=new fu}getResolution(){return this.resolution}get blurMaterial(){return this._blurMaterial}set blurMaterial(i){this._blurMaterial=i}get dithering(){return this.copyMaterial.dithering}set dithering(i){this.copyMaterial.dithering=i}get kernelSize(){return this.blurMaterial.kernelSize}set kernelSize(i){this.blurMaterial.kernelSize=i}get width(){return this.resolution.width}set width(i){this.resolution.preferredWidth=i}get height(){return this.resolution.height}set height(i){this.resolution.preferredHeight=i}get scale(){return this.blurMaterial.scale}set scale(i){this.blurMaterial.scale=i}getScale(){return this.blurMaterial.scale}setScale(i){this.blurMaterial.scale=i}getKernelSize(){return this.kernelSize}setKernelSize(i){this.kernelSize=i}getResolutionScale(){return this.resolution.scale}setResolutionScale(i){this.resolution.scale=i}render(i,e,t,n,r){const s=this.scene,a=this.camera,o=this.renderTargetA,l=this.renderTargetB,c=this.blurMaterial,u=c.kernelSequence;let h=e;this.fullscreenMaterial=c;for(let d=0,m=u.length;d<m;++d){const g=d&1?l:o;c.kernel=u[d],c.inputBuffer=h.texture,i.setRenderTarget(g),i.render(s,a),h=g}this.fullscreenMaterial=this.copyMaterial,this.copyMaterial.inputBuffer=h.texture,i.setRenderTarget(this.renderToScreen?null:t),i.render(s,a)}setSize(i,e){const t=this.resolution;t.setBaseSize(i,e);const n=t.width,r=t.height;this.renderTargetA.setSize(n,r),this.renderTargetB.setSize(n,r),this.blurMaterial.setSize(i,e)}initialize(i,e,t){t!==void 0&&(this.renderTargetA.texture.type=t,this.renderTargetB.texture.type=t,t!==wt?(this.blurMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1",this.copyMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1"):Yi(i)===Et&&(kn(this.renderTargetA.texture,Et),kn(this.renderTargetB.texture,Et)))}static get AUTO_SIZE(){return Wt.AUTO_SIZE}},Ux=class extends ht{constructor({renderTarget:i,luminanceRange:e,colorOutput:t,resolutionScale:n=1,width:r=Wt.AUTO_SIZE,height:s=Wt.AUTO_SIZE,resolutionX:a=r,resolutionY:o=s}={}){super("LuminancePass"),this.fullscreenMaterial=new yx(t,e),this.needsSwap=!1,this.renderTarget=i,this.renderTarget===void 0&&(this.renderTarget=new it(1,1,{depthBuffer:!1}),this.renderTarget.texture.name="LuminancePass.Target");const l=this.resolution=new Wt(this,a,o,n);l.addEventListener("change",c=>this.setSize(l.baseWidth,l.baseHeight))}get texture(){return this.renderTarget.texture}getTexture(){return this.renderTarget.texture}getResolution(){return this.resolution}render(i,e,t,n,r){const s=this.fullscreenMaterial;s.inputBuffer=e.texture,i.setRenderTarget(this.renderToScreen?null:this.renderTarget),i.render(this.scene,this.camera)}setSize(i,e){const t=this.resolution;t.setBaseSize(i,e),this.renderTarget.setSize(t.width,t.height)}initialize(i,e,t){t!==void 0&&t!==wt&&(this.renderTarget.texture.type=t,this.fullscreenMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1")}},Ix=class extends ht{constructor(i,e){super("MaskPass",i,e),this.needsSwap=!1,this.clearPass=new mu(!1,!1,!0),this.inverse=!1}set mainScene(i){this.scene=i}set mainCamera(i){this.camera=i}get inverted(){return this.inverse}set inverted(i){this.inverse=i}get clear(){return this.clearPass.enabled}set clear(i){this.clearPass.enabled=i}getClearPass(){return this.clearPass}isInverted(){return this.inverted}setInverted(i){this.inverted=i}render(i,e,t,n,r){const s=i.getContext(),a=i.state.buffers,o=this.scene,l=this.camera,c=this.clearPass,u=this.inverted?0:1,h=1-u;a.color.setMask(!1),a.depth.setMask(!1),a.color.setLocked(!0),a.depth.setLocked(!0),a.stencil.setTest(!0),a.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),a.stencil.setFunc(s.ALWAYS,u,4294967295),a.stencil.setClear(h),a.stencil.setLocked(!0),this.clearPass.enabled&&(this.renderToScreen?c.render(i,null):(c.render(i,e),c.render(i,t))),this.renderToScreen?(i.setRenderTarget(null),i.render(o,l)):(i.setRenderTarget(e),i.render(o,l),i.setRenderTarget(t),i.render(o,l)),a.color.setLocked(!1),a.depth.setLocked(!1),a.stencil.setLocked(!1),a.stencil.setFunc(s.EQUAL,1,4294967295),a.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),a.stencil.setLocked(!0)}},Nx=class extends ht{constructor(){super("MipmapBlurPass"),this.needsSwap=!1,this.renderTarget=new it(1,1,{depthBuffer:!1}),this.renderTarget.texture.name="Upsampling.Mipmap0",this.downsamplingMipmaps=[],this.upsamplingMipmaps=[],this.downsamplingMaterial=new xx,this.upsamplingMaterial=new Ax,this.resolution=new se}get texture(){return this.renderTarget.texture}get levels(){return this.downsamplingMipmaps.length}set levels(i){if(this.levels!==i){const e=this.renderTarget;this.dispose(),this.downsamplingMipmaps=[],this.upsamplingMipmaps=[];for(let t=0;t<i;++t){const n=e.clone();n.texture.name="Downsampling.Mipmap"+t,this.downsamplingMipmaps.push(n)}this.upsamplingMipmaps.push(e);for(let t=1,n=i-1;t<n;++t){const r=e.clone();r.texture.name="Upsampling.Mipmap"+t,this.upsamplingMipmaps.push(r)}this.setSize(this.resolution.x,this.resolution.y)}}get radius(){return this.upsamplingMaterial.radius}set radius(i){this.upsamplingMaterial.radius=i}render(i,e,t,n,r){const{scene:s,camera:a}=this,{downsamplingMaterial:o,upsamplingMaterial:l}=this,{downsamplingMipmaps:c,upsamplingMipmaps:u}=this;let h=e;this.fullscreenMaterial=o;for(let d=0,m=c.length;d<m;++d){const g=c[d];o.setSize(h.width,h.height),o.inputBuffer=h.texture,i.setRenderTarget(g),i.render(s,a),h=g}this.fullscreenMaterial=l;for(let d=u.length-1;d>=0;--d){const m=u[d];l.setSize(h.width,h.height),l.inputBuffer=h.texture,l.supportBuffer=c[d].texture,i.setRenderTarget(m),i.render(s,a),h=m}}setSize(i,e){const t=this.resolution;t.set(i,e);let n=t.width,r=t.height;for(let s=0,a=this.downsamplingMipmaps.length;s<a;++s)n=Math.round(n*.5),r=Math.round(r*.5),this.downsamplingMipmaps[s].setSize(n,r),s<this.upsamplingMipmaps.length&&this.upsamplingMipmaps[s].setSize(n,r)}initialize(i,e,t){if(t!==void 0){const n=this.downsamplingMipmaps.concat(this.upsamplingMipmaps);for(const r of n)r.texture.type=t;if(t!==wt)this.downsamplingMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1",this.upsamplingMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1";else if(Yi(i)===Et)for(const r of n)kn(r.texture,Et)}}dispose(){super.dispose();for(const i of this.downsamplingMipmaps.concat(this.upsamplingMipmaps))i.dispose()}},Fx=class extends ht{constructor(i,e,{renderTarget:t,resolutionScale:n=1,width:r=Wt.AUTO_SIZE,height:s=Wt.AUTO_SIZE,resolutionX:a=r,resolutionY:o=s}={}){super("NormalPass"),this.needsSwap=!1,this.renderPass=new zi(i,e,new Zg);const l=this.renderPass;l.ignoreBackground=!0,l.skipShadowMapUpdate=!0;const c=l.getClearPass();c.overrideClearColor=new Te(7829503),c.overrideClearAlpha=1,this.renderTarget=t,this.renderTarget===void 0&&(this.renderTarget=new it(1,1,{minFilter:Fe,magFilter:Fe}),this.renderTarget.texture.name="NormalPass.Target");const u=this.resolution=new Wt(this,a,o,n);u.addEventListener("change",h=>this.setSize(u.baseWidth,u.baseHeight))}set mainScene(i){this.renderPass.mainScene=i}set mainCamera(i){this.renderPass.mainCamera=i}get texture(){return this.renderTarget.texture}getTexture(){return this.renderTarget.texture}getResolution(){return this.resolution}getResolutionScale(){return this.resolution.scale}setResolutionScale(i){this.resolution.scale=i}render(i,e,t,n,r){const s=this.renderToScreen?null:this.renderTarget;this.renderPass.render(i,s,s)}setSize(i,e){const t=this.resolution;t.setBaseSize(i,e),this.renderTarget.setSize(t.width,t.height)}},oa=1/1e3,Ox=1e3,Bx=class{constructor(){this.startTime=performance.now(),this.previousTime=0,this.currentTime=0,this._delta=0,this._elapsed=0,this._fixedDelta=1e3/60,this.timescale=1,this.useFixedDelta=!1,this._autoReset=!1}get autoReset(){return this._autoReset}set autoReset(i){typeof document<"u"&&document.hidden!==void 0&&(i?document.addEventListener("visibilitychange",this):document.removeEventListener("visibilitychange",this),this._autoReset=i)}get delta(){return this._delta*oa}get fixedDelta(){return this._fixedDelta*oa}set fixedDelta(i){this._fixedDelta=i*Ox}get elapsed(){return this._elapsed*oa}update(i){this.useFixedDelta?this._delta=this.fixedDelta:(this.previousTime=this.currentTime,this.currentTime=(i!==void 0?i:performance.now())-this.startTime,this._delta=this.currentTime-this.previousTime),this._delta*=this.timescale,this._elapsed+=this._delta}reset(){this._delta=0,this._elapsed=0,this.currentTime=performance.now()-this.startTime}handleEvent(i){document.hidden||(this.currentTime=performance.now()-this.startTime)}dispose(){this.autoReset=!1}},zx=class{constructor(i=null,{depthBuffer:e=!0,stencilBuffer:t=!1,multisampling:n=0,frameBufferType:r}={}){this.renderer=null,this.inputBuffer=this.createBuffer(e,t,r,n),this.outputBuffer=this.inputBuffer.clone(),this.copyPass=new Px,this.depthTexture=null,this.passes=[],this.timer=new Bx,this.autoRenderToScreen=!0,this.setRenderer(i)}get multisampling(){return this.inputBuffer.samples||0}set multisampling(i){const e=this.inputBuffer,t=this.multisampling;t>0&&i>0?(this.inputBuffer.samples=i,this.outputBuffer.samples=i,this.inputBuffer.dispose(),this.outputBuffer.dispose()):t!==i&&(this.inputBuffer.dispose(),this.outputBuffer.dispose(),this.inputBuffer=this.createBuffer(e.depthBuffer,e.stencilBuffer,e.texture.type,i),this.inputBuffer.depthTexture=this.depthTexture,this.outputBuffer=this.inputBuffer.clone())}getTimer(){return this.timer}getRenderer(){return this.renderer}setRenderer(i){if(this.renderer=i,i!==null){const e=i.getSize(new se),t=i.getContext().getContextAttributes().alpha,n=this.inputBuffer.texture.type;n===wt&&Yi(i)===Et&&(kn(this.inputBuffer.texture,Et),kn(this.outputBuffer.texture,Et),this.inputBuffer.dispose(),this.outputBuffer.dispose()),i.autoClear=!1,this.setSize(e.width,e.height);for(const r of this.passes)r.initialize(i,t,n)}}replaceRenderer(i,e=!0){const t=this.renderer,n=t.domElement.parentNode;return this.setRenderer(i),e&&n!==null&&(n.removeChild(t.domElement),n.appendChild(i.domElement)),t}createDepthTexture(){const i=this.depthTexture=new fs;return this.inputBuffer.depthTexture=i,this.inputBuffer.dispose(),this.inputBuffer.stencilBuffer?(i.format=li,i.type=Vn):i.type=wn,i}deleteDepthTexture(){if(this.depthTexture!==null){this.depthTexture.dispose(),this.depthTexture=null,this.inputBuffer.depthTexture=null,this.inputBuffer.dispose();for(const i of this.passes)i.setDepthTexture(null)}}createBuffer(i,e,t,n){const r=this.renderer,s=r===null?new se:r.getDrawingBufferSize(new se),a={minFilter:Be,magFilter:Be,stencilBuffer:e,depthBuffer:i,type:t},o=new it(s.width,s.height,a);return n>0&&(o.ignoreDepthForMultisampleCopy=!1,o.samples=n),t===wt&&Yi(r)===Et&&kn(o.texture,Et),o.texture.name="EffectComposer.Buffer",o.texture.generateMipmaps=!1,o}setMainScene(i){for(const e of this.passes)e.mainScene=i}setMainCamera(i){for(const e of this.passes)e.mainCamera=i}addPass(i,e){const t=this.passes,n=this.renderer,r=n.getDrawingBufferSize(new se),s=n.getContext().getContextAttributes().alpha,a=this.inputBuffer.texture.type;if(i.setRenderer(n),i.setSize(r.width,r.height),i.initialize(n,s,a),this.autoRenderToScreen&&(t.length>0&&(t[t.length-1].renderToScreen=!1),i.renderToScreen&&(this.autoRenderToScreen=!1)),e!==void 0?t.splice(e,0,i):t.push(i),this.autoRenderToScreen&&(t[t.length-1].renderToScreen=!0),i.needsDepthTexture||this.depthTexture!==null)if(this.depthTexture===null){const o=this.createDepthTexture();for(i of t)i.setDepthTexture(o)}else i.setDepthTexture(this.depthTexture)}removePass(i){const e=this.passes,t=e.indexOf(i);if(t!==-1&&e.splice(t,1).length>0){if(this.depthTexture!==null){const s=(o,l)=>o||l.needsDepthTexture;e.reduce(s,!1)||(i.getDepthTexture()===this.depthTexture&&i.setDepthTexture(null),this.deleteDepthTexture())}this.autoRenderToScreen&&t===e.length&&(i.renderToScreen=!1,e.length>0&&(e[e.length-1].renderToScreen=!0))}}removeAllPasses(){const i=this.passes;this.deleteDepthTexture(),i.length>0&&(this.autoRenderToScreen&&(i[i.length-1].renderToScreen=!1),this.passes=[])}render(i){const e=this.renderer,t=this.copyPass;let n=this.inputBuffer,r=this.outputBuffer,s=!1,a,o,l;i===void 0&&(this.timer.update(),i=this.timer.delta);for(const c of this.passes)c.enabled&&(c.render(e,n,r,i,s),c.needsSwap&&(s&&(t.renderToScreen=c.renderToScreen,a=e.getContext(),o=e.state.buffers.stencil,o.setFunc(a.NOTEQUAL,1,4294967295),t.render(e,n,r,i,s),o.setFunc(a.EQUAL,1,4294967295)),l=n,n=r,r=l),c instanceof Ix?s=!0:c instanceof Cx&&(s=!1))}setSize(i,e,t){const n=this.renderer,r=n.getSize(new se);(i===void 0||e===void 0)&&(i=r.width,e=r.height),(r.width!==i||r.height!==e)&&n.setSize(i,e,t);const s=n.getDrawingBufferSize(new se);this.inputBuffer.setSize(s.width,s.height),this.outputBuffer.setSize(s.width,s.height);for(const a of this.passes)a.setSize(s.width,s.height)}reset(){const i=this.timer.autoReset;this.dispose(),this.autoRenderToScreen=!0,this.timer.autoReset=i}dispose(){for(const i of this.passes)i.dispose();this.passes=[],this.inputBuffer!==null&&this.inputBuffer.dispose(),this.outputBuffer!==null&&this.outputBuffer.dispose(),this.deleteDepthTexture(),this.copyPass.dispose(),this.timer.dispose()}},Hx=class{constructor(){this.shaderParts=new Map([[Ye.FRAGMENT_HEAD,null],[Ye.FRAGMENT_MAIN_UV,null],[Ye.FRAGMENT_MAIN_IMAGE,null],[Ye.VERTEX_HEAD,null],[Ye.VERTEX_MAIN_SUPPORT,null]]),this.defines=new Map,this.uniforms=new Map,this.blendModes=new Map,this.extensions=new Set,this.attributes=ai.NONE,this.varyings=new Set,this.uvTransformation=!1,this.readDepth=!1,this.colorSpace=ms}},Vx=class extends Set{constructor(i,e=10){super(),this.l=e,this.exclusive=!1,i!==void 0&&this.set(i)}get layer(){return this.l}set layer(i){const e=this.l;for(const t of this)t.layers.disable(e),t.layers.enable(i);this.l=i}getLayer(){return this.layer}setLayer(i){this.layer=i}isExclusive(){return this.exclusive}setExclusive(i){this.exclusive=i}clear(){const i=this.layer;for(const e of this)e.layers.disable(i);return super.clear()}set(i){this.clear();for(const e of i)this.add(e);return this}indexOf(i){return this.has(i)?0:-1}add(i){return this.exclusive?i.layers.set(this.layer):i.layers.enable(this.layer),super.add(i)}delete(i){return this.has(i)&&i.layers.disable(this.layer),super.delete(i)}toggle(i){let e;return this.has(i)?(this.delete(i),e=!1):(this.add(i),e=!0),e}setVisible(i){for(const e of this)i?e.layers.enable(0):e.layers.disable(0);return this}},kx="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,x+y,opacity);}",Gx="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,y,min(y.a,opacity));}",Wx="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,(x+y)*0.5,opacity);}",Xx="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec3 xHSL=RGBToHSL(x.rgb);vec3 yHSL=RGBToHSL(y.rgb);vec3 z=HSLToRGB(vec3(yHSL.rg,xHSL.b));return vec4(mix(x.rgb,z,opacity),y.a);}",jx="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec4 z=mix(step(0.0,y)*(1.0-min(vec4(1.0),(1.0-x)/y)),vec4(1.0),step(1.0,x));return mix(x,z,opacity);}",Yx="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec4 z=step(0.0,x)*mix(min(vec4(1.0),x/max(1.0-y,1e-9)),vec4(1.0),step(1.0,y));return mix(x,z,opacity);}",qx="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,min(x,y),opacity);}",Kx="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,abs(x-y),opacity);}",Zx="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,x/max(y,1e-12),opacity);}",Jx="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,(x+y-2.0*x*y),opacity);}",Qx="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec4 a=min(x,1.0),b=min(y,1.0);vec4 z=mix(2.0*a*b,1.0-2.0*(1.0-a)*(1.0-b),step(0.5,y));return mix(x,z,opacity);}",$x="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,step(1.0,x+y),opacity);}",e0="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec3 xHSL=RGBToHSL(x.rgb);vec3 yHSL=RGBToHSL(y.rgb);vec3 z=HSLToRGB(vec3(yHSL.r,xHSL.gb));return vec4(mix(x.rgb,z,opacity),y.a);}",t0="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,1.0-y,opacity);}",n0="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,y*(1.0-x),opacity);}",i0="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,max(x,y),opacity);}",r0="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,clamp(y+x-1.0,0.0,1.0),opacity);}",s0="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,min(x+y,1.0),opacity);}",a0="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,clamp(2.0*y+x-1.0,0.0,1.0),opacity);}",o0="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec3 xHSL=RGBToHSL(x.rgb);vec3 yHSL=RGBToHSL(y.rgb);vec3 z=HSLToRGB(vec3(xHSL.rg,yHSL.b));return vec4(mix(x.rgb,z,opacity),y.a);}",l0="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,x*y,opacity);}",c0="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,1.0-abs(1.0-x-y),opacity);}",u0="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,y,opacity);}",h0="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec4 z=mix(2.0*y*x,1.0-2.0*(1.0-y)*(1.0-x),step(0.5,x));return mix(x,z,opacity);}",d0="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec4 y2=2.0*y;vec4 z=mix(mix(y2,x,step(0.5*x,y)),max(vec4(0.0),y2-1.0),step(x,(y2-1.0)));return mix(x,z,opacity);}",f0="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec4 z=mix(min(x*x/max(1.0-y,1e-12),1.0),y,step(1.0,y));return mix(x,z,opacity);}",p0="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec3 xHSL=RGBToHSL(x.rgb);vec3 yHSL=RGBToHSL(y.rgb);vec3 z=HSLToRGB(vec3(xHSL.r,yHSL.g,xHSL.b));return vec4(mix(x.rgb,z,opacity),y.a);}",m0="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,x+y-min(x*y,1.0),opacity);}",g0="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec4 y2=2.0*y;vec4 w=step(0.5,y);vec4 z=mix(x-(1.0-y2)*x*(1.0-x),mix(x+(y2-1.0)*(sqrt(x)-x),x+(y2-1.0)*x*((16.0*x-12.0)*x+3.0),w*(1.0-step(0.25,x))),w);return mix(x,z,opacity);}",v0="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return y;}",x0="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,max(x+y-1.0,0.0),opacity);}",M0="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec4 z=mix(max(1.0-min((1.0-x)/(2.0*y),1.0),0.0),min(x/(2.0*(1.0-y)),1.0),step(0.5,y));return mix(x,z,opacity);}",S0=new Map([[ke.ADD,kx],[ke.ALPHA,Gx],[ke.AVERAGE,Wx],[ke.COLOR,Xx],[ke.COLOR_BURN,jx],[ke.COLOR_DODGE,Yx],[ke.DARKEN,qx],[ke.DIFFERENCE,Kx],[ke.DIVIDE,Zx],[ke.DST,null],[ke.EXCLUSION,Jx],[ke.HARD_LIGHT,Qx],[ke.HARD_MIX,$x],[ke.HUE,e0],[ke.INVERT,t0],[ke.INVERT_RGB,n0],[ke.LIGHTEN,i0],[ke.LINEAR_BURN,r0],[ke.LINEAR_DODGE,s0],[ke.LINEAR_LIGHT,a0],[ke.LUMINOSITY,o0],[ke.MULTIPLY,l0],[ke.NEGATION,c0],[ke.NORMAL,u0],[ke.OVERLAY,h0],[ke.PIN_LIGHT,d0],[ke.REFLECT,f0],[ke.SATURATION,p0],[ke.SCREEN,m0],[ke.SOFT_LIGHT,g0],[ke.SRC,v0],[ke.SUBTRACT,x0],[ke.VIVID_LIGHT,M0]]),T0=class extends fn{constructor(i,e=1){super(),this._blendFunction=i,this.opacity=new V(e)}getOpacity(){return this.opacity.value}setOpacity(i){this.opacity.value=i}get blendFunction(){return this._blendFunction}set blendFunction(i){this._blendFunction=i,this.dispatchEvent({type:"change"})}getBlendFunction(){return this.blendFunction}setBlendFunction(i){this.blendFunction=i}getShaderCode(){return S0.get(this.blendFunction)}},Er=class extends fn{constructor(i,e,{attributes:t=ai.NONE,blendFunction:n=ke.NORMAL,defines:r=new Map,uniforms:s=new Map,extensions:a=null,vertexShader:o=null}={}){super(),this.name=i,this.renderer=null,this.attributes=t,this.fragmentShader=e,this.vertexShader=o,this.defines=r,this.uniforms=s,this.extensions=a,this.blendMode=new T0(n),this.blendMode.addEventListener("change",l=>this.setChanged()),this._inputColorSpace=ms,this._outputColorSpace=uu}get inputColorSpace(){return this._inputColorSpace}set inputColorSpace(i){this._inputColorSpace=i,this.setChanged()}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(i){this._outputColorSpace=i,this.setChanged()}set mainScene(i){}set mainCamera(i){}getName(){return this.name}setRenderer(i){this.renderer=i}getDefines(){return this.defines}getUniforms(){return this.uniforms}getExtensions(){return this.extensions}getBlendMode(){return this.blendMode}getAttributes(){return this.attributes}setAttributes(i){this.attributes=i,this.setChanged()}getFragmentShader(){return this.fragmentShader}setFragmentShader(i){this.fragmentShader=i,this.setChanged()}getVertexShader(){return this.vertexShader}setVertexShader(i){this.vertexShader=i,this.setChanged()}setChanged(){this.dispatchEvent({type:"change"})}setDepthTexture(i,e=Ki){}update(i,e,t){}setSize(i,e){}initialize(i,e,t){}dispose(){for(const i of Object.keys(this)){const e=this[i];(e instanceof it||e instanceof Xt||e instanceof ot||e instanceof ht)&&this[i].dispose()}}},_0=`#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D map;
#else
uniform lowp sampler2D map;
#endif
uniform float intensity;void mainImage(const in vec4 inputColor,const in vec2 uv,out vec4 outputColor){outputColor=texture2D(map,uv)*intensity;}`,ic=class extends Er{constructor({blendFunction:i=ke.SCREEN,luminanceThreshold:e=.9,luminanceSmoothing:t=.025,mipmapBlur:n=!1,intensity:r=1,radius:s=.85,levels:a=8,kernelSize:o=Ya.LARGE,resolutionScale:l=.5,width:c=Wt.AUTO_SIZE,height:u=Wt.AUTO_SIZE,resolutionX:h=c,resolutionY:d=u}={}){super("BloomEffect",_0,{blendFunction:i,uniforms:new Map([["map",new V(null)],["intensity",new V(r)]])}),this.renderTarget=new it(1,1,{depthBuffer:!1}),this.renderTarget.texture.name="Bloom.Target",this.blurPass=new Dx({kernelSize:o}),this.luminancePass=new Ux({colorOutput:!0}),this.luminanceMaterial.threshold=e,this.luminanceMaterial.smoothing=t,this.mipmapBlurPass=new Nx,this.mipmapBlurPass.enabled=n,this.mipmapBlurPass.radius=s,this.mipmapBlurPass.levels=a,this.uniforms.get("map").value=n?this.mipmapBlurPass.texture:this.renderTarget.texture;const m=this.resolution=new Wt(this,h,d,l);m.addEventListener("change",g=>this.setSize(m.baseWidth,m.baseHeight))}get texture(){return this.mipmapBlurPass.enabled?this.mipmapBlurPass.texture:this.renderTarget.texture}getTexture(){return this.texture}getResolution(){return this.resolution}getBlurPass(){return this.blurPass}getLuminancePass(){return this.luminancePass}get luminanceMaterial(){return this.luminancePass.fullscreenMaterial}getLuminanceMaterial(){return this.luminancePass.fullscreenMaterial}get width(){return this.resolution.width}set width(i){this.resolution.preferredWidth=i}get height(){return this.resolution.height}set height(i){this.resolution.preferredHeight=i}get dithering(){return this.blurPass.dithering}set dithering(i){this.blurPass.dithering=i}get kernelSize(){return this.blurPass.kernelSize}set kernelSize(i){this.blurPass.kernelSize=i}get distinction(){return console.warn(this.name,"distinction was removed"),1}set distinction(i){console.warn(this.name,"distinction was removed")}get intensity(){return this.uniforms.get("intensity").value}set intensity(i){this.uniforms.get("intensity").value=i}getIntensity(){return this.intensity}setIntensity(i){this.intensity=i}getResolutionScale(){return this.resolution.scale}setResolutionScale(i){this.resolution.scale=i}update(i,e,t){const n=this.renderTarget,r=this.luminancePass;r.enabled?(r.render(i,e),this.mipmapBlurPass.enabled?this.mipmapBlurPass.render(i,r.renderTarget):this.blurPass.render(i,r.renderTarget,n)):this.mipmapBlurPass.enabled?this.mipmapBlurPass.render(i,e):this.blurPass.render(i,e,n)}setSize(i,e){const t=this.resolution;t.setBaseSize(i,e),this.renderTarget.setSize(t.width,t.height),this.blurPass.resolution.copy(t),this.luminancePass.setSize(i,e),this.mipmapBlurPass.setSize(i,e)}initialize(i,e,t){this.blurPass.initialize(i,e,t),this.luminancePass.initialize(i,e,t),this.mipmapBlurPass.initialize(i,e,t),t!==void 0&&(this.renderTarget.texture.type=t,Yi(i)===Et&&kn(this.renderTarget.texture,Et))}};new C;new ge;new Te;new C;new C;const gs=i=>{const e=[i],t=[];for(;e.length!==0;){const n=e.shift();n.material&&t.push(n);for(const r of n.children)r.visible&&e.push(r)}return t},Ui=(i,e,t,n,r)=>{r?e[t]!==i[t]&&(i[t]=e[t],i.uniforms[t].value=e[t],e[t]?(i.defines[n]="",n==="USE_NORMALMAP"&&(i.defines.TANGENTSPACE_NORMALMAP="")):delete i.defines[n],i.needsUpdate=!0):i[t]!==void 0&&(i[t]=void 0,i.uniforms[t].value=void 0,delete i.defines[n],i.needsUpdate=!0)},y0=i=>{const{width:e,height:t}=i.image;return Math.floor(Math.log2(Math.max(e,t)))+1},gu=i=>{let e=i.material.uniforms.prevBoneTexture.value;if(e&&e.image.width===i.skeleton.boneTexture.width)e=i.material.uniforms.prevBoneTexture.value,e.image.data.set(i.skeleton.boneTexture.image.data);else{var t;(t=e)==null||t.dispose();const n=i.skeleton.boneTexture.image.data.slice(),r=i.skeleton.boneTexture.image.width;e=new si(n,r,r,Ut,$e),i.material.uniforms.prevBoneTexture.value=e,e.needsUpdate=!0}},E0=(i,e)=>{var t;(t=i.skeleton)!=null&&t.boneTexture&&(i.material.uniforms.boneTexture.value=i.skeleton.boneTexture,"USE_SKINNING"in i.material.defines||(i.material.defines.USE_SKINNING="",i.material.defines.BONE_TEXTURE="",i.material.needsUpdate=!0)),i.modelViewMatrix.multiplyMatrices(e.matrixWorldInverse,i.matrixWorld),i.material.uniforms.velocityMatrix.value.multiplyMatrices(e.projectionMatrix,i.modelViewMatrix)},b0=(i,e)=>{var t;i.material.uniforms.prevVelocityMatrix.value.multiplyMatrices(e.projectionMatrix,i.modelViewMatrix),(t=i.skeleton)!=null&&t.boneTexture&&gu(i)},A0=()=>{if(Ee.envmap_physical_pars_fragment.includes("iblRadianceDisabled")||(Ee.envmap_physical_pars_fragment=Ee.envmap_physical_pars_fragment.replace("vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {",`
		uniform bool iblRadianceDisabled;
	
		vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		 if(iblRadianceDisabled) return vec3(0.);
		`)),"iblRadianceDisabled"in Lt.physical.uniforms)return Lt.physical.uniforms.iblRadianceDisabled;const i={value:!1};Lt.physical.uniforms.iblRadianceDisabled=i;const{clone:e}=Wi;return Wi.clone=t=>{const n=e(t);return"iblRadianceDisabled"in t&&(n.iblRadianceDisabled=i),n},i},w0=()=>{if(Ee.envmap_physical_pars_fragment.includes("iblIrradianceDisabled")||(Ee.envmap_physical_pars_fragment=Ee.envmap_physical_pars_fragment.replace("vec3 getIBLIrradiance( const in vec3 normal ) {",`
			uniform bool iblIrradianceDisabled;
		
			vec3 getIBLIrradiance( const in vec3 normal ) {
			 if(iblIrradianceDisabled) return vec3(0.);
			`)),"iblIrradianceDisabled"in Lt.physical.uniforms)return Lt.physical.uniforms.iblIrradianceDisabled;const i={value:!1};Lt.physical.uniforms.iblIrradianceDisabled=i;const{clone:e}=Wi;return Wi.clone=t=>{const n=e(t);return"iblIrradianceDisabled"in t&&(n.iblIrradianceDisabled=i),n},i},R0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function qa(i){return i.replace(R0,P0)}function P0(i,e,t,n){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}const vu=i=>{var e;return(e=i.material.fragmentShader)==null?void 0:e.includes("float intersection2 = diskIntersectWithBackFaceCulling( camPos, p, h, vec3( 0.0, 1.0, 0.0 ), radius );")},Ka=(i,e=i.material)=>e.visible&&e.depthWrite&&e.depthTest&&(!e.transparent||e.opacity>0)&&!vu(i),C0=["vertexTangent","vertexColors","vertexAlphas","vertexUvs","uvsVertexOnly","supportsVertexTextures","instancing","instancingColor","side","flatShading","skinning","doubleSided","flipSided"],xu=(i,e)=>{for(const t of C0)e[t]=i[t]};var di=`#define GLSLIFY 1
varying vec2 vUv;void main(){vUv=position.xy*0.5+0.5;gl_Position=vec4(position.xy,1.0,1.0);}`;class L0 extends ht{constructor(e=1){super("CopyPass"),this.needsSwap=!1,this.renderTarget=new ci(1,1,1,{depthBuffer:!1}),this.setTextureCount(e)}setTextureCount(e){var t;let n="",r="";for(let s=0;s<e;s++)n+=`
				uniform sampler2D inputTexture${s};
				layout(location = ${s}) out vec4 gOutput${s};
			`,r+=`gOutput${s} = textureLod(inputTexture${s}, vUv, 0.);`;(t=this.fullscreenMaterial)==null||t.dispose(),this.fullscreenMaterial=new et({fragmentShader:`
            varying vec2 vUv;
			
			${n}

            void main() {
				${r}
            }
            `,vertexShader:di,glslVersion:Wn,blending:ut,depthWrite:!1,depthTest:!1,toneMapped:!1});for(let s=0;s<e;s++)if(this.fullscreenMaterial.uniforms["inputTexture"+s]=new V(null),s>=this.renderTarget.texture.length){const a=this.renderTarget.texture[0].clone();a.isRenderTargetTexture=!0,this.renderTarget.texture.push(a)}}setSize(e,t){this.renderTarget.setSize(e,t)}render(e){e.setRenderTarget(this.renderTarget),e.render(this.scene,this.camera)}}var D0=`#define GLSLIFY 1
varying vec2 vUv;uniform sampler2D velocityTexture;uniform sampler2D depthTexture;uniform sampler2D lastDepthTexture;uniform float blend;uniform float neighborhoodClampIntensity;uniform bool constantBlend;uniform bool fullAccumulate;uniform vec2 invTexSize;uniform mat4 projectionMatrix;uniform mat4 projectionMatrixInverse;uniform mat4 cameraMatrixWorld;uniform vec3 cameraPos;uniform mat4 prevViewMatrix;uniform mat4 prevCameraMatrixWorld;uniform mat4 prevProjectionMatrix;uniform mat4 prevProjectionMatrixInverse;uniform bool reset;uniform float delta;
#define EPSILON 0.00001
#include <packing>
#include <reproject>
void main(){getDepthAndDilatedUVOffset(depthTexture,vUv,depth,dilatedDepth,depthTexel);if(dot(depthTexel.rgb,depthTexel.rgb)==0.0){
#ifdef neighborhoodClamp
#pragma unroll_loop_start
for(int i=0;i<textureCount;i++){gOutput[i]=textureLod(inputTexture[i],vUv,0.0);}
#pragma unroll_loop_end
#else
discard;
#endif
return;}vec2 dilatedUv=vUv+dilatedUvOffset;edgeStrength=computeEdgeStrength(depth,invTexSize);vec4 inputTexel[textureCount];vec4 accumulatedTexel[textureCount];bool textureSampledThisFrame[textureCount];
#pragma unroll_loop_start
for(int i=0;i<textureCount;i++){inputTexel[i]=textureLod(inputTexture[i],vUv,0.0);doColorTransform[i]=luminance(inputTexel[i].rgb)>0.0;textureSampledThisFrame[i]=inputTexel[i].r>=0.;if(textureSampledThisFrame[i]){transformColor(inputTexel[i].rgb);}else{inputTexel[i].rgb=vec3(0.0);}texIndex++;}
#pragma unroll_loop_end
texIndex=0;velocityTexel=textureLod(velocityTexture,vUv,0.0);didMove=dot(velocityTexel.xy,velocityTexel.xy)>0.000000001;
#ifdef dilation
vec2 octahedronEncodedNormal=textureLod(velocityTexture,dilatedUv,0.0).ba;
#else
vec2 octahedronEncodedNormal=velocityTexel.ba;
#endif
vec3 worldNormal=Decode(octahedronEncodedNormal);vec3 worldPos=screenSpaceToWorldSpace(vUv,depth,cameraMatrixWorld,projectionMatrixInverse);vec2 reprojectedUvDiffuse=vec2(-10.0);vec2 reprojectedUvSpecular[textureCount];vec2 reprojectedUv;bool reprojectHitPoint;
#pragma unroll_loop_start
for(int i=0;i<textureCount;i++){reprojectHitPoint=reprojectSpecular[i]&&inputTexel[i].a>0.0;if(reprojectHitPoint){reprojectedUvSpecular[i]=getReprojectedUV(depth,worldPos,worldNormal,inputTexel[i].a);}else{reprojectedUvSpecular[i]=vec2(-1.0);}if(reprojectedUvDiffuse.x==-10.0&&reprojectedUvSpecular[i].x<0.0){reprojectedUvDiffuse=getReprojectedUV(depth,worldPos,worldNormal,0.0);}reprojectedUv=reprojectedUvSpecular[i].x>=0.0 ? reprojectedUvSpecular[i]: reprojectedUvDiffuse;if(reprojectedUv.x<0.0){accumulatedTexel[i]=vec4(inputTexel[i].rgb,0.0);}else{accumulatedTexel[i]=sampleReprojectedTexture(accumulatedTexture[i],reprojectedUv);transformColor(accumulatedTexel[i].rgb);if(textureSampledThisFrame[i]){accumulatedTexel[i].a++;if(neighborhoodClamp[i]){vec3 clampedColor=accumulatedTexel[i].rgb;clampNeighborhood(inputTexture[i],clampedColor,inputTexel[i].rgb);accumulatedTexel[i].rgb=mix(accumulatedTexel[i].rgb,clampedColor,neighborhoodClampIntensity);}}else{inputTexel[i].rgb=accumulatedTexel[i].rgb;}}texIndex++;}
#pragma unroll_loop_end
texIndex=0;float m=1.-delta/(1./60.);float fpsAdjustedBlend=blend+max(0.,(1.-blend)*m);float maxValue=(fullAccumulate&&!didMove)? 1.0 : fpsAdjustedBlend;vec3 outputColor;float temporalReprojectMix;
#pragma unroll_loop_start
for(int i=0;i<textureCount;i++){if(constantBlend){temporalReprojectMix=accumulatedTexel[i].a==0.0 ? 0.0 : fpsAdjustedBlend;}else{temporalReprojectMix=fpsAdjustedBlend;if(reset)accumulatedTexel[i].a=0.0;temporalReprojectMix=min(1.-1./(accumulatedTexel[i].a+1.0),maxValue);}outputColor=mix(inputTexel[i].rgb,accumulatedTexel[i].rgb,temporalReprojectMix);undoColorTransform(outputColor);gOutput[i]=vec4(outputColor,accumulatedTexel[i].a);texIndex++;}
#pragma unroll_loop_end
#ifdef useTemporalReprojectCustomComposeShader
temporalReprojectCustomComposeShader
#endif
}`,U0=`#define GLSLIFY 1
vec4 velocityTexel;float dilatedDepth;vec2 dilatedUvOffset;int texIndex;bool didMove;vec4 depthTexel;float depth;float edgeStrength;
#define luminance(a) dot(vec3(0.2125, 0.7154, 0.0721), a)
vec3 screenSpaceToWorldSpace(const vec2 uv,const float depth,mat4 curMatrixWorld,const mat4 projMatrixInverse){vec4 ndc=vec4((uv.x-0.5)*2.0,(uv.y-0.5)*2.0,(depth-0.5)*2.0,1.0);vec4 clip=projMatrixInverse*ndc;vec4 view=curMatrixWorld*(clip/clip.w);return view.xyz;}vec2 viewSpaceToScreenSpace(const vec3 position,const mat4 projMatrix){vec4 projectedCoord=projMatrix*vec4(position,1.0);projectedCoord.xy/=projectedCoord.w;projectedCoord.xy=projectedCoord.xy*0.5+0.5;return projectedCoord.xy;}bool doColorTransform[textureCount];
#ifdef logTransform
void transformColor(inout vec3 color){if(!doColorTransform[texIndex])return;float lum=luminance(color);float diff=min(1.0,lum-0.99);if(diff>0.0){color=vec3(diff*0.1);return;}color=log(max(color,vec3(EPSILON)));}void undoColorTransform(inout vec3 color){if(!doColorTransform[texIndex])return;color=exp(color);}
#else
#define transformColor
#define undoColorTransform
#endif
void getNeighborhoodAABB(const sampler2D tex,inout vec3 minNeighborColor,inout vec3 maxNeighborColor){for(int x=-neighborhoodClampRadius;x<=neighborhoodClampRadius;x++){for(int y=-neighborhoodClampRadius;y<=neighborhoodClampRadius;y++){if(x!=0||y!=0){vec2 offset=vec2(x,y)*invTexSize;vec2 neighborUv=vUv+offset;vec4 neighborTexel=textureLod(tex,neighborUv,0.0);transformColor(neighborTexel.rgb);minNeighborColor=min(neighborTexel.rgb,minNeighborColor);maxNeighborColor=max(neighborTexel.rgb,maxNeighborColor);}}}}void clampNeighborhood(const sampler2D tex,inout vec3 color,const vec3 inputColor){vec3 minNeighborColor=inputColor;vec3 maxNeighborColor=inputColor;getNeighborhoodAABB(tex,minNeighborColor,maxNeighborColor);color=clamp(color,minNeighborColor,maxNeighborColor);}
#ifdef dilation
void getDilatedDepthUVOffset(const sampler2D tex,const vec2 centerUv,out float depth,out float dilatedDepth,out vec4 closestDepthTexel){float closestDepth=0.0;for(int x=-1;x<=1;x++){for(int y=-1;y<=1;y++){vec2 offset=vec2(x,y)*invTexSize;vec2 neighborUv=centerUv+offset;vec4 neighborDepthTexel=textureLod(tex,neighborUv,0.0);float neighborDepth=unpackRGBAToDepth(neighborDepthTexel);if(x==0&&y==0)depth=neighborDepth;if(neighborDepth>closestDepth){closestDepth=neighborDepth;closestDepthTexel=neighborDepthTexel;dilatedUvOffset=offset;}}}dilatedDepth=closestDepth;}
#endif
void getDepthAndDilatedUVOffset(sampler2D depthTex,vec2 uv,out float depth,out float dilatedDepth,out vec4 depthTexel){
#ifdef dilation
getDilatedDepthUVOffset(depthTex,uv,depth,dilatedDepth,depthTexel);
#else
depthTexel=textureLod(depthTex,uv,0.);depth=unpackRGBAToDepth(depthTexel);dilatedDepth=depth;
#endif
}bool planeDistanceDisocclusionCheck(const vec3 worldPos,const vec3 lastWorldPos,const vec3 worldNormal,const float worldDistFactor){if(abs(dot(worldNormal,worldPos))==0.0)return false;vec3 toCurrent=worldPos-lastWorldPos;float distToPlane=abs(dot(toCurrent,worldNormal));return distToPlane>depthDistance*worldDistFactor;}bool worldDistanceDisocclusionCheck(const vec3 worldPos,const vec3 lastWorldPos,const float worldDistFactor){return distance(worldPos,lastWorldPos)>worldDistance*worldDistFactor;}bool validateReprojectedUV(const vec2 reprojectedUv,const vec3 worldPos,const vec3 worldNormal){if(reprojectedUv.x>1.0||reprojectedUv.x<0.0||reprojectedUv.y>1.0||reprojectedUv.y<0.0)return false;vec3 dilatedWorldPos=worldPos;vec3 lastWorldPos;float dilatedLastDepth,lastDepth;vec4 lastDepthTexel;vec2 dilatedReprojectedUv;
#ifdef dilation
dilatedWorldPos=screenSpaceToWorldSpace(vUv+dilatedUvOffset,dilatedDepth,cameraMatrixWorld,projectionMatrixInverse);getDepthAndDilatedUVOffset(lastDepthTexture,reprojectedUv,lastDepth,dilatedLastDepth,lastDepthTexel);dilatedReprojectedUv=reprojectedUv+dilatedUvOffset;
#else
lastDepthTexel=textureLod(lastDepthTexture,reprojectedUv,0.);lastDepth=unpackRGBAToDepth(lastDepthTexel);dilatedLastDepth=lastDepth;dilatedReprojectedUv=reprojectedUv;
#endif
lastWorldPos=screenSpaceToWorldSpace(dilatedReprojectedUv,dilatedLastDepth,prevCameraMatrixWorld,prevProjectionMatrixInverse);float worldDistFactor=clamp((50.0+distance(dilatedWorldPos,cameraPos))/100.,0.25,1.);if(worldDistanceDisocclusionCheck(dilatedWorldPos,lastWorldPos,worldDistFactor))return false;return!planeDistanceDisocclusionCheck(dilatedWorldPos,lastWorldPos,worldNormal,worldDistFactor);}vec2 reprojectHitPoint(const vec3 rayOrig,const float rayLength,const float depth){vec3 cameraRay=normalize(rayOrig-cameraPos);float cameraRayLength=distance(rayOrig,cameraPos);vec3 parallaxHitPoint=cameraPos+cameraRay*(cameraRayLength+rayLength);vec4 reprojectedParallaxHitPoint=prevViewMatrix*vec4(parallaxHitPoint,1.0);vec2 hitPointUv=viewSpaceToScreenSpace(reprojectedParallaxHitPoint.xyz,prevProjectionMatrix);return hitPointUv;}vec2 getReprojectedUV(const float depth,const vec3 worldPos,const vec3 worldNormal,const float rayLength){if(rayLength!=0.0){vec2 reprojectedUv=reprojectHitPoint(worldPos,rayLength,depth);if(validateReprojectedUV(reprojectedUv,worldPos,worldNormal)){return reprojectedUv;}return vec2(-1.);}vec2 reprojectedUv=vUv-velocityTexel.rg;if(validateReprojectedUV(reprojectedUv,worldPos,worldNormal)){return reprojectedUv;}return vec2(-1.);}vec4 SampleTextureCatmullRom(const sampler2D tex,const vec2 uv,const vec2 texSize){vec2 samplePos=uv*texSize;vec2 texPos1=floor(samplePos-0.5f)+0.5f;vec2 f=samplePos-texPos1;vec2 w0=f*(-0.5f+f*(1.0f-0.5f*f));vec2 w1=1.0f+f*f*(-2.5f+1.5f*f);vec2 w2=f*(0.5f+f*(2.0f-1.5f*f));vec2 w3=f*f*(-0.5f+0.5f*f);vec2 w12=w1+w2;vec2 offset12=w2/(w1+w2);vec2 texPos0=texPos1-1.;vec2 texPos3=texPos1+2.;vec2 texPos12=texPos1+offset12;texPos0/=texSize;texPos3/=texSize;texPos12/=texSize;vec4 result=vec4(0.0);result+=textureLod(tex,vec2(texPos0.x,texPos0.y),0.0f)*w0.x*w0.y;result+=textureLod(tex,vec2(texPos12.x,texPos0.y),0.0f)*w12.x*w0.y;result+=textureLod(tex,vec2(texPos3.x,texPos0.y),0.0f)*w3.x*w0.y;result+=textureLod(tex,vec2(texPos0.x,texPos12.y),0.0f)*w0.x*w12.y;result+=textureLod(tex,vec2(texPos12.x,texPos12.y),0.0f)*w12.x*w12.y;result+=textureLod(tex,vec2(texPos3.x,texPos12.y),0.0f)*w3.x*w12.y;result+=textureLod(tex,vec2(texPos0.x,texPos3.y),0.0f)*w0.x*w3.y;result+=textureLod(tex,vec2(texPos12.x,texPos3.y),0.0f)*w12.x*w3.y;result+=textureLod(tex,vec2(texPos3.x,texPos3.y),0.0f)*w3.x*w3.y;result=max(result,vec4(0.));return result;}vec2 sampleBlocky(vec2 p){vec2 d=vec2(dFdx(p.x),dFdy(p.y))/invTexSize;p/=invTexSize;vec2 fA=p-0.5*d,iA=floor(fA);vec2 fB=p+0.5*d,iB=floor(fB);return(iA+(iB-iA)*(fB-iB)/d+0.5)*invTexSize;}float computeEdgeStrength(float unpackedDepth,vec2 texelSize){float depthX=unpackRGBAToDepth(textureLod(depthTexture,vUv+vec2(texelSize.x,0.0),0.0))-unpackRGBAToDepth(textureLod(depthTexture,vUv-vec2(texelSize.x,0.0),0.0));float depthY=unpackRGBAToDepth(textureLod(depthTexture,vUv+vec2(0.0,texelSize.y),0.0))-unpackRGBAToDepth(textureLod(depthTexture,vUv-vec2(0.0,texelSize.y),0.0));float gradientMagnitude=sqrt(depthX*depthX+depthY*depthY);float edgeStrength=min(100000.*gradientMagnitude/(unpackedDepth+0.001),1.);return edgeStrength*edgeStrength;}float computeEdgeStrengthFast(float unpackedDepth){float depthX=dFdx(unpackedDepth);float depthY=dFdy(unpackedDepth);float edgeStrength=depthX*depthX+depthY*depthY;return min(1.,pow(pow(edgeStrength,0.25)*500.,4.));}vec4 sampleReprojectedTexture(const sampler2D tex,const vec2 reprojectedUv){vec4 catmull=SampleTextureCatmullRom(tex,reprojectedUv,1.0/invTexSize);vec4 blocky=SampleTextureCatmullRom(tex,sampleBlocky(reprojectedUv),1.0/invTexSize);vec4 reprojectedTexel=mix(catmull,blocky,edgeStrength);reprojectedTexel.a=min(catmull.a,blocky.a);return reprojectedTexel;}vec2 OctWrap(vec2 v){vec2 w=1.0-abs(v.yx);if(v.x<0.0)w.x=-w.x;if(v.y<0.0)w.y=-w.y;return w;}vec2 Encode(vec3 n){n/=(abs(n.x)+abs(n.y)+abs(n.z));n.xy=n.z>0.0 ? n.xy : OctWrap(n.xy);n.xy=n.xy*0.5+0.5;return n.xy;}vec3 Decode(vec2 f){f=f*2.0-1.0;vec3 n=vec3(f.x,f.y,1.0-abs(f.x)-abs(f.y));float t=max(-n.z,0.0);n.x+=n.x>=0.0 ?-t : t;n.y+=n.y>=0.0 ?-t : t;return normalize(n);}`;class I0 extends et{constructor(e=1,t=""){let n=D0.replace("#include <reproject>",U0);typeof t=="string"&&(n=n.replace("temporalReprojectCustomComposeShader",t));let r="";for(let l=0;l<e;l++)r+=`
				uniform sampler2D inputTexture${l};
				uniform sampler2D accumulatedTexture${l};

				layout(location = ${l}) out vec4 gOutput${l};
			`;n=r+n.replaceAll("textureCount",e),n=qa(n);const s=n.matchAll(/inputTexture\[\s*[0-9]+\s*]/g);for(const[l]of s){const c=l.replace(/[^0-9]/g,"");n=n.replace(l,"inputTexture"+c)}const a=n.matchAll(/accumulatedTexture\[\s*[0-9]+\s*]/g);for(const[l]of a){const c=l.replace(/[^0-9]/g,"");n=n.replace(l,"accumulatedTexture"+c)}const o=n.matchAll(/gOutput\[\s*[0-9]+\s*]/g);for(const[l]of o){const c=l.replace(/[^0-9]/g,"");n=n.replace(l,"gOutput"+c)}super({type:"TemporalReprojectMaterial",uniforms:{velocityTexture:new V(null),depthTexture:new V(null),lastDepthTexture:new V(null),blend:new V(0),neighborhoodClampIntensity:new V(0),constantBlend:new V(!1),fullAccumulate:new V(!1),reset:new V(!1),delta:new V(0),invTexSize:new V(new se),projectionMatrix:new V(new ge),projectionMatrixInverse:new V(new ge),cameraMatrixWorld:new V(new ge),viewMatrix:new V(new ge),prevViewMatrix:new V(new ge),prevCameraMatrixWorld:new V(new ge),prevProjectionMatrix:new V(new ge),prevProjectionMatrixInverse:new V(new ge),cameraPos:new V(new C)},vertexShader:di,fragmentShader:n,blending:ut,depthWrite:!1,depthTest:!1,toneMapped:!1,glslVersion:Wn});for(let l=0;l<e;l++)this.uniforms["inputTexture"+l]=new V(null),this.uniforms["accumulatedTexture"+l]=new V(null);typeof t=="string"&&(this.defines.useTemporalReprojectCustomComposeShader="")}}const Ea=1.324717957244746,N0=1/Ea,F0=1/(Ea*Ea),rc=1.1127756842787055,O0=i=>{const e=[];for(let t=0;t<i;t++)e.push([(rc+N0*t)%1,(rc+F0*t)%1]);return e},sc={blend:.9,dilation:!1,constantBlend:!1,fullAccumulate:!1,neighborhoodClamp:!1,neighborhoodClampRadius:1,neighborhoodClampIntensity:1,logTransform:!1,depthDistance:.25,worldDistance:.375,reprojectSpecular:!1,temporalReprojectCustomComposeShader:null,renderTarget:null},ac=new ge,oc=new ge;class Mu extends ht{constructor(e,t,n,r=1,s=sc){super("TemporalReprojectPass"),this.needsSwap=!1,this.clock=new vv,this.r2Sequence=[],this.pointsIndex=0,this.lastCameraTransform={position:new C,quaternion:new an},this._scene=e,this._camera=t,this.textureCount=r,s={...sc,...s},this.renderTarget=new ci(1,1,r,{minFilter:Be,magFilter:Be,type:bt,depthBuffer:!1}),this.renderTarget.texture.map((a,o)=>a.name="TemporalReprojectPass.accumulatedTexture"+o),this.fullscreenMaterial=new I0(r,s.temporalReprojectCustomComposeShader),this.fullscreenMaterial.defines.textureCount=r,s.dilation&&(this.fullscreenMaterial.defines.dilation=""),s.neighborhoodClamp&&(this.fullscreenMaterial.defines.neighborhoodClamp=""),s.logTransform&&(this.fullscreenMaterial.defines.logTransform=""),this.fullscreenMaterial.defines.neighborhoodClampRadius=parseInt(s.neighborhoodClampRadius),this.fullscreenMaterial.defines.depthDistance=s.depthDistance.toPrecision(5),this.fullscreenMaterial.defines.worldDistance=s.worldDistance.toPrecision(5),this.fullscreenMaterial.uniforms.blend.value=s.blend,this.fullscreenMaterial.uniforms.constantBlend.value=s.constantBlend,this.fullscreenMaterial.uniforms.fullAccumulate.value=s.fullAccumulate,this.fullscreenMaterial.uniforms.neighborhoodClampIntensity.value=s.neighborhoodClampIntensity,this.fullscreenMaterial.uniforms.projectionMatrix.value=t.projectionMatrix.clone(),this.fullscreenMaterial.uniforms.projectionMatrixInverse.value=t.projectionMatrixInverse.clone(),this.fullscreenMaterial.uniforms.cameraMatrixWorld.value=t.matrixWorld,this.fullscreenMaterial.uniforms.viewMatrix.value=t.matrixWorldInverse,this.fullscreenMaterial.uniforms.cameraPos.value=t.position,this.fullscreenMaterial.uniforms.prevViewMatrix.value=t.matrixWorldInverse.clone(),this.fullscreenMaterial.uniforms.prevCameraMatrixWorld.value=t.matrixWorld.clone(),this.fullscreenMaterial.uniforms.prevProjectionMatrix.value=t.projectionMatrix.clone(),this.fullscreenMaterial.uniforms.prevProjectionMatrixInverse.value=t.projectionMatrixInverse.clone(),this.copyPass=new L0(r);for(let a=0;a<r;a++){const o=this.copyPass.renderTarget.texture[a];o.type=bt,o.minFilter=Be,o.magFilter=Be,o.needsUpdate=!0}this.fullscreenMaterial.uniforms.velocityTexture.value=n.texture,this.fullscreenMaterial.uniforms.depthTexture.value=n.depthTexture;for(const a of["reprojectSpecular","neighborhoodClamp"]){let o=s[a];typeof o!="array"&&(o=Array(r).fill(o)),this.fullscreenMaterial.defines[a]=`bool[](${o.join(", ")})`}this.options=s,this.velocityDepthNormalPass=n}setTextures(e){Array.isArray(e)||(e=[e]);for(let t=0;t<e.length;t++){const n=e[t];this.fullscreenMaterial.uniforms["inputTexture"+t]=new V(n)}}dispose(){super.dispose(),this.renderTarget.dispose(),this.copyPass.dispose(),this.fullscreenMaterial.dispose()}setSize(e,t){this.renderTarget.setSize(e,t),this.copyPass.setSize(e,t),this.fullscreenMaterial.uniforms.invTexSize.value.set(1/e,1/t)}get texture(){return this.renderTarget.texture[0]}reset(){this.fullscreenMaterial.uniforms.reset.value=!0}render(e){const t=Math.min(.1,this.clock.getDelta());this.fullscreenMaterial.uniforms.delta.value=t,ac.copy(this._camera.projectionMatrix),oc.copy(this._camera.projectionMatrixInverse),this._camera.view&&(this._camera.view.enabled=!1),this._camera.updateProjectionMatrix(),this.fullscreenMaterial.uniforms.projectionMatrix.value.copy(this._camera.projectionMatrix),this.fullscreenMaterial.uniforms.projectionMatrixInverse.value.copy(this._camera.projectionMatrixInverse),this.fullscreenMaterial.uniforms.lastDepthTexture.value=this.velocityDepthNormalPass.lastDepthTexture,this._camera.view&&(this._camera.view.enabled=!0),this._camera.projectionMatrix.copy(ac),this._camera.projectionMatrixInverse.copy(oc),e.setRenderTarget(this.renderTarget),e.render(this.scene,this.camera),this.fullscreenMaterial.uniforms.reset.value=!1;for(let n=0;n<this.textureCount;n++)this.copyPass.fullscreenMaterial.uniforms["inputTexture"+n].value=this.renderTarget.texture[n],this.fullscreenMaterial.uniforms["accumulatedTexture"+n].value=this.copyPass.renderTarget.texture[n];this.copyPass.render(e),this.fullscreenMaterial.uniforms.prevCameraMatrixWorld.value.copy(this._camera.matrixWorld),this.fullscreenMaterial.uniforms.prevViewMatrix.value.copy(this._camera.matrixWorldInverse),this.fullscreenMaterial.uniforms.prevProjectionMatrix.value.copy(this.fullscreenMaterial.uniforms.projectionMatrix.value),this.fullscreenMaterial.uniforms.prevProjectionMatrixInverse.value.copy(this.fullscreenMaterial.uniforms.projectionMatrixInverse.value)}jitter(e=1){this.unjitter(),this.r2Sequence.length===0&&(this.r2Sequence=O0(256).map(([a,o])=>[a-.5,o-.5])),this.pointsIndex=(this.pointsIndex+1)%this.r2Sequence.length;const[t,n]=this.r2Sequence[this.pointsIndex],{width:r,height:s}=this.renderTarget;this._camera.setViewOffset&&this._camera.setViewOffset(r,s,t*e,n*e,r,s)}unjitter(){this._camera.clearViewOffset&&this._camera.clearViewOffset()}}var B0=`#define GLSLIFY 1
uniform sampler2D inputTexture;void mainImage(const in vec4 inputColor,const in vec2 uv,out vec4 outputColor){vec4 accumulatedTexel=textureLod(inputTexture,vUv,0.);outputColor=vec4(accumulatedTexel.rgb,1.);}`;const ba={blend:.8,constantBlend:!0,dilation:!0,logTransform:!1,neighborhoodClampRadius:2,depthDistance:10,worldDistance:5,neighborhoodClamp:!0};class Za extends Er{constructor(e,t,n,r=ba){super("TRAAEffect",B0,{type:"FinalTRAAEffectMaterial",uniforms:new Map([["inputTexture",new V(null)]])}),this._scene=e,this._camera=t,r={...ba,...r},this.temporalReprojectPass=new Mu(e,t,n,1,r),this.uniforms.get("inputTexture").value=this.temporalReprojectPass.texture,this.setSize(r.width,r.height)}setSize(e,t){this.temporalReprojectPass.setSize(e,t)}dispose(){super.dispose(),this.temporalReprojectPass.dispose()}update(e,t){this.temporalReprojectPass.unjitter(),this.unjitteredProjectionMatrix=this._camera.projectionMatrix.clone(),this._camera.projectionMatrix.copy(this.unjitteredProjectionMatrix);const n=gs(this._scene).filter(r=>vu(r));for(const r of n){const s=e.properties.get(r.material);if(!(s!=null&&s.programs))continue;const a=Array.from(s.programs.values())[0].getUniforms();if(!a._patchedProjectionMatrix){const o=a.setValue.bind(a);a._oldSetValue=o,a.setValue=(l,c,u,...h)=>{c==="projectionMatrix"&&(u=this.unjitteredProjectionMatrix),o(l,c,u,...h)},a._patchedProjectionMatrix=!0}cancelAnimationFrame(a._destroyPatchRAF),cancelAnimationFrame(a._destroyPatchRAF2),a._destroyPatchRAF=requestAnimationFrame(()=>{a._destroyPatchRAF2=requestAnimationFrame(()=>{a.setValue=a._oldSetValue,delete a._oldSetValue,delete a._patchedProjectionMatrix})})}this.temporalReprojectPass.fullscreenMaterial.uniforms.inputTexture0.value=t.texture,this.temporalReprojectPass.jitter(),this.temporalReprojectPass.render(e)}}Za.DefaultOptions=ba;var z0=`#define GLSLIFY 1
varying vec2 vUv;uniform sampler2D depthTexture;uniform sampler2D normalTexture;uniform sampler2D momentTexture;uniform vec2 invTexSize;uniform bool horizontal;uniform bool blurHorizontal;uniform float denoise[textureCount];uniform float depthPhi;uniform float normalPhi;uniform float roughnessPhi;uniform float denoiseKernel;uniform float stepSize;uniform mat4 projectionMatrixInverse;uniform mat4 projectionMatrix;uniform mat4 cameraMatrixWorld;uniform bool isFirstIteration;uniform bool isLastIteration;
#include <packing>
#define EPSILON 0.00001
#define M_PI 3.1415926535897932384626433832795
#define PI M_PI
#define luminance(a) dot(a, vec3(0.2125, 0.7154, 0.0721))
#include <denoiseCustomComposeShaderFunctions>
vec3 screenSpaceToWorldSpace(const vec2 uv,const float depth,const mat4 curMatrixWorld){vec4 ndc=vec4((uv.x-0.5)*2.0,(uv.y-0.5)*2.0,(depth-0.5)*2.0,1.0);vec4 clip=projectionMatrixInverse*ndc;vec4 view=curMatrixWorld*(clip/clip.w);return view.xyz;}float distToPlane(const vec3 worldPos,const vec3 neighborWorldPos,const vec3 worldNormal){vec3 toCurrent=worldPos-neighborWorldPos;float distToPlane=abs(dot(toCurrent,worldNormal));return distToPlane;}float getDisocclusionBoostVariance(float visibleFrames){
#ifdef useTemporalReprojectTextures
return max(0.,-pow(visibleFrames,2.0)+50.0);
#else
return 0.;
#endif
}void tap(const vec2 neighborVec,const vec2 pixelStepOffset,const vec3 normal,const float depth,const float roughness,const vec3 worldPos,const float luma[textureCount],const float colorPhi[textureCount],inout vec3 denoisedColor[textureCount],inout float totalWeight[textureCount],inout float sumVariance[textureCount],inout float variance[textureCount]){vec2 fullNeighborUv=neighborVec*pixelStepOffset;vec2 neighborUvNearest=vUv+fullNeighborUv;vec2 bilinearOffset=neighborVec.y>0. ? invTexSize :-invTexSize;vec2 neighborUv=vUv+fullNeighborUv+bilinearOffset*0.5;vec2 neighborUvRoughness=vUv+fullNeighborUv*(roughness<0.15 ? roughness/0.15 : 1.)+bilinearOffset*0.5;float basicWeight=1.0;
#ifdef useDepth
vec4 neighborDepthTexel=textureLod(depthTexture,neighborUvNearest,0.);
#ifdef RGBA_DEPTH_PACKING
float neighborDepth=unpackRGBAToDepth(neighborDepthTexel);
#else
float neighborDepth=neighborDepthTexel.r;
#endif
vec3 neighborWorldPos=screenSpaceToWorldSpace(neighborUvNearest,neighborDepth,cameraMatrixWorld);
#ifdef useNormal
float depthDiff=1.-distToPlane(worldPos,neighborWorldPos,normal);
#else
float depthDiff=1.-abs(depth-neighborDepth);
#endif
float depthSimilarity=max(depthDiff/depthPhi,0.);basicWeight*=depthSimilarity;
#endif
#if defined(useNormal) || defined(useRoughness)
vec4 neighborNormalTexel=textureLod(normalTexture,neighborUvNearest,0.);
#endif
#ifdef useNormal
vec3 neighborNormal=neighborNormalTexel.xyz;float normalDiff=dot(neighborNormal,normal);float normalSimilarity=pow(max(0.,normalDiff),normalPhi);basicWeight*=normalSimilarity;
#endif
#ifdef useRoughness
float neighborRoughness=neighborNormalTexel.a;neighborRoughness*=neighborRoughness;float roughnessDiff=abs(roughness-neighborRoughness);float roughnessSimilarity=exp(-roughnessDiff*roughnessPhi);basicWeight*=roughnessSimilarity;
#endif
vec4 neighborInputTexel[textureCount];vec3 neighborColor;float neighborLuma,lumaDiff,lumaSimilarity,disocclusionBoost;float weight[textureCount];
#pragma unroll_loop_start
for(int i=0;i<textureCount;i++){neighborInputTexel[i]=textureLod(inputTexture[i],roughnessDependent[i]? neighborUvRoughness : neighborUv,0.);neighborColor=neighborInputTexel[i].rgb;neighborLuma=luminance(neighborColor);lumaDiff=abs(luma[i]-neighborLuma);lumaSimilarity=max(1.0-lumaDiff/colorPhi[i],0.0);weight[i]=min(basicWeight*lumaSimilarity,1.0);disocclusionBoost=variance[i]/1000.;weight[i]=mix(weight[i],1.,disocclusionBoost);denoisedColor[i]+=neighborColor*weight[i];totalWeight[i]+=weight[i];}
#pragma unroll_loop_end
if(isFirstIteration){
#ifdef useMoment
vec4 neighborMoment=textureLod(momentTexture,neighborUvNearest,0.);neighborInputTexel[0].a=neighborMoment.g-neighborMoment.r*neighborMoment.r;
#if momentTextureCount > 1
neighborInputTexel[1].a=neighborMoment.a-neighborMoment.b*neighborMoment.b;
#endif
#else
for(int i=0;i<textureCount;i++){neighborInputTexel[i].a=getDisocclusionBoostVariance(neighborInputTexel[i].a);}
#endif
}
#pragma unroll_loop_start
for(int i=0;i<momentTextureCount;i++){
#ifndef useMoment
if(isFirstIteration)neighborInputTexel[i].a=1.0;
#endif
sumVariance[i]+=weight[i]*weight[i]*neighborInputTexel[i].a;}
#pragma unroll_loop_end
}void main(){vec4 depthTexel=textureLod(depthTexture,vUv,0.);if(depthTexel.r>0.9999||dot(depthTexel.rgb,depthTexel.rgb)==0.){discard;return;}vec3 worldPos;float depth;
#ifdef useDepth
#ifdef RGBA_DEPTH_PACKING
depth=unpackRGBAToDepth(depthTexel);
#else
depth=depthTexel.r;
#endif
worldPos=screenSpaceToWorldSpace(vUv,depth,cameraMatrixWorld);
#endif
vec3 normal;float roughness;
#ifdef useNormal
vec4 normalTexel=textureLod(normalTexture,vUv,0.);normal=normalTexel.xyz;
#endif
#ifdef useRoughness
roughness=normalTexel.a;roughness*=roughness;
#endif
vec3 denoisedColor[textureCount];float sumVariance[textureCount];float variance[textureCount];
#ifdef doDenoise
vec4 texel[textureCount];float luma[textureCount];float totalWeight[textureCount];float colorPhi[textureCount];
#pragma unroll_loop_start
for(int i=0;i<textureCount;i++){totalWeight[i]=1.0;texel[i]=textureLod(inputTexture[i],vUv,0.);denoisedColor[i]=texel[i].rgb;luma[i]=luminance(texel[i].rgb);}
#pragma unroll_loop_end
if(isFirstIteration){
#ifdef useMoment
vec4 moment=textureLod(momentTexture,vUv,0.);texel[0].a=max(0.0,moment.g-moment.r*moment.r);
#if momentTextureCount > 1
texel[1].a=max(0.0,moment.a-moment.b*moment.b);
#endif
#else
for(int i=0;i<textureCount;i++){texel[i].a=getDisocclusionBoostVariance(texel[i].a);}
#endif
}
#pragma unroll_loop_start
for(int i=0;i<momentTextureCount;i++){variance[i]=min(1000.,texel[i].a);sumVariance[i]=texel[i].a;if(roughnessDependent[i]){colorPhi[i]=denoise[i]*sqrt(basicVariance[i]*roughness+sumVariance[i]);}else{colorPhi[i]=denoise[i]*sqrt(basicVariance[i]+sumVariance[i]);}}
#pragma unroll_loop_end
vec2 pixelStepOffset=invTexSize*stepSize;if(blurHorizontal){for(float i=-denoiseKernel;i<=denoiseKernel;i++){if(i!=0.){vec2 neighborVec=horizontal ? vec2(i,0.): vec2(0.,i);tap(neighborVec,pixelStepOffset,normal,depth,roughness,worldPos,luma,colorPhi,denoisedColor,totalWeight,sumVariance,variance);}}}else{for(float i=-denoiseKernel;i<=denoiseKernel;i++){if(i!=0.){vec2 neighborVec=horizontal ? vec2(-i,-i): vec2(i,-i);tap(neighborVec,pixelStepOffset,normal,depth,roughness,worldPos,luma,colorPhi,denoisedColor,totalWeight,sumVariance,variance);}}}
#pragma unroll_loop_start
for(int i=0;i<textureCount;i++){sumVariance[i]/=totalWeight[i]*totalWeight[i];denoisedColor[i]/=totalWeight[i];}
#pragma unroll_loop_end
#else
#pragma unroll_loop_start
for(int i=0;i<textureCount;i++){denoisedColor[i]=textureLod(inputTexture[i],vUv,0.).rgb;}
#pragma unroll_loop_end
#endif
if(isLastIteration){
#include <denoiseCustomComposeShader>
}
#include <outputShader>
}`;const lc={moment:!1,depth:!1,normal:!1,roughness:!1,diffuse:!0,roughnessDependent:!1,basicVariance:5e-4,denoiseCustomComposeShader:"",denoiseCustomComposeShaderFunctions:""},H0=[["moment","","useMoment"],["depth","depthPhi","useDepth"],["normal","normalPhi","useNormal"],["roughness","roughnessPhi","useRoughness"]];class V0 extends ht{constructor(e,t=[],n=lc){super("DenoisePass"),this.iterations=1,Array.isArray(t)||(t=[t]),n={...lc,...n},this.options=n,this.fullscreenMaterial=new et({fragmentShader:"",vertexShader:di,uniforms:{depthTexture:new V(null),normalTexture:new V(null),momentTexture:new V(null),invTexSize:new V(new se),horizontal:new V(!0),blurHorizontal:new V(!0),denoiseKernel:new V(1),denoiseDiffuse:new V(1),denoise:new V([0]),depthPhi:new V(1),normalPhi:new V(1),roughnessPhi:new V(1),stepSize:new V(1),isFirstIteration:new V(!1),isLastIteration:new V(!1),viewMatrix:new V(e.matrixWorldInverse),projectionMatrix:new V(e.projectionMatrix),cameraMatrixWorld:new V(e.matrixWorld),projectionMatrixInverse:new V(e.projectionMatrixInverse)},glslVersion:Wn,blending:ut,depthWrite:!1,depthTest:!1,toneMapped:!1});const r={type:bt,depthBuffer:!1};this.renderTargetA=new ci(1,1,t.length,r),this.renderTargetB=new ci(1,1,t.length,r),typeof n.roughnessDependent=="boolean"&&(n.roughnessDependent=Array(t.length).fill(n.roughnessDependent)),this.fullscreenMaterial.defines.roughnessDependent=`bool[](${n.roughnessDependent.join(", ")})`,typeof n.basicVariance=="number"&&(n.basicVariance=Array(t.length).fill(n.basicVariance)),this.fullscreenMaterial.defines.basicVariance=`float[](${n.basicVariance.map(s=>s.toPrecision(5)).join(", ")})`,this.setTextures(t)}setTextures(e){Array.isArray(e)||(e=[e]),this.textures=e;let t="",n="";for(let a=0;a<this.textures.length;a++)t+=`layout(location = ${a}) out vec4 gTexture${a};
`,t+=`uniform sampler2D inputTexture${a};
`,n+=`gTexture${a} = vec4(denoisedColor[${a}], sumVariance[${a}]);
`;let r=t+z0.replace("#include <denoiseCustomComposeShaderFunctions>",this.options.denoiseCustomComposeShaderFunctions).replace("#include <denoiseCustomComposeShader>",this.options.denoiseCustomComposeShader).replace("#include <outputShader>",n).replaceAll("textureCount",this.textures.length).replaceAll("momentTextureCount",Math.min(this.textures.length,2));r=qa(r);const s=r.matchAll(/inputTexture\[\s*[0-9]+\s*]/g);for(const[a]of s){const o=a.replace(/[^0-9]/g,"");r=r.replace(a,"inputTexture"+o)}delete this.fullscreenMaterial.defines.useTemporalReprojectTextures;for(let a=0;a<e.length;a++){const o=e[a];this.fullscreenMaterial.uniforms["inputTexture"+a]=new V(o),o.name.includes("TemporalReprojectPass.accumulatedTexture")&&(this.fullscreenMaterial.defines.useTemporalReprojectTextures="")}this.fullscreenMaterial.fragmentShader=r,this.fullscreenMaterial.needsUpdate=!0}setDepthTexture(e){this.fullscreenMaterial.uniforms.depthTexture.value=e,(e.type===wt?rs:Ki)===rs?this.fullscreenMaterial.defines.RGBA_DEPTH_PACKING="":delete this.fullscreenMaterial.defines.RGBA_DEPTH_PACKING,this.options.depth=!0}setNormalTexture(e,{useRoughnessInAlphaChannel:t=!1}={}){this.fullscreenMaterial.uniforms.normalTexture.value=e,this.options.normal=!0,this.options.roughness=t}setMomentTexture(e){this.fullscreenMaterial.uniforms.momentTexture.value=e,this.options.moment=!0}setSize(e,t){this.renderTargetA.setSize(e,t),this.renderTargetB.setSize(e,t),this.fullscreenMaterial.uniforms.invTexSize.value.set(1/e,1/t)}dispose(){super.dispose(),this.renderTargetA.dispose(),this.renderTargetB.dispose()}keepEdgeStoppingDefinesUpdated(){for(const[t,n,r]of H0){var e;const s=this.options[t]&&(n===""||((e=this.fullscreenMaterial.uniforms[n])==null?void 0:e.value)>.001);s!==r in this.fullscreenMaterial.defines&&(s?this.fullscreenMaterial.defines[r]="":delete this.fullscreenMaterial.defines[r],this.fullscreenMaterial.needsUpdate=!0)}}render(e){this.keepEdgeStoppingDefinesUpdated();const t=this.fullscreenMaterial.uniforms.denoiseKernel.value;if(this.iterations>0){"doDenoise"in this.fullscreenMaterial.defines||(this.fullscreenMaterial.defines.doDenoise="",this.fullscreenMaterial.needsUpdate=!0);for(let n=0;n<2*this.iterations;n++){const r=n%2===0,s=2**~~(n/2),o=Math.log2(s)%2==0;this.fullscreenMaterial.uniforms.horizontal.value=r,this.fullscreenMaterial.uniforms.blurHorizontal.value=o,this.fullscreenMaterial.uniforms.stepSize.value=s,this.fullscreenMaterial.uniforms.isFirstIteration.value=n===0,this.fullscreenMaterial.uniforms.isLastIteration.value=n===2*this.iterations-1;const l=r?this.renderTargetA:this.renderTargetB;for(let c=0;c<this.textures.length;c++)this.fullscreenMaterial.uniforms["inputTexture"+c].value=r?n===0?this.textures[c]:this.renderTargetB.texture[c]:this.renderTargetA.texture[c];e.setRenderTarget(l),e.render(this.scene,this.camera)}}else"doDenoise"in this.fullscreenMaterial.defines&&(delete this.fullscreenMaterial.defines.doDenoise,this.fullscreenMaterial.needsUpdate=!0),e.setRenderTarget(this.renderTargetB),e.render(this.scene,this.camera),this.fullscreenMaterial.uniforms.denoiseKernel.value=t;for(let n=0;n<this.textures.length;n++)this.fullscreenMaterial.uniforms["inputTexture"+n].value=this.textures[n]}get texture(){return this.renderTargetB.texture[0]}}var k0=`#define GLSLIFY 1
vec4 moment;if(!reset&&reprojectedUvDiffuse.x>=0.0){vec4 historyMoment=sampleReprojectedTexture(lastMomentTexture,reprojectedUvDiffuse);moment.r=luminance(gOutput[0].rgb);moment.g=moment.r*moment.r;
#if textureCount > 1
moment.b=luminance(gOutput[1].rgb);moment.a=moment.b*moment.b;
#endif
gMoment=mix(moment,historyMoment,0.8);}else{moment.rg=vec2(0.,1000.);moment.ba=vec2(0.,1000.);gMoment=moment;return;}`;const cc={fullAccumulate:!0,temporalReprojectCustomComposeShader:k0};class G0 extends Mu{constructor(e,t,n,r=1,s=cc){s={...cc,...s},super(e,t,n,r,s),this.momentTexture=this.renderTarget.texture[0].clone(),this.momentTexture.isRenderTargetTexture=!0,this.momentTexture.type=$e,this.momentTexture.minFilter=Fe,this.momentTexture.magFilter=Fe,this.momentTexture.needsUpdate=!0,this.renderTarget.texture.push(this.momentTexture);const a=`
		layout(location = ${r}) out vec4 gMoment;

		uniform sampler2D lastMomentTexture;
		`;this.fullscreenMaterial.fragmentShader=a+this.fullscreenMaterial.fragmentShader,this.fullscreenMaterial.uniforms={...this.fullscreenMaterial.uniforms,lastMomentTexture:new V(null)};const o=r+1;this.copyPass.setTextureCount(o),this.copyPass.fullscreenMaterial.uniforms["inputTexture"+(o-1)].value=this.momentTexture;const l=this.copyPass.renderTarget.texture[o-1];l.type=$e,l.minFilter=Be,l.magFilter=Be,l.needsUpdate=!0,this.fullscreenMaterial.uniforms.lastMomentTexture.value=l,this.fullscreenMaterial.defines.momentTextureCount=Math.min(2,r)}}class W0{constructor(e,t,n,r=1,s={}){this.svgfTemporalReprojectPass=new G0(e,t,n,r,s);const a=this.svgfTemporalReprojectPass.renderTarget.texture.slice(0,r);this.denoisePass=new V0(t,a,s),this.denoisePass.setMomentTexture(this.svgfTemporalReprojectPass.momentTexture),this.setNonJitteredDepthTexture(n.depthTexture)}get texture(){return this.denoisePass.texture}setGBuffers(e,t){this.setJitteredGBuffers(e,t),this.setNonJitteredGBuffers(e,t)}setJitteredGBuffers(e,t,{useRoughnessInAlphaChannel:n=!1}={}){this.denoisePass.setDepthTexture(e),this.denoisePass.setNormalTexture(t,{useRoughnessInAlphaChannel:n})}setNonJitteredDepthTexture(e){this.svgfTemporalReprojectPass.fullscreenMaterial.uniforms.depthTexture.value=e}setVelocityTexture(e){this.svgfTemporalReprojectPass.fullscreenMaterial.uniforms.velocityTexture.value=e}setSize(e,t){this.denoisePass.setSize(e,t),this.svgfTemporalReprojectPass.setSize(e,t)}dispose(){this.denoisePass.dispose(),this.svgfTemporalReprojectPass.dispose()}render(e){this.svgfTemporalReprojectPass.render(e),this.denoisePass.render(e)}}class X0 extends ht{constructor(){super("CubeToEquirectEnvPass"),this.renderTarget=new it(1,1,{depthBuffer:!1,type:$e}),this.fullscreenMaterial=new et({fragmentShader:`
            varying vec2 vUv;
			uniform samplerCube cubeMap;

			#define M_PI 3.1415926535897932384626433832795
			
			// source: https://github.com/spite/CubemapToEquirectangular/blob/master/src/CubemapToEquirectangular.js
            void main() {
				float longitude = vUv.x * 2. * M_PI - M_PI + M_PI / 2.;
				float latitude = vUv.y * M_PI;

				vec3 dir = vec3(
					- sin( longitude ) * sin( latitude ),
					cos( latitude ),
					- cos( longitude ) * sin( latitude )
				);

				dir.y = -dir.y;

				gl_FragColor = textureCube( cubeMap, dir );
            }
            `,vertexShader:di,uniforms:{cubeMap:{value:null}},blending:ut,depthWrite:!1,depthTest:!1,toneMapped:!1})}dispose(){this.renderTarget.dispose()}generateEquirectEnvMap(e,t,n=null,r=null,s=4096){if(n===null&&r===null){const c=t.source.data[0].width,u=2**Math.ceil(Math.log2(2*c*3**.5)),h=2**Math.ceil(Math.log2(c*3**.5));n=u,r=h}n>s&&(n=s,r=s/2),this.renderTarget.setSize(n,r),this.fullscreenMaterial.uniforms.cubeMap.value=t;const{renderTarget:a}=this;e.setRenderTarget(a),e.render(this.scene,this.camera);const o=new Float32Array(n*r*4);e.readRenderTargetPixels(a,0,0,n,r,o);const l=new si(o,n,r,Ut,$e);return l.wrapS=Dt,l.wrapT=Dt,l.minFilter=vr,l.magFilter=vr,l.needsUpdate=!0,l.mapping=gr,l}}class j0 extends et{constructor(){super({type:"MRTMaterial",defines:{USE_UV:"",TEMPORAL_RESOLVE:""},uniforms:{color:new V(new Te),emissive:new V(new Te),map:new V(null),roughnessMap:new V(null),metalnessMap:new V(null),emissiveMap:new V(null),alphaMap:new V(null),normalMap:new V(null),normalScale:new V(new se(1,1)),roughness:new V(0),metalness:new V(0),emissiveIntensity:new V(0),uvTransform:new V(new Ne),boneTexture:new V(null),blueNoiseTexture:new V(null),blueNoiseRepeat:new V(new se(1,1)),texSize:new V(new se(1,1)),frame:new V(0)},vertexShader:`
                varying vec2 vHighPrecisionZW;

                #define NORMAL
                #if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
                    varying vec3 vViewPosition;
                #endif
                
                #include <common>
                #include <uv_pars_vertex>
                #include <displacementmap_pars_vertex>
                #include <normal_pars_vertex>
                #include <morphtarget_pars_vertex>
                #include <logdepthbuf_pars_vertex>
                #include <clipping_planes_pars_vertex>
                #include <skinning_pars_vertex>
                #include <color_pars_vertex>

                varying vec2 screenUv;

                void main() {
                    #include <uv_vertex>
                    
                    #include <skinbase_vertex>
                    #include <beginnormal_vertex>
                    #include <skinnormal_vertex>
                    #include <defaultnormal_vertex>

                    #include <morphnormal_vertex>
                    #include <normal_vertex>
                    #include <begin_vertex>
                    #include <morphtarget_vertex>

                    #include <skinning_vertex>

                    #include <displacementmap_vertex>
                    #include <project_vertex>
                    #include <logdepthbuf_vertex>
                    #include <clipping_planes_vertex>

                    #include <color_vertex>
                    
                    #if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
                        vViewPosition = - mvPosition.xyz;
                    #endif

                    screenUv = gl_Position.xy * 0.5 + 0.5;

                    vHighPrecisionZW = gl_Position.zw;
                }
            `,fragmentShader:`
                #define NORMAL
                #if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
                    varying vec3 vViewPosition;
                #endif
                #include <packing>
                #include <uv_pars_fragment>
                #include <normal_pars_fragment>
                #include <bumpmap_pars_fragment>
                #include <normalmap_pars_fragment>
                #include <logdepthbuf_pars_fragment>
                #include <clipping_planes_pars_fragment>
                #include <color_pars_fragment>
                #include <alphamap_pars_fragment>
                
                layout(location = 0) out vec4 gDepth;
                layout(location = 1) out vec4 gNormal;
                layout(location = 2) out vec4 gDiffuse;
                layout(location = 3) out vec4 gEmissive;

                #include <map_pars_fragment>
                uniform vec3 color;

                varying vec2 vHighPrecisionZW;

                #include <metalnessmap_pars_fragment>
                uniform float metalness;

                #include <roughnessmap_pars_fragment>
                uniform float roughness;

                #include <emissivemap_pars_fragment>
                uniform vec3 emissive;
                uniform float emissiveIntensity;

#ifdef USE_ALPHAMAP
                uniform sampler2D blueNoiseTexture;
                uniform vec2 blueNoiseRepeat;
                uniform vec2 texSize;
                uniform int frame;

                varying vec2 screenUv;

                const float g = 1.6180339887498948482;
                const float a1 = 1.0 / g;

                // reference: https://extremelearning.com.au/unreasonable-effectiveness-of-quasirandom-sequences/
                float r1(float n) {
                    // 7th harmonious number
                    return fract(1.1127756842787055 + a1 * n);
                }

                const vec4 hn = vec4(0.618033988749895, 0.3247179572447458, 0.2207440846057596, 0.1673039782614187);

                vec4 sampleBlueNoise(vec2 uv, int seed) {
                    vec2 size = uv * texSize;
                    vec2 blueNoiseSize = texSize / blueNoiseRepeat;
                    float blueNoiseIndex = floor(floor(size.y / blueNoiseSize.y) * blueNoiseRepeat.x) + floor(size.x / blueNoiseSize.x);

                    // get the offset of this pixel's blue noise tile
                    int blueNoiseTileOffset = int(r1(blueNoiseIndex + 1.0) * 65536.);

                    vec2 blueNoiseUv = uv * blueNoiseRepeat;

                    // fetch blue noise for this pixel
                    vec4 blueNoise = textureLod(blueNoiseTexture, blueNoiseUv, 0.);

                    // animate blue noise
                    blueNoise = fract(blueNoise + hn * float(seed + blueNoiseTileOffset));

                    blueNoise.r = (blueNoise.r > 0.5 ? 1.0 - blueNoise.r : blueNoise.r) * 2.0;
                    blueNoise.g = (blueNoise.g > 0.5 ? 1.0 - blueNoise.g : blueNoise.g) * 2.0;
                    blueNoise.b = (blueNoise.b > 0.5 ? 1.0 - blueNoise.b : blueNoise.b) * 2.0;
                    blueNoise.a = (blueNoise.a > 0.5 ? 1.0 - blueNoise.a : blueNoise.a) * 2.0;

                    return blueNoise;
                }
#endif

                void main() {
                    // !todo: properly implement alpha hashing
                    // #ifdef USE_ALPHAMAP
                    // float alpha = textureLod( alphaMap, vUv, 0. ).g;

                    // float alphaThreshold = sampleBlueNoise(screenUv, frame).a;
                    // if(alpha < alphaThreshold){
                    //     discard;
                    //     return;
                    // }metalnessnor
                    // #endif

                    //! todo: find better solution
                    #define vMapUv vUv
                    #define vMetalnessMapUv vUv
                    #define vRoughnessMapUv vUv
                    #define vNormalMapUv vUv
                    #define vEmissiveMapUv vUv

                    #include <clipping_planes_fragment>
                    #include <logdepthbuf_fragment>
                    #include <normal_fragment_begin>
                    #include <normal_fragment_maps>

                    float roughnessFactor = roughness;
                    bool isDeselected = roughness > 10.0e9;
                    
                    if(isDeselected){
                        roughnessFactor = 1.;
                        gNormal = vec4(0.);
                    }else{
                        #ifdef USE_ROUGHNESSMAP
                            vec4 texelRoughness = textureLod( roughnessMap, vUv, 0. );
                            // reads channel G, compatible with a combined OcclusionRoughnessMetallic (RGB) texture
                            roughnessFactor *= texelRoughness.g;
                        #endif

                        // roughness of 1.0 is reserved for deselected meshes
                        roughnessFactor = min(0.99, roughnessFactor);

                        vec3 worldNormal = normalize((vec4(normal, 1.) * viewMatrix).xyz);
                        gNormal = vec4( worldNormal, roughnessFactor );
                    }
                    

                    if(isDeselected){
                        discard;
                        return;
                    }

                    float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;

                    vec4 depthColor = packDepthToRGBA( fragCoordZ );
                    gDepth = depthColor;

                    #include <metalnessmap_fragment>

                    vec4 diffuseColor = vec4(color, metalnessFactor);

                    #include <map_fragment>
                    #include <color_fragment>

                    gDiffuse = diffuseColor;

                    vec3 totalEmissiveRadiance = emissive * emissiveIntensity;
                    #include <emissivemap_fragment>
                    
                    gEmissive = vec4(totalEmissiveRadiance, 0.);
                }
            `,glslVersion:Wn,toneMapped:!1,alphaTest:!1,fog:!1,lights:!1}),this.normalMapType=cs,this.normalScale=new se(1,1)}}var Y0=`#define GLSLIFY 1
#if !defined(diffuseOnly) && !defined(specularOnly)
layout(location=0)out vec4 gDiffuse;layout(location=1)out vec4 gSpecular;
#else
#ifdef diffuseOnly
layout(location=0)out vec4 gDiffuse;
#else
layout(location=0)out vec4 gSpecular;
#endif
#endif
varying vec2 vUv;uniform sampler2D directLightTexture;uniform sampler2D accumulatedTexture;uniform sampler2D normalTexture;uniform sampler2D depthTexture;uniform sampler2D diffuseTexture;uniform sampler2D emissiveTexture;uniform sampler2D blueNoiseTexture;uniform sampler2D velocityTexture;
#ifdef autoThickness
uniform sampler2D backSideDepthTexture;
#endif
uniform mat4 projectionMatrix;uniform mat4 inverseProjectionMatrix;uniform mat4 cameraMatrixWorld;uniform float cameraNear;uniform float cameraFar;uniform float maxEnvMapMipLevel;uniform float rayDistance;uniform float maxRoughness;uniform float thickness;uniform float envBlur;uniform int frame;uniform vec2 texSize;uniform vec2 blueNoiseRepeat;struct EquirectHdrInfo{sampler2D marginalWeights;sampler2D conditionalWeights;sampler2D map;vec2 size;float totalSumWhole;float totalSumDecimal;};uniform EquirectHdrInfo envMapInfo;
#define INVALID_RAY_COORDS vec2(-1.0);
#define EPSILON 0.00001
#define ONE_MINUS_EPSILON 1.0 - EPSILON
float nearMinusFar;float nearMulFar;float farMinusNear;vec2 invTexSize;
#include <packing>
#include <sampleBlueNoise>
#include <ssgi_utils>
vec2 RayMarch(inout vec3 dir,inout vec3 hitPos);vec2 BinarySearch(inout vec3 dir,inout vec3 hitPos);float fastGetViewZ(const float depth);vec3 doSample(const vec3 viewPos,const vec3 viewDir,const vec3 viewNormal,const vec3 worldPosition,const float metalness,const float roughness,const bool isDiffuseSample,const bool isEnvMisSample,const float NoV,const float NoL,const float NoH,const float LoH,const float VoH,const vec2 random,inout vec3 l,inout vec3 hitPos,out bool isMissedRay,out vec3 brdf,out float pdf);void main(){vec4 depthTexel=textureLod(depthTexture,vUv,0.0);if(dot(depthTexel.rgb,depthTexel.rgb)==0.){discard;return;}vec4 normalTexel=textureLod(normalTexture,vUv,0.0);float roughness=normalTexel.a;if(roughness==1.0||roughness>maxRoughness){discard;return;}invTexSize=1./texSize;roughness=clamp(roughness*roughness,0.0001,1.0);nearMinusFar=cameraNear-cameraFar;nearMulFar=cameraNear*cameraFar;farMinusNear=cameraFar-cameraNear;float unpackedDepth=unpackRGBAToDepth(depthTexel);float depth=fastGetViewZ(unpackedDepth);vec3 viewPos=getViewPosition(depth);vec3 viewDir=normalize(viewPos);vec3 worldNormal=normalTexel.xyz;vec3 viewNormal=normalize((vec4(worldNormal,0.)*cameraMatrixWorld).xyz);vec3 worldPos=vec4(vec4(viewPos,1.)*viewMatrix).xyz;vec4 diffuseTexel=textureLod(diffuseTexture,vUv,0.);vec3 diffuse=diffuseTexel.rgb;float metalness=diffuseTexel.a;vec3 n=viewNormal;vec3 v=-viewDir;float NoV=max(EPSILON,dot(n,v));vec3 V=(vec4(v,0.)*viewMatrix).xyz;vec3 N=worldNormal;vec4 blueNoise;vec3 H,l,h,F,T,B,envMisDir,gi;vec3 diffuseGI,specularGI,brdf,hitPos;Onb(N,T,B);V=ToLocal(T,B,N,V);vec3 f0=mix(vec3(0.04),diffuse,metalness);float NoL,NoH,LoH,VoH,diffW,specW,invW,pdf,envPdf,diffuseSamples,specularSamples,envMisProbability,envMisMultiplier;bool isDiffuseSample,isEnvMisSample,isMissedRay;int sampleCounter=0;
#pragma unroll_loop_start
for(int i=0;i<spp;i++){blueNoise=sampleBlueNoise(blueNoiseTexture,frame+sampleCounter++,blueNoiseRepeat,texSize);H=SampleGGXVNDF(V,roughness,roughness,blueNoise.r,blueNoise.g);if(H.z<0.0)H=-H;l=normalize(reflect(-V,H));l=ToWorld(T,B,N,l);l=(vec4(l,0.)*cameraMatrixWorld).xyz;l=normalize(l);h=normalize(v+l);NoL=clamp(dot(n,l),EPSILON,ONE_MINUS_EPSILON);NoH=clamp(dot(n,h),EPSILON,ONE_MINUS_EPSILON);LoH=clamp(dot(l,h),EPSILON,ONE_MINUS_EPSILON);VoH=clamp(dot(v,h),EPSILON,ONE_MINUS_EPSILON);
#if !defined(diffuseOnly) && !defined(specularOnly)
F=F_Schlick(f0,VoH);diffW=(1.-metalness)*luminance(diffuse);specW=luminance(F);diffW=max(diffW,EPSILON);specW=max(specW,EPSILON);invW=1./(diffW+specW);diffW*=invW;specW*=invW;isDiffuseSample=blueNoise.b<diffW;
#else
#ifdef diffuseOnly
isDiffuseSample=true;
#else
isDiffuseSample=false;
#endif
#endif
envMisDir=vec3(0.0);
#ifdef importanceSampling
envPdf=sampleEquirectProbability(envMapInfo,blueNoise.rg,envMisDir);envMisDir=normalize((vec4(envMisDir,0.)*cameraMatrixWorld).xyz);envMisProbability=0.25+dot(envMisDir,viewNormal)*0.5;isEnvMisSample=blueNoise.a<envMisProbability;envMisMultiplier=1./(1.-envMisProbability);if(isEnvMisSample){envPdf/=1.-envMisProbability;}else{envPdf=0.0001;}
#else
envPdf=0.0;envMisMultiplier=1.;
#endif
if(isDiffuseSample){if(isEnvMisSample){l=envMisDir;}else{l=cosineSampleHemisphere(viewNormal,blueNoise.rg);}h=normalize(v+l);NoL=clamp(dot(n,l),EPSILON,ONE_MINUS_EPSILON);NoH=clamp(dot(n,h),EPSILON,ONE_MINUS_EPSILON);LoH=clamp(dot(l,h),EPSILON,ONE_MINUS_EPSILON);VoH=clamp(dot(v,h),EPSILON,ONE_MINUS_EPSILON);gi=doSample(viewPos,viewDir,viewNormal,worldPos,metalness,roughness,isDiffuseSample,isEnvMisSample,NoV,NoL,NoH,LoH,VoH,blueNoise.rg,l,hitPos,isMissedRay,brdf,pdf);gi*=brdf;if(isEnvMisSample){gi*=misHeuristic(envPdf,pdf);gi/=envPdf;}else{gi/=pdf;gi*=envMisMultiplier;}diffuseSamples++;diffuseGI=mix(diffuseGI,gi,1./diffuseSamples);}else{isEnvMisSample=isEnvMisSample&&roughness>=0.025;if(isEnvMisSample){l=envMisDir;h=normalize(v+l);NoL=clamp(dot(n,l),EPSILON,ONE_MINUS_EPSILON);NoH=clamp(dot(n,h),EPSILON,ONE_MINUS_EPSILON);LoH=clamp(dot(l,h),EPSILON,ONE_MINUS_EPSILON);VoH=clamp(dot(v,h),EPSILON,ONE_MINUS_EPSILON);}gi=doSample(viewPos,viewDir,viewNormal,worldPos,metalness,roughness,isDiffuseSample,isEnvMisSample,NoV,NoL,NoH,LoH,VoH,blueNoise.rg,l,hitPos,isMissedRay,brdf,pdf);gi*=brdf;if(isEnvMisSample){gi*=misHeuristic(envPdf,pdf);gi/=envPdf;}else{gi/=pdf;gi*=envMisMultiplier;}specularSamples++;specularGI=mix(specularGI,gi,1./specularSamples);}}
#pragma unroll_loop_end
roughness=sqrt(roughness);
#ifndef specularOnly
if(diffuseSamples==0.0)diffuseGI=vec3(-1.0);gDiffuse=vec4(diffuseGI,roughness);
#endif
#ifndef diffuseOnly
float rayLength=0.0;if(!isMissedRay&&roughness<0.375&&getCurvature(viewNormal,depth)<0.0005){vec3 hitPosWS=(vec4(hitPos,1.)*viewMatrix).xyz;rayLength=distance(worldPos,hitPosWS);}if(specularSamples==0.0)specularGI=vec3(-1.0);gSpecular=vec4(specularGI,rayLength);
#endif
}vec3 doSample(const vec3 viewPos,const vec3 viewDir,const vec3 viewNormal,const vec3 worldPosition,const float metalness,const float roughness,const bool isDiffuseSample,const bool isEnvMisSample,const float NoV,const float NoL,const float NoH,const float LoH,const float VoH,const vec2 random,inout vec3 l,inout vec3 hitPos,out bool isMissedRay,out vec3 brdf,out float pdf){float cosTheta=max(0.0,dot(viewNormal,l));if(isDiffuseSample){vec3 diffuseBrdf=vec3(evalDisneyDiffuse(NoL,NoV,LoH,roughness,metalness));pdf=NoL/M_PI;pdf=max(EPSILON,pdf);brdf=diffuseBrdf;}else{vec3 specularBrdf=evalDisneySpecular(roughness,NoH,NoV,NoL);pdf=GGXVNDFPdf(NoH,NoV,roughness);pdf=max(EPSILON,pdf);brdf=specularBrdf;}brdf*=cosTheta;hitPos=viewPos;
#if steps == 0
hitPos+=l;vec2 coords=viewSpaceToScreenSpace(hitPos);
#else
vec2 coords=RayMarch(l,hitPos);
#endif
bool allowMissedRays=false;
#ifdef missedRays
allowMissedRays=true;
#endif
isMissedRay=coords.x==-1.0;vec3 envMapSample=vec3(0.);if(isMissedRay||allowMissedRays){
#ifdef USE_ENVMAP
vec3 reflectedWS=normalize((vec4(l,0.)*viewMatrix).xyz);
#ifdef BOX_PROJECTED_ENV_MAP
reflectedWS=parallaxCorrectNormal(reflectedWS.xyz,envMapSize,envMapPosition,worldPosition);reflectedWS=normalize(reflectedWS.xyz);
#endif
float mip=envBlur*maxEnvMapMipLevel;if(!isDiffuseSample&&roughness<0.15)mip*=roughness/0.15;envMapSample=sampleEquirectEnvMapColor(reflectedWS,envMapInfo.map,mip);float maxEnvLum=isEnvMisSample ? 50.0 : 5.0;if(maxEnvLum!=0.0){float envLum=luminance(envMapSample);if(envLum>maxEnvLum){envMapSample*=maxEnvLum/envLum;}}return envMapSample;
#else
return vec3(0.0);
#endif
}vec4 velocity=textureLod(velocityTexture,coords.xy,0.0);vec2 reprojectedUv=coords.xy-velocity.xy;vec3 SSGI;if(reprojectedUv.x>=0.0&&reprojectedUv.x<=1.0&&reprojectedUv.y>=0.0&&reprojectedUv.y<=1.0){vec4 emissiveTexel=textureLod(emissiveTexture,coords.xy,0.);vec3 emissiveColor=emissiveTexel.rgb*10.;vec3 reprojectedGI=getTexel(accumulatedTexture,reprojectedUv,0.).rgb;SSGI=reprojectedGI+emissiveColor;
#ifdef useDirectLight
SSGI+=textureLod(directLightTexture,coords.xy,0.).rgb*directLightMultiplier;
#endif
}else{SSGI=textureLod(directLightTexture,vUv,0.).rgb;}if(allowMissedRays){float ssgiLum=luminance(SSGI);float envLum=luminance(envMapSample);if(envLum>ssgiLum)SSGI=envMapSample;}return SSGI;}vec2 RayMarch(inout vec3 dir,inout vec3 hitPos){float rayHitDepthDifference;dir*=rayDistance/float(steps);vec2 uv;for(int i=1;i<steps;i++){float m=exp(pow(float(i)/4.0,0.05))-2.0;hitPos+=dir*min(m,1.);if(hitPos.z>0.0)return INVALID_RAY_COORDS;uv=viewSpaceToScreenSpace(hitPos);
#ifndef missedRays
if(uv.x<0.||uv.y<0.||uv.x>1.||uv.y>1.)return INVALID_RAY_COORDS;
#endif
float unpackedDepth=unpackRGBAToDepth(textureLod(depthTexture,uv,0.0));float depth=fastGetViewZ(unpackedDepth);
#ifdef autoThickness
float unpackedBackSideDepth=unpackRGBAToDepth(textureLod(backSideDepthTexture,uv,0.0));float backSideDepth=fastGetViewZ(unpackedBackSideDepth);float currentThickness=max(abs(depth-backSideDepth),thickness);
#else
float currentThickness=thickness;
#endif
rayHitDepthDifference=depth-hitPos.z;if(rayHitDepthDifference>=0.0&&rayHitDepthDifference<currentThickness){
#if refineSteps == 0
return uv;
#else
return BinarySearch(dir,hitPos);
#endif
}}
#ifndef missedRays
return INVALID_RAY_COORDS;
#endif
return uv;}vec2 BinarySearch(inout vec3 dir,inout vec3 hitPos){float rayHitDepthDifference;vec2 uv;dir*=0.5;hitPos-=dir;for(int i=0;i<refineSteps;i++){uv=viewSpaceToScreenSpace(hitPos);float unpackedDepth=unpackRGBAToDepth(textureLod(depthTexture,uv,0.0));float depth=fastGetViewZ(unpackedDepth);rayHitDepthDifference=depth-hitPos.z;dir*=0.5;hitPos+=rayHitDepthDifference>0.0 ?-dir : dir;}uv=viewSpaceToScreenSpace(hitPos);return uv;}float fastGetViewZ(const float depth){
#ifdef PERSPECTIVE_CAMERA
return nearMulFar/(farMinusNear*depth-cameraFar);
#else
return depth*nearMinusFar-cameraNear;
#endif
}`,q0=`#define GLSLIFY 1
#define PI M_PI
#define luminance(a) dot(vec3(0.2125, 0.7154, 0.0721), a)
vec4 getTexel(const sampler2D tex,vec2 p,const float mip){p=p/invTexSize+0.5;vec2 i=floor(p);vec2 f=p-i;f=f*f*f*(f*(f*6.0-15.0)+10.0);p=i+f;p=(p-0.5)*invTexSize;return textureLod(tex,p,mip);}float getViewZ(const float depth){
#ifdef PERSPECTIVE_CAMERA
return perspectiveDepthToViewZ(depth,cameraNear,cameraFar);
#else
return orthographicDepthToViewZ(depth,cameraNear,cameraFar);
#endif
}
#ifdef PERSPECTIVE_CAMERA
vec3 getViewPosition(const float depth){float clipW=projectionMatrix[2][3]*depth+projectionMatrix[3][3];vec4 clipPosition=vec4((vec3(vUv,depth)-0.5)*2.0,1.0);clipPosition*=clipW;return(inverseProjectionMatrix*clipPosition).xyz;}
#else
vec3 getViewPosition(const float depth){float z=getViewZ(depth);vec4 clipPosition=vec4(vUv*2.0-1.0,z,1.0);clipPosition*=clipPosition.z;return(inverseProjectionMatrix*clipPosition).xyz;}
#endif
vec2 viewSpaceToScreenSpace(const vec3 position){vec4 projectedCoord=projectionMatrix*vec4(position,1.0);projectedCoord.xy/=projectedCoord.w;projectedCoord.xy=projectedCoord.xy*0.5+0.5;return projectedCoord.xy;}
#ifdef BOX_PROJECTED_ENV_MAP
uniform vec3 envMapSize;uniform vec3 envMapPosition;vec3 parallaxCorrectNormal(const vec3 v,const vec3 cubeSize,const vec3 cubePos,const vec3 worldPosition){vec3 nDir=normalize(v);vec3 rbmax=(.5*cubeSize+cubePos-worldPosition)/nDir;vec3 rbmin=(-.5*cubeSize+cubePos-worldPosition)/nDir;vec3 rbminmax;rbminmax.x=(nDir.x>0.)? rbmax.x : rbmin.x;rbminmax.y=(nDir.y>0.)? rbmax.y : rbmin.y;rbminmax.z=(nDir.z>0.)? rbmax.z : rbmin.z;float correction=min(min(rbminmax.x,rbminmax.y),rbminmax.z);vec3 boxIntersection=worldPosition+nDir*correction;return boxIntersection-cubePos;}
#endif
#define M_PI 3.1415926535897932384626433832795
vec2 equirectDirectionToUv(const vec3 direction){vec2 uv=vec2(atan(direction.z,direction.x),acos(direction.y));uv/=vec2(2.0*M_PI,M_PI);uv.x+=0.5;uv.y=1.0-uv.y;return uv;}vec3 equirectUvToDirection(vec2 uv){uv.x-=0.5;uv.y=1.0-uv.y;float theta=uv.x*2.0*PI;float phi=uv.y*PI;float sinPhi=sin(phi);return vec3(sinPhi*cos(theta),cos(phi),sinPhi*sin(theta));}vec3 sampleEquirectEnvMapColor(const vec3 direction,const sampler2D map,const float lod){return getTexel(map,equirectDirectionToUv(direction),lod).rgb;}mat3 getBasisFromNormal(const vec3 normal){vec3 other;if(abs(normal.x)>0.5){other=vec3(0.0,1.0,0.0);}else{other=vec3(1.0,0.0,0.0);}vec3 ortho=normalize(cross(normal,other));vec3 ortho2=normalize(cross(normal,ortho));return mat3(ortho2,ortho,normal);}vec3 F_Schlick(const vec3 f0,const float theta){return f0+(1.-f0)*pow(1.0-theta,5.);}float F_Schlick(const float f0,const float f90,const float theta){return f0+(f90-f0)*pow(1.0-theta,5.0);}float D_GTR(const float roughness,const float NoH,const float k){float a2=pow(roughness,2.);return a2/(PI*pow((NoH*NoH)*(a2*a2-1.)+1.,k));}float SmithG(const float NDotV,const float alphaG){float a=alphaG*alphaG;float b=NDotV*NDotV;return(2.0*NDotV)/(NDotV+sqrt(a+b-a*b));}float GGXVNDFPdf(const float NoH,const float NoV,const float roughness){float D=D_GTR(roughness,NoH,2.);float G1=SmithG(NoV,roughness*roughness);return(D*G1)/max(0.00001,4.0f*NoV);}float GeometryTerm(const float NoL,const float NoV,const float roughness){float a2=roughness*roughness;float G1=SmithG(NoV,a2);float G2=SmithG(NoL,a2);return G1*G2;}float evalDisneyDiffuse(const float NoL,const float NoV,const float LoH,const float roughness,const float metalness){float FD90=0.5+2.*roughness*pow(LoH,2.);float a=F_Schlick(1.,FD90,NoL);float b=F_Schlick(1.,FD90,NoV);return(a*b/PI)*(1.-metalness);}vec3 evalDisneySpecular(const float roughness,const float NoH,const float NoV,const float NoL){float D=D_GTR(roughness,NoH,2.);float G=GeometryTerm(NoL,NoV,pow(0.5+roughness*.5,2.));vec3 spec=vec3(D*G/(4.*NoL*NoV));return spec;}vec3 SampleGGXVNDF(const vec3 V,const float ax,const float ay,const float r1,const float r2){vec3 Vh=normalize(vec3(ax*V.x,ay*V.y,V.z));float lensq=Vh.x*Vh.x+Vh.y*Vh.y;vec3 T1=lensq>0. ? vec3(-Vh.y,Vh.x,0.)*inversesqrt(lensq): vec3(1.,0.,0.);vec3 T2=cross(Vh,T1);float r=sqrt(r1);float phi=2.0*PI*r2;float t1=r*cos(phi);float t2=r*sin(phi);float s=0.5*(1.0+Vh.z);t2=(1.0-s)*sqrt(1.0-t1*t1)+s*t2;vec3 Nh=t1*T1+t2*T2+sqrt(max(0.0,1.0-t1*t1-t2*t2))*Vh;return normalize(vec3(ax*Nh.x,ay*Nh.y,max(0.0,Nh.z)));}void Onb(const vec3 N,inout vec3 T,inout vec3 B){vec3 up=abs(N.z)<0.9999999 ? vec3(0,0,1): vec3(1,0,0);T=normalize(cross(up,N));B=cross(N,T);}vec3 ToLocal(const vec3 X,const vec3 Y,const vec3 Z,const vec3 V){return vec3(dot(V,X),dot(V,Y),dot(V,Z));}vec3 ToWorld(const vec3 X,const vec3 Y,const vec3 Z,const vec3 V){return V.x*X+V.y*Y+V.z*Z;}vec3 cosineSampleHemisphere(const vec3 n,const vec2 u){float r=sqrt(u.x);float theta=2.0*PI*u.y;vec3 b=normalize(cross(n,vec3(0.0,1.0,1.0)));vec3 t=cross(b,n);return normalize(r*sin(theta)*b+sqrt(1.0-u.x)*n+r*cos(theta)*t);}float equirectDirectionPdf(vec3 direction){vec2 uv=equirectDirectionToUv(direction);float theta=uv.y*PI;float sinTheta=sin(theta);if(sinTheta==0.0){return 0.0;}return 1.0/(2.0*PI*PI*sinTheta);}float sampleEquirectProbability(EquirectHdrInfo info,vec2 r,out vec3 direction){float v=textureLod(info.marginalWeights,vec2(r.x,0.0),0.).x;float u=textureLod(info.conditionalWeights,vec2(r.y,v),0.).x;vec2 uv=vec2(u,v);vec3 derivedDirection=equirectUvToDirection(uv);direction=derivedDirection;vec3 color=texture(info.map,uv).rgb;float totalSum=info.totalSumWhole+info.totalSumDecimal;float lum=luminance(color);float pdf=lum/totalSum;return info.size.x*info.size.y*pdf;}float misHeuristic(float a,float b){float aa=a*a;float bb=b*b;return aa/(aa+bb);}float getCurvature(const vec3 n,const float depth){vec3 dx=dFdx(n);vec3 dy=dFdy(n);vec3 xneg=n-dx;vec3 xpos=n+dx;vec3 yneg=n-dy;vec3 ypos=n+dy;float curvature=(cross(xneg,xpos).y-cross(yneg,ypos).x)*4.0/depth;return curvature;}`,Ja=`#define GLSLIFY 1
const float g=1.6180339887498948482;const float a1=1.0/g;float r1(float n){return fract(1.1127756842787055+a1*n);}const vec4 hn=vec4(0.618033988749895,0.3247179572447458,0.2207440846057596,0.1673039782614187);vec4 sampleBlueNoise(sampler2D texture,int seed,vec2 repeat,vec2 texSize){vec2 size=vUv*texSize;vec2 blueNoiseSize=texSize/repeat;float blueNoiseIndex=floor(floor(size.y/blueNoiseSize.y)*repeat.x)+floor(size.x/blueNoiseSize.x);vec2 blueNoiseUv=vUv*repeat;vec4 blueNoise=textureLod(texture,blueNoiseUv,0.);if(seed!=0){blueNoise=fract(blueNoise+hn*float(seed));blueNoise.r=(blueNoise.r>0.5 ? 1.0-blueNoise.r : blueNoise.r)*2.0;blueNoise.g=(blueNoise.g>0.5 ? 1.0-blueNoise.g : blueNoise.g)*2.0;blueNoise.b=(blueNoise.b>0.5 ? 1.0-blueNoise.b : blueNoise.b)*2.0;blueNoise.a=(blueNoise.a>0.5 ? 1.0-blueNoise.a : blueNoise.a)*2.0;}return blueNoise;}`;const K0=({data:{width:i,height:e,isFloatType:t,flipY:n,data:r}})=>{const s=a();function a(){const g=new ArrayBuffer(4),x=new Float32Array(g),p=new Uint32Array(g),f=new Uint32Array(512),T=new Uint32Array(512);for(let b=0;b<256;++b){const w=b-127;w<-27?(f[b]=0,f[b|256]=32768,T[b]=24,T[b|256]=24):w<-14?(f[b]=1024>>-w-14,f[b|256]=1024>>-w-14|32768,T[b]=-w-1,T[b|256]=-w-1):w<=15?(f[b]=w+15<<10,f[b|256]=w+15<<10|32768,T[b]=13,T[b|256]=13):w<128?(f[b]=31744,f[b|256]=64512,T[b]=24,T[b|256]=24):(f[b]=31744,f[b|256]=64512,T[b]=13,T[b|256]=13)}const v=new Uint32Array(2048),S=new Uint32Array(64),y=new Uint32Array(64);for(let b=1;b<1024;++b){let w=b<<13,D=0;for(;!(w&8388608);)w<<=1,D-=8388608;w&=-8388609,D+=947912704,v[b]=w|D}for(let b=1024;b<2048;++b)v[b]=939524096+(b-1024<<13);for(let b=1;b<31;++b)S[b]=b<<23;S[31]=1199570944,S[32]=2147483648;for(let b=33;b<63;++b)S[b]=2147483648+(b-32<<23);S[63]=3347054592;for(let b=1;b<64;++b)b!==32&&(y[b]=1024);return{floatView:x,uint32View:p,baseTable:f,shiftTable:T,mantissaTable:v,exponentTable:S,offsetTable:y}}function o(g){const x=g>>10;return s.uint32View[0]=s.mantissaTable[s.offsetTable[x]+(g&1023)]+s.exponentTable[x],s.floatView[0]}function l(g,x,p){return .2126*g+.7152*x+.0722*p}const c=(g,x,p=0,f=g.length)=>{let T=p,v=p+f-1;for(;T<v;){const S=T+v>>1;g[S]<x?T=S+1:v=S}return T-p},u=(g,x,p,f,T,v)=>{if(f)for(let _=0,N=p-1;_<=N;_++)for(let q=0,I=x*4;q<I;q+=4){const z=N-_,B=_*I+q,J=z*I+q;g[J]=g[B],g[J+1]=g[B+1],g[J+2]=g[B+2],g[J+3]=g[B+3]}const S=new Float32Array(x*p),y=new Float32Array(x*p),b=new Float32Array(p),w=new Float32Array(p);let D=0,M=0;for(let _=0;_<p;_++){let N=0;for(let q=0;q<x;q++){const I=_*x+q,z=g[4*I+0],B=g[4*I+1],J=g[4*I+2],W=l(z,B,J);N+=W,D+=W,S[I]=W,y[I]=N}if(N!==0)for(let q=_*x,I=_*x+x;q<I;q++)S[q]/=N,y[q]/=N;M+=N,b[_]=N,w[_]=M}if(M!==0)for(let _=0,N=b.length;_<N;_++)b[_]/=M,w[_]/=M;for(let _=0;_<p;_++){const N=(_+1)/p,q=c(w,N);T[_]=(q+.5)/p}for(let _=0;_<p;_++)for(let N=0;N<x;N++){const q=_*x+N,I=(N+1)/x,z=c(y,I,_*x,x);v[q]=(z+.5)/x}return D};if(!t){const g=new Float32Array(r.length);for(const x in r)g[x]=o(r[x]);r=g}const h=new Float32Array(e),d=new Float32Array(i*e),m=u(r,i,e,n,h,d);postMessage(t?{totalSumValue:m,marginalDataArray:h,conditionalDataArray:d}:{data:r,totalSumValue:m,marginalDataArray:h,conditionalDataArray:d})},Z0=new Blob(["onmessage = "+K0],{type:"application/javascript"}),J0=URL.createObjectURL(Z0);class Q0{constructor(){const e=new si(new Float32Array([1,1,1,1]),1,1);e.type=$e,e.format=Ut,e.minFilter=Be,e.magFilter=Be,e.wrapS=It,e.wrapT=It,e.generateMipmaps=!1,e.needsUpdate=!0;const t=new si(new Float32Array([0,1]),1,2);t.type=$e,t.format=fa,t.minFilter=Be,t.magFilter=Be,t.generateMipmaps=!1,t.needsUpdate=!0;const n=new si(new Float32Array([0,0,1,1]),2,2);n.type=$e,n.format=fa,n.minFilter=Be,n.magFilter=Be,n.generateMipmaps=!1,n.needsUpdate=!0,this.map=e,this.marginalWeights=t,this.conditionalWeights=n,this.totalSumWhole=1,this.totalSumDecimal=0,this.size=new se}dispose(){this.marginalWeights.dispose(),this.conditionalWeights.dispose(),this.map.dispose()}updateFrom(e){e=e.clone();const{width:t,height:n,data:r}=e.image,{type:s}=e;return this.size.set(t,n),new Promise(a=>{var o;(o=this.worker)==null||o.terminate(),this.worker=new Worker(J0),this.worker.postMessage({width:t,height:n,isFloatType:s===$e,flipY:e.flipY,data:r}),this.worker.onmessage=({data:{data:l,totalSumValue:c,marginalDataArray:u,conditionalDataArray:h}})=>{this.dispose();const{marginalWeights:d,conditionalWeights:m}=this;d.image={width:n,height:1,data:u},d.needsUpdate=!0,m.image={width:t,height:n,data:h},m.needsUpdate=!0;const g=~~c,x=c-g;this.totalSumWhole=g,this.totalSumDecimal=x,l&&(e.source=new La({...e.image}),e.image={width:t,height:n,data:l},e.type=$e),this.map=e,this.worker=null,a(e)}})}}class $0 extends et{constructor(){super({type:"SSGIMaterial",uniforms:{directLightTexture:new V(null),accumulatedTexture:new V(null),normalTexture:new V(null),depthTexture:new V(null),diffuseTexture:new V(null),emissiveTexture:new V(null),velocityTexture:new V(null),blueNoiseTexture:new V(null),backSideDepthTexture:new V(null),projectionMatrix:new V(new ge),inverseProjectionMatrix:new V(new ge),cameraMatrixWorld:new V(new ge),viewMatrix:new V(new ge),cameraNear:new V(0),cameraFar:new V(0),rayDistance:new V(0),thickness:new V(0),frame:new V(0),envBlur:new V(0),maxRoughness:new V(0),maxEnvMapMipLevel:new V(0),envMapInfo:{value:new Q0},envMapPosition:new V(new C),envMapSize:new V(new C),viewMatrix:new V(new ge),texSize:new V(new se),blueNoiseRepeat:new V(new se)},defines:{steps:20,refineSteps:5,spp:1,directLightMultiplier:1,CUBEUV_TEXEL_WIDTH:0,CUBEUV_TEXEL_HEIGHT:0,CUBEUV_MAX_MIP:0,vWorldPosition:"worldPos"},fragmentShader:Y0.replace("#include <ssgi_utils>",q0).replace("#include <sampleBlueNoise>",Ja),vertexShader:di,blending:ut,depthWrite:!1,depthTest:!1,toneMapped:!1,glslVersion:Wn})}}const eM=new Te(0),tM=new $c({depthPacking:rs,side:ft});class nM extends ht{constructor(e,t){super("BackSideDepthPass"),this._scene=e,this._camera=t,this.renderTarget=new it(1,1,{minFilter:Fe,magFilter:Fe})}setSize(e,t){this.renderTarget.setSize(e,t)}dispose(){super.dispose(),this.renderTarget.dispose()}render(e){const{background:t}=this._scene;this._scene.background=eM,this._scene.overrideMaterial=tM,e.setRenderTarget(this.renderTarget),e.render(this._scene,this._camera),this._scene.background=t,this._scene.overrideMaterial=null}}var iM="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAEAn0lEQVR4nAABQP6/AK9PaFLUkBn0Tqy6MW0pOIntvEjqjhwGENpf5p1dEROGFH4zADhOoPuuBr+j2Jjt3pNVF7XgJLZLeJJCwPRHoCmeEb/ZZrQDQBjY21ZOOZpt0pT4qAhEM/1FBhWNeIXWoL7HI1UbTcj2+mYSlj8b/MLics4qBcBn+5OKQcj0B9uSF+B+Cj1qtZuLHl4ftZSj1FDKAPPAKdVKNtdzsyKES59WPpYZsr3renDxWNjdFLwgfVzLbJlshwos7kKABRxcl8Xb4xycMsq1fHJlp/tI8Doomr7MXY0fJ+h5M7AeEao1ycdWvWFPvelyjJfJ+8JgGcbUGn9pH23yGgjsJczdRk6KxYYDVIdnaN/uT0aVGeneYX9zUBX4mO9SydmuzJsQ5AmD92f/14mTLKRAeNsXnrOBw9foN0wbTdYpQyVjP645n7kNnL0T0xk5n0YygsV2sg89BAuO/4aUIymjIc9eTMg4OMcAgPY+udpGmpZUeHSueJ4Mgsqr4Sat3lGeOAT2kNRdZOYdoq6qpiVyATPjNuLjp1tasAAUGOxCrWssciI8kRzAUsI5jgk2VdFdAmoJQpeTZ3VFIEbMM/ocNKmjzrcGFVEUUXq4imNBXuPl5sV7dSSQ7/5ygijYFMByAGo61DXfiz1rhAm+h+6oFgwY4EyxZn6yf/YA7EPHpJ8CcMUbAHLqTK7yPHuPEGXZGbvVh8iq6J+zCoRhScOmdCmd7ZXla77yaPPbIlMAcj2Ph7OIJCjwUGy0DmnnXL/8XjPiIfK5dXhxAvwuucVlXIk6FakhqfR324VcxUqzupAZ7+5icJ0S7zBMKojWp5FXSSTMOInFN5SssP3nDUliFHXapW04WDIqvJx40Ubn7PtvHKtDiPc4ab8RbxYEmRP3gGL5tMfvZWTvhB/TZAZ4GqlNTTGIXaJmzbst2sFDfadJiUP/3vS+uWG0oYKHPmVJTcvnOheoAxB11dCa83rzyGRQHtkckWtnTasy74oQADArM2LnqrM810ZEsqG8efi0yytld5X4N8G0vQ8z90Fu1R3R242XLbUEb7Y6xr3iZzZ9gxNmQyG75Aq09B/Ec2xg3ZiKuD9XsvoaGP1ujbmSjs+Hb+B1Dc58XSldVn9zL6lL9+a9o0yr6T1gVFjZuX8rV/0CcKeqpCDrEse2OuwUgmwg1SzPP1XDBvk9I/iDa4C/bH09SArQAh/ASNBulYlGT1c8wpkB1tqFSMGYwKBZevpnjv6Q/LXjtRPtctN5gqWH1vUvKobR9hoZRZXmz3+DW3s1b/cW1yls9MXs0TUFqlKrWEU1G7syuyk74xuK0B38waVZiuMAy50iMHUs00pNXzzXmNFjqT2Uy5b0OfccIHxa299uAB8lmkc9ogfQmX0rX1kB8QQzNbH+eVDee0jOQNUgQcew3y+0QbifXrtLHXDIxsqsej41Kz7vfcQRE1zUnY2phYNILK8a657zyHNMzPiRhxs28s1JX2kiCMEloubOXnc8BzU+n7LM9wztf63eFWN/eWHXVivSdCWg5DfWsk2CF8aFJrOP277QEPdkWlOlewCVEkLjyd5wUn9ZzaKOJKnDQDLfliiRLTKlU8TOeQj8jOU8FfpM9tayJTDpxw6sVlZuJRAILfxn+QAGIB/W1FGDjuuVu62hFDBdvzVSfge95Ebf9pclp0GrpV3S+gwBWn5J7aGiim/fRyIN7YVVXJsnAnVeq90vDdAV0XearTqjT2Ck/AMkBW6T/ls/6VUVnFWs01wxkahKR0tRwyLRKgHefm3RWie/pTVQpUMZw+/7ozQSW+7vuZd8lsvT1iX5rwlpiaFnOnDbHsr1As6vLETd5HVbcBCGbJHcS7ax9Byd50jdYyagUtjAaHYX8ryyuR/bDkw1o4j8+hXMfbzy+CVmgrfRDyl4dn+5LxrqRAXLoDKpQREAHqdLSsVSJh1s8KnZ/SsUVq27cq+O6LMSBmhT4X3E750rmWwCsoCre6bT//oFWYALjp2SbcxnULBaTvnYDHtfEbO1m/3c9nJk8ZO5KHQTV88ivTWN/S2EXwmisTPdAHtc/rnIFM5/38RZoIb4az3/mRVtZLQmV+gMfpKLa1ULMJEZ9XRdkBRZ9c4wnkX12QxqBvBp6pWqptU40NAaDzMgPkxRXsiRrN0DPgks5eyfVG5mehk0gZXY1rXn51EphQCZcWaRYEmk8wHBPw3ht3xVnAGeGbdbMf1LSxumg/SyB/Y6Y+9DqyYzJ+RUr44uNdi5ua2KgCF3ANvn+ktGDc8bB8cTPq/0457gAryLDZyZrj21XjgifxFz2MZypJCUVc92ULzfrqR7hT8hMXLT9JAGXW9a8aTjQrJzBYZot/xwK0SL/hfZbz3rWLqViel81CEZxDILyzagg5b4/DnjlOGrdkETI0LxgOv+nMISYEjxTcDgiJAmgeIP2RQw13zB/PKwLYqpzg4Z5ZiwnGYN6/gmfgdX6+qmA3rHFIQwAGFEx1O14eIkCCdARf0FHZXWw2qHkRwy9A1hhrn5tuVCftGWLVQUK1CQ/oQKYaTGY82SDYIZLaaZ/T9YS5NlLI8y1tuud+0+CV46YneNKbSbURT19AdCjU1m2L4pzOknyZJghW1fNeHis0lwvcWbsFt+2mOaPlSe4Ok+Twe+oo6PYMYnKThHQx3XHu6aIfQNM5dovA7QQj3iTufpHyd+qLB6SBRBnWtF6TQdWIzlg3Qktanh/g1ETwStwY1Idl3nz70rALb0pw9KjZD2KEU7JAZyydzSWpi9FeLBG68l/DTK+zCjCdPodvsTCmOChEab1K3dHOgAV1h6i3WNUE7oAv+XYXaC8t/isIBuRZy9DGcOqrzrx5CkEaEK3Ci7sFJXdebNOUMbqx+uwPXgK9Nmv71FjQSID+rzmuvWWbmShJVrbSHq0QxiAJGeeH8OxwXLUmbX7KT8WpYsGzhB/y2saLd2UKJ8715J0laHc2RwNScOwXDUbGL5fiidGOqTET6SG2jf0Erh7Z41KHo/r5VYaudNtcTFDysQivw/K0kWzpnbhxvOfyayIpoKOcF1j/N5S70WscAsXkxlbeOH01KrH1AEZkHEt3+Q2x0fUmeJyWCBL3AoyKi3sydyOku8QaKee492cjEF9F8a+ZnOiFJq5TlzPXyRuYg2UEPa1rBmdGNuhs0wBLA+qYz7g2tVwE9TEaccmfMzed7JdWBFdBNBB72anJwZ6jE10YeswvT8A1xJNzh7NsyyyIwYWOfu5Q8adV9KnJvF7VqK2rd95lMfpBAw4Gg1HaXJUKv2TOpjGKBeN95ymwig8QqM7oEj1WkYzT6LDA8vBbo7yCUm++t17gRgSGC0vcfh2YWIlGvcaHdMSlfWkbe8nM1lpS4HyvKp+H1CxzAUj+PJv8E1nwwXUx/LgwCreVjNN9/tmwqcQ4ZmbRPnABcNUDin3R1okbeAUGwt7Ja3G0ntQokBhlajisyXeqbfPLrTTKpTauclKp+DGdyBsbzFHEYtIqZnlLe5wjluF/UID6EgwWPGj0FVKM59Jom3+0Y1QTb+IKqHZv/0FIEEuVItlJHSixdza2w0UN80Hyc/eUGv6SBybC/EEs9cOcLBR1eeQXXe7p7hfIhtxxBrGhk9n7jom/4LXF125WzPmMCUiNyE8iO7sVSmRf/iSNFBveZWGPeCirfJ8a43fk5jCfA3NPEJyMAamu3Q5im0DKo8aonWXtye9iE8vraixlVTAGSXFMjP3+XiOE9jrnXTDzARnt7+9gvHctQpaAI0za6N7bq9R1lb55jILwmx4Ih4OA0K1/Xx7B9jytPFBRhEO8xqXLhxotsIRjnGRvnkMK/KJ1YhE9T2mNmclLYgMSn+7dzik8BzoHt+EcXstV8yNpTspqsnS96ATq3A66NbF449w9JqViBt4gWi7yVzt3kR4XSJ8iEB5anMqG+EsSyrMQVv0sMeEysGx+yYs6G2xPJw3zqTq4RzDQXPhYra/VMlt7E8zzl4D7L3HS3kkWf4ZkmFmnjcENPQdkmohl6p/gqkOg+8McyzNxxb5Fl19DsSr3MTuSMqhSKDn95ibzYCEdrZXJiKaqu7BFBuju+jSObOPchog2IsE/u/3U/UK2mnAFw605HuU6/KNabgBvXxD6qgzHEsIWK3RXxKY67sBTxcZjd5JdvovL6RpCYORGU6y2CZyP6sPfgo3PstO8svQ7Vn0n+cKOn7V+U4WC1t3tiDS3l42s+6mnFjEl9KmclE0vhLdhN9+dX7H7NWy6Kix4RP86fbA2L9OcvasBAgqzCLsSvdK/jwP/48uxrZYk5KToOpwIua6wgsOLPQXAoSEx7CvG03IzYgATT/qGKikhChSALpTwIuKuFZt9WJtKcIZmUXm7LAhxpSVwRpg/96+iRuLU1Kq47rZc2dZHj58HczU3stojmnB0dg4oSOD05pKJO0QPKkoY5XFmF1BLSMS9njp+g1LhIGnBl8+frSnqlCV01SaKaFZ5TktScSlliM8lTqGYCyHgAposV8kA2tn2i7jbzKgQgW6Jj1SA5iSq1JShxbHKKPEr41O24N1uHs0lzIsiXoJQFZCNmIvfgGTRB7e+ZP22kgq6zevkK8R0S7lVrZbGbwJAlP1sRLO4UF4fRAhHJsoUBRWo1r20Je6R3WPAtdgpay4y4V1rxHVSNUbZy8Bn5HeUFX6cuSwvhOLqW5tfeEoVxLIWwbmsr2km3meVIYiQEs/8cWosv8pfRL3o106jgJL4Zg8GT6UFnHPpiJ7Xa+9SPyXi3WKT/k+a9ss5M8Jxqg95nsA9RAgohzAAHIKLbFeGHxfggzeE+VnV/NPFXV4d/1Fy6wHXDAxd0CF49R8lByDpFwR+w1yAmybfXjYqMEV4rgdHdSfxaozxXtiJTXV58BcKUbrAeTy0r9C5PwHSNYEJmqPMMC5p6Ify/a4jGzDLFgDiPuQe9XfpRkypcceIUJ+IsUX3ncmVFLEXKRq4AEtV6gis4IJdPyxbskKXvQbIL2RpBB0OBC5Jem3C7Yh2fu7hcZkY51e7/Dz9VoboNYoCE9zkzJ5m/3RiT7himOX0Xb1qGrcXzVNwAYvn2O3h4j6gtIEA6QAtfbcFX1gbQbq/kk/su385khOUNAt5nKfP99VyHapu7BGSR7RZ1wYGk8hvn1kRgGO9CtdCAbyh9kxOiDM5tZPdvwp9qWsk7qSk7aI4D97mliIBVYFdJQ9FhkdD2p6oirawRcKs572/689j4KUo1ndgREi0KcWPurZil2Z472PcX0ddgkPKP2is9bfl8Qks8tLhOX/5GhVAq8MYy/IE+0hFCbIaf/+f8rzxSR4CZYLL16foEUAks8/r0uq5dwYTLG4/x88CWM/BrFqaTkAxlbMJThxGhRP6oSJoQ67dg1HzcbbdtRluysCUZ/f5rWCI5Z58IBEjxKcKC8k67t0rFRs0cZ2RusfgYrHlLOe5U3W9x/Chu1D3h9Uko8vcGRxC52q/ceAOD2R92MZugTHNe/PWAZesANg9eBbm2p+4kqK52j8MW3AhqaffDN+kK195DUM4FLVYm8BQhOF+OWoM5tTD8LImCNRenutbU6qRxpaMDXCBU37/K3Y7eobcg/IaZaBuw44FteI67Hdgufk5VqCDjlK7jDBUtVq07hpPI9ymWW/m3nNLQlusNGDSBNYXOUBDRWNnHira/1eo9GEwVgpXn2tG1PUUxT15p/fbfGXCvpsj0QlzwErC0ge/Oqlsh7E0QhpqDAcvlBJOiXDD/bv01SkM269rmghWHJPUbmpq4trj7H6cCMXMIwWgOLaTXR0w3tamzJpReC8FXDNwkxSCbmg/ag17JdPyptz7mR3k6KvXor6tFCfEv85TW7CDWLEap1AC12Ym+LK9/CxdKPnXz9Qz4xNXGn3sG1wAfthifQfjDyiCnLo2uhuMzI9yKxH4PUTt52mReMLmnHFrrLpDYcPC+cU7ge55guYhGv/ANB92YzoXrI+Hs6gdXnnfE8GGhfydGwvKBKCtpDecGnu41Mz28j9/LTVtSV9WZEoxANMgPGo4BDbY2p69ixYGQWATdyg9TRDAK7f/Lrlubat60yuVZ9wcwqZ7NBP71mX6NEgdvfK1EgMnkZzsDQl/wWDHdAoOYCo4pKwY5I/V26cKTO4aMYcV/YDdgglOtas2KtIXBJAEydEIkqMYVZ2Uoaor3pPuOWwQcKOw+OT/1URDhbmoHa1EAUYnlgaBubJjGrEbF26+Q113chkpwhu+0S0fhftod7JXgNyfjCQTNQ1FGEhIznUC/kjWbCLaWPcM/x3or2IXM1UMJJv55v2kG75ISpiu8ULxYpKLw5xkOPnQpXzvXXbSGDPqfo5nLUo6Hw7Mo24IoW32ZWVR8krMP2By4vner6hMcYYgoXPj7j/MsLXc3eXfLgWf13MzTa4bIEagleYXeOvBb06C46yHUVXKQTWy4zqQL97TTlVGeCSByfb22LFt8ZLHuTwnNMh37nBNcTUeApcK0aXADsvoXFL5FQYY/ZrPUSb3UPtMcAKOOqVV2gM6W1DthvhLyfiQb+b8K+0V9AHR7978kyAgIsYp2zq/lMcQ0HtZg50nQ/mzcZDN1t5eNQAbljZYJQGzktnrENnO/UvuN9QeoFuacdbtTiD5RNgH+1bsHRhrQkBunNYVKhVAfoJtjqr18zxxx6XBZ3F5Z2Nmb5NyYEAemN756bDxPmZSCXs6a+SzsPbGTTj8ePKfNXIE3Z0jd0GDFOQHWR4v20w3RaDKNjR10ojymKAc/2U5ryFvsXZtkhr8WpLokk88eeXI9tWX7B4gbuPihyZYf86S9pPiq1xudp+TahzA6SNKpShvrp6GK3VQMzApetAKDSuv5qjKUjqrL9MUVczY7poGpqs/3tyxt3tZZK1uUqrqpawySKzfdAD66IztobL2trwL9WTT2x1X7x+ivCpzJg213GSJkvmAF2n3Vy1SC0v0NDEirkWiz0AAU+gLB9UqQZZIki18oU/4E+SG3w+mdScdJ+5d96NrhluJYHfAUZ/FlHhBwRxJ9kgl1UMJURELbze4kgtsvKkp4BeMrXN74DrnKxnHGrnm8lJ/bHSppITKJvlx0Ri4OMq+zVv2QKvFAwk44psNLp49tODWKIobWUzXV8IJgqaswOmOGt0v262iOxRFxC4KY1UpwfnapMhat058thvJQM9TrTdE2XRN8IG6i/F7bBOVLdTWsk6pjzZhISVQtH+mXzKKdBz+VWsE8QPpatV6HkQKCBh9KI7lfvTtd7Idlds6MY+Y1cjRrmQ7amVZRHkiESNOT1Yu52XysPhLk+WE5HV/6p8fwJkFwASUfJhG7eQPDmm9kajHRvj9M7wyNIDg5xg0jtsOGTqw9c4uS52GiJY4m2zjIaQ1nMLHekcuXlJoi0NuDqWhKzumt/7GC8m5vcTiS6n5+wzYP+UigcRHyjcslGD+CrZEjECOV6O3R3CIah+JdwkSv4Ae1rRVOm49JkXjSSIrS/IK2G1Mmaag7jA0+bOVkLFozhJkUmzIh+xyJBCD70btFsANPlZs8UGyu7+Hxb64E/k0YIIyG0d7ZSIcU1dOwyAQt25Ow5B4W/oUhgU+Gf+qB/Eqf+V11+GylEkiyGag2sSabnAwgaqTr549u7USX8FH6EnKLv1g9jl2zIU7C6GM3aeDn8kP+9aBM0Agrl165RV4/UHaXPnrBjs3YOHlrMK9jziNkwwt6+rC5FPPvSm2uVuOQouD4+Rk/8X2VoT+8bijB9PNpfsOsNhiSOVgntu7dzfzJItraFExs2ylPt0vanTgZJP3SIxPvZsgaDSBNmxIh0KPLS+EZkJ1Xy0gY8WVOZDbYF9v0GJta6+GUy7ek8lisYumJ1nyw90NF5n7L6H1aFMYqA/WI2COJA7pWaf9Ugf5pniETIJNyNXtonwZOLeCG380p2a2m5Fs4WDJIbVCtkJ77ah+h3HMvJJ0fzW8OXfnZDuzbWB935lP5zr2+vOc7CL44LjNt8p2deJJKd+d8n1mwKwxWxUjkxJRVlpIqwq1a+Sfeu1oNGDaOXyS/LVoiWAi4/RFFK77j8sVBWyTeqc13DCYWKdEbHTgEcIdtBewm3fvU99V8J4gYLJijdis2O/D+3FBz8kG/SwAXwjzKgO1TmXuA3syLPxxfnEUxttkUPpzQJgAzcN6o79tpHr3QWX3TVy4USKZJPX/G7/sFv7TB2RKaM9LvG8518UTl/AAYseE+SvOIMN/hIc1oJxdcn0K0V3JExW55k1apqhIqGkUj3UwwtJeO7ekZtLMmUzwU9/+jFltEAO+VlkLJvx9tviZBUFlncZZXiGPg8KssDWpC8Sqz1cuxGehqX1ZpJCFZHMsmYK6ucYZFzrDHIAB6OnSkBHvSTQzxH7OJemFNtLPmNTbGnZwV7USF6Cuo+qMUC1hZtjCyb1f3r2hh/vpFJWkPkN8jyIN8UgsGR++dlpm0eKRDa181jVPRA5hp9n51+JCNZnGqsPFcNZtz+NhlJs7OmAnQe8L3Ch06BOTl3l312Y2uczQsfxu+0jjOCS1Rl1/8ORgzXQQXzIyFsWq+kxOL5NosFQ131otLNIYCq7jXGwrGwRgcU+HGjNhkw8Jp9zhTm3wlruTfhzNv2lOw3YkWfCXwCZlKkjf0rMGgRwPx/PQIByKjYqVoMiE8XxXQeQRvBzZzSaSkFrOE4wjV3hzGcobXmeUn6Fo/gP2D8fXPuMgQdLt6cv2y36vX2ImmosW4mIoPY1PstfIHNoBwXEgn9+jiuh5lK8dTJ+CpSNJVw+KzMQC6TgWCqPGKH6WfpNlbxvmxsMi+sHVSX75zUHrddsWAd1UlNpE/Mhd6Hl/m75Bi99rukfJBXRlQi/hKd8Uy9MLSDT991poF32tynG78IGluhspmAIjJVENkZAHOUFKjmYZ6TuKgBYMxxfp6MTfN+T+MX+RLDnD72FsLcyt1hGFRsubbr8ROVmQduOkhiA4HguLDIHtAeKe9E7HuG+jY5Tx1vvdBpqp8kqmPN69IpWnsOOqpsIuEc5jnD3oW5+GDwqCEo0OOEVEVfvnX1Od73CoZEo+nFroe+bXUklDTMrBcKD/pTdoBk8MTn64WvcFsQz6YpoRAVa7enXASL3aFGwi0w0A2blDlVYWT+LAE6qvM+wItEk5xscypgBxvtyPv7b6wzfzjkx8EeluWlkkY/jOcJkuYX3b4ppbrNs+KROkVfperHEhF914xVFYG0rrrn5Z+KmX5oAcTbyGZpD7TIeFhwLbqkVXYAzi5LKnYY6nPY6zVaUbGC+C+X12ioTV2DSX06K8W2qEqaKo+mRKdOcbHOMuEK8sewUbN4mL7h0WwlLIgj5phnVD1w5+h+8KBI4s9WHq4h+jTxeWruWla7XMNA7xICyyjLlaukL8xNZrvsfQBYYSBBN41b8xlrO8fiARidoXxvCm+e6ubA7D5nXa3NLNnaGrxrd4+fUqSpGxEwFcXEsMB26QBLGEzTzNSoVZexD6UKfoDaLcj8e4SNdcRuOwq2BO/uMZQhaWg8L3/RVnrHIxPaja3IAl70npntBgDqOkI7LbVkHEYLsFmW+jhtVTzdsWXH8lHhAGFEiioYy+r2Rza4OqKJPMbx7t0CZCtpMKxYQ5JCowbAH7J4Y3Eh3C04j1H/2a7qH3cVo01mg0KjVVR59qENmLLCnQ4LNMS3i2XshEK7QAIvi4D+egZPpMUywog3s+tqRiaGXIEMFp3rd3TuvLXVT9tpJGxjgQLGMKXmGL1MVjoN97by2NaOn0JoIbOQqeBIHTVbBYNON5DD3XP+rStPIfVbuHd+90TJpGh8BlfV0dLneK2wDMnndVGVvQLhvaQxu6sL3XsvtxmQzeFWUSHLeAlmTc9yNQKkXtOJWS9faewS8yotiXdJQ6EI1vpVOHgh46gljSllVDRx9qlH7i2QFU/dKpaQEbpAFUBI/eSUGbpgT2ORGcUGXXDWjQJQo+nCkQVnIMRUCP367os5Iw4Rb3LDvOi+/mwcBozzUa4WkjVcSIURKO3RTFCiY9j3O6C5MBS6Y0WbBooC0nOzhKxL8xMIIaM/tnyEzIdlABrz3f9XlCiQ0hh+C7/bNp14eUvnjcHWjBOSw8E7BjzeXkRQkpIuZSOriwZ8PiOLZxCkXFOQ4hbXa4Tu69lccJ9Hd0F1lxkg5QnAhhfx5WdcTkBH3SibBUMCLPb/cYypz6s4GGDMV5smYibldp//j9gbCEhqanpxLsoexOMik4SOt879z21iz+8V3wgG8CicQsmxcsqCAIGuMkr/A3DbI9pgH3AeJrcDnozmvg6mUC91WM7W+uxzgjwsDLXOqqmjTIzWF+LEd4s0Mbq59dpf/iZbFimoveEEek9uejHj0/eOP/AaB1kVol7UlN6vTfrF3RdqTmoIjpJXzrGoB0AKG/qyPsRLDRJTvDSV4KL/TyV9h+5xFAd3OM7cmQDuW8fDSi4wJILB4/6azkeVK1PUcuWBD+mQtDQeIOS6g+1Njp8NbRQ+Ufd5sokomyIiUTACdZDUTF9CF+zUhF1sQ7qyDILu7ZipLJ71YWgfezT53g/ZfvxQ9xSxGK1uJJ+Ux2zf7mLGTjvAQBvAc6i6/eXQBRv3Nkg/faGH7yfd8nHctdPjCoSsldGa5/J2/Im4pbkiQD6sPsHnLeEkZQWt/6N7zHZYRn3cwxlmMoXdHiFjgTzYnvLTP3OdYReq2cZx7R16M4GSt/oJs/VUKHiLGFG+Y5c73IDQDZdCp5Zg1+TV5SRFaXJtEMGITlI462O53E6moLoe/RdGp0vnz92ysQi1Wimm9vXeX0ytlErM57++3D0k/1oCQ5rutroxtP/dgTguUQnm2JwpYp76s4aJuD43bRXHpWDsndvJkb36EilQudlYfhOrcuaUwD6hR+ABtvM+Xe3BsO5CjNISUj3kpKxdoFZ69TEhY9B1j7h6iUyVO0vCf7nVI/oFADJaHq6p6sRy309NWIdp94g9vRFp60LMo3nYtSOUlIL0CgTPRvqAGoteXDtXKJ9kBc91Cu8O2YMzPrz5m5NkKkfO385W3U0gIay186lXy51gQP+PuWgvtAUTGeol/ZR90F7SlPQ9NStx6a3YpS+OesuZbJd/FUGjG8/YZNC4Krs4jGNNWZ89lhOApRxvXBf3u7LVZp/PaDRVBPTWdUQHPeyswxFhy6CsJQhui9tP9ho+/zOjw4bL4WPhTM2EYPr/9I6NoD09FEwn2iwQ0VbykIFEmDzBtXa+qMe6IXqQVEtJrB6v1ewOmPVnyg4Ei2rak88ITl57lwKBXNS7HZVfzb+1x6oOUwKIWRmtZjp+OEsmNX8jzAsS9UJsb4QQu5sQ8o/Q1JwaW43QM6wVtJlM2edW6w1Vt39APKCi+hWAX9JsCumMQzCaIKveDj4KWcihygWLyVzH7OrtKWJxJ/4z3k1UDCurmPRIMMObHrY6sHUJsItXmtP7qDcO0Cj6KwlmaIRbeFQfh1Mvzm4wg3ca8iIP8tMFxjMBcn7Usn9L/xEjlWlDTh4NWgNEkNCjsMf6KgZ3jL0qMWXO0qr0Gh3Md2S4OyNBUIEPe/fSrlRk3xjYFr8yDJx6jDZwsgiyTDaDUCvVwOFpKvurVbglERHoSo/rMxOipWksIAD32+iXhqiMAMQwDJwOe5HRWZKtCtH/1/2brHVDE381FF3JIILjZf20UTFL4MLwmZtFv3M88Bv1x6hEyoaAlZ5p5QEWzlw8bJBt8orARhiododtduYtJBSF7octT9JzbeKdozaif0LBWL/u9RjbeVNLZ8UV44Ye6Sz56Vn8QlwftWL01WoPryii3ZZ930Zx6Ins/HGvGQmHAD+2qvuKQAs8Y6ublb+Dvhp3Y2NNMjsuzOvb6m4YtkPzbhlctKadex8tBQuo0zhmSxfDIZm5VnEDdG2vZ6kcykYFxgAz3wrkVyXQnwxyQIeYMIHQYT+257jBWD0yJIiC3PqmohMzTC/65XVgSsowG2kgnlR7pYY18nBQ8aVfJ64D79rH2pymM4xMU1Zk/OS14XiDcldhO0c0RhQxiPSY72XYxpiaKVYmzOcEvI1PzQa7+LVZ6pBIwn8ffWvhqa38b3IskTs4RBkYs9i+i9/AqdAQg2IOeWv2fuo5tEcFyefI9nATJXQchbBEQO2Cj3kaBe2X+81o97B22kYSwjOkgZybf53qZFQ6p/N0dL/VnuL1cYTGi8k6rMpkKGx4j+Mc/fcHUVNXTKhyO10FkvHiN+qSbJGepJ/aLXoLZ8RET0Bshv/4hAQgzeS7yl0n74cedqdnmAeHmQ2CyXvMM0MWpEvA2ezZIKU+WvUSaGpTt1kvAEHR8hZrGn3Du8ZANi0MB5NMOKCssyFU18tSklwjGGsyM7QCaJxv5Rtq56/qACklsHLNVBFNarTjsYZFJiDG6QeeWTn7FZNhOLfVxBAIn0gtlEne1XTkzUAiA154NbYfwgEmqTNKX2ecpJqMZg4Pt4zKMcdZsbhIRXwK8Afwh7DpKh09KVfiyk7Jvg7xd1hDZud73yMwyiWAEhtzyPVV8+GZ09ypVyZ/moyNlwLZXMZIwX2zjzreFg9Uarzoe7LlyaDrMHP6oNTfKN72+YSvfInqRmEXnPxR2WQl2Or/nzU71W4JHYHeXIQB9ChRmi30d1UgtrCt7JHEDLXUmWkTdSg79+Ln/miaRSzQDsa9vn5uy14VUhb72X6pHZ0g2jDjuyYCJ2/RsssSv/KopxRqeO+LHLMBAIzkJXOrSvusNH0zvCMvEGr14FZFWbIr1N9ImpceMvxPeXymGrNYZmuRELmiI87oLlZ/n18UM/6K25RqISrK15tfQV7K7tTkt6qXmAExN0M+yYrspQ7IDlO5bGMZzt03uQkoRimujRVZGGMwCswgZu627q83Y5Idvqe93nTxLhDfi4JEq73ptIAPtgcBI1WHNe/w3yOuhh/ljsT2zjBOmS+jcFmSRaqkXQzW+RreONQL8m5m/D1Xxq9f4P1tyIgKXXa+v9tAnEN75M30AOlnKVCQSOVi8qC56n9dYycc4u1z+4nExon14fBz3T8Dr5m+wNQRXH2Nh9cq4KUPSy9Vj3PH+Han7hPdQTavA7XBKpd/9OqxpOILDcliO+xpx/SCsFLABZa6VJgN881D6I6K4oPP9gm3d047AijPcMZYgi8ij54CrDNShZKjOmzBbcsWGK1NnnsHMWDOkZCyM7gm7drY45K1pElaCEuZRmnh/QArILAg/LgSU4NhRvozl8E00grxiFjokj5qyCinKhCElb1HDFoRxHlCo10zHbQZj5fLOFoqcE2Gto+65mmtETX+yFwDk++zRnqf6tIdCnVkaOVDxEU7n4AKh4LbptXWRD6ujh/CCwPp6JHfDFz4QpKPs4JDajZay0HsOboIlQSPk0mhdPjYf9JSKbAqAUFpQ2nFQ/lcd8d2kl025KelEWnwaO6+FtGDCWC9DJ8BTOZs0gbx+OfZhwGdMs09PXRF4I1Vvf4IINi8UTushqORU6RkEuRMDEoxt3K7Xd1OF+Ajvil+VuOkwuQf1/w6RIqRYVi2hOq6WDtK+OCsLEvRnvR9nXxWN0Db1wNbFhzelkduR4ENPdbvxZsXJk16b13qx9G+cUYtTMJhpqyuGQE9U2qaA/PrJs17luMXxVpFQzi+85PcTbQedwN/nSayM3OTkwetNVF0hbUJF94Vmkp4ACcnb7imsjeiBPCZgNd2Hd2fLIQOaLorPkKjFZcGRaNO6lp+pBPTMvw9QIbYuQZBlhu48VmV3i/3Y0m71BChUWR3cdNSS4D96YC5J0Y7ZFqMHBW6G9p9pf1EMvsoq2dzX2wSvNYXqdP47zyePLrk+nreb97cBNao7U34lHDXeFQ+HqT8XvcE26g42SyQZmHFRlH2UZ0kohpcgm7Li2wAo0IHMre/0XfRV0HtarB6og11KC3Z7/RUcqKzEPA7ZEJQgZNgBZE02MFT702HN67p516Nvqkm0Gjx83wQdQMeqxlml8LDK0V5SdTdnatEK7C+bhiQ3CLRBupVuTeGYhJY/BbrqiE1SY1vdXZ2SFuvNbcrI6ErGJV8/qH1acDEtu58Cm9IYXlR4R//8FS+sjKjiIPcuzVQ+9bV25MODrRYTzxFJYbLhp2Um/HKOncgLdKHj7tOrMZfxR6CrV1qRAGh+vD5dMMDkqvh3RtFI8M/B+95gOm4879zLjARkfVycAOqjJdoBfgWjWNsJnafTkmc7B3nIQv/Doeol9zaGW/DlpeEHHLSCVAFpPcoRFbXqIB0NIfCnsKcK8GmaNVe1S1WmDjR9kV2WjYdDpu3d+gX3edjZ363f9jQEbUhFXtuRXOQv+gmYCubqBrqUoagUdP7xj0HIFEZg93/KZ2CrZfN9t0AAHTDAfs7isocUQJYSGE9/LI00UVZ4WtwiMIH1CSle7PRTzQNcWKt7GCC/psK/GXOulgvYDTYfKQeiB4gi6bXgBPLNmcpJ8o1mphQeQWvqo3b+Y87VYrTUL0KnBdyXd8sR+Jyf6oyIU0flr8kUkEAXZllYnkQ/yYbM8IX0IOWvTPRgeu4/7psBQbjsI3DnIN1HRYNOOr8OoMTxb799zqJMHiv33jlhseNHvpmqg4UCSncqdGeJEt1YrmIq8sIIf8l/2/Medfgt90eUCIS5w4AN3pppMmcwNMHQOcuhb2m8D9O8k+gfYZg7BTIGAOQa/tUupE/OPP2chbKWedaoiWbsv1hEC65wciV4ppNAJ5Stc/RafKnaeYHHN4OJU4+xqnqXoxgsc7jGDwcEArcnV2C8GkiNxgMpl7ElXmZ/xzSGnDk4MpPB2QoJ55N7Nw9eH/2cj8WVFwhjLywfecoJDQQS5xWL66Kcs1cZOZldK4HmNgLaTVHpfwVgMtKzsbeqD5ZrfT9JllWw369shY8NGqz0czP9XZ5dGvEKUbDMxFlOenC6qsPUZOMtSW45/24/KAkbF778QHoCTlQIKwJZ7YYsPmJlfzLCobJo/0IYo46xDnTi1JWMAw8+kqjsTHwtPfFh2HhBF6KN9qwu8wp3z9u7rz3L5Zj5Lwg70tdXspjOY47AP1yfond26XRuFcUMMir2WsQlqz2kRyMvSnHUeN47/Y38pBlE8wfSo8hdRtEpMjBzHmOcIAJnBKfQfH3w/dhkeBUBMVwA/0Zu9Mcn/Zq4NB6MCfmOaNba894CcehJvqRj7dD7wlUl7JsgOwSzKiIi/Iisr5hc0dDuxST6FA+XWSdXip+LQ1CSeFJm+9l0x6kdarPCrBz6btQWrNozOhaEzMqF+WknE89kVSR9MbKOkpMcbjAYN7lG5c+H4/N0pytRgA1/GSba2OpeZa2xdf2bkotQUoVQHRZ3wQd0odUluCkM9pi/mOLL1sLKc3hqeFuqUxSnTA4zsR85CR5AHy4y46n/k9QMWvaIPgpe4EU4u9G0lo7EDPRdfR6h9SHSTqHqyzEEy6blaRVP/xuv4bMRurBbJ8zCe5+90myIswa3K4qiUKLerCnvrj9YDjVFbgSD5QyQOPWrZL2n0nZEuDUfs3IgBa8KB43SLFUiSqg8QFazNebhSW+HFCNWeY91oKOIC6i2QzHTbWCidT+6AUxkgSmRk6oLgGF4/RbXEOLEm7sALxCo9Ikh3xszWKQMzISFRJfjubVS3uLP97hHfRrK5em6IEuRykMF91yvFZ4+5X/uaiEIk0s0Z35BKXccYFNCwGRuzksY4h5FQ9oBWmdRoyoSHnXHu3RVMGnPKgPFLduAJVN9l2GH0nnIedokXyCvBiq+jOf90wECFhhyXgaKiOos+J5t5i72+cySCooSeyr88ULT2mwUuMCLDw9Pty72PByiEtatpiqNeZF8Kladg4jD+8iY+w8ru/PveAVmrABMft/YevFyzmyB1LNidUz8yrnolKmitwK2bPJrQzSfyMg7RCZtnj801QmxB2Hh1RdODJ04NYCR84mkyeVmLrySQsPfWBiZawIPusj3W803YTrCIFZh55a7RhYSAh5uolGsv0TMC+pfZ8CJFMfhrjIkPX4iPlpoVij0m+1EDPaObMhssohxiQLjAb8un88eH/6Z8SnJxoDDY9JjIkM28xe9G9BMqE8CdRizNqXF+yzFoq+i0JXmGCunk6mGwVz7dw0Aht2yZLXL1jgrrUpP84ikBVljLiJmABWcOUt5aq4e2FLPP4IYwNw6/6kBGhUw92jqGvzzSz2IXFoSGkFThCZ6Hdi95k3hbTR+UyOtNXxKf3qOHtoG1+tO5u2H6XvCe4OZ0IsSdV2C22f4X0XRjnoLI9dkAJcmaPzyLbgrWgj/dizWHsrNz5PzGCCZ7zywhZMyk6RrEJ5ucZ5k4Fosm8+U94ZyJFHYaHthMhJSLgoHd9plpggxNFeaBMx2BdSg8d0qM1P9s3xHTr7n+uvFsfU5qJafAkyfAi/gC+OLxCw0uMlAFeeEK4KuygL5S+Vv0hpelNuEPLNPNhhQ9GwnWSFhTr5Qw+TVgefuYTlXf8XbxiJr/CvAN0X5HpOZXOyq53OLHs3JQaTjrBezRZochRFxkOJwaJXtISGhU1NTTOAGhpJ3j0s2cJyZKBZExRrQkp2lxWd+i90NwjIRyo5cPhV4/VtpbU7lcqLwO5nM24Qv92tp/GWQfPZEiVrQmnwgs2ftLd916D1SEDH2rT5Iq2RmrYqwmt2OPICOvcZ9ONUgMDP3zjXg3Fg61LsRazZloUrv7hYFigLkeR6rhv9NVd6fZbmzEZRcZVt5rQ98g6J4TOq1pxj2JkfwkHCsu9o72ZDHxLxezWqhADmZG6EtQUhwMYyPXAkr8r69yUHkGXTvU+Wumrn4vhYnvt/+Fp6ZHdAENU34Nij80wwWSqiQjtvWdHC7MOYjl0THhcyUYA13pS1llVDXb4IePCIt8Az3I9Zp6LrBGMZvEFFlRbHK3+UDcFqeWpVut1J0wEbmnePg9r2xJ9iNSvvvMH2HaqmcLpXy7X5cWYYFM/fL3soIIfKQZ8HqZsI2eDY5hwN8XFKnXYxqq2o7CvL7EH2BSQeWd9b0MQ0Aapxg7EU5bBkcAkR4i4+7Iuvelzx65AaQkDorWuYckOh4CXfvSGYdj5aTTZYE2vps6PyjCVsQ9dmhsFD/FTgAGp7skzOC9Q9MMro9LRFQH7snBncBDjeH57AqpbeU+ktaG4J1Lraa0uLOVqc0IM3eFPU0VyRK5YtvqNm0uwP7iEgWYYIf+u/Sv8y3WuoFrbmcAL0xjXQmwDfbsGbYtx5PZClqyKv8wx89NPn0mC3HObII4GObFnfxfZxoq4BqIyAjE8VMxplVco7AvtIme4vvlCriwNignpCIMpV4/gwGVSlBYAYF2FuftW8MgEjFJbQeTIQnGjLor8soWcNzCezo45ich/rB+88FjsBWs7cPikKZehE7pxmeMIFw5JHqfUQ6VxynREcuUdSnzn4utZeJF5JTlYvlLyD2xrisU6krisY4IOWlFNF91fxCnTroG2MnmCpWE8n3uj8urtmfgNJOJNoIh4lFapKAvDCsU18ZgoUrOvFq8gDIVMcqPODkXcEzjXC3Zq1SW58h/roJsssfYihDwA7DIo7qNlN7iQ2u1p36/YHMnEKtNOlcSMK4ZNBVfwQ46s6rjTrBCV3a4phsNBviVVOP+QTZPpROZEgmM/XDjnzQbW7T1KFR57tY3z8MBpWk3OxlMT3AxZxIMGh4ec51Z0sDwAHV8+aOryN+BKc9DSn8ddcJlI31vJ0wJ+tPwsD1eF4xzNss126vxAPYVIpqT8h/oDFkHPH4hKWk7ZO5dYgA8bwzvBDHZWkNJ13ABhddJz3kV0onK4Jbo71w6dhI4czF3ksh7/wVe0vAH8B/pVGb1v7xscPIhg6KL+hvTtq6g1+kCPpBURUhkj6yrfPgZ3/Xtc22MaQJp0ouI8smF0IW7P8ZfkCNRlxyoz5rOlXJ2YoBYf+hZJACLpIW6Ecg7s2fptIWtvuAgGvGV7dSNLkYv17ghjkJQx6tLucnApd6V56PAKNj/7Yyi6MOC9uwvXC4HnQSolMT49c6/5ZRIfWauOyw+arQBxET3gqjgZPldHDuhPDdYxffuJ1ityuwa75OUwVzCfQ3DhhKAfuieBFYqqN1i5usxjNFwKad4V39gjt2wLjcS1yX59qz0LCyVW9KbSYU9A28hy5DC7hdtdQxRU9PX4vfg8R4KZzpT7OhJe4Rwnuob88KsYJT3Xdb5uQj/iI2b9k+IAL2RazReg2nxwi3ia771jH8mWcStAs1NJu+cMgx6oarFqLe8b1HSRxQ7za0WtQhVKdhOSo+l5MyUbO7l4rtMf8vOidRDYSBoESyiDirZR/lirb7mNwOHR9B00U3KDHjR+/6/p0FjHCVpWNOzJcWfIRQkZ6XmbdXoGNbYi+/6K31kVQSpEiFHlf0XTAzQKDh03BJv6aoldSXInQfAEINY34mN7TGvaILI1iq1F8qQD9LdUyM1y1GkmIcoViAyaqPmTF6srtADoYLrt2347MTlOkBiJwSl7Zi264gc23SFCl0sF1Lx6rH0P1FKvJreHXqNgin06B+/nxRJOtBrps4mALoW7DdVKiGhQ5ClD9dj49UrDZ5XxDU3rLHPKZPpAiIuLObeRwD6O0VUlWP8iVNMavtOPo/x9CaHRqDcAl9FsuzyeYRDVAcZS1pS/12NOAo0bmFUvKK6Mcsvvu02UdxgvCqq5TpnZX5YygPB8GIwOorf3+02Gzt1dCFBMdiSiV3lWA2ZX5YmvwRPKgpMdNLyDVFkv4oJtnDUtmgZOBHp42V6r5cZGCAb2lvDX5ZxbSPMmm9CV76kNZMDfI9omiB66iGDsSKNH/jxJ7qSPA2kZK16UAdY063Ot+CY3G0f2vV5JFYvPv2dE0Xm2HjdXL6tn0VzArs+V8miNCaTrIMiANWlLYgm0V+UeSXal2sD9krgauSz119REZQ2TngeKamUppgRlfl0TYz1b/rS/FMsETpd4hnTWHhiIcEcYxf54AdkAelKTZ0VlRtAv/KVurxV3PI4KfDMHnfbECzPZeqYkU0kJnpi68SnJm0trTsa6E+SLwx5lQjrco3iMLfRJJfv9tamwzJ+mqvOYwj5wJiWZFQHQy7iQb+6e24iUXNYbYme5JOE680Hzta7EMXgr0w8u0CkDac9X7bIypm1C7/l4GAzODz/oUANssUH0Ft+zawDsgj/AFz/xB4vwSyxYP4qdbZXmS6I5Z6XcyoEpicouCEQ1jYnwrRcU0Y84ds/QzWtylGS2Z4sa5LEFh8KdoEZJrrux2Dx2CEK3Y4odFpzW+wi+4RQy423xmlS0IeRbu0h7WU6g2M4GOEJzP8djwvL+vqpggDGzr1sWTiMY4KVBdbndv3uNStWyQFz02dHLSS7IoCQ6jR+nzbFxhlzce3MCT4D+iDSt0MXN8pX79C9XvZt+5PgqpCSUzejL70LmnvFoztZdCbwYeshyK2YH/wbfwzUtUFC4B31Ai3cB+hlV8Z/CQoc60xCS+HU2Rg+pwsD1g/nnlP48TXP8KYfx2J4CGXEkzpwO2aB3pnO6VGF8dDa+OUm3HvQsgLxZws6CGG18aA12FcLf+7H+dPVRH76C842xa0Sq+L57W+XYHg4sEV+p3jtMkGbDkqFY1bzjkgLj+D0/nsyoDky+QjHgRYeX08gk53lxzXsS67NaQaSxx95Jrfxouvd/AcoychkdcDO/670UEKEtXa0I0NL3n6iCSpWr8VAMotD7iCwMhhn2ngs89NAyo2NXKMKUbsMH+62DxGTgco7bZ6o+hFGfOBeYGafuByZk6TIzatKv5cihYcByhtMJFaeYfoBEsfNlShkfpm2qPGDodtyZxMvnjSeOcqLO3dYBXAKnu3eiLgzk2XKGyTaHCe59vZZcmDkk8aOO6pTw5H+DWALBPMcCOmfIz4cF9E5zesXbQkQNDFk7vlnAcetbpid+Ce9MnTb3Clhv0lL7lyusJYCpLpalVXmQ67YNR+IIDh9vW7XeWnU3FFfdnO0yqCON1josSLVMTTaH/T3Q7Y+gOUofDwwXaGyGRB+4GRC2kk7zANlgd7PmE5kXda4IpmTbP2OqUJ/O9EXW4aslQR5PtYy3tNMamtk4Lwzb6WIFll7MVBneG5vPfEGslblvK4unzLLIvceI6WxhiZNc/nr10k9nn8ikKPz5jmA9oC+lWIE8QR4XYTcO6WZ7VMORykmWLBbTE1NQc8/TBpYSaYjlsyOK50EEwZC6/hyMiltFDU/OcVfSs/4s0Rk68qJkU5mIFxzQcySQSzLKmqQzkbb2ZlC8MLMP8Tt/ui2UK3r3IoyOWjDNfAV+2/iYAbaU/gcEuC9PqZbBCpHpobrsMSJpIpAbdk+lZArMaQfdQP2kY9Krk6TsjNb/ad7Ghc/HTlJyxRISEoijGyuLhUJB5Ch35PrR1oibmRE3vvhC5cWj/AFFMlliT5ELHoj9ieMLEG0BOkVRUXKuv2bfaF8AdXORnzTtMfXYqB8UVY5TvybX4Mkg9YXaiDDrp7KV8wVHpmx3MIlmRkznG4Q7DbYNTZBEiACoevWf+TmcWGdQGdTUnV7Kz/yrJKZbAimWB8Pe41wUeWDq2t/YHXU6b9/sT2ic7nexYeFqzic26EEmxSfY6M6c4AVmLZ1wC97EfK1XEh3JuMdwR1dRynSORpvX2HBnRF11NQaO3K6UGalt8YP7h36jKdMSOYyVhL+l+gLKEST1duBsF/vC0WzmqV4WsKYHQ2tRhkvGbD7bAWpgRTLaFg/dnFjy6FFl4Vdl+E4PnzMYHHuWjjIyOIFzTO84apVCbx3i2TUJGnIYk4YlZVTgSkc/GqAw/qFXt/QjEm6DOIgQkdq+tlq5Fd7T9MdgQ4qmX9riOb99qH6gDMdEGrB62MkFKM2nktpndlQ1ASVkkEM4XV7ia66ZIcXp1rf3gK+mmrjlA3UHbBgF9vHhj1+erlv6F5M1MKY/1eExAaeIOGZ2EbN89Rjlg+9NSERxpoDa5w0NQ7/G9pRWFcMih2sz/TlHfVucWSNSOffg3sCK5qCX1UH1KNiy7zdaz16h69plXBkwLi6JmSjYa03NkLIwdGroYqG8QYGIzWAvK8xmTd5HZ0ZyfX1hfvYmcMFjpFadwbuUYCDRhlH2XKgLJDXeC2fIGLTmA+U73I54hgapCuGBGlH6kC/HhzN1oEylUjtKBkwCExKx09QRD2y1O3BJpsGauWfS4ew4yEO+LRs1FRZSaAG3406fGlIW/fQv2QOZu4fCVrBsE+TJfVIcOgpjR8kQNeU8lcCLDh9CNbRXlakGqKk+8Bo8qqyfWyPlraYzL+QgBkH4/pNmjziWf8y78QLZHfwc4fQWTxMFRNCNAyPNrliu9j+fphyooOc212K0BOW0jQPf4B70jQ9qi1d4Sz56CaeavzXmV+5oW9mln+6pBfIjOBxB0OmImAPhPpD5nzBmmx6utkAYvLEid8m+vIk3AOGE+n/oCW+ht2nRpGPXnru10GYkBItn10UilDo/8y5MoeEd4TgF+sYU9cgrwh09iW/bQM0jMXtERWzN4Om/1R4D/J8mZLeOY9WWAU8DqUCGhVO51OX6HDW4nJTTnbPW+iPhTpwV8MgH9VYiTzCgQaH5kfMIPu+4OaNwomFM0PinTcVKNeF0HOfPxiqyKt10iHnzPWs6pebF+ypU7FPAxk9R5RyGJ3ddHCWLABB6DdJiynB08kh7I0xXrClrJivrImRV4ZWrxOheOJsHlzq1+hQaBC0a7yK7LLeDh/juO1WjC+Aiv3Da45U6HX0a97tl2bBwnMPZFyxl/9ebJtdA2Jj9xt9/O8eyw8laKZa7NKcyL33MuNXm9jm/8DOrUDS8UCp30my9HsmC/kVkdPanh0/4ABUD6v1WpCFvcISYlmdF/jMaIWDyxE/LA1tguYOSiQtSqHfgAkbwsCwl5rV1CWkLWzuuRglRCojAU0NjgSHR1rAufx8KiX+uFQIRsQczV0mUIGlfEp+bvO39mmxteDLrycSQSguOz2uTQT0YUVmhgtm//iplHueXuoFt4Au7QVa91ag1viEK+WQwT6Lmdsxp+f25XHFeWlcGU7EcDsgq8oksxdBqdaS4r0D7ZUjUlIOhjTr5HT+DlM8kgd87euiWN+Ez2dzHpCuTrrFjUfT7ZSAX6hCCbbwDbu735PisajSxPqy4Dwl3C2GDVP2CiNmujfd0Vvmm5uRnlkdyEvOwqSJtpHcMfF/vr1XiIiY24oqumAwwry9y8XhiAXH0CxxrrcxXI0+2nn7Nc8BKezdvB2azGefVLngZN2QHgPBfgvslcydAaohpL6Y+BbFshlsVwM0isyKUQgQYVzN+9wAK2ZF5PLOqekhPJ+yHlArhEpf1la29TLhtZeOwths1XsyutmxPzZz1yZ/h/wjSxJipUiVxRiAjvzaKbEG4Qqzc5ZyiBYObCWv1MYu1VJJOXLMdRbg9T1/ta/TqAuKgFKgB/l6xOPcUP2Qq1MpBl9MoQg5wJhZx8iTgiRx+gUYpIuqweEGkE5N8Qnp3GQElcJKWScOtvxclg7j/3pcV3hOECDj8d6De7mnWQ/dAbbIy5Su3LZwVBpPdxYwAEgHZ2IS7/Up8UVIoA6ztgKKzeDetmx3KSIRvJG7yJMm50VUxFreWuX+4iGCTetTjtYC6fpTCmvQrmlEf8vXqBd/4x4Koeoj0mnYJRWEPxk7C5MyFzExbQXpV8CR7b5kLaFyLbjrCxry9iCvzNveWA/EmjX0jQ/M034FFxmEEcq87D2AtXMVjraPmJFvUdxIp2QRVMv+R1lxelnqi3DwAxniR91OuNpo1fYTKgPxmPuw3Ddm6ZbNuVYs5Rr/hch9KoQ5pndIFEvMvdKw1/l5OsujHCeku4DPw2HKEx7/9jXioOK4zMPE6q5S/SwXCylkMbbicVV+zmygwrOnzZX1I+okaxjxXSQ/s4hZJwiSoIsWeUSUBEGYtjHn0ZlGIuXK2LtzoedGuSX/rqbzcxQKOyocTvFkb6KpyztML73XD7GlVDiHL32aFInq3U8hcqMcJySPdSgga6BKHcm7QRrIbi7HnsDi/EST/h9jqrHGv0mHXnkbYr12PhRUHk0N93nl9w3bUtPsIB11QgkJPwpBv2s+GmPhMTvXsiUZqXigF6LHue1Ej2RKESqOpt7iGNK7BoY8NMQEu19Q7gUxVbqNvb93QoYLu9HD46Zef8UJqz3QN+j1zWUVjrM6/RbU2GMRu3R1KKK3pp2KNUJ1BlrDf8coC6vUwxiy4VR/6XOKQ/tebhogCxc1ODyDZnw9sAFwGaO02c6azfLxlRg6byx5y5aqHXBgH+N8X+0pGSjHsaENs0tEcJU4XtLrRLBJGIFVEe3TvIYkvc3siaU1d3xi9t7TPq1L/+hMRqojqmp8jBLyo7KEuYZeOKHFM3mUkV+XkyhiFhmwxtLgSsGMbh8fE6hCR2rTOIinlmsF74yj7IpViQkLbyCbrvDt5/yX6I7Y1abrFs7QBI3D9QnlxlwbgZHvFTKeaFKcI3NvUQFQURMimQ5M+eF6vwSlYff+7/cWpYmvPrIh9BVONzVYOe2tQdAWWT5fJSYL5Upt0L6Dl/pZObBEdo+FPC4b2+iU09eJ6vb/kc2/uq9CvCUV9KB+C/CPAJdOu7vq8wf/Yxy8081PEnm7VGsIzzoFYnDvfYTUyPhdXV2yICWljxWqkyEe4e1n+SZCRACDyiLTdzj5Dq5ThMdA+CNJhV09iM2iW1Pgf2XiLDkIpNo8ugDtNdVTMEBsO+uHzrqEI+EwMOFr2gevD8TkmyjvrYH9Bw6rkARUFwc7DRpOCIaACn2Edjv7bmiS3MFeVgdj1y0Rv+v1DYqY6EwHst3CNlpq6XBW7Q/fu+F1R20aHUR5Z1LIZ7wvY0E/w99bKzAyUjG7671ZUYF6F5+Ynv4Cm0twLZ+GTrBp8VL/LMeq8XYgzYldrklMglyWJS7iWBhdA5GraO3m0AWul7vMJttwYvTFJ79PeHKwJ9vbRePSgWK2aZjVD7VABscmPcx955l/G69higXuYudv2wXZI9AQWtHC3TypqljQ4PDhF4QzdNqZWDiPcG+ApZYsh5asxc9Iz4jeEHONSfpNuow1Yg8NaPkUFitYHBdgHvUE6mZf7mJiiaMehDstRxDzrtBFLepldicFsvL8U7a0QZ/MT+sbI3EQPae8zJIgizgXHd9kiwhmf+0KShwb2StnlNaFrh4MjfObIJB4ExixeVEM2wx+MQQEWHr9CGrXZz0hSnrTqQRjlvBsb9CdT4gDImGV+2fZ/yJEvkDu/hH2gAkZTYZiM0eplQaDbPprPhgy1DJdxX1f1YFGVpid9UhGya5UYOEMEigboLwCQIrot1d3Q2B5KGBUI2nHuJpx3ovmvitWLUZyjqsIHAF/DIgmzgWGerwhmtRGf3OGQnYV6dQ+KOdsiibhwM0lPfOox+/JIa3iSjYqrCgYMfblAt+5Yxty5GG5DBgqAJf1WAKXERNHoMzkM2NO/sXfKwbSQjw0pnkBkPOMmckPhVU/BVH980oenOAzxBAZJqlURtAK6JLDTGMemGnR4PFl5qZ6zUyn1bBDam6GaGPmqXUu/R5gkSk3xEVrTXJ81jQpmROljNw78KSFtvfqT16xVdIw+XUb8rv+xH0xyq/Pu0SZ0AC4PPYI3TJPOkETvUP2CnZm/h1enjKkU6v6LnTvxOs7x9zcxoBzc/8yOApXNZF1DA065w6QSNim1nv/+4iOndQPJ4V+BfuLRpIu4X7AOFTivN33S5nHQBqkEY7SLVV2tye74RPsdIdyvn1SaTNhWQ3WO4FRfTBNa7UJskDhPhe2+r0AFK3oKjJyHoKcbSCkYck738fgxVmS3/lVGR1DvgonB/LBPvS6ZXQAhVKRvljHxOel/vMSAeZfhLuIo9pAVDWMrYauKNZMiBLg9ZLfV0Pe4EvfsGmiB6JFmnuo5v2PBqL4JpN9WdjNEgWQCHrnWwP8ukZAcrN87FlR6D8Q+94yLPdnKLoKaSd1MX/6UHKDsP6rdtHqXVSYB4U+f0YOZjX/m70OCyZ8EsbO1RPUHP5smReCBQVAKJuPWzEyIIVVukSdoH15D+qL3NEx0xKcWVseM05AEVU3x++b37WiJGabUvodxEXIsC/sxQX8aI6q3UaqnZGFgFZl6X/rnnJDn1z6zeW/XhMJfDiVoKF8MjzO90Q5+YsdPfqmE1G4SEargQCB5ztNx96uUxXUl8z/rDwxfhVetQC4icC7bbbO/zRdqoRSSOe6eLIsXmX6BLZtA4OcBsDwh+rXOmqjvKHuUfiJA0fE7shRDdsNpAXU8cb3o2kqGqd20JQluLL2pFCI0A3Sf1S3esZyDQl+BBER4PmbGOeQ+K1112FbEeyqQZg56WiQ0jRCUmP+Kew9A1ZxSjutLVOfkpuBwoSkP4RGNoe7WrmyTXKI6nk1Tnz0oe2Vm3PjBDf8Gwhe+fwAYSAjlPra1TtCj1uu1GcdIAm6ViQn9Srqf1ym9fPIxInLxt48mCIl6DSTi4ZJ+XkJrz2dXWQqhpSF4nNWapdIjJH+p1Opedufkw0xHlr4vORb9BCJ3W8vAPdZSqI7VxbNaaOfqhI/8w7L9horVKv7MLnEr2l2XgUM6+i5Ix58xgRlYVxa+ltEdaupD5yktPEOlldMIatEHTM9j7h7hxVvQPEbtQP6BmDdVaPz2u/o7+Aiy4lsXGE+Km2ss6828uqY4y28croxcwQBaemP2+4hEA88WmmXnQTmIMFje/i5qVzP/dynhApy5GEB55hU7+jPdveexxyrULupZB1hjyqISvKscuKXOXZUnp8dPLlTkOIlOhMu9t4Vx5PLPIDK0SdUiZ95AlS0+/1macnq6hXYYejgXigt9NePxN2PY9CC0HftH0q8httvBeLZ48ootbmSIZgK7/Wm1zqq/lUDZBL6CYC5KDyLg/WfRKIQMNyN2X432uLr/f/9AoV132hvDNWvIbdgJKmzFwnqjd8+MjwrCINW480Y/0ve7EpvtXHg4WzJv5MuIAOMOxfyRAVqf58JLDSsrwiFc2nd3Kd8ddJgI2rTvo+frSWmyBssLjWmXvlQ2MC12RcnQ4UE/1I4XFh3+rGgAKYJ/ZzgE2OCWXc/w/vuKQZA8tsp7oGmt/lFHtItNyguP5YSuJgP5e+WcJDqDA3T0wiRzo8f7FLwl8kPuLIGhKwvH8v/UDNrEbt7R4g/Z3GugRGGkLqODxquuDtdAGSwMcglkg9GHLXpaNZq5wxQ4u3GuAFT2t7MROOgK0ycFh1o4BqCRUd255GSn6nT5JGhnh6NBoLCE6JhFhgkLs2xXveg7x3BguKgLeoguij0H94y53m4REl1MH4veBplxc5ue1njd96B7OGmZLAfLDh0zXTF+xcXUxjlcBHVeYZH1DPxitzYFIGJRR/XBLJ7W0ZAsq2ayF4EjTNYQrMm7z+11ZDziVxaCdej0g0/ANTleImLQ7IFBvBEfVqFHXgvXSD2QBhaUMr/Q3dXNyBhi6uyNO3D/bBIeZ9MYmzHk05eYyZWWIEssca7obSMUEtm1SQfsTMXOiuGUqEpGsupdeVek7xytDcIcRxku71fPAJz1K+Q973iDHCieKN2LMse0Z8ssosXVx21cwVrsx/g/8lAeIFkhFcHMIqio9oi6+Htfj9JB0QmfFuwgQJQX3RmestSkGNNeJfhcBzcyx7t5NcrJmnxAAh37DuGAGgvm7cRsClVgvUnu7b/HwSQcdZ/iqMehsjwdUlbpJDUJI4fXZfLOnUfLsEaOhKd866cqAx8Db6RlNM1ef9u4Kb3lIwsq7dmReEzj7Ev1soC5HxNnWzV7DQ141NJIIG4fkRJ26zhlTW3mAKHOGV9GkXck2Dhc5USmhqODKBy5DB/RTMGJWPoyLQWFWyM7AciyFJru8TOzd6uFbTgM3QbWKcGMf+ckyCCfcodlWVoP7j2Ypg0YAElHmiHhf01Pp9zQSzpEL7H+AiriYvbOBaqRNqdBy2sOsiHBVPJnJfCcelz1r/ni/VL/hMq9UFWEH2iXFcCepIxZ/Rkmd7r2yMWmTMIu8fpzS6etLIHc6IKLanOaFU/iw7MoFA5Pkt+tZnuy9gVmBZHAxEf0cfidLYA2esMCkbu5BbcQqarbdfVoLBei86apg5SzkbzrGOvCZ7mYAXaO6MxZhUerhl8W8kjXgrzypfdr5FbGBGI2e9J0rDUM/VoiMtKXHeAo53deoB1Y91/iCK/mR/4E52MtCUL1baaECgN8qkx/GSuVgFhS0l4zXhwsLWJmmp+riaDllt5LZkdJ/Y9LsUhJ4gh36G3GmuGnYYelOuYigh3q/Q7L6aBScZI+Y4Ri4T0oyfoS3Xc2rVf9TnJ9QhObmaGQDLYJIVGDec5PflVIycTkAzZ8MZwZO2yzm40RwLqezNhsNT7aqhOqWBMfTbYcyVtVzrROKLQ/cw8h9MBYgLQZ5m7RtajLhjAmwWRubbOysVY9+MbTxulvSqQymjxTj0/yGmowXOk8LorLHbyciHZbi5Wipq5e028xOnXPq0SO1Ei/BmXFCr+iw4toQwld1d5KXZJaq1eDPduqLEuVRpKA9CzB7KJsTTpdrYpMaOsIFM7Wgr9Oh/caoRAohQN6A6HSrmbUuxffYlS4ymc4W40QYfauuqpQ/JTXe2l3gW1vBU3Q0CQWi+YnGMAlM7QCe806vIrrgQmejgYb3z21bFn0KNZj8qMbtk0fubcrDYYwmBhjZezZtAK7N3MQKKCODWwtmN/WYEGctudKJzRB3xrBGIXPbh2oyOsQ4psvw2packPl36ulG2AlW5rvS3xsDrZG0jPgcLNOBZVquBKudvtx5EyYnivmLREWPn30cbkfL4RsfTwuJVSFZZJFh6UkofGq/bkz/WqbPwyDk8xppCVNz7JQstijvxEWrb40THMQJebLnzyY2q2jx2SLecaR7/0b676f5ddR3aDQqQxzS6YlPvFcYbw+8vic5SAk75H9CSsEorQCVlJSk7DU5HBRkzDnV2QtTJe9fsfqy1sQNBXqUXzv+3HDVDSjlHNPKEmNGm5+zlEP/Pa0mLR8hxOG5PesAE/+YF2sazKCei2HXPtD9gtglvsvCm4ZER2E/55/iKaLcIGYmur2lZHz+zjdLi7Go1gdS/2Fr1EEAIGG7P5LjFNBNloIpKgMefELwLEaGIdzO8lROW3iutZCm734C+ytHbAy/CqlNN3YRNOw78/ckmIsFS9yzRNcI8JFjaH03HxmozPxdISpr0HIMug0zw/HEr/ra/9aTO1v12XF8eyXi7hSMhmjmUPuSc0N685m8VFgeHAUTbaVetf5J9+u3fL1HUMpob8aUA8tBBf8d63OmZx7RNPr1TdwVlJRaPWFwlrbk6gJfHc7mNdKLOM+7rx4XolG7iXLQY+aKEkBx1jngsC7495O0d0ZZpF9vpFWn3PHA/7Y+hNJCb6oWEPkuSGxi5PUjBYsgBSNT0/TPsg5SPZA/ixgAG3a9fmEkJVSeM4E9UZBObDJHwtJFzZa+GWYPgMyK2i9bwCau4e+y7HEydj/JtcHR/qOC9j7u0y7Swk3mvgMEQFdrftIfk96luICVjkvr7T2oX11uDnupl1ev4uSP704PAh2hj06Cz1BcAw8Er2w0s0MzWYVo4MxWmp4EHHf79fwGTI+h86bGX6RgmwbU8/nQUMFePQDi5VTBJc6fIO+Md3mm6kyLLkPI4xUOM8OLbZhVN4oo/G0bPn/Aub/H8PMc7g8EqWuJTJHZ91oAQ1sqrbeveeX3LwSRdWihI4z0I2FePhUK/RZ3fDalmrwUS/dTlHCC811bHpc7y0LT5pr7XYZFDYvBvjvm/6nFch75bPZSY0Rm3tGFrbqvc1wNNsiI7QY6EHdb2NBJhBb297t8Yj7fVosejWe5Y1kFW8NtvUgD64f4bCBAh0y5sSsVg9/yuk1InkHqiSH6XCKDkHIJrxw8skVHr8yiJnopEc4PpctfqkonM+4Yfwwpv9/RcpOjPOlzZIXBICSgDTbdZmrVBwT7jJqpKkdCK7HntLiKH44PHn0swuDJejswFdT7snQDTg1fkmlaiq4PKk709kTqYkB6qDgKtxHRUaNUFvtWpPwGJhhFQOHBffQPNhkZuZix4Sx6jkqgVTReXfrYxZKNpqK1vmwLVqhNzIYtrmDyRHi/qbljqCWi1fbh7UCI9hr46hJz4hd4EjZNpKta2/r99Qw8HGpbtZ7JnxNZ+yd/bkIJYg8sqAaLnZGa1LZyFKw7AuohrPwwNWFPhKQvFWEOIsPdQ9DvJCSEStGaN2M1M2J5ur8avvRAwD+Uln/hMrqcJYXMqu64H7tFHLEv3MstfG2Qb6aKMoNatBjZEyfjMLVwbQ6GgoRxKjHRf2uxo1IG6Em/Ixwya36kYUP22yOtq/Jx6DmulIDmiS8cYNRIV6V5pHd0XIe7jcYKT88AgTuqPh967gyo6DhJVEeM/gq2arEo3NkVtX7D7mzM4zzsjwEazeZbygY6xwP5F5NLqPJ0Hxncni2XMn/GdHQmTbQF1zee4LOhZaDlBzMZLsKXcJ3sJsBmPODcSW/FKYiVgzz7wLdz0C3bFpTwedWpIZzG+H0kpS6hOFF5yNj/xUGHEQK75qxYUFuXq2vFITPVf7aaAWUF+eBV5VbBqFcUccHNaTmGaDdRTdXTurKJ8ATxX0DHWz2qNhGP4nrYJRCKI12hvvahdfR6RlR+zca42mjybVuHEEGrU2KvnHy9+mmlQDH4jYHZKC6knkne5Q28ldgrISAF0p2u8YVTy2bGLZqUkIV6zWDXi0DuZMiQhOJwUgZQNnrjzpboxif7CaCAFdxHukA5fPTubF6aLOTWCnS/EP8ZSOIyNGpkn86BVLEgxNoCo5XDdJHdnSB0Zy+5O4NQSsoKdZzikwg0eSvXAE6j6WW27irlXjNHHxiuOY/LaFsSgXv62JfK2/O09r1DMjpxv32Y457Wd8wFBf9V6i6CdLP2Z9qNFsxcP88S7N6b5FAkZAkO78T3f4mpUVnXed/QQC1AAudBr+gg118i202+jHf4m1tBvD2iwt/8PqoAWQSajReU2kDJ91lZ9cqfgKVbzge5mUlKDSh7aeClFOoVz9UEdTQyNyjj+u7JaX8A2ZsaZGXVwMM0AFh44pPnV8dzr53VD1PafVQyaR35qJJSA0iuiCq2cid7NoSzsea2amMq21aDu6UuE+8QScYTlOo9jeIIi0/NiiMYRPhXvnlv5w2ap0bo4FOVtiMOzgACn6GjUirxH95ZrT8U7IHgrkktD9arClo0+5qi58dwkwSV3il6LD/u4hFn1Tii1XaUAIFjY99JRS7u8n+JlS28+gmZ3wr8GZuc2jaK6ZO1DER4BGeOwd3N/UmsTUvo0YWwju3zVzkYKCZYgsozmlYMDkc7ncjpqO7r3XomRSXVhxjKT0fDB//BorMZs1p5cPZ3WMF36uuIPI+BHmnfaTEBvjW+MwzlCNStXO0hIyZtUMGfHaoCucsnoQJEZlx8rhTosIAzFG0T5jfYyhtYhipt4ksKxoXikJfJmM8AFWY3fo1EBq9fxFc7zQm4Xab9KeaDY0vR1JbrsRUf0jh9wVKOkvvevqiEuH9X64rfvzpOnPi72nVvJkQQVWOfh4rjAE15DsMaF1sVtFO3r/1vnkQEx8kZqSupnhT4WCeHa4imJ1Rwb6IGMcTkcxFfZkqQovJhASWTD8puPbDw68NrF3yvNahJSfCSI/0MHgvUUF2ut/1qdOo1896EdMGXIb1yBxAutHy1ARk33O7GzwFXVl/5wiT2RJK1wI4OmFAJtk/s1iEADWJImcC8geyaItArFlkQukmqRDeUwpSIrDULTT5n8CmimG/h4LqO+kbXEDF3UWVoxCTR6vCmSnoP7llgzlumsoCz/SQ6zTVuyX1g8hz0fBi/tvcwQA+RWNVmV7JmH3SlNVUyy8wBxESSRk6cCmR+ZNLmaw2DPMxvVl/kVQzPG7JjfHCNsCs9E3fBhKvU+A72OhboTLKjxhwtbZC3cbsAWD9C7tkb412saHa2YSn5JCMBnH5vpRUuFjBTws9xcFsLrzSzar+3POcZ5N2l1pePcgltGE806sMirilkiBSbpuRvAQY78cdsgzmTIdfDNloURl+VQNKd3gIpQbBmueD/ohGrdnNJS50614O38wyya4zv9td4UZk//dsx8B0oZ7VIkfvSlFilkXMfTqzFn3nxKP6dhUe3WzVqD/z/7HuySVHwcyYsXD708zL0k0K3HAwJqcKC54eqZ7ABd+1PQmpL8G9BGc8sIWIX1MgGeKALuEdV+ecq2yYnykWyyAujWmKmcW6c1fXnOP0hUoyShL5lRmvbR31CWsgL6zz21RzWsZW3STjp+3+Nxk03Rhrn17v3WgIbmLaJdsuaxVVMZQ6cign2Ec93zsiWRI4cYs3rZReZKSvJFLhKSjVp0hvVRHZnJ+07tP1PT4aPiGYk4p3F3qQ/c0FxrrJq+o9fUykQnuEAroMyBHNClofz+W7OhssrGuos+fRhh8kBA+Ni0fYdhKK+qCZaY0LUDpn17UUKCX6dOZccCYzSsD2iSQP74pFnhlkOzACsapdT20zbjF6ZqLgELUPT8IglaX38zP6zfdyBF+NjNf247XNtmIz4QCO5iRy/GcS8jjaWMfTxI3EbUvzrprtgRQDOz/eMnyVQVbbFiTMZfhfQLeu+j6iY0Qs/QYGFdHefwzAYuVpPhVZK/tXsy6DAioLlmNDzAu1eQ5ihCnobO+MOZtSD0+uTpiOAvPwGWf52xDUHj4zbdFtZULPV4c1TmWflDGMkg/Ia6kPHprHErwFTGoBg+1D6oX8lSPdz5srAF0RbktUTmq44+USAYYowZQOVbM3BWMc603Oy9SQD3buNTgzJ7yaMBbo/pjkzVrpW5xYH0Ra11ykiz32vo4nBg9Zvm92KHWhJm7uQJV5DMPA1JHBWBMcjz/uZupwXqjoTffeHZ17N3waXUaR7cZDs94ewlhsbQrmI7/A4zJDUZj0qKiVQhn3f3AneEhDwl6GUdCBdKY14q9n6ay58twW2PRXXPJ6UE6TUs6oqH/0xgDpP3bx/mfcCUy5oo91agCPtpTfowGZ0tyw5mIOsUqvdURDhjuWLX/WIqaPlYx3zmJ3ahTcxtC5xQgKWrQskF57LaOvwYN0lzIwz/joA07QDokGi229YbKlCKhIfYLjpt6k2m3l1dErbxdjSGx4Sdb18MFpQwfOJq9bLxDuO226WuyM53la6eobPbSs+LBf/d90q5CC/SDgIOoYExqaj2G0LIqo3SpM7FY/kyZkbSW6v54gzC1yt9iom6NPX0nd2mzyasLJK3UxF2aU0jKQbxwgyzPD+cyVFXUOanE2fbN/eB+VebWxdIfTQSqsgKPb12fI1Jsi15A6qM8uoF/ZAMNVUICBwLPu8RH2blfheRMh4HimmpoVrZQcTTlBKQCGzsWTI9/jRQUaUobwaet0qrRktST2bmOV5MHCF0Oxg/wcIMpETotLjyoscPim9KXdcW+YfwoESbJ7I3DAnMAlB3wyqGYqx1qd0HoRzVsc7DxqCZUY/++9jYLrRfwCdHavYeF2RRtyVb36jOObGaKkDUAkhmerGDhprUt7REd9Ta+Sl/rzL+sUxiAJe57t42rGhLQ2Q7D1r39ZwMUk6HQatvzNiM+BpIMQ0gUwIzQfk6UiqravYUoaRpBIzNWbzuv0vt/KxrjHFUwPSHsIgTEsFVsJ7X+v9Zq8rfI+EdV7dcGPJVMM6ojj/3Q38KbkqerEWtVg4dvAwhdrcbA3BUwT7fw6le83APqX6M3wEMJEMSMYMUL5Y5tN2b7n+1+bRB4R9VRgW0DuBOhuIKeXyvLAAAAZOFR5OePun1vPdantclQ09ilHOYTXnjwWkMFW+QUGD7f/tsRKarBwuBmN+4V8kUhr38GGuwxlA2zCnfL7ndvIeu5qTpe33uLhUXvxzin90xbPvUV/kKS9Pgtm+Ef/FX5FEDgAbeLXGg1d+J1P1BVwVA7z2DGHtBduAGTyFqYWPWy8LfrVr5rlsIbwIDzda8b6N4aV70DUj7FSoBVChDa5kgo1j2AlKEHyRaXqSOqKqbFcCbeiJQRRjuLKAATTktirZxfT+xPbEiytVljnRr2DYcSjufw+QAjEjN6C8ul748z3ue4T9ugyirCG4S2anM/LSTnJtc5VSlfO3Fag4eYjoBpDSCqeyVPHgaeFUT77+qXrtw0fkToa6Nxjp6aOgnZbZKt/eYVIvqQ188HDjQNmIwuASr19yRmYu+8CW6Es8MD3pUQnudvexmrt4R3Y5DXwzGqAnX6OAV9SLYZRTRB1Jtp07Loj3v6zrsexUpcSME9PTap78gZlkGHJXqpTxK3rqAmURb1y9O7/OAMZcTXSTP2rQ5go6Zs7piKGDn+Llalf/GZ0sFe/FltEtEewMCNBA6uAeiGiOgFAcD6zS2NHnksNuM0OqlQIARluWiu/TIPkpI+F8XT5fGsTJeMep8JpwHxASI7tbLKeMq/4HYvZJfknBlt6+TVaidX10ZFsAleLpS/gvPLbEksIm3R4OCJ21S4P//uyzQ4EJZyYmWZjtknKJbz0vFEi0zDWnZHl4kvpMSPlVI8cEAG5r0JoNN59joEsMhUcPZ1YtIDYX9cnR711x6SQEnBGgTz6d3b1iebIdotlgqE03w87xlD0+qEykcVizaOB3Z+ocaMGWybZTIdpR4niV9mDm65EzKK8VQq59iMlABk54A7zAlMdkYNmaRuWJN+bLJ7RqEZf8vrpM0+3cwD0NctuwJJA13JIJVFlPStNIXzAW4pp1OnTx3rMZQfF+o4p92WDkF2tx1MUdC14Er9l1RlYsEYnOubj2IotL4tkgKwnE219ZsjXb8PJFkzakaWhRBJAkgbR6myiYFsJgC/lellsN9g1ML0j4HX4rwIzHbq20FDkBdfqN9SUnIbJf0QQr+QxHx4f0kRekXaqKZYUXYMbRKa6OObLPOaKGft7xFAgT2pHuSw7kdfloER91zsJPWQJbkAzyDFkkgUg80kW7n7n+WBN3CMXA3lU6QR23Ipx/98577h2OGkpcp5YiTX/TikBkcza+iwBGNBi/j+GwW8tGbKxpiSNEQqUDdqfscbVMQ+OSYGoeQKSLwREfUGDjR/emc+ZAJsy3sraTZkpHFZAI69dwO1dvsOw/Q+O/2lgghmEsk6NKzmfI+OYuOG2UoagP9Le/y9UAVoaPizZdFWWE757CS8RpOnik0tcbU5UXqdzF/cWr3gqYa4bb0suwUjV+5ffknROxE0aj5MKKjJOtctUSM/O01VAvX+rm0ZKsw+F8kRpDEdyueqFVWo3WB8X4kr0+By53+UZr4iDt4pCkm5Q349iEFhD9vpqGLics17n53ytCV8r+CXc5DdYMZa5Qw63ViUEqhf730laVmvq1MBWAMXQ1Iezl+ptTR647txcqe9UHe1oEUc/r8opkIF8arM2joOBmCIAQuHURg6eLrh2Y5ZS7ABAIq74vy2dMUuUvq4qRo207xgaU4FVT2ZAVjHhoY+AYQj8dPJzFhcEKV8puZISu1yy6FqU6HvcWfNHP+2E+O9ElxHA+1mYIezWdiOK8sxZYamuXh9FQ6WsIOLA1T71Nm5pWy4LGP/gPMp9yVrXf2KAftn7S6yRaQSr9zSauxEuVWmXyWfQbvuHAr2sspz5Et4joosrLdSbkLo5/eqIo2hj/tp3cQW90/hUgKy5MxOKL9t5715+YoCLKbQD6XeFLtKh+4QnjoifsEQ74p/n3vCd3qzmYvV3nM1EF04SZ80rI91S4Jbe79J8VB6zudiV9X8HUM4T2n+maAr5vH55l1lQy7ji4EaVo+96PnDFT1q6aLK3+4IJng/I7Q5h8UAwypNphwjwbFh4c7/e0MmwmKwsAJsp/5eefrn0JDuXvYjgwnS1pdnK8C61KWjAovBFHFVxm92fKAQlHcLrqIZ9bIr8EKdTvg2kRWFyGx0Im3T36uHVPFnomCeFijJTRLkK/wUSBsDqwCDNz6Y5s74duy8sesSteLFB4DctoIDRuewgW185xT/9DVa1EHn+ZjHbKNwCd90icSJ6mHm83GdqRFWB2HM1xP/pnKbQR2+ADbRqIcEGmy9cZhR2r/8BR/2pfEyo8xp2IhSxInyRy+ziQ9Mf67c1rgqw06BFjwTbUSlxWas/5AR+oLMc8v01Mz+kfgvwOOehWxpvLKCv7mMmn4DZl9K3un4F3noVL7Qwl3QFCRJSbewDL/lTHSK6ziu0wGh6OhPCocda6uPMjqjKrQtPLKPXEIfwFe+tAohLUpujwS+ySgmQVeJu7fBm23OE0EWsKbsExckv77dSQZwEFAQz3RHXZSZVQH2xsvjipKITsPQQfyWPaw2UCtaP5KX5fNrph4o1J49IFaoSQrK81MWJfsoJETwxD2alCKP/gLbBqZZgUsS/G1BNYgXPJQrUoRdoqjAtQ3RyB9Q3LnG0jbcThfS2OCDJ4OE/Xk2Mw6/oJzj1cVgWDGpmyVHsU88crxTp3hYN6+BQRB6ht0GUYJyiEmFECr/QdtwPL4RUXvLjWaQbYjLV6jkJVRGzvx85EW6kAvRlKP49yIx7XS9cvseBWVvGNAc2I0PmR6Xc9KjqauqjgG/Q8i16OIPtQ2Ll3qDkunTNq2O65AEFG5qycHaB2/159N4n67iMEpyNowNdkq/ZlDxsX4dRKNvBUJaYqhID70qa2Rgq8+AzqTaJhuYrqrDDO1n/0rWggrBcFsYwo7ujJZblKGamFf+3B5MTAXNUOKn5PW91Gx56gtqTqz1dYMML1dFR/KZUZom7Wky7v9EfKnYbBseAvDuBFBFFCuXnhvWc/JS4ipUIe59Ls/kL+W5lteo1xt5bkJYfug17vGw6cqrOjTG4nQXZ+RbEDCMTf5JZ4DBcuVv+tGPyucc3B6R9NMF/lc4ubulrqcBPhRUjGBILbQ+4uBJ9eUHMAj2ijfMskRMLcV5FdgqIWhiEvxNVlZSRrzTzySfBUjZHCJQtbgDZ8nRWLwk6rQKWD5aSHuJh0vBgvlNTP+a4P7p59l0FYBPtoNpiFl/dOo05KHesQCueTxj7IB6io9sqTWxTu2PK2C3ACiXWNyxs52441hxg3eco87pSRV1NUvQeac35o3tgUpXtmtl2yHh3QO1mQ55wSqIri3PtVxJ57l0nOuyav/0ixzLEq3QlLZmLb8Y2JVlrdQMjhpcC1j0DS+VHrYIB4JgyXacVu9PCRoC5Y2+p8qfeJA3OFreaabxWxz5oAcdX8Xp/7bdo5gLyvE7tBDUUjj/Sb84Ad0LBh53PHoXpMiVKHrrwH4h3dnE0/dX5nzZO38AdhLMOzHJgLybHKT5lrhDq7zLvQAqlSbU08/ZYx5Id+oJzmZRwbrtFH6wlZmDs/mIbgU+cWZYq/WfDCT58zQggDmnvGYeePXNuPz2w3SFzzW3Mjp6cGMjI93o/kZfOyan0hEcpLnTpIAQrsjF+NAvGQ0rXH4zxgBgusPWpZeqjTeRO9eBiWWa1uC5lfUVAaldiNtnOCpIvFxdMqpD8aFioEnNm289pgY4MFOjO3RHDr+8/6FNQkY4BhwRZavkyrLjv3aUtaYSWR/aTYeIXnbrwNKQQvahCX5VeXY1eBt9rzHFCgjuWm42RRFwD+k3P+CjcsP7DjWrh5DLbR5yMLB6SvRd84O6anRc9Sba+81+Tg/+0BUDY8uGXbXOgU6tIqN3oPUCIy3P9/jW5aUFYIMNji0NEyHIayWzgZbs/xvT90bHpVOALqgIJbEzInI6CXlE9oUMT8TMYYYv1dSblf0vdyufQO8QQub9XHofCUZa2d9krt0Dz/MmSv1vs8GAt4WWZfJ9QHFkcXyTGBbm1zG+QTPSuhLvSM0u+TdA0JNQjAIeeqTk1EMRp7AMLONNHmUrM3PHVEcck2JlknSVesCxIzTeIo/Jg10l8zBQAATFSL//QGGHd9qKS/ykDrhGtiyKMjFB1rB1XiRIA50wIs5HX4oCkpmVVA687aBlwPgfvQfjGE9quQRE1yVCkS4hMN7qU6V55Ye4ZBJPP9A961dZVMcUpZw8y3xQK8XZ10YQTbtPOUcYk8EyEoyLRj7o9DEJJwXy04vQHi00/UFCkRu28R5uz9inoun1QHjQT99avzlbE7gSWXymsS6HbAsTm8RXciTS1drQLftkggDuf1VnAznezq9MM21RsG1ya+9/vz2J91XzUOAksXaoFzT1g6ofWRVUUG0nm/mxZjqXZDuwu9MunU0h1bh5SGN9/yldUBwydtumrRuJbUuH5NGTQ65j2di6bOqsjGDvlpJrMsPxArsX13GdMzO75i45JPy7F/1xtL2i9ymW9gudSOU1X/HwSZjMRx8yr2lw8EkxosmtH/GWd6Jam6nHdnI1zNI4nF5V9HCbGgfNTzsriLcBImGcLB5+IMpq55Q9JnwK6NmKEguysQ3S9Q0FTvtGu3zdXy5L/BJWl8eOmfBBif1umpCK+rhLohSEAfXx7o4DcyMwIGgxGFSEySTuV0JMopnYGkwb62tYVG8OI2/IpqlaXexvXUqEFTT2ragZW5uzS7HSP3op36cOh3RZaPW6S2/8AcX9gRiv2FoZ+i4cxLwbkbgWSUw7+x1fVn5wNksk8AxLkrjR+MfBFZLV5I4usLY6WYmjhT2kzW9XAxxLYCELLIf6lg6p/GFgpoRTm+yQ6PYtmKVvdTHyBxv28y3vTiy+reYBZqmC7x0TDasiMCcA+TxdKgDY4s61MpZyI1+RUzeMfx1qh9MBXg1tI/HSKpcUj7+qTrwp35J3ezefo6UZiEWMPBtx0/tJyaej7NUmUHVRBJfB1q0bsw4yHfui2ZOPNh/6R2/I0j09t9QGeRxpuJzB6DNbaPTOmER6WTXYEGXq7DhzkvCP247uSz6r7MfaasDs419fVF4RAt4XoxkFRmk3sjrhpNSeuDoG5RpjE4pI3rH/ESPaF6RIIJBiAbVU/ct/nKrDmBQPBYlNob0WmW07GhOvvz0m/BXTsPB8qA8Iesm6PsDuOLEEm5+jbniDFyXfndwIXHgWBB1GCyGV52MU+5iXguncQS8T+WyxaPDqCCXMjwPJxGObdF8mBkG2+SpqaBQkeN+1IL8Cbb72d3ySQUR/uO+N9v36KAiKVEPx8EERU0vfKi53JWN50+LSYqgHmF0UrnnHCNpcwfX8ezokGL4sK/rgFZlXnIqg6a8EJh7DfMOwMgTwRjjZ+TrXsj7SA6EaMRroFgxXRIOGDPYZgkadllrCosfuVZqNQwAY1cDJzuD4ocR7PgZYXbCA3g9Jd1PRx7PyRTNad56qEALtDJuI3i4C0PHDbMtMb37TB7rwmSpmuP20mKVRX9/jA4tzzcZ+y1c5UXZsAnrN/npjCitBAQOPpCcL6WrIyQYCvRC4CKSbSOpLt/L1thIHPmF6Q8gtz3hvxpRq7cq3r1AjWQUSZxvX1oVADhtJ6AD3+EWLrVEMhVDuI4GpWJh0Zorx3fMfmpYiN53SFH17qjjMQt1daE5U5w8KZkhhhe+BSwDIZSgKzOwKJN3A5o8QvaRGdiHSY1JkZvr+Svxd9vJR1sRnuYMFjLTJMPGGSukigmZW603oUeT8ThxMSiVoae/vH5DFAgpm6zwgTKCl20EPGP6ULkzodonfXeksNhuOkID6hiXXUhJEn98Hagh0MEcUt59CYXW4eTu+1KYjIjtD0cbSrG7xBFZ5w/yKkpHWjhsasCFHYpwYQMTqTyvYXs32U1RkKzBeL8Rdo6U9v192xrDVKymS7XGubIAMgiYSz/9eI+ojcmXwGWuwd/WYBUIGaWoTu6wxsMSmKW3jmJrkJfNWqUhn3kV6y7jwsQBNLd3JdUSPBACpVsUG21st9e9fguFoYq/o/dcGwpa+oQV+rWs9h2iEe1AfTd6GVUyln8FEIEVXp198YKshrs6eBEBs5F3rCwhxH+BBLGF+t8cWZv1azc+T9KKTAi8AhiWM1tdu8ikpNE5KI9yYEOniEA7EJHbNhuueBlXlKV+1B2qkARJibCMr38b8/OflskWqGLkH0h/VqSS3lKF6VLe/gq55dSas/ngEcgpsy+fTlFAcAbqEAJeVXXSK3xusbwwP0WQTleQH8IzqydsUaODeNqwkhQnJzmO8X3sJerVS3rYjNrRi6kS3PZP6MMh64l9QPQZ5bs3w3OcXRFCsrsM1jxvrWRjQ1dFi5dSchz35c3AaY/dhtAEdJRmjEmbiroufy1DJ+vV/cDynOhVZDRBxIx40Cj0I7hQqJIzfjf+g5TLHKROPCIRyGtBoa3N+hsBhIj0cpl1ig/3Yvdsn42YwzN33RwXcEsSUUgVSh0sIehMtf81mUWeJJPijEvB7q6CMNVD2vjw1abEiCr5qmZ2YrG3xxVjVv3ZfZ+fsDOFSM4ZqxE895PVlN7Ps/OEh4dn+3Rk/xuVr6IrAWAIMJvqahUtAPMcocuD4in4Evuk4J0A+YQxHq6c4BUmjHMN8rw2dPsXy9Ms539LmPDegD4qh3aCWTlqkz50yG3gS3OXbxXYfprw/rA7ZfAQFs2Ee0JEoJ8d9Ebu0x+Wv4OG8mnLqwjbxtJU4KZI/cONrqgadczLCq9q4jgkMHwkSpLkl/QhgAzmBqgh4dSVLJOkcLyPTrzPXwiaC+0mqfDVEO5gL3QdqLoANNTXasVaPDXhrWtEfQAOTWGXUn/BDqak5EZebXbdQHyE0yEhUO5HcDnE6xlAuZFDSKLDTTZz9bWcfe1wy8KhSOwh15cBRibt+faUQgl7/5na6Nl5d1o7iUWTjOhjQa4z2Pha1PNGSn0hZFeICMKGtHJ6EGQbB+HF6+M2e8YSQjJ2cnG2SVpdzXlnkzxYqwXv0s0WM8nggSh7Viq5joXNiF3RJ0A9637p1HFJd2I7GrQ4ZTOWRi8jcZaL/25Pox9feMT7VDPV6TT++0Ri3a1aLS8IABZh2dWfxnBmXDWPdvrxmBiF3eePVqd2ZM5bI9YAN23/3qVLElDeD61xvgRdjkXkl2tqif3zsX1gGp9mzEm6suh1kWL75XC2kXlrCreiNi2pfI+iWVFJDXPd3MBNp7VSAZRp1jpt3ug1pQEM470lZXwotpDljklvGxuNeKwTuKNJw0EK74nc0d851QXL9P4pxZdM7pkmbA7IU2S2Xa/AJRP2VOz3Kyp9oW6FgoQi4noNkoHeNnprbQod8n+dQSSbMzNRZIuL/riHaxoOHkaGYwROCZwqcbK1tUnU2Qt1J+3UTvklj6wOD/d8lrZG7ucjZiCyHxK5XVtzq9lDJ4N1FvARCTUfnLeOLc5bmrtGvb8mmsr0lDDyR5607k41wzglZH1fExfmsXrEjiNLSzSKGb7FVusl07/BgeCclAAdAFlpq6e8ILHJaHqJ9jM1NMIYlxQPoPJ8ZqbbOPip0HLsPAFovZLYjGJwXsXa5s8O/HT4MRBXJ0AgXhS2f7+eLLENCkaVpobl5FBx9gQdpl4cE59nzHoqdKxmcHxhlstUFwQXcy//ztyPiv8FgNgBpRauub+tY8iZJWm8+UHfFC9UbfTkH5sKPiQhbhlbMWdfv+cCkOJs9nGdwBXTiVoOwPzvaDnjPnkNnKWRQodcXtjmIXCxzQcOi9iknU/5cgBvikpmfD97YGtNmfqMJ4AC8C3pnwR1epL8qhHArfvGFkvvDXufY9imqegK1EC+dT8KhxSr56X48UTAzYaSEsEAle9VurEEx89aUDxcw1jX51+xX1TLQL5aBLNxfD/KU3bcOUQsr0M9nWfMUK/INbKCHUAG/QteG5W4MStpg6tfQn82ltijGOX+Z+dxc3UOit+6YyM6j91YST8691nzD/roK0hKkYzaG0ZGlP3b2oTP6REz7ZekCpxJL0Y6stZVVRUibcTP/IioBabTX1N3/K1sTp55glpj6Yml6VynSH7hjWGZwX0npxlAQmLt+hjyfWmxVMLMTRBgxf5JxjErFv9tT16muhRpI1PEd42Gia1trjL8J8sBlhed2fmd14iMUixFZGnBfcfCsiwrFGB3na1Gz+K6fm7LjjDy7bBmBrKI9sA9d+zEFa+MMEOSEBE52MdAqF19Zy3qi40NlZTrpYcufIlcTeXdENkxFejD6/sAOpZbhhAufPdHW+NnpQ1L022zHIxxq0+1gOHhITS6lU9+TYS67kj5MINVAgFM/eA49t4unaktTD4eNDsotFvsH6FmFyMPrIsHlN6inUDPyFi1MA44DELoivgk8kYEfwoPl5n2swi4hdSQoSuwtsfkTgpeLdlo2J4BkcQVkUKqqzasdRHrC8fGfBjopgSStyKdztE1qdc+n4Ym1AbwrQaQgR+1s9DK7GBLVv+oHf6y2wdiHDMTq8YFubvv2QTo3fvWYPUkX+5Z+bal4DO8GRNq4+LuwTns1r7snGtk6SZEDkfFP20fi0Y5jekQEuzAn2Ej7SVkm2WJ0C/LxpiW9/UsomIhEdlYmtZ5UoYyRHtyYAsEzk4iECeYfjUHhLO6lpKSAyYkB2+1cHEe09YCxoSgKlE+Qzzuc7xj58vwzofi6Pl4cX+cE5BeaecmNLzNYMNlGUNp4QnnUPjwcQAmgHrgWE8gbPWjVr2AEzwS1LVydx//qzCFEN18+TCSnVejoSxBCu962/YX4z5QNICjuI9dtFOlR4eACby91qo2mPygm8KQs1AgA2ZpyXaQ+KeFOa8uv2LoXFl3FVeHRZuSfKgAwVsPYzyE41LZH9JYSCZM4Vy03EA0lhV/ZIX6CsxiHqybemqil3Qv/cWKm96fPoMJWSA1dcF03dSwSyNMdvKKBCYVYLuqr2pISKPaNRJJw2R43RNE6avh/TNA1tGJ/ilW/e4LbOvIh7cS2OsbjyXcD6WS0DYaDa+og0lSxehZQiDSt2fVdtF+DO7/cEUAM3uju47Fl17rUPkRPaheA+6/jpSYK5Nh6rSwO8Pbi1y4/L0L5SStva0NcscpH0pw/3Y9+Eqw1SDVvRn2r2d8vRC6YhQywdhKWraKGBMILqjiU2l5d3jb1tnQIwi95QiTJW7MAjJD4Plr9FGRGlM4NQyAiG8wSAKUbRCpmxE+zk9YhXjiC/Rbt983pV0VzovJW+90dH65IOb2VS+Wk+MpsRgZ86uEuxeGPyB++07HlAwqFjq0sm5Lvom/rcHSaLduJrDdabujYJRWbbY2QZptvGwTHAiaqsAafE9NQa2oq6hV8+E2YRbdEcrirxyx9JVWpti7CsFfA/egMevH0MR40/X1jQzMYbw6mr01MI833RiE3EuU79cpspC8tuN6QxFB7ExHF8yrFQ4vRniEkTgKc8kT2tC2HgNJJ+l/FwYXky6qbHj1cMtBGVOw3SFMHn5l5odYVrLqhL6R4DujKq/CEsEj742QjUogvrSb9DOh1Mm5Z7n6MI+YHii3bWp2abi25FJIiX3GM8AojCJkr58xmNEsAdR/zdNII6Si9vfE+QPSMSWZvhMGoWvCfwbgpav5EznyqEKeVWKZDf3SbxgvP580dsFEOzsYmAdIr6/ln1zBmriCWdHZ5OOepPLxajsESDbgIv9FPUArM4gTua6jyh6DOfxHqppvTwvNNxtvSKmmxJx+NCgmGyviMobakxVzOkJiqm1lwYPmvFMcVsvf40OcRSm1EzIBGEXYUyIzumBoH8ikCdrUAdrkQ+3ugF3MwaDuQ51I6nGs9dt0/eX/5AJ8IsykKzEV3dUDED8g9W8rwlp6cJgJp2HJnqsl4bFNSHXX444COtcgnFv8RsjLyu/qHuHLA+n1mE8JyC30E3zTwmEYhorC0vzmM7meKlDIAXr3TEn0DYMy4LHnlNIbzx83quoExgMj4j4O0WagCokHbsH/HE33EwudDAtwsIc7HgYgUKrf/qLuDAl4+Ogb8co1vReOG4RCZgXNOC23+4ijVsFfgL7LWOtv5HSZGP5HJoORG6zxbhZbveptyOmMiHa0ZRjoonKERoqIr4scbl65B5hk7jNegptk5aIlO8k01Wta6CleQgggTjMr+DgkoBNCO1oLWpsnqSFokfE5NLaChTnMbKOZo8q9U+sGHbsTsTaJn/qibCkEBFX/0Qp5TWbgyzPxDvLczMQXQLxUgioDEH4WTyob3sA6GqWuxPHEe9/8F+isAT6cAlFJcbAbTo9K53Gu87uRaiQuVtFPGLedvUgCNEup5lp0vM4LkC0c3/4ES2qkkOhPU+kPOLtXLOencwTL9ngRvswCsNldMdTSV9YAvDNjGGaUnHVxCjxteONlBVkxFJZDPTo20eBbq7STVeCKhLtYbZYJbREjtEnmTB2dSTO2zbWHoHr8D0gplvkvLhBo+xU0kldB2w4Nazp7eFrPA8ajdk/xzlzXeTRm6GfFU0g+oOqy1nKFjsLMnhtPBjxuihz4i0bpxHUzzZmO+Dm0Rk9VQhz+55gWJo5x/pKiuqw8qxKDY3anPLhvMmax1gV1PcHqg+a6UOkv2p56uz/xomHqQNmQ3SQPxm3caR2GrT4JF7ebKKeeuIFR2WplunKv3HQA2iwl1rdVoCu8tdVmkEfdGDnp/ARAkOeqZiWy78831gYVFCT/nQBBCuKOMGb9viAQBRHTZDRd5ip7bCxOTwywPyBIldK84sjkcyybKMUTAkFfx5aQpF7Gos3B0/78VPYmnX9oTpCnoRrpt/e93xbO7kZasc/6A3qxS9Otez6hvlWCMY3kW9iES2SRh/L6fCE8xe1Ox1IPAAFQPq/Crs3WpVY5r8wxn8tzGvUUwY5csVu15Vmm1xcs0UL/lUCkrOXdLtlaa4pHLeQgpd/vu1ZzjMOcgzfQQBM4UIYZh/VNiBRuArYopzjOb/bl3PcaFWkWqzrHjKFkFuLL/oUPW9db9ohwOJJSgiHCtS3G4YZmKNvjsnPwl9RNuXPHh409td5inKCRCjXFeieN6i5O4m8Af/Mf4UrnTM4sC1s30A7rGN9fT0KyMqK0xWUdaaZDJsugEcE+QLkhsBnG+zdwfVUBzLZf3RYvrL/RJc2wZ4sF2vU5ZW5iD7/BQ2JHtCc/Z5zuM2tlk6ixPo6XCfTYOHrNLAqgOcwUt+TuUE7Sn2ZaN7HuAQVc1/EU7X2qZqghJRkSB1O7LuweCsP/fqjdd4V3MsWgWc4lrjJoQ0Fd1NKZVlpzP7kgZ1WQSCNC39PG6E0Yca1C7M0N8ziI1nbwvL1L1aRQYw0B8NEuviKlmQnFQDoeeU6LhhvTj9l7ysH4cRekMYLkmmvh83rYtCHyjqTGScTU/n+s2bPjeN6EWVFS8LI2LdjlK3uULtraiAK3dlrozsCyFB1tVXb5HYO66IsQnPQwuGef/X8XZnZTeHnrQ+ueFHQZz/kZbkPA78MatH/g+8vTjoEqNSnWV+u0p8TiixFNL3+gHQas1bdxiC+FTyV3rWweEo5/g/3i3ifuH3N1FcNoW/g5E8eiSRj40D1ADj1GawYx8ku7X9Fe6W6rQnh+xRQGhr10v1PTIMle8a26iWfxpis3ACKuhyD9I1tzadhNK9X+31I6ncVfogkVC1PsgMD1xb0y+x6nxS4/sAnyGzoPp7FtN6xk39YWi7wGQP5wudqUg5wuH9KjogOlrSttAZXWVGgOhjt5uWTghsnphiuGtdoTNwV525WnQP8k0VfqR+yIk//VjooxhjV81fiuMJnZkY1NyLfkMFAkWrdphpBB4TnEGNOqVnkKgRox5FnHHl/P3a5JPrWMrBzF1ZPIS4Sxo1FYIrytUWuCvkbVHGTuX5FZFkOFvH8qNrWn4RhA0rH5VB+8o/MLAEwRPWKbJEfq+wHPMancbRAH0YqBl0qa42yyNgwGWc/RwGEe61B874f1D6Rb6y23f4RX+7Bd0YpljaYhrEEWddUan2ZHJPSCbvxT1Ng2K/x1lHbJCR7i7n1wrw2yp9BfbDN9R598yLgDE1HPrULDvZZeo5zZ1vVJaO3d9oxEDKiSK1kC+fkntGvJSkafl4WKeCH8lGk0QufLxRIyrqXhRKVOBDqdQI3gC3O72VdKL82vEEpd67usRaWNP3JBJTDgoZIS1kgxywimhSv6gv0iH0+dBiWZ5Aq+UoF2UXXV6vBnOlzYyM0nQhfvWJVBSjIq4v7J9Rqf3RDIQEWofexonS6orSzQZRfh/F6EJnazNxlwUgjeoszZ9jjdDs6QsTrjPdezmQsNmQtA0rzbgA2CIRSzi3nj5TNy2AoO0gdyBC0/2iH67UB581jmM92OHqgD4EzAzyxDauPnlIdZu0nWwB4dtxWN+meq/faIuQpK2hoRP/ULwIJ9r3xyxtXxfFwJ3YquXldSEnxoPiYD85u0OAHvKOG6+3eBraUiOgvdfp1EjiroeSLLFutuPPV9XqhAReYPaRy87OAkV5tzSqvyfufCvOMTtkpxApWsJ9n+cNM2uBWu4lj1oDjGasCfCt6cfgCzh6UbZanbL/qCgf/iHjKYaavIiRLJrU2BuzdsP97XHkXLYbbfsHVTlXSohKOXOJ+3LiR6ix9UFLo9qieejYk+P4e5wC64jGQLSxJzYt3cErx1Rtc2+xlJaEBynLN4hLl/qOrgBM7a+yswC0Mh2OieA4SR6MfM9WK/FOWbVyoUBIUAKOhhIZp2LOgukk0/DInn7sF7dRP6Nw77MaAcYg6k0gdjQN9/1wtGVSBm+6LwkI+xfcK9l+JiWepXul+/EEdV7XXp/9lUsW4RQmIkda9H38FJj3EYJTrG4hEU9YWtNd2lKI1683cXFVzSMkh+2nuu9K0JUBoAnrYkKVZpAKF9G7y5n/KMZrP2xPuUFSOaruqriffSEX9Euj/k5dgewEyQCFTif83LhkIjt5qJ1LyI4ynIznWl1SoAdecEp+I5WmKBB2fr5yw33NX9wBf2aYAFH8o53esBipH45DAtZqj0xdVLXL7Q4qjQWVe6Ksq49pjUFBtjdWjTkZ//4367isNwUFCqIKtiGBEASO9Vb140Jo6y6RwlYRoO6j+lYJgYktp2biyxMI+9VUQk0F9VcBxMjEfgQW1YUwlTLmh/nRA1c1kGX6hG4UiR1u3TgN5TqPYDe/PM/4iQxqEsPrMFUm/7FEEhzl84O+ckyYlEwjyRzIwWrGl5ZkAfELry0YU3KXrLIY33lLA1hfANIhAI+Uv1vONlpY1a+zmm6I/aVsQGUPDm8Ie1WZv+wPxAGA6FFqywKHAzmjmDiWGUPi7zrCZ2ZWaGYRecLIt5AnStG2pghZGGDvaJ4OeqY+86QNNa0pHfxN4nCsr/shFh9s2ynKCtTrJX1i0nLDcje4SQOBs+ulw1SkhJi/O/dt4WDdk36zB52p/chUqRx2IB7O78qkcYc/K9f2hPqrNNLfjb8N6db1y0zX3tR8WXiuTbUrFKZrUqcshaUYZqwwXj4bd3FOeoGxy6XgKo11rpDLyK1rscLMqVhrzrKWOb4dADYHkCsmhnLgs3F5P2LMW5CESgSFRM0lCPakJz87jiHwalBfpeCloC8BAktU2rTJcYVvNvc7nhdDqybnnv6VPcD5VY/IImfUwtuyywch0WElwy0EVBiLRtL57FDhGrvjE0QBDoUymwEb+eAcadZvwaltAn731CTEGHIvh80AawMO5RySPJJTc6tcG8LcX9M80xSKWEHLFN3XQ1gzLnIipjfgRyeOwehZIF+LkeUElsy6oDdsECtWi6doYDCRqjCCOKyyuelXA5PPUEIcOnMvDwjNfaJTabg8Ha0Bbz/u+8IssisfGeDFSTcVebyVjsLxfmg6LmTFuRzZ6OXfetKnDzzvPamJumYelDuzMhcdu9mlmLbv9PlGenk4Tj97P7jBkWq62DRlTdm5JdFWzO2QKz9gJwkC7j6CG5K8uJ00v0bCHRZj4PfM3mCOEdEWONRULAcptTl5yXB7Zij43xF7ro1UBnwj6wmbGk/rxWzBViL1MuzsariL3Ytg1ad/qtxNzRhtOnf3M++8IBxlq33MuSySMwjGR5JOptkJ2Ql2FV8DLFYSSPZyXIBvwq1OZYA2/w5VRLFxtOgRyLqlX508i3QEGWJiZRBJON6XYBevVddlwvrAfVuU35t4z8Ih5/1ZhrM5GMfhK+PQi28pN4QwUirsw4/p8wqO+2TuNBCD+GUTnUsFpX+UvMH2HAM4zXY/2mfLpJ8N7bq9dukXwszAPnFKOZj2mS/XFad919JkU1CEtr4LcA0YLEkl+cXCVFkfIGW3XqsqkBBAHg7t/gTJa4GD9kh/5Xtrtcn1RZ+SV/VUNOACZxGcS4/G2aWon2O/UkjqrfdbBUF0yavSPdNJacaaZxFQNejGDPK7SCF82XxiahbNpwFs/t07gbCJkDUvvKjqaYv1SNJBa21RKsOuGJNKO/F6HTjc1Q5t8lqLL4e83gWTT4aubYGtE+D4e9zdPPo2R3dvG7bDrCQosp62YhTaV3B/kEQGqtzvu59fbgA6lFyGe7urhYr3TWCBFYBmrEpB78fWnXUEd1z0LSzMcWL6vuh4CJYR0tg1jX4H0wkw9mkbM07MXopLJ2Rt7/aL3Hl3MjO8h/1lqNlK74QTbgkurmgd23XflEcMhjO52Y/Wsz+CqwkBCDN8SUcd0hvJ6srikURdDKw75ZZMyms8NdzvzfsXreeCzpVaPKbkgWo0BlD+qWqaXziVa7YTSezNkCD1UBphMwE3IFwG3+Oja0AILbwR+VMjirrIkRPt+DMtp+OKLpkiE15AVv3jn19brZGZkhhAsuT2sTiWSjLvxJkMICAGdQY6CcJ1bmQsycrXCCxoxrME8B5k7aYQkl31h4kmnvmUA1Uo5bGEJkzebQNuMeVIRwKr7shM3Y3iowzuO8Jm833ALhjeDbR9i+ajGdiv5nuQcBDW0PZ0CB/GHvnmE702e3iEmWKin/StmkbfvsVh9mXnjLzZCRfht3g5Fu6OpDSsq1DSVUie4hNThGTSTWgArAkDJiXcfIDhfm9dQTwwxrv2BgQux5N/QgRQlGx9Jrzve+Xqfb2UWr4YKoXUj6YHk9LIsW+Ae/qEbkd3Xg8AdMqFj7HMKA7DBFnHKA/A0RPRSI73KcfSnePsYAUSz5VKOXgCuEclvJKiFEt+boHsXHFgksnEmVCvlR0P7lWzSczoJ6FJlk1jDgXNyligvqdL7AYZI0otUteBuC/MBtPgHUngYxLXogoyWjlL93Mz80zg0j5rUW6TirBp7Cgeoanvy+Cn5KS6EvIBWEjY6vnQh3guUfBGif2jslPcPamJtyEW8WLZVMTHpwtf+qitbZgZJKae734zy15b0MhEfVN9pu4Mi4uTXo0XPeQ2vlAs8YB3QnM3YhgUDXjTKp+L0t8FxkjdpQr8a3Zt8wyTx6q203xz3Y6ZRgpRodsH0L1ykTBo5izj0zO24a0jRUyoMMc3weJE/nkGlEgm0hZtLKLT8s4L3heHOoZXK7NpVoF+DR/76xXzDLvK3GVBgD3DV6MTRdoKSkz3Ns6vKZ/g6sRojJBfzhn17rBDVzMi86KGdJqr99wV2TElwzMTaRZwBHBZPVTzR1boH6/od1yVYzIxYtivj2IpauGbujXK6YkrFUaK/VHHdPDrWOuH6+42OKSkVHFrQX0btlaznue6Foh5PxlGNjO7KrhZkERezgLJ++QComb5M8+nhvLy3iYwhiS9flRWuEERAVcroXKWZtcoCZvZLkPvL+MhDMNFTvkynnurDBUVXP5EuCIqybqZ8OPC6EdmkZPhrgwWducZyhcXUmKmar1pRHHprG85e8L0IOc9sSsRFLKrshs4ss3f1/lxZf3LfSkS88sm+gqJiC/FmpvceizzWV74TtEEGZkPE9jBY5kSeNlskc38ixpCSn7feLjtGMuhX5aNwKCBKJ91wcoKYtyXvd9k6FORCqIpL6pHixQAqbATeXbHnpojHR8TiSq1SQ3U0tKgnE8zwss+dOqMhDRXXpbJMHYIZlJ1slytlniV9ggV7nTVATjf4vJDHbSZudkRL5hqlZsXuWq4nLkwhi24GbWL4oE/vhO8ZbRIf2YFKDD/nfL2j1Px3YWWlI7IEPDqKmXns7zUdiRZtqJ/iJYlcmEP+fC5mdrLYCqAW7OEpZcIk6TUcO3nC9lkfG24NOWkzdNAvGhlrUXlkrGLIqydCtCPe35SNoCUUTe9e8BEq8lmoV1ABWQHcg9PI/UiGUJvsKuRpKFJCuXEN8JNcdNceHyiz4DyI+g+pWYspar1hrZeisQn6EkF5TWSB3g7KyEaoSDcXawopzNIjDJL3jcYaqxM4ZwZ/Bep11WOc1Ay8zl6ad9/CNh8nBWtqbnjmxKH9x0IBRDJx0t/wgwBxIqcsWjhfmBXSUD7YCvPm/qTGcSnhcriFKew6a5s0AgK03I1gEifX6y90cJBY9REbQ7yW/XB+zAXN1XZQVEs7r+0ajtx8KvVBKJksKj5YFGdhEennMbwgCJJIMdt/pJD6FIcNVegt2LiQS70DAJeiNNG86dQVNYNZmYEfo8oa002xKLh1+rHlBX40iY8Wlv7FqswQFktpyLn5oSdo1jBRz8V3aRIOmhSnrs2wxGwGBEVEXvRm8RZVvSQ0xlKMVWs9Y7nnmJ9jEVuDL08D2ES3plzvCNP3FpKQeSknFeVBXv5T1Yk0/X5vdj1J1LYa6Ffxxrv90ObLHARkCI+tz6+0i5cZTinvgIYLMVnV/OL+m4RCsTy/+9VQPsYv6X2qSSlVdQ3KM1SOntMNUBpb4C0MsDh10xHQ0cbJK0gsR6X93ru63BDYbRZmPISt1casVwVVE7+u3l55XJGJ0Ev6S+2zpNqOAH66RuzpVskXE6X8x6wHOfp5PAI/7YG3Zozh1U27IXGEEKIm13Rt/nTE3pKWA7i1NFdVQKQ0CNdqEsBkjiuM41dd5rIbR4DMnoDva07v1esxYBGU4JWJUJQyejYbI9p7pqjrpHZUNlz2exX1lTAks+WxY6CExoPlSlNNv6AIsE0VdPmHOj4m0a8bigDelTpIL1WoePLhblmhRlkPDADKwW9kCWgEsKBJ0wV3eiX9ZcNCHcFsG0uo72GnTwF+6ZmMulMkZEAgfMOLNdl+FuCp6M1JLbsEhdAtXSa7DOBcapi30xxK+0tajUWizeTo27aobIV+2pDIPPT9uaC+1nKIVx79ItieO3ZD0GeWZRUFY61sM+9SA5KLO8kOF2JKRsss/3ownt0o7d5QradmelvizhvZcYXhPqALiqj1MO/3PZJjhF99v9GM+zvo/RiJYAOk8H+dCMLa0NGXG3ix00IiOYywuBT5yvxynJoxJgj2Zo/gcfDDaNM+QYq8Xofr4MUAX6MBkpP2iLbeClnbNq8TTFc+QXtrYVM0ndvDG+wlX6jR9dkCSai5iroHb7pxweGdQh4vXRC1lo+hk8kHv9evL/Y2/4kkWZD+nY1KI7ltgYDx6PW+HlCVaFpfckyzmAwGfLIh9cgx/iKbRYRScI8AnOr2rThObHPLucYooR/fWQCnogWT3lqPQCiAvuKWMtUmU5c29XsHBmfh0p+5nB5IRkGrL4y+5qXRNUMeLAe4i5du9rD46RTtp4B9yTQdzofSOC32DpHFvp0C5qIoQ3VxRi0PzzLRv0CurWrowv0HbT8W6dOdk0X4geCyDrjUV+WUMWlD52qsg8pDwiQvH/amnHSK9BKt6E1p/l3C0GOc8euhEbMb9FY52JbQI4/N6gC58zndjqz5w+saoFU9+XujVDKTexCUs9A0Uc8s3tSfg8d3H8dDOe+1vOKonw+dZmRvFTWwX/uT8ZhhqxjppDvkONWJwpMedQ/l9wl7DQI2s/133DyVFydNL2kMn2A7ZhauJFNWR3Z3qePE+CLJMz7GE/aK963f7m4mC6ngao5xm7jVm/WXTw8ZHgZicGE47E1PlboEJrc+fgt0AV9KYlYd3ewSvh5OJjt6vKiVUF3iKrOISrkbwXyMMFMioPVtcfHb/hMBErpNgYLNfmXN8M8eHhmrMp1rN1d+tMB93yl2RU3JHh2XYLc06nEDwtoQh4Ul8hTMpY7653ixPnPm/2ENF3AwWptaAD87yppnIBEegKp8gt9iHOBzD+BUDdq4eGNp7a2sAclfvaKv2fIXcEBD2EWIhCwQp7hhlw0G5d2S7lKNL3ylPwLjMGHzV5jTNr5J/xka6XOVgz/jBC/NLWyQ2XwzQUX6X3L1aX++btC65CCI51OGnWqJWVswdsoyFcDaxe8xf/5+DecR3mhnO1YdRGEXXNIdpdt6hbywTUOZB25l/GLWtlY+A1OngTd18iQbyX/Yi+MfocNYcf+xI+VPBGa/0IYKJ4ua/T8QX1N33b1yAhlvQ80k+xldeNW78jA125RRuT4szYyVFQFjUsSAErc+vngwG5GHgCk4+gyEegBNLUxGLZ+2h6+EFSaD22bYzF7dk/EhCWh6u/v1HUVKC/r/Wl6JHtd1V68J9zdOTgbvJuQug4r4vUV3JJolQQ5tecHKqcNoYjOIs6BZTlfB+yHGfGdxTKsGxbU/4taKuH8Qpd/M7fIG5zebrpiDHV97T4jiUNt7K64/u1e/+erXV34aOjfddcKNO76EzIf1pfD+KivBsRlzlsjj17aDPq/lnKHQCLsD+3TK021HNzhZyuwpLRKS3KE0XH/0TqUOr3VqLMcsSZM6349QJDznPG+sUqeS6wwMWp28TAoDKdmjzW6f+2au71HsOzLIeWencRa5JapKkVTYpvwMIC8u2L+/hYGJmk0588rq6Nnqe041NMzU6lj1K5KmSj0ZRiVpzu2FSTl4PBYHAuhe5dtwnRQwvvNqIELVxKMFWedxxB7UO4zpYRe2x0zH4X6pI2m4g6YdCs08vR9B7omy/goQUYbUZA+wJamq7/c0FhkNm74Mp05NSCK1Dcy1+9qp82p8XVkUB4+SsVRJ/Tqtn8v2esmemr7zjCfjLicMb05JqNoL6zzz0KaYkXeStBrF9+T7EbZTo2Fa/wS5NhJvRoZc8QUfS46HX8HIZ8A6LK8zKtROnakAnEEFoonVlvYR71xYuBAXbjtxfu/bteN8WkArB3//qp+3btpi2SIMyK6rX03iCADm5I8ca1jDbxxBL+/etOg0BQZUFJDrOkG3gIe9o58QmG4MlhkJzG8945K10LNqhJCf2cN7zANzUxesnT7031MApxLq7wA0sItjhR8csZ/zzj8sUifg4s6VFw2XsVLUgmC7X+8ubgg2SAe3khKna8LcwUkfPXMmeimcpLUCAm0KaElFkNpbrCKzwInQoAlbRjLT6RYjeUn03zKomG3rwUw1WCSBoAaLku4qaRlab7O0q9/2BPyEmtdmQz9B0cjrDL0GpV5ZruDtkzVgttS/fthKcuYawKuX9RWL+0b59lvNjhsbJ7TMfTxVCkabJ3+/759L0S1qyZuRAQhieYtkvE7600enebIgbBgFlVeOVa+sKJByw/8W72XQdaYsG7eC+4nimG0mxdeWUl0zyJkhBHxnrMQyz5ypUvv5NiHEN3RzSXixvIgTDo35XS/dltSWJ3J6R1zP9oiiYZ1m2Z0j7VBSusfDt4NdP4bfNtNkxfGkSAlzjNjlsflrPx4fPCijxBSV5QqlVGuwSsaZIXoY8nY6W0pgvr8LjPHisd1x+ytBNxYGasFYwyIWJTg0a2lh4AKphp9HK7yPzHuW2nefFVuw87QxKhpHy2/rX+r5gKodfeHi/LgfOMJgSX7hkO2Pb6ZrC6PgnSsGlwPD6ynO4JDaSEVuSzT2U8bErwdgmXRj+QB+0x650hREoDeXgcudzathXW/Jskk8c+Qorb1RPmYx2mEt4avQWsfrku08TCE+KiROxxnbBzNf/bjzQcpYT9OC3JN/STHvL9nTzkic8kKMvJv/BXOofl/uf5gVQPYwLBuL5sfynVFvjV8YEbf/0ktiG+2hiC7Izs/mWULvzTHrgLD9aRUUzfdK6iFVC2ydtGSZa46GQ9VcRxKAxRRlVglTk94xivrxQ9OoHN8g1Ep2e2R4xpsOGYgIJWNp5u/GlKV8SOAX1B6i+mEChQwms1CK8i4ud0XM5Wk4dK8u1jeFqVivbDydCePX7ukRlDGGXd/ja0bxHTq0uZ/hCTk5K+JTc6PL2sHGJ0f59Q6tKwh7uaNgRgRBwASW7BS4v5pVhTtTI6b1LulDyY15V7HujLQUTk/5kH8noFhphUUO0PzvqyaeO9frUBddPm75BMXwaE0K3sHeVMIQFDg6cnlvmiur8dgK6FKNmxgWf2Y3LCRXzGBDLJuOy3UEqu0+6XiNhMfuP/aCACRn4YnW1wPVGDzYcYoBU4PNwhEzWH2FZKGpm4977+DGTbRP8KyH04LgTapEJPXmyz05mNlOFAs22Kjyjub42mV3lZLKGwwCc4VY6FO6fU3RZjTMi8gkCa8gUjnJtIRZP6XMHFdeSmf/iCKnkBj5E24mNYWlkp7kGAXslgACuHE8RWb+Dr4omk779QOOcYomAMYQ9ILt2KUk2uNlahW/IjGtenuGLxb/t3aFoVz4oNwMZ7iyp4td8mdzgJAfnCcYtklubGAUB9k6bGC5DSkf5VFarnGEBWz600VGR8QywZ+jIYFZbtKT2QdDOYP6k7D8qVgEZByGmRedZRWaQDTggLyNgDD6pQwEeSs82+hTxWypqwU3zuAWqfwil+mytzVnKztyvMFJyJwPFaPr4Z3mTjyxCR2Jv674JVGGMUSWb0l+GtcYtd+NBGChwr8mB2hlyccget9liJhQEb0XgXfgVRlHlbO+jlZ9CcAew0Nw+tRcWgNnz/GL9Kur7RohRhaYZBBmQA6JhvzkazHRcdZDn0zDkfBmYP1PfQjP3d6qqx6gE7vrb3lBKEfK3Y/nCe4COdpr23oZCoIpssGXmqE8CGpO2bEwkSN6uqeqR4UtWR+xsgOzNeR49PTLJpFEAkXha5YaecJ8t/KR+eG7/HKV23zPZAMvHDC1rdxQ0l+6wlIgZbUybjBe6yusL7isRuuYYwg4+8+4lia2ox8RCdvmXlt00ZshBnAIfLkSwIqUzCcsD/d1ZG6Az728L4FCIqBKpbA6bzkJ87lYQpbaHpwPpqu3S0UqNDCwgg3q9MEn02X16E4xibz/rLx7NMDtHcwMOt9r1dVU6Hws9TvJVACw/FjRknoO9lfC1nYjS2HpqqVMxQtWj6WFIhT/mo7reVNJrcyA9EkQ6LQAnz9SVm6+CovD13IQNCgdMpY6yr7p/OgDK8im/Xh8tpj5uto93o2RJqrREKUx6crVAsfzs1muJRp64KjpJnv8J9S3YrpU63QCMgraNHS+it/pHz5NXPFlv5B0uKYf2lTm1BzvfFb3dBE8wbL+AIr5H5jOZXh8crnYZYEQEvTkQShNjo5gbVZaOLrp1adVODS483Dzf2n/KMvGQJ91Nof6/qFVQJ3oeVE6PpbwyKXoBgYLs0jb6qRm8mH90DD+JCyldA3DBYevqyUsinSEEdhMOH8nsFrtlHpyneJThtJd2bOFNqFgN6/jIqIgfI3rgQA2Ejk4di/Ubgpd8g69CLNhZyE+HNCDl5UY0zGyqu9ZXGO0huQq4fMT4hwDY1nzcYrPQPzPnOaBGegkYqKCx4/1OYxLsGACq2rKLED9ItzUoRRauFc5DqQDllBFrOnfDBJrjThymkGd+xLwSwSluv+BfJbfpxn2m3VGHPLEbENSadl4HP9R/UA/6DIsiD3HTi7V9OGbbD8fVlca9Wqw7VWq61XmBSEWR2TCgKPPPcXcVSvW/SeMZhPaZJli+gX99J3VbXVzlUiGQQ7TpRLnBhGYdU9heZmdsrlgdDymQgMnTKqyyoUrfgBgWo0h66s5qRI1uS17G+ZE1eh4GzHJz1tnc0I7vTdbCP4D1ZYBppNGxyjl9lrNauGj4s4XDP14ieRGTVCum2TVHhWlCVU7xsYJUVGO73Z6FTntEWoaN4bodVw3k5R6ZP9oAY44VEF3vBTeQOM3EapDbSqUlatMcsPY98kJUMavy56pJac/JV5sx5M/LF/RyYx8Mp/FAI25bzdGRSJOJYno8dJVQAqCr6bE/fqUKC2OMHjB0c3LlQutA1BZGqi33JUuFCbYuViuBRN3WHHNDopV+dLrHCyaJpUeqV64g+hCzTQVjkjLedAiYz5Mrd2Z/8Y9XZT1T9belxMSvm94zKFCyzzqxBr4xC3wDDNanLgW9AIo5CLhXGvH/MWqVJZLy45piVu0SveK/B2j875hx0ql/TF3YrzSOAPiR8tFQnu/VGWSb8zBs6Z7I/kOpNxCLQwYgNdn0zJUmxDjAFgnUKvU7clIgGgKiaMzM68hINJPslR6gnPw8iXAhNleFlyIRJ7DnOXPH+AoVn1GjjYTz1qIKQ7P5clQr6d5tDUn6wCSjYlcuWjQvYGenPQasGII/3Azt5HWpuoAo4UfmpACxWJreIsR5FsSoQ0xrOSvgsEYiiZ78T/XW8UTwgR24lWvILHdhrojR2Q/fDDcFzHTAtDLm1aHXe3Z8pN1EBXwiCC9aAAxzt2MoOCC3OEArr09ghhsj2M0mue5ntQcmcC1R/sK3zfShGJuazS+mJUeKxk5u36CYj8+SJCq8ZEv7bNf1+BywGeDQoTDGq6Yh1xW3Suwo2O/ykazTPK/TdVOICyiwK8MuQpK+FX3mqSPzxfLwFJ/iYDjs0WgW2kqXYgm+gkNToB5+jYH83Xlt0cbtEmkkBaVGlHz61rVuWzrK1yjn5nYHKvKCrBPPRth3AKDQQB83fdrbgIeIfB3iHya5NPpEyxbzmtN5Dnk7GqrQ4uu4h3QSoHU+74zs31cWqIx4SZ2bwWLvIxUtR6gufZhNZoMcmSB5z1O9TKvHMORD+VmuiqzsyJKA1OaApB+b9x6u9FTvUkalgl0r7raV+wRqimc2D7B1z/OiSagdd5UME2igLGUcgPlMSX1VsKQp/9yDiYei87KTBA2NPCUmgaLwVdvQFFFxWp2vGCY/KCUvxt3FOu6xIgwS4Vybvbj6feUCkrQPpO/wPHJPhAobSj/aa5YrUvjHMcQkDZwfc9mvghrk/PIPvcJa5InhVBfjh3Xr9vIvA4ac+m+pywS/EqkSX55xgiyj0TB1EE0NT3W2CPFdVD88P72SpdFzHS/6XsmbGtM8JE/m8eojzd4PM1bNADliZ+XG/9hbcKg6PftVKyKKt/8Bz4lGsHyT0VKj2vDGp/qDADPREVLbW8gXruTURFN8W6Esz/x91sqiCeiEypM0X/6iq9dcu4kHsgd4N2fVfZ49qssESnPzL0IA3aDlV0TsSKZ6QA6GTD61POp4SyDJAviJUOdas/9FwF3oIObXr/m34jVIDEKf3CjySfOamDwNg/xX+8fDxK27tyWIC34b9VHhc81ldYXatkF5A7vmizaMUmtu2R+E30HMdPgcaBdOPJPLw0ayJB147DXYaNgoLLE/7fiREdmpiyfSkW9W5sHT796YpGCIZc1FZDAxK8AHXG9OmsPRnK3TwGM//hb0cY180FwDRBv2oXmF1Dh0OqkoAUughbaAURUo6BqfDcz3/hY/1yQ/T+DqRokNG6u3E2BP4+O9ZgRaUVrzTApgKR3/RkKFX3ieOMbKDS33w/PcAvYAUCG9FGInB19FxCqqFaS/+jpfjl3nDVgsk7J7e/uuC1rthrSMCX9qfjaeDlbPhLnB7ufb7Vb3gmemgbJXxZbYdiMouQqaniEEqU21vnLhbUyuwb/B+rY3levPaSqF09Av9ijGAJB3pjYo2QANW7tPG6BBFZW40vQFSPclEXJY14KYHvhazPng4+durQYUXHNKSiIndG2rzIQkwq84wxqUUoftgUcqNvafCspV+5RS5G1N8kOIG5oQcehf4xSszZsFoCxJ2djk+OpwwGf/DCiNAAMEmS1g7346ChSzKMD0Kc5+qIFx3Pd3xQOTWZp8LJUrnrDsjSNRBN0TPJM2rerYZJqTohppuvWJ/Mjbsc9WLrj1npKMm5HntdOk/Vkz16OOHmvROUB9iIOhWZ+9egwWthclxxtQfmH55oWxKQDZToutQaBjuPht1jCQ6JCV4/RoTbBanWi4wNaZISz/v5hgmaGLMTSPgPrDL1sqI/jzFnkfJKEc/q/aTVRFk+9FoYgJDU66I3a9LAS8MSDOw+M0/nFcvemRPgAYvQqpDPVSu4jn5CVaewKgqkPRGfXpp/KwfM36EGVAa1XemEtgKokxbdJyfB3zxppwVn914uQoMlqCwJhyafwH03RwdPjbOQ5YS+lCfjv+scrPgllSrS/UvH1R5KcGWTCZ+o1bYlE7V48sJolV8PWun/xu0HeLWbXKEt2srcV2APWhhphHgaG44mppoVGjA4nB955TpA7789fTaljrxwtkjL+zkB7QyMpGHqz7qC8+kkDTgbcOqF9ko92SyEwQ3FjcfQrmWGFWhPr5Xl5wE68J/j57kN+Iy+drafOWiDpOvOElJUPLsjtrfniDh53Wd6MQ/gXDAG2vyVcUWFAFGaBMNw/NFljs9P7pfn2G4RZ338dz4Dstiy4rvNg+RTEqYvj3eBJCBU4H7+6f9L519cKdFaTc8l7P+Uv+ADd93vLxSYLBWSuj3eXGFtWyWpBkIeKu+YsBh19VeakA8OePM0ILu6dYYl9DNIK3kU1ybH+A5xYhFI/EqSX3vtNs6V5eQgxYLvu0hYFjiG+n8JzqLQVROiVa8XNQDYJtDAetPFSuEtGI3B8rnbbrNo9TJn/z3lRYq0ecBIe7a03vLESwhKOm1bGTk2kPMv/Sh9wyCOmIore7JhSFT9HIjonBfi+gcdDLfFt7dpShJmW1gkcXmitWwm1cC480CraHm/or2MHphB9Q1bmt/SBXFqXJdcv5GTt3IS2fRgqThhInCjRkh7Dk1iS2vMBLSGtRPppb4FEu762JehUMQxxLQre365CKoJGvJwVde91XQ+bDp5ZsMu/QHmLgITmwGXSpQFQlQBajqquxlwIOe2cyfezaSHIoRNLcwjW+epnmAtmmWA9KU29v/cA2iuWbj9ZV7HR4anhHkjbxnzKPHnIZ7Mm5wAf2o/3xUhnfH++quS20TdhalHgNhusidPKWyKWV8ZjFLgb1fX2r7ifLyUtxuKHHIfCWXQJ/DKeU61vxmPT34MTi2Q9r7/sK1CYuHVqMBsgtfenn31bUzCoyPN89KiO5wHveqnk3uyHnJSUBVTQQ3NyRPmeRKTQvWEBZ4QWcSgMyZF0RQgvUXRcp6KflF056fwahSioP622TdcTVYi4cAAcm5xApV7pJfJ9wNY4MzDzF/7YLtnHlrhCWHukmznnQOJy0vg7FwNcq9WYuBVZHBveajG/iRzHObz0QRElcKXtf8HOIGQZBY4c8YX7ork0Ulg4VW/j43IWr448xpJZkqjJ2mW59j4JjIvrdPwwIybCotOYATyHSmuGLXvjCfHsMdlZi5ElJhnre7P3sAY7PIjdp5tyWe53vvOdtl61tZSuKl74Bp0tB5k+1awX4U2JpcLL/3ySbXfuVZ7DJzsZqZqLUd3cuz4owxWHRHc0pNDTxMgKUN8wrBQYrL/thmUkdTe5brRfSvvgB+HTa/kwmBU5iSOaiuzoYBoNTvIofJ1+Rdh3qcSNhzvrHCzUsMtYI00oG1Qc3Iux47I0OCYeInjWVe+rrfxHMMaKzxYieI5v+ltOz4exBUY+LqbEb4JT6h+UxHr+rHelU/4Y+CprRTSWjwxWYjVwGBKc8aCuH4n6b1NWDyeK+5rQRA/vFqLjiu4LmCwBU6n1suwNd8dC6OjoikGal9ttTw8Nq9mlO4m2Z+VVC44iadFDmQqhDPY0EWN2IcfdwX1AuAM/m/P9bm2sLLbZST5MKNeN1sIIcHesmEphPCLJBR/zG7rJMq0jCtvDi3MWBcM4OZZgSeekO6mTdvgA/erPgBnYSfnCLpplXbzsCAIXi8fxOVYueLUTkQCOBTdkRtVLmVnqI6zmSIRJbwz+Cqh3DmG6qkveaO4pUB+TjSX8vmmIgfrD6Z9+R3xxt3bi6TbwY13PipX+CCqxR43lbctNsT0zZ23S+ILZKj6jC4UoEf3w188SW0knKnsIhdcHVaCf3xi/5xlmX1ZQxzkCg/v4v5qsF6rzasbWXkR8KHv26HZOugfbKDp2ad+oHc1TEUULEIgRX/h140XK0X/RbBoIcN/qqDdCXnjLwya5EgT7BEg2ov7lTs59joYHvlFXYtOdH3VqbIz9A/0Lk3WLOkMiPcZ4VPFk9vigSs6GewavHznSj3i7pVISY09+PxDp1JaKrrPPqc6jYf1HVDoYE5a25Lk37GiGA5vO7vxjSJdzed7mlPG4GgY6c9I3btX+fSuChQ7cFFHhFKHmMegxJFih3Yu3bR4UBeOJW8rJOz6hEa7LgELtg+bQzJe5BaBnSPK/7PKzMrSc2AVONMKnhb05dGVS3TgemGvRP3/FT2xseTHaWKmDCzMgdEMVXZ6CfrYAEFVnx/o7Thw9z7I7k/HTk0q7qbrx1kR0KBiNUI9R3OpPjIPOBQGf4M5d0hM7hlmShcLqNg9xIhveQ9mdbM06gLhUZk9ZxIdtLZAuMrJl8eibTdLWitYkUetrNrjVua0gLzBCfMqLa91ISXttm65UJ/Br3KtSNGjg2gC+xmf7Dzt1f7GM1Bh+wLDCJZlhcVDXbtPuGssdEie3lZNiWcXMTjZtWAT5MCmpq6JCRuFSHZYGKcSFZ9kOYJfEqLIcWdzpTA+Hmu+ktgSUwXVSwkaa/aHdZXh7IOyrudCBalCZpgXGRNbhN2XpEY60DXXO1Ci5ayZSoxtG0WRCC50+XtgWz7qgX5MRA5S+jzXCYy7O7Nn0ljVxiBxQNCZKZMTqi6mPfy2LZx76uyRUXHjnpJJEimflHDUxyX7fFg7iJvSrsZMH6Uv2xbfQNx5eCbx3oKycUrBY22KPmgfg/w07CDVsw6tb5VxPg5/X38cQtXI47U7MAGGjO28II12T+PjaXHlstPtkUQNn0DKkCYis+kVAkA1wyAJgYKLGnKD3nlVCarYqCkNIZbiVwO2Ydjl7N6iOtvvbAfuq7VKZLo0jEdw1YdsRaHcuJQulgb51JyELzYBkP1hd03IDcZfPg5XmNvYQSOINsCSn3BuLtkCPZRalK7+S97zxvJHiJCZJM9XP785NZ8B8fqDe/Ot0BS3PH1ptErwxBtpgfOj4d/41nrSjJQf9bV1kfdBHJxYbHILxOsWkZvoP/Z4Sl0Yx3bDjTF96xf96+6uIoQ351Ce6DeTwTnkPr20YwATlnhskWIddUohklNITCq/07zkiEc3B58uiBG6d9YAc4h/7swD/dbY0LVcYWNOmouucIQKLBWQ5Osu2nZ6FQhp6M4br7XffphBIoxKwvjOFSPDpJAqvJVHPkt2fdHn+vwA6LTZEmRBc928+yX8UyD3oT9wmYgUuYQPOvUaSH0bfOKwbimoz8xXpcjP4K0NSHqGYkH3tXM3yNo9JL3S+AOO+do2UqTLb/MiET05u6DCt+0j46LZrhVVoH8zCfdWZpaOxT005/a6xtw38YtAyO995T9i/IQRE8rDWV5dlZaTUdfNjc/0xSroxmrWGQSAXN2znWa/yaenWLilCms/BjRMh3WzNfB7lMb5HmYwPvqcY9Cvv8SFBaSyOyAaztnLlBi8xwZXm1xclH7qGUcUgBz8zpeOQpi3CbrvcGL4rW0072LVgF49O6vgj6Ayw4rt/v3zSZwleGB1Z2E3NQ3Ym8Wy9erfNlEbZXfSwm0ljGPRpS/W7j+mlUeLWIedNjeAMeytBLxjAxflfBnaBwVhh7bB3tk72zCvSBvzN/99fHxBYo9dwrVR0mTfvrQH9MyWlYsJuGSpWhJOw6rOCSYWYW14IJMaE3K8WHDVGtMhbNHGrxOPkWKu8q+2SnYYBWGdnu+evvWnIjSsrBBtXEpm6ozsYC+faZEGPmnx2OUdSyH+v94EQKm2ltuM/mcXK43ia9AtkJrF5OQNTN3+Q0YsjMEW/UISVAwB0sVqhiBXJ0Gbf9Wjh8VIPPDDdsPhT8f1e+YMtsMxFXuhudT0CEdrWbMW7+th4YI8LZc61URMP8s5WgIrlwtunJ6b0M1l6dpjoIocjwlqqt/JxGnV9k+39WOcxsRBgWk//yHC/wbKrgCV+RA21/F9afJy1kdssoxUb6gv47LKAiQQgyTrGb6AX16kEhCoTQER9WH7nnigbJQMC4tuP8ADtQR6bZX9ZEBTbDj5Q75WHnZ6xKd2uEgM/xuyyFRLGQbtBClmbv3rgf1ynZBqJz+repYBHAjsPJnHrs7xFc8qD5zMs66qDUFyW/QvGQl0onnSogoDcHzZKVZR21IBNkW/VhUnDnhGnfk/o0/F5UnPK3L5CLoQL/4MUbtnm9hqJy08qJI3BhdRAaQiW4cth95YS9K3WSMNaJAOaQYNqEX0HHl0z84bjSqK0xBe7dVCIA6iKO/5aMck4G7SrtvaPSvSro7wqlBsj2O7qXH4mSzQVSoeblwAGY0I4ZYQadLpJjuAL8buMQFYQrZ7DiAP7QJveFNxxLkq98KvmS6PKcqAvRAf6t6Ts0Ecgk5KM5icKNS5/9sRG7TZ0tktDVCEt8s9/5gSHcTjR8aj/RVvrqBiNReNeZSNZ2cCtEqDwNPn5WqJARhKF4GZzuBjhMVO1To3T57OfXpJg8ajYRB3gBeYuTQBdlwuIxk2KHhgHQeNKcHhFkYGRzL2VJVMOAb0Co64wvds5CaYl9ZmBm4zuGDeaO2eI1XM4+rD/HmZyRF62SabgAe8TF43VuMutigJJMfbW2UK0azGLFbOfujnHD+GGBYmSmOQbUCOY99HYvswBQA6r9hrc2jtsUUxLVjxnZ4JnIrTwIVdWCTPtpJpvlA7m01/4tbUMyz9mv1jdN1jkiHQCJXXKg8bJ+aqW6rbwbn5yDSHBTcFXIegrhHGAjJOZI1pyP83Z3vMYTAJoo8V9IwyS+U6OVg78+IhSYHDYjRs8FrF8smHQ9h4qAYxp49rRP2d5uxLAuP72GvZaYvfeLOkMrcg0PkPuq7NsXhMFmiZa6PKBH1l+oKHI5DBLdZCvCwTPdXqmnz8gLzVRb/ixLTSdit2nrzt0x+5rDeZT+ac31NKNskQs6noKlQccyD3UxzfVZFmcbpmrfPsZD0Ve34xpKWk/E9Khn4A5yVPVq+dwnv0EyYecPqXGU7R8suTW0A6NJWweLI3iSGDlQXzMYsSWkSMhFTfyA2vTDt/3wXk+mVU6bRNkZvNnyVHYiA4tmnNwdh/RVsk/EgSerfTIf5VBmuAc2IKSeL5Nbrg3acgFj80mI8SWsc3dNAGCBLLMP89gH5UnLTKq78d9SxQH/g7DVnBh/qnBdw5CDrw/uMzcdQCjZanGMvzqL/a7MraqP8KUdsYPJCvcX39rGariQnvNkVVdVXB+IWvluFQZVl5AkcoUByyeo8qxvy8fIH1KkWlP1TVTsPhpL29iCpqPGEL6E6SiUlXZ0oDHKwKRYGjdI+I9StJBhnE5bBYKhDNtXSh5oMRyBS2ojeer1NKalDrzz/7Bvbo/YIctjUfurmXKldKufCefO2r+M3Wj2XK8uYvIaC5XRUmcMJESSJQ2tmoYbToyzID4+F30K4WgzkzU/KTtLpMlod1PDSeLefnKwC6nSTLGvrmUVzzU1wfzFKamn6I4S1Bmsf/LTWTWsYxEkAYWGL6cN5ylSWeuH6oE4IxkJxIKi848mvGNmdkkMwt2kxW760FJVLWcrGxiNj0O2rX/76uJV8tRWHOh8hwiBBA86oeKgQvFTcSkJxkygv2VprliU5kAwSnlqnHsKmGuQv5/IpsEB/xy3BV33cVOjsXk5z9qU2wKArqUeu49E603ZHJuIurHw/ktNRldT4CjLPTzNgdqxHdTyE8MqP7pqtZdH3JZ0mgyfjmmsJJREorLf4keC+zY63q/oZsS10K6aAK22/ZU2hTco6pTCo0hYepibh4yKNMz1VYHu6YTKntQ84jx924cljRb3FIJl29zbEyOjdl27aj9ZkoMw5KH1SYu+jjkgGmkPZ0b74cm7yRt8QCONs9hDNMiCtCOm/lYKWpzH6XVqOzsSmPETObUib9+NP6g/Esa2LMmzLlJBfHx4+x3L8RDwuWGKx+C1tWCoOkGnhWS7z26x2R74uDlyypDfHBkDvNNfTiqnL+kJwZY9NXu6kuXr6Bpud67/lZg8cQlw4jqw4PiGj3jD65/EydaEXl2CN8m/uB0G4pMT+U0Fx5OGFz1L/efippMRrEYE8D+9WIjKajV6dJaB2Xl0afYt3riq1bcTDNHulwKAAsDbXHOrDroWVW9YbQS7nc2oawxbeRpHZcB42ZectC270h8CCPqmHg8ESk088l2iJxyDPvK3OU641JT0VcAeSyhaUJ1fHu7y7+0+1f4iU1vYfU50bTQkhnKHwVmJuT+8GXAKtwBWphFvxjG6Nu5Xc9KZbeRyOd3XVpJ/SLgmWPiMtDAE1Id2Hp0U21YHS2LbvPd0rjehC+HvVeDYZc1IyPJzkugffXnMgtTrfLA2oUKVh25rdmL1hsi90vbRFSymLPi54IQZpkpdrj1n6j6Gz8ARzS1ttS1I32W+43yzE7DKd4nBjtZ6Sv6wrFIHQVSlYNGLPv1irk5lSaAvDnuYdzytU0IW6WdsrT/Z5brUD7SwBLfglU/dA31ZJ+5Ryzl/AH0uhy83x3gIbtWpZ5dfURyldSyNBu0T82IFWkqV+7YfX9OrgBPF2BUPZ9+grZ3tjqAWhhN3h74w5pooRQUNATy05A9HDLnILGSCtfESoSilqtqAIQ/TV2t3KhOc+teDf5t+DqZDdB8Ob9YXyklrSO73pR0QAxPvQj57c6FIR5dOciqeHZ2LRABMROo8Jk8V6JFewCL8TCd/A5MSbXLky1cW7mXobqgeEXdFDoEydKo5oCuyn+2JYI/7pIGFAzErlHZ5hOaiT17HC3zp2HpJwsIAb4/oIoZ8x8ak43Yp83Ermq55Dg8HxKGHXbXs47sh0PzQELTGFsf5eO3lYAuJjMneoYWk8W/3tW2WLntEKBZEW4hOFgo8K58Rj0vk5KLyezu1d8SO/JcuxpOJqFUM2sxBmbQ/9qqwb90R0WulpR/Ju84bQ5/fTh7po/pbBb7AQaYNdK3fatD3K4TLHAaa66MQzp/+ZGyCjzo5OXRzJ8UHyg/YpNHvvlOpwQIOjakpLHwGV4WsLDPjEIqG23ily3LL0dlkYQxj3Xx0ApCo35zYGoGOtIclYS83MnI5TwVdQ+Hg453WFQN694DaqhGaL/dm0KncXYqXLi5polgT4DOrzD4oSVhrkh8GW2PaXjOFDCLPcn4RQj8dRGIJuV81LxMPZ0UL6zpkaebhbFBxcRJe38UiTbUPDjFWk2jBqzrBvXcKmgdDcmRyJhIpuq+3DQY464AlQDV6vy+bUZD25YP358A9FXnSLGGBznOLYmyDXFBXHOVoQtFYnluLIX54LA1XSgWdNsEevcaWb2qUZU6mg6xALyGU0bzx/F4B6SQIaccWfqLlbPI7tKENhtnYozh6qd3LLTW/7pMWGaTGBzR2d23sTNEJwR8HFJpZnBx6/owNly69JlD0I1J3hPHblNjpQBuuGKS4/W80V891mEIbWl7q/HgPoTPfMhvTMNrjYU+nFa8ikR5dvthNx9k5qFKlJhpYsf++rQXdTUo7tnGWJmmgwEFgmz3UgTRs6Ss81D9RJhjSooI7cJT4AVs5jHMpYGQiCWtffjfvsFnXwwpAK/UpZ8gcR6C5Km+s0flFA4Pgt6IfaB3HUw4AqmGUvjUXhGnFpTh3LzEREWCqjIgJCr1eZDxYlKiTCq+FAzR8u2y/II7Y8CQncFmDkiqhHmr8Z1MuA5Y8VHnc2rD0xrm8HNlxDj6JmB62YqDlkif7/sluL5WVWJe4P0JoBS10SafBZNLvBla6yRW9z9INpopX4nPoetlMejdSsC7QhkMGRdaYv6ZNON1NvUD4x2EqRj+G8U3BePUXNSeCw3ny7+RN0ndeLSHLt59Hp9oA6LhIoZqI63LyXEMWSIP3CrYZbURkSyhYbD9bPFeFYPNhjwILta4sUdz7HX2OEf4WItfAMgBFG2eQgD0yL30IrmRG+nZCCjBhjluZE/LzvKYr1p0+L+6psLiaOdgEta/0ckNoP+3PWSYJjCM39BrySUXzDbtbrUTbi1hzpvSSDHCSt6og7VaRggz+OVtaE0zFJzAvdZGIT9Bh44QlvFd/MYYx4BRQX7ljLJkkPTLzail4qrVIQwJCMtD1u2EimilL+s3LQIiJPibde5Bui6TVTnjLyZ5VQWiUpCntB0ySVDL3/Eds52t+f8odsDZVi8yD9wSUeWkTcZFfeCAjpcnCNfyWEWbc71jDaCKUK3Tb8gbgcnYUsIUcD6NO/V5P10GaW4czfyiuDW3SUFdCSDD/mOVASDN002JRRmFY3LwOclaM5IpnKPdRcf3qPsnYAMdYDHs04fm2MQrVz2JDKD3bWhJUbrMZZnUlfc4BeDafospbp9y1cQsnABcRghbJgEX+suCOs12NLcfNWkMmpa9/4ofmY8RjVnYSLYDS3RGfwTiCaT6AL3odmymxBcVPzNPuMag6NzsfDJzZ/C5r9eTSYoEryVfstlv2aIBFzYr9P57hc2Rq9KSrozkoc3HZBFZTMPJjWV2AANA/L9CbtM9V+mfawtLxCTvo+enFWhJcFv8LVTFycDjPGBXRQKNN+z68HJtYdpH++g5WdhQpCO+DE7Qdu6TmZgtetrpU2ZlgpslOx+4hb3aXaqbdc92LCh5ALCR56taOWhioWKqjS8GebGH5PA0yj0j/yV9TZdMJPQrg6hYTTyKnI0ePEe9+FjqprfHgfN1Dz6OSI7n6P3ViSKFLmZ6Z+kVEQc//a943ldxG57bMJW4C5vxXq8OU6/I/48Gb6jDJGEyaeDnDAYYhew6RB6RetekT/p0WOQfDCgWiPlsgWKqn7jAelJZFu/bEatGl3ZzzsXMw/od+P/ctYgGoWI04DEHD4AA/VepQGzN1mHM5JCtBLgSKfh/JXsxoawHRWwwXhs9viXH9+hMZBEm/jkumjEN3zjEJrAdpfuOldSs52QXHHahS9jbGqmAi9xW5/B37MCdppVOcTINcPtL+j/GuuTiaBONeFyOPlHOtuvbc2a5lC+l03OfLkwJH1vC8hEirM5lkuyy1lIINhrnolO/PGAGzbR1hO1NRt7bW6WOVaoZ9KHZtgDM6l/pSC4rfRnE1eAsezpjq6u3EUDmIti+W57mYM41bQw61COGqvx9FsKRid6IOS/MeRBVPgX2/2/GHZIgY8Efxtlvy6Cj8FKBeiN5J01dsEAgOwHoNQ1JefCW79sUtoKpJu+7j5gumXA7Ulu2sx/1lR+zF6sBmMHsT/OXerCArbsWzB6ZSZIziLftgBWFBKhy5XwBwMj8JJ4IM09q8RKyENDwD+VUisAkAx0/+sdei6I1TxEvAAr+MtNFItEJfHUe7RqhXEnWLZqADrgKHZATbOD2UowABe0v7M8C3XRTHQsgf3Vj4BVIlBPlplFAo2KynyS0HzTaUODSmhee8Oyqf4rGVcED1CcoyWrzd30DSlPhe+I1QSWEBHBHcNDYop8nmtJfTydfwHE5vyyPdUWYw7yyPNaZ2re0SlNj+P05yAGt4SBH3oOIhkPsEw5VESumIzaTebOVZEFvcO7A2ClOF5o8mbAkC8c7aneEg0Ly8rjw4VEQCVyn0dXO7at5kbuLrBRz6s+x4EtF+5DcYllkd3297lcG4CqZoC2JMCq1yrdPQjsODI4cXmZQ1ysu5zSx1wCCj7X3q1kJ2S26KJ0FyvNcfgQd6FInQXoStbMEl8VW7HI/y7Hzjbv8WBF2DzN2jKiGHftoQJxbwx23ayS4RhHd7BuT8saoc3o4UCaPcGrhSt8Zj2KsQffSfM2FPf8s6xGTc827z6Efb1JRNx2uM7KVQ8xx33z2TCdVS2ZCqhgn/GarqajLek/jUT35j5tsXg4L8zK0SRC+P885bu2d+bJr824HgtuVT9glK2ZEcRIteQNO+vaI3TtXewvThvrMI9UTjDNzYCnXgQA6ETHiZEWXGdRW0LugtAUvTTUmqMbRc2E+JV+/j0OwSmvOMqzfro1VXn/koJxIntRtDfnjrW2Rf1FPAM8VgT3gq7iYue5Hx/3K6hFQa9rZrNSDcjaSQlNn4LSqs20bypnKqpzvnnxjMdz5StbzvoAJKgVZa4DLCVoJW765/KyTF4s4YztmAT1c0pTmKJHTpa106FegDo8p2zD6uOnwpYi0vJlRMDe9wPT6964UfAf6lq3qWypUOx9q6BbKEYt7K3gWMXDNN6wAm1fNnSOnZ4JkbPq7jLQrl0wL1V7QwO/sXneKGfTgUL28I5iPVG9dA2gS7Ki005JUR7Vmw4gX4TJvy1WS74cIXD08LCF5obqcZwamuoZ+FPMJEck0TLHjyH1baPr55/Cy0ptDfRJ7d89pbP48tLMHG5dO11Z8xSSpPGQSgXDWmpsNsmm+MvxJjMCi7OFDHxxpmTtjgnOCq+c7Fi1DybfhAntviKccz+sj+OPKPYOKeYYPLvq6MpUx/chSvBccg9dfbeqetQNCs3eiCFZTU1mrDido/mib64STMgsa+IKLk9PyxGGbVSQB9GsHto6f5prAFIbRDSItDedz3t5+Nn69FFS0nEfmkF7hKBmNVce5xv65USKGBoHYxJyutSGnRIq7vMDsAMvirOEJOzNi5Kt7fypuSU2c2Npo6UH5jMOkePH0TwgpammO3Fb2FX6f11309z/mqRmQ949HHRj/wMzKNx95M9pwKf+UQkMEwisL3YVotvHhABbRFx2LVqF2OEFwWV+MD7lxGMGinVo0O92t/sLGQtWDGILGFFy1bzBzMzz6RWYisa2RocaWvzLYPT3wdcTbevt+ckVRTrzPJ7IzbrmKA04Y/MUbR0iBQNY3pLdlx8wREl1ZW+kaFUQdc0t5aoeJNwXfA63QVsljhccSmaSgb0xA8kni55DTX4wH5JHSsJIbOUTzOh3X2rvkuUtaDOiCmcmgPiA/FRhxf4alzkvLieT5mbwsNdw1HtI1XEuHo0BzHx6SNv8ALsAOVGd+4docloGh1mvtEFf0UtO+hxjqRjxtq90CRCJwT1tvAYuRm7rCFMInnqU68zf2KN6GlM4WpHdXnedDHiF86/BE9TbLbDtRTzKJFtzJpfqMYn0JG+X3JtXW15tOnkwy4yfAtzH+W96fTD1PRq0m6JQTZa1gaJUxo/cRyEAGXkCzJoKm78EoBYMW9Ta9oIvb98kEoIouPEbrHNPgyHjAeEff8SqwZKhAAe7bBseZcePYu+hbX0ZcNrajJ4pHAYbU9T5LuYT9L5SaMeIMXWionRHlCx2MBlg3UzOk1flgOpZh+F92MBfIVBpXIYqSnWgQZNHwwrqNoZ9EMV3jW7YTHxpzyMo9i7eleyTyC76b22vVFXNNO4OwAJbhLWHfbIUdfuqldKYDRBURxHxb2PYm67SlxipOZ2KzAHUrlvyne/qKxAIrMAO+jfHs5lRmIDWmJUP8ZPd9CwFgLSlQQuFOkdPC+OSKIQdZBYmu1ybNE3Gk9swWaCxbjhruIiWqAJ34y97kuoJ0R+xuwPmk+hE5ZpGFH4KwbmkiywyX4TyXtNT3zdKKgU3kFEWrJdzfAWYkEoHa9Gg794T04qIODUsnwFMsvfFj+3Z0w1kE2PkMM4JNbscEah5eTKQv/OArsNU130ZYCa8D6KddJAh45n35xXcQntid0dyeY/tx/7GZ9yFLt0rsviPnQDjFr88BMTUd0UT1XpWQIbWqypVz1jYz0SFT+CbABUkV7N6P30mAD2lf8z/Kug5bR+O/62IQi3cvy66TrG2i39PXgAnApSaLDXn3rTRJZEhUrgoHmO6EwAJfvGNszlyW/24BA6aA130KnOpZ5Qa/1rJlc55AUtTO7n4qqcbyl48L0eFsS24eTWzDcvC7J1+FIrgIvF6J20lHFWSkDlgWFHnEjjI+ozBvIB7u1ja3gR2PdJVexaHA6a0q0m3sZALTFvSpV3J6zsi52XaHRmHcc/GsO9R87SKi4UXQjgejcsxz6EtoQ8usC5NCOSa9rflNAPgOxLIEp/yIdNwOQrKR51ReDDonPi3JN5utVJvhhwxHuA6xwYZoLQ5UUJdVyf1f1bpgh7VAw3GQpII1TATplThmACLgv57399jVmJ0/RStNswaFIs6FtnkilFZldxj6m562jL4p5g3Y9XCiXRJX6nq2PGJFifFR7EyPG4jDMnBM4t+O8ZpEp3th7TCxEw+ZG4afHl4sNFaqxyLh6+979tt0Aq9BrqI+CS2U7HJoKiGmyVU1lFa3/0O5mNC1bzRgNMy+GXyifLwJP7FwUSUmxmVRpn+gnXWoIuswPutsiciurvN6lsMG7yqEc2Y5ZI3jrPgPq0xEKPZpF7teJa0TQn8BQL4Th+hjv2ByfwKookyXEmj0d1KMcsmfKaeKK3cZZubiYqmSCrnGpYTwgPk5itKucVtjViuswQsDR6TuyGSIHYvlz7wkLg1Rr0K9kV1o8RgABlhbLrN74cVWJW6TnfXN0q12JFMpUbEa8t1+j440FA+17o8qa8PQ9igkctVROVIfB3jU5vtGm5pYYHYSDvU2TEc15pIz19ka1q6c/7WXfF8+POkApdOw7nn7Kqz6V4tru7NXgnA/u0g6+fPRT3hp/QrDQwMsjwNCZxdWrR6pgCBDJNc7/KAlwC0UZ4yWQs0KsuwbbOgcTxQPK54wiXr7s+221hzZ8RVxfoRUKM3e4lpxHC83JllxlrV760tl06f7/65qhE1jhMfivAUXIXfRMe3uY/G2TpWYzDrw5Cm5cS062Bx9lhHq9gtJp8xZwAtSANMNebxBXlcTarEE50zafq3lhvHI06YR2wfH6Eyn7L2laRyDDU2KR5e5p8m/NyNo3ATUB3qAbv1Lrxo7uNakqAERNguZXg40eEGTsF7y2N/ZZW9YwNC9B06eTjjzJ4y/W1ApTXF6/QvXvV7+rGQxluaR8qd3b1dEIraGA00mHC3WqJhZkYrPsOLord8YNPsM7ZhDtZTfey8T9YoZtZAS/NRXbD5U1gOhwjjLFDqLeLjNTZOOaMLC7k+T4lr0dLAukShSzCre0UnWOKa2GAxd3sqNKXpB3Qr6/FZPwbj/7EhMexYMZJ9BNJ0VC2Hm5VV9rzCuQNkdMZWCknKzaKT7cjR1J/pM2joD+xWm3Jj+THWF0BYo8jq3/GPqz588xTeGDW+QQHRFEer+0LLcpRSHNT93QkrFPKO9SazmLLUZs4VyjQ0Di3zdIr2wGa0tabiQ4st+XLGqBBg/TyLJfBhfMqeVDpVOKm5qylIn2Dkfku7d4syc8puFzC4SDRVnzSmklaNSeFLesvfl6vPKyn58mHGxSzzqbbz9TBb4iCtLljTNZrGUUnzEwvnCTyyDWtqAX541qPIjRjibBK3G3VFkfYGNoCG+75Kc00grzy2ESBkSyge/6KL44yZckvt2cCIg1UPPe0KeoOClBf06C40aBmPdrFyOrVSDEPDvznI0imo2AKAfISQTPKp+sWzhbcswY1Qa8EktcwiUd5RHPTg0OVrv8XLff9kOqix55jcel8GbrP4vKxHelLFcRraA65vga9C+aFKI5cHXKslVeDyDLEetCYWcCbYF+4s0Fo/hjnhfQwPFnsXZr+g1o4EfCxAafWLjwDPLSQ7t7grpjah5xdgE2F/7blTueToELolIZg5iWxfYyconwUbcTlSPQwjS1GO9SF2WE7omHJyC0P1x7lSfGhw0rS9Dft3mDb18B4trxIkz5was7AuE7D5xVZ2GNONo+YuwtdQFXQWdaRkmudozPXSC9dfa68tJoBsRcyPMT7Pu25jH2Cod+wOB7QNPNaJRtZvUuGXIdoaDQhlb1YXelC+wtneYSiAR6AflMWq6v+GkF4YeyFo0o/nGu1Yam+PmcGN5x14dkvSR+F2cUKI23v3iDcWJaM02LU9q6VP8W4/ltoV4xUPs/nUPMIfe+dTD9FKY7rUHcc9/xSWABBuQReNNCV1ggbOyqwkX/5fhfnfRLsFZOrYTjwwfhzUvYlpS5g4F72OitL4IsqHgNwJ/o1rn3QBtbLlDAbiU/v8NBTSWWzm1E/HOauVrUMQEkBehPv7vFMFQbNXqPI02pgq3HYWSZQAyW6p93K3Ax0JQUDRqu27XBioiV1uqtHJ9xdMc3/pNSSUtrXrLQd68deWTAGC49PLi1jTRfZaLpo8Txxxczij5Pl2vur+S1wQW3W5qyVcIUySZHtFDQHv+EYDoZG1T1J7D91vEIV8dHzUBzW1UyuxRbP+M/CM/vsas6RzmS5traXnQ0Jzv9hYXxKHcs15TQCP744XsLjzFjILYURXFnhM+nnV0iO6nwls9TR4tlz1J9/NvE8FGg5mgpZA4htS05AK0NnU2gxuqf2vjCyWlm3ypKvaX4vxh8Um1MHGB2NTeAFhbDyGm+5w2zqJAWxVlj6dVePb5yR+aMhuz05YubCQJ0BOtoYQ6PoDoW5fCwCtXj5SHvCgL/3B5z2mcXWaRTf8/GsFAfX/ntdWZWFc2xg8MJeenwZ4dZUToce43If4zVb1ex3BMAWGhgkPwR5EgktZhW3Yi+nsnZTUr9FYI160YhAraB0zMV+ouHz6hYm25/ETDM0MTmcypoGgZISSkfwYAQaHGY45yZ91K4A4Mm4fnbMk8GTc4orypT3NLBqAxYdcY/qCH82PpIkmVOEHi1NoYaUymuImLLcib5pmd2MHTB3JR+4rLdRc3gtQ9zeFdciciRiWviu3HkqaLSxJeI2rgc7OKQslItumACQow89elXmi4P3gTZeCauvMH5nF4VrBcLjjwGD+KlKqe/RWIEgT2wGqAgSuL6b+RTTPnQZzxZ5y5HQJkEEKJp5NfAFFHxAHy/hRLCYBwOzBRnY//u/tdrnUWzuith5tjLDDhhbnzr1j9zoqrZ5NH0ctKNi4KFORdoPKCijyfP/InQrN9fyijBo0DDPwe9B2UtT1X2GOpgxRHJi8/NnrQbSK2ZR1nAH6xjqtSQwBlm1ZK1sMWaeT91CiuHCvfXbVdBZ9+srdqzSDb0BLDFuxnd1kCr/3pvv9dZyRuOajz6PB0TrzQPOgRRSK+cGCjAy4FDEdegbKn7D9xIZjzyta2bCjI00i8KGz9CxlGdt1XvLzHu3ZGSWIlX+Px7qp9y2tOwxXbbOiqBC5NI0WHtTun9Dj0vSTKBc2cRhcIEOCLkF41bG7tWNQtxQcj6UaP45MIQBPNasOZrKerfBP0gB6O2+Hd6wK7qwS70k6xfEwOmrGbhPOX6m3ZZrkGrdMzlMofg3souKvwUYg8Dnr364nVUQvd9bwnKKDP+cRSMBVit0JarYydLiFBWBy9er1oXteR7+T76sC0hCpyQ83CMqtXa3scI6sDWmzzxjlHDVmn72K2cHvWPy02JBzuZXWRQJBeSiLl86yrW4LqFQ9Qvtnr00AzqWDRz9p6KJ8eiLfm/6lUGHsIMzVd+9imIrkkhshAUdp+aeEd9FOcxqApyN0TvPOC3GRM8pWs5tPJJNPnWD1sHmuj93Of+wHbh80zYsYm5FCyANpZsWk5CkWawqPVwqIlBuMj9VESeRu/h0joYSadAJ89DdO0GbchVMnuq3IIjhW7cqDtZZLldIkOtNjE8hSvcS6jR7TcuHCWkzuoY7YsDcp1XN+GQOh+5PGoukunheoyBtMScfiXz/e5c7gma/L1OUiMyJmjaYkIcrw289t//zyXDpO4Q+IiLyc3yIDhiEemTxCaVh2UKGnGxfqJnh8PGlh2jTn2iMhnhuJRK8jH4bTZloeEQCKZ/HS7O2RNnk1Q8CvvsQ6ElIIeO1g5ipWf5OjqLBFKEI5O0PiqezscIDBUoQL+s+KU1vJaFY9vqly0NE94ZiLnvKh8taPx145tPPZu9bepq61Mg37ajGLZn70Fyg5WfitR0fxZKj0qnIxpXDzyMGzMN8CBSgXVTCeKRS7fqDiJFmTMPKZKGGd28sOC5gBfuwXYnBlxXG+T1rQ8OVzTVXOngfXb9KwBKYK+Sfmy69NdG6XxsPiJEaMQ25AxZkHREFEhJT+W1Yi6Nbq/9tyjdIxMJfqxgugFDCsR3L/k/RdSraZ/I0kqysSZ1ZCvFA/7R+Qzep1wfJo1HRVOd/XvcsC7S2AsJh2FRFapxZnbm3bmkndYryKOKU7F/piXDgJK0dQ+tESKKHAgSHcCYQgTNazhNl0pT6NFPpIQC78Ps38WM8M3eK6FpSyZGYXhAHDPKoG2cF7/ZcTvME42gXLVjTqzAER1Rt5m7GYsh0X0+XgOeW9MJqE5j/rpGzY6vUu6ACcCTzDMdZHiWELpDnvgE1hmztLcSYz0MtNyUBLqvylUJJnJu79Sku9NMHCTkgqozTnhMFfduV2NLCSYvAI5HUvQp1h/M02vKFD6eosIkGTg6mujUo1W8hy5Knf/erkBQC9LzNqPAYCgR+hczgevta88NNqSlBZryq9QNeUK7RpbvHjoNhUKAAeNYH55LeTW36KyFaXdAkBvyNP9xmRuBokPi2OhqDby6IZ61mwfzG+GmACkS+G80A4WGON5izgJWeeDK91jzusfOi0RmEsVJXwbVUr8u/J2LCQaMnHhi+wJTEPN9tS2b6W4GRGCNmtjAMgPsP357nOeD3H2tcDAPu5xQBKMHf/j4ZhXlkvvy3YmBJsjsd4pSOlfPZCnw5JvzxEXM5JIc+E2mU4CgB0mdJnH4NEsCHYNeVRDXFNuyZUE4nuvaJf1h+11AWLdAZ72D9XNRcxfb2+XHZN/SN48U7yl+sNZhg5gn/PD8wkBtnRj1zBUPIWnoMP6yGUEEzuT+VaX3x2jEIZAZsr3rs9wCfY1Ss0EdIFFzBbyruUup4EPanbSYew5tf16/ZWVup5iykttuqL4xoC/jdZWsAZeSfDSd3fP9kbyAFYXkf0QAIIsltgP6hwhk7G5WOtfogqH1+Htap0hnrrH09aQMY5VUaTHuMzvpjB7XoNf2eDbTmSDl6r5HarYyC5MnFi//BYeWIP2Y5inNko1dgLdaviIEaSbniEHCQ/MWGJf9UEd1Uf8onVkgw4fEg3pqsp3GuboQGyDAO3SY97QxfUdFQyrxy1ybKxTrFfRvMzUnTuQC+rfePDWrQ+rZzIxaZ7wXtpWR+HNkQV3KLx9UFBq/Rhmq8CNnzdYofvbqsHHkGfsYcW2FHofiUWyW276NaawCJsneSlYwb9BudxTuf2yQgEvQy5de2P2wmD7gOXReEonUtyszJ1oiDKuBmBJw/iTxhC9ywGYPbpfWJhcovMxh9mfYh9GPOeysnV7lyeX/drnGI2gjqfXHVTfoVZyQlvLH6GJJmDRCoCp55K/MVgyVnZESc79rrKhCG7s90cxgQ8Ui9/IZ7IJTx7uumO7gOuU6GzOP2s4ik2y8KS4P5MvJ/knsP/Cw+QGmxwVUjWruhRJT1s3fS8fkCqc7tux/72saG1WM4lDfYf2EdIDNHZql7gvQLPhbFrJKbiO+4ZfCQWnk0wwuuBnwt0D7m4u7LE7lIw6Yk0MFxtst5+/vPovLEHCW2d9At3uqqkbUyY1ygtRzHvcGQ0X/Gl1LRwp3obrjqe0KFdJ5NkklMVgbDf1Pt+pACqcPULPTM2LQQNoox16Lc2q5Fd8yhCtHRRUFME++DYAphhrkghA5hQns1zwvQYchoZszWuq0HkEM/q/QphlGYyEBD7B8HvOqAjkIVmhxEbL+Ymva2byf/+1Fzuwd9vWFJCywIqqS0bFVeV6XH3WsJSaovwVXAqjuna/WCUxRUTFRoX1GwfWFjb2D2OkcmsnQBWKtWCAUMbjQBn2FizAB7bdl0R6Digi8/qn+RwlQQzjzpLUN0nSQX8VJGog+fOW5k8zMFN6Hl1B2eeRAvfSs/ZJOGVzCBDcFVaaltiZhiHFIrrSDI9ipKYxNkA/nSGVAsXF+e5B+4YrlD5ygk3WsOCjfeVz3hUbzHL6OS/C3sVqr2iTxAs8FwrP+FzwJUjKVlMwQYyt6RJ5G7njJDCUK2HJ13+z42wKCa2tVS1+GLrHEC6WnmFm0/oduIQha33B48ccelk0nuABmPyh0WQkCqk7hVrdA/EZhlpr10nYNabSHn2D7IbiFWU+wleDcuu374yboMtEzWB6qAjuOQgfPJMa7yLIodfQ6ow9FKoibExT3Bltz/1Czht52/Ao6YFUyKGuZzvWWBF+LhB7vIS16yT41dZU0OcU3WVWoIPlo/FdBBOMj7E3N+OSjOpVV6i4h7ZvhunnQuBlRIj4HffIPrcEmJtfIArD546pS3BZvXu9AOATqu+diOZi+/sIt18hiTovPsVQVaqXLPRx/4R/uH/86tBMcF+WBkThKLfblcVCIECc8DgNRVX97KdrsCeIK+CvJZMfwrftcDZDZyp7G8HeKl7bPYnTKX88dXAwAyz66O2chkPDHy/2K2XcT/61XnlAKgPwtI8yP9Vu45yh55KHhJu93mL4nfo8szp/IyDjmFHtSMqqoWsj8WaVhbjXgzZxcqZcyOe7pUK6aXF/Y32LnBOt0WN28UmHRiOpL525C63I2JQPX8vvOU0fz2ij74OeJ1Apgu3JRObfdo9xGDpp7cv3TdULEfNS6Gu3EJu7drBsBsogUqUc6wAUW3ux0/1hLVI/JEKJrAGm8g72C2aJSsGAsKFW4CBvBXVlNIKa5r7HvT1BeGYBfxTR1vhNlFFNN8WQYwr39yT/13XzRGiF2IsfE8HcN0+lN1zN/OnzekVBKkFY11GgrK5CLxrE/2HCEMwQb9yOuP2rTXiZzTEETp/ismFGcTWmbM9G1Sn2D/x3G74uWYZY4rgKB2Zo2bTKS6QnM5x1Yee66Y1L7K44AyiY5K2MH5wrTwxMFh+S8LzNQ25z6sunWZyiRwFIIvSnioltUXNiOr+XMZ6O9h9HcHxZJkfF0tUm6QkU7iJ2ozXARitiL86aqVsMOpmvdIBROhUoanPtCjgft8up3hAaAExVj3h3yU4DBGhx1L+X8/jdwEZrcioNrSKEY9ybBLw7xWPXpTLnms6uc3SyGFEll1bwjsXRDQp4dzfkYWjhok4VzbmA1p8G7VX9U7SpLhCRvrCNGueV6lRaO1jJoMAFlx5VqW44y2gN14ghNYo4mLAY+kHXaVCDCSZeH0zzqmh1vQPXXuY1DwSWW4W9tpLxFMpDqXKPzx1TCglT+h8565uGhdYEXx426aRUm74CzcQP8C8uWtX3VSjAhYjabwcEb5reTbjtkoAZiw5xZ7t9Naovx6rAzlkW6hdt66A8q4w4C06w37h1LCSGtICV8Y1PMXASYI1a3Olr0KA9tg1yage07ymPyoy+UYRPqeuQmhDaWnkwRRXUTYDhkfvQlSUIte+pMilmXPLF2vmn8ZmIPX8G4U4ZvJ8XOG7FoL+XeULaOO3oY1EFrToCqo+Vi10DuSKJ1hrlCLT9eleIwPIxc06PeSYkRpe59bQY7z4MXw6gxQtfW++MJ48o2KzgCbFAosIX5yN//DKKUIm+6LItU9J2y5FM9nQCGl0MX/W4WYPAbuI/epjA2wrOp3exh2cyiUI65A4gdbLV5ClaG5X6OZJ4ALnMJzT8qw4heRk92LDy+0HfeMQGl7OkYME/gktjbAfUnsXOnzLxEgKpV3bmYNPa0Nv8vWaHh+/1M58Mfl1NAGXr+t+xLr6TOq8XKIHTOBSRWtGYRe566rTbKloOTO4WTDkaY3eLM3/8EvgIbNbIWOeAreSdXTgTuLHRLUp0XND/T4YMjgremkFvfEdtg6QHDUw3u9gByuNL7rSkz36aJIIUT7hr89HbpQTynwtzuClQwslqyRjuyJHbtOgNJHipVX4tLRnKTtDYc1xIe+TR8jMrADFdfX6u//7DwtBaK9ZNrhRL6vJcKzAH5j+2n0evVNkamiCx3u4JaXPB5lX/O0G9qIbMPg4vVPnj3Ry3nEuujIQf9DsHXF0eVgXFk2Sxqv5IgGk/m85I0fBiKVnb+qXyIEPkNMXYir6PoDQe/zX/ZJzSRsZ4ey3mRBbTJ+de7TXO+Dz0tDOCtyOhx2ajTwPlWXAXP4OWtgEcqiqyeGd5K7LgPlTiSc9iiaQTIAglhZZ97u5Ov6twxEwLmyhv6bdzm2jU9DSNELoPdC9oqeXR52SVIz07yuRPeml/+JkVNrvJ/JIejCm2OwDQa6N4bhdOlPib38hC0D9uaCGo/p9CE0OCk/a12Q+BLQSDo/eX2DZXQzd4qP1TCL1jY/T/2/eVhDKvFAFXxtlxtDen0mHZwRAu7FBG2rWwyAh/agPE07lvZBLfQ5RTmRT+23X2C2v5IUmPFuSvwJCCAD17TL8lSshEoysfZ362oLLMQtIxAB2gKVfDdICq7hecgRhIs0qlCt6+5pGlCc6kWoplHa/KjP+FJdXBU/IDoKMxRjFhSYkggIkhvRKiN/b2ud8URPF+lB87AGAwyMjr/Wju2Uj5IrppXZWjI3d14BdKE2fhALyQPmHqqA+AXd2LwvRHcBq4mhOQ4oNRWH7wpzc6Pggfcbv9kqhLxrJKEaJqA6Rxi+TDNOJstd5DoRVCDjmVspCVyHJsFEWPg9+NA8l1e4X2PDvOd5MPZAGw6LRhWqeZoSQcPf9/dGJYAyzCmttlRnx0BfrKQ/G9i5DVJft9fuJwMi3OD/0Dv1bRoxcXAyZ0wMJ6rwk9RjRTF4ZK8JviCCNuVt/BqQYiphOzWCpnbwOZt6qXuiAabQWrS4mNXQ7cEErXR/yJcbdFp5nWE1bPBjD0fmG3ovMxmOq5blpcOs0DtNQpci1t+9DKERWAO53IVV/S4yhMklvIp0j0FIQgwjdUptqmoMYGVWSI5YkTKLHZdXRDv9zs+HdFZt1QVcdlGOgATro3fg6ticCrDQKUJC7bYX50wdvetilEwVenHhlr85HMLRLTD6nDXWId4ORLwwe5IXiOhpuZTVTv+xdkTxJofqeCRM/jcZqQlU0gFVTlYlfwMi6HKR2YG4fQ8TOtgR+yV+BMZb6L5OwDc/28/xdfD7GXFaVA2ZSObiIxBwT2ANvZRWuKOlk+UYvryGv5IOULfWZ2KzQGM/hpkUQ5zD64HXvLm7tY6eGjrRVzLuBGvsFn3PnNjW4jCj61bVgqm5Cl1HRWLsDEqZohriNdONSHsxGU0zRb9S38JIPtq0V3iygyxftBtytRllpa43Qo5UIv0TT1RwmVf56xYrnqat7+zpQ72SzSjBD5+hpWimS4ob4dlhsTUvV7RXBjYnndoKnALvseq2nI22giUFXM4+0W/MGkNX1OOI/cJxNMaosqH6bu6se+0dIH/5wa5GThKxOZr2w8JUnX1Q+9oC/lYHy7nuU15R7DAqleaYqbldlX3X4WoIJPqdWuus6Bd9iYYWVWOqxKff/K5+QYh22Z0PTJUFxgVHeEPHjd7cTiK6IS0/cx72BywGq95B0qiMpH/+oPacQNjQiS0yAW8f5KpVaL2YCivKb3Y0QZtjwx4OOnnncyJNcJFIBI+34ZrmrukH2/AVAJOlqh6/HTIR+ur2syzd5TrByUEwn1V7ybpC4thnnwnjVgbeNb+SFb3aHoz+9sUhQ+6ilnpVW2lyJ6xTvgR/uJzyJLKYOiEZ5Sfi5tPS9GxeZuyNolpiEvx/7wjkSIPmXrzQwlvFf/gZis6DiI9CqkqnSp11K78cq3Ocd5XLGBPCF8Q5EwLCdqp61VLO+J1pY30/59e0Zd8Q/1xN3DAFkkrAcn5sntmbkxGddid2PH30+hXL/F1XwP5PqfsSRq3ihyUVVCAanxCJUbffO/0F5LLF7ry5BAkqVRAbPoBNZngel59UViEhurFd/ijlY4hPcBnUR0vK5kxEUZ5NJgzVP/pDkGDf+o3XqtCB3ofXOsZUjSAqPTnF9TJgIhLrxmsuN8QmYMR3mag+3rWTIoKCSOVdqu8Q3F3D6K7ewBIy8FpRH+KLs8toj2t5caXCVnSHB44S2X9c4Pyr9/8jdb6Dpgi6yNRXtDLhWwdExUlLfreFqntjI9aNiktExUDxkZRZtuiL1T/TlyiEJI37nkbTD6Ki31YA4aZSr1liQOu9/udhYBBIJvh8BIMzo2k7gc+t/V7Qk8GkC/w6wnkXV7p9FVNxw5jZk5HOmKzUerU1Vp26h8MpEgbMHIRS576LkdCkYQ4WYk2GGDVnb182PutSc+SAXEyWrxl6/QXB3ZP97ami28Am36cI8QhUlLNcXxXEc0XzAJfkGLgqbGBs/R9NaaHNS8s4V8Jjg5lEoP8Rav0aLIGIpM+Dpv54vUAnK9vGTyEmiq2OzvgrKTP7PrB7ZwPaPVoBVoXAV9iwzdvwC+bgelMS/0WgaexCPiRxs+jHi370jSZwYCPUxxXVMJoNQF2/ab3e3HC6kXZnBy0U9SNlbhAIIQXbgZu6Rza2SIAK2YjNcGUw+a/gWYLkCp+bOGIYhWr08UIE709ZEHlUoEbumzgpJv1D0+hWYNEpj+laoZIK5weO2DFwLL6UBYNrXTm9YvvxeN9U9oKsB3zKBwzFFwDgid5ESMhy68xBnVa55sCZd+l5AnzT8etYjIwF/BGwEx1jjzFv32bk6EeJulESARh8RZ48o7rKw67UZpudPa15SDnL8AL8xMV2SC0D1P53p190zhCFkMmEiir2olwxcJppl/kLm6/0QSUQLNaxi1AC3Pg1CTosX2YQr73PjEIxIlg4mJ62vP7ZyoHE55B0SX9YrrrCPtNsrJEwtn6KOSt7nLT3n3DLJTPbLulcqQ1kETP6Huts29oP+JLEqRGWgnrqMD+mhCl1XCZifjgQ39AeudE8pyu2DqnYU3PyPbJhStq1HbP+VxgseWL+hQ+4w1okADlA9WqoaRuoS7IY77Cm40cJiE6FLomUMltT+xO3Upcv5dzSh9F57hodSBnMHukcH1kd9tqlpprBQ/Ij9E+wMQXrZG5PlzwYJ6jmRdnQtRj64wC/7vsDaaMFteBOUDR4ebRrNZJHhwlNEK9Bz3k7jqOV5KJpL74p2sQnd7vLE374Jz+G7H3RUbX17SobYOe9wKkL/Ja/zeiKExOBmPo0X29bURQMxJkN4ddbrHnOkn6+M1zTZHo0efsB23AOL35XR6g21Ou0PX/TDNQYYbm7YP8nWi478+NcUlXHou6tWc87IVVtnHuzdlKNKr7tg3fDNNsVtS8/wYGHtwqJ4m3npIijBDYjnvv5QRevFQowU75dossIAu6IlYHa9R2mxP6RD5p2h5N/A66VeF38pnvKCOPo+G8ZPXHN9PuFPB3p3NIHjFXvQJ6wcLR2yDZXK6OUwYEqODmyduscdf8s2PdKygsZJf5tk1MMMI1NeH50JU+WPgrz6En+RV12tu1nDbofHmpiK/eg02DluUdFI+2aiOFmYFADPywsL2cC5Y1LPV0ih8W2WvIQqSVt2SEEJzHl2GPumKdcM2UJ5q0J5MISNgKlncdF/lDNRxFHVN1veDC1i2k92AzGZZ8kahlK7USwIlsiFLXoR33v7xuvgCvWYHUZydlXH8c+0mXgKBsdeusM/CUTih3x15FBgu30iWy8KqB6wyYsBXEH6KAftYZNxj97eUscniuQGCHanVClQFFv9xJCwkJuiwUORqVsmKCKaV1UrtMgcpKrbDyZ7OS72GDDx9cnEZ1egvWCCZrnaRfOM/vyXR3TMzC1NWW3QWqdHIYs8YSOYgLOBKntc8WVSvsB4xyVDiimrAEUifOIzkXygknyp65yQY6cBxlk4uXX5mEYXXul8i66OKnAUkvsKEggHa+WjQhBkZMk81AMXIOZBNcLsiYhECzqTtJmtwLVg9kNlpp9qD2Xg2AMFchKcbsA8u4r5nVA0i/eaJd4diQckzKLzgoMWdauBOZ8MGu/uFrQwLHumw3a9u14AIuT8dyFm8mf70YhAisDjHiUriJfAOA7NHpiN0oClVVlTubsohFBE/rnBKtHGrAPg0Moc0XPI/j5aNKcSspwf7dLl6HdRVVeH19bAuJA38BWlAxkOKfR2IGjKiFl9zhf0vPr3EdCUtGw2qViicACCEIkVM74eWMLc5I3HG260/Ssv6reV+zABgNJc4eN5gxfRAepQhrjv2hQjIXTqja8r3e9ynSTct5sbU/AKoJhuMau3hNYyruq1dIPFBsjGrc8iDI4jgn+JSCRcwH8A2yHwu9kyf0yvnBrC0fG5aY5RCC4w/DMa+yH34WxYYKNdgs10UNjvCagSe9Prddt/ObUphQvDq/lPLLzmqBqKI09fxJo0TE+8dok1GezctNlRnjGU7RstNvbRjdf/ZO8d5hbut5WJ2lo3yU9Ztc6Vjtx0l6RpBalXf5t5AzL+F/a5izqcBHrvK+kyOgts1BvjE+r/dDlN8uYSqi4achSxrZGYQ5lIP1tSRkpgPDdU2qUeCp8vj+vg7jGnWffsQW79Op3zozMJKE7IxtMxZjW75cRI8Pj5eUGCvlfEMm/p5J2dDW/znAI0heVoipV6q1LyfAeuMzbsUV+rsSBmCSV+1CdKlxy0T0Y6Om0X6701URm2Ml6DIQgJ/3KO6kwcMYRrmKsY7TfxWhSXZll+1PfyRXe9HS0t1IKTQMZL7ZqQ8D/o+en57Y9XAQ9C+kZYykNr0xOMxEwu2+Cppm69mQyTm3H7QX6kHvXF201r+KVAf354qypJC5OHSeBU47bM1bTaVmdVEWQ+9CcvvHdu8Ue5UndHM+EeukmR82voQpetZ7WJjyXs+tPS60nk09gymuORoHNtbm0VuvyigiEvOsyHiRBW7V6FyTCppLPEHvesan91SlEh1/QEunq+qgREFXByDwNKcAH5s8/RFg8hP4wcPmFqX0xXGSKY087bqRLsBZe52jThx0XLkhKQUWPvI18WQQS3g2Ra1pzQ1oNFKdfJJjyaH5tJH6w0/upJobwB8KZ5cIs9LnVGxfBaHXBfvLkNpab7dpU6TdcbBIc+A4bqXE/Xt8/xsGQOdoXra4Us5nDAM6v2BNBQaGMmgMfQQV+ikTteSHvyl8wUxULiYRIEKaiDxpBJnyf9OoqQdZVJ8ahqOvuwqq5mnDUAUzUr/Lvs1wLu2F+r4eZMfJPL4gV5mKLkITmozRnTvA7VABaxZmFRtkhvU5iH9RQ1z26ku7aABokvptx7RKZBVL6dveLKOzg0NC7HAAPNAFz+A6PPZOGWPfpY3SzHJ/hGYAW2ti3rh/Cb5OGNuGWZRNnN5suXjICQCrMlJ+M8FlLYf8i+SRNR1WHSp0HoS6IcSMSKXmWT0FM/PGahbgnHnjeGLLLgBJ1gDYM2imuxH2LAYXAUbcXa8hE7LgvkJmuXbfT6TvfcnBuhI0EqeCxoU+2qj6reYUVKMLWTSQgAWYqKFphLBpIXuSieZgdlaZyG5qrXlOmd4DYANJG8DTsjtRLSVM458quDGHNGXS4mKFwRmGFhbE5uO81Mn/mxHgBrnA5CEYKUYtvvjpwmFDYTomJ7WFsaBbFQfthIoROm2tN5H/F9ww2TZYzXZLRcSUL2SVHw7uMth6QQ5l2xw/TKlJ2gJVkCgr7aO7Y8cTzr1D2vEKz0NVByjgGuKI9sKM3/y0GOxqHgi5uhHlBuZvIOlx1dXEYzG9YoiOhwG4puNv4Hge+S6dsbTBfQgUKNAqg0wUgpwlIle2Q/cQ74nXq6HiKaDQtCUEA5jAEu6m7mvU0AsyjSDfGR31vh/sqgIFYd7KTbgWZhQLL88Yu/TESs5PI5GnxMnmedzaTV05UFMmiTuIfJ713DHBFU/dzt4BLykyYlgcanMgfPqKLZYmbwcxM8Bl0Dir66CPc80Iv83jmTKCWq9BXh//6vIMMblE/LkdWhX0VW4lyrZ3EX1AGuXxJ2qfi4VC9XeUlEWc/axnTli4azHDCkmlNy4TkP+muqkgsIM0MQltoBbOd36b31sYR/sQx3SkVesNvZ0OqzanfW8vs5tTqc2MicLxcjpK1V0FMLeB2mqZ8Hgmu049jKf7U+GHGN0P7ZNXM4JM5VeZqQ63adbKTmAfIqJwMMbo43YY+cvahB7tLnN+jwCgGLCi2hKIsD56G9KXZbj1nb+LDUpRvBllYiPsf2eA5Fv5ErNohNwAxY4OEwr4Am1979B89CmZHq66cxCLpALrInQ7NoP8NM4Ji52V71a+ZJKcEEy2dC+rmkx5dC1YpCLjSFT5i93zkCaiHX88plDdM7nCKw4p7QZ+iApf4p4+c7XiEr+YRDBjKrR3NoIXBSb5h92YSGYt+L6qkxQm/aZbU2M+fNmN3cGGh2/ZIXX73tWK8sxMBCmyPKputqr/jcpZQvlsSywCY89GWhBdmk59+anhZpGz+iw2HG8KlsQNFirLXge78vG0RxOK/C4bm1g3NKW3vdF3JEgwwJEXo9E0JZlrFsGs9fE8dqYcpFb8LiEc3+JLfbK0/De4LDIzLNDSwAJXWmxX9rYjKGmsR3GUl+dVj3NQa8AKTMYodtu6k2ZHILZHStYd9eF72SlCof18rFmJ5NUk+JIgSNQfTpX04wd1h80wEXhS6H7BrYpMKSFAMuzaOBbU4dxvQMgyvxJvR6DyF3BaHkaqT4P3FRYlm+zh8EEGgmkNqD1WRUubDW62VqLoH8UEelIpL7C8CguWWGGCAIDPma9bnh+7IJSt0Cn6ACER2mYk8dLsrN70RUVLiE0ig+08yPY9IOtuqHf/KYsT84BwhMcVq7t8q1WVjpJGNyXdtIPIjhAzabtrX03Itn29QO3TCixE9WpkHIOdAoGvqCrw1D3x9g9Px8u0yZZuulZuGy0veSY34KDSlhsO1zx2ZMrpDBzCHPB4niwApk6NevIvmBxU3+4yaewDvgEQDJ6Of5iRxjAIpp9UO8EzNY4blj4qh8SCSZTqbe/lShE6tNU9Y5IoWHeJxPcHF9KwYQD7lFcIpcscHrcfkHJfL2lL1zczKywEF7BwkjXEirgBcvNWayatqdTVT5oLbzTmED3EOYBSXFyb2VIYk3t0dOZWJdG1nP+W7Qfyeb8MSIyUGKEA57ptPxrPHKYGZPHsuBqQuVSrn0i8KJX+rlzAqo8AawchsJ26FckxTf5+joTcw+2y8c8bushpRYEbgrdr64ltEYPV2AbVgKXV3XACoD1gbs01CExbJALkuItjfYN3+6I8kbiTYmdzBLaNC+xu9z/eXcRQV1Lo8cJoSsKyWJPuTncu5vcmfMUAWmuwhjymK1rhYR8pQMXNQg9X+5hAOomEzMY9lSzdcCrjzCP+EIg7Z3loV19edLTKDnv+PHMMkHCR06B5WfLKHX0jPVSqLKxPgnV54rBS5YRiWfbfJ20/uDdHUGe+fGoU8Cc4yA4iinZ2Rc99SH/1kpXdlBtk1py08PiqXlCD0LFIGcjDOWP+2x5ApZGy3A1t/Xud4bAMUVZ2b/x/6cNa39aUpXcxSICbdyLrFcwNIvm5s9cGD+AoQTtOxlUZRysht1cgtwyeC8azu6e+U8mHqhp14EOqIC+Ihn+LKJQx1BkC5/9gEBjRU/WFyAie5agpvHfUA6PJM3Y44euW2EHefL0koc4BzwEy+qimKQ+V1zAhCgXFNxwooh4jzXkZzBooMuwxsKzF6CvNeXwTRumJz/F99T3LUMKB4pmgXY8hjvtEifqRJF0GIZ3w203BPvh3J4UEyRito+S503brH00+4G3iII4CcEVo1IpWAqJlCu7DbaQzV+AEobtw9gDF0cnwzhX+PMGfaMQmD6OT+ONXigyYw06koHmhWlWHu0rnb1n7m8pnQ1JjYDhh1xPTHgF2Sg0QOumxOZ6RJOO/H1kGJMeub0z+f+EaaCmPPhYSO21F8ATLkNgfm8Ir/0a5U9riGgCkVo2WsUP+fY+ko7DbiIq6MqFUjPjWnUTQfCwJ39zXs4DQfRGNmLVX+uMkt7FTOmZdMwgAEveuEiOqOXw1WtCBEUfA6HkPtYskS1NahmHsQetaYeKZBta393NmA+gctaRQpsMPQdK9lYxXmrm5CHYFseESi0ETyxDXRqPHsyOZpDbXQsLNfWj9bh4Xpw/hymvBg3i7pW9n4jEYVNsSc88/XuMjjD7xJxhH2wokNe51A6XBQ1rYa+vJoWeFoh1JEaWlViTRMblC3BpLslS7EI+faX+jhxUe7aH4cvRTK1jwhL19XebAlSbfMgRYgejaDrsDMuMJbKPSNhuBOf+QdnOryGVFGPXxbo094aZHU7lYW4QcCwrZ5SIwaTeHKvsGmdMF0q5nm3JfnXK2+7D4fYysRSDZEnA0wYI0lHy5At4biSbPzODPADhcW20iFaQVGq2BZi6RrL/lekyZ1jU8CONbbm8KO0EiNVTnUSk/z6fFN6CtnIg23rlpwBgADb0Ixn3HsHQHaOh/N186pSv+MrnbRRyUr/WPqibJMJ1U6B9SNPrSd77CwV7ZbzMyyMVI//C3KmZ6zR31UYGmxTV1tKqVLw4MZz93+eCqKEdzSPtkP1RwGBYoDJEBOXSx+gunxrP0ynhOhNozoWUHD/f66yYySnC2HZ+XMOlywlHvRe6rpOWIWnPp2C+Rzl76ekP+am4kB5Lnm2p1++2Ejcd+GGlmKXBB7mNbv5RFUwkO7Wj2sN6DXJ/AKhDO2sJM4HT9IKWWmDkZIO2si/6BKHruXIEDpfAtz3xDlIdKnnlqnkfCyy6vNOPyuoWsSWBeiN0mcfIrnOtp2j7bxjOkr25skfS/lwOC692cEp7TKSlymbsyzoWg/0AN66SvQYo6BqpNwPpTaUu25zMWlwVUdfu1EEdc0O06TI0JmHk4f6GZQbfOs//OdgtGPO6uLoadJycR8Z80rkd88QoNmimZd8vcpQKScCFkxH1RMTkPlN3K7CL/NSMOiXEvxrn9VyUPFee63uRflgaPMSsafvqMgzTt3T1RaHNLLFatQbD0Vha4YXZ/6Ake7onM65nC9cyLkteYkDfHoJtef7wCrWXTK0+vH38VUBcFJP0+uUXpkiK0gDXNA39HL/qdVcaOA16kd2gzq8aHpNSaKtgMLJC6fdLLS/I/4lUWV2+djY9Rc3QuJOUrlHFQERtXN4xJaAHZERCUQZ9ND2pEtZg8dsnilcnqmqYn3c1sRyK0ziKpHNytEyi2gmzxEFchvT1uBWxZUikkAlWuyqvvhteSG9kFhTLNM97s3X1iS2UbE6cvApgbmeJ/KqtP0NNT3bZiG9TURInCZtVsNZzYus6On0wcdMlVfqo8XLhT5ojaOk4DtCyeoQkBt1mf5luFNaLFjI/1cnPefyCQwcq5ia/4pN4NB+xE/3SEPsliJypAGacKZY5YAwlwc3Rwp4MdhN+VsNNVdqO2vrybB9GN7pa55D/rJaqZkwtY0fs/bvMYWEwWpqp+DXVDzyD/1QD8VE573J+rTI47Smc0DG96kXLYGkRtyAb6YLKMILTUlaU5mUg91/VO2XI63sv3hOhgYK6SgW3g6rA6uh9qaMQKlKAosuatEz6w1EDDXZ5qqTwq10WTumfYhwNCI9cKHXq3Vr6myL7D22jAdMo/JAzRK0qvrVvYGc3UdT5p7MU0Et8dOJfCEZNt3EsuauwAYhVKI0B4IYTwaUHSI6/a/vyQ/QJOYA9QSqcdhFIOU/4vqb+tiMQrpDzkZEMmLZbbT/s0s+lI5oxH74gW+mRzBG5zn2PyGH21iVzXGN23aOan0olzMHtT0/jeKe7Es6/XU/n8dgfl3qAsHQKxsYLwA+OH4RwI/TMVaqVoAJnB4uFV+/fKLJ3xHdt1WDyxEqzE++ENo+mIWn34w37RRrRuw+v6WHF9mEyGV6+QttHhm9xJE/oClAvLf54yH16EIHfPkNUBo3c/onymLlBrzxlCw64JNbIfqrzIx8HDzLyebqNo7EmE8fod/QjiOYAtQGxYofiBYGfKKMeHvPf/UeFDMUtENGshDBS27XXKTtTSAPD8Vq04hk4loHHdSptTFJnp1ugU+bmkDLJcLbBh1JaWlnH8PYLAOS+6T+FF6ziK/1WdRt3+qfPRSFlO5anOydwz8SoyVFzgyaB0M3/2jVTPgAZb4V3gRje4gtFpJk4xGgKjiLQXwXWiuSkhldRE+Ujipd8fSTl+cNrAJevuiow4VVB4G6quw2eRHmM23Ujcba0C1vypDyaDkxuLuQgVGZAih54mPZew1II7s+9PMxtRyAvKn6IYtbz4zx/S6uO5LI0a48Fw+DJVQo3QKmBRqHUPLUZh5Dn6uMFUSAB76Grzx7zdZaZN1+GNcswDxnvEvSgbN3K3OBsJVNXRDl4lqJf5oEKsZDagdcXdOPtAZqcI9BnAnODVIvnO99RVMY72nsQpAidKoaySfvobVqnrTQuDXsApbvGhUUsK6oiRBnvqrU4OAmAh2hdcCSNLMv2QUACNKgDMgb1Y1mZb9qXZAmq6PXlgyyuSOJm2/BOHe4Wa/XQyYkyZugZm+Uvthe8mpfyT3Xi1H8Ku45lS2kH4b+LVjCQLe1eLBvS7gL9qDyYEo9Z55Qbz4m3xzNk65Vh8BgixsVvAXIAjf/5Jm2TotaDL+pHDM5pn1r0UuTZ24N8S5k68bLHW9tfD+2k4zGev23ExJb4YTRKWrj82N5LjJ26lj1BkGZ0CsXLGGELoPaYQomjTqPxYqhfwOwDliNGVqux9ffuybqOKgsbB51B1GbZfG8vHDBE2JQGib0C8YdyPG2epwAAAABJRU5ErkJggg==",vs=iM;const rM=new Te(0);class sM extends ht{constructor(e,t){super("SSGIPass"),this.needsSwap=!1,this.defaultFragmentShader="",this.frame=0,this.cachedMaterials=new WeakMap,this.visibleMeshes=[],this.ssgiEffect=e,this._scene=e._scene,this._camera=e._camera,this.fullscreenMaterial=new $0,this.defaultFragmentShader=this.fullscreenMaterial.fragmentShader;const n=!t.diffuseOnly&&!t.specularOnly?2:1;this.renderTarget=new ci(1,1,n,{type:bt,depthBuffer:!1}),this.fullscreenMaterial.uniforms.cameraMatrixWorld.value=this._camera.matrixWorld,this.fullscreenMaterial.uniforms.viewMatrix.value=this._camera.matrixWorldInverse,this.fullscreenMaterial.uniforms.projectionMatrix.value=this._camera.projectionMatrix,this.fullscreenMaterial.uniforms.inverseProjectionMatrix.value=this._camera.projectionMatrixInverse,e._camera.isPerspectiveCamera&&(this.fullscreenMaterial.defines.PERSPECTIVE_CAMERA=""),t.diffuseOnly&&(this.fullscreenMaterial.defines.diffuseOnly=""),t.specularOnly&&(this.fullscreenMaterial.defines.specularOnly=""),this.initMRTRenderTarget()}initialize(e,...t){super.initialize(e,...t),new $i().load(vs,n=>{n.minFilter=Fe,n.magFilter=Fe,n.wrapS=It,n.wrapT=It,n.colorSpace=rn,this.fullscreenMaterial.uniforms.blueNoiseTexture.value=n})}get texture(){return this.renderTarget.texture[0]}get specularTexture(){const e="specularOnly"in this.fullscreenMaterial.defines?0:1;return this.renderTarget.texture[e]}initMRTRenderTarget(){this.gBuffersRenderTarget=new ci(1,1,4,{minFilter:Fe,magFilter:Fe}),this.gBuffersRenderTarget.depthTexture=new fs(1,1),this.gBuffersRenderTarget.depthTexture.type=$e,this.backSideDepthPass=new nM(this._scene,this._camera),this.depthTexture=this.gBuffersRenderTarget.texture[0],this.normalTexture=this.gBuffersRenderTarget.texture[1],this.diffuseTexture=this.gBuffersRenderTarget.texture[2],this.emissiveTexture=this.gBuffersRenderTarget.texture[3],this.diffuseTexture.minFilter=Be,this.diffuseTexture.magFilter=Be,this.diffuseTexture.colorSpace=Se,this.diffuseTexture.needsUpdate=!0,this.emissiveTexture.minFilter=Be,this.emissiveTexture.magFilter=Be,this.emissiveTexture.type=bt,this.emissiveTexture.needsUpdate=!0,this.normalTexture.type=bt,this.normalTexture.needsUpdate=!0,this.fullscreenMaterial.uniforms.normalTexture.value=this.normalTexture,this.fullscreenMaterial.uniforms.depthTexture.value=this.depthTexture,this.fullscreenMaterial.uniforms.diffuseTexture.value=this.diffuseTexture,this.fullscreenMaterial.uniforms.emissiveTexture.value=this.emissiveTexture,this.fullscreenMaterial.uniforms.backSideDepthTexture.value=this.backSideDepthPass.renderTarget.texture}setSize(e,t){this.renderTarget.setSize(e*this.ssgiEffect.resolutionScale,t*this.ssgiEffect.resolutionScale),this.gBuffersRenderTarget.setSize(e,t),this.backSideDepthPass.setSize(e,t),this.fullscreenMaterial.uniforms.texSize.value.set(this.renderTarget.width,this.renderTarget.height)}dispose(){super.dispose(),this.renderTarget.dispose(),this.gBuffersRenderTarget.dispose(),this.backSideDepthPass.dispose(),this.fullscreenMaterial.dispose(),this.normalTexture=null,this.depthTexture=null,this.diffuseTexture=null,this.emissiveTexture=null}setMRTMaterialInScene(){this.visibleMeshes=gs(this._scene);for(const s of this.visibleMeshes){var e,t,n;const a=s.material;let[o,l]=this.cachedMaterials.get(s)||[];if(a!==o){var r;l&&l.dispose(),l=new j0,xu(a,l),l.uniforms.normalScale.value=a.normalScale,(r=s.skeleton)!=null&&r.boneTexture&&(l.defines.USE_SKINNING="",l.defines.BONE_TEXTURE="",l.uniforms.boneTexture.value=s.skeleton.boneTexture,l.needsUpdate=!0);const h=Object.keys(a).find(d=>{const m=a[d];return m instanceof ot&&m.matrix});h&&(l.uniforms.uvTransform.value=a[h].matrix),this.cachedMaterials.set(s,[a,l])}a.emissive&&(l.uniforms.emissive.value=a.emissive),a.color&&(l.uniforms.color.value=a.color),Ui(l,a,"normalMap","USE_NORMALMAP",!0),Ui(l,a,"roughnessMap","USE_ROUGHNESSMAP",!0),Ui(l,a,"metalnessMap","USE_	METALNESSMAP",!0),Ui(l,a,"map","USE_MAP",!0),Ui(l,a,"emissiveMap","USE_EMISSIVEMAP",!0),Ui(l,a,"alphaMap","USE_ALPHAMAP",!0);const c=this.fullscreenMaterial.uniforms.blueNoiseTexture.value;if(c){const{width:h,height:d}=c.source.data;l.uniforms.blueNoiseTexture.value=c,l.uniforms.blueNoiseRepeat.value.set(this.renderTarget.width/h,this.renderTarget.height/d)}l.uniforms.texSize.value.set(this.renderTarget.width,this.renderTarget.height),l.uniforms.frame.value=this.frame,s.visible=Ka(s,a);const u=(e=a.roughness)!==null&&e!==void 0?e:1;l.uniforms.roughness.value=this.ssgiEffect.selection.size===0||this.ssgiEffect.selection.has(s)?u:1e11,l.uniforms.metalness.value=(t=s.material.metalness)!==null&&t!==void 0?t:0,l.uniforms.emissiveIntensity.value=(n=s.material.emissiveIntensity)!==null&&n!==void 0?n:0,s.material=l}}unsetMRTMaterialInScene(){for(const e of this.visibleMeshes){e.visible=!0;const[t]=this.cachedMaterials.get(e);e.material=t}}render(e){this.frame=(this.frame+this.ssgiEffect.spp)%65536;const{background:t}=this._scene;this._scene.background=rM,this.setMRTMaterialInScene(),e.setRenderTarget(this.gBuffersRenderTarget),e.render(this._scene,this._camera),this.unsetMRTMaterialInScene(),this.ssgiEffect.autoThickness&&this.backSideDepthPass.render(e),this.fullscreenMaterial.uniforms.frame.value=this.frame,this.fullscreenMaterial.uniforms.cameraNear.value=this._camera.near,this.fullscreenMaterial.uniforms.cameraFar.value=this._camera.far,this.fullscreenMaterial.uniforms.viewMatrix.value.copy(this._camera.matrixWorldInverse),this.fullscreenMaterial.uniforms.accumulatedTexture.value=this.ssgiEffect.svgf.denoisePass.texture;const n=this.fullscreenMaterial.uniforms.blueNoiseTexture.value;if(n){const{width:r,height:s}=n.source.data;this.fullscreenMaterial.uniforms.blueNoiseRepeat.value.set(this.renderTarget.width/r,this.renderTarget.height/s)}e.setRenderTarget(this.renderTarget),e.render(this.scene,this.camera),this._scene.background=t}}var aM=`#define GLSLIFY 1
uniform sampler2D inputTexture;uniform sampler2D sceneTexture;uniform sampler2D depthTexture;uniform int toneMapping;
#include <tonemapping_pars_fragment>
#pragma tonemapping_pars_fragment
void mainImage(const in vec4 inputColor,const in vec2 uv,out vec4 outputColor){vec4 depthTexel=textureLod(depthTexture,uv,0.);vec3 ssgiClr;if(dot(depthTexel.rgb,depthTexel.rgb)==0.){ssgiClr=textureLod(sceneTexture,uv,0.).rgb;}else{ssgiClr=textureLod(inputTexture,uv,0.).rgb;switch(toneMapping){case 1:ssgiClr=LinearToneMapping(ssgiClr);break;case 2:ssgiClr=ReinhardToneMapping(ssgiClr);break;case 3:ssgiClr=OptimizedCineonToneMapping(ssgiClr);break;case 4:ssgiClr=ACESFilmicToneMapping(ssgiClr);break;case 5:ssgiClr=CustomToneMapping(ssgiClr);break;}ssgiClr*=toneMappingExposure;}outputColor=vec4(ssgiClr,1.0);}`,oM=`#define GLSLIFY 1
vec3 viewNormal=(vec4(normal,0.)*cameraMatrixWorld).xyz;roughness*=roughness;vec3 viewPos=getViewPosition(depth);vec3 viewDir=normalize(viewPos);vec3 T,B;vec3 n=viewNormal;vec3 v=viewDir;vec3 V=(vec4(v,0.)*viewMatrix).xyz;vec3 N=normal;Onb(N,T,B);V=ToLocal(T,B,N,V);vec3 H=SampleGGXVNDF(V,roughness,roughness,0.25,0.25);if(H.z<0.0)H=-H;vec3 l=normalize(reflect(-V,H));l=ToWorld(T,B,N,l);l=(vec4(l,1.)*cameraMatrixWorld).xyz;l=normalize(l);if(dot(viewNormal,l)<0.)l=-l;vec3 h=normalize(v+l);float VoH=max(EPSILON,dot(v,h));VoH=pow(VoH,0.875);vec4 diffuseTexel=textureLod(diffuseTexture,vUv,0.);vec3 diffuse=diffuseTexel.rgb;float metalness=diffuseTexel.a;vec3 f0=mix(vec3(0.04),diffuse,metalness);vec3 F=F_Schlick(f0,VoH);vec3 directLight=textureLod(directLightTexture,vUv,0.).rgb;
#ifdef ssgi
vec3 diffuseLightingColor=denoisedColor[0];vec3 diffuseComponent=diffuse*(1.-metalness)*(1.-F)*diffuseLightingColor;vec3 specularLightingColor=denoisedColor[1];vec3 specularComponent=specularLightingColor*F;denoisedColor[0]=diffuseComponent+specularComponent;
#endif
#ifdef ssdgi
vec3 diffuseLightingColor=denoisedColor[0];vec3 diffuseComponent=diffuse*(1.-metalness)*(1.-F)*diffuseLightingColor;denoisedColor[0]=diffuseComponent;
#endif
#ifdef ssr
vec3 specularLightingColor=denoisedColor[0];vec3 specularComponent=specularLightingColor*F;denoisedColor[0]=specularComponent;
#endif
#ifdef useDirectLight
denoisedColor[0]+=directLight;
#endif
`,lM=`#define GLSLIFY 1
uniform sampler2D diffuseTexture;uniform sampler2D directLightTexture;vec3 getViewPosition(const float depth){float clipW=projectionMatrix[2][3]*depth+projectionMatrix[3][3];vec4 clipPosition=vec4((vec3(vUv,depth)-0.5)*2.0,1.0);clipPosition*=clipW;return(projectionMatrixInverse*clipPosition).xyz;}vec3 F_Schlick(const vec3 f0,const float theta){return f0+(1.-f0)*pow(1.0-theta,5.);}vec3 SampleGGXVNDF(const vec3 V,const float ax,const float ay,const float r1,const float r2){vec3 Vh=normalize(vec3(ax*V.x,ay*V.y,V.z));float lensq=Vh.x*Vh.x+Vh.y*Vh.y;vec3 T1=lensq>0. ? vec3(-Vh.y,Vh.x,0.)*inversesqrt(lensq): vec3(1.,0.,0.);vec3 T2=cross(Vh,T1);float r=sqrt(r1);float phi=2.0*PI*r2;float t1=r*cos(phi);float t2=r*sin(phi);float s=0.5*(1.0+Vh.z);t2=(1.0-s)*sqrt(1.0-t1*t1)+s*t2;vec3 Nh=t1*T1+t2*T2+sqrt(max(0.0,1.0-t1*t1-t2*t2))*Vh;return normalize(vec3(ax*Nh.x,ay*Nh.y,max(0.0,Nh.z)));}void Onb(const vec3 N,inout vec3 T,inout vec3 B){vec3 up=abs(N.z)<0.9999999 ? vec3(0,0,1): vec3(1,0,0);T=normalize(cross(up,N));B=cross(N,T);}vec3 ToLocal(const vec3 X,const vec3 Y,const vec3 Z,const vec3 V){return vec3(dot(V,X),dot(V,Y),dot(V,Z));}vec3 ToWorld(const vec3 X,const vec3 Y,const vec3 Z,const vec3 V){return V.x*X+V.y*Y+V.z*Z;}`;const Aa={distance:10,thickness:10,autoThickness:!1,maxRoughness:1,blend:.9,denoiseIterations:1,denoiseKernel:2,denoiseDiffuse:10,denoiseSpecular:10,depthPhi:2,normalPhi:50,roughnessPhi:1,envBlur:.5,importanceSampling:!0,directLightMultiplier:1,steps:20,refineSteps:5,spp:1,resolutionScale:1,missedRays:!1},{render:uc}=zi.prototype,hc=w0(),dc=A0();class cM extends Er{constructor(e,t,n,r=Aa){if(r={...Aa,...r},super("SSGIEffect",aM,{type:"FinalSSGIMaterial",uniforms:new Map([["inputTexture",new V(null)],["sceneTexture",new V(null)],["depthTexture",new V(null)],["toneMapping",new V(un)]])}),this.selection=new Vx,this.isUsingRenderPass=!0,!(t instanceof yt))throw new Error(this.constructor.name+" doesn't support cameras of type '"+t.constructor.name+"' yet. Only cameras of type 'PerspectiveCamera' are supported.");this._scene=e,this._camera=t;let s;r.diffuseOnly?(s="ssdgi",r.reprojectSpecular=!1,r.roughnessDependent=!1,r.basicVariance=25e-5,r.neighborhoodClamp=!1):r.specularOnly?(s="ssr",r.reprojectSpecular=!0,r.roughnessDependent=!0,r.basicVariance=25e-5,r.neighborhoodClamp=!0):(s="ssgi",r.reprojectSpecular=[!1,!0],r.neighborhoodClamp=[!1,!0],r.roughnessDependent=[!1,!0],r.basicVariance=[25e-5,25e-5]),r.neighborhoodClampRadius=2,r.neighborhoodClampIntensity=.5;const a=r.diffuseOnly||r.specularOnly?1:2;r={...r,denoiseCustomComposeShader:oM,denoiseCustomComposeShaderFunctions:lM},this.svgf=new W0(e,t,n,a,r),s==="ssgi"?this.svgf.svgfTemporalReprojectPass.fullscreenMaterial.fragmentShader=this.svgf.svgfTemporalReprojectPass.fullscreenMaterial.fragmentShader.replace("accumulatedTexel[ 1 ].rgb = clampedColor;",`
						float roughness = inputTexel[ 0 ].a;
						accumulatedTexel[ 1 ].rgb = mix(accumulatedTexel[ 1 ].rgb, clampedColor, 1. - sqrt(roughness));
						`):s==="ssr"&&(this.svgf.svgfTemporalReprojectPass.fullscreenMaterial.fragmentShader=this.svgf.svgfTemporalReprojectPass.fullscreenMaterial.fragmentShader.replace("accumulatedTexel[ 0 ].rgb = clampedColor;",`
					accumulatedTexel[ 0 ].rgb = mix(accumulatedTexel[ 0 ].rgb, clampedColor, 0.5);
					`)),this.svgf.svgfTemporalReprojectPass.fullscreenMaterial.needsUpdate=!0,this.ssgiPass=new sM(this,r),r.diffuseOnly?this.svgf.svgfTemporalReprojectPass.fullscreenMaterial.uniforms.inputTexture0.value=this.ssgiPass.texture:r.specularOnly?this.svgf.svgfTemporalReprojectPass.fullscreenMaterial.uniforms.inputTexture0.value=this.ssgiPass.specularTexture:(this.svgf.svgfTemporalReprojectPass.fullscreenMaterial.uniforms.inputTexture0.value=this.ssgiPass.texture,this.svgf.svgfTemporalReprojectPass.fullscreenMaterial.uniforms.inputTexture1.value=this.ssgiPass.specularTexture),this.svgf.setJitteredGBuffers(this.ssgiPass.depthTexture,this.ssgiPass.normalTexture,{useRoughnessInAlphaChannel:!0}),this.svgf.denoisePass.fullscreenMaterial.uniforms={...this.svgf.denoisePass.fullscreenMaterial.uniforms,diffuseTexture:new V(null),directLightTexture:new V(null)},this.svgf.denoisePass.fullscreenMaterial.defines[s]="",this.svgf.denoisePass.fullscreenMaterial.uniforms.diffuseTexture.value=this.ssgiPass.diffuseTexture,this.lastSize={width:r.width,height:r.height,resolutionScale:r.resolutionScale},this.sceneRenderTarget=new it(1,1,{colorSpace:Se}),this.renderPass=new zi(this._scene,this._camera),this.renderPass.renderToScreen=!1,this.setSize(r.width,r.height);const o=this,l=this.renderPass;zi.prototype.render=function(...c){if(this!==l){const u=o.isUsingRenderPass;o.isUsingRenderPass=!0,u!=o.isUsingRenderPass&&o.updateUsingRenderPass()}uc.call(this,...c)},this.makeOptionsReactive(r)}updateUsingRenderPass(){this.isUsingRenderPass?(this.ssgiPass.fullscreenMaterial.defines.useDirectLight="",this.svgf.denoisePass.fullscreenMaterial.defines.useDirectLight=""):(delete this.ssgiPass.fullscreenMaterial.defines.useDirectLight,delete this.svgf.denoisePass.fullscreenMaterial.defines.useDirectLight),this.ssgiPass.fullscreenMaterial.needsUpdate=!0,this.svgf.denoisePass.fullscreenMaterial.needsUpdate=!0}makeOptionsReactive(e){let t=!1;const n=this.ssgiPass.fullscreenMaterial.uniforms,r=Object.keys(n),s=this.svgf.svgfTemporalReprojectPass;for(const a of Object.keys(e))Object.defineProperty(this,a,{get(){return e[a]},set(o){if(!(e[a]===o&&t))switch(e[a]=o,a){case"denoiseIterations":this.svgf.denoisePass.iterations=o;break;case"denoiseDiffuse":this.svgf.denoisePass.fullscreenMaterial.uniforms.denoise.value[0]=o;break;case"denoiseSpecular":this.svgf.denoisePass.fullscreenMaterial.uniforms.denoise.value[1]=o;break;case"denoiseKernel":case"depthPhi":case"normalPhi":case"roughnessPhi":this.svgf.denoisePass.fullscreenMaterial.uniforms[a].value=o;break;case"resolutionScale":this.setSize(this.lastSize.width,this.lastSize.height),s.reset();break;case"spp":this.ssgiPass.fullscreenMaterial.fragmentShader=this.ssgiPass.defaultFragmentShader.replaceAll("spp",o),o!==1&&(this.ssgiPass.fullscreenMaterial.fragmentShader=qa(this.ssgiPass.fullscreenMaterial.fragmentShader.replace("#pragma unroll_loop_start","").replace("#pragma unroll_loop_end",""))),this.ssgiPass.fullscreenMaterial.needsUpdate=t,s.reset();break;case"steps":case"refineSteps":this.ssgiPass.fullscreenMaterial.defines[a]=parseInt(o),this.ssgiPass.fullscreenMaterial.needsUpdate=t,s.reset();break;case"directLightMultiplier":this.ssgiPass.fullscreenMaterial.defines[a]=o.toPrecision(5),this.ssgiPass.fullscreenMaterial.needsUpdate=t,s.reset();break;case"importanceSampling":case"missedRays":case"autoThickness":o?this.ssgiPass.fullscreenMaterial.defines[a]="":delete this.ssgiPass.fullscreenMaterial.defines[a],this.ssgiPass.fullscreenMaterial.needsUpdate=t,s.reset();break;case"blend":this.svgf.svgfTemporalReprojectPass.fullscreenMaterial.uniforms[a].value=o,s.reset();break;case"distance":n.rayDistance.value=o,s.reset();break;default:r.includes(a)&&(n[a].value=o,s.reset())}}}),this[a]=e[a];t=!0}initialize(e,...t){super.initialize(e,...t),this.ssgiPass.initialize(e,...t)}setSize(e,t,n=!1){var r;e===void 0&&t===void 0||!n&&e===this.lastSize.width&&t===this.lastSize.height&&this.resolutionScale===this.lastSize.resolutionScale||(this.ssgiPass.setSize(e,t),this.svgf.setSize(e,t),this.sceneRenderTarget.setSize(e,t),(r=this.cubeToEquirectEnvPass)==null||r.setSize(e,t),this.lastSize={width:e,height:t,resolutionScale:this.resolutionScale})}dispose(){var e;super.dispose(),this.ssgiPass.dispose(),this.svgf.dispose(),(e=this.cubeToEquirectEnvPass)==null||e.dispose(),zi.prototype.render=uc}keepEnvMapUpdated(e){const t=this.ssgiPass.fullscreenMaterial;let n=this._scene.environment;if(n){if(t.uniforms.envMapInfo.value.mapUuid!==n.uuid){n.isCubeTexture&&(this.cubeToEquirectEnvPass||(this.cubeToEquirectEnvPass=new X0),n=this.cubeToEquirectEnvPass.generateEquirectEnvMap(e,n),n.uuid=this._scene.environment.uuid),n.generateMipmaps||(n.generateMipmaps=!0,n.minFilter=vr,n.magFilter=vr,n.needsUpdate=!0),t.uniforms.envMapInfo.value.mapUuid=n.uuid;const r=y0(n);t.uniforms.maxEnvMapMipLevel.value=r,t.uniforms.envMapInfo.value.map=n,t.defines.USE_ENVMAP="",delete t.defines.importanceSampling,this.importanceSampling?t.uniforms.envMapInfo.value.updateFrom(n,e).then(()=>{t.defines.importanceSampling="",t.needsUpdate=!0}):t.uniforms.envMapInfo.value.map=n,this.svgf.svgfTemporalReprojectPass.reset(),t.needsUpdate=!0}}else"USE_ENVMAP"in t.defines&&(delete t.defines.USE_ENVMAP,delete t.defines.importanceSampling,t.needsUpdate=!0)}update(e,t){this.keepEnvMapUpdated(e);const n=this.isUsingRenderPass?t:this.sceneRenderTarget,r=[];if(!this.isUsingRenderPass){const a=[];for(const o of gs(this._scene)){if(o.isScene)return;o.visible=!Ka(o),o.visible?r.push(o):a.push(o)}this.renderPass.render(e,this.sceneRenderTarget);for(const o of a)o.visible=!0;for(const o of r)o.visible=!1}this.ssgiPass.fullscreenMaterial.uniforms.directLightTexture.value=n.texture,this.svgf.denoisePass.fullscreenMaterial.uniforms.directLightTexture.value=n.texture,this.ssgiPass.render(e),this.svgf.render(e),this.uniforms.get("inputTexture").value=this.svgf.texture,this.uniforms.get("sceneTexture").value=n.texture,this.uniforms.get("depthTexture").value=this.ssgiPass.depthTexture,this.uniforms.get("toneMapping").value=e.toneMapping;for(const a of r)a.visible=!0;const s=!this.diffuseOnly&&!this.specularOnly;hc.value=s||this.diffuseOnly===!0,dc.value=s||this.specularOnly==!0,cancelAnimationFrame(this.rAF2),cancelAnimationFrame(this.rAF),cancelAnimationFrame(this.usingRenderPassRAF),this.rAF=requestAnimationFrame(()=>{this.rAF2=requestAnimationFrame(()=>{hc.value=!1,dc.value=!1})}),this.usingRenderPassRAF=requestAnimationFrame(()=>{const a=this.isUsingRenderPass;this.isUsingRenderPass=!1,a!=this.isUsingRenderPass&&this.updateUsingRenderPass()})}}cM.DefaultOptions=Aa;var uM=`#define GLSLIFY 1
uniform sampler2D inputTexture;uniform sampler2D velocityTexture;uniform sampler2D blueNoiseTexture;uniform ivec2 blueNoiseSize;uniform vec2 texSize;uniform float intensity;uniform float jitter;uniform float deltaTime;uniform int frame;uvec4 s0,s1;ivec2 pixel;void rng_initialize(vec2 p,int frame){pixel=ivec2(p);s0=uvec4(p,uint(frame),uint(p.x)+uint(p.y));s1=uvec4(frame,frame*15843,frame*31+4566,frame*2345+58585);}void pcg4d(inout uvec4 v){v=v*1664525u+1013904223u;v.x+=v.y*v.w;v.y+=v.z*v.x;v.z+=v.x*v.y;v.w+=v.y*v.z;v=v ^(v>>16u);v.x+=v.y*v.w;v.y+=v.z*v.x;v.z+=v.x*v.y;v.w+=v.y*v.z;}ivec2 shift2(){pcg4d(s1);return(pixel+ivec2(s1.xy % 0x0fffffffu))% blueNoiseSize;}void mainImage(const in vec4 inputColor,const in vec2 uv,out vec4 outputColor){vec4 velocity=textureLod(velocityTexture,vUv,0.0);if(dot(velocity.xyz,velocity.xyz)==0.0){outputColor=inputColor;return;}velocity.xy*=intensity;rng_initialize(vUv*texSize,frame);vec2 blueNoise=texelFetch(blueNoiseTexture,shift2(),0).rg-0.5;vec2 jitterOffset=jitter*velocity.xy*blueNoise;float frameSpeed=(1./100.)/deltaTime;vec2 startUv=vUv+(jitterOffset-velocity.xy*0.5)*frameSpeed;vec2 endUv=vUv+(jitterOffset+velocity.xy*0.5)*frameSpeed;startUv=max(vec2(0.),startUv);endUv=min(vec2(1.),endUv);vec3 motionBlurredColor;for(float i=0.0;i<=samplesFloat;i++){vec2 reprojectedUv=mix(startUv,endUv,i/samplesFloat);vec3 neighborColor=textureLod(inputTexture,reprojectedUv,0.0).rgb;motionBlurredColor+=neighborColor;}motionBlurredColor/=samplesFloat;outputColor=vec4(motionBlurredColor,inputColor.a);}`;const fc={intensity:1,jitter:1,samples:16};class hM extends Er{constructor(e,t=fc){t={...fc,...t},super("MotionBlurEffect",uM,{type:"MotionBlurMaterial",uniforms:new Map([["inputTexture",new V(null)],["velocityTexture",new V(e.texture)],["blueNoiseTexture",new V(null)],["blueNoiseSize",new V(new se)],["texSize",new V(new se)],["intensity",new V(1)],["jitter",new V(1)],["frame",new V(0)],["deltaTime",new V(0)]]),defines:new Map([["samples",t.samples.toFixed(0)],["samplesFloat",t.samples.toFixed(0)+".0"]])}),this.pointsIndex=0,this.makeOptionsReactive(t)}makeOptionsReactive(e){for(const t of Object.keys(e))Object.defineProperty(this,t,{get(){return e[t]},set(n){switch(e[t]=n,t){case"intensity":case"jitter":this.uniforms.get(t).value=n;break}}}),this[t]=e[t]}initialize(e,...t){super.initialize(e,...t),new $i().load(vs,n=>{n.minFilter=Fe,n.magFilter=Fe,n.wrapS=It,n.wrapT=It,n.colorSpace=rn,this.uniforms.get("blueNoiseTexture").value=n})}update(e,t,n){this.uniforms.get("inputTexture").value=t.texture,this.uniforms.get("deltaTime").value=Math.max(1/1e3,n);const r=e.info.render.frame%65536;this.uniforms.get("frame").value=r,this.uniforms.get("texSize").value.set(window.innerWidth,window.innerHeight);const s=this.uniforms.get("blueNoiseTexture").value;if(s){const{width:a,height:o}=s.source.data;this.uniforms.get("blueNoiseSize").value.set(a,o)}}}const dM=`
		#ifdef USE_SKINNING
		#ifdef BONE_TEXTURE
			uniform sampler2D prevBoneTexture;
			mat4 getPrevBoneMatrix( const in float i ) {
				float j = i * 4.0;
				float x = mod( j, float( boneTextureSize ) );
				float y = floor( j / float( boneTextureSize ) );
				float dx = 1.0 / float( boneTextureSize );
				float dy = 1.0 / float( boneTextureSize );
				y = dy * ( y + 0.5 );
				vec4 v1 = textureLod( prevBoneTexture, vec2( dx * ( x + 0.5 ), y ), 0. );
				vec4 v2 = textureLod( prevBoneTexture, vec2( dx * ( x + 1.5 ), y ), 0. );
				vec4 v3 = textureLod( prevBoneTexture, vec2( dx * ( x + 2.5 ), y ), 0. );
				vec4 v4 = textureLod( prevBoneTexture, vec2( dx * ( x + 3.5 ), y ), 0. );
				mat4 bone = mat4( v1, v2, v3, v4 );
				return bone;
			}
		#else
			uniform mat4 prevBoneMatrices[ MAX_BONES ];
			mat4 getPrevBoneMatrix( const in float i ) {
				mat4 bone = prevBoneMatrices[ int(i) ];
				return bone;
			}
		#endif
		#endif
`,fM=`
#define MAX_BONES 64
                    
${Ee.skinning_pars_vertex}
${dM}

uniform mat4 velocityMatrix;
uniform mat4 prevVelocityMatrix;
varying vec4 prevPosition;
varying vec4 newPosition;

#ifdef renderDepth
varying vec2 vHighPrecisionZW;
#endif
`,pM=`
// Get the current vertex position
transformed = vec3( position );
${Ee.skinning_vertex}
newPosition = velocityMatrix * vec4( transformed, 1.0 );

// Get the previous vertex position
transformed = vec3( position );
${Ee.skinbase_vertex.replace(/mat4 /g,"").replace(/getBoneMatrix/g,"getPrevBoneMatrix")}
${Ee.skinning_vertex.replace(/vec4 /g,"")}
prevPosition = prevVelocityMatrix * vec4( transformed, 1.0 );

gl_Position = newPosition;

#ifdef renderDepth
vHighPrecisionZW = gl_Position.zw;
#endif
`,mM=`
varying vec4 prevPosition;
varying vec4 newPosition;

#ifdef renderDepth
varying vec2 vHighPrecisionZW;
#endif
`,gM=`
vec2 pos0 = (prevPosition.xy / prevPosition.w) * 0.5 + 0.5;
vec2 pos1 = (newPosition.xy / newPosition.w) * 0.5 + 0.5;

vec2 vel = pos1 - pos0;

#ifdef renderDepth
float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
#endif

gl_FragColor = vec4(vel.x, vel.y, 0., 0.);
`,vM={prevVelocityMatrix:{value:new ge},velocityMatrix:{value:new ge},prevBoneTexture:{value:null},boneTexture:{value:null},normalMap:{value:null},normalScale:{value:new se},uvTransform:{value:new Ne}};class xM extends et{constructor(){super({uniforms:Wi.clone(vM),glslVersion:Wn,vertexShader:`
					#include <common>
					#include <uv_pars_vertex>
					#include <displacementmap_pars_vertex>
					#include <normal_pars_vertex>
					#include <morphtarget_pars_vertex>
					#include <logdepthbuf_pars_vertex>
					#include <clipping_planes_pars_vertex>

					#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
						varying vec3 vViewPosition;
					#endif
					
                    ${fM}
        
                    void main() {
						vec3 transformed;

						#include <uv_vertex>

						#include <skinbase_vertex>
						#include <beginnormal_vertex>
						#include <skinnormal_vertex>
						#include <defaultnormal_vertex>

						#include <morphnormal_vertex>
						#include <normal_vertex>
						#include <morphtarget_vertex>
						#include <displacementmap_vertex>
						#include <project_vertex>
						#include <logdepthbuf_vertex>
						#include <clipping_planes_vertex>

						${pM}

						#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
							vViewPosition = - mvPosition.xyz;
						#endif

                    }`,fragmentShader:`
					#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
						varying vec3 vViewPosition;
					#endif

					#ifdef renderDepth
					layout(location = 0) out vec4 gDepth;
					layout(location = 1) out vec4 gVelocity;
					#else
					#define gVelocity gl_FragColor
					#endif

					${mM}
					#include <packing>

					#include <uv_pars_fragment>
					#include <normal_pars_fragment>

					// source: https://knarkowicz.wordpress.com/2014/04/16/octahedron-normal-vector-encoding/
					vec2 OctWrap( vec2 v ) {
						vec2 w = 1.0 - abs( v.yx );
						if (v.x < 0.0) w.x = -w.x;
						if (v.y < 0.0) w.y = -w.y;
						return w;
					}

					vec2 Encode( vec3 n ) {
						n /= ( abs( n.x ) + abs( n.y ) + abs( n.z ) );
						n.xy = n.z > 0.0 ? n.xy : OctWrap( n.xy );
						n.xy = n.xy * 0.5 + 0.5;
						return n.xy;
					}

                    void main() {
						#include <normal_fragment_begin>
                    	#include <normal_fragment_maps>

						${gM.replaceAll("gl_FragColor","gVelocity")}
						vec3 worldNormal = normalize((vec4(normal, 0.) * viewMatrix).xyz);
						gVelocity.ba = Encode(worldNormal);

						#ifdef renderDepth
						gDepth = packDepthToRGBA(fragCoordZ);
						#endif
                    }`}),this.isVelocityMaterial=!0}}const MM=new Te(0),SM=new se,pc=new ge,mc=new ge;class TM extends ht{constructor(e,t,n=!0){if(super("velocityDepthNormalPass"),this.cachedMaterials=new WeakMap,this.visibleMeshes=[],this.needsSwap=!1,!(t instanceof yt))throw new Error(this.constructor.name+" doesn't support cameras of type '"+t.constructor.name+"' yet. Only cameras of type 'PerspectiveCamera' are supported.");this._scene=e,this._camera=t;const r=n?2:1;this.renderTarget=new ci(1,1,r,{minFilter:Fe,magFilter:Fe}),this.renderTarget.depthTexture=new fs(1,1),this.renderTarget.depthTexture.type=$e,n&&(this.renderTarget.texture[0].type=wt,this.renderTarget.texture[0].needsUpdate=!0,this.renderTarget.texture[1].type=$e,this.renderTarget.texture[1].needsUpdate=!0),this.renderDepth=n}setVelocityDepthNormalMaterialInScene(){this.visibleMeshes=gs(this._scene);for(const t of this.visibleMeshes){const n=t.material;let[r,s]=this.cachedMaterials.get(t)||[];if(n!==r){var e;s=new xM,xu(n,s),t.material=s,(e=t.skeleton)!=null&&e.boneTexture&&gu(t),this.cachedMaterials.set(t,[n,s])}t.material=s,t.visible=Ka(t,n),this.renderDepth&&(s.defines.renderDepth="");const a=n.map||n.normalMap||n.roughnessMap||n.metalnessMap;a&&(s.uniforms.uvTransform.value=a.matrix),E0(t,this._camera)}}unsetVelocityDepthNormalMaterialInScene(){for(const e of this.visibleMeshes)e.visible=!0,b0(e,this._camera),e.material=this.cachedMaterials.get(e)[0]}setSize(e,t){var n;this.renderTarget.setSize(e,t),(n=this.lastDepthTexture)==null||n.dispose(),this.lastDepthTexture=new Kg(e,t,Ut),this.lastDepthTexture.minFilter=Fe,this.lastDepthTexture.magFilter=Fe}dispose(){super.dispose(),this.renderTarget.dispose()}get texture(){return Array.isArray(this.renderTarget.texture)?this.renderTarget.texture[1]:this.renderTarget.texture}get depthTexture(){return this.renderTarget.texture[0]}render(e){pc.copy(this._camera.projectionMatrix),mc.copy(this._camera.projectionMatrixInverse),this._camera.view&&(this._camera.view.enabled=!1),this._camera.updateProjectionMatrix(),this._camera.updateMatrixWorld(),this.setVelocityDepthNormalMaterialInScene();const{background:t}=this._scene;this._scene.background=MM,e.setRenderTarget(this.renderTarget),e.copyFramebufferToTexture(SM,this.lastDepthTexture),e.render(this._scene,this._camera),this._scene.background=t,this.unsetVelocityDepthNormalMaterialInScene(),this._camera.view&&(this._camera.view.enabled=!0),this._camera.projectionMatrix.copy(pc),this._camera.projectionMatrixInverse.copy(mc)}}var _M=`#define GLSLIFY 1
varying vec2 vUv;uniform sampler2D inputTexture;uniform sampler2D depthTexture;uniform sampler2D normalTexture;uniform mat4 projectionMatrixInverse;uniform mat4 cameraMatrixWorld;uniform float lumaPhi;uniform float depthPhi;uniform float normalPhi;uniform sampler2D blueNoiseTexture;uniform vec2 blueNoiseRepeat;uniform int index;uniform vec2 resolution;
#include <common>
#include <sampleBlueNoise>
vec3 getWorldPos(float depth,vec2 coord){float z=depth*2.0-1.0;vec4 clipSpacePosition=vec4(coord*2.0-1.0,z,1.0);vec4 viewSpacePosition=projectionMatrixInverse*clipSpacePosition;vec4 worldSpacePosition=cameraMatrixWorld*viewSpacePosition;worldSpacePosition.xyz/=worldSpacePosition.w;return worldSpacePosition.xyz;}
#define luminance(a) dot(vec3(0.2125, 0.7154, 0.0721), a)
vec3 getNormal(vec2 uv,vec4 texel){
#ifdef NORMAL_IN_RGB
return texel.rgb;
#else
return normalize(textureLod(normalTexture,uv,0.).xyz*2.0-1.0);
#endif
}float distToPlane(const vec3 worldPos,const vec3 neighborWorldPos,const vec3 worldNormal){vec3 toCurrent=worldPos-neighborWorldPos;float distToPlane=abs(dot(toCurrent,worldNormal));return distToPlane;}void main(){vec4 depthTexel=textureLod(depthTexture,vUv,0.);if(depthTexel.r==1.0||dot(depthTexel.rgb,depthTexel.rgb)==0.){discard;return;}vec4 texel=textureLod(inputTexture,vUv,0.0);vec3 normal=getNormal(vUv,texel);
#ifdef NORMAL_IN_RGB
float denoised=texel.a;float center=texel.a;
#else
vec3 denoised=texel.rgb;float center=texel.rgb;
#endif
float depth=depthTexel.x;vec3 worldPos=getWorldPos(depth,vUv);float totalWeight=1.0;vec4 blueNoise=sampleBlueNoise(blueNoiseTexture,0,blueNoiseRepeat,resolution);float angle=blueNoise[index];float s=sin(angle),c=cos(angle);mat2 rotationMatrix=mat2(c,-s,s,c);for(int i=0;i<samples;i++){vec2 offset=rotationMatrix*poissonDisk[i];vec2 neighborUv=vUv+offset;vec4 neighborTexel=textureLod(inputTexture,neighborUv,0.0);vec3 neighborNormal=getNormal(neighborUv,neighborTexel);float neighborColor=neighborTexel.a;float sampleDepth=textureLod(depthTexture,neighborUv,0.0).x;vec3 worldPosSample=getWorldPos(sampleDepth,neighborUv);float tangentPlaneDist=abs(dot(worldPos-worldPosSample,normal));float normalDiff=dot(normal,neighborNormal);float normalSimilarity=pow(max(normalDiff,0.),normalPhi);
#ifdef NORMAL_IN_RGB
float lumaDiff=abs(neighborColor-center);
#else
float lumaDiff=abs(luminance(neighborColor)-luminance(center));
#endif
float lumaSimilarity=max(1.0-lumaDiff/lumaPhi,0.0);float depthDiff=1.-distToPlane(worldPos,worldPosSample,normal);float depthSimilarity=max(depthDiff/depthPhi,0.);float w=lumaSimilarity*depthSimilarity*normalSimilarity;denoised+=w*neighborColor;totalWeight+=w;}if(totalWeight>0.)denoised/=totalWeight;
#ifdef NORMAL_IN_RGB
gl_FragColor=vec4(normal,denoised);
#else
gl_FragColor=vec4(denoised,1.);
#endif
}`;function yM(i,e,t,n){const r=2*Math.PI*e/i,s=1/i,a=s,o=[];let l=s,c=0;for(let u=0;u<i;u++){const h=new se(Math.cos(c),Math.sin(c)).multiplyScalar(Math.pow(l,.75)).multiply(n).multiplyScalar(t);o.push(h),l+=a,c+=r}return o}function EM(i){const e=i.length;let t=`const vec2 poissonDisk[samples] = vec2[samples](
`;for(let n=0;n<e;n++){const r=i[n];t+=`    vec2(${r.x}, ${r.y})`,n<e-1&&(t+=","),t+=`
`}return t+=");",t}const gc=_M.replace("#include <sampleBlueNoise>",Ja),ns={iterations:1,radius:8,rings:5.625,lumaPhi:10,depthPhi:2,normalPhi:3.25,samples:16,normalTexture:null};class Qa extends ht{constructor(e,t,n,r=ns){super("PoissionBlurPass"),this.iterations=ns.iterations,this.index=0,r={...ns,...r},this.inputTexture=t,this.fullscreenMaterial=new et({fragmentShader:gc,vertexShader:di,uniforms:{depthTexture:{value:null},inputTexture:{value:null},projectionMatrixInverse:{value:new ge},cameraMatrixWorld:{value:new ge},lumaPhi:{value:5},depthPhi:{value:5},normalPhi:{value:5},resolution:{value:new se},blueNoiseTexture:{value:null},index:{value:0},blueNoiseRepeat:{value:new se}}});const s={type:bt,depthBuffer:!1};this.renderTargetA=new it(1,1,s),this.renderTargetB=new it(1,1,s);const{uniforms:a}=this.fullscreenMaterial;a.inputTexture.value=this.inputTexture,a.depthTexture.value=n,a.projectionMatrixInverse.value=e.projectionMatrixInverse,a.cameraMatrixWorld.value=e.matrixWorld,a.depthPhi.value=r.depthPhi,a.normalPhi.value=r.normalPhi,r.normalTexture?a.normalTexture.value=r.normalTexture:this.fullscreenMaterial.defines.NORMAL_IN_RGB="";for(const o of["radius","rings","samples"])Object.defineProperty(this,o,{get:()=>r[o],set:l=>{r[o]=l,this.setSize(this.renderTargetA.width,this.renderTargetA.height)}});new $i().load(vs,o=>{o.minFilter=Fe,o.magFilter=Fe,o.wrapS=It,o.wrapT=It,o.colorSpace=rn,this.fullscreenMaterial.uniforms.blueNoiseTexture.value=o})}setSize(e,t){this.renderTargetA.setSize(e,t),this.renderTargetB.setSize(e,t),this.fullscreenMaterial.uniforms.resolution.value.set(e,t);const n=yM(this.samples,this.rings,this.radius,new se(1/e,1/t)),r=`const int samples = ${this.samples};
`,s=EM(n);this.fullscreenMaterial.fragmentShader=r+s+`
`+gc,this.fullscreenMaterial.needsUpdate=!0}get texture(){return this.renderTargetB.texture}render(e){this.fullscreenMaterial.uniforms.index.value=0;const t=this.fullscreenMaterial.uniforms.blueNoiseTexture.value;if(t){const{width:n,height:r}=t.source.data;this.fullscreenMaterial.uniforms.blueNoiseRepeat.value.set(this.renderTargetA.width/n,this.renderTargetA.height/r)}for(let n=0;n<2*this.iterations;n++){const r=n%2===0,s=r?this.renderTargetB:this.renderTargetA;this.fullscreenMaterial.uniforms.inputTexture.value=n===0?this.inputTexture:s.texture;const a=r?this.renderTargetA:this.renderTargetB;e.setRenderTarget(a),e.render(this.scene,this.camera),this.fullscreenMaterial.uniforms.index.value=(this.fullscreenMaterial.uniforms.index.value+1)%4}}}Qa.DefaultOptions=ns;class bM extends ht{constructor(e,t,n){super(),this._camera=e,this._scene=t,this.renderTarget=new it(1,1,{type:bt,depthBuffer:!1});const r=n.replace("#include <sampleBlueNoise>",Ja);this.fullscreenMaterial=new et({fragmentShader:r,vertexShader:di,uniforms:{depthTexture:{value:null},normalTexture:{value:null},cameraNear:{value:0},cameraFar:{value:0},viewMatrix:{value:this._camera.matrixWorldInverse},projectionViewMatrix:{value:new ge},projectionMatrixInverse:{value:this._camera.projectionMatrixInverse},cameraMatrixWorld:{value:this._camera.matrixWorld},texSize:{value:new se},blueNoiseTexture:{value:null},blueNoiseRepeat:{value:new se},aoDistance:{value:0},distancePower:{value:0},bias:{value:0},thickness:{value:0},power:{value:0},frame:{value:0}},blending:ut,depthWrite:!1,depthTest:!1,toneMapped:!1}),new $i().load(vs,s=>{s.minFilter=Fe,s.magFilter=Fe,s.wrapS=It,s.wrapT=It,s.colorSpace=rn,this.fullscreenMaterial.uniforms.blueNoiseTexture.value=s})}get texture(){return this.renderTarget.texture}setSize(e,t){this.renderTarget.setSize(e,t),this.fullscreenMaterial.uniforms.texSize.value.set(this.renderTarget.width,this.renderTarget.height)}render(e){const t=+this.fullscreenMaterial.defines.spp;this.fullscreenMaterial.uniforms.frame.value=(this.fullscreenMaterial.uniforms.frame.value+t)%65536,this.fullscreenMaterial.uniforms.cameraNear.value=this._camera.near,this.fullscreenMaterial.uniforms.cameraFar.value=this._camera.far,this.fullscreenMaterial.uniforms.projectionViewMatrix.value.multiplyMatrices(this._camera.projectionMatrix,this._camera.matrixWorldInverse);const n=this.fullscreenMaterial.uniforms.blueNoiseTexture.value;if(n){const{width:r,height:s}=n.source.data;this.fullscreenMaterial.uniforms.blueNoiseRepeat.value.set(this.renderTarget.width/r,this.renderTarget.height/s)}e.setRenderTarget(this.renderTarget),e.render(this.scene,this.camera)}}var AM=`#define GLSLIFY 1
#include <sampleBlueNoise>
uniform sampler2D normalTexture;uniform float cameraNear;uniform float cameraFar;uniform mat4 projectionMatrixInverse;uniform mat4 cameraMatrixWorld;float getViewZ(const float depth){
#ifdef PERSPECTIVE_CAMERA
return perspectiveDepthToViewZ(depth,cameraNear,cameraFar);
#else
return orthographicDepthToViewZ(depth,cameraNear,cameraFar);
#endif
}vec3 getWorldPos(const float depth,const vec2 coord){float z=depth*2.0-1.0;vec4 clipSpacePosition=vec4(coord*2.0-1.0,z,1.0);vec4 viewSpacePosition=projectionMatrixInverse*clipSpacePosition;vec4 worldSpacePosition=cameraMatrixWorld*viewSpacePosition;worldSpacePosition.xyz/=worldSpacePosition.w;return worldSpacePosition.xyz;}vec3 slerp(const vec3 a,const vec3 b,const float t){float cosAngle=dot(a,b);float angle=acos(cosAngle);if(abs(angle)<0.001){return mix(a,b,t);}float sinAngle=sin(angle);float t1=sin((1.0-t)*angle)/sinAngle;float t2=sin(t*angle)/sinAngle;return(a*t1)+(b*t2);}vec3 computeWorldNormal(){vec2 size=vec2(textureSize(depthTexture,0));ivec2 p=ivec2(vUv*size);float c0=texelFetch(depthTexture,p,0).x;float l2=texelFetch(depthTexture,p-ivec2(2,0),0).x;float l1=texelFetch(depthTexture,p-ivec2(1,0),0).x;float r1=texelFetch(depthTexture,p+ivec2(1,0),0).x;float r2=texelFetch(depthTexture,p+ivec2(2,0),0).x;float b2=texelFetch(depthTexture,p-ivec2(0,2),0).x;float b1=texelFetch(depthTexture,p-ivec2(0,1),0).x;float t1=texelFetch(depthTexture,p+ivec2(0,1),0).x;float t2=texelFetch(depthTexture,p+ivec2(0,2),0).x;float dl=abs((2.0*l1-l2)-c0);float dr=abs((2.0*r1-r2)-c0);float db=abs((2.0*b1-b2)-c0);float dt=abs((2.0*t1-t2)-c0);vec3 ce=getWorldPos(c0,vUv).xyz;vec3 dpdx=(dl<dr)? ce-getWorldPos(l1,(vUv-vec2(1.0/size.x,0.0))).xyz:-ce+getWorldPos(r1,(vUv+vec2(1.0/size.x,0.0))).xyz;vec3 dpdy=(db<dt)? ce-getWorldPos(b1,(vUv-vec2(0.0,1.0/size.y))).xyz:-ce+getWorldPos(t1,(vUv+vec2(0.0,1.0/size.y))).xyz;return normalize(cross(dpdx,dpdy));}vec3 getWorldNormal(const vec2 uv){
#ifdef useNormalTexture
vec3 worldNormal=unpackRGBToNormal(textureLod(normalTexture,uv,0.).rgb);worldNormal=(vec4(worldNormal,1.)*viewMatrix).xyz;return normalize(worldNormal);
#else
return computeWorldNormal();
#endif
}
#define PI 3.14159265358979323846264338327950288
vec3 cosineSampleHemisphere(const vec3 n,const vec2 u){float r=sqrt(u.x);float theta=2.0*PI*u.y;vec3 b=normalize(cross(n,vec3(0.0,1.0,1.0)));vec3 t=cross(b,n);return normalize(r*sin(theta)*b+sqrt(1.0-u.x)*n+r*cos(theta)*t);}`,wM=`#define GLSLIFY 1
varying vec2 vUv;uniform sampler2D depthTexture;uniform mat4 projectionViewMatrix;uniform int frame;uniform sampler2D blueNoiseTexture;uniform vec2 blueNoiseRepeat;uniform vec2 texSize;uniform float aoDistance;uniform float distancePower;uniform float bias;uniform float thickness;
#include <packing>
#include <hbao_utils>
float getOcclusion(const vec3 cameraPosition,const vec3 worldPos,const vec3 worldNormal,const float depth,const int seed,inout float totalWeight){vec4 blueNoise=sampleBlueNoise(blueNoiseTexture,seed,blueNoiseRepeat,texSize);vec3 sampleWorldDir=cosineSampleHemisphere(worldNormal,blueNoise.rg);vec3 sampleWorldPos=worldPos+aoDistance*pow(blueNoise.b,distancePower+1.0)*sampleWorldDir;vec4 sampleUv=projectionViewMatrix*vec4(sampleWorldPos,1.);sampleUv.xy/=sampleUv.w;sampleUv.xy=sampleUv.xy*0.5+0.5;float sampleDepth=textureLod(depthTexture,sampleUv.xy,0.0).r;float deltaDepth=depth-sampleDepth;float d=distance(sampleWorldPos,cameraPosition);deltaDepth*=0.001*d*d;float th=thickness*0.01;float theta=dot(worldNormal,sampleWorldDir);totalWeight+=theta;if(deltaDepth<th){float horizon=sampleDepth+deltaDepth*bias*1000.;float occlusion=max(0.0,horizon-depth)*theta;float m=max(0.,1.-deltaDepth/th);occlusion=10.*occlusion*m/d;occlusion=sqrt(occlusion);return occlusion;}return 0.;}void main(){float depth=textureLod(depthTexture,vUv,0.0).r;if(depth==1.0){discard;return;}vec4 cameraPosition=cameraMatrixWorld*vec4(0.0,0.0,0.0,1.0);vec3 worldPos=getWorldPos(depth,vUv);vec3 worldNormal=getWorldNormal(vUv);float ao=0.0,totalWeight=0.0;for(int i=0;i<spp;i++){int seed=i;
#ifdef animatedNoise
seed+=frame;
#endif
float occlusion=getOcclusion(cameraPosition.xyz,worldPos,worldNormal,depth,seed,totalWeight);ao+=occlusion;}if(totalWeight>0.)ao/=totalWeight;ao=clamp(1.-ao,0.,1.);gl_FragColor=vec4(worldNormal,ao);}`;const RM=wM.replace("#include <hbao_utils>",AM);class PM extends bM{constructor(e,t){super(e,t,RM)}}var CM=`#define GLSLIFY 1
uniform sampler2D inputTexture;uniform sampler2D depthTexture;uniform float power;uniform vec3 color;void mainImage(const in vec4 inputColor,const in vec2 uv,out vec4 outputColor){float unpackedDepth=textureLod(depthTexture,uv,0.).r;float ao=unpackedDepth>0.9999 ? 1.0 : textureLod(inputTexture,uv,0.0).a;ao=pow(ao,power);vec3 aoColor=mix(color,vec3(1.),ao);aoColor*=inputColor.rgb;outputColor=vec4(aoColor,inputColor.a);}`;const wa={resolutionScale:1,spp:8,distance:2,distancePower:1,power:2,bias:40,thickness:.075,color:new Te("black"),useNormalPass:!1,velocityDepthNormalPass:null,normalTexture:null,...Qa.DefaultOptions};class dr extends Er{constructor(e,t,n,r,s=wa){if(super("AOEffect",CM,{type:"FinalAOMaterial",uniforms:new Map([["inputTexture",new V(null)],["depthTexture",new V(null)],["power",new V(0)],["color",new V(new Te("black"))]])}),this.lastSize={width:0,height:0,resolutionScale:0},this.composer=e,this.aoPass=r,s={...wa,...s},e.depthTexture||e.createDepthTexture(),this.aoPass.fullscreenMaterial.uniforms.depthTexture.value=e.depthTexture,this.uniforms.get("depthTexture").value=e.depthTexture,s.useNormalPass||s.normalTexture){var a;s.useNormalPass&&(this.normalPass=new Fx(n,t));const o=(a=s.normalTexture)!==null&&a!==void 0?a:this.normalPass.texture;this.aoPass.fullscreenMaterial.uniforms.normalTexture.value=o,this.aoPass.fullscreenMaterial.defines.useNormalTexture=""}this.poissionDenoisePass=new Qa(t,this.aoPass.texture,e.depthTexture),this.makeOptionsReactive(s)}makeOptionsReactive(e){for(const t of Object.keys(e))Object.defineProperty(this,t,{get(){return e[t]},set(n){if(n!=null)switch(e[t]=n,t){case"spp":this.aoPass.fullscreenMaterial.defines.spp=n.toFixed(0),this.aoPass.fullscreenMaterial.needsUpdate=!0;break;case"distance":this.aoPass.fullscreenMaterial.uniforms.aoDistance.value=n;break;case"resolutionScale":this.setSize(this.lastSize.width,this.lastSize.height);break;case"power":this.uniforms.get("power").value=n;break;case"color":this.uniforms.get("color").value.copy(new Te(n));break;case"iterations":case"radius":case"rings":case"samples":this.poissionDenoisePass[t]=n;break;case"lumaPhi":case"depthPhi":case"normalPhi":this.poissionDenoisePass.fullscreenMaterial.uniforms[t].value=Math.max(n,1e-4);break;default:t in this.aoPass.fullscreenMaterial.uniforms&&(this.aoPass.fullscreenMaterial.uniforms[t].value=n)}},configurable:!0}),this[t]=e[t]}setSize(e,t){var n;e===void 0||t===void 0||e===this.lastSize.width&&t===this.lastSize.height&&this.resolutionScale===this.lastSize.resolutionScale||((n=this.normalPass)==null||n.setSize(e,t),this.aoPass.setSize(e*this.resolutionScale,t*this.resolutionScale),this.poissionDenoisePass.setSize(e,t),this.lastSize={width:e,height:t,resolutionScale:this.resolutionScale})}update(e){var t;const n=this.composer.passes.some(r=>{var s;return r.enabled&&!r.skipRendering&&((s=r.effects)==null?void 0:s.some(a=>a instanceof Za))});n&&!("animatedNoise"in this.aoPass.fullscreenMaterial.defines)?(this.aoPass.fullscreenMaterial.defines.animatedNoise="",this.aoPass.fullscreenMaterial.needsUpdate=!0):!n&&"animatedNoise"in this.aoPass.fullscreenMaterial.defines&&(delete this.aoPass.fullscreenMaterial.defines.animatedNoise,this.aoPass.fullscreenMaterial.needsUpdate=!0),this.iterations>0?this.uniforms.get("inputTexture").value=this.poissionDenoisePass.texture:this.uniforms.get("inputTexture").value=this.aoPass.texture,(t=this.normalPass)==null||t.render(e),this.aoPass.render(e),this.poissionDenoisePass.render(e)}}dr.DefaultOptions=wa;class $a extends dr{constructor(e,t,n,r=dr.DefaultOptions){const s=new PM(t,n);r={...dr.DefaultOptions,...$a.DefaultOptions,...r},super(e,t,n,s,r),this.lastSize={width:0,height:0,resolutionScale:0},r={...dr.DefaultOptions,...r}}}let eo=!1;/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)&&(eo=!0);let er,xs;qt.enabled=!0;const cn=new Ma,dn=new eu({powerPreference:"high-performance",antialias:!1,stencil:!1,depth:!1,alpha:!1,preserveDrawingBuffer:!0});dn.outputColorSpace=Se;dn.toneMapping=bc;dn.toneMappingExposure=3.2;dn.useLegacyLights=!1;let vc;const LM=new wv().setPath("assets/"),la=new ax().setPath("assets/");new $i().setPath("assets/");let ca;la.load("rural_asphalt_road_2k.hdr",function(i){i.mapping=gr,ca=new lx(i),ca.scale.setScalar(1e3),cn.background=i,cn.add(ca),la.load("archviz.ue.test2_denoised_ao.hdr",function(e){e.flipY=!1,e.channel=1,e.colroSpace=Se,console.log("aomap",e),la.load("archviz.ue.test2_denoised_dir.hdr",function(t){t.flipY=!1,t.colroSpace=Se,t.channel=1,console.log("lightmap",t),LM.load("archviz.compressed.glb",function(n){console.log("archviz.compressed.glb, aomap",n),vc=n.scene.children[0],vc.children.forEach(r=>{const{material:s}=r;let a=new ps;a.color=s.color,["CouchFabric","Floor","Floor.External","TableCenter","Carpet","PictureFrame.Picture2","PictureFrame.Picture"].indexOf(s.name)>-1&&(a.map=s.map,a.map.colorSpace=jt,(s.name=="Floor"||s.name=="Carpet"||s.name=="TableCenter")&&(a.map.colorSpace=Se)),a.aoMap=e,["Floor","Floor.External","TableCenter","TableEdge","TrackingLightRail","PictureFrame.Inner","PictureFrame.Picture","PictureFrame.Picture2"].indexOf(s.name)>-1?(a.aoMapIntensity=.95,s.name.endsWith(".External")?(a.envMap=i,a.envMapIntensity=1):(a.envMap=xs.texture,s.name=="TableCenter"?a.envMapIntensity=1.75:a.envMapIntensity=4,s.name.startsWith("PictureFrame")&&s.name!="PictureFrame.Outter"&&(a.envMapIntensity=1))):s.name=="CouchFabric"?a.aoMapIntensity=.1:a.aoMapIntensity=.25,s.name.startsWith("PictureFrame")&&s.name!="PictureFrame.Outter"&&(a.aoMapIntensity=.5),s.name=="TableCenter"&&(a.aoMapIntensity=0),a.lightMap=t,a.lightMapIntensity=2,s.name=="CouchFabric"&&(a.lightMapIntensity=4),s.roughnessMap&&(a.roughnessMap=s.roughnessMap),["Floor","Floor.External"].indexOf(s.name)>-1?a.roughness=.15:a.roughness=s.roughness*.5,s.normalMap&&(a.normalMap=s.normalMap,["Floor.External"].indexOf(s.name)>-1?a.normalMap.colorSpace=Se:a.normalMap.colorSpace=jt),s.name=="TrackingLightLens"&&(a.map=null,a.lightMap=null,a.aoMap=null,a.emissive=new Te(255/255,220/255,128/255),a.emissiveIntensity=3),a.name=s.name,console.log(s),r.material=a,!r.material.name.endsWith(".External")&&(r.material.onBeforeCompile=function(o){o.uniforms.cubeMapSize={value:new C(6,6,4)},o.uniforms.cubeMapPos={value:new C(0,1,0)},o.uniforms.flipEnvMap.value=!0,console.log("uniforms",o.uniforms),o.vertexShader=`varying vec3 vWorldPosition;
`+o.vertexShader,o.vertexShader=o.vertexShader.replace("#include <worldpos_vertex>",NM),o.fragmentShader=`
          uniform vec3 cubeMapSize;
          uniform vec3 cubeMapPos;
          varying vec3 vWorldPosition;
          
          vec3 parallaxCorrectNormal( vec3 v, vec3 cubeSize, vec3 cubePos ) {

            vec3 nDir = normalize( v );
            vec3 rbmax = (   .5 * ( cubeSize - cubePos ) - vWorldPosition ) / nDir;
            vec3 rbmin = ( - .5 * ( cubeSize - cubePos ) - vWorldPosition ) / nDir;
          
            vec3 rbminmax;
            rbminmax.x = ( nDir.x > 0. ) ? rbmax.x : rbmin.x;
            rbminmax.y = ( nDir.y > 0. ) ? rbmax.y : rbmin.y;
            rbminmax.z = ( nDir.z > 0. ) ? rbmax.z : rbmin.z;
          
            float correction = min( min( rbminmax.x, rbminmax.y ), rbminmax.z );
            vec3 boxIntersection = vWorldPosition + nDir * correction;
          
            return boxIntersection - cubePos;
          }

          `+o.fragmentShader,o.fragmentShader=o.fragmentShader.replace("#include <envmap_physical_pars_fragment>",FM),console.log(o)},console.log(r.material))}),cn.add(n.scene),cn.traverse(r=>{console.log("scene.obj traverse",r),r.isMesh&&(console.log(r.material.name),["TableCenter","TableEdge","TableBottom","TableLegs","Couch.Feet","CouchFabric"].indexOf(r.material.name)>-1&&(console.log("hiding:",r.material.name),r.visible=!1))}),er.update(dn,cn),cn.traverse(r=>{console.log("scene.obj traverse",r),r.isMesh&&["TableCenter","TableEdge","TableBottom","TableLegs","Couch.Feet","CouchFabric"].indexOf(r.material.name)>-1&&(r.visible=!0)}),document.getElementById("spinner").remove(),Tu()},void 0,function(n){console.error(n)})})})});let Ra=eo?85:45;const Ct=new yt(Ra,window.innerWidth/window.innerHeight,.1,2e3);Ct.position.set(2.27,1,-.76);Ct.lookAt(0,1.5,0);xs=new Yc(512);xs.texture.type=bt;er=new Xc(.01,1e3,xs);er.renderTarget.texture.generateMipmaps=!0;er.renderTarget.minFilter=vr;er.renderTarget.mapping=oi;er.position.set(0,1,0);new ox(Ct,dn.domElement);const Su=()=>{Ct.aspect=window.innerWidth/window.innerHeight,Ct.updateProjectionMatrix(),dn.setSize(window.innerWidth,window.innerHeight),dn.setPixelRatio(Math.min(3,window.devicePixelRatio))};Su();addEventListener("resize",Su);addEventListener("wheel",i=>{i.shiftKey&&(Ra+=i.wheelDeltaY/120,Ct.fov=Ra,Ct.updateProjectionMatrix())},{passive:!1});const bn=new zx(dn),DM=new zi(cn,Ct);bn.addPass(DM);const to=new TM(cn,Ct);bn.addPass(to);const UM={resolutionScale:1,spp:32,distance:.21,distancePower:10,power:4,bias:16,thickness:.01,color:0,useNormalPass:!1,velocityDepthNormalPass:null,normalTexture:null,iterations:1,radius:10,samples:5};let $r;const xc=new hM(to);let Mc,Sc;const IM=()=>{if(eo)console.log("is phone"),$r=new ur(Ct,xc),bn.addPass($r),bn.addPass(new ur(Ct,new ic({radius:1,intensity:2})));else{console.log("not phone"),Sc=new $a(bn,Ct,cn,UM),$r=new ur(Ct,xc,Sc),bn.addPass($r),bn.addPass(new ur(Ct,new ic({radius:2,intensity:2}))),Mc=new Za(cn,Ct,to);const i=new ur(Ct,Mc);bn.addPass(i)}};IM();document.body.appendChild(dn.domElement);const Tu=()=>{requestAnimationFrame(Tu),bn.render()};var NM=`
#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0

	vec4 worldPosition = vec4( transformed, 1.0 );

	#ifdef USE_INSTANCING

		worldPosition = instanceMatrix * worldPosition;

	#endif

	worldPosition = modelMatrix * worldPosition;

  vWorldPosition = worldPosition.xyz;

#endif
`,FM=`
#ifdef USE_ENVMAP

	vec3 getIBLIrradiance( const in vec3 normal ) {

		#ifdef ENVMAP_TYPE_CUBE_UV

			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );

      worldNormal = parallaxCorrectNormal( worldNormal, cubeMapSize, cubeMapPos );

			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );

			return PI * envMapColor.rgb * envMapIntensity;

		#else

			return vec3( 0.0 );

		#endif

	}


	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {

		#ifdef ENVMAP_TYPE_CUBE_UV

			vec3 reflectVec = reflect( - viewDir, normal );

			// Mixing the reflection with the normal is more accurate and keeps rough objects from gathering light from behind their tangent plane.
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );

			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );

      reflectVec = parallaxCorrectNormal( reflectVec, cubeMapSize, cubeMapPos );

			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );

			return envMapColor.rgb * envMapIntensity;

		#else

			return vec3( 0.0 );

		#endif

	}

	#ifdef USE_ANISOTROPY

		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {

			#ifdef ENVMAP_TYPE_CUBE_UV

			  // https://google.github.io/filament/Filament.md.html#lighting/imagebasedlights/anisotropy
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );

				return getIBLRadiance( viewDir, bentNormal, roughness );

			#else

				return vec3( 0.0 );

			#endif

		}

	#endif

#endif
`;
//# sourceMappingURL=index-432a2225.js.map
