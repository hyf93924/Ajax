<?php
header("Content-Type: text/html;charset=utf-8	");

/*请求
$str = "{$_POST['username']}---{$_POST['email']}\n";
$file = fopen("save.txt","a");
fwrite($file, $str);
fclose();
*/

//从服务器读取
$str = "{$_POST['username']}---{$_POST['email']}\n";
echo "###".$str."###";

$arr = array("one"=>"111111","two"=>"222222","three"=>"333333");
echo json_encode($arr);

?>