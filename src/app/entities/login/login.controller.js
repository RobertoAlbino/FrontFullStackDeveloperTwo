export default class LoginController {

  constructor($uibModal, $location, Restangular, toastrService) {
    this.$uibModal = $uibModal;
    this.$location = $location;
    this.Restangular = Restangular;
    this.toastrService = toastrService; 
  }

   logar() {
    if (!this.loginValido()) {
      toastr.error("Nem todas as informações de login estão corretas.");
      return;
    }
    
    let logar = this.Restangular.all("login/logar");
    logar.post(this.login).then((retornoLogin) => {
      if (retornoLogin.sucesso) {
        this.armazenarLocalmenteUsuarioLogado(retornoLogin);
        retornoLogin.objeto.perfil === "USUARIO" ? this.$location.path('menu-usuario') : this.$location.path('menu-fornecedor');
      } else {
        this.toastrService.erro(retornoLogin.mensagem);
      }
    });
  }

  loginValido() {
    return this.login.email || this.login.senha ? true : false;
  }

  armazenarLocalmenteUsuarioLogado(retornoLogin) {
    window.localStorage.setItem('usuarioLogado', JSON.stringify(retornoLogin.objeto.id));
  }
}

LoginController.$inject = [
  '$uibModal',
  '$location',
  'Restangular',
  'toastrService'
];