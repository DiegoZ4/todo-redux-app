import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { TodoAddComponent } from './todo-add/todo-add.component';
import { TodoFooterComponent } from './todo-footer/todo-footer.component';
import { TodoItemrComponent } from './todo-itemr/todo-itemr.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoPageComponent } from './todo-page/todo-page.component';
import { FiltroPipe } from './filtro.pipe';



@NgModule({
  declarations: [TodoAddComponent, TodoFooterComponent, TodoItemrComponent, TodoListComponent, TodoPageComponent, FiltroPipe],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    TodoPageComponent
  ]
})
export class TodoModule { }
