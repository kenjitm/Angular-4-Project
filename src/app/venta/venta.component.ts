import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FormBuilder, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-venta',
  templateUrl: './venta.component.html',
  styleUrls: ['./venta.component.css']
})
export class VentaComponent implements OnInit {
  options: FormGroup;
  valor = new FormControl('');
  nombre = new FormControl('');
  cedula = new FormControl('');
  cantidad = new FormControl('');
  medida = new FormControl('');
  modelo = new FormControl('');
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
    console.log(this.modelo.value);
    if (this.modelo.value == 'modeloA') {
      this.precioUnitario = 345.50;
    }
   
    if (this.modelo.value == 'modeloB') {
      this.precioUnitario = 298.70;
    }

    if (this.modelo.value == 'modeloC') {
      this.precioUnitario = 246.00;
    }

    if (this.medida.value == 'medida8') {
      this.precioUnitario = this.precioUnitario;
    }

    if (this.medida.value == 'medida9') {
      this.precioUnitario = this.precioUnitario + 10;
    }

    if (this.medida.value == 'medida10') {
      this.precioUnitario = this.precioUnitario + 20;
    }
    this.unidad.setValue('$' +  this.precioUnitario);
    this.total.setValue('$' +  this.precioUnitario * this.cantidad.value);
  }

}
