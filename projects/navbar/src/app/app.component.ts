import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'navbar';
  @Output() navigate = new EventEmitter<string>();

  constructor() { }

  logout() {
    sessionStorage.clear();
    this.navigate.emit('logout');
  }

  navigateto(link: string) {
    this.navigate.emit(link);
  }
}
