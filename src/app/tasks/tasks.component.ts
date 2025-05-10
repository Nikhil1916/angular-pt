import { Component, input } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { dummyTasks } from '../../assets/constants/dummy-tasks';
import { ModalComponent } from "./add-task/modal.component";
import { NewTaskData } from './task.model';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, ModalComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.scss'
})
export class TasksComponent {
  user = input.required<any>();
  DUMMY_TASKS = dummyTasks;
  isCreateTask:boolean = false;
  get selectedUserTasks() {
    return this.DUMMY_TASKS.filter((_:any)=>_.userId == this.user().id);
  }

  completeTask(id:string) {
    this.DUMMY_TASKS = this.DUMMY_TASKS.filter(_=>_.id!=id);
  }

  addTask() {
    this.isCreateTask = true;
  }

  closeTaskCreation() {
    this.isCreateTask = false;
  }
  onAddTask(data:NewTaskData) {
    this.DUMMY_TASKS.unshift({
      ...data,
      userId:this.user()?.id,
      id:new Date().getTime().toString(),
    });
    this.isCreateTask = false;
  }
}
