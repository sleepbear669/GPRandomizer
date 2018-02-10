const APPLICATION_NAME="GPRandomizer",VERSION="8",CACHE_KEY="GPRandomizer8",APPLICATION_DIR="/GPRandomizer",URL=location.protocol+"//"+location.hostname+(location.port?":"+location.port:"")+"/GPRandomizer",STATIC_FILES=[URL+"/",URL+"/js/randomizer.js"],PNG_FILES=[URL+"/pic/ADVfedP.png",URL+"/pic/ADVfedV.png",URL+"/pic/ADVgai.png",URL+"/pic/ADVknw.png",URL+"/pic/ADVlab.png",URL+"/pic/ADVminB.png",URL+"/pic/ADVminV.png",URL+"/pic/ADVore.png",URL+"/pic/ADVqic.png",URL+"/pic/ADVsecO.png",URL+"/pic/ADVsecV.png",URL+"/pic/ADVstp.png",URL+"/pic/ADVtrsB.png",URL+"/pic/ADVtrsV.png",URL+"/pic/ADVtyp.png",URL+"/pic/BOOgai.png",URL+"/pic/BOOknw.png",URL+"/pic/BOOlab.png",URL+"/pic/BOOmin.png",URL+"/pic/BOOnav.png",URL+"/pic/BOOpia.png",URL+"/pic/BOOpwt.png",URL+"/pic/BOOqic.png",URL+"/pic/BOOter.png",URL+"/pic/BOOtrs.png",URL+"/pic/FEDcre.png",URL+"/pic/FEDgle.png",URL+"/pic/FEDknw.png",URL+"/pic/FEDore.png",URL+"/pic/FEDpwt.png",URL+"/pic/FEDqic.png",URL+"/pic/FEDvps.png",URL+"/pic/FINbld.png",URL+"/pic/FINfed.png",URL+"/pic/FINgai.png",URL+"/pic/FINsat.png",URL+"/pic/FINsec.png",URL+"/pic/FINtyp.png",URL+"/pic/RNDfed.png",URL+"/pic/RNDgai3.png",URL+"/pic/RNDgai4.png",URL+"/pic/RNDmin.png",URL+"/pic/RNDpia.png",URL+"/pic/RNDstp.png",URL+"/pic/RNDter.png",URL+"/pic/RNDtrs3.png",URL+"/pic/RNDtrs4.png",URL+"/pic/TECcre.png",URL+"/pic/TECgai.png",URL+"/pic/TECknw.png",URL+"/pic/TECore.png",URL+"/pic/TECpia.png",URL+"/pic/TECpow.png",URL+"/pic/TECqic.png",URL+"/pic/TECtyp.png",URL+"/pic/TECvps.png"],WEBP_FILES=[URL+"/pic/ADVfedP.webp",URL+"/pic/ADVfedV.webp",URL+"/pic/ADVgai.webp",URL+"/pic/ADVknw.webp",URL+"/pic/ADVlab.webp",URL+"/pic/ADVminB.webp",URL+"/pic/ADVminV.webp",URL+"/pic/ADVore.webp",URL+"/pic/ADVqic.webp",URL+"/pic/ADVsecO.webp",URL+"/pic/ADVsecV.webp",URL+"/pic/ADVstp.webp",URL+"/pic/ADVtrsB.webp",URL+"/pic/ADVtrsV.webp",URL+"/pic/ADVtyp.webp",URL+"/pic/BOOgai.webp",URL+"/pic/BOOknw.webp",URL+"/pic/BOOlab.webp",URL+"/pic/BOOmin.webp",URL+"/pic/BOOnav.webp",URL+"/pic/BOOpia.webp",URL+"/pic/BOOpwt.webp",URL+"/pic/BOOqic.webp",URL+"/pic/BOOter.webp",URL+"/pic/BOOtrs.webp",URL+"/pic/FEDcre.webp",URL+"/pic/FEDgle.webp",URL+"/pic/FEDknw.webp",URL+"/pic/FEDore.webp",URL+"/pic/FEDpwt.webp",URL+"/pic/FEDqic.webp",URL+"/pic/FEDvps.webp",URL+"/pic/FINbld.webp",URL+"/pic/FINfed.webp",URL+"/pic/FINgai.webp",URL+"/pic/FINsat.webp",URL+"/pic/FINsec.webp",URL+"/pic/FINtyp.webp",URL+"/pic/RNDfed.webp",URL+"/pic/RNDgai3.webp",URL+"/pic/RNDgai4.webp",URL+"/pic/RNDmin.webp",URL+"/pic/RNDpia.webp",URL+"/pic/RNDstp.webp",URL+"/pic/RNDter.webp",URL+"/pic/RNDtrs3.webp",URL+"/pic/RNDtrs4.webp",URL+"/pic/TECcre.webp",URL+"/pic/TECgai.webp",URL+"/pic/TECknw.webp",URL+"/pic/TECore.webp",URL+"/pic/TECpia.webp",URL+"/pic/TECpow.webp",URL+"/pic/TECqic.webp",URL+"/pic/TECtyp.webp",URL+"/pic/TECvps.webp"];function onInstall(p){p.waitUntil(caches.open(CACHE_KEY).then(function(p){var i=STATIC_FILES;i=navigator.userAgent.match(/Chrome|Opera/)?i.concat(WEBP_FILES):i.concat(PNG_FILES),p.addAll(i),console.log("[ServiceWorker]","Success to store all static data in cache.")}))}function onFetch(p){p.respondWith(caches.open(CACHE_KEY).then(function(i){return i.match(p.request).then(function(i){return i?(console.log("Found response in cache: ",i),i):fetch(p.request)}).catch(function(p){console.log("Error fetch in handler:",p)})}))}function onActivate(p){p.waitUntil(caches.keys().then(function(p){p.filter(function(p){return 0!==p.indexOf(CACHE_KEY)}).map(function(p){caches.delete(p),console.log("[ServiceWorker]","Delete old cache:",p)})}))}self.addEventListener("install",onInstall),self.addEventListener("fetch",onFetch),self.addEventListener("activate",onActivate);