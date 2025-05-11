import { Component , EventEmitter, inject, Input, Output } from '@angular/core';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss'
})
export class ModalComponent {
  @Input({required:true}) userId!:string;
  @Input() isOpen:boolean = false;
  @Output() close = new EventEmitter<boolean>();
  private taskS = inject(TasksService);
  title= "";
  summary = "";
  dueDate = "";
  closeModal() {
    this.close.emit(false);
  }

  onSubmit() {
    this.taskS.addTask({
      title:this.title,
      summary:this.summary,
      dueDate:this.dueDate,
      userId:this.userId,
      id:new Date().getTime().toString(),
    });
    this.closeModal();
  }
}
