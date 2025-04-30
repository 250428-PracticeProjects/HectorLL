import { Component, inject, OnInit } from '@angular/core';
import { UserServiceService } from '../../services/user-service.service';
import { User } from '../../models/User';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {

  private userService = inject(UserServiceService);
  public users: User[] = [];
  ngOnInit() {
  this.loadUsers();
  }

  loadUsers(){
    console.log("Executing function");
    this.userService.getUsers().subscribe(data => {
      this.users = data;
    });
  }

  editUser(id:number){
    console.log("Editing user with id: " + id);
    // Navigate to the update user component with the id
  }

}
