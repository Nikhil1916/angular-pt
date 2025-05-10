import { Injectable } from '@angular/core';
import { dummyTasks } from '../../assets/constants/dummy-tasks';
import { Task } from './task.model';
import { StorageService , StorageKeys } from '../shared/services/storage.service';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  constructor(private storeS:StorageService) {
      this.DUMMY_TASK = this.storeS.getItem(StorageKeys.tasks) || dummyTasks;
      // console.log(this.storeS.getItem(StorageKeys.tasks)this.DUMMY_TASK);
      storeS.addItem(StorageKeys.tasks, this.DUMMY_TASK);

   }
  private DUMMY_TASK!:Array<Task>;

  getUserTask(userId:string) {
    const tasks = this.storeS.getItem(StorageKeys.tasks) || [];
    this.DUMMY_TASK = tasks;
    return tasks?.filter((_:any)=>_.userId == userId);
  }

  addTask(task:Task) {
    this.DUMMY_TASK.unshift(task);
    this.storeS.addItem(StorageKeys.tasks, this.DUMMY_TASK);
  }

  completeTask(id:string) {
    this.DUMMY_TASK = this.DUMMY_TASK.filter(_=>_?.id!=id);
    this.storeS.addItem(StorageKeys.tasks, this.DUMMY_TASK);
  }
}
