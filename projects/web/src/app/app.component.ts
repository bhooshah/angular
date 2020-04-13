import { Component, Renderer2, Inject, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'web-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  title = 'Website';
  authenticated = false;

  constructor(
    private renderer2: Renderer2,
    @Inject(DOCUMENT) private document: Document
  ) {
  }

  ngOnInit() {
    const s = this.renderer2.createElement('script');
    s.type = 'text/javascript';
    s.src = './assets/js/adduser-element.js';
    s.text = ``;
    this.renderer2.appendChild(this.document.body, s);
  }

  userValid(userValid: boolean) {
    this.authenticated = userValid;
  }

  addedUser(added: boolean) {
    console.log(added);
  }

  navigateto(route: string) {
    console.log(route);
  }
}
