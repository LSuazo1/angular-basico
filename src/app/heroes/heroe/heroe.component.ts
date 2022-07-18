import { Component } from '@angular/core';

@Component({
    selector: 'app-heroe',
    templateUrl: './heroe.components.html'
})

export class HeroeComponent{
  nombre:string ='Iroman'
  edad:number =45

  get nombreCapitalizado():string{
    return this.nombre.toUpperCase();
  }

  obtenerNombre():string{
    return `${this.nombre} - ${this.edad}`
  }

  cambiarNombre():void{
    this.nombre='Spiderman';
  }

  cambiarEdad():void{
    this.edad=30
  }
}