import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormularioComponent } from './formulario/formulario.component';
import { TablaComponent } from './tabla/tabla.component';
import { CardComponent } from './card/card.component';


const routes: Routes = [
  {path:'formulario', component:FormularioComponent},
  {path:'tabla', component:TablaComponent},
  {path:'card', component:CardComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
