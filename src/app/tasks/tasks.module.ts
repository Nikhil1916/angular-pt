import { NgModule } from "@angular/core";
import { TasksComponent } from "./tasks.component";
import { TaskComponent } from "./task/task.component";
import { ModalComponent } from "./add-task/modal.component";
import { SharedModule } from "../shared/shared.module";
import { CommonModule } from "@angular/common";

@NgModule({
    declarations:[TasksComponent, TaskComponent, ModalComponent],
    imports: [SharedModule, CommonModule],
    exports: [TasksComponent]
})
export class TaskModule {};