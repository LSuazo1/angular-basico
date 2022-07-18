import { Component, EventEmitter, Input,Output, OnInit } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styles: [
  ]
})
export class AgregarComponent{

  constructor(private dbzService:DbzService){}

  @Input() nuevo:Personaje= {
    nombre: '',
    poder: 0
  }

  // @Output() onNuevoPersonaje:EventEmitter<Personaje> =new EventEmitter();

  agregar() {
    if (this.nuevo.nombre.trim().length === 0) {
      return;
    }

    // this.onNuevoPersonaje.emit(this.nuevo);  

    this.dbzService.agregarPersonaje(this.nuevo);

    this.nuevo = {
      nombre: '',
      poder: 0
    }

    
  }


}
