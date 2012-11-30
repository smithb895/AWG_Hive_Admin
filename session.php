<?php
@session_start();
if (!$_SESSION['user_id'])
{
	//echo '<script language="javascript">document.location = "loginform.php";</script>';
	header("location:loginform.php");
};
?>
