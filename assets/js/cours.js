function Number(){
  var number1= document.getElementById("firstNumber").value;
  var number2= document.getElementById("secondNumber").value;
  var regex = /^[0-9]+[.1][0-9]+$/;
  if((regex.test(number1) == true) && (regex.test(number2) == true)){
    alert(parseInt(number1)*number2);
  }else{
    alert('N\'intégrez que des chiffres à virgule dans votre saisie');
  }
}
