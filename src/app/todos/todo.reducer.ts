import { createReducer, on, State } from '@ngrx/store';
import { crear, toggle, editar, borrar, toogleAll, limpiar } from './todo.actions';
import { Todo } from './models/todo.model';
 
export const estadoInicial: Todo[] = [
    new Todo('Vender Panchos en Lafe'),
    new Todo('Mirar el partido de Ferro'),
    new Todo('Trabar la puerta'),
    new Todo('Cortar cebolla de verdeo')
];
 
const _todoReducer = createReducer(estadoInicial,
  on(crear, (state, { texto }) => [...state, new Todo( texto)]),
  
  on(limpiar, state => state.filter( todo => !todo.completado)),

  on( borrar, (state, { id } ) => state.filter( todo => todo.id !== id ) ),

  on( toogleAll, (state, { completado }) => state.map( todo => {

    return {
      ...todo,
      completado: completado
    }
  }) ),

  on(toggle, (state, { id }) => {
    // console.log(id)
    return state.map( todo => {
      // console.log(todo)
      if( todo.id == id ) {
        return {
          ...todo,
          completado: !todo.completado
        }
      }else{
        return todo
      }
      
    });
  }),

  on(editar, (state, { id, texto }) => {
    // console.log(id)
    return state.map( todo => {
      // console.log(todo)
      if( todo.id == id ) {
        return {
          ...todo,
          texto: texto
        }
      }else{
        return todo
      }
      
    });
  })
  
);
 
export function todoReducer(state, action) {
  return _todoReducer(state, action);
}