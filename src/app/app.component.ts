import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { UserComponent } from "./user/user.component";
import { DUMMY_USERS } from '../assets/constants/dummy-users';
import { CommonModule } from '@angular/common';
import { TasksComponent } from "./tasks/tasks.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, UserComponent, CommonModule, TasksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'project';
  DUMMY_USERS = DUMMY_USERS;
  selectedUser:any;
  selectedUserFnc(event:any)   {
    console.log(event);
    this.selectedUser = DUMMY_USERS.find(_=>_.id == event);
    console.log(this.selectedUser);
  }
}
