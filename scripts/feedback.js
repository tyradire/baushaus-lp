const formSubmit = document.getElementById('feedback-form');

formSubmit.onsubmit = function(){
  var http = new XMLHttpRequest();
  http.open("POST", "contacts.php", true);
  http.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  console.log(this.namecl.value, this)
  http.send("namecl=" + this.namecl.value +"&phonecl=" + this.phonecl.value + "&emailcl=" + this.emailcl.value + "&textcl=" + this.textcl.value );
  http.onreadystatechange = function() {
    if (http.readyState == 4 && http.status == 200) {
      alert(http.responseText + 'Ваше сообщение получено.\nНаши специалисты ответят Вам.\nБлагодарим за интерес!');
    }
  }
  http.onerror = function() {
    alert('Извините, данные не были переданы');
  }
  return false;
}