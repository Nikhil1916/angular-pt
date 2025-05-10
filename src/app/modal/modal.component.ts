import { CommonModule } from '@angular/common';
import { Component , EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss'
})
export class ModalComponent {
  @Input() isOpen:boolean = false;
  @Output() close = new EventEmitter<boolean>();
  closeModal() {
    this.close.emit(false);
  }
}
