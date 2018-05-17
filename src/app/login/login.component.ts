import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LoginService } from '../login.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  login : string;
  senha : string;

  constructor(private loginService: LoginService) { }

  ngOnInit() {
  }

  validaUsuario(){
      this.loginService.validaUsuario(this.login, this.senha);
    }
  }



