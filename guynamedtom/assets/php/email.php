<?php

require_once('mailer/class.phpmailer.php');

$mail = new PHPMailer(true); // the true param means it will throw exceptions on errors, which we need to catch


$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];
$break = "<br>";

try {
  $mail->AddAddress('thomasehorner@gmail.com', 'Thomas Horner');
  $mail->Subject = 'New message from your website from ' . $name;
  $mail->AltBody = 'To view the message, please use an HTML compatible email viewer!'; // optional - MsgHTML will create an alternate automatically
  $mail->Body = ("From: $name <br> E-Mail: $email <br> Message: $message");
  $mail->Send();
} catch (phpmailerException $e) {
  echo $e->errorMessage(); //Pretty error messages from PHPMailer
} catch (Exception $e) {
  echo $e->getMessage(); //Boring error messages from anything else!
}
?>
