import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {

heroes:string[] =['Spiderman','Hulk','Deadpool','Moordor','Morbidus']
heroeBorrado:string='';

deleteHeroe() {
  this.heroeBorrado=this.heroes.shift() ||"";

}



}
