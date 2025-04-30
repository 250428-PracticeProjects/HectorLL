import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserServiceService } from '../../services/user-service.service';
import { User } from '../../models/User';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrl: './update-user.component.css'
})
export class UpdateUserComponent implements OnInit{
  userId: number | null = null;
  user:User={
    idUser:0,
    name:'',
    lastName:'',
    address:''
  };
  private userservice = inject(UserServiceService);
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.userId = +params['id'];
      if (this.userId) {
        this.loadUserData(this.userId);
      }
    });
  }
  handleCLick(user:User){
  console.log("handling click for user "+user.idUser);
  }

  loadUserData(id: number): void {
this.userservice.getUserById(id).subscribe(data => {
this.user = data;
});
}

}
