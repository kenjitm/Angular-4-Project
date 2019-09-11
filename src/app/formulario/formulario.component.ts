import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  nombre = new FormControl('');
  constructor() { }

  ngOnInit() {
  }

  onNombre(){
    console.log(this.nombre.value);
    this.nombre.setValue("Prueba");
  }

}
