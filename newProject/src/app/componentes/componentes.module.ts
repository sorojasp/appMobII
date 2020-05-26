import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HeaderComponent} from './header/header.component'
import {CardVehiculoComponent} from './card-vehiculo/card-vehiculo.component'

@NgModule({
  declarations: [HeaderComponent, CardVehiculoComponent],//aquí se declaran los componentes  y las pages que le pertenecen al modulo 
  imports: [
    CommonModule
  ], 
  exports:[HeaderComponent, CardVehiculoComponent]
})
export class ComponentesModule { }
