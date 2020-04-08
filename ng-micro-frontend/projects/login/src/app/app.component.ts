import { Component, OnInit, Output, EventEmitter, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DbService } from 'projects/db/src/public-api';

@Component({
  selector: 'app-login',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class AppComponent implements OnInit {
  title = 'login';
  loginForm: FormGroup;
  invalidUser = false;
  @Output() userVerify = new EventEmitter<boolean>();

  constructor(
    private formBuilder: FormBuilder,
    private dbService: DbService
  ) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  get f() {
    return this.loginForm.controls;
  }

  submit(loginForm: FormGroup) {
    if (loginForm.invalid) {
      return false;
    }
    this.dbService.validUser(loginForm.value).subscribe(x => {
      if (x) {
        this.invalidUser = false;
        this.loginForm.reset();
        this.userVerify.emit(true);  // We used string here because we will find easily with angular element
      } else {
        this.invalidUser = true;
        this.userVerify.emit(false);
      }
    });
  }

}
