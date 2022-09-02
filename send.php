<?php
  /* Здесь проверяется существование переменных */
  if (isset($_POST['namecl'])) {$phone = $_POST['name'];}
  if (isset($_POST['emailcl'])) {$emailcl = $_POST['email'];}
  if (isset($_POST['phonecl'])) {$name = $_POST['phone'];}
  
  /* Сюда впишите свою эл. почту */
  $myaddres  = "tyradire@yandex.ru"; // кому отправляем
   
  /* А здесь прописывается текст сообщения, \n - перенос строки */
  $mes = "Тема: Заказ обратного звонка!\nТелефон: $phonecl\nПочта: $emailcl\nИмя: $namecl";
   
  /* А эта функция как раз занимается отправкой письма на указанный вами email */
  $sub='Заказ'; //сабж
  $email='Заказ обратного звонка'; // от кого
  $send = mail ($myaddres,$sub,$mes,"Content-type:text/plain; charset = utf-8\r\nFrom:$email");
   
  ini_set('short_open_tag', 'On');
  header('Refresh: 3; URL=index.html');
  ?>