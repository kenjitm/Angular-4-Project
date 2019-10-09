import { Component, OnInit } from '@angular/core';
import * as USUARIOS from './../assets/data/Usuario.json';
import { Usuario } from 'src/app/_interfaces/usuario.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  usuarios: Usuario[];
  title = 'Proyecto';
  panelOpenState = false;
  actionCard = "";
  actionAccordeon = "";
  usuario: Usuario;
  Step = 0;

  ngOnInit() {
    this.usuarios = (USUARIOS as any).dato;
    console.log(this.usuarios);
  }

  desactivar(usuario: Usuario){
    usuario.estado = false;
  }

  activarUsuario(usuario: Usuario){
    usuario.estado = true;
  }

  obtenerColor(estado: boolean){
    let color = 'green';
    if(estado){
      color = 'blue';
    }else{
      color = 'red';
    }
    return color;
  }

  mostrarDatos(i: number){
    this.Step = 1;
  }

  cambiarEstado(usuarioR: Usuario) {
    console.log(usuarioR.cedula);

    if (usuarioR.estado == true) {
      this.actionCard = "Desactivar";
      this.actionAccordeon = "Activar";
      this.usuario.estado = false;
      this.usuarios[usuarioR.id].estado = false;
    } else {
      this.actionCard = "Activar";
      this.actionAccordeon = "Desactivar"
      this.usuario.estado = true;
      this.usuarios[usuarioR.id].estado = true;
    }
  }
}


