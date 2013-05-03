<?php
//include("config.php");
//require("session.php");

//session_start();
require_once("login_connect.php");
$username = $_POST['username'];
$password = $_POST['password'];

if ($username && $password)
{
	//$dbhandle = loginconnect();
	$qry = $dbhandle2->prepare('SELECT hive_password,salt,salt2,id FROM hive_admins WHERE hive_user=?');
	$qry->execute(array($username));
	$result = $qry->fetch(PDO::FETCH_NUM);
	$dbpass = $result[0];
	$salt = $result[1];
	$salt2 = $result[2];
	$id = $result[3];
	$passwordcheck = hash('sha512', $salt . $password . $salt2);
	
	if ($dbpass == null)
	{
		die("Wrong password or username");
	};
	if ($dbpass == $passwordcheck)
	{
		@session_start();
		$_SESSION['login'] = $username;
		//$qry = $dbhandle->prepare('SELECT `group` FROM ADMINS WHERE user=?');
		//$qry->execute(array($username));
		//$dbgroup = $qry->fetchColumn();
		//$_SESSION['group'] = $dbgroup;
		//echo '<script type="text/javascript">document.location = "index.php";</script>';
		header("location:index.php");
		die();
		//echo "correct pass";
	};
	$dbhandle2 = null;
} else {
	die("Wrong password or username");
};
?>