# Ajax
ajax对象

##### 第一天，了解ajax并创建一个ajax对象   
---
##### ajax对象要分IE系列浏览器和非IE系列浏览器    
- IE系列：存在ActiveXObject就是IE系列的浏览器，实现起来分IE版本比肩复杂   
- 非IE系列：存在XMLHttpRequest就是非IE系列浏览器    

---
##### IE系列浏览器版本代码：   
`var versions=['Microsoft.XMLHTTP','MSXML.XMLHTTP','Msxml2.XMLHTTP.7.0','Msxml2.XMLHTTP.6.0','Msxml2.XMLHTTP.5.0','Msxml2.XMLHTTP.4.0','MSXML2.XMLHTTP.3.0','MSXML2.XMLHTTP'];`   
   
   
---
   
##### 第二天，完成对服务器的请求    
    
    
##### 主要依据ajax中内置的几个函数来实现：   
- onreadystatechange：时间触发器   
- readyState：对象响应
- status：浏览器状态
- responseText 和 responseXML   
   

##### 使用GET传输时：   
`ajax.open("get","service.php?username=kefeng"+Math.random(), true);   
 ajax.send(null);`    
##### 注意使用POST传输时一定要使用：`ajax.setRequestHeader("Content-Type","application/x-www-form-urlencoded");`   
`//post传输   
ajax.open("post","service.php", true);   
//设置头信息，指定编码方式   
ajax.setRequestHeader("Content-Type","application/x-www-form-urlencoded");   
ajax.send("username=heyifeng&email=kefeng.hyf@gmail.com");`   
   
##### 效果图：   
![ajax](https://github.com/hyf93924/Ajax/blob/master/day2/%E7%81%AB%E7%8B%90%E6%88%AA%E5%9B%BE_2015-05-27T04-24-20.643Z.png)   
   
   ---
##### 第三天，主要是讲ajax生成一个js文件，在真正使用的时候只需要调用这个js文件即可   
##### ajax.js文件主要同过三种方法实现：createXMLHttpRequest、get和post   
- createXMLHttpRequest就是demo.html中的createAjax方法   
- get方法中需要用到targetUrl(目标url）和resultHandle(回调函数)两个参数   
- post方法中的参数比get多一个sendString(发送的字符串)   
   
##### 自己先看着代码，然后自己再练着敲几次就明白ajax.js的原理了   
- 另外test.html是为了测试ajax.js用的   
- user.html是用户名的测试文件，username.php是服务端取得的数据   
   
##### 效果图:   
![user](https://github.com/hyf93924/Ajax/blob/master/day2/%E7%81%AB%E7%8B%90%E6%88%AA%E5%9B%BE_2015-05-28T15-28-06.354Z.png)
---
##### 其实ajax.js文件就是这样了，只要理解在html文件中如何使用ajax.js即可

