import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";
import {UserService} from "../../services/user.service";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-user-details',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.scss'
})
export class UserDetailsComponent implements OnInit{

  response : any
  constructor(private activatedRoute : ActivatedRoute, private userApi : UserService) {
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params:Params) => {
      const uuid = params['uuid']
      if(uuid) {
        this.userApi.getUser(uuid).subscribe(data => {
          this.response = data
        })
      }



    })
  }


}
