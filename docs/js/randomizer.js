window.addEventListener("load",function(){const e=navigator.userAgent,t=e.match(/Chrome|Opera/)&&-1==e.indexOf("Edge")?".webp":"-min.png",i=["pic/FEDcre"+t,"pic/FEDknw"+t,"pic/FEDore"+t,"pic/FEDpwt"+t,"pic/FEDqic"+t,"pic/FEDvps"+t],n=["pic/RNDfed"+t,"pic/RNDgai3"+t,"pic/RNDgai4"+t,"pic/RNDmin"+t,"pic/RNDpia"+t,"pic/RNDstp"+t,"pic/RNDter"+t,"pic/RNDtrs3"+t,"pic/RNDtrs4"+t],c=["pic/TECcre"+t,"pic/TECgai"+t,"pic/TECknw"+t,"pic/TECore"+t,"pic/TECpia"+t,"pic/TECpow"+t,"pic/TECqic"+t,"pic/TECtyp"+t,"pic/TECvps"+t],p=["pic/ADVfedP"+t,"pic/ADVfedV"+t,"pic/ADVgai"+t,"pic/ADVknw"+t,"pic/ADVlab"+t,"pic/ADVminB"+t,"pic/ADVminV"+t,"pic/ADVore"+t,"pic/ADVqic"+t,"pic/ADVsecO"+t,"pic/ADVsecV"+t,"pic/ADVstp"+t,"pic/ADVtrsB"+t,"pic/ADVtrsV"+t,"pic/ADVtyp"+t],r=["pic/BOOgai"+t,"pic/BOOknw"+t,"pic/BOOlab"+t,"pic/BOOmin"+t,"pic/BOOnav"+t,"pic/BOOpia"+t,"pic/BOOpwt"+t,"pic/BOOqic"+t,"pic/BOOter"+t,"pic/BOOtrs"+t],o=["pic/FINbld"+t,"pic/FINfed"+t,"pic/FINgai"+t,"pic/FINsat"+t,"pic/FINsec"+t,"pic/FINtyp"+t],l={4:["pic/1"+t,"pic/2"+t,"pic/3"+t,"pic/4"+t,"pic/5"+t,"pic/6"+t,"pic/7"+t,"pic/8"+t,"pic/9"+t,"pic/10"+t],3:["pic/1"+t,"pic/2"+t,"pic/3"+t,"pic/4"+t,"pic/5"+t,"pic/6"+t,"pic/7"+t,"pic/8"+t],2:["pic/1"+t,"pic/2"+t,"pic/3"+t,"pic/4"+t,"pic/5_"+t,"pic/6_"+t,"pic/7_"+t]},a=6,m=9,s=6,d=2;function u(e){for(var t,i,n=e.length;n;)i=Math.floor(Math.random()*n--),t=e[n],e[n]=e[i],e[i]=t;return e}function y(){let e=document.getElementById("map"),t=window.innerWidth/20/2;e.style.gridTemplateRows=(t+"px ").repeat(30),e.style.setProperty("-ms-grid-rows",(t+"px").repeat(30))}function E(e){var t,l,y={};1==e&&function(){const e=window.location.href;e.indexOf("#!")>=0&&(y=function(e){for(var t=e.split("&"),i={},n=0;n<t.length;n++){var c=t[n].split("=");c.length>1?i[c[0]]=c[1]:i[c[0]]=null}return i}(e.slice(e.indexOf("#!")+2)))}(),t=y.FED,l=0,l=t||Math.floor(Math.random()*i.length),document.getElementById("FED").setAttribute("src",i[l]),function(e){for(var t=u(p),i=0;i<a;i++)document.getElementById("ADV"+i).setAttribute("src",t[i])}(),function(e){for(var t=u(c),i=0;i<m;i++)document.getElementById("BAS"+i).setAttribute("src",t[i])}(),function(e){for(var t=u(n),i=0;i<s;i++)document.getElementById("RND"+i).setAttribute("src",t[i])}(),function(e){for(var t=u(o),i=0;i<d;i++)document.getElementById("FIN"+i).setAttribute("src",t[i])}(),function(e){let t=document.getElementById("booster"),i=document.getElementById("pNumbers").value,n=Number(i)+3,c=u(r);t.childElementCount!=n&&Array.prototype.forEach.call(document.getElementsByClassName("booster"),function(e){e.style.display="none"}),t.style.setProperty("grid-template-columns","1fr ".repeat(n)),t.style.setProperty("-ms-grid-columns","1fr ".repeat(n));for(var p=0;p<n;p++){let e=document.getElementById("BST"+p);e.setAttribute("src",c[p]),e.parentElement.style.setProperty("-ms-grid-column",p+1),e.parentElement.style.display="block",Array.prototype.forEach.call(e.parentElement.classList,function(t){5<t.lastIndexOf("er")&&e.parentElement.classList.remove(t)}),e.parentElement.classList.add("booster"+i+"er")}}()}function g(){let e=this.style.transform.match(/rotate\(([0-9]+)deg\)/),t=60;e&&(t=Number(e[1])+60),this.style.transform="rotate("+t+"deg)"}document.getElementById("setup").addEventListener("click",function(){E()}),document.getElementById("hide").addEventListener("click",function(){document.getElementsByTagName("menu")[0].style.display="none",document.getElementById("mapGenMenu").style.display="none";var e=document.getElementsByTagName("main")[0].addEventListener("click",function(){document.getElementsByTagName("menu")[0].style.display="block",document.getElementById("mapGenMenu").style.display="block",document.getElementsByTagName("main")[0].removeEventListener("click",e)})}),document.getElementById("mapGen").addEventListener("click",function(){!function(e){y(),2==Number(e)&&(document.getElementById("mapTile9").style.display="none");let t=u(l[e]),i=0;Array.prototype.forEach.call(t,t=>{e<4&&(2==i||6==i)&&(document.getElementById("mapTile"+i).style.display="none",i++);let n=60*Math.floor(6*Math.random());document.getElementById("mapTile"+i).style.display="block",document.getElementById("map"+i).setAttribute("src",t),document.getElementById("map"+i).style.transform="rotate("+n+"deg)",i++})}(document.getElementById("pNumbers").value)}),Array.prototype.forEach.call(document.querySelectorAll("div.mapItem > img"),function(e){e.addEventListener("click",g)});let f=null;window.addEventListener("resize",function(){clearTimeout(f),f=setTimeout(function(){y()},300)}),E(!0)});