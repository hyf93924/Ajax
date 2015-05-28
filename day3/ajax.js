function Ajax(recvType){
	//声明一个对象
	var aj = new Object();
	//判断是HTML还是XML
	aj.recvType = recvType ? recvType.toUpperCase() : 'HTML';
	aj.targetUrl = '';          //目标url
	aj.sendString = '';         //发送的字符串
	aj.resultHandle = null;

	//引擎对象的方法
	aj.createXMLHttpRequest=function(){
		var request = false;
		//非IE, XMLHttpRequest
		if(window.XMLHttpRequest){
			request = new XMLHttpRequest();

			if(request.overrideMimeType){
				request.overrideMimeType("text/xml");
			}


		//IE, ActiveXObject
		}else if(window.ActiveXObject){
			var versions=['Microsoft.XMLHTTP','MSXML.XMLHTTP','Msxml2.XMLHTTP.7.0','Msxml2.XMLHTTP.6.0','Msxml2.XMLHTTP.5.0','Msxml2.XMLHTTP.4.0','MSXML2.XMLHTTP.3.0','MSXML2.XMLHTTP'];
			//循环
			for(var i=0; i<versions.length; i++){
				try{
					request = new ActiveXObject(versions[i]);

					if(request){
						return request;
					}
				}catch(e){
					request=false;
				}
			}
		}
		return request;
	}
	aj.XMLHttpRequest = aj.createXMLHttpRequest();

	//processHandle方法
	aj.processHandle=function(){
		if(aj.XMLHttpRequest.readyState == 4){                   //状态准备完成
			if(aj.XMLHttpRequest.status == 200){
				if(aj.recvType=="HTML"){
					aj.resultHandle(aj.XMLHttpRequest.responseText);
				}else if(aj.recvType=="XML"){
					aj.resultHandle(aj.XMLHttpRequest.responseXML);
				}
			}
		}
	}
	//get方法:需要参数: 目标url和回调函数
	aj.get=function(targetUrl, resultHandle){
		aj.targetUrl = targetUrl;
		if(resultHandle!=null){
			aj.XMLHttpRequest.onreadystatechange = aj.processHandle;   //如果回调函数不为空就触发事件并调用processHandle方法
			aj.resultHandle = resultHandle;
		}
		//如果没有回调函数，直接请求地址
		if(window.XMLHttpRequest){       //非IE系列浏览器
			aj.XMLHttpRequest.open("get", aj.targetUrl);
			aj.XMLHttpRequest.send(null);
		}else{                           //IE系列浏览器
			aj.XMLHttpRequest.open("get", aj.targetUrl, true);
			aj.XMLHttpRequest.send();
		}
	}

	//post方法：需要参数：目标url、发送字符串和回调函数
	aj.post=function(targetUrl, sendString, resultHandle){
		aj.targetUrl = targetUrl;
		//判断是否为object对象
		if(typeof(sendString)=="object"){
			//遍历对象输出
			var str = "";
			for(var pro in sendString){
				str += pro+"="+sendString[pro]+"&";
			}
			aj.sendString = str.substr(0, str.length-1);     //去除最后一个&
		}else{
			aj.sendString = sendString;
		}

		if(resultHandle!=null){
			aj.XMLHttpRequest.onreadystatechange = aj.processHandle;   //如果回调函数不为空就触发事件并调用processHandle方法
			aj.resultHandle = resultHandle;
		}
		aj.XMLHttpRequest.open("post",aj.targetUrl);
		aj.XMLHttpRequest.setRequestHeader("Content-Type","application/x-www-form-urlencoded");    //post方法必写
		aj.XMLHttpRequest.send(aj.sendString);
	}

	return aj;
}