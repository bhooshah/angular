import { Component, OnInit } from '@angular/core';
import { DbService } from 'db';

@Component({
  selector: 'app-listuser',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'listuser';
  allUsers: any[];

  constructor(private dbService: DbService) { }

  ngOnInit() {
    this.dbService.getAllUsers().subscribe( allUsers => {
      this.allUsers = allUsers;
    });
  }
  deleteUser(id: number) {
    // this.allUsers = this.allUsers.filter(u => {
    //   console.log(u)
    //   return u['id'] !== id;
    // });
    this.dbService.deleteUser(id).subscribe( remainUsers => {
      this.allUsers = remainUsers;
    });
  }
  editUser(data: any) {
    this.dbService.editUserData = data;
    // this.router.navigate(['./edit']);
    // console.log(data);
  }
}
