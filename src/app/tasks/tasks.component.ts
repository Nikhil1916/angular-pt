import { Component, input } from '@angular/core';
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.scss'
})
export class TasksComponent {
  constructor(private taskS:TasksService) {
    
  }
  user = input.required<any>();
  isCreateTask:boolean = false;

  get selectedUserTasks() {
    return this.taskS.getUserTask(this.user().id);
  }

  addTask() {
    this.isCreateTask = true;
  }

  closeTaskCreation() {
    this.isCreateTask = false;
  }

  removeTask(id:string) {
    this.taskS.completeTask(id);
  }
}
