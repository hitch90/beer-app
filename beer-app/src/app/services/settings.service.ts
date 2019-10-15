import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class SettingsService {
  private subject = new Subject<any>();

  saveSettings(options: object) {
    localStorage.setItem('options', JSON.stringify(options));
    this.subject.next( options );
  }

  clearSettings() {
    this.subject.next();
  }

  getSettings(): Observable<any> {
    const options = JSON.parse(localStorage.getItem('options'));
    if(options) {
      this.subject.next(options);
    }
    return this.subject.asObservable();
  }
}
