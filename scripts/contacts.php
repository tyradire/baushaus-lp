<?
if (array_key_exists('emailcl', $_POST)) {
     $to = 'poe.tyradire@yandex.ru';
   $subject = 'Заявка с '.$_SERVER['HTTP_REFERER'];
   $subject = "=?utf-8?b?". base64_encode($subject) ."?=";
   $message = "Имя: ".$_POST['namecl']."\r\n";
   $message .= "Телефон: " .$_POST['phonecl']."\r\n";
   $message .= "Email: ".$_POST['emailcl']."\r\n";
   $message .= "Комментарий: ".$_POST['textcl']."\r\n";
   $headers = 'Content-type: text/plain; charset="utf-8"';
   $headers .= "MIME-Version: 1.0\r\n";
   $headers .= "Date: ". date('D, d M Y h:i:s O') ."\r\n";

   mail($to, $subject, $message, $headers);
}
?>