import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DbService } from 'db';

@Component({
  selector: 'app-adduser',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  addForm: FormGroup;
  invalidUser = false;
  title = 'Add User';
  btnCap = 'Add';
  @Output() addedUser = new EventEmitter<boolean>(false);

  constructor(
    private formBuilder: FormBuilder,
    public dbService: DbService
  ) { }

  ngOnInit() {
    this.addForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  get f() {
    return this.addForm.controls;
  }

  addData(addForm: FormGroup) {
    if (addForm.invalid) {
      return false;
    }
    this.dbService.addUser(addForm.value).subscribe(x => {
      if (x) {
        this.addedUser.emit(true);
      }
    });
  }

}
