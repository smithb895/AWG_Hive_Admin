<?php
@session_start();
if (!$_SESSION['login'])
{
	//echo '<script language="javascript">document.location = "loginform.php";</script>';
	header("location: ../loginform.php");
};
?>
