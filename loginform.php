<html>
<head>
	<meta http-equiv="content-type" content="text/html; charset=UTF-8" />
	<title>[AWG] DayZ HIVE Admin</title>
	<link rel="stylesheet" type="text/css" href="css/hive_admin.css" />
</head>

<body OnLoad="document.loginform.username.focus();">
<?php
//session_start();
//require("session.php");
?>

<div id="head">
	-=[AWG]=-<br />DayZ HIVE Admin
</div>
<br />
<div id="main">

<center>
	<br /><br /><br /><br /><br /><br /><br /><br /><br />
	<form id='loginform' name='loginform' action='login.php' method='POST'>			
			<h2>Username</h2>
			<input id='username' type='text' name='username'>
			<h2>Password</h2>
			<input type='password' name='password'>
			<br />
			<input type='submit' name='Login' value='login'>
	</form>
</center>
<br/><br/>

</div>

</body>
</html>
