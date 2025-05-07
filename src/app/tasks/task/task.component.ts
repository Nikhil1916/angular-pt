import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from '../task.model';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [],
  templateUrl: './task.component.html',
  styleUrl: './task.component.scss'
})
export class TaskComponent {
  @Input() Task!:Task;
  @Output() completedTaskId = new EventEmitter<any>();
  completeTask() {
    this.completedTaskId.emit(this.Task.id);
  }
}
