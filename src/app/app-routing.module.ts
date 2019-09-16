import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormularioComponent } from './formulario/formulario.component';
import { TablaComponent } from './tabla/tabla.component';
import { CardComponent } from './card/card.component';
import { VentaComponent } from './venta/venta.component';
import { PaqueteriaComponent } from './paqueteria/paqueteria.component';


const routes: Routes = [
  {path:'formulario', component:FormularioComponent},
  {path:'tabla', component:TablaComponent},
  {path:'card', component:CardComponent},
  {path:'venta', component:VentaComponent},
  {path:'paqueteria', component:PaqueteriaComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
