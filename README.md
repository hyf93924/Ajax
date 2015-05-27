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
![ajax](https://github.com/hyf93924/Ajax/blob/master/%E7%AC%AC%E4%BA%8C%E5%A4%A9/%E7%81%AB%E7%8B%90%E6%88%AA%E5%9B%BE_2015-05-27T04-24-20.643Z.png)   
   
   ---


