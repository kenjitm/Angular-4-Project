import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FormBuilder, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-paqueteria',
  templateUrl: './paqueteria.component.html',
  styleUrls: ['./paqueteria.component.css']
})
export class PaqueteriaComponent implements OnInit {
  options: FormGroup;
  valor = new FormControl('');
  nombre = new FormControl('');
  cedula = new FormControl('');
  cantidad = new FormControl('');
  medida = new FormControl('');
  zona = new FormControl('');
  precioEjecutivo = 345.50;
  precioPremier = 298.70;
  precioEmperador = 246.00;
  precioUnitario = 0;
  unidad = new FormControl('');
  total = new FormControl('');
  constructor(fb: FormBuilder) {
    this.options = fb.group({
      hideRequired: false,
      floatLabel: 'auto',
    });
  }

  ngOnInit() {
  }

  onNombre() {
    console.log(this.valor.value);
    this.valor.setValue("Prueba");
  }

  calcularPrecio() {
    console.log(this.zona.value);
    if (this.zona.value == 'zona1') {
      this.precioUnitario = 3800;
    }
   
    if (this.zona.value == 'zona2') {
      this.precioUnitario = 3100;
    }

    if (this.zona.value == 'zona3') {
      this.precioUnitario = 2900;
    }

    if (this.zona.value == 'zona4') {
      this.precioUnitario = 4200;
    }

    if (this.zona.value == 'zona5') {
      this.precioUnitario = 5300;
    }

    this.precioUnitario = this.precioUnitario * (this.cantidad.value);

    if ((this.cantidad.value /1000) >= 5) {
      //Alert
    }
    this.unidad.setValue('$' +  this.precioUnitario);
  }

}
