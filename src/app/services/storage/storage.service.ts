import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  setItem(key: string, value) {
    localStorage.setItem(key, value);
  }

  getItem(key: string) {
    return localStorage.getItem(key);
  }

  removeItem(key: string) {
    localStorage.removeItem(key);
  }

  setObject(key: string, value) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  getObject(key: string) {
    return JSON.parse(localStorage.getItem(key));
  }

  clear() {
    localStorage.clear();
  }
}
