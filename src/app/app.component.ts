import { Component, OnInit } from '@angular/core';
import * as USUARIOS from './../assets/data/Usuario.json';
import { Usuario } from 'src/app/_interfaces/usuario.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  usuarios: Usuario[];
  title = 'Proyecto';
//
  ngOnInit(){
    this.usuarios = USUARIOS as any;
    console.log(this.usuarios);
  }
}


