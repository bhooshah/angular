import { Component } from '@angular/core';

@Component({
  selector: 'web-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Website';
  authenticated = false;

  userValid(userValid: boolean) {
    this.authenticated = userValid;
  }
  addedUser(added: boolean){
    console.log(added);
  }
}
