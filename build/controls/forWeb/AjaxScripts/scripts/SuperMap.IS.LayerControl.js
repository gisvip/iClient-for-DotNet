﻿//================================================================================ 
// SuperMap IS .NET 客户端程序，版权所有，北京超图软件股份有限公司，2000-2008。 
// 本程序只能在有效的授权许可下使用。未经许可，不得以任何手段擅自使用或传播。 
// 作 者:  SuperMap IS Web Team 
// 版 本:  $Id: SuperMap.IS.LayerControl.js,v 1.78 2011/02/15 09:33:43 hubq Exp $
// 文 件:  SuperMap.IS.LayerControl.js 
// 描 述:  AjaxScripts 图例控件 
// 更 新:  $Date: 2011/02/15 09:33:43 $ 
//================================================================================
SuperMap.IS.LayerControl=function(v,k,J){var m=null;var AL=null;var AI=null;var f=false;var AM=false;v=_GetDomElement(v);var w=v.id;var AK=false;var Z=1;var P=false;if(J&&typeof (J.isNeedTitle)!="undefined"){P=J.isNeedTitle}var G=true;if(J&&typeof (J.isShowInCurrentPage)!="undefined"){G=J.isShowInCurrentPage}var p=new Array();var O=new Array();var AJ;var T;var U;var Q;var y="White";if(J&&typeof (J.headerBackColor)!="undefined"){y=J.headerBackColor}this.headerFont=new SuperMap.IS.Font();if(J&&typeof (J.headerFont)!="undefined"){var H=eval("("+J.headerFont+")");this.headerFont.FromJSON(H);H=null}var c="Black";if(J&&typeof (J.headerForeColor)!="undefined"){c=J.headerForeColor}var r="White";if(J&&typeof (J.itemBackColor)!="undefined"){r=J.itemBackColor}this.itemFont=new SuperMap.IS.Font();if(J&&typeof (J.itemFont)!="undefined"){var n=eval("("+J.itemFont+")");this.itemFont.FromJSON(n);n=null}var a="Black";if(J&&typeof (J.itemForeColor)!="undefined"){a=J.itemForeColor}this.layerNameText="LayerName";if(J&&typeof (J.layerNameText)!="undefined"){this.layerNameText=J.layerNameText}this.visibleText="Visible";if(J&&typeof (J.visibleText)!="undefined"){this.visibleText=J.visibleText}this.queryableText="Queryable";if(J&&typeof (J.queryableText)!="undefined"){this.queryableText=J.queryableText}this.submitButtonText="Refresh";if(J&&typeof (J.submitButtonText)!="undefined"){this.submitButtonText=J.submitButtonText}this.resetButtonText="Reset";if(J&&typeof (J.resetButtonText)!="undefined"){this.resetButtonText=J.resetButtonText}this.buttonCssClass="";if(J&&typeof (J.buttonCssClass)!="undefined"){this.buttonCssClass=J.buttonCssClass}this.checkBoxCssClass="";if(J&&typeof (J.checkBoxCssClass)!="undefined"){this.checkBoxCssClass=J.checkBoxCssClass}this.separator="@";if(J&&typeof (J.separator)!="undefined"){this.separator=J.separator}this.overFlowEnabled=true;if(J&&typeof (J.overFlowEnabled)!="undefined"){this.overFlowEnabled=J.overFlowEnabled}this.quickSubmitEnabled=false;if(J&&typeof (J.quickSubmitEnabled)!="undefined"){this.quickSubmitEnabled=J.quickSubmitEnabled}this.visibleEnabled=true;if(J&&typeof (J.visibleEnabled)!="undefined"){this.visibleEnabled=J.visibleEnabled}this.queryableEnabled=true;if(J&&typeof (J.queryableEnabled)!="undefined"){this.queryableEnabled=J.queryableEnabled}this.expand=false;if(J&&typeof (J.expand)!="undefined"){this.expand=J.expand}var V=false;if(J&&typeof (J.isDescendServer)!="undefined"){V=J.isDescendServer}var x="caption";if(J&&typeof (J.sortType)!="undefined"){x=J.sortType}var AE=16;if(J&&J.resourceWidth){AE=J.resourceWidth}var AG=16;if(J&&J.resourceHeight){AG=J.resourceHeight}var E=true;if(J&&J.themeNameEnabled){E=J.themeNameEnabled}this.layerFilter=null;var M=this;var l=null;var AC=null;this.Destroy=K;this.SetLayerContextMenu=S;this.SaveLayerStatus=D;this.SortLayerItem=AD;this.Update=Y;this.AttachEvent=X;this.DetachEvent=g;if(k){k.AttachEvent("oninit",z);k.AttachEvent("ondestroying",K)}function z(){if(AK){return }if(l){if(l.parentNode){l.parentNode.removeChild(l)}l=null}l=document.createElement("div");var AQ="px";var AO="px";var AP=v.style.pixelWidth;if(J&&typeof (J.width)!="undefined"){AO=u(J.width);AP=J.width.toString().replace(AO,"")}var AN=v.style.pixelHeight;if(J&&typeof (J.height)!="undefined"){AQ=u(J.height);AN=J.height.toString().replace(AQ,"")}l.style.width=AP+AO;l.style.height=AN+AQ;l.style.position="relative";v.appendChild(l);if(M.overFlowEnabled){l.style.overflow="auto";l.style.overflowX="auto";l.style.overflowY="auto"}AK=true;m=k;AL=k.layers;o();e();h();AA();q();T=k.mapName;if(k){k.AttachEvent("onendswitchmap",Y);k.AttachEvent("onchangelayer",Y)}}function u(AN){if(AN.toString().indexOf("px")!=-1){return"px"}else{if(AN.toString().indexOf("%")!=-1){return"%"}}return"px"}function K(){if(m){m.DetachEvent("onendswitchmap",Y);m.DetachEvent("onchangelayer",Y);k.DetachEvent("oninit",z);k.DetachEvent("ondestroying",K)}AL=null;w=null;AK=null;Z=null;P=null;G=null;p=null;O=null;AJ=null;T=null;U=null;Q=null;y=null;M.headerFont.Destroy();M.headerFont=null;c=null;r=null;M.itemFont.Destroy();M.itemFont=null;a=null;if(v){v.innerHTML=""}M=null;v=null}function q(){var AN=document.getElementById(v.id+"_hiddenLayerContextMenu");if(AN&&AN.value){var AO=AN.value;AJ=_JSONToAction(AO);S(AJ)}}function e(){var AN=document.getElementById(v.id+"_hiddenFilter");if(AN){Q=AN.value.split(",")}}function h(){var AN=document.getElementById(v.id+"_hiddenLayerItems");if(AN&&AN.value){AI=eval(AN.value)}else{s(k.layers)}}function o(){U=new Array();for(var AN=0;AN<k.layers.length;AN++){U[AN]=AN}}function s(AO){if(!AO){return }if(AI){AI=null}AI=new Array();for(var AN=0;AN<AO.length;AN++){AI[AN]=new SuperMap.IS.LayerItem();AI[AN].caption=AO[AN].caption;AI[AN].visibleChecked=AO[AN].visible;AI[AN].queryableChecked=AO[AN].queryable;AI[AN].value=AN}b()}function AA(){var AS;var AT="";AT+="<table>";if(P){AT+="<tr><td ColSpan=4 align=center valign=middle>"+SuperMap.IS.LayerControlResource.title+" ("+k.mapName+")</td></tr>"}if(typeof (V)=="boolean"){d(x,V);V=null}var AN="";var Ah="";AN+="<tr style='background-color:"+y+";color:"+c+";font-family:"+M.headerFont.fontFamily.name+";font-size:"+M.headerFont.size+";";if(M.headerFont.bold){AN+="font-weight:bold;"}if(M.headerFont.italic){AN+="font-style:itlic;"}if(M.headerFont.underline&&M.headerFont.strikeout){AN+="text-decoration:underline line-through;"}else{if(M.headerFont.underline){AN+="text-decoration:underline;"}else{if(M.headerFont.strikeout){AN+="text-decoration:line-through;"}}}AN+="'>";Ah="<td ColSpan=2>"+M.layerNameText+"</td>";if(M.visibleEnabled){Ah+="<td>"+M.visibleText+"</td>"}if(M.queryableEnabled){Ah+="<td>"+M.queryableText+"</td>"}AN+=Ah+"</tr>";AT+=AN;var AY=new SuperMap.IS.ResourceParam();AY.width=AE;AY.height=AG;for(var Af=0;Af<U.length;Af++){var Ac=U[Af];if(AI[Ac].renderStyle==2){continue}if(!AL[Ac]){continue}if(Q&&Q[Ac]=="false"){continue}if(M.layerFilter&&!M.layerFilter(AL[Ac])){continue}var AX="";var AV="";switch(AL[Ac].type){case SuperMap.IS.LayerType.point:AV=0;break;case SuperMap.IS.LayerType.line:AV=1;break;case SuperMap.IS.LayerType.polygon:AV=2;break;case SuperMap.IS.LayerType.grid:AV=2;break;case SuperMap.IS.LayerType.dem:AV=2;break;default:break}var Ag=AL[Ac].name+"_StyleIMG";AY.style=AL[Ac].style;AY.resourceType=AV;AY.imageFormat=Z;AX="<tr style='background-color:"+r+";color:"+a+";font-family:"+M.itemFont.fontFamily.name+";font-size:"+M.itemFont.size+";";if(M.itemFont.bold){AX+="font-weight:bold;"}if(M.itemFont.italic){AX+="font-style:itlic;"}if(M.itemFont.underline&&M.itemFont.strikeout){AX+="text-decoration:underline line-through;"}else{if(M.itemFont.underline){AX+="text-decoration:underline;"}else{if(M.itemFont.strikeout){AX+="text-decoration:line-through;"}}}AX+="'>";var AQ=false;if(AL[Ac].themeUnique||AL[Ac].themeRange||AL[Ac].themeGraph||AL[Ac].themeGraduatedSymbol||AL[Ac].themeLabel||AL[Ac].themeDotDensity||AL[Ac].themeGridRange||AL[Ac].themeCustom){AQ=true}AX+='<td valign="top" width="20px">';if(AQ){if(M.expand){AX+='<img id="Switch_'+w+"_"+AL[Ac].name+'_Themes" src="images/expand.gif"'}else{AX+='<img id="Switch_'+w+"_"+AL[Ac].name+'_Themes" src="images/collapse.gif"'}}AX+="</td><td>";if(AL[Ac].type==SuperMap.IS.LayerType.point||AL[Ac].type==SuperMap.IS.LayerType.line||AL[Ac].type==SuperMap.IS.LayerType.polygon){AX+='<img id="'+Ag+'"  width='+AE+" height="+AG+' src="'+k.GenerateResourceRequest(AY)+'" >'}else{if(AL[Ac].type==SuperMap.IS.LayerType.network){AX+='<img id="'+Ag+'" width='+AE+" height="+AG+' src="images/Network.gif" >'}else{if(AL[Ac].type==SuperMap.IS.LayerType.text){AX+='<img id="'+Ag+'" width='+AE+" height="+AG+' src="images/Text.gif" >'}else{if(AL[Ac].type==SuperMap.IS.LayerType.image){AX+='<img id="'+Ag+'" width='+AE+" height="+AG+' src="images/Image.gif" >'}else{if(AL[Ac].type==SuperMap.IS.LayerType.mrSID){AX+='<img id="'+Ag+'"  width='+AE+" height="+AG+' src="images/MRSID.gif" >'}else{if(AL[Ac].type==SuperMap.IS.LayerType.grid){AX+='<img id="'+Ag+'"  width='+AE+" height="+AG+' src="images/GRID.gif" >'}else{if(AL[Ac].type==SuperMap.IS.LayerType.dem){AX+='<img id="'+Ag+'"  width='+AE+" height="+AG+' src="images/Dem.gif" >'}else{if(AL[Ac].type==SuperMap.IS.LayerType.ecw){AX+='<img id="'+Ag+'"  width='+AE+" height="+AG+' src="images/Ecw.gif" >'}else{if(AL[Ac].type==SuperMap.IS.LayerType.cad){AX+='<img id="'+Ag+'"  width='+AE+" height="+AG+' src="images/CAD.gif" >'}else{AX+='<img id="'+Ag+'"  width='+AE+" height="+AG+' src="images/spacer.gif" >'}}}}}}}}}AX+='<span style="font-weight:bold" oncontextmenu =\''+w+".OnContextMenu(event,"+Ac+");return false;'>"+AI[Ac].caption.split(M.separator)[0]+"</span>";if(M.expand){AX+='<table id="'+w+"_"+AL[Ac].name+'_Themes" style="display:block">'}else{AX+='<table id="'+w+"_"+AL[Ac].name+'_Themes" style="display:none">'}var Ae=AL[Ac].themeUnique;if(Ae!=null){AX+=AF(Ac,"Unique",Ae,AV);AX+=t()}var Ab=AL[Ac].themeRange;if(Ab!=null){AX+=AF(Ac,"Range",Ab,AV);AX+=t()}var Aa=AL[Ac].themeGraph;if(Aa!=null){AX+=AF(Ac,"Graph",Aa,AV);AX+=t()}var AW=AL[Ac].themeGraduatedSymbol;if(AW!=null){AX+=AF(Ac,"GraduatedSymbol",AW,AV);AX+=t()}var AR=AL[Ac].themeLabel;if(AR!=null){AX+=AF(Ac,"Label",AR,AV);AX+=t()}var AU=AL[Ac].themeDotDensity;if(AU!=null){AX+=AF(Ac,"DotDensity",AU,AV);AX+=t()}var Ad=AL[Ac].themeGridRange;if(Ad!=null){AX+=AF(Ac,"GridRange",Ad,AV);AX+=t()}var AZ=AL[Ac].themeCustom;if(AZ!=null){AX+=AF(Ac,"Custom",AZ,AV);AX+=t()}AX+="</table></td>";if(M.visibleEnabled){AX+="<td valign=top><input type='checkbox' id='"+v.id+"_"+AL[Ac].name+":V'";if(M.checkBoxCssClass){AX+="class='"+M.checkBoxCssClass+"'"}if(AI[Ac].renderStyle=1){AX+=" readonly=true "}if(AI[Ac].visibleChecked){AX+="checked='checked'  /></td>"}else{AX+=" /></td>"}}if(M.queryableEnabled){AX+="<td valign=top><input type='checkbox' id='"+v.id+"_"+AL[Ac].name+":Q'";if(M.checkBoxCssClass){AX+="class='"+M.checkBoxCssClass+"'"}if(AI[Ac].renderStyle=1){AX+=" readonly=true "}if(AI[Ac].queryableChecked){AX+="checked='checked'  /></td>"}else{AX+=" /></td>"}}AX+="</tr>";AT+=AX}AN="<tr>";Ah="<td ColSpan=2><input type='button'  id='save' value='"+M.submitButtonText+"'";if(M.buttonCssClass){Ah+="class='"+M.buttonCssClass+"'"}Ah+="/>";Ah+="<input type='reset' id='reset' value='"+M.resetButtonText+"'";if(M.buttonCssClass){Ah+="class='"+M.buttonCssClass+"'"}Ah+=" /></td>";if(M.visibleEnabled){Ah+="<td><input type='checkbox' id='"+v.id+"_CheckVisibleAll'";if(M.checkBoxCssClass){Ah+="class='"+M.checkBoxCssClass+"'"}if(AM){Ah+=" checked "}Ah+="/></td>"}if(M.queryableEnabled){Ah+="<td><input type='checkbox' id='"+v.id+"_CheckQueryableAll'";if(M.checkBoxCssClass){Ah+="class='"+M.checkBoxCssClass+"'"}if(f){Ah+=" checked "}Ah+=" /></td>"}AN+=Ah+"</tr>";AT+=AN;AT+="</table>";var AP=document.createElement("form");AP.id="layersForm";AP.innerHTML=AT;var AO=document.getElementById("layersForm");if(l.contains(AO)){l.removeChild(AO)}l.appendChild(AP);F("save",D);F(v.id+"_CheckVisibleAll",AB);F(v.id+"_CheckQueryableAll",A);for(var Af=0;Af<U.length;Af++){var Ac=U[Af];var AQ=false;if(AI[Ac].renderStyle==2){continue}if(!AL[Ac]){continue}if(Q&&Q[Ac]=="false"){continue}if(M.layerFilter&&!M.layerFilter(AL[Ac])){continue}if(AL[Ac].themeUnique||AL[Ac].themeRange||AL[Ac].themeGraph||AL[Ac].themeGraduatedSymbol||AL[Ac].themeLabel||AL[Ac].themeDotDensity||AL[Ac].themeGridRange||AL[Ac].themeCustom){AQ=true}if(AQ){F("Switch_"+w+"_"+AL[Ac].name+"_Themes",function(Ai){L(Ai)})}var Ae=AL[Ac].themeUnique;if(Ae!=null){F("Switch_"+w+"_"+AL[Ac].name+"_Unique",function(Ai){L(Ai)});if(M.quickSubmitEnabled){F(w+"_"+Ac+"_Unique",function(Ai){I(Ai)})}}var Ab=AL[Ac].themeRange;if(Ab!=null){F("Switch_"+w+"_"+AL[Ac].name+"_Range",function(Ai){L(Ai)});if(M.quickSubmitEnabled){F(w+"_"+Ac+"_Range",function(Ai){I(Ai)})}}var Aa=AL[Ac].themeGraph;if(Aa!=null){F("Switch_"+w+"_"+AL[Ac].name+"_Graph",function(Ai){L(Ai)});if(M.quickSubmitEnabled){F(w+"_"+Ac+"_Graph",function(Ai){I(Ai)})}}var AW=AL[Ac].themeGraduatedSymbol;if(AW!=null){F("Switch_"+w+"_"+AL[Ac].name+"_GraduatedSymbol",function(Ai){L(Ai)});if(M.quickSubmitEnabled){F(w+"_"+Ac+"_GraduatedSymbol",function(Ai){I(Ai)})}}var AR=AL[Ac].themeLabel;if(AR!=null){if(M.quickSubmitEnabled){F(w+"_"+Ac+"_Label",function(Ai){I(Ai)})}}var AU=AL[Ac].themeDotDensity;if(AU!=null){F("Switch_"+w+"_"+AL[Ac].name+"_DotDensity",function(Ai){L(Ai)});if(M.quickSubmitEnabled){F(w+"_"+Ac+"_DotDensity",function(Ai){I(Ai)})}}var Ad=AL[Ac].themeGridRange;if(Ad!=null){F("Switch_"+w+"_"+AL[Ac].name+"_GridRange",function(Ai){L(Ai)});if(M.quickSubmitEnabled){F(w+"_"+Ac+"_GridRange",function(Ai){I(Ai)})}}var AZ=AL[Ac].themeCustom;if(AZ!=null){if(M.quickSubmitEnabled){F(w+"_"+Ac+"_Custom",function(Ai){I(Ai)})}}if(M.visibleEnabled&&M.quickSubmitEnabled){F(v.id+"_"+AL[Ac].name+":V",D)}if(M.queryableEnabled&&M.quickSubmitEnabled){F(v.id+"_"+AL[Ac].name+":Q",D)}}AC=new Array();for(var Af=0;Af<AL.length;Af++){AC[Af]=new SuperMap.IS.Layer();AC[Af].FromJSON(AL[Af])}}function F(AP,AO){var AN=document.getElementById(AP);if(AN!=null){if(_ygPos.browser.indexOf("ie")!=-1||_ygPos.browser=="opera"){AN.attachEvent("onclick",AO)}else{AN.addEventListener("click",AO,true)}AN=null}}function X(AP,AQ){var AO=p[AP];if(!AO){AO=new Array();p[AP]=AO;O.push(AP)}for(var AN=0;AN<AO.length;AN++){if(AO[AN]==AQ){return true}}AO.push(AQ)}function g(AP,AQ){var AO=p[AP];if(!AO){return }for(var AN=0;AN<AO.length;AN++){if(AO[AN]==AQ){AO.splice(AN,1)}}}function N(AQ,AR,AS){var AP=p[AQ];if(!AP){return }if(!AR){AR=W()}var AN=AP.concat();for(var AO=0;AO<AN.length;AO++){if(AN[AO]){AN[AO](AR,AS)}}while(AN.length>0){AN.pop()}}function W(){var AN=m.layers;return AN}this.TriggerServerEvent=function(AN,AO){eval(v.id+"_doPostBack(container.id, eventName)")};function AF(AO,Ad,Ae,AQ){var AY='<tr><td valign="top" width="20px">';if(Ad!="Label"&&Ad!="Custom"){AY+='<img id="Switch_'+w+"_"+AL[AO].name+"_"+Ad+'"  src="images/expand.gif">'}var AW="";if(Ae!=null){AW=Ae.caption}var Af="";var AZ="";var AT=new SuperMap.IS.ResourceParam();AT.width=AE;AT.height=AG;switch(Ad){case"DotDensity":Af="ThemeDotDensity.gif";var AP=Ae;if(AP!=null){var AS=AL[AO].name+"_ThemeDotDensity_IMG";AT.style=AP.dotStyle;AT.resourceType=0;AT.imageFormat=Z;AZ+="<div style='width:80px;'><img id=\""+AS+'" src="'+k.GenerateResourceRequest(AT)+'" >'+AP.dotValue+"</div>"}break;case"GraduatedSymbol":Af="ThemeGraduatedSymbol.gif";var AR=Ae;if(AR!=null){var AS;AS=AL[AO].name+"_ThemeGraph_IMG_0";AT.style=AR.styleForPositive;AT.resourceType=0;AT.imageFormat=Z;AZ+="<Div style='width:80px;'><img id=\""+AS+'" src="'+k.GenerateResourceRequest(AT)+'" >'+SuperMap.IS.LayerControlResource.positive+"</div>";if(AR.showNegative==true){AS=AL[AO].name+"_ThemeGraph_IMG_1";AT.style=AR.styleForNegative;AT.resourceType=0;AT.imageFormat=Z;AZ+="<Div style='width:80px;'><img id=\""+AS+'" src="'+k.GenerateResourceRequest(AT)+'" >'+SuperMap.IS.LayerControlResource.negative+"</div>"}}break;case"Graph":Af="ThemeGraph.gif";var AU=Ae;if(AU!=null){for(var Ac=0;Ac<AU.graphStyles.length;Ac++){var AS=AL[AO].name+"_ThemeGraph_IMG"+Ac;AT.style=AU.graphStyles[Ac];AT.resourceType=2;AT.imageFormat=Z;AZ+="<div style='width:80px;'><img id=\""+AS+'" src="'+k.GenerateResourceRequest(AT)+'" >'+AU.expressions[Ac]+"</div>"}}break;case"Label":Af="ThemeLabel.gif";break;case"Range":Af="ThemeRange.gif";var AV=Ae;if(AV!=null){for(var Ac=0;Ac<AV.displays.length;Ac++){var AS=AL[AO].name+"_ThemeRange_IMG"+Ac;AT.style=AV.displays[Ac];AT.resourceType=AQ;AT.imageFormat=Z;var AX="";if(AV.itemCaptions&&AV.itemCaptions[Ac]){AX=AV.itemCaptions[Ac]}else{if(Ac==0){AX="x<"+AV.breakValues[Ac]}else{if(Ac==AV.displays.length-1){AX=AV.breakValues[Ac-1]+"<=x"}else{AX=AV.breakValues[Ac-1]+"<=x<"+AV.breakValues[Ac]}}}AZ+="<div style='width:80px;'><img id=\""+AS+'" src="'+k.GenerateResourceRequest(AT)+'" >'+AX+"</div>"}}break;case"Unique":Af="ThemeUnique.gif";var Ab=Ae;if(Ab!=null){var AS=AL[AO].name+"_ThemeUnique_IMG";var AN=null;if(Ab.itemCaptions!=null&&Ab.itemCaptions.length>0){AN=Ab.itemCaptions}else{AN=Ab.values}for(var Ac=0;Ac<Ab.values.length;Ac++){AT.style=Ab.displays[Ac];AT.resourceType=AQ;AT.imageFormat=Z;AZ+="<div style='width:80px;'><img id=\""+AS+'"src="'+k.GenerateResourceRequest(AT)+'">'+AN[Ac]+"</div>"}}break;case"Custom":AW=SuperMap.IS.ThemeResource.themeCustom;Af="ThemeCustom.gif";break;case"GridRange":Af="ThemeRange.gif";var Aa=Ae;if(Aa!=null){for(var Ac=0;Ac<Aa.displays.length;Ac++){var AS=AL[AO].name+"_ThemeRange_IMG"+Ac;AT.style=new SuperMap.IS.Style();AT.style.brushColor=Aa.displays[Ac];AT.resourceType=AQ;AT.imageFormat=Z;if(Aa.breakValues[0]==null){AY='<tr><td valign="top" width="20px">';continue}var AX=Aa.itemCaptions[Ac];AZ+="<div style='width:80px;'><img id=\""+AS+'" src="'+k.GenerateResourceRequest(AT)+'" >'+AX+"</div>"}}break}AY+='</td><td><table><tr><td valign="top" width="20px"> <img src="images/'+Af+'"> </td><td>';if(E==true){AY+=AW}AY+="</td><tr><td></td><td>";AY+='<div id="'+w+"_"+AL[AO].name+"_"+Ad+'" style="display:block">';AY+=AZ;AY+="</div></td></tr></table></td>";AY+='<td valign="top" width="20px">';if(Ae.enabled){AY+="<input id='"+w+"_"+AO+"_"+Ad+"' type=checkbox checked ";AY+="></td>"}else{AY+="<input id='"+w+"_"+AO+"_"+Ad+"' type=checkbox  ";AY+="></td>"}return AY}function t(){var AN="</tr>";return AN}function B(AO,AP){var AN=document.getElementById(AP);AN.src=AO}function j(){}this.SwitchThemesDisplay=L;function L(AQ){var AP=AQ.srcElement.id;var AN=AP.replace("Switch_","");var AO=document.getElementById(AP);var AR=document.getElementById(AN);if(AR==null||AO==null){return }if(AR.style.display=="block"){AR.style.display="none";AO.src="images/collapse.gif"}else{AR.style.display="block";AO.src="images/expand.gif"}}this.SwitchThemesVisible=I;function I(AQ){var AO=new Array();strIds=AQ.srcElement.id.split("_");var AN=strIds[1];var AR=strIds[2];var AP=document.getElementById(AQ.srcElement.id).checked;if(!AN||!AR){return }if(AN==-1){return }switch(AR){case"DotDensity":if(AL[AN].themeDotDensity){AL[AN].themeDotDensity.enabled=AP}break;case"GraduatedSymbol":if(AL[AN].themeGraduatedSymbol){AL[AN].themeGraduatedSymboly.enabled=AP}break;case"Graph":if(AL[AN].themeGraph){AL[AN].themeGraph.enabled=AP}break;case"Label":if(AL[AN].themeLabel){AL[AN].themeLabel.enabled=AP}break;case"Range":if(AL[AN].themeRange){AL[AN].themeRange.enabled=AP}break;case"Unique":if(AL[AN].themeUnique){AL[AN].themeUnique.enabled=AP}break;case"Custom":if(AL[AN].themeCustom){AL[AN].themeCustom.enabled=AP}break;case"GridRange":if(AL[AN].themeGridRange){AL[AN].themeGridRange.enabled=AP}break}AO=null;AN=null;AR=null;AP=null;k.Update();N("themeswitched",null,"ThemeSwitched")}this.OnContextMenu=function(AO,AN){AO=_GetEvent(AO);_CancelBubble(AO);AO.index=AN;if(AJ&&AJ.OpenContextMenu){AJ.OpenContextMenu(AO,M)}return false};function S(AN){if(AN){AN.Init(m)}AJ=AN;AJ.Init(m);AH()}function AH(){var AN=document.getElementById(v.id+"_hiddenLayerContextMenu");if(AN){AN.value=AJ.json}}function b(){var AN=_ToJSON(AI);var AO=document.getElementById(v.id+"_hiddenLayerItems");if(AO){AO.value=AN}}function D(){var AS=false;for(var AU=0;AU<k.layers.length;AU++){var AV=k.layers[AU];if(AV){var AT=AV.themeDotDensity;if(AT){var AO=document.getElementById(w+"_"+AU+"_DotDensity");if(AT.enable!=AO.checked){AT.enable=AO.checked;AS=true}}AT=AV.themeGraduatedSymbol;if(AT){var AO=document.getElementById(w+"_"+AU+"_GraduatedSymbol");if(AT.enable!=AO.checked){AT.enable=AO.checked;AS=true}}AT=AV.themeGraph;if(AT){var AO=document.getElementById(w+"_"+AU+"_Graph");if(AT.enabled!=AO.checked){AT.enabled=AO.checked;AS=true}}AT=AV.themeLabel;if(AT){var AO=document.getElementById(w+"_"+AU+"_Label");if(AT.enabled!=AO.checked){AT.enabled=AO.checked;AS=true}}AT=AV.themeRange;if(AT){var AO=document.getElementById(w+"_"+AU+"_Range");if(AT.enabled!=AO.checked){AT.enabled=AO.checked;AS=true}}AT=AV.themeUnique;if(AT){var AO=document.getElementById(w+"_"+AU+"_Unique");if(AT.enabled!=AO.checked){AT.enabled=AO.checked;AS=true}}AT=AV.themeGridRange;if(AT){var AO=document.getElementById(w+"_"+AU+"_GridRange");if(AO!=null){if(AT.enabled!=AO.checked){AT.enabled=AO.checked;AS=true}}}AT=AV.themeCustom;if(AT){var AO=document.getElementById(w+"_"+AU+"_Custom");if(AO!=null){if(AT.enabled!=AO.checked){AT.enabled=AO.checked;AS=true}}}}var AN=document.getElementById(v.id+"_"+AV.name+":V");if(AN){var AQ=AN.checked;if(AI[AU].visibleChecked!=AQ){k.layers[AU].visible=AQ;AI[AU].visibleChecked=AQ;AS=true}}var AR=document.getElementById(v.id+"_"+AV.name+":Q");if(AR){var AP=AR.checked;if(AI[AU].queryableChecked!=AP){k.layers[AU].queryable=AP;AI[AU].queryableChecked=AP;AS=true}}}if(AS){k.Update();N("layeritemschanged",null,"LayerItemsChanged")}}this.CheckedAllQueryable=A;function A(){var AQ=document.getElementById(v.id+"_CheckQueryableAll");for(var AP=0;AP<k.layers.length;AP++){var AO=k.layers[AP];var AN=document.getElementById(v.id+"_"+AO.name+":Q");if(AN){AN.checked=AQ.checked}}f=AQ.checked}this.CheckedAllVisible=AB;function AB(){var AQ=document.getElementById(v.id+"_CheckVisibleAll");for(var AO=0;AO<k.layers.length;AO++){var AN=k.layers[AO];var AP=document.getElementById(v.id+"_"+AN.name+":V");if(AP){AP.checked=AQ.checked}}AM=AQ.checked}function d(AS,AR){if(!AR){AR=false}for(var AQ=0;AQ<U.length-1;AQ++){for(var AO=AQ+1;AO<U.length;AO++){var AP=false;if(i(AI[U[AQ]],AI[U[AO]],AS)==AR){AP=true}if(!AP){var AN=U[AQ];U[AQ]=U[AO];U[AO]=AN}}}}function AD(AO,AN){d(AO,AN);AA(this)}function i(AO,AQ,AR){var AN;var AP;switch(AR){case 0:AN=AO.value;AP=AQ.value;break;case 1:AN=AO.caption;AP=AQ.caption;break;case 2:AN=AO.order;AP=AQ.order;break}if(AN>=AP){return true}else{return false}}function R(AO){var AP=document.getElementById(v.id+"_"+AO.name+":V");var AN=document.getElementById(v.id+"_"+AO.name+":Q");if(AO.visible){AP.checked="checked"}else{AP.checked=""}if(AO.queryable){AN.checked="checked"}else{AN.checked=""}}function Y(){s(k.layers);AK=false;z()}function C(AN){if(Q.join(",")==AN){return }Q=AN.split(",");if(T!=k.mapName){AL=k.layers;for(var AO=0;AO<AL.length;AO++){U[AO]=AO}T=k.mapName}if(G){AA()}else{v.style.visibility="hidden"}}this.GetLayerItemByIndex=function(AN){if(AN==null||typeof AN=="undefined"){return null}if(!AI){return null}if(AI[AN]){return AI[AN]}return null};this.GetLayerItemByValue=function(AO){if(!AI||AO==null||typeof AO=="undefined"){return null}for(var AN=0;AN<AI.length;AN++){if(AI[AN].value==AO){return AI[AN]}}}}