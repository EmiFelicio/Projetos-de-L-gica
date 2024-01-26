function mostrarSenha() {
    var passwordInput = document.getElementById('senha');
    var oOlho = document.getElementById('olho');

    //Vai mudar o type do input de 'password' para 'text'
    if(passwordInput.type == 'password') {
        passwordInput.type ='text'

        //Vai trocar o nome da classe do botão de verificar senha
        oOlho.classList.add('bi-eye-slash-fill');
        oOlho.classList.remove('bi-eye-fill');
    } else {
        passwordInput.type = 'password';
        oOlho.classList.add('bi-eye-fill');
        oOlho.classList.remove('bi-eye-slash-fill');
      }
}
