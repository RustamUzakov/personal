<?php 
	include("config.php");


	$Name=$_POST['inputFn'];
	$Email=$_POST['inputEmail'];
	$Message=$_POST['inputMess'];

	echo $Name;
echo "<hr style='border:solid 1px red;'/>";
	echo $Email;
echo "<hr style='border:solid 1px red;'/>";
	echo $Message;



$sql = "INSERT into visitors (Name,Email,Message) VALUES('".$Name."','".$Email."','".$Message."')";


echo "<hr style='border:solid 1px red;'/>";
echo $sql;

if($conn->query($sql)===TRUE){
	echo "New record created successfully";
}else{
	echo "Error: " . $sql . "<br>" . $conn->error;
}


 ?>
