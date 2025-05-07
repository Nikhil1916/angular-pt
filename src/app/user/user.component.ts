import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { User } from './user.model';
@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss',
})
export class UserComponent implements OnChanges {
  @Input() user:User | undefined;
  @Input() selecteUserId!:string;
  @Output() selected = new EventEmitter();

  onSelect() {
    this.selected.emit(this.user?.id);
  }

  ngOnChanges(changes: SimpleChanges): void {
      console.log(this.selecteUserId, this.user);
  }
}
