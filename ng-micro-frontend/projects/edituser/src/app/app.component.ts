import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DbService } from 'db';

@Component({
  selector: 'app-updateuser',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  updateForm: FormGroup;
  title = 'Edit User';
  btnCap = 'Update';
  @Output() updatedUser = new EventEmitter<boolean>(false);

  constructor(
    private formBuilder: FormBuilder,
    public dbService: DbService
  ) { }

  ngOnInit() {
    this.updateForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  get f() {
    return this.updateForm.controls;
  }

  updateData(updateForm: FormGroup) {
    if (updateForm.invalid) {
      return false;
    }
    // this.dbService.editUserData(updateForm.value).subscribe(x => {
    //   if (x) {
    //     this.updatedUser.emit(true);
    //   }
    // });
  }

}
