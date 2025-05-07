import { Component, input } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { dummyTasks } from '../../assets/constants/dummy-tasks';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.scss'
})
export class TasksComponent {
  user = input.required<any>();
  DUMMY_TASKS = dummyTasks;
  get selectedUserTasks() {
    return this.DUMMY_TASKS.filter((_:any)=>_.userId == this.user().id);
  }

  completeTask(id:string) {
    this.DUMMY_TASKS = this.DUMMY_TASKS.filter(_=>_.id!=id);
  }
}
