import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {SettingsService} from '../../services/settings.service';

@Component({
  selector: 'app-options',
  templateUrl: './options.component.html',
  styleUrls: ['./options.component.scss']
})
export class OptionsComponent implements OnInit {
  @Output() close: EventEmitter<void> = new EventEmitter();
  darkTheme = localStorage.getItem('theme') || 'false';
  perPage = 15;
  sortBy = 'name';
  constructor(private settingsService: SettingsService) {
    const options = localStorage.getItem('options');
    if (options) {
      const optObj = JSON.parse(options);
      this.perPage = optObj.perPage;
      this.sortBy = optObj.sortBy;
    }
  }

  ngOnInit() {
    this.setTheme(!(this.darkTheme == 'false'));
  }

  toggleDarkTheme({ checked }) {
    this.darkTheme = checked;
    localStorage.setItem('theme', checked);
    this.setTheme(checked);
  }

  /*
    false is light theme, true is dark theme
   */
  setTheme(theme) {
    const bodyClass = document.querySelector('body').classList;
    if(theme) {
      bodyClass.add('dark-theme');
    } else {
      bodyClass.remove('dark-theme');
    }
  }

  onSave() {
    this.settingsService.saveSettings({ perPage: this.perPage, sortBy: this.sortBy })
    this.close.emit();
  }

  onClose() {
    this.close.emit();
  }
}
