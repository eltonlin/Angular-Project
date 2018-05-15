import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  login : string ;
  senha : string ;
  mensagem : string;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
  }

  
}
