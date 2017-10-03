function check_info() {
  var nome = document.getElementById('nome').value;
  var sobrenome = document.getElementById('sobrenome').value;
  var cpf = document.getElementById('cpf').value;
  var telefone = document.getElementById('telefone').value;
  
  if (nome == "" || sobrenome == "" || cpf == "" || telefone == ""){
    alert('Complete os campos obrigatorios(*)')
    return false;
  }
  else{
    return true;
  }
  
}
