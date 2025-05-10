import { Injectable } from '@angular/core';

export enum StorageKeys {
  tasks = "tasks"
}


@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  addItem(key:StorageKeys,item:any) {
    localStorage.setItem(key,JSON.stringify(item));
  }

  getItem(key:StorageKeys) {
    if(localStorage.getItem(key)) {
      return JSON.parse(localStorage.getItem(key) as string);
    } 
    return null;
  }

  removeItem(key:StorageKeys) {
    localStorage.removeItem(key);
  }
}
