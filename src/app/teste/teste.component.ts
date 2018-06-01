import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-teste',
  templateUrl: './teste.component.html',
  styleUrls: ['./teste.component.scss']
})
export class TesteComponent implements OnInit {

  title = "Olá teste";
  foto = 'favicon.ico';
  nome = "Everton";
  pessoas:string [] = ['Everton', 'Walker' , 'Teste'];
  listas:string [] = ['conteúdo' , 'conteúdo 2'];
  vermelho ="red";
  numero = 0;
  habilitadorBotao: boolean = false;
  idade: number;

  constructor() { }

  ngOnInit() {
  }

  msgAlerta (): void{
    alert('Chamar o método');
  }

  getValor(): Boolean{
    return true;
  }

  incrementarNumero () : void{
    this.numero++;
  }

  digitou($event): void {
    console.log("Digitou a tecla" + JSON.stringify($event));
  }

  validarSenha(valor:String):void{
      if(valor.length > 5) {
        this.habilitadorBotao = true;
      } else {
        this.habilitadorBotao = false;
      }
  }

  gravarSenha(senha: string) : void {
    alert("Senha salva com sucesso : " + senha);
  }

  adicionar(conteudo: string) : void {
    this.listas.push(conteudo);
  }

  verIdade(valor : number ): void {
    let ano = new Date();
    this.idade = ano.getFullYear() - valor;
  }

}
