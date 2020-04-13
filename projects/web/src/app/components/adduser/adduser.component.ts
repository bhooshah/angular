import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'web-adduser',
  template: `
    <app-adduser (addedUser)="addedUser($event.detail)">
    </app-adduser>
  `,
  styles: [
  ],
})
export class AdduserComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  addedUser(added: boolean) {
    console.log(added);
  }
}
