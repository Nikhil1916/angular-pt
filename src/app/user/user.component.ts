import { Component, computed, EventEmitter, input, Input, Output } from '@angular/core';
type User = {
  name: string,
  avatar: string,
  id:string
};
@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss',
})
export class UserComponent {
  @Input() user:User | undefined;
  @Output() selected = new EventEmitter();

  onSelect() {
    this.selected.emit(this.user?.id);
  }
}
