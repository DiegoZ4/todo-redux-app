import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { Todo } from '../models/todo.model';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducer';
import * as actions from '../todo.actions';

@Component({
  selector: 'app-todo-itemr',
  templateUrl: './todo-itemr.component.html',
  styleUrls: ['./todo-itemr.component.css']
})
export class TodoItemrComponent implements OnInit {
  
  @Input() todo: Todo;
  @ViewChild('inputFisico', {static: false}) txtInputFisico: ElementRef;
  
  chkCompletado: FormControl;
  txtInput: FormControl;

  editando: boolean = false;

  constructor(
    private store:Store<AppState>
  ) { }
 
  ngOnInit() {

    this.chkCompletado = new FormControl(this.todo.completado);
    this.txtInput = new FormControl(this.todo.texto, Validators.required);
    
    this.chkCompletado.valueChanges
        .subscribe( valor => {
          console.log(this.todo.id)
          console.log( valor);
          this.store.dispatch( actions.toggle({id:this.todo.id}) )
        })
  }

  editar() {

    this.editando = true;
    this.txtInput.setValue( this.todo.texto );
    
    setTimeout( () => {
      this.txtInputFisico.nativeElement.select();
    }, 1);
    

  }

  terminar() {
    this.editando = false;
    
    if ( this.txtInput.invalid ) { return; }
    if ( this.txtInput.value === this.todo.texto ) { return; }

    this.store.dispatch(
      actions.editar({
        id: this.todo.id, 
        texto: this.txtInput.value 
      })
    )
  }

  borrar() {
    this.store.dispatch(actions.borrar({ id: this.todo.id }));
  }

}
