﻿// ================================================================================
// SuperMap IS .NET 客户端程序，版权所有，北京超图软件股份有限公司，2000-2009。
// 本程序只能在有效的授权许可下使用。未经许可，不得以任何手段擅自使用或传播。 
// 作 者:  SuperMap IS Web Team
// 版 本:  $Id: SuperMap.IS.NavigationControl.js,v 1.28 2009/09/10 00:12:21 zengyw Exp $
// 文 件:  SuperMap.IS.NavigationControl.js
// 描 述:  AjaxScripts NavigationControl 类 
// 更 新:  $Date: 2009/09/10 00:12:21 $
// ================================================================================
SuperMap.IS.NavigationControl=function(L,S,I){var C=false;this.backgroundUrl;this.navigationRate;this.navigationInterval;this.width;this.height;L=_GetDomElement(L);var D=L.id;var J=0;var F=this;var E;this.Destroy=R;this.Update=N;var Q="px";var H="px";if(S){S.AttachEvent("oninit",M);S.AttachEvent("ondestroying",R)}function M(){N();L.onmouseover=P;L.onmousedown=B;L.onmousemove=T;L.onmouseup=K;L.onmouseout=K}function R(){if(S){S.DetachEvent("oninit",M);S.DetachEvent("ondestroying",R)}D=null;J=null;F=null;E=null;L.innerHTML="";L=I=null}function G(){F.backgroundUrl="images/navigation.gif";if(I&&typeof (I.backgroundUrl)!="undefined"){F.backgroundUrl=I.backgroundUrl}F.navigationRate=10;if(I&&typeof (I.navigationRate)!="undefined"){F.navigationRate=I.navigationRate}F.navigationInterval=5;if(I&&typeof (I.navigationInterval)!="undefined"){F.navigationInterval=I.navigationInterval}F.width=154;if(I&&typeof (I.width)!="undefined"){H=A(I.width);F.width=I.width.toString().replace(H,"")}F.height=112;if(I&&typeof (I.height)!="undefined"){Q=A(I.height);F.height=I.height.toString().replace(Q,"")}}function B(U){C=true;T(U)}function T(Y){if(!C){return }C=false;var Y=_GetEvent(Y);var V=document.getElementById(D);var X=V.offsetWidth/2;var W=V.offsetHeight/2;var U=Y.offsetX-X;var Z=W-Y.offsetY;J=Math.atan(Z/U)*180/Math.PI;if(U<0){J+=180}C=true;return false}function K(U){C=false;S.StopDynamicPan()}function P(){if(!C){setTimeout(P,F.navigationInterval);return }if(J>=-30&&J<30){S.Pan(F.navigationRate,0,true)}else{if(J>=30&&J<60){S.Pan(F.navigationRate,-1*F.navigationRate,true)}else{if(J>=60&&J<120){S.Pan(0,-1*F.navigationRate,true)}else{if(J>=120&&J<150){S.Pan(-1*F.navigationRate,-1*F.navigationRate,true)}else{if(J>=150&&J<210){S.Pan(-1*F.navigationRate,0,true)}else{if(J>=210&&J<240){S.Pan(-1*F.navigationRate,F.navigationRate,true)}else{if(J>=240&&J<=270||J<-60&&J>=-90){S.Pan(0,F.navigationRate,true)}else{if(J>=-60&&J<-30){S.Pan(F.navigationRate,F.navigationRate,true)}}}}}}}}if(C){setTimeout(P,F.navigationInterval)}return false}function O(){var W=new Object();W.backgroundImageUrl=F.backgroundImageUrl;W.navigationInterval=F.navigationInterval;W.navigationRate=F.navigationRate;W.width=F.width;W.height=F.height;var U=_ToJSON(W);var V=document.getElementById(L.id+"_hiddenProperty");if(V){V.value=U}}function N(){G();if(!E){E=new Image()}if(E.parentNode){E.parentNode.removeChild(E)}E.src=F.backgroundUrl;E.style.width=F.width+H;E.style.height=F.height+Q;L.appendChild(E);O()}function A(U){if(U.toString().indexOf("px")!=-1){return"px"}else{if(U.toString().indexOf("%")!=-1){return"%"}}return"px"}}