import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  has(key: string): boolean {
    return this.get(key) ? true : false;
  }
  set(key: string, value: string) {
    localStorage.setItem(key, value);
  }
  get(key: string): string {
    return <string>localStorage.getItem(key);
  }
  remove(key: string) {
    localStorage.removeItem(key);
  }
  clear() {
    localStorage.clear();
  }
  appendToArray(key: string, newItem: any): void {
    const existingArray = this.has(key) ? JSON.parse(this.get(key)) : [];
    existingArray.push(newItem);
    this.set(key, JSON.stringify(existingArray));
  }
}
