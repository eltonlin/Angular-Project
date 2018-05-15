import { Injectable } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { Router } from '@angular/router';

@Injectable()

export class FinanceiroService {

  mensagem : string ;

  constructor(private router: Router) { }

  logIn(login, senha) {
    if (login == '123' && senha =='123' ){
      this.router.navigate(['/financas']);
      this.mensagem = null;
    }else{
      this.mensagem = 'Login e senha Errados';
    }
  }


}
