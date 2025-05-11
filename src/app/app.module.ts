import { NgModule } from '@angular/core';
import { UserComponent } from './user/user.component';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SharedModule } from './shared/shared.module';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { TaskModule } from './tasks/tasks.module';

@NgModule({
  declarations: [
    UserComponent,
    AppComponent,
    HeaderComponent
  ],
  imports: [CommonModule, FormsModule,BrowserModule,SharedModule,TaskModule],
  bootstrap:[AppComponent]
})
export class AppModule {}
