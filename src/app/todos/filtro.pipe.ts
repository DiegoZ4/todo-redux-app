import { Pipe, PipeTransform } from '@angular/core';
import { Todo } from './models/todo.model';
import { filtrosValidos } from '../filtro/filtro.actions';

@Pipe({
  name: 'filtro'
})
export class FiltroPipe implements PipeTransform {

  transform(todos: Todo[], filtro: filtrosValidos): any {
    console.log(filtro);
    
     switch( filtro ) {
      
      case 'completados':
        return todos.filter( todo => todo.completado );
      
      case 'pendientes':
        return todos.filter( todo => !todo.completado );
      
      default:
        return todos;

     }

  }

}
