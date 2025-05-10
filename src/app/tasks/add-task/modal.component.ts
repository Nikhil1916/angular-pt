import { CommonModule } from '@angular/common';
import { Component , EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NewTaskData } from '../task.model';

@Component({
  selector: 'app-add-task',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss'
})
export class ModalComponent {
  @Input() isOpen:boolean = false;
  @Output() close = new EventEmitter<boolean>();
  @Output() addTask = new EventEmitter<NewTaskData>();
  title= "";
  summary = "";
  dueDate = "";
  closeModal() {
    this.close.emit(false);
  }

  onSubmit() {
    this.addTask.emit({
      title:this.title,
      summary:this.summary,
      dueDate:this.dueDate
    })
  }
}
