import {Component, OnInit} from '@angular/core';
import {UserService} from "../../services/user.service";

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [],
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss'
})
export class UsersComponent implements OnInit{


constructor(private userApi : UserService) {
}


  ngOnInit() {
  this.userApi.getUsers().subscribe(data => console.log(data))
  }




}
