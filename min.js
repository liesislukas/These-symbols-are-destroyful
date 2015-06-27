
if(typeof console=="undefined"){window.console={log:function(){}};};
(function(global,factory){if(typeof module==="object"&&typeof module.exports==="object"){module.exports=global.document?factory(global,true):function(w){if(!w.document){throw new Error("jQuery requires a window with a document");}
return factory(w);};}else{factory(global);}}(typeof window!=="undefined"?window:this,function(window,noGlobal){var deletedIds=[];var slice=deletedIds.slice;var concat=deletedIds.concat;var push=deletedIds.push;var indexOf=deletedIds.indexOf;var class2type={};var toString=class2type.toString;var hasOwn=class2type.hasOwnProperty;var support={};var
version="1.11.2",jQuery=function(selector,context){return new jQuery.fn.init(selector,context);},rtrim=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,rmsPrefix=/^-ms-/,rdashAlpha=/-([\da-z])/gi,fcamelCase=function(all,letter){return letter.toUpperCase();};jQuery.fn=jQuery.prototype={jquery:version,constructor:jQuery,selector:"",length:0,toArray:function(){return slice.call(this);},get:function(num){return num!=null?(num<0?this[num+this.length]:this[num]):slice.call(this);},pushStack:function(elems){var ret=jQuery.merge(this.constructor(),elems);ret.prevObject=this;ret.context=this.context;return ret;},each:function(callback,args){return jQuery.each(this,callback,args);},map:function(callback){return this.pushStack(jQuery.map(this,function(elem,i){return callback.call(elem,i,elem);}));},slice:function(){return this.pushStack(slice.apply(this,arguments));},first:function(){return this.eq(0);},last:function(){return this.eq(-1);},eq:function(i){var len=this.length,j=+i+(i<0?len:0);return this.pushStack(j>=0&&j<len?[this[j]]:[]);},end:function(){return this.prevObject||this.constructor(null);},push:push,sort:deletedIds.sort,splice:deletedIds.splice};jQuery.extend=jQuery.fn.extend=function(){var src,copyIsArray,copy,name,options,clone,target=arguments[0]||{},i=1,length=arguments.length,deep=false;if(typeof target==="boolean"){deep=target;target=arguments[i]||{};i++;}
if(typeof target!=="object"&&!jQuery.isFunction(target)){target={};}
if(i===length){target=this;i--;}
for(;i<length;i++){if((options=arguments[i])!=null){for(name in options){src=target[name];copy=options[name];if(target===copy){continue;}
if(deep&&copy&&(jQuery.isPlainObject(copy)||(copyIsArray=jQuery.isArray(copy)))){if(copyIsArray){copyIsArray=false;clone=src&&jQuery.isArray(src)?src:[];}else{clone=src&&jQuery.isPlainObject(src)?src:{};}
target[name]=jQuery.extend(deep,clone,copy);}else if(copy!==undefined){target[name]=copy;}}}}
return target;};jQuery.extend({expando:"jQuery"+(version+Math.random()).replace(/\D/g,""),isReady:true,error:function(msg){throw new Error(msg);},noop:function(){},isFunction:function(obj){return jQuery.type(obj)==="function";},isArray:Array.isArray||function(obj){return jQuery.type(obj)==="array";},isWindow:function(obj){return obj!=null&&obj==obj.window;},isNumeric:function(obj){return!jQuery.isArray(obj)&&(obj-parseFloat(obj)+1)>=0;},isEmptyObject:function(obj){var name;for(name in obj){return false;}
return true;},isPlainObject:function(obj){var key;if(!obj||jQuery.type(obj)!=="object"||obj.nodeType||jQuery.isWindow(obj)){return false;}
try{if(obj.constructor&&!hasOwn.call(obj,"constructor")&&!hasOwn.call(obj.constructor.prototype,"isPrototypeOf")){return false;}}catch(e){return false;}
if(support.ownLast){for(key in obj){return hasOwn.call(obj,key);}}
for(key in obj){}
return key===undefined||hasOwn.call(obj,key);},type:function(obj){if(obj==null){return obj+"";}
return typeof obj==="object"||typeof obj==="function"?class2type[toString.call(obj)]||"object":typeof obj;},globalEval:function(data){if(data&&jQuery.trim(data)){(window.execScript||function(data){window["eval"].call(window,data);})(data);}},camelCase:function(string){return string.replace(rmsPrefix,"ms-").replace(rdashAlpha,fcamelCase);},nodeName:function(elem,name){return elem.nodeName&&elem.nodeName.toLowerCase()===name.toLowerCase();},each:function(obj,callback,args){var value,i=0,length=obj.length,isArray=isArraylike(obj);if(args){if(isArray){for(;i<length;i++){value=callback.apply(obj[i],args);if(value===false){break;}}}else{for(i in obj){value=callback.apply(obj[i],args);if(value===false){break;}}}}else{if(isArray){for(;i<length;i++){value=callback.call(obj[i],i,obj[i]);if(value===false){break;}}}else{for(i in obj){value=callback.call(obj[i],i,obj[i]);if(value===false){break;}}}}
return obj;},trim:function(text){return text==null?"":(text+"").replace(rtrim,"");},makeArray:function(arr,results){var ret=results||[];if(arr!=null){if(isArraylike(Object(arr))){jQuery.merge(ret,typeof arr==="string"?[arr]:arr);}else{push.call(ret,arr);}}
return ret;},inArray:function(elem,arr,i){var len;if(arr){if(indexOf){return indexOf.call(arr,elem,i);}
len=arr.length;i=i?i<0?Math.max(0,len+i):i:0;for(;i<len;i++){if(i in arr&&arr[i]===elem){return i;}}}
return-1;},merge:function(first,second){var len=+second.length,j=0,i=first.length;while(j<len){first[i++]=second[j++];}
if(len!==len){while(second[j]!==undefined){first[i++]=second[j++];}}
first.length=i;return first;},grep:function(elems,callback,invert){var callbackInverse,matches=[],i=0,length=elems.length,callbackExpect=!invert;for(;i<length;i++){callbackInverse=!callback(elems[i],i);if(callbackInverse!==callbackExpect){matches.push(elems[i]);}}
return matches;},map:function(elems,callback,arg){var value,i=0,length=elems.length,isArray=isArraylike(elems),ret=[];if(isArray){for(;i<length;i++){value=callback(elems[i],i,arg);if(value!=null){ret.push(value);}}}else{for(i in elems){value=callback(elems[i],i,arg);if(value!=null){ret.push(value);}}}
return concat.apply([],ret);},guid:1,proxy:function(fn,context){var args,proxy,tmp;if(typeof context==="string"){tmp=fn[context];context=fn;fn=tmp;}
if(!jQuery.isFunction(fn)){return undefined;}
args=slice.call(arguments,2);proxy=function(){return fn.apply(context||this,args.concat(slice.call(arguments)));};proxy.guid=fn.guid=fn.guid||jQuery.guid++;return proxy;},now:function(){return+(new Date());},support:support});jQuery.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(i,name){class2type["[object "+name+"]"]=name.toLowerCase();});function isArraylike(obj){var length=obj.length,type=jQuery.type(obj);if(type==="function"||jQuery.isWindow(obj)){return false;}
if(obj.nodeType===1&&length){return true;}
return type==="array"||length===0||typeof length==="number"&&length>0&&(length-1)in obj;}
var Sizzle=(function(window){var i,support,Expr,getText,isXML,tokenize,compile,select,outermostContext,sortInput,hasDuplicate,setDocument,document,docElem,documentIsHTML,rbuggyQSA,rbuggyMatches,matches,contains,expando="sizzle"+1*new Date(),preferredDoc=window.document,dirruns=0,done=0,classCache=createCache(),tokenCache=createCache(),compilerCache=createCache(),sortOrder=function(a,b){if(a===b){hasDuplicate=true;}
return 0;},MAX_NEGATIVE=1<<31,hasOwn=({}).hasOwnProperty,arr=[],pop=arr.pop,push_native=arr.push,push=arr.push,slice=arr.slice,indexOf=function(list,elem){var i=0,len=list.length;for(;i<len;i++){if(list[i]===elem){return i;}}
return-1;},booleans="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",whitespace="[\\x20\\t\\r\\n\\f]",characterEncoding="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",identifier=characterEncoding.replace("w","w#"),attributes="\\["+whitespace+"*("+characterEncoding+")(?:"+whitespace+"*([*^$|!~]?=)"+whitespace+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+identifier+"))|)"+whitespace+"*\\]",pseudos=":("+characterEncoding+")(?:\\(("+"('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|"+"((?:\\\\.|[^\\\\()[\\]]|"+attributes+")*)|"+".*"+")\\)|)",rwhitespace=new RegExp(whitespace+"+","g"),rtrim=new RegExp("^"+whitespace+"+|((?:^|[^\\\\])(?:\\\\.)*)"+whitespace+"+$","g"),rcomma=new RegExp("^"+whitespace+"*,"+whitespace+"*"),rcombinators=new RegExp("^"+whitespace+"*([>+~]|"+whitespace+")"+whitespace+"*"),rattributeQuotes=new RegExp("="+whitespace+"*([^\\]'\"]*?)"+whitespace+"*\\]","g"),rpseudo=new RegExp(pseudos),ridentifier=new RegExp("^"+identifier+"$"),matchExpr={"ID":new RegExp("^#("+characterEncoding+")"),"CLASS":new RegExp("^\\.("+characterEncoding+")"),"TAG":new RegExp("^("+characterEncoding.replace("w","w*")+")"),"ATTR":new RegExp("^"+attributes),"PSEUDO":new RegExp("^"+pseudos),"CHILD":new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+whitespace+"*(even|odd|(([+-]|)(\\d*)n|)"+whitespace+"*(?:([+-]|)"+whitespace+"*(\\d+)|))"+whitespace+"*\\)|)","i"),"bool":new RegExp("^(?:"+booleans+")$","i"),"needsContext":new RegExp("^"+whitespace+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+
whitespace+"*((?:-\\d)?\\d*)"+whitespace+"*\\)|)(?=[^-]|$)","i")},rinputs=/^(?:input|select|textarea|button)$/i,rheader=/^h\d$/i,rnative=/^[^{]+\{\s*\[native \w/,rquickExpr=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,rsibling=/[+~]/,rescape=/'|\\/g,runescape=new RegExp("\\\\([\\da-f]{1,6}"+whitespace+"?|("+whitespace+")|.)","ig"),funescape=function(_,escaped,escapedWhitespace){var high="0x"+escaped-0x10000;return high!==high||escapedWhitespace?escaped:high<0?String.fromCharCode(high+0x10000):String.fromCharCode(high>>10|0xD800,high&0x3FF|0xDC00);},unloadHandler=function(){setDocument();};try{push.apply((arr=slice.call(preferredDoc.childNodes)),preferredDoc.childNodes);arr[preferredDoc.childNodes.length].nodeType;}catch(e){push={apply:arr.length?function(target,els){push_native.apply(target,slice.call(els));}:function(target,els){var j=target.length,i=0;while((target[j++]=els[i++])){}
target.length=j-1;}};}
function Sizzle(selector,context,results,seed){var match,elem,m,nodeType,i,groups,old,nid,newContext,newSelector;if((context?context.ownerDocument||context:preferredDoc)!==document){setDocument(context);}
context=context||document;results=results||[];nodeType=context.nodeType;if(typeof selector!=="string"||!selector||nodeType!==1&&nodeType!==9&&nodeType!==11){return results;}
if(!seed&&documentIsHTML){if(nodeType!==11&&(match=rquickExpr.exec(selector))){if((m=match[1])){if(nodeType===9){elem=context.getElementById(m);if(elem&&elem.parentNode){if(elem.id===m){results.push(elem);return results;}}else{return results;}}else{if(context.ownerDocument&&(elem=context.ownerDocument.getElementById(m))&&contains(context,elem)&&elem.id===m){results.push(elem);return results;}}}else if(match[2]){push.apply(results,context.getElementsByTagName(selector));return results;}else if((m=match[3])&&support.getElementsByClassName){push.apply(results,context.getElementsByClassName(m));return results;}}
if(support.qsa&&(!rbuggyQSA||!rbuggyQSA.test(selector))){nid=old=expando;newContext=context;newSelector=nodeType!==1&&selector;if(nodeType===1&&context.nodeName.toLowerCase()!=="object"){groups=tokenize(selector);if((old=context.getAttribute("id"))){nid=old.replace(rescape,"\\$&");}else{context.setAttribute("id",nid);}
nid="[id='"+nid+"'] ";i=groups.length;while(i--){groups[i]=nid+toSelector(groups[i]);}
newContext=rsibling.test(selector)&&testContext(context.parentNode)||context;newSelector=groups.join(",");}
if(newSelector){try{push.apply(results,newContext.querySelectorAll(newSelector));return results;}catch(qsaError){}finally{if(!old){context.removeAttribute("id");}}}}}
return select(selector.replace(rtrim,"$1"),context,results,seed);}
function createCache(){var keys=[];function cache(key,value){if(keys.push(key+" ")>Expr.cacheLength){delete cache[keys.shift()];}
return(cache[key+" "]=value);}
return cache;}
function markFunction(fn){fn[expando]=true;return fn;}
function assert(fn){var div=document.createElement("div");try{return!!fn(div);}catch(e){return false;}finally{if(div.parentNode){div.parentNode.removeChild(div);}
div=null;}}
function addHandle(attrs,handler){var arr=attrs.split("|"),i=attrs.length;while(i--){Expr.attrHandle[arr[i]]=handler;}}
function siblingCheck(a,b){var cur=b&&a,diff=cur&&a.nodeType===1&&b.nodeType===1&&(~b.sourceIndex||MAX_NEGATIVE)-
(~a.sourceIndex||MAX_NEGATIVE);if(diff){return diff;}
if(cur){while((cur=cur.nextSibling)){if(cur===b){return-1;}}}
return a?1:-1;}
function createInputPseudo(type){return function(elem){var name=elem.nodeName.toLowerCase();return name==="input"&&elem.type===type;};}
function createButtonPseudo(type){return function(elem){var name=elem.nodeName.toLowerCase();return(name==="input"||name==="button")&&elem.type===type;};}
function createPositionalPseudo(fn){return markFunction(function(argument){argument=+argument;return markFunction(function(seed,matches){var j,matchIndexes=fn([],seed.length,argument),i=matchIndexes.length;while(i--){if(seed[(j=matchIndexes[i])]){seed[j]=!(matches[j]=seed[j]);}}});});}
function testContext(context){return context&&typeof context.getElementsByTagName!=="undefined"&&context;}
support=Sizzle.support={};isXML=Sizzle.isXML=function(elem){var documentElement=elem&&(elem.ownerDocument||elem).documentElement;return documentElement?documentElement.nodeName!=="HTML":false;};setDocument=Sizzle.setDocument=function(node){var hasCompare,parent,doc=node?node.ownerDocument||node:preferredDoc;if(doc===document||doc.nodeType!==9||!doc.documentElement){return document;}
document=doc;docElem=doc.documentElement;parent=doc.defaultView;if(parent&&parent!==parent.top){if(parent.addEventListener){parent.addEventListener("unload",unloadHandler,false);}else if(parent.attachEvent){parent.attachEvent("onunload",unloadHandler);}}
documentIsHTML=!isXML(doc);support.attributes=assert(function(div){div.className="i";return!div.getAttribute("className");});support.getElementsByTagName=assert(function(div){div.appendChild(doc.createComment(""));return!div.getElementsByTagName("*").length;});support.getElementsByClassName=rnative.test(doc.getElementsByClassName);support.getById=assert(function(div){docElem.appendChild(div).id=expando;return!doc.getElementsByName||!doc.getElementsByName(expando).length;});if(support.getById){Expr.find["ID"]=function(id,context){if(typeof context.getElementById!=="undefined"&&documentIsHTML){var m=context.getElementById(id);return m&&m.parentNode?[m]:[];}};Expr.filter["ID"]=function(id){var attrId=id.replace(runescape,funescape);return function(elem){return elem.getAttribute("id")===attrId;};};}else{delete Expr.find["ID"];Expr.filter["ID"]=function(id){var attrId=id.replace(runescape,funescape);return function(elem){var node=typeof elem.getAttributeNode!=="undefined"&&elem.getAttributeNode("id");return node&&node.value===attrId;};};}
Expr.find["TAG"]=support.getElementsByTagName?function(tag,context){if(typeof context.getElementsByTagName!=="undefined"){return context.getElementsByTagName(tag);}else if(support.qsa){return context.querySelectorAll(tag);}}:function(tag,context){var elem,tmp=[],i=0,results=context.getElementsByTagName(tag);if(tag==="*"){while((elem=results[i++])){if(elem.nodeType===1){tmp.push(elem);}}
return tmp;}
return results;};Expr.find["CLASS"]=support.getElementsByClassName&&function(className,context){if(documentIsHTML){return context.getElementsByClassName(className);}};rbuggyMatches=[];rbuggyQSA=[];if((support.qsa=rnative.test(doc.querySelectorAll))){assert(function(div){docElem.appendChild(div).innerHTML="<a id='"+expando+"'></a>"+"<select id='"+expando+"-\f]' msallowcapture=''>"+"<option selected=''></option></select>";if(div.querySelectorAll("[msallowcapture^='']").length){rbuggyQSA.push("[*^$]="+whitespace+"*(?:''|\"\")");}
if(!div.querySelectorAll("[selected]").length){rbuggyQSA.push("\\["+whitespace+"*(?:value|"+booleans+")");}
if(!div.querySelectorAll("[id~="+expando+"-]").length){rbuggyQSA.push("~=");}
if(!div.querySelectorAll(":checked").length){rbuggyQSA.push(":checked");}
if(!div.querySelectorAll("a#"+expando+"+*").length){rbuggyQSA.push(".#.+[+~]");}});assert(function(div){var input=doc.createElement("input");input.setAttribute("type","hidden");div.appendChild(input).setAttribute("name","D");if(div.querySelectorAll("[name=d]").length){rbuggyQSA.push("name"+whitespace+"*[*^$|!~]?=");}
if(!div.querySelectorAll(":enabled").length){rbuggyQSA.push(":enabled",":disabled");}
div.querySelectorAll("*,:x");rbuggyQSA.push(",.*:");});}
if((support.matchesSelector=rnative.test((matches=docElem.matches||docElem.webkitMatchesSelector||docElem.mozMatchesSelector||docElem.oMatchesSelector||docElem.msMatchesSelector)))){assert(function(div){support.disconnectedMatch=matches.call(div,"div");matches.call(div,"[s!='']:x");rbuggyMatches.push("!=",pseudos);});}
rbuggyQSA=rbuggyQSA.length&&new RegExp(rbuggyQSA.join("|"));rbuggyMatches=rbuggyMatches.length&&new RegExp(rbuggyMatches.join("|"));hasCompare=rnative.test(docElem.compareDocumentPosition);contains=hasCompare||rnative.test(docElem.contains)?function(a,b){var adown=a.nodeType===9?a.documentElement:a,bup=b&&b.parentNode;return a===bup||!!(bup&&bup.nodeType===1&&(adown.contains?adown.contains(bup):a.compareDocumentPosition&&a.compareDocumentPosition(bup)&16));}:function(a,b){if(b){while((b=b.parentNode)){if(b===a){return true;}}}
return false;};sortOrder=hasCompare?function(a,b){if(a===b){hasDuplicate=true;return 0;}
var compare=!a.compareDocumentPosition-!b.compareDocumentPosition;if(compare){return compare;}
compare=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1;if(compare&1||(!support.sortDetached&&b.compareDocumentPosition(a)===compare)){if(a===doc||a.ownerDocument===preferredDoc&&contains(preferredDoc,a)){return-1;}
if(b===doc||b.ownerDocument===preferredDoc&&contains(preferredDoc,b)){return 1;}
return sortInput?(indexOf(sortInput,a)-indexOf(sortInput,b)):0;}
return compare&4?-1:1;}:function(a,b){if(a===b){hasDuplicate=true;return 0;}
var cur,i=0,aup=a.parentNode,bup=b.parentNode,ap=[a],bp=[b];if(!aup||!bup){return a===doc?-1:b===doc?1:aup?-1:bup?1:sortInput?(indexOf(sortInput,a)-indexOf(sortInput,b)):0;}else if(aup===bup){return siblingCheck(a,b);}
cur=a;while((cur=cur.parentNode)){ap.unshift(cur);}
cur=b;while((cur=cur.parentNode)){bp.unshift(cur);}
while(ap[i]===bp[i]){i++;}
return i?siblingCheck(ap[i],bp[i]):ap[i]===preferredDoc?-1:bp[i]===preferredDoc?1:0;};return doc;};Sizzle.matches=function(expr,elements){return Sizzle(expr,null,null,elements);};Sizzle.matchesSelector=function(elem,expr){if((elem.ownerDocument||elem)!==document){setDocument(elem);}
expr=expr.replace(rattributeQuotes,"='$1']");if(support.matchesSelector&&documentIsHTML&&(!rbuggyMatches||!rbuggyMatches.test(expr))&&(!rbuggyQSA||!rbuggyQSA.test(expr))){try{var ret=matches.call(elem,expr);if(ret||support.disconnectedMatch||elem.document&&elem.document.nodeType!==11){return ret;}}catch(e){}}
return Sizzle(expr,document,null,[elem]).length>0;};Sizzle.contains=function(context,elem){if((context.ownerDocument||context)!==document){setDocument(context);}
return contains(context,elem);};Sizzle.attr=function(elem,name){if((elem.ownerDocument||elem)!==document){setDocument(elem);}
var fn=Expr.attrHandle[name.toLowerCase()],val=fn&&hasOwn.call(Expr.attrHandle,name.toLowerCase())?fn(elem,name,!documentIsHTML):undefined;return val!==undefined?val:support.attributes||!documentIsHTML?elem.getAttribute(name):(val=elem.getAttributeNode(name))&&val.specified?val.value:null;};Sizzle.error=function(msg){throw new Error("Syntax error, unrecognized expression: "+msg);};Sizzle.uniqueSort=function(results){var elem,duplicates=[],j=0,i=0;hasDuplicate=!support.detectDuplicates;sortInput=!support.sortStable&&results.slice(0);results.sort(sortOrder);if(hasDuplicate){while((elem=results[i++])){if(elem===results[i]){j=duplicates.push(i);}}
while(j--){results.splice(duplicates[j],1);}}
sortInput=null;return results;};getText=Sizzle.getText=function(elem){var node,ret="",i=0,nodeType=elem.nodeType;if(!nodeType){while((node=elem[i++])){ret+=getText(node);}}else if(nodeType===1||nodeType===9||nodeType===11){if(typeof elem.textContent==="string"){return elem.textContent;}else{for(elem=elem.firstChild;elem;elem=elem.nextSibling){ret+=getText(elem);}}}else if(nodeType===3||nodeType===4){return elem.nodeValue;}
return ret;};Expr=Sizzle.selectors={cacheLength:50,createPseudo:markFunction,match:matchExpr,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:true}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:true},"~":{dir:"previousSibling"}},preFilter:{"ATTR":function(match){match[1]=match[1].replace(runescape,funescape);match[3]=(match[3]||match[4]||match[5]||"").replace(runescape,funescape);if(match[2]==="~="){match[3]=" "+match[3]+" ";}
return match.slice(0,4);},"CHILD":function(match){match[1]=match[1].toLowerCase();if(match[1].slice(0,3)==="nth"){if(!match[3]){Sizzle.error(match[0]);}
match[4]=+(match[4]?match[5]+(match[6]||1):2*(match[3]==="even"||match[3]==="odd"));match[5]=+((match[7]+match[8])||match[3]==="odd");}else if(match[3]){Sizzle.error(match[0]);}
return match;},"PSEUDO":function(match){var excess,unquoted=!match[6]&&match[2];if(matchExpr["CHILD"].test(match[0])){return null;}
if(match[3]){match[2]=match[4]||match[5]||"";}else if(unquoted&&rpseudo.test(unquoted)&&(excess=tokenize(unquoted,true))&&(excess=unquoted.indexOf(")",unquoted.length-excess)-unquoted.length)){match[0]=match[0].slice(0,excess);match[2]=unquoted.slice(0,excess);}
return match.slice(0,3);}},filter:{"TAG":function(nodeNameSelector){var nodeName=nodeNameSelector.replace(runescape,funescape).toLowerCase();return nodeNameSelector==="*"?function(){return true;}:function(elem){return elem.nodeName&&elem.nodeName.toLowerCase()===nodeName;};},"CLASS":function(className){var pattern=classCache[className+" "];return pattern||(pattern=new RegExp("(^|"+whitespace+")"+className+"("+whitespace+"|$)"))&&classCache(className,function(elem){return pattern.test(typeof elem.className==="string"&&elem.className||typeof elem.getAttribute!=="undefined"&&elem.getAttribute("class")||"");});},"ATTR":function(name,operator,check){return function(elem){var result=Sizzle.attr(elem,name);if(result==null){return operator==="!=";}
if(!operator){return true;}
result+="";return operator==="="?result===check:operator==="!="?result!==check:operator==="^="?check&&result.indexOf(check)===0:operator==="*="?check&&result.indexOf(check)>-1:operator==="$="?check&&result.slice(-check.length)===check:operator==="~="?(" "+result.replace(rwhitespace," ")+" ").indexOf(check)>-1:operator==="|="?result===check||result.slice(0,check.length+1)===check+"-":false;};},"CHILD":function(type,what,argument,first,last){var simple=type.slice(0,3)!=="nth",forward=type.slice(-4)!=="last",ofType=what==="of-type";return first===1&&last===0?function(elem){return!!elem.parentNode;}:function(elem,context,xml){var cache,outerCache,node,diff,nodeIndex,start,dir=simple!==forward?"nextSibling":"previousSibling",parent=elem.parentNode,name=ofType&&elem.nodeName.toLowerCase(),useCache=!xml&&!ofType;if(parent){if(simple){while(dir){node=elem;while((node=node[dir])){if(ofType?node.nodeName.toLowerCase()===name:node.nodeType===1){return false;}}
start=dir=type==="only"&&!start&&"nextSibling";}
return true;}
start=[forward?parent.firstChild:parent.lastChild];if(forward&&useCache){outerCache=parent[expando]||(parent[expando]={});cache=outerCache[type]||[];nodeIndex=cache[0]===dirruns&&cache[1];diff=cache[0]===dirruns&&cache[2];node=nodeIndex&&parent.childNodes[nodeIndex];while((node=++nodeIndex&&node&&node[dir]||(diff=nodeIndex=0)||start.pop())){if(node.nodeType===1&&++diff&&node===elem){outerCache[type]=[dirruns,nodeIndex,diff];break;}}}else if(useCache&&(cache=(elem[expando]||(elem[expando]={}))[type])&&cache[0]===dirruns){diff=cache[1];}else{while((node=++nodeIndex&&node&&node[dir]||(diff=nodeIndex=0)||start.pop())){if((ofType?node.nodeName.toLowerCase()===name:node.nodeType===1)&&++diff){if(useCache){(node[expando]||(node[expando]={}))[type]=[dirruns,diff];}
if(node===elem){break;}}}}
diff-=last;return diff===first||(diff%first===0&&diff/first>=0);}};},"PSEUDO":function(pseudo,argument){var args,fn=Expr.pseudos[pseudo]||Expr.setFilters[pseudo.toLowerCase()]||Sizzle.error("unsupported pseudo: "+pseudo);if(fn[expando]){return fn(argument);}
if(fn.length>1){args=[pseudo,pseudo,"",argument];return Expr.setFilters.hasOwnProperty(pseudo.toLowerCase())?markFunction(function(seed,matches){var idx,matched=fn(seed,argument),i=matched.length;while(i--){idx=indexOf(seed,matched[i]);seed[idx]=!(matches[idx]=matched[i]);}}):function(elem){return fn(elem,0,args);};}
return fn;}},pseudos:{"not":markFunction(function(selector){var input=[],results=[],matcher=compile(selector.replace(rtrim,"$1"));return matcher[expando]?markFunction(function(seed,matches,context,xml){var elem,unmatched=matcher(seed,null,xml,[]),i=seed.length;while(i--){if((elem=unmatched[i])){seed[i]=!(matches[i]=elem);}}}):function(elem,context,xml){input[0]=elem;matcher(input,null,xml,results);input[0]=null;return!results.pop();};}),"has":markFunction(function(selector){return function(elem){return Sizzle(selector,elem).length>0;};}),"contains":markFunction(function(text){text=text.replace(runescape,funescape);return function(elem){return(elem.textContent||elem.innerText||getText(elem)).indexOf(text)>-1;};}),"lang":markFunction(function(lang){if(!ridentifier.test(lang||"")){Sizzle.error("unsupported lang: "+lang);}
lang=lang.replace(runescape,funescape).toLowerCase();return function(elem){var elemLang;do{if((elemLang=documentIsHTML?elem.lang:elem.getAttribute("xml:lang")||elem.getAttribute("lang"))){elemLang=elemLang.toLowerCase();return elemLang===lang||elemLang.indexOf(lang+"-")===0;}}while((elem=elem.parentNode)&&elem.nodeType===1);return false;};}),"target":function(elem){var hash=window.location&&window.location.hash;return hash&&hash.slice(1)===elem.id;},"root":function(elem){return elem===docElem;},"focus":function(elem){return elem===document.activeElement&&(!document.hasFocus||document.hasFocus())&&!!(elem.type||elem.href||~elem.tabIndex);},"enabled":function(elem){return elem.disabled===false;},"disabled":function(elem){return elem.disabled===true;},"checked":function(elem){var nodeName=elem.nodeName.toLowerCase();return(nodeName==="input"&&!!elem.checked)||(nodeName==="option"&&!!elem.selected);},"selected":function(elem){if(elem.parentNode){elem.parentNode.selectedIndex;}
return elem.selected===true;},"empty":function(elem){for(elem=elem.firstChild;elem;elem=elem.nextSibling){if(elem.nodeType<6){return false;}}
return true;},"parent":function(elem){return!Expr.pseudos["empty"](elem);},"header":function(elem){return rheader.test(elem.nodeName);},"input":function(elem){return rinputs.test(elem.nodeName);},"button":function(elem){var name=elem.nodeName.toLowerCase();return name==="input"&&elem.type==="button"||name==="button";},"text":function(elem){var attr;return elem.nodeName.toLowerCase()==="input"&&elem.type==="text"&&((attr=elem.getAttribute("type"))==null||attr.toLowerCase()==="text");},"first":createPositionalPseudo(function(){return[0];}),"last":createPositionalPseudo(function(matchIndexes,length){return[length-1];}),"eq":createPositionalPseudo(function(matchIndexes,length,argument){return[argument<0?argument+length:argument];}),"even":createPositionalPseudo(function(matchIndexes,length){var i=0;for(;i<length;i+=2){matchIndexes.push(i);}
return matchIndexes;}),"odd":createPositionalPseudo(function(matchIndexes,length){var i=1;for(;i<length;i+=2){matchIndexes.push(i);}
return matchIndexes;}),"lt":createPositionalPseudo(function(matchIndexes,length,argument){var i=argument<0?argument+length:argument;for(;--i>=0;){matchIndexes.push(i);}
return matchIndexes;}),"gt":createPositionalPseudo(function(matchIndexes,length,argument){var i=argument<0?argument+length:argument;for(;++i<length;){matchIndexes.push(i);}
return matchIndexes;})}};Expr.pseudos["nth"]=Expr.pseudos["eq"];for(i in{radio:true,checkbox:true,file:true,password:true,image:true}){Expr.pseudos[i]=createInputPseudo(i);}
for(i in{submit:true,reset:true}){Expr.pseudos[i]=createButtonPseudo(i);}
function setFilters(){}
setFilters.prototype=Expr.filters=Expr.pseudos;Expr.setFilters=new setFilters();tokenize=Sizzle.tokenize=function(selector,parseOnly){var matched,match,tokens,type,soFar,groups,preFilters,cached=tokenCache[selector+" "];if(cached){return parseOnly?0:cached.slice(0);}
soFar=selector;groups=[];preFilters=Expr.preFilter;while(soFar){if(!matched||(match=rcomma.exec(soFar))){if(match){soFar=soFar.slice(match[0].length)||soFar;}
groups.push((tokens=[]));}
matched=false;if((match=rcombinators.exec(soFar))){matched=match.shift();tokens.push({value:matched,type:match[0].replace(rtrim," ")});soFar=soFar.slice(matched.length);}
for(type in Expr.filter){if((match=matchExpr[type].exec(soFar))&&(!preFilters[type]||(match=preFilters[type](match)))){matched=match.shift();tokens.push({value:matched,type:type,matches:match});soFar=soFar.slice(matched.length);}}
if(!matched){break;}}
return parseOnly?soFar.length:soFar?Sizzle.error(selector):tokenCache(selector,groups).slice(0);};function toSelector(tokens){var i=0,len=tokens.length,selector="";for(;i<len;i++){selector+=tokens[i].value;}
return selector;}
function addCombinator(matcher,combinator,base){var dir=combinator.dir,checkNonElements=base&&dir==="parentNode",doneName=done++;return combinator.first?function(elem,context,xml){while((elem=elem[dir])){if(elem.nodeType===1||checkNonElements){return matcher(elem,context,xml);}}}:function(elem,context,xml){var oldCache,outerCache,newCache=[dirruns,doneName];if(xml){while((elem=elem[dir])){if(elem.nodeType===1||checkNonElements){if(matcher(elem,context,xml)){return true;}}}}else{while((elem=elem[dir])){if(elem.nodeType===1||checkNonElements){outerCache=elem[expando]||(elem[expando]={});if((oldCache=outerCache[dir])&&oldCache[0]===dirruns&&oldCache[1]===doneName){return(newCache[2]=oldCache[2]);}else{outerCache[dir]=newCache;if((newCache[2]=matcher(elem,context,xml))){return true;}}}}}};}
function elementMatcher(matchers){return matchers.length>1?function(elem,context,xml){var i=matchers.length;while(i--){if(!matchers[i](elem,context,xml)){return false;}}
return true;}:matchers[0];}
function multipleContexts(selector,contexts,results){var i=0,len=contexts.length;for(;i<len;i++){Sizzle(selector,contexts[i],results);}
return results;}
function condense(unmatched,map,filter,context,xml){var elem,newUnmatched=[],i=0,len=unmatched.length,mapped=map!=null;for(;i<len;i++){if((elem=unmatched[i])){if(!filter||filter(elem,context,xml)){newUnmatched.push(elem);if(mapped){map.push(i);}}}}
return newUnmatched;}
function setMatcher(preFilter,selector,matcher,postFilter,postFinder,postSelector){if(postFilter&&!postFilter[expando]){postFilter=setMatcher(postFilter);}
if(postFinder&&!postFinder[expando]){postFinder=setMatcher(postFinder,postSelector);}
return markFunction(function(seed,results,context,xml){var temp,i,elem,preMap=[],postMap=[],preexisting=results.length,elems=seed||multipleContexts(selector||"*",context.nodeType?[context]:context,[]),matcherIn=preFilter&&(seed||!selector)?condense(elems,preMap,preFilter,context,xml):elems,matcherOut=matcher?postFinder||(seed?preFilter:preexisting||postFilter)?[]:results:matcherIn;if(matcher){matcher(matcherIn,matcherOut,context,xml);}
if(postFilter){temp=condense(matcherOut,postMap);postFilter(temp,[],context,xml);i=temp.length;while(i--){if((elem=temp[i])){matcherOut[postMap[i]]=!(matcherIn[postMap[i]]=elem);}}}
if(seed){if(postFinder||preFilter){if(postFinder){temp=[];i=matcherOut.length;while(i--){if((elem=matcherOut[i])){temp.push((matcherIn[i]=elem));}}
postFinder(null,(matcherOut=[]),temp,xml);}
i=matcherOut.length;while(i--){if((elem=matcherOut[i])&&(temp=postFinder?indexOf(seed,elem):preMap[i])>-1){seed[temp]=!(results[temp]=elem);}}}}else{matcherOut=condense(matcherOut===results?matcherOut.splice(preexisting,matcherOut.length):matcherOut);if(postFinder){postFinder(null,results,matcherOut,xml);}else{push.apply(results,matcherOut);}}});}
function matcherFromTokens(tokens){var checkContext,matcher,j,len=tokens.length,leadingRelative=Expr.relative[tokens[0].type],implicitRelative=leadingRelative||Expr.relative[" "],i=leadingRelative?1:0,matchContext=addCombinator(function(elem){return elem===checkContext;},implicitRelative,true),matchAnyContext=addCombinator(function(elem){return indexOf(checkContext,elem)>-1;},implicitRelative,true),matchers=[function(elem,context,xml){var ret=(!leadingRelative&&(xml||context!==outermostContext))||((checkContext=context).nodeType?matchContext(elem,context,xml):matchAnyContext(elem,context,xml));checkContext=null;return ret;}];for(;i<len;i++){if((matcher=Expr.relative[tokens[i].type])){matchers=[addCombinator(elementMatcher(matchers),matcher)];}else{matcher=Expr.filter[tokens[i].type].apply(null,tokens[i].matches);if(matcher[expando]){j=++i;for(;j<len;j++){if(Expr.relative[tokens[j].type]){break;}}
return setMatcher(i>1&&elementMatcher(matchers),i>1&&toSelector(tokens.slice(0,i-1).concat({value:tokens[i-2].type===" "?"*":""})).replace(rtrim,"$1"),matcher,i<j&&matcherFromTokens(tokens.slice(i,j)),j<len&&matcherFromTokens((tokens=tokens.slice(j))),j<len&&toSelector(tokens));}
matchers.push(matcher);}}
return elementMatcher(matchers);}
function matcherFromGroupMatchers(elementMatchers,setMatchers){var bySet=setMatchers.length>0,byElement=elementMatchers.length>0,superMatcher=function(seed,context,xml,results,outermost){var elem,j,matcher,matchedCount=0,i="0",unmatched=seed&&[],setMatched=[],contextBackup=outermostContext,elems=seed||byElement&&Expr.find["TAG"]("*",outermost),dirrunsUnique=(dirruns+=contextBackup==null?1:Math.random()||0.1),len=elems.length;if(outermost){outermostContext=context!==document&&context;}
for(;i!==len&&(elem=elems[i])!=null;i++){if(byElement&&elem){j=0;while((matcher=elementMatchers[j++])){if(matcher(elem,context,xml)){results.push(elem);break;}}
if(outermost){dirruns=dirrunsUnique;}}
if(bySet){if((elem=!matcher&&elem)){matchedCount--;}
if(seed){unmatched.push(elem);}}}
matchedCount+=i;if(bySet&&i!==matchedCount){j=0;while((matcher=setMatchers[j++])){matcher(unmatched,setMatched,context,xml);}
if(seed){if(matchedCount>0){while(i--){if(!(unmatched[i]||setMatched[i])){setMatched[i]=pop.call(results);}}}
setMatched=condense(setMatched);}
push.apply(results,setMatched);if(outermost&&!seed&&setMatched.length>0&&(matchedCount+setMatchers.length)>1){Sizzle.uniqueSort(results);}}
if(outermost){dirruns=dirrunsUnique;outermostContext=contextBackup;}
return unmatched;};return bySet?markFunction(superMatcher):superMatcher;}
compile=Sizzle.compile=function(selector,match){var i,setMatchers=[],elementMatchers=[],cached=compilerCache[selector+" "];if(!cached){if(!match){match=tokenize(selector);}
i=match.length;while(i--){cached=matcherFromTokens(match[i]);if(cached[expando]){setMatchers.push(cached);}else{elementMatchers.push(cached);}}
cached=compilerCache(selector,matcherFromGroupMatchers(elementMatchers,setMatchers));cached.selector=selector;}
return cached;};select=Sizzle.select=function(selector,context,results,seed){var i,tokens,token,type,find,compiled=typeof selector==="function"&&selector,match=!seed&&tokenize((selector=compiled.selector||selector));results=results||[];if(match.length===1){tokens=match[0]=match[0].slice(0);if(tokens.length>2&&(token=tokens[0]).type==="ID"&&support.getById&&context.nodeType===9&&documentIsHTML&&Expr.relative[tokens[1].type]){context=(Expr.find["ID"](token.matches[0].replace(runescape,funescape),context)||[])[0];if(!context){return results;}else if(compiled){context=context.parentNode;}
selector=selector.slice(tokens.shift().value.length);}
i=matchExpr["needsContext"].test(selector)?0:tokens.length;while(i--){token=tokens[i];if(Expr.relative[(type=token.type)]){break;}
if((find=Expr.find[type])){if((seed=find(token.matches[0].replace(runescape,funescape),rsibling.test(tokens[0].type)&&testContext(context.parentNode)||context))){tokens.splice(i,1);selector=seed.length&&toSelector(tokens);if(!selector){push.apply(results,seed);return results;}
break;}}}}
(compiled||compile(selector,match))(seed,context,!documentIsHTML,results,rsibling.test(selector)&&testContext(context.parentNode)||context);return results;};support.sortStable=expando.split("").sort(sortOrder).join("")===expando;support.detectDuplicates=!!hasDuplicate;setDocument();support.sortDetached=assert(function(div1){return div1.compareDocumentPosition(document.createElement("div"))&1;});if(!assert(function(div){div.innerHTML="<a href='#'></a>";return div.firstChild.getAttribute("href")==="#";})){addHandle("type|href|height|width",function(elem,name,isXML){if(!isXML){return elem.getAttribute(name,name.toLowerCase()==="type"?1:2);}});}
if(!support.attributes||!assert(function(div){div.innerHTML="<input/>";div.firstChild.setAttribute("value","");return div.firstChild.getAttribute("value")==="";})){addHandle("value",function(elem,name,isXML){if(!isXML&&elem.nodeName.toLowerCase()==="input"){return elem.defaultValue;}});}
if(!assert(function(div){return div.getAttribute("disabled")==null;})){addHandle(booleans,function(elem,name,isXML){var val;if(!isXML){return elem[name]===true?name.toLowerCase():(val=elem.getAttributeNode(name))&&val.specified?val.value:null;}});}
return Sizzle;})(window);jQuery.find=Sizzle;jQuery.expr=Sizzle.selectors;jQuery.expr[":"]=jQuery.expr.pseudos;jQuery.unique=Sizzle.uniqueSort;jQuery.text=Sizzle.getText;jQuery.isXMLDoc=Sizzle.isXML;jQuery.contains=Sizzle.contains;var rneedsContext=jQuery.expr.match.needsContext;var rsingleTag=(/^<(\w+)\s*\/?>(?:<\/\1>|)$/);var risSimple=/^.[^:#\[\.,]*$/;function winnow(elements,qualifier,not){if(jQuery.isFunction(qualifier)){return jQuery.grep(elements,function(elem,i){return!!qualifier.call(elem,i,elem)!==not;});}
if(qualifier.nodeType){return jQuery.grep(elements,function(elem){return(elem===qualifier)!==not;});}
if(typeof qualifier==="string"){if(risSimple.test(qualifier)){return jQuery.filter(qualifier,elements,not);}
qualifier=jQuery.filter(qualifier,elements);}
return jQuery.grep(elements,function(elem){return(jQuery.inArray(elem,qualifier)>=0)!==not;});}
jQuery.filter=function(expr,elems,not){var elem=elems[0];if(not){expr=":not("+expr+")";}
return elems.length===1&&elem.nodeType===1?jQuery.find.matchesSelector(elem,expr)?[elem]:[]:jQuery.find.matches(expr,jQuery.grep(elems,function(elem){return elem.nodeType===1;}));};jQuery.fn.extend({find:function(selector){var i,ret=[],self=this,len=self.length;if(typeof selector!=="string"){return this.pushStack(jQuery(selector).filter(function(){for(i=0;i<len;i++){if(jQuery.contains(self[i],this)){return true;}}}));}
for(i=0;i<len;i++){jQuery.find(selector,self[i],ret);}
ret=this.pushStack(len>1?jQuery.unique(ret):ret);ret.selector=this.selector?this.selector+" "+selector:selector;return ret;},filter:function(selector){return this.pushStack(winnow(this,selector||[],false));},not:function(selector){return this.pushStack(winnow(this,selector||[],true));},is:function(selector){return!!winnow(this,typeof selector==="string"&&rneedsContext.test(selector)?jQuery(selector):selector||[],false).length;}});var rootjQuery,document=window.document,rquickExpr=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,init=jQuery.fn.init=function(selector,context){var match,elem;if(!selector){return this;}
if(typeof selector==="string"){if(selector.charAt(0)==="<"&&selector.charAt(selector.length-1)===">"&&selector.length>=3){match=[null,selector,null];}else{match=rquickExpr.exec(selector);}
if(match&&(match[1]||!context)){if(match[1]){context=context instanceof jQuery?context[0]:context;jQuery.merge(this,jQuery.parseHTML(match[1],context&&context.nodeType?context.ownerDocument||context:document,true));if(rsingleTag.test(match[1])&&jQuery.isPlainObject(context)){for(match in context){if(jQuery.isFunction(this[match])){this[match](context[match]);}else{this.attr(match,context[match]);}}}
return this;}else{elem=document.getElementById(match[2]);if(elem&&elem.parentNode){if(elem.id!==match[2]){return rootjQuery.find(selector);}
this.length=1;this[0]=elem;}
this.context=document;this.selector=selector;return this;}}else if(!context||context.jquery){return(context||rootjQuery).find(selector);}else{return this.constructor(context).find(selector);}}else if(selector.nodeType){this.context=this[0]=selector;this.length=1;return this;}else if(jQuery.isFunction(selector)){return typeof rootjQuery.ready!=="undefined"?rootjQuery.ready(selector):selector(jQuery);}
if(selector.selector!==undefined){this.selector=selector.selector;this.context=selector.context;}
return jQuery.makeArray(selector,this);};init.prototype=jQuery.fn;rootjQuery=jQuery(document);var rparentsprev=/^(?:parents|prev(?:Until|All))/,guaranteedUnique={children:true,contents:true,next:true,prev:true};jQuery.extend({dir:function(elem,dir,until){var matched=[],cur=elem[dir];while(cur&&cur.nodeType!==9&&(until===undefined||cur.nodeType!==1||!jQuery(cur).is(until))){if(cur.nodeType===1){matched.push(cur);}
cur=cur[dir];}
return matched;},sibling:function(n,elem){var r=[];for(;n;n=n.nextSibling){if(n.nodeType===1&&n!==elem){r.push(n);}}
return r;}});jQuery.fn.extend({has:function(target){var i,targets=jQuery(target,this),len=targets.length;return this.filter(function(){for(i=0;i<len;i++){if(jQuery.contains(this,targets[i])){return true;}}});},closest:function(selectors,context){var cur,i=0,l=this.length,matched=[],pos=rneedsContext.test(selectors)||typeof selectors!=="string"?jQuery(selectors,context||this.context):0;for(;i<l;i++){for(cur=this[i];cur&&cur!==context;cur=cur.parentNode){if(cur.nodeType<11&&(pos?pos.index(cur)>-1:cur.nodeType===1&&jQuery.find.matchesSelector(cur,selectors))){matched.push(cur);break;}}}
return this.pushStack(matched.length>1?jQuery.unique(matched):matched);},index:function(elem){if(!elem){return(this[0]&&this[0].parentNode)?this.first().prevAll().length:-1;}
if(typeof elem==="string"){return jQuery.inArray(this[0],jQuery(elem));}
return jQuery.inArray(elem.jquery?elem[0]:elem,this);},add:function(selector,context){return this.pushStack(jQuery.unique(jQuery.merge(this.get(),jQuery(selector,context))));},addBack:function(selector){return this.add(selector==null?this.prevObject:this.prevObject.filter(selector));}});function sibling(cur,dir){do{cur=cur[dir];}while(cur&&cur.nodeType!==1);return cur;}
jQuery.each({parent:function(elem){var parent=elem.parentNode;return parent&&parent.nodeType!==11?parent:null;},parents:function(elem){return jQuery.dir(elem,"parentNode");},parentsUntil:function(elem,i,until){return jQuery.dir(elem,"parentNode",until);},next:function(elem){return sibling(elem,"nextSibling");},prev:function(elem){return sibling(elem,"previousSibling");},nextAll:function(elem){return jQuery.dir(elem,"nextSibling");},prevAll:function(elem){return jQuery.dir(elem,"previousSibling");},nextUntil:function(elem,i,until){return jQuery.dir(elem,"nextSibling",until);},prevUntil:function(elem,i,until){return jQuery.dir(elem,"previousSibling",until);},siblings:function(elem){return jQuery.sibling((elem.parentNode||{}).firstChild,elem);},children:function(elem){return jQuery.sibling(elem.firstChild);},contents:function(elem){return jQuery.nodeName(elem,"iframe")?elem.contentDocument||elem.contentWindow.document:jQuery.merge([],elem.childNodes);}},function(name,fn){jQuery.fn[name]=function(until,selector){var ret=jQuery.map(this,fn,until);if(name.slice(-5)!=="Until"){selector=until;}
if(selector&&typeof selector==="string"){ret=jQuery.filter(selector,ret);}
if(this.length>1){if(!guaranteedUnique[name]){ret=jQuery.unique(ret);}
if(rparentsprev.test(name)){ret=ret.reverse();}}
return this.pushStack(ret);};});var rnotwhite=(/\S+/g);var optionsCache={};function createOptions(options){var object=optionsCache[options]={};jQuery.each(options.match(rnotwhite)||[],function(_,flag){object[flag]=true;});return object;}
jQuery.Callbacks=function(options){options=typeof options==="string"?(optionsCache[options]||createOptions(options)):jQuery.extend({},options);var
firing,memory,fired,firingLength,firingIndex,firingStart,list=[],stack=!options.once&&[],fire=function(data){memory=options.memory&&data;fired=true;firingIndex=firingStart||0;firingStart=0;firingLength=list.length;firing=true;for(;list&&firingIndex<firingLength;firingIndex++){if(list[firingIndex].apply(data[0],data[1])===false&&options.stopOnFalse){memory=false;break;}}
firing=false;if(list){if(stack){if(stack.length){fire(stack.shift());}}else if(memory){list=[];}else{self.disable();}}},self={add:function(){if(list){var start=list.length;(function add(args){jQuery.each(args,function(_,arg){var type=jQuery.type(arg);if(type==="function"){if(!options.unique||!self.has(arg)){list.push(arg);}}else if(arg&&arg.length&&type!=="string"){add(arg);}});})(arguments);if(firing){firingLength=list.length;}else if(memory){firingStart=start;fire(memory);}}
return this;},remove:function(){if(list){jQuery.each(arguments,function(_,arg){var index;while((index=jQuery.inArray(arg,list,index))>-1){list.splice(index,1);if(firing){if(index<=firingLength){firingLength--;}
if(index<=firingIndex){firingIndex--;}}}});}
return this;},has:function(fn){return fn?jQuery.inArray(fn,list)>-1:!!(list&&list.length);},empty:function(){list=[];firingLength=0;return this;},disable:function(){list=stack=memory=undefined;return this;},disabled:function(){return!list;},lock:function(){stack=undefined;if(!memory){self.disable();}
return this;},locked:function(){return!stack;},fireWith:function(context,args){if(list&&(!fired||stack)){args=args||[];args=[context,args.slice?args.slice():args];if(firing){stack.push(args);}else{fire(args);}}
return this;},fire:function(){self.fireWith(this,arguments);return this;},fired:function(){return!!fired;}};return self;};jQuery.extend({Deferred:function(func){var tuples=[["resolve","done",jQuery.Callbacks("once memory"),"resolved"],["reject","fail",jQuery.Callbacks("once memory"),"rejected"],["notify","progress",jQuery.Callbacks("memory")]],state="pending",promise={state:function(){return state;},always:function(){deferred.done(arguments).fail(arguments);return this;},then:function(){var fns=arguments;return jQuery.Deferred(function(newDefer){jQuery.each(tuples,function(i,tuple){var fn=jQuery.isFunction(fns[i])&&fns[i];deferred[tuple[1]](function(){var returned=fn&&fn.apply(this,arguments);if(returned&&jQuery.isFunction(returned.promise)){returned.promise().done(newDefer.resolve).fail(newDefer.reject).progress(newDefer.notify);}else{newDefer[tuple[0]+"With"](this===promise?newDefer.promise():this,fn?[returned]:arguments);}});});fns=null;}).promise();},promise:function(obj){return obj!=null?jQuery.extend(obj,promise):promise;}},deferred={};promise.pipe=promise.then;jQuery.each(tuples,function(i,tuple){var list=tuple[2],stateString=tuple[3];promise[tuple[1]]=list.add;if(stateString){list.add(function(){state=stateString;},tuples[i^1][2].disable,tuples[2][2].lock);}
deferred[tuple[0]]=function(){deferred[tuple[0]+"With"](this===deferred?promise:this,arguments);return this;};deferred[tuple[0]+"With"]=list.fireWith;});promise.promise(deferred);if(func){func.call(deferred,deferred);}
return deferred;},when:function(subordinate){var i=0,resolveValues=slice.call(arguments),length=resolveValues.length,remaining=length!==1||(subordinate&&jQuery.isFunction(subordinate.promise))?length:0,deferred=remaining===1?subordinate:jQuery.Deferred(),updateFunc=function(i,contexts,values){return function(value){contexts[i]=this;values[i]=arguments.length>1?slice.call(arguments):value;if(values===progressValues){deferred.notifyWith(contexts,values);}else if(!(--remaining)){deferred.resolveWith(contexts,values);}};},progressValues,progressContexts,resolveContexts;if(length>1){progressValues=new Array(length);progressContexts=new Array(length);resolveContexts=new Array(length);for(;i<length;i++){if(resolveValues[i]&&jQuery.isFunction(resolveValues[i].promise)){resolveValues[i].promise().done(updateFunc(i,resolveContexts,resolveValues)).fail(deferred.reject).progress(updateFunc(i,progressContexts,progressValues));}else{--remaining;}}}
if(!remaining){deferred.resolveWith(resolveContexts,resolveValues);}
return deferred.promise();}});var readyList;jQuery.fn.ready=function(fn){jQuery.ready.promise().done(fn);return this;};jQuery.extend({isReady:false,readyWait:1,holdReady:function(hold){if(hold){jQuery.readyWait++;}else{jQuery.ready(true);}},ready:function(wait){if(wait===true?--jQuery.readyWait:jQuery.isReady){return;}
if(!document.body){return setTimeout(jQuery.ready);}
jQuery.isReady=true;if(wait!==true&&--jQuery.readyWait>0){return;}
readyList.resolveWith(document,[jQuery]);if(jQuery.fn.triggerHandler){jQuery(document).triggerHandler("ready");jQuery(document).off("ready");}}});function detach(){if(document.addEventListener){document.removeEventListener("DOMContentLoaded",completed,false);window.removeEventListener("load",completed,false);}else{document.detachEvent("onreadystatechange",completed);window.detachEvent("onload",completed);}}
function completed(){if(document.addEventListener||event.type==="load"||document.readyState==="complete"){detach();jQuery.ready();}}
jQuery.ready.promise=function(obj){if(!readyList){readyList=jQuery.Deferred();if(document.readyState==="complete"){setTimeout(jQuery.ready);}else if(document.addEventListener){document.addEventListener("DOMContentLoaded",completed,false);window.addEventListener("load",completed,false);}else{document.attachEvent("onreadystatechange",completed);window.attachEvent("onload",completed);var top=false;try{top=window.frameElement==null&&document.documentElement;}catch(e){}
if(top&&top.doScroll){(function doScrollCheck(){if(!jQuery.isReady){try{top.doScroll("left");}catch(e){return setTimeout(doScrollCheck,50);}
detach();jQuery.ready();}})();}}}
return readyList.promise(obj);};var strundefined=typeof undefined;var i;for(i in jQuery(support)){break;}
support.ownLast=i!=="0";support.inlineBlockNeedsLayout=false;jQuery(function(){var val,div,body,container;body=document.getElementsByTagName("body")[0];if(!body||!body.style){return;}
div=document.createElement("div");container=document.createElement("div");container.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px";body.appendChild(container).appendChild(div);if(typeof div.style.zoom!==strundefined){div.style.cssText="display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1";support.inlineBlockNeedsLayout=val=div.offsetWidth===3;if(val){body.style.zoom=1;}}
body.removeChild(container);});(function(){var div=document.createElement("div");if(support.deleteExpando==null){support.deleteExpando=true;try{delete div.test;}catch(e){support.deleteExpando=false;}}
div=null;})();jQuery.acceptData=function(elem){var noData=jQuery.noData[(elem.nodeName+" ").toLowerCase()],nodeType=+elem.nodeType||1;return nodeType!==1&&nodeType!==9?false:!noData||noData!==true&&elem.getAttribute("classid")===noData;};var rbrace=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,rmultiDash=/([A-Z])/g;function dataAttr(elem,key,data){if(data===undefined&&elem.nodeType===1){var name="data-"+key.replace(rmultiDash,"-$1").toLowerCase();data=elem.getAttribute(name);if(typeof data==="string"){try{data=data==="true"?true:data==="false"?false:data==="null"?null:+data+""===data?+data:rbrace.test(data)?jQuery.parseJSON(data):data;}catch(e){}
jQuery.data(elem,key,data);}else{data=undefined;}}
return data;}
function isEmptyDataObject(obj){var name;for(name in obj){if(name==="data"&&jQuery.isEmptyObject(obj[name])){continue;}
if(name!=="toJSON"){return false;}}
return true;}
function internalData(elem,name,data,pvt){if(!jQuery.acceptData(elem)){return;}
var ret,thisCache,internalKey=jQuery.expando,isNode=elem.nodeType,cache=isNode?jQuery.cache:elem,id=isNode?elem[internalKey]:elem[internalKey]&&internalKey;if((!id||!cache[id]||(!pvt&&!cache[id].data))&&data===undefined&&typeof name==="string"){return;}
if(!id){if(isNode){id=elem[internalKey]=deletedIds.pop()||jQuery.guid++;}else{id=internalKey;}}
if(!cache[id]){cache[id]=isNode?{}:{toJSON:jQuery.noop};}
if(typeof name==="object"||typeof name==="function"){if(pvt){cache[id]=jQuery.extend(cache[id],name);}else{cache[id].data=jQuery.extend(cache[id].data,name);}}
thisCache=cache[id];if(!pvt){if(!thisCache.data){thisCache.data={};}
thisCache=thisCache.data;}
if(data!==undefined){thisCache[jQuery.camelCase(name)]=data;}
if(typeof name==="string"){ret=thisCache[name];if(ret==null){ret=thisCache[jQuery.camelCase(name)];}}else{ret=thisCache;}
return ret;}
function internalRemoveData(elem,name,pvt){if(!jQuery.acceptData(elem)){return;}
var thisCache,i,isNode=elem.nodeType,cache=isNode?jQuery.cache:elem,id=isNode?elem[jQuery.expando]:jQuery.expando;if(!cache[id]){return;}
if(name){thisCache=pvt?cache[id]:cache[id].data;if(thisCache){if(!jQuery.isArray(name)){if(name in thisCache){name=[name];}else{name=jQuery.camelCase(name);if(name in thisCache){name=[name];}else{name=name.split(" ");}}}else{name=name.concat(jQuery.map(name,jQuery.camelCase));}
i=name.length;while(i--){delete thisCache[name[i]];}
if(pvt?!isEmptyDataObject(thisCache):!jQuery.isEmptyObject(thisCache)){return;}}}
if(!pvt){delete cache[id].data;if(!isEmptyDataObject(cache[id])){return;}}
if(isNode){jQuery.cleanData([elem],true);}else if(support.deleteExpando||cache!=cache.window){delete cache[id];}else{cache[id]=null;}}
jQuery.extend({cache:{},noData:{"applet ":true,"embed ":true,"object ":"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"},hasData:function(elem){elem=elem.nodeType?jQuery.cache[elem[jQuery.expando]]:elem[jQuery.expando];return!!elem&&!isEmptyDataObject(elem);},data:function(elem,name,data){return internalData(elem,name,data);},removeData:function(elem,name){return internalRemoveData(elem,name);},_data:function(elem,name,data){return internalData(elem,name,data,true);},_removeData:function(elem,name){return internalRemoveData(elem,name,true);}});jQuery.fn.extend({data:function(key,value){var i,name,data,elem=this[0],attrs=elem&&elem.attributes;if(key===undefined){if(this.length){data=jQuery.data(elem);if(elem.nodeType===1&&!jQuery._data(elem,"parsedAttrs")){i=attrs.length;while(i--){if(attrs[i]){name=attrs[i].name;if(name.indexOf("data-")===0){name=jQuery.camelCase(name.slice(5));dataAttr(elem,name,data[name]);}}}
jQuery._data(elem,"parsedAttrs",true);}}
return data;}
if(typeof key==="object"){return this.each(function(){jQuery.data(this,key);});}
return arguments.length>1?this.each(function(){jQuery.data(this,key,value);}):elem?dataAttr(elem,key,jQuery.data(elem,key)):undefined;},removeData:function(key){return this.each(function(){jQuery.removeData(this,key);});}});jQuery.extend({queue:function(elem,type,data){var queue;if(elem){type=(type||"fx")+"queue";queue=jQuery._data(elem,type);if(data){if(!queue||jQuery.isArray(data)){queue=jQuery._data(elem,type,jQuery.makeArray(data));}else{queue.push(data);}}
return queue||[];}},dequeue:function(elem,type){type=type||"fx";var queue=jQuery.queue(elem,type),startLength=queue.length,fn=queue.shift(),hooks=jQuery._queueHooks(elem,type),next=function(){jQuery.dequeue(elem,type);};if(fn==="inprogress"){fn=queue.shift();startLength--;}
if(fn){if(type==="fx"){queue.unshift("inprogress");}
delete hooks.stop;fn.call(elem,next,hooks);}
if(!startLength&&hooks){hooks.empty.fire();}},_queueHooks:function(elem,type){var key=type+"queueHooks";return jQuery._data(elem,key)||jQuery._data(elem,key,{empty:jQuery.Callbacks("once memory").add(function(){jQuery._removeData(elem,type+"queue");jQuery._removeData(elem,key);})});}});jQuery.fn.extend({queue:function(type,data){var setter=2;if(typeof type!=="string"){data=type;type="fx";setter--;}
if(arguments.length<setter){return jQuery.queue(this[0],type);}
return data===undefined?this:this.each(function(){var queue=jQuery.queue(this,type,data);jQuery._queueHooks(this,type);if(type==="fx"&&queue[0]!=="inprogress"){jQuery.dequeue(this,type);}});},dequeue:function(type){return this.each(function(){jQuery.dequeue(this,type);});},clearQueue:function(type){return this.queue(type||"fx",[]);},promise:function(type,obj){var tmp,count=1,defer=jQuery.Deferred(),elements=this,i=this.length,resolve=function(){if(!(--count)){defer.resolveWith(elements,[elements]);}};if(typeof type!=="string"){obj=type;type=undefined;}
type=type||"fx";while(i--){tmp=jQuery._data(elements[i],type+"queueHooks");if(tmp&&tmp.empty){count++;tmp.empty.add(resolve);}}
resolve();return defer.promise(obj);}});var pnum=(/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/).source;var cssExpand=["Top","Right","Bottom","Left"];var isHidden=function(elem,el){elem=el||elem;return jQuery.css(elem,"display")==="none"||!jQuery.contains(elem.ownerDocument,elem);};var access=jQuery.access=function(elems,fn,key,value,chainable,emptyGet,raw){var i=0,length=elems.length,bulk=key==null;if(jQuery.type(key)==="object"){chainable=true;for(i in key){jQuery.access(elems,fn,i,key[i],true,emptyGet,raw);}}else if(value!==undefined){chainable=true;if(!jQuery.isFunction(value)){raw=true;}
if(bulk){if(raw){fn.call(elems,value);fn=null;}else{bulk=fn;fn=function(elem,key,value){return bulk.call(jQuery(elem),value);};}}
if(fn){for(;i<length;i++){fn(elems[i],key,raw?value:value.call(elems[i],i,fn(elems[i],key)));}}}
return chainable?elems:bulk?fn.call(elems):length?fn(elems[0],key):emptyGet;};var rcheckableType=(/^(?:checkbox|radio)$/i);(function(){var input=document.createElement("input"),div=document.createElement("div"),fragment=document.createDocumentFragment();div.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>";support.leadingWhitespace=div.firstChild.nodeType===3;support.tbody=!div.getElementsByTagName("tbody").length;support.htmlSerialize=!!div.getElementsByTagName("link").length;support.html5Clone=document.createElement("nav").cloneNode(true).outerHTML!=="<:nav></:nav>";input.type="checkbox";input.checked=true;fragment.appendChild(input);support.appendChecked=input.checked;div.innerHTML="<textarea>x</textarea>";support.noCloneChecked=!!div.cloneNode(true).lastChild.defaultValue;fragment.appendChild(div);div.innerHTML="<input type='radio' checked='checked' name='t'/>";support.checkClone=div.cloneNode(true).cloneNode(true).lastChild.checked;support.noCloneEvent=true;if(div.attachEvent){div.attachEvent("onclick",function(){support.noCloneEvent=false;});div.cloneNode(true).click();}
if(support.deleteExpando==null){support.deleteExpando=true;try{delete div.test;}catch(e){support.deleteExpando=false;}}})();(function(){var i,eventName,div=document.createElement("div");for(i in{submit:true,change:true,focusin:true}){eventName="on"+i;if(!(support[i+"Bubbles"]=eventName in window)){div.setAttribute(eventName,"t");support[i+"Bubbles"]=div.attributes[eventName].expando===false;}}
div=null;})();var rformElems=/^(?:input|select|textarea)$/i,rkeyEvent=/^key/,rmouseEvent=/^(?:mouse|pointer|contextmenu)|click/,rfocusMorph=/^(?:focusinfocus|focusoutblur)$/,rtypenamespace=/^([^.]*)(?:\.(.+)|)$/;function returnTrue(){return true;}
function returnFalse(){return false;}
function safeActiveElement(){try{return document.activeElement;}catch(err){}}
jQuery.event={global:{},add:function(elem,types,handler,data,selector){var tmp,events,t,handleObjIn,special,eventHandle,handleObj,handlers,type,namespaces,origType,elemData=jQuery._data(elem);if(!elemData){return;}
if(handler.handler){handleObjIn=handler;handler=handleObjIn.handler;selector=handleObjIn.selector;}
if(!handler.guid){handler.guid=jQuery.guid++;}
if(!(events=elemData.events)){events=elemData.events={};}
if(!(eventHandle=elemData.handle)){eventHandle=elemData.handle=function(e){return typeof jQuery!==strundefined&&(!e||jQuery.event.triggered!==e.type)?jQuery.event.dispatch.apply(eventHandle.elem,arguments):undefined;};eventHandle.elem=elem;}
types=(types||"").match(rnotwhite)||[""];t=types.length;while(t--){tmp=rtypenamespace.exec(types[t])||[];type=origType=tmp[1];namespaces=(tmp[2]||"").split(".").sort();if(!type){continue;}
special=jQuery.event.special[type]||{};type=(selector?special.delegateType:special.bindType)||type;special=jQuery.event.special[type]||{};handleObj=jQuery.extend({type:type,origType:origType,data:data,handler:handler,guid:handler.guid,selector:selector,needsContext:selector&&jQuery.expr.match.needsContext.test(selector),namespace:namespaces.join(".")},handleObjIn);if(!(handlers=events[type])){handlers=events[type]=[];handlers.delegateCount=0;if(!special.setup||special.setup.call(elem,data,namespaces,eventHandle)===false){if(elem.addEventListener){elem.addEventListener(type,eventHandle,false);}else if(elem.attachEvent){elem.attachEvent("on"+type,eventHandle);}}}
if(special.add){special.add.call(elem,handleObj);if(!handleObj.handler.guid){handleObj.handler.guid=handler.guid;}}
if(selector){handlers.splice(handlers.delegateCount++,0,handleObj);}else{handlers.push(handleObj);}
jQuery.event.global[type]=true;}
elem=null;},remove:function(elem,types,handler,selector,mappedTypes){var j,handleObj,tmp,origCount,t,events,special,handlers,type,namespaces,origType,elemData=jQuery.hasData(elem)&&jQuery._data(elem);if(!elemData||!(events=elemData.events)){return;}
types=(types||"").match(rnotwhite)||[""];t=types.length;while(t--){tmp=rtypenamespace.exec(types[t])||[];type=origType=tmp[1];namespaces=(tmp[2]||"").split(".").sort();if(!type){for(type in events){jQuery.event.remove(elem,type+types[t],handler,selector,true);}
continue;}
special=jQuery.event.special[type]||{};type=(selector?special.delegateType:special.bindType)||type;handlers=events[type]||[];tmp=tmp[2]&&new RegExp("(^|\\.)"+namespaces.join("\\.(?:.*\\.|)")+"(\\.|$)");origCount=j=handlers.length;while(j--){handleObj=handlers[j];if((mappedTypes||origType===handleObj.origType)&&(!handler||handler.guid===handleObj.guid)&&(!tmp||tmp.test(handleObj.namespace))&&(!selector||selector===handleObj.selector||selector==="**"&&handleObj.selector)){handlers.splice(j,1);if(handleObj.selector){handlers.delegateCount--;}
if(special.remove){special.remove.call(elem,handleObj);}}}
if(origCount&&!handlers.length){if(!special.teardown||special.teardown.call(elem,namespaces,elemData.handle)===false){jQuery.removeEvent(elem,type,elemData.handle);}
delete events[type];}}
if(jQuery.isEmptyObject(events)){delete elemData.handle;jQuery._removeData(elem,"events");}},trigger:function(event,data,elem,onlyHandlers){var handle,ontype,cur,bubbleType,special,tmp,i,eventPath=[elem||document],type=hasOwn.call(event,"type")?event.type:event,namespaces=hasOwn.call(event,"namespace")?event.namespace.split("."):[];cur=tmp=elem=elem||document;if(elem.nodeType===3||elem.nodeType===8){return;}
if(rfocusMorph.test(type+jQuery.event.triggered)){return;}
if(type.indexOf(".")>=0){namespaces=type.split(".");type=namespaces.shift();namespaces.sort();}
ontype=type.indexOf(":")<0&&"on"+type;event=event[jQuery.expando]?event:new jQuery.Event(type,typeof event==="object"&&event);event.isTrigger=onlyHandlers?2:3;event.namespace=namespaces.join(".");event.namespace_re=event.namespace?new RegExp("(^|\\.)"+namespaces.join("\\.(?:.*\\.|)")+"(\\.|$)"):null;event.result=undefined;if(!event.target){event.target=elem;}
data=data==null?[event]:jQuery.makeArray(data,[event]);special=jQuery.event.special[type]||{};if(!onlyHandlers&&special.trigger&&special.trigger.apply(elem,data)===false){return;}
if(!onlyHandlers&&!special.noBubble&&!jQuery.isWindow(elem)){bubbleType=special.delegateType||type;if(!rfocusMorph.test(bubbleType+type)){cur=cur.parentNode;}
for(;cur;cur=cur.parentNode){eventPath.push(cur);tmp=cur;}
if(tmp===(elem.ownerDocument||document)){eventPath.push(tmp.defaultView||tmp.parentWindow||window);}}
i=0;while((cur=eventPath[i++])&&!event.isPropagationStopped()){event.type=i>1?bubbleType:special.bindType||type;handle=(jQuery._data(cur,"events")||{})[event.type]&&jQuery._data(cur,"handle");if(handle){handle.apply(cur,data);}
handle=ontype&&cur[ontype];if(handle&&handle.apply&&jQuery.acceptData(cur)){event.result=handle.apply(cur,data);if(event.result===false){event.preventDefault();}}}
event.type=type;if(!onlyHandlers&&!event.isDefaultPrevented()){if((!special._default||special._default.apply(eventPath.pop(),data)===false)&&jQuery.acceptData(elem)){if(ontype&&elem[type]&&!jQuery.isWindow(elem)){tmp=elem[ontype];if(tmp){elem[ontype]=null;}
jQuery.event.triggered=type;try{elem[type]();}catch(e){}
jQuery.event.triggered=undefined;if(tmp){elem[ontype]=tmp;}}}}
return event.result;},dispatch:function(event){event=jQuery.event.fix(event);var i,ret,handleObj,matched,j,handlerQueue=[],args=slice.call(arguments),handlers=(jQuery._data(this,"events")||{})[event.type]||[],special=jQuery.event.special[event.type]||{};args[0]=event;event.delegateTarget=this;if(special.preDispatch&&special.preDispatch.call(this,event)===false){return;}
handlerQueue=jQuery.event.handlers.call(this,event,handlers);i=0;while((matched=handlerQueue[i++])&&!event.isPropagationStopped()){event.currentTarget=matched.elem;j=0;while((handleObj=matched.handlers[j++])&&!event.isImmediatePropagationStopped()){if(!event.namespace_re||event.namespace_re.test(handleObj.namespace)){event.handleObj=handleObj;event.data=handleObj.data;ret=((jQuery.event.special[handleObj.origType]||{}).handle||handleObj.handler).apply(matched.elem,args);if(ret!==undefined){if((event.result=ret)===false){event.preventDefault();event.stopPropagation();}}}}}
if(special.postDispatch){special.postDispatch.call(this,event);}
return event.result;},handlers:function(event,handlers){var sel,handleObj,matches,i,handlerQueue=[],delegateCount=handlers.delegateCount,cur=event.target;if(delegateCount&&cur.nodeType&&(!event.button||event.type!=="click")){for(;cur!=this;cur=cur.parentNode||this){if(cur.nodeType===1&&(cur.disabled!==true||event.type!=="click")){matches=[];for(i=0;i<delegateCount;i++){handleObj=handlers[i];sel=handleObj.selector+" ";if(matches[sel]===undefined){matches[sel]=handleObj.needsContext?jQuery(sel,this).index(cur)>=0:jQuery.find(sel,this,null,[cur]).length;}
if(matches[sel]){matches.push(handleObj);}}
if(matches.length){handlerQueue.push({elem:cur,handlers:matches});}}}}
if(delegateCount<handlers.length){handlerQueue.push({elem:this,handlers:handlers.slice(delegateCount)});}
return handlerQueue;},fix:function(event){if(event[jQuery.expando]){return event;}
var i,prop,copy,type=event.type,originalEvent=event,fixHook=this.fixHooks[type];if(!fixHook){this.fixHooks[type]=fixHook=rmouseEvent.test(type)?this.mouseHooks:rkeyEvent.test(type)?this.keyHooks:{};}
copy=fixHook.props?this.props.concat(fixHook.props):this.props;event=new jQuery.Event(originalEvent);i=copy.length;while(i--){prop=copy[i];event[prop]=originalEvent[prop];}
if(!event.target){event.target=originalEvent.srcElement||document;}
if(event.target.nodeType===3){event.target=event.target.parentNode;}
event.metaKey=!!event.metaKey;return fixHook.filter?fixHook.filter(event,originalEvent):event;},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(event,original){if(event.which==null){event.which=original.charCode!=null?original.charCode:original.keyCode;}
return event;}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(event,original){var body,eventDoc,doc,button=original.button,fromElement=original.fromElement;if(event.pageX==null&&original.clientX!=null){eventDoc=event.target.ownerDocument||document;doc=eventDoc.documentElement;body=eventDoc.body;event.pageX=original.clientX+(doc&&doc.scrollLeft||body&&body.scrollLeft||0)-(doc&&doc.clientLeft||body&&body.clientLeft||0);event.pageY=original.clientY+(doc&&doc.scrollTop||body&&body.scrollTop||0)-(doc&&doc.clientTop||body&&body.clientTop||0);}
if(!event.relatedTarget&&fromElement){event.relatedTarget=fromElement===event.target?original.toElement:fromElement;}
if(!event.which&&button!==undefined){event.which=(button&1?1:(button&2?3:(button&4?2:0)));}
return event;}},special:{load:{noBubble:true},focus:{trigger:function(){if(this!==safeActiveElement()&&this.focus){try{this.focus();return false;}catch(e){}}},delegateType:"focusin"},blur:{trigger:function(){if(this===safeActiveElement()&&this.blur){this.blur();return false;}},delegateType:"focusout"},click:{trigger:function(){if(jQuery.nodeName(this,"input")&&this.type==="checkbox"&&this.click){this.click();return false;}},_default:function(event){return jQuery.nodeName(event.target,"a");}},beforeunload:{postDispatch:function(event){if(event.result!==undefined&&event.originalEvent){event.originalEvent.returnValue=event.result;}}}},simulate:function(type,elem,event,bubble){var e=jQuery.extend(new jQuery.Event(),event,{type:type,isSimulated:true,originalEvent:{}});if(bubble){jQuery.event.trigger(e,null,elem);}else{jQuery.event.dispatch.call(elem,e);}
if(e.isDefaultPrevented()){event.preventDefault();}}};jQuery.removeEvent=document.removeEventListener?function(elem,type,handle){if(elem.removeEventListener){elem.removeEventListener(type,handle,false);}}:function(elem,type,handle){var name="on"+type;if(elem.detachEvent){if(typeof elem[name]===strundefined){elem[name]=null;}
elem.detachEvent(name,handle);}};jQuery.Event=function(src,props){if(!(this instanceof jQuery.Event)){return new jQuery.Event(src,props);}
if(src&&src.type){this.originalEvent=src;this.type=src.type;this.isDefaultPrevented=src.defaultPrevented||src.defaultPrevented===undefined&&src.returnValue===false?returnTrue:returnFalse;}else{this.type=src;}
if(props){jQuery.extend(this,props);}
this.timeStamp=src&&src.timeStamp||jQuery.now();this[jQuery.expando]=true;};jQuery.Event.prototype={isDefaultPrevented:returnFalse,isPropagationStopped:returnFalse,isImmediatePropagationStopped:returnFalse,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=returnTrue;if(!e){return;}
if(e.preventDefault){e.preventDefault();}else{e.returnValue=false;}},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=returnTrue;if(!e){return;}
if(e.stopPropagation){e.stopPropagation();}
e.cancelBubble=true;},stopImmediatePropagation:function(){var e=this.originalEvent;this.isImmediatePropagationStopped=returnTrue;if(e&&e.stopImmediatePropagation){e.stopImmediatePropagation();}
this.stopPropagation();}};jQuery.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(orig,fix){jQuery.event.special[orig]={delegateType:fix,bindType:fix,handle:function(event){var ret,target=this,related=event.relatedTarget,handleObj=event.handleObj;if(!related||(related!==target&&!jQuery.contains(target,related))){event.type=handleObj.origType;ret=handleObj.handler.apply(this,arguments);event.type=fix;}
return ret;}};});if(!support.submitBubbles){jQuery.event.special.submit={setup:function(){if(jQuery.nodeName(this,"form")){return false;}
jQuery.event.add(this,"click._submit keypress._submit",function(e){var elem=e.target,form=jQuery.nodeName(elem,"input")||jQuery.nodeName(elem,"button")?elem.form:undefined;if(form&&!jQuery._data(form,"submitBubbles")){jQuery.event.add(form,"submit._submit",function(event){event._submit_bubble=true;});jQuery._data(form,"submitBubbles",true);}});},postDispatch:function(event){if(event._submit_bubble){delete event._submit_bubble;if(this.parentNode&&!event.isTrigger){jQuery.event.simulate("submit",this.parentNode,event,true);}}},teardown:function(){if(jQuery.nodeName(this,"form")){return false;}
jQuery.event.remove(this,"._submit");}};}
if(!support.changeBubbles){jQuery.event.special.change={setup:function(){if(rformElems.test(this.nodeName)){if(this.type==="checkbox"||this.type==="radio"){jQuery.event.add(this,"propertychange._change",function(event){if(event.originalEvent.propertyName==="checked"){this._just_changed=true;}});jQuery.event.add(this,"click._change",function(event){if(this._just_changed&&!event.isTrigger){this._just_changed=false;}
jQuery.event.simulate("change",this,event,true);});}
return false;}
jQuery.event.add(this,"beforeactivate._change",function(e){var elem=e.target;if(rformElems.test(elem.nodeName)&&!jQuery._data(elem,"changeBubbles")){jQuery.event.add(elem,"change._change",function(event){if(this.parentNode&&!event.isSimulated&&!event.isTrigger){jQuery.event.simulate("change",this.parentNode,event,true);}});jQuery._data(elem,"changeBubbles",true);}});},handle:function(event){var elem=event.target;if(this!==elem||event.isSimulated||event.isTrigger||(elem.type!=="radio"&&elem.type!=="checkbox")){return event.handleObj.handler.apply(this,arguments);}},teardown:function(){jQuery.event.remove(this,"._change");return!rformElems.test(this.nodeName);}};}
if(!support.focusinBubbles){jQuery.each({focus:"focusin",blur:"focusout"},function(orig,fix){var handler=function(event){jQuery.event.simulate(fix,event.target,jQuery.event.fix(event),true);};jQuery.event.special[fix]={setup:function(){var doc=this.ownerDocument||this,attaches=jQuery._data(doc,fix);if(!attaches){doc.addEventListener(orig,handler,true);}
jQuery._data(doc,fix,(attaches||0)+1);},teardown:function(){var doc=this.ownerDocument||this,attaches=jQuery._data(doc,fix)-1;if(!attaches){doc.removeEventListener(orig,handler,true);jQuery._removeData(doc,fix);}else{jQuery._data(doc,fix,attaches);}}};});}
jQuery.fn.extend({on:function(types,selector,data,fn,one){var type,origFn;if(typeof types==="object"){if(typeof selector!=="string"){data=data||selector;selector=undefined;}
for(type in types){this.on(type,selector,data,types[type],one);}
return this;}
if(data==null&&fn==null){fn=selector;data=selector=undefined;}else if(fn==null){if(typeof selector==="string"){fn=data;data=undefined;}else{fn=data;data=selector;selector=undefined;}}
if(fn===false){fn=returnFalse;}else if(!fn){return this;}
if(one===1){origFn=fn;fn=function(event){jQuery().off(event);return origFn.apply(this,arguments);};fn.guid=origFn.guid||(origFn.guid=jQuery.guid++);}
return this.each(function(){jQuery.event.add(this,types,fn,data,selector);});},one:function(types,selector,data,fn){return this.on(types,selector,data,fn,1);},off:function(types,selector,fn){var handleObj,type;if(types&&types.preventDefault&&types.handleObj){handleObj=types.handleObj;jQuery(types.delegateTarget).off(handleObj.namespace?handleObj.origType+"."+handleObj.namespace:handleObj.origType,handleObj.selector,handleObj.handler);return this;}
if(typeof types==="object"){for(type in types){this.off(type,selector,types[type]);}
return this;}
if(selector===false||typeof selector==="function"){fn=selector;selector=undefined;}
if(fn===false){fn=returnFalse;}
return this.each(function(){jQuery.event.remove(this,types,fn,selector);});},trigger:function(type,data){return this.each(function(){jQuery.event.trigger(type,data,this);});},triggerHandler:function(type,data){var elem=this[0];if(elem){return jQuery.event.trigger(type,data,elem,true);}}});function createSafeFragment(document){var list=nodeNames.split("|"),safeFrag=document.createDocumentFragment();if(safeFrag.createElement){while(list.length){safeFrag.createElement(list.pop());}}
return safeFrag;}
var nodeNames="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|"+"header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",rinlinejQuery=/ jQuery\d+="(?:null|\d+)"/g,rnoshimcache=new RegExp("<(?:"+nodeNames+")[\\s/>]","i"),rleadingWhitespace=/^\s+/,rxhtmlTag=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,rtagName=/<([\w:]+)/,rtbody=/<tbody/i,rhtml=/<|&#?\w+;/,rnoInnerhtml=/<(?:script|style|link)/i,rchecked=/checked\s*(?:[^=]|=\s*.checked.)/i,rscriptType=/^$|\/(?:java|ecma)script/i,rscriptTypeMasked=/^true\/(.*)/,rcleanScript=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,wrapMap={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],area:[1,"<map>","</map>"],param:[1,"<object>","</object>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:support.htmlSerialize?[0,"",""]:[1,"X<div>","</div>"]},safeFragment=createSafeFragment(document),fragmentDiv=safeFragment.appendChild(document.createElement("div"));wrapMap.optgroup=wrapMap.option;wrapMap.tbody=wrapMap.tfoot=wrapMap.colgroup=wrapMap.caption=wrapMap.thead;wrapMap.th=wrapMap.td;function getAll(context,tag){var elems,elem,i=0,found=typeof context.getElementsByTagName!==strundefined?context.getElementsByTagName(tag||"*"):typeof context.querySelectorAll!==strundefined?context.querySelectorAll(tag||"*"):undefined;if(!found){for(found=[],elems=context.childNodes||context;(elem=elems[i])!=null;i++){if(!tag||jQuery.nodeName(elem,tag)){found.push(elem);}else{jQuery.merge(found,getAll(elem,tag));}}}
return tag===undefined||tag&&jQuery.nodeName(context,tag)?jQuery.merge([context],found):found;}
function fixDefaultChecked(elem){if(rcheckableType.test(elem.type)){elem.defaultChecked=elem.checked;}}
function manipulationTarget(elem,content){return jQuery.nodeName(elem,"table")&&jQuery.nodeName(content.nodeType!==11?content:content.firstChild,"tr")?elem.getElementsByTagName("tbody")[0]||elem.appendChild(elem.ownerDocument.createElement("tbody")):elem;}
function disableScript(elem){elem.type=(jQuery.find.attr(elem,"type")!==null)+"/"+elem.type;return elem;}
function restoreScript(elem){var match=rscriptTypeMasked.exec(elem.type);if(match){elem.type=match[1];}else{elem.removeAttribute("type");}
return elem;}
function setGlobalEval(elems,refElements){var elem,i=0;for(;(elem=elems[i])!=null;i++){jQuery._data(elem,"globalEval",!refElements||jQuery._data(refElements[i],"globalEval"));}}
function cloneCopyEvent(src,dest){if(dest.nodeType!==1||!jQuery.hasData(src)){return;}
var type,i,l,oldData=jQuery._data(src),curData=jQuery._data(dest,oldData),events=oldData.events;if(events){delete curData.handle;curData.events={};for(type in events){for(i=0,l=events[type].length;i<l;i++){jQuery.event.add(dest,type,events[type][i]);}}}
if(curData.data){curData.data=jQuery.extend({},curData.data);}}
function fixCloneNodeIssues(src,dest){var nodeName,e,data;if(dest.nodeType!==1){return;}
nodeName=dest.nodeName.toLowerCase();if(!support.noCloneEvent&&dest[jQuery.expando]){data=jQuery._data(dest);for(e in data.events){jQuery.removeEvent(dest,e,data.handle);}
dest.removeAttribute(jQuery.expando);}
if(nodeName==="script"&&dest.text!==src.text){disableScript(dest).text=src.text;restoreScript(dest);}else if(nodeName==="object"){if(dest.parentNode){dest.outerHTML=src.outerHTML;}
if(support.html5Clone&&(src.innerHTML&&!jQuery.trim(dest.innerHTML))){dest.innerHTML=src.innerHTML;}}else if(nodeName==="input"&&rcheckableType.test(src.type)){dest.defaultChecked=dest.checked=src.checked;if(dest.value!==src.value){dest.value=src.value;}}else if(nodeName==="option"){dest.defaultSelected=dest.selected=src.defaultSelected;}else if(nodeName==="input"||nodeName==="textarea"){dest.defaultValue=src.defaultValue;}}
jQuery.extend({clone:function(elem,dataAndEvents,deepDataAndEvents){var destElements,node,clone,i,srcElements,inPage=jQuery.contains(elem.ownerDocument,elem);if(support.html5Clone||jQuery.isXMLDoc(elem)||!rnoshimcache.test("<"+elem.nodeName+">")){clone=elem.cloneNode(true);}else{fragmentDiv.innerHTML=elem.outerHTML;fragmentDiv.removeChild(clone=fragmentDiv.firstChild);}
if((!support.noCloneEvent||!support.noCloneChecked)&&(elem.nodeType===1||elem.nodeType===11)&&!jQuery.isXMLDoc(elem)){destElements=getAll(clone);srcElements=getAll(elem);for(i=0;(node=srcElements[i])!=null;++i){if(destElements[i]){fixCloneNodeIssues(node,destElements[i]);}}}
if(dataAndEvents){if(deepDataAndEvents){srcElements=srcElements||getAll(elem);destElements=destElements||getAll(clone);for(i=0;(node=srcElements[i])!=null;i++){cloneCopyEvent(node,destElements[i]);}}else{cloneCopyEvent(elem,clone);}}
destElements=getAll(clone,"script");if(destElements.length>0){setGlobalEval(destElements,!inPage&&getAll(elem,"script"));}
destElements=srcElements=node=null;return clone;},buildFragment:function(elems,context,scripts,selection){var j,elem,contains,tmp,tag,tbody,wrap,l=elems.length,safe=createSafeFragment(context),nodes=[],i=0;for(;i<l;i++){elem=elems[i];if(elem||elem===0){if(jQuery.type(elem)==="object"){jQuery.merge(nodes,elem.nodeType?[elem]:elem);}else if(!rhtml.test(elem)){nodes.push(context.createTextNode(elem));}else{tmp=tmp||safe.appendChild(context.createElement("div"));tag=(rtagName.exec(elem)||["",""])[1].toLowerCase();wrap=wrapMap[tag]||wrapMap._default;tmp.innerHTML=wrap[1]+elem.replace(rxhtmlTag,"<$1></$2>")+wrap[2];j=wrap[0];while(j--){tmp=tmp.lastChild;}
if(!support.leadingWhitespace&&rleadingWhitespace.test(elem)){nodes.push(context.createTextNode(rleadingWhitespace.exec(elem)[0]));}
if(!support.tbody){elem=tag==="table"&&!rtbody.test(elem)?tmp.firstChild:wrap[1]==="<table>"&&!rtbody.test(elem)?tmp:0;j=elem&&elem.childNodes.length;while(j--){if(jQuery.nodeName((tbody=elem.childNodes[j]),"tbody")&&!tbody.childNodes.length){elem.removeChild(tbody);}}}
jQuery.merge(nodes,tmp.childNodes);tmp.textContent="";while(tmp.firstChild){tmp.removeChild(tmp.firstChild);}
tmp=safe.lastChild;}}}
if(tmp){safe.removeChild(tmp);}
if(!support.appendChecked){jQuery.grep(getAll(nodes,"input"),fixDefaultChecked);}
i=0;while((elem=nodes[i++])){if(selection&&jQuery.inArray(elem,selection)!==-1){continue;}
contains=jQuery.contains(elem.ownerDocument,elem);tmp=getAll(safe.appendChild(elem),"script");if(contains){setGlobalEval(tmp);}
if(scripts){j=0;while((elem=tmp[j++])){if(rscriptType.test(elem.type||"")){scripts.push(elem);}}}}
tmp=null;return safe;},cleanData:function(elems,acceptData){var elem,type,id,data,i=0,internalKey=jQuery.expando,cache=jQuery.cache,deleteExpando=support.deleteExpando,special=jQuery.event.special;for(;(elem=elems[i])!=null;i++){if(acceptData||jQuery.acceptData(elem)){id=elem[internalKey];data=id&&cache[id];if(data){if(data.events){for(type in data.events){if(special[type]){jQuery.event.remove(elem,type);}else{jQuery.removeEvent(elem,type,data.handle);}}}
if(cache[id]){delete cache[id];if(deleteExpando){delete elem[internalKey];}else if(typeof elem.removeAttribute!==strundefined){elem.removeAttribute(internalKey);}else{elem[internalKey]=null;}
deletedIds.push(id);}}}}}});jQuery.fn.extend({text:function(value){return access(this,function(value){return value===undefined?jQuery.text(this):this.empty().append((this[0]&&this[0].ownerDocument||document).createTextNode(value));},null,value,arguments.length);},append:function(){return this.domManip(arguments,function(elem){if(this.nodeType===1||this.nodeType===11||this.nodeType===9){var target=manipulationTarget(this,elem);target.appendChild(elem);}});},prepend:function(){return this.domManip(arguments,function(elem){if(this.nodeType===1||this.nodeType===11||this.nodeType===9){var target=manipulationTarget(this,elem);target.insertBefore(elem,target.firstChild);}});},before:function(){return this.domManip(arguments,function(elem){if(this.parentNode){this.parentNode.insertBefore(elem,this);}});},after:function(){return this.domManip(arguments,function(elem){if(this.parentNode){this.parentNode.insertBefore(elem,this.nextSibling);}});},remove:function(selector,keepData){var elem,elems=selector?jQuery.filter(selector,this):this,i=0;for(;(elem=elems[i])!=null;i++){if(!keepData&&elem.nodeType===1){jQuery.cleanData(getAll(elem));}
if(elem.parentNode){if(keepData&&jQuery.contains(elem.ownerDocument,elem)){setGlobalEval(getAll(elem,"script"));}
elem.parentNode.removeChild(elem);}}
return this;},empty:function(){var elem,i=0;for(;(elem=this[i])!=null;i++){if(elem.nodeType===1){jQuery.cleanData(getAll(elem,false));}
while(elem.firstChild){elem.removeChild(elem.firstChild);}
if(elem.options&&jQuery.nodeName(elem,"select")){elem.options.length=0;}}
return this;},clone:function(dataAndEvents,deepDataAndEvents){dataAndEvents=dataAndEvents==null?false:dataAndEvents;deepDataAndEvents=deepDataAndEvents==null?dataAndEvents:deepDataAndEvents;return this.map(function(){return jQuery.clone(this,dataAndEvents,deepDataAndEvents);});},html:function(value){return access(this,function(value){var elem=this[0]||{},i=0,l=this.length;if(value===undefined){return elem.nodeType===1?elem.innerHTML.replace(rinlinejQuery,""):undefined;}
if(typeof value==="string"&&!rnoInnerhtml.test(value)&&(support.htmlSerialize||!rnoshimcache.test(value))&&(support.leadingWhitespace||!rleadingWhitespace.test(value))&&!wrapMap[(rtagName.exec(value)||["",""])[1].toLowerCase()]){value=value.replace(rxhtmlTag,"<$1></$2>");try{for(;i<l;i++){elem=this[i]||{};if(elem.nodeType===1){jQuery.cleanData(getAll(elem,false));elem.innerHTML=value;}}
elem=0;}catch(e){}}
if(elem){this.empty().append(value);}},null,value,arguments.length);},replaceWith:function(){var arg=arguments[0];this.domManip(arguments,function(elem){arg=this.parentNode;jQuery.cleanData(getAll(this));if(arg){arg.replaceChild(elem,this);}});return arg&&(arg.length||arg.nodeType)?this:this.remove();},detach:function(selector){return this.remove(selector,true);},domManip:function(args,callback){args=concat.apply([],args);var first,node,hasScripts,scripts,doc,fragment,i=0,l=this.length,set=this,iNoClone=l-1,value=args[0],isFunction=jQuery.isFunction(value);if(isFunction||(l>1&&typeof value==="string"&&!support.checkClone&&rchecked.test(value))){return this.each(function(index){var self=set.eq(index);if(isFunction){args[0]=value.call(this,index,self.html());}
self.domManip(args,callback);});}
if(l){fragment=jQuery.buildFragment(args,this[0].ownerDocument,false,this);first=fragment.firstChild;if(fragment.childNodes.length===1){fragment=first;}
if(first){scripts=jQuery.map(getAll(fragment,"script"),disableScript);hasScripts=scripts.length;for(;i<l;i++){node=fragment;if(i!==iNoClone){node=jQuery.clone(node,true,true);if(hasScripts){jQuery.merge(scripts,getAll(node,"script"));}}
callback.call(this[i],node,i);}
if(hasScripts){doc=scripts[scripts.length-1].ownerDocument;jQuery.map(scripts,restoreScript);for(i=0;i<hasScripts;i++){node=scripts[i];if(rscriptType.test(node.type||"")&&!jQuery._data(node,"globalEval")&&jQuery.contains(doc,node)){if(node.src){if(jQuery._evalUrl){jQuery._evalUrl(node.src);}}else{jQuery.globalEval((node.text||node.textContent||node.innerHTML||"").replace(rcleanScript,""));}}}}
fragment=first=null;}}
return this;}});jQuery.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(name,original){jQuery.fn[name]=function(selector){var elems,i=0,ret=[],insert=jQuery(selector),last=insert.length-1;for(;i<=last;i++){elems=i===last?this:this.clone(true);jQuery(insert[i])[original](elems);push.apply(ret,elems.get());}
return this.pushStack(ret);};});var iframe,elemdisplay={};function actualDisplay(name,doc){var style,elem=jQuery(doc.createElement(name)).appendTo(doc.body),display=window.getDefaultComputedStyle&&(style=window.getDefaultComputedStyle(elem[0]))?style.display:jQuery.css(elem[0],"display");elem.detach();return display;}
function defaultDisplay(nodeName){var doc=document,display=elemdisplay[nodeName];if(!display){display=actualDisplay(nodeName,doc);if(display==="none"||!display){iframe=(iframe||jQuery("<iframe frameborder='0' width='0' height='0'/>")).appendTo(doc.documentElement);doc=(iframe[0].contentWindow||iframe[0].contentDocument).document;doc.write();doc.close();display=actualDisplay(nodeName,doc);iframe.detach();}
elemdisplay[nodeName]=display;}
return display;}
(function(){var shrinkWrapBlocksVal;support.shrinkWrapBlocks=function(){if(shrinkWrapBlocksVal!=null){return shrinkWrapBlocksVal;}
shrinkWrapBlocksVal=false;var div,body,container;body=document.getElementsByTagName("body")[0];if(!body||!body.style){return;}
div=document.createElement("div");container=document.createElement("div");container.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px";body.appendChild(container).appendChild(div);if(typeof div.style.zoom!==strundefined){div.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;"+"box-sizing:content-box;display:block;margin:0;border:0;"+"padding:1px;width:1px;zoom:1";div.appendChild(document.createElement("div")).style.width="5px";shrinkWrapBlocksVal=div.offsetWidth!==3;}
body.removeChild(container);return shrinkWrapBlocksVal;};})();var rmargin=(/^margin/);var rnumnonpx=new RegExp("^("+pnum+")(?!px)[a-z%]+$","i");var getStyles,curCSS,rposition=/^(top|right|bottom|left)$/;if(window.getComputedStyle){getStyles=function(elem){if(elem.ownerDocument.defaultView.opener){return elem.ownerDocument.defaultView.getComputedStyle(elem,null);}
return window.getComputedStyle(elem,null);};curCSS=function(elem,name,computed){var width,minWidth,maxWidth,ret,style=elem.style;computed=computed||getStyles(elem);ret=computed?computed.getPropertyValue(name)||computed[name]:undefined;if(computed){if(ret===""&&!jQuery.contains(elem.ownerDocument,elem)){ret=jQuery.style(elem,name);}
if(rnumnonpx.test(ret)&&rmargin.test(name)){width=style.width;minWidth=style.minWidth;maxWidth=style.maxWidth;style.minWidth=style.maxWidth=style.width=ret;ret=computed.width;style.width=width;style.minWidth=minWidth;style.maxWidth=maxWidth;}}
return ret===undefined?ret:ret+"";};}else if(document.documentElement.currentStyle){getStyles=function(elem){return elem.currentStyle;};curCSS=function(elem,name,computed){var left,rs,rsLeft,ret,style=elem.style;computed=computed||getStyles(elem);ret=computed?computed[name]:undefined;if(ret==null&&style&&style[name]){ret=style[name];}
if(rnumnonpx.test(ret)&&!rposition.test(name)){left=style.left;rs=elem.runtimeStyle;rsLeft=rs&&rs.left;if(rsLeft){rs.left=elem.currentStyle.left;}
style.left=name==="fontSize"?"1em":ret;ret=style.pixelLeft+"px";style.left=left;if(rsLeft){rs.left=rsLeft;}}
return ret===undefined?ret:ret+""||"auto";};}
function addGetHookIf(conditionFn,hookFn){return{get:function(){var condition=conditionFn();if(condition==null){return;}
if(condition){delete this.get;return;}
return(this.get=hookFn).apply(this,arguments);}};}
(function(){var div,style,a,pixelPositionVal,boxSizingReliableVal,reliableHiddenOffsetsVal,reliableMarginRightVal;div=document.createElement("div");div.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>";a=div.getElementsByTagName("a")[0];style=a&&a.style;if(!style){return;}
style.cssText="float:left;opacity:.5";support.opacity=style.opacity==="0.5";support.cssFloat=!!style.cssFloat;div.style.backgroundClip="content-box";div.cloneNode(true).style.backgroundClip="";support.clearCloneStyle=div.style.backgroundClip==="content-box";support.boxSizing=style.boxSizing===""||style.MozBoxSizing===""||style.WebkitBoxSizing==="";jQuery.extend(support,{reliableHiddenOffsets:function(){if(reliableHiddenOffsetsVal==null){computeStyleTests();}
return reliableHiddenOffsetsVal;},boxSizingReliable:function(){if(boxSizingReliableVal==null){computeStyleTests();}
return boxSizingReliableVal;},pixelPosition:function(){if(pixelPositionVal==null){computeStyleTests();}
return pixelPositionVal;},reliableMarginRight:function(){if(reliableMarginRightVal==null){computeStyleTests();}
return reliableMarginRightVal;}});function computeStyleTests(){var div,body,container,contents;body=document.getElementsByTagName("body")[0];if(!body||!body.style){return;}
div=document.createElement("div");container=document.createElement("div");container.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px";body.appendChild(container).appendChild(div);div.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;"+"box-sizing:border-box;display:block;margin-top:1%;top:1%;"+"border:1px;padding:1px;width:4px;position:absolute";pixelPositionVal=boxSizingReliableVal=false;reliableMarginRightVal=true;if(window.getComputedStyle){pixelPositionVal=(window.getComputedStyle(div,null)||{}).top!=="1%";boxSizingReliableVal=(window.getComputedStyle(div,null)||{width:"4px"}).width==="4px";contents=div.appendChild(document.createElement("div"));contents.style.cssText=div.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;"+"box-sizing:content-box;display:block;margin:0;border:0;padding:0";contents.style.marginRight=contents.style.width="0";div.style.width="1px";reliableMarginRightVal=!parseFloat((window.getComputedStyle(contents,null)||{}).marginRight);div.removeChild(contents);}
div.innerHTML="<table><tr><td></td><td>t</td></tr></table>";contents=div.getElementsByTagName("td");contents[0].style.cssText="margin:0;border:0;padding:0;display:none";reliableHiddenOffsetsVal=contents[0].offsetHeight===0;if(reliableHiddenOffsetsVal){contents[0].style.display="";contents[1].style.display="none";reliableHiddenOffsetsVal=contents[0].offsetHeight===0;}
body.removeChild(container);}})();jQuery.swap=function(elem,options,callback,args){var ret,name,old={};for(name in options){old[name]=elem.style[name];elem.style[name]=options[name];}
ret=callback.apply(elem,args||[]);for(name in options){elem.style[name]=old[name];}
return ret;};var
ralpha=/alpha\([^)]*\)/i,ropacity=/opacity\s*=\s*([^)]*)/,rdisplayswap=/^(none|table(?!-c[ea]).+)/,rnumsplit=new RegExp("^("+pnum+")(.*)$","i"),rrelNum=new RegExp("^([+-])=("+pnum+")","i"),cssShow={position:"absolute",visibility:"hidden",display:"block"},cssNormalTransform={letterSpacing:"0",fontWeight:"400"},cssPrefixes=["Webkit","O","Moz","ms"];function vendorPropName(style,name){if(name in style){return name;}
var capName=name.charAt(0).toUpperCase()+name.slice(1),origName=name,i=cssPrefixes.length;while(i--){name=cssPrefixes[i]+capName;if(name in style){return name;}}
return origName;}
function showHide(elements,show){var display,elem,hidden,values=[],index=0,length=elements.length;for(;index<length;index++){elem=elements[index];if(!elem.style){continue;}
values[index]=jQuery._data(elem,"olddisplay");display=elem.style.display;if(show){if(!values[index]&&display==="none"){elem.style.display="";}
if(elem.style.display===""&&isHidden(elem)){values[index]=jQuery._data(elem,"olddisplay",defaultDisplay(elem.nodeName));}}else{hidden=isHidden(elem);if(display&&display!=="none"||!hidden){jQuery._data(elem,"olddisplay",hidden?display:jQuery.css(elem,"display"));}}}
for(index=0;index<length;index++){elem=elements[index];if(!elem.style){continue;}
if(!show||elem.style.display==="none"||elem.style.display===""){elem.style.display=show?values[index]||"":"none";}}
return elements;}
function setPositiveNumber(elem,value,subtract){var matches=rnumsplit.exec(value);return matches?Math.max(0,matches[1]-(subtract||0))+(matches[2]||"px"):value;}
function augmentWidthOrHeight(elem,name,extra,isBorderBox,styles){var i=extra===(isBorderBox?"border":"content")?4:name==="width"?1:0,val=0;for(;i<4;i+=2){if(extra==="margin"){val+=jQuery.css(elem,extra+cssExpand[i],true,styles);}
if(isBorderBox){if(extra==="content"){val-=jQuery.css(elem,"padding"+cssExpand[i],true,styles);}
if(extra!=="margin"){val-=jQuery.css(elem,"border"+cssExpand[i]+"Width",true,styles);}}else{val+=jQuery.css(elem,"padding"+cssExpand[i],true,styles);if(extra!=="padding"){val+=jQuery.css(elem,"border"+cssExpand[i]+"Width",true,styles);}}}
return val;}
function getWidthOrHeight(elem,name,extra){var valueIsBorderBox=true,val=name==="width"?elem.offsetWidth:elem.offsetHeight,styles=getStyles(elem),isBorderBox=support.boxSizing&&jQuery.css(elem,"boxSizing",false,styles)==="border-box";if(val<=0||val==null){val=curCSS(elem,name,styles);if(val<0||val==null){val=elem.style[name];}
if(rnumnonpx.test(val)){return val;}
valueIsBorderBox=isBorderBox&&(support.boxSizingReliable()||val===elem.style[name]);val=parseFloat(val)||0;}
return(val+
augmentWidthOrHeight(elem,name,extra||(isBorderBox?"border":"content"),valueIsBorderBox,styles))+"px";}
jQuery.extend({cssHooks:{opacity:{get:function(elem,computed){if(computed){var ret=curCSS(elem,"opacity");return ret===""?"1":ret;}}}},cssNumber:{"columnCount":true,"fillOpacity":true,"flexGrow":true,"flexShrink":true,"fontWeight":true,"lineHeight":true,"opacity":true,"order":true,"orphans":true,"widows":true,"zIndex":true,"zoom":true},cssProps:{"float":support.cssFloat?"cssFloat":"styleFloat"},style:function(elem,name,value,extra){if(!elem||elem.nodeType===3||elem.nodeType===8||!elem.style){return;}
var ret,type,hooks,origName=jQuery.camelCase(name),style=elem.style;name=jQuery.cssProps[origName]||(jQuery.cssProps[origName]=vendorPropName(style,origName));hooks=jQuery.cssHooks[name]||jQuery.cssHooks[origName];if(value!==undefined){type=typeof value;if(type==="string"&&(ret=rrelNum.exec(value))){value=(ret[1]+1)*ret[2]+parseFloat(jQuery.css(elem,name));type="number";}
if(value==null||value!==value){return;}
if(type==="number"&&!jQuery.cssNumber[origName]){value+="px";}
if(!support.clearCloneStyle&&value===""&&name.indexOf("background")===0){style[name]="inherit";}
if(!hooks||!("set"in hooks)||(value=hooks.set(elem,value,extra))!==undefined){try{style[name]=value;}catch(e){}}}else{if(hooks&&"get"in hooks&&(ret=hooks.get(elem,false,extra))!==undefined){return ret;}
return style[name];}},css:function(elem,name,extra,styles){var num,val,hooks,origName=jQuery.camelCase(name);name=jQuery.cssProps[origName]||(jQuery.cssProps[origName]=vendorPropName(elem.style,origName));hooks=jQuery.cssHooks[name]||jQuery.cssHooks[origName];if(hooks&&"get"in hooks){val=hooks.get(elem,true,extra);}
if(val===undefined){val=curCSS(elem,name,styles);}
if(val==="normal"&&name in cssNormalTransform){val=cssNormalTransform[name];}
if(extra===""||extra){num=parseFloat(val);return extra===true||jQuery.isNumeric(num)?num||0:val;}
return val;}});jQuery.each(["height","width"],function(i,name){jQuery.cssHooks[name]={get:function(elem,computed,extra){if(computed){return rdisplayswap.test(jQuery.css(elem,"display"))&&elem.offsetWidth===0?jQuery.swap(elem,cssShow,function(){return getWidthOrHeight(elem,name,extra);}):getWidthOrHeight(elem,name,extra);}},set:function(elem,value,extra){var styles=extra&&getStyles(elem);return setPositiveNumber(elem,value,extra?augmentWidthOrHeight(elem,name,extra,support.boxSizing&&jQuery.css(elem,"boxSizing",false,styles)==="border-box",styles):0);}};});if(!support.opacity){jQuery.cssHooks.opacity={get:function(elem,computed){return ropacity.test((computed&&elem.currentStyle?elem.currentStyle.filter:elem.style.filter)||"")?(0.01*parseFloat(RegExp.$1))+"":computed?"1":"";},set:function(elem,value){var style=elem.style,currentStyle=elem.currentStyle,opacity=jQuery.isNumeric(value)?"alpha(opacity="+value*100+")":"",filter=currentStyle&&currentStyle.filter||style.filter||"";style.zoom=1;if((value>=1||value==="")&&jQuery.trim(filter.replace(ralpha,""))===""&&style.removeAttribute){style.removeAttribute("filter");if(value===""||currentStyle&&!currentStyle.filter){return;}}
style.filter=ralpha.test(filter)?filter.replace(ralpha,opacity):filter+" "+opacity;}};}
jQuery.cssHooks.marginRight=addGetHookIf(support.reliableMarginRight,function(elem,computed){if(computed){return jQuery.swap(elem,{"display":"inline-block"},curCSS,[elem,"marginRight"]);}});jQuery.each({margin:"",padding:"",border:"Width"},function(prefix,suffix){jQuery.cssHooks[prefix+suffix]={expand:function(value){var i=0,expanded={},parts=typeof value==="string"?value.split(" "):[value];for(;i<4;i++){expanded[prefix+cssExpand[i]+suffix]=parts[i]||parts[i-2]||parts[0];}
return expanded;}};if(!rmargin.test(prefix)){jQuery.cssHooks[prefix+suffix].set=setPositiveNumber;}});jQuery.fn.extend({css:function(name,value){return access(this,function(elem,name,value){var styles,len,map={},i=0;if(jQuery.isArray(name)){styles=getStyles(elem);len=name.length;for(;i<len;i++){map[name[i]]=jQuery.css(elem,name[i],false,styles);}
return map;}
return value!==undefined?jQuery.style(elem,name,value):jQuery.css(elem,name);},name,value,arguments.length>1);},show:function(){return showHide(this,true);},hide:function(){return showHide(this);},toggle:function(state){if(typeof state==="boolean"){return state?this.show():this.hide();}
return this.each(function(){if(isHidden(this)){jQuery(this).show();}else{jQuery(this).hide();}});}});function Tween(elem,options,prop,end,easing){return new Tween.prototype.init(elem,options,prop,end,easing);}
jQuery.Tween=Tween;Tween.prototype={constructor:Tween,init:function(elem,options,prop,end,easing,unit){this.elem=elem;this.prop=prop;this.easing=easing||"swing";this.options=options;this.start=this.now=this.cur();this.end=end;this.unit=unit||(jQuery.cssNumber[prop]?"":"px");},cur:function(){var hooks=Tween.propHooks[this.prop];return hooks&&hooks.get?hooks.get(this):Tween.propHooks._default.get(this);},run:function(percent){var eased,hooks=Tween.propHooks[this.prop];if(this.options.duration){this.pos=eased=jQuery.easing[this.easing](percent,this.options.duration*percent,0,1,this.options.duration);}else{this.pos=eased=percent;}
this.now=(this.end-this.start)*eased+this.start;if(this.options.step){this.options.step.call(this.elem,this.now,this);}
if(hooks&&hooks.set){hooks.set(this);}else{Tween.propHooks._default.set(this);}
return this;}};Tween.prototype.init.prototype=Tween.prototype;Tween.propHooks={_default:{get:function(tween){var result;if(tween.elem[tween.prop]!=null&&(!tween.elem.style||tween.elem.style[tween.prop]==null)){return tween.elem[tween.prop];}
result=jQuery.css(tween.elem,tween.prop,"");return!result||result==="auto"?0:result;},set:function(tween){if(jQuery.fx.step[tween.prop]){jQuery.fx.step[tween.prop](tween);}else if(tween.elem.style&&(tween.elem.style[jQuery.cssProps[tween.prop]]!=null||jQuery.cssHooks[tween.prop])){jQuery.style(tween.elem,tween.prop,tween.now+tween.unit);}else{tween.elem[tween.prop]=tween.now;}}}};Tween.propHooks.scrollTop=Tween.propHooks.scrollLeft={set:function(tween){if(tween.elem.nodeType&&tween.elem.parentNode){tween.elem[tween.prop]=tween.now;}}};jQuery.easing={linear:function(p){return p;},swing:function(p){return 0.5-Math.cos(p*Math.PI)/2;}};jQuery.fx=Tween.prototype.init;jQuery.fx.step={};var
fxNow,timerId,rfxtypes=/^(?:toggle|show|hide)$/,rfxnum=new RegExp("^(?:([+-])=|)("+pnum+")([a-z%]*)$","i"),rrun=/queueHooks$/,animationPrefilters=[defaultPrefilter],tweeners={"*":[function(prop,value){var tween=this.createTween(prop,value),target=tween.cur(),parts=rfxnum.exec(value),unit=parts&&parts[3]||(jQuery.cssNumber[prop]?"":"px"),start=(jQuery.cssNumber[prop]||unit!=="px"&&+target)&&rfxnum.exec(jQuery.css(tween.elem,prop)),scale=1,maxIterations=20;if(start&&start[3]!==unit){unit=unit||start[3];parts=parts||[];start=+target||1;do{scale=scale||".5";start=start/scale;jQuery.style(tween.elem,prop,start+unit);}while(scale!==(scale=tween.cur()/target)&&scale!==1&&--maxIterations);}
if(parts){start=tween.start=+start||+target||0;tween.unit=unit;tween.end=parts[1]?start+(parts[1]+1)*parts[2]:+parts[2];}
return tween;}]};function createFxNow(){setTimeout(function(){fxNow=undefined;});return(fxNow=jQuery.now());}
function genFx(type,includeWidth){var which,attrs={height:type},i=0;includeWidth=includeWidth?1:0;for(;i<4;i+=2-includeWidth){which=cssExpand[i];attrs["margin"+which]=attrs["padding"+which]=type;}
if(includeWidth){attrs.opacity=attrs.width=type;}
return attrs;}
function createTween(value,prop,animation){var tween,collection=(tweeners[prop]||[]).concat(tweeners["*"]),index=0,length=collection.length;for(;index<length;index++){if((tween=collection[index].call(animation,prop,value))){return tween;}}}
function defaultPrefilter(elem,props,opts){var prop,value,toggle,tween,hooks,oldfire,display,checkDisplay,anim=this,orig={},style=elem.style,hidden=elem.nodeType&&isHidden(elem),dataShow=jQuery._data(elem,"fxshow");if(!opts.queue){hooks=jQuery._queueHooks(elem,"fx");if(hooks.unqueued==null){hooks.unqueued=0;oldfire=hooks.empty.fire;hooks.empty.fire=function(){if(!hooks.unqueued){oldfire();}};}
hooks.unqueued++;anim.always(function(){anim.always(function(){hooks.unqueued--;if(!jQuery.queue(elem,"fx").length){hooks.empty.fire();}});});}
if(elem.nodeType===1&&("height"in props||"width"in props)){opts.overflow=[style.overflow,style.overflowX,style.overflowY];display=jQuery.css(elem,"display");checkDisplay=display==="none"?jQuery._data(elem,"olddisplay")||defaultDisplay(elem.nodeName):display;if(checkDisplay==="inline"&&jQuery.css(elem,"float")==="none"){if(!support.inlineBlockNeedsLayout||defaultDisplay(elem.nodeName)==="inline"){style.display="inline-block";}else{style.zoom=1;}}}
if(opts.overflow){style.overflow="hidden";if(!support.shrinkWrapBlocks()){anim.always(function(){style.overflow=opts.overflow[0];style.overflowX=opts.overflow[1];style.overflowY=opts.overflow[2];});}}
for(prop in props){value=props[prop];if(rfxtypes.exec(value)){delete props[prop];toggle=toggle||value==="toggle";if(value===(hidden?"hide":"show")){if(value==="show"&&dataShow&&dataShow[prop]!==undefined){hidden=true;}else{continue;}}
orig[prop]=dataShow&&dataShow[prop]||jQuery.style(elem,prop);}else{display=undefined;}}
if(!jQuery.isEmptyObject(orig)){if(dataShow){if("hidden"in dataShow){hidden=dataShow.hidden;}}else{dataShow=jQuery._data(elem,"fxshow",{});}
if(toggle){dataShow.hidden=!hidden;}
if(hidden){jQuery(elem).show();}else{anim.done(function(){jQuery(elem).hide();});}
anim.done(function(){var prop;jQuery._removeData(elem,"fxshow");for(prop in orig){jQuery.style(elem,prop,orig[prop]);}});for(prop in orig){tween=createTween(hidden?dataShow[prop]:0,prop,anim);if(!(prop in dataShow)){dataShow[prop]=tween.start;if(hidden){tween.end=tween.start;tween.start=prop==="width"||prop==="height"?1:0;}}}}else if((display==="none"?defaultDisplay(elem.nodeName):display)==="inline"){style.display=display;}}
function propFilter(props,specialEasing){var index,name,easing,value,hooks;for(index in props){name=jQuery.camelCase(index);easing=specialEasing[name];value=props[index];if(jQuery.isArray(value)){easing=value[1];value=props[index]=value[0];}
if(index!==name){props[name]=value;delete props[index];}
hooks=jQuery.cssHooks[name];if(hooks&&"expand"in hooks){value=hooks.expand(value);delete props[name];for(index in value){if(!(index in props)){props[index]=value[index];specialEasing[index]=easing;}}}else{specialEasing[name]=easing;}}}
function Animation(elem,properties,options){var result,stopped,index=0,length=animationPrefilters.length,deferred=jQuery.Deferred().always(function(){delete tick.elem;}),tick=function(){if(stopped){return false;}
var currentTime=fxNow||createFxNow(),remaining=Math.max(0,animation.startTime+animation.duration-currentTime),temp=remaining/animation.duration||0,percent=1-temp,index=0,length=animation.tweens.length;for(;index<length;index++){animation.tweens[index].run(percent);}
deferred.notifyWith(elem,[animation,percent,remaining]);if(percent<1&&length){return remaining;}else{deferred.resolveWith(elem,[animation]);return false;}},animation=deferred.promise({elem:elem,props:jQuery.extend({},properties),opts:jQuery.extend(true,{specialEasing:{}},options),originalProperties:properties,originalOptions:options,startTime:fxNow||createFxNow(),duration:options.duration,tweens:[],createTween:function(prop,end){var tween=jQuery.Tween(elem,animation.opts,prop,end,animation.opts.specialEasing[prop]||animation.opts.easing);animation.tweens.push(tween);return tween;},stop:function(gotoEnd){var index=0,length=gotoEnd?animation.tweens.length:0;if(stopped){return this;}
stopped=true;for(;index<length;index++){animation.tweens[index].run(1);}
if(gotoEnd){deferred.resolveWith(elem,[animation,gotoEnd]);}else{deferred.rejectWith(elem,[animation,gotoEnd]);}
return this;}}),props=animation.props;propFilter(props,animation.opts.specialEasing);for(;index<length;index++){result=animationPrefilters[index].call(animation,elem,props,animation.opts);if(result){return result;}}
jQuery.map(props,createTween,animation);if(jQuery.isFunction(animation.opts.start)){animation.opts.start.call(elem,animation);}
jQuery.fx.timer(jQuery.extend(tick,{elem:elem,anim:animation,queue:animation.opts.queue}));return animation.progress(animation.opts.progress).done(animation.opts.done,animation.opts.complete).fail(animation.opts.fail).always(animation.opts.always);}
jQuery.Animation=jQuery.extend(Animation,{tweener:function(props,callback){if(jQuery.isFunction(props)){callback=props;props=["*"];}else{props=props.split(" ");}
var prop,index=0,length=props.length;for(;index<length;index++){prop=props[index];tweeners[prop]=tweeners[prop]||[];tweeners[prop].unshift(callback);}},prefilter:function(callback,prepend){if(prepend){animationPrefilters.unshift(callback);}else{animationPrefilters.push(callback);}}});jQuery.speed=function(speed,easing,fn){var opt=speed&&typeof speed==="object"?jQuery.extend({},speed):{complete:fn||!fn&&easing||jQuery.isFunction(speed)&&speed,duration:speed,easing:fn&&easing||easing&&!jQuery.isFunction(easing)&&easing};opt.duration=jQuery.fx.off?0:typeof opt.duration==="number"?opt.duration:opt.duration in jQuery.fx.speeds?jQuery.fx.speeds[opt.duration]:jQuery.fx.speeds._default;if(opt.queue==null||opt.queue===true){opt.queue="fx";}
opt.old=opt.complete;opt.complete=function(){if(jQuery.isFunction(opt.old)){opt.old.call(this);}
if(opt.queue){jQuery.dequeue(this,opt.queue);}};return opt;};jQuery.fn.extend({fadeTo:function(speed,to,easing,callback){return this.filter(isHidden).css("opacity",0).show().end().animate({opacity:to},speed,easing,callback);},animate:function(prop,speed,easing,callback){var empty=jQuery.isEmptyObject(prop),optall=jQuery.speed(speed,easing,callback),doAnimation=function(){var anim=Animation(this,jQuery.extend({},prop),optall);if(empty||jQuery._data(this,"finish")){anim.stop(true);}};doAnimation.finish=doAnimation;return empty||optall.queue===false?this.each(doAnimation):this.queue(optall.queue,doAnimation);},stop:function(type,clearQueue,gotoEnd){var stopQueue=function(hooks){var stop=hooks.stop;delete hooks.stop;stop(gotoEnd);};if(typeof type!=="string"){gotoEnd=clearQueue;clearQueue=type;type=undefined;}
if(clearQueue&&type!==false){this.queue(type||"fx",[]);}
return this.each(function(){var dequeue=true,index=type!=null&&type+"queueHooks",timers=jQuery.timers,data=jQuery._data(this);if(index){if(data[index]&&data[index].stop){stopQueue(data[index]);}}else{for(index in data){if(data[index]&&data[index].stop&&rrun.test(index)){stopQueue(data[index]);}}}
for(index=timers.length;index--;){if(timers[index].elem===this&&(type==null||timers[index].queue===type)){timers[index].anim.stop(gotoEnd);dequeue=false;timers.splice(index,1);}}
if(dequeue||!gotoEnd){jQuery.dequeue(this,type);}});},finish:function(type){if(type!==false){type=type||"fx";}
return this.each(function(){var index,data=jQuery._data(this),queue=data[type+"queue"],hooks=data[type+"queueHooks"],timers=jQuery.timers,length=queue?queue.length:0;data.finish=true;jQuery.queue(this,type,[]);if(hooks&&hooks.stop){hooks.stop.call(this,true);}
for(index=timers.length;index--;){if(timers[index].elem===this&&timers[index].queue===type){timers[index].anim.stop(true);timers.splice(index,1);}}
for(index=0;index<length;index++){if(queue[index]&&queue[index].finish){queue[index].finish.call(this);}}
delete data.finish;});}});jQuery.each(["toggle","show","hide"],function(i,name){var cssFn=jQuery.fn[name];jQuery.fn[name]=function(speed,easing,callback){return speed==null||typeof speed==="boolean"?cssFn.apply(this,arguments):this.animate(genFx(name,true),speed,easing,callback);};});jQuery.each({slideDown:genFx("show"),slideUp:genFx("hide"),slideToggle:genFx("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(name,props){jQuery.fn[name]=function(speed,easing,callback){return this.animate(props,speed,easing,callback);};});jQuery.timers=[];jQuery.fx.tick=function(){var timer,timers=jQuery.timers,i=0;fxNow=jQuery.now();for(;i<timers.length;i++){timer=timers[i];if(!timer()&&timers[i]===timer){timers.splice(i--,1);}}
if(!timers.length){jQuery.fx.stop();}
fxNow=undefined;};jQuery.fx.timer=function(timer){jQuery.timers.push(timer);if(timer()){jQuery.fx.start();}else{jQuery.timers.pop();}};jQuery.fx.interval=13;jQuery.fx.start=function(){if(!timerId){timerId=setInterval(jQuery.fx.tick,jQuery.fx.interval);}};jQuery.fx.stop=function(){clearInterval(timerId);timerId=null;};jQuery.fx.speeds={slow:600,fast:200,_default:400};jQuery.fn.delay=function(time,type){time=jQuery.fx?jQuery.fx.speeds[time]||time:time;type=type||"fx";return this.queue(type,function(next,hooks){var timeout=setTimeout(next,time);hooks.stop=function(){clearTimeout(timeout);};});};(function(){var input,div,select,a,opt;div=document.createElement("div");div.setAttribute("className","t");div.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>";a=div.getElementsByTagName("a")[0];select=document.createElement("select");opt=select.appendChild(document.createElement("option"));input=div.getElementsByTagName("input")[0];a.style.cssText="top:1px";support.getSetAttribute=div.className!=="t";support.style=/top/.test(a.getAttribute("style"));support.hrefNormalized=a.getAttribute("href")==="/a";support.checkOn=!!input.value;support.optSelected=opt.selected;support.enctype=!!document.createElement("form").enctype;select.disabled=true;support.optDisabled=!opt.disabled;input=document.createElement("input");input.setAttribute("value","");support.input=input.getAttribute("value")==="";input.value="t";input.setAttribute("type","radio");support.radioValue=input.value==="t";})();var rreturn=/\r/g;jQuery.fn.extend({val:function(value){var hooks,ret,isFunction,elem=this[0];if(!arguments.length){if(elem){hooks=jQuery.valHooks[elem.type]||jQuery.valHooks[elem.nodeName.toLowerCase()];if(hooks&&"get"in hooks&&(ret=hooks.get(elem,"value"))!==undefined){return ret;}
ret=elem.value;return typeof ret==="string"?ret.replace(rreturn,""):ret==null?"":ret;}
return;}
isFunction=jQuery.isFunction(value);return this.each(function(i){var val;if(this.nodeType!==1){return;}
if(isFunction){val=value.call(this,i,jQuery(this).val());}else{val=value;}
if(val==null){val="";}else if(typeof val==="number"){val+="";}else if(jQuery.isArray(val)){val=jQuery.map(val,function(value){return value==null?"":value+"";});}
hooks=jQuery.valHooks[this.type]||jQuery.valHooks[this.nodeName.toLowerCase()];if(!hooks||!("set"in hooks)||hooks.set(this,val,"value")===undefined){this.value=val;}});}});jQuery.extend({valHooks:{option:{get:function(elem){var val=jQuery.find.attr(elem,"value");return val!=null?val:jQuery.trim(jQuery.text(elem));}},select:{get:function(elem){var value,option,options=elem.options,index=elem.selectedIndex,one=elem.type==="select-one"||index<0,values=one?null:[],max=one?index+1:options.length,i=index<0?max:one?index:0;for(;i<max;i++){option=options[i];if((option.selected||i===index)&&(support.optDisabled?!option.disabled:option.getAttribute("disabled")===null)&&(!option.parentNode.disabled||!jQuery.nodeName(option.parentNode,"optgroup"))){value=jQuery(option).val();if(one){return value;}
values.push(value);}}
return values;},set:function(elem,value){var optionSet,option,options=elem.options,values=jQuery.makeArray(value),i=options.length;while(i--){option=options[i];if(jQuery.inArray(jQuery.valHooks.option.get(option),values)>=0){try{option.selected=optionSet=true;}catch(_){option.scrollHeight;}}else{option.selected=false;}}
if(!optionSet){elem.selectedIndex=-1;}
return options;}}}});jQuery.each(["radio","checkbox"],function(){jQuery.valHooks[this]={set:function(elem,value){if(jQuery.isArray(value)){return(elem.checked=jQuery.inArray(jQuery(elem).val(),value)>=0);}}};if(!support.checkOn){jQuery.valHooks[this].get=function(elem){return elem.getAttribute("value")===null?"on":elem.value;};}});var nodeHook,boolHook,attrHandle=jQuery.expr.attrHandle,ruseDefault=/^(?:checked|selected)$/i,getSetAttribute=support.getSetAttribute,getSetInput=support.input;jQuery.fn.extend({attr:function(name,value){return access(this,jQuery.attr,name,value,arguments.length>1);},removeAttr:function(name){return this.each(function(){jQuery.removeAttr(this,name);});}});jQuery.extend({attr:function(elem,name,value){var hooks,ret,nType=elem.nodeType;if(!elem||nType===3||nType===8||nType===2){return;}
if(typeof elem.getAttribute===strundefined){return jQuery.prop(elem,name,value);}
if(nType!==1||!jQuery.isXMLDoc(elem)){name=name.toLowerCase();hooks=jQuery.attrHooks[name]||(jQuery.expr.match.bool.test(name)?boolHook:nodeHook);}
if(value!==undefined){if(value===null){jQuery.removeAttr(elem,name);}else if(hooks&&"set"in hooks&&(ret=hooks.set(elem,value,name))!==undefined){return ret;}else{elem.setAttribute(name,value+"");return value;}}else if(hooks&&"get"in hooks&&(ret=hooks.get(elem,name))!==null){return ret;}else{ret=jQuery.find.attr(elem,name);return ret==null?undefined:ret;}},removeAttr:function(elem,value){var name,propName,i=0,attrNames=value&&value.match(rnotwhite);if(attrNames&&elem.nodeType===1){while((name=attrNames[i++])){propName=jQuery.propFix[name]||name;if(jQuery.expr.match.bool.test(name)){if(getSetInput&&getSetAttribute||!ruseDefault.test(name)){elem[propName]=false;}else{elem[jQuery.camelCase("default-"+name)]=elem[propName]=false;}}else{jQuery.attr(elem,name,"");}
elem.removeAttribute(getSetAttribute?name:propName);}}},attrHooks:{type:{set:function(elem,value){if(!support.radioValue&&value==="radio"&&jQuery.nodeName(elem,"input")){var val=elem.value;elem.setAttribute("type",value);if(val){elem.value=val;}
return value;}}}}});boolHook={set:function(elem,value,name){if(value===false){jQuery.removeAttr(elem,name);}else if(getSetInput&&getSetAttribute||!ruseDefault.test(name)){elem.setAttribute(!getSetAttribute&&jQuery.propFix[name]||name,name);}else{elem[jQuery.camelCase("default-"+name)]=elem[name]=true;}
return name;}};jQuery.each(jQuery.expr.match.bool.source.match(/\w+/g),function(i,name){var getter=attrHandle[name]||jQuery.find.attr;attrHandle[name]=getSetInput&&getSetAttribute||!ruseDefault.test(name)?function(elem,name,isXML){var ret,handle;if(!isXML){handle=attrHandle[name];attrHandle[name]=ret;ret=getter(elem,name,isXML)!=null?name.toLowerCase():null;attrHandle[name]=handle;}
return ret;}:function(elem,name,isXML){if(!isXML){return elem[jQuery.camelCase("default-"+name)]?name.toLowerCase():null;}};});if(!getSetInput||!getSetAttribute){jQuery.attrHooks.value={set:function(elem,value,name){if(jQuery.nodeName(elem,"input")){elem.defaultValue=value;}else{return nodeHook&&nodeHook.set(elem,value,name);}}};}
if(!getSetAttribute){nodeHook={set:function(elem,value,name){var ret=elem.getAttributeNode(name);if(!ret){elem.setAttributeNode((ret=elem.ownerDocument.createAttribute(name)));}
ret.value=value+="";if(name==="value"||value===elem.getAttribute(name)){return value;}}};attrHandle.id=attrHandle.name=attrHandle.coords=function(elem,name,isXML){var ret;if(!isXML){return(ret=elem.getAttributeNode(name))&&ret.value!==""?ret.value:null;}};jQuery.valHooks.button={get:function(elem,name){var ret=elem.getAttributeNode(name);if(ret&&ret.specified){return ret.value;}},set:nodeHook.set};jQuery.attrHooks.contenteditable={set:function(elem,value,name){nodeHook.set(elem,value===""?false:value,name);}};jQuery.each(["width","height"],function(i,name){jQuery.attrHooks[name]={set:function(elem,value){if(value===""){elem.setAttribute(name,"auto");return value;}}};});}
if(!support.style){jQuery.attrHooks.style={get:function(elem){return elem.style.cssText||undefined;},set:function(elem,value){return(elem.style.cssText=value+"");}};}
var rfocusable=/^(?:input|select|textarea|button|object)$/i,rclickable=/^(?:a|area)$/i;jQuery.fn.extend({prop:function(name,value){return access(this,jQuery.prop,name,value,arguments.length>1);},removeProp:function(name){name=jQuery.propFix[name]||name;return this.each(function(){try{this[name]=undefined;delete this[name];}catch(e){}});}});jQuery.extend({propFix:{"for":"htmlFor","class":"className"},prop:function(elem,name,value){var ret,hooks,notxml,nType=elem.nodeType;if(!elem||nType===3||nType===8||nType===2){return;}
notxml=nType!==1||!jQuery.isXMLDoc(elem);if(notxml){name=jQuery.propFix[name]||name;hooks=jQuery.propHooks[name];}
if(value!==undefined){return hooks&&"set"in hooks&&(ret=hooks.set(elem,value,name))!==undefined?ret:(elem[name]=value);}else{return hooks&&"get"in hooks&&(ret=hooks.get(elem,name))!==null?ret:elem[name];}},propHooks:{tabIndex:{get:function(elem){var tabindex=jQuery.find.attr(elem,"tabindex");return tabindex?parseInt(tabindex,10):rfocusable.test(elem.nodeName)||rclickable.test(elem.nodeName)&&elem.href?0:-1;}}}});if(!support.hrefNormalized){jQuery.each(["href","src"],function(i,name){jQuery.propHooks[name]={get:function(elem){return elem.getAttribute(name,4);}};});}
if(!support.optSelected){jQuery.propHooks.selected={get:function(elem){var parent=elem.parentNode;if(parent){parent.selectedIndex;if(parent.parentNode){parent.parentNode.selectedIndex;}}
return null;}};}
jQuery.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){jQuery.propFix[this.toLowerCase()]=this;});if(!support.enctype){jQuery.propFix.enctype="encoding";}
var rclass=/[\t\r\n\f]/g;jQuery.fn.extend({addClass:function(value){var classes,elem,cur,clazz,j,finalValue,i=0,len=this.length,proceed=typeof value==="string"&&value;if(jQuery.isFunction(value)){return this.each(function(j){jQuery(this).addClass(value.call(this,j,this.className));});}
if(proceed){classes=(value||"").match(rnotwhite)||[];for(;i<len;i++){elem=this[i];cur=elem.nodeType===1&&(elem.className?(" "+elem.className+" ").replace(rclass," "):" ");if(cur){j=0;while((clazz=classes[j++])){if(cur.indexOf(" "+clazz+" ")<0){cur+=clazz+" ";}}
finalValue=jQuery.trim(cur);if(elem.className!==finalValue){elem.className=finalValue;}}}}
return this;},removeClass:function(value){var classes,elem,cur,clazz,j,finalValue,i=0,len=this.length,proceed=arguments.length===0||typeof value==="string"&&value;if(jQuery.isFunction(value)){return this.each(function(j){jQuery(this).removeClass(value.call(this,j,this.className));});}
if(proceed){classes=(value||"").match(rnotwhite)||[];for(;i<len;i++){elem=this[i];cur=elem.nodeType===1&&(elem.className?(" "+elem.className+" ").replace(rclass," "):"");if(cur){j=0;while((clazz=classes[j++])){while(cur.indexOf(" "+clazz+" ")>=0){cur=cur.replace(" "+clazz+" "," ");}}
finalValue=value?jQuery.trim(cur):"";if(elem.className!==finalValue){elem.className=finalValue;}}}}
return this;},toggleClass:function(value,stateVal){var type=typeof value;if(typeof stateVal==="boolean"&&type==="string"){return stateVal?this.addClass(value):this.removeClass(value);}
if(jQuery.isFunction(value)){return this.each(function(i){jQuery(this).toggleClass(value.call(this,i,this.className,stateVal),stateVal);});}
return this.each(function(){if(type==="string"){var className,i=0,self=jQuery(this),classNames=value.match(rnotwhite)||[];while((className=classNames[i++])){if(self.hasClass(className)){self.removeClass(className);}else{self.addClass(className);}}}else if(type===strundefined||type==="boolean"){if(this.className){jQuery._data(this,"__className__",this.className);}
this.className=this.className||value===false?"":jQuery._data(this,"__className__")||"";}});},hasClass:function(selector){var className=" "+selector+" ",i=0,l=this.length;for(;i<l;i++){if(this[i].nodeType===1&&(" "+this[i].className+" ").replace(rclass," ").indexOf(className)>=0){return true;}}
return false;}});jQuery.each(("blur focus focusin focusout load resize scroll unload click dblclick "+"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave "+"change select submit keydown keypress keyup error contextmenu").split(" "),function(i,name){jQuery.fn[name]=function(data,fn){return arguments.length>0?this.on(name,null,data,fn):this.trigger(name);};});jQuery.fn.extend({hover:function(fnOver,fnOut){return this.mouseenter(fnOver).mouseleave(fnOut||fnOver);},bind:function(types,data,fn){return this.on(types,null,data,fn);},unbind:function(types,fn){return this.off(types,null,fn);},delegate:function(selector,types,data,fn){return this.on(types,selector,data,fn);},undelegate:function(selector,types,fn){return arguments.length===1?this.off(selector,"**"):this.off(types,selector||"**",fn);}});var nonce=jQuery.now();var rquery=(/\?/);var rvalidtokens=/(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;jQuery.parseJSON=function(data){if(window.JSON&&window.JSON.parse){return window.JSON.parse(data+"");}
var requireNonComma,depth=null,str=jQuery.trim(data+"");return str&&!jQuery.trim(str.replace(rvalidtokens,function(token,comma,open,close){if(requireNonComma&&comma){depth=0;}
if(depth===0){return token;}
requireNonComma=open||comma;depth+=!close-!open;return"";}))?(Function("return "+str))():jQuery.error("Invalid JSON: "+data);};jQuery.parseXML=function(data){var xml,tmp;if(!data||typeof data!=="string"){return null;}
try{if(window.DOMParser){tmp=new DOMParser();xml=tmp.parseFromString(data,"text/xml");}else{xml=new ActiveXObject("Microsoft.XMLDOM");xml.async="false";xml.loadXML(data);}}catch(e){xml=undefined;}
if(!xml||!xml.documentElement||xml.getElementsByTagName("parsererror").length){jQuery.error("Invalid XML: "+data);}
return xml;};var
ajaxLocParts,ajaxLocation,rhash=/#.*$/,rts=/([?&])_=[^&]*/,rheaders=/^(.*?):[ \t]*([^\r\n]*)\r?$/mg,rlocalProtocol=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,rnoContent=/^(?:GET|HEAD)$/,rprotocol=/^\/\//,rurl=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,prefilters={},transports={},allTypes="*/".concat("*");try{ajaxLocation=location.href;}catch(e){ajaxLocation=document.createElement("a");ajaxLocation.href="";ajaxLocation=ajaxLocation.href;}
ajaxLocParts=rurl.exec(ajaxLocation.toLowerCase())||[];function addToPrefiltersOrTransports(structure){return function(dataTypeExpression,func){if(typeof dataTypeExpression!=="string"){func=dataTypeExpression;dataTypeExpression="*";}
var dataType,i=0,dataTypes=dataTypeExpression.toLowerCase().match(rnotwhite)||[];if(jQuery.isFunction(func)){while((dataType=dataTypes[i++])){if(dataType.charAt(0)==="+"){dataType=dataType.slice(1)||"*";(structure[dataType]=structure[dataType]||[]).unshift(func);}else{(structure[dataType]=structure[dataType]||[]).push(func);}}}};}
function inspectPrefiltersOrTransports(structure,options,originalOptions,jqXHR){var inspected={},seekingTransport=(structure===transports);function inspect(dataType){var selected;inspected[dataType]=true;jQuery.each(structure[dataType]||[],function(_,prefilterOrFactory){var dataTypeOrTransport=prefilterOrFactory(options,originalOptions,jqXHR);if(typeof dataTypeOrTransport==="string"&&!seekingTransport&&!inspected[dataTypeOrTransport]){options.dataTypes.unshift(dataTypeOrTransport);inspect(dataTypeOrTransport);return false;}else if(seekingTransport){return!(selected=dataTypeOrTransport);}});return selected;}
return inspect(options.dataTypes[0])||!inspected["*"]&&inspect("*");}
function ajaxExtend(target,src){var deep,key,flatOptions=jQuery.ajaxSettings.flatOptions||{};for(key in src){if(src[key]!==undefined){(flatOptions[key]?target:(deep||(deep={})))[key]=src[key];}}
if(deep){jQuery.extend(true,target,deep);}
return target;}
function ajaxHandleResponses(s,jqXHR,responses){var firstDataType,ct,finalDataType,type,contents=s.contents,dataTypes=s.dataTypes;while(dataTypes[0]==="*"){dataTypes.shift();if(ct===undefined){ct=s.mimeType||jqXHR.getResponseHeader("Content-Type");}}
if(ct){for(type in contents){if(contents[type]&&contents[type].test(ct)){dataTypes.unshift(type);break;}}}
if(dataTypes[0]in responses){finalDataType=dataTypes[0];}else{for(type in responses){if(!dataTypes[0]||s.converters[type+" "+dataTypes[0]]){finalDataType=type;break;}
if(!firstDataType){firstDataType=type;}}
finalDataType=finalDataType||firstDataType;}
if(finalDataType){if(finalDataType!==dataTypes[0]){dataTypes.unshift(finalDataType);}
return responses[finalDataType];}}
function ajaxConvert(s,response,jqXHR,isSuccess){var conv2,current,conv,tmp,prev,converters={},dataTypes=s.dataTypes.slice();if(dataTypes[1]){for(conv in s.converters){converters[conv.toLowerCase()]=s.converters[conv];}}
current=dataTypes.shift();while(current){if(s.responseFields[current]){jqXHR[s.responseFields[current]]=response;}
if(!prev&&isSuccess&&s.dataFilter){response=s.dataFilter(response,s.dataType);}
prev=current;current=dataTypes.shift();if(current){if(current==="*"){current=prev;}else if(prev!=="*"&&prev!==current){conv=converters[prev+" "+current]||converters["* "+current];if(!conv){for(conv2 in converters){tmp=conv2.split(" ");if(tmp[1]===current){conv=converters[prev+" "+tmp[0]]||converters["* "+tmp[0]];if(conv){if(conv===true){conv=converters[conv2];}else if(converters[conv2]!==true){current=tmp[0];dataTypes.unshift(tmp[1]);}
break;}}}}
if(conv!==true){if(conv&&s["throws"]){response=conv(response);}else{try{response=conv(response);}catch(e){return{state:"parsererror",error:conv?e:"No conversion from "+prev+" to "+current};}}}}}}
return{state:"success",data:response};}
jQuery.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:ajaxLocation,type:"GET",isLocal:rlocalProtocol.test(ajaxLocParts[1]),global:true,processData:true,async:true,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":allTypes,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":true,"text json":jQuery.parseJSON,"text xml":jQuery.parseXML},flatOptions:{url:true,context:true}},ajaxSetup:function(target,settings){return settings?ajaxExtend(ajaxExtend(target,jQuery.ajaxSettings),settings):ajaxExtend(jQuery.ajaxSettings,target);},ajaxPrefilter:addToPrefiltersOrTransports(prefilters),ajaxTransport:addToPrefiltersOrTransports(transports),ajax:function(url,options){if(typeof url==="object"){options=url;url=undefined;}
options=options||{};var
parts,i,cacheURL,responseHeadersString,timeoutTimer,fireGlobals,transport,responseHeaders,s=jQuery.ajaxSetup({},options),callbackContext=s.context||s,globalEventContext=s.context&&(callbackContext.nodeType||callbackContext.jquery)?jQuery(callbackContext):jQuery.event,deferred=jQuery.Deferred(),completeDeferred=jQuery.Callbacks("once memory"),statusCode=s.statusCode||{},requestHeaders={},requestHeadersNames={},state=0,strAbort="canceled",jqXHR={readyState:0,getResponseHeader:function(key){var match;if(state===2){if(!responseHeaders){responseHeaders={};while((match=rheaders.exec(responseHeadersString))){responseHeaders[match[1].toLowerCase()]=match[2];}}
match=responseHeaders[key.toLowerCase()];}
return match==null?null:match;},getAllResponseHeaders:function(){return state===2?responseHeadersString:null;},setRequestHeader:function(name,value){var lname=name.toLowerCase();if(!state){name=requestHeadersNames[lname]=requestHeadersNames[lname]||name;requestHeaders[name]=value;}
return this;},overrideMimeType:function(type){if(!state){s.mimeType=type;}
return this;},statusCode:function(map){var code;if(map){if(state<2){for(code in map){statusCode[code]=[statusCode[code],map[code]];}}else{jqXHR.always(map[jqXHR.status]);}}
return this;},abort:function(statusText){var finalText=statusText||strAbort;if(transport){transport.abort(finalText);}
done(0,finalText);return this;}};deferred.promise(jqXHR).complete=completeDeferred.add;jqXHR.success=jqXHR.done;jqXHR.error=jqXHR.fail;s.url=((url||s.url||ajaxLocation)+"").replace(rhash,"").replace(rprotocol,ajaxLocParts[1]+"//");s.type=options.method||options.type||s.method||s.type;s.dataTypes=jQuery.trim(s.dataType||"*").toLowerCase().match(rnotwhite)||[""];if(s.crossDomain==null){parts=rurl.exec(s.url.toLowerCase());s.crossDomain=!!(parts&&(parts[1]!==ajaxLocParts[1]||parts[2]!==ajaxLocParts[2]||(parts[3]||(parts[1]==="http:"?"80":"443"))!==(ajaxLocParts[3]||(ajaxLocParts[1]==="http:"?"80":"443"))));}
if(s.data&&s.processData&&typeof s.data!=="string"){s.data=jQuery.param(s.data,s.traditional);}
inspectPrefiltersOrTransports(prefilters,s,options,jqXHR);if(state===2){return jqXHR;}
fireGlobals=jQuery.event&&s.global;if(fireGlobals&&jQuery.active++===0){jQuery.event.trigger("ajaxStart");}
s.type=s.type.toUpperCase();s.hasContent=!rnoContent.test(s.type);cacheURL=s.url;if(!s.hasContent){if(s.data){cacheURL=(s.url+=(rquery.test(cacheURL)?"&":"?")+s.data);delete s.data;}
if(s.cache===false){s.url=rts.test(cacheURL)?cacheURL.replace(rts,"$1_="+nonce++):cacheURL+(rquery.test(cacheURL)?"&":"?")+"_="+nonce++;}}
if(s.ifModified){if(jQuery.lastModified[cacheURL]){jqXHR.setRequestHeader("If-Modified-Since",jQuery.lastModified[cacheURL]);}
if(jQuery.etag[cacheURL]){jqXHR.setRequestHeader("If-None-Match",jQuery.etag[cacheURL]);}}
if(s.data&&s.hasContent&&s.contentType!==false||options.contentType){jqXHR.setRequestHeader("Content-Type",s.contentType);}
jqXHR.setRequestHeader("Accept",s.dataTypes[0]&&s.accepts[s.dataTypes[0]]?s.accepts[s.dataTypes[0]]+(s.dataTypes[0]!=="*"?", "+allTypes+"; q=0.01":""):s.accepts["*"]);for(i in s.headers){jqXHR.setRequestHeader(i,s.headers[i]);}
if(s.beforeSend&&(s.beforeSend.call(callbackContext,jqXHR,s)===false||state===2)){return jqXHR.abort();}
strAbort="abort";for(i in{success:1,error:1,complete:1}){jqXHR[i](s[i]);}
transport=inspectPrefiltersOrTransports(transports,s,options,jqXHR);if(!transport){done(-1,"No Transport");}else{jqXHR.readyState=1;if(fireGlobals){globalEventContext.trigger("ajaxSend",[jqXHR,s]);}
if(s.async&&s.timeout>0){timeoutTimer=setTimeout(function(){jqXHR.abort("timeout");},s.timeout);}
try{state=1;transport.send(requestHeaders,done);}catch(e){if(state<2){done(-1,e);}else{throw e;}}}
function done(status,nativeStatusText,responses,headers){var isSuccess,success,error,response,modified,statusText=nativeStatusText;if(state===2){return;}
state=2;if(timeoutTimer){clearTimeout(timeoutTimer);}
transport=undefined;responseHeadersString=headers||"";jqXHR.readyState=status>0?4:0;isSuccess=status>=200&&status<300||status===304;if(responses){response=ajaxHandleResponses(s,jqXHR,responses);}
response=ajaxConvert(s,response,jqXHR,isSuccess);if(isSuccess){if(s.ifModified){modified=jqXHR.getResponseHeader("Last-Modified");if(modified){jQuery.lastModified[cacheURL]=modified;}
modified=jqXHR.getResponseHeader("etag");if(modified){jQuery.etag[cacheURL]=modified;}}
if(status===204||s.type==="HEAD"){statusText="nocontent";}else if(status===304){statusText="notmodified";}else{statusText=response.state;success=response.data;error=response.error;isSuccess=!error;}}else{error=statusText;if(status||!statusText){statusText="error";if(status<0){status=0;}}}
jqXHR.status=status;jqXHR.statusText=(nativeStatusText||statusText)+"";if(isSuccess){deferred.resolveWith(callbackContext,[success,statusText,jqXHR]);}else{deferred.rejectWith(callbackContext,[jqXHR,statusText,error]);}
jqXHR.statusCode(statusCode);statusCode=undefined;if(fireGlobals){globalEventContext.trigger(isSuccess?"ajaxSuccess":"ajaxError",[jqXHR,s,isSuccess?success:error]);}
completeDeferred.fireWith(callbackContext,[jqXHR,statusText]);if(fireGlobals){globalEventContext.trigger("ajaxComplete",[jqXHR,s]);if(!(--jQuery.active)){jQuery.event.trigger("ajaxStop");}}}
return jqXHR;},getJSON:function(url,data,callback){return jQuery.get(url,data,callback,"json");},getScript:function(url,callback){return jQuery.get(url,undefined,callback,"script");}});jQuery.each(["get","post"],function(i,method){jQuery[method]=function(url,data,callback,type){if(jQuery.isFunction(data)){type=type||callback;callback=data;data=undefined;}
return jQuery.ajax({url:url,type:method,dataType:type,data:data,success:callback});};});jQuery._evalUrl=function(url){return jQuery.ajax({url:url,type:"GET",dataType:"script",async:false,global:false,"throws":true});};jQuery.fn.extend({wrapAll:function(html){if(jQuery.isFunction(html)){return this.each(function(i){jQuery(this).wrapAll(html.call(this,i));});}
if(this[0]){var wrap=jQuery(html,this[0].ownerDocument).eq(0).clone(true);if(this[0].parentNode){wrap.insertBefore(this[0]);}
wrap.map(function(){var elem=this;while(elem.firstChild&&elem.firstChild.nodeType===1){elem=elem.firstChild;}
return elem;}).append(this);}
return this;},wrapInner:function(html){if(jQuery.isFunction(html)){return this.each(function(i){jQuery(this).wrapInner(html.call(this,i));});}
return this.each(function(){var self=jQuery(this),contents=self.contents();if(contents.length){contents.wrapAll(html);}else{self.append(html);}});},wrap:function(html){var isFunction=jQuery.isFunction(html);return this.each(function(i){jQuery(this).wrapAll(isFunction?html.call(this,i):html);});},unwrap:function(){return this.parent().each(function(){if(!jQuery.nodeName(this,"body")){jQuery(this).replaceWith(this.childNodes);}}).end();}});jQuery.expr.filters.hidden=function(elem){return elem.offsetWidth<=0&&elem.offsetHeight<=0||(!support.reliableHiddenOffsets()&&((elem.style&&elem.style.display)||jQuery.css(elem,"display"))==="none");};jQuery.expr.filters.visible=function(elem){return!jQuery.expr.filters.hidden(elem);};var r20=/%20/g,rbracket=/\[\]$/,rCRLF=/\r?\n/g,rsubmitterTypes=/^(?:submit|button|image|reset|file)$/i,rsubmittable=/^(?:input|select|textarea|keygen)/i;function buildParams(prefix,obj,traditional,add){var name;if(jQuery.isArray(obj)){jQuery.each(obj,function(i,v){if(traditional||rbracket.test(prefix)){add(prefix,v);}else{buildParams(prefix+"["+(typeof v==="object"?i:"")+"]",v,traditional,add);}});}else if(!traditional&&jQuery.type(obj)==="object"){for(name in obj){buildParams(prefix+"["+name+"]",obj[name],traditional,add);}}else{add(prefix,obj);}}
jQuery.param=function(a,traditional){var prefix,s=[],add=function(key,value){value=jQuery.isFunction(value)?value():(value==null?"":value);s[s.length]=encodeURIComponent(key)+"="+encodeURIComponent(value);};if(traditional===undefined){traditional=jQuery.ajaxSettings&&jQuery.ajaxSettings.traditional;}
if(jQuery.isArray(a)||(a.jquery&&!jQuery.isPlainObject(a))){jQuery.each(a,function(){add(this.name,this.value);});}else{for(prefix in a){buildParams(prefix,a[prefix],traditional,add);}}
return s.join("&").replace(r20,"+");};jQuery.fn.extend({serialize:function(){return jQuery.param(this.serializeArray());},serializeArray:function(){return this.map(function(){var elements=jQuery.prop(this,"elements");return elements?jQuery.makeArray(elements):this;}).filter(function(){var type=this.type;return this.name&&!jQuery(this).is(":disabled")&&rsubmittable.test(this.nodeName)&&!rsubmitterTypes.test(type)&&(this.checked||!rcheckableType.test(type));}).map(function(i,elem){var val=jQuery(this).val();return val==null?null:jQuery.isArray(val)?jQuery.map(val,function(val){return{name:elem.name,value:val.replace(rCRLF,"\r\n")};}):{name:elem.name,value:val.replace(rCRLF,"\r\n")};}).get();}});jQuery.ajaxSettings.xhr=window.ActiveXObject!==undefined?function(){return!this.isLocal&&/^(get|post|head|put|delete|options)$/i.test(this.type)&&createStandardXHR()||createActiveXHR();}:createStandardXHR;var xhrId=0,xhrCallbacks={},xhrSupported=jQuery.ajaxSettings.xhr();if(window.attachEvent){window.attachEvent("onunload",function(){for(var key in xhrCallbacks){xhrCallbacks[key](undefined,true);}});}
support.cors=!!xhrSupported&&("withCredentials"in xhrSupported);xhrSupported=support.ajax=!!xhrSupported;if(xhrSupported){jQuery.ajaxTransport(function(options){if(!options.crossDomain||support.cors){var callback;return{send:function(headers,complete){var i,xhr=options.xhr(),id=++xhrId;xhr.open(options.type,options.url,options.async,options.username,options.password);if(options.xhrFields){for(i in options.xhrFields){xhr[i]=options.xhrFields[i];}}
if(options.mimeType&&xhr.overrideMimeType){xhr.overrideMimeType(options.mimeType);}
if(!options.crossDomain&&!headers["X-Requested-With"]){headers["X-Requested-With"]="XMLHttpRequest";}
for(i in headers){if(headers[i]!==undefined){xhr.setRequestHeader(i,headers[i]+"");}}
xhr.send((options.hasContent&&options.data)||null);callback=function(_,isAbort){var status,statusText,responses;if(callback&&(isAbort||xhr.readyState===4)){delete xhrCallbacks[id];callback=undefined;xhr.onreadystatechange=jQuery.noop;if(isAbort){if(xhr.readyState!==4){xhr.abort();}}else{responses={};status=xhr.status;if(typeof xhr.responseText==="string"){responses.text=xhr.responseText;}
try{statusText=xhr.statusText;}catch(e){statusText="";}
if(!status&&options.isLocal&&!options.crossDomain){status=responses.text?200:404;}else if(status===1223){status=204;}}}
if(responses){complete(status,statusText,responses,xhr.getAllResponseHeaders());}};if(!options.async){callback();}else if(xhr.readyState===4){setTimeout(callback);}else{xhr.onreadystatechange=xhrCallbacks[id]=callback;}},abort:function(){if(callback){callback(undefined,true);}}};}});}
function createStandardXHR(){try{return new window.XMLHttpRequest();}catch(e){}}
function createActiveXHR(){try{return new window.ActiveXObject("Microsoft.XMLHTTP");}catch(e){}}
jQuery.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(text){jQuery.globalEval(text);return text;}}});jQuery.ajaxPrefilter("script",function(s){if(s.cache===undefined){s.cache=false;}
if(s.crossDomain){s.type="GET";s.global=false;}});jQuery.ajaxTransport("script",function(s){if(s.crossDomain){var script,head=document.head||jQuery("head")[0]||document.documentElement;return{send:function(_,callback){script=document.createElement("script");script.async=true;if(s.scriptCharset){script.charset=s.scriptCharset;}
script.src=s.url;script.onload=script.onreadystatechange=function(_,isAbort){if(isAbort||!script.readyState||/loaded|complete/.test(script.readyState)){script.onload=script.onreadystatechange=null;if(script.parentNode){script.parentNode.removeChild(script);}
script=null;if(!isAbort){callback(200,"success");}}};head.insertBefore(script,head.firstChild);},abort:function(){if(script){script.onload(undefined,true);}}};}});var oldCallbacks=[],rjsonp=/(=)\?(?=&|$)|\?\?/;jQuery.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var callback=oldCallbacks.pop()||(jQuery.expando+"_"+(nonce++));this[callback]=true;return callback;}});jQuery.ajaxPrefilter("json jsonp",function(s,originalSettings,jqXHR){var callbackName,overwritten,responseContainer,jsonProp=s.jsonp!==false&&(rjsonp.test(s.url)?"url":typeof s.data==="string"&&!(s.contentType||"").indexOf("application/x-www-form-urlencoded")&&rjsonp.test(s.data)&&"data");if(jsonProp||s.dataTypes[0]==="jsonp"){callbackName=s.jsonpCallback=jQuery.isFunction(s.jsonpCallback)?s.jsonpCallback():s.jsonpCallback;if(jsonProp){s[jsonProp]=s[jsonProp].replace(rjsonp,"$1"+callbackName);}else if(s.jsonp!==false){s.url+=(rquery.test(s.url)?"&":"?")+s.jsonp+"="+callbackName;}
s.converters["script json"]=function(){if(!responseContainer){jQuery.error(callbackName+" was not called");}
return responseContainer[0];};s.dataTypes[0]="json";overwritten=window[callbackName];window[callbackName]=function(){responseContainer=arguments;};jqXHR.always(function(){window[callbackName]=overwritten;if(s[callbackName]){s.jsonpCallback=originalSettings.jsonpCallback;oldCallbacks.push(callbackName);}
if(responseContainer&&jQuery.isFunction(overwritten)){overwritten(responseContainer[0]);}
responseContainer=overwritten=undefined;});return"script";}});jQuery.parseHTML=function(data,context,keepScripts){if(!data||typeof data!=="string"){return null;}
if(typeof context==="boolean"){keepScripts=context;context=false;}
context=context||document;var parsed=rsingleTag.exec(data),scripts=!keepScripts&&[];if(parsed){return[context.createElement(parsed[1])];}
parsed=jQuery.buildFragment([data],context,scripts);if(scripts&&scripts.length){jQuery(scripts).remove();}
return jQuery.merge([],parsed.childNodes);};var _load=jQuery.fn.load;jQuery.fn.load=function(url,params,callback){if(typeof url!=="string"&&_load){return _load.apply(this,arguments);}
var selector,response,type,self=this,off=url.indexOf(" ");if(off>=0){selector=jQuery.trim(url.slice(off,url.length));url=url.slice(0,off);}
if(jQuery.isFunction(params)){callback=params;params=undefined;}else if(params&&typeof params==="object"){type="POST";}
if(self.length>0){jQuery.ajax({url:url,type:type,dataType:"html",data:params}).done(function(responseText){response=arguments;self.html(selector?jQuery("<div>").append(jQuery.parseHTML(responseText)).find(selector):responseText);}).complete(callback&&function(jqXHR,status){self.each(callback,response||[jqXHR.responseText,status,jqXHR]);});}
return this;};jQuery.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(i,type){jQuery.fn[type]=function(fn){return this.on(type,fn);};});jQuery.expr.filters.animated=function(elem){return jQuery.grep(jQuery.timers,function(fn){return elem===fn.elem;}).length;};var docElem=window.document.documentElement;function getWindow(elem){return jQuery.isWindow(elem)?elem:elem.nodeType===9?elem.defaultView||elem.parentWindow:false;}
jQuery.offset={setOffset:function(elem,options,i){var curPosition,curLeft,curCSSTop,curTop,curOffset,curCSSLeft,calculatePosition,position=jQuery.css(elem,"position"),curElem=jQuery(elem),props={};if(position==="static"){elem.style.position="relative";}
curOffset=curElem.offset();curCSSTop=jQuery.css(elem,"top");curCSSLeft=jQuery.css(elem,"left");calculatePosition=(position==="absolute"||position==="fixed")&&jQuery.inArray("auto",[curCSSTop,curCSSLeft])>-1;if(calculatePosition){curPosition=curElem.position();curTop=curPosition.top;curLeft=curPosition.left;}else{curTop=parseFloat(curCSSTop)||0;curLeft=parseFloat(curCSSLeft)||0;}
if(jQuery.isFunction(options)){options=options.call(elem,i,curOffset);}
if(options.top!=null){props.top=(options.top-curOffset.top)+curTop;}
if(options.left!=null){props.left=(options.left-curOffset.left)+curLeft;}
if("using"in options){options.using.call(elem,props);}else{curElem.css(props);}}};jQuery.fn.extend({offset:function(options){if(arguments.length){return options===undefined?this:this.each(function(i){jQuery.offset.setOffset(this,options,i);});}
var docElem,win,box={top:0,left:0},elem=this[0],doc=elem&&elem.ownerDocument;if(!doc){return;}
docElem=doc.documentElement;if(!jQuery.contains(docElem,elem)){return box;}
if(typeof elem.getBoundingClientRect!==strundefined){box=elem.getBoundingClientRect();}
win=getWindow(doc);return{top:box.top+(win.pageYOffset||docElem.scrollTop)-(docElem.clientTop||0),left:box.left+(win.pageXOffset||docElem.scrollLeft)-(docElem.clientLeft||0)};},position:function(){if(!this[0]){return;}
var offsetParent,offset,parentOffset={top:0,left:0},elem=this[0];if(jQuery.css(elem,"position")==="fixed"){offset=elem.getBoundingClientRect();}else{offsetParent=this.offsetParent();offset=this.offset();if(!jQuery.nodeName(offsetParent[0],"html")){parentOffset=offsetParent.offset();}
parentOffset.top+=jQuery.css(offsetParent[0],"borderTopWidth",true);parentOffset.left+=jQuery.css(offsetParent[0],"borderLeftWidth",true);}
return{top:offset.top-parentOffset.top-jQuery.css(elem,"marginTop",true),left:offset.left-parentOffset.left-jQuery.css(elem,"marginLeft",true)};},offsetParent:function(){return this.map(function(){var offsetParent=this.offsetParent||docElem;while(offsetParent&&(!jQuery.nodeName(offsetParent,"html")&&jQuery.css(offsetParent,"position")==="static")){offsetParent=offsetParent.offsetParent;}
return offsetParent||docElem;});}});jQuery.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(method,prop){var top=/Y/.test(prop);jQuery.fn[method]=function(val){return access(this,function(elem,method,val){var win=getWindow(elem);if(val===undefined){return win?(prop in win)?win[prop]:win.document.documentElement[method]:elem[method];}
if(win){win.scrollTo(!top?val:jQuery(win).scrollLeft(),top?val:jQuery(win).scrollTop());}else{elem[method]=val;}},method,val,arguments.length,null);};});jQuery.each(["top","left"],function(i,prop){jQuery.cssHooks[prop]=addGetHookIf(support.pixelPosition,function(elem,computed){if(computed){computed=curCSS(elem,prop);return rnumnonpx.test(computed)?jQuery(elem).position()[prop]+"px":computed;}});});jQuery.each({Height:"height",Width:"width"},function(name,type){jQuery.each({padding:"inner"+name,content:type,"":"outer"+name},function(defaultExtra,funcName){jQuery.fn[funcName]=function(margin,value){var chainable=arguments.length&&(defaultExtra||typeof margin!=="boolean"),extra=defaultExtra||(margin===true||value===true?"margin":"border");return access(this,function(elem,type,value){var doc;if(jQuery.isWindow(elem)){return elem.document.documentElement["client"+name];}
if(elem.nodeType===9){doc=elem.documentElement;return Math.max(elem.body["scroll"+name],doc["scroll"+name],elem.body["offset"+name],doc["offset"+name],doc["client"+name]);}
return value===undefined?jQuery.css(elem,type,extra):jQuery.style(elem,type,value,extra);},type,chainable?margin:undefined,chainable,null);};});});jQuery.fn.size=function(){return this.length;};jQuery.fn.andSelf=jQuery.fn.addBack;if(typeof define==="function"&&define.amd){define("jquery",[],function(){return jQuery;});}
var
_jQuery=window.jQuery,_$=window.$;jQuery.noConflict=function(deep){if(window.$===jQuery){window.$=_$;}
if(deep&&window.jQuery===jQuery){window.jQuery=_jQuery;}
return jQuery;};if(typeof noGlobal===strundefined){window.jQuery=window.$=jQuery;}
return jQuery;}));;
!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var f;"undefined"!=typeof window?f=window:"undefined"!=typeof global?f=global:"undefined"!=typeof self&&(f=self),f.io=e()}}(function(){var define,module,exports;return(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(_dereq_,module,exports){module.exports=_dereq_('./lib/');},{"./lib/":2}],2:[function(_dereq_,module,exports){var url=_dereq_('./url');var parser=_dereq_('socket.io-parser');var Manager=_dereq_('./manager');var debug=_dereq_('debug')('socket.io-client');module.exports=exports=lookup;var cache=exports.managers={};function lookup(uri,opts){if(typeof uri=='object'){opts=uri;uri=undefined;}
opts=opts||{};var parsed=url(uri);var source=parsed.source;var id=parsed.id;var path=parsed.path;var sameNamespace=(cache[id]&&cache[id].nsps[path]&&path==cache[id].nsps[path].nsp);var newConnection=opts.forceNew||opts['force new connection']||false===opts.multiplex||sameNamespace;var io;if(newConnection){debug('ignoring socket cache for %s',source);io=Manager(source,opts);}else{if(!cache[id]){debug('new io instance for %s',source);cache[id]=Manager(source,opts);}
io=cache[id];}
return io.socket(parsed.path);}
exports.protocol=parser.protocol;exports.connect=lookup;exports.Manager=_dereq_('./manager');exports.Socket=_dereq_('./socket');},{"./manager":3,"./socket":5,"./url":6,"debug":10,"socket.io-parser":46}],3:[function(_dereq_,module,exports){var url=_dereq_('./url');var eio=_dereq_('engine.io-client');var Socket=_dereq_('./socket');var Emitter=_dereq_('component-emitter');var parser=_dereq_('socket.io-parser');var on=_dereq_('./on');var bind=_dereq_('component-bind');var object=_dereq_('object-component');var debug=_dereq_('debug')('socket.io-client:manager');var indexOf=_dereq_('indexof');var Backoff=_dereq_('backo2');module.exports=Manager;function Manager(uri,opts){if(!(this instanceof Manager))return new Manager(uri,opts);if(uri&&('object'==typeof uri)){opts=uri;uri=undefined;}
opts=opts||{};opts.path=opts.path||'/socket.io';this.nsps={};this.subs=[];this.opts=opts;this.reconnection(opts.reconnection!==false);this.reconnectionAttempts(opts.reconnectionAttempts||Infinity);this.reconnectionDelay(opts.reconnectionDelay||1000);this.reconnectionDelayMax(opts.reconnectionDelayMax||5000);this.randomizationFactor(opts.randomizationFactor||0.5);this.backoff=new Backoff({min:this.reconnectionDelay(),max:this.reconnectionDelayMax(),jitter:this.randomizationFactor()});this.timeout(null==opts.timeout?20000:opts.timeout);this.readyState='closed';this.uri=uri;this.connected=[];this.encoding=false;this.packetBuffer=[];this.encoder=new parser.Encoder();this.decoder=new parser.Decoder();this.autoConnect=opts.autoConnect!==false;if(this.autoConnect)this.open();}
Manager.prototype.emitAll=function(){this.emit.apply(this,arguments);for(var nsp in this.nsps){this.nsps[nsp].emit.apply(this.nsps[nsp],arguments);}};Manager.prototype.updateSocketIds=function(){for(var nsp in this.nsps){this.nsps[nsp].id=this.engine.id;}};Emitter(Manager.prototype);Manager.prototype.reconnection=function(v){if(!arguments.length)return this._reconnection;this._reconnection=!!v;return this;};Manager.prototype.reconnectionAttempts=function(v){if(!arguments.length)return this._reconnectionAttempts;this._reconnectionAttempts=v;return this;};Manager.prototype.reconnectionDelay=function(v){if(!arguments.length)return this._reconnectionDelay;this._reconnectionDelay=v;this.backoff&&this.backoff.setMin(v);return this;};Manager.prototype.randomizationFactor=function(v){if(!arguments.length)return this._randomizationFactor;this._randomizationFactor=v;this.backoff&&this.backoff.setJitter(v);return this;};Manager.prototype.reconnectionDelayMax=function(v){if(!arguments.length)return this._reconnectionDelayMax;this._reconnectionDelayMax=v;this.backoff&&this.backoff.setMax(v);return this;};Manager.prototype.timeout=function(v){if(!arguments.length)return this._timeout;this._timeout=v;return this;};Manager.prototype.maybeReconnectOnOpen=function(){if(!this.reconnecting&&this._reconnection&&this.backoff.attempts===0){this.reconnect();}};Manager.prototype.open=Manager.prototype.connect=function(fn){debug('readyState %s',this.readyState);if(~this.readyState.indexOf('open'))return this;debug('opening %s',this.uri);this.engine=eio(this.uri,this.opts);var socket=this.engine;var self=this;this.readyState='opening';this.skipReconnect=false;var openSub=on(socket,'open',function(){self.onopen();fn&&fn();});var errorSub=on(socket,'error',function(data){debug('connect_error');self.cleanup();self.readyState='closed';self.emitAll('connect_error',data);if(fn){var err=new Error('Connection error');err.data=data;fn(err);}else{self.maybeReconnectOnOpen();}});if(false!==this._timeout){var timeout=this._timeout;debug('connect attempt will timeout after %d',timeout);var timer=setTimeout(function(){debug('connect attempt timed out after %d',timeout);openSub.destroy();socket.close();socket.emit('error','timeout');self.emitAll('connect_timeout',timeout);},timeout);this.subs.push({destroy:function(){clearTimeout(timer);}});}
this.subs.push(openSub);this.subs.push(errorSub);return this;};Manager.prototype.onopen=function(){debug('open');this.cleanup();this.readyState='open';this.emit('open');var socket=this.engine;this.subs.push(on(socket,'data',bind(this,'ondata')));this.subs.push(on(this.decoder,'decoded',bind(this,'ondecoded')));this.subs.push(on(socket,'error',bind(this,'onerror')));this.subs.push(on(socket,'close',bind(this,'onclose')));};Manager.prototype.ondata=function(data){this.decoder.add(data);};Manager.prototype.ondecoded=function(packet){this.emit('packet',packet);};Manager.prototype.onerror=function(err){debug('error',err);this.emitAll('error',err);};Manager.prototype.socket=function(nsp){var socket=this.nsps[nsp];if(!socket){socket=new Socket(this,nsp);this.nsps[nsp]=socket;var self=this;socket.on('connect',function(){socket.id=self.engine.id;if(!~indexOf(self.connected,socket)){self.connected.push(socket);}});}
return socket;};Manager.prototype.destroy=function(socket){var index=indexOf(this.connected,socket);if(~index)this.connected.splice(index,1);if(this.connected.length)return;this.close();};Manager.prototype.packet=function(packet){debug('writing packet %j',packet);var self=this;if(!self.encoding){self.encoding=true;this.encoder.encode(packet,function(encodedPackets){for(var i=0;i<encodedPackets.length;i++){self.engine.write(encodedPackets[i]);}
self.encoding=false;self.processPacketQueue();});}else{self.packetBuffer.push(packet);}};Manager.prototype.processPacketQueue=function(){if(this.packetBuffer.length>0&&!this.encoding){var pack=this.packetBuffer.shift();this.packet(pack);}};Manager.prototype.cleanup=function(){var sub;while(sub=this.subs.shift())sub.destroy();this.packetBuffer=[];this.encoding=false;this.decoder.destroy();};Manager.prototype.close=Manager.prototype.disconnect=function(){this.skipReconnect=true;this.backoff.reset();this.readyState='closed';this.engine&&this.engine.close();};Manager.prototype.onclose=function(reason){debug('close');this.cleanup();this.backoff.reset();this.readyState='closed';this.emit('close',reason);if(this._reconnection&&!this.skipReconnect){this.reconnect();}};Manager.prototype.reconnect=function(){if(this.reconnecting||this.skipReconnect)return this;var self=this;if(this.backoff.attempts>=this._reconnectionAttempts){debug('reconnect failed');this.backoff.reset();this.emitAll('reconnect_failed');this.reconnecting=false;}else{var delay=this.backoff.duration();debug('will wait %dms before reconnect attempt',delay);this.reconnecting=true;var timer=setTimeout(function(){if(self.skipReconnect)return;debug('attempting reconnect');self.emitAll('reconnect_attempt',self.backoff.attempts);self.emitAll('reconnecting',self.backoff.attempts);if(self.skipReconnect)return;self.open(function(err){if(err){debug('reconnect attempt error');self.reconnecting=false;self.reconnect();self.emitAll('reconnect_error',err.data);}else{debug('reconnect success');self.onreconnect();}});},delay);this.subs.push({destroy:function(){clearTimeout(timer);}});}};Manager.prototype.onreconnect=function(){var attempt=this.backoff.attempts;this.reconnecting=false;this.backoff.reset();this.updateSocketIds();this.emitAll('reconnect',attempt);};},{"./on":4,"./socket":5,"./url":6,"backo2":7,"component-bind":8,"component-emitter":9,"debug":10,"engine.io-client":11,"indexof":42,"object-component":43,"socket.io-parser":46}],4:[function(_dereq_,module,exports){module.exports=on;function on(obj,ev,fn){obj.on(ev,fn);return{destroy:function(){obj.removeListener(ev,fn);}};}},{}],5:[function(_dereq_,module,exports){var parser=_dereq_('socket.io-parser');var Emitter=_dereq_('component-emitter');var toArray=_dereq_('to-array');var on=_dereq_('./on');var bind=_dereq_('component-bind');var debug=_dereq_('debug')('socket.io-client:socket');var hasBin=_dereq_('has-binary');module.exports=exports=Socket;var events={connect:1,connect_error:1,connect_timeout:1,disconnect:1,error:1,reconnect:1,reconnect_attempt:1,reconnect_failed:1,reconnect_error:1,reconnecting:1};var emit=Emitter.prototype.emit;function Socket(io,nsp){this.io=io;this.nsp=nsp;this.json=this;this.ids=0;this.acks={};if(this.io.autoConnect)this.open();this.receiveBuffer=[];this.sendBuffer=[];this.connected=false;this.disconnected=true;}
Emitter(Socket.prototype);Socket.prototype.subEvents=function(){if(this.subs)return;var io=this.io;this.subs=[on(io,'open',bind(this,'onopen')),on(io,'packet',bind(this,'onpacket')),on(io,'close',bind(this,'onclose'))];};Socket.prototype.open=Socket.prototype.connect=function(){if(this.connected)return this;this.subEvents();this.io.open();if('open'==this.io.readyState)this.onopen();return this;};Socket.prototype.send=function(){var args=toArray(arguments);args.unshift('message');this.emit.apply(this,args);return this;};Socket.prototype.emit=function(ev){if(events.hasOwnProperty(ev)){emit.apply(this,arguments);return this;}
var args=toArray(arguments);var parserType=parser.EVENT;if(hasBin(args)){parserType=parser.BINARY_EVENT;}
var packet={type:parserType,data:args};if('function'==typeof args[args.length-1]){debug('emitting packet with ack id %d',this.ids);this.acks[this.ids]=args.pop();packet.id=this.ids++;}
if(this.connected){this.packet(packet);}else{this.sendBuffer.push(packet);}
return this;};Socket.prototype.packet=function(packet){packet.nsp=this.nsp;this.io.packet(packet);};Socket.prototype.onopen=function(){debug('transport is open - connecting');if('/'!=this.nsp){this.packet({type:parser.CONNECT});}};Socket.prototype.onclose=function(reason){debug('close (%s)',reason);this.connected=false;this.disconnected=true;delete this.id;this.emit('disconnect',reason);};Socket.prototype.onpacket=function(packet){if(packet.nsp!=this.nsp)return;switch(packet.type){case parser.CONNECT:this.onconnect();break;case parser.EVENT:this.onevent(packet);break;case parser.BINARY_EVENT:this.onevent(packet);break;case parser.ACK:this.onack(packet);break;case parser.BINARY_ACK:this.onack(packet);break;case parser.DISCONNECT:this.ondisconnect();break;case parser.ERROR:this.emit('error',packet.data);break;}};Socket.prototype.onevent=function(packet){var args=packet.data||[];debug('emitting event %j',args);if(null!=packet.id){debug('attaching ack callback to event');args.push(this.ack(packet.id));}
if(this.connected){emit.apply(this,args);}else{this.receiveBuffer.push(args);}};Socket.prototype.ack=function(id){var self=this;var sent=false;return function(){if(sent)return;sent=true;var args=toArray(arguments);debug('sending ack %j',args);var type=hasBin(args)?parser.BINARY_ACK:parser.ACK;self.packet({type:type,id:id,data:args});};};Socket.prototype.onack=function(packet){debug('calling ack %s with %j',packet.id,packet.data);var fn=this.acks[packet.id];fn.apply(this,packet.data);delete this.acks[packet.id];};Socket.prototype.onconnect=function(){this.connected=true;this.disconnected=false;this.emit('connect');this.emitBuffered();};Socket.prototype.emitBuffered=function(){var i;for(i=0;i<this.receiveBuffer.length;i++){emit.apply(this,this.receiveBuffer[i]);}
this.receiveBuffer=[];for(i=0;i<this.sendBuffer.length;i++){this.packet(this.sendBuffer[i]);}
this.sendBuffer=[];};Socket.prototype.ondisconnect=function(){debug('server disconnect (%s)',this.nsp);this.destroy();this.onclose('io server disconnect');};Socket.prototype.destroy=function(){if(this.subs){for(var i=0;i<this.subs.length;i++){this.subs[i].destroy();}
this.subs=null;}
this.io.destroy(this);};Socket.prototype.close=Socket.prototype.disconnect=function(){if(this.connected){debug('performing disconnect (%s)',this.nsp);this.packet({type:parser.DISCONNECT});}
this.destroy();if(this.connected){this.onclose('io client disconnect');}
return this;};},{"./on":4,"component-bind":8,"component-emitter":9,"debug":10,"has-binary":38,"socket.io-parser":46,"to-array":50}],6:[function(_dereq_,module,exports){(function(global){var parseuri=_dereq_('parseuri');var debug=_dereq_('debug')('socket.io-client:url');module.exports=url;function url(uri,loc){var obj=uri;var loc=loc||global.location;if(null==uri)uri=loc.protocol+'//'+loc.host;if('string'==typeof uri){if('/'==uri.charAt(0)){if('/'==uri.charAt(1)){uri=loc.protocol+uri;}else{uri=loc.hostname+uri;}}
if(!/^(https?|wss?):\/\//.test(uri)){debug('protocol-less url %s',uri);if('undefined'!=typeof loc){uri=loc.protocol+'//'+uri;}else{uri='https://'+uri;}}
debug('parse %s',uri);obj=parseuri(uri);}
if(!obj.port){if(/^(http|ws)$/.test(obj.protocol)){obj.port='80';}
else if(/^(http|ws)s$/.test(obj.protocol)){obj.port='443';}}
obj.path=obj.path||'/';obj.id=obj.protocol+'://'+obj.host+':'+obj.port;obj.href=obj.protocol+'://'+obj.host+(loc&&loc.port==obj.port?'':(':'+obj.port));return obj;}}).call(this,typeof self!=="undefined"?self:typeof window!=="undefined"?window:{})},{"debug":10,"parseuri":44}],7:[function(_dereq_,module,exports){module.exports=Backoff;function Backoff(opts){opts=opts||{};this.ms=opts.min||100;this.max=opts.max||10000;this.factor=opts.factor||2;this.jitter=opts.jitter>0&&opts.jitter<=1?opts.jitter:0;this.attempts=0;}
Backoff.prototype.duration=function(){var ms=this.ms*Math.pow(this.factor,this.attempts++);if(this.jitter){var rand=Math.random();var deviation=Math.floor(rand*this.jitter*ms);ms=(Math.floor(rand*10)&1)==0?ms-deviation:ms+deviation;}
return Math.min(ms,this.max)|0;};Backoff.prototype.reset=function(){this.attempts=0;};Backoff.prototype.setMin=function(min){this.ms=min;};Backoff.prototype.setMax=function(max){this.max=max;};Backoff.prototype.setJitter=function(jitter){this.jitter=jitter;};},{}],8:[function(_dereq_,module,exports){var slice=[].slice;module.exports=function(obj,fn){if('string'==typeof fn)fn=obj[fn];if('function'!=typeof fn)throw new Error('bind() requires a function');var args=slice.call(arguments,2);return function(){return fn.apply(obj,args.concat(slice.call(arguments)));}};},{}],9:[function(_dereq_,module,exports){module.exports=Emitter;function Emitter(obj){if(obj)return mixin(obj);};function mixin(obj){for(var key in Emitter.prototype){obj[key]=Emitter.prototype[key];}
return obj;}
Emitter.prototype.on=Emitter.prototype.addEventListener=function(event,fn){this._callbacks=this._callbacks||{};(this._callbacks[event]=this._callbacks[event]||[]).push(fn);return this;};Emitter.prototype.once=function(event,fn){var self=this;this._callbacks=this._callbacks||{};function on(){self.off(event,on);fn.apply(this,arguments);}
on.fn=fn;this.on(event,on);return this;};Emitter.prototype.off=Emitter.prototype.removeListener=Emitter.prototype.removeAllListeners=Emitter.prototype.removeEventListener=function(event,fn){this._callbacks=this._callbacks||{};if(0==arguments.length){this._callbacks={};return this;}
var callbacks=this._callbacks[event];if(!callbacks)return this;if(1==arguments.length){delete this._callbacks[event];return this;}
var cb;for(var i=0;i<callbacks.length;i++){cb=callbacks[i];if(cb===fn||cb.fn===fn){callbacks.splice(i,1);break;}}
return this;};Emitter.prototype.emit=function(event){this._callbacks=this._callbacks||{};var args=[].slice.call(arguments,1),callbacks=this._callbacks[event];if(callbacks){callbacks=callbacks.slice(0);for(var i=0,len=callbacks.length;i<len;++i){callbacks[i].apply(this,args);}}
return this;};Emitter.prototype.listeners=function(event){this._callbacks=this._callbacks||{};return this._callbacks[event]||[];};Emitter.prototype.hasListeners=function(event){return!!this.listeners(event).length;};},{}],10:[function(_dereq_,module,exports){module.exports=debug;function debug(name){if(!debug.enabled(name))return function(){};return function(fmt){fmt=coerce(fmt);var curr=new Date;var ms=curr-(debug[name]||curr);debug[name]=curr;fmt=name
+' '
+fmt
+' +'+debug.humanize(ms);window.console&&console.log&&Function.prototype.apply.call(console.log,console,arguments);}}
debug.names=[];debug.skips=[];debug.enable=function(name){try{localStorage.debug=name;}catch(e){}
var split=(name||'').split(/[\s,]+/),len=split.length;for(var i=0;i<len;i++){name=split[i].replace('*','.*?');if(name[0]==='-'){debug.skips.push(new RegExp('^'+name.substr(1)+'$'));}
else{debug.names.push(new RegExp('^'+name+'$'));}}};debug.disable=function(){debug.enable('');};debug.humanize=function(ms){var sec=1000,min=60*1000,hour=60*min;if(ms>=hour)return(ms/hour).toFixed(1)+'h';if(ms>=min)return(ms/min).toFixed(1)+'m';if(ms>=sec)return(ms/sec|0)+'s';return ms+'ms';};debug.enabled=function(name){for(var i=0,len=debug.skips.length;i<len;i++){if(debug.skips[i].test(name)){return false;}}
for(var i=0,len=debug.names.length;i<len;i++){if(debug.names[i].test(name)){return true;}}
return false;};function coerce(val){if(val instanceof Error)return val.stack||val.message;return val;}
try{if(window.localStorage)debug.enable(localStorage.debug);}catch(e){}},{}],11:[function(_dereq_,module,exports){module.exports=_dereq_('./lib/');},{"./lib/":12}],12:[function(_dereq_,module,exports){module.exports=_dereq_('./socket');module.exports.parser=_dereq_('engine.io-parser');},{"./socket":13,"engine.io-parser":25}],13:[function(_dereq_,module,exports){(function(global){var transports=_dereq_('./transports');var Emitter=_dereq_('component-emitter');var debug=_dereq_('debug')('engine.io-client:socket');var index=_dereq_('indexof');var parser=_dereq_('engine.io-parser');var parseuri=_dereq_('parseuri');var parsejson=_dereq_('parsejson');var parseqs=_dereq_('parseqs');module.exports=Socket;function noop(){}
function Socket(uri,opts){if(!(this instanceof Socket))return new Socket(uri,opts);opts=opts||{};if(uri&&'object'==typeof uri){opts=uri;uri=null;}
if(uri){uri=parseuri(uri);opts.host=uri.host;opts.secure=uri.protocol=='https'||uri.protocol=='wss';opts.port=uri.port;if(uri.query)opts.query=uri.query;}
this.secure=null!=opts.secure?opts.secure:(global.location&&'https:'==location.protocol);if(opts.host){var pieces=opts.host.split(':');opts.hostname=pieces.shift();if(pieces.length){opts.port=pieces.pop();}else if(!opts.port){opts.port=this.secure?'443':'80';}}
this.agent=opts.agent||false;this.hostname=opts.hostname||(global.location?location.hostname:'localhost');this.port=opts.port||(global.location&&location.port?location.port:(this.secure?443:80));this.query=opts.query||{};if('string'==typeof this.query)this.query=parseqs.decode(this.query);this.upgrade=false!==opts.upgrade;this.path=(opts.path||'/engine.io').replace(/\/$/,'')+'/';this.forceJSONP=!!opts.forceJSONP;this.jsonp=false!==opts.jsonp;this.forceBase64=!!opts.forceBase64;this.enablesXDR=!!opts.enablesXDR;this.timestampParam=opts.timestampParam||'t';this.timestampRequests=opts.timestampRequests;this.transports=opts.transports||['polling','websocket'];this.readyState='';this.writeBuffer=[];this.callbackBuffer=[];this.policyPort=opts.policyPort||843;this.rememberUpgrade=opts.rememberUpgrade||false;this.binaryType=null;this.onlyBinaryUpgrades=opts.onlyBinaryUpgrades;this.pfx=opts.pfx||null;this.key=opts.key||null;this.passphrase=opts.passphrase||null;this.cert=opts.cert||null;this.ca=opts.ca||null;this.ciphers=opts.ciphers||null;this.rejectUnauthorized=opts.rejectUnauthorized||null;this.open();}
Socket.priorWebsocketSuccess=false;Emitter(Socket.prototype);Socket.protocol=parser.protocol;Socket.Socket=Socket;Socket.Transport=_dereq_('./transport');Socket.transports=_dereq_('./transports');Socket.parser=_dereq_('engine.io-parser');Socket.prototype.createTransport=function(name){debug('creating transport "%s"',name);var query=clone(this.query);query.EIO=parser.protocol;query.transport=name;if(this.id)query.sid=this.id;var transport=new transports[name]({agent:this.agent,hostname:this.hostname,port:this.port,secure:this.secure,path:this.path,query:query,forceJSONP:this.forceJSONP,jsonp:this.jsonp,forceBase64:this.forceBase64,enablesXDR:this.enablesXDR,timestampRequests:this.timestampRequests,timestampParam:this.timestampParam,policyPort:this.policyPort,socket:this,pfx:this.pfx,key:this.key,passphrase:this.passphrase,cert:this.cert,ca:this.ca,ciphers:this.ciphers,rejectUnauthorized:this.rejectUnauthorized});return transport;};function clone(obj){var o={};for(var i in obj){if(obj.hasOwnProperty(i)){o[i]=obj[i];}}
return o;}
Socket.prototype.open=function(){var transport;if(this.rememberUpgrade&&Socket.priorWebsocketSuccess&&this.transports.indexOf('websocket')!=-1){transport='websocket';}else if(0==this.transports.length){var self=this;setTimeout(function(){self.emit('error','No transports available');},0);return;}else{transport=this.transports[0];}
this.readyState='opening';var transport;try{transport=this.createTransport(transport);}catch(e){this.transports.shift();this.open();return;}
transport.open();this.setTransport(transport);};Socket.prototype.setTransport=function(transport){debug('setting transport %s',transport.name);var self=this;if(this.transport){debug('clearing existing transport %s',this.transport.name);this.transport.removeAllListeners();}
this.transport=transport;transport.on('drain',function(){self.onDrain();}).on('packet',function(packet){self.onPacket(packet);}).on('error',function(e){self.onError(e);}).on('close',function(){self.onClose('transport close');});};Socket.prototype.probe=function(name){debug('probing transport "%s"',name);var transport=this.createTransport(name,{probe:1}),failed=false,self=this;Socket.priorWebsocketSuccess=false;function onTransportOpen(){if(self.onlyBinaryUpgrades){var upgradeLosesBinary=!this.supportsBinary&&self.transport.supportsBinary;failed=failed||upgradeLosesBinary;}
if(failed)return;debug('probe transport "%s" opened',name);transport.send([{type:'ping',data:'probe'}]);transport.once('packet',function(msg){if(failed)return;if('pong'==msg.type&&'probe'==msg.data){debug('probe transport "%s" pong',name);self.upgrading=true;self.emit('upgrading',transport);if(!transport)return;Socket.priorWebsocketSuccess='websocket'==transport.name;debug('pausing current transport "%s"',self.transport.name);self.transport.pause(function(){if(failed)return;if('closed'==self.readyState)return;debug('changing transport and sending upgrade packet');cleanup();self.setTransport(transport);transport.send([{type:'upgrade'}]);self.emit('upgrade',transport);transport=null;self.upgrading=false;self.flush();});}else{debug('probe transport "%s" failed',name);var err=new Error('probe error');err.transport=transport.name;self.emit('upgradeError',err);}});}
function freezeTransport(){if(failed)return;failed=true;cleanup();transport.close();transport=null;}
function onerror(err){var error=new Error('probe error: '+err);error.transport=transport.name;freezeTransport();debug('probe transport "%s" failed because of error: %s',name,err);self.emit('upgradeError',error);}
function onTransportClose(){onerror("transport closed");}
function onclose(){onerror("socket closed");}
function onupgrade(to){if(transport&&to.name!=transport.name){debug('"%s" works - aborting "%s"',to.name,transport.name);freezeTransport();}}
function cleanup(){transport.removeListener('open',onTransportOpen);transport.removeListener('error',onerror);transport.removeListener('close',onTransportClose);self.removeListener('close',onclose);self.removeListener('upgrading',onupgrade);}
transport.once('open',onTransportOpen);transport.once('error',onerror);transport.once('close',onTransportClose);this.once('close',onclose);this.once('upgrading',onupgrade);transport.open();};Socket.prototype.onOpen=function(){debug('socket open');this.readyState='open';Socket.priorWebsocketSuccess='websocket'==this.transport.name;this.emit('open');this.flush();if('open'==this.readyState&&this.upgrade&&this.transport.pause){debug('starting upgrade probes');for(var i=0,l=this.upgrades.length;i<l;i++){this.probe(this.upgrades[i]);}}};Socket.prototype.onPacket=function(packet){if('opening'==this.readyState||'open'==this.readyState){debug('socket receive: type "%s", data "%s"',packet.type,packet.data);this.emit('packet',packet);this.emit('heartbeat');switch(packet.type){case'open':this.onHandshake(parsejson(packet.data));break;case'pong':this.setPing();break;case'error':var err=new Error('server error');err.code=packet.data;this.emit('error',err);break;case'message':this.emit('data',packet.data);this.emit('message',packet.data);break;}}else{debug('packet received with socket readyState "%s"',this.readyState);}};Socket.prototype.onHandshake=function(data){this.emit('handshake',data);this.id=data.sid;this.transport.query.sid=data.sid;this.upgrades=this.filterUpgrades(data.upgrades);this.pingInterval=data.pingInterval;this.pingTimeout=data.pingTimeout;this.onOpen();if('closed'==this.readyState)return;this.setPing();this.removeListener('heartbeat',this.onHeartbeat);this.on('heartbeat',this.onHeartbeat);};Socket.prototype.onHeartbeat=function(timeout){clearTimeout(this.pingTimeoutTimer);var self=this;self.pingTimeoutTimer=setTimeout(function(){if('closed'==self.readyState)return;self.onClose('ping timeout');},timeout||(self.pingInterval+self.pingTimeout));};Socket.prototype.setPing=function(){var self=this;clearTimeout(self.pingIntervalTimer);self.pingIntervalTimer=setTimeout(function(){debug('writing ping packet - expecting pong within %sms',self.pingTimeout);self.ping();self.onHeartbeat(self.pingTimeout);},self.pingInterval);};Socket.prototype.ping=function(){this.sendPacket('ping');};Socket.prototype.onDrain=function(){for(var i=0;i<this.prevBufferLen;i++){if(this.callbackBuffer[i]){this.callbackBuffer[i]();}}
this.writeBuffer.splice(0,this.prevBufferLen);this.callbackBuffer.splice(0,this.prevBufferLen);this.prevBufferLen=0;if(this.writeBuffer.length==0){this.emit('drain');}else{this.flush();}};Socket.prototype.flush=function(){if('closed'!=this.readyState&&this.transport.writable&&!this.upgrading&&this.writeBuffer.length){debug('flushing %d packets in socket',this.writeBuffer.length);this.transport.send(this.writeBuffer);this.prevBufferLen=this.writeBuffer.length;this.emit('flush');}};Socket.prototype.write=Socket.prototype.send=function(msg,fn){this.sendPacket('message',msg,fn);return this;};Socket.prototype.sendPacket=function(type,data,fn){if('closing'==this.readyState||'closed'==this.readyState){return;}
var packet={type:type,data:data};this.emit('packetCreate',packet);this.writeBuffer.push(packet);this.callbackBuffer.push(fn);this.flush();};Socket.prototype.close=function(){if('opening'==this.readyState||'open'==this.readyState){this.readyState='closing';var self=this;function close(){self.onClose('forced close');debug('socket closing - telling transport to close');self.transport.close();}
function cleanupAndClose(){self.removeListener('upgrade',cleanupAndClose);self.removeListener('upgradeError',cleanupAndClose);close();}
function waitForUpgrade(){self.once('upgrade',cleanupAndClose);self.once('upgradeError',cleanupAndClose);}
if(this.writeBuffer.length){this.once('drain',function(){if(this.upgrading){waitForUpgrade();}else{close();}});}else if(this.upgrading){waitForUpgrade();}else{close();}}
return this;};Socket.prototype.onError=function(err){debug('socket error %j',err);Socket.priorWebsocketSuccess=false;this.emit('error',err);this.onClose('transport error',err);};Socket.prototype.onClose=function(reason,desc){if('opening'==this.readyState||'open'==this.readyState||'closing'==this.readyState){debug('socket close with reason: "%s"',reason);var self=this;clearTimeout(this.pingIntervalTimer);clearTimeout(this.pingTimeoutTimer);setTimeout(function(){self.writeBuffer=[];self.callbackBuffer=[];self.prevBufferLen=0;},0);this.transport.removeAllListeners('close');this.transport.close();this.transport.removeAllListeners();this.readyState='closed';this.id=null;this.emit('close',reason,desc);}};Socket.prototype.filterUpgrades=function(upgrades){var filteredUpgrades=[];for(var i=0,j=upgrades.length;i<j;i++){if(~index(this.transports,upgrades[i]))filteredUpgrades.push(upgrades[i]);}
return filteredUpgrades;};}).call(this,typeof self!=="undefined"?self:typeof window!=="undefined"?window:{})},{"./transport":14,"./transports":15,"component-emitter":9,"debug":22,"engine.io-parser":25,"indexof":42,"parsejson":34,"parseqs":35,"parseuri":36}],14:[function(_dereq_,module,exports){var parser=_dereq_('engine.io-parser');var Emitter=_dereq_('component-emitter');module.exports=Transport;function Transport(opts){this.path=opts.path;this.hostname=opts.hostname;this.port=opts.port;this.secure=opts.secure;this.query=opts.query;this.timestampParam=opts.timestampParam;this.timestampRequests=opts.timestampRequests;this.readyState='';this.agent=opts.agent||false;this.socket=opts.socket;this.enablesXDR=opts.enablesXDR;this.pfx=opts.pfx;this.key=opts.key;this.passphrase=opts.passphrase;this.cert=opts.cert;this.ca=opts.ca;this.ciphers=opts.ciphers;this.rejectUnauthorized=opts.rejectUnauthorized;}
Emitter(Transport.prototype);Transport.timestamps=0;Transport.prototype.onError=function(msg,desc){var err=new Error(msg);err.type='TransportError';err.description=desc;this.emit('error',err);return this;};Transport.prototype.open=function(){if('closed'==this.readyState||''==this.readyState){this.readyState='opening';this.doOpen();}
return this;};Transport.prototype.close=function(){if('opening'==this.readyState||'open'==this.readyState){this.doClose();this.onClose();}
return this;};Transport.prototype.send=function(packets){if('open'==this.readyState){this.write(packets);}else{throw new Error('Transport not open');}};Transport.prototype.onOpen=function(){this.readyState='open';this.writable=true;this.emit('open');};Transport.prototype.onData=function(data){var packet=parser.decodePacket(data,this.socket.binaryType);this.onPacket(packet);};Transport.prototype.onPacket=function(packet){this.emit('packet',packet);};Transport.prototype.onClose=function(){this.readyState='closed';this.emit('close');};},{"component-emitter":9,"engine.io-parser":25}],15:[function(_dereq_,module,exports){(function(global){var XMLHttpRequest=_dereq_('xmlhttprequest');var XHR=_dereq_('./polling-xhr');var JSONP=_dereq_('./polling-jsonp');var websocket=_dereq_('./websocket');exports.polling=polling;exports.websocket=websocket;function polling(opts){var xhr;var xd=false;var xs=false;var jsonp=false!==opts.jsonp;if(global.location){var isSSL='https:'==location.protocol;var port=location.port;if(!port){port=isSSL?443:80;}
xd=opts.hostname!=location.hostname||port!=opts.port;xs=opts.secure!=isSSL;}
opts.xdomain=xd;opts.xscheme=xs;xhr=new XMLHttpRequest(opts);if('open'in xhr&&!opts.forceJSONP){return new XHR(opts);}else{if(!jsonp)throw new Error('JSONP disabled');return new JSONP(opts);}}}).call(this,typeof self!=="undefined"?self:typeof window!=="undefined"?window:{})},{"./polling-jsonp":16,"./polling-xhr":17,"./websocket":19,"xmlhttprequest":20}],16:[function(_dereq_,module,exports){(function(global){var Polling=_dereq_('./polling');var inherit=_dereq_('component-inherit');module.exports=JSONPPolling;var rNewline=/\n/g;var rEscapedNewline=/\\n/g;var callbacks;var index=0;function empty(){}
function JSONPPolling(opts){Polling.call(this,opts);this.query=this.query||{};if(!callbacks){if(!global.___eio)global.___eio=[];callbacks=global.___eio;}
this.index=callbacks.length;var self=this;callbacks.push(function(msg){self.onData(msg);});this.query.j=this.index;if(global.document&&global.addEventListener){global.addEventListener('beforeunload',function(){if(self.script)self.script.onerror=empty;},false);}}
inherit(JSONPPolling,Polling);JSONPPolling.prototype.supportsBinary=false;JSONPPolling.prototype.doClose=function(){if(this.script){this.script.parentNode.removeChild(this.script);this.script=null;}
if(this.form){this.form.parentNode.removeChild(this.form);this.form=null;this.iframe=null;}
Polling.prototype.doClose.call(this);};JSONPPolling.prototype.doPoll=function(){var self=this;var script=document.createElement('script');if(this.script){this.script.parentNode.removeChild(this.script);this.script=null;}
script.async=true;script.src=this.uri();script.onerror=function(e){self.onError('jsonp poll error',e);};var insertAt=document.getElementsByTagName('script')[0];insertAt.parentNode.insertBefore(script,insertAt);this.script=script;var isUAgecko='undefined'!=typeof navigator&&/gecko/i.test(navigator.userAgent);if(isUAgecko){setTimeout(function(){var iframe=document.createElement('iframe');document.body.appendChild(iframe);document.body.removeChild(iframe);},100);}};JSONPPolling.prototype.doWrite=function(data,fn){var self=this;if(!this.form){var form=document.createElement('form');var area=document.createElement('textarea');var id=this.iframeId='eio_iframe_'+this.index;var iframe;form.className='socketio';form.style.position='absolute';form.style.top='-1000px';form.style.left='-1000px';form.target=id;form.method='POST';form.setAttribute('accept-charset','utf-8');area.name='d';form.appendChild(area);document.body.appendChild(form);this.form=form;this.area=area;}
this.form.action=this.uri();function complete(){initIframe();fn();}
function initIframe(){if(self.iframe){try{self.form.removeChild(self.iframe);}catch(e){self.onError('jsonp polling iframe removal error',e);}}
try{var html='<iframe src="javascript:0" name="'+self.iframeId+'">';iframe=document.createElement(html);}catch(e){iframe=document.createElement('iframe');iframe.name=self.iframeId;iframe.src='javascript:0';}
iframe.id=self.iframeId;self.form.appendChild(iframe);self.iframe=iframe;}
initIframe();data=data.replace(rEscapedNewline,'\\\n');this.area.value=data.replace(rNewline,'\\n');try{this.form.submit();}catch(e){}
if(this.iframe.attachEvent){this.iframe.onreadystatechange=function(){if(self.iframe.readyState=='complete'){complete();}};}else{this.iframe.onload=complete;}};}).call(this,typeof self!=="undefined"?self:typeof window!=="undefined"?window:{})},{"./polling":18,"component-inherit":21}],17:[function(_dereq_,module,exports){(function(global){var XMLHttpRequest=_dereq_('xmlhttprequest');var Polling=_dereq_('./polling');var Emitter=_dereq_('component-emitter');var inherit=_dereq_('component-inherit');var debug=_dereq_('debug')('engine.io-client:polling-xhr');module.exports=XHR;module.exports.Request=Request;function empty(){}
function XHR(opts){Polling.call(this,opts);if(global.location){var isSSL='https:'==location.protocol;var port=location.port;if(!port){port=isSSL?443:80;}
this.xd=opts.hostname!=global.location.hostname||port!=opts.port;this.xs=opts.secure!=isSSL;}}
inherit(XHR,Polling);XHR.prototype.supportsBinary=true;XHR.prototype.request=function(opts){opts=opts||{};opts.uri=this.uri();opts.xd=this.xd;opts.xs=this.xs;opts.agent=this.agent||false;opts.supportsBinary=this.supportsBinary;opts.enablesXDR=this.enablesXDR;opts.pfx=this.pfx;opts.key=this.key;opts.passphrase=this.passphrase;opts.cert=this.cert;opts.ca=this.ca;opts.ciphers=this.ciphers;opts.rejectUnauthorized=this.rejectUnauthorized;return new Request(opts);};XHR.prototype.doWrite=function(data,fn){var isBinary=typeof data!=='string'&&data!==undefined;var req=this.request({method:'POST',data:data,isBinary:isBinary});var self=this;req.on('success',fn);req.on('error',function(err){self.onError('xhr post error',err);});this.sendXhr=req;};XHR.prototype.doPoll=function(){debug('xhr poll');var req=this.request();var self=this;req.on('data',function(data){self.onData(data);});req.on('error',function(err){self.onError('xhr poll error',err);});this.pollXhr=req;};function Request(opts){this.method=opts.method||'GET';this.uri=opts.uri;this.xd=!!opts.xd;this.xs=!!opts.xs;this.async=false!==opts.async;this.data=undefined!=opts.data?opts.data:null;this.agent=opts.agent;this.isBinary=opts.isBinary;this.supportsBinary=opts.supportsBinary;this.enablesXDR=opts.enablesXDR;this.pfx=opts.pfx;this.key=opts.key;this.passphrase=opts.passphrase;this.cert=opts.cert;this.ca=opts.ca;this.ciphers=opts.ciphers;this.rejectUnauthorized=opts.rejectUnauthorized;this.create();}
Emitter(Request.prototype);Request.prototype.create=function(){var opts={agent:this.agent,xdomain:this.xd,xscheme:this.xs,enablesXDR:this.enablesXDR};opts.pfx=this.pfx;opts.key=this.key;opts.passphrase=this.passphrase;opts.cert=this.cert;opts.ca=this.ca;opts.ciphers=this.ciphers;opts.rejectUnauthorized=this.rejectUnauthorized;var xhr=this.xhr=new XMLHttpRequest(opts);var self=this;try{debug('xhr open %s: %s',this.method,this.uri);xhr.open(this.method,this.uri,this.async);if(this.supportsBinary){xhr.responseType='arraybuffer';}
if('POST'==this.method){try{if(this.isBinary){xhr.setRequestHeader('Content-type','application/octet-stream');}else{xhr.setRequestHeader('Content-type','text/plain;charset=UTF-8');}}catch(e){}}
if('withCredentials'in xhr){xhr.withCredentials=true;}
if(this.hasXDR()){xhr.onload=function(){self.onLoad();};xhr.onerror=function(){self.onError(xhr.responseText);};}else{xhr.onreadystatechange=function(){if(4!=xhr.readyState)return;if(200==xhr.status||1223==xhr.status){self.onLoad();}else{setTimeout(function(){self.onError(xhr.status);},0);}};}
debug('xhr data %s',this.data);xhr.send(this.data);}catch(e){setTimeout(function(){self.onError(e);},0);return;}
if(global.document){this.index=Request.requestsCount++;Request.requests[this.index]=this;}};Request.prototype.onSuccess=function(){this.emit('success');this.cleanup();};Request.prototype.onData=function(data){this.emit('data',data);this.onSuccess();};Request.prototype.onError=function(err){this.emit('error',err);this.cleanup(true);};Request.prototype.cleanup=function(fromError){if('undefined'==typeof this.xhr||null===this.xhr){return;}
if(this.hasXDR()){this.xhr.onload=this.xhr.onerror=empty;}else{this.xhr.onreadystatechange=empty;}
if(fromError){try{this.xhr.abort();}catch(e){}}
if(global.document){delete Request.requests[this.index];}
this.xhr=null;};Request.prototype.onLoad=function(){var data;try{var contentType;try{contentType=this.xhr.getResponseHeader('Content-Type').split(';')[0];}catch(e){}
if(contentType==='application/octet-stream'){data=this.xhr.response;}else{if(!this.supportsBinary){data=this.xhr.responseText;}else{data='ok';}}}catch(e){this.onError(e);}
if(null!=data){this.onData(data);}};Request.prototype.hasXDR=function(){return'undefined'!==typeof global.XDomainRequest&&!this.xs&&this.enablesXDR;};Request.prototype.abort=function(){this.cleanup();};if(global.document){Request.requestsCount=0;Request.requests={};if(global.attachEvent){global.attachEvent('onunload',unloadHandler);}else if(global.addEventListener){global.addEventListener('beforeunload',unloadHandler,false);}}
function unloadHandler(){for(var i in Request.requests){if(Request.requests.hasOwnProperty(i)){Request.requests[i].abort();}}}}).call(this,typeof self!=="undefined"?self:typeof window!=="undefined"?window:{})},{"./polling":18,"component-emitter":9,"component-inherit":21,"debug":22,"xmlhttprequest":20}],18:[function(_dereq_,module,exports){var Transport=_dereq_('../transport');var parseqs=_dereq_('parseqs');var parser=_dereq_('engine.io-parser');var inherit=_dereq_('component-inherit');var debug=_dereq_('debug')('engine.io-client:polling');module.exports=Polling;var hasXHR2=(function(){var XMLHttpRequest=_dereq_('xmlhttprequest');var xhr=new XMLHttpRequest({xdomain:false});return null!=xhr.responseType;})();function Polling(opts){var forceBase64=(opts&&opts.forceBase64);if(!hasXHR2||forceBase64){this.supportsBinary=false;}
Transport.call(this,opts);}
inherit(Polling,Transport);Polling.prototype.name='polling';Polling.prototype.doOpen=function(){this.poll();};Polling.prototype.pause=function(onPause){var pending=0;var self=this;this.readyState='pausing';function pause(){debug('paused');self.readyState='paused';onPause();}
if(this.polling||!this.writable){var total=0;if(this.polling){debug('we are currently polling - waiting to pause');total++;this.once('pollComplete',function(){debug('pre-pause polling complete');--total||pause();});}
if(!this.writable){debug('we are currently writing - waiting to pause');total++;this.once('drain',function(){debug('pre-pause writing complete');--total||pause();});}}else{pause();}};Polling.prototype.poll=function(){debug('polling');this.polling=true;this.doPoll();this.emit('poll');};Polling.prototype.onData=function(data){var self=this;debug('polling got data %s',data);var callback=function(packet,index,total){if('opening'==self.readyState){self.onOpen();}
if('close'==packet.type){self.onClose();return false;}
self.onPacket(packet);};parser.decodePayload(data,this.socket.binaryType,callback);if('closed'!=this.readyState){this.polling=false;this.emit('pollComplete');if('open'==this.readyState){this.poll();}else{debug('ignoring poll - transport state "%s"',this.readyState);}}};Polling.prototype.doClose=function(){var self=this;function close(){debug('writing close packet');self.write([{type:'close'}]);}
if('open'==this.readyState){debug('transport open - closing');close();}else{debug('transport not open - deferring close');this.once('open',close);}};Polling.prototype.write=function(packets){var self=this;this.writable=false;var callbackfn=function(){self.writable=true;self.emit('drain');};var self=this;parser.encodePayload(packets,this.supportsBinary,function(data){self.doWrite(data,callbackfn);});};Polling.prototype.uri=function(){var query=this.query||{};var schema=this.secure?'https':'http';var port='';if(false!==this.timestampRequests){query[this.timestampParam]=+new Date+'-'+Transport.timestamps++;}
if(!this.supportsBinary&&!query.sid){query.b64=1;}
query=parseqs.encode(query);if(this.port&&(('https'==schema&&this.port!=443)||('http'==schema&&this.port!=80))){port=':'+this.port;}
if(query.length){query='?'+query;}
return schema+'://'+this.hostname+port+this.path+query;};},{"../transport":14,"component-inherit":21,"debug":22,"engine.io-parser":25,"parseqs":35,"xmlhttprequest":20}],19:[function(_dereq_,module,exports){var Transport=_dereq_('../transport');var parser=_dereq_('engine.io-parser');var parseqs=_dereq_('parseqs');var inherit=_dereq_('component-inherit');var debug=_dereq_('debug')('engine.io-client:websocket');var WebSocket=_dereq_('ws');module.exports=WS;function WS(opts){var forceBase64=(opts&&opts.forceBase64);if(forceBase64){this.supportsBinary=false;}
Transport.call(this,opts);}
inherit(WS,Transport);WS.prototype.name='websocket';WS.prototype.supportsBinary=true;WS.prototype.doOpen=function(){if(!this.check()){return;}
var self=this;var uri=this.uri();var protocols=void(0);var opts={agent:this.agent};opts.pfx=this.pfx;opts.key=this.key;opts.passphrase=this.passphrase;opts.cert=this.cert;opts.ca=this.ca;opts.ciphers=this.ciphers;opts.rejectUnauthorized=this.rejectUnauthorized;this.ws=new WebSocket(uri,protocols,opts);if(this.ws.binaryType===undefined){this.supportsBinary=false;}
this.ws.binaryType='arraybuffer';this.addEventListeners();};WS.prototype.addEventListeners=function(){var self=this;this.ws.onopen=function(){self.onOpen();};this.ws.onclose=function(){self.onClose();};this.ws.onmessage=function(ev){self.onData(ev.data);};this.ws.onerror=function(e){self.onError('websocket error',e);};};if('undefined'!=typeof navigator&&/iPad|iPhone|iPod/i.test(navigator.userAgent)){WS.prototype.onData=function(data){var self=this;setTimeout(function(){Transport.prototype.onData.call(self,data);},0);};}
WS.prototype.write=function(packets){var self=this;this.writable=false;for(var i=0,l=packets.length;i<l;i++){parser.encodePacket(packets[i],this.supportsBinary,function(data){try{self.ws.send(data);}catch(e){debug('websocket closed before onclose event');}});}
function ondrain(){self.writable=true;self.emit('drain');}
setTimeout(ondrain,0);};WS.prototype.onClose=function(){Transport.prototype.onClose.call(this);};WS.prototype.doClose=function(){if(typeof this.ws!=='undefined'){this.ws.close();}};WS.prototype.uri=function(){var query=this.query||{};var schema=this.secure?'wss':'ws';var port='';if(this.port&&(('wss'==schema&&this.port!=443)||('ws'==schema&&this.port!=80))){port=':'+this.port;}
if(this.timestampRequests){query[this.timestampParam]=+new Date;}
if(!this.supportsBinary){query.b64=1;}
query=parseqs.encode(query);if(query.length){query='?'+query;}
return schema+'://'+this.hostname+port+this.path+query;};WS.prototype.check=function(){return!!WebSocket&&!('__initialize'in WebSocket&&this.name===WS.prototype.name);};},{"../transport":14,"component-inherit":21,"debug":22,"engine.io-parser":25,"parseqs":35,"ws":37}],20:[function(_dereq_,module,exports){var hasCORS=_dereq_('has-cors');module.exports=function(opts){var xdomain=opts.xdomain;var xscheme=opts.xscheme;var enablesXDR=opts.enablesXDR;try{if('undefined'!=typeof XMLHttpRequest&&(!xdomain||hasCORS)){return new XMLHttpRequest();}}catch(e){}
try{if('undefined'!=typeof XDomainRequest&&!xscheme&&enablesXDR){return new XDomainRequest();}}catch(e){}
if(!xdomain){try{return new ActiveXObject('Microsoft.XMLHTTP');}catch(e){}}}},{"has-cors":40}],21:[function(_dereq_,module,exports){module.exports=function(a,b){var fn=function(){};fn.prototype=b.prototype;a.prototype=new fn;a.prototype.constructor=a;};},{}],22:[function(_dereq_,module,exports){exports=module.exports=_dereq_('./debug');exports.log=log;exports.formatArgs=formatArgs;exports.save=save;exports.load=load;exports.useColors=useColors;exports.colors=['lightseagreen','forestgreen','goldenrod','dodgerblue','darkorchid','crimson'];function useColors(){return('WebkitAppearance'in document.documentElement.style)||(window.console&&(console.firebug||(console.exception&&console.table)))||(navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)&&parseInt(RegExp.$1,10)>=31);}
exports.formatters.j=function(v){return JSON.stringify(v);};function formatArgs(){var args=arguments;var useColors=this.useColors;args[0]=(useColors?'%c':'')
+this.namespace
+(useColors?' %c':' ')
+args[0]
+(useColors?'%c ':' ')
+'+'+exports.humanize(this.diff);if(!useColors)return args;var c='color: '+this.color;args=[args[0],c,'color: inherit'].concat(Array.prototype.slice.call(args,1));var index=0;var lastC=0;args[0].replace(/%[a-z%]/g,function(match){if('%'===match)return;index++;if('%c'===match){lastC=index;}});args.splice(lastC,0,c);return args;}
function log(){return'object'==typeof console&&'function'==typeof console.log&&Function.prototype.apply.call(console.log,console,arguments);}
function save(namespaces){try{if(null==namespaces){localStorage.removeItem('debug');}else{localStorage.debug=namespaces;}}catch(e){}}
function load(){var r;try{r=localStorage.debug;}catch(e){}
return r;}
exports.enable(load());},{"./debug":23}],23:[function(_dereq_,module,exports){exports=module.exports=debug;exports.coerce=coerce;exports.disable=disable;exports.enable=enable;exports.enabled=enabled;exports.humanize=_dereq_('ms');exports.names=[];exports.skips=[];exports.formatters={};var prevColor=0;var prevTime;function selectColor(){return exports.colors[prevColor++%exports.colors.length];}
function debug(namespace){function disabled(){}
disabled.enabled=false;function enabled(){var self=enabled;var curr=+new Date();var ms=curr-(prevTime||curr);self.diff=ms;self.prev=prevTime;self.curr=curr;prevTime=curr;if(null==self.useColors)self.useColors=exports.useColors();if(null==self.color&&self.useColors)self.color=selectColor();var args=Array.prototype.slice.call(arguments);args[0]=exports.coerce(args[0]);if('string'!==typeof args[0]){args=['%o'].concat(args);}
var index=0;args[0]=args[0].replace(/%([a-z%])/g,function(match,format){if(match==='%')return match;index++;var formatter=exports.formatters[format];if('function'===typeof formatter){var val=args[index];match=formatter.call(self,val);args.splice(index,1);index--;}
return match;});if('function'===typeof exports.formatArgs){args=exports.formatArgs.apply(self,args);}
var logFn=enabled.log||exports.log||console.log.bind(console);logFn.apply(self,args);}
enabled.enabled=true;var fn=exports.enabled(namespace)?enabled:disabled;fn.namespace=namespace;return fn;}
function enable(namespaces){exports.save(namespaces);var split=(namespaces||'').split(/[\s,]+/);var len=split.length;for(var i=0;i<len;i++){if(!split[i])continue;namespaces=split[i].replace(/\*/g,'.*?');if(namespaces[0]==='-'){exports.skips.push(new RegExp('^'+namespaces.substr(1)+'$'));}else{exports.names.push(new RegExp('^'+namespaces+'$'));}}}
function disable(){exports.enable('');}
function enabled(name){var i,len;for(i=0,len=exports.skips.length;i<len;i++){if(exports.skips[i].test(name)){return false;}}
for(i=0,len=exports.names.length;i<len;i++){if(exports.names[i].test(name)){return true;}}
return false;}
function coerce(val){if(val instanceof Error)return val.stack||val.message;return val;}},{"ms":24}],24:[function(_dereq_,module,exports){var s=1000;var m=s*60;var h=m*60;var d=h*24;var y=d*365.25;module.exports=function(val,options){options=options||{};if('string'==typeof val)return parse(val);return options.long?long(val):short(val);};function parse(str){var match=/^((?:\d+)?\.?\d+) *(ms|seconds?|s|minutes?|m|hours?|h|days?|d|years?|y)?$/i.exec(str);if(!match)return;var n=parseFloat(match[1]);var type=(match[2]||'ms').toLowerCase();switch(type){case'years':case'year':case'y':return n*y;case'days':case'day':case'd':return n*d;case'hours':case'hour':case'h':return n*h;case'minutes':case'minute':case'm':return n*m;case'seconds':case'second':case's':return n*s;case'ms':return n;}}
function short(ms){if(ms>=d)return Math.round(ms/d)+'d';if(ms>=h)return Math.round(ms/h)+'h';if(ms>=m)return Math.round(ms/m)+'m';if(ms>=s)return Math.round(ms/s)+'s';return ms+'ms';}
function long(ms){return plural(ms,d,'day')||plural(ms,h,'hour')||plural(ms,m,'minute')||plural(ms,s,'second')||ms+' ms';}
function plural(ms,n,name){if(ms<n)return;if(ms<n*1.5)return Math.floor(ms/n)+' '+name;return Math.ceil(ms/n)+' '+name+'s';}},{}],25:[function(_dereq_,module,exports){(function(global){var keys=_dereq_('./keys');var hasBinary=_dereq_('has-binary');var sliceBuffer=_dereq_('arraybuffer.slice');var base64encoder=_dereq_('base64-arraybuffer');var after=_dereq_('after');var utf8=_dereq_('utf8');var isAndroid=navigator.userAgent.match(/Android/i);var isPhantomJS=/PhantomJS/i.test(navigator.userAgent);var dontSendBlobs=isAndroid||isPhantomJS;exports.protocol=3;var packets=exports.packets={open:0,close:1,ping:2,pong:3,message:4,upgrade:5,noop:6};var packetslist=keys(packets);var err={type:'error',data:'parser error'};var Blob=_dereq_('blob');exports.encodePacket=function(packet,supportsBinary,utf8encode,callback){if('function'==typeof supportsBinary){callback=supportsBinary;supportsBinary=false;}
if('function'==typeof utf8encode){callback=utf8encode;utf8encode=null;}
var data=(packet.data===undefined)?undefined:packet.data.buffer||packet.data;if(global.ArrayBuffer&&data instanceof ArrayBuffer){return encodeArrayBuffer(packet,supportsBinary,callback);}else if(Blob&&data instanceof global.Blob){return encodeBlob(packet,supportsBinary,callback);}
if(data&&data.base64){return encodeBase64Object(packet,callback);}
var encoded=packets[packet.type];if(undefined!==packet.data){encoded+=utf8encode?utf8.encode(String(packet.data)):String(packet.data);}
return callback(''+encoded);};function encodeBase64Object(packet,callback){var message='b'+exports.packets[packet.type]+packet.data.data;return callback(message);}
function encodeArrayBuffer(packet,supportsBinary,callback){if(!supportsBinary){return exports.encodeBase64Packet(packet,callback);}
var data=packet.data;var contentArray=new Uint8Array(data);var resultBuffer=new Uint8Array(1+data.byteLength);resultBuffer[0]=packets[packet.type];for(var i=0;i<contentArray.length;i++){resultBuffer[i+1]=contentArray[i];}
return callback(resultBuffer.buffer);}
function encodeBlobAsArrayBuffer(packet,supportsBinary,callback){if(!supportsBinary){return exports.encodeBase64Packet(packet,callback);}
var fr=new FileReader();fr.onload=function(){packet.data=fr.result;exports.encodePacket(packet,supportsBinary,true,callback);};return fr.readAsArrayBuffer(packet.data);}
function encodeBlob(packet,supportsBinary,callback){if(!supportsBinary){return exports.encodeBase64Packet(packet,callback);}
if(dontSendBlobs){return encodeBlobAsArrayBuffer(packet,supportsBinary,callback);}
var length=new Uint8Array(1);length[0]=packets[packet.type];var blob=new Blob([length.buffer,packet.data]);return callback(blob);}
exports.encodeBase64Packet=function(packet,callback){var message='b'+exports.packets[packet.type];if(Blob&&packet.data instanceof Blob){var fr=new FileReader();fr.onload=function(){var b64=fr.result.split(',')[1];callback(message+b64);};return fr.readAsDataURL(packet.data);}
var b64data;try{b64data=String.fromCharCode.apply(null,new Uint8Array(packet.data));}catch(e){var typed=new Uint8Array(packet.data);var basic=new Array(typed.length);for(var i=0;i<typed.length;i++){basic[i]=typed[i];}
b64data=String.fromCharCode.apply(null,basic);}
message+=global.btoa(b64data);return callback(message);};exports.decodePacket=function(data,binaryType,utf8decode){if(typeof data=='string'||data===undefined){if(data.charAt(0)=='b'){return exports.decodeBase64Packet(data.substr(1),binaryType);}
if(utf8decode){try{data=utf8.decode(data);}catch(e){return err;}}
var type=data.charAt(0);if(Number(type)!=type||!packetslist[type]){return err;}
if(data.length>1){return{type:packetslist[type],data:data.substring(1)};}else{return{type:packetslist[type]};}}
var asArray=new Uint8Array(data);var type=asArray[0];var rest=sliceBuffer(data,1);if(Blob&&binaryType==='blob'){rest=new Blob([rest]);}
return{type:packetslist[type],data:rest};};exports.decodeBase64Packet=function(msg,binaryType){var type=packetslist[msg.charAt(0)];if(!global.ArrayBuffer){return{type:type,data:{base64:true,data:msg.substr(1)}};}
var data=base64encoder.decode(msg.substr(1));if(binaryType==='blob'&&Blob){data=new Blob([data]);}
return{type:type,data:data};};exports.encodePayload=function(packets,supportsBinary,callback){if(typeof supportsBinary=='function'){callback=supportsBinary;supportsBinary=null;}
var isBinary=hasBinary(packets);if(supportsBinary&&isBinary){if(Blob&&!dontSendBlobs){return exports.encodePayloadAsBlob(packets,callback);}
return exports.encodePayloadAsArrayBuffer(packets,callback);}
if(!packets.length){return callback('0:');}
function setLengthHeader(message){return message.length+':'+message;}
function encodeOne(packet,doneCallback){exports.encodePacket(packet,!isBinary?false:supportsBinary,true,function(message){doneCallback(null,setLengthHeader(message));});}
map(packets,encodeOne,function(err,results){return callback(results.join(''));});};function map(ary,each,done){var result=new Array(ary.length);var next=after(ary.length,done);var eachWithIndex=function(i,el,cb){each(el,function(error,msg){result[i]=msg;cb(error,result);});};for(var i=0;i<ary.length;i++){eachWithIndex(i,ary[i],next);}}
exports.decodePayload=function(data,binaryType,callback){if(typeof data!='string'){return exports.decodePayloadAsBinary(data,binaryType,callback);}
if(typeof binaryType==='function'){callback=binaryType;binaryType=null;}
var packet;if(data==''){return callback(err,0,1);}
var length='',n,msg;for(var i=0,l=data.length;i<l;i++){var chr=data.charAt(i);if(':'!=chr){length+=chr;}else{if(''==length||(length!=(n=Number(length)))){return callback(err,0,1);}
msg=data.substr(i+1,n);if(length!=msg.length){return callback(err,0,1);}
if(msg.length){packet=exports.decodePacket(msg,binaryType,true);if(err.type==packet.type&&err.data==packet.data){return callback(err,0,1);}
var ret=callback(packet,i+n,l);if(false===ret)return;}
i+=n;length='';}}
if(length!=''){return callback(err,0,1);}};exports.encodePayloadAsArrayBuffer=function(packets,callback){if(!packets.length){return callback(new ArrayBuffer(0));}
function encodeOne(packet,doneCallback){exports.encodePacket(packet,true,true,function(data){return doneCallback(null,data);});}
map(packets,encodeOne,function(err,encodedPackets){var totalLength=encodedPackets.reduce(function(acc,p){var len;if(typeof p==='string'){len=p.length;}else{len=p.byteLength;}
return acc+len.toString().length+len+2;},0);var resultArray=new Uint8Array(totalLength);var bufferIndex=0;encodedPackets.forEach(function(p){var isString=typeof p==='string';var ab=p;if(isString){var view=new Uint8Array(p.length);for(var i=0;i<p.length;i++){view[i]=p.charCodeAt(i);}
ab=view.buffer;}
if(isString){resultArray[bufferIndex++]=0;}else{resultArray[bufferIndex++]=1;}
var lenStr=ab.byteLength.toString();for(var i=0;i<lenStr.length;i++){resultArray[bufferIndex++]=parseInt(lenStr[i]);}
resultArray[bufferIndex++]=255;var view=new Uint8Array(ab);for(var i=0;i<view.length;i++){resultArray[bufferIndex++]=view[i];}});return callback(resultArray.buffer);});};exports.encodePayloadAsBlob=function(packets,callback){function encodeOne(packet,doneCallback){exports.encodePacket(packet,true,true,function(encoded){var binaryIdentifier=new Uint8Array(1);binaryIdentifier[0]=1;if(typeof encoded==='string'){var view=new Uint8Array(encoded.length);for(var i=0;i<encoded.length;i++){view[i]=encoded.charCodeAt(i);}
encoded=view.buffer;binaryIdentifier[0]=0;}
var len=(encoded instanceof ArrayBuffer)?encoded.byteLength:encoded.size;var lenStr=len.toString();var lengthAry=new Uint8Array(lenStr.length+1);for(var i=0;i<lenStr.length;i++){lengthAry[i]=parseInt(lenStr[i]);}
lengthAry[lenStr.length]=255;if(Blob){var blob=new Blob([binaryIdentifier.buffer,lengthAry.buffer,encoded]);doneCallback(null,blob);}});}
map(packets,encodeOne,function(err,results){return callback(new Blob(results));});};exports.decodePayloadAsBinary=function(data,binaryType,callback){if(typeof binaryType==='function'){callback=binaryType;binaryType=null;}
var bufferTail=data;var buffers=[];var numberTooLong=false;while(bufferTail.byteLength>0){var tailArray=new Uint8Array(bufferTail);var isString=tailArray[0]===0;var msgLength='';for(var i=1;;i++){if(tailArray[i]==255)break;if(msgLength.length>310){numberTooLong=true;break;}
msgLength+=tailArray[i];}
if(numberTooLong)return callback(err,0,1);bufferTail=sliceBuffer(bufferTail,2+msgLength.length);msgLength=parseInt(msgLength);var msg=sliceBuffer(bufferTail,0,msgLength);if(isString){try{msg=String.fromCharCode.apply(null,new Uint8Array(msg));}catch(e){var typed=new Uint8Array(msg);msg='';for(var i=0;i<typed.length;i++){msg+=String.fromCharCode(typed[i]);}}}
buffers.push(msg);bufferTail=sliceBuffer(bufferTail,msgLength);}
var total=buffers.length;buffers.forEach(function(buffer,i){callback(exports.decodePacket(buffer,binaryType,true),i,total);});};}).call(this,typeof self!=="undefined"?self:typeof window!=="undefined"?window:{})},{"./keys":26,"after":27,"arraybuffer.slice":28,"base64-arraybuffer":29,"blob":30,"has-binary":31,"utf8":33}],26:[function(_dereq_,module,exports){module.exports=Object.keys||function keys(obj){var arr=[];var has=Object.prototype.hasOwnProperty;for(var i in obj){if(has.call(obj,i)){arr.push(i);}}
return arr;};},{}],27:[function(_dereq_,module,exports){module.exports=after
function after(count,callback,err_cb){var bail=false
err_cb=err_cb||noop
proxy.count=count
return(count===0)?callback():proxy
function proxy(err,result){if(proxy.count<=0){throw new Error('after called too many times')}
--proxy.count
if(err){bail=true
callback(err)
callback=err_cb}else if(proxy.count===0&&!bail){callback(null,result)}}}
function noop(){}},{}],28:[function(_dereq_,module,exports){module.exports=function(arraybuffer,start,end){var bytes=arraybuffer.byteLength;start=start||0;end=end||bytes;if(arraybuffer.slice){return arraybuffer.slice(start,end);}
if(start<0){start+=bytes;}
if(end<0){end+=bytes;}
if(end>bytes){end=bytes;}
if(start>=bytes||start>=end||bytes===0){return new ArrayBuffer(0);}
var abv=new Uint8Array(arraybuffer);var result=new Uint8Array(end-start);for(var i=start,ii=0;i<end;i++,ii++){result[ii]=abv[i];}
return result.buffer;};},{}],29:[function(_dereq_,module,exports){(function(chars){"use strict";exports.encode=function(arraybuffer){var bytes=new Uint8Array(arraybuffer),i,len=bytes.length,base64="";for(i=0;i<len;i+=3){base64+=chars[bytes[i]>>2];base64+=chars[((bytes[i]&3)<<4)|(bytes[i+1]>>4)];base64+=chars[((bytes[i+1]&15)<<2)|(bytes[i+2]>>6)];base64+=chars[bytes[i+2]&63];}
if((len%3)===2){base64=base64.substring(0,base64.length-1)+"=";}else if(len%3===1){base64=base64.substring(0,base64.length-2)+"==";}
return base64;};exports.decode=function(base64){var bufferLength=base64.length*0.75,len=base64.length,i,p=0,encoded1,encoded2,encoded3,encoded4;if(base64[base64.length-1]==="="){bufferLength--;if(base64[base64.length-2]==="="){bufferLength--;}}
var arraybuffer=new ArrayBuffer(bufferLength),bytes=new Uint8Array(arraybuffer);for(i=0;i<len;i+=4){encoded1=chars.indexOf(base64[i]);encoded2=chars.indexOf(base64[i+1]);encoded3=chars.indexOf(base64[i+2]);encoded4=chars.indexOf(base64[i+3]);bytes[p++]=(encoded1<<2)|(encoded2>>4);bytes[p++]=((encoded2&15)<<4)|(encoded3>>2);bytes[p++]=((encoded3&3)<<6)|(encoded4&63);}
return arraybuffer;};})("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/");},{}],30:[function(_dereq_,module,exports){(function(global){var BlobBuilder=global.BlobBuilder||global.WebKitBlobBuilder||global.MSBlobBuilder||global.MozBlobBuilder;var blobSupported=(function(){try{var b=new Blob(['hi']);return b.size==2;}catch(e){return false;}})();var blobBuilderSupported=BlobBuilder&&BlobBuilder.prototype.append&&BlobBuilder.prototype.getBlob;function BlobBuilderConstructor(ary,options){options=options||{};var bb=new BlobBuilder();for(var i=0;i<ary.length;i++){bb.append(ary[i]);}
return(options.type)?bb.getBlob(options.type):bb.getBlob();};module.exports=(function(){if(blobSupported){return global.Blob;}else if(blobBuilderSupported){return BlobBuilderConstructor;}else{return undefined;}})();}).call(this,typeof self!=="undefined"?self:typeof window!=="undefined"?window:{})},{}],31:[function(_dereq_,module,exports){(function(global){var isArray=_dereq_('isarray');module.exports=hasBinary;function hasBinary(data){function _hasBinary(obj){if(!obj)return false;if((global.Buffer&&global.Buffer.isBuffer(obj))||(global.ArrayBuffer&&obj instanceof ArrayBuffer)||(global.Blob&&obj instanceof Blob)||(global.File&&obj instanceof File)){return true;}
if(isArray(obj)){for(var i=0;i<obj.length;i++){if(_hasBinary(obj[i])){return true;}}}else if(obj&&'object'==typeof obj){if(obj.toJSON){obj=obj.toJSON();}
for(var key in obj){if(obj.hasOwnProperty(key)&&_hasBinary(obj[key])){return true;}}}
return false;}
return _hasBinary(data);}}).call(this,typeof self!=="undefined"?self:typeof window!=="undefined"?window:{})},{"isarray":32}],32:[function(_dereq_,module,exports){module.exports=Array.isArray||function(arr){return Object.prototype.toString.call(arr)=='[object Array]';};},{}],33:[function(_dereq_,module,exports){(function(global){;(function(root){var freeExports=typeof exports=='object'&&exports;var freeModule=typeof module=='object'&&module&&module.exports==freeExports&&module;var freeGlobal=typeof global=='object'&&global;if(freeGlobal.global===freeGlobal||freeGlobal.window===freeGlobal){root=freeGlobal;}
var stringFromCharCode=String.fromCharCode;function ucs2decode(string){var output=[];var counter=0;var length=string.length;var value;var extra;while(counter<length){value=string.charCodeAt(counter++);if(value>=0xD800&&value<=0xDBFF&&counter<length){extra=string.charCodeAt(counter++);if((extra&0xFC00)==0xDC00){output.push(((value&0x3FF)<<10)+(extra&0x3FF)+0x10000);}else{output.push(value);counter--;}}else{output.push(value);}}
return output;}
function ucs2encode(array){var length=array.length;var index=-1;var value;var output='';while(++index<length){value=array[index];if(value>0xFFFF){value-=0x10000;output+=stringFromCharCode(value>>>10&0x3FF|0xD800);value=0xDC00|value&0x3FF;}
output+=stringFromCharCode(value);}
return output;}
function createByte(codePoint,shift){return stringFromCharCode(((codePoint>>shift)&0x3F)|0x80);}
function encodeCodePoint(codePoint){if((codePoint&0xFFFFFF80)==0){return stringFromCharCode(codePoint);}
var symbol='';if((codePoint&0xFFFFF800)==0){symbol=stringFromCharCode(((codePoint>>6)&0x1F)|0xC0);}
else if((codePoint&0xFFFF0000)==0){symbol=stringFromCharCode(((codePoint>>12)&0x0F)|0xE0);symbol+=createByte(codePoint,6);}
else if((codePoint&0xFFE00000)==0){symbol=stringFromCharCode(((codePoint>>18)&0x07)|0xF0);symbol+=createByte(codePoint,12);symbol+=createByte(codePoint,6);}
symbol+=stringFromCharCode((codePoint&0x3F)|0x80);return symbol;}
function utf8encode(string){var codePoints=ucs2decode(string);var length=codePoints.length;var index=-1;var codePoint;var byteString='';while(++index<length){codePoint=codePoints[index];byteString+=encodeCodePoint(codePoint);}
return byteString;}
function readContinuationByte(){if(byteIndex>=byteCount){throw Error('Invalid byte index');}
var continuationByte=byteArray[byteIndex]&0xFF;byteIndex++;if((continuationByte&0xC0)==0x80){return continuationByte&0x3F;}
throw Error('Invalid continuation byte');}
function decodeSymbol(){var byte1;var byte2;var byte3;var byte4;var codePoint;if(byteIndex>byteCount){throw Error('Invalid byte index');}
if(byteIndex==byteCount){return false;}
byte1=byteArray[byteIndex]&0xFF;byteIndex++;if((byte1&0x80)==0){return byte1;}
if((byte1&0xE0)==0xC0){var byte2=readContinuationByte();codePoint=((byte1&0x1F)<<6)|byte2;if(codePoint>=0x80){return codePoint;}else{throw Error('Invalid continuation byte');}}
if((byte1&0xF0)==0xE0){byte2=readContinuationByte();byte3=readContinuationByte();codePoint=((byte1&0x0F)<<12)|(byte2<<6)|byte3;if(codePoint>=0x0800){return codePoint;}else{throw Error('Invalid continuation byte');}}
if((byte1&0xF8)==0xF0){byte2=readContinuationByte();byte3=readContinuationByte();byte4=readContinuationByte();codePoint=((byte1&0x0F)<<0x12)|(byte2<<0x0C)|(byte3<<0x06)|byte4;if(codePoint>=0x010000&&codePoint<=0x10FFFF){return codePoint;}}
throw Error('Invalid UTF-8 detected');}
var byteArray;var byteCount;var byteIndex;function utf8decode(byteString){byteArray=ucs2decode(byteString);byteCount=byteArray.length;byteIndex=0;var codePoints=[];var tmp;while((tmp=decodeSymbol())!==false){codePoints.push(tmp);}
return ucs2encode(codePoints);}
var utf8={'version':'2.0.0','encode':utf8encode,'decode':utf8decode};if(typeof define=='function'&&typeof define.amd=='object'&&define.amd){define(function(){return utf8;});}else if(freeExports&&!freeExports.nodeType){if(freeModule){freeModule.exports=utf8;}else{var object={};var hasOwnProperty=object.hasOwnProperty;for(var key in utf8){hasOwnProperty.call(utf8,key)&&(freeExports[key]=utf8[key]);}}}else{root.utf8=utf8;}}(this));}).call(this,typeof self!=="undefined"?self:typeof window!=="undefined"?window:{})},{}],34:[function(_dereq_,module,exports){(function(global){var rvalidchars=/^[\],:{}\s]*$/;var rvalidescape=/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g;var rvalidtokens=/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g;var rvalidbraces=/(?:^|:|,)(?:\s*\[)+/g;var rtrimLeft=/^\s+/;var rtrimRight=/\s+$/;module.exports=function parsejson(data){if('string'!=typeof data||!data){return null;}
data=data.replace(rtrimLeft,'').replace(rtrimRight,'');if(global.JSON&&JSON.parse){return JSON.parse(data);}
if(rvalidchars.test(data.replace(rvalidescape,'@').replace(rvalidtokens,']').replace(rvalidbraces,''))){return(new Function('return '+data))();}};}).call(this,typeof self!=="undefined"?self:typeof window!=="undefined"?window:{})},{}],35:[function(_dereq_,module,exports){exports.encode=function(obj){var str='';for(var i in obj){if(obj.hasOwnProperty(i)){if(str.length)str+='&';str+=encodeURIComponent(i)+'='+encodeURIComponent(obj[i]);}}
return str;};exports.decode=function(qs){var qry={};var pairs=qs.split('&');for(var i=0,l=pairs.length;i<l;i++){var pair=pairs[i].split('=');qry[decodeURIComponent(pair[0])]=decodeURIComponent(pair[1]);}
return qry;};},{}],36:[function(_dereq_,module,exports){var re=/^(?:(?![^:@]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/;var parts=['source','protocol','authority','userInfo','user','password','host','port','relative','path','directory','file','query','anchor'];module.exports=function parseuri(str){var src=str,b=str.indexOf('['),e=str.indexOf(']');if(b!=-1&&e!=-1){str=str.substring(0,b)+str.substring(b,e).replace(/:/g,';')+str.substring(e,str.length);}
var m=re.exec(str||''),uri={},i=14;while(i--){uri[parts[i]]=m[i]||'';}
if(b!=-1&&e!=-1){uri.source=src;uri.host=uri.host.substring(1,uri.host.length-1).replace(/;/g,':');uri.authority=uri.authority.replace('[','').replace(']','').replace(/;/g,':');uri.ipv6uri=true;}
return uri;};},{}],37:[function(_dereq_,module,exports){var global=(function(){return this;})();var WebSocket=global.WebSocket||global.MozWebSocket;module.exports=WebSocket?ws:null;function ws(uri,protocols,opts){var instance;if(protocols){instance=new WebSocket(uri,protocols);}else{instance=new WebSocket(uri);}
return instance;}
if(WebSocket)ws.prototype=WebSocket.prototype;},{}],38:[function(_dereq_,module,exports){(function(global){var isArray=_dereq_('isarray');module.exports=hasBinary;function hasBinary(data){function _hasBinary(obj){if(!obj)return false;if((global.Buffer&&global.Buffer.isBuffer(obj))||(global.ArrayBuffer&&obj instanceof ArrayBuffer)||(global.Blob&&obj instanceof Blob)||(global.File&&obj instanceof File)){return true;}
if(isArray(obj)){for(var i=0;i<obj.length;i++){if(_hasBinary(obj[i])){return true;}}}else if(obj&&'object'==typeof obj){if(obj.toJSON){obj=obj.toJSON();}
for(var key in obj){if(Object.prototype.hasOwnProperty.call(obj,key)&&_hasBinary(obj[key])){return true;}}}
return false;}
return _hasBinary(data);}}).call(this,typeof self!=="undefined"?self:typeof window!=="undefined"?window:{})},{"isarray":39}],39:[function(_dereq_,module,exports){module.exports=_dereq_(32)},{}],40:[function(_dereq_,module,exports){var global=_dereq_('global');try{module.exports='XMLHttpRequest'in global&&'withCredentials'in new global.XMLHttpRequest();}catch(err){module.exports=false;}},{"global":41}],41:[function(_dereq_,module,exports){module.exports=(function(){return this;})();},{}],42:[function(_dereq_,module,exports){var indexOf=[].indexOf;module.exports=function(arr,obj){if(indexOf)return arr.indexOf(obj);for(var i=0;i<arr.length;++i){if(arr[i]===obj)return i;}
return-1;};},{}],43:[function(_dereq_,module,exports){var has=Object.prototype.hasOwnProperty;exports.keys=Object.keys||function(obj){var keys=[];for(var key in obj){if(has.call(obj,key)){keys.push(key);}}
return keys;};exports.values=function(obj){var vals=[];for(var key in obj){if(has.call(obj,key)){vals.push(obj[key]);}}
return vals;};exports.merge=function(a,b){for(var key in b){if(has.call(b,key)){a[key]=b[key];}}
return a;};exports.length=function(obj){return exports.keys(obj).length;};exports.isEmpty=function(obj){return 0==exports.length(obj);};},{}],44:[function(_dereq_,module,exports){var re=/^(?:(?![^:@]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/;var parts=['source','protocol','authority','userInfo','user','password','host','port','relative','path','directory','file','query','anchor'];module.exports=function parseuri(str){var m=re.exec(str||''),uri={},i=14;while(i--){uri[parts[i]]=m[i]||'';}
return uri;};},{}],45:[function(_dereq_,module,exports){(function(global){var isArray=_dereq_('isarray');var isBuf=_dereq_('./is-buffer');exports.deconstructPacket=function(packet){var buffers=[];var packetData=packet.data;function _deconstructPacket(data){if(!data)return data;if(isBuf(data)){var placeholder={_placeholder:true,num:buffers.length};buffers.push(data);return placeholder;}else if(isArray(data)){var newData=new Array(data.length);for(var i=0;i<data.length;i++){newData[i]=_deconstructPacket(data[i]);}
return newData;}else if('object'==typeof data&&!(data instanceof Date)){var newData={};for(var key in data){newData[key]=_deconstructPacket(data[key]);}
return newData;}
return data;}
var pack=packet;pack.data=_deconstructPacket(packetData);pack.attachments=buffers.length;return{packet:pack,buffers:buffers};};exports.reconstructPacket=function(packet,buffers){var curPlaceHolder=0;function _reconstructPacket(data){if(data&&data._placeholder){var buf=buffers[data.num];return buf;}else if(isArray(data)){for(var i=0;i<data.length;i++){data[i]=_reconstructPacket(data[i]);}
return data;}else if(data&&'object'==typeof data){for(var key in data){data[key]=_reconstructPacket(data[key]);}
return data;}
return data;}
packet.data=_reconstructPacket(packet.data);packet.attachments=undefined;return packet;};exports.removeBlobs=function(data,callback){function _removeBlobs(obj,curKey,containingObject){if(!obj)return obj;if((global.Blob&&obj instanceof Blob)||(global.File&&obj instanceof File)){pendingBlobs++;var fileReader=new FileReader();fileReader.onload=function(){if(containingObject){containingObject[curKey]=this.result;}
else{bloblessData=this.result;}
if(!--pendingBlobs){callback(bloblessData);}};fileReader.readAsArrayBuffer(obj);}else if(isArray(obj)){for(var i=0;i<obj.length;i++){_removeBlobs(obj[i],i,obj);}}else if(obj&&'object'==typeof obj&&!isBuf(obj)){for(var key in obj){_removeBlobs(obj[key],key,obj);}}}
var pendingBlobs=0;var bloblessData=data;_removeBlobs(bloblessData);if(!pendingBlobs){callback(bloblessData);}};}).call(this,typeof self!=="undefined"?self:typeof window!=="undefined"?window:{})},{"./is-buffer":47,"isarray":48}],46:[function(_dereq_,module,exports){var debug=_dereq_('debug')('socket.io-parser');var json=_dereq_('json3');var isArray=_dereq_('isarray');var Emitter=_dereq_('component-emitter');var binary=_dereq_('./binary');var isBuf=_dereq_('./is-buffer');exports.protocol=4;exports.types=['CONNECT','DISCONNECT','EVENT','BINARY_EVENT','ACK','BINARY_ACK','ERROR'];exports.CONNECT=0;exports.DISCONNECT=1;exports.EVENT=2;exports.ACK=3;exports.ERROR=4;exports.BINARY_EVENT=5;exports.BINARY_ACK=6;exports.Encoder=Encoder;exports.Decoder=Decoder;function Encoder(){}
Encoder.prototype.encode=function(obj,callback){debug('encoding packet %j',obj);if(exports.BINARY_EVENT==obj.type||exports.BINARY_ACK==obj.type){encodeAsBinary(obj,callback);}
else{var encoding=encodeAsString(obj);callback([encoding]);}};function encodeAsString(obj){var str='';var nsp=false;str+=obj.type;if(exports.BINARY_EVENT==obj.type||exports.BINARY_ACK==obj.type){str+=obj.attachments;str+='-';}
if(obj.nsp&&'/'!=obj.nsp){nsp=true;str+=obj.nsp;}
if(null!=obj.id){if(nsp){str+=',';nsp=false;}
str+=obj.id;}
if(null!=obj.data){if(nsp)str+=',';str+=json.stringify(obj.data);}
debug('encoded %j as %s',obj,str);return str;}
function encodeAsBinary(obj,callback){function writeEncoding(bloblessData){var deconstruction=binary.deconstructPacket(bloblessData);var pack=encodeAsString(deconstruction.packet);var buffers=deconstruction.buffers;buffers.unshift(pack);callback(buffers);}
binary.removeBlobs(obj,writeEncoding);}
function Decoder(){this.reconstructor=null;}
Emitter(Decoder.prototype);Decoder.prototype.add=function(obj){var packet;if('string'==typeof obj){packet=decodeString(obj);if(exports.BINARY_EVENT==packet.type||exports.BINARY_ACK==packet.type){this.reconstructor=new BinaryReconstructor(packet);if(this.reconstructor.reconPack.attachments===0){this.emit('decoded',packet);}}else{this.emit('decoded',packet);}}
else if(isBuf(obj)||obj.base64){if(!this.reconstructor){throw new Error('got binary data when not reconstructing a packet');}else{packet=this.reconstructor.takeBinaryData(obj);if(packet){this.reconstructor=null;this.emit('decoded',packet);}}}
else{throw new Error('Unknown type: '+obj);}};function decodeString(str){var p={};var i=0;p.type=Number(str.charAt(0));if(null==exports.types[p.type])return error();if(exports.BINARY_EVENT==p.type||exports.BINARY_ACK==p.type){var buf='';while(str.charAt(++i)!='-'){buf+=str.charAt(i);if(i==str.length)break;}
if(buf!=Number(buf)||str.charAt(i)!='-'){throw new Error('Illegal attachments');}
p.attachments=Number(buf);}
if('/'==str.charAt(i+1)){p.nsp='';while(++i){var c=str.charAt(i);if(','==c)break;p.nsp+=c;if(i==str.length)break;}}else{p.nsp='/';}
var next=str.charAt(i+1);if(''!==next&&Number(next)==next){p.id='';while(++i){var c=str.charAt(i);if(null==c||Number(c)!=c){--i;break;}
p.id+=str.charAt(i);if(i==str.length)break;}
p.id=Number(p.id);}
if(str.charAt(++i)){try{p.data=json.parse(str.substr(i));}catch(e){return error();}}
debug('decoded %s as %j',str,p);return p;}
Decoder.prototype.destroy=function(){if(this.reconstructor){this.reconstructor.finishedReconstruction();}};function BinaryReconstructor(packet){this.reconPack=packet;this.buffers=[];}
BinaryReconstructor.prototype.takeBinaryData=function(binData){this.buffers.push(binData);if(this.buffers.length==this.reconPack.attachments){var packet=binary.reconstructPacket(this.reconPack,this.buffers);this.finishedReconstruction();return packet;}
return null;};BinaryReconstructor.prototype.finishedReconstruction=function(){this.reconPack=null;this.buffers=[];};function error(data){return{type:exports.ERROR,data:'parser error'};}},{"./binary":45,"./is-buffer":47,"component-emitter":9,"debug":10,"isarray":48,"json3":49}],47:[function(_dereq_,module,exports){(function(global){module.exports=isBuf;function isBuf(obj){return(global.Buffer&&global.Buffer.isBuffer(obj))||(global.ArrayBuffer&&obj instanceof ArrayBuffer);}}).call(this,typeof self!=="undefined"?self:typeof window!=="undefined"?window:{})},{}],48:[function(_dereq_,module,exports){module.exports=_dereq_(32)},{}],49:[function(_dereq_,module,exports){;(function(window){var getClass={}.toString,isProperty,forEach,undef;var isLoader=typeof define==="function"&&define.amd;var nativeJSON=typeof JSON=="object"&&JSON;var JSON3=typeof exports=="object"&&exports&&!exports.nodeType&&exports;if(JSON3&&nativeJSON){JSON3.stringify=nativeJSON.stringify;JSON3.parse=nativeJSON.parse;}else{JSON3=window.JSON=nativeJSON||{};}
var isExtended=new Date(-3509827334573292);try{isExtended=isExtended.getUTCFullYear()==-109252&&isExtended.getUTCMonth()===0&&isExtended.getUTCDate()===1&&isExtended.getUTCHours()==10&&isExtended.getUTCMinutes()==37&&isExtended.getUTCSeconds()==6&&isExtended.getUTCMilliseconds()==708;}catch(exception){}
function has(name){if(has[name]!==undef){return has[name];}
var isSupported;if(name=="bug-string-char-index"){isSupported="a"[0]!="a";}else if(name=="json"){isSupported=has("json-stringify")&&has("json-parse");}else{var value,serialized='{"a":[1,true,false,null,"\\u0000\\b\\n\\f\\r\\t"]}';if(name=="json-stringify"){var stringify=JSON3.stringify,stringifySupported=typeof stringify=="function"&&isExtended;if(stringifySupported){(value=function(){return 1;}).toJSON=value;try{stringifySupported=stringify(0)==="0"&&stringify(new Number())==="0"&&stringify(new String())=='""'&&stringify(getClass)===undef&&stringify(undef)===undef&&stringify()===undef&&stringify(value)==="1"&&stringify([value])=="[1]"&&stringify([undef])=="[null]"&&stringify(null)=="null"&&stringify([undef,getClass,null])=="[null,null,null]"&&stringify({"a":[value,true,false,null,"\x00\b\n\f\r\t"]})==serialized&&stringify(null,value)==="1"&&stringify([1,2],null,1)=="[\n 1,\n 2\n]"&&stringify(new Date(-8.64e15))=='"-271821-04-20T00:00:00.000Z"'&&stringify(new Date(8.64e15))=='"+275760-09-13T00:00:00.000Z"'&&stringify(new Date(-621987552e5))=='"-000001-01-01T00:00:00.000Z"'&&stringify(new Date(-1))=='"1969-12-31T23:59:59.999Z"';}catch(exception){stringifySupported=false;}}
isSupported=stringifySupported;}
if(name=="json-parse"){var parse=JSON3.parse;if(typeof parse=="function"){try{if(parse("0")===0&&!parse(false)){value=parse(serialized);var parseSupported=value["a"].length==5&&value["a"][0]===1;if(parseSupported){try{parseSupported=!parse('"\t"');}catch(exception){}
if(parseSupported){try{parseSupported=parse("01")!==1;}catch(exception){}}
if(parseSupported){try{parseSupported=parse("1.")!==1;}catch(exception){}}}}}catch(exception){parseSupported=false;}}
isSupported=parseSupported;}}
return has[name]=!!isSupported;}
if(!has("json")){var functionClass="[object Function]";var dateClass="[object Date]";var numberClass="[object Number]";var stringClass="[object String]";var arrayClass="[object Array]";var booleanClass="[object Boolean]";var charIndexBuggy=has("bug-string-char-index");if(!isExtended){var floor=Math.floor;var Months=[0,31,59,90,120,151,181,212,243,273,304,334];var getDay=function(year,month){return Months[month]+365*(year-1970)+floor((year-1969+(month=+(month>1)))/4)-floor((year-1901+month)/100)+floor((year-1601+month)/400);};}
if(!(isProperty={}.hasOwnProperty)){isProperty=function(property){var members={},constructor;if((members.__proto__=null,members.__proto__={"toString":1},members).toString!=getClass){isProperty=function(property){var original=this.__proto__,result=property in(this.__proto__=null,this);this.__proto__=original;return result;};}else{constructor=members.constructor;isProperty=function(property){var parent=(this.constructor||constructor).prototype;return property in this&&!(property in parent&&this[property]===parent[property]);};}
members=null;return isProperty.call(this,property);};}
var PrimitiveTypes={'boolean':1,'number':1,'string':1,'undefined':1};var isHostType=function(object,property){var type=typeof object[property];return type=='object'?!!object[property]:!PrimitiveTypes[type];};forEach=function(object,callback){var size=0,Properties,members,property;(Properties=function(){this.valueOf=0;}).prototype.valueOf=0;members=new Properties();for(property in members){if(isProperty.call(members,property)){size++;}}
Properties=members=null;if(!size){members=["valueOf","toString","toLocaleString","propertyIsEnumerable","isPrototypeOf","hasOwnProperty","constructor"];forEach=function(object,callback){var isFunction=getClass.call(object)==functionClass,property,length;var hasProperty=!isFunction&&typeof object.constructor!='function'&&isHostType(object,'hasOwnProperty')?object.hasOwnProperty:isProperty;for(property in object){if(!(isFunction&&property=="prototype")&&hasProperty.call(object,property)){callback(property);}}
for(length=members.length;property=members[--length];hasProperty.call(object,property)&&callback(property));};}else if(size==2){forEach=function(object,callback){var members={},isFunction=getClass.call(object)==functionClass,property;for(property in object){if(!(isFunction&&property=="prototype")&&!isProperty.call(members,property)&&(members[property]=1)&&isProperty.call(object,property)){callback(property);}}};}else{forEach=function(object,callback){var isFunction=getClass.call(object)==functionClass,property,isConstructor;for(property in object){if(!(isFunction&&property=="prototype")&&isProperty.call(object,property)&&!(isConstructor=property==="constructor")){callback(property);}}
if(isConstructor||isProperty.call(object,(property="constructor"))){callback(property);}};}
return forEach(object,callback);};if(!has("json-stringify")){var Escapes={92:"\\\\",34:'\\"',8:"\\b",12:"\\f",10:"\\n",13:"\\r",9:"\\t"};var leadingZeroes="000000";var toPaddedString=function(width,value){return(leadingZeroes+(value||0)).slice(-width);};var unicodePrefix="\\u00";var quote=function(value){var result='"',index=0,length=value.length,isLarge=length>10&&charIndexBuggy,symbols;if(isLarge){symbols=value.split("");}
for(;index<length;index++){var charCode=value.charCodeAt(index);switch(charCode){case 8:case 9:case 10:case 12:case 13:case 34:case 92:result+=Escapes[charCode];break;default:if(charCode<32){result+=unicodePrefix+toPaddedString(2,charCode.toString(16));break;}
result+=isLarge?symbols[index]:charIndexBuggy?value.charAt(index):value[index];}}
return result+'"';};var serialize=function(property,object,callback,properties,whitespace,indentation,stack){var value,className,year,month,date,time,hours,minutes,seconds,milliseconds,results,element,index,length,prefix,result;try{value=object[property];}catch(exception){}
if(typeof value=="object"&&value){className=getClass.call(value);if(className==dateClass&&!isProperty.call(value,"toJSON")){if(value>-1/0&&value<1/0){if(getDay){date=floor(value/864e5);for(year=floor(date/365.2425)+1970-1;getDay(year+1,0)<=date;year++);for(month=floor((date-getDay(year,0))/30.42);getDay(year,month+1)<=date;month++);date=1+date-getDay(year,month);time=(value%864e5+864e5)%864e5;hours=floor(time/36e5)%24;minutes=floor(time/6e4)%60;seconds=floor(time/1e3)%60;milliseconds=time%1e3;}else{year=value.getUTCFullYear();month=value.getUTCMonth();date=value.getUTCDate();hours=value.getUTCHours();minutes=value.getUTCMinutes();seconds=value.getUTCSeconds();milliseconds=value.getUTCMilliseconds();}
value=(year<=0||year>=1e4?(year<0?"-":"+")+toPaddedString(6,year<0?-year:year):toPaddedString(4,year))+"-"+toPaddedString(2,month+1)+"-"+toPaddedString(2,date)+"T"+toPaddedString(2,hours)+":"+toPaddedString(2,minutes)+":"+toPaddedString(2,seconds)+"."+toPaddedString(3,milliseconds)+"Z";}else{value=null;}}else if(typeof value.toJSON=="function"&&((className!=numberClass&&className!=stringClass&&className!=arrayClass)||isProperty.call(value,"toJSON"))){value=value.toJSON(property);}}
if(callback){value=callback.call(object,property,value);}
if(value===null){return"null";}
className=getClass.call(value);if(className==booleanClass){return""+value;}else if(className==numberClass){return value>-1/0&&value<1/0?""+value:"null";}else if(className==stringClass){return quote(""+value);}
if(typeof value=="object"){for(length=stack.length;length--;){if(stack[length]===value){throw TypeError();}}
stack.push(value);results=[];prefix=indentation;indentation+=whitespace;if(className==arrayClass){for(index=0,length=value.length;index<length;index++){element=serialize(index,value,callback,properties,whitespace,indentation,stack);results.push(element===undef?"null":element);}
result=results.length?(whitespace?"[\n"+indentation+results.join(",\n"+indentation)+"\n"+prefix+"]":("["+results.join(",")+"]")):"[]";}else{forEach(properties||value,function(property){var element=serialize(property,value,callback,properties,whitespace,indentation,stack);if(element!==undef){results.push(quote(property)+":"+(whitespace?" ":"")+element);}});result=results.length?(whitespace?"{\n"+indentation+results.join(",\n"+indentation)+"\n"+prefix+"}":("{"+results.join(",")+"}")):"{}";}
stack.pop();return result;}};JSON3.stringify=function(source,filter,width){var whitespace,callback,properties,className;if(typeof filter=="function"||typeof filter=="object"&&filter){if((className=getClass.call(filter))==functionClass){callback=filter;}else if(className==arrayClass){properties={};for(var index=0,length=filter.length,value;index<length;value=filter[index++],((className=getClass.call(value)),className==stringClass||className==numberClass)&&(properties[value]=1));}}
if(width){if((className=getClass.call(width))==numberClass){if((width-=width%1)>0){for(whitespace="",width>10&&(width=10);whitespace.length<width;whitespace+=" ");}}else if(className==stringClass){whitespace=width.length<=10?width:width.slice(0,10);}}
return serialize("",(value={},value[""]=source,value),callback,properties,whitespace,"",[]);};}
if(!has("json-parse")){var fromCharCode=String.fromCharCode;var Unescapes={92:"\\",34:'"',47:"/",98:"\b",116:"\t",110:"\n",102:"\f",114:"\r"};var Index,Source;var abort=function(){Index=Source=null;throw SyntaxError();};var lex=function(){var source=Source,length=source.length,value,begin,position,isSigned,charCode;while(Index<length){charCode=source.charCodeAt(Index);switch(charCode){case 9:case 10:case 13:case 32:Index++;break;case 123:case 125:case 91:case 93:case 58:case 44:value=charIndexBuggy?source.charAt(Index):source[Index];Index++;return value;case 34:for(value="@",Index++;Index<length;){charCode=source.charCodeAt(Index);if(charCode<32){abort();}else if(charCode==92){charCode=source.charCodeAt(++Index);switch(charCode){case 92:case 34:case 47:case 98:case 116:case 110:case 102:case 114:value+=Unescapes[charCode];Index++;break;case 117:begin=++Index;for(position=Index+4;Index<position;Index++){charCode=source.charCodeAt(Index);if(!(charCode>=48&&charCode<=57||charCode>=97&&charCode<=102||charCode>=65&&charCode<=70)){abort();}}
value+=fromCharCode("0x"+source.slice(begin,Index));break;default:abort();}}else{if(charCode==34){break;}
charCode=source.charCodeAt(Index);begin=Index;while(charCode>=32&&charCode!=92&&charCode!=34){charCode=source.charCodeAt(++Index);}
value+=source.slice(begin,Index);}}
if(source.charCodeAt(Index)==34){Index++;return value;}
abort();default:begin=Index;if(charCode==45){isSigned=true;charCode=source.charCodeAt(++Index);}
if(charCode>=48&&charCode<=57){if(charCode==48&&((charCode=source.charCodeAt(Index+1)),charCode>=48&&charCode<=57)){abort();}
isSigned=false;for(;Index<length&&((charCode=source.charCodeAt(Index)),charCode>=48&&charCode<=57);Index++);if(source.charCodeAt(Index)==46){position=++Index;for(;position<length&&((charCode=source.charCodeAt(position)),charCode>=48&&charCode<=57);position++);if(position==Index){abort();}
Index=position;}
charCode=source.charCodeAt(Index);if(charCode==101||charCode==69){charCode=source.charCodeAt(++Index);if(charCode==43||charCode==45){Index++;}
for(position=Index;position<length&&((charCode=source.charCodeAt(position)),charCode>=48&&charCode<=57);position++);if(position==Index){abort();}
Index=position;}
return+source.slice(begin,Index);}
if(isSigned){abort();}
if(source.slice(Index,Index+4)=="true"){Index+=4;return true;}else if(source.slice(Index,Index+5)=="false"){Index+=5;return false;}else if(source.slice(Index,Index+4)=="null"){Index+=4;return null;}
abort();}}
return"$";};var get=function(value){var results,hasMembers;if(value=="$"){abort();}
if(typeof value=="string"){if((charIndexBuggy?value.charAt(0):value[0])=="@"){return value.slice(1);}
if(value=="["){results=[];for(;;hasMembers||(hasMembers=true)){value=lex();if(value=="]"){break;}
if(hasMembers){if(value==","){value=lex();if(value=="]"){abort();}}else{abort();}}
if(value==","){abort();}
results.push(get(value));}
return results;}else if(value=="{"){results={};for(;;hasMembers||(hasMembers=true)){value=lex();if(value=="}"){break;}
if(hasMembers){if(value==","){value=lex();if(value=="}"){abort();}}else{abort();}}
if(value==","||typeof value!="string"||(charIndexBuggy?value.charAt(0):value[0])!="@"||lex()!=":"){abort();}
results[value.slice(1)]=get(lex());}
return results;}
abort();}
return value;};var update=function(source,property,callback){var element=walk(source,property,callback);if(element===undef){delete source[property];}else{source[property]=element;}};var walk=function(source,property,callback){var value=source[property],length;if(typeof value=="object"&&value){if(getClass.call(value)==arrayClass){for(length=value.length;length--;){update(value,length,callback);}}else{forEach(value,function(property){update(value,property,callback);});}}
return callback.call(source,property,value);};JSON3.parse=function(source,callback){var result,value;Index=0;Source=""+source;result=get(lex());if(lex()!="$"){abort();}
Index=Source=null;return callback&&getClass.call(callback)==functionClass?walk((value={},value[""]=result,value),"",callback):result;};}}
if(isLoader){define(function(){return JSON3;});}}(this));},{}],50:[function(_dereq_,module,exports){module.exports=toArray
function toArray(list,index){var array=[]
index=index||0
for(var i=index||0;i<list.length;i++){array[i-index]=list[i]}
return array}},{}]},{},[1])
(1)});;
var DateFormat={};(function($){var daysInWeek=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];var shortDaysInWeek=['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];var shortMonthsInYear=['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];var longMonthsInYear=['January','February','March','April','May','June','July','August','September','October','November','December'];var shortMonthsToNumber={'Jan':'01','Feb':'02','Mar':'03','Apr':'04','May':'05','Jun':'06','Jul':'07','Aug':'08','Sep':'09','Oct':'10','Nov':'11','Dec':'12'};var YYYYMMDD_MATCHER=/\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.?\d{0,3}[Z\-+]?(\d{2}:?\d{2})?/;$.format=(function(){function numberToLongDay(value){return daysInWeek[parseInt(value,10)]||value;}
function numberToShortDay(value){return shortDaysInWeek[parseInt(value,10)]||value;}
function numberToShortMonth(value){var monthArrayIndex=parseInt(value,10)-1;return shortMonthsInYear[monthArrayIndex]||value;}
function numberToLongMonth(value){var monthArrayIndex=parseInt(value,10)-1;return longMonthsInYear[monthArrayIndex]||value;}
function shortMonthToNumber(value){return shortMonthsToNumber[value]||value;}
function parseTime(value){var time=value,values,subValues,hour,minute,second,millis='',delimited,timeArray;if(time.indexOf('.')!==-1){delimited=time.split('.');time=delimited[0];millis=delimited[1];}
timeArray=time.split(':');if(timeArray.length===3){hour=timeArray[0];minute=timeArray[1];second=timeArray[2].replace(/\s.+/,'').replace(/[a-z]/gi,'');time=time.replace(/\s.+/,'').replace(/[a-z]/gi,'');return{time:time,hour:hour,minute:minute,second:second,millis:millis};}
return{time:'',hour:'',minute:'',second:'',millis:''};}
function padding(value,length){var paddingCount=length-String(value).length;for(var i=0;i<paddingCount;i++){value='0'+value;}
return value;}
return{parseDate:function(value){var parsedDate={date:null,year:null,month:null,dayOfMonth:null,dayOfWeek:null,time:null};if(typeof value=='number'){return this.parseDate(new Date(value));}else if(typeof value.getFullYear=='function'){parsedDate.year=String(value.getFullYear());parsedDate.month=String(value.getMonth()+1);parsedDate.dayOfMonth=String(value.getDate());parsedDate.time=parseTime(value.toTimeString()+"."+value.getMilliseconds());}else if(value.search(YYYYMMDD_MATCHER)!=-1){values=value.split(/[T\+-]/);parsedDate.year=values[0];parsedDate.month=values[1];parsedDate.dayOfMonth=values[2];parsedDate.time=parseTime(values[3].split('.')[0]);}else{values=value.split(' ');if(values.length===6&&isNaN(values[5])){values[values.length]='()';}
switch(values.length){case 6:parsedDate.year=values[5];parsedDate.month=shortMonthToNumber(values[1]);parsedDate.dayOfMonth=values[2];parsedDate.time=parseTime(values[3]);break;case 2:subValues=values[0].split('-');parsedDate.year=subValues[0];parsedDate.month=subValues[1];parsedDate.dayOfMonth=subValues[2];parsedDate.time=parseTime(values[1]);break;case 7:case 9:case 10:parsedDate.year=values[3];parsedDate.month=shortMonthToNumber(values[1]);parsedDate.dayOfMonth=values[2];parsedDate.time=parseTime(values[4]);break;case 1:subValues=values[0].split('');parsedDate.year=subValues[0]+subValues[1]+subValues[2]+subValues[3];parsedDate.month=subValues[5]+subValues[6];parsedDate.dayOfMonth=subValues[8]+subValues[9];parsedDate.time=parseTime(subValues[13]+subValues[14]+subValues[15]+subValues[16]+subValues[17]+subValues[18]+subValues[19]+subValues[20]);break;default:return null;}}
parsedDate.date=new Date(parsedDate.year,parsedDate.month-1,parsedDate.dayOfMonth);parsedDate.dayOfWeek=String(parsedDate.date.getDay());return parsedDate;},date:function(value,format){try{var parsedDate=this.parseDate(value);if(parsedDate===null){return value;}
var date=parsedDate.date,year=parsedDate.year,month=parsedDate.month,dayOfMonth=parsedDate.dayOfMonth,dayOfWeek=parsedDate.dayOfWeek,time=parsedDate.time;var pattern='',retValue='',unparsedRest='',inQuote=false;for(var i=0;i<format.length;i++){var currentPattern=format.charAt(i);var nextRight=format.charAt(i+1);if(inQuote){if(currentPattern=="'"){retValue+=(pattern==='')?"'":pattern;pattern='';inQuote=false;}else{pattern+=currentPattern;}
continue;}
pattern+=currentPattern;unparsedRest='';switch(pattern){case'ddd':retValue+=numberToLongDay(dayOfWeek);pattern='';break;case'dd':if(nextRight==='d'){break;}
retValue+=padding(dayOfMonth,2);pattern='';break;case'd':if(nextRight==='d'){break;}
retValue+=parseInt(dayOfMonth,10);pattern='';break;case'D':if(dayOfMonth==1||dayOfMonth==21||dayOfMonth==31){dayOfMonth=parseInt(dayOfMonth,10)+'st';}else if(dayOfMonth==2||dayOfMonth==22){dayOfMonth=parseInt(dayOfMonth,10)+'nd';}else if(dayOfMonth==3||dayOfMonth==23){dayOfMonth=parseInt(dayOfMonth,10)+'rd';}else{dayOfMonth=parseInt(dayOfMonth,10)+'th';}
retValue+=dayOfMonth;pattern='';break;case'MMMM':retValue+=numberToLongMonth(month);pattern='';break;case'MMM':if(nextRight==='M'){break;}
retValue+=numberToShortMonth(month);pattern='';break;case'MM':if(nextRight==='M'){break;}
retValue+=padding(month,2);pattern='';break;case'M':if(nextRight==='M'){break;}
retValue+=parseInt(month,10);pattern='';break;case'y':case'yyy':if(nextRight==='y'){break;}
retValue+=pattern;pattern='';break;case'yy':if(nextRight==='y'){break;}
retValue+=String(year).slice(-2);pattern='';break;case'yyyy':retValue+=year;pattern='';break;case'HH':retValue+=padding(time.hour,2);pattern='';break;case'H':if(nextRight==='H'){break;}
retValue+=parseInt(time.hour,10);pattern='';break;case'hh':hour=(parseInt(time.hour,10)===0?12:time.hour<13?time.hour:time.hour-12);retValue+=padding(hour,2);pattern='';break;case'h':if(nextRight==='h'){break;}
hour=(parseInt(time.hour,10)===0?12:time.hour<13?time.hour:time.hour-12);retValue+=parseInt(hour,10);pattern='';break;case'mm':retValue+=padding(time.minute,2);pattern='';break;case'm':if(nextRight==='m'){break;}
retValue+=time.minute;pattern='';break;case'ss':retValue+=padding(time.second.substring(0,2),2);pattern='';break;case's':if(nextRight==='s'){break;}
retValue+=time.second;pattern='';break;case'S':case'SS':if(nextRight==='S'){break;}
retValue+=pattern;pattern='';break;case'SSS':retValue+=time.millis.substring(0,3);pattern='';break;case'a':retValue+=time.hour>=12?'PM':'AM';pattern='';break;case'p':retValue+=time.hour>=12?'p.m.':'a.m.';pattern='';break;case'E':retValue+=numberToShortDay(dayOfWeek);pattern='';break;case"'":pattern='';inQuote=true;break;default:retValue+=currentPattern;pattern='';break;}}
retValue+=unparsedRest;return retValue;}catch(e){if(console&&console.log){console.log('#45s ERROR:');console.log(e);}
return value;}},prettyDate:function(time){var date;var diff;var day_diff;if(typeof time==='string'||typeof time==='number'){date=new Date(time);}
if(typeof time==='object'){date=new Date(time.toString());}
diff=(((new Date()).getTime()-date.getTime())/1000);day_diff=Math.floor(diff/86400);if(isNaN(day_diff)||day_diff<0){return;}
if(diff<60){return'just now';}else if(diff<120){return'1 minute ago';}else if(diff<3600){return Math.floor(diff/60)+' minutes ago';}else if(diff<7200){return'1 hour ago';}else if(diff<86400){return Math.floor(diff/3600)+' hours ago';}else if(day_diff===1){return'Yesterday';}else if(day_diff<7){return day_diff+' days ago';}else if(day_diff<31){return Math.ceil(day_diff/7)+' weeks ago';}else if(day_diff>=31){return'more than 5 weeks ago';}},toBrowserTimeZone:function(value,format){return this.date(new Date(value),format||'MM/dd/yyyy HH:mm:ss');}};}());}(DateFormat));;(function($){$.format=DateFormat.format;}(jQuery));;;(function($){var opt;$.fn.printThis=function(options){opt=$.extend({},$.fn.printThis.defaults,options);var $element=this instanceof jQuery?this:$(this);var strFrameName="printThis-"+(new Date()).getTime();if(window.location.hostname!==document.domain&&navigator.userAgent.match(/msie/i)){var iframeSrc="javascript:document.write(\"<head><script>document.domain=\\\""+document.domain+"\\\";</script></head><body></body>\")";var printI=document.createElement('iframe');printI.name="printIframe";printI.id=strFrameName;printI.className="MSIE";document.body.appendChild(printI);printI.src=iframeSrc;}else{var $frame=$("<iframe id='"+strFrameName+"' name='printIframe' />");$frame.appendTo("body");}
var $iframe=$("#"+strFrameName);if(!opt.debug)$iframe.css({position:"absolute",width:"0px",height:"0px",left:"-600px",top:"-600px"});setTimeout(function(){var $doc=$iframe.contents(),$head=$doc.find("head"),$body=$doc.find("body");$head.append('<base href="'+document.location.protocol+'//'+document.location.host+'">');if(opt.importCSS)$("link[rel=stylesheet]").each(function(){var href=$(this).attr("href");if(href){var media=$(this).attr("media")||"all";$head.append("<link type='text/css' rel='stylesheet' href='"+href+"' media='"+media+"'>")}});if(opt.importStyle)$("style").each(function(){$(this).clone().appendTo($head);});if(opt.pageTitle)$head.append("<title>"+opt.pageTitle+"</title>");if(opt.loadCSS){if($.isArray(opt.loadCSS)){jQuery.each(opt.loadCSS,function(index,value){$head.append("<link type='text/css' rel='stylesheet' href='"+this+"'>");});}else{$head.append("<link type='text/css' rel='stylesheet' href='"+opt.loadCSS+"'>");}}
if(opt.header)$body.append(opt.header);if(opt.printContainer)$body.append($element.outer());else $element.each(function(){$body.append($(this).html());});if(opt.formValues){var $input=$element.find('input');if($input.length){$input.each(function(){var $this=$(this),$name=$(this).attr('name'),$checker=$this.is(':checkbox')||$this.is(':radio'),$iframeInput=$doc.find('input[name="'+$name+'"]'),$value=$this.val();if(!$checker){$iframeInput.val($value);}else if($this.is(':checked')){if($this.is(':checkbox')){$iframeInput.attr('checked','checked');}else if($this.is(':radio')){$doc.find('input[name="'+$name+'"][value='+$value+']').attr('checked','checked');}}});}
var $select=$element.find('select');if($select.length){$select.each(function(){var $this=$(this),$name=$(this).attr('name'),$value=$this.val();$doc.find('select[name="'+$name+'"]').val($value);});}
var $textarea=$element.find('textarea');if($textarea.length){$textarea.each(function(){var $this=$(this),$name=$(this).attr('name'),$value=$this.val();$doc.find('textarea[name="'+$name+'"]').val($value);});}}
if(opt.removeInline){if($.isFunction($.removeAttr)){$doc.find("body *").removeAttr("style");}else{$doc.find("body *").attr("style","");}}
setTimeout(function(){if($iframe.hasClass("MSIE")){window.frames["printIframe"].focus();$head.append("<script>  window.print(); </script>");}else{$iframe[0].contentWindow.focus();$iframe[0].contentWindow.print();}
if(!opt.debug){setTimeout(function(){$iframe.remove();},1000);}},opt.printDelay);},333);};$.fn.printThis.defaults={debug:false,importCSS:true,importStyle:false,printContainer:true,loadCSS:"",pageTitle:"",removeInline:false,printDelay:333,header:null,formValues:true};jQuery.fn.outer=function(){return $($("<div></div>").html(this.clone())).html()}})(jQuery);;
(function(factory){"use strict";if(typeof define==='function'&&define.amd){define(['jquery'],factory);}
else if(typeof exports=="object"&&typeof module=="object"){module.exports=factory;}
else{factory(jQuery);}})(function($,undefined){"use strict";var defaultOpts={beforeShow:noop,move:noop,change:noop,show:noop,hide:noop,color:false,flat:false,showInput:false,allowEmpty:false,showButtons:true,clickoutFiresChange:false,showInitial:false,showPalette:false,showPaletteOnly:false,hideAfterPaletteSelect:false,togglePaletteOnly:false,showSelectionPalette:true,localStorageKey:false,appendTo:"body",maxSelectionSize:7,cancelText:"cancel",chooseText:"choose",togglePaletteMoreText:"more",togglePaletteLessText:"less",clearText:"Clear Color Selection",noColorSelectedText:"No Color Selected",preferredFormat:false,className:"",containerClassName:"",replacerClassName:"",showAlpha:false,theme:"sp-light",palette:[["#ffffff","#000000","#ff0000","#ff8000","#ffff00","#008000","#0000ff","#4b0082","#9400d3"]],selectionPalette:[],disabled:false,offset:null},spectrums=[],IE=!!/msie/i.exec(window.navigator.userAgent),rgbaSupport=(function(){function contains(str,substr){return!!~(''+str).indexOf(substr);}
var elem=document.createElement('div');var style=elem.style;style.cssText='background-color:rgba(0,0,0,.5)';return contains(style.backgroundColor,'rgba')||contains(style.backgroundColor,'hsla');})(),inputTypeColorSupport=(function(){var colorInput=$("<input type='color' value='!' />")[0];return colorInput.type==="color"&&colorInput.value!=="!";})(),replaceInput=["<div class='sp-replacer'>","<div class='sp-preview'><div class='sp-preview-inner'></div></div>","<div class='sp-dd'>&#9660;</div>","</div>"].join(''),markup=(function(){var gradientFix="";if(IE){for(var i=1;i<=6;i++){gradientFix+="<div class='sp-"+i+"'></div>";}}
return["<div class='sp-container sp-hidden'>","<div class='sp-palette-container'>","<div class='sp-palette sp-thumb sp-cf'></div>","<div class='sp-palette-button-container sp-cf'>","<button type='button' class='sp-palette-toggle'></button>","</div>","</div>","<div class='sp-picker-container'>","<div class='sp-top sp-cf'>","<div class='sp-fill'></div>","<div class='sp-top-inner'>","<div class='sp-color'>","<div class='sp-sat'>","<div class='sp-val'>","<div class='sp-dragger'></div>","</div>","</div>","</div>","<div class='sp-clear sp-clear-display'>","</div>","<div class='sp-hue'>","<div class='sp-slider'></div>",gradientFix,"</div>","</div>","<div class='sp-alpha'><div class='sp-alpha-inner'><div class='sp-alpha-handle'></div></div></div>","</div>","<div class='sp-input-container sp-cf'>","<input class='sp-input' type='text' spellcheck='false'  />","</div>","<div class='sp-initial sp-thumb sp-cf'></div>","<div class='sp-button-container sp-cf'>","<a class='sp-cancel' href='#'></a>","<button type='button' class='sp-choose'></button>","</div>","</div>","</div>"].join("");})();function paletteTemplate(p,color,className,opts){var html=[];for(var i=0;i<p.length;i++){var current=p[i];if(current){var tiny=tinycolor(current);var c=tiny.toHsl().l<0.5?"sp-thumb-el sp-thumb-dark":"sp-thumb-el sp-thumb-light";c+=(tinycolor.equals(color,current))?" sp-thumb-active":"";var formattedString=tiny.toString(opts.preferredFormat||"rgb");var swatchStyle=rgbaSupport?("background-color:"+tiny.toRgbString()):"filter:"+tiny.toFilter();html.push('<span title="'+formattedString+'" data-color="'+tiny.toRgbString()+'" class="'+c+'"><span class="sp-thumb-inner" style="'+swatchStyle+';" /></span>');}else{var cls='sp-clear-display';html.push($('<div />').append($('<span data-color="" style="background-color:transparent;" class="'+cls+'"></span>').attr('title',opts.noColorSelectedText)).html());}}
return"<div class='sp-cf "+className+"'>"+html.join('')+"</div>";}
function hideAll(){for(var i=0;i<spectrums.length;i++){if(spectrums[i]){spectrums[i].hide();}}}
function instanceOptions(o,callbackContext){var opts=$.extend({},defaultOpts,o);opts.callbacks={'move':bind(opts.move,callbackContext),'change':bind(opts.change,callbackContext),'show':bind(opts.show,callbackContext),'hide':bind(opts.hide,callbackContext),'beforeShow':bind(opts.beforeShow,callbackContext)};return opts;}
function spectrum(element,o){var opts=instanceOptions(o,element),flat=opts.flat,showSelectionPalette=opts.showSelectionPalette,localStorageKey=opts.localStorageKey,theme=opts.theme,callbacks=opts.callbacks,resize=throttle(reflow,10),visible=false,dragWidth=0,dragHeight=0,dragHelperHeight=0,slideHeight=0,slideWidth=0,alphaWidth=0,alphaSlideHelperWidth=0,slideHelperHeight=0,currentHue=0,currentSaturation=0,currentValue=0,currentAlpha=1,palette=[],paletteArray=[],paletteLookup={},selectionPalette=opts.selectionPalette.slice(0),maxSelectionSize=opts.maxSelectionSize,draggingClass="sp-dragging",shiftMovementDirection=null;var doc=element.ownerDocument,body=doc.body,boundElement=$(element),disabled=false,container=$(markup,doc).addClass(theme),pickerContainer=container.find(".sp-picker-container"),dragger=container.find(".sp-color"),dragHelper=container.find(".sp-dragger"),slider=container.find(".sp-hue"),slideHelper=container.find(".sp-slider"),alphaSliderInner=container.find(".sp-alpha-inner"),alphaSlider=container.find(".sp-alpha"),alphaSlideHelper=container.find(".sp-alpha-handle"),textInput=container.find(".sp-input"),paletteContainer=container.find(".sp-palette"),initialColorContainer=container.find(".sp-initial"),cancelButton=container.find(".sp-cancel"),clearButton=container.find(".sp-clear"),chooseButton=container.find(".sp-choose"),toggleButton=container.find(".sp-palette-toggle"),isInput=boundElement.is("input"),isInputTypeColor=isInput&&inputTypeColorSupport&&boundElement.attr("type")==="color",shouldReplace=isInput&&!flat,replacer=(shouldReplace)?$(replaceInput).addClass(theme).addClass(opts.className).addClass(opts.replacerClassName):$([]),offsetElement=(shouldReplace)?replacer:boundElement,previewElement=replacer.find(".sp-preview-inner"),initialColor=opts.color||(isInput&&boundElement.val()),colorOnShow=false,preferredFormat=opts.preferredFormat,currentPreferredFormat=preferredFormat,clickoutFiresChange=!opts.showButtons||opts.clickoutFiresChange,isEmpty=!initialColor,allowEmpty=opts.allowEmpty&&!isInputTypeColor;function applyOptions(){if(opts.showPaletteOnly){opts.showPalette=true;}
toggleButton.text(opts.showPaletteOnly?opts.togglePaletteMoreText:opts.togglePaletteLessText);if(opts.palette){palette=opts.palette.slice(0);paletteArray=$.isArray(palette[0])?palette:[palette];paletteLookup={};for(var i=0;i<paletteArray.length;i++){for(var j=0;j<paletteArray[i].length;j++){var rgb=tinycolor(paletteArray[i][j]).toRgbString();paletteLookup[rgb]=true;}}}
container.toggleClass("sp-flat",flat);container.toggleClass("sp-input-disabled",!opts.showInput);container.toggleClass("sp-alpha-enabled",opts.showAlpha);container.toggleClass("sp-clear-enabled",allowEmpty);container.toggleClass("sp-buttons-disabled",!opts.showButtons);container.toggleClass("sp-palette-buttons-disabled",!opts.togglePaletteOnly);container.toggleClass("sp-palette-disabled",!opts.showPalette);container.toggleClass("sp-palette-only",opts.showPaletteOnly);container.toggleClass("sp-initial-disabled",!opts.showInitial);container.addClass(opts.className).addClass(opts.containerClassName);reflow();}
function initialize(){if(IE){container.find("*:not(input)").attr("unselectable","on");}
applyOptions();if(shouldReplace){boundElement.after(replacer).hide();}
if(!allowEmpty){clearButton.hide();}
if(flat){boundElement.after(container).hide();}
else{var appendTo=opts.appendTo==="parent"?boundElement.parent():$(opts.appendTo);if(appendTo.length!==1){appendTo=$("body");}
appendTo.append(container);}
updateSelectionPaletteFromStorage();offsetElement.bind("click.spectrum touchstart.spectrum",function(e){if(!disabled){toggle();}
e.stopPropagation();if(!$(e.target).is("input")){e.preventDefault();}});if(boundElement.is(":disabled")||(opts.disabled===true)){disable();}
container.click(stopPropagation);textInput.change(setFromTextInput);textInput.bind("paste",function(){setTimeout(setFromTextInput,1);});textInput.keydown(function(e){if(e.keyCode==13){setFromTextInput();}});cancelButton.text(opts.cancelText);cancelButton.bind("click.spectrum",function(e){e.stopPropagation();e.preventDefault();revert();hide();});clearButton.attr("title",opts.clearText);clearButton.bind("click.spectrum",function(e){e.stopPropagation();e.preventDefault();isEmpty=true;move();if(flat){updateOriginalInput(true);}});chooseButton.text(opts.chooseText);chooseButton.bind("click.spectrum",function(e){e.stopPropagation();e.preventDefault();if(isValid()){updateOriginalInput(true);hide();}});toggleButton.text(opts.showPaletteOnly?opts.togglePaletteMoreText:opts.togglePaletteLessText);toggleButton.bind("click.spectrum",function(e){e.stopPropagation();e.preventDefault();opts.showPaletteOnly=!opts.showPaletteOnly;if(!opts.showPaletteOnly&&!flat){container.css('left','-='+(pickerContainer.outerWidth(true)+5));}
applyOptions();});draggable(alphaSlider,function(dragX,dragY,e){currentAlpha=(dragX/alphaWidth);isEmpty=false;if(e.shiftKey){currentAlpha=Math.round(currentAlpha*10)/10;}
move();},dragStart,dragStop);draggable(slider,function(dragX,dragY){currentHue=parseFloat(dragY/slideHeight);isEmpty=false;if(!opts.showAlpha){currentAlpha=1;}
move();},dragStart,dragStop);draggable(dragger,function(dragX,dragY,e){if(!e.shiftKey){shiftMovementDirection=null;}
else if(!shiftMovementDirection){var oldDragX=currentSaturation*dragWidth;var oldDragY=dragHeight-(currentValue*dragHeight);var furtherFromX=Math.abs(dragX-oldDragX)>Math.abs(dragY-oldDragY);shiftMovementDirection=furtherFromX?"x":"y";}
var setSaturation=!shiftMovementDirection||shiftMovementDirection==="x";var setValue=!shiftMovementDirection||shiftMovementDirection==="y";if(setSaturation){currentSaturation=parseFloat(dragX/dragWidth);}
if(setValue){currentValue=parseFloat((dragHeight-dragY)/dragHeight);}
isEmpty=false;if(!opts.showAlpha){currentAlpha=1;}
move();},dragStart,dragStop);if(!!initialColor){set(initialColor);updateUI();currentPreferredFormat=preferredFormat||tinycolor(initialColor).format;addColorToSelectionPalette(initialColor);}
else{updateUI();}
if(flat){show();}
function paletteElementClick(e){if(e.data&&e.data.ignore){set($(e.target).closest(".sp-thumb-el").data("color"));move();}
else{set($(e.target).closest(".sp-thumb-el").data("color"));move();updateOriginalInput(true);if(opts.hideAfterPaletteSelect){hide();}}
return false;}
var paletteEvent=IE?"mousedown.spectrum":"click.spectrum touchstart.spectrum";paletteContainer.delegate(".sp-thumb-el",paletteEvent,paletteElementClick);initialColorContainer.delegate(".sp-thumb-el:nth-child(1)",paletteEvent,{ignore:true},paletteElementClick);}
function updateSelectionPaletteFromStorage(){if(localStorageKey&&window.localStorage){try{var oldPalette=window.localStorage[localStorageKey].split(",#");if(oldPalette.length>1){delete window.localStorage[localStorageKey];$.each(oldPalette,function(i,c){addColorToSelectionPalette(c);});}}
catch(e){}
try{selectionPalette=window.localStorage[localStorageKey].split(";");}
catch(e){}}}
function addColorToSelectionPalette(color){if(showSelectionPalette){var rgb=tinycolor(color).toRgbString();if(!paletteLookup[rgb]&&$.inArray(rgb,selectionPalette)===-1){selectionPalette.push(rgb);while(selectionPalette.length>maxSelectionSize){selectionPalette.shift();}}
if(localStorageKey&&window.localStorage){try{window.localStorage[localStorageKey]=selectionPalette.join(";");}
catch(e){}}}}
function getUniqueSelectionPalette(){var unique=[];if(opts.showPalette){for(var i=0;i<selectionPalette.length;i++){var rgb=tinycolor(selectionPalette[i]).toRgbString();if(!paletteLookup[rgb]){unique.push(selectionPalette[i]);}}}
return unique.reverse().slice(0,opts.maxSelectionSize);}
function drawPalette(){var currentColor=get();var html=$.map(paletteArray,function(palette,i){return paletteTemplate(palette,currentColor,"sp-palette-row sp-palette-row-"+i,opts);});updateSelectionPaletteFromStorage();if(selectionPalette){html.push(paletteTemplate(getUniqueSelectionPalette(),currentColor,"sp-palette-row sp-palette-row-selection",opts));}
paletteContainer.html(html.join(""));}
function drawInitial(){if(opts.showInitial){var initial=colorOnShow;var current=get();initialColorContainer.html(paletteTemplate([initial,current],current,"sp-palette-row-initial",opts));}}
function dragStart(){if(dragHeight<=0||dragWidth<=0||slideHeight<=0){reflow();}
container.addClass(draggingClass);shiftMovementDirection=null;boundElement.trigger('dragstart.spectrum',[get()]);}
function dragStop(){container.removeClass(draggingClass);boundElement.trigger('dragstop.spectrum',[get()]);}
function setFromTextInput(){var value=textInput.val();if((value===null||value==="")&&allowEmpty){set(null);updateOriginalInput(true);}
else{var tiny=tinycolor(value);if(tiny.isValid()){set(tiny);updateOriginalInput(true);}
else{textInput.addClass("sp-validation-error");}}}
function toggle(){if(visible){hide();}
else{show();}}
function show(){var event=$.Event('beforeShow.spectrum');if(visible){reflow();return;}
boundElement.trigger(event,[get()]);if(callbacks.beforeShow(get())===false||event.isDefaultPrevented()){return;}
hideAll();visible=true;$(doc).bind("click.spectrum",clickout);$(window).bind("resize.spectrum",resize);replacer.addClass("sp-active");container.removeClass("sp-hidden");reflow();updateUI();colorOnShow=get();drawInitial();callbacks.show(colorOnShow);boundElement.trigger('show.spectrum',[colorOnShow]);}
function clickout(e){if(e.button==2){return;}
if(clickoutFiresChange){updateOriginalInput(true);}
else{revert();}
hide();}
function hide(){if(!visible||flat){return;}
visible=false;$(doc).unbind("click.spectrum",clickout);$(window).unbind("resize.spectrum",resize);replacer.removeClass("sp-active");container.addClass("sp-hidden");callbacks.hide(get());boundElement.trigger('hide.spectrum',[get()]);}
function revert(){set(colorOnShow,true);}
function set(color,ignoreFormatChange){if(tinycolor.equals(color,get())){updateUI();return;}
var newColor,newHsv;if(!color&&allowEmpty){isEmpty=true;}else{isEmpty=false;newColor=tinycolor(color);newHsv=newColor.toHsv();currentHue=(newHsv.h%360)/360;currentSaturation=newHsv.s;currentValue=newHsv.v;currentAlpha=newHsv.a;}
updateUI();if(newColor&&newColor.isValid()&&!ignoreFormatChange){currentPreferredFormat=preferredFormat||newColor.getFormat();}}
function get(opts){opts=opts||{};if(allowEmpty&&isEmpty){return null;}
return tinycolor.fromRatio({h:currentHue,s:currentSaturation,v:currentValue,a:Math.round(currentAlpha*100)/100},{format:opts.format||currentPreferredFormat});}
function isValid(){return!textInput.hasClass("sp-validation-error");}
function move(){updateUI();callbacks.move(get());boundElement.trigger('move.spectrum',[get()]);}
function updateUI(){textInput.removeClass("sp-validation-error");updateHelperLocations();var flatColor=tinycolor.fromRatio({h:currentHue,s:1,v:1});dragger.css("background-color",flatColor.toHexString());var format=currentPreferredFormat;if(currentAlpha<1&&!(currentAlpha===0&&format==="name")){if(format==="hex"||format==="hex3"||format==="hex6"||format==="name"){format="rgb";}}
var realColor=get({format:format}),displayColor='';previewElement.removeClass("sp-clear-display");previewElement.css('background-color','transparent');if(!realColor&&allowEmpty){previewElement.addClass("sp-clear-display");}
else{var realHex=realColor.toHexString(),realRgb=realColor.toRgbString();if(rgbaSupport||realColor.alpha===1){previewElement.css("background-color",realRgb);}
else{previewElement.css("background-color","transparent");previewElement.css("filter",realColor.toFilter());}
if(opts.showAlpha){var rgb=realColor.toRgb();rgb.a=0;var realAlpha=tinycolor(rgb).toRgbString();var gradient="linear-gradient(left, "+realAlpha+", "+realHex+")";if(IE){alphaSliderInner.css("filter",tinycolor(realAlpha).toFilter({gradientType:1},realHex));}
else{alphaSliderInner.css("background","-webkit-"+gradient);alphaSliderInner.css("background","-moz-"+gradient);alphaSliderInner.css("background","-ms-"+gradient);alphaSliderInner.css("background","linear-gradient(to right, "+realAlpha+", "+realHex+")");}}
displayColor=realColor.toString(format);}
if(opts.showInput){textInput.val(displayColor);}
if(opts.showPalette){drawPalette();}
drawInitial();}
function updateHelperLocations(){var s=currentSaturation;var v=currentValue;if(allowEmpty&&isEmpty){alphaSlideHelper.hide();slideHelper.hide();dragHelper.hide();}
else{alphaSlideHelper.show();slideHelper.show();dragHelper.show();var dragX=s*dragWidth;var dragY=dragHeight-(v*dragHeight);dragX=Math.max(-dragHelperHeight,Math.min(dragWidth-dragHelperHeight,dragX-dragHelperHeight));dragY=Math.max(-dragHelperHeight,Math.min(dragHeight-dragHelperHeight,dragY-dragHelperHeight));dragHelper.css({"top":dragY+"px","left":dragX+"px"});var alphaX=currentAlpha*alphaWidth;alphaSlideHelper.css({"left":(alphaX-(alphaSlideHelperWidth/2))+"px"});var slideY=(currentHue)*slideHeight;slideHelper.css({"top":(slideY-slideHelperHeight)+"px"});}}
function updateOriginalInput(fireCallback){var color=get(),displayColor='',hasChanged=!tinycolor.equals(color,colorOnShow);if(color){displayColor=color.toString(currentPreferredFormat);addColorToSelectionPalette(color);}
if(isInput){boundElement.val(displayColor);}
if(fireCallback&&hasChanged){callbacks.change(color);boundElement.trigger('change',[color]);}}
function reflow(){dragWidth=dragger.width();dragHeight=dragger.height();dragHelperHeight=dragHelper.height();slideWidth=slider.width();slideHeight=slider.height();slideHelperHeight=slideHelper.height();alphaWidth=alphaSlider.width();alphaSlideHelperWidth=alphaSlideHelper.width();if(!flat){container.css("position","absolute");if(opts.offset){container.offset(opts.offset);}else{container.offset(getOffset(container,offsetElement));}}
updateHelperLocations();if(opts.showPalette){drawPalette();}
boundElement.trigger('reflow.spectrum');}
function destroy(){boundElement.show();offsetElement.unbind("click.spectrum touchstart.spectrum");container.remove();replacer.remove();spectrums[spect.id]=null;}
function option(optionName,optionValue){if(optionName===undefined){return $.extend({},opts);}
if(optionValue===undefined){return opts[optionName];}
opts[optionName]=optionValue;applyOptions();}
function enable(){disabled=false;boundElement.attr("disabled",false);offsetElement.removeClass("sp-disabled");}
function disable(){hide();disabled=true;boundElement.attr("disabled",true);offsetElement.addClass("sp-disabled");}
function setOffset(coord){opts.offset=coord;reflow();}
initialize();var spect={show:show,hide:hide,toggle:toggle,reflow:reflow,option:option,enable:enable,disable:disable,offset:setOffset,set:function(c){set(c);updateOriginalInput();},get:get,destroy:destroy,container:container};spect.id=spectrums.push(spect)-1;return spect;}
function getOffset(picker,input){var extraY=0;var dpWidth=picker.outerWidth();var dpHeight=picker.outerHeight();var inputHeight=input.outerHeight();var doc=picker[0].ownerDocument;var docElem=doc.documentElement;var viewWidth=docElem.clientWidth+$(doc).scrollLeft();var viewHeight=docElem.clientHeight+$(doc).scrollTop();var offset=input.offset();offset.top+=inputHeight;offset.left-=Math.min(offset.left,(offset.left+dpWidth>viewWidth&&viewWidth>dpWidth)?Math.abs(offset.left+dpWidth-viewWidth):0);offset.top-=Math.min(offset.top,((offset.top+dpHeight>viewHeight&&viewHeight>dpHeight)?Math.abs(dpHeight+inputHeight-extraY):extraY));return offset;}
function noop(){}
function stopPropagation(e){e.stopPropagation();}
function bind(func,obj){var slice=Array.prototype.slice;var args=slice.call(arguments,2);return function(){return func.apply(obj,args.concat(slice.call(arguments)));};}
function draggable(element,onmove,onstart,onstop){onmove=onmove||function(){};onstart=onstart||function(){};onstop=onstop||function(){};var doc=document;var dragging=false;var offset={};var maxHeight=0;var maxWidth=0;var hasTouch=('ontouchstart'in window);var duringDragEvents={};duringDragEvents["selectstart"]=prevent;duringDragEvents["dragstart"]=prevent;duringDragEvents["touchmove mousemove"]=move;duringDragEvents["touchend mouseup"]=stop;function prevent(e){if(e.stopPropagation){e.stopPropagation();}
if(e.preventDefault){e.preventDefault();}
e.returnValue=false;}
function move(e){if(dragging){if(IE&&doc.documentMode<9&&!e.button){return stop();}
var touches=e.originalEvent&&e.originalEvent.touches;var pageX=touches?touches[0].pageX:e.pageX;var pageY=touches?touches[0].pageY:e.pageY;var dragX=Math.max(0,Math.min(pageX-offset.left,maxWidth));var dragY=Math.max(0,Math.min(pageY-offset.top,maxHeight));if(hasTouch){prevent(e);}
onmove.apply(element,[dragX,dragY,e]);}}
function start(e){var rightclick=(e.which)?(e.which==3):(e.button==2);if(!rightclick&&!dragging){if(onstart.apply(element,arguments)!==false){dragging=true;maxHeight=$(element).height();maxWidth=$(element).width();offset=$(element).offset();$(doc).bind(duringDragEvents);$(doc.body).addClass("sp-dragging");if(!hasTouch){move(e);}
prevent(e);}}}
function stop(){if(dragging){$(doc).unbind(duringDragEvents);$(doc.body).removeClass("sp-dragging");onstop.apply(element,arguments);}
dragging=false;}
$(element).bind("touchstart mousedown",start);}
function throttle(func,wait,debounce){var timeout;return function(){var context=this,args=arguments;var throttler=function(){timeout=null;func.apply(context,args);};if(debounce)clearTimeout(timeout);if(debounce||!timeout)timeout=setTimeout(throttler,wait);};}
var dataID="spectrum.id";$.fn.spectrum=function(opts,extra){if(typeof opts=="string"){var returnValue=this;var args=Array.prototype.slice.call(arguments,1);this.each(function(){var spect=spectrums[$(this).data(dataID)];if(spect){var method=spect[opts];if(!method){throw new Error("Spectrum: no such method: '"+opts+"'");}
if(opts=="get"){returnValue=spect.get();}
else if(opts=="container"){returnValue=spect.container;}
else if(opts=="option"){returnValue=spect.option.apply(spect,args);}
else if(opts=="destroy"){spect.destroy();$(this).removeData(dataID);}
else{method.apply(spect,args);}}});return returnValue;}
return this.spectrum("destroy").each(function(){var options=$.extend({},opts,$(this).data());var spect=spectrum(this,options);$(this).data(dataID,spect.id);});};$.fn.spectrum.load=true;$.fn.spectrum.loadOpts={};$.fn.spectrum.draggable=draggable;$.fn.spectrum.defaults=defaultOpts;$.spectrum={};$.spectrum.localization={};$.spectrum.palettes={};$.fn.spectrum.processNativeColorInputs=function(){if(!inputTypeColorSupport){$("input[type=color]").spectrum({preferredFormat:"hex6"});}};(function(){var trimLeft=/^[\s,#]+/,trimRight=/\s+$/,tinyCounter=0,math=Math,mathRound=math.round,mathMin=math.min,mathMax=math.max,mathRandom=math.random;var tinycolor=function tinycolor(color,opts){color=(color)?color:'';opts=opts||{};if(color instanceof tinycolor){return color;}
if(!(this instanceof tinycolor)){return new tinycolor(color,opts);}
var rgb=inputToRGB(color);this._originalInput=color,this._r=rgb.r,this._g=rgb.g,this._b=rgb.b,this._a=rgb.a,this._roundA=mathRound(100*this._a)/100,this._format=opts.format||rgb.format;this._gradientType=opts.gradientType;if(this._r<1){this._r=mathRound(this._r);}
if(this._g<1){this._g=mathRound(this._g);}
if(this._b<1){this._b=mathRound(this._b);}
this._ok=rgb.ok;this._tc_id=tinyCounter++;};tinycolor.prototype={isDark:function(){return this.getBrightness()<128;},isLight:function(){return!this.isDark();},isValid:function(){return this._ok;},getOriginalInput:function(){return this._originalInput;},getFormat:function(){return this._format;},getAlpha:function(){return this._a;},getBrightness:function(){var rgb=this.toRgb();return(rgb.r*299+rgb.g*587+rgb.b*114)/1000;},setAlpha:function(value){this._a=boundAlpha(value);this._roundA=mathRound(100*this._a)/100;return this;},toHsv:function(){var hsv=rgbToHsv(this._r,this._g,this._b);return{h:hsv.h*360,s:hsv.s,v:hsv.v,a:this._a};},toHsvString:function(){var hsv=rgbToHsv(this._r,this._g,this._b);var h=mathRound(hsv.h*360),s=mathRound(hsv.s*100),v=mathRound(hsv.v*100);return(this._a==1)?"hsv("+h+", "+s+"%, "+v+"%)":"hsva("+h+", "+s+"%, "+v+"%, "+this._roundA+")";},toHsl:function(){var hsl=rgbToHsl(this._r,this._g,this._b);return{h:hsl.h*360,s:hsl.s,l:hsl.l,a:this._a};},toHslString:function(){var hsl=rgbToHsl(this._r,this._g,this._b);var h=mathRound(hsl.h*360),s=mathRound(hsl.s*100),l=mathRound(hsl.l*100);return(this._a==1)?"hsl("+h+", "+s+"%, "+l+"%)":"hsla("+h+", "+s+"%, "+l+"%, "+this._roundA+")";},toHex:function(allow3Char){return rgbToHex(this._r,this._g,this._b,allow3Char);},toHexString:function(allow3Char){return'#'+this.toHex(allow3Char);},toHex8:function(){return rgbaToHex(this._r,this._g,this._b,this._a);},toHex8String:function(){return'#'+this.toHex8();},toRgb:function(){return{r:mathRound(this._r),g:mathRound(this._g),b:mathRound(this._b),a:this._a};},toRgbString:function(){return(this._a==1)?"rgb("+mathRound(this._r)+", "+mathRound(this._g)+", "+mathRound(this._b)+")":"rgba("+mathRound(this._r)+", "+mathRound(this._g)+", "+mathRound(this._b)+", "+this._roundA+")";},toPercentageRgb:function(){return{r:mathRound(bound01(this._r,255)*100)+"%",g:mathRound(bound01(this._g,255)*100)+"%",b:mathRound(bound01(this._b,255)*100)+"%",a:this._a};},toPercentageRgbString:function(){return(this._a==1)?"rgb("+mathRound(bound01(this._r,255)*100)+"%, "+mathRound(bound01(this._g,255)*100)+"%, "+mathRound(bound01(this._b,255)*100)+"%)":"rgba("+mathRound(bound01(this._r,255)*100)+"%, "+mathRound(bound01(this._g,255)*100)+"%, "+mathRound(bound01(this._b,255)*100)+"%, "+this._roundA+")";},toName:function(){if(this._a===0){return"transparent";}
if(this._a<1){return false;}
return hexNames[rgbToHex(this._r,this._g,this._b,true)]||false;},toFilter:function(secondColor){var hex8String='#'+rgbaToHex(this._r,this._g,this._b,this._a);var secondHex8String=hex8String;var gradientType=this._gradientType?"GradientType = 1, ":"";if(secondColor){var s=tinycolor(secondColor);secondHex8String=s.toHex8String();}
return"progid:DXImageTransform.Microsoft.gradient("+gradientType+"startColorstr="+hex8String+",endColorstr="+secondHex8String+")";},toString:function(format){var formatSet=!!format;format=format||this._format;var formattedString=false;var hasAlpha=this._a<1&&this._a>=0;var needsAlphaFormat=!formatSet&&hasAlpha&&(format==="hex"||format==="hex6"||format==="hex3"||format==="name");if(needsAlphaFormat){if(format==="name"&&this._a===0){return this.toName();}
return this.toRgbString();}
if(format==="rgb"){formattedString=this.toRgbString();}
if(format==="prgb"){formattedString=this.toPercentageRgbString();}
if(format==="hex"||format==="hex6"){formattedString=this.toHexString();}
if(format==="hex3"){formattedString=this.toHexString(true);}
if(format==="hex8"){formattedString=this.toHex8String();}
if(format==="name"){formattedString=this.toName();}
if(format==="hsl"){formattedString=this.toHslString();}
if(format==="hsv"){formattedString=this.toHsvString();}
return formattedString||this.toHexString();},_applyModification:function(fn,args){var color=fn.apply(null,[this].concat([].slice.call(args)));this._r=color._r;this._g=color._g;this._b=color._b;this.setAlpha(color._a);return this;},lighten:function(){return this._applyModification(lighten,arguments);},brighten:function(){return this._applyModification(brighten,arguments);},darken:function(){return this._applyModification(darken,arguments);},desaturate:function(){return this._applyModification(desaturate,arguments);},saturate:function(){return this._applyModification(saturate,arguments);},greyscale:function(){return this._applyModification(greyscale,arguments);},spin:function(){return this._applyModification(spin,arguments);},_applyCombination:function(fn,args){return fn.apply(null,[this].concat([].slice.call(args)));},analogous:function(){return this._applyCombination(analogous,arguments);},complement:function(){return this._applyCombination(complement,arguments);},monochromatic:function(){return this._applyCombination(monochromatic,arguments);},splitcomplement:function(){return this._applyCombination(splitcomplement,arguments);},triad:function(){return this._applyCombination(triad,arguments);},tetrad:function(){return this._applyCombination(tetrad,arguments);}};tinycolor.fromRatio=function(color,opts){if(typeof color=="object"){var newColor={};for(var i in color){if(color.hasOwnProperty(i)){if(i==="a"){newColor[i]=color[i];}
else{newColor[i]=convertToPercentage(color[i]);}}}
color=newColor;}
return tinycolor(color,opts);};function inputToRGB(color){var rgb={r:0,g:0,b:0};var a=1;var ok=false;var format=false;if(typeof color=="string"){color=stringInputToObject(color);}
if(typeof color=="object"){if(color.hasOwnProperty("r")&&color.hasOwnProperty("g")&&color.hasOwnProperty("b")){rgb=rgbToRgb(color.r,color.g,color.b);ok=true;format=String(color.r).substr(-1)==="%"?"prgb":"rgb";}
else if(color.hasOwnProperty("h")&&color.hasOwnProperty("s")&&color.hasOwnProperty("v")){color.s=convertToPercentage(color.s);color.v=convertToPercentage(color.v);rgb=hsvToRgb(color.h,color.s,color.v);ok=true;format="hsv";}
else if(color.hasOwnProperty("h")&&color.hasOwnProperty("s")&&color.hasOwnProperty("l")){color.s=convertToPercentage(color.s);color.l=convertToPercentage(color.l);rgb=hslToRgb(color.h,color.s,color.l);ok=true;format="hsl";}
if(color.hasOwnProperty("a")){a=color.a;}}
a=boundAlpha(a);return{ok:ok,format:color.format||format,r:mathMin(255,mathMax(rgb.r,0)),g:mathMin(255,mathMax(rgb.g,0)),b:mathMin(255,mathMax(rgb.b,0)),a:a};}
function rgbToRgb(r,g,b){return{r:bound01(r,255)*255,g:bound01(g,255)*255,b:bound01(b,255)*255};}
function rgbToHsl(r,g,b){r=bound01(r,255);g=bound01(g,255);b=bound01(b,255);var max=mathMax(r,g,b),min=mathMin(r,g,b);var h,s,l=(max+min)/2;if(max==min){h=s=0;}
else{var d=max-min;s=l>0.5?d/(2-max-min):d/(max+min);switch(max){case r:h=(g-b)/d+(g<b?6:0);break;case g:h=(b-r)/d+2;break;case b:h=(r-g)/d+4;break;}
h/=6;}
return{h:h,s:s,l:l};}
function hslToRgb(h,s,l){var r,g,b;h=bound01(h,360);s=bound01(s,100);l=bound01(l,100);function hue2rgb(p,q,t){if(t<0)t+=1;if(t>1)t-=1;if(t<1/6)return p+(q-p)*6*t;if(t<1/2)return q;if(t<2/3)return p+(q-p)*(2/3-t)*6;return p;}
if(s===0){r=g=b=l;}
else{var q=l<0.5?l*(1+s):l+s-l*s;var p=2*l-q;r=hue2rgb(p,q,h+1/3);g=hue2rgb(p,q,h);b=hue2rgb(p,q,h-1/3);}
return{r:r*255,g:g*255,b:b*255};}
function rgbToHsv(r,g,b){r=bound01(r,255);g=bound01(g,255);b=bound01(b,255);var max=mathMax(r,g,b),min=mathMin(r,g,b);var h,s,v=max;var d=max-min;s=max===0?0:d/max;if(max==min){h=0;}
else{switch(max){case r:h=(g-b)/d+(g<b?6:0);break;case g:h=(b-r)/d+2;break;case b:h=(r-g)/d+4;break;}
h/=6;}
return{h:h,s:s,v:v};}
function hsvToRgb(h,s,v){h=bound01(h,360)*6;s=bound01(s,100);v=bound01(v,100);var i=math.floor(h),f=h-i,p=v*(1-s),q=v*(1-f*s),t=v*(1-(1-f)*s),mod=i%6,r=[v,q,p,p,t,v][mod],g=[t,v,v,q,p,p][mod],b=[p,p,t,v,v,q][mod];return{r:r*255,g:g*255,b:b*255};}
function rgbToHex(r,g,b,allow3Char){var hex=[pad2(mathRound(r).toString(16)),pad2(mathRound(g).toString(16)),pad2(mathRound(b).toString(16))];if(allow3Char&&hex[0].charAt(0)==hex[0].charAt(1)&&hex[1].charAt(0)==hex[1].charAt(1)&&hex[2].charAt(0)==hex[2].charAt(1)){return hex[0].charAt(0)+hex[1].charAt(0)+hex[2].charAt(0);}
return hex.join("");}
function rgbaToHex(r,g,b,a){var hex=[pad2(convertDecimalToHex(a)),pad2(mathRound(r).toString(16)),pad2(mathRound(g).toString(16)),pad2(mathRound(b).toString(16))];return hex.join("");}
tinycolor.equals=function(color1,color2){if(!color1||!color2){return false;}
return tinycolor(color1).toRgbString()==tinycolor(color2).toRgbString();};tinycolor.random=function(){return tinycolor.fromRatio({r:mathRandom(),g:mathRandom(),b:mathRandom()});};function desaturate(color,amount){amount=(amount===0)?0:(amount||10);var hsl=tinycolor(color).toHsl();hsl.s-=amount/100;hsl.s=clamp01(hsl.s);return tinycolor(hsl);}
function saturate(color,amount){amount=(amount===0)?0:(amount||10);var hsl=tinycolor(color).toHsl();hsl.s+=amount/100;hsl.s=clamp01(hsl.s);return tinycolor(hsl);}
function greyscale(color){return tinycolor(color).desaturate(100);}
function lighten(color,amount){amount=(amount===0)?0:(amount||10);var hsl=tinycolor(color).toHsl();hsl.l+=amount/100;hsl.l=clamp01(hsl.l);return tinycolor(hsl);}
function brighten(color,amount){amount=(amount===0)?0:(amount||10);var rgb=tinycolor(color).toRgb();rgb.r=mathMax(0,mathMin(255,rgb.r-mathRound(255* -(amount/100))));rgb.g=mathMax(0,mathMin(255,rgb.g-mathRound(255* -(amount/100))));rgb.b=mathMax(0,mathMin(255,rgb.b-mathRound(255* -(amount/100))));return tinycolor(rgb);}
function darken(color,amount){amount=(amount===0)?0:(amount||10);var hsl=tinycolor(color).toHsl();hsl.l-=amount/100;hsl.l=clamp01(hsl.l);return tinycolor(hsl);}
function spin(color,amount){var hsl=tinycolor(color).toHsl();var hue=(mathRound(hsl.h)+amount)%360;hsl.h=hue<0?360+hue:hue;return tinycolor(hsl);}
function complement(color){var hsl=tinycolor(color).toHsl();hsl.h=(hsl.h+180)%360;return tinycolor(hsl);}
function triad(color){var hsl=tinycolor(color).toHsl();var h=hsl.h;return[tinycolor(color),tinycolor({h:(h+120)%360,s:hsl.s,l:hsl.l}),tinycolor({h:(h+240)%360,s:hsl.s,l:hsl.l})];}
function tetrad(color){var hsl=tinycolor(color).toHsl();var h=hsl.h;return[tinycolor(color),tinycolor({h:(h+90)%360,s:hsl.s,l:hsl.l}),tinycolor({h:(h+180)%360,s:hsl.s,l:hsl.l}),tinycolor({h:(h+270)%360,s:hsl.s,l:hsl.l})];}
function splitcomplement(color){var hsl=tinycolor(color).toHsl();var h=hsl.h;return[tinycolor(color),tinycolor({h:(h+72)%360,s:hsl.s,l:hsl.l}),tinycolor({h:(h+216)%360,s:hsl.s,l:hsl.l})];}
function analogous(color,results,slices){results=results||6;slices=slices||30;var hsl=tinycolor(color).toHsl();var part=360/slices;var ret=[tinycolor(color)];for(hsl.h=((hsl.h-(part*results>>1))+720)%360;--results;){hsl.h=(hsl.h+part)%360;ret.push(tinycolor(hsl));}
return ret;}
function monochromatic(color,results){results=results||6;var hsv=tinycolor(color).toHsv();var h=hsv.h,s=hsv.s,v=hsv.v;var ret=[];var modification=1/results;while(results--){ret.push(tinycolor({h:h,s:s,v:v}));v=(v+modification)%1;}
return ret;}
tinycolor.mix=function(color1,color2,amount){amount=(amount===0)?0:(amount||50);var rgb1=tinycolor(color1).toRgb();var rgb2=tinycolor(color2).toRgb();var p=amount/100;var w=p*2-1;var a=rgb2.a-rgb1.a;var w1;if(w*a==-1){w1=w;}else{w1=(w+a)/(1+w*a);}
w1=(w1+1)/2;var w2=1-w1;var rgba={r:rgb2.r*w1+rgb1.r*w2,g:rgb2.g*w1+rgb1.g*w2,b:rgb2.b*w1+rgb1.b*w2,a:rgb2.a*p+rgb1.a*(1-p)};return tinycolor(rgba);};tinycolor.readability=function(color1,color2){var c1=tinycolor(color1);var c2=tinycolor(color2);var rgb1=c1.toRgb();var rgb2=c2.toRgb();var brightnessA=c1.getBrightness();var brightnessB=c2.getBrightness();var colorDiff=(Math.max(rgb1.r,rgb2.r)-Math.min(rgb1.r,rgb2.r)+
Math.max(rgb1.g,rgb2.g)-Math.min(rgb1.g,rgb2.g)+
Math.max(rgb1.b,rgb2.b)-Math.min(rgb1.b,rgb2.b));return{brightness:Math.abs(brightnessA-brightnessB),color:colorDiff};};tinycolor.isReadable=function(color1,color2){var readability=tinycolor.readability(color1,color2);return readability.brightness>125&&readability.color>500;};tinycolor.mostReadable=function(baseColor,colorList){var bestColor=null;var bestScore=0;var bestIsReadable=false;for(var i=0;i<colorList.length;i++){var readability=tinycolor.readability(baseColor,colorList[i]);var readable=readability.brightness>125&&readability.color>500;var score=3*(readability.brightness/125)+(readability.color/500);if((readable&&!bestIsReadable)||(readable&&bestIsReadable&&score>bestScore)||((!readable)&&(!bestIsReadable)&&score>bestScore)){bestIsReadable=readable;bestScore=score;bestColor=tinycolor(colorList[i]);}}
return bestColor;};var names=tinycolor.names={aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"0ff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000",blanchedalmond:"ffebcd",blue:"00f",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",burntsienna:"ea7e5d",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"0ff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgreen:"006400",darkgrey:"a9a9a9",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkslategrey:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dimgrey:"696969",dodgerblue:"1e90ff",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"f0f",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",green:"008000",greenyellow:"adff2f",grey:"808080",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgray:"d3d3d3",lightgreen:"90ee90",lightgrey:"d3d3d3",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslategray:"789",lightslategrey:"789",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"0f0",limegreen:"32cd32",linen:"faf0e6",magenta:"f0f",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370db",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"db7093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",rebeccapurple:"663399",red:"f00",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",slategrey:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",wheat:"f5deb3",white:"fff",whitesmoke:"f5f5f5",yellow:"ff0",yellowgreen:"9acd32"};var hexNames=tinycolor.hexNames=flip(names);function flip(o){var flipped={};for(var i in o){if(o.hasOwnProperty(i)){flipped[o[i]]=i;}}
return flipped;}
function boundAlpha(a){a=parseFloat(a);if(isNaN(a)||a<0||a>1){a=1;}
return a;}
function bound01(n,max){if(isOnePointZero(n)){n="100%";}
var processPercent=isPercentage(n);n=mathMin(max,mathMax(0,parseFloat(n)));if(processPercent){n=parseInt(n*max,10)/100;}
if((math.abs(n-max)<0.000001)){return 1;}
return(n%max)/parseFloat(max);}
function clamp01(val){return mathMin(1,mathMax(0,val));}
function parseIntFromHex(val){return parseInt(val,16);}
function isOnePointZero(n){return typeof n=="string"&&n.indexOf('.')!=-1&&parseFloat(n)===1;}
function isPercentage(n){return typeof n==="string"&&n.indexOf('%')!=-1;}
function pad2(c){return c.length==1?'0'+c:''+c;}
function convertToPercentage(n){if(n<=1){n=(n*100)+"%";}
return n;}
function convertDecimalToHex(d){return Math.round(parseFloat(d)*255).toString(16);}
function convertHexToDecimal(h){return(parseIntFromHex(h)/255);}
var matchers=(function(){var CSS_INTEGER="[-\\+]?\\d+%?";var CSS_NUMBER="[-\\+]?\\d*\\.\\d+%?";var CSS_UNIT="(?:"+CSS_NUMBER+")|(?:"+CSS_INTEGER+")";var PERMISSIVE_MATCH3="[\\s|\\(]+("+CSS_UNIT+")[,|\\s]+("+CSS_UNIT+")[,|\\s]+("+CSS_UNIT+")\\s*\\)?";var PERMISSIVE_MATCH4="[\\s|\\(]+("+CSS_UNIT+")[,|\\s]+("+CSS_UNIT+")[,|\\s]+("+CSS_UNIT+")[,|\\s]+("+CSS_UNIT+")\\s*\\)?";return{rgb:new RegExp("rgb"+PERMISSIVE_MATCH3),rgba:new RegExp("rgba"+PERMISSIVE_MATCH4),hsl:new RegExp("hsl"+PERMISSIVE_MATCH3),hsla:new RegExp("hsla"+PERMISSIVE_MATCH4),hsv:new RegExp("hsv"+PERMISSIVE_MATCH3),hsva:new RegExp("hsva"+PERMISSIVE_MATCH4),hex3:/^([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,hex8:/^([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/};})();function stringInputToObject(color){color=color.replace(trimLeft,'').replace(trimRight,'').toLowerCase();var named=false;if(names[color]){color=names[color];named=true;}
else if(color=='transparent'){return{r:0,g:0,b:0,a:0,format:"name"};}
var match;if((match=matchers.rgb.exec(color))){return{r:match[1],g:match[2],b:match[3]};}
if((match=matchers.rgba.exec(color))){return{r:match[1],g:match[2],b:match[3],a:match[4]};}
if((match=matchers.hsl.exec(color))){return{h:match[1],s:match[2],l:match[3]};}
if((match=matchers.hsla.exec(color))){return{h:match[1],s:match[2],l:match[3],a:match[4]};}
if((match=matchers.hsv.exec(color))){return{h:match[1],s:match[2],v:match[3]};}
if((match=matchers.hsva.exec(color))){return{h:match[1],s:match[2],v:match[3],a:match[4]};}
if((match=matchers.hex8.exec(color))){return{a:convertHexToDecimal(match[1]),r:parseIntFromHex(match[2]),g:parseIntFromHex(match[3]),b:parseIntFromHex(match[4]),format:named?"name":"hex8"};}
if((match=matchers.hex6.exec(color))){return{r:parseIntFromHex(match[1]),g:parseIntFromHex(match[2]),b:parseIntFromHex(match[3]),format:named?"name":"hex"};}
if((match=matchers.hex3.exec(color))){return{r:parseIntFromHex(match[1]+''+match[1]),g:parseIntFromHex(match[2]+''+match[2]),b:parseIntFromHex(match[3]+''+match[3]),format:named?"name":"hex"};}
return false;}
window.tinycolor=tinycolor;})();$(function(){if($.fn.spectrum.load){$.fn.spectrum.processNativeColorInputs();}});});;
if(!document)var document={cookie:''};var ObjectId=(function(){var increment=Math.floor(Math.random()*(16777216));var pid=Math.floor(Math.random()*(65536));var machine=Math.floor(Math.random()*(16777216));var setMachineCookie=function(){var cookieList=document.cookie.split('; ');for(var i in cookieList){var cookie=cookieList[i].split('=');var cookieMachineId=parseInt(cookie[1],10);if(cookie[0]=='mongoMachineId'&&cookieMachineId&&cookieMachineId>=0&&cookieMachineId<=16777215){machine=cookieMachineId;break;}}
document.cookie='mongoMachineId='+machine+';expires=Tue, 19 Jan 2038 05:00:00 GMT;path=/';};if(typeof(localStorage)!='undefined'){try{var mongoMachineId=parseInt(localStorage['mongoMachineId']);if(mongoMachineId>=0&&mongoMachineId<=16777215){machine=Math.floor(localStorage['mongoMachineId']);}
localStorage['mongoMachineId']=machine;}catch(e){setMachineCookie();}}
else{setMachineCookie();}
function ObjId(){if(!(this instanceof ObjectId)){return new ObjectId(arguments[0],arguments[1],arguments[2],arguments[3]).toString();}
if(typeof(arguments[0])=='object'){this.timestamp=arguments[0].timestamp;this.machine=arguments[0].machine;this.pid=arguments[0].pid;this.increment=arguments[0].increment;}
else if(typeof(arguments[0])=='string'&&arguments[0].length==24){this.timestamp=Number('0x'+arguments[0].substr(0,8)),this.machine=Number('0x'+arguments[0].substr(8,6)),this.pid=Number('0x'+arguments[0].substr(14,4)),this.increment=Number('0x'+arguments[0].substr(18,6))}
else if(arguments.length==4&&arguments[0]!=null){this.timestamp=arguments[0];this.machine=arguments[1];this.pid=arguments[2];this.increment=arguments[3];}
else{this.timestamp=Math.floor(new Date().valueOf()/1000);this.machine=machine;this.pid=pid;this.increment=increment++;if(increment>0xffffff){increment=0;}}};return ObjId;})();ObjectId.prototype.getDate=function(){return new Date(this.timestamp*1000);};ObjectId.prototype.toArray=function(){var strOid=this.toString();var array=[];var i;for(i=0;i<12;i++){array[i]=parseInt(strOid.slice(i*2,i*2+2),16);}
return array;};ObjectId.prototype.toString=function(){if(this.timestamp===undefined||this.machine===undefined||this.pid===undefined||this.increment===undefined){return'Invalid ObjectId';}
var timestamp=this.timestamp.toString(16);var machine=this.machine.toString(16);var pid=this.pid.toString(16);var increment=this.increment.toString(16);return'00000000'.substr(0,8-timestamp.length)+timestamp+'000000'.substr(0,6-machine.length)+machine+'0000'.substr(0,4-pid.length)+pid+'000000'.substr(0,6-increment.length)+increment;};;
if(typeof jQuery==='undefined'){throw new Error('Bootstrap\'s JavaScript requires jQuery')}
+function($){'use strict';var version=$.fn.jquery.split(' ')[0].split('.')
if((version[0]<2&&version[1]<9)||(version[0]==1&&version[1]==9&&version[2]<1)){throw new Error('Bootstrap\'s JavaScript requires jQuery version 1.9.1 or higher')}}(jQuery);+function($){'use strict';function transitionEnd(){var el=document.createElement('bootstrap')
var transEndEventNames={WebkitTransition:'webkitTransitionEnd',MozTransition:'transitionend',OTransition:'oTransitionEnd otransitionend',transition:'transitionend'}
for(var name in transEndEventNames){if(el.style[name]!==undefined){return{end:transEndEventNames[name]}}}
return false}
$.fn.emulateTransitionEnd=function(duration){var called=false
var $el=this
$(this).one('bsTransitionEnd',function(){called=true})
var callback=function(){if(!called)$($el).trigger($.support.transition.end)}
setTimeout(callback,duration)
return this}
$(function(){$.support.transition=transitionEnd()
if(!$.support.transition)return
$.event.special.bsTransitionEnd={bindType:$.support.transition.end,delegateType:$.support.transition.end,handle:function(e){if($(e.target).is(this))return e.handleObj.handler.apply(this,arguments)}}})}(jQuery);+function($){'use strict';var dismiss='[data-dismiss="alert"]'
var Alert=function(el){$(el).on('click',dismiss,this.close)}
Alert.VERSION='3.3.5'
Alert.TRANSITION_DURATION=150
Alert.prototype.close=function(e){var $this=$(this)
var selector=$this.attr('data-target')
if(!selector){selector=$this.attr('href')
selector=selector&&selector.replace(/.*(?=#[^\s]*$)/,'')}
var $parent=$(selector)
if(e)e.preventDefault()
if(!$parent.length){$parent=$this.closest('.alert')}
$parent.trigger(e=$.Event('close.bs.alert'))
if(e.isDefaultPrevented())return
$parent.removeClass('in')
function removeElement(){$parent.detach().trigger('closed.bs.alert').remove()}
$.support.transition&&$parent.hasClass('fade')?$parent.one('bsTransitionEnd',removeElement).emulateTransitionEnd(Alert.TRANSITION_DURATION):removeElement()}
function Plugin(option){return this.each(function(){var $this=$(this)
var data=$this.data('bs.alert')
if(!data)$this.data('bs.alert',(data=new Alert(this)))
if(typeof option=='string')data[option].call($this)})}
var old=$.fn.alert
$.fn.alert=Plugin
$.fn.alert.Constructor=Alert
$.fn.alert.noConflict=function(){$.fn.alert=old
return this}
$(document).on('click.bs.alert.data-api',dismiss,Alert.prototype.close)}(jQuery);+function($){'use strict';var Button=function(element,options){this.$element=$(element)
this.options=$.extend({},Button.DEFAULTS,options)
this.isLoading=false}
Button.VERSION='3.3.5'
Button.DEFAULTS={loadingText:'loading...'}
Button.prototype.setState=function(state){var d='disabled'
var $el=this.$element
var val=$el.is('input')?'val':'html'
var data=$el.data()
state+='Text'
if(data.resetText==null)$el.data('resetText',$el[val]())
setTimeout($.proxy(function(){$el[val](data[state]==null?this.options[state]:data[state])
if(state=='loadingText'){this.isLoading=true
$el.addClass(d).attr(d,d)}else if(this.isLoading){this.isLoading=false
$el.removeClass(d).removeAttr(d)}},this),0)}
Button.prototype.toggle=function(){var changed=true
var $parent=this.$element.closest('[data-toggle="buttons"]')
if($parent.length){var $input=this.$element.find('input')
if($input.prop('type')=='radio'){if($input.prop('checked'))changed=false
$parent.find('.active').removeClass('active')
this.$element.addClass('active')}else if($input.prop('type')=='checkbox'){if(($input.prop('checked'))!==this.$element.hasClass('active'))changed=false
this.$element.toggleClass('active')}
$input.prop('checked',this.$element.hasClass('active'))
if(changed)$input.trigger('change')}else{this.$element.attr('aria-pressed',!this.$element.hasClass('active'))
this.$element.toggleClass('active')}}
function Plugin(option){return this.each(function(){var $this=$(this)
var data=$this.data('bs.button')
var options=typeof option=='object'&&option
if(!data)$this.data('bs.button',(data=new Button(this,options)))
if(option=='toggle')data.toggle()
else if(option)data.setState(option)})}
var old=$.fn.button
$.fn.button=Plugin
$.fn.button.Constructor=Button
$.fn.button.noConflict=function(){$.fn.button=old
return this}
$(document).on('click.bs.button.data-api','[data-toggle^="button"]',function(e){var $btn=$(e.target)
if(!$btn.hasClass('btn'))$btn=$btn.closest('.btn')
Plugin.call($btn,'toggle')
if(!($(e.target).is('input[type="radio"]')||$(e.target).is('input[type="checkbox"]')))e.preventDefault()}).on('focus.bs.button.data-api blur.bs.button.data-api','[data-toggle^="button"]',function(e){$(e.target).closest('.btn').toggleClass('focus',/^focus(in)?$/.test(e.type))})}(jQuery);+function($){'use strict';var Carousel=function(element,options){this.$element=$(element)
this.$indicators=this.$element.find('.carousel-indicators')
this.options=options
this.paused=null
this.sliding=null
this.interval=null
this.$active=null
this.$items=null
this.options.keyboard&&this.$element.on('keydown.bs.carousel',$.proxy(this.keydown,this))
this.options.pause=='hover'&&!('ontouchstart'in document.documentElement)&&this.$element.on('mouseenter.bs.carousel',$.proxy(this.pause,this)).on('mouseleave.bs.carousel',$.proxy(this.cycle,this))}
Carousel.VERSION='3.3.5'
Carousel.TRANSITION_DURATION=600
Carousel.DEFAULTS={interval:5000,pause:'hover',wrap:true,keyboard:true}
Carousel.prototype.keydown=function(e){if(/input|textarea/i.test(e.target.tagName))return
switch(e.which){case 37:this.prev();break
case 39:this.next();break
default:return}
e.preventDefault()}
Carousel.prototype.cycle=function(e){e||(this.paused=false)
this.interval&&clearInterval(this.interval)
this.options.interval&&!this.paused&&(this.interval=setInterval($.proxy(this.next,this),this.options.interval))
return this}
Carousel.prototype.getItemIndex=function(item){this.$items=item.parent().children('.item')
return this.$items.index(item||this.$active)}
Carousel.prototype.getItemForDirection=function(direction,active){var activeIndex=this.getItemIndex(active)
var willWrap=(direction=='prev'&&activeIndex===0)||(direction=='next'&&activeIndex==(this.$items.length-1))
if(willWrap&&!this.options.wrap)return active
var delta=direction=='prev'?-1:1
var itemIndex=(activeIndex+delta)%this.$items.length
return this.$items.eq(itemIndex)}
Carousel.prototype.to=function(pos){var that=this
var activeIndex=this.getItemIndex(this.$active=this.$element.find('.item.active'))
if(pos>(this.$items.length-1)||pos<0)return
if(this.sliding)return this.$element.one('slid.bs.carousel',function(){that.to(pos)})
if(activeIndex==pos)return this.pause().cycle()
return this.slide(pos>activeIndex?'next':'prev',this.$items.eq(pos))}
Carousel.prototype.pause=function(e){e||(this.paused=true)
if(this.$element.find('.next, .prev').length&&$.support.transition){this.$element.trigger($.support.transition.end)
this.cycle(true)}
this.interval=clearInterval(this.interval)
return this}
Carousel.prototype.next=function(){if(this.sliding)return
return this.slide('next')}
Carousel.prototype.prev=function(){if(this.sliding)return
return this.slide('prev')}
Carousel.prototype.slide=function(type,next){var $active=this.$element.find('.item.active')
var $next=next||this.getItemForDirection(type,$active)
var isCycling=this.interval
var direction=type=='next'?'left':'right'
var that=this
if($next.hasClass('active'))return(this.sliding=false)
var relatedTarget=$next[0]
var slideEvent=$.Event('slide.bs.carousel',{relatedTarget:relatedTarget,direction:direction})
this.$element.trigger(slideEvent)
if(slideEvent.isDefaultPrevented())return
this.sliding=true
isCycling&&this.pause()
if(this.$indicators.length){this.$indicators.find('.active').removeClass('active')
var $nextIndicator=$(this.$indicators.children()[this.getItemIndex($next)])
$nextIndicator&&$nextIndicator.addClass('active')}
var slidEvent=$.Event('slid.bs.carousel',{relatedTarget:relatedTarget,direction:direction})
if($.support.transition&&this.$element.hasClass('slide')){$next.addClass(type)
$next[0].offsetWidth
$active.addClass(direction)
$next.addClass(direction)
$active.one('bsTransitionEnd',function(){$next.removeClass([type,direction].join(' ')).addClass('active')
$active.removeClass(['active',direction].join(' '))
that.sliding=false
setTimeout(function(){that.$element.trigger(slidEvent)},0)}).emulateTransitionEnd(Carousel.TRANSITION_DURATION)}else{$active.removeClass('active')
$next.addClass('active')
this.sliding=false
this.$element.trigger(slidEvent)}
isCycling&&this.cycle()
return this}
function Plugin(option){return this.each(function(){var $this=$(this)
var data=$this.data('bs.carousel')
var options=$.extend({},Carousel.DEFAULTS,$this.data(),typeof option=='object'&&option)
var action=typeof option=='string'?option:options.slide
if(!data)$this.data('bs.carousel',(data=new Carousel(this,options)))
if(typeof option=='number')data.to(option)
else if(action)data[action]()
else if(options.interval)data.pause().cycle()})}
var old=$.fn.carousel
$.fn.carousel=Plugin
$.fn.carousel.Constructor=Carousel
$.fn.carousel.noConflict=function(){$.fn.carousel=old
return this}
var clickHandler=function(e){var href
var $this=$(this)
var $target=$($this.attr('data-target')||(href=$this.attr('href'))&&href.replace(/.*(?=#[^\s]+$)/,''))
if(!$target.hasClass('carousel'))return
var options=$.extend({},$target.data(),$this.data())
var slideIndex=$this.attr('data-slide-to')
if(slideIndex)options.interval=false
Plugin.call($target,options)
if(slideIndex){$target.data('bs.carousel').to(slideIndex)}
e.preventDefault()}
$(document).on('click.bs.carousel.data-api','[data-slide]',clickHandler).on('click.bs.carousel.data-api','[data-slide-to]',clickHandler)
$(window).on('load',function(){$('[data-ride="carousel"]').each(function(){var $carousel=$(this)
Plugin.call($carousel,$carousel.data())})})}(jQuery);+function($){'use strict';var Collapse=function(element,options){this.$element=$(element)
this.options=$.extend({},Collapse.DEFAULTS,options)
this.$trigger=$('[data-toggle="collapse"][href="#'+element.id+'"],'+'[data-toggle="collapse"][data-target="#'+element.id+'"]')
this.transitioning=null
if(this.options.parent){this.$parent=this.getParent()}else{this.addAriaAndCollapsedClass(this.$element,this.$trigger)}
if(this.options.toggle)this.toggle()}
Collapse.VERSION='3.3.5'
Collapse.TRANSITION_DURATION=350
Collapse.DEFAULTS={toggle:true}
Collapse.prototype.dimension=function(){var hasWidth=this.$element.hasClass('width')
return hasWidth?'width':'height'}
Collapse.prototype.show=function(){if(this.transitioning||this.$element.hasClass('in'))return
var activesData
var actives=this.$parent&&this.$parent.children('.panel').children('.in, .collapsing')
if(actives&&actives.length){activesData=actives.data('bs.collapse')
if(activesData&&activesData.transitioning)return}
var startEvent=$.Event('show.bs.collapse')
this.$element.trigger(startEvent)
if(startEvent.isDefaultPrevented())return
if(actives&&actives.length){Plugin.call(actives,'hide')
activesData||actives.data('bs.collapse',null)}
var dimension=this.dimension()
this.$element.removeClass('collapse').addClass('collapsing')[dimension](0).attr('aria-expanded',true)
this.$trigger.removeClass('collapsed').attr('aria-expanded',true)
this.transitioning=1
var complete=function(){this.$element.removeClass('collapsing').addClass('collapse in')[dimension]('')
this.transitioning=0
this.$element.trigger('shown.bs.collapse')}
if(!$.support.transition)return complete.call(this)
var scrollSize=$.camelCase(['scroll',dimension].join('-'))
this.$element.one('bsTransitionEnd',$.proxy(complete,this)).emulateTransitionEnd(Collapse.TRANSITION_DURATION)[dimension](this.$element[0][scrollSize])}
Collapse.prototype.hide=function(){if(this.transitioning||!this.$element.hasClass('in'))return
var startEvent=$.Event('hide.bs.collapse')
this.$element.trigger(startEvent)
if(startEvent.isDefaultPrevented())return
var dimension=this.dimension()
this.$element[dimension](this.$element[dimension]())[0].offsetHeight
this.$element.addClass('collapsing').removeClass('collapse in').attr('aria-expanded',false)
this.$trigger.addClass('collapsed').attr('aria-expanded',false)
this.transitioning=1
var complete=function(){this.transitioning=0
this.$element.removeClass('collapsing').addClass('collapse').trigger('hidden.bs.collapse')}
if(!$.support.transition)return complete.call(this)
this.$element
[dimension](0).one('bsTransitionEnd',$.proxy(complete,this)).emulateTransitionEnd(Collapse.TRANSITION_DURATION)}
Collapse.prototype.toggle=function(){this[this.$element.hasClass('in')?'hide':'show']()}
Collapse.prototype.getParent=function(){return $(this.options.parent).find('[data-toggle="collapse"][data-parent="'+this.options.parent+'"]').each($.proxy(function(i,element){var $element=$(element)
this.addAriaAndCollapsedClass(getTargetFromTrigger($element),$element)},this)).end()}
Collapse.prototype.addAriaAndCollapsedClass=function($element,$trigger){var isOpen=$element.hasClass('in')
$element.attr('aria-expanded',isOpen)
$trigger.toggleClass('collapsed',!isOpen).attr('aria-expanded',isOpen)}
function getTargetFromTrigger($trigger){var href
var target=$trigger.attr('data-target')||(href=$trigger.attr('href'))&&href.replace(/.*(?=#[^\s]+$)/,'')
return $(target)}
function Plugin(option){return this.each(function(){var $this=$(this)
var data=$this.data('bs.collapse')
var options=$.extend({},Collapse.DEFAULTS,$this.data(),typeof option=='object'&&option)
if(!data&&options.toggle&&/show|hide/.test(option))options.toggle=false
if(!data)$this.data('bs.collapse',(data=new Collapse(this,options)))
if(typeof option=='string')data[option]()})}
var old=$.fn.collapse
$.fn.collapse=Plugin
$.fn.collapse.Constructor=Collapse
$.fn.collapse.noConflict=function(){$.fn.collapse=old
return this}
$(document).on('click.bs.collapse.data-api','[data-toggle="collapse"]',function(e){var $this=$(this)
if(!$this.attr('data-target'))e.preventDefault()
var $target=getTargetFromTrigger($this)
var data=$target.data('bs.collapse')
var option=data?'toggle':$this.data()
Plugin.call($target,option)})}(jQuery);+function($){'use strict';var backdrop='.dropdown-backdrop'
var toggle='[data-toggle="dropdown"]'
var Dropdown=function(element){$(element).on('click.bs.dropdown',this.toggle)}
Dropdown.VERSION='3.3.5'
function getParent($this){var selector=$this.attr('data-target')
if(!selector){selector=$this.attr('href')
selector=selector&&/#[A-Za-z]/.test(selector)&&selector.replace(/.*(?=#[^\s]*$)/,'')}
var $parent=selector&&$(selector)
return $parent&&$parent.length?$parent:$this.parent()}
function clearMenus(e){if(e&&e.which===3)return
$(backdrop).remove()
$(toggle).each(function(){var $this=$(this)
var $parent=getParent($this)
var relatedTarget={relatedTarget:this}
if(!$parent.hasClass('open'))return
if(e&&e.type=='click'&&/input|textarea/i.test(e.target.tagName)&&$.contains($parent[0],e.target))return
$parent.trigger(e=$.Event('hide.bs.dropdown',relatedTarget))
if(e.isDefaultPrevented())return
$this.attr('aria-expanded','false')
$parent.removeClass('open').trigger('hidden.bs.dropdown',relatedTarget)})}
Dropdown.prototype.toggle=function(e){var $this=$(this)
if($this.is('.disabled, :disabled'))return
var $parent=getParent($this)
var isActive=$parent.hasClass('open')
clearMenus()
if(!isActive){if('ontouchstart'in document.documentElement&&!$parent.closest('.navbar-nav').length){$(document.createElement('div')).addClass('dropdown-backdrop').insertAfter($(this)).on('click',clearMenus)}
var relatedTarget={relatedTarget:this}
$parent.trigger(e=$.Event('show.bs.dropdown',relatedTarget))
if(e.isDefaultPrevented())return
$this.trigger('focus').attr('aria-expanded','true')
$parent.toggleClass('open').trigger('shown.bs.dropdown',relatedTarget)}
return false}
Dropdown.prototype.keydown=function(e){if(!/(38|40|27|32)/.test(e.which)||/input|textarea/i.test(e.target.tagName))return
var $this=$(this)
e.preventDefault()
e.stopPropagation()
if($this.is('.disabled, :disabled'))return
var $parent=getParent($this)
var isActive=$parent.hasClass('open')
if(!isActive&&e.which!=27||isActive&&e.which==27){if(e.which==27)$parent.find(toggle).trigger('focus')
return $this.trigger('click')}
var desc=' li:not(.disabled):visible a'
var $items=$parent.find('.dropdown-menu'+desc)
if(!$items.length)return
var index=$items.index(e.target)
if(e.which==38&&index>0)index--
if(e.which==40&&index<$items.length-1)index++
if(!~index)index=0
$items.eq(index).trigger('focus')}
function Plugin(option){return this.each(function(){var $this=$(this)
var data=$this.data('bs.dropdown')
if(!data)$this.data('bs.dropdown',(data=new Dropdown(this)))
if(typeof option=='string')data[option].call($this)})}
var old=$.fn.dropdown
$.fn.dropdown=Plugin
$.fn.dropdown.Constructor=Dropdown
$.fn.dropdown.noConflict=function(){$.fn.dropdown=old
return this}
$(document).on('click.bs.dropdown.data-api',clearMenus).on('click.bs.dropdown.data-api','.dropdown form',function(e){e.stopPropagation()}).on('click.bs.dropdown.data-api',toggle,Dropdown.prototype.toggle).on('keydown.bs.dropdown.data-api',toggle,Dropdown.prototype.keydown).on('keydown.bs.dropdown.data-api','.dropdown-menu',Dropdown.prototype.keydown)}(jQuery);+function($){'use strict';var Modal=function(element,options){this.options=options
this.$body=$(document.body)
this.$element=$(element)
this.$dialog=this.$element.find('.modal-dialog')
this.$backdrop=null
this.isShown=null
this.originalBodyPad=null
this.scrollbarWidth=0
this.ignoreBackdropClick=false
if(this.options.remote){this.$element.find('.modal-content').load(this.options.remote,$.proxy(function(){this.$element.trigger('loaded.bs.modal')},this))}}
Modal.VERSION='3.3.5'
Modal.TRANSITION_DURATION=300
Modal.BACKDROP_TRANSITION_DURATION=150
Modal.DEFAULTS={backdrop:true,keyboard:true,show:true}
Modal.prototype.toggle=function(_relatedTarget){return this.isShown?this.hide():this.show(_relatedTarget)}
Modal.prototype.show=function(_relatedTarget){var that=this
var e=$.Event('show.bs.modal',{relatedTarget:_relatedTarget})
this.$element.trigger(e)
if(this.isShown||e.isDefaultPrevented())return
this.isShown=true
this.checkScrollbar()
this.setScrollbar()
this.$body.addClass('modal-open')
this.escape()
this.resize()
this.$element.on('click.dismiss.bs.modal','[data-dismiss="modal"]',$.proxy(this.hide,this))
this.$dialog.on('mousedown.dismiss.bs.modal',function(){that.$element.one('mouseup.dismiss.bs.modal',function(e){if($(e.target).is(that.$element))that.ignoreBackdropClick=true})})
this.backdrop(function(){var transition=$.support.transition&&that.$element.hasClass('fade')
if(!that.$element.parent().length){that.$element.appendTo(that.$body)}
that.$element.show().scrollTop(0)
that.adjustDialog()
if(transition){that.$element[0].offsetWidth}
that.$element.addClass('in')
that.enforceFocus()
var e=$.Event('shown.bs.modal',{relatedTarget:_relatedTarget})
transition?that.$dialog.one('bsTransitionEnd',function(){that.$element.trigger('focus').trigger(e)}).emulateTransitionEnd(Modal.TRANSITION_DURATION):that.$element.trigger('focus').trigger(e)})}
Modal.prototype.hide=function(e){if(e)e.preventDefault()
e=$.Event('hide.bs.modal')
this.$element.trigger(e)
if(!this.isShown||e.isDefaultPrevented())return
this.isShown=false
this.escape()
this.resize()
$(document).off('focusin.bs.modal')
this.$element.removeClass('in').off('click.dismiss.bs.modal').off('mouseup.dismiss.bs.modal')
this.$dialog.off('mousedown.dismiss.bs.modal')
$.support.transition&&this.$element.hasClass('fade')?this.$element.one('bsTransitionEnd',$.proxy(this.hideModal,this)).emulateTransitionEnd(Modal.TRANSITION_DURATION):this.hideModal()}
Modal.prototype.enforceFocus=function(){$(document).off('focusin.bs.modal').on('focusin.bs.modal',$.proxy(function(e){if(this.$element[0]!==e.target&&!this.$element.has(e.target).length){this.$element.trigger('focus')}},this))}
Modal.prototype.escape=function(){if(this.isShown&&this.options.keyboard){this.$element.on('keydown.dismiss.bs.modal',$.proxy(function(e){e.which==27&&this.hide()},this))}else if(!this.isShown){this.$element.off('keydown.dismiss.bs.modal')}}
Modal.prototype.resize=function(){if(this.isShown){$(window).on('resize.bs.modal',$.proxy(this.handleUpdate,this))}else{$(window).off('resize.bs.modal')}}
Modal.prototype.hideModal=function(){var that=this
this.$element.hide()
this.backdrop(function(){that.$body.removeClass('modal-open')
that.resetAdjustments()
that.resetScrollbar()
that.$element.trigger('hidden.bs.modal')})}
Modal.prototype.removeBackdrop=function(){this.$backdrop&&this.$backdrop.remove()
this.$backdrop=null}
Modal.prototype.backdrop=function(callback){var that=this
var animate=this.$element.hasClass('fade')?'fade':''
if(this.isShown&&this.options.backdrop){var doAnimate=$.support.transition&&animate
this.$backdrop=$(document.createElement('div')).addClass('modal-backdrop '+animate).appendTo(this.$body)
this.$element.on('click.dismiss.bs.modal',$.proxy(function(e){if(this.ignoreBackdropClick){this.ignoreBackdropClick=false
return}
if(e.target!==e.currentTarget)return
this.options.backdrop=='static'?this.$element[0].focus():this.hide()},this))
if(doAnimate)this.$backdrop[0].offsetWidth
this.$backdrop.addClass('in')
if(!callback)return
doAnimate?this.$backdrop.one('bsTransitionEnd',callback).emulateTransitionEnd(Modal.BACKDROP_TRANSITION_DURATION):callback()}else if(!this.isShown&&this.$backdrop){this.$backdrop.removeClass('in')
var callbackRemove=function(){that.removeBackdrop()
callback&&callback()}
$.support.transition&&this.$element.hasClass('fade')?this.$backdrop.one('bsTransitionEnd',callbackRemove).emulateTransitionEnd(Modal.BACKDROP_TRANSITION_DURATION):callbackRemove()}else if(callback){callback()}}
Modal.prototype.handleUpdate=function(){this.adjustDialog()}
Modal.prototype.adjustDialog=function(){var modalIsOverflowing=this.$element[0].scrollHeight>document.documentElement.clientHeight
this.$element.css({paddingLeft:!this.bodyIsOverflowing&&modalIsOverflowing?this.scrollbarWidth:'',paddingRight:this.bodyIsOverflowing&&!modalIsOverflowing?this.scrollbarWidth:''})}
Modal.prototype.resetAdjustments=function(){this.$element.css({paddingLeft:'',paddingRight:''})}
Modal.prototype.checkScrollbar=function(){var fullWindowWidth=window.innerWidth
if(!fullWindowWidth){var documentElementRect=document.documentElement.getBoundingClientRect()
fullWindowWidth=documentElementRect.right-Math.abs(documentElementRect.left)}
this.bodyIsOverflowing=document.body.clientWidth<fullWindowWidth
this.scrollbarWidth=this.measureScrollbar()}
Modal.prototype.setScrollbar=function(){var bodyPad=parseInt((this.$body.css('padding-right')||0),10)
this.originalBodyPad=document.body.style.paddingRight||''
if(this.bodyIsOverflowing)this.$body.css('padding-right',bodyPad+this.scrollbarWidth)}
Modal.prototype.resetScrollbar=function(){this.$body.css('padding-right',this.originalBodyPad)}
Modal.prototype.measureScrollbar=function(){var scrollDiv=document.createElement('div')
scrollDiv.className='modal-scrollbar-measure'
this.$body.append(scrollDiv)
var scrollbarWidth=scrollDiv.offsetWidth-scrollDiv.clientWidth
this.$body[0].removeChild(scrollDiv)
return scrollbarWidth}
function Plugin(option,_relatedTarget){return this.each(function(){var $this=$(this)
var data=$this.data('bs.modal')
var options=$.extend({},Modal.DEFAULTS,$this.data(),typeof option=='object'&&option)
if(!data)$this.data('bs.modal',(data=new Modal(this,options)))
if(typeof option=='string')data[option](_relatedTarget)
else if(options.show)data.show(_relatedTarget)})}
var old=$.fn.modal
$.fn.modal=Plugin
$.fn.modal.Constructor=Modal
$.fn.modal.noConflict=function(){$.fn.modal=old
return this}
$(document).on('click.bs.modal.data-api','[data-toggle="modal"]',function(e){var $this=$(this)
var href=$this.attr('href')
var $target=$($this.attr('data-target')||(href&&href.replace(/.*(?=#[^\s]+$)/,'')))
var option=$target.data('bs.modal')?'toggle':$.extend({remote:!/#/.test(href)&&href},$target.data(),$this.data())
if($this.is('a'))e.preventDefault()
$target.one('show.bs.modal',function(showEvent){if(showEvent.isDefaultPrevented())return
$target.one('hidden.bs.modal',function(){$this.is(':visible')&&$this.trigger('focus')})})
Plugin.call($target,option,this)})}(jQuery);+function($){'use strict';var Tooltip=function(element,options){this.type=null
this.options=null
this.enabled=null
this.timeout=null
this.hoverState=null
this.$element=null
this.inState=null
this.init('tooltip',element,options)}
Tooltip.VERSION='3.3.5'
Tooltip.TRANSITION_DURATION=150
Tooltip.DEFAULTS={animation:true,placement:'top',selector:false,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:'hover focus',title:'',delay:0,html:false,container:false,viewport:{selector:'body',padding:0}}
Tooltip.prototype.init=function(type,element,options){this.enabled=true
this.type=type
this.$element=$(element)
this.options=this.getOptions(options)
this.$viewport=this.options.viewport&&$($.isFunction(this.options.viewport)?this.options.viewport.call(this,this.$element):(this.options.viewport.selector||this.options.viewport))
this.inState={click:false,hover:false,focus:false}
if(this.$element[0]instanceof document.constructor&&!this.options.selector){throw new Error('`selector` option must be specified when initializing '+this.type+' on the window.document object!')}
var triggers=this.options.trigger.split(' ')
for(var i=triggers.length;i--;){var trigger=triggers[i]
if(trigger=='click'){this.$element.on('click.'+this.type,this.options.selector,$.proxy(this.toggle,this))}else if(trigger!='manual'){var eventIn=trigger=='hover'?'mouseenter':'focusin'
var eventOut=trigger=='hover'?'mouseleave':'focusout'
this.$element.on(eventIn+'.'+this.type,this.options.selector,$.proxy(this.enter,this))
this.$element.on(eventOut+'.'+this.type,this.options.selector,$.proxy(this.leave,this))}}
this.options.selector?(this._options=$.extend({},this.options,{trigger:'manual',selector:''})):this.fixTitle()}
Tooltip.prototype.getDefaults=function(){return Tooltip.DEFAULTS}
Tooltip.prototype.getOptions=function(options){options=$.extend({},this.getDefaults(),this.$element.data(),options)
if(options.delay&&typeof options.delay=='number'){options.delay={show:options.delay,hide:options.delay}}
return options}
Tooltip.prototype.getDelegateOptions=function(){var options={}
var defaults=this.getDefaults()
this._options&&$.each(this._options,function(key,value){if(defaults[key]!=value)options[key]=value})
return options}
Tooltip.prototype.enter=function(obj){var self=obj instanceof this.constructor?obj:$(obj.currentTarget).data('bs.'+this.type)
if(!self){self=new this.constructor(obj.currentTarget,this.getDelegateOptions())
$(obj.currentTarget).data('bs.'+this.type,self)}
if(obj instanceof $.Event){self.inState[obj.type=='focusin'?'focus':'hover']=true}
if(self.tip().hasClass('in')||self.hoverState=='in'){self.hoverState='in'
return}
clearTimeout(self.timeout)
self.hoverState='in'
if(!self.options.delay||!self.options.delay.show)return self.show()
self.timeout=setTimeout(function(){if(self.hoverState=='in')self.show()},self.options.delay.show)}
Tooltip.prototype.isInStateTrue=function(){for(var key in this.inState){if(this.inState[key])return true}
return false}
Tooltip.prototype.leave=function(obj){var self=obj instanceof this.constructor?obj:$(obj.currentTarget).data('bs.'+this.type)
if(!self){self=new this.constructor(obj.currentTarget,this.getDelegateOptions())
$(obj.currentTarget).data('bs.'+this.type,self)}
if(obj instanceof $.Event){self.inState[obj.type=='focusout'?'focus':'hover']=false}
if(self.isInStateTrue())return
clearTimeout(self.timeout)
self.hoverState='out'
if(!self.options.delay||!self.options.delay.hide)return self.hide()
self.timeout=setTimeout(function(){if(self.hoverState=='out')self.hide()},self.options.delay.hide)}
Tooltip.prototype.show=function(){var e=$.Event('show.bs.'+this.type)
if(this.hasContent()&&this.enabled){this.$element.trigger(e)
var inDom=$.contains(this.$element[0].ownerDocument.documentElement,this.$element[0])
if(e.isDefaultPrevented()||!inDom)return
var that=this
var $tip=this.tip()
var tipId=this.getUID(this.type)
this.setContent()
$tip.attr('id',tipId)
this.$element.attr('aria-describedby',tipId)
if(this.options.animation)$tip.addClass('fade')
var placement=typeof this.options.placement=='function'?this.options.placement.call(this,$tip[0],this.$element[0]):this.options.placement
var autoToken=/\s?auto?\s?/i
var autoPlace=autoToken.test(placement)
if(autoPlace)placement=placement.replace(autoToken,'')||'top'
$tip.detach().css({top:0,left:0,display:'block'}).addClass(placement).data('bs.'+this.type,this)
this.options.container?$tip.appendTo(this.options.container):$tip.insertAfter(this.$element)
this.$element.trigger('inserted.bs.'+this.type)
var pos=this.getPosition()
var actualWidth=$tip[0].offsetWidth
var actualHeight=$tip[0].offsetHeight
if(autoPlace){var orgPlacement=placement
var viewportDim=this.getPosition(this.$viewport)
placement=placement=='bottom'&&pos.bottom+actualHeight>viewportDim.bottom?'top':placement=='top'&&pos.top-actualHeight<viewportDim.top?'bottom':placement=='right'&&pos.right+actualWidth>viewportDim.width?'left':placement=='left'&&pos.left-actualWidth<viewportDim.left?'right':placement
$tip.removeClass(orgPlacement).addClass(placement)}
var calculatedOffset=this.getCalculatedOffset(placement,pos,actualWidth,actualHeight)
this.applyPlacement(calculatedOffset,placement)
var complete=function(){var prevHoverState=that.hoverState
that.$element.trigger('shown.bs.'+that.type)
that.hoverState=null
if(prevHoverState=='out')that.leave(that)}
$.support.transition&&this.$tip.hasClass('fade')?$tip.one('bsTransitionEnd',complete).emulateTransitionEnd(Tooltip.TRANSITION_DURATION):complete()}}
Tooltip.prototype.applyPlacement=function(offset,placement){var $tip=this.tip()
var width=$tip[0].offsetWidth
var height=$tip[0].offsetHeight
var marginTop=parseInt($tip.css('margin-top'),10)
var marginLeft=parseInt($tip.css('margin-left'),10)
if(isNaN(marginTop))marginTop=0
if(isNaN(marginLeft))marginLeft=0
offset.top+=marginTop
offset.left+=marginLeft
$.offset.setOffset($tip[0],$.extend({using:function(props){$tip.css({top:Math.round(props.top),left:Math.round(props.left)})}},offset),0)
$tip.addClass('in')
var actualWidth=$tip[0].offsetWidth
var actualHeight=$tip[0].offsetHeight
if(placement=='top'&&actualHeight!=height){offset.top=offset.top+height-actualHeight}
var delta=this.getViewportAdjustedDelta(placement,offset,actualWidth,actualHeight)
if(delta.left)offset.left+=delta.left
else offset.top+=delta.top
var isVertical=/top|bottom/.test(placement)
var arrowDelta=isVertical?delta.left*2-width+actualWidth:delta.top*2-height+actualHeight
var arrowOffsetPosition=isVertical?'offsetWidth':'offsetHeight'
$tip.offset(offset)
this.replaceArrow(arrowDelta,$tip[0][arrowOffsetPosition],isVertical)}
Tooltip.prototype.replaceArrow=function(delta,dimension,isVertical){this.arrow().css(isVertical?'left':'top',50*(1-delta/dimension)+'%').css(isVertical?'top':'left','')}
Tooltip.prototype.setContent=function(){var $tip=this.tip()
var title=this.getTitle()
$tip.find('.tooltip-inner')[this.options.html?'html':'text'](title)
$tip.removeClass('fade in top bottom left right')}
Tooltip.prototype.hide=function(callback){var that=this
var $tip=$(this.$tip)
var e=$.Event('hide.bs.'+this.type)
function complete(){if(that.hoverState!='in')$tip.detach()
that.$element.removeAttr('aria-describedby').trigger('hidden.bs.'+that.type)
callback&&callback()}
this.$element.trigger(e)
if(e.isDefaultPrevented())return
$tip.removeClass('in')
$.support.transition&&$tip.hasClass('fade')?$tip.one('bsTransitionEnd',complete).emulateTransitionEnd(Tooltip.TRANSITION_DURATION):complete()
this.hoverState=null
return this}
Tooltip.prototype.fixTitle=function(){var $e=this.$element
if($e.attr('title')||typeof $e.attr('data-original-title')!='string'){$e.attr('data-original-title',$e.attr('title')||'').attr('title','')}}
Tooltip.prototype.hasContent=function(){return this.getTitle()}
Tooltip.prototype.getPosition=function($element){$element=$element||this.$element
var el=$element[0]
var isBody=el.tagName=='BODY'
var elRect=el.getBoundingClientRect()
if(elRect.width==null){elRect=$.extend({},elRect,{width:elRect.right-elRect.left,height:elRect.bottom-elRect.top})}
var elOffset=isBody?{top:0,left:0}:$element.offset()
var scroll={scroll:isBody?document.documentElement.scrollTop||document.body.scrollTop:$element.scrollTop()}
var outerDims=isBody?{width:$(window).width(),height:$(window).height()}:null
return $.extend({},elRect,scroll,outerDims,elOffset)}
Tooltip.prototype.getCalculatedOffset=function(placement,pos,actualWidth,actualHeight){return placement=='bottom'?{top:pos.top+pos.height,left:pos.left+pos.width/2-actualWidth/2}:placement=='top'?{top:pos.top-actualHeight,left:pos.left+pos.width/2-actualWidth/2}:placement=='left'?{top:pos.top+pos.height/2-actualHeight/2,left:pos.left-actualWidth}:{top:pos.top+pos.height/2-actualHeight/2,left:pos.left+pos.width}}
Tooltip.prototype.getViewportAdjustedDelta=function(placement,pos,actualWidth,actualHeight){var delta={top:0,left:0}
if(!this.$viewport)return delta
var viewportPadding=this.options.viewport&&this.options.viewport.padding||0
var viewportDimensions=this.getPosition(this.$viewport)
if(/right|left/.test(placement)){var topEdgeOffset=pos.top-viewportPadding-viewportDimensions.scroll
var bottomEdgeOffset=pos.top+viewportPadding-viewportDimensions.scroll+actualHeight
if(topEdgeOffset<viewportDimensions.top){delta.top=viewportDimensions.top-topEdgeOffset}else if(bottomEdgeOffset>viewportDimensions.top+viewportDimensions.height){delta.top=viewportDimensions.top+viewportDimensions.height-bottomEdgeOffset}}else{var leftEdgeOffset=pos.left-viewportPadding
var rightEdgeOffset=pos.left+viewportPadding+actualWidth
if(leftEdgeOffset<viewportDimensions.left){delta.left=viewportDimensions.left-leftEdgeOffset}else if(rightEdgeOffset>viewportDimensions.right){delta.left=viewportDimensions.left+viewportDimensions.width-rightEdgeOffset}}
return delta}
Tooltip.prototype.getTitle=function(){var title
var $e=this.$element
var o=this.options
title=$e.attr('data-original-title')||(typeof o.title=='function'?o.title.call($e[0]):o.title)
return title}
Tooltip.prototype.getUID=function(prefix){do prefix+=~~(Math.random()*1000000)
while(document.getElementById(prefix))
return prefix}
Tooltip.prototype.tip=function(){if(!this.$tip){this.$tip=$(this.options.template)
if(this.$tip.length!=1){throw new Error(this.type+' `template` option must consist of exactly 1 top-level element!')}}
return this.$tip}
Tooltip.prototype.arrow=function(){return(this.$arrow=this.$arrow||this.tip().find('.tooltip-arrow'))}
Tooltip.prototype.enable=function(){this.enabled=true}
Tooltip.prototype.disable=function(){this.enabled=false}
Tooltip.prototype.toggleEnabled=function(){this.enabled=!this.enabled}
Tooltip.prototype.toggle=function(e){var self=this
if(e){self=$(e.currentTarget).data('bs.'+this.type)
if(!self){self=new this.constructor(e.currentTarget,this.getDelegateOptions())
$(e.currentTarget).data('bs.'+this.type,self)}}
if(e){self.inState.click=!self.inState.click
if(self.isInStateTrue())self.enter(self)
else self.leave(self)}else{self.tip().hasClass('in')?self.leave(self):self.enter(self)}}
Tooltip.prototype.destroy=function(){var that=this
clearTimeout(this.timeout)
this.hide(function(){that.$element.off('.'+that.type).removeData('bs.'+that.type)
if(that.$tip){that.$tip.detach()}
that.$tip=null
that.$arrow=null
that.$viewport=null})}
function Plugin(option){return this.each(function(){var $this=$(this)
var data=$this.data('bs.tooltip')
var options=typeof option=='object'&&option
if(!data&&/destroy|hide/.test(option))return
if(!data)$this.data('bs.tooltip',(data=new Tooltip(this,options)))
if(typeof option=='string')data[option]()})}
var old=$.fn.tooltip
$.fn.tooltip=Plugin
$.fn.tooltip.Constructor=Tooltip
$.fn.tooltip.noConflict=function(){$.fn.tooltip=old
return this}}(jQuery);+function($){'use strict';var Popover=function(element,options){this.init('popover',element,options)}
if(!$.fn.tooltip)throw new Error('Popover requires tooltip.js')
Popover.VERSION='3.3.5'
Popover.DEFAULTS=$.extend({},$.fn.tooltip.Constructor.DEFAULTS,{placement:'right',trigger:'click',content:'',template:'<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'})
Popover.prototype=$.extend({},$.fn.tooltip.Constructor.prototype)
Popover.prototype.constructor=Popover
Popover.prototype.getDefaults=function(){return Popover.DEFAULTS}
Popover.prototype.setContent=function(){var $tip=this.tip()
var title=this.getTitle()
var content=this.getContent()
$tip.find('.popover-title')[this.options.html?'html':'text'](title)
$tip.find('.popover-content').children().detach().end()[this.options.html?(typeof content=='string'?'html':'append'):'text'](content)
$tip.removeClass('fade top bottom left right in')
if(!$tip.find('.popover-title').html())$tip.find('.popover-title').hide()}
Popover.prototype.hasContent=function(){return this.getTitle()||this.getContent()}
Popover.prototype.getContent=function(){var $e=this.$element
var o=this.options
return $e.attr('data-content')||(typeof o.content=='function'?o.content.call($e[0]):o.content)}
Popover.prototype.arrow=function(){return(this.$arrow=this.$arrow||this.tip().find('.arrow'))}
function Plugin(option){return this.each(function(){var $this=$(this)
var data=$this.data('bs.popover')
var options=typeof option=='object'&&option
if(!data&&/destroy|hide/.test(option))return
if(!data)$this.data('bs.popover',(data=new Popover(this,options)))
if(typeof option=='string')data[option]()})}
var old=$.fn.popover
$.fn.popover=Plugin
$.fn.popover.Constructor=Popover
$.fn.popover.noConflict=function(){$.fn.popover=old
return this}}(jQuery);+function($){'use strict';function ScrollSpy(element,options){this.$body=$(document.body)
this.$scrollElement=$(element).is(document.body)?$(window):$(element)
this.options=$.extend({},ScrollSpy.DEFAULTS,options)
this.selector=(this.options.target||'')+' .nav li > a'
this.offsets=[]
this.targets=[]
this.activeTarget=null
this.scrollHeight=0
this.$scrollElement.on('scroll.bs.scrollspy',$.proxy(this.process,this))
this.refresh()
this.process()}
ScrollSpy.VERSION='3.3.5'
ScrollSpy.DEFAULTS={offset:10}
ScrollSpy.prototype.getScrollHeight=function(){return this.$scrollElement[0].scrollHeight||Math.max(this.$body[0].scrollHeight,document.documentElement.scrollHeight)}
ScrollSpy.prototype.refresh=function(){var that=this
var offsetMethod='offset'
var offsetBase=0
this.offsets=[]
this.targets=[]
this.scrollHeight=this.getScrollHeight()
if(!$.isWindow(this.$scrollElement[0])){offsetMethod='position'
offsetBase=this.$scrollElement.scrollTop()}
this.$body.find(this.selector).map(function(){var $el=$(this)
var href=$el.data('target')||$el.attr('href')
var $href=/^#./.test(href)&&$(href)
return($href&&$href.length&&$href.is(':visible')&&[[$href[offsetMethod]().top+offsetBase,href]])||null}).sort(function(a,b){return a[0]-b[0]}).each(function(){that.offsets.push(this[0])
that.targets.push(this[1])})}
ScrollSpy.prototype.process=function(){var scrollTop=this.$scrollElement.scrollTop()+this.options.offset
var scrollHeight=this.getScrollHeight()
var maxScroll=this.options.offset+scrollHeight-this.$scrollElement.height()
var offsets=this.offsets
var targets=this.targets
var activeTarget=this.activeTarget
var i
if(this.scrollHeight!=scrollHeight){this.refresh()}
if(scrollTop>=maxScroll){return activeTarget!=(i=targets[targets.length-1])&&this.activate(i)}
if(activeTarget&&scrollTop<offsets[0]){this.activeTarget=null
return this.clear()}
for(i=offsets.length;i--;){activeTarget!=targets[i]&&scrollTop>=offsets[i]&&(offsets[i+1]===undefined||scrollTop<offsets[i+1])&&this.activate(targets[i])}}
ScrollSpy.prototype.activate=function(target){this.activeTarget=target
this.clear()
var selector=this.selector+'[data-target="'+target+'"],'+
this.selector+'[href="'+target+'"]'
var active=$(selector).parents('li').addClass('active')
if(active.parent('.dropdown-menu').length){active=active.closest('li.dropdown').addClass('active')}
active.trigger('activate.bs.scrollspy')}
ScrollSpy.prototype.clear=function(){$(this.selector).parentsUntil(this.options.target,'.active').removeClass('active')}
function Plugin(option){return this.each(function(){var $this=$(this)
var data=$this.data('bs.scrollspy')
var options=typeof option=='object'&&option
if(!data)$this.data('bs.scrollspy',(data=new ScrollSpy(this,options)))
if(typeof option=='string')data[option]()})}
var old=$.fn.scrollspy
$.fn.scrollspy=Plugin
$.fn.scrollspy.Constructor=ScrollSpy
$.fn.scrollspy.noConflict=function(){$.fn.scrollspy=old
return this}
$(window).on('load.bs.scrollspy.data-api',function(){$('[data-spy="scroll"]').each(function(){var $spy=$(this)
Plugin.call($spy,$spy.data())})})}(jQuery);+function($){'use strict';var Tab=function(element){this.element=$(element)}
Tab.VERSION='3.3.5'
Tab.TRANSITION_DURATION=150
Tab.prototype.show=function(){var $this=this.element
var $ul=$this.closest('ul:not(.dropdown-menu)')
var selector=$this.data('target')
if(!selector){selector=$this.attr('href')
selector=selector&&selector.replace(/.*(?=#[^\s]*$)/,'')}
if($this.parent('li').hasClass('active'))return
var $previous=$ul.find('.active:last a')
var hideEvent=$.Event('hide.bs.tab',{relatedTarget:$this[0]})
var showEvent=$.Event('show.bs.tab',{relatedTarget:$previous[0]})
$previous.trigger(hideEvent)
$this.trigger(showEvent)
if(showEvent.isDefaultPrevented()||hideEvent.isDefaultPrevented())return
var $target=$(selector)
this.activate($this.closest('li'),$ul)
this.activate($target,$target.parent(),function(){$previous.trigger({type:'hidden.bs.tab',relatedTarget:$this[0]})
$this.trigger({type:'shown.bs.tab',relatedTarget:$previous[0]})})}
Tab.prototype.activate=function(element,container,callback){var $active=container.find('> .active')
var transition=callback&&$.support.transition&&($active.length&&$active.hasClass('fade')||!!container.find('> .fade').length)
function next(){$active.removeClass('active').find('> .dropdown-menu > .active').removeClass('active').end().find('[data-toggle="tab"]').attr('aria-expanded',false)
element.addClass('active').find('[data-toggle="tab"]').attr('aria-expanded',true)
if(transition){element[0].offsetWidth
element.addClass('in')}else{element.removeClass('fade')}
if(element.parent('.dropdown-menu').length){element.closest('li.dropdown').addClass('active').end().find('[data-toggle="tab"]').attr('aria-expanded',true)}
callback&&callback()}
$active.length&&transition?$active.one('bsTransitionEnd',next).emulateTransitionEnd(Tab.TRANSITION_DURATION):next()
$active.removeClass('in')}
function Plugin(option){return this.each(function(){var $this=$(this)
var data=$this.data('bs.tab')
if(!data)$this.data('bs.tab',(data=new Tab(this)))
if(typeof option=='string')data[option]()})}
var old=$.fn.tab
$.fn.tab=Plugin
$.fn.tab.Constructor=Tab
$.fn.tab.noConflict=function(){$.fn.tab=old
return this}
var clickHandler=function(e){e.preventDefault()
Plugin.call($(this),'show')}
$(document).on('click.bs.tab.data-api','[data-toggle="tab"]',clickHandler).on('click.bs.tab.data-api','[data-toggle="pill"]',clickHandler)}(jQuery);+function($){'use strict';var Affix=function(element,options){this.options=$.extend({},Affix.DEFAULTS,options)
this.$target=$(this.options.target).on('scroll.bs.affix.data-api',$.proxy(this.checkPosition,this)).on('click.bs.affix.data-api',$.proxy(this.checkPositionWithEventLoop,this))
this.$element=$(element)
this.affixed=null
this.unpin=null
this.pinnedOffset=null
this.checkPosition()}
Affix.VERSION='3.3.5'
Affix.RESET='affix affix-top affix-bottom'
Affix.DEFAULTS={offset:0,target:window}
Affix.prototype.getState=function(scrollHeight,height,offsetTop,offsetBottom){var scrollTop=this.$target.scrollTop()
var position=this.$element.offset()
var targetHeight=this.$target.height()
if(offsetTop!=null&&this.affixed=='top')return scrollTop<offsetTop?'top':false
if(this.affixed=='bottom'){if(offsetTop!=null)return(scrollTop+this.unpin<=position.top)?false:'bottom'
return(scrollTop+targetHeight<=scrollHeight-offsetBottom)?false:'bottom'}
var initializing=this.affixed==null
var colliderTop=initializing?scrollTop:position.top
var colliderHeight=initializing?targetHeight:height
if(offsetTop!=null&&scrollTop<=offsetTop)return'top'
if(offsetBottom!=null&&(colliderTop+colliderHeight>=scrollHeight-offsetBottom))return'bottom'
return false}
Affix.prototype.getPinnedOffset=function(){if(this.pinnedOffset)return this.pinnedOffset
this.$element.removeClass(Affix.RESET).addClass('affix')
var scrollTop=this.$target.scrollTop()
var position=this.$element.offset()
return(this.pinnedOffset=position.top-scrollTop)}
Affix.prototype.checkPositionWithEventLoop=function(){setTimeout($.proxy(this.checkPosition,this),1)}
Affix.prototype.checkPosition=function(){if(!this.$element.is(':visible'))return
var height=this.$element.height()
var offset=this.options.offset
var offsetTop=offset.top
var offsetBottom=offset.bottom
var scrollHeight=Math.max($(document).height(),$(document.body).height())
if(typeof offset!='object')offsetBottom=offsetTop=offset
if(typeof offsetTop=='function')offsetTop=offset.top(this.$element)
if(typeof offsetBottom=='function')offsetBottom=offset.bottom(this.$element)
var affix=this.getState(scrollHeight,height,offsetTop,offsetBottom)
if(this.affixed!=affix){if(this.unpin!=null)this.$element.css('top','')
var affixType='affix'+(affix?'-'+affix:'')
var e=$.Event(affixType+'.bs.affix')
this.$element.trigger(e)
if(e.isDefaultPrevented())return
this.affixed=affix
this.unpin=affix=='bottom'?this.getPinnedOffset():null
this.$element.removeClass(Affix.RESET).addClass(affixType).trigger(affixType.replace('affix','affixed')+'.bs.affix')}
if(affix=='bottom'){this.$element.offset({top:scrollHeight-height-offsetBottom})}}
function Plugin(option){return this.each(function(){var $this=$(this)
var data=$this.data('bs.affix')
var options=typeof option=='object'&&option
if(!data)$this.data('bs.affix',(data=new Affix(this,options)))
if(typeof option=='string')data[option]()})}
var old=$.fn.affix
$.fn.affix=Plugin
$.fn.affix.Constructor=Affix
$.fn.affix.noConflict=function(){$.fn.affix=old
return this}
$(window).on('load',function(){$('[data-spy="affix"]').each(function(){var $spy=$(this)
var data=$spy.data()
data.offset=data.offset||{}
if(data.offsetBottom!=null)data.offset.bottom=data.offsetBottom
if(data.offsetTop!=null)data.offset.top=data.offsetTop
Plugin.call($spy,data)})})}(jQuery);;
(function($){$.expr[":"].notmdproc=function(obj){if($(obj).data("mdproc")){return false;}else{return true;}};function _isChar(evt){if(typeof evt.which=="undefined"){return true;}else if(typeof evt.which=="number"&&evt.which>0){return!evt.ctrlKey&&!evt.metaKey&&!evt.altKey&&evt.which!=8&&evt.which!=9;}
return false;}
$.material={"options":{"input":true,"ripples":true,"checkbox":true,"togglebutton":true,"radio":true,"arrive":true,"autofill":false,"withRipples":[".btn:not(.btn-link)",".card-image",".navbar a:not(.withoutripple)",".dropdown-menu a",".nav-tabs a:not(.withoutripple)",".withripple"].join(","),"inputElements":"input.form-control, textarea.form-control, select.form-control","checkboxElements":".checkbox > label > input[type=checkbox]","togglebuttonElements":".togglebutton > label > input[type=checkbox]","radioElements":".radio > label > input[type=radio]"},"checkbox":function(selector){$((selector)?selector:this.options.checkboxElements).filter(":notmdproc").data("mdproc",true).after("<span class=checkbox-material><span class=check></span></span>");},"togglebutton":function(selector){$((selector)?selector:this.options.togglebuttonElements).filter(":notmdproc").data("mdproc",true).after("<span class=toggle></span>");},"radio":function(selector){$((selector)?selector:this.options.radioElements).filter(":notmdproc").data("mdproc",true).after("<span class=circle></span><span class=check></span>");},"input":function(selector){$((selector)?selector:this.options.inputElements).filter(":notmdproc").data("mdproc",true).each(function(){var $this=$(this);if(!$(this).attr("data-hint")&&!$this.hasClass("floating-label")){return;}
$this.wrap("<div class=form-control-wrapper></div>");$this.after("<span class=material-input></span>");if($this.hasClass("floating-label")){var placeholder=$this.attr("placeholder");$this.attr("placeholder",null).removeClass("floating-label");$this.after("<div class=floating-label>"+placeholder+"</div>");}
if($this.attr("data-hint")){$this.after("<div class=hint>"+$this.attr("data-hint")+"</div>");}
if($this.val()===null||$this.val()=="undefined"||$this.val()===""){$this.addClass("empty");}
if($this.parent().next().is("[type=file]")){$this.parent().addClass("fileinput");var $input=$this.parent().next().detach();$this.after($input);}});$(document).on("change",".checkbox input[type=checkbox]",function(){$(this).blur();}).on("keydown paste",".form-control",function(e){if(_isChar(e)){$(this).removeClass("empty");}}).on("keyup change",".form-control",function(){var $this=$(this);if($this.val()===""&&(typeof $this[0].checkValidity!="undefined"&&$this[0].checkValidity())){$this.addClass("empty");}else{$this.removeClass("empty");}}).on("focus",".form-control-wrapper.fileinput",function(){$(this).find("input").addClass("focus");}).on("blur",".form-control-wrapper.fileinput",function(){$(this).find("input").removeClass("focus");}).on("change",".form-control-wrapper.fileinput [type=file]",function(){var value="";$.each($(this)[0].files,function(i,file){value+=file.name+", ";});value=value.substring(0,value.length-2);if(value){$(this).prev().removeClass("empty");}else{$(this).prev().addClass("empty");}
$(this).prev().val(value);});},"ripples":function(selector){$((selector)?selector:this.options.withRipples).ripples();},"autofill":function(){var loading=setInterval(function(){$("input[type!=checkbox]").each(function(){if($(this).val()&&$(this).val()!==$(this).attr("value")){$(this).trigger("change");}});},100);setTimeout(function(){clearInterval(loading);},10000);var focused;$(document).on("focus","input",function(){var $inputs=$(this).parents("form").find("input").not("[type=file]");focused=setInterval(function(){$inputs.each(function(){if($(this).val()!==$(this).attr("value")){$(this).trigger("change");}});},100);}).on("blur","input",function(){clearInterval(focused);});},"init":function(){if($.fn.ripples&&this.options.ripples){this.ripples();}
if(this.options.input){this.input();}
if(this.options.checkbox){this.checkbox();}
if(this.options.togglebutton){this.togglebutton();}
if(this.options.radio){this.radio();}
if(this.options.autofill){this.autofill();}
if(document.arrive&&this.options.arrive){if($.fn.ripples&&this.options.ripples){$(document).arrive(this.options.withRipples,function(){$.material.ripples($(this));});}
if(this.options.input){$(document).arrive(this.options.inputElements,function(){$.material.input($(this));});}
if(this.options.checkbox){$(document).arrive(this.options.checkboxElements,function(){$.material.checkbox($(this));});}
if(this.options.radio){$(document).arrive(this.options.radioElements,function(){$.material.radio($(this));});}
if(this.options.togglebutton){$(document).arrive(this.options.togglebuttonElements,function(){$.material.togglebutton($(this));});}}}};})(jQuery);;
(function(){var Favico=(function(opt){'use strict';opt=(opt)?opt:{};var _def={bgColor:'#d00',textColor:'#fff',fontFamily:'sans-serif',fontStyle:'bold',type:'circle',position:'down',animation:'slide',elementId:false,dataUrl:false};var _opt,_orig,_h,_w,_canvas,_context,_img,_ready,_lastBadge,_running,_readyCb,_stop,_browser,_animTimeout,_drawTimeout;_browser={};_browser.ff=typeof InstallTrigger!='undefined';_browser.chrome=!!window.chrome;_browser.opera=!!window.opera||navigator.userAgent.indexOf('Opera')>=0;_browser.ie=false;_browser.safari=Object.prototype.toString.call(window.HTMLElement).indexOf('Constructor')>0;_browser.supported=(_browser.chrome||_browser.ff||_browser.opera);var _queue=[];_readyCb=function(){};_ready=_stop=false;var init=function(){_opt=merge(_def,opt);_opt.bgColor=hexToRgb(_opt.bgColor);_opt.textColor=hexToRgb(_opt.textColor);_opt.position=_opt.position.toLowerCase();_opt.animation=(animation.types[''+_opt.animation])?_opt.animation:_def.animation;var isUp=_opt.position.indexOf('up')>-1;var isLeft=_opt.position.indexOf('left')>-1;if(isUp||isLeft){for(var i=0;i<animation.types[''+_opt.animation].length;i++){var step=animation.types[''+_opt.animation][i];if(isUp){if(step.y<0.6){step.y=step.y-0.4;}else{step.y=step.y-2*step.y+(1-step.w);}}
if(isLeft){if(step.x<0.6){step.x=step.x-0.4;}else{step.x=step.x-2*step.x+(1-step.h);}}
animation.types[''+_opt.animation][i]=step;}}
_opt.type=(type[''+_opt.type])?_opt.type:_def.type;_orig=link.getIcon();_canvas=document.createElement('canvas');_img=document.createElement('img');if(_orig.hasAttribute('href')){_img.setAttribute('src',_orig.getAttribute('href'));_img.onload=function(){_h=(_img.height>0)?_img.height:32;_w=(_img.width>0)?_img.width:32;_canvas.height=_h;_canvas.width=_w;_context=_canvas.getContext('2d');icon.ready();};}else{_img.setAttribute('src','');_h=32;_w=32;_img.height=_h;_img.width=_w;_canvas.height=_h;_canvas.width=_w;_context=_canvas.getContext('2d');icon.ready();}};var icon={};icon.ready=function(){_ready=true;icon.reset();_readyCb();};icon.reset=function(){if(!_ready){return;}
_queue=[];_lastBadge=false;_running=false;_context.clearRect(0,0,_w,_h);_context.drawImage(_img,0,0,_w,_h);link.setIcon(_canvas);window.clearTimeout(_animTimeout);window.clearTimeout(_drawTimeout);};icon.start=function(){if(!_ready||_running){return;}
var finished=function(){_lastBadge=_queue[0];_running=false;if(_queue.length>0){_queue.shift();icon.start();}else{}};if(_queue.length>0){_running=true;var run=function(){['type','animation','bgColor','textColor','fontFamily','fontStyle'].forEach(function(a){if(a in _queue[0].options){_opt[a]=_queue[0].options[a];}});animation.run(_queue[0].options,function(){finished();},false);};if(_lastBadge){animation.run(_lastBadge.options,function(){run();},true);}else{run();}}};var type={};var options=function(opt){opt.n=((typeof opt.n)==='number')?Math.abs(opt.n|0):opt.n;opt.x=_w*opt.x;opt.y=_h*opt.y;opt.w=_w*opt.w;opt.h=_h*opt.h;opt.len=(""+opt.n).length;return opt;};type.circle=function(opt){opt=options(opt);var more=false;if(opt.len===2){opt.x=opt.x-opt.w*0.4;opt.w=opt.w*1.4;more=true;}else if(opt.len>=3){opt.x=opt.x-opt.w*0.65;opt.w=opt.w*1.65;more=true;}
_context.clearRect(0,0,_w,_h);_context.drawImage(_img,0,0,_w,_h);_context.beginPath();_context.font=_opt.fontStyle+" "+Math.floor(opt.h*(opt.n>99?0.85:1))+"px "+_opt.fontFamily;_context.textAlign='center';if(more){_context.moveTo(opt.x+opt.w/2,opt.y);_context.lineTo(opt.x+opt.w-opt.h/2,opt.y);_context.quadraticCurveTo(opt.x+opt.w,opt.y,opt.x+opt.w,opt.y+opt.h/2);_context.lineTo(opt.x+opt.w,opt.y+opt.h-opt.h/2);_context.quadraticCurveTo(opt.x+opt.w,opt.y+opt.h,opt.x+opt.w-opt.h/2,opt.y+opt.h);_context.lineTo(opt.x+opt.h/2,opt.y+opt.h);_context.quadraticCurveTo(opt.x,opt.y+opt.h,opt.x,opt.y+opt.h-opt.h/2);_context.lineTo(opt.x,opt.y+opt.h/2);_context.quadraticCurveTo(opt.x,opt.y,opt.x+opt.h/2,opt.y);}else{_context.arc(opt.x+opt.w/2,opt.y+opt.h/2,opt.h/2,0,2*Math.PI);}
_context.fillStyle='rgba('+_opt.bgColor.r+','+_opt.bgColor.g+','+_opt.bgColor.b+','+opt.o+')';_context.fill();_context.closePath();_context.beginPath();_context.stroke();_context.fillStyle='rgba('+_opt.textColor.r+','+_opt.textColor.g+','+_opt.textColor.b+','+opt.o+')';if((typeof opt.n)==='number'&&opt.n>999){_context.fillText(((opt.n>9999)?9:Math.floor(opt.n/1000))+'k+',Math.floor(opt.x+opt.w/2),Math.floor(opt.y+opt.h-opt.h*0.2));}else{_context.fillText(opt.n,Math.floor(opt.x+opt.w/2),Math.floor(opt.y+opt.h-opt.h*0.15));}
_context.closePath();};type.rectangle=function(opt){opt=options(opt);var more=false;if(opt.len===2){opt.x=opt.x-opt.w*0.4;opt.w=opt.w*1.4;more=true;}else if(opt.len>=3){opt.x=opt.x-opt.w*0.65;opt.w=opt.w*1.65;more=true;}
_context.clearRect(0,0,_w,_h);_context.drawImage(_img,0,0,_w,_h);_context.beginPath();_context.font=_opt.fontStyle+" "+Math.floor(opt.h*(opt.n>99?0.9:1))+"px "+_opt.fontFamily;_context.textAlign='center';_context.fillStyle='rgba('+_opt.bgColor.r+','+_opt.bgColor.g+','+_opt.bgColor.b+','+opt.o+')';_context.fillRect(opt.x,opt.y,opt.w,opt.h);_context.fillStyle='rgba('+_opt.textColor.r+','+_opt.textColor.g+','+_opt.textColor.b+','+opt.o+')';if((typeof opt.n)==='number'&&opt.n>999){_context.fillText(((opt.n>9999)?9:Math.floor(opt.n/1000))+'k+',Math.floor(opt.x+opt.w/2),Math.floor(opt.y+opt.h-opt.h*0.2));}else{_context.fillText(opt.n,Math.floor(opt.x+opt.w/2),Math.floor(opt.y+opt.h-opt.h*0.15));}
_context.closePath();};var badge=function(number,opts){opts=((typeof opts)==='string'?{animation:opts}:opts)||{};_readyCb=function(){try{if(typeof(number)==='number'?(number>0):(number!=='')){var q={type:'badge',options:{n:number}};if('animation'in opts&&animation.types[''+opts.animation]){q.options.animation=''+opts.animation;}
if('type'in opts&&type[''+opts.type]){q.options.type=''+opts.type;}
['bgColor','textColor'].forEach(function(o){if(o in opts){q.options[o]=hexToRgb(opts[o]);}});['fontStyle','fontFamily'].forEach(function(o){if(o in opts){q.options[o]=opts[o];}});_queue.push(q);if(_queue.length>100){throw'Too many badges requests in queue.';}
icon.start();}else{icon.reset();}}catch(e){throw'Error setting badge. Message: '+e.message;}};if(_ready){_readyCb();}};var image=function(imageElement){_readyCb=function(){try{var w=imageElement.width;var h=imageElement.height;var newImg=document.createElement('img');var ratio=(w/_w<h/_h)?(w/_w):(h/_h);newImg.setAttribute('src',imageElement.getAttribute('src'));newImg.height=(h/ratio);newImg.width=(w/ratio);_context.clearRect(0,0,_w,_h);_context.drawImage(newImg,0,0,_w,_h);link.setIcon(_canvas);}catch(e){throw'Error setting image. Message: '+e.message;}};if(_ready){_readyCb();}};var video=function(videoElement){_readyCb=function(){try{if(videoElement==='stop'){_stop=true;icon.reset();_stop=false;return;}
videoElement.addEventListener('play',function(){drawVideo(this);},false);}catch(e){throw'Error setting video. Message: '+e.message;}};if(_ready){_readyCb();}};var webcam=function(action){if(!window.URL||!window.URL.createObjectURL){window.URL=window.URL||{};window.URL.createObjectURL=function(obj){return obj;};}
if(_browser.supported){var newVideo=false;navigator.getUserMedia=navigator.getUserMedia||navigator.oGetUserMedia||navigator.msGetUserMedia||navigator.mozGetUserMedia||navigator.webkitGetUserMedia;_readyCb=function(){try{if(action==='stop'){_stop=true;icon.reset();_stop=false;return;}
newVideo=document.createElement('video');newVideo.width=_w;newVideo.height=_h;navigator.getUserMedia({video:true,audio:false},function(stream){newVideo.src=URL.createObjectURL(stream);newVideo.play();drawVideo(newVideo);},function(){});}catch(e){throw'Error setting webcam. Message: '+e.message;}};if(_ready){_readyCb();}}};function drawVideo(video){if(video.paused||video.ended||_stop){return false;}
try{_context.clearRect(0,0,_w,_h);_context.drawImage(video,0,0,_w,_h);}catch(e){}
_drawTimeout=setTimeout(drawVideo,animation.duration,video);link.setIcon(_canvas);}
var link={};link.getIcon=function(){var elm=false;var getLink=function(){var link=document.getElementsByTagName('head')[0].getElementsByTagName('link');for(var l=link.length,i=(l-1);i>=0;i--){if((/(^|\s)icon(\s|$)/i).test(link[i].getAttribute('rel'))){return link[i];}}
return false;};if(_opt.element){elm=_opt.element;}else if(_opt.elementId){elm=document.getElementById(_opt.elementId);elm.setAttribute('href',elm.getAttribute('src'));}else{elm=getLink();if(elm===false){elm=document.createElement('link');elm.setAttribute('rel','icon');document.getElementsByTagName('head')[0].appendChild(elm);}}
elm.setAttribute('type','image/png');return elm;};link.setIcon=function(canvas){var url=canvas.toDataURL('image/png');if(_opt.dataUrl){_opt.dataUrl(url);}
if(_opt.element){_opt.element.setAttribute('src',url);}else if(_opt.elementId){document.getElementById(_opt.elementId).setAttribute('src',url);}else{if(_browser.ff||_browser.opera){var old=_orig;_orig=document.createElement('link');if(_browser.opera){_orig.setAttribute('rel','icon');}
_orig.setAttribute('rel','icon');_orig.setAttribute('type','image/png');document.getElementsByTagName('head')[0].appendChild(_orig);_orig.setAttribute('href',url);if(old.parentNode){old.parentNode.removeChild(old);}}else{_orig.setAttribute('href',url);}}};function hexToRgb(hex){var shorthandRegex=/^#?([a-f\d])([a-f\d])([a-f\d])$/i;hex=hex.replace(shorthandRegex,function(m,r,g,b){return r+r+g+g+b+b;});var result=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);return result?{r:parseInt(result[1],16),g:parseInt(result[2],16),b:parseInt(result[3],16)}:false;}
function merge(def,opt){var mergedOpt={};var attrname;for(attrname in def){mergedOpt[attrname]=def[attrname];}
for(attrname in opt){mergedOpt[attrname]=opt[attrname];}
return mergedOpt;}
function isPageHidden(){return document.hidden||document.msHidden||document.webkitHidden||document.mozHidden;}
var animation={};animation.duration=40;animation.types={};animation.types.fade=[{x:0.4,y:0.4,w:0.6,h:0.6,o:0.0},{x:0.4,y:0.4,w:0.6,h:0.6,o:0.1},{x:0.4,y:0.4,w:0.6,h:0.6,o:0.2},{x:0.4,y:0.4,w:0.6,h:0.6,o:0.3},{x:0.4,y:0.4,w:0.6,h:0.6,o:0.4},{x:0.4,y:0.4,w:0.6,h:0.6,o:0.5},{x:0.4,y:0.4,w:0.6,h:0.6,o:0.6},{x:0.4,y:0.4,w:0.6,h:0.6,o:0.7},{x:0.4,y:0.4,w:0.6,h:0.6,o:0.8},{x:0.4,y:0.4,w:0.6,h:0.6,o:0.9},{x:0.4,y:0.4,w:0.6,h:0.6,o:1.0}];animation.types.none=[{x:0.4,y:0.4,w:0.6,h:0.6,o:1}];animation.types.pop=[{x:1,y:1,w:0,h:0,o:1},{x:0.9,y:0.9,w:0.1,h:0.1,o:1},{x:0.8,y:0.8,w:0.2,h:0.2,o:1},{x:0.7,y:0.7,w:0.3,h:0.3,o:1},{x:0.6,y:0.6,w:0.4,h:0.4,o:1},{x:0.5,y:0.5,w:0.5,h:0.5,o:1},{x:0.4,y:0.4,w:0.6,h:0.6,o:1}];animation.types.popFade=[{x:0.75,y:0.75,w:0,h:0,o:0},{x:0.65,y:0.65,w:0.1,h:0.1,o:0.2},{x:0.6,y:0.6,w:0.2,h:0.2,o:0.4},{x:0.55,y:0.55,w:0.3,h:0.3,o:0.6},{x:0.50,y:0.50,w:0.4,h:0.4,o:0.8},{x:0.45,y:0.45,w:0.5,h:0.5,o:0.9},{x:0.4,y:0.4,w:0.6,h:0.6,o:1}];animation.types.slide=[{x:0.4,y:1,w:0.6,h:0.6,o:1},{x:0.4,y:0.9,w:0.6,h:0.6,o:1},{x:0.4,y:0.9,w:0.6,h:0.6,o:1},{x:0.4,y:0.8,w:0.6,h:0.6,o:1},{x:0.4,y:0.7,w:0.6,h:0.6,o:1},{x:0.4,y:0.6,w:0.6,h:0.6,o:1},{x:0.4,y:0.5,w:0.6,h:0.6,o:1},{x:0.4,y:0.4,w:0.6,h:0.6,o:1}];animation.run=function(opt,cb,revert,step){var animationType=animation.types[isPageHidden()?'none':_opt.animation];if(revert===true){step=(typeof step!=='undefined')?step:animationType.length-1;}else{step=(typeof step!=='undefined')?step:0;}
cb=(cb)?cb:function(){};if((step<animationType.length)&&(step>=0)){type[_opt.type](merge(opt,animationType[step]));_animTimeout=setTimeout(function(){if(revert){step=step-1;}else{step=step+1;}
animation.run(opt,cb,revert,step);},animation.duration);link.setIcon(_canvas);}else{cb();return;}};init();return{badge:badge,video:video,image:image,webcam:webcam,reset:icon.reset,browser:{supported:_browser.supported}};});if(typeof define!=='undefined'&&define.amd){define([],function(){return Favico;});}
else if(typeof module!=='undefined'&&module.exports){module.exports=Favico;}
else{this.Favico=Favico;}})();;
(function($,window,document,undefined){"use strict";var ripples="ripples";var self=null;var defaults={};function Ripples(element,options){self=this;this.element=$(element);this.options=$.extend({},defaults,options);this._defaults=defaults;this._name=ripples;this.init();}
Ripples.prototype.init=function(){var $element=this.element;$element.on("mousedown touchstart",function(event){if(self.isTouch()&&event.type==="mousedown"){return;}
if(!($element.find(".ripple-wrapper").length)){$element.append("<div class=\"ripple-wrapper\"></div>");}
var $wrapper=$element.children(".ripple-wrapper");var relY=self.getRelY($wrapper,event);var relX=self.getRelX($wrapper,event);if(!relY&&!relX){return;}
var rippleColor=self.getRipplesColor($element);var $ripple=$("<div></div>");$ripple.addClass("ripple").css({"left":relX,"top":relY,"background-color":rippleColor});$wrapper.append($ripple);(function(){return window.getComputedStyle($ripple[0]).opacity;})();self.rippleOn($element,$ripple);setTimeout(function(){self.rippleEnd($ripple);},500);$element.on("mouseup mouseleave touchend",function(){$ripple.data("mousedown","off");if($ripple.data("animating")==="off"){self.rippleOut($ripple);}});});};Ripples.prototype.getNewSize=function($element,$ripple){return(Math.max($element.outerWidth(),$element.outerHeight())/$ripple.outerWidth())*2.5;};Ripples.prototype.getRelX=function($wrapper,event){var wrapperOffset=$wrapper.offset();if(!self.isTouch()){return event.pageX-wrapperOffset.left;}else{event=event.originalEvent;if(event.touches.length===1){return event.touches[0].pageX-wrapperOffset.left;}
return false;}};Ripples.prototype.getRelY=function($wrapper,event){var wrapperOffset=$wrapper.offset();if(!self.isTouch()){return event.pageY-wrapperOffset.top;}else{event=event.originalEvent;if(event.touches.length===1){return event.touches[0].pageY-wrapperOffset.top;}
return false;}};Ripples.prototype.getRipplesColor=function($element){var color=$element.data("ripple-color")?$element.data("ripple-color"):window.getComputedStyle($element[0]).color;return color;};Ripples.prototype.hasTransitionSupport=function(){var thisBody=document.body||document.documentElement;var thisStyle=thisBody.style;var support=(thisStyle.transition!==undefined||thisStyle.WebkitTransition!==undefined||thisStyle.MozTransition!==undefined||thisStyle.MsTransition!==undefined||thisStyle.OTransition!==undefined);return support;};Ripples.prototype.isTouch=function(){return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);};Ripples.prototype.rippleEnd=function($ripple){$ripple.data("animating","off");if($ripple.data("mousedown")==="off"){self.rippleOut($ripple);}};Ripples.prototype.rippleOut=function($ripple){$ripple.off();if(self.hasTransitionSupport()){$ripple.addClass("ripple-out");}else{$ripple.animate({"opacity":0},100,function(){$ripple.trigger("transitionend");});}
$ripple.on("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd",function(){$ripple.remove();});};Ripples.prototype.rippleOn=function($element,$ripple){var size=self.getNewSize($element,$ripple);if(self.hasTransitionSupport()){$ripple.css({"-ms-transform":"scale("+size+")","-moz-transform":"scale("+size+")","-webkit-transform":"scale("+size+")","transform":"scale("+size+")"}).addClass("ripple-on").data("animating","on").data("mousedown","on");}else{$ripple.animate({"width":Math.max($element.outerWidth(),$element.outerHeight())*2,"height":Math.max($element.outerWidth(),$element.outerHeight())*2,"margin-left":Math.max($element.outerWidth(),$element.outerHeight())*(-1),"margin-top":Math.max($element.outerWidth(),$element.outerHeight())*(-1),"opacity":0.2},500,function(){$ripple.trigger("transitionend");});}};$.fn.ripples=function(options){return this.each(function(){if(!$.data(this,"plugin_"+ripples)){$.data(this,"plugin_"+ripples,new Ripples(this,options));}});};})(jQuery,window,document);;
$(document).ready(function(){$('#coupon-form-show').on('click',function(){$('#coupon-form-show').fadeOut(250,'swing',function(){$('#coupon-form').fadeIn(250,'swing',function(){$('input#coupon').focus();});});});if($('#view-invoices').length>0){$('#make-invoice').click(function(){$('#make-invoice').hide();$('#add-invoice').fadeIn().promise().done(function(){$("html, body").animate({scrollTop:$(document).height()},"slow");});$('#ci-details').hide();$('#ci-btn-make-invoice').attr('disabled','disabled');});$('#ci-service').on('change',function(){if($(this).find(':selected').val()==''){console.log('slept');$('#ci-details').fadeOut();return;}
var $disabled=false;$('.has-error').removeClass('has-error');$('#ci-details:visible').hide().fadeIn().promise().done(function(){$("html, body").animate({scrollTop:$(document).height()},"slow");});$('#ci-details:hidden').fadeIn();$('#es-invoicing-site-id').val($(this).find(':selected').val());$('#es-invoicing-name').val($(this).find(':selected').data('name'));$('#es-invoicing-address').val($(this).find(':selected').data('address'));$('#es-invoicing-country').val($(this).find(':selected').data('country'));$('#es-invoicing-code').val($(this).find(':selected').data('code'));$('#es-invoicing-vat').val($(this).find(':selected').data('vat'));$('#es-invoicing-invoicing_cycle').val($(this).find(':selected').data('invoicing_cycle'));$('#invoices-btn-change-info').attr('href',config.url.home+'sites/edit/'+$(this).val()+'#invoicing');if(!$('#es-invoicing-name').val()){$disabled=true;$('#es-invoicing-name').parent('.form-group').addClass('has-error');}
if(!$('#es-invoicing-address').val()){$disabled=true;$('#es-invoicing-address').parent('.form-group').addClass('has-error');}
if(!$('#es-invoicing-country').val()){$disabled=true;$('#es-invoicing-country').parent('.form-group').addClass('has-error');}
if(!$('#es-invoicing-invoicing_cycle').val()){$disabled=true;$('#es-invoicing-invoicing_cycle').parent('.form-group').addClass('has-error');}
if($disabled){$('#ci-btn-make-invoice').attr('disabled','disabled');}else{$('#ci-btn-make-invoice').removeAttr('disabled');}});}});;
$(document).ready(function(){if($('#modal-site-add').length){$('#modal-site-add').on('show.bs.modal',function(){$('#f-site-add')[0].reset();$('#f-site-add').find('.glyphicon-remove, .glyphicon-ok, .has-error, .has-success').each(function(){$(this).removeClass('glyphicon-remove').removeClass('glyphicon-ok').removeClass('has-success').removeClass('has-error');});function validate_site_add_form(){$url=$('#mas-url').val();if($url.indexOf('.')==-1||$url.slice(-1)=='.'){$('#mas-url').parent('.form-group').removeClass('has-success').addClass('has-error').find('.form-control-feedback').removeClass('glyphicon-ok').addClass('glyphicon-remove').show();return false;}else{$('#mas-url').parent('.form-group').removeClass('has-error').addClass('has-success').find('.form-control-feedback').removeClass('glyphicon-remove').addClass('glyphicon-ok').show();return true;}}
$('#mas-url').on('change keyup',function(){validate_site_add_form();});$('#f-site-add').on('submit',function(e){if(window.e){window.e.returnValue=false;}else{e.preventDefault();};$url=$('#mas-url').val();if(validate_site_add_form){$.post(config.url.home+'ajax/site_insert',{url:$url},function(data){location.href=config.url.home+'sites';});}});});}});;
$(document).ready(function(){if($('#f-site-edit').length){$('#site-earn-referral-link-yes').on('click',function(){var $this=$(this);$this.finish();$this.css('paddingTop','0px');$this.css('fontSize','34px');$this.css('color','red');$this.animate({paddingTop:'328px',fontSize:14},1000,function(){$this.css('color','#bdb8ad');});});$fSiteEditSerialize=$('#f-site-edit').serialize();$('#f-site-edit').on('submit',function(e){if(window.e){window.e.returnValue=false;}else{e.preventDefault();}
if($('#f-site-edit').serialize()==$fSiteEditSerialize){$('#saved').clearQueue().fadeIn().delay(1500).fadeOut();return;}
$fSiteEditSerialize=$('#f-site-edit').serialize();var request={site_id:$('#es-site-id').val(),site_name:$('#es-name').val(),allow_domain:$('#es-allow_domain').val(),notifications_email:$('#sede').val(),notifications_emails_option:$('[name="send_emails"]:checked').val(),widget_color_color:$('#widget-color-color').val(),widget_color_backgroundColor:$('#widget-color-backgroundColor').val(),widget_color_iframe_backgroundColor:$('#widget-color-iframe_backgroundColor').val(),chat_color_bg_color:$('#chat-color-bg_color').val(),chat_color_btn_color:$('#chat-color-btn_color').val(),chat_color_btn_backgroundColor:$('#chat-color-btn_backgroundColor').val(),chat_color_sent_bg:$('#chat-color-sent_bg').val(),chat_color_sent_color:$('#chat-color-sent_color').val(),chat_color_received_bg:$('#chat-color-received_bg').val(),chat_color_received_color:$('#chat-color-received_color').val(),chat_color_sending_bg:$('#chat-color-sending_bg').val(),chat_color_sending_color:$('#chat-color-sending_color').val(),chat_color_seen_color:$('#chat-color-seen_color').val(),trls_0:$('input[name=trls_0]').val(),trls_1:$('input[name=trls_1]').val(),trls_2:$('input[name=trls_2]').val(),trls_3:$('input[name=trls_3]').val(),trls_4:$('input[name=trls_4]').val(),trls_5:$('input[name=trls_5]').val(),trls_6:$('input[name=trls_6]').val(),trls_7:$('input[name=trls_7]').val(),trls_8:$('input[name=trls_8]').val(),trls_9:$('input[name=trls_9]').val(),trls_10:$('input[name=trls_10]').val(),trls_11:$('input[name=trls_11]').val(),trls_12:$('input[name=trls_12]').val(),trls_13:$('input[name=trls_13]').val(),trls_14:$('input[name=trls_14]').val(),trls_15:$('input[name=trls_15]').val(),trls_16:$('input[name=trls_16]').val(),trls_17:$('input[name=trls_17]').val()};$.post(config.url.home+'ajax/site_save',request,function(data){if(data.error!==null&&data.error!==undefined){var _tmp=$('#saved').find('p').text();$('#saved').find('p').text('Error! '+data.error.hint);$('#saved').clearQueue().fadeIn().delay(3500).fadeOut(function(){$('#saved').find('p').text(_tmp);});}else{$('#saved').clearQueue().fadeIn().delay(1500).fadeOut();}});});}});;
$(document).ready(function(){if($('#f-site-edit-invoicing').length){if($('#es-invoicing-invoicing_cycle').length){$('#es-invoicing-invoicing_cycle').val($('#es-invoicing-invoicing_cycle').data('value'));}
$fSiteEditInvoicingSerialize=$('#f-site-edit-invoicing').serialize();$('#f-site-edit-invoicing').on('submit',function(e){if(window.e){window.e.returnValue=false;}else{e.preventDefault();}
if($('#f-site-edit-invoicing').serialize()==$fSiteEditInvoicingSerialize){$('#saved').clearQueue().fadeIn().delay(1500).fadeOut();return;}
$fSiteEditInvoicingSerialize=$('#f-site-edit').serialize();var request={site_id:$('#es-invoicing-site-id').val(),name:$('#es-invoicing-name').val(),address:$('#es-invoicing-address').val(),country:$('#es-invoicing-country').val(),code:$('#es-invoicing-code').val(),vat:$('#es-invoicing-vat').val(),invoicing_cycle:$('#es-invoicing-invoicing_cycle').val()};$.post(config.url.home+'ajax/site_save_invoicing',request,function(data){if(data.error!==null&&data.error!==undefined){var _tmp=$('#saved').find('p').text();$('#saved').find('p').text('Error! '+data.error.hint);$('#saved').clearQueue().fadeIn().delay(3500).fadeOut(function(){$('#saved').find('p').text(_tmp);});}else{$('#saved').clearQueue().fadeIn().delay(1500).fadeOut();}});});}});;
$(document).ready(function(){if($('#f-site-edit-earn').length){$('#f-site-edit-earn').on('submit',function(e){if(window.e){window.e.returnValue=false;}else{e.preventDefault();}
$input=$('#f-site-edit-earn').serialize();console.log($input);$.post(config.url.home+'ajax/site_save_earning',$input,function(data){if(data.error!==null&&data.error!==undefined){var _tmp=$('#saved').find('p').text();$('#saved').find('p').text('Error! '+data.error.hint);$('#saved').clearQueue().fadeIn().delay(3500).fadeOut(function(){$('#saved').find('p').text(_tmp);});}else{$('#saved').clearQueue().fadeIn().delay(1500).fadeOut();}});});}});;
$(document).ready(function(){$('.m-add-agent').on('click',function(){$site_id=$(this).data('site-id');$('#f-sites-new-agent')[0].reset();$('#modal-site-add-agent').find('#mna-site').val($site_id);});});;
$(document).ready(function(){if($('#modal-site-edit-agent').length){$('#modal-site-edit-agent').on('show.bs.modal',function(e){$('#f-sites-edit-agent')[0].reset();$t=$(e.relatedTarget);if($t.data('admins-count')<=1&&$t.data('acl')=='admin'){$('#mea-acl-block').hide();$('#mea-btn-delete').hide();}else{$('#mea-acl-block').show();$('#mea-btn-delete').show();}
$('#mea-name').val($t.data('name'));$('#mea-site-id').val($t.data('site-id'));$('#mea-agent-id').val($t.data('agent-id'));if($t.data('acl')=='admin'){$('#mea-acl_role_agent').prop('checked',false);$('#mea-acl_role_admin').prop('checked',true);}else{$('#mea-acl_role_admin').prop('checked',false);$('#mea-acl_role_agent').prop('checked',true);}
function validate_meaf(){return true;}
$('#f-sites-edit-agent').on('submit keyup',function(e){if(e.type=='submit'){$('#mea-name').val($.trim($('#mea-name').val()));}
if(!validate_meaf()){if(window.e){window.e.returnValue=false;}else{e.preventDefault();}}
return true;});});}});;
$(document).ready(function(){if($('#m-edit-trigger').length){$('#m-edit-trigger').on('show.bs.modal',function(e){$('#f-edit-trigger')[0].reset();$t=$(e.relatedTarget);if($('.activate-popover').length){$('.activate-popover').each(function(){$(this).popover();});}
$('#f-edit-trigger').find('.glyphicon-remove, .glyphicon-ok, .has-error, .has-success').each(function(){$(this).removeClass('glyphicon-remove').removeClass('glyphicon-ok').removeClass('has-success').removeClass('has-error');});$('#mte-site-id').val($t.data('site-id'));$('#auto_message').val($t.data('message'));$('#mte-trigger-id').val($t.data('trigger-id'));$('#mte-btn-delete').attr('href',$('#mte-btn-delete').attr('href').split('?')[0]+'?delete_trigger='+$t.data('trigger-id'));$('#m-title-trigger-name').text($t.data('name'));$('#m-trigger-name').attr('value',$t.data('name'));$('#contact_form_name').on('change',function(){if(!this.checked){$('#contact_form_name_required').prop('checked',false);}});$('#contact_form_email').on('change',function(){if(!this.checked){$('#contact_form_email_required').prop('checked',false);}});$('#contact_form_phone').on('change',function(){if(!this.checked){$('#contact_form_phone_required').prop('checked',false);}});$('#contact_form_name_required').on('change',function(){if(this.checked){$('#contact_form_name').prop('checked',true);}});$('#contact_form_email_required').on('change',function(){if(this.checked){$('#contact_form_email').prop('checked',true);}});$('#contact_form_phone_required').on('change',function(){if(this.checked){$('#contact_form_phone').prop('checked',true);}});function update_show(params){i=params.i;condition_selected=params.condition_selected;switch(condition_selected){case'on_site':$('#value_con'+i+'_messages_count').hide();$('#value_con'+i+'_on_site').show();$('#value_con'+i+'_scroll_from_top').hide();$('#value_con'+i+'_agent_on').hide();$('#value_con'+i+'_page_url_contains').hide();$('#value_con'+i+'_client_waits_for').hide();if(params.new_value!=undefined){$('#on_site_value_'+i).val(params.new_value);}
if($('#on_site_value_'+i).val()==''){$('#on_site_value_'+i).val(30);}
break;case'messages_count':$('#value_con'+i+'_messages_count').show();$('#value_con'+i+'_on_site').hide();$('#value_con'+i+'_scroll_from_top').hide();$('#value_con'+i+'_agent_on').hide();$('#value_con'+i+'_page_url_contains').hide();$('#value_con'+i+'_client_waits_for').hide();if(params.new_value!=undefined){$('#messages_count_value_'+i).val(params.new_value);}
if($('#messages_count_value_'+i).val()==''){$('#messages_count_value_'+i).val(0);}
break;case'agent_on':$('#value_con'+i+'_messages_count').hide();$('#value_con'+i+'_agent_on').show();$('#value_con'+i+'_scroll_from_top').hide();$('#value_con'+i+'_on_site').hide();$('#value_con'+i+'_page_url_contains').hide();$('#value_con'+i+'_client_waits_for').hide();if(params.new_value!=undefined){if(params.new_value==1){$('#agent_on_value_'+i).prop('checked',true);$('#agent_off_value_'+i).prop('checked',false);}else{$('#agent_on_value_'+i).prop('checked',false);$('#agent_off_value_'+i).prop('checked',true);}}
break;case'page_url_contains':$('#value_con'+i+'_messages_count').hide();$('#value_con'+i+'_page_url_contains').show();$('#value_con'+i+'_scroll_from_top').hide();$('#value_con'+i+'_on_site').hide();$('#value_con'+i+'_agent_on').hide();$('#value_con'+i+'_client_waits_for').hide();if(params.new_value!=undefined){$('#page_url_contains_value_'+i).val(params.new_value);}
break;case'scroll_from_top':$('#value_con'+i+'_messages_count').hide();$('#value_con'+i+'_scroll_from_top').show();$('#value_con'+i+'_on_site').hide();$('#value_con'+i+'_agent_on').hide();$('#value_con'+i+'_page_url_contains').hide();$('#value_con'+i+'_client_waits_for').hide();if(params.new_value!=undefined){$('#scroll_from_top_value_'+i).val(params.new_value);}
break;case'client_waits_for':$('#value_con'+i+'_messages_count').hide();$('#value_con'+i+'_client_waits_for').show();$('#value_con'+i+'_scroll_from_top').hide();$('#value_con'+i+'_on_site').hide();$('#value_con'+i+'_agent_on').hide();$('#value_con'+i+'_page_url_contains').hide();if(params.new_value!=undefined){$('#client_waits_for_value_'+i).val(params.new_value);}
break;default:$('#value_con'+i+'_messages_count').hide();$('#value_con'+i+'_client_waits_for').hide();$('#value_con'+i+'_scroll_from_top').hide();$('#value_con'+i+'_on_site').hide();$('#value_con'+i+'_agent_on').hide();$('#value_con'+i+'_page_url_contains').hide();$('#value_con'+i+'_client_waits_for').hide();break;}}
function update_show2(params){value=params.value;switch(value){case'messages_count':$('#messages_count').show();$('#send_message').hide();$('#send_message_hello').hide();$('#send_message_busy').hide();$('#show_contacts_form').hide();break;case'send_message':$('#messages_count').hide();$('#send_message').show();$('#send_message_hello').hide();$('#send_message_busy').hide();$('#show_contacts_form').hide();break;case'send_message_hello':$('#messages_count').hide();$('#send_message').hide();$('#send_message_hello').show();$('#send_message_busy').hide();$('#show_contacts_form').hide();break;case'send_message_busy':$('#messages_count').hide();$('#send_message').hide();$('#send_message_hello').hide();$('#send_message_busy').show();$('#show_contacts_form').hide();break;case'show_contacts_form':$('#messages_count').hide();$('#send_message').hide();$('#send_message_hello').hide();$('#send_message_busy').hide();$('#show_contacts_form').show();break;}
if(params.update_value){$('#trigger-action').val(value);}}
for(var i=1;i<=4;i++){if($t.data('c'+i+'-condition')&&$t.data('c'+i+'-value')!==undefined){$('#condition_'+i).val($t.data('c'+i+'-condition'));update_show({'i':i,'condition_selected':$t.data('c'+i+'-condition'),'new_value':$t.data('c'+i+'-value')});}}
update_show2({value:$t.data('action'),update_value:true});for(var i=1;i<=4;i++){$('#condition_'+i).on('change',function(){i=$(this).data('i');update_show({'i':i,'condition_selected':$(this).val()});});}
$('#trigger-action').on('change',function(){update_show2({value:$(this).val()});});$('#f-edit-trigger').find('[type="number"]').each(function(){$(this).on('change keyup',function(e){if($.trim($(e.target).val())==''){$(e.target).val('0');}});});});if(location.search==='?st=last'){if($('.btn-te').length>0){$('.btn-te').last().trigger('click');}}}});;
$(document).ready(function(){if($('#m-site-install-instructions').length){$('#m-site-install-instructions').on('show.bs.modal',function(e){$('#m-site-install-instructions-f')[0].reset();$t=$(e.relatedTarget);$('#m-sii-ctc').val($('#m-sii-ctc').val().replace('__SITE_ID__',$t.data('site-id')));});}});;
$(document).ready(function(){var paletes={blue:{"chat":{"bg_color":"#ffffff","btn_color":"#ffffff","btn_backgroundColor":"#44749d","sent_bg":"#ebe7e0","sent_color":"#615b4e","received_bg":"#c6d4e1","received_color":"#325674","sending_bg":"#bdb8ad","sending_color":"#f3f1ed","seen_color":"#bdb8ad"},"widget":{"color":"#ffffff","backgroundColor":"#44749d","iframe_backgroundColor":"#ffffff"}},blue2:{"chat":{"bg_color":"#ffffff","btn_color":"#FFFFFF","btn_backgroundColor":"#335795","sent_bg":"#3D62B3","sent_color":"#ffffff","received_bg":"#899ECB","received_color":"#FFFFFF","sending_bg":"#6D8BC9","sending_color":"#ffffff","seen_color":"#899ECB"},"widget":{"color":"#FFFFFF","backgroundColor":"#335795","iframe_backgroundColor":"#ffffff"}},yellow:{"chat":{"bg_color":"#ffffff","btn_color":"#574d4f","btn_backgroundColor":"#ffd952","sent_bg":"#969091","sent_color":"#ffffff","received_bg":"#ffd952","received_color":"#574d4f","sending_bg":"#ffe999","sending_color":"#969091","seen_color":"#969091"},"widget":{"color":"#574d4f","backgroundColor":"#ffd952","iframe_backgroundColor":"#ffffff"}},green:{"chat":{"bg_color":"#ffffff","btn_color":"#F8FEE9","btn_backgroundColor":"#293127","sent_bg":"#3E6617","sent_color":"#F8FEE9","received_bg":"#C4E661","received_color":"#293127","sending_bg":"#D5F6B8","sending_color":"#293127","seen_color":"#3E6617"},"widget":{"color":"#D5F6B8","backgroundColor":"#3E6617","iframe_backgroundColor":"#ffffff"}},violet:{"chat":{"bg_color":"#ffffff","btn_color":"#CAD7B2","btn_backgroundColor":"#5D4157","sent_bg":"#CAD7B2","sent_color":"#5D4157","received_bg":"#A8CABA","received_color":"#5D4157","sending_bg":"#EBE3AA","sending_color":"#5D4157","seen_color":"#838689"},"widget":{"color":"#CAD7B2","backgroundColor":"#5D4157","iframe_backgroundColor":"#ffffff"}},violet2:{"chat":{"bg_color":"#ffffff","btn_color":"#ffffff","btn_backgroundColor":"#6d08a4","sent_bg":"#e9ebeb","sent_color":"#6d08a4","received_bg":"#b9d504","received_color":"#220022","sending_bg":"#ccd0d0","sending_color":"#6d08a4","seen_color":"#cbcfcf"},"widget":{"color":"#ffffff","backgroundColor":"#6d08a4","iframe_backgroundColor":"#ffffff"}},pink:{"chat":{"bg_color":"#ffffff","btn_color":"#FFFFFF","btn_backgroundColor":"#FB72A4","sent_bg":"#FB72A4","sent_color":"#FFFFFF","received_bg":"#FFCDDF","received_color":"#F71668","sending_bg":"#FFF6CF","sending_color":"#F71668","seen_color":"#FB72A4"},"widget":{"color":"#FFFFFF","backgroundColor":"#FB72A4","iframe_backgroundColor":"#ffffff"}},brown:{"chat":{"bg_color":"#ffffff","btn_color":"#F1D4AF","btn_backgroundColor":"#774F38","sent_bg":"#C8C8A9","sent_color":"#774F38","received_bg":"#E08E79","received_color":"#ffffff","sending_bg":"#83AF9B","sending_color":"#ffffff","seen_color":"#3E6617"},"widget":{"color":"#F1D4AF","backgroundColor":"#774F38","iframe_backgroundColor":"#ffffff"}},red:{"chat":{"bg_color":"#ffffff","btn_color":"#fffefe","btn_backgroundColor":"#F03C02","sent_bg":"#A30006","sent_color":"#fffefe","received_bg":"#C21A01","received_color":"#fffefe","sending_bg":"#C21A01","sending_color":"#ffeeee","seen_color":"#C21A01"},"widget":{"color":"#fffefe","backgroundColor":"#F03C02","iframe_backgroundColor":"#ffffff"}}};$("#f-site-edit .color-input").each(function(){var $this=$(this);$this.spectrum({move:function(){$this.val($this.spectrum('get').toHexString()).trigger('change');},flat:false,showInput:true,showInitial:true,allowEmpty:false,showAlpha:false,disabled:false,showPalette:true,showSelectionPalette:true,clickoutFiresChange:true,cancelText:'Cancel',chooseText:'Select',preferredFormat:'hex',palette:[["#000","#444","#666","#999","#ccc","#eee","#f3f3f3","#fff"],["#f00","#f90","#ff0","#0f0","#0ff","#00f","#90f","#f0f"],["#f4cccc","#fce5cd","#fff2cc","#d9ead3","#d0e0e3","#cfe2f3","#d9d2e9","#ead1dc"],["#ea9999","#f9cb9c","#ffe599","#b6d7a8","#a2c4c9","#9fc5e8","#b4a7d6","#d5a6bd"],["#e06666","#f6b26b","#ffd966","#93c47d","#76a5af","#6fa8dc","#8e7cc3","#c27ba0"],["#c00","#e69138","#f1c232","#6aa84f","#45818e","#3d85c6","#674ea7","#a64d79"],["#900","#b45f06","#bf9000","#38761d","#134f5c","#0b5394","#351c75","#741b47"],["#600","#783f04","#7f6000","#274e13","#0c343d","#073763","#20124d","#4c1130"]]});});$('body').click(function(e){if($(e.target).attr('id')!=='ds-container'&&$(e.target).parents('#ds-container').length<1){$('#ds-start .selected').removeClass('selected');$('.color-input').each(function(){$(this).closest('.pull-left').hide();});}});$('.pal').each(function(){$(this).on('click',function(){$('#ds-start .selected').removeClass('selected');$('.color-input').each(function(){$(this).closest('.pull-left').hide();});$config=paletes[$(this).data('palete')];$('#widget-color-backgroundColor').val($config['widget']['backgroundColor']);$('#widget-color-color').val($config['widget']['color']);$('#widget-color-iframe_backgroundColor').val($config['widget']['iframe_backgroundColor']);$('#chat-color-bg_color').val($config['chat']['bg_color']);$('#chat-color-btn_color').val($config['chat']['btn_color']);$('#chat-color-btn_backgroundColor').val($config['chat']['btn_backgroundColor']);$('#chat-color-received_bg').val($config['chat']['received_bg']);$('#chat-color-received_color').val($config['chat']['received_color']);$('#chat-color-sent_bg').val($config['chat']['sent_bg']);$('#chat-color-sent_color').val($config['chat']['sent_color']);$('#chat-color-seen_color').val($config['chat']['seen_color']);$('#chat-color-sending_bg').val($config['chat']['sending_bg']);$('#chat-color-sending_color').val($config['chat']['sending_color']);update_design();});});$('.color-input').each(function(){$(this).closest('.pull-left').hide();});function update_design(){$('#ds-header').css('backgroundColor',$('#widget-color-backgroundColor').val());$('#ds-container').css('backgroundColor',$('#widget-color-backgroundColor').val());$('#ds-header-text').css('color',$('#widget-color-color').val());$('#ds-frame').css('backgroundColor',$('#widget-color-iframe_backgroundColor').val());$('#ds-msg-area').css('backgroundColor',$('#chat-color-bg_color').val());$('#ds-buttons button').css('color',$('#chat-color-btn_color').val());$('#ds-buttons button').css('backgroundColor',$('#chat-color-btn_backgroundColor').val());$('#ds-msg-to').css('backgroundColor',$('#chat-color-received_bg').val());$('#ds-msg-to').css('color',$('#chat-color-received_color').val());$('#ds-msg-from').css('backgroundColor',$('#chat-color-sent_bg').val());$('#ds-msg-from').css('color',$('#chat-color-sent_color').val());$('#ds-seen').css('color',$('#chat-color-seen_color').val());$('#ds-msg-sending').css('backgroundColor',$('#chat-color-sending_bg').val());$('#ds-msg-sending').css('color',$('#chat-color-sending_color').val());}
$('#f-site-edit').on('change',function(){update_design();});update_design();$('#ds-container').on('click',function(e){if(window.e){window.e.returnValue=false;}else{e.preventDefault();}
var id=undefined;if($(e.target).attr('id')){id=$(e.target).attr('id');}else if($(e.target).parent().attr('id')){id=$(e.target).parent().attr('id');}else if($(e.target).parent().parent().attr('id')){id=$(e.target).parent().parent().attr('id');}
$('#ds-start .selected').removeClass('selected');$('#'+id).addClass('selected');$('.color-input').each(function(){$(this).closest('.pull-left').hide();});switch(id){case'msg':$('#ds-bottom').trigger('click');$('#msg').blur();break;case'ds-header':$('#ds-container').trigger('click');break;case'ds-frame-container':$('#ds-msg-area').trigger('click');break;case'ds-header-text':$('#widget-color-color').closest('.pull-left').show();break;case'ds-container':$('#widget-color-backgroundColor').closest('.pull-left').show();break;case'ds-buttons':$('#chat-color-btn_backgroundColor').closest('.pull-left').show();$('#chat-color-btn_color').closest('.pull-left').show();break;case'ds-bottom':$('#widget-color-iframe_backgroundColor').closest('.pull-left').show();break;case'ds-msg-area':$('#chat-color-bg_color').closest('.pull-left').show();break;case'ds-msg-to':$('#chat-color-received_bg').closest('.pull-left').show();$('#chat-color-received_color').closest('.pull-left').show();break;case'ds-msg-from':$('#chat-color-sent_bg').closest('.pull-left').show();$('#chat-color-sent_color').closest('.pull-left').show();break;case'ds-seen':$('#chat-color-seen_color').closest('.pull-left').show();break;case'ds-msg-sending':$('#chat-color-sending_bg').closest('.pull-left').show();$('#chat-color-sending_color').closest('.pull-left').show();break;default:$('.color-input').each(function(){$(this).closest('.pull-left').show();});break;}
update_design();});});;
$(document).ready(function(){if($('#modal-login').length){$('#modal-login').on('show.bs.modal',function(){$('#f-login')[0].reset();$('#forgotPassword').hide();$('#showForgotPassword').show();$('#f-login').find('.glyphicon-remove, .glyphicon-ok, .has-error, .has-success').each(function(){$(this).removeClass('glyphicon-remove').removeClass('glyphicon-ok').removeClass('has-success').removeClass('has-error');});$('#ml-email_confirm_div').hide();$('#ml-password_confirm_div').hide();$('#ml-btn-submit').attr("disabled","disabled");modal_login_helper_validate();modal_login_helper_email_change();$('#showForgotPassword').on('click',function(){$('#forgotPassword').show();$('#showForgotPassword').hide();});$('#f-login').on('keyup click change',function(){if($('#ml-email_confirm').is(":visible")&&$('#ml-password_confirm_div').is(":hidden")){$('#ml-password_confirm_div').slideDown();}
modal_login_helper_validate();if(window.w81==undefined||window.w81==true){window.w81=false;setTimeout(function(){modal_login_helper_validate();window.w81=true;},500);}});$('#ml-password').on('keyup',function(){if($(this).val().length>6){$(this).closest('.form-group').closest('.form-group').removeClass('has-error').addClass('has-success').find('.form-control-feedback').removeClass('glyphicon-remove').addClass('glyphicon-ok').show();}else{$(this).closest('.form-group').closest('.form-group').removeClass('has-success').addClass('has-error').find('.form-control-feedback').removeClass('glyphicon-ok').addClass('glyphicon-remove').show();}});$('#ml-password_confirm').on('keyup',function(){if($(this).val()==$('#ml-password').val()){$(this).closest('.form-group').closest('.form-group').removeClass('has-error').addClass('has-success').find('.form-control-feedback').removeClass('glyphicon-remove').addClass('glyphicon-ok').show();}else{$(this).closest('.form-group').closest('.form-group').removeClass('has-success').addClass('has-error').find('.form-control-feedback').removeClass('glyphicon-ok').addClass('glyphicon-remove').show();}});$('#ml-btn-submit').on('click',function(e){e.preventDefault();modal_login_helper_login();});$('#f-login').on('submit',function(e){e.preventDefault();modal_login_helper_login();});});function modal_login_helper_login(){modal_login_helper_validate();if($('#ml-btn-submit').is(":disabled")==false){if(window.loging_in==undefined){window.loging_in=true;$.post(config.url.home+'ajax/login',{'email':$('#ml-email').val(),'password':$('#ml-password').val(),'resolution_x':window.screen.availWidth,'resolution_y':window.screen.availHeight,'referral_id':getCookie('rf')||'-1'},function(data){if(data.response!==undefined&&data.response.email!=undefined){var t=setTimeout(function(){location.reload(true);},500);return;}else if(data.error!==undefined&&data.error.code_readable!==undefined){switch(data.error.code_readable){case'INCORRECT_PASSWORD':$('#ml-password').closest('.form-group').closest('.form-group').removeClass('has-success').addClass('has-error').find('.form-control-feedback').removeClass('glyphicon-ok').addClass('glyphicon-remove').show();alert('Neteisingas slaptažodis (Bad password)');window.loging_in=undefined;break;default:alert(data.error.hint);window.loging_in=undefined;break;}}});}}}
function modal_login_helper_validate(callback){$formIsValid=true;if($('#ml-email').val()==''||$('#ml-password').val()==''){$formIsValid=false;}
if($formIsValid&&$('#ml-email').parent('.form-group').hasClass('has-error')){$formIsValid=false;}
if($formIsValid&&$('#ml-password').closest('.form-group').closest('.form-group').hasClass('has-error')){$formIsValid=false;}
if($formIsValid&&$('#ml-email_confirm').is(":visible")){if($('#ml-email_confirm').val()==''||$('#ml-email_confirm').parent('.form-group').hasClass('has-error')){$formIsValid=false;}}
if($formIsValid&&$('#ml-password_confirm').is(":visible")){if($('#ml-password_confirm').val()==''||$('#ml-password_confirm').closest('.form-group').closest('.form-group').hasClass('has-error')){$formIsValid=false;}}
if($formIsValid==true){$('#ml-btn-submit').removeAttr('disabled');}else{$('#ml-btn-submit').attr("disabled","disabled");}
if(typeof callback=="function"){callback();}}
function modal_login_helper_email_change(){$oe=$('#ml-email').val();$('#ml-email').on('change',function(){var $email_valid=false;if(typeof this.willValidate!=="undefined"){if(this.checkValidity()){$email_valid=true;}else{$email_valid=false;}}else{var re=/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;$email_valid=re.test($(this).val());}
if($email_valid){$.post(config.url.home+'ajax/is_email_registered',{'email':$(this).val()},function(data){if(data.response!==undefined&&data.response=='registered'){$('#ml-email_confirm_div').slideUp().find('input').off('keyup');$('#ml-password_confirm_div').slideUp();}else{$('#ml-email_confirm_div').slideDown('fast').find('input').focus().on('keyup',function(){if($(this).val()==$('#ml-email').val()){$(this).parent('.form-group').removeClass('has-error').addClass('has-success').find('.form-control-feedback').removeClass('glyphicon-remove').addClass('glyphicon-ok').show();}else{$(this).parent('.form-group').removeClass('has-success').addClass('has-error').find('.form-control-feedback').removeClass('glyphicon-ok').addClass('glyphicon-remove').show();}});$('#ml-password_confirm_div').slideDown('fast');modal_login_helper_validate();}});$(this).parent('.form-group').removeClass('has-error').addClass('has-success').find('.form-control-feedback').removeClass('glyphicon-remove').addClass('glyphicon-ok').show();}else{$(this).parent('.form-group').removeClass('has-success').addClass('has-error').find('.form-control-feedback').removeClass('glyphicon-ok').addClass('glyphicon-remove').show();$('#mep-email_confirm_div').slideUp().find('input').off('keyup');modal_login_helper_validate();}});}
$m=getParameterByName('m');if($m&&$m=='modal-login'||$m=='modal-edit-profile'){$('#modal-login').modal('show');}}});;
$(document).ready(function(){if($('#f-edit-profile').length){$('#modal-edit-profile').on('show.bs.modal',function(){$('#f-edit-profile')[0].reset();$('#f-edit-profile').find('.glyphicon-remove, .glyphicon-ok, .has-error, .has-success').each(function(){$(this).removeClass('glyphicon-remove').removeClass('glyphicon-ok').removeClass('has-success').removeClass('has-error');});$('#mpe-email_confirm_div').hide();$('#mpe-password_confirm_div').hide();$('#mpe-email-confirm-taken').hide();$('#mpe-btn-submit').attr("disabled","disabled");$('#mpe-email').data('ov',$('#mpe-email').val());$('#mpe-password').data('ov',$('#mpe-password').val());$('#f-edit-profile').on('change keyup',function(){helper_edit_profile_validate();});$('#f-edit-profile').on('submit',function(e){e.preventDefault();if($('#ml-btn-submit').is(":disabled")==false){$.post(config.url.home+'ajax/update_profile',{'password':($('#mpe-password').val())?$('#mpe-password').val():'','email':($('#mpe-email').val())?$('#mpe-email').val():''},function(data){location.href='/';});}});});function helper_edit_profile_validate(){if($('#mpe-email').data('ov')!=$('#mpe-email').val()){$('#mpe-email-confirm-taken').fadeOut();$('#mpe-email_confirm_div:hidden').slideDown();var $email_valid=false;if(typeof $('#mpe-email').willValidate!=="undefined"){if($('#mpe-email').checkValidity()){$email_valid=true;}else{$email_valid=false;}}else{var re=/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;$email_valid=re.test($('#mpe-email').val());}
if($email_valid){$('#mpe-email').closest('.form-group').removeClass('has-error').addClass('has-success').find('.form-control-feedback').removeClass('glyphicon-remove').addClass('glyphicon-ok').show();if($('#mpe-email').val()!=$('#mpe-email_confirm').val()){$('#mpe-email_confirm').closest('.form-group').removeClass('has-success').addClass('has-error').find('.form-control-feedback').removeClass('glyphicon-ok').addClass('glyphicon-remove').show();}else{$.post(config.url.home+'ajax/is_email_registered',{'email':$('#mpe-email').val()},function(data){if(data.response!==undefined&&data.response=='registered'){$('#mpe-email-confirm-taken').fadeIn();$('#mpe-email_confirm').closest('.form-group').removeClass('has-success').addClass('has-error').find('.form-control-feedback').removeClass('glyphicon-ok').addClass('glyphicon-remove').show();}else{$('#mpe-email-confirm-taken').fadeOut();$('#mpe-email_confirm').closest('.form-group').removeClass('has-error').addClass('has-success').find('.form-control-feedback').removeClass('glyphicon-remove').addClass('glyphicon-ok').show();$('#mpe-email').data('ov',$('#mpe-email_confirm').val());$('#mpe-email_confirm_div').slideUp();$('#mpe-password').focus();}});}}else{$('#mpe-email').closest('.form-group').removeClass('has-success').addClass('has-error').find('.form-control-feedback').removeClass('glyphicon-ok').addClass('glyphicon-remove').show();}}else{$('#mpe-email').closest('.form-group').removeClass('has-error').addClass('has-success').find('.form-control-feedback').removeClass('glyphicon-remove').addClass('glyphicon-ok').show();$('#mpe-email_confirm_div').slideUp();}
if($('#mpe-password').data('ov')!=$('#mpe-password').val()){$('#mpe-password_confirm_div:hidden').slideDown();if($('#mpe-password').val().length<7){$('#mpe-password').closest('.form-group').closest('.form-group').removeClass('has-success').addClass('has-error').find('.form-control-feedback').removeClass('glyphicon-ok').addClass('glyphicon-remove').show();}else{$('#mpe-password').closest('.form-group').closest('.form-group').removeClass('has-error').addClass('has-success').find('.form-control-feedback').removeClass('glyphicon-remove').addClass('glyphicon-ok').show();if($('#mpe-password').val()==$('#mpe-password_confirm').val()){$('#mpe-password').data('ov',$('#mpe-password_confirm').val());$('#mpe-password_confirm').closest('.form-group').closest('.form-group').removeClass('has-error').addClass('has-success').find('.form-control-feedback').removeClass('glyphicon-remove').addClass('glyphicon-ok').show();$('#mpe-password_confirm_div').slideUp();}else{$('#mpe-password_confirm').closest('.form-group').closest('.form-group').removeClass('has-success').addClass('has-error').find('.form-control-feedback').removeClass('glyphicon-ok').addClass('glyphicon-remove').show();}}}else{$('#mpe-password').closest('.form-group').closest('.form-group').removeClass('has-error').addClass('has-success').find('.form-control-feedback').removeClass('glyphicon-remove').addClass('glyphicon-ok').show();$('#mpe-password_confirm_div').slideUp();}
$formIsValid=true;if($('#mpe-email').val()==''){$formIsValid=false;}
if($formIsValid&&$('#mpe-email').parent('.form-group').hasClass('has-error')){$formIsValid=false;}
if($formIsValid&&$('#ml-password').closest('.form-group').closest('.form-group').hasClass('has-error')){$formIsValid=false;}
if($formIsValid==true){$('#mpe-btn-submit').removeAttr('disabled');}else{$('#mpe-btn-submit').attr("disabled","disabled");}}
$m=getParameterByName('m');if($m&&$m=='modal-edit-profile'){$('#modal-edit-profile').modal('show');}}});;
$(document).ready(function(){if($('.f-coupon_discount').length){$('.f-coupon_discount').on('change',function(e){if(window.e){window.e.returnValue=false;}else{e.preventDefault();}
var $this=$(this);$input=$this.serialize();$.post(config.url.home+'ajax/coupon_update_discount',$input);});$('.f-coupon_on_off').on('change',function(e){if(window.e){window.e.returnValue=false;}else{e.preventDefault();}
var $this=$(this);$input=$this.serialize();$.post(config.url.home+'ajax/coupon_update_on_off',$input);});}});;
$(document).ready(function(){$.fn.modal.Constructor.DEFAULTS.backdrop='static';if($('#archive')){$('#archive-select').on('change',function(){window.location.replace($(this).find('option:selected').data('url'));});$('.show-session').each(function(){$(this).on('click',function(e){var $id;if($(e.target).hasClass('show-session')){$id=$(e.target).data('target');}else{$id=$(e.target).closest('.show-session').data('target');}
$('#'+$id+' .logs').slideToggle();$('#show-'+$id).toggle();$('#hide-'+$id).toggle();})});$('.notes textarea').on('keyup',function(){$('#i-'+$(this).closest('form').data('id')).fadeIn();});$('form.notes').on('submit',function(e){if(window.e){window.e.returnValue=false;}else{e.preventDefault();}
$.post($(this).attr('action'),$(this).serialize());$(this).find('input[type=submit]').fadeOut();});$('.actions .star').each(function(){$(this).on('click',function(){var $tr=$(this).closest('tr');if($tr.find('.star').hasClass('star-on')){$tr.find('.star').removeClass('star-on');$tr.find('input[name=sticky]').val('off');}else{$tr.find('input[name=sticky]').val('on');$tr.find('.star').addClass('star-on');}
$.post($(this).closest('form').attr('action'),$(this).closest('form').serialize());});});$('.actions .remove').each(function(){$(this).on('click',function(){$.post($(this).closest('form').attr('action'),$(this).closest('form').serialize());var $this=$(this),$id=$this.closest('tr').find('.show-session').data('target');$('#'+$id+' .logs').slideUp(400).delay(400).each(function(){$this.closest('tr').fadeOut(400);});});});}
if($('#app').length<1){return;}
var blinking_title_interval=null,original_title=$('title').text(),favicon=new Favico({animation:'pop'});favicon.image(document.getElementById('favicon-online'));$(window).on('focus click',function(){blink_title_for_new_message({action:'stop'});});$('.info-about-new-sessions').on('click',function(){setCookie('notification_info-about-new-sessions',1,365*24*60*60);$(this).fadeOut();});if(getCookie('notification_info-about-new-sessions')==1){$('.info-about-new-sessions').hide();}
var socket,socket_server='79.98.25.62:3000',chatHeader=document.getElementById('chat-header'),chat=document.getElementById('chat'),chatMessages=document.getElementById('chatMessages'),msg=document.getElementById('msg'),bottom=document.getElementById('chat-bottom'),last_new_msg_sound=0,rmst=null,connections_count=0;if(document.location.hostname.indexOf('.local')!==-1){socket_server='localhost:3000';}
$(window).on('beforeunload',function(e){setTimeout(function(){var $site=$('div.site');$site.each(function(){socket.emit('agent_leaves_site',{site_id:$(this).data('sid'),user:{id:$(this).data('user-id'),name:$(this).data('user-name')}});});},0);});if(/Firefox[\/\s](\d+\.\d+)/.test(navigator.userAgent)){socket=io.connect('//'+socket_server+'/',{transports:['polling']});}else{socket=io.connect('//'+socket_server+'/');}
socket.on('connect',function(data){if(connections_count>0){document.location.reload();}
connections_count++;var $t=setInterval(function(){var $site=$('div.site'),data_to_send={};$site.each(function(index){if(getCookie('toggle_cookie_'+$(this).data('sid'))==='1'){}else{socket.emit('who_is_online',{site_id:$(this).data('sid'),user:{id:$(this).data('user-id'),name:cleanUpHtml($(this).data('user-name'))}});}});},1500);socket.on('who_is_online',function(data){$(data).each(function(){if($('span.agent-'+this.site_id+'-'+this.user.id).length>0){$('span.agent-'+this.site_id+'-'+this.user.id).data('updated_at',this.updated_at);}else{$html='<span class="label label-info agent-on agent-'+this.site_id+'-'+this.user.id+' " data-uid="'+this.user.id
+'" data-updated_at="'+this.updated_at+'">'+cleanUpHtml(this.user.name)+'</span>';$('div#agents-'+this.site_id).append($html);}});$('.agent-on').each(function(){if($(this).data('updated_at')+5<Math.floor(Date.now()/1000)){$(this).remove();}});});});socket.on('disconnect',function(){});init_socket();update_sizes();init_chat();init_left_menu();init_keyboard_shortcuts();$(window).on('resize load',function(){update_sizes();});function blink_title_for_new_message(data){var title=$('title'),current_title=original_title,talking_next=1,cycle=1,symbol;if(data.action=='start'){if(blinking_title_interval!=null){return;}
blinking_title_interval=setInterval(function(){current_title=title.text();favicon.image(document.getElementById('favicon-talking-'+talking_next));talking_next=talking_next+1;if(talking_next>4){talking_next=1;cycle=cycle+1;}
if(cycle%2){symbol='?';}else{symbol='!';}
switch(talking_next){case 1:title.text(symbol+'...');break;case 2:title.text(symbol+symbol+'..');break;case 3:title.text(symbol+symbol+symbol+'.');break;case 4:title.text(symbol+symbol+symbol+symbol+'');break;}},500);}else{clearInterval(blinking_title_interval);blinking_title_interval=null;title.text(original_title);favicon.image(document.getElementById('favicon-online'));}}
function _last_message_helper(message){var $lmc=$('#lstmsg-'+message.site_id+'-'+message.session_id),$message=document.createElement('div'),text=document.createElement('div'),date=document.createElement('div'),clear=document.createElement('div');clear.style.clear='both';if($lmc.length>0){if(message.system_message===1){return;}else if(message.agent===undefined||message.agent===false){$message.className='message to';text.style.float='left';date.style.float='right';}else{$message.className='message from';text.style.float='right';date.style.float='left';}
if(message.message.length>120){text.innerText=message.message.substring(0,100)+'...';text.textContent=message.message.substring(0,100)+'...';}else{text.innerText=message.message;text.textContent=message.message;}
if(((message.created_at+(24*60*60))*1000)<new Date().getTime()){date.innerHTML='<span class="date">'+$.format.date(new Date(message.created_at*1000),'yyyy-MM-dd, HH:mm:ss')+'</span>';}else{date.innerHTML='<span class="date">'+$.format.date(new Date(message.created_at*1000),'HH:mm:ss')+'</span>';}
$message.innerText='';$message.textContent='';$message.appendChild(date);$message.appendChild(text);$message.appendChild(clear);$lmc.html($message);}}
function replaceURLWithHTMLLinks(text){var exp=/(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/ig;return text.replace(exp,"<a target='_blank' rel='nofollow' href='$1'>$1</a>");}
function cleanUpHtml(html){var tmp=document.createElement("DIV");tmp.innerHTML=html;tmp=tmp.textContent||tmp.innerText||"";return tmp;}
function _message_helper(data){var timestamp=Math.round(new Date().getTime()/1000);if(!data.site_id||!data.session_id){console.error('#x32424wf bad data.');return;}
if(data.id!==undefined&&('m-'+data.id!=='m-undefined')&&$('#m-'+data.id).length>0){console.log('#1sf1sd Warning! this message is already in chat! Double socket emission?');console.log(data.id);return;}
var $session_li=$('#s-'+data.site_id+'-'+data.session_id);if(data.system_message===1&&data.message==='session_end'){move_session($session_li,'archive',data.site_id);}else{switch($session_li.data('group')){case'visitors':if(data.system_message===undefined){move_session($session_li,'conversations',data.site_id)}
break;}}
_last_message_helper(data);if($('#chatMessages').data('active-session')==='s-'+data.site_id+'-'+data.session_id){var new_msg=document.getElementById('chatVisitorTyping'),text=document.createElement('div'),date=document.createElement('div'),clear=document.createElement('div');clear.style.clear='both';if(new_msg===null){var new_msg=document.createElement('div');}
if(data.system_message===1){new_msg.className='message system';if(data.message_data!==undefined&&data.message_data!==null&&data.message_data.length>0){switch(data.message){case'e_location':var _tmp=JSON.parse(data.message_data);if(_tmp.referrer!==''&&(new URL(_tmp.href).hostname!==new URL(_tmp.referrer).hostname)){data.message=_tmp.referrer+' » '+_tmp.href;}else{data.message=_tmp.href;}
new_msg.className+=' e_location';break;case'trigger_auto_message':new_msg.className+=' trigger_auto_message';data.message=data.message_data;break;}}else{data.message=(translation[data.message]!==undefined)?translation[data.message]:data.message;}
text.style.display='inline-block';date.style.display='inline-block';date.style.padding='0px 10px 0px 0px';}else if(data.agent===undefined||data.agent===false){new_msg.className='message to';text.style.float='left';date.style.float='right';}else{new_msg.className='message from';text.style.float='right';date.style.float='left';}
new_msg.id='m-'+data.id;text.innerHTML=replaceURLWithHTMLLinks(cleanUpHtml(data.message));if(((data.created_at+(24*60*60))*1000)<new Date().getTime()){date.innerHTML='<span class="date">'+$.format.date(new Date(data.created_at*1000),'yyyy-MM-dd, HH:mm:ss')+'</span>';}else{date.innerHTML='<span class="date">'+$.format.date(new Date(data.created_at*1000),'HH:mm:ss')+'</span>';}
new_msg.innerText='';new_msg.textContent='';if(data.name){date.innerHTML='<strong>'+cleanUpHtml(data.name)+'</strong>'+' '+date.innerHTML;}
new_msg.appendChild(date);new_msg.appendChild(text);new_msg.appendChild(clear);chatMessages.appendChild(new_msg);update_sizes();rmst=null;rmst=setTimeout(function(){socket.emit('room_messages_received',{session_id:data.session_id,site_id:data.site_id,agent:true,timestamp:Math.round(new Date().getTime()/1000)});},700);}else{var $badge=$('#b-'+data.site_id+'-'+data.session_id);if(!$badge.length){add_session(data);}
if(data.seen_at===undefined&&data.agent===false){$badge.text('!');$badge.show();}}
if(data.seen_at===undefined&&data.agent===false&&data.system_message===undefined&&(data.sound===undefined||data.sound===true)){var $volume=$('#settings-'+data.site_id).data('notification-volume'),$desktopNotifications=$('#settings-'+data.site_id).data('desktop-notifications');play_notification($volume,$desktopNotifications,data);}}
function play_notification($volume,$desktopNotifications,data_message){if($volume>0){var audio=new Audio(config.url.home+'mp3/2.mp3');if($volume>1){$volume=$volume/100;}
audio.volume=$volume;audio.play();}
if($desktopNotifications==='on'){if(typeof Notification==="undefined"){return;}
var notification=new Notification($.format.date(new Date(data_message.created_at*1000),'HH:mm:ss')+' Pagalbaklientams.lt žinutė',{body:data_message.message,icon:config.url.home+'img/notification.ico'});notification.onclick=function(x){window.focus();this.close();};notification.onshow=function(){setTimeout(function(){notification.close();},4500);};}
blink_title_for_new_message({action:'start'});}
function init_left_menu(){$('.toggle-show-site').each(function(){var $this=$(this),$site_id=$this.data('sid');if(!$site_id){return;}
$this.on('click',function(){if($this.hasClass('glyphicon-plus')){setCookie('toggle_cookie_'+$site_id,1,-1);}else{setCookie('toggle_cookie_'+$site_id,1,86400);}
document.location.reload();});});$('.visitors li').each(function(index){if($(this).data('init')===undefined){$(this).data('init',1);$(this).on('click',function(e){var data=e.target.id.split('-');if(data[0]!=='s'){$(e.target).parent().trigger('click');return false;}
$('.visitors li.active').removeClass('active');if(data[1]===undefined||data[2]==undefined){console.error('#f54423r bad data');return;}
$('#chatMessages').html('');$('#chatMessages').data('active-session',e.target.id);$('#b-'+data[1]+'-'+data[2]).fadeOut();$(e.target).addClass('active');$('#mid').fadeIn();update_sizes();var query={site_id:data[1],session_id:data[2],token:token,sound:false};socket.emit('give_agent_messages',query);$('#lstmsg-'+query.site_id+'-'+query.session_id).empty();});}});$('#load_older_archive').on('click',function(){$('#close_chat').trigger('click');var limit=$('ul.visitors li').length+20;socket.emit('get_sessions',{'token':token,'limit':limit,'offset':$('ul.visitors li').length});});}
function update_sizes(){var viewportHeight=Math.max(document.documentElement.clientHeight,window.innerHeight||0),chatHeight=viewportHeight-140-chatHeader.offsetHeight-bottom.offsetHeight;if(chatHeight<150){chatHeight=150}
chat.style.height=chatHeight+'px';chatMessages.style.top=chat.clientHeight-chatMessages.offsetHeight-10+'px';msg.style.width=chat.clientWidth+'px';}
function init_keyboard_shortcuts(){$(document).keyup(function(e){if(e.keyCode==27){$('#close_chat').trigger('click');}
if(e.keyCode==13){if($("#msg:visible").length){$("#msg").focus();}else{$('ul.visitors li:first-child').trigger('click');}}});}
function init_chat(){if(typeof Notification==="undefined"){if(!getCookie('notification_desktop_notifications')){alert('Jei norite matyti darbalaukio pranešimus apie naujas žinutes - naudokite kitą naršyklę. Pvz.: Google Chrome for Desktop');setCookie('notification_desktop_notifications',1,86400);}}else{if(Notification.permission!=="granted"){Notification.requestPermission();}}
$('#close_chat').on('click',function(){$('#mid').fadeOut();$('#chatMessages').data('active-session',false);$('.visitors li.active').removeClass('active');});msg.onkeydown=function(e){var data=$('#chatMessages').data('active-session').split('-');if(e.shiftKey===false&&e.keyCode===13){if(window.e){window.e.returnValue=false;}else{e.preventDefault();}
if(msg.value.trim()===''){return false;}
if(data[1]!==undefined||data[2]!==undefined){var emit_data={room:data[2]+''+data[1],message:msg.value,session_id:data[2],site_id:data[1],name:agent_names[data[1]],'token':token,'created_at':Math.round(new Date().getTime()/1000)};socket.emit('send',emit_data);var $session_li=$('#s-'+emit_data.site_id+'-'+emit_data.session_id);move_session($session_li,'conversations',emit_data.site_id)
emit_data.agent=true;_last_message_helper(emit_data);_message_helper(emit_data);msg.value='';}
update_sizes();}else{if(data[1]!==undefined||data[2]!==undefined){var emit_data={room:data[2]+''+data[1],message:'',session_id:data[2],site_id:data[1],name:agent_names[data[1]],'token':token,'created_at':Math.round(new Date().getTime()/1000)};socket.emit('typing',emit_data);}}};if(chat.addEventListener){chat.addEventListener("mousewheel",MouseWheelHandler,false);chat.addEventListener("DOMMouseScroll",MouseWheelHandler,false);}
else{chat.attachEvent("onmousewheel",MouseWheelHandler);}
$(document).scroll(function(){$('#mid').css('marginTop',window.pageYOffset+'px');});function MouseWheelHandler(e){var e=window.event||e,delta=Math.max(-1,Math.min(1,(e.wheelDelta||-e.detail)))*55,zero=chat.clientHeight-chatMessages.offsetHeight,current=chatMessages.style.top.replace('px',''),new_value=(parseInt(current)+parseInt(delta));if(new_value<(zero-10)){new_value=zero-10;}
else if(new_value>(chat.clientHeight-75)){new_value=chat.clientHeight-75;}
chatMessages.style.top=new_value+'px';if(window.e){window.e.returnValue=false;}else{e.preventDefault();}
return false;}}
function add_session(data){if(data.session_id===undefined||data.site_id===undefined){console.error('#2c42sd bad data:');console.error(data);return;}
if($('#visitors-'+data.site_id).length===0){console.error('#df24432 no website where new session should be added.');console.log(data);return;}
$session=document.createElement('li');$session.className='list-group-item';$session.id='s-'+data.site_id+'-'+data.session_id;$session.innerHTML='<span id="st-'+data.site_id+'-'+data.session_id+'">'+_getSessionTitle(data)+'</span>'+' (IP:&nbsp;'+data.user_ip+')';if($('#'+$session.id).length>0){console.error('#asf4 this id is already taken!: '+$session.id);return;}
$badge=document.createElement('span');$badge.className='badge';$badge.id='b-'+data.site_id+'-'+data.session_id;$badge.style.display='none';$badge.innerText='';$badge.textContent='';$session.appendChild($badge);$lastMessage=document.createElement('div');$lastMessage.innerText='';$lastMessage.textContent='';$lastMessage.id='lstmsg-'+data.site_id+'-'+data.session_id;$lastMessage.className='s-last-message';$session.appendChild($lastMessage);$('#visitors-'+data.site_id).append($session);$($session).data('group','visitors');$($session).data('timestamp',data.updated_at);init_left_menu();}
function _getSessionTitle(data){var title='';if(data.name||data.email||data.phone){if(data.name){title+=data.name;}
if(data.email){if(data.name){title+=', ';}
title+=data.email;}
if(data.phone){if(data.name||data.email){title+=', ';}
title+=data.phone;}}else{title=window.translation['session_title'];}
return title;}
function move_session(session_dom_li,target,site_id){if(session_dom_li.data('group')===target){return;}
switch(target){case'conversations':if(session_dom_li.data('group')==='archive'){return;}
var element=session_dom_li.detach();$('#chats-'+site_id).prepend(element);session_dom_li.data('group',target);break;case'archive':var element=session_dom_li.detach();break;}}
function init_socket(){socket.emit('get_sessions',{'token':token});socket.on('get_sessions',function(data){if(getCookie('toggle_cookie_'+data.site_id)==='1'){return;}
socket.emit('agent_got_session',data);var session_dom_id=data.site_id+'-'+data.session_id;if($('#s-'+session_dom_id).length===0){add_session(data);socket.emit('subscribe',{'token':token,'session_id':data.session_id,'site_id':data.site_id,'room':data.session_id+''+data.site_id});}});socket.on('add_contacts',function(data){$('#st-'+data.site_id+'-'+data._id).html(_getSessionTitle(data));});socket.on('message',function(data){if(getCookie('toggle_cookie_'+data.site_id)==='1'){return;}
_message_helper(data);});socket.on('end_session',function(session){});socket.on('typing',function(data){if(!data.site_id||!data.session_id){console.error('#x32424wf bad data.');return;}
if($('#chatMessages').data('active-session')==='s-'+data.site_id+'-'+data.session_id){var typing=document.getElementById('chatVisitorTyping');if(typing){if(data.message===''){$(typing).remove();return;}
typing.innerText=data.message;typing.textContent=data.message;}else{if(data.message===''){return;}
var new_msg=document.createElement('div');if(data.agent===undefined||data.agent===false){new_msg.className='message to';}else{new_msg.className='message from';}
new_msg.innerText=data.message;new_msg.textContent=data.message;new_msg.id='chatVisitorTyping';chatMessages.appendChild(new_msg);}
update_sizes();}});}});;
$(document).ready(function(){$('#snackbar').hide();$(document).ajaxStart(function(){if($('#snackbar:visible')){$('#snackbar').slideUp();}
$('#snackbar').html(translation['ajax_loading']);$('#snackbar').slideDown();});$(document).ajaxComplete(function(event,xhr,settings){$('#snackbar').slideUp();});$('#snackbar').on('click',function(){$('#snackbar').clearQueue().slideUp();});$('#snackbar').css('margin-left',-$('#snackbar').outerWidth()/2);$.fx.speeds._default=250;$.fn.modal.Constructor.DEFAULTS.backdrop='static';$('.toggle-password').each(function(){$(this).on('click',function(){$target=$(this).data('target');if($('#'+$target).attr('type')=='password'){$(this).removeClass('glyphicon-eye-open').addClass('glyphicon-eye-close');$('#'+$target).attr('type','text');}else{$(this).removeClass('glyphicon-eye-close').addClass('glyphicon-eye-open');$('#'+$target).attr('type','password');}});});$.fn.modal.Constructor.DEFAULTS.backdrop='static';$(window).on('resize load',function(){$('.center').each(function(){$(this).css({'margin-left':($('body').width()-$(this).width())/2,'margin-top':(window.innerHeight-$(this).height())/4});});});var _t1=setInterval(function(){if(getCookie('ut')){$.post(config.url.home+'ajax/refresh_token',{},function(data){if(data.response===undefined||data.response.email===undefined||(data.error!==undefined&&data.error!==null)){window.location.href=config.url.home;}});}},1800000);$('#saved').on('click',function(){$(this).clearQueue().fadeOut();});$('.btn_print').on('click',function(){$('.print-hide').hide();$('#'+$(this).data('id')).printThis();var _t=setTimeout(function(){$('.print-hide').fadeIn();},2000);});$('#service-agreement-print').on('click',function(){$('#'+$(this).data('id')).printThis();});if($('#cf-cf').length>0){$('#contact-form-name').on('change',function(){if(!this.checked){$('#contact-form-name-required').prop('checked',false);}});$('#contact-form-email').on('change',function(){if(!this.checked){$('#contact-form-email-required').prop('checked',false);}});$('#contact-form-phone').on('change',function(){if(!this.checked){$('#contact-form-phone-required').prop('checked',false);}});$('#contact-form-name-required').on('change',function(){if(this.checked){$('#contact-form-name').prop('checked',true);}});$('#contact-form-email-required').on('change',function(){if(this.checked){$('#contact-form-email').prop('checked',true);}});$('#contact-form-phone-required').on('change',function(){if(this.checked){$('#contact-form-phone').prop('checked',true);}});}
$('#confirm-delete').on('show.bs.modal',function(e){$(this).find('.btn-danger').attr('href',$(e.relatedTarget).data('href'));});$.material.init();$.material.input();$.material.radio();});function getParameterByName(name){name=name.replace(/[\[]/,"\\[").replace(/[\]]/,"\\]");var regex=new RegExp("[\\?&]"+name+"=([^&#]*)"),results=regex.exec(location.search);return results===null?"":decodeURIComponent(results[1].replace(/\+/g," "));}
function getCookie(cname){var name=cname+"=",ca=document.cookie.split(';'),i,c,ca_length=ca.length;for(i=0;i<ca_length;i+=1){c=ca[i];while(c.charAt(0)===' '){c=c.substring(1);}
if(c.indexOf(name)!==-1){return c.substring(name.length,c.length);}}
return"";}
function setCookie(variable,value,expires_seconds){var d=new Date();d=new Date(d.getTime()+1000*expires_seconds);document.cookie=variable+'='+value+'; expires='+d.toGMTString()+';';};
