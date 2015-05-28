<?php
header("Content-Type:text/html;charset=utf-8");
$mysqli = new mysqli("localhost", "root", "heyifeng19930924", "xsphpdb");
$result = $mysqli->query("select * from xs_user where username='{$_POST["username"]}'");
if($result->num_rows > 0){
	echo "<font color='red'>用户{$_POST['username']}已经存在</font>";
}else{
	echo "<font color='green'>用户{$_POST['username']}</font>";
}