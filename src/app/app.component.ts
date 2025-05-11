import { Component } from '@angular/core';
import { DUMMY_USERS } from '../assets/constants/dummy-users';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'project';
  DUMMY_USERS = DUMMY_USERS;
  selectedUser:any;
  selectedUserFnc(event:any)   {
    this.selectedUser = DUMMY_USERS.find(_=>_.id == event);
  }
}
