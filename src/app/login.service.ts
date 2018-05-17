import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class LoginService {

  constructor(private router: Router) { }

  error : String;

  validaUsuario(login, senha){
    if(login == '123' && senha == '123'){
      this.router.navigate(['/home']);
      this.error = null;
    }
    else{
      this.error = 'Usuário e senha incorretos' ;
    }
  }

}
